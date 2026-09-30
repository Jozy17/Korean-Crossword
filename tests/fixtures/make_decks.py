"""Builds the small Anki test decks in this folder (legacy and Anki 2.1.50+ formats).

Run: python3 tests/fixtures/make_decks.py   (needs: pip install zstandard)
"""
import json, os, sqlite3, tempfile, zipfile
import zstandard

HERE = os.path.dirname(os.path.abspath(__file__))
SEP = '\x1f'
CARDS = [
    ('<b>사과</b> [sound:sagwa.mp3]', 'apple', '아침에 사과를 먹었어요.'),
    ('먹다 (meokda)', 'to eat<br>to have (a meal)', '저는 밥을 먹어요.'),
    ('도서관', 'library', '책을 빌리러 도서관에 가요.'),
    ('책', 'book', ''),
    ('저는 학생이에요', 'I am a student', ''),
]


def legacy(path):
    fd, db_path = tempfile.mkstemp()
    os.close(fd)
    db = sqlite3.connect(db_path)
    db.execute('CREATE TABLE col (id integer, models text, decks text)')
    models = {'1111': {'name': 'Korean Vocab', 'flds': [{'name': 'Korean'}, {'name': 'English'}, {'name': 'Example'}]}}
    decks = {'1': {'name': 'Default'}, '2222': {'name': 'Korean::Beginner'}}
    db.execute('INSERT INTO col VALUES (1, ?, ?)', (json.dumps(models), json.dumps(decks)))
    db.execute('CREATE TABLE notes (id integer, mid integer, flds text, tags text)')
    db.execute('CREATE TABLE cards (id integer, nid integer, did integer)')
    for i, card in enumerate(CARDS):
        db.execute('INSERT INTO notes VALUES (?, 1111, ?, ?)', (i + 1, SEP.join(card), ' vocab '))
        db.execute('INSERT INTO cards VALUES (?, ?, 2222)', (i + 1, i + 1))
    db.commit()
    db.close()
    with zipfile.ZipFile(path, 'w') as z:
        z.write(db_path, 'collection.anki2')
        z.writestr('media', '{}')
    os.remove(db_path)


def modern(path):
    """Anki 2.1.50+ layout: zstd-compressed collection.anki21b with separate tables."""
    fd, db_path = tempfile.mkstemp()
    os.close(fd)
    db = sqlite3.connect(db_path)
    db.execute('CREATE TABLE col (id integer, models text, decks text)')
    db.execute("INSERT INTO col VALUES (1, '', '')")
    db.execute('CREATE TABLE fields (ntid integer, ord integer, name text)')
    for ord_, name in enumerate(['Front', 'Back']):
        db.execute('INSERT INTO fields VALUES (5, ?, ?)', (ord_, name))
    db.execute('CREATE TABLE decks (id integer, name text)')
    db.execute('INSERT INTO decks VALUES (9, ?)', ('Korean' + SEP + 'Food',))
    db.execute('CREATE TABLE notes (id integer, mid integer, flds text, tags text)')
    db.execute('CREATE TABLE cards (id integer, nid integer, did integer)')
    rows = [('kimchi', '김치'), ('rice cake soup', '떡국'), ('&nbsp;fruit', '과일&nbsp;')]
    for i, (front, back) in enumerate(rows):
        db.execute('INSERT INTO notes VALUES (?, 5, ?, ?)', (i + 1, SEP.join([front, back]), ''))
        db.execute('INSERT INTO cards VALUES (?, ?, 9)', (i + 1, i + 1))
    db.commit()
    db.close()
    raw = open(db_path, 'rb').read()
    os.remove(db_path)
    with zipfile.ZipFile(path, 'w') as z:
        z.writestr('collection.anki21b', zstandard.ZstdCompressor().compress(raw))
        z.writestr('collection.anki2', b'placeholder for old Anki versions')


legacy(os.path.join(HERE, 'legacy.apkg'))
modern(os.path.join(HERE, 'modern.apkg'))

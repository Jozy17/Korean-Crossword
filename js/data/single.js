/*
 * One-syllable words for the 한 글자 (one-block) game.
 * Same line format as words.js:  korean | english | categories | Korean definition | example
 * Words that are also in your Duolingo course get the "duolingo" topic (see DUO below).
 */
(function (root) {
  var RAW = {};

  RAW[1] = `
책|book|home,work|글이나 그림을 인쇄해서 묶은 것|도서관에서 {책}을 빌렸어요.
밥|cooked rice; meal|food|쌀로 지은 음식|아침에 {밥}을 먹었어요.
물|water|food,nature|마시거나 씻을 때 쓰는 투명한 액체|목이 말라서 {물}을 마셨어요.
집|house, home|home|사람이 사는 건물|저녁에 {집}에 가요.
차|car; tea|transport,food|바퀴가 있어 사람이 타고 다니는 것|{차}를 타고 출근해요.
눈|eye; snow|body,nature|얼굴에서 보는 일을 하는 부분|동생은 {눈}이 커요.
손|hand|body|팔 끝에 있어 물건을 잡는 부분|밥 먹기 전에 {손}을 씻으세요.
발|foot|body|다리 끝에 있어 땅을 딛는 부분|많이 걸어서 {발}이 아파요.
코|nose|body|얼굴 가운데 있어 냄새를 맡는 부분|감기에 걸려서 {코}가 막혔어요.
입|mouth|body|밥을 먹고 말을 하는 얼굴의 부분|{입}을 크게 벌리세요.
귀|ear|body|소리를 듣는 머리 양쪽의 부분|{귀}가 아파서 병원에 갔어요.
목|neck; throat|body|머리와 몸통을 잇는 부분|감기 때문에 {목}이 아파요.
팔|arm; eight|body|어깨에서 손까지의 부분|무거운 짐을 들어서 {팔}이 아파요.
몸|body|body|사람이나 동물의 전체|운동을 해서 {몸}이 건강해요.
배|stomach; boat; pear|body,food,transport|가슴 아래에 있는 몸의 앞부분|많이 먹어서 {배}가 불러요.
키|height; key|body|사람이 서 있을 때의 높이|동생은 {키}가 커요.
문|door|home|드나들 때 열고 닫는 것|{문}을 닫아 주세요.
방|room|home|집 안에서 벽으로 나눈 곳|제 {방}은 작아요.
옷|clothes|shopping|몸에 입는 것|새 {옷}을 샀어요.
돈|money|shopping|물건을 살 때 내는 것|{돈}을 많이 벌고 싶어요.
값|price|shopping|물건을 사고 내는 돈의 양|이 가방은 {값}이 비싸요.
원|won (Korean currency)|shopping|한국 돈을 세는 단위|이 사과는 천 {원}이에요.
꽃|flower|nature|식물에 피는 예쁜 부분|봄에 {꽃}이 피었어요.
산|mountain|nature,places|땅이 높이 솟은 곳|주말에 {산}에 올라갔어요.
강|river|nature,places|물이 길게 흘러가는 넓은 곳|{강}에서 배를 탔어요.
비|rain|nature|하늘에서 떨어지는 물방울|우산을 가져가세요. {비}가 와요.
해|sun; year|nature,time|낮에 하늘에서 빛나는 것|아침에 {해}가 떴어요.
달|moon; month|nature,time|밤하늘에 뜨는 둥근 것|오늘 밤에는 {달}이 밝아요.
별|star|nature|밤하늘에 반짝이는 작은 빛|시골 밤하늘에 {별}이 많아요.
개|dog|nature|'멍멍' 하고 짖는 동물|우리 집 {개}는 하얀색이에요.
새|bird; new|nature|날개가 있어 하늘을 나는 동물|나무 위에서 {새}가 노래해요.
소|cow|nature|'음매' 하고 우는 큰 동물|{소}가 풀을 먹어요.
말|horse; words, language|nature,society|사람이 타고 달리는 큰 동물|제주도에서 {말}을 탔어요.
곰|bear|nature|몸집이 크고 꿀을 좋아하는 동물|동물원에서 {곰}을 봤어요.
쥐|mouse, rat|nature|고양이가 잡는 작은 동물|부엌에 {쥐}가 나타났어요.
닭|chicken|nature,food|'꼬끼오' 하고 우는 새|{닭}이 알을 낳았어요.
뱀|snake|nature|다리가 없고 몸이 긴 동물|산에서 {뱀}을 봤어요.
빵|bread|food|밀가루로 구워 만든 음식|아침에 {빵}과 우유를 먹어요.
떡|rice cake|food|쌀가루를 쪄서 만든 한국 음식|설날에 {떡}을 먹어요.
국|soup|food|물을 많이 넣고 끓인 음식|밥과 {국}을 같이 먹어요.
술|alcohol, liquor|food|마시면 취하는 음료|아버지는 {술}을 안 드세요.
쌀|rice (uncooked)|food|밥을 짓는 곡식|{쌀}을 씻어서 밥을 해요.
귤|tangerine|food|겨울에 먹는 작고 주황색인 과일|겨울에는 {귤}이 맛있어요.
감|persimmon|food|가을에 익는 주황색 과일|가을에 {감}을 땄어요.
콩|bean, soybean|food|두부를 만드는 작은 알갱이|{콩}으로 두부를 만들어요.
꿀|honey|food|벌이 모은 달콤한 것|차에 {꿀}을 넣었어요.
김|dried seaweed (laver)|food|바다에서 나는 얇고 까만 음식|{김}에 밥을 싸 먹어요.
맛|taste, flavor|food|혀로 느끼는 달고 짠 느낌|이 음식은 {맛}이 좋아요.
죽|rice porridge|food|쌀을 묽게 오래 끓인 음식|아플 때는 {죽}을 먹어요.
껌|chewing gum|food|씹기만 하고 삼키지 않는 단 것|수업 시간에 {껌}을 씹으면 안 돼요.
컵|cup|home,food|물을 따라 마시는 그릇|{컵}에 물을 따랐어요.
잔|cup, glass|food|술이나 차를 마시는 작은 그릇|커피 한 {잔} 주세요.
표|ticket|transport|타거나 들어갈 때 사는 종이|기차 {표}를 샀어요.
길|road, way|transport,places|사람이나 차가 다니는 곳|{길}을 잃어버렸어요.
역|station|transport,places|기차나 지하철이 서는 곳|{역} 앞에서 만나요.
짐|luggage, load|transport|옮기거나 가지고 다니는 물건|{짐}이 너무 무거워요.
층|floor, story|places|건물의 높이를 나눈 단위|사무실은 삼 {층}에 있어요.
곳|place|places|어떤 일이 있는 자리|여기는 조용한 {곳}이에요.
앞|front|places|얼굴이 향한 쪽|학교 {앞}에서 기다릴게요.
뒤|back, behind|places|등이 향한 쪽|제 {뒤}에 서세요.
옆|side, next to|places|왼쪽이나 오른쪽 가까이|제 {옆}에 앉으세요.
위|top, above|places|어떤 것보다 높은 쪽|책상 {위}에 책이 있어요.
밖|outside|places|어떤 곳의 바깥|{밖}에 비가 와요.
안|inside; not|places|어떤 곳의 속|가방 {안}에 지갑이 있어요.
공|ball|activities|차거나 던지며 노는 둥근 것|아이들이 {공}을 차요.
춤|dance|activities|음악에 맞춰 몸을 움직이는 것|언니는 {춤}을 잘 춰요.
팀|team|activities|같이 일하거나 경기하는 사람들|우리 {팀}이 이겼어요.
팬|fan (supporter)|activities,people|가수나 선수를 좋아하는 사람|저는 그 가수의 {팬}이에요.
랩|rap (music)|activities|빠르게 말하듯이 부르는 노래|그 가수는 {랩}을 잘해요.
팝|pop music|activities|미국이나 영국의 대중음악|저는 {팝}을 자주 들어요.
상|award, prize; table|activities|잘한 사람에게 주는 것|대회에서 {상}을 받았어요.
잠|sleep|home,body|눈을 감고 쉬는 상태|어젯밤에 {잠}을 못 잤어요.
꿈|dream|feelings|잘 때 보는 것, 이루고 싶은 것|제 {꿈}은 의사예요.
밤|night; chestnut|time|해가 진 뒤 어두운 때|{밤}에 별을 봤어요.
낮|daytime|time|해가 떠 있는 동안|{낮}에는 더워요.
봄|spring|time,nature|겨울 다음에 오는 따뜻한 계절|{봄}에 꽃이 피어요.
날|day|time|해가 뜨고 지는 하루|오늘은 좋은 {날}이에요.
주|week|time|월요일부터 일요일까지 칠 일 동안|다음 {주}에 만나요.
때|time, when|time|어떤 일이 일어나는 시간|어릴 {때} 서울에 살았어요.
시|hour, o'clock|time|하루를 스물넷으로 나눈 때를 세는 단위|지금 몇 {시}예요?
분|minute|time|한 시간을 예순으로 나눈 것|오 {분}만 기다려 주세요.
월|month|time|한 해를 열둘로 나눈 것|삼 {월}에 학교가 시작해요.
년|year|time|열두 달|일 {년} 동안 한국에 살았어요.
번|number; time(s)|time|일의 차례나 횟수|한 {번} 더 말해 주세요.
곧|soon|time|머지않아 바로|버스가 {곧} 와요.
늘|always|time|언제나|그는 {늘} 웃어요.
첫|first|time|맨 처음의|오늘 {첫} 월급을 받았어요.
끝|end|time|마지막 부분|영화의 {끝}이 슬퍼요.
딸|daughter|people|여자인 자식|{딸}이 하나 있어요.
형|older brother (said by a male)|people|남동생이 나이 많은 남자 동기를 부르는 말|우리 {형}은 키가 커요.
나|I, me (casual)|people|자기 자신을 가리키는 말|{나}는 학생이야.
너|you (casual)|people|친구나 아랫사람을 가리키는 말|{너}는 어디 가?
저|I, me (humble)|people|자기를 낮추어 가리키는 말|{저}는 학생이에요.
제|my (humble)|people|'저의'를 줄인 말|{제} 이름은 민수예요.
내|my (casual)|people|'나의'를 줄인 말|{내} 동생은 키가 작아요.
애|child, kid|people|아이를 줄인 말|그 {애}는 참 귀여워요.
명|people (counter)|people|사람을 세는 단위|교실에 학생이 다섯 {명} 있어요.
살|years old (counter)|people|나이를 세는 단위|저는 스무 {살}이에요.
왕|king|society,people|옛날에 나라를 다스린 사람|조선의 {왕}은 궁궐에 살았어요.
약|medicine|body|병을 낫게 하려고 먹는 것|감기 {약}을 먹었어요.
병|illness; bottle|body|몸이 아픈 상태|{병}이 나서 학교에 못 갔어요.
힘|strength, power|body|몸을 움직이는 능력|짐이 무거워서 {힘}이 들어요.
땀|sweat|body|더울 때 피부에서 나는 물|운동을 해서 {땀}이 났어요.
숨|breath|body|코나 입으로 공기를 들이쉬고 내쉬는 것|{숨}을 크게 쉬세요.
등|back (of the body)|body|몸의 뒤쪽 부분|{등}이 가려워요.
색|color|colors|빨강, 파랑, 노랑 같은 것|무슨 {색}을 좋아해요?
불|fire; light|home|타면서 빛과 열을 내는 것|방에 {불}을 켜세요.
벽|wall|home|방을 나누는 세워진 면|{벽}에 그림을 걸었어요.
칼|knife|home,food|물건을 자르는 날카로운 도구|{칼}로 과일을 잘랐어요.
초|candle; second|home|불을 붙여 빛을 내는 것|케이크에 {초}를 꽂았어요.
글|writing, text|work|생각이나 이야기를 문자로 적은 것|이 {글}을 읽어 보세요.
답|answer|work|질문이나 문제를 풀어서 얻은 결과|이 문제의 {답}을 알아요?
뜻|meaning|work|말이나 글이 나타내는 내용|이 단어의 {뜻}이 뭐예요?
일|work; one|work|돈을 벌려고 하는 활동|오늘은 {일}이 많아요.
반|half; class|work|둘로 똑같이 나눈 것의 하나|사과를 {반}으로 잘랐어요.
권|volume (counter for books)|work|책을 세는 단위|책 세 {권}을 샀어요.
돌|stone; first birthday|nature|단단한 작은 바위|강가에서 {돌}을 던졌어요.
땅|land, ground|nature|발 아래의 흙이 있는 곳|{땅}에 나무를 심었어요.
숲|forest|nature|나무가 많이 모여 있는 곳|{숲}에서 산책했어요.
섬|island|nature,places|바다로 둘러싸인 땅|제주도는 큰 {섬}이에요.
털|hair, fur|nature,body|동물의 몸에 난 가늘고 부드러운 것|고양이 {털}이 부드러워요.
줄|line, rope|places|사람이 차례로 선 모양|가게 앞에 {줄}이 길어요.
절|Buddhist temple; bow|places,society|스님이 사는 곳|산속에 오래된 {절}이 있어요.
법|law|society|나라에서 정한 규칙|{법}을 지켜야 해요.
멋|style, flair|shopping|보기 좋은 모습|그 사람은 {멋}이 있어요.
속|inside|places|물건이나 몸의 안쪽|가방 {속}에 무엇이 있어요?
밑|bottom, under|places|어떤 것의 아래쪽|의자 {밑}에 고양이가 있어요.
쪽|side, direction; page|places|어느 방향이나 면|이 {쪽}으로 오세요.
것|thing||어떤 물건이나 일|이 {것}은 제 가방이에요.
거|thing (casual)||'것'을 편하게 말하는 말|이 {거} 얼마예요?
그|that; he||앞에서 말한 것을 가리키는 말|{그} 사람이 누구예요?
이|this; tooth||말하는 사람에게 가까운 것을 가리키는 말|{이} 책은 재미있어요.
뭐|what (casual)||'무엇'을 줄인 말|지금 {뭐} 해요?
왜|why||무슨 까닭으로|{왜} 늦었어요?
몇|how many||수를 물을 때 쓰는 말|{몇} 살이에요?
또|again||한 번 더|내일 {또} 만나요.
꼭|surely, definitely||반드시|{꼭} 다시 오세요.
잘|well||좋게, 훌륭하게|한국어를 {잘} 해요.
더|more||어떤 것보다 많이|조금 {더} 주세요.
덜|less||어떤 것보다 적게|이 커피는 {덜} 달아요.
좀|a little; please||'조금'을 줄인 말|{좀} 도와주세요.
못|cannot; nail||할 수 없음을 나타내는 말|어제 숙제를 {못} 했어요.
예|yes (polite)||윗사람에게 대답할 때 쓰는 말|{예}, 알겠습니다.
네|yes||대답할 때 쓰는 말|{네}, 맞아요.
응|yeah (casual)||친구에게 대답할 때 쓰는 말|{응}, 같이 가자.
한|one (before a counter)||'하나'가 단위 앞에서 바뀐 말|사과 {한} 개 주세요.
세|three (before a counter)||'셋'이 단위 앞에서 바뀐 말|사과 {세} 개를 샀어요.
둘|two (native Korean)||하나 다음의 수|사과 {둘}만 주세요.
셋|three (native Korean)||둘 다음의 수|하나, 둘, {셋}!
넷|four (native Korean)||셋 다음의 수|우리 가족은 모두 {넷}이에요.
열|ten (native Korean); fever|body|아홉 다음의 수|손가락은 모두 {열} 개예요.
십|ten (Sino-Korean)||구 다음의 수|{십} 분만 기다려 주세요.
백|one hundred|shopping|열의 열 배가 되는 수|{백} 원짜리 동전이 있어요.
천|one thousand|shopping|백의 열 배가 되는 수|사과 한 개에 {천} 원이에요.
만|ten thousand; only|shopping|천의 열 배가 되는 수|이 책은 {만} 원이에요.
`;

  RAW[2] = `
뼈|bone|body|몸을 받치는 단단한 부분|넘어져서 {뼈}가 부러졌어요.
혀|tongue|body|입 안에서 맛을 느끼는 부분|뜨거운 국에 {혀}를 데었어요.
피|blood|body|몸속을 흐르는 빨간 액체|손가락에서 {피}가 나요.
턱|chin, jaw|body|얼굴의 아래쪽 끝 부분|{턱}에 여드름이 났어요.
볼|cheek|body|얼굴의 양옆 부분|추워서 {볼}이 빨개졌어요.
곁|side (of someone)|people|가까운 옆|항상 제 {곁}에 있어 주세요.
댁|home (honorific)|people|남의 집을 높여 이르는 말|할머니 {댁}에 갔어요.
성|surname; castle|people|이름 앞에 붙는 집안의 이름|제 {성}은 김이에요.
짝|partner; one of a pair|people|둘이 서로 어울리는 한 쌍의 하나|제 {짝}은 반에서 키가 제일 커요.
씨|seed; Mr./Ms.|nature|식물이 자라는 작은 알|수박 {씨}를 뱉었어요.
풀|grass; glue|nature|들이나 길가에 나는 작은 식물|소가 {풀}을 먹어요.
잎|leaf|nature|나무나 풀의 납작한 초록 부분|가을에 {잎}이 빨갛게 변해요.
흙|soil, dirt|nature|땅의 겉을 이루는 부드러운 가루|화분에 {흙}을 넣었어요.
빛|light|nature|해나 불에서 나와 밝게 하는 것|창문으로 {빛}이 들어와요.
골|goal|activities|공을 넣어 점수를 얻는 것|마지막에 {골}을 넣었어요.
회|sashimi; times|food|날생선을 얇게 썬 음식|바닷가에서 {회}를 먹었어요.
면|noodles; side|food|국수 같은 길고 가는 음식|저는 밥보다 {면}이 좋아요.
삽|shovel|home|땅을 파는 도구|{삽}으로 땅을 팠어요.
솜|cotton|home|이불 속에 넣는 하얗고 부드러운 것|이불 안에 {솜}이 들어 있어요.
끈|string, strap|home|물건을 묶는 가늘고 긴 것|신발 {끈}이 풀렸어요.
붓|brush (for writing)|work,activities|먹을 묻혀 글씨를 쓰는 도구|{붓}으로 이름을 썼어요.
과|lesson; department|work|공부할 책의 한 단원|오늘은 삼 {과}를 배워요.
질|quality|shopping|물건의 좋고 나쁜 정도|이 옷은 {질}이 좋아요.
벌|set (counter for clothes); bee|shopping|옷을 세는 단위|정장 한 {벌}을 샀어요.
대|counter for machines and cars|transport|차나 기계를 세는 단위|주차장에 차가 열 {대} 있어요.
억|one hundred million|shopping|만의 만 배가 되는 수|집값이 일 {억}이 넘어요.
쉰|fifty (native Korean)||마흔 다음, 열의 다섯 배가 되는 수|아버지는 올해 {쉰}이세요.
중|middle; during|time|어떤 일을 하는 동안|지금 회의 {중}이에요.
옛|old, former|time|지나간 때의|{옛} 친구를 만났어요.
꽤|quite, fairly||생각보다 많이|오늘은 {꽤} 추워요.
딱|exactly, just right||꼭 맞게|이 옷이 저한테 {딱} 맞아요.
푹|soundly, fully||깊이, 충분히|오늘은 {푹} 쉬세요.
막|just now; carelessly||바로 지금|버스가 {막} 출발했어요.
`;

  RAW[3] = `
덫|trap|nature|동물을 잡으려고 놓는 장치|산에 {덫}을 놓으면 안 돼요.
벼|rice plant|nature|논에서 자라는, 쌀이 열리는 식물|가을에 {벼}가 누렇게 익었어요.
숯|charcoal|home|나무를 태워서 만든 까만 연료|{숯}불에 고기를 구웠어요.
탑|tower, pagoda|places,society|높고 뾰족하게 쌓아 올린 건축물|절 마당에 돌 {탑}이 있어요.
굴|oyster; cave|food,nature|바다에서 나는 껍데기 속의 부드러운 해산물|겨울에는 {굴}이 맛있어요.
뜰|yard, garden|home|집 안의 빈 땅|{뜰}에 꽃을 심었어요.
틈|gap; spare time|time|벌어진 사이, 쉬는 짧은 시간|바쁜 {틈}에 전화를 했어요.
칸|compartment; space|places|일정하게 나눈 공간|기차 맨 앞 {칸}에 탔어요.
빚|debt|shopping|갚아야 할 돈|은행에 {빚}이 있어요.
몫|share, portion|shopping|여럿으로 나눈 것 중 한 사람이 가지는 부분|이건 네 {몫}이야.
넋|soul, spirit|feelings|사람의 정신이나 마음|너무 놀라서 {넋}을 잃었어요.
꾀|wit, trick|people|일을 잘 꾸며 내는 생각|토끼가 {꾀}를 내어 도망쳤어요.
`;

  // One-syllable words that also appear in your Duolingo course.
  var DUO = '밑 곁 골 숨 소 등 곰 애 쉰 대 내 뜻 쪽 성 삽 덫 멋 끝 옛 뼈 땅 죽 꽤 백 벌 예 중 딱 땀 막 질 국 회 응 너 강 억 뱀 김 절 과 감 면 속 섬 천 권 상 법 힘 콩 왕 솜 닭 껌 값 원 봄 칼 거 늘 술 컵 돌 꿀 번 명 꿈 코 답 팝 벽 붓 초 맛 춤 입 줄 만 털 쥐 숲 목 첫 키 왜 좀 짐 월 년 낮 분 십 세 한 곧 쌀 개 별 팔 푹 옆 뒤 앞 그 덜 더 것 일 색 넷 둘 반 열 시 불 발 손 때 몸 잠 비 귀 글 못 안 달 밤 떡 날 댁 주 층 밖 위 문 꼭 잘 옷 또 딸 병 약 배 역 길 곳 랩 말 눈 꽃 방 집 산 형 표 팀 나 공 새 귤 잔 돈 팬 뭐 밥 몇 살 네 씨 저 책 제 물 빵 차 이';

  root.KC = root.KC || {};
  root.KC.single = { RAW: RAW, DUO: DUO };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.KC.single;
})(typeof window !== 'undefined' ? window : globalThis);

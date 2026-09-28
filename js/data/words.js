/*
 * Built-in word bank.
 *
 * Levels follow the three grades of the National Institute of Korean Language
 * (국립국어원) "Korean Learning Vocabulary List" (한국어 학습용 어휘 목록, A/B/C),
 * which is the list most TOPIK study material is based on:
 *   1 = 초급 Beginner      (TOPIK I, levels 1–2)
 *   2 = 중급 Intermediate  (TOPIK II, levels 3–4)
 *   3 = 고급 Advanced      (TOPIK II, levels 5–6)
 *
 * One word per line:  korean | english | categories | Korean definition | example
 * In the example sentence, {braces} mark the part that becomes the blank.
 */
(function (root) {
  var CATEGORIES = [
    { id: 'food', ko: '음식', en: 'Food', icon: '🍜' },
    { id: 'colors', ko: '색깔', en: 'Colors', icon: '🎨' },
    { id: 'activities', ko: '활동·취미', en: 'Things to do', icon: '⚽' },
    { id: 'places', ko: '장소', en: 'Places', icon: '🏫' },
    { id: 'people', ko: '사람·가족', en: 'People & family', icon: '👪' },
    { id: 'body', ko: '몸·건강', en: 'Body & health', icon: '🩺' },
    { id: 'nature', ko: '날씨·자연', en: 'Weather & nature', icon: '🌦️' },
    { id: 'time', ko: '시간', en: 'Time', icon: '⏰' },
    { id: 'transport', ko: '교통', en: 'Transport', icon: '🚌' },
    { id: 'home', ko: '집·물건', en: 'Home & things', icon: '🏠' },
    { id: 'shopping', ko: '쇼핑·돈', en: 'Shopping & money', icon: '🛍️' },
    { id: 'work', ko: '학교·일', en: 'School & work', icon: '📚' },
    { id: 'feelings', ko: '감정', en: 'Feelings', icon: '😊' },
    { id: 'society', ko: '사회·문화', en: 'Society & culture', icon: '🏛️' }
  ];

  var LEVELS = [
    { id: 1, ko: '초급', en: 'Beginner', topik: 'TOPIK I (1–2)' },
    { id: 2, ko: '중급', en: 'Intermediate', topik: 'TOPIK II (3–4)' },
    { id: 3, ko: '고급', en: 'Advanced', topik: 'TOPIK II (5–6)' }
  ];

  var DATA = {};

  DATA[1] = `
사과|apple|food|빨갛고 둥근 과일|아침에 {사과}를 먹었어요.
과일|fruit|food|사과, 배, 포도 같은 것|저는 {과일}을 좋아해요.
김치|kimchi|food|배추로 만든 한국의 매운 음식|한국 사람은 {김치}를 자주 먹어요.
치즈|cheese|food|우유로 만든 노란 음식|피자에 {치즈}가 많아요.
우유|milk|food|소에서 나오는 하얀 음료|아침마다 {우유}를 마셔요.
커피|coffee|food|까만 색의 쓴 음료|회사에서 {커피}를 마셔요.
과자|snack, cookie|food|아이들이 좋아하는 달고 바삭한 간식|편의점에서 {과자}를 샀어요.
라면|ramen, instant noodles|food|뜨거운 물에 끓여 먹는 인스턴트 국수|밤에 {라면}을 끓여 먹었어요.
불고기|bulgogi (marinated grilled beef)|food|양념한 소의 살코기를 얇게 썰어 구운 한국 음식|외국 친구가 {불고기}를 좋아해요.
고기|meat|food|소, 돼지, 닭에서 얻는 음식|저녁에 {고기}를 구워 먹어요.
비빔밥|bibimbap (mixed rice)|food|밥에 나물과 고추장을 넣고 섞은 음식|점심에 {비빔밥}을 먹었어요.
김밥|gimbap (seaweed rice roll)|food|김으로 밥과 채소를 말아서 만든 음식|소풍 때 {김밥}을 싸요.
음식|food|food|사람이 먹는 것|한국 {음식}은 맛있어요.
주스|juice|food|과일을 짜서 만든 음료|오렌지 {주스} 한 잔 주세요.
딸기|strawberry|food|빨갛고 작은 봄 과일|{딸기} 케이크를 샀어요.
포도|grapes|food|보라색 작은 알이 많이 달린 과일|{포도}로 주스를 만들어요.
수박|watermelon|food|여름에 먹는 크고 초록색인 과일|여름에는 {수박}이 맛있어요.
계란|egg|food|닭이 낳은 알|아침에 {계란}을 삶아 먹었어요.
냉면|cold noodles|food|차갑게 먹는 국수|여름에 {냉면}을 먹어요.
국수|noodles|food|밀가루로 만든 길고 가는 음식|생일에 {국수}를 먹어요.
채소|vegetables|food|배추, 오이, 당근 같은 것|{채소}를 많이 드세요.
맥주|beer|food|보리로 만든 술|친구와 {맥주}를 마셨어요.
점심|lunch; midday|food,time|낮에 먹는 밥|{점심}에 뭐 먹을까요?
설탕|sugar|food|단맛을 내는 하얀 가루|커피에 {설탕}을 넣어요.
소금|salt|food|짠맛을 내는 하얀 가루|국에 {소금}을 조금 넣으세요.
맛있다|to be delicious|food|음식의 맛이 좋다|이 떡볶이가 정말 {맛있}어요.
먹다|to eat|food|음식을 입에 넣어 삼키다|같이 밥을 {먹}어요.
마시다|to drink|food|물이나 주스를 목으로 넘기다|물을 많이 {마시}세요.
떡볶이|tteokbokki (spicy rice cakes)|food|떡을 고추장에 볶은 매운 음식|학교 앞에서 {떡볶이}를 사 먹었어요.
바나나|banana|food|길고 노란 과일|원숭이가 {바나나}를 먹어요.
케이크|cake|food|생일에 먹는 달콤한 빵|생일 {케이크}에 초를 꽂았어요.
달다|to be sweet|food|설탕 맛이 나다|이 과자는 너무 {달}아요.
맵다|to be spicy|food|고추처럼 입 안이 뜨거운 맛이 나다|김치찌개가 {매워}요.
짜다|to be salty|food|소금 맛이 강하다|국이 너무 {짜}요.
김치찌개|kimchi stew|food|신 배추 절임과 돼지고기를 넣고 끓인 매운 국물 요리|엄마가 {김치찌개}를 끓였어요.
빨간색|red|colors|피나 사과의 색|저는 {빨간색} 옷을 좋아해요.
파란색|blue|colors|맑은 하늘의 색|{파란색} 하늘이 예뻐요.
노란색|yellow|colors|바나나나 레몬의 색|개나리는 {노란색}이에요.
하얀색|white|colors|눈이나 우유의 색|{하얀색} 셔츠를 입었어요.
검은색|black|colors|밤하늘이나 숯의 색|{검은색} 구두를 샀어요.
까만색|black|colors|김이나 머리카락 같은 어두운 색|{까만색} 가방을 들었어요.
초록색|green|colors|나뭇잎이나 풀의 색|봄에는 산이 {초록색}이에요.
보라색|purple|colors|포도나 가지의 색|제가 좋아하는 색은 {보라색}이에요.
분홍색|pink|colors|벚꽃의 색|{분홍색} 꽃이 피었어요.
갈색|brown|colors|초콜릿이나 흙의 색|우리 강아지는 {갈색}이에요.
회색|gray|colors|흐린 하늘이나 쥐의 색|{회색} 구름이 많아요.
주황색|orange (color)|colors|오렌지나 당근의 색|당근은 {주황색}이에요.
색깔|color|colors|빨강, 파랑, 노랑 같은 것|무슨 {색깔}을 좋아해요?
빨갛다|to be red|colors|피나 딸기와 같은 색이다|부끄러워서 얼굴이 {빨개}졌어요.
파랗다|to be blue|colors|맑은 하늘과 같은 색이다|바다가 정말 {파래}요.
하얗다|to be white|colors|눈과 같은 색이다|눈이 와서 온 세상이 {하얘}요.
노랗다|to be yellow|colors|바나나와 같은 색이다|은행잎이 {노랗}게 변했어요.
까맣다|to be black|colors|밤하늘과 같은 색이다|햇볕에 얼굴이 {까맣}게 탔어요.
운동|exercise|activities,body|몸을 건강하게 하려고 몸을 움직이는 것|매일 아침 {운동}을 해요.
수영|swimming|activities|물속에서 팔과 다리를 움직여 나아가는 것|여름에 바다에서 {수영}을 했어요.
여행|travel, trip|activities|다른 도시나 나라에 가서 구경하는 것|방학에 제주도로 {여행}을 가요.
등산|hiking, mountain climbing|activities|산에 올라가는 것|주말에 친구와 {등산}을 했어요.
요리|cooking|activities,food|음식을 만드는 것|저는 {요리}하는 것을 좋아해요.
노래|song|activities|목소리로 부르는 음악|친구와 같이 {노래}를 불렀어요.
영화|movie|activities|극장에서 보는 이야기가 있는 영상|주말에 {영화}를 봤어요.
쇼핑|shopping|activities,shopping|물건을 사러 가게에 다니는 것|백화점에서 {쇼핑}을 했어요.
산책|walk, stroll|activities|천천히 걸으며 바람을 쐬는 것|저녁에 공원에서 {산책}해요.
공부|study|activities,work|배우고 익히는 것|도서관에서 한국어 {공부}를 해요.
청소|cleaning|activities,home|더러운 곳을 깨끗하게 하는 것|주말에 방 {청소}를 했어요.
빨래|laundry|activities,home|더러운 옷을 물에 빠는 것|오늘은 {빨래}를 해야 해요.
게임|game|activities|컴퓨터나 휴대폰으로 하는 놀이|동생이 {게임}을 너무 많이 해요.
축구|soccer|activities|발로 공을 차서 골대에 넣는 운동|운동장에서 {축구}를 했어요.
야구|baseball|activities|방망이로 공을 치는 운동|한국에서는 {야구}가 인기가 많아요.
농구|basketball|activities|공을 바구니에 던져 넣는 운동|키가 커서 {농구}를 잘해요.
독서|reading|activities|책을 읽는 것|제 취미는 {독서}예요.
취미|hobby|activities|좋아서 시간이 날 때 하는 일|{취미}가 뭐예요?
사진|photo|activities|카메라로 찍은 그림|여행 가서 {사진}을 많이 찍었어요.
그림|picture, drawing|activities|연필이나 물감으로 그린 것|아이가 {그림}을 그려요.
음악|music|activities|노래나 악기 소리|저는 조용한 {음악}을 들어요.
놀다|to play, hang out|activities|재미있게 시간을 보내다|아이들이 공원에서 {놀}아요.
읽다|to read|activities|글을 보고 뜻을 알다|매일 책을 {읽}어요.
듣다|to listen|activities|귀로 소리를 알다|음악을 {들}어요.
쉬다|to rest|activities|일을 멈추고 편하게 있다|주말에는 집에서 {쉬}어요.
만나다|to meet|activities,people|사람과 사람이 서로 보다|내일 친구를 {만나}요.
파티|party|activities|여러 사람이 모여 즐기는 모임|생일 {파티}에 친구들을 초대했어요.
피아노|piano|activities|건반을 눌러서 소리를 내는 악기|동생은 {피아노}를 잘 쳐요.
테니스|tennis|activities|라켓으로 공을 네트 너머로 치는 운동|주말마다 {테니스}를 쳐요.
스키|skiing|activities|눈 위에서 타는 운동|겨울에 {스키}를 타러 가요.
구경|sightseeing, looking around|activities|재미있는 것을 보는 것|시장 {구경}을 했어요.
노래방|karaoke room|activities,places|돈을 내고 마이크를 잡고 신나게 부르며 노는 방|회식 후에 {노래방}에 갔어요.
영화관|movie theater|activities,places|팝콘을 먹으며 큰 화면을 보는 곳|{영화관}에서 팝콘을 샀어요.
수영장|swimming pool|activities,places|물속에서 헤엄칠 수 있게 만든 곳|{수영장}에 사람이 많아요.
학교|school|places,work|학생들이 공부하는 곳|매일 버스로 {학교}에 가요.
병원|hospital|places,body|아플 때 의사를 만나는 곳|감기에 걸려서 {병원}에 갔어요.
식당|restaurant|places,food|돈을 내고 음식을 사 먹는 곳|학교 앞 {식당}은 싸요.
은행|bank|places,shopping|돈을 맡기거나 찾는 곳|{은행}에서 돈을 찾았어요.
우체국|post office|places|편지나 소포를 보내는 곳|{우체국}에서 소포를 보냈어요.
시장|market|places,shopping|여러 가지 물건을 사고파는 곳|{시장}에서 과일을 샀어요.
공원|park|places|나무와 잔디가 있어 사람들이 쉬는 곳|{공원}에서 자전거를 탔어요.
도서관|library|places,work|책을 빌리거나 읽는 곳|{도서관}에서 책을 빌렸어요.
약국|pharmacy|places,body|약을 파는 곳|{약국}에서 감기약을 샀어요.
회사|company, office|places,work|사람들이 일하는 곳|아버지는 {회사}에 다니세요.
백화점|department store|places,shopping|여러 층에서 많은 물건을 파는 큰 가게|{백화점}에서 옷을 샀어요.
편의점|convenience store|places,shopping|24시간 여는 작은 가게|{편의점}에서 우유를 샀어요.
가게|store, shop|places,shopping|물건을 파는 곳|이 {가게}는 몇 시에 문을 열어요?
공항|airport|places,transport|비행기를 타는 곳|{공항}에 두 시간 일찍 갔어요.
교실|classroom|places,work|학교에서 수업을 하는 방|{교실}에 학생이 서른 명 있어요.
화장실|restroom, bathroom|places,home|손을 씻고 볼일을 보는 곳|{화장실}이 어디예요?
극장|theater|places,activities|영화나 연극을 보는 곳|{극장} 앞에서 만나요.
호텔|hotel|places|여행할 때 돈을 내고 자는 곳|바다가 보이는 {호텔}에 묵었어요.
대학교|university|places,work|고등학생이 졸업하고 들어가서 전공을 공부하는 곳|형은 {대학교}에서 경제를 공부해요.
고등학교|high school|places,work|중학생이 졸업하고 3년 동안 다니는 곳|동생은 {고등학교} 2학년이에요.
서점|bookstore|places|책을 파는 가게|{서점}에서 사전을 샀어요.
시내|downtown|places|도시의 중심|주말에 {시내}에 나가요.
박물관|museum|places,society|옛날 물건을 모아 보여 주는 곳|{박물관}에서 옛날 그릇을 봤어요.
사무실|office|places,work|회사에서 일을 하는 방|{사무실}에 컴퓨터가 많아요.
미용실|hair salon|places|머리를 자르는 곳|{미용실}에서 머리를 잘랐어요.
운동장|sports field, playground|places,activities|축구나 달리기를 할 수 있는 학교의 넓은 마당|{운동장}에서 축구를 했어요.
동물원|zoo|places,nature|사자, 코끼리, 기린을 구경할 수 있는 곳|아이와 {동물원}에 갔어요.
가족|family|people|부모, 형제처럼 같이 사는 사람들|우리 {가족}은 네 명이에요.
아버지|father|people|나를 낳아 준 남자|{아버지}는 회사원이세요.
어머니|mother|people|나를 낳아 준 여자|{어머니}께서 요리를 하세요.
할머니|grandmother|people|부모님의 어머니|{할머니} 댁에 갔어요.
할아버지|grandfather|people|부모님의 아버지|{할아버지}는 올해 여든이세요.
동생|younger sibling|people|나보다 나이가 어린 형제|제 {동생}은 고등학생이에요.
친구|friend|people|서로 친하게 지내는 사람|학교 {친구}와 놀았어요.
선생님|teacher|people,work|학생을 가르치는 사람|한국어 {선생님}이 친절해요.
학생|student|people,work|학교에서 공부하는 사람|저는 대학교 {학생}이에요.
아이|child|people|나이가 어린 사람|{아이}가 울어요.
남자|man|people|여자가 아닌 사람|저 {남자}는 누구예요?
여자|woman|people|남자가 아닌 사람|저 {여자}는 제 언니예요.
사람|person|people|생각하고 말을 하는 존재|공원에 {사람}이 많아요.
의사|doctor|people,body|병원에서 아픈 사람을 치료하는 사람|{의사}가 약을 먹으라고 했어요.
부모님|parents|people|아버지와 어머니|{부모님}께 전화를 드렸어요.
누나|older sister (said by a male)|people|남자가 나이 많은 여자 형제를 부르는 말|우리 {누나}는 간호사예요.
언니|older sister (said by a female)|people|여자가 나이 많은 여자 형제를 부르는 말|{언니}와 같이 쇼핑했어요.
오빠|older brother (said by a female)|people|여자가 나이 많은 남자 형제를 부르는 말|{오빠}가 대학교에 다녀요.
아내|wife|people|결혼한 여자, 남편의 짝|제 {아내}는 요리를 잘해요.
남편|husband|people|결혼한 남자, 아내의 짝|{남편}과 같이 여행을 갔어요.
회사원|office worker|people,work|사무실에 출근해 일하고 월급을 받는 사람|저는 {회사원}이에요.
가수|singer|people|노래를 부르는 것이 직업인 사람|제가 좋아하는 {가수}의 콘서트에 갔어요.
경찰|police|people|나쁜 사람을 잡고 사람들을 지키는 사람|{경찰}에 신고했어요.
아들|son|people|부모에게 남자 자식|{아들}이 둘 있어요.
손님|guest, customer|people,shopping|가게에 물건을 사러 온 사람|가게에 {손님}이 많아요.
아기|baby|people|아주 어린 아이|{아기}가 자고 있어요.
어른|adult|people|다 자란 사람|{어른}께 인사를 해야 해요.
머리|head; hair|body|얼굴 위에 있는 몸의 가장 윗부분|{머리}가 아파요.
얼굴|face|body|눈, 코, 입이 있는 곳|{얼굴}이 작아요.
다리|leg; bridge|body|걷거나 뛸 때 쓰는 몸의 부분|많이 걸어서 {다리}가 아파요.
어깨|shoulder|body|목과 팔 사이 부분|가방이 무거워서 {어깨}가 아파요.
허리|waist, lower back|body|몸의 가운데, 바지를 입는 부분|오래 앉아 있어서 {허리}가 아파요.
손가락|finger|body|손 끝에 있는 다섯 개|{손가락}에 반지를 꼈어요.
발가락|toe|body|발 끝에 있는 다섯 개|신발이 작아서 {발가락}이 아파요.
가슴|chest|body|목과 배 사이의 앞부분|{가슴}이 두근거려요.
감기|cold (illness)|body|콧물이 나고 목이 아픈 가벼운 병|{감기}에 걸렸어요.
아프다|to hurt, be sick|body|몸이 좋지 않아 괴롭다|배가 {아파}요.
건강|health|body|몸이 아프지 않고 튼튼한 상태|{건강}이 제일 중요해요.
날씨|weather|nature|비, 바람, 기온 같은 하늘의 상태|오늘 {날씨}가 좋아요.
여름|summer|nature,time|일 년 중 가장 더운 계절|{여름}에는 바다에 가요.
겨울|winter|nature,time|일 년 중 가장 추운 계절|{겨울}에 눈이 많이 와요.
가을|autumn, fall|nature,time|단풍이 드는 선선한 계절|{가을} 하늘은 높아요.
바람|wind|nature|공기가 움직이는 것|{바람}이 많이 불어요.
하늘|sky|nature|머리 위에 보이는 파란 공간|{하늘}에 구름이 없어요.
구름|cloud|nature|하늘에 떠 있는 하얀 것|하늘에 {구름}이 많아요.
나무|tree|nature|줄기와 가지, 잎이 있는 큰 식물|공원에 {나무}가 많아요.
바다|sea, ocean|nature,places|짠 물이 넓게 있는 곳|여름에 {바다}에 갔어요.
덥다|to be hot (weather)|nature|기온이 높다|오늘은 너무 {더워}요.
춥다|to be cold (weather)|nature|기온이 낮다|겨울에는 {추워}요.
따뜻하다|to be warm|nature|춥지도 덥지도 않고 기분 좋게 온도가 높다|봄이 되니까 날씨가 {따뜻해}요.
시원하다|to be cool, refreshing|nature|알맞게 차가워서 기분이 좋다|바람이 {시원해}요.
계절|season|nature,time|봄, 여름, 가을, 겨울|어느 {계절}을 좋아해요?
강아지|puppy|nature|개의 새끼|{강아지}가 귀여워요.
고양이|cat|nature|쥐를 잘 잡고 '야옹' 하고 우는 동물|{고양이}가 소파 위에서 자요.
동물|animal|nature|개나 소처럼 움직이며 사는 생물|저는 {동물}을 좋아해요.
돼지|pig|nature|'꿀꿀' 하고 우는 동물|{돼지}는 코가 커요.
토끼|rabbit|nature|귀가 길고 깡충깡충 뛰는 동물|{토끼}가 당근을 먹어요.
오늘|today|time|지금 지나가고 있는 이날|{오늘}은 금요일이에요.
내일|tomorrow|time|오늘의 다음 날|{내일} 만나요.
어제|yesterday|time|오늘의 바로 전 날|{어제} 영화를 봤어요.
주말|weekend|time|토요일과 일요일|{주말}에 뭐 해요?
아침|morning; breakfast|time,food|해가 뜰 때부터 오전 중간까지|{아침}에 일찍 일어나요.
저녁|evening; dinner|time,food|해가 질 무렵부터 밤까지|{저녁}에 친구를 만나요.
시간|time; hour|time|어떤 일을 할 수 있는 때|{시간}이 있어요?
월요일|Monday|time|일주일이 시작되는 날|{월요일}은 바빠요.
화요일|Tuesday|time|일주일 중 월요일 다음 날|{화요일}에 수업이 있어요.
수요일|Wednesday|time|일주일 중 화요일 다음 날|{수요일}마다 수영을 해요.
목요일|Thursday|time|일주일 중 수요일 다음 날|{목요일}에 시험이 있어요.
금요일|Friday|time|일주일 중 목요일 다음 날|{금요일} 저녁에 파티가 있어요.
토요일|Saturday|time|일주일 중 금요일 다음 날|{토요일}에는 늦잠을 자요.
일요일|Sunday|time|일주일의 마지막 날, 쉬는 날|{일요일}에는 교회에 가요.
생일|birthday|time|태어난 날|{생일} 축하해요!
방학|school vacation|time,work|학교가 쉬는 기간|여름 {방학}에 여행을 가요.
오전|morning, a.m.|time|밤 열두 시부터 낮 열두 시까지|{오전} 아홉 시에 회의가 있어요.
오후|afternoon, p.m.|time|낮 열두 시부터 밤 열두 시까지|{오후} 세 시에 만나요.
지금|now|time|바로 이때|{지금} 몇 시예요?
매일|every day|time|하루도 빠짐없이 날마다|{매일} 운동해요.
작년|last year|time|올해의 바로 전 해|{작년}에 한국에 왔어요.
내년|next year|time|올해의 다음 해|{내년}에 졸업해요.
올해|this year|time|지금 지나고 있는 해|{올해} 스무 살이에요.
약속|promise; appointment|time,people|다른 사람과 미리 정한 것|친구와 {약속}이 있어요.
하루|a day|time|아침부터 밤까지 스물네 시간|{하루}에 물을 2리터 마셔요.
일주일|a week|time|칠 일 동안|{일주일}에 세 번 운동해요.
버스|bus|transport|많은 사람이 함께 타는 큰 차|{버스}를 타고 학교에 가요.
택시|taxi|transport|돈을 내고 타는 작은 차|늦어서 {택시}를 탔어요.
지하철|subway|transport|땅 밑으로 다니는 기차|{지하철}이 버스보다 빨라요.
기차|train|transport|철길 위를 달리는 긴 차|{기차}를 타고 부산에 갔어요.
비행기|airplane|transport|하늘을 나는 교통수단|{비행기}가 곧 출발해요.
자전거|bicycle|transport,activities|발로 페달을 밟아서 가는 두 바퀴 탈것|공원에서 {자전거}를 타요.
자동차|car|transport|엔진으로 움직이는 차|새 {자동차}를 샀어요.
정류장|bus stop|transport,places|버스가 서는 곳|버스 {정류장}에서 기다려요.
운전|driving|transport|차를 움직이게 하는 것|아버지가 {운전}을 하세요.
교통|traffic, transportation|transport|사람이나 차가 오고 가는 것|서울은 {교통}이 복잡해요.
가방|bag|home,shopping|물건을 넣어서 들거나 메는 것|{가방}에 책이 있어요.
의자|chair|home|앉을 때 쓰는 가구|{의자}에 앉으세요.
책상|desk|home,work|공부할 때 쓰는 탁자|{책상} 위에 컴퓨터가 있어요.
침대|bed|home|잠을 자는 가구|{침대}가 편해요.
냉장고|refrigerator|home|음식을 차갑게 보관하는 기계|우유는 {냉장고}에 있어요.
시계|clock, watch|home,time|시간을 알려 주는 물건|{시계}를 보니 벌써 열 시예요.
안경|glasses|home|잘 보이게 눈에 쓰는 물건|{안경}을 안 쓰면 잘 안 보여요.
우산|umbrella|home|비를 막으려고 쓰는 물건|비가 와요. {우산}을 가져가세요.
연필|pencil|home,work|글씨를 쓰는 나무 도구|{연필}로 이름을 쓰세요.
컴퓨터|computer|home,work|인터넷을 하고 문서를 만드는 기계|{컴퓨터}로 숙제를 해요.
창문|window|home|빛과 바람이 들어오는 곳|더워요. {창문}을 열어 주세요.
거울|mirror|home|얼굴을 비춰 보는 물건|{거울}을 보면서 화장해요.
부엌|kitchen|home|음식을 만드는 곳|어머니가 {부엌}에서 요리하세요.
전화|telephone; phone call|home|멀리 있는 사람과 말하는 기계|저녁에 {전화}할게요.
사전|dictionary|home,work|단어의 뜻을 찾는 책|모르는 단어는 {사전}에서 찾아요.
선물|gift, present|home,shopping|축하하는 마음으로 주는 물건|생일 {선물}을 받았어요.
편지|letter|home|종이에 써서 보내는 글|친구에게 {편지}를 썼어요.
공책|notebook|home,work|글씨를 쓰는 빈 종이 묶음|{공책}에 단어를 써요.
지갑|wallet|home,shopping|돈이나 카드를 넣는 작은 물건|{지갑}을 잃어버렸어요.
열쇠|key|home|문을 여는 데 쓰는 물건|{열쇠}로 문을 열어요.
바지|pants, trousers|shopping|다리를 넣어서 입는 옷|이 {바지}는 좀 길어요.
치마|skirt|shopping|다리가 나뉘지 않은 여자의 아래옷|짧은 {치마}를 입었어요.
양말|socks|shopping|발에 신는 얇은 옷|{양말}에 구멍이 났어요.
구두|dress shoes|shopping|가죽으로 만든 신발|결혼식에 {구두}를 신고 갔어요.
모자|hat, cap|shopping|머리에 쓰는 것|햇빛이 강해서 {모자}를 썼어요.
신발|shoes|shopping|발에 신는 것|{신발}을 벗고 들어오세요.
코트|coat|shopping|추울 때 옷 위에 입는 긴 옷|겨울 {코트}를 샀어요.
비싸다|to be expensive|shopping|값이 많다|이 가방은 너무 {비싸}요.
싸다|to be cheap|shopping|값이 적다|시장은 과일이 {싸}요.
가격|price|shopping|물건의 값|{가격}이 얼마예요?
사다|to buy|shopping|돈을 내고 물건을 가지다|사과를 세 개 {사}요.
팔다|to sell|shopping|돈을 받고 물건을 주다|이 가게는 꽃을 {팔}아요.
카드|card|shopping|돈 대신 계산할 때 쓰는 작은 플라스틱|{카드}로 계산할게요.
숙제|homework|work|집에서 하도록 선생님이 내 준 공부|오늘 {숙제}가 많아요.
시험|exam, test|work|실력을 알아보려고 문제를 푸는 것|내일 한국어 {시험}이 있어요.
수업|class, lesson|work|선생님이 학생을 가르치는 시간|{수업}이 9시에 시작해요.
질문|question|work|모르는 것을 묻는 것|{질문}이 있으면 손을 드세요.
대답|answer, reply|work|묻는 말에 답하는 것|선생님의 질문에 {대답}했어요.
단어|word, vocabulary|work|뜻을 가진 말의 작은 단위|새 {단어}를 외워요.
한국어|Korean language|work,society|서울과 부산에 사는 사람들이 쓰는 말|{한국어}를 배우고 있어요.
연습|practice|work,activities|잘하려고 여러 번 하는 것|매일 발음 {연습}을 해요.
문제|problem; question|work|풀어야 하는 질문이나 어려운 일|이 {문제}는 어려워요.
기분|mood, feeling|feelings|마음에 느끼는 상태|오늘 {기분}이 좋아요.
사랑|love|feelings|누군가를 아끼고 좋아하는 마음|부모님의 {사랑}을 느꼈어요.
기쁘다|to be glad, happy|feelings|좋은 일이 있어서 마음이 즐겁다|합격해서 정말 {기뻐}요.
슬프다|to be sad|feelings|마음이 아프고 눈물이 날 것 같다|영화가 너무 {슬퍼}요.
행복하다|to be happy|feelings|기쁘고 편안하여 걱정이 없다|가족과 함께 있어서 {행복해}요.
재미있다|to be fun, interesting|feelings,activities|즐겁고 웃음이 나다|이 드라마는 정말 {재미있}어요.
피곤하다|to be tired|feelings,body|몸이 힘들어서 쉬고 싶다|일을 많이 해서 {피곤해}요.
배고프다|to be hungry|feelings,food|밥을 먹고 싶다|아침을 안 먹어서 {배고파}요.
무섭다|to be scary, afraid|feelings|겁이 나다|밤에 혼자 있으면 {무서워}요.
좋아하다|to like|feelings|마음에 들어 하다|저는 김치를 {좋아해}요.
싫어하다|to dislike|feelings|마음에 들지 않아 하다|저는 벌레를 {싫어해}요.
걱정|worry|feelings|일이 잘못될까 봐 불안한 마음|{걱정}하지 마세요.
즐겁다|to be joyful, fun|feelings|마음에 들어 기쁘다|여행이 정말 {즐거웠}어요.
`;

  DATA[2] = `
반찬|side dish|food|밥과 함께 먹는 여러 가지 음식|한국 식당은 {반찬}을 많이 줘요.
간식|snack|food|식사 사이에 먹는 가벼운 음식|오후에 {간식}으로 과일을 먹었어요.
음료수|beverage, drink|food|마시는 것, 주스나 콜라 같은 것|편의점에서 {음료수}를 샀어요.
양념|seasoning, marinade|food|음식의 맛을 내려고 넣는 것|불고기 {양념}을 만들었어요.
재료|ingredient, material|food|무엇을 만드는 데 쓰는 것|김치를 만들 {재료}를 샀어요.
요리사|cook, chef|food,people|음식을 만드는 것이 직업인 사람|제 꿈은 {요리사}예요.
배달|delivery|food,shopping|물건이나 음식을 집까지 가져다주는 것|치킨을 {배달}시켰어요.
외식|eating out|food|집이 아닌 식당에서 밥을 사 먹는 것|주말에 가족과 {외식}을 했어요.
식사|meal|food|아침, 점심, 저녁에 밥을 먹는 일|{식사}하셨어요?
숟가락|spoon|food,home|밥이나 국을 떠먹는 도구|{숟가락}으로 국을 먹어요.
젓가락|chopsticks|food,home|반찬을 집는 두 개의 가는 막대|{젓가락}을 잘 사용해요.
그릇|bowl, dish|food,home|음식을 담는 것|{그릇}에 밥을 담았어요.
끓이다|to boil|food|물을 뜨겁게 해서 거품이 나게 하다|물을 먼저 {끓이}세요.
굽다|to grill, bake|food|불에 익히다|고기를 {구워} 먹었어요.
볶다|to stir-fry|food|기름에 넣고 저으면서 익히다|김치를 {볶}아서 밥에 넣었어요.
삼겹살|pork belly|food|돼지고기의 배 부분 살|회식 때 {삼겹살}을 먹었어요.
된장찌개|soybean paste stew|food|콩으로 만든 장을 풀어 끓인 구수한 국물 요리|{된장찌개}가 구수해요.
찌개|stew|food|국보다 국물이 적고 짠 음식|오늘 저녁은 {찌개}예요.
떡국|rice cake soup|food,society|설날에 먹는 떡을 넣은 국|설날에 {떡국}을 먹어요.
영양|nutrition|food,body|몸에 필요한 좋은 성분|채소에는 {영양}이 많아요.
입맛|appetite, taste|food|음식을 먹고 싶은 마음|아파서 {입맛}이 없어요.
고추장|red pepper paste|food|빨갛고 매운 맛을 내는 한국의 장|비빔밥에 {고추장}을 넣으세요.
된장|soybean paste|food|콩으로 만든 누런 장|{된장}으로 찌개를 끓였어요.
간장|soy sauce|food|콩으로 만든 짜고 검은 장|{간장}을 조금 넣으세요.
신선하다|to be fresh|food|새롭고 싱싱하다|시장 채소가 {신선해}요.
하늘색|sky blue|colors|맑은 날 위를 올려다보면 보이는 연한 파란색|{하늘색} 셔츠가 잘 어울려요.
연두색|light green|colors|새싹처럼 연한 초록색|봄에는 나뭇잎이 {연두색}이에요.
남색|navy blue|colors|짙은 파란색|교복 치마가 {남색}이에요.
금색|gold (color)|colors|금처럼 빛나는 누런색|{금색} 반지를 받았어요.
은색|silver (color)|colors|은처럼 빛나는 회색|{은색} 자동차를 샀어요.
흰색|white|colors|눈과 같은 색|{흰색} 운동화를 신었어요.
진하다|to be dark, deep, strong|colors,food|색이나 맛이 강하다|커피가 너무 {진해}요.
연하다|to be light, pale; tender|colors|색이 옅다|{연한} 분홍색이 예뻐요.
밝다|to be bright|colors|빛이 많아서 잘 보이다|이 방은 창문이 커서 {밝}아요.
어둡다|to be dark|colors|빛이 없어서 잘 안 보이다|밤이라서 길이 {어두워}요.
무늬|pattern|colors,shopping|옷이나 물건 겉에 있는 모양|꽃 {무늬} 원피스를 샀어요.
물감|paint|colors,activities|그림을 그릴 때 쓰는 색깔 있는 것|{물감}으로 그림을 그렸어요.
낚시|fishing|activities|물고기를 잡는 일|아버지와 강에서 {낚시}를 했어요.
공연|performance, show|activities,society|사람들 앞에서 음악, 춤, 연극을 보여 주는 것|뮤지컬 {공연}을 봤어요.
전시회|exhibition|activities,society|그림이나 작품을 모아 보여 주는 행사|미술관에서 사진 {전시회}가 열려요.
동아리|club (school)|activities,work|취미가 같은 학생들의 모임|대학교 춤 {동아리}에 들어갔어요.
악기|musical instrument|activities|음악을 연주하는 기구|어떤 {악기}를 연주할 수 있어요?
연주|musical performance|activities|악기로 음악을 들려주는 것|기타 {연주}를 잘해요.
경기|match, game (sports)|activities|운동에서 이기고 지는 것을 겨루는 일|축구 {경기}를 보러 갔어요.
응원|cheering, support|activities|선수나 팀이 이기도록 힘을 주는 것|우리 팀을 열심히 {응원}했어요.
선수|athlete, player|activities,people|운동을 직업으로 하는 사람|그는 유명한 야구 {선수}예요.
봉사|volunteer service|activities,society|남을 위해 대가 없이 돕는 일|주말마다 {봉사} 활동을 해요.
모임|gathering, meeting|activities,people|여러 사람이 모이는 일|동창 {모임}에 나갔어요.
여가|leisure, free time|activities|일하지 않고 남는 시간|{여가} 시간에 뭐 하세요?
태권도|taekwondo|activities,society|손과 발을 쓰는 한국의 전통 무술|아이가 {태권도}를 배워요.
여행사|travel agency|activities,places|비행기 표와 호텔 예약 등 관광 준비를 도와주는 회사|{여행사}에서 비행기 표를 샀어요.
관광|sightseeing, tourism|activities|다른 곳의 경치나 문화를 구경하는 것|서울에는 {관광}할 곳이 많아요.
관광객|tourist|activities,people|경치나 유명한 곳을 구경하러 온 사람|명동에는 {관광객}이 많아요.
휴가|vacation, leave|activities,work|일을 쉬는 기간|여름 {휴가}를 바다로 갔어요.
예약|reservation|activities|미리 약속해 두는 것|식당을 {예약}했어요.
연극|play, drama (theater)|activities,society|무대에서 배우가 이야기를 보여 주는 것|대학로에서 {연극}을 봤어요.
감상|appreciation (of art)|activities|음악이나 그림을 즐기며 느끼는 것|제 취미는 음악 {감상}이에요.
축제|festival|activities,society|기념하거나 즐기려고 여는 큰 행사|가을에 대학 {축제}가 열려요.
미술관|art museum, gallery|places,activities|그림이나 조각을 전시하는 곳|{미술관}에서 그림을 감상했어요.
대사관|embassy|places,society|다른 나라에서 자기 나라를 대표하는 기관|비자 때문에 {대사관}에 갔어요.
주차장|parking lot|places,transport|차를 세워 두는 곳|{주차장}에 자리가 없어요.
경찰서|police station|places|도둑을 잡는 사람들이 일하는 곳|지갑을 잃어버려서 {경찰서}에 갔어요.
체육관|gym, sports center|places,activities|운동을 할 수 있게 만든 큰 건물|{체육관}에서 농구를 해요.
기숙사|dormitory|places,work|학생들이 함께 사는 건물|학교 {기숙사}에 살아요.
동네|neighborhood|places|사람들이 모여 사는 곳|우리 {동네}는 조용해요.
고향|hometown|places|태어나서 자란 곳|명절에 {고향}에 내려가요.
시골|countryside|places,nature|도시에서 먼, 논과 밭이 많은 곳|할머니는 {시골}에 사세요.
도시|city|places|사람이 많이 살고 건물이 많은 곳|서울은 큰 {도시}예요.
건물|building|places|사람이 살거나 일하려고 지은 집|저 높은 {건물}이 회사예요.
입구|entrance|places|들어가는 곳|지하철 {입구}에서 만나요.
출구|exit|places|나가는 곳|3번 {출구}로 나오세요.
계단|stairs|places,home|오르내릴 때 밟는 층층이 된 곳|{계단}으로 올라가요.
휴게소|rest area|places,transport|고속도로에서 잠깐 쉬는 곳|{휴게소}에서 호두과자를 샀어요.
매표소|ticket office|places,transport|표를 파는 곳|{매표소}에서 표를 샀어요.
시청|city hall|places,society|시의 일을 맡아 하는 기관|{시청} 앞 광장에 사람이 많아요.
광장|plaza, square|places|많은 사람이 모일 수 있는 넓은 곳|{광장}에서 축제가 열렸어요.
이웃|neighbor|people|가까이 사는 사람|옆집 {이웃}과 친하게 지내요.
동료|colleague, coworker|people,work|같은 곳에서 함께 일하는 사람|회사 {동료}와 점심을 먹었어요.
사장|company president, boss|people,work|회사나 가게의 가장 높은 사람|우리 {사장}님은 친절하세요.
직원|employee, staff|people,work|회사나 가게에서 일하는 사람|가게 {직원}에게 물어보세요.
부부|married couple|people|남편과 아내|옆집 {부부}는 결혼한 지 10년 됐어요.
형제|siblings, brothers|people|형과 동생|{형제}가 어떻게 되세요?
친척|relatives|people|가족과 핏줄이 이어진 사람들|명절에 {친척}들이 모였어요.
조카|niece, nephew|people|형제자매의 아이|{조카}에게 장난감을 사 줬어요.
사촌|cousin|people|아버지나 어머니의 형제자매의 아이|{사촌} 동생이 놀러 왔어요.
손자|grandson|people|아들이나 딸의 아들|할머니가 {손자}를 안았어요.
어린이|child (formal)|people|초등학생 정도의 나이가 적은 아이|5월 5일은 {어린이}날이에요.
외국인|foreigner|people,society|다른 나라 사람|서울에는 {외국인}이 많아요.
주인|owner, host|people|물건이나 가게를 가진 사람|이 가방 {주인}이 누구예요?
배우|actor, actress|people,society|영화나 드라마에서 연기하는 사람|그 {배우}는 연기를 잘해요.
기자|reporter, journalist|people,society|신문이나 방송에 뉴스를 쓰는 사람|{기자}가 인터뷰를 했어요.
작가|writer, author|people,society|소설이나 글을 쓰는 사람|유명한 {작가}의 책을 읽었어요.
간호사|nurse|people,body|병원에서 의사를 돕고 환자를 돌보는 사람|{간호사}가 주사를 놓았어요.
공무원|civil servant|people,work|나라의 일을 하는 사람|형은 {공무원} 시험을 준비해요.
변호사|lawyer|people,society|법에 대해 도와주는 사람|{변호사}와 상담했어요.
환자|patient|people,body|병이 있는 사람|병원에 {환자}가 많아요.
노인|elderly person|people|나이가 많은 사람|지하철에서 {노인}에게 자리를 양보했어요.
청소년|teenager, youth|people|10대의 젊은 사람|{청소년}은 이 영화를 볼 수 없어요.
선배|senior (at school/work)|people,work|같은 곳에 먼저 들어온 사람|회사 {선배}에게 조언을 구했어요.
후배|junior (at school/work)|people,work|같은 곳에 나중에 들어온 사람|학교 {후배}를 만났어요.
머리카락|hair (on the head)|body|사람의 머리 위에 나는 길고 가는 털|{머리카락}이 길어요.
입술|lips|body|입의 겉 부분|겨울에는 {입술}이 건조해요.
목소리|voice|body|사람이 말하거나 노래할 때 목에서 나오는 것|그 가수는 {목소리}가 좋아요.
손톱|fingernail|body|손가락 끝에 있는 단단한 것|{손톱}을 짧게 잘랐어요.
발목|ankle|body|다리와 발이 이어지는 부분|계단에서 {발목}을 다쳤어요.
무릎|knee|body|다리 가운데 굽혀지는 부분|넘어져서 {무릎}이 아파요.
치과|dentist's office|body,places|이를 치료하는 병원|이가 아파서 {치과}에 갔어요.
두통|headache|body|머리가 아픈 증상|{두통}이 심해서 약을 먹었어요.
기침|cough|body|목에서 '콜록콜록' 소리가 나는 것|감기 때문에 {기침}을 해요.
콧물|runny nose|body|코에서 나오는 물|{콧물}이 계속 나요.
소화|digestion|body|먹은 음식이 몸에서 잘 녹는 것|밥을 먹고 {소화}가 안 돼요.
주사|injection, shot|body|바늘로 약을 몸에 넣는 것|병원에서 {주사}를 맞았어요.
진찰|medical examination|body|의사가 환자의 병을 살펴보는 것|의사에게 {진찰}을 받았어요.
상처|wound, injury|body|다쳐서 생긴 자리|손에 {상처}가 났어요.
다치다|to get hurt|body|몸에 상처가 생기다|넘어져서 다리를 {다쳤}어요.
낫다|to get better, recover|body|병이 없어지다|감기가 다 {나았}어요.
약사|pharmacist|body,people|약국에서 약을 지어 주는 사람|{약사}에게 물어보세요.
몸무게|body weight|body|몸의 무거운 정도|{몸무게}가 늘었어요.
자연|nature|nature|사람이 만들지 않은 산, 강, 바다 같은 것|{자연}을 보호해야 해요.
경치|scenery, view|nature|산이나 바다 등의 아름다운 모습|여기 {경치}가 정말 좋아요.
단풍|autumn leaves|nature|가을에 빨갛고 노랗게 변한 나뭇잎|가을에 설악산 {단풍}을 보러 가요.
태풍|typhoon|nature|비와 아주 센 바람이 부는 여름 날씨|{태풍} 때문에 비행기가 취소됐어요.
장마|monsoon, rainy season|nature,time|여름에 비가 오래 오는 때|{장마} 때는 우산이 꼭 필요해요.
황사|yellow dust|nature|봄에 중국에서 날아오는 누런 모래 먼지|{황사} 때문에 마스크를 썼어요.
소나기|rain shower|nature|갑자기 세게 오다가 곧 그치는 비|갑자기 {소나기}가 왔어요.
안개|fog|nature|땅 가까이 낀 하얀 수증기|{안개}가 껴서 앞이 안 보여요.
번개|lightning|nature|비 올 때 하늘에서 번쩍이는 빛|{번개}가 치고 천둥이 울렸어요.
천둥|thunder|nature|번개가 친 뒤 나는 큰 소리|{천둥} 소리에 아이가 놀랐어요.
기온|temperature (air)|nature|공기의 온도|오늘은 {기온}이 영하예요.
호수|lake|nature,places|땅이 패어 물이 많이 고인 곳|{호수}에서 배를 탔어요.
폭포|waterfall|nature|높은 곳에서 떨어지는 물|{폭포} 소리가 시원해요.
바닷가|beach, seaside|nature,places|바다와 땅이 만나는 곳|{바닷가}에서 조개를 주웠어요.
햇빛|sunlight|nature|해의 빛|{햇빛}이 강해요.
공기|air|nature|우리가 숨을 쉬는 기체|시골은 {공기}가 맑아요.
식물|plant|nature|나무나 풀처럼 땅에 뿌리를 내리고 사는 생물|베란다에서 {식물}을 키워요.
곤충|insect|nature|개미나 나비 같은 작은 벌레|여름에는 {곤충}이 많아요.
호랑이|tiger|nature|줄무늬가 있는 크고 무서운 동물|한국 옛날이야기에 {호랑이}가 자주 나와요.
원숭이|monkey|nature|나무를 잘 타고 바나나를 좋아하는 동물|동물원에서 {원숭이}를 봤어요.
무지개|rainbow|nature,colors|비 온 뒤 하늘에 뜨는 일곱 색깔 띠|비가 그친 뒤 {무지개}가 떴어요.
평일|weekday|time|월요일부터 금요일까지|{평일}에는 회사에 가요.
휴일|holiday, day off|time|일을 쉬는 날|{휴일}에 늦잠을 잤어요.
명절|traditional holiday|time,society|설날, 추석 같은 전통 기념일|{명절}에 가족이 모여요.
설날|Lunar New Year's Day|time,society|음력 1월 1일, 한국의 새해 명절|{설날}에 세배를 해요.
추석|Chuseok (harvest festival)|time,society|음력 8월 15일, 송편을 먹는 명절|{추석}에 송편을 만들어요.
연휴|long weekend, holidays|time|쉬는 날이 이어지는 기간|이번 {연휴}에 여행을 가요.
새벽|dawn|time|해가 뜨기 전 아주 이른 시간|{새벽} 다섯 시에 일어났어요.
요즘|these days|time|최근 얼마 동안|{요즘} 날씨가 추워요.
미래|future|time|앞으로 올 때|{미래}에 뭐가 되고 싶어요?
과거|past|time|이미 지나간 때|{과거}는 잊고 앞으로 나아가요.
현재|present, now|time|지금 이때|{현재} 시간은 오후 두 시예요.
기간|period (of time)|time|어떤 일이 이어지는 시간|시험 {기간}에는 바빠요.
일정|schedule, itinerary|time|해야 할 일을 날짜별로 정리한 것|여행 {일정}을 짰어요.
신호등|traffic light|transport|빨간불, 초록불로 길을 건널 때를 알려 주는 것|{신호등}이 초록불로 바뀌었어요.
횡단보도|crosswalk|transport|사람이 길을 건너는 곳|{횡단보도}로 길을 건너세요.
고속도로|highway, expressway|transport|차가 빨리 달릴 수 있는 큰 길|{고속도로}가 많이 막혀요.
교통사고|traffic accident|transport|도로에서 차가 부딪치거나 사람을 치는 일|여기서 {교통사고}가 났어요.
사고|accident|transport|뜻밖에 일어난 나쁜 일|오는 길에 {사고}가 났어요.
주차|parking|transport|차를 세워 두는 것|여기에 {주차}하면 안 돼요.
출발|departure|transport|어떤 곳을 향해 떠나는 것|기차가 9시에 {출발}해요.
도착|arrival|transport|목적지에 다다르는 것|부산에 {도착}했어요.
갈아타다|to transfer (vehicles)|transport|다른 차로 바꾸어 타다|다음 역에서 2호선으로 {갈아타}세요.
승객|passenger|transport,people|차나 비행기를 탄 손님|버스에 {승객}이 많아요.
왕복|round trip|transport|갔다가 돌아오는 것|{왕복} 표를 샀어요.
좌석|seat|transport|앉는 자리|창가 {좌석}으로 주세요.
막히다|to be blocked, jammed|transport|길에 차가 많아서 잘 못 가다|퇴근 시간에는 길이 {막혀}요.
고속버스|express bus|transport|도시와 도시 사이를 빠르게 오가는 큰 차|{고속버스}를 타고 대전에 갔어요.
항구|port, harbor|transport,places|배가 드나드는 곳|부산은 큰 {항구} 도시예요.
요금|fee, fare|transport,shopping|사용한 대가로 내는 돈|택시 {요금}이 올랐어요.
가구|furniture|home|침대, 책상, 의자 같은 큰 물건|새 집에 {가구}를 샀어요.
이불|blanket, duvet|home|잘 때 덮는 것|추워서 {이불}을 덮었어요.
베개|pillow|home|잘 때 머리를 대는 것|{베개}가 너무 높아요.
세탁기|washing machine|home|빨래를 하는 기계|{세탁기}가 고장 났어요.
청소기|vacuum cleaner|home|먼지를 빨아들이는 기계|{청소기}를 돌려서 거실 먼지를 없앴어요.
선풍기|electric fan|home|바람을 일으키는 기계|더워서 {선풍기}를 켰어요.
휴지|tissue, toilet paper|home|코를 풀거나 닦는 얇은 종이|{휴지} 좀 주세요.
쓰레기|trash, garbage|home|버리는 물건|{쓰레기}는 여기에 버리세요.
수건|towel|home|몸이나 얼굴을 닦는 천|샤워하고 {수건}으로 닦았어요.
비누|soap|home|손을 씻을 때 쓰는 것|{비누}로 손을 씻으세요.
칫솔|toothbrush|home|이를 닦는 솔|새 {칫솔}을 샀어요.
치약|toothpaste|home|이를 닦을 때 칫솔에 짜서 쓰는 것|{치약}이 다 떨어졌어요.
서랍|drawer|home|책상에 넣었다 뺐다 하는 상자|열쇠는 {서랍} 안에 있어요.
이사|moving (house)|home|사는 곳을 옮기는 것|다음 달에 {이사}를 가요.
월세|monthly rent|home,shopping|달마다 내는 집세|{월세}가 너무 비싸요.
전기|electricity|home|불을 켜고 기계를 움직이는 힘|{전기}를 아껴 써야 해요.
고장|breakdown, out of order|home|기계가 망가져서 잘 안 되는 것|컴퓨터가 {고장} 났어요.
할인|discount|shopping|원래 값보다 싸게 해 주는 것|오늘 20% {할인}해요.
영수증|receipt|shopping|돈을 냈다는 것을 적은 종이|{영수증} 드릴까요?
교환|exchange|shopping|다른 물건으로 바꾸는 것|사이즈가 작아서 {교환}했어요.
환불|refund|shopping|낸 돈을 돌려받는 것|마음에 안 들어서 {환불}을 받았어요.
계산|payment; calculation|shopping|물건값을 내는 것|{계산}은 어디에서 해요?
현금|cash|shopping|종이돈이나 동전|{현금}으로 낼게요.
잔돈|change (money)|shopping|거슬러 받는 적은 돈|여기 {잔돈} 있어요.
상품|product, goods|shopping|파는 물건|이 {상품}은 인기가 많아요.
유행|trend, fashion|shopping,society|한때 많은 사람이 따라 하는 것|요즘 이 스타일이 {유행}이에요.
정장|suit, formal wear|shopping|회사나 결혼식에 입는 격식 있는 옷|면접 때 {정장}을 입어요.
운동화|sneakers|shopping|달리기할 때 신는 편한 신발|새 {운동화}를 샀어요.
원피스|dress (one-piece)|shopping|위아래가 붙은 여자 옷|꽃무늬 {원피스}가 예뻐요.
장갑|gloves|shopping|손에 끼는 것|추워서 {장갑}을 꼈어요.
목도리|scarf|shopping|목에 두르는 긴 천|겨울에 {목도리}를 해요.
반지|ring|shopping|손가락에 끼는 작은 고리|결혼 {반지}를 샀어요.
목걸이|necklace|shopping|목에 거는 장식|어머니께 {목걸이}를 선물했어요.
귀걸이|earrings|shopping|귀에 다는 장식|예쁜 {귀걸이}를 했네요.
어울리다|to suit, go well with|shopping|서로 잘 맞아 보기에 좋다|그 옷이 정말 잘 {어울려}요.
광고|advertisement|shopping,society|상품을 알리는 것|TV {광고}를 보고 샀어요.
회의|meeting|work|여러 사람이 모여 의논하는 것|오후 3시에 {회의}가 있어요.
출근|going to work|work|일하러 회사에 가는 것|8시까지 {출근}해요.
퇴근|leaving work|work|일을 마치고 회사에서 나오는 것|{퇴근} 후에 운동해요.
월급|monthly salary|work,shopping|달마다 받는 돈|{월급}을 받아서 선물을 샀어요.
면접|interview|work|직접 만나서 보는 시험|내일 회사 {면접}이 있어요.
취직|getting a job|work|회사에 들어가 일자리를 얻는 것|형이 은행에 {취직}했어요.
직장|workplace|work|일하는 곳|{직장}이 집에서 멀어요.
직업|job, occupation|work|돈을 벌려고 하는 일|{직업}이 뭐예요?
발표|presentation, announcement|work|여러 사람 앞에서 자기 생각을 말하는 것|수업 시간에 {발표}를 했어요.
과제|assignment, task|work|해야 할 일이나 숙제|이번 주까지 {과제}를 내야 해요.
전공|major (field of study)|work|대학교에서 깊이 공부하는 분야|{전공}이 뭐예요?
장학금|scholarship|work|공부를 잘하거나 어려운 학생에게 주는 돈|{장학금}을 받았어요.
입학|school admission, entering school|work|학교에 들어가는 것|3월에 대학교에 {입학}해요.
졸업|graduation|work|학교를 다 마치는 것|내년에 {졸업}해요.
성적|grades, results|work|공부나 시험의 결과|이번 학기 {성적}이 좋아요.
학기|semester|work,time|한 학년을 나눈 기간|새 {학기}가 시작됐어요.
교과서|textbook|work|학교 수업에 쓰는 책|{교과서} 20쪽을 펴세요.
출장|business trip|work|일 때문에 다른 곳에 가는 것|다음 주에 부산으로 {출장}을 가요.
회식|company dinner|work,food|회사 사람들이 함께 먹는 식사|오늘 저녁에 {회식}이 있어요.
감정|emotion|feelings|기쁨, 슬픔 같은 마음의 느낌|{감정}을 잘 표현해요.
기대|expectation|feelings|좋은 일이 일어나기를 바라는 마음|여행을 {기대}하고 있어요.
실망|disappointment|feelings|기대와 달라서 마음이 상하는 것|결과를 보고 {실망}했어요.
후회|regret|feelings|지난 일을 잘못했다고 생각하는 것|공부를 안 한 것을 {후회}해요.
감동|being moved, touched|feelings|마음이 크게 움직이는 것|그 영화를 보고 {감동}을 받았어요.
긴장|nervousness, tension|feelings|마음을 놓지 못하고 떨리는 것|면접 때 너무 {긴장}했어요.
스트레스|stress|feelings,body|마음이 힘들고 답답한 상태|시험 때문에 {스트레스}를 받아요.
부끄럽다|to be shy, embarrassed|feelings|창피해서 얼굴이 빨개지다|사람들 앞에서 말하는 게 {부끄러워}요.
외롭다|to be lonely|feelings|혼자라서 쓸쓸하다|혼자 살아서 가끔 {외로워}요.
답답하다|to feel stuffy, frustrated|feelings|마음이 막힌 듯 괴롭다|말이 안 통해서 {답답해}요.
속상하다|to be upset|feelings|일이 잘 안 되어 마음이 아프다|시험을 망쳐서 {속상해}요.
부럽다|to be envious|feelings|남의 좋은 것을 자기도 갖고 싶다|키가 큰 친구가 {부러워}요.
그립다|to miss, long for|feelings|보고 싶은 마음이 크다|고향 음식이 {그리워}요.
놀라다|to be surprised|feelings|뜻밖의 일에 가슴이 뛰다|큰 소리에 {놀랐}어요.
편하다|to be comfortable|feelings|몸이나 마음이 괴롭지 않다|이 신발은 정말 {편해}요.
짜증|irritation, annoyance|feelings|마음에 안 들어 화가 나는 것|길이 막혀서 {짜증}이 났어요.
안심|relief|feelings|걱정이 없어지고 마음을 놓는 것|무사히 도착해서 {안심}했어요.
자신감|confidence|feelings|스스로 할 수 있다고 믿는 마음|{자신감}을 가지세요.
문화|culture|society|한 사회의 생활 방식, 예술, 풍습|한국 {문화}에 관심이 많아요.
전통|tradition|society|옛날부터 이어져 온 것|한복은 한국의 {전통} 옷이에요.
역사|history|society|지나온 과정과 사건들|한국 {역사}를 공부해요.
신문|newspaper|society|소식을 종이에 실어 날마다 내는 것|아침에 {신문}을 읽어요.
방송|broadcast|society|텔레비전이나 라디오로 내보내는 것|그 {방송}을 봤어요.
결혼식|wedding|society,people|신랑과 신부가 부부가 되는 날의 의식|친구 {결혼식}에 갔어요.
결혼|marriage|society,people|남녀가 부부가 되는 것|내년에 {결혼}해요.
인기|popularity|society|많은 사람이 좋아하는 것|그 노래는 {인기}가 많아요.
규칙|rule|society|지켜야 할 약속|기숙사 {규칙}을 지키세요.
정부|government|society|나라를 다스리는 기관|{정부}가 새 계획을 발표했어요.
대통령|president (of a country)|society,people|나라를 대표하는 가장 높은 사람|{대통령} 선거가 있어요.
선거|election|society|대표를 투표로 뽑는 것|오늘은 {선거} 날이에요.
한복|hanbok (traditional clothes)|society,shopping|한국의 전통 옷|설날에 {한복}을 입어요.
한옥|hanok (traditional house)|society,home|한국의 전통 집|{한옥} 마을을 구경했어요.
세배|New Year's bow|society|설날에 어른께 하는 절|할아버지께 {세배}를 드렸어요.
뉴스|news|society|새로운 소식|저녁 {뉴스}를 봐요.
예절|manners, etiquette|society|지켜야 할 바른 행동|식사 {예절}을 배웠어요.
`;

  DATA[3] = `
식욕|appetite|food|음식을 먹고 싶은 욕구|스트레스 때문에 {식욕}이 없어요.
식품|food product|food|사람이 먹는 음식물, 특히 만들어 파는 것|가공 {식품}을 줄이세요.
조미료|seasoning, condiment|food|음식의 맛을 좋게 하려고 넣는 재료|이 식당은 {조미료}를 쓰지 않아요.
발효|fermentation|food|미생물 때문에 음식의 성분이 변하는 것|김치는 대표적인 {발효} 음식이에요.
영양소|nutrient|food,body|몸에 필요한 단백질, 비타민 같은 성분|채소에는 다양한 {영양소}가 있어요.
유기농|organic farming|food,nature|농약이나 화학 비료 없이 짓는 농사|{유기농} 채소는 조금 비싸요.
식습관|eating habits|food,body|음식을 먹는 버릇|건강하려면 {식습관}을 바꿔야 해요.
편식|picky eating|food|좋아하는 음식만 골라 먹는 것|아이의 {편식}이 심해요.
과식|overeating|food,body|너무 많이 먹는 것|{과식}하면 배탈이 나요.
담그다|to make (kimchi), pickle|food|김치나 술을 만들려고 재료를 버무려 넣어 두다|겨울마다 김치를 {담가}요.
향신료|spice|food|음식에 향기나 매운맛을 더하는 재료|인도 요리에는 {향신료}가 많이 들어가요.
곡물|grain, cereal|food|쌀, 보리, 밀 같은 먹을 수 있는 씨앗|{곡물} 가격이 올랐어요.
식량|food supply, provisions|food,society|사람이 살아가는 데 필요한 먹을거리|세계 {식량} 문제가 심각해요.
제철|in season|food,time|어떤 것이 한창 나는 알맞은 때|가을이 {제철}인 과일은 사과예요.
별미|delicacy, special dish|food|특별히 좋은 맛이나 그런 음식|여름에는 냉면이 {별미}예요.
식중독|food poisoning|food,body|상한 음식을 먹어서 생기는 병|여름에는 {식중독}을 조심하세요.
색상|hue, color|colors|색의 종류나 빛깔|이 옷은 {색상}이 다양해요.
색채|color, tint (in art)|colors,society|사물의 빛깔|그의 그림은 {색채}가 화려해요.
명암|light and shade|colors|밝음과 어두움|그림에 {명암}을 넣으세요.
짙다|to be deep, thick (color)|colors|색이 진하다|그녀는 {짙은} 화장을 했어요.
옅다|to be light, faint (color)|colors|색이 연하다|{옅은} 하늘색 셔츠를 샀어요.
새까맣다|to be jet-black|colors|숯처럼 아주 검다|햇볕에 얼굴이 {새까맣}게 탔어요.
새하얗다|to be snow-white|colors|눈처럼 아주 희다|눈이 와서 거리가 {새하얗}게 변했어요.
누렇다|to be (dull) yellow|colors|익은 벼처럼 조금 탁한 노란색이다|가을이 되어 들판이 {누렇}게 익었어요.
원색|primary color|colors|빨강, 노랑, 파랑 같은 기본 색|아이들 옷은 {원색}이 많아요.
투명하다|to be transparent|colors|속이 환히 비쳐 보이다|{투명한} 유리컵에 물을 담았어요.
창백하다|to be pale (face)|colors,body|얼굴에 핏기가 없이 하얗다|얼굴이 {창백해} 보여요.
빛깔|hue, tint|colors|물체가 빛을 받아 나타내는 색|사과의 {빛깔}이 먹음직스러워요.
화려하다|to be gorgeous, flashy|colors|빛나고 아름답다|무대 의상이 {화려해}요.
단색|single color, solid color|colors|한 가지 색|{단색} 옷이 무난해요.
공예|craft|activities,society|쓸모 있고 아름다운 물건을 손으로 만드는 일|도자기 {공예}를 배우고 있어요.
서예|calligraphy|activities,society|붓으로 글씨를 아름답게 쓰는 예술|할아버지 취미는 {서예}예요.
명상|meditation|activities,body|눈을 감고 조용히 깊이 생각하는 것|아침마다 10분씩 {명상}을 해요.
등반|climbing|activities|높은 산이나 암벽에 오르는 것|에베레스트 {등반}에 성공했어요.
체험|firsthand experience|activities|직접 겪어 보는 것|한옥 마을에서 전통 문화 {체험}을 했어요.
견학|field trip, study tour|activities,work|실제로 가서 보고 배우는 것|학생들이 공장 {견학}을 갔어요.
자원봉사|volunteer work|activities,society|대가 없이 남을 돕는 활동|주말마다 {자원봉사}를 해요.
창작|creation (of art)|activities,society|새로운 작품을 만드는 것|소설 {창작} 수업을 들어요.
수집|collecting|activities|취미로 물건을 모으는 것|제 취미는 우표 {수집}이에요.
관람|viewing (a show, game)|activities|공연이나 경기를 구경하는 것|영화 {관람} 요금이 올랐어요.
참가|participation|activities|모임이나 대회에 함께하는 것|마라톤 대회에 {참가}했어요.
원예|gardening|activities,nature|꽃이나 채소를 가꾸는 일|은퇴 후 {원예}를 즐겨요.
오락|entertainment, amusement|activities|즐겁게 노는 일|{오락} 프로그램을 즐겨 봐요.
동호회|hobby club|activities,people|취미가 같은 사람들의 모임|사진 {동호회}에 가입했어요.
기관|institution, agency|places,society|사회의 일을 맡아 하는 조직|정부 {기관}에서 일해요.
시설|facility|places|어떤 목적으로 만든 건물이나 장치|이 호텔은 편의 {시설}이 좋아요.
법원|court (of law)|places,society|재판을 하는 기관|그 사건은 {법원}에서 재판 중이에요.
국회|national assembly|places,society|법을 만드는 나라의 기관|{국회}에서 새 법을 통과시켰어요.
공장|factory|places,work|기계로 물건을 만드는 곳|자동차 {공장}에서 일해요.
농촌|farming village|places,nature|농사를 짓는 사람들이 사는 마을|{농촌} 인구가 줄고 있어요.
어촌|fishing village|places,nature|물고기를 잡는 사람들이 사는 바닷가 마을|작은 {어촌} 마을에 갔어요.
도심|city center|places|도시의 중심|{도심}은 항상 복잡해요.
교외|suburbs, outskirts|places|도시 둘레의 들이 많은 곳|주말에 {교외}로 드라이브를 갔어요.
유적지|historic site|places,society|역사적인 건물이나 흔적이 남아 있는 곳|경주에는 {유적지}가 많아요.
궁궐|royal palace|places,society|왕이 살던 큰 집|경복궁은 조선 시대 {궁궐}이에요.
연구소|research institute|places,work|과학자들이 실험하고 조사하는 기관|그는 과학 {연구소}에서 일해요.
보건소|public health center|places,body|지역 주민의 건강을 돌보는 공공 기관|{보건소}에서 무료 예방 접종을 해요.
번화가|busy street, downtown|places|사람과 가게가 많아 붐비는 거리|명동은 서울의 대표적인 {번화가}예요.
수도|capital (city)|places,society|한 나라의 중앙 정부가 있는 도시|한국의 {수도}는 서울이에요.
지역|region, area|places|일정하게 나눈 땅|이 {지역}은 비가 많이 와요.
해안|coast|places,nature|바다와 육지가 닿은 곳|동해 {해안}을 따라 걸었어요.
시민|citizen|people,society|도시에 사는 사람, 나라의 구성원|{시민}들이 광장에 모였어요.
국민|the people (of a nation)|people,society|한 나라를 이루는 사람|대통령은 {국민}을 위해 일해요.
주민|resident|people|그 지역에 사는 사람|아파트 {주민} 회의가 열렸어요.
소비자|consumer|people,shopping|물건을 사서 쓰는 사람|{소비자}의 권리를 보호해야 해요.
대표|representative|people,work|여럿을 대신하여 나서는 사람|그는 학생 {대표}로 연설했어요.
지도자|leader|people,society|남을 이끄는 사람|훌륭한 {지도자}가 필요해요.
전문가|expert|people,work|어떤 분야를 깊이 아는 사람|{전문가}의 의견을 들었어요.
상사|superior, boss|people,work|회사에서 자기보다 윗사람|{상사}에게 보고서를 제출했어요.
조상|ancestors|people,society|먼저 살았던 집안의 어른들|추석에 {조상}께 차례를 지내요.
후손|descendants|people,society|자기 세대 이후의 자녀들|자연을 {후손}에게 물려줘야 해요.
세대|generation|people,society|비슷한 나이의 사람 전체|{세대} 차이를 느껴요.
인물|figure, person (notable)|people,society|어떤 일로 이름난 사람|세종대왕은 존경받는 역사적 {인물}이에요.
청년|young adult, youth|people,society|젊은 사람|{청년} 실업 문제가 심각해요.
노동자|laborer, worker|people,work|일을 하고 돈을 받는 사람|{노동자}의 권리를 보장해야 해요.
배우자|spouse|people|결혼한 상대|{배우자}와 함께 오세요.
이민자|immigrant|people,society|다른 나라로 옮겨 가 사는 사람|미국에는 {이민자}가 많아요.
정치인|politician|people,society|국회의원처럼 나라를 다스리는 일을 하는 사람|그 {정치인}은 인기가 많아요.
동창|alumnus, schoolmate|people|같은 학교를 졸업한 사람|초등학교 {동창}을 우연히 만났어요.
질병|disease|body|몸의 병|{질병}을 예방하려면 손을 자주 씻으세요.
증상|symptom|body|병에 걸렸을 때 나타나는 상태|감기 {증상}이 있어요.
치료|treatment, cure|body|병이나 상처를 낫게 하는 것|병원에서 {치료}를 받았어요.
수술|surgery|body|의사가 몸을 째고 병을 고치는 것|무릎 {수술}을 받았어요.
처방|prescription|body|의사가 병에 맞는 약을 정하는 것|의사의 {처방}에 따라 약을 드세요.
예방|prevention|body|병이나 사고를 미리 막는 것|독감 {예방} 주사를 맞았어요.
면역|immunity|body|병에 걸리지 않고 이겨 내는 힘|잠을 잘 자야 {면역}력이 좋아져요.
부작용|side effect|body|약이 원래 목적과 다르게 일으키는 나쁜 결과|이 약은 {부작용}이 있어요.
회복|recovery|body|병이 나아 원래 상태로 돌아오는 것|빠른 {회복}을 빌어요.
입원|hospitalization|body|병을 고치려고 병원에 머무는 것|할머니가 병원에 {입원}하셨어요.
퇴원|discharge from hospital|body|병원에서 나와 집으로 가는 것|다음 주에 {퇴원}할 수 있어요.
진단|diagnosis|body|의사가 병의 상태를 판단하는 것|의사가 위염이라고 {진단}했어요.
비만|obesity|body|살이 쪄서 몸무게가 너무 많은 상태|어린이 {비만}이 늘고 있어요.
체력|physical strength, stamina|body|몸을 움직이는 힘|운동으로 {체력}을 길렀어요.
혈압|blood pressure|body|피가 혈관을 누르는 힘|아버지는 {혈압}이 높으세요.
전염|contagion, infection|body|병이 다른 사람에게 옮는 것|독감은 {전염}이 잘 돼요.
검진|medical checkup|body|건강 상태를 검사하는 것|매년 건강 {검진}을 받아요.
환경|environment|nature,society|사람과 생물을 둘러싼 자연|{환경}을 보호합시다.
오염|pollution|nature|더러워지는 것|강물 {오염}이 심각해요.
기후|climate|nature|한 지역의 오랜 날씨의 특징|제주도는 {기후}가 따뜻해요.
온난화|global warming|nature|지구의 기온이 점점 높아지는 현상|지구 {온난화}로 빙하가 녹고 있어요.
생태계|ecosystem|nature|생물과 환경이 서로 관계를 맺는 체계|강의 {생태계}가 파괴되었어요.
멸종|extinction|nature|생물의 한 종류가 모두 없어지는 것|많은 동물이 {멸종} 위기에 있어요.
재활용|recycling|nature,home|버린 물건을 다시 쓰는 것|플라스틱은 {재활용}하세요.
자원|natural resources|nature,society|사람에게 쓸모 있는 자연의 물질|석유는 중요한 {자원}이에요.
가뭄|drought|nature|오랫동안 비가 오지 않는 것|{가뭄} 때문에 농사가 어려워요.
홍수|flood|nature|비가 많이 와서 물이 넘치는 것|{홍수}로 마을이 잠겼어요.
지진|earthquake|nature|땅이 흔들리는 현상|일본에서 큰 {지진}이 났어요.
미세먼지|fine dust|nature,body|공기 중에 떠 있는 눈에 안 보이는 아주 작은 가루|오늘은 {미세먼지}가 심해요.
대기|atmosphere, air|nature|지구를 둘러싼 공기|{대기} 오염이 심해요.
배출|emission, discharge|nature|밖으로 내보내는 것|쓰레기 {배출} 시간을 지키세요.
해양|ocean, marine|nature|넓은 바다|{해양} 쓰레기가 늘고 있어요.
생물|living thing, organism|nature|살아 있는 것|바다에는 다양한 {생물}이 살아요.
야생|wild|nature|산이나 들에서 저절로 나서 자람|{야생} 동물을 보호해야 해요.
보호|protection|nature,society|위험하지 않게 지키는 것|자연 {보호}에 힘써야 해요.
시대|era, period|time,society|역사적으로 구분한 기간|조선 {시대}의 문화를 공부해요.
세기|century|time|100년을 단위로 하는 기간|새로운 {세기}가 시작되었어요.
기념일|anniversary|time|특별한 일을 기억하는 날|결혼 {기념일}에 꽃을 샀어요.
당시|at that time|time|일이 있었던 그때|사고 {당시} 저는 집에 있었어요.
순간|moment, instant|time|아주 짧은 시간|그 {순간} 모든 것이 멈춘 것 같았어요.
시기|time, period, season|time|어떤 일이 일어나는 때|지금은 중요한 {시기}예요.
영원|eternity|time|끝없이 이어지는 것|{영원}히 잊지 않을게요.
조만간|sooner or later, soon|time|머지않아 곧|{조만간} 한번 만나요.
예전|the old days, before|time|꽤 오래된 지난날|{예전}에는 이 동네에 논이 많았어요.
훗날|future days, later|time|앞으로 올 날|{훗날} 이 경험이 도움이 될 거예요.
연말|end of the year|time|한 해의 끝 무렵|{연말}에는 모임이 많아요.
정오|noon|time|낮 열두 시|회의는 {정오}에 끝나요.
자정|midnight|time|밤 열두 시|{자정}이 넘어서 집에 왔어요.
시점|point in time|time|시간의 흐름 속 어느 한 때|지금 {시점}에서 결정하기 어려워요.
대중교통|public transportation|transport,society|버스나 지하철처럼 많은 사람이 함께 이용하는 탈것|{대중교통}을 이용하세요.
운송|transportation (of goods)|transport,work|사람이나 물건을 실어 나르는 것|화물 {운송} 회사에서 일해요.
항공|aviation|transport|비행기로 하늘을 날아다니는 것|{항공} 요금이 비싸졌어요.
선박|ship, vessel|transport|사람이나 짐을 싣고 물 위를 다니는 배|대형 {선박}이 항구에 들어왔어요.
탑승|boarding|transport|배나 비행기에 올라타는 것|{탑승} 수속을 하세요.
운행|operation (of vehicles)|transport|차나 기차가 정해진 길을 다니는 것|지하철 {운행}이 중단되었어요.
노선|route, line|transport|버스나 기차가 다니는 정해진 길|버스 {노선}이 바뀌었어요.
환승|transfer (transit)|transport|다른 차로 갈아타는 것|지하철에서 버스로 {환승}했어요.
보행자|pedestrian|transport,people|걸어서 다니는 사람|운전자는 {보행자}를 조심해야 해요.
과속|speeding|transport|정해진 속도보다 빨리 달리는 것|{과속}하면 벌금을 내요.
면허|license|transport|어떤 일을 해도 된다는 나라의 허가|운전 {면허}를 땄어요.
차선|traffic lane|transport|도로에 그은 차가 다니는 길|{차선}을 바꿀 때 조심하세요.
연착|late arrival, delay|transport|정해진 시간보다 늦게 도착하는 것|비행기가 두 시간 {연착}되었어요.
통행|passage, traffic|transport|길을 지나다니는 것|공사 때문에 {통행}이 금지되었어요.
주거|dwelling, residence|home|일정한 곳에 머물러 사는 것|{주거} 환경이 좋아졌어요.
주택|house, housing|home|사람이 사는 집|단독 {주택}에 살아요.
가전제품|home appliances|home,shopping|텔레비전, 냉장고 같은 집에서 쓰는 전기 기계|{가전제품}을 할인해요.
가사|housework|home|집안일|부부가 {가사}를 나누어 해요.
살림|housekeeping, household|home|집안을 꾸려 나가는 일|결혼하고 {살림}을 시작했어요.
관리비|maintenance fee|home,shopping|아파트의 청소, 경비 등에 드는 돈|이번 달 {관리비}가 많이 나왔어요.
난방|heating|home|방을 따뜻하게 하는 것|겨울이라 {난방}을 켰어요.
냉방|air conditioning, cooling|home|방을 시원하게 하는 것|이 버스는 {냉방}이 잘 돼요.
수리|repair|home|고장 난 것을 고치는 것|컴퓨터를 {수리}했어요.
설치|installation|home|기계나 설비를 제자리에 놓는 것|에어컨을 {설치}했어요.
분리수거|sorting recyclables|home,nature|쓰레기를 종류별로 나누어 버리는 것|한국에서는 {분리수거}를 해야 해요.
전세|jeonse (lump-sum deposit lease)|home,shopping|큰돈을 맡기고 집을 빌려 사는 것|{전세}로 아파트를 구했어요.
집주인|landlord, homeowner|home,people|집을 가진 사람|{집주인}에게 월세를 냈어요.
생활용품|household goods|home,shopping|칫솔, 휴지처럼 날마다 쓰는 물건|마트에서 {생활용품}을 샀어요.
소비|consumption, spending|shopping|돈이나 물건을 써서 없애는 것|불필요한 {소비}를 줄이세요.
물가|cost of living, prices|shopping,society|물건의 값|요즘 {물가}가 너무 올랐어요.
경제|economy|shopping,society|돈과 물건이 만들어지고 쓰이는 활동|나라 {경제}가 어려워요.
수입|import; income|shopping|다른 나라에서 물건을 사들이는 것|이 과일은 {수입}한 거예요.
수출|export|shopping|다른 나라에 물건을 파는 것|한국은 자동차를 {수출}해요.
무역|trade|shopping,work|나라와 나라 사이에 물건을 사고파는 것|{무역} 회사에 다녀요.
투자|investment|shopping|이익을 얻으려고 돈을 대는 것|부동산에 {투자}했어요.
주식|stock, share|shopping|회사의 일부를 가진다는 증서|{주식} 가격이 떨어졌어요.
예금|bank deposit, savings|shopping|은행에 돈을 맡기는 것|은행에 {예금}했어요.
대출|loan|shopping|은행에서 돈을 빌리는 것|집을 사려고 {대출}을 받았어요.
이자|interest (on money)|shopping|빌리거나 맡긴 돈에 붙는 돈|은행 {이자}가 올랐어요.
저축|saving (money)|shopping|돈을 아껴서 모으는 것|월급의 30%를 {저축}해요.
세금|tax|shopping,society|나라에 내는 돈|{세금}을 내는 것은 국민의 의무예요.
환율|exchange rate|shopping|다른 나라 돈과 바꾸는 비율|{환율}이 올라서 여행비가 비싸졌어요.
할부|installment payment|shopping|돈을 여러 번에 나누어 내는 것|휴대폰을 12개월 {할부}로 샀어요.
품절|sold out|shopping|물건이 다 팔려서 없는 것|그 신발은 {품절}되었어요.
반품|return (of goods)|shopping|산 물건을 돌려보내는 것|불량품이라서 {반품}했어요.
이익|profit, benefit|shopping,work|벌어들인 돈|올해 회사의 {이익}이 늘었어요.
손해|loss, damage|shopping|돈이나 물건을 잃는 것|주식으로 {손해}를 봤어요.
업무|work, duties|work|직장에서 맡아서 하는 일|오늘 {업무}가 많아요.
경력|career, work experience|work|지금까지 해 온 일의 경험|5년 {경력}이 있어요.
승진|promotion|work|회사에서 더 높은 자리에 오르는 것|과장으로 {승진}했어요.
연봉|annual salary|work|일 년 동안 받는 돈|{연봉}이 올랐어요.
계약|contract|work|서로 지킬 것을 약속하고 문서로 남기는 것|회사와 {계약}을 맺었어요.
협상|negotiation|work|서로 이야기해서 뜻을 맞추는 것|임금 {협상}이 끝났어요.
보고서|report (document)|work|알리기 위해 쓴 문서|내일까지 {보고서}를 써야 해요.
은퇴|retirement|work|일을 그만두고 물러나는 것|아버지는 작년에 {은퇴}하셨어요.
실업|unemployment|work,society|일자리를 잃는 것|{실업}률이 높아졌어요.
채용|hiring, recruitment|work|사람을 뽑아서 쓰는 것|신입 사원을 {채용}해요.
연구|research|work|깊이 조사하고 생각하는 것|암 치료에 대해 {연구}하고 있어요.
논문|thesis, paper|work|연구 결과를 쓴 글|졸업 {논문}을 쓰고 있어요.
학위|academic degree|work|대학을 마치면 받는 자격|박사 {학위}를 받았어요.
강의|lecture|work|대학에서 가르치는 것|오늘 {강의}는 휴강이에요.
기업|company, enterprise|work,shopping|이익을 내려고 사업을 하는 조직|그는 큰 {기업}을 경영해요.
부서|department (in a company)|work|회사 안에서 일을 나눈 단위|어느 {부서}에서 일하세요?
사표|letter of resignation|work|일을 그만두겠다고 쓴 글|회사에 {사표}를 냈어요.
교육|education|work,society|지식과 기술을 가르치는 것|{교육}은 나라의 미래예요.
분노|anger, rage|feelings|크게 화가 난 감정|사람들이 {분노}했어요.
불안|anxiety|feelings|마음이 편하지 않고 걱정되는 것|미래에 대한 {불안}이 커요.
우울|depression, gloom|feelings|마음이 답답하고 슬픈 상태|비가 오면 {우울}해져요.
공감|empathy, agreement|feelings|남의 감정이나 생각을 같이 느끼는 것|그의 말에 {공감}했어요.
열정|passion|feelings|어떤 일에 뜨겁게 쏟는 마음|그는 일에 대한 {열정}이 대단해요.
만족|satisfaction|feelings|마음에 흡족한 것|결과에 {만족}해요.
좌절|frustration, setback|feelings|뜻을 이루지 못하고 마음이 꺾이는 것|실패해도 {좌절}하지 마세요.
절망|despair|feelings|희망이 없어진 상태|{절망}하지 말고 다시 시작해요.
희망|hope|feelings|앞일에 대한 좋은 기대|{희망}을 잃지 마세요.
질투|jealousy|feelings|남이 잘되는 것을 미워하는 마음|동생이 언니를 {질투}했어요.
존경|respect|feelings,people|남을 받들어 공경하는 것|저는 부모님을 {존경}해요.
설렘|excitement, flutter|feelings|마음이 들떠서 두근거리는 것|첫 여행의 {설렘}을 잊을 수 없어요.
서운하다|to feel hurt, let down|feelings|기대에 미치지 못해 섭섭하다|친구가 생일을 잊어서 {서운해}요.
뿌듯하다|to feel proud, fulfilled|feelings|기쁨으로 마음이 가득하다|일을 끝내서 {뿌듯해}요.
아쉽다|to be a pity, regrettable|feelings|모자라서 섭섭하다|여행이 끝나서 {아쉬워}요.
억울하다|to feel wronged|feelings|잘못 없이 피해를 보아 답답하다|제 잘못이 아닌데 혼나서 {억울해}요.
초조하다|to be anxious, nervous|feelings|걱정이 되어 마음이 조마조마하다|결과를 기다리며 {초조해}요.
감격|deep emotion, being overwhelmed|feelings|마음에 깊이 느껴 크게 감동하는 것|우승 소식에 {감격}했어요.
정치|politics|society|나라를 다스리는 일|요즘 {정치}에 관심이 생겼어요.
사회|society|society|사람들이 모여 사는 공동체|현대 {사회}는 빠르게 변해요.
제도|system, institution|society|사회에서 정한 규칙과 체계|교육 {제도}를 바꿔야 해요.
정책|policy|society|정부가 일을 하는 방향과 계획|새로운 경제 {정책}이 발표됐어요.
인권|human rights|society|사람이라면 누구나 가지는 권리|모든 사람의 {인권}은 소중해요.
평등|equality|society|차별 없이 고르고 똑같음|남녀 {평등}을 위해 노력해요.
차별|discrimination|society|이유 없이 다르게 대하는 것|인종 {차별}에 반대해요.
복지|welfare|society|사람들이 행복하게 살 수 있는 환경|노인 {복지}가 중요해요.
저출산|low birth rate|society|아이를 적게 낳는 것|{저출산} 문제가 심각해요.
고령화|population aging|society|노인 인구 비율이 높아지는 것|한국 사회는 빠르게 {고령화}되고 있어요.
인구|population|society|한 지역에 사는 사람의 수|서울의 {인구}는 약 천만 명이에요.
여론|public opinion|society|많은 사람의 공통된 의견|{여론} 조사 결과가 나왔어요.
언론|the press, media|society|신문이나 방송으로 사실을 알리는 활동|{언론}의 자유는 중요해요.
시위|protest, demonstration|society|많은 사람이 모여 요구를 드러내는 것|광장에서 {시위}가 열렸어요.
투표|vote, voting|society|선거에서 표를 내는 것|꼭 {투표}하세요.
민주주의|democracy|society|국민이 주인이 되는 정치|{민주주의}는 국민의 참여로 지켜져요.
헌법|constitution|society|나라의 가장 기본이 되는 법|{헌법}은 국민의 권리를 보장해요.
범죄|crime|society|법을 어기는 나쁜 행위|{범죄}를 예방해야 해요.
풍습|custom, tradition|society|옛날부터 내려오는 생활 습관|설날 {풍습}에 대해 알아봐요.
문화재|cultural heritage|society|역사적, 예술적 가치가 높아 나라가 보호하는 유산|숭례문은 중요한 {문화재}예요.
예술|art|society,activities|아름다움을 표현하는 활동|그는 {예술}에 재능이 있어요.
문학|literature|society|말이나 글로 표현한 예술|한국 {문학}을 전공했어요.
세계화|globalization|society|지구의 여러 나라가 하나로 연결되는 것|{세계화} 시대에 외국어는 필수예요.
다문화|multiculturalism|society|여러 나라의 생활 방식과 전통이 함께 있는 것|{다문화} 가정이 늘고 있어요.
갈등|conflict|society,feelings|생각이 달라 서로 부딪치는 것|세대 간 {갈등}이 있어요.
법률|law|society|나라가 정한 법|{법률} 상담을 받았어요.
`;

  root.KC = root.KC || {};
  root.KC.data = { CATEGORIES: CATEGORIES, LEVELS: LEVELS, RAW: DATA };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.KC.data;
})(typeof window !== 'undefined' ? window : globalThis);

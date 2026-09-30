/*
 * Words from your Duolingo Korean course (exported with Duoninja, Sept 2026).
 *
 * KNOWN: words already in the main word bank; they get the "duolingo" topic added.
 * WORDS: the rest, one per line:  korean | english | level (1–3) | topics
 * They have English clues only (no Korean definition or example sentence yet).
 * Grammar endings, particles, names and one-syllable words were left out.
 */
(function (root) {
  var KNOWN = `
짜증 동료 손자 물가 무늬 입술 가슴 요금 까맣다 원숭이 대표 노인 입맛 수술 사고 전기 장마 수리 문학 일정 계약 보고서 출장 연구 입구 예술 전시회 두통 부부 이사 청년 신호등
흰색 환불 경치 기자 시민 배고프다 졸업 관광 참가 성적 발가락 사장 수출 청소기 월급 기업 휴일 환자 치과 손가락 교환 까만색 칫솔 아쉽다 연휴 악기 미술관 부럽다 돼지 단풍
코트 청소년 교통사고 대사관 삼겹살 과거 공장 세배 형제 축제 기간 미래 배달 학기 목요일 청소 항공 머리카락 간장 식사 체육관 하늘색 휴지 이자 빨래 장갑 파랗다 목도리 시골
집주인 평일 토끼 된장 떡국 낚시 설날 경찰서 어린이 무릎 현재 스트레스 문화 교육 고장 막히다 퇴원 치료 어깨 입원 산책 바닷가 어머니 거울 주인 노랗다 서랍 어른 주차장 빨갛다
유행 남자 구름 경찰 태풍 자연 명절 놀라다 친척 고추장 국수 볶다 가구 햇빛 얼굴 여자 은행 소금 호랑이 고속버스 횡단보도 현금 설탕 긴장 갈아타다 비행기 휴가 아버지 베개
관광객 회식 취직 직장 공무원 직업 일주일 질문 고등학교 공부 즐겁다 대학교 입학 월요일 선배 귀걸이 기념일 결혼 이불 그릇 끓이다 조카 재료 연말 치약 주사 허리 요리 건강 불안
대답 방송 광고 희망 인기 목소리 예약 전화 기침 규칙 미용실 반지 양말 주황색 후배 신발 동생 보라색 기분 그립다 슬프다 호텔 굽다 매표소 극장 시청 분홍색 문제 상품 계산
노란색 색깔 원피스 쓰레기 내년 방학 퇴근 발표 하루 출근 도착 저녁 공연 모임 점심 오전 반찬 역사 편지 부끄럽다 행복하다 갈색 결혼식 예전 밝다 듣다 주말 놀다 일요일 아내
뉴스 쉬다 남편 동물원 계란 새벽 수박 계절 여름 외국인 연극 스키 불고기 요리사 하늘 감기 요즘 겨울 동물 작년 가을 오후 우산 바람 올해 어제 단어 연필 안경 건물 의자 공책
시험 출발 농구 연습 지금 기쁘다 숟가락 걱정 낫다 다치다 젓가락 영수증 김치찌개 비빔밥 회의 약속 등산 박물관 택시 여행 피아노 아기 공원 구두 치마 파란색 아들 우유 마시다
교실 선풍기 그림 김밥 오빠 기차 수요일 시장 언니 한복 추석 할머니 사무실 사진 회사 열쇠 비누 수영장 할아버지 덥다 침대 바지 어울리다 백화점 모자 기숙사 세탁기 편의점 운동장
시간 수업 숙제 전공 학교 동아리 테니스 음악 약사 약국 먹다 상처 증상 머리 다리 아프다 아이 병원 간호사 손님 직원 초록색 포도 바나나 음료수 할인 냉면 쇼핑 신선하다 교통
지하철 계단 운전 주차 자동차 카드 자전거 신문 매일 컴퓨터 교과서 사전 읽다 도서관 만나다 무섭다 어둡다 영화 싫어하다 간식 사다 팔다 영화관 검은색 구경 한국어 노래 가수 게임
과일 빨간색 운동화 파티 화요일 좋아하다 수건 책상 냉장고 부엌 바다 서점 시내 노래방 맛있다 싸다 맵다 춥다 토요일 재미있다 가격 피곤하다 창문 따뜻하다 동네 이웃 아침 나무
과자 된장찌개 호수 기온 사과 비싸다 달다 날씨 금요일 학생 변호사 도시 화려하다 사촌 강아지 부모님 고향 출구 식당 화장실 공항 가족 버스 가게 맥주 야구 경기 내일 여행사
우체국 정류장 배우 작가 축구 선수 태권도 취미 독서 운동 딸기 목걸이 시계 선물 오늘 생일 주스 떡볶이 라면 음식 누나 고양이 회색 친구 사람 선생님 회사원 의사 하얀색 지갑
가방 찌개 고기 김치 케이크 커피
`;

  var WORDS = `
로봇|robot|1|
공부방|study room|1|home
탁자|table|1|home
사이에|between|1|
복숭아|peach|1|food
경복궁|Gyeongbokgung Palace|1|places,society
둘째|second; second child|1|people
반팔|short sleeves|1|shopping
스커트|skirt|1|shopping
쇼핑센터|shopping center|1|places,shopping
테니스장|tennis court|1|places,activities
배구|volleyball|1|activities
재미|fun|1|feelings
샤워실|shower room|1|home
축구장|soccer field|1|places,activities
학년|school year, grade|1|work
마이크|microphone|1|
조심|caution, care|1|
자라다|to grow|1|nature
오리|duck|1|nature
사자|lion|1|nature
아이고|oh dear!|1|feelings
베이징|Beijing|1|places
북쪽|north|1|places
좋아지다|to get better|1|
기차표|train ticket|1|transport
대전|Daejeon|1|places
상어|shark|1|nature
막내|youngest child|1|people
컵라면|cup noodles|1|food
전화기|telephone|1|home
코치|coach|1|activities,people
그래서|so, therefore|1|
울산|Ulsan|1|places
그것|that (thing)|1|
에스컬레이터|escalator|1|places
안녕하십니까|hello (formal)|1|people
구십|ninety|1|
일월|January|1|time
정글|jungle|1|nature
남학생|male student|1|work,people
위쪽|upper side, up|1|places
센티미터|centimeter|1|
팔십|eighty|1|
지하|basement, underground|1|places
세탁소|dry cleaner's|1|places
내려가다|to go down|1|
소고기|beef|1|food
연락|contact|1|
목욕|bath|1|home
아래층|downstairs|1|home
아저씨|middle-aged man, mister|1|people
앞쪽|front|1|places
사용하다|to use|1|
속옷|underwear|1|shopping
스키장|ski resort|1|places,activities
재킷|jacket|1|shopping
글쎄|well…, let me see|1|
순두부찌개|soft tofu stew|1|food
잠옷|pajamas|1|shopping,home
스포츠|sports|1|activities
정말로|really, truly|1|
여학생|female student|1|work,people
글자|letter, character|1|work
칠십|seventy|1|
교시|class period|1|work,time
블록|block|1|
놀이|play, game|1|activities
필요|need, necessity|1|
기차역|train station|1|transport,places
동쪽|east|1|places
우동|udon|1|food
아래쪽|lower side, down|1|places
없이|without|1|
어묵|fish cake|1|food
미터|meter|1|
노트|notebook|1|work
라디오|radio|1|home
유니폼|uniform|1|shopping,activities
너희|you (plural)|1|people
반바지|shorts|1|shopping
고맙습니다|thank you|1|people
아래|below, under|1|places
킬로그램|kilogram|1|
여러분|everyone|1|people
반갑습니다|nice to meet you|1|people
때문에|because of|1|
아니면|or, otherwise|1|
시월|October|1|time
메일|email|1|
대화|conversation|1|
부자|rich person|1|people
친하게|closely, in a friendly way|1|people
샴푸|shampoo|1|home
오른손|right hand|1|body
설거지|washing the dishes|1|home
결혼하다|to get married|1|people
벗다|to take off (clothes)|1|shopping
인사|greeting|1|people
느리게|slowly|1|
틀리다|to be wrong|1|
젤리|jelly|1|food
찬물|cold water|1|food
소주|soju|1|food
착하다|to be kind|1|people
전부|all, everything|1|
대구|Daegu|1|places
중국집|Chinese restaurant|1|places,food
그래|yes, okay (casual)|1|
그건|that (thing) is|1|
지난주|last week|1|time
백만|one million|1|
여보세요|hello (on the phone)|1|
놀이터|playground|1|places
버섯|mushroom|1|food
피자|pizza|1|food
이건|this (thing) is|1|
다음날|the next day|1|time
남쪽|south|1|places
샐러드|salad|1|food
오이|cucumber|1|food
말레이시아|Malaysia|1|places
매달|every month|1|time
끝내다|to finish|1|
러시아|Russia|1|places
스타일|style|1|shopping
그쪽|that way; you|1|
배추|napa cabbage|1|food
깨끗하게|cleanly|1|
새우|shrimp|1|food
버튼|button|1|
무엇|what|1|
배드민턴|badminton|1|activities
새로|newly|1|
중국어|Chinese (language)|1|society
댄스|dance|1|activities
빌딩|building|1|places
바이올린|violin|1|activities
그분|that person (honorific)|1|people
상추|lettuce|1|food
베를린|Berlin|1|places
음식점|restaurant|1|places,food
감기약|cold medicine|1|body
바쁘게|busily|1|
그때|at that time|1|time
일하다|to work|1|work
육십|sixty|1|
독일|Germany|1|places
재미있게|in a fun way|1|
축하하다|to congratulate|1|
어린이날|Children's Day|1|time,society
퍼즐|puzzle|1|activities
기쁘게|happily|1|feelings
쉽게|easily|1|
샤워|shower|1|home
지하철역|subway station|1|transport,places
식빵|sliced bread|1|food
친절|kindness|1|people
아르바이트|part-time job|1|work
시작|start|1|
좋게|nicely|1|
대학|college|1|work
달력|calendar|1|home,time
서다|to stand; to stop|1|
녹차|green tea|1|food
음료|beverage|1|food
몽골|Mongolia|1|places
축하합니다|congratulations|1|
볶음밥|fried rice|1|food
밀가루|flour|1|food
토마토|tomato|1|food
인분|serving, portion|1|food
가지|kind, sort; eggplant|1|
메뉴|menu|1|food
점수|score|1|work
글씨|handwriting|1|work
크게|loudly, big|1|
스티커|sticker|1|
그림책|picture book|1|
축구공|soccer ball|1|activities
빠르게|quickly|1|
색연필|colored pencil|1|colors,work
이해하다|to understand|1|
메모|note, memo|1|work
신용카드|credit card|1|shopping
아무|any|1|
동전|coin|1|shopping
물론|of course|1|
잊어버리다|to forget|1|
보여주다|to show|1|
저거|that (thing) over there|1|
하지만|but|1|
이마|forehead|1|body
녹색|green|1|colors
검정|black|1|colors
지우다|to erase|1|
이사하다|to move (house)|1|home
켜다|to turn on|1|home
최고|the best|1|
목욕하다|to take a bath|1|home
물고기|fish|1|nature
첫날|first day|1|time
세계|world|1|society
여러|several|1|
이곳|this place|1|places
나이|age|1|people
예약하다|to reserve|1|activities
슈퍼마켓|supermarket|1|places,shopping
안쪽|inside|1|places
소스|sauce|1|food
옆집|house next door|1|home,places
종이컵|paper cup|1|home
베트남|Vietnam|1|places
책방|bookstore|1|places
인도|India; sidewalk|1|places
멕시코|Mexico|1|places
스물|twenty|1|
경찰관|police officer|1|people
휴대폰|cell phone|1|home
통화|phone call|1|
그러니까|so, that's why|1|
같다|to be the same|1|
유치원|kindergarten|1|places,work
빨간불|red light|1|transport,colors
달걀|egg|1|food
스케이트|skating|1|activities
감사|gratitude|1|feelings
피곤|tiredness|1|body
일어나다|to get up; to happen|1|
이탈리아|Italy|1|places
그래요|really? / okay|1|
학원|private academy (hagwon)|1|places,work
전주|Jeonju|1|places
도움|help|1|
한식|Korean food|1|food
사이트|website|1|
태블릿|tablet|1|home
떨어지다|to fall; to fail|1|
비밀번호|password|1|
와이파이|Wi-Fi|1|
이용하다|to use|1|
아마|probably|1|
비타민|vitamin|1|body
사실|actually; fact|1|
그렇다|to be so|1|
헬스장|gym|1|places,activities
다이어트|diet|1|body
야채|vegetables|1|food
어젯밤|last night|1|time
종류|kind, type|1|
튀김|fried food|1|food
지난달|last month|1|time
짬뽕|jjamppong (spicy seafood noodles)|1|food
죄송합니다|I'm sorry|1|
냄새|smell|1|
이게|this (thing) is|1|
블로그|blog|1|
아니|no (casual)|1|
탕수육|sweet and sour pork|1|food
자장면|jajangmyeon (black bean noodles)|1|food
그렇지만|but, however|1|
쇼핑백|shopping bag|1|shopping
퍼센트|percent|1|
모레|the day after tomorrow|1|time
립스틱|lipstick|1|shopping
세일|sale|1|shopping
선글라스|sunglasses|1|shopping
그런|such, that kind of|1|
스웨터|sweater|1|shopping
디자인|design|1|shopping
초등학생|elementary school student|1|people,work
그날|that day|1|time
서쪽|west|1|places
여기저기|here and there|1|places
가이드|guide|1|activities,people
포르투갈어|Portuguese (language)|1|society
브라질|Brazil|1|places
외국|foreign country|1|places
스페인|Spain|1|places
흐리다|to be cloudy|1|nature
우리나라|our country (Korea)|1|society
시끄럽게|noisily|1|
중학생|middle school student|1|people,work
통화하다|to talk on the phone|1|
매우|very|1|
광주|Gwangju|1|places
교회|church|1|places
고구마|sweet potato|1|food
돼지고기|pork|1|food
슬리퍼|slippers|1|shopping
오렌지|orange|1|food
십만|one hundred thousand|1|
화장품|cosmetics|1|shopping
영화배우|movie actor|1|people
모델|model|1|people
글쎄요|well…, I'm not sure|1|
사월|April|1|time
삼촌|uncle|1|people
가지다|to have, own|1|
접시|plate|1|food,home
냅킨|napkin|1|food
금방|soon, right away|1|time
오븐|oven|1|home
그럼|then, well then|1|
돈가스|pork cutlet|1|food
마늘|garlic|1|food
오징어|squid|1|food
마리|counter for animals|1|nature
카트|cart|1|shopping
조심히|carefully|1|
한번|once|1|
모든|all, every|1|
카레|curry|1|food
햄버거|hamburger|1|food
저분|that person (honorific)|1|people
걸어가다|to walk (there)|1|
그곳|that place|1|places
저런|that kind of|1|
뛰다|to run, jump|1|
두유|soy milk|1|food
라떼|latte|1|food
주문|order|1|food,shopping
잊다|to forget|1|
종이|paper|1|home
늦게|late|1|time
왼쪽|left|1|places
잘못|mistake, wrongly|1|
영국|United Kingdom|1|places
사용|use|1|
거기|there|1|places
사이|between; relationship|1|
놓다|to put, place|1|
벨트|belt|1|shopping
사이다|lemon-lime soda|1|food
가운데|middle|1|places
요일|day of the week|1|time
유럽|Europe|1|places
유월|June|1|time
당근|carrot|1|food
이월|February|1|time
십일월|November|1|time
낮잠|nap|1|time
오월|May|1|time
개월|month(s) (counter)|1|time
약간|slightly|1|
지내다|to get along, spend (time)|1|
오토바이|motorcycle|1|transport
전철|subway train|1|transport
잠깐|a moment|1|time
저희|we (humble)|1|people
멀리|far away|1|
날짜|date|1|time
구월|September|1|time
묻다|to ask|1|
여러가지|various|1|
프로그램|program|1|
졸리다|to be sleepy|1|body
웃다|to laugh, smile|1|feelings
어떻게|how|1|
마다|every|1|
며칠|a few days; what date|1|time
동안|during, for|1|time
이틀|two days|1|time
옛날|the old days|1|time
생각|thought|1|
가장|most|1|
죄송하다|to be sorry|1|feelings
특히|especially|1|
못하다|to be unable to; to be poor at|1|
히터|heater|1|home
과목|subject (school)|1|work
그저께|the day before yesterday|1|time
저곳|that place|1|places
초대|invitation|1|
힘들다|to be hard, tiring|1|feelings
중간|middle|1|
넥타이|necktie|1|shopping
청바지|jeans|1|shopping
책장|bookshelf|1|home
커플|couple|1|people
아주|very|1|
꽃집|flower shop|1|places
스카프|scarf|1|shopping
장미|rose|1|nature
새해|new year|1|time
자다|to sleep|1|home
쿠키|cookie|1|food
망고|mango|1|food
보드게임|board game|1|activities
감자|potato|1|food
수프|soup|1|food
풍선|balloon|1|
빵집|bakery|1|places,food
초대하다|to invite|1|
십이월|December|1|time
와인|wine|1|food
계속|continuously|1|
동물병원|animal hospital|1|places,nature
상자|box|1|home
닭고기|chicken (meat)|1|food
나쁘다|to be bad|1|
고프다|to be hungry|1|food
마음|heart, mind|1|feelings
혼자|alone|1|
로마|Rome|1|places
좁다|to be narrow|1|
뮤지컬|musical|1|activities
매년|every year|1|time
뉴욕|New York|1|places
일본어|Japanese (language)|1|society
미리|in advance|1|
언제나|always|1|
도쿄|Tokyo|1|places
비디오|video|1|
파리|Paris; fly (insect)|1|places
거짓말|lie|1|
점심시간|lunchtime|1|time,food
스테이크|steak|1|food
얘기|talk, story|1|
레스토랑|restaurant|1|places,food
행복하게|happily|1|feelings
계획|plan|1|
어서|quickly; welcome|1|
간단하다|to be simple|1|
자기소개|self-introduction|1|people
마스크|mask|1|body
말씀|words (honorific)|1|people
부탁|request, favor|1|
나다|to come out, occur|1|
가위|scissors|1|home
시간표|timetable|1|time,work
미술|art|1|activities,work
자르다|to cut|1|
신다|to put on (shoes, socks)|1|shopping
운동복|sportswear|1|shopping
중학교|middle school|1|places,work
나중|later|1|time
코끼리|elephant|1|nature
미안하다|to be sorry|1|feelings
인형|doll|1|
싸우다|to fight, argue|1|feelings
기다리다|to wait|1|
뒤쪽|back side|1|places
지나가다|to pass by|1|
떠나다|to leave|1|
실수|mistake|1|
이유|reason|1|
삼십|thirty|1|
늦다|to be late|1|time
고깃집|Korean barbecue restaurant|1|places,food
이따가|a little later|1|time
십오|fifteen|1|
저기요|excuse me|1|
구경하다|to look around|1|activities
잃다|to lose|1|
혹시|by any chance|1|
잡다|to catch, grab|1|
무료|free of charge|1|shopping
그냥|just|1|
사이즈|size|1|shopping
짧다|to be short|1|
쇼핑몰|shopping mall|1|places,shopping
얼마나|how (much)|1|
모양|shape|1|
블라우스|blouse|1|shopping
무슨|what (kind of)|1|
아무것|anything|1|
더럽다|to be dirty|1|home
물어보다|to ask|1|
귀엽다|to be cute|1|
버리다|to throw away|1|home
눕다|to lie down|1|
옷장|wardrobe|1|home
돕다|to help|1|
칠월|July|1|time
팔월|August|1|time
시작하다|to start|1|
스페인어|Spanish (language)|1|society
나라|country|1|society
파나마|Panama|1|places
배우다|to learn|1|work
사십|forty|1|
내다|to pay; to hand in|1|
준비|preparation|1|
오십|fifty|1|
갑자기|suddenly|1|
다시|again|1|
맞다|to be right; to fit|1|
이십|twenty|1|
여덟|eight|1|
마지막|last|1|
잠깐만요|just a moment|1|
수학|math|1|work
아홉|nine|1|
요가|yoga|1|activities
일곱|seven|1|
일찍|early|1|time
얼음|ice|1|food
소다|soda|1|food
차갑다|to be cold (to the touch)|1|
건강하다|to be healthy|1|body
폴더|folder|1|work
지우개|eraser|1|work
가져오다|to bring|1|
준비하다|to prepare|1|
집안일|housework|1|home
모두|everyone, all|1|
오래|for a long time|1|time
드레스|dress (gown)|1|shopping
믿다|to believe|1|
키우다|to raise (a pet, child)|1|nature,people
살다|to live|1|
다르다|to be different|1|
서로|each other|1|
처음|first time, beginning|1|
이야기|story, talk|1|
쿠폰|coupon|1|shopping
배부르다|to be full (stomach)|1|food
여자친구|girlfriend|1|people
한강|Han River|1|places,nature
거리|street; distance|1|places
스피커|speaker|1|home
소리|sound|1|
기타|guitar|1|activities
밴드|band|1|activities
노래하다|to sing|1|activities
모르다|to not know|1|
시끄럽다|to be noisy|1|
즐겁게|joyfully|1|feelings
함께|together|1|
춤추다|to dance|1|activities
일기|diary|1|
생선|fish (food)|1|food
식탁|dining table|1|home,food
도착하다|to arrive|1|transport
연락하다|to contact|1|
트럭|truck|1|transport
카운터|counter|1|places
전화번호|phone number|1|
중요하다|to be important|1|
요구르트|yogurt|1|food
플라스틱|plastic|1|
크림빵|cream bun|1|food
감자칩|potato chips|1|food
벤치|bench|1|places
빨대|straw|1|food
바나나우유|banana milk|1|food
전자레인지|microwave oven|1|home
소시지|sausage|1|food
포크|fork|1|food
삼각김밥|triangle kimbap|1|food
도시락|packed lunch|1|food
아메리카노|americano|1|food
아이스|iced|1|food
그럼요|of course|1|
캐나다|Canada|1|places
고등학생|high school student|1|people,work
어리다|to be young|1|people
제일|the most, best|1|
남대문|Namdaemun|1|places,society
길다|to be long|1|
걸리다|to take (time); to catch (a cold)|1|
내리다|to get off; to fall (rain)|1|transport
보이다|to be seen, look|1|
불다|to blow|1|nature
삼계탕|ginseng chicken soup|1|food
궁금하다|to be curious|1|feelings
필통|pencil case|1|work
말하다|to speak|1|
외국어|foreign language|1|society
어느|which|1|
체크인|check-in|1|transport
끝나다|to end|1|
인도네시아|Indonesia|1|places
탁구|table tennis|1|activities
열둘|twelve|1|
일본|Japan|1|places
달리기|running|1|activities
빠르다|to be fast|1|
프랑스|France|1|places
이번|this time|1|time
올림픽|Olympics|1|activities
이모|aunt (mother's sister)|1|people
끄다|to turn off|1|home
캐릭터|character|1|
바꾸다|to change|1|
고르다|to choose|1|shopping
레벨|level|1|
이기다|to win|1|activities
서비스|service|1|
짜장면|jajangmyeon (black bean noodles)|1|food
나오다|to come out|1|
벌써|already|1|
피씨방|PC bang (internet cafe)|1|places,activities
생기다|to come into being|1|
문자|text message|1|
걱정하다|to worry|1|feelings
넘어지다|to fall down|1|
남동생|younger brother|1|people
이메일|email|1|
전화하다|to call|1|
어떡해요|oh no, what do I do?|1|feelings
아주머니|ma'am, middle-aged woman|1|people
조심하다|to be careful|1|
빨리|quickly|1|
디저트|dessert|1|food
드리다|to give (humble)|1|people
잃어버리다|to lose|1|
아까|a little while ago|1|time
시키다|to order (food)|1|food
메뉴판|menu (board)|1|food
방금|just now|1|time
오랜만|a long time (since)|1|time
한식당|Korean restaurant|1|places,food
초등학교|elementary school|1|places,work
엘리베이터|elevator|1|places
고장나다|to break down|1|home
장소|place, venue|1|places
태국|Thailand|1|places
죄송해요|I'm sorry|1|
드럼|drums|1|activities
조용히|quietly|1|
아직|still, yet|1|
소풍|picnic|1|activities
치다|to hit; to play (tennis, piano)|1|activities
그러면|then|1|
과학|science|1|work
열다|to open|1|
가르치다|to teach|1|work
바닥|floor|1|home
칠판|blackboard|1|work
닦다|to wipe; to brush (teeth)|1|home
누구|who|1|
걸다|to hang; to make (a call)|1|
그리다|to draw|1|activities
누가|who (subject)|1|
도와주다|to help|1|
고치다|to fix|1|
삼월|March|1|time
생신|birthday (honorific)|1|time,people
사랑하다|to love|1|feelings
만들다|to make|1|
받다|to receive|1|
언제|when|1|time
다음|next|1|time
저쪽|over there|1|places
오른쪽|right|1|places
올라가다|to go up|1|
이름|name|1|people
찍다|to take (a photo)|1|activities
메시지|message|1|
주소|address|1|
보내다|to send|1|
따뜻하게|warmly|1|
입다|to wear|1|shopping
이쪽|this way|1|places
천천히|slowly|1|
걷다|to walk|1|activities
닫다|to close|1|
넣다|to put in|1|
먼저|first|1|
깨끗이|cleanly|1|
주다|to give|1|
운전하다|to drive|1|transport
편하게|comfortably|1|
너무|too, very|1|
바로|right, immediately|1|
노트북|laptop|1|home,work
보통|usually|1|
테이블|table|1|home
친절히|kindly|1|
알려주다|to let know, tell|1|
별로|not particularly|1|
데이트|date|1|activities
남자친구|boyfriend|1|people
없다|to not exist; to not have|1|
많이|a lot|1|
대학생|college student|1|people,work
있다|to be, exist; to have|1|
적다|to write down; to be few|1|
알다|to know|1|
부르다|to call; to sing|1|
우와|wow|1|feelings
어렵다|to be difficult|1|
콜라|cola|1|food
되다|to become|1|
얼마|how much|1|shopping
갈비|galbi (ribs)|1|food
물건|thing, item|1|shopping
마트|mart, supermarket|1|places,shopping
이런|this kind of; oh no|1|
터미널|terminal|1|transport,places
앉다|to sit|1|
강남|Gangnam|1|places
타다|to ride, get on|1|transport
느리다|to be slow|1|
항상|always|1|
만화|comics, cartoon|1|activities
잡지|magazine|1|
영어|English (language)|1|society
매주|every week|1|time
보다|to see, watch|1|
오다|to come|1|
찾다|to find, look for|1|
빌리다|to borrow|1|
쓰레기통|trash can|1|home
나가다|to go out|1|
번호|number|1|
액션|action|1|activities
사탕|candy|1|food
들어가다|to go in|1|
티셔츠|T-shirt|1|shopping
진짜|really; real|1|
멀다|to be far|1|
주문하다|to order|1|food,shopping
인터넷|internet|1|
걸그룹|girl group|1|activities
콘서트|concert|1|activities
같이|together|1|
하다|to do|1|
초콜릿|chocolate|1|food
아이스크림|ice cream|1|food
쓰다|to write; to use; to be bitter|1|
장난감|toy|1|
크리스마스|Christmas|1|time
자주|often|1|
운동하다|to exercise|1|activities,body
가끔|sometimes|1|
샤워하다|to shower|1|home
침실|bedroom|1|home
다른|other, different|1|
청소하다|to clean|1|home
공부하다|to study|1|work
엄마|mom|1|people
텔레비전|television|1|home
소파|sofa|1|home
거실|living room|1|home
열심히|hard, diligently|1|
요리하다|to cook|1|food
전철역|subway station|1|transport,places
대화하다|to talk, converse|1|
인사하다|to greet|1|people
산책하다|to take a walk|1|activities
수영하다|to swim|1|activities
어떤|what kind of|1|
인천|Incheon|1|places
가다|to go|1|
아름답다|to be beautiful|1|
조금|a little|1|
소개|introduction|1|
고맙다|to be thankful|1|feelings
이상하다|to be strange|1|
뜨겁다|to be hot|1|
유명하다|to be famous|1|
파스타|pasta|1|food
가깝다|to be close, near|1|
예쁘다|to be pretty|1|
정말|really|1|
멋있다|to be cool, stylish|1|
이제|now|1|time
괜찮다|to be okay|1|
크기|size|1|
특별하다|to be special|1|
아파트|apartment|1|home
깨끗하다|to be clean|1|home
친절하다|to be kind|1|people
조용하다|to be quiet|1|
필요하다|to be necessary|1|
모기|mosquito|1|nature
많다|to be many|1|
그런데|but, by the way|1|
좋다|to be good|1|feelings
맑다|to be clear (weather)|1|nature
텐트|tent|1|activities
작다|to be small|1|
캠핑|camping|1|activities
높다|to be high, tall|1|
서울|Seoul|1|places
아빠|dad|1|people
정말요|really?|1|
이분|this person (honorific)|1|people
환영해요|welcome|1|
에어컨|air conditioner|1|home
여섯|six|1|
부산|Busan|1|places
실례합니다|excuse me|1|
여권|passport|1|transport
근처|nearby|1|places
게이트|gate|1|transport
카페|cafe|1|places,food
저기|over there|1|places
어디|where|1|places
여기|here|1|places
팝콘|popcorn|1|food
치킨|fried chicken|1|food
자리|seat, spot|1|
우리|we, our|1|people
화이팅|fighting! (good luck!)|1|feelings
경기장|stadium|1|places,activities
수첩|small notebook|1|work
제주도|Jeju Island|1|places
저것|that (thing)|1|
지도|map|1|transport
넓다|to be wide|1|
학생증|student ID|1|work
아니다|to not be|1|
드라마|drama|1|activities
케이팝|K-pop|1|activities,society
재즈|jazz|1|activities
열다섯|fifteen|1|
여동생|younger sister|1|people
버블티|bubble tea|1|food
멜론|melon|1|food
이것|this (thing)|1|
갈비탕|beef rib soup|1|food
사장님|boss, owner (polite)|1|people,work
스물다섯|twenty-five|1|
다섯|five|1|
야옹|meow|1|nature
열아홉|nineteen|1|
서른|thirty|1|
아니요|no|1|
미국|United States|1|places
한국|Korea|1|places
중국|China|1|places
반가워요|nice to meet you|1|people
웨이터|waiter|1|people,food
카메라|camera|1|activities
볼펜|ballpoint pen|1|work
무겁다|to be heavy|1|
크다|to be big|1|
핸드폰|cell phone|1|home
만두|dumplings|1|food
잡채|japchae (glass noodles)|1|food
두부|tofu|1|food
빙수|shaved ice dessert|1|food
샌드위치|sandwich|1|food
감사합니다|thank you|1|
안녕하세요|hello|1|
주세요|please give me|1|
선반|shelf|2|home
마지막으로|finally, lastly|2|
원룸|studio apartment|2|home
발코니|balcony|2|home
세탁실|laundry room|2|home
가스레인지|gas stove|2|home
카페트|carpet|2|home
현관문|front door|2|home
밝게|brightly, cheerfully|2|
신발장|shoe cabinet|2|home
생활하다|to live, get by|2|
활발하다|to be lively, outgoing|2|feelings
사라지다|to disappear, vanish|2|
불안하다|to be anxious|2|feelings
짖다|to bark|2|nature
쌍둥이|twins|2|people
무서워하다|to be afraid of|2|feelings
앞머리|bangs (hair)|2|body
생머리|straight hair|2|body
부러워하다|to envy|2|feelings
외모|appearance, looks|2|people
옷차림|outfit, way of dressing|2|shopping
미장원|beauty salon|2|places
몸짓|gesture|2|body
마침|just then, luckily|2|
본인|oneself, the person in question|2|people
떠오르다|to come to mind; to rise|2|
반말|informal speech|2|society
분명히|clearly, surely|2|
촛불|candlelight|2|home
멸치|anchovy|2|food
슬퍼하다|to grieve, be sad|2|feelings
근무하다|to work, be on duty|2|work
아버님|father (honorific)|2|people
완성하다|to complete|2|
몰래|secretly|2|
맞은편|opposite side|2|places
가짜|fake|2|
밤색|chestnut brown|2|colors
액세서리|accessory|2|shopping
반짝이다|to sparkle, shine|2|
고객님|customer (honorific)|2|shopping,people
옷걸이|clothes hanger|2|home
만족하다|to be satisfied|2|feelings
가리키다|to point at, indicate|2|
돌아다니다|to wander around|2|activities
정하다|to decide, set|2|
구입하다|to purchase|2|shopping
겉옷|outerwear|2|shopping
차례|turn, order|2|
참가하다|to participate|2|activities
여성|woman, female|2|people
훈련|training|2|activities
출석|attendance|2|work
근육|muscle|2|body
전국|the whole country|2|society
우승하다|to win (a championship)|2|activities
두근두근|pit-a-pat (heartbeat)|2|feelings
자유|freedom|2|society
운전사|driver|2|transport,people
잘못되다|to go wrong|2|
줄다|to decrease, shrink|2|
주인공|main character|2|society
의상|costume|2|shopping
리허설|rehearsal|2|activities
중심|center|2|
장기자랑|talent show|2|activities
준비물|things to bring, supplies|2|work
열리다|to open, be held|2|
열흘|ten days|2|time
뛰어가다|to run (to)|2|
상태|condition, state|2|
한동안|for a while|2|time
물약|liquid medicine, potion|2|body
잡아먹다|to prey on, devour|2|nature
숨다|to hide|2|
대청소|big cleanup|2|home,activities
도구|tool|2|home
씩씩하다|to be brave, spirited|2|feelings
단체|group, organization|2|society
따라가다|to follow|2|
돌보다|to take care of|2|people
연세|age (honorific)|2|people
친해지다|to become close|2|people
이후|after, since|2|time
똑바로|straight, properly|2|
친할아버지|paternal grandfather|2|people
유학|studying abroad|2|work
한자|Chinese characters|2|society
친할머니|paternal grandmother|2|people
내려오다|to come down|2|
친가|father's side of the family|2|people
냉동고|freezer|2|home
부러지다|to break, snap|2|
살짝|slightly, lightly|2|
온몸|whole body|2|body
내려놓다|to put down|2|
물다|to bite|2|nature
장화|rain boots|2|shopping
기술자|technician, engineer|2|work,people
어부|fisherman|2|work,people
무조건|unconditionally, no matter what|2|
멀미|motion sickness|2|transport,body
설명서|instruction manual|2|
바구니|basket|2|home
낚싯대|fishing rod|2|activities
반납하다|to return (a borrowed item)|2|
담다|to put in, fill|2|food
제품|product|2|shopping
탑승하다|to board|2|transport
위험|danger|2|
이용|use|2|
봉사자|volunteer|2|people,society
일부|part, portion|2|
난로|heater, stove|2|home
영하|below zero|2|nature
이상|abnormality; more than|2|
유리|glass|2|home
보조배터리|portable charger|2|home
끊기다|to be cut off|2|
절대로|never, absolutely not|2|
반대쪽|opposite side|2|places
돌리다|to turn, spin|2|
밤새|all night|2|time
지다|to lose (a game)|2|activities
권투|boxing|2|activities
어휴|ugh, phew|2|feelings
동작|movement, motion|2|activities
상대|opponent|2|activities,people
손목|wrist|2|body
저렇게|like that|2|
상담|counseling, consultation|2|work
자유롭게|freely|2|
다행|good fortune, relief|2|feelings
목록|list|2|
부담|burden, pressure|2|feelings
발전하다|to develop, advance|2|society
신입생|freshman|2|work,people
내내|all along, throughout|2|time
자세하게|in detail|2|
문제점|problem, issue|2|
나빠지다|to get worse|2|
웃음|laughter|2|feelings
늘다|to increase|2|
짓다|to build; to make|2|
일식|Japanese food|2|food
술집|bar, pub|2|places,food
구입|purchase|2|shopping
정도|degree, about|2|
보고|report|2|work
대해|about, regarding|2|
과장|section manager|2|work,people
기술|technology, skill|2|work
부장|department head|2|work,people
출입증|access pass, ID badge|2|work
경우|case, circumstance|2|
껍질|peel, skin (of fruit)|2|food
곳곳|here and there, everywhere|2|places
까다|to peel|2|food
파다|to dig|2|
가죽|leather|2|shopping
묶다|to tie, bind|2|
막대기|stick|2|
아무리|no matter how|2|
모험|adventure|2|activities
살아남다|to survive|2|
바퀴|wheel; lap|2|transport
전시장|exhibition hall|2|places,activities
돌다|to turn, go around|2|
가로|width; horizontal|2|
색칠|coloring, painting|2|colors,activities
다하다|to do one's best; to use up|2|
느낌|feeling|2|feelings
작품|work (of art)|2|society
길이|length|2|
국내|domestic|2|society
이해|understanding|2|
참여하다|to take part|2|activities
전시하다|to exhibit, display|2|activities
목욕탕|public bathhouse|2|places
몸살|body aches (from fatigue)|2|body
일흔|seventy|2|
교사|teacher|2|work,people
연락처|contact information|2|
송편|songpyeon (half-moon rice cake)|2|food,society
경비실|security office|2|places
높이|height|2|
소포|parcel, package|2|
남녀|men and women|2|people
모범|model, example|2|
변화|change|2|
깔끔하다|to be neat and tidy|2|home
대도시|big city|2|places
표지판|sign, signboard|2|transport
맡기다|to leave with, entrust|2|
골목|alley|2|places
쓸다|to sweep|2|home
옮기다|to move, carry|2|
떼다|to take off, detach|2|
쓰레기봉투|garbage bag|2|home
잔디밭|lawn|2|nature,home
마음대로|as one wishes|2|
세제|detergent|2|home
손바닥|palm (of the hand)|2|body
세탁|laundry, washing|2|home
엉덩이|buttocks|2|body
엉망|mess|2|
꾸다|to dream (a dream)|2|
설렁탕|ox bone soup|2|food
더러워지다|to get dirty|2|
자랑하다|to boast, show off|2|feelings
표정|facial expression|2|feelings
충분히|enough, sufficiently|2|
거꾸로|upside down, backwards|2|
존경하다|to respect|2|feelings,people
당연히|of course, naturally|2|
상장|certificate of merit|2|work
해결하다|to solve|2|
부족|shortage, lack|2|
심각하다|to be serious|2|
의견|opinion|2|society
반대|opposition; opposite|2|
시장님|mayor|2|people,society
지방|region, province|2|places
세우다|to stand up, build, stop (a car)|2|
이곳저곳|here and there|2|places
얼른|quickly|2|
불평|complaint|2|feelings
알아보다|to look into; to recognize|2|
틀림없이|without fail, surely|2|
실망하다|to be disappointed|2|feelings
손등|back of the hand|2|body
정신없이|frantically|2|
쏟다|to spill, pour|2|
겨우|barely, only just|2|
돌려받다|to get back|2|shopping
실력|skill, ability|2|work
경험하다|to experience|2|
복습|review (of lessons)|2|work
감독님|coach, director|2|people,activities
검사|examination, test|2|body
찾아오다|to come to see, visit|2|
덕분|thanks (to)|2|
넘다|to exceed, go over|2|
천만|ten million|2|
거절|refusal|2|
무게|weight|2|
막걸리|makgeolli (rice wine)|2|food
계획하다|to plan|2|
도망가다|to run away|2|
휴게실|lounge, break room|2|places,work
태도|attitude|2|
버릇|habit|2|
손수건|handkerchief|2|shopping
소문|rumor|2|society
애인|sweetheart|2|people
정신없다|to be hectic|2|
외출|going out|2|
신혼여행|honeymoon|2|activities
선택|choice|2|
맞추다|to adjust, set, match|2|
시아버지|father-in-law (husband's father)|2|people
밥상|dining table (set with food)|2|food,home
차리다|to set (a table), prepare|2|food
인삼|ginseng|2|food
시어머니|mother-in-law (husband's mother)|2|people
악수|handshake|2|people
높임말|honorific language|2|society
고개|head; hill|2|body
달콤하다|to be sweet|2|food
저번|last time|2|time
단단하다|to be hard, firm|2|
저렇다|to be like that|2|
치실|dental floss|2|body
썩다|to rot|2|
내후년|the year after next|2|time
기념|commemoration|2|
한두|one or two|2|
동창회|class reunion|2|people
일식집|Japanese restaurant|2|places,food
단순|simplicity|2|
똑같다|to be exactly the same|2|
큰소리|loud voice|2|
사물함|locker|2|work
세상|world|2|society
식초|vinegar|2|food
관광하다|to go sightseeing|2|activities
나흘|four days|2|time
덕분에|thanks to|2|
관광지|tourist attraction|2|places,activities
들르다|to stop by|2|
오르다|to climb, go up|2|
크루즈|cruise|2|transport,activities
승무원|flight attendant, crew|2|transport,people
안내|guidance, information|2|
빠지다|to fall into; to be missing|2|
모시다|to accompany, serve (honorific)|2|people
지난해|last year|2|time
부드럽게|softly, gently|2|
음악가|musician|2|people,activities
길게|long, at length|2|
소설|novel|2|society
실패|failure|2|
로맨스|romance|2|
무궁화|rose of Sharon (national flower)|2|nature,society
연기|acting; smoke|2|society
여배우|actress|2|people
울음|crying|2|feelings
비밀|secret|2|
불쌍하다|to be pitiful|2|feelings
따다|to pick; to obtain|2|
치우다|to clean up, put away|2|home
두세|two or three|2|
참외|Korean melon|2|food
달고나|dalgona (sugar candy)|2|food
일어서다|to stand up|2|
분식|Korean snack food|2|food
깻잎|perilla leaf|2|food
익다|to ripen; to be cooked|2|food
알레르기|allergy|2|body
다양하게|in various ways|2|
빼다|to remove, take out|2|
뷔페|buffet|2|food
누르다|to press|2|
방송국|broadcasting station|2|places,society
명함|business card|2|work
방법|method, way|2|
사귀다|to make friends; to date|2|people
기억|memory|2|
가요|popular song|2|activities
오디션|audition|2|activities
결석|absence|2|work
도장|seal, stamp|2|
그동안|meanwhile, all this time|2|time
여든|eighty|2|
고생|hardship|2|
주부|homemaker|2|people
국제|international|2|society
용돈|allowance, pocket money|2|shopping
채우다|to fill|2|
이삿짐|moving boxes, belongings|2|home
집들이|housewarming party|2|home,society
신나게|excitedly|2|feelings
바깥|outside|2|places
신랑|groom|2|people
행사장|event venue|2|places
스스로|by oneself|2|
이날|this day|2|time
장식|decoration|2|home
최근|recently|2|time
없어지다|to disappear|2|
붙다|to stick; to pass (a test)|2|
자랑스럽다|to be proud|2|feelings
불안하게|anxiously|2|feelings
관계|relationship|2|people
사진작가|photographer|2|people
등록하다|to register|2|work
삼거리|three-way intersection|2|transport
대학원|graduate school|2|work
베란다|balcony, veranda|2|home
말리다|to dry; to stop someone|2|home
귀찮다|to be bothersome|2|feelings
사거리|intersection|2|transport
교통비|transportation costs|2|transport,shopping
결제|payment|2|shopping
세수|washing one's face|2|home
국적|nationality|2|society
기념품|souvenir|2|shopping
항공권|plane ticket|2|transport
걸어오다|to walk (here)|2|
목적|purpose|2|
방문|visit; room door|2|
입장권|admission ticket|2|activities
마을|village|2|places
해외여행|overseas trip|2|activities
열차|train|2|transport
열차표|train ticket|2|transport
캐리어|suitcase|2|transport
기쁨|joy|2|feelings
각각|each|2|
가득|full|2|
성적표|report card|2|work
제목|title|2|
강하게|strongly|2|
떨어트리다|to drop|2|
칠하다|to paint, color|2|colors
안전하다|to be safe|2|
알리다|to inform|2|
만약|if|2|
부족하다|to be lacking|2|
통장|bankbook|2|shopping
저금|savings|2|shopping
운전면허증|driver's license|2|transport
계좌|bank account|2|shopping
사업|business|2|work
추천하다|to recommend|2|
켤레|pair (of shoes/socks)|2|shopping
공짜|free (of charge)|2|shopping
갈아입다|to change clothes|2|shopping
불편|inconvenience|2|
차다|to be cold; to kick; to wear|2|
결정|decision|2|
남성|man, male|2|people
관심|interest|2|feelings
계약서|contract (document)|2|work
신나다|to be excited|2|feelings
사인하다|to sign|2|work
중앙|center|2|
낙서|graffiti, doodle|2|
고민하다|to worry, agonize over|2|feelings
창고|warehouse, storage room|2|places,home
건조기|dryer|2|home
식기세척기|dishwasher|2|home
알맞다|to be suitable|2|
칭찬|praise|2|feelings
성공|success|2|
결국|in the end|2|
번지점프|bungee jumping|2|activities
취소|cancellation|2|
온천|hot spring|2|places,activities
풍경|scenery|2|nature
지난번|last time|2|time
사흘|three days|2|time
효과|effect|2|
깊다|to be deep|2|
꼬리|tail|2|nature
약하다|to be weak|2|
알아서|on one's own|2|
실례|rudeness, excuse me|2|
부치다|to fry (pancakes); to mail|2|food
선선하다|to be cool (weather)|2|nature
외할아버지|maternal grandfather|2|people
뵙다|to see, meet (humble)|2|people
자판기|vending machine|2|places
나머지|the rest|2|
팔리다|to be sold|2|shopping
맡다|to take charge of; to smell|2|
마흔|forty|2|
담배|cigarette|2|
위해|for (the sake of)|2|
피우다|to smoke; to bloom|2|
벌금|fine (penalty)|2|society
신분증|ID card|2|
신청|application|2|
속도|speed|2|transport
건너가다|to cross over|2|transport
신호|signal|2|transport
안전|safety|2|
지키다|to keep, protect|2|
소화제|digestive medicine|2|body
배탈|upset stomach|2|body
느끼다|to feel|2|feelings
기르다|to raise, grow|2|nature
우선|first of all|2|
강하다|to be strong|2|
습관|habit|2|
향초|scented candle|2|home
편안하다|to be comfortable, at ease|2|feelings
선크림|sunscreen|2|body,shopping
피부|skin|2|body
빨다|to wash; to suck|2|
관리|management, care|2|
국물|broth|2|food
대회|competition|2|activities
연예인|celebrity|2|people,society
급하다|to be urgent|2|
신청하다|to apply|2|
깜짝|with surprise|2|feelings
별명|nickname|2|people
서비스센터|service center|2|places
멈추다|to stop|2|
찾아가다|to go and see, visit|2|
행동|behavior|2|
옳다|to be right|2|
던지다|to throw|2|
무척|very|2|
엔지니어|engineer|2|work,people
깨지다|to break, shatter|2|
레깅스|leggings|2|shopping
필라테스|Pilates|2|activities
거의|almost|2|
들리다|to be heard; to stop by|2|
편찮다|to be ill (honorific)|2|body
깨다|to wake up; to break|2|
편리하다|to be convenient|2|
조립하다|to assemble|2|
취소하다|to cancel|2|
비교하다|to compare|2|
부분|part|2|
쌓다|to pile up, build up|2|
가구점|furniture store|2|places,home
서양|the West|2|society
분식집|snack bar|2|places,food
남기다|to leave (over)|2|
주방장|head chef|2|food,people
바뀌다|to be changed|2|
댓글|comment (online)|2|
매니저|manager|2|work,people
딱딱하다|to be hard, stiff|2|
대부분|most, mostly|2|
불친절하다|to be unkind|2|people
포장|packaging, wrapping; to-go|2|shopping
수선|mending, alteration|2|shopping
찢어지다|to be torn|2|
줄이다|to reduce, shorten|2|
특이하다|to be unusual|2|
주머니|pocket|2|shopping
매장|store, shop floor|2|shopping,places
패딩|padded jacket|2|shopping
외삼촌|maternal uncle|2|people
와이셔츠|dress shirt|2|shopping
구멍|hole|2|
올라오다|to come up|2|
풀리다|to be solved; to loosen|2|
방향|direction|2|transport
정확하다|to be accurate|2|
그치다|to stop (rain)|2|nature
흐르다|to flow|2|nature
우비|raincoat|2|shopping
주변|surroundings|2|places
미끄러지다|to slip|2|
서두르다|to hurry|2|
온도|temperature|2|nature
목적지|destination|2|transport
변하다|to change|2|
챙기다|to pack, take care of|2|
어머님|mother (honorific)|2|people
끊다|to cut off; to quit|2|
쳐다보다|to stare at|2|
데려오다|to bring (a person)|2|
군인|soldier|2|people
나타나다|to appear|2|
영상|video|2|
연결|connection|2|
움직이다|to move|2|
유학생|international student|2|people,work
식구|family members|2|people
화면|screen|2|home
오래간만|after a long time|2|time
외우다|to memorize|2|work
계곡|valley|2|nature
손녀|granddaughter|2|people
전하다|to pass on, deliver|2|
방문하다|to visit|2|
찌다|to steam; to gain weight|2|food
씹다|to chew|2|food
시다|to be sour|2|food
뽑다|to pull out; to select|2|
촬영|filming, photo shoot|2|activities
유명|fame|2|
사진가|photographer|2|people
골고루|evenly|2|
홍차|black tea|2|food
깎다|to cut, trim; to peel; to haggle|2|
그대로|as it is|2|
프라이팬|frying pan|2|home,food
꽃무늬|floral pattern|2|shopping,colors
조금씩|little by little|2|
굉장히|extremely|2|
냄비|pot|2|home,food
단순하다|to be simple|2|
수족관|aquarium|2|places
정보|information|2|
날다|to fly|2|nature
쟁반|tray|2|home
모자라다|to be short of|2|
관리하다|to manage|2|work
만지다|to touch|2|
공휴일|public holiday|2|time
걸음|step|2|
밟다|to step on|2|
간판|signboard|2|
오랫동안|for a long time|2|time
기계|machine|2|
정문|main gate|2|places
직접|directly, in person|2|
흘리다|to spill, shed|2|
순서|order, sequence|2|
분명하다|to be clear|2|
반복하다|to repeat|2|
인쇄하다|to print|2|work
기회|opportunity|2|
커피콩|coffee bean|2|food
앞치마|apron|2|home
렌터카|rental car|2|transport
궁전|palace|2|places
건너편|the other side|2|places
다행히|fortunately|2|
복도|hallway|2|places
감다|to close (eyes); to wash (hair)|2|
올리다|to raise; to upload|2|
킥보드|kick scooter|2|transport
박수|applause|2|
어린이집|daycare center|2|places
기다|to crawl|2|
뒤집다|to flip over|2|
잠그다|to lock|2|home
늘리다|to increase|2|
기름|oil; gasoline|2|food,transport
미니밴|minivan|2|transport
해외|overseas|2|places
싣다|to load|2|transport
펜션|pension (vacation rental)|2|places
반드시|without fail|2|
전체|whole, entire|2|
반려견|pet dog|2|nature
미루다|to postpone|2|time
제대로|properly|2|
그만두다|to quit|2|work
능력|ability|2|work
결과|result|2|
일자리|job, position|2|work
목표|goal|2|
대단하다|to be great, impressive|2|
결정하다|to decide|2|
성공하다|to succeed|2|
아나운서|announcer|2|people,work
나누다|to share, divide|2|
비비다|to rub; to mix|2|food
성격|personality|2|people
닮다|to resemble|2|people
잔치|feast, party|2|society
백일|100th day (after birth)|2|time,society
미역국|seaweed soup|2|food
출입|entry|2|
대문|front gate|2|home
눈물|tears|2|feelings
평소|usual times|2|time
떨리다|to tremble, be nervous|2|feelings
집중|concentration|2|work
국어|national language (Korean)|2|work
시험장|exam site|2|work,places
독서실|study room (reading room)|2|places,work
자신|oneself; confidence|2|
수능|Korean SAT (CSAT)|2|work,society
바라다|to hope, wish|2|feelings
전혀|not at all|2|
거절하다|to refuse|2|
흔들다|to shake, wave|2|
즐기다|to enjoy|2|feelings
모이다|to gather|2|
디제이|DJ|2|activities
매다|to tie, fasten|2|shopping
행사|event|2|activities
초대장|invitation card|2|
점점|gradually|2|
액자|picture frame|2|home
충분하다|to be enough|2|
스튜디오|studio|2|places
랍스터|lobster|2|food
보석|jewel|2|shopping
주년|anniversary (counter)|2|time
꽃다발|bouquet|2|shopping
고모|aunt (father's sister)|2|people
얼다|to freeze|2|nature
마르다|to dry; to be thin|2|
튀기다|to deep-fry|2|food
썰다|to slice, chop|2|food
주방|kitchen|2|home
양치질|brushing teeth|2|home,body
발바닥|sole of the foot|2|body
잠시|for a moment|2|time
수의사|veterinarian|2|people,nature
참다|to endure, hold back|2|feelings
부드럽다|to be soft|2|
도로|road|2|transport
비교|comparison|2|
고민|worry, concern|2|feelings
당연하지|of course!|2|
생활|life, living|2|
불어|French (language)|2|society
샴페인|champagne|2|food
브이로그|vlog|2|
블로거|blogger|2|people
노력|effort|2|
지루하다|to be boring|2|feelings
분위기|atmosphere, mood|2|
답장|reply|2|
모습|appearance, figure|2|
훨씬|much, far (more)|2|
젊다|to be young|2|people
프로필|profile|2|
뜨개질|knitting|2|activities
농담|joke|2|
자랑|pride, boasting|2|feelings
경험|experience|2|
어플|app|2|
그만|stop; just that much|2|
설명|explanation|2|
재채기|sneeze|2|body
유자차|citron tea|2|food
소식|news|2|
추천|recommendation|2|
오해|misunderstanding|2|
풀다|to untie; to solve|2|
칭찬하다|to praise|2|
따로|separately|2|
급하게|hastily|2|
기사님|driver (polite)|2|transport,people
원하다|to want|2|
교환하다|to exchange|2|shopping
새롭다|to be new|2|
자세히|in detail|2|
단추|button (on clothes)|2|shopping
심하다|to be severe|2|
엄청|extremely|2|
곱다|to be pretty, fine|2|
줍다|to pick up|2|
정리|organizing, tidying|2|home
안방|master bedroom|2|home
다양하다|to be diverse|2|
선택하다|to choose|2|
언어|language|2|society
중미|Central America|2|places
수고|effort, trouble|2|
지각|lateness|2|work,time
내용|content|2|
마치다|to finish|2|
이미|already|2|
놓치다|to miss (a bus, chance)|2|transport
자꾸|repeatedly|2|
대박|awesome, jackpot|2|
고무장갑|rubber gloves|2|home
깔끔하게|neatly|2|home
빗자루|broom|2|home
걸레|rag, mop|2|home
끼다|to wear (gloves, rings); to be stuck|2|shopping
복습하다|to review (lessons)|2|work
모으다|to collect, gather|2|
꾸준히|steadily|2|
갈다|to change; to grind|2|
팔찌|bracelet|2|shopping
첫사랑|first love|2|feelings
소중하다|to be precious|2|feelings
벌다|to earn|2|work,shopping
양복|suit|2|shopping
횟집|raw fish restaurant|2|places,food
역시|as expected|2|
훌륭하다|to be excellent|2|
얻다|to get, gain|2|
완전히|completely|2|
불금|TGIF (Friday night fun)|2|time
똑같이|equally, the same|2|
주로|mainly|2|
졸다|to doze off|2|
정원|garden|2|home,nature
꽃병|vase|2|home
싱크대|kitchen sink|2|home
드디어|finally|2|
위치|location|2|places
성함|name (honorific)|2|people
택배|parcel delivery|2|shopping
섞다|to mix|2|food
데우다|to heat up|2|food
야식|late-night snack|2|food
세다|to count; to be strong|2|
붙이다|to stick, attach|2|
설명하다|to explain|2|
반창고|bandage|2|body
긴장하다|to be nervous|2|feelings
남다|to remain|2|
게으르다|to be lazy|2|people
소설책|novel (book)|2|
단무지|pickled radish|2|food
포장하다|to wrap; to pack to go|2|shopping,food
윷놀이|yutnori (traditional board game)|2|activities,society
서류|documents|2|work
확인하다|to check, confirm|2|
부장님|department head (honorific)|2|work,people
젖다|to get wet|2|
간단히|simply, briefly|2|
특별히|especially|2|
치료하다|to treat, cure|2|body
봉투|envelope, bag|2|shopping
헬멧|helmet|2|transport
복잡하다|to be complicated, crowded|2|
불편하다|to be uncomfortable|2|
익숙하다|to be familiar|2|
복사기|copier|2|work
정리하다|to organize, tidy up|2|home
기억하다|to remember|2|
무대|stage|2|activities,society
검사하다|to inspect, test|2|
마당|yard|2|home
맛집|popular restaurant|2|places,food
미소|smile|2|feelings
소개팅|blind date|2|people
한가하다|to be free, not busy|2|
교수|professor|2|work,people
엽서|postcard|2|
멜로|melodrama|2|activities
화가|painter|2|people
마음씨|nature, disposition|3|people,feelings
세련되다|to be sophisticated, stylish|3|shopping
서투르다|to be clumsy, unskilled|3|
소감|impressions, thoughts|3|feelings
팔순잔치|80th birthday party|3|society,people
이르다|to reach; to be early|3|
소독약|disinfectant|3|body
소독하다|to disinfect|3|body
낚싯바늘|fishhook|3|activities
검토하다|to review, examine|3|work
학장|dean|3|work,people
뒷풀이|after-party|3|activities
예산|budget|3|shopping,work
내달|next month|3|time
성명|full name|3|people
꼼꼼히|meticulously|3|
면적|area (size)|3|
실컷|to one's heart's content|3|
잔디깎이|lawn mower|3|home
광고지|flyer|3|shopping
연설|speech|3|society
뛰어나다|to be outstanding|3|
달성하다|to achieve|3|work
틈틈이|in spare moments|3|time
영리하다|to be clever|3|people
금액|amount of money|3|shopping
실리다|to be printed, published|3|society
불만족스럽다|to be dissatisfied|3|feelings
여쭙다|to ask (humble)|3|people
마중|meeting someone on arrival|3|transport
가리다|to cover, hide|3|
최고급|highest quality|3|shopping
숙이다|to bow, lower|3|
끈적하다|to be sticky|3|
붉다|to be red|3|colors
조언|advice|3|
이쑤시개|toothpick|3|home
기획사|entertainment agency|3|work
붓다|to pour; to swell|3|
여쭤보다|to ask (humble)|3|people
부지런하게|diligently|3|
계약자|contractor|3|work
출입국|immigration, entry and exit|3|transport,society
변경하다|to change, modify|3|
꽁초|cigarette butt|3|
이끌다|to lead|3|
매형|brother-in-law (sister's husband)|3|people
포대기|baby carrier blanket|3|people
백설기|white rice cake|3|food
젖병|baby bottle|3|people
조리원|postpartum care center|3|places
목캔디|throat lozenge|3|body
부케|bridal bouquet|3|society
`;

  root.KC = root.KC || {};
  root.KC.duolingo = { tag: 'duolingo', known: KNOWN, words: WORDS };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.KC.duolingo;
})(typeof window !== 'undefined' ? window : globalThis);

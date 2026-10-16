/*
 * Words from your Duolingo Korean course (exported with Duoninja, Sept 2026).
 *
 * KNOWN: words already in the main word bank; they get the "duolingo" topic added.
 * WORDS: the rest, one per line:  korean | english | level (1–3) | topics | Korean definition
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
로봇|robot|1||사람처럼 움직이고 일하는 기계
공부방|study room|1|home|책상을 두고 숙제를 하는 아이의 방
탁자|table|1|home|물건을 올려놓는 다리가 있는 가구
사이에|between|1||두 사물의 가운데에
복숭아|peach|1|food|분홍빛 껍질에 털이 있고 물이 많은 여름 과일
경복궁|Gyeongbokgung Palace|1|places,society|서울에 있는 조선 시대의 가장 큰 궁궐
둘째|second; second child|1|people|첫째 다음 순서, 또는 두 번째로 태어난 아이
반팔|short sleeves|1|shopping|팔꿈치까지만 오는 짧은 소매의 옷
스커트|skirt|1|shopping|여자들이 입는 치마를 영어로 부르는 말
쇼핑센터|shopping center|1|places,shopping|여러 가게가 한 건물에 모여 있는 곳
테니스장|tennis court|1|places,activities|라켓으로 공을 치는 운동을 하는 곳
배구|volleyball|1|activities|네트 너머로 공을 손으로 쳐서 넘기는 운동
재미|fun|1|feelings|즐겁고 흥미로운 느낌
샤워실|shower room|1|home|물을 맞으며 몸을 씻는 방
축구장|soccer field|1|places,activities|발로 공을 차는 경기를 하는 넓은 곳
학년|school year, grade|1|work|학교에서 일 년을 단위로 나눈 단계
마이크|microphone|1||소리를 크게 들리게 하려고 입 가까이 대는 기계
조심|caution, care|1||잘못되지 않게 마음을 쓰는 것
자라다|to grow|1|nature|키나 몸이 점점 커지다
오리|duck|1|nature|'꽥꽥' 하고 울며 물에서 헤엄치는 새
사자|lion|1|nature|갈기가 있는 '동물의 왕'
아이고|oh dear!|1|feelings|아프거나 놀랐을 때 내는 소리
베이징|Beijing|1|places|중국의 수도
북쪽|north|1|places|나침반의 바늘이 가리키는 방향, 남쪽의 반대
좋아지다|to get better|1||전보다 나은 상태가 되다
기차표|train ticket|1|transport|철도를 타려고 사는 표
대전|Daejeon|1|places|서울과 부산 사이, 한국 가운데쯤에 있는 도시
상어|shark|1|nature|날카로운 이빨이 있는 무서운 바닷물고기
막내|youngest child|1|people|형제 중에서 가장 나중에 태어난 사람
컵라면|cup noodles|1|food|뜨거운 물만 부으면 먹을 수 있는 그릇에 담긴 면
전화기|telephone|1|home|멀리 있는 사람과 이야기할 때 쓰는 기계
코치|coach|1|activities,people|선수에게 운동을 가르치는 사람
그래서|so, therefore|1||앞의 일 때문에 뒤의 일이 생길 때 쓰는 말
울산|Ulsan|1|places|자동차와 배를 만드는 공장이 많은 한국 남동쪽 도시
그것|that (thing)|1||듣는 사람 가까이 있는 물건을 가리키는 말
에스컬레이터|escalator|1|places|저절로 움직이는 계단
안녕하십니까|hello (formal)|1|people|아주 공손하게 하는 인사말
구십|ninety|1||팔십 다음, 십의 아홉 배가 되는 수
일월|January|1|time|한 해가 시작되는 첫 번째 달
정글|jungle|1|nature|덥고 비가 많이 오는 곳의 나무가 빽빽한 숲
남학생|male student|1|work,people|학교에 다니는 소년
위쪽|upper side, up|1|places|높은 쪽, 아래의 반대
센티미터|centimeter|1||자로 길이를 잴 때 쓰는 작은 단위, cm
팔십|eighty|1||칠십 다음, 십의 여덟 배가 되는 수
지하|basement, underground|1|places|땅 밑, 건물의 아래층
세탁소|dry cleaner's|1|places|돈을 받고 옷을 빨거나 다려 주는 가게
내려가다|to go down|1||높은 곳에서 낮은 곳으로 가다
소고기|beef|1|food|'음매' 하고 우는 동물의 살코기
연락|contact|1||소식을 전하거나 서로 알리는 것
목욕|bath|1|home|온몸을 물로 씻는 것
아래층|downstairs|1|home|건물에서 지금 있는 곳보다 낮은 층
아저씨|middle-aged man, mister|1|people|나이가 든 남자를 친근하게 부르는 말
앞쪽|front|1|places|얼굴이 향하는 방향
사용하다|to use|1||물건이나 도구를 쓰다
속옷|underwear|1|shopping|겉옷 안에 입는 옷
스키장|ski resort|1|places,activities|눈 위에서 미끄러지며 노는 겨울 운동을 하는 곳
재킷|jacket|1|shopping|앞이 열리고 소매가 있는 짧은 겉옷
글쎄|well…, let me see|1||확실하지 않을 때 대답을 망설이며 하는 말
순두부찌개|soft tofu stew|1|food|몽글몽글한 콩 음식을 넣어 맵게 끓인 국물 요리
잠옷|pajamas|1|shopping,home|밤에 잘 때 입는 옷
스포츠|sports|1|activities|축구, 야구 같은 운동 경기
정말로|really, truly|1||거짓 없이 참으로
여학생|female student|1|work,people|학교에 다니는 소녀
글자|letter, character|1|work|말을 적는 기호, 한글의 '가'나 '나' 같은 것
칠십|seventy|1||육십 다음, 십의 일곱 배가 되는 수
교시|class period|1|work,time|학교에서 수업 시간의 순서를 세는 말
블록|block|1||장난감으로 쌓는 작은 조각
놀이|play, game|1|activities|재미있게 노는 일
필요|need, necessity|1||꼭 있어야 하는 것
기차역|train station|1|transport,places|열차를 타고 내리는 곳
동쪽|east|1|places|해가 뜨는 방향
우동|udon|1|food|굵은 면을 국물에 말아 먹는 일본 음식
아래쪽|lower side, down|1|places|낮은 쪽, 위의 반대
없이|without|1||무엇을 가지지 않은 채로
어묵|fish cake|1|food|생선 살을 갈아서 만든 음식, 오뎅
미터|meter|1||길이를 재는 단위, m
노트|notebook|1|work|글씨를 쓰는 공책
라디오|radio|1|home|소리로만 방송을 듣는 기계
유니폼|uniform|1|shopping,activities|같은 팀이나 회사 사람들이 똑같이 입는 옷
너희|you (plural)|1|people|'너'의 여러 사람
반바지|shorts|1|shopping|무릎 위까지 오는 짧은 아래옷
고맙습니다|thank you|1|people|도움을 받았을 때 하는 인사말
아래|below, under|1|places|낮은 곳, 밑
킬로그램|kilogram|1||무게를 재는 단위, kg
여러분|everyone|1|people|모인 사람들 모두를 높여 부르는 말
반갑습니다|nice to meet you|1|people|처음 만났거나 오랜만에 만났을 때 하는 인사말
때문에|because of|1||어떤 일의 원인이나 이유를 나타내는 말
아니면|or, otherwise|1||그렇지 않으면, 또는
시월|October|1|time|구월 다음 달, 가을의 달
메일|email|1||인터넷으로 주고받는 편지
대화|conversation|1||서로 마주 보고 이야기를 주고받는 것
부자|rich person|1|people|돈이 아주 많은 사람
친하게|closely, in a friendly way|1|people|사이가 가깝게
샴푸|shampoo|1|home|머리를 감을 때 쓰는 비누
오른손|right hand|1|body|왼손의 반대쪽 손
설거지|washing the dishes|1|home|밥을 먹은 뒤 그릇을 씻는 일
결혼하다|to get married|1|people|남자와 여자가 부부가 되다
벗다|to take off (clothes)|1|shopping|입거나 쓴 것을 몸에서 떼어 내다
인사|greeting|1|people|만나거나 헤어질 때 하는 예의 있는 말이나 행동
느리게|slowly|1||빠르지 않게, 천천히
틀리다|to be wrong|1||답이나 사실과 맞지 않다
젤리|jelly|1|food|말랑말랑하고 쫀득한 달콤한 과자
찬물|cold water|1|food|차가운 물
소주|soju|1|food|한국의 투명하고 독한 술
착하다|to be kind|1|people|마음씨가 곱고 바르다
전부|all, everything|1||하나도 빠짐없이 모두
대구|Daegu|1|places|사과가 유명하고 여름에 아주 더운 경상도의 도시
중국집|Chinese restaurant|1|places,food|자장면이나 짬뽕을 파는 식당
그래|yes, okay (casual)|1||친구의 말에 동의할 때 하는 대답
그건|that (thing) is|1||'그것은'을 줄인 말
지난주|last week|1|time|이번 주의 바로 전 주
백만|one million|1||만의 백 배가 되는 수
여보세요|hello (on the phone)|1||전화를 받거나 걸 때 처음 하는 말
놀이터|playground|1|places|미끄럼틀과 그네가 있는 아이들이 노는 곳
버섯|mushroom|1|food|그늘진 곳에서 자라는 우산 모양의 식물
피자|pizza|1|food|둥근 빵 위에 치즈와 토마토소스를 올려 구운 음식
이건|this (thing) is|1||'이것은'을 줄인 말
다음날|the next day|1|time|어떤 날의 바로 뒤에 오는 날
남쪽|south|1|places|북쪽의 반대 방향
샐러드|salad|1|food|채소를 소스에 버무린 서양 음식
오이|cucumber|1|food|길고 초록색이며 아삭한 채소
말레이시아|Malaysia|1|places|쿠알라룸푸르가 수도인 동남아의 나라
매달|every month|1|time|한 달도 빠짐없이 달마다
끝내다|to finish|1||하던 일을 마치다
러시아|Russia|1|places|모스크바가 수도인 세계에서 가장 큰 나라
스타일|style|1|shopping|옷차림이나 모습의 특별한 모양
그쪽|that way; you|1||그 방향, 또는 상대방을 가리키는 말
배추|napa cabbage|1|food|김치를 담그는 잎이 큰 채소
깨끗하게|cleanly|1||더럽지 않게
새우|shrimp|1|food|등이 굽고 껍데기가 있는 바다 생물, 익히면 빨개진다
버튼|button|1||누르면 기계가 작동하는 작은 장치
무엇|what|1||모르는 물건이나 일을 물을 때 쓰는 말
배드민턴|badminton|1|activities|라켓으로 깃털 공을 치는 운동
새로|newly|1||처음으로, 다시 새롭게
중국어|Chinese (language)|1|society|베이징 사람들이 쓰는 말
댄스|dance|1|activities|음악에 맞춰 추는 춤
빌딩|building|1|places|도시의 높은 건물
바이올린|violin|1|activities|턱에 대고 활로 켜는 작은 현악기
그분|that person (honorific)|1|people|'그 사람'을 높여 부르는 말
상추|lettuce|1|food|고기를 싸 먹는 초록 잎 채소
베를린|Berlin|1|places|독일의 수도
음식점|restaurant|1|places,food|돈을 내고 밥을 사 먹는 곳
감기약|cold medicine|1|body|콧물과 기침이 나는 병에 먹는 약
바쁘게|busily|1||할 일이 많아 쉴 틈 없이
그때|at that time|1|time|앞에서 말한 바로 그 시간
일하다|to work|1|work|돈을 벌려고 몸이나 머리를 쓰다
육십|sixty|1||오십 다음, 십의 여섯 배가 되는 수
독일|Germany|1|places|베를린이 수도인 유럽의 나라
재미있게|in a fun way|1||즐겁고 흥미롭게
축하하다|to congratulate|1||좋은 일을 함께 기뻐하며 인사하다
어린이날|Children's Day|1|time,society|5월 5일, 아이들을 위한 날
퍼즐|puzzle|1|activities|조각을 맞추거나 문제를 푸는 놀이
기쁘게|happily|1|feelings|즐거운 마음으로
쉽게|easily|1||어렵지 않게
샤워|shower|1|home|위에서 쏟아지는 물로 몸을 씻는 것
지하철역|subway station|1|transport,places|땅속을 다니는 열차를 타는 곳
식빵|sliced bread|1|food|네모나게 잘라서 파는 빵
친절|kindness|1|people|남에게 상냥하고 따뜻하게 대하는 태도
아르바이트|part-time job|1|work|학생이 공부하면서 잠깐 하는 일
시작|start|1||어떤 일을 처음 하는 것
좋게|nicely|1||좋은 쪽으로
대학|college|1|work|고등학교를 졸업하고 들어가는 학교
달력|calendar|1|home,time|날짜와 요일을 적어 놓은 종이
서다|to stand; to stop|1||발로 몸을 세우다, 또는 차가 멈추다
녹차|green tea|1|food|초록색 찻잎으로 만든 차
음료|beverage|1|food|마시는 것
몽골|Mongolia|1|places|칭기즈 칸의 나라, 수도는 울란바토르
축하합니다|congratulations|1||좋은 일이 생긴 사람에게 하는 인사말
볶음밥|fried rice|1|food|밥과 채소를 기름에 볶은 음식
밀가루|flour|1|food|빵이나 국수를 만드는 하얀 분말
토마토|tomato|1|food|빨갛고 둥글며 케첩을 만드는 채소
인분|serving, portion|1|food|사람 수에 맞춰 음식의 양을 세는 말
가지|kind, sort; eggplant|1||종류를 세는 말, 또는 보라색 채소
메뉴|menu|1|food|식당에서 파는 음식의 목록
점수|score|1|work|시험이나 경기의 결과를 나타낸 숫자
글씨|handwriting|1|work|손으로 쓴 글자의 모양
크게|loudly, big|1||작지 않게, 소리가 높게
스티커|sticker|1||뒤에 풀이 있어 붙이는 그림 종이
그림책|picture book|1||삽화가 많이 있는 아이들 책
축구공|soccer ball|1|activities|발로 차는 경기에 쓰는 공
빠르게|quickly|1||느리지 않게
색연필|colored pencil|1|colors,work|여러 가지 빛깔로 칠하는 필기구
이해하다|to understand|1||뜻을 알아듣다
메모|note, memo|1|work|잊지 않으려고 짧게 적은 글
신용카드|credit card|1|shopping|현금 대신 내고 나중에 갚는 플라스틱
아무|any|1||어떤 것이든 상관없이
동전|coin|1|shopping|쇠로 만든 둥근 돈
물론|of course|1||말할 것도 없이
잊어버리다|to forget|1||기억하던 것을 생각해 내지 못하게 되다
보여주다|to show|1||다른 사람이 볼 수 있게 하다
저거|that (thing) over there|1||멀리 있는 물건을 가리키는 말
하지만|but|1||앞의 말과 반대되는 말을 이을 때 쓰는 말
이마|forehead|1|body|눈썹 위의 얼굴 부분
녹색|green|1|colors|풀이나 나뭇잎과 같은 색
검정|black|1|colors|까만 색
지우다|to erase|1||쓴 글씨나 그림을 없애다
이사하다|to move (house)|1|home|사는 집을 다른 곳으로 옮기다
켜다|to turn on|1|home|불이나 기계를 작동하게 하다
최고|the best|1||가장 좋은 것
목욕하다|to take a bath|1|home|온몸을 물로 씻다
물고기|fish|1|nature|물속에서 지느러미로 헤엄치는 동물
첫날|first day|1|time|어떤 일을 시작한 맨 처음의 날
세계|world|1|society|지구 위의 모든 나라
여러|several|1||수가 많은
이곳|this place|1|places|말하는 사람이 있는 장소
나이|age|1|people|태어나서 지금까지 산 햇수
예약하다|to reserve|1|activities|자리나 방을 미리 잡아 두다
슈퍼마켓|supermarket|1|places,shopping|먹을거리와 생활용품을 파는 큰 가게
안쪽|inside|1|places|안으로 향한 쪽
소스|sauce|1|food|음식에 뿌리거나 찍어 먹는 양념
옆집|house next door|1|home,places|바로 옆에 있는 집
종이컵|paper cup|1|home|한 번 쓰고 버리는 일회용 컵
베트남|Vietnam|1|places|쌀국수가 유명한 동남아시아의 나라
책방|bookstore|1|places|책을 파는 가게, 서점
인도|India; sidewalk|1|places|카레가 유명한 남아시아의 큰 나라
멕시코|Mexico|1|places|타코가 유명한 미국 남쪽의 나라
스물|twenty|1||열아홉 다음의 수
경찰관|police officer|1|people|도둑을 잡고 시민을 지키는 일을 하는 사람
휴대폰|cell phone|1|home|가지고 다니는 전화기
통화|phone call|1||전화로 이야기를 주고받는 것
그러니까|so, that's why|1||앞의 일이 이유가 되어 뒤의 말을 할 때 쓰는 말
같다|to be the same|1||서로 다르지 않다
유치원|kindergarten|1|places,work|초등학교에 가기 전 아이들이 다니는 곳
빨간불|red light|1|transport,colors|길을 건너지 말라는 신호
달걀|egg|1|food|닭이 낳은 알
스케이트|skating|1|activities|얼음 위에서 미끄러지며 타는 운동
감사|gratitude|1|feelings|고마운 마음
피곤|tiredness|1|body|몸이나 마음이 지쳐서 힘든 상태
일어나다|to get up; to happen|1||누워 있다가 몸을 일으키다
이탈리아|Italy|1|places|피자와 파스타가 유명한 유럽의 나라
그래요|really? / okay|1||상대의 말에 동의하거나 놀랄 때 하는 말
학원|private academy (hagwon)|1|places,work|학교가 끝난 뒤 따로 공부하러 다니는 곳
전주|Jeonju|1|places|비빔밥과 한옥 마을이 유명한 전라북도의 도시
도움|help|1||남을 돕는 일
한식|Korean food|1|food|한국의 전통 음식
사이트|website|1||인터넷에서 정보를 보여 주는 곳
태블릿|tablet|1|home|화면을 손가락으로 누르는 얇고 넓은 컴퓨터
떨어지다|to fall; to fail|1||위에서 아래로 내려오다
비밀번호|password|1||나만 아는 숫자나 글자로 된 열쇠
와이파이|Wi-Fi|1||선 없이 인터넷에 연결하는 방법
이용하다|to use|1||필요한 것을 쓰다
아마|probably|1||확실하지 않지만 그럴 것 같은
비타민|vitamin|1|body|몸에 필요한 영양소, 과일에 많다
사실|actually; fact|1||실제로 있었던 일
그렇다|to be so|1||그와 같다
헬스장|gym|1|places,activities|기구를 써서 운동하는 실내 공간
다이어트|diet|1|body|살을 빼려고 음식을 줄이는 것
야채|vegetables|1|food|밭에서 기르는 먹을 수 있는 식물
어젯밤|last night|1|time|어제의 밤
종류|kind, type|1||비슷한 것끼리 나눈 무리
튀김|fried food|1|food|기름에 넣어 바삭하게 익힌 음식
지난달|last month|1|time|이번 달의 바로 전 달
짬뽕|jjamppong (spicy seafood noodles)|1|food|해물과 채소를 넣은 맵고 빨간 중국식 국수
죄송합니다|I'm sorry|1||잘못했을 때 공손하게 하는 사과의 말
냄새|smell|1||코로 맡는 것
이게|this (thing) is|1||'이것이'를 줄인 말
블로그|blog|1||인터넷에 글과 사진을 올리는 개인 공간
아니|no (casual)|1||친구에게 '그렇지 않다'고 대답하는 말
탕수육|sweet and sour pork|1|food|튀긴 돼지고기에 달고 신 소스를 부은 음식
자장면|jajangmyeon (black bean noodles)|1|food|검은 춘장 소스로 비벼 먹는 중국식 국수
그렇지만|but, however|1||앞의 말과 반대되는 말을 할 때 쓰는 말
쇼핑백|shopping bag|1|shopping|산 물건을 담는 종이나 비닐 가방
퍼센트|percent|1||백을 기준으로 한 비율, %
모레|the day after tomorrow|1|time|내일의 다음 날
립스틱|lipstick|1|shopping|입술에 바르는 화장품
세일|sale|1|shopping|물건값을 깎아서 파는 것
선글라스|sunglasses|1|shopping|햇빛을 막는 검은 안경
그런|such, that kind of|1||그러한
스웨터|sweater|1|shopping|털실로 짠 따뜻한 윗옷
디자인|design|1|shopping|물건이나 옷의 모양과 색을 꾸미는 것
초등학생|elementary school student|1|people,work|여덟 살부터 열세 살쯤의 어린이
그날|that day|1|time|앞에서 말한 바로 그 날
서쪽|west|1|places|해가 지는 방향
여기저기|here and there|1|places|이곳저곳 여러 곳
가이드|guide|1|activities,people|여행객에게 길과 장소를 안내하는 사람
포르투갈어|Portuguese (language)|1|society|리스본과 브라질에서 쓰는 말
브라질|Brazil|1|places|축구가 유명하고 삼바 축제가 열리는 남아메리카의 나라
외국|foreign country|1|places|자기 나라가 아닌 다른 나라
스페인|Spain|1|places|투우와 플라멩코가 유명한 유럽의 나라
흐리다|to be cloudy|1|nature|구름이 끼어 날씨가 맑지 않다
우리나라|our country (Korea)|1|society|한국 사람이 자기 조국을 부르는 말
시끄럽게|noisily|1||소리가 크고 요란하게
중학생|middle school student|1|people,work|열네 살부터 열여섯 살쯤의 청소년
통화하다|to talk on the phone|1||전화로 이야기하다
매우|very|1||아주, 몹시
광주|Gwangju|1|places|무등산이 있는 전라도의 큰 도시
교회|church|1|places|기독교 신자들이 모여 기도하는 곳
고구마|sweet potato|1|food|땅속에서 자라는 보라색 껍질의 달콤한 뿌리
돼지고기|pork|1|food|'꿀꿀' 하고 우는 동물의 살코기
슬리퍼|slippers|1|shopping|뒤가 트여 쉽게 신고 벗는 신발
오렌지|orange|1|food|주황색의 둥근 과일, 주스를 만든다
십만|one hundred thousand|1||만의 열 배가 되는 수
화장품|cosmetics|1|shopping|얼굴이나 피부에 바르는 크림, 립스틱 같은 것
영화배우|movie actor|1|people|극장 화면에 나와 연기하는 사람
모델|model|1|people|옷을 입고 사진을 찍거나 무대에 서는 사람
글쎄요|well…, I'm not sure|1||잘 모르거나 생각 중일 때 공손하게 하는 말
사월|April|1|time|삼월 다음 달, 벚꽃이 피는 달
삼촌|uncle|1|people|아버지의 남동생
가지다|to have, own|1||손에 쥐거나 자기 것으로 하다
접시|plate|1|food,home|음식을 담는 납작한 그릇
냅킨|napkin|1|food|식사할 때 입을 닦는 종이
금방|soon, right away|1|time|아주 짧은 시간 안에
오븐|oven|1|home|빵이나 고기를 굽는 상자 모양의 기계
그럼|then, well then|1||그렇다면
돈가스|pork cutlet|1|food|돼지고기를 튀긴 일본식 음식
마늘|garlic|1|food|맵고 냄새가 강한 하얀 양념 채소
오징어|squid|1|food|다리가 열 개인 바다 동물
마리|counter for animals|1|nature|동물을 세는 단위
카트|cart|1|shopping|마트에서 물건을 담아 미는 수레
조심히|carefully|1||주의해서
한번|once|1||한 차례
모든|all, every|1||빠짐없이 전부의
카레|curry|1|food|노란 소스를 밥에 얹어 먹는 인도에서 온 음식
햄버거|hamburger|1|food|둥근 빵 사이에 고기를 넣은 음식
저분|that person (honorific)|1|people|'저 사람'을 높여 부르는 말
걸어가다|to walk (there)|1||발로 걸으며 저쪽으로 가다
그곳|that place|1|places|앞에서 말한 그 장소
저런|that kind of|1||저러한
뛰다|to run, jump|1||빠르게 달리다
두유|soy milk|1|food|콩으로 만든 우유
라떼|latte|1|food|우유를 많이 넣은 커피
주문|order|1|food,shopping|물건이나 음식을 달라고 하는 것
잊다|to forget|1||기억하지 못하다
종이|paper|1|home|글씨를 쓰거나 그림을 그리는 얇은 것
늦게|late|1|time|정해진 때보다 뒤에
왼쪽|left|1|places|오른쪽의 반대
잘못|mistake, wrongly|1||옳지 않게 한 일
영국|United Kingdom|1|places|런던이 수도인 유럽의 섬나라
사용|use|1||물건을 쓰는 것
거기|there|1|places|듣는 사람 가까이 있는 곳
사이|between; relationship|1||두 사물의 중간, 또는 사람끼리의 관계
놓다|to put, place|1||물건을 어떤 곳에 두다
벨트|belt|1|shopping|바지 허리에 두르는 띠
사이다|lemon-lime soda|1|food|달고 투명한 탄산음료
가운데|middle|1|places|한복판, 중간
요일|day of the week|1|time|월, 화, 수, 목처럼 일주일의 각 날
유럽|Europe|1|places|프랑스, 독일, 영국이 있는 대륙
유월|June|1|time|오월 다음 달, 여름이 시작되는 달
당근|carrot|1|food|토끼가 좋아하는 주황색 채소
이월|February|1|time|일월 다음 달, 가장 짧은 달
십일월|November|1|time|시월 다음 달, 늦가을의 달
낮잠|nap|1|time|낮에 자는 잠
오월|May|1|time|사월 다음 달, 어린이날이 있는 달
개월|month(s) (counter)|1|time|달을 세는 단위
약간|slightly|1||조금
지내다|to get along, spend (time)|1||생활하며 시간을 보내다
오토바이|motorcycle|1|transport|바퀴가 두 개 달린 엔진이 있는 탈것
전철|subway train|1|transport|전기로 움직이는 열차
잠깐|a moment|1|time|아주 짧은 시간
저희|we (humble)|1|people|'우리'를 낮추어 부르는 말
멀리|far away|1||먼 곳으로
날짜|date|1|time|몇 월 며칠인지를 나타내는 것
구월|September|1|time|팔월 다음 달, 가을이 시작되는 달
묻다|to ask|1||모르는 것을 알려 달라고 말하다
여러가지|various|1||종류가 많은
프로그램|program|1||텔레비전이나 컴퓨터에서 보거나 쓰는 내용
졸리다|to be sleepy|1|body|잠이 오다
웃다|to laugh, smile|1|feelings|기뻐서 얼굴이 활짝 펴지고 소리를 내다
어떻게|how|1||어떤 방법으로
마다|every|1||하나하나 빠짐없이
며칠|a few days; what date|1|time|몇 날, 또는 그 달의 몇째 날
동안|during, for|1|time|어떤 일이 이어지는 시간
이틀|two days|1|time|두 날
옛날|the old days|1|time|아주 오래전
생각|thought|1||머리로 헤아리고 판단하는 것
가장|most|1||여럿 중에서 제일
죄송하다|to be sorry|1|feelings|미안해서 마음이 편하지 않다
특히|especially|1||보통과 달리 더
못하다|to be unable to; to be poor at|1||어떤 일을 할 수 없다
히터|heater|1|home|방을 따뜻하게 하는 기계
과목|subject (school)|1|work|수학, 영어처럼 나눈 공부의 분야
그저께|the day before yesterday|1|time|어제의 전날
저곳|that place|1|places|멀리 있는 장소
초대|invitation|1||손님을 불러서 오게 하는 것
힘들다|to be hard, tiring|1|feelings|어렵고 고되다
중간|middle|1||가운데
넥타이|necktie|1|shopping|셔츠 목에 매는 긴 천
청바지|jeans|1|shopping|파란 데님으로 만든 아래옷
책장|bookshelf|1|home|책을 꽂아 두는 가구
커플|couple|1|people|사귀는 두 사람
아주|very|1||보통보다 훨씬 더
꽃집|flower shop|1|places|꽃을 파는 가게
스카프|scarf|1|shopping|목에 두르는 얇은 천
장미|rose|1|nature|가시가 있는 빨간 꽃, 사랑을 뜻한다
새해|new year|1|time|새로 시작되는 해
자다|to sleep|1|home|눈을 감고 잠을 이루다
쿠키|cookie|1|food|작고 납작하게 구운 과자
망고|mango|1|food|노랗고 달콤한 열대 과일
보드게임|board game|1|activities|판 위에서 말을 움직이며 하는 놀이
감자|potato|1|food|땅속에서 자라는 둥근 채소, 튀겨 먹는다
수프|soup|1|food|서양식 국물 요리
풍선|balloon|1||공기를 불어 넣어 부풀리는 고무 주머니
빵집|bakery|1|places,food|빵을 만들어 파는 가게
초대하다|to invite|1||손님을 불러서 오게 하다
십이월|December|1|time|한 해의 마지막 달
와인|wine|1|food|포도로 만든 술
계속|continuously|1||끊이지 않고 이어서
동물병원|animal hospital|1|places,nature|아픈 개나 고양이를 치료하는 곳
상자|box|1|home|물건을 넣는 네모난 통
닭고기|chicken (meat)|1|food|'꼬끼오' 하고 우는 새의 살코기
나쁘다|to be bad|1||좋지 않다
고프다|to be hungry|1|food|배 속이 비어 먹고 싶다
마음|heart, mind|1|feelings|생각하고 느끼는 사람의 속
혼자|alone|1||다른 사람 없이 하나만
로마|Rome|1|places|콜로세움이 있는 이탈리아의 수도
좁다|to be narrow|1||공간이 넓지 않다
뮤지컬|musical|1|activities|노래와 춤으로 이야기를 보여 주는 공연
매년|every year|1|time|해마다
뉴욕|New York|1|places|자유의 여신상이 있는 미국의 큰 도시
일본어|Japanese (language)|1|society|도쿄 사람들이 쓰는 말
미리|in advance|1||어떤 일이 있기 전에 먼저
언제나|always|1||어느 때나 늘
도쿄|Tokyo|1|places|일본의 수도
비디오|video|1||영상을 녹화하거나 보는 것
파리|Paris; fly (insect)|1|places|에펠탑이 있는 프랑스의 수도
거짓말|lie|1||사실이 아닌 것을 사실처럼 하는 말
점심시간|lunchtime|1|time,food|낮에 밥을 먹으며 쉬는 때
스테이크|steak|1|food|두껍게 구운 소고기 요리
얘기|talk, story|1||'이야기'를 줄인 말
레스토랑|restaurant|1|places,food|서양식 음식을 파는 식당
행복하게|happily|1|feelings|기쁘고 만족스럽게
계획|plan|1||앞으로 할 일을 미리 정한 것
어서|quickly; welcome|1||빨리, 또는 손님을 반길 때 하는 말
간단하다|to be simple|1||복잡하지 않다
자기소개|self-introduction|1|people|처음 만난 사람에게 나에 대해 말하는 것
마스크|mask|1|body|입과 코를 가리는 것
말씀|words (honorific)|1|people|윗사람의 말을 높여 부르는 말
부탁|request, favor|1||어떤 일을 해 달라고 청하는 것
나다|to come out, occur|1||생기거나 밖으로 나오다
가위|scissors|1|home|종이나 천을 자르는 도구
시간표|timetable|1|time,work|요일별 수업 순서를 정리한 표
미술|art|1|activities,work|그림이나 조각을 만드는 예술
자르다|to cut|1||칼이나 가위로 끊다
신다|to put on (shoes, socks)|1|shopping|신발이나 양말을 발에 꿰다
운동복|sportswear|1|shopping|체육 시간에 입는 편한 옷
중학교|middle school|1|places,work|초등 과정을 마치고 3년 동안 다니는 곳
나중|later|1|time|얼마 시간이 지난 뒤
코끼리|elephant|1|nature|코가 길고 몸집이 아주 큰 동물
미안하다|to be sorry|1|feelings|남에게 잘못해서 마음이 편하지 않다
인형|doll|1||사람이나 동물 모양의 장난감
싸우다|to fight, argue|1|feelings|말이나 힘으로 서로 다투다
기다리다|to wait|1||사람이나 때가 오기를 바라며 시간을 보내다
뒤쪽|back side|1|places|뒤로 향한 쪽
지나가다|to pass by|1||어떤 곳을 거쳐서 가다
떠나다|to leave|1||있던 곳에서 다른 곳으로 가다
실수|mistake|1||조심하지 않아서 한 잘못
이유|reason|1||어떤 일이 생긴 까닭
삼십|thirty|1||이십 다음, 십의 세 배가 되는 수
늦다|to be late|1|time|정해진 때보다 뒤지다
고깃집|Korean barbecue restaurant|1|places,food|고기를 구워 먹는 식당
이따가|a little later|1|time|조금 지난 뒤에
십오|fifteen|1||십사 다음의 수
저기요|excuse me|1||모르는 사람을 부를 때 하는 말
구경하다|to look around|1|activities|흥미 있는 것을 보다
잃다|to lose|1||가지고 있던 것이 없어지다
혹시|by any chance|1||만일, 어쩌다가
잡다|to catch, grab|1||손으로 쥐다
무료|free of charge|1|shopping|돈을 내지 않음
그냥|just|1||특별한 이유 없이
사이즈|size|1|shopping|옷이나 신발의 크기
짧다|to be short|1||길이가 길지 않다
쇼핑몰|shopping mall|1|places,shopping|많은 가게가 모인 큰 건물
얼마나|how (much)|1||어느 정도로
모양|shape|1||겉으로 보이는 생김새
블라우스|blouse|1|shopping|여자들이 입는 얇은 윗옷
무슨|what (kind of)|1||어떤 종류의
아무것|anything|1||어떤 것이든
더럽다|to be dirty|1|home|깨끗하지 않다
물어보다|to ask|1||모르는 것을 질문하다
귀엽다|to be cute|1||사랑스럽고 예쁘다
버리다|to throw away|1|home|필요 없는 것을 내던지다
눕다|to lie down|1||몸을 바닥에 길게 대다
옷장|wardrobe|1|home|옷을 넣어 두는 가구
돕다|to help|1||남의 일을 거들다
칠월|July|1|time|유월 다음 달, 여름 방학이 시작되는 달
팔월|August|1|time|칠월 다음 달, 가장 더운 달
시작하다|to start|1||어떤 일을 처음으로 하다
스페인어|Spanish (language)|1|society|마드리드와 멕시코에서 쓰는 말
나라|country|1|society|한 정부 아래 사는 사람과 땅
파나마|Panama|1|places|운하가 유명한 중앙아메리카의 나라
배우다|to learn|1|work|새로운 지식이나 기술을 익히다
사십|forty|1||삼십 다음, 십의 네 배가 되는 수
내다|to pay; to hand in|1||돈을 주거나 물건을 제출하다
준비|preparation|1||미리 마련하는 것
오십|fifty|1||사십 다음, 십의 다섯 배가 되는 수
갑자기|suddenly|1||생각할 틈 없이 빨리
다시|again|1||한 번 더
맞다|to be right; to fit|1||틀리지 않다
이십|twenty|1||십의 두 배가 되는 수
여덟|eight|1||일곱 다음의 수
마지막|last|1||맨 끝
잠깐만요|just a moment|1||조금 기다려 달라고 하는 말
수학|math|1|work|숫자와 계산을 배우는 과목
아홉|nine|1||여덟 다음의 수
요가|yoga|1|activities|몸을 늘리고 숨을 고르는 운동
일곱|seven|1||여섯 다음의 수
일찍|early|1|time|이른 시간에
얼음|ice|1|food|물이 얼어서 단단해진 것
소다|soda|1|food|톡 쏘는 탄산음료
차갑다|to be cold (to the touch)|1||온도가 낮아서 시리다
건강하다|to be healthy|1|body|몸이 아프지 않고 튼튼하다
폴더|folder|1|work|서류를 끼워 두는 것, 또는 컴퓨터의 파일 묶음
지우개|eraser|1|work|연필 글씨를 없애는 고무
가져오다|to bring|1||물건을 가지고 오다
준비하다|to prepare|1||필요한 것을 미리 마련하다
집안일|housework|1|home|청소, 빨래 같은 집에서 하는 일
모두|everyone, all|1||빠짐없이 다
오래|for a long time|1|time|긴 시간 동안
드레스|dress (gown)|1|shopping|여자가 입는 길고 화려한 원피스
믿다|to believe|1||사실이라고 생각하다
키우다|to raise (a pet, child)|1|nature,people|동물이나 아이를 길러서 크게 하다
살다|to live|1||목숨을 이어 가다, 어떤 곳에서 지내다
다르다|to be different|1||같지 않다
서로|each other|1||둘 이상이 함께, 각자가 상대에게
처음|first time, beginning|1||맨 앞, 시작
이야기|story, talk|1||어떤 일에 대해 하는 말
쿠폰|coupon|1|shopping|할인을 받을 수 있는 표
배부르다|to be full (stomach)|1|food|많이 먹어서 배가 꽉 차다
여자친구|girlfriend|1|people|사귀는 이성, 그녀
한강|Han River|1|places,nature|서울 한가운데를 흐르는 큰 강
거리|street; distance|1|places|사람이나 차가 다니는 길
스피커|speaker|1|home|소리를 크게 내보내는 기계
소리|sound|1||귀로 듣는 것
기타|guitar|1|activities|줄이 여섯 개 있는 악기
밴드|band|1|activities|함께 악기를 연주하는 그룹
노래하다|to sing|1|activities|목소리로 음악을 부르다
모르다|to not know|1||알지 못하다
시끄럽다|to be noisy|1||소리가 커서 귀가 아프다
즐겁게|joyfully|1|feelings|기쁘고 신나게
함께|together|1||여럿이 같이
춤추다|to dance|1|activities|음악에 맞춰 몸을 움직이다
일기|diary|1||날마다 겪은 일을 적는 글
생선|fish (food)|1|food|먹으려고 잡은 물고기
식탁|dining table|1|home,food|밥을 먹을 때 쓰는 탁자
도착하다|to arrive|1|transport|목적지에 다다르다
연락하다|to contact|1||소식을 전하다
트럭|truck|1|transport|짐을 싣는 큰 차
카운터|counter|1|places|가게에서 계산하는 곳
전화번호|phone number|1||통화할 때 누르는 숫자
중요하다|to be important|1||아주 귀하고 소중하다
요구르트|yogurt|1|food|우유를 발효시킨 새콤한 음료
플라스틱|plastic|1||가볍고 단단한, 병이나 그릇을 만드는 재료
크림빵|cream bun|1|food|부드럽고 달콤한 속이 들어 있는 빵
감자칩|potato chips|1|food|얇게 썰어 튀긴 바삭한 과자
벤치|bench|1|places|공원에 있는 긴 의자
빨대|straw|1|food|음료를 빨아 마시는 가는 관
바나나우유|banana milk|1|food|노란 과일 맛이 나는 한국의 유명한 음료
전자레인지|microwave oven|1|home|음식을 빨리 데우는 기계
소시지|sausage|1|food|고기를 갈아 긴 껍질에 넣은 음식
포크|fork|1|food|음식을 찍어 먹는 서양식 도구
삼각김밥|triangle kimbap|1|food|세모 모양으로 만든 편의점 주먹밥
도시락|packed lunch|1|food|밖에서 먹으려고 상자에 담은 밥
아메리카노|americano|1|food|물을 탄 쓴 커피
아이스|iced|1|food|얼음을 넣은 차가운
그럼요|of course|1||당연하다고 대답하는 말
캐나다|Canada|1|places|단풍잎이 국기에 있는 북아메리카의 나라
고등학생|high school student|1|people,work|열일곱 살부터 열아홉 살쯤의 청소년
어리다|to be young|1|people|나이가 적다
제일|the most, best|1||가장
남대문|Namdaemun|1|places,society|서울에 있는 옛 성문, 숭례문
길다|to be long|1||길이가 짧지 않다
걸리다|to take (time); to catch (a cold)|1||시간이 들다, 또는 병이 생기다
내리다|to get off; to fall (rain)|1|transport|탈것에서 밖으로 나오다, 비나 눈이 오다
보이다|to be seen, look|1||눈에 띄다
불다|to blow|1|nature|바람이 일어나다, 입으로 바람을 내다
삼계탕|ginseng chicken soup|1|food|닭에 인삼과 찹쌀을 넣고 끓인 여름 보양식
궁금하다|to be curious|1|feelings|무엇인지 알고 싶다
필통|pencil case|1|work|연필과 펜을 넣는 통
말하다|to speak|1||생각을 소리 내어 나타내다
외국어|foreign language|1|society|다른 나라의 말
어느|which|1||여럿 중에 하나를 물을 때 쓰는 말
체크인|check-in|1|transport|호텔이나 공항에서 도착을 알리고 등록하는 것
끝나다|to end|1||일이 다 이루어지다
인도네시아|Indonesia|1|places|섬이 많고 수도가 자카르타인 나라
탁구|table tennis|1|activities|작은 공을 네트 너머로 치는 실내 운동
열둘|twelve|1||열하나 다음의 수
일본|Japan|1|places|도쿄가 수도인 한국 동쪽의 섬나라
달리기|running|1|activities|빨리 뛰는 운동
빠르다|to be fast|1||속도가 높다
프랑스|France|1|places|에펠탑이 있는 유럽의 나라
이번|this time|1|time|이제 돌아온 차례
올림픽|Olympics|1|activities|4년마다 열리는 세계 운동 경기 대회
이모|aunt (mother's sister)|1|people|어머니의 언니나 여동생
끄다|to turn off|1|home|불이나 기계를 멈추다
캐릭터|character|1||만화나 게임에 나오는 인물
바꾸다|to change|1||다른 것으로 고치거나 교환하다
고르다|to choose|1|shopping|여럿 중에서 마음에 드는 것을 뽑다
레벨|level|1||정도나 단계
이기다|to win|1|activities|경기에서 상대를 꺾다
서비스|service|1||손님을 위해 하는 일, 또는 공짜로 주는 것
짜장면|jajangmyeon (black bean noodles)|1|food|검은 소스를 비벼 먹는 중국식 국수
나오다|to come out|1||안에서 밖으로 오다
벌써|already|1||생각보다 일찍
피씨방|PC bang (internet cafe)|1|places,activities|돈을 내고 컴퓨터 게임을 하는 곳
생기다|to come into being|1||없던 것이 새로 있게 되다
문자|text message|1||휴대폰으로 보내는 짧은 글
걱정하다|to worry|1|feelings|불안해하며 마음을 쓰다
넘어지다|to fall down|1||서 있다가 바닥에 쓰러지다
남동생|younger brother|1|people|나보다 어린 남자 형제
이메일|email|1||인터넷으로 보내는 편지
전화하다|to call|1||통화를 걸다
어떡해요|oh no, what do I do?|1|feelings|곤란하고 당황했을 때 하는 말
아주머니|ma'am, middle-aged woman|1|people|나이가 든 여자를 부르는 말
조심하다|to be careful|1||잘못되지 않게 주의하다
빨리|quickly|1||짧은 시간에
디저트|dessert|1|food|식사 후에 먹는 단 음식
드리다|to give (humble)|1|people|윗사람에게 주다
잃어버리다|to lose|1||가지고 있던 물건이 없어지다
아까|a little while ago|1|time|조금 전에
시키다|to order (food)|1|food|음식을 주문하다, 또는 일을 하게 하다
메뉴판|menu (board)|1|food|음식 이름과 값을 적은 판
방금|just now|1|time|바로 조금 전
오랜만|a long time (since)|1|time|오래 지난 뒤
한식당|Korean restaurant|1|places,food|불고기나 비빔밥을 파는 가게
초등학교|elementary school|1|places,work|여덟 살부터 여섯 해 동안 다니는 곳
엘리베이터|elevator|1|places|건물에서 층을 오르내리는 상자 모양의 기계
고장나다|to break down|1|home|기계가 망가져서 작동하지 않다
장소|place, venue|1|places|어떤 일이 일어나는 곳
태국|Thailand|1|places|방콕이 수도인 동남아시아의 나라
죄송해요|I'm sorry|1||미안하다고 공손하게 하는 말
드럼|drums|1|activities|막대기로 두드려 소리를 내는 악기
조용히|quietly|1||소리 없이
아직|still, yet|1||어떤 때가 되기 전까지, 여전히
소풍|picnic|1|activities|경치 좋은 곳에 나가 놀고 오는 것
치다|to hit; to play (tennis, piano)|1|activities|손이나 도구로 때리다, 피아노나 테니스를 하다
그러면|then|1||그렇게 한다면
과학|science|1|work|자연의 원리를 연구하는 학문
열다|to open|1||닫힌 것을 젖히다
가르치다|to teach|1|work|지식이나 기술을 알려 주다
바닥|floor|1|home|방이나 땅의 평평한 아래 면
칠판|blackboard|1|work|분필로 글씨를 쓰는 교실 앞의 판
닦다|to wipe; to brush (teeth)|1|home|더러운 것을 문질러 없애다
누구|who|1||모르는 사람을 물을 때 쓰는 말
걸다|to hang; to make (a call)|1||벽에 매달다, 또는 전화를 하다
그리다|to draw|1|activities|연필이나 물감으로 모양을 나타내다
누가|who (subject)|1||'누구가'를 줄인 말
도와주다|to help|1||남의 일을 거들어 주다
고치다|to fix|1||고장 난 것을 바로잡다
삼월|March|1|time|이월 다음 달, 봄과 새 학기가 시작되는 달
생신|birthday (honorific)|1|time,people|윗사람의 태어난 날을 높여 부르는 말
사랑하다|to love|1|feelings|아끼고 좋아하다
만들다|to make|1||재료로 새로운 것을 이루다
받다|to receive|1||남이 주는 것을 가지다
언제|when|1|time|어느 때
다음|next|1|time|이번 바로 뒤
저쪽|over there|1|places|멀리 있는 방향
오른쪽|right|1|places|왼쪽의 반대
올라가다|to go up|1||낮은 곳에서 높은 곳으로 가다
이름|name|1|people|사람이나 물건을 부르는 말
찍다|to take (a photo)|1|activities|카메라로 사진을 남기다
메시지|message|1||전하는 말이나 글
주소|address|1||사는 곳의 위치를 적은 것
보내다|to send|1||사람이나 물건을 다른 곳으로 가게 하다
따뜻하게|warmly|1||춥지 않게
입다|to wear|1|shopping|옷을 몸에 걸치다
이쪽|this way|1|places|가까이 있는 방향
천천히|slowly|1||느리게
걷다|to walk|1|activities|발을 번갈아 옮기며 가다
닫다|to close|1||열린 것을 막다
넣다|to put in|1||안으로 들어가게 하다
먼저|first|1||다른 것보다 앞서
깨끗이|cleanly|1||더러운 것 없이
주다|to give|1||남에게 건네어 가지게 하다
운전하다|to drive|1|transport|차를 몰다
편하게|comfortably|1||부담 없이 느긋하게
너무|too, very|1||정도가 지나치게
바로|right, immediately|1||곧장, 곧
노트북|laptop|1|home,work|접어서 들고 다니는 컴퓨터
보통|usually|1||흔히, 대개
테이블|table|1|home|탁자
친절히|kindly|1||상냥하게
알려주다|to let know, tell|1||모르는 것을 가르쳐 주다
별로|not particularly|1||그다지
데이트|date|1|activities|좋아하는 사람과 만나서 노는 것
남자친구|boyfriend|1|people|사귀는 이성, 그
없다|to not exist; to not have|1||있지 않다
많이|a lot|1||수나 양이 넉넉하게
대학생|college student|1|people,work|캠퍼스에서 전공을 공부하는 사람
있다|to be, exist; to have|1||존재하다, 또는 가지다
적다|to write down; to be few|1||글로 쓰다, 또는 수가 많지 않다
알다|to know|1||배우거나 경험해서 이해하다
부르다|to call; to sing|1||이름을 불러 오게 하다, 노래하다
우와|wow|1|feelings|놀랍거나 감탄할 때 내는 소리
어렵다|to be difficult|1||하기 쉽지 않다
콜라|cola|1|food|까맣고 톡 쏘는 달콤한 음료
되다|to become|1||어떤 상태나 신분으로 바뀌다
얼마|how much|1|shopping|값이나 양을 물을 때 쓰는 말
갈비|galbi (ribs)|1|food|양념해서 구운 소나 돼지의 갈빗대 고기
물건|thing, item|1|shopping|사고파는 여러 가지 것
마트|mart, supermarket|1|places,shopping|먹을 것과 생활용품을 파는 큰 가게
이런|this kind of; oh no|1||이러한, 또는 놀라거나 실망했을 때 하는 말
터미널|terminal|1|transport,places|버스가 출발하고 도착하는 곳
앉다|to sit|1||엉덩이를 바닥이나 의자에 대다
강남|Gangnam|1|places|한강 남쪽의 서울 지역
타다|to ride, get on|1|transport|탈것에 오르다
느리다|to be slow|1||속도가 낮다
항상|always|1||언제나
만화|comics, cartoon|1|activities|그림과 말풍선으로 이야기를 나타낸 책
잡지|magazine|1||주마다 또는 달마다 나오는 책
영어|English (language)|1|society|미국과 영국에서 쓰는 말
매주|every week|1|time|주마다
보다|to see, watch|1||눈으로 알다
오다|to come|1||이쪽으로 움직여 가까이 이르다
찾다|to find, look for|1||잃거나 모르는 것을 얻으려고 살피다
빌리다|to borrow|1||나중에 돌려주기로 하고 쓰다
쓰레기통|trash can|1|home|버리는 것을 담는 통
나가다|to go out|1||안에서 밖으로 가다
번호|number|1||차례를 나타내는 숫자
액션|action|1|activities|싸우고 쫓는 장면이 많은 영화의 종류
사탕|candy|1|food|입에 넣고 녹여 먹는 단 과자
들어가다|to go in|1||밖에서 안으로 가다
티셔츠|T-shirt|1|shopping|칼라 없이 머리부터 입는 반소매 윗옷
진짜|really; real|1||거짓이 아닌 것
멀다|to be far|1||거리가 많이 떨어져 있다
주문하다|to order|1|food,shopping|음식이나 물건을 달라고 하다
인터넷|internet|1||전 세계의 컴퓨터가 연결된 통신망
걸그룹|girl group|1|activities|여자 가수들로 이루어진 팀
콘서트|concert|1|activities|가수가 노래하는 공연
같이|together|1||함께
하다|to do|1||어떤 행동이나 일을 이루다
초콜릿|chocolate|1|food|카카오로 만든 달고 까만 과자
아이스크림|ice cream|1|food|우유와 설탕으로 만든 차갑고 달콤한 간식
쓰다|to write; to use; to be bitter|1||글을 적다, 도구를 이용하다, 맛이 달지 않다
장난감|toy|1||아이들이 가지고 노는 물건
크리스마스|Christmas|1|time|12월 25일, 산타클로스가 오는 날
자주|often|1||여러 번 되풀이하여
운동하다|to exercise|1|activities,body|몸을 튼튼하게 하려고 움직이다
가끔|sometimes|1||자주 하지 않고 이따금
샤워하다|to shower|1|home|위에서 쏟아지는 물로 몸을 씻다
침실|bedroom|1|home|잠을 자는 방
다른|other, different|1||같지 않은
청소하다|to clean|1|home|방이나 집을 깨끗하게 하다
공부하다|to study|1|work|배우고 익히다
엄마|mom|1|people|어머니를 친근하게 부르는 말
텔레비전|television|1|home|방송을 화면으로 보는 기계
소파|sofa|1|home|여러 명이 앉는 푹신한 의자
거실|living room|1|home|가족이 함께 모여 쉬는 넓은 방
열심히|hard, diligently|1||온 정성을 다해
요리하다|to cook|1|food|음식을 만들다
전철역|subway station|1|transport,places|전기로 다니는 열차를 타는 곳
대화하다|to talk, converse|1||마주 보고 이야기하다
인사하다|to greet|1|people|만나거나 헤어질 때 예의를 나타내다
산책하다|to take a walk|1|activities|천천히 걸으며 바람을 쐬다
수영하다|to swim|1|activities|물속에서 헤엄치다
어떤|what kind of|1||무슨 종류의
인천|Incheon|1|places|큰 국제공항과 차이나타운이 있는 도시
가다|to go|1||이곳에서 다른 곳으로 움직이다
아름답다|to be beautiful|1||보기에 곱고 예쁘다
조금|a little|1||적게
소개|introduction|1||모르는 사람끼리 알게 해 주는 것
고맙다|to be thankful|1|feelings|남의 도움에 기쁘다
이상하다|to be strange|1||보통과 다르다
뜨겁다|to be hot|1||온도가 아주 높다
유명하다|to be famous|1||이름이 널리 알려져 있다
파스타|pasta|1|food|이탈리아식 국수 요리
가깝다|to be close, near|1||거리가 멀지 않다
예쁘다|to be pretty|1||보기에 좋고 귀엽다
정말|really|1||참으로
멋있다|to be cool, stylish|1||보기에 아주 좋고 훌륭하다
이제|now|1|time|바로 지금
괜찮다|to be okay|1||문제가 없다
크기|size|1||큰 정도
특별하다|to be special|1||보통과 다르게 뛰어나다
아파트|apartment|1|home|여러 집이 한 건물에 모여 있는 높은 주택
깨끗하다|to be clean|1|home|더럽지 않다
친절하다|to be kind|1|people|상냥하고 따뜻하다
조용하다|to be quiet|1||소리가 나지 않다
필요하다|to be necessary|1||꼭 있어야 하다
모기|mosquito|1|nature|여름밤에 피를 빨아 먹는 작은 벌레
많다|to be many|1||수나 양이 넉넉하다
그런데|but, by the way|1||이야기를 다른 쪽으로 돌릴 때 쓰는 말
좋다|to be good|1|feelings|마음에 들다
맑다|to be clear (weather)|1|nature|구름 없이 날씨가 깨끗하다
텐트|tent|1|activities|캠핑할 때 치는 천으로 된 집
작다|to be small|1||크지 않다
캠핑|camping|1|activities|산이나 강가에서 텐트를 치고 지내는 것
높다|to be high, tall|1||아래에서 위까지가 길다
서울|Seoul|1|places|한국의 수도
아빠|dad|1|people|아버지를 친근하게 부르는 말
정말요|really?|1||놀라서 사실인지 되묻는 말
이분|this person (honorific)|1|people|'이 사람'을 높여 부르는 말
환영해요|welcome|1||오신 것을 반긴다는 말
에어컨|air conditioner|1|home|방을 시원하게 하는 기계
여섯|six|1||다섯 다음의 수
부산|Busan|1|places|해운대가 있는 한국 제2의 도시
실례합니다|excuse me|1||남에게 말을 걸거나 지나갈 때 하는 공손한 말
여권|passport|1|transport|외국에 갈 때 필요한 신분증
근처|nearby|1|places|가까운 곳
게이트|gate|1|transport|공항에서 비행기를 타러 나가는 문
카페|cafe|1|places,food|커피와 차를 파는 가게
저기|over there|1|places|멀리 있는 곳
어디|where|1|places|어느 곳
여기|here|1|places|말하는 사람이 있는 곳
팝콘|popcorn|1|food|옥수수를 튀겨 영화관에서 먹는 간식
치킨|fried chicken|1|food|기름에 튀긴 닭고기
자리|seat, spot|1||앉는 곳
우리|we, our|1|people|말하는 사람을 포함한 여러 사람
화이팅|fighting! (good luck!)|1|feelings|힘을 내라고 응원하는 말
경기장|stadium|1|places,activities|운동 시합을 하는 큰 곳
수첩|small notebook|1|work|들고 다니며 적는 작은 공책
제주도|Jeju Island|1|places|한국에서 가장 큰 섬
저것|that (thing)|1||멀리 있는 물건을 가리키는 말
지도|map|1|transport|땅의 모양과 길을 그린 그림
넓다|to be wide|1||면적이 크다
학생증|student ID|1|work|학교에 다니는 사람임을 증명하는 카드
아니다|to not be|1||그렇지 않다
드라마|drama|1|activities|텔레비전에서 하는 연속극
케이팝|K-pop|1|activities,society|한국의 대중가요
재즈|jazz|1|activities|미국에서 시작된 즉흥 연주가 많은 음악
열다섯|fifteen|1||열넷 다음의 수
여동생|younger sister|1|people|나보다 어린 여자 형제
버블티|bubble tea|1|food|쫄깃한 알갱이가 들어 있는 대만식 밀크티
멜론|melon|1|food|그물 무늬 껍질의 달콤한 초록색 과일
이것|this (thing)|1||가까이 있는 물건을 가리키는 말
갈비탕|beef rib soup|1|food|소의 갈빗대를 넣고 맑게 끓인 국
사장님|boss, owner (polite)|1|people,work|가게나 회사의 주인을 높여 부르는 말
스물다섯|twenty-five|1||이십오를 순 우리말로 부르는 수, 25
다섯|five|1||넷 다음의 수
야옹|meow|1|nature|고양이 우는 소리
열아홉|nineteen|1||열여덟 다음의 수
서른|thirty|1||스물아홉 다음의 수
아니요|no|1||공손하게 부정하는 대답
미국|United States|1|places|워싱턴이 수도인 북아메리카의 큰 나라
한국|Korea|1|places|서울이 수도인 나라
중국|China|1|places|베이징이 수도이고 인구가 아주 많은 나라
반가워요|nice to meet you|1|people|만나서 기쁘다는 인사말
웨이터|waiter|1|people,food|식당에서 음식을 나르는 남자 직원
카메라|camera|1|activities|사진을 찍는 기계
볼펜|ballpoint pen|1|work|잉크가 든 펜
무겁다|to be heavy|1||무게가 많이 나가다
크다|to be big|1||작지 않다
핸드폰|cell phone|1|home|들고 다니는 전화기
만두|dumplings|1|food|밀가루 피에 고기와 채소를 넣어 빚은 음식
잡채|japchae (glass noodles)|1|food|당면과 채소를 볶은 잔치 음식
두부|tofu|1|food|콩으로 만든 하얗고 부드러운 음식
빙수|shaved ice dessert|1|food|갈아 낸 얼음에 팥이나 과일을 올린 여름 간식
샌드위치|sandwich|1|food|빵 사이에 채소와 햄을 넣은 음식
감사합니다|thank you|1||고맙다고 공손하게 하는 말
안녕하세요|hello|1||만났을 때 하는 인사말
주세요|please give me|1||무엇을 달라고 공손하게 하는 말
선반|shelf|2|home|벽에 달아 물건을 올려놓는 판
마지막으로|finally, lastly|2||맨 끝에
원룸|studio apartment|2|home|방 하나에 부엌과 화장실이 같이 있는 집
발코니|balcony|2|home|건물 밖으로 튀어나온 난간이 있는 공간
세탁실|laundry room|2|home|빨래를 하는 방
가스레인지|gas stove|2|home|불을 켜서 냄비를 올려 요리하는 기구
카페트|carpet|2|home|바닥에 까는 두꺼운 천
현관문|front door|2|home|집에 들어가는 정문
밝게|brightly, cheerfully|2||환하고 명랑하게
신발장|shoe cabinet|2|home|운동화와 구두를 넣어 두는 가구
생활하다|to live, get by|2||어떤 곳에서 지내며 살다
활발하다|to be lively, outgoing|2|feelings|성격이 밝고 힘이 넘치다
사라지다|to disappear, vanish|2||보이던 것이 없어지다
불안하다|to be anxious|2|feelings|마음이 편하지 않고 조마조마하다
짖다|to bark|2|nature|개가 '멍멍' 소리를 내다
쌍둥이|twins|2|people|한 어머니에게서 같은 날 태어난 두 아이
무서워하다|to be afraid of|2|feelings|겁을 내다
앞머리|bangs (hair)|2|body|이마를 덮도록 짧게 자른 앞쪽 털, 뱅
생머리|straight hair|2|body|파마하지 않은 곧게 뻗은 헤어스타일
부러워하다|to envy|2|feelings|남의 좋은 것을 보고 자기도 갖고 싶어 하다
외모|appearance, looks|2|people|겉으로 보이는 생김새
옷차림|outfit, way of dressing|2|shopping|옷을 입은 모양
미장원|beauty salon|2|places|머리를 자르고 다듬는 가게
몸짓|gesture|2|body|몸을 움직이는 모양
마침|just then, luckily|2||어떤 때에 딱 맞게
본인|oneself, the person in question|2|people|그 사람 자신
떠오르다|to come to mind; to rise|2||생각이 나다, 또는 위로 솟다
반말|informal speech|2|society|친구나 아랫사람에게 쓰는 편한 말
분명히|clearly, surely|2||틀림없이
촛불|candlelight|2|home|초에 켠 불
멸치|anchovy|2|food|볶거나 국물을 내는 작은 바닷물고기
슬퍼하다|to grieve, be sad|2|feelings|마음이 아파 눈물을 흘리다
근무하다|to work, be on duty|2|work|직장에서 일하다
아버님|father (honorific)|2|people|남의 아빠나 시아빠를 높여 부르는 말
완성하다|to complete|2||일을 다 이루다
몰래|secretly|2||남이 모르게
맞은편|opposite side|2|places|마주 보이는 쪽
가짜|fake|2||진짜처럼 만든 것
밤색|chestnut brown|2|colors|군밤 껍질 같은 진한 갈색
액세서리|accessory|2|shopping|반지, 목걸이 같은 꾸미는 물건
반짝이다|to sparkle, shine|2||빛이 잠깐씩 빛나다
고객님|customer (honorific)|2|shopping,people|손님을 높여 부르는 말
옷걸이|clothes hanger|2|home|옷을 걸어 두는 도구
만족하다|to be satisfied|2|feelings|마음에 흡족하다
가리키다|to point at, indicate|2||손가락으로 방향이나 물건을 보이다
돌아다니다|to wander around|2|activities|여기저기 오가다
정하다|to decide, set|2||여럿 중에서 하나를 골라 굳히다
구입하다|to purchase|2|shopping|물건을 사다
겉옷|outerwear|2|shopping|다른 옷 위에 입는 옷
차례|turn, order|2||순서
참가하다|to participate|2|activities|모임이나 대회에 나가다
여성|woman, female|2|people|여자
훈련|training|2|activities|기술을 익히려고 되풀이하여 연습하는 것
출석|attendance|2|work|수업이나 모임에 나가는 것
근육|muscle|2|body|힘을 쓰게 하는 몸의 살
전국|the whole country|2|society|나라 전체
우승하다|to win (a championship)|2|activities|대회에서 일등을 하다
두근두근|pit-a-pat (heartbeat)|2|feelings|떨리거나 설레어 가슴이 뛰는 소리
자유|freedom|2|society|남에게 얽매이지 않는 것
운전사|driver|2|transport,people|차를 모는 것이 직업인 사람
잘못되다|to go wrong|2||일이 바르게 되지 않다
줄다|to decrease, shrink|2||수나 양이 작아지다
주인공|main character|2|society|이야기나 영화의 가장 중요한 인물
의상|costume|2|shopping|무대나 행사에서 입는 옷
리허설|rehearsal|2|activities|공연 전에 미리 해 보는 연습
중심|center|2||한가운데
장기자랑|talent show|2|activities|자신의 재주를 보여 주는 행사
준비물|things to bring, supplies|2|work|가지고 가야 할 물건
열리다|to open, be held|2||닫힌 것이 열게 되다, 행사가 시작되다
열흘|ten days|2|time|열 날
뛰어가다|to run (to)|2||달려서 가다
상태|condition, state|2||사물이나 몸이 처한 모양
한동안|for a while|2|time|꽤 오랜 기간
물약|liquid medicine, potion|2|body|마시는 액체로 된 약
잡아먹다|to prey on, devour|2|nature|다른 동물을 사냥해서 먹다
숨다|to hide|2||보이지 않게 몸을 감추다
대청소|big cleanup|2|home,activities|집 안 구석구석을 크게 치우는 것
도구|tool|2|home|일할 때 쓰는 물건
씩씩하다|to be brave, spirited|2|feelings|굳세고 용감하다
단체|group, organization|2|society|같은 목적으로 모인 사람들의 무리
따라가다|to follow|2||남의 뒤를 좇아가다
돌보다|to take care of|2|people|아이나 환자를 보살피다
연세|age (honorific)|2|people|어른의 나이를 높여 이르는 말
친해지다|to become close|2|people|사이가 가까워지다
이후|after, since|2|time|그 뒤
똑바로|straight, properly|2||기울지 않고 곧게
친할아버지|paternal grandfather|2|people|아빠의 아빠
유학|studying abroad|2|work|외국에 가서 공부하는 것
한자|Chinese characters|2|society|중국에서 만든 뜻글자
친할머니|paternal grandmother|2|people|아빠의 엄마
내려오다|to come down|2||높은 곳에서 낮은 곳으로 오다
친가|father's side of the family|2|people|아버지 쪽의 집안
냉동고|freezer|2|home|음식을 꽁꽁 얼려 보관하는 기계
부러지다|to break, snap|2||단단한 것이 꺾이다
살짝|slightly, lightly|2||조금, 가볍게
온몸|whole body|2|body|몸 전체
내려놓다|to put down|2||들고 있던 것을 아래에 두다
물다|to bite|2|nature|이로 꽉 누르다
장화|rain boots|2|shopping|비 올 때 신는 목이 긴 고무신
기술자|technician, engineer|2|work,people|기계를 고치거나 만드는 사람
어부|fisherman|2|work,people|물고기를 잡는 것이 직업인 사람
무조건|unconditionally, no matter what|2||아무 제약 없이, 반드시
멀미|motion sickness|2|transport,body|차나 배를 탔을 때 속이 울렁거리는 것
설명서|instruction manual|2||사용 방법을 적은 종이
바구니|basket|2|home|대나무나 플라스틱으로 엮은 그릇
낚싯대|fishing rod|2|activities|물고기를 잡는 긴 막대
반납하다|to return (a borrowed item)|2||빌린 것을 돌려주다
담다|to put in, fill|2|food|그릇에 넣다
제품|product|2|shopping|공장에서 만든 물건
탑승하다|to board|2|transport|비행기나 배에 타다
위험|danger|2||다칠 수 있는 상태
이용|use|2||필요한 것을 쓰는 것
봉사자|volunteer|2|people,society|대가 없이 남을 돕는 사람
일부|part, portion|2||전체 중의 한 부분
난로|heater, stove|2|home|방을 데우는 불을 피우는 기구
영하|below zero|2|nature|0도보다 낮은 온도
이상|abnormality; more than|2||보통과 다른 것, 또는 어떤 수보다 많은 것
유리|glass|2|home|투명하고 깨지기 쉬운 물질, 창문을 만든다
보조배터리|portable charger|2|home|휴대폰을 충전하는 작은 전지
끊기다|to be cut off|2||이어지던 것이 멈추다
절대로|never, absolutely not|2||어떤 경우에도
반대쪽|opposite side|2|places|맞은편
돌리다|to turn, spin|2||빙빙 돌게 하다
밤새|all night|2|time|밤이 새도록
지다|to lose (a game)|2|activities|경기에서 상대에게 이기지 못하다
권투|boxing|2|activities|장갑을 끼고 주먹으로 싸우는 경기
어휴|ugh, phew|2|feelings|힘들거나 답답할 때 내는 소리
동작|movement, motion|2|activities|몸을 움직이는 모양
상대|opponent|2|activities,people|맞서는 사람
손목|wrist|2|body|손과 팔이 이어지는 부분
저렇게|like that|2||저와 같이
상담|counseling, consultation|2|work|문제를 풀려고 서로 의논하는 것
자유롭게|freely|2||얽매이지 않고 마음대로
다행|good fortune, relief|2|feelings|운이 좋은 것
목록|list|2||이름이나 물건을 차례로 적은 것
부담|burden, pressure|2|feelings|무거운 책임이나 걱정
발전하다|to develop, advance|2|society|더 좋은 상태로 나아가다
신입생|freshman|2|work,people|새로 입학한 학생
내내|all along, throughout|2|time|처음부터 끝까지 계속
자세하게|in detail|2||작은 부분까지 꼼꼼하게
문제점|problem, issue|2||잘못되었거나 고쳐야 할 점
나빠지다|to get worse|2||전보다 좋지 않게 되다
웃음|laughter|2|feelings|웃는 소리나 표정
늘다|to increase|2||수나 양이 많아지다
짓다|to build; to make|2||집을 세우다, 밥을 하다
일식|Japanese food|2|food|일본 음식
술집|bar, pub|2|places,food|술을 파는 가게
구입|purchase|2|shopping|물건을 사는 것
정도|degree, about|2||얼마만큼의 양이나 수준
보고|report|2|work|일의 결과를 알리는 것
대해|about, regarding|2||무엇에 관하여
과장|section manager|2|work,people|회사에서 대리보다 위, 부장보다 아래인 직책
기술|technology, skill|2|work|무엇을 만들거나 다루는 능력
부장|department head|2|work,people|회사에서 한 부서를 책임지는 사람
출입증|access pass, ID badge|2|work|건물에 들어갈 수 있는 카드
경우|case, circumstance|2||어떤 일이 일어난 형편
껍질|peel, skin (of fruit)|2|food|과일이나 채소의 겉을 싼 것
곳곳|here and there, everywhere|2|places|여러 곳
까다|to peel|2|food|껍질을 벗기다
파다|to dig|2||땅에 구멍을 내다
가죽|leather|2|shopping|동물의 껍질로 만든 재료
묶다|to tie, bind|2||끈으로 매다
막대기|stick|2||가늘고 긴 나무 토막
아무리|no matter how|2||정도가 매우 심하더라도
모험|adventure|2|activities|위험을 무릅쓰고 하는 일
살아남다|to survive|2||위험한 상황에서 죽지 않고 남다
바퀴|wheel; lap|2|transport|차 밑에 달린 둥근 것, 또는 한 번 도는 것
전시장|exhibition hall|2|places,activities|작품이나 물건을 보여 주는 곳
돌다|to turn, go around|2||원을 그리며 움직이다
가로|width; horizontal|2||왼쪽에서 오른쪽으로의 방향이나 길이
색칠|coloring, painting|2|colors,activities|그림에 색을 입히는 것
다하다|to do one's best; to use up|2||남김없이 모두 쓰다
느낌|feeling|2|feelings|몸이나 마음으로 느끼는 것
작품|work (of art)|2|society|예술가가 만든 것
길이|length|2||한 끝에서 다른 끝까지의 거리
국내|domestic|2|society|나라 안
이해|understanding|2||뜻을 알아듣는 것
참여하다|to take part|2|activities|어떤 일에 끼어 함께하다
전시하다|to exhibit, display|2|activities|여러 사람이 보도록 늘어놓다
목욕탕|public bathhouse|2|places|돈을 내고 몸을 씻는 곳
몸살|body aches (from fatigue)|2|body|몹시 피곤해서 온몸이 쑤시고 아픈 병
일흔|seventy|2||예순 다음, 열의 일곱 배가 되는 수
교사|teacher|2|work,people|학교에서 가르치는 사람
연락처|contact information|2||소식을 전할 수 있는 전화번호나 주소
송편|songpyeon (half-moon rice cake)|2|food,society|추석에 빚는 반달 모양의 떡
경비실|security office|2|places|아파트나 건물을 지키는 사람이 있는 방
높이|height|2||아래에서 위까지의 길이
소포|parcel, package|2||우편으로 보내는 물건 상자
남녀|men and women|2|people|남자와 여자
모범|model, example|2||본받을 만한 것
변화|change|2||바뀌어 달라지는 것
깔끔하다|to be neat and tidy|2|home|깨끗하고 단정하다
대도시|big city|2|places|사람이 아주 많이 사는 큰 곳
표지판|sign, signboard|2|transport|길이나 정보를 알려 주는 판
맡기다|to leave with, entrust|2||남에게 보관하거나 일을 하게 하다
골목|alley|2|places|큰길에서 들어간 좁은 길
쓸다|to sweep|2|home|빗자루로 먼지를 치우다
옮기다|to move, carry|2||자리를 바꾸어 놓다
떼다|to take off, detach|2||붙은 것을 떨어지게 하다
쓰레기봉투|garbage bag|2|home|버리는 것을 담는 비닐 봉지
잔디밭|lawn|2|nature,home|짧은 풀이 깔린 넓은 땅
마음대로|as one wishes|2||원하는 것을 거리낌 없이 하는 모양
세제|detergent|2|home|빨래나 설거지할 때 쓰는 비누
손바닥|palm (of the hand)|2|body|손의 안쪽 면
세탁|laundry, washing|2|home|옷을 빠는 것
엉덩이|buttocks|2|body|앉을 때 바닥에 닿는 몸의 뒷부분
엉망|mess|2||어수선하게 망가진 상태
꾸다|to dream (a dream)|2||잠을 자면서 꿈을 보다
설렁탕|ox bone soup|2|food|소뼈를 오래 끓인 뽀얀 국
더러워지다|to get dirty|2||깨끗하지 않게 되다
자랑하다|to boast, show off|2|feelings|남에게 뽐내며 말하다
표정|facial expression|2|feelings|얼굴에 나타난 감정
충분히|enough, sufficiently|2||모자람 없이
거꾸로|upside down, backwards|2||위아래가 바뀌게
존경하다|to respect|2|feelings,people|훌륭한 사람을 높이 받들다
당연히|of course, naturally|2||마땅히
상장|certificate of merit|2|work|잘한 사람에게 주는 종이 증서
해결하다|to solve|2||문제를 풀다
부족|shortage, lack|2||모자람
심각하다|to be serious|2||아주 중대하다
의견|opinion|2|society|어떤 일에 대한 생각
반대|opposition; opposite|2||찬성하지 않는 것, 또는 정 거꾸로인 것
시장님|mayor|2|people,society|시를 다스리는 사람을 높여 부르는 말
지방|region, province|2|places|서울이 아닌 지역
세우다|to stand up, build, stop (a car)|2||서게 하다, 건물을 짓다, 차를 멈추다
이곳저곳|here and there|2|places|여러 장소
얼른|quickly|2||빨리
불평|complaint|2|feelings|마음에 들지 않아 하는 말
알아보다|to look into; to recognize|2||조사하다, 또는 누구인지 알다
틀림없이|without fail, surely|2||분명히
실망하다|to be disappointed|2|feelings|기대와 달라서 마음이 상하다
손등|back of the hand|2|body|손의 바깥쪽 면
정신없이|frantically|2||무엇에 몰두하여 아무 생각을 못 하고
쏟다|to spill, pour|2||그릇에 든 것을 흘리다
겨우|barely, only just|2||힘들게 간신히
돌려받다|to get back|2|shopping|준 것을 다시 받다
실력|skill, ability|2|work|가진 능력
경험하다|to experience|2||직접 겪어 보다
복습|review (of lessons)|2|work|배운 것을 다시 공부하는 것
감독님|coach, director|2|people,activities|팀이나 영화를 지휘하는 사람을 높여 부르는 말
검사|examination, test|2|body|좋고 나쁨을 조사하는 것
찾아오다|to come to see, visit|2||누구를 만나러 오다
덕분|thanks (to)|2||베풀어 준 은혜나 도움
넘다|to exceed, go over|2||높은 곳을 지나가다, 어떤 수보다 많아지다
천만|ten million|2||백만의 열 배가 되는 수
거절|refusal|2||요청을 받아들이지 않는 것
무게|weight|2||무거운 정도
막걸리|makgeolli (rice wine)|2|food|쌀로 빚은 하얗고 걸쭉한 한국 술
계획하다|to plan|2||앞으로 할 일을 미리 정하다
도망가다|to run away|2||피해서 달아나다
휴게실|lounge, break room|2|places,work|일하다가 쉬는 방
태도|attitude|2||마음가짐이 드러난 모습
버릇|habit|2||오래 되풀이해서 굳은 행동
손수건|handkerchief|2|shopping|땀을 닦는 작은 천
소문|rumor|2|society|여러 사람 입에 오르내리는 말
애인|sweetheart|2|people|사랑하는 사람
정신없다|to be hectic|2||너무 바빠서 어떻게 해야 할지 모르다
외출|going out|2||집 밖으로 나가는 것
신혼여행|honeymoon|2|activities|결혼한 뒤 처음 떠나는 휴가
선택|choice|2||여럿 중에서 고르는 것
맞추다|to adjust, set, match|2||서로 맞게 하다, 시간을 정확히 하다
시아버지|father-in-law (husband's father)|2|people|남편의 아빠
밥상|dining table (set with food)|2|food,home|음식을 차려 놓은 작은 상
차리다|to set (a table), prepare|2|food|음식을 상에 놓다
인삼|ginseng|2|food|약으로 쓰는 몸에 좋은 뿌리
시어머니|mother-in-law (husband's mother)|2|people|남편의 엄마
악수|handshake|2|people|손을 마주 잡고 하는 인사
높임말|honorific language|2|society|상대를 높이는 말
고개|head; hill|2|body|목의 뒷부분, 또는 산을 넘는 언덕
달콤하다|to be sweet|2|food|맛이 달다
저번|last time|2|time|지난번
단단하다|to be hard, firm|2||굳고 딱딱하다
저렇다|to be like that|2||저와 같다
치실|dental floss|2|body|이 사이를 닦는 가는 실
썩다|to rot|2||음식이 상해서 냄새가 나다
내후년|the year after next|2|time|내년의 다음 해
기념|commemoration|2||어떤 일을 잊지 않고 기억하는 것
한두|one or two|2||하나나 둘
동창회|class reunion|2|people|같은 학교를 졸업한 사람들의 모임
일식집|Japanese restaurant|2|places,food|초밥 같은 일본 음식을 파는 식당
단순|simplicity|2||복잡하지 않음
똑같다|to be exactly the same|2||조금도 다르지 않다
큰소리|loud voice|2||크게 외치는 목청
사물함|locker|2|work|개인 물건을 넣어 두는 작은 장
세상|world|2|society|사람이 사는 모든 곳
식초|vinegar|2|food|시큼한 맛을 내는 양념
관광하다|to go sightseeing|2|activities|여행하며 구경하다
나흘|four days|2|time|네 날
덕분에|thanks to|2||남의 도움으로
관광지|tourist attraction|2|places,activities|여행객이 구경하러 가는 곳
들르다|to stop by|2||지나가는 길에 잠깐 머무르다
오르다|to climb, go up|2||높은 곳으로 올라가다
크루즈|cruise|2|transport,activities|큰 배를 타고 하는 여행
승무원|flight attendant, crew|2|transport,people|비행기나 배에서 손님을 돕는 직원
안내|guidance, information|2||길이나 내용을 알려 주는 것
빠지다|to fall into; to be missing|2||물에 들어가 잠기다, 또는 있어야 할 것이 없다
모시다|to accompany, serve (honorific)|2|people|윗사람을 받들어 함께 가다
지난해|last year|2|time|작년
부드럽게|softly, gently|2||딱딱하지 않고 순하게
음악가|musician|2|people,activities|곡을 만들거나 연주하는 사람
길게|long, at length|2||짧지 않게
소설|novel|2|society|작가가 지어낸 긴 이야기
실패|failure|2||일이 뜻대로 되지 않는 것
로맨스|romance|2||사랑 이야기
무궁화|rose of Sharon (national flower)|2|nature,society|한국의 나라꽃
연기|acting; smoke|2|society|배우가 맡은 인물을 표현하는 것, 또는 불이 탈 때 나는 것
여배우|actress|2|people|연기하는 여자
울음|crying|2|feelings|우는 소리
비밀|secret|2||남에게 알리지 않는 일
불쌍하다|to be pitiful|2|feelings|딱하고 가엾다
따다|to pick; to obtain|2||열매를 떼어 내다, 또는 자격을 얻다
치우다|to clean up, put away|2|home|어지러운 것을 정리하다
두세|two or three|2||둘이나 셋
참외|Korean melon|2|food|노랗고 줄무늬가 있는 한국의 여름 과일
달고나|dalgona (sugar candy)|2|food|설탕을 녹여 모양을 찍은 옛날 과자
일어서다|to stand up|2||앉았다가 서다
분식|Korean snack food|2|food|떡볶이, 김밥 같은 간단한 음식
깻잎|perilla leaf|2|food|향이 강한 들깨의 잎
익다|to ripen; to be cooked|2|food|열매가 다 자라다, 또는 음식이 다 되다
알레르기|allergy|2|body|어떤 음식이나 물질에 몸이 이상하게 반응하는 것
다양하게|in various ways|2||여러 가지로
빼다|to remove, take out|2||안에 든 것을 밖으로 꺼내다
뷔페|buffet|2|food|여러 음식을 차려 놓고 골라 먹는 식당
누르다|to press|2||위에서 힘을 주어 밀다
방송국|broadcasting station|2|places,society|텔레비전이나 라디오 프로그램을 만드는 곳
명함|business card|2|work|이름과 회사, 연락처를 적은 작은 카드
방법|method, way|2||어떤 일을 하는 수단
사귀다|to make friends; to date|2|people|친구나 애인으로 가까이 지내다
기억|memory|2||지난 일을 잊지 않는 것
가요|popular song|2|activities|대중이 부르는 노래
오디션|audition|2|activities|배우나 가수를 뽑는 시험
결석|absence|2|work|학교나 모임에 나가지 않는 것
도장|seal, stamp|2||이름을 새겨 찍는 물건
그동안|meanwhile, all this time|2|time|그 사이의 기간
여든|eighty|2||일흔 다음, 열의 여덟 배가 되는 수
고생|hardship|2||어렵고 힘든 일을 겪는 것
주부|homemaker|2|people|집안일을 맡아 하는 사람
국제|international|2|society|여러 나라 사이의
용돈|allowance, pocket money|2|shopping|자유롭게 쓰라고 주는 돈
채우다|to fill|2||빈 곳을 가득하게 하다
이삿짐|moving boxes, belongings|2|home|이사할 때 옮기는 물건
집들이|housewarming party|2|home,society|새 집에 사람들을 초대하는 잔치
신나게|excitedly|2|feelings|흥이 나서 즐겁게
바깥|outside|2|places|밖
신랑|groom|2|people|결혼하는 남자
행사장|event venue|2|places|모임이나 축제가 열리는 곳
스스로|by oneself|2||자기 힘으로
이날|this day|2|time|바로 오늘, 이 날
장식|decoration|2|home|아름답게 꾸미는 것
최근|recently|2|time|얼마 되지 않은 지난날
없어지다|to disappear|2||있던 것이 사라지다
붙다|to stick; to pass (a test)|2||맞닿아 떨어지지 않다, 또는 시험에 합격하다
자랑스럽다|to be proud|2|feelings|남에게 뽐낼 만하다
불안하게|anxiously|2|feelings|마음이 편하지 않게
관계|relationship|2|people|사람이나 사물 사이의 연결
사진작가|photographer|2|people|예술 작품으로 카메라 촬영을 하는 사람
등록하다|to register|2|work|이름을 올려 신청하다
삼거리|three-way intersection|2|transport|길이 세 갈래로 나뉜 곳
대학원|graduate school|2|work|학사 학위를 받고 더 공부하는 곳
베란다|balcony, veranda|2|home|아파트에서 빨래를 너는 바깥쪽 공간
말리다|to dry; to stop someone|2|home|젖은 것을 마르게 하다, 또는 하지 못하게 하다
귀찮다|to be bothersome|2|feelings|하기 싫고 성가시다
사거리|intersection|2|transport|길이 네 갈래로 나뉜 곳
교통비|transportation costs|2|transport,shopping|버스나 지하철을 탈 때 드는 돈
결제|payment|2|shopping|물건값을 치르는 것
세수|washing one's face|2|home|얼굴을 씻는 것
국적|nationality|2|society|어느 나라 사람인지를 나타내는 것
기념품|souvenir|2|shopping|여행지에서 사는 물건
항공권|plane ticket|2|transport|비행기 표
걸어오다|to walk (here)|2||발로 걸으며 이쪽으로 오다
목적|purpose|2||이루려고 하는 일
방문|visit; room door|2||찾아가서 만나는 것
입장권|admission ticket|2|activities|공연이나 경기장에 들어가는 표
마을|village|2|places|시골에서 집들이 모여 있는 곳
해외여행|overseas trip|2|activities|다른 나라로 떠나는 관광
열차|train|2|transport|기차
열차표|train ticket|2|transport|기차를 타는 표
캐리어|suitcase|2|transport|바퀴가 달린 여행 가방
기쁨|joy|2|feelings|기쁜 마음
각각|each|2||하나하나 따로
가득|full|2||꽉 차게
성적표|report card|2|work|시험 결과를 적은 종이
제목|title|2||책이나 영화의 이름
강하게|strongly|2||세게
떨어트리다|to drop|2||손에서 놓쳐 아래로 가게 하다
칠하다|to paint, color|2|colors|색을 바르다
안전하다|to be safe|2||위험하지 않다
알리다|to inform|2||모르는 사람에게 알게 하다
만약|if|2||혹시 그렇다면
부족하다|to be lacking|2||모자라다
통장|bankbook|2|shopping|은행에 돈을 넣고 뺀 기록을 적는 작은 책
저금|savings|2|shopping|돈을 모아 두는 것
운전면허증|driver's license|2|transport|차를 몰 수 있다는 자격증
계좌|bank account|2|shopping|은행에 만든 돈을 넣는 곳
사업|business|2|work|돈을 벌려고 하는 일
추천하다|to recommend|2||좋은 것을 남에게 권하다
켤레|pair (of shoes/socks)|2|shopping|신발이나 양말 두 짝을 세는 단위
공짜|free (of charge)|2|shopping|돈을 내지 않는 것
갈아입다|to change clothes|2|shopping|입던 옷을 벗고 다른 옷을 입다
불편|inconvenience|2||편하지 않음
차다|to be cold; to kick; to wear|2||온도가 낮다, 발로 내지르다, 시계를 손목에 매다
결정|decision|2||무엇을 하기로 정하는 것
남성|man, male|2|people|남자
관심|interest|2|feelings|어떤 것에 끌리는 마음
계약서|contract (document)|2|work|약속한 내용을 적은 문서
신나다|to be excited|2|feelings|흥이 나다
사인하다|to sign|2|work|이름을 적어 확인하다
중앙|center|2||한가운데
낙서|graffiti, doodle|2||벽이나 책에 함부로 쓴 글이나 그림
고민하다|to worry, agonize over|2|feelings|마음속으로 괴로워하며 생각하다
창고|warehouse, storage room|2|places,home|물건을 보관하는 건물
건조기|dryer|2|home|빨래를 말리는 기계
식기세척기|dishwasher|2|home|그릇을 씻는 기계
알맞다|to be suitable|2||딱 맞다
칭찬|praise|2|feelings|잘한 것을 좋게 말하는 것
성공|success|2||원하는 것을 이루는 것
결국|in the end|2||끝에 가서
번지점프|bungee jumping|2|activities|발에 줄을 묶고 높은 곳에서 뛰어내리는 놀이
취소|cancellation|2||하기로 한 것을 없애는 것
온천|hot spring|2|places,activities|땅속에서 뜨거운 물이 나오는 곳
풍경|scenery|2|nature|자연의 아름다운 모습
지난번|last time|2|time|요전 차례
사흘|three days|2|time|세 날
효과|effect|2||어떤 일로 생긴 좋은 결과
깊다|to be deep|2||위에서 바닥까지가 멀다
꼬리|tail|2|nature|동물 몸의 뒤 끝에 달린 것
약하다|to be weak|2||힘이 세지 않다
알아서|on one's own|2||스스로 판단해서
실례|rudeness, excuse me|2||예의에 어긋나는 것
부치다|to fry (pancakes); to mail|2|food|기름에 전을 지지다, 또는 편지를 보내다
선선하다|to be cool (weather)|2|nature|조금 서늘하고 시원하다
외할아버지|maternal grandfather|2|people|엄마의 아빠
뵙다|to see, meet (humble)|2|people|윗사람을 만나다
자판기|vending machine|2|places|돈을 넣으면 음료가 나오는 기계
나머지|the rest|2||남은 것
팔리다|to be sold|2|shopping|물건이 남에게 넘어가다
맡다|to take charge of; to smell|2||일을 책임지다, 또는 냄새를 느끼다
마흔|forty|2||서른 다음, 열의 네 배가 되는 수
담배|cigarette|2||불을 붙여 연기를 들이마시는 것
위해|for (the sake of)|2||무엇을 이롭게 하려고
피우다|to smoke; to bloom|2||담배를 태우다, 또는 꽃이 벌어지다
벌금|fine (penalty)|2|society|규칙을 어겨서 내는 돈
신분증|ID card|2||자기가 누구인지 증명하는 카드
신청|application|2||무엇을 해 달라고 요청하는 것
속도|speed|2|transport|빠르기
건너가다|to cross over|2|transport|길이나 강을 지나서 맞은편으로 가다
신호|signal|2|transport|빛이나 소리로 알리는 것
안전|safety|2||위험하지 않은 상태
지키다|to keep, protect|2||보호하다, 또는 약속을 어기지 않다
소화제|digestive medicine|2|body|배가 더부룩할 때 먹는 약
배탈|upset stomach|2|body|먹은 것이 잘못되어 배가 아픈 것
느끼다|to feel|2|feelings|몸이나 마음으로 알다
기르다|to raise, grow|2|nature|동식물을 키우다
우선|first of all|2||무엇보다 먼저
강하다|to be strong|2||힘이 세다
습관|habit|2||오래 되풀이해서 몸에 밴 행동
향초|scented candle|2|home|좋은 냄새가 나는 초
편안하다|to be comfortable, at ease|2|feelings|걱정 없이 편하다
선크림|sunscreen|2|body,shopping|햇빛으로부터 피부를 지키려고 바르는 화장품
피부|skin|2|body|몸의 겉을 싼 살갗
빨다|to wash; to suck|2||옷을 물에 넣고 문지르다, 또는 입으로 당기다
관리|management, care|2||돌보고 잘 다루는 것
국물|broth|2|food|국이나 찌개의 물
대회|competition|2|activities|여러 사람이 모여 실력을 겨루는 행사
연예인|celebrity|2|people,society|가수나 배우처럼 방송에 나오는 사람
급하다|to be urgent|2||빨리 해야 하다
신청하다|to apply|2||무엇을 해 달라고 요청하다
깜짝|with surprise|2|feelings|갑자기 놀라는 모양
별명|nickname|2|people|본명 말고 친구들이 지어 부르는 이름
서비스센터|service center|2|places|고장 난 기계를 고쳐 주는 곳
멈추다|to stop|2||움직이던 것이 서다
찾아가다|to go and see, visit|2||누구를 만나러 가다
행동|behavior|2||몸을 움직여 하는 일
옳다|to be right|2||바르고 맞다
던지다|to throw|2||손으로 멀리 날려 보내다
무척|very|2||아주
엔지니어|engineer|2|work,people|기계나 컴퓨터를 다루는 기술자
깨지다|to break, shatter|2||부딪쳐서 조각이 나다
레깅스|leggings|2|shopping|몸에 딱 붙는 신축성 있는 바지
필라테스|Pilates|2|activities|자세와 근육을 단련하는 운동
거의|almost|2||대부분, 거진
들리다|to be heard; to stop by|2||소리가 귀에 들어오다
편찮다|to be ill (honorific)|2|body|윗사람이 아프다
깨다|to wake up; to break|2||잠에서 일어나다, 또는 부수다
편리하다|to be convenient|2||쓰기 쉽고 편하다
조립하다|to assemble|2||부품을 맞추어 만들다
취소하다|to cancel|2||하기로 한 것을 없애다
비교하다|to compare|2||둘 이상을 견주어 보다
부분|part|2||전체를 나눈 하나
쌓다|to pile up, build up|2||물건을 위로 차곡차곡 올려놓다
가구점|furniture store|2|places,home|침대나 의자를 파는 가게
서양|the West|2|society|유럽과 미국 쪽의 나라들
분식집|snack bar|2|places,food|떡볶이나 김밥을 파는 작은 식당
남기다|to leave (over)|2||다 쓰지 않고 남게 하다
주방장|head chef|2|food,people|식당의 요리를 책임지는 사람
바뀌다|to be changed|2||다른 것으로 변하다
댓글|comment (online)|2||인터넷 글 밑에 다는 짧은 글
매니저|manager|2|work,people|가게나 연예인의 일을 관리하는 사람
딱딱하다|to be hard, stiff|2||굳고 단단하다
대부분|most, mostly|2||거의 모두
불친절하다|to be unkind|2|people|상냥하지 않다
포장|packaging, wrapping; to-go|2|shopping|물건을 싸는 것, 또는 음식을 가져가는 것
수선|mending, alteration|2|shopping|낡거나 고장 난 것을 고치는 것
찢어지다|to be torn|2||종이나 천이 갈라지다
줄이다|to reduce, shorten|2||작게 하다
특이하다|to be unusual|2||보통과 다르다
주머니|pocket|2|shopping|옷에 달린 물건을 넣는 곳
매장|store, shop floor|2|shopping,places|물건을 파는 곳
패딩|padded jacket|2|shopping|솜이나 털을 넣어 부풀린 겨울 외투
외삼촌|maternal uncle|2|people|어머니의 남자 형제
와이셔츠|dress shirt|2|shopping|정장 안에 입는 단추 달린 윗옷
구멍|hole|2||뚫린 자리
올라오다|to come up|2||높은 곳으로 오다
풀리다|to be solved; to loosen|2||묶인 것이 느슨해지다, 문제가 해결되다
방향|direction|2|transport|가는 쪽
정확하다|to be accurate|2||틀림없이 맞다
그치다|to stop (rain)|2|nature|비나 눈이 더 내리지 않다
흐르다|to flow|2|nature|물이 낮은 곳으로 움직이다
우비|raincoat|2|shopping|비 올 때 입는 옷
주변|surroundings|2|places|어떤 곳의 둘레
미끄러지다|to slip|2||얼음 위에서 발이 밀려 넘어지다
서두르다|to hurry|2||급하게 하다
온도|temperature|2|nature|따뜻하고 차가운 정도
목적지|destination|2|transport|가려고 하는 곳
변하다|to change|2||달라지다
챙기다|to pack, take care of|2||필요한 것을 빠짐없이 갖추다
어머님|mother (honorific)|2|people|남의 엄마나 시엄마를 높여 부르는 말
끊다|to cut off; to quit|2||이어진 것을 자르다, 또는 담배를 그만두다
쳐다보다|to stare at|2||얼굴을 들어 바라보다
데려오다|to bring (a person)|2||사람을 함께 오게 하다
군인|soldier|2|people|나라를 지키는 사람
나타나다|to appear|2||보이지 않던 것이 보이게 되다
영상|video|2||화면에 나오는 움직이는 그림
연결|connection|2||서로 잇는 것
움직이다|to move|2||자리를 옮기거나 몸을 놀리다
유학생|international student|2|people,work|외국에 가서 공부하는 사람
식구|family members|2|people|한집에서 함께 사는 사람
화면|screen|2|home|텔레비전이나 컴퓨터의 그림이 나오는 면
오래간만|after a long time|2|time|오랜 시간이 지난 뒤
외우다|to memorize|2|work|잊지 않게 머리에 넣다
계곡|valley|2|nature|산 사이의 물이 흐르는 골짜기
손녀|granddaughter|2|people|아들이나 딸의 딸
전하다|to pass on, deliver|2||말이나 물건을 건네다
방문하다|to visit|2||찾아가서 만나다
찌다|to steam; to gain weight|2|food|김으로 익히다, 또는 살이 오르다
씹다|to chew|2|food|이로 잘게 부수다
시다|to be sour|2|food|맛이 식초 같다
뽑다|to pull out; to select|2||박힌 것을 빼다, 또는 여럿 중에서 고르다
촬영|filming, photo shoot|2|activities|사진이나 영화를 찍는 것
유명|fame|2||이름이 널리 알려짐
사진가|photographer|2|people|카메라로 찍는 것이 직업인 사람
골고루|evenly|2||빠짐없이 고르게
홍차|black tea|2|food|붉은 빛이 나는 서양식 차
깎다|to cut, trim; to peel; to haggle|2||칼로 잘라 내다, 또는 값을 낮추다
그대로|as it is|2||변함없이 처음과 같이
프라이팬|frying pan|2|home,food|기름을 두르고 음식을 볶거나 굽는 납작한 냄비
꽃무늬|floral pattern|2|shopping,colors|꽃 모양의 그림
조금씩|little by little|2||적은 양으로 여러 번
굉장히|extremely|2||아주 대단하게
냄비|pot|2|home,food|국이나 라면을 끓이는 그릇
단순하다|to be simple|2||복잡하지 않다
수족관|aquarium|2|places|물고기를 기르며 보여 주는 곳
정보|information|2||어떤 일에 대해 알려 주는 내용
날다|to fly|2|nature|새나 비행기가 공중을 움직이다
쟁반|tray|2|home|음식을 나르는 넓은 판
모자라다|to be short of|2||필요한 만큼 되지 않다
관리하다|to manage|2|work|맡아서 돌보다
만지다|to touch|2||손을 대다
공휴일|public holiday|2|time|나라에서 정한 쉬는 날
걸음|step|2||발을 옮기는 것
밟다|to step on|2||발로 누르다
간판|signboard|2||가게 이름을 써서 거는 판
오랫동안|for a long time|2|time|긴 기간
기계|machine|2||동력으로 움직이는 장치
정문|main gate|2|places|건물의 정면에 있는 큰 문
직접|directly, in person|2||중간에 다른 것 없이 바로
흘리다|to spill, shed|2||물이나 눈물을 떨어뜨리다
순서|order, sequence|2||정해진 차례
분명하다|to be clear|2||틀림없이 확실하다
반복하다|to repeat|2||되풀이하다
인쇄하다|to print|2|work|글이나 그림을 종이에 찍어 내다
기회|opportunity|2||어떤 일을 하기에 좋은 때
커피콩|coffee bean|2|food|볶아서 갈면 까만 음료가 되는 열매
앞치마|apron|2|home|요리할 때 옷 앞에 두르는 천
렌터카|rental car|2|transport|빌려서 타는 차
궁전|palace|2|places|왕이 사는 큰 집
건너편|the other side|2|places|맞은편
다행히|fortunately|2||운이 좋게
복도|hallway|2|places|건물 안 방들을 잇는 긴 통로
감다|to close (eyes); to wash (hair)|2||눈을 닫다, 또는 머리를 씻다
올리다|to raise; to upload|2||위로 가게 하다, 또는 인터넷에 글을 게시하다
킥보드|kick scooter|2|transport|한 발로 땅을 밀며 타는 탈것
박수|applause|2||두 손뼉을 마주 치는 것
어린이집|daycare center|2|places|부모가 일하는 동안 아이를 돌봐 주는 곳
기다|to crawl|2||무릎과 손으로 바닥을 움직이다
뒤집다|to flip over|2||안팎이나 위아래를 바꾸다
잠그다|to lock|2|home|열리지 않게 자물쇠를 채우다
늘리다|to increase|2||수나 양을 많게 하다
기름|oil; gasoline|2|food,transport|요리에 쓰는 미끈한 액체, 또는 차의 연료
미니밴|minivan|2|transport|여러 사람이 타는 작은 승합차
해외|overseas|2|places|다른 나라
싣다|to load|2|transport|차나 배에 물건을 올리다
펜션|pension (vacation rental)|2|places|여행지에서 묵는 작은 숙소
반드시|without fail|2||틀림없이 꼭
전체|whole, entire|2||모두를 합친 것
반려견|pet dog|2|nature|가족처럼 기르는 개
미루다|to postpone|2|time|정해진 때보다 뒤로 늦추다
제대로|properly|2||올바르게
그만두다|to quit|2|work|하던 일을 멈추다
능력|ability|2|work|일을 해내는 힘
결과|result|2||어떤 일이 끝나서 생긴 것
일자리|job, position|2|work|돈을 버는 일
목표|goal|2||이루려고 하는 것
대단하다|to be great, impressive|2||아주 크거나 훌륭하다
결정하다|to decide|2||무엇을 하기로 마음을 굳히다
성공하다|to succeed|2||원하는 것을 이루다
아나운서|announcer|2|people,work|뉴스를 읽는 방송인
나누다|to share, divide|2||여럿으로 가르다, 또는 함께 쓰다
비비다|to rub; to mix|2|food|두 손을 문지르다, 또는 밥에 양념을 섞다
성격|personality|2|people|사람의 타고난 마음씨와 행동의 특징
닮다|to resemble|2|people|생김새나 성격이 비슷하다
잔치|feast, party|2|society|기쁜 날 음식을 차려 여는 모임
백일|100th day (after birth)|2|time,society|아기가 태어난 지 백 번째 되는 날
미역국|seaweed soup|2|food|생일에 먹는 바다풀 국
출입|entry|2||들어가고 나오는 것
대문|front gate|2|home|집의 큰 문
눈물|tears|2|feelings|울 때 눈에서 나오는 물
평소|usual times|2|time|보통 때
떨리다|to tremble, be nervous|2|feelings|몸이 바르르 움직이다
집중|concentration|2|work|한곳에 마음을 모으는 것
국어|national language (Korean)|2|work|자기 나라의 말, 학교의 한 과목
시험장|exam site|2|work,places|문제를 풀며 실력을 평가받는 곳
독서실|study room (reading room)|2|places,work|조용히 공부하는 칸막이 방
자신|oneself; confidence|2||자기, 또는 스스로 믿는 마음
수능|Korean SAT (CSAT)|2|work,society|대학에 가려고 보는 한국의 큰 시험
바라다|to hope, wish|2|feelings|원하다
전혀|not at all|2||조금도
거절하다|to refuse|2||요청을 받아들이지 않다
흔들다|to shake, wave|2||이리저리 움직이게 하다
즐기다|to enjoy|2|feelings|즐겁게 누리다
모이다|to gather|2||한곳에 다 같이 오다
디제이|DJ|2|activities|음악을 골라 틀어 주는 사람
매다|to tie, fasten|2|shopping|끈을 묶다
행사|event|2|activities|어떤 목적으로 여는 모임
초대장|invitation card|2||손님을 부르는 편지
점점|gradually|2||조금씩 더
액자|picture frame|2|home|사진이나 그림을 넣는 틀
충분하다|to be enough|2||모자라지 않다
스튜디오|studio|2|places|사진이나 방송을 찍는 방
랍스터|lobster|2|food|집게발이 큰 바닷가재
보석|jewel|2|shopping|다이아몬드처럼 귀하고 빛나는 돌
주년|anniversary (counter)|2|time|해마다 돌아오는 그날을 세는 단위
꽃다발|bouquet|2|shopping|여러 송이를 묶은 꽃
고모|aunt (father's sister)|2|people|아버지의 여자 형제
얼다|to freeze|2|nature|물이 얼음이 되다
마르다|to dry; to be thin|2||물기가 없어지다, 또는 살이 빠지다
튀기다|to deep-fry|2|food|기름에 넣어 익히다
썰다|to slice, chop|2|food|칼로 얇게 자르다
주방|kitchen|2|home|음식을 만드는 곳, 부엌
양치질|brushing teeth|2|home,body|이를 닦는 일
발바닥|sole of the foot|2|body|발의 아래쪽 면
잠시|for a moment|2|time|짧은 시간
수의사|veterinarian|2|people,nature|동물을 치료하는 사람
참다|to endure, hold back|2|feelings|힘든 것을 견디다
부드럽다|to be soft|2||딱딱하지 않고 매끄럽다
도로|road|2|transport|차가 다니는 길
비교|comparison|2||둘 이상을 견주어 보는 것
고민|worry, concern|2|feelings|마음속으로 괴로워하며 생각하는 것
당연하지|of course!|2||그럴 수밖에 없다는 대답
생활|life, living|2||살아가는 일
불어|French (language)|2|society|프랑스 말
샴페인|champagne|2|food|축하할 때 마시는 거품이 나는 술
브이로그|vlog|2||자신의 일상을 찍어 올린 영상
블로거|blogger|2|people|인터넷 개인 공간에 글을 쓰는 사람
노력|effort|2||힘을 들여 애쓰는 것
지루하다|to be boring|2|feelings|재미가 없어 싫증이 나다
분위기|atmosphere, mood|2||그 자리에서 느껴지는 기분
답장|reply|2||받은 편지에 대한 대답
모습|appearance, figure|2||생긴 모양
훨씬|much, far (more)|2||비교했을 때 차이가 아주 크게
젊다|to be young|2|people|나이가 적고 힘이 넘치다
프로필|profile|2||사람을 소개하는 정보
뜨개질|knitting|2|activities|털실로 옷을 짜는 일
농담|joke|2||웃기려고 하는 말
자랑|pride, boasting|2|feelings|남에게 뽐내는 것
경험|experience|2||직접 겪어 보는 것
어플|app|2||휴대폰에 설치하는 프로그램
그만|stop; just that much|2||더 이상 하지 않고
설명|explanation|2||알기 쉽게 풀어 말하는 것
재채기|sneeze|2|body|코가 간질간질해서 '에취' 하는 것
유자차|citron tea|2|food|노란 시트러스 열매로 만든 달고 새콤한 차
소식|news|2||어떤 일에 대한 알림
추천|recommendation|2||좋은 것을 남에게 권하는 것
오해|misunderstanding|2||사실과 다르게 잘못 아는 것
풀다|to untie; to solve|2||묶인 것을 끄르다, 또는 문제의 답을 내다
칭찬하다|to praise|2||잘한 것을 좋게 말하다
따로|separately|2||함께하지 않고 각각
급하게|hastily|2||서둘러서
기사님|driver (polite)|2|transport,people|택시나 버스를 모는 사람을 높여 부르는 말
원하다|to want|2||바라다
교환하다|to exchange|2|shopping|서로 바꾸다
새롭다|to be new|2||전에 없던 것이다
자세히|in detail|2||꼼꼼하게
단추|button (on clothes)|2|shopping|옷을 여미는 작고 둥근 것
심하다|to be severe|2||정도가 지나치다
엄청|extremely|2||아주 많이
곱다|to be pretty, fine|2||모양이 아름답다
줍다|to pick up|2||떨어진 것을 집다
정리|organizing, tidying|2|home|어지러운 것을 질서 있게 하는 것
안방|master bedroom|2|home|집에서 가장 큰 방
다양하다|to be diverse|2||여러 가지로 많다
선택하다|to choose|2||여럿 중에서 고르다
언어|language|2|society|사람이 생각을 나타내는 말과 글
중미|Central America|2|places|미국과 남미 사이의 지역
수고|effort, trouble|2||일을 하느라 애쓰는 것
지각|lateness|2|work,time|정해진 시간보다 늦게 오는 것
내용|content|2||글이나 말에 담긴 것
마치다|to finish|2||하던 일을 끝내다
이미|already|2||벌써
놓치다|to miss (a bus, chance)|2|transport|잡았던 것을 떨어뜨리다, 또는 타야 할 것을 못 타다
자꾸|repeatedly|2||여러 번 되풀이하여
대박|awesome, jackpot|2||아주 좋거나 놀라운 일
고무장갑|rubber gloves|2|home|설거지할 때 손에 끼는 것
깔끔하게|neatly|2|home|깨끗하고 단정하게
빗자루|broom|2|home|바닥을 쓰는 도구
걸레|rag, mop|2|home|바닥을 닦는 천
끼다|to wear (gloves, rings); to be stuck|2|shopping|반지나 장갑을 손에 꽂다
복습하다|to review (lessons)|2|work|배운 것을 다시 공부하다
모으다|to collect, gather|2||여럿을 한데 합치다
꾸준히|steadily|2||한결같이 계속해서
갈다|to change; to grind|2||낡은 것을 새것으로 바꾸다, 또는 곱게 부수다
팔찌|bracelet|2|shopping|손목에 끼는 장식
첫사랑|first love|2|feelings|처음으로 좋아하게 된 사람이나 그 마음
소중하다|to be precious|2|feelings|아주 귀하다
벌다|to earn|2|work,shopping|일을 해서 돈을 얻다
양복|suit|2|shopping|남자가 입는 정장
횟집|raw fish restaurant|2|places,food|날생선을 파는 식당
역시|as expected|2||생각한 대로
훌륭하다|to be excellent|2||아주 좋고 뛰어나다
얻다|to get, gain|2||남에게서 받다, 또는 가지게 되다
완전히|completely|2||모자람 없이 다
불금|TGIF (Friday night fun)|2|time|불타는 금요일, 주말을 앞둔 신나는 밤
똑같이|equally, the same|2||조금도 다르지 않게
주로|mainly|2||대부분
졸다|to doze off|2||앉아서 꾸벅꾸벅 잠들다
정원|garden|2|home,nature|꽃과 나무를 가꾸는 집의 뜰
꽃병|vase|2|home|꽃을 꽂는 병
싱크대|kitchen sink|2|home|부엌에서 그릇을 씻는 곳
드디어|finally|2||마침내
위치|location|2|places|있는 자리
성함|name (honorific)|2|people|윗사람의 이름을 높여 부르는 말
택배|parcel delivery|2|shopping|집까지 물건을 배달해 주는 것
섞다|to mix|2|food|여러 가지를 한데 합치다
데우다|to heat up|2|food|식은 것을 따뜻하게 하다
야식|late-night snack|2|food|밤늦게 먹는 음식
세다|to count; to be strong|2||수를 헤아리다, 또는 힘이 강하다
붙이다|to stick, attach|2||맞닿게 하여 떨어지지 않게 하다
설명하다|to explain|2||알기 쉽게 풀어 말하다
반창고|bandage|2|body|상처에 붙이는 작은 테이프
긴장하다|to be nervous|2|feelings|마음을 놓지 못하고 떨다
남다|to remain|2||다 쓰지 않고 있다
게으르다|to be lazy|2|people|움직이거나 일하기 싫어하다
소설책|novel (book)|2||지어낸 이야기를 담은 책
단무지|pickled radish|2|food|노랗게 절인 무, 김밥에 들어간다
포장하다|to wrap; to pack to go|2|shopping,food|물건을 싸다, 음식을 가져가게 싸다
윷놀이|yutnori (traditional board game)|2|activities,society|설날에 막대 네 개를 던지며 하는 전통 게임
서류|documents|2|work|일에 관한 글을 적은 종이
확인하다|to check, confirm|2||틀림없는지 알아보다
부장님|department head (honorific)|2|work,people|한 부서를 책임지는 사람을 높여 부르는 말
젖다|to get wet|2||물에 닿아 축축해지다
간단히|simply, briefly|2||짧고 쉽게
특별히|especially|2||보통과 다르게
치료하다|to treat, cure|2|body|병이나 상처를 낫게 하다
봉투|envelope, bag|2|shopping|편지나 물건을 넣는 종이 주머니
헬멧|helmet|2|transport|머리를 보호하는 단단한 모자
복잡하다|to be complicated, crowded|2||여러 가지가 얽혀 있다
불편하다|to be uncomfortable|2||몸이나 마음이 거북하다
익숙하다|to be familiar|2||여러 번 해서 쉽게 하다
복사기|copier|2|work|종이를 똑같이 찍어 내는 기계
정리하다|to organize, tidy up|2|home|어지러운 것을 질서 있게 하다
기억하다|to remember|2||지난 일을 잊지 않고 떠올리다
무대|stage|2|activities,society|공연을 하는 높은 자리
검사하다|to inspect, test|2||좋고 나쁨을 살펴보다
마당|yard|2|home|집 앞의 평평한 땅
맛집|popular restaurant|2|places,food|음식이 맛있기로 유명한 식당
미소|smile|2|feelings|소리 없이 빙긋이 웃는 것
소개팅|blind date|2|people|친구가 연결해 준 사람과 처음 만나는 자리
한가하다|to be free, not busy|2||바쁘지 않다
교수|professor|2|work,people|대학교에서 가르치는 사람
엽서|postcard|2||사진이나 그림이 있는 우편 카드
멜로|melodrama|2|activities|사랑 이야기를 다룬 드라마나 영화
화가|painter|2|people|그림을 그리는 사람
마음씨|nature, disposition|3|people,feelings|사람의 성품과 됨됨이
세련되다|to be sophisticated, stylish|3|shopping|모양이나 말씨가 깔끔하고 멋지다
서투르다|to be clumsy, unskilled|3||익숙하지 않아 잘하지 못하다
소감|impressions, thoughts|3|feelings|어떤 일을 겪고 느낀 생각
팔순잔치|80th birthday party|3|society,people|여든 살 생일에 여는 큰 모임
이르다|to reach; to be early|3||어떤 곳에 다다르다, 또는 때가 빠르다
소독약|disinfectant|3|body|병균을 죽이는 약
소독하다|to disinfect|3|body|병균을 없애다
낚싯바늘|fishhook|3|activities|물고기를 낚는 끝이 굽은 쇠
검토하다|to review, examine|3|work|자세히 살펴보다
학장|dean|3|work,people|단과 대학을 책임지는 사람
뒷풀이|after-party|3|activities|행사가 끝난 뒤 함께 먹고 노는 자리
예산|budget|3|shopping,work|앞으로 쓸 돈을 미리 계산한 것
내달|next month|3|time|다음 달
성명|full name|3|people|성과 이름
꼼꼼히|meticulously|3||빈틈없이 자세하게
면적|area (size)|3||땅이나 바닥의 넓이
실컷|to one's heart's content|3||마음껏, 원하는 만큼
잔디깎이|lawn mower|3|home|풀을 짧게 자르는 기계
광고지|flyer|3|shopping|가게를 알리려고 나누어 주는 종이
연설|speech|3|society|여러 사람 앞에서 자기 생각을 말하는 것
뛰어나다|to be outstanding|3||남보다 훨씬 낫다
달성하다|to achieve|3|work|목표를 이루다
틈틈이|in spare moments|3|time|짬이 날 때마다
영리하다|to be clever|3|people|눈치가 빠르고 똑똑하다
금액|amount of money|3|shopping|돈의 액수
실리다|to be printed, published|3|society|글이나 사진이 신문이나 책에 나오다
불만족스럽다|to be dissatisfied|3|feelings|마음에 차지 않다
여쭙다|to ask (humble)|3|people|윗사람에게 묻다
마중|meeting someone on arrival|3|transport|오는 사람을 맞으러 나가는 것
가리다|to cover, hide|3||보이지 않게 막다
최고급|highest quality|3|shopping|가장 좋은 등급
숙이다|to bow, lower|3||고개나 몸을 앞으로 굽히다
끈적하다|to be sticky|3||손에 들러붙는 느낌이 있다
붉다|to be red|3|colors|핏빛과 같다
조언|advice|3||도움이 되는 말
이쑤시개|toothpick|3|home|이 사이에 낀 음식을 빼는 가는 나무
기획사|entertainment agency|3|work|가수나 배우를 키우고 관리하는 회사
붓다|to pour; to swell|3||물을 쏟아 넣다, 또는 몸이 부풀다
여쭤보다|to ask (humble)|3|people|윗사람에게 묻다
부지런하게|diligently|3||게으르지 않고 꾸준하게
계약자|contractor|3|work|약속 문서에 서명한 사람
출입국|immigration, entry and exit|3|transport,society|나라를 떠나고 들어오는 것
변경하다|to change, modify|3||다르게 바꾸다
꽁초|cigarette butt|3||피우고 남은 담배 끝
이끌다|to lead|3||앞에서 사람들을 데리고 가다
매형|brother-in-law (sister's husband)|3|people|누나의 남편
포대기|baby carrier blanket|3|people|아기를 업을 때 두르는 작은 이불
백설기|white rice cake|3|food|쌀가루를 쪄서 만든 하얀 떡
젖병|baby bottle|3|people|아기가 우유를 먹는 병
조리원|postpartum care center|3|places|아기를 낳은 엄마가 몸을 회복하며 지내는 곳
목캔디|throat lozenge|3|body|목이 아플 때 먹는 사탕
부케|bridal bouquet|3|society|신부가 결혼식에서 드는 꽃다발
`;

  root.KC = root.KC || {};
  root.KC.duolingo = { tag: 'duolingo', known: KNOWN, words: WORDS };
  if (typeof module !== 'undefined' && module.exports) module.exports = root.KC.duolingo;
})(typeof window !== 'undefined' ? window : globalThis);

// ===== 순장님별 말씀·기도 데이터 =====
// 이름은 띄어쓰기 무시하고 비교함 (예: "김 은정" = "김은정")
// verse: 한 절이면 문자열, 여러 절이면 [[절번호, "본문"], ...]
// verse/ref 를 비워두면 아래 DEFAULT_WORD 의 말씀이 나옴
// prayer: 녹음한 기도 파일 경로 (prayer 폴더에 해당 파일명으로 넣기)
// song  : 찬양 mp3 경로 / songTitle: 화면에 보일 곡명 / youtube: 유튜브 링크

const DEFAULT_SONG = ""; // 명단에 없는 이름일 때 재생할 곡 (없으면 비워둠)

const PEOPLE = {
  "김은정": {
    verse: "이르되 주 예수를 믿으라 그리하면 너와 네 집이 구원을 받으리라 하고",
    ref: "사도행전 16:31",
    message: "", prayer: "prayer/kim-eunjeong.m4a", 
    song: "songs/kim-eunjeong.mp3", songTitle: "밀알",
    youtube: "https://www.youtube.com/watch?v=d-GZ19Srxwc"
  },
  "김미영": {
    verse: "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라 내가 너희에게 주는 것은 세상이 주는 것과 같지 아니하니라 너희는 마음에 근심하지도 말고 두려워하지도 말라",
    ref: "요한복음 14:27",
    message: "", prayer: "prayer/kim-miyoung.m4a", 
    song: "songs/kim-miyoung.mp3", songTitle: "두려워 말라",
    youtube: "https://www.youtube.com/watch?v=OH-x1b0bWY0"
  },
  "변미현": {
    verse: [
      [7, "그러나 무엇이든지 내게 유익하던 것을 내가 그리스도를 위하여 다 해로 여길뿐더러"],
      [8, "또한 모든 것을 해로 여김은 내 주 그리스도 예수를 아는 지식이 가장 고상하기 때문이라 내가 그를 위하여 모든 것을 잃어버리고 배설물로 여김은 그리스도를 얻고"],
      [9, "그 안에서 발견되려 함이니 내가 가진 의는 율법에서 난 것이 아니요 오직 그리스도를 믿음으로 말미암은 것이니 곧 믿음으로 하나님께로부터 난 의라"]
    ],
    ref: "빌립보서 3:7-9",
    message: "", prayer: "prayer/byun-mihyun.m4a", 
    song: "", songTitle: "",
    youtube: ""
  },
  "오다솔": {
    verse: [
      [6, "아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라"],
      [7, "그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라"]
    ],
    ref: "빌립보서 4:6-7",
    message: "", prayer: "prayer/oh-dasol.m4a", 
    song: "songs/oh-dasol.mp3", songTitle: "아무것도 두려워 말라",
    youtube: "https://www.youtube.com/watch?v=jTDVBR_pRCI"
  },
  "이정원": {
    verse: "그러나 내가 가는 길을 그가 아시나니 그가 나를 단련하신 후에는 내가 순금 같이 되어 나오리라",
    ref: "욥기 23:10",
    message: "", prayer: "prayer/lee-jeongwon.m4a", 
    song: "songs/lee-jeongwon.mp3", songTitle: "주가 보이신 생명의 길",
    youtube: "https://www.youtube.com/watch?v=uAzsv0rnAMk"
  },
  "장예진": {
    verse: "그러므로 믿음은 들음에서 나며 들음은 그리스도의 말씀으로 말미암았느니라",
    ref: "로마서 10:17",
    message: "", prayer: "prayer/jang-yejin.m4a", 
    song: "songs/jang-yejin.mp3", songTitle: "믿음이 없이는",
    youtube: "https://www.youtube.com/watch?v=g5n4uSXddAk"
  }
};

// 명단에 없는 이름이거나 말씀을 아직 안 넣었을 때 보여줄 말씀
const DEFAULT_WORD = {
  verse: "에스라가 여호와의 율법을 연구하여 준행하며 율법과 규례를 이스라엘에게 가르치기로 결심하였었더라",
  ref: "에스라 7:10",
  message: "에스라 순장님, 함께해 주셔서 감사합니다."
};

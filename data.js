// ===== 순장님별 말씀·기도 데이터 =====
// 이름은 띄어쓰기 무시하고 비교함 (예: "김 은정" = "김은정")
// verse/ref 를 비워두면 아래 DEFAULT_WORD 의 말씀이 나옴
// prayer: 녹음한 기도 파일 경로 (prayer 폴더에 해당 파일명으로 넣기)
// song  : 비워두면 DEFAULT_SONG 재생

const DEFAULT_SONG = "audio/song.mp3";

const PEOPLE = {
  "김은정": { verse: "", ref: "", message: "", prayer: "prayer/kim-eunjeong.m4a", song: "" },
  "김미영": { verse: "", ref: "", message: "", prayer: "prayer/kim-miyoung.m4a", song: "" },
  "변미현": { verse: "", ref: "", message: "", prayer: "prayer/byun-mihyun.m4a", song: "" },
  "오다솔": { verse: "", ref: "", message: "", prayer: "prayer/oh-dasol.m4a",    song: "" },
  "이정원": { verse: "", ref: "", message: "", prayer: "prayer/lee-jeongwon.m4a", song: "" },
  "장예진": { verse: "", ref: "", message: "", prayer: "prayer/jang-yejin.m4a",  song: "" }
};

// 명단에 없는 이름이거나 말씀을 아직 안 넣었을 때 보여줄 말씀
const DEFAULT_WORD = {
  verse: "에스라가 여호와의 율법을 연구하여 준행하며 율법과 규례를 이스라엘에게 가르치기로 결심하였었더라",
  ref: "에스라 7:10",
  message: "에스라 순장님, 함께해 주셔서 감사합니다."
};

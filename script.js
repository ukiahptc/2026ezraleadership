const $ = (id) => document.getElementById(id);
const audio = $("audio");
const playBtn = $("playBtn");

const normalize = (s) => s.replace(/\s+/g, "").trim();

// 띄어쓰기 무시하고 이름 찾기
function findPerson(name) {
  const key = normalize(name);
  for (const n in PEOPLE) {
    if (normalize(n) === key) return PEOPLE[n];
  }
  return null;
}

function show(name) {
  const data = findPerson(name) || DEFAULT_WORD;

  $("who").textContent = name;
  $("verse").textContent = data.verse;
  $("ref").textContent = data.ref;
  $("message").textContent = data.message || "";
  $("message").classList.toggle("hidden", !data.message);

  $("modal").classList.add("hidden");
  const card = $("card");
  card.classList.remove("hidden");
  card.classList.remove("reveal");
  void card.offsetWidth; // 애니메이션 재시작
  card.classList.add("reveal");

  playSong(data.song || DEFAULT_SONG);
}

// 아이폰은 사용자가 버튼을 누른 직후에만 소리 재생이 허용됨 → submit 안에서 호출
function playSong(src) {
  if (!src) return;
  if (!audio.src.endsWith(src)) audio.src = src;
  audio.currentTime = 0;
  audio.play()
    .then(() => { $("player").classList.remove("hidden"); setIcon(); })
    .catch(() => {
      // 자동재생만 막힌 경우엔 버튼을 보여주고, 파일이 없으면 숨김
      if (!audio.error) { $("player").classList.remove("hidden"); setIcon(); }
    });
}

function setIcon() {
  playBtn.textContent = audio.paused ? "▶" : "❚❚";
}

playBtn.addEventListener("click", () => {
  audio.paused ? audio.play() : audio.pause();
});
audio.addEventListener("play", setIcon);
audio.addEventListener("pause", setIcon);
audio.addEventListener("error", () => $("player").classList.add("hidden"));

$("nameForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("nameInput").value.trim();
  if (!name) return;
  show(name);
});

$("again").addEventListener("click", () => {
  audio.pause();
  $("nameInput").value = "";
  $("modal").classList.remove("hidden");
  $("nameInput").focus();
});

window.addEventListener("load", () => $("nameInput").focus());

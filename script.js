const $ = (id) => document.getElementById(id);
const audio = $("audio");
const playBtn = $("playBtn");
const prayer = $("prayer");
let songWasPlaying = false;

const normalize = (s) => s.replace(/\s+/g, "").trim();

// 띄어쓰기 무시하고 이름 찾기
function findPerson(name) {
  const key = normalize(name);
  for (const n in PEOPLE) {
    if (normalize(n) === key) return { ...PEOPLE[n], name: n };
  }
  return null;
}

function show(name) {
  const person = findPerson(name) || {};
  if (person.name) name = person.name; // 등록된 이름 표기로 통일
  const word = person.verse ? person : DEFAULT_WORD;
  const message = person.message || DEFAULT_WORD.message;

  $("who").textContent = name;
  $("verse").textContent = word.verse;
  $("ref").textContent = word.ref;
  $("message").textContent = message;
  $("message").classList.toggle("hidden", !message);

  setupPrayer(name, person.prayer);

  $("modal").classList.add("hidden");
  $("heroWord").classList.add("hidden");
  const card = $("card");
  card.classList.remove("hidden");
  card.classList.remove("reveal");
  void card.offsetWidth; // 애니메이션 재시작
  card.classList.add("reveal");

  playSong(person.song || DEFAULT_SONG);
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

// ===== 기도 녹음 =====
// 기도를 들으면 노래는 잠시 멈추고, 기도가 끝나면 다시 이어서 재생
function setupPrayer(name, src) {
  prayer.pause();
  $("prayerBox").classList.add("hidden");
  if (!src) return;
  $("prayerWho").textContent = name;
  $("prayerState").textContent = "";
  prayer.src = src;
  prayer.load();
}

prayer.addEventListener("canplay", () => $("prayerBox").classList.remove("hidden"));
prayer.addEventListener("error", () => $("prayerBox").classList.add("hidden"));

$("prayerBtn").addEventListener("click", () => {
  if (!prayer.paused) { prayer.pause(); return; }
  songWasPlaying = !audio.paused;
  audio.pause();
  prayer.play();
});
prayer.addEventListener("play", () => {
  $("prayerState").textContent = "기도를 듣고 있어요 · 다시 누르면 멈춤";
});
prayer.addEventListener("pause", () => {
  if (!prayer.ended) $("prayerState").textContent = "일시정지됨";
});
prayer.addEventListener("ended", () => {
  $("prayerState").textContent = "";
  prayer.currentTime = 0;
  if (songWasPlaying) audio.play();
});
// 기도 중에 노래 버튼을 누르면 기도는 멈춤
audio.addEventListener("play", () => { if (!prayer.paused) prayer.pause(); });

$("nameForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("nameInput").value.trim();
  if (!name) return;
  show(name);
});

$("again").addEventListener("click", () => {
  audio.pause();
  prayer.pause();
  $("card").classList.add("hidden");
  $("heroWord").classList.remove("hidden");
  $("nameInput").value = "";
  $("modal").classList.remove("hidden");
  $("nameInput").focus();
});

window.addEventListener("load", () => $("nameInput").focus());

// ===== 밤하늘 별·산 불빛 만들기 =====
function scatter(box, count, cls, yMin, yMax) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const d = document.createElement("i");
    d.className = cls;
    d.style.left = Math.random() * 100 + "%";
    d.style.top = yMin + Math.random() * (yMax - yMin) + "%";
    d.style.animationDelay = (Math.random() * 6).toFixed(2) + "s";
    d.style.animationDuration = (3 + Math.random() * 4).toFixed(2) + "s";
    if (Math.random() < 0.2) d.classList.add("big");
    frag.appendChild(d);
  }
  box.appendChild(frag);
}
scatter($("stars"), 140, "star", 0, 85);
scatter($("lights"), 45, "light", 25, 95);

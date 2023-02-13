let gameStart = document.getElementById("gameStart");

gameStart.onclick = function (e) {
  console.log("1. 조용히 병실을 빠져나와 1층 밖으로 나간다.");
  console.log("2. 노래를 흥얼거린다.");
  console.log("3. 조심성 없이 창문으로 뛰어내린다.");
  prompt("1번? 2번? 3번?");
};

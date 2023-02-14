let gameStart = document.getElementById("gameStart");

gameStart.onclick = function gameStart(e) {
  console.log("1. 조용히 병실을 빠져나와 1층 밖으로 나간다.");
  console.log("2. 노래를 흥얼거린다.");
  console.log("3. 조심성 없이 창문으로 뛰어내린다.");
  console.log("=======================");
  let options = prompt("1번? 2번? 3번?");
  console.log(options);

  if (options == "1번") {
    console.log("아직 한낮이다.");
    console.log("갑자기 숨어 있던 꼬마 하나가 차병장에게로 달려온다.");
    console.log("이 상황에서 차병장은...");
    console.log("=======================");
    console.log("1. 아이를 밀쳐낸다.");
    console.log("2. 깜짝 놀라며 목청이 터질듯이 소리 지른다.");
    console.log("3. 아이를 안아주며  말을 건다.");
    console.log("=======================");
    options;
    console.log(options);
  }
  if (options == "1번") {
    console.log("아이가 넘어지며 사망한다.");
    // 다시 시작 OR 종료
  } else if (options == "2번") {
    console.log("아이가 깜짝 놀라서 사망한다.");
    // 다시 시작 OR 종료
  } else if (options == "2번") {
    console.log("노래를 좋아하는 좀비들이 몰려와 사망한다.");
    let isStart = confirm("다시 시작하려면 '확인'을 클릭하세요.");
    // 다시 시작 OR 종료
  } else if (options == "3번") {
    console.log("조심성 없이 창문으로 뛰어내린 차병장,");
    console.log("훌륭히 착지를 해낸다.");
    console.log("이상하게 푹신한 바닥을 내려다 보니");
    console.log("시체 무덤이었다.");
    console.log("시체들 위로 뛰어내려 다치지 않았던 차병장은 이 상황에서...");
    console.log("=======================");
    console.log("1. 시체 위에서 미국춤을 춘다.");
    console.log("2. 운다. 눈물이 멈추지 않는다.");
    console.log("3. 깜짝 놀라며 뒷걸음질 친다.");
    console.log("=======================");
    options;
    console.log(options);
    if (options == "1번") {
      console.log(
        "트럭에 탄 한 남자가 이상함을 감지하고 차병장을 총으로 쏴 죽인다."
      );
      // 다시 시작 OR 종료
    } else if (options == "2번") {
      console.log;
      gameOptions("운다. 눈물이 멈추지 않는다.");
    } else if (options == "3번") {
      console.log("깜짝 놀라며 뒷걸음질 친다.");
      console.log("그러던 와중에");
      console.log("뒷쪽으로 달려가는, 지나가던 꼬마를 만난다.");
      console.log("이 상황에서 차병장은...");
      console.log("=======================");
      let options2 = prompt("1번? 2번?");
      console.log(options2);
      if (options2 == "1번") {
        console.log("아이가 넘어지며 사망한다.");
        // 다시 시작 OR 종료
      } else if (options2 == "2번") {
        console.log("=======================");
        console.log("아이를 안아주며 말을 건다.");
        console.log("차병장: 왜 너 혼자 있니? 부모님은 어디 계시니?");
        console.log(
          "아이: ( ༎ຶŎ༎ຶ ) 아저씨도 얼른 도망쳐야 해요!! 일로 오세요!"
        );
        console.log("아이는 한 남자가 타고 있는 트럭으로 차병장을 데려 간다.");
        console.log("이 상황에서 차병장은...");
        console.log("=======================");
        console.log("1. 타코야키 트럭인줄 알고 타코야키를 구워 먹는다.");
        console.log("2. 트럭 안의 남자를 경계하다가 이내 말을 건넨다.");
        console.log(
          "3. 갑자기 아이의 손을 뿌리치고 트럭에서 최대한 멀리 달아난다."
        );
        console.log("=======================");
        options;
        console.log(options);
        if (options == "1번") {
          console.log("냄새에 홀린 좀비들이 몰려와 사망한다.");
          // 다시 시작 OR 종료
        } else if (options == "2번") {
          console.log("차병장: 이 아이의 부모 되십니까?");
          console.log("남자: 맞소. 어서 타시오.");
          console.log("아이: 얼른 타요!! 곧 해가 져요!");
          console.log("아이가 서쪽하늘을 가리킨다.");
          console.log("석양이 질 무렵이다.");
          console.log("이 상황에서 차병장은...");
          console.log("=======================");
          console.log("1. 트럭을 탄다.");
          console.log("2. 트럭을 안 탄다.");
          console.log("=======================");
          options2;
          console.log(options2);
          if (options2 == "1번") {
            console.log("차병장 포함 모두가 남자의 집으로 안전하게 귀가한다.");
          } else if (options2 == "2번") {
            // 종료
            console.log("해가 지자마자 모두 좀비들에게 물려 사망한다.");
            // 다시 시작 OR 종료
          }
        } else if (options == "3번") {
          console.log("달려오는 재빠른 소리에 놀란 좀비들이 몰려와 사망한다.");
          // 다시 시작 OR 종료
        }
      }
    }
  } else {
    alert("예외 처리");
  }
};

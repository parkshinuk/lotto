// 조건1. 로또번호 7개
// 조건2. 로또번호 1~45
// 조건3. 기존 번호와 중복 안됨
// 조건4. function 사용

// logic
// 1. 로또번호 배열 생성)
// 2. 로또번호 7개 추출 될 때 까지 반복
// 2-1. 새로운 번호 랜덤 생성후 변수에 저장
// 2-2. 로또번호(배열)와 새로운 번호 중복 체크 반복문 실행
// 2-2-1. 로또번호[배열]의 크기만큼 중복 체크
// 2-2-2. 중복된 경우 : 2-1 재실행
// 2-2-3. 중복되지 않는 경우 : 2-3 실행
// 2-3. 로또번호(배열) 새로운 번호 저장
// 3. 생성된 7개 로또번호 html 요소에 대입

// 로또 번호 배열 변수 선언
let lotto = [];

// 로또 번호 생성 함수
function lottoGenerate() {
  // 반복문 시작 : 중복체크된 로또번호 대입 반복문
  lottoLoop: while (lotto.length < 7) {
    // 랜덤번호 생성
    let newNum = Math.floor(Math.random() * 45) + 1;
    // 추출된 로또 번호 개수만큼 중복 체크 반복
    for (k = 0; k < lotto.length; k++) {
      // 새로운 번호 중복 확인
      if (lotto[k] == newNum) continue lottoLoop;
    }
    // 중복되지 않은 경우 로또번호 배열에 추가
    lotto[lotto.length] = newNum;
  }
}
// 로또 번호 html 대입 함수
function lottoToHtml() {
  let balls = document.querySelectorAll('.ball');
  balls.forEach(function (ball, index) {
    // 1안
    let ids = 'ball' + (index + 1);
    let obj = document.getElementById(ids);

    // 2안
    ball.innerHTML = lotto[index];
  });

  // 3안
  // let ball1 = document.getElementById('ball1');
  // let ball2 = document.getElementById('ball2');
  // let ball3 = document.getElementById('ball3');
  // let ball4 = document.getElementById('ball4');
  // let ball5 = document.getElementById('ball5');
  // let ball6 = document.getElementById('ball6');
  // let ball7 = document.getElementById('ball7');
  // ball1.innerHTML = lotto[0]; 
  // ball2.innerHTML = lotto[1];
  // ball3.innerHTML = lotto[2];
  // ball4.innerHTML = lotto[3];
  // ball5.innerHTML = lotto[4];
  // ball6.innerHTML = lotto[5];
  // ball7.innerHTML = lotto[6];
}

// 로또 번호 생성 함수 실행
lottoGenerate();
// 로또 번호 대입 함수 실행
lottoToHtml();

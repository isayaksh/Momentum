// document에서 "clock"이라는 id를 가진 element 호출
const clock = document.querySelector('#clock');

// 현재의 시간을 읽어오는 getClock() 함수
function getClock(){
  const date = new Date(); // Date 객체 호출
  // date.getHour()를 통해 현재 시간(정수)을 호출하고,
  // toString() 함수를 통해 문자열로 변환한 후
  // padStart() 함수를 통해 현재 문자열을 최대 2자리수로 표현하고
  // 현재 문자열이 0 혹은 1자리수일 경우 문자열 앞을 기준으로 문자열이 최대 2자리수가 되도록 0을 추가
  // ex) 7 → 07, 12 → 12
  const hour = date.getHours().toString().padStart(2,"0");
  const min = date.getMinutes().toString().padStart(2,"0");
  // "clock" element의 텍스트 값을 "시간:분"으로 할당 
  clock.innerText = `${hour}:${min}`;
}

getClock(); // 프로그램이 실행되자 마자 getClock() 함수를 실행
setInterval(getClock,1000); // getClock() 함수를 1000ms(1 second) 마다 반복적으로 실행
// document에서 "login-form"이라는 id를 가진 element 호출
const loginForm = document.querySelector('#login-form');
// document에서 <input> 태그를 가진 element 호출
const loginInput = loginForm.querySelector('input');
// document에서 "greeting"이라는 id를 가진 element 호출
const greeting = document.querySelector('#greeting');
// document에서 "todo-from"이라는 id를 가진 element 호출
const todoForm = document.querySelector('#todo-form');
// document에서 "todo-list"이라는 id를 가진 element 호출
const todoList = document.querySelector('#todo-list');

// "hidden" 문자열 값을 가진 HIDDEN_CLASSNAME 변수 선언
const HIDDEN_CLASSNAME = "hidden"
// "username" 문자열 값을 가진 USERNAME_KEY 변수 선언
const USERNAME_KEY = "username"
// 현재 localStorage에 username의 값을 savedUsername에 할당
const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null){ // 만약 localStoarge에 username이 존재하지 않는다면
  // loginForm element class의 hidden 요소를 제거
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // loginForm <form> element가 submit 이벤트를 실행할 때 loginSubmit() 함수를 실행
  loginForm.addEventListener("submit",loginSubmit);
} else {  // 만약 localStoarge에 username이 존재한다면
  // savedUsername을 인자로 paintGreetings 함수 실행
  paintGreetings(savedUsername);
}

// login <form>을 submit할 때 실행하는 loginSubmit() 함수
function loginSubmit(event) {
  event.preventDefault(); // submit 이벤트가 실행될 때 기본으로 실행되는 행동을 멈춤
  const username = loginInput.value; // 현재 input 창에 입력된 value를 username 변수에 할당

  // "username"을 key로 가지고, 위에서 할당된 username의 값을 value로 갖는 데이터 쌍을 localStorage에 저장
  localStorage.setItem(USERNAME_KEY,username);

  // loginForm element에 "hidden" 클래스를 추가하여 화면에서 보이지 않도록 설계
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 위에서 할당된 username의 값을 인자로 사용하여 paintGreetings() 함수 실행
  paintGreetings(username);
}

// 유저 이름을 입력한 후 유저이름을 화면에 출력하는 paintGreetings() 함수  
function paintGreetings(username) {
  // 화면에 출력할 문자열(Hello username)을 greeting element의 innerText에 할당
  greeting.innerText = `Hello ${username}`;
  // 유저 이름을 입력받은 후 숨겨져있던 HTML element들의 hidden 상태를 제거
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
}
// document에서 "todo-form"이라는 id를 가진 element 호출
const toDoForm = document.querySelector('#todo-form');
// document에서 <input> element 호출
const toDoInput = toDoForm.querySelector('input');
// document에서 "todo-list"이라는 id를 가진 element 호출
const toDoList = document.querySelector('#todo-list');
// "toDos" 문자열 값을 가진 TODOS_KEY 변수 선언
const TODOS_KEY = "toDos"
// 현재 localStorage에 "toDos"를 key로 가지는 데이터를 savedToDos에 할당
const savedToDos = localStorage.getItem(TODOS_KEY);
// todo 요소를 저장할 toDos 배열
let toDos = [];

// todoForm에서 "submit" 이벤트가 발생했을 때 handlieToDoSubmit() 함수를 실행
toDoForm.addEventListener("submit",handleToDoSubmit);

if(savedToDos){ // 만약 savedToDos에 데이터가 할당 되었다면
  // 문자열로 되어있는 savedToDos데이터를 코드 형식으로 변환하여 parseToDos에 할당
  const parsedToDos = JSON.parse(savedToDos); 
  toDos = parsedToDos; // toDos 배열에 코드 형식으로 변환한 paresToDos를 할당
  // parseToDos 배열에 존재하는 각 원소를 차례로 인자로 이용하여 paintToDo() 함수 실행
  parsedToDos.forEach(paintToDo);
}

// toDos 배열의 값을 저장하는 saveToDos() 함수
function saveToDos() {
  // "toDos"를 key 값으로, toDos 배열을 JSON.stringify() 함수를 이용하여 문자열 형식으로 변환한 후
  // value 값으로 데이터로 형성하여 localStorage에 저장
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

// 삭제 버튼을 클릭한 <li> element 제거하는 deleteToDo() 함수
function deleteToDo(event) {
  // 현재 클릭한 button의 parentElement(<li>)를 li에 할당
  const li = event.target.parentElement;
  // <li> element를 제거
  li.remove();
  // 현재 toDos 배열에서 위에서 할당한 <li>의 값을 제거
  toDos = toDos.filter(item => item.id !== parseInt(li.id));
  // 현재 toDos 배열을 saveToDos() 함수를 통해 저장
  saveToDos();
}

// toDo <input> element에 값을 입력했을 시 <li>를 생성하여 화면에 출력하는 paintToDo() 함수
function paintToDo(newTodoObj) {
  // <li> element를 생성하여 li에 할당
  const li = document.createElement("li");
  // li의 id에 인자로 전달받은 newTodoObj의 id property를 할당
  li.id = newTodoObj.id;
  
  // <span> element를 생성하여 span에 할당
  const span = document.createElement("span");
  // <button> element를 생성하여 button 할당
  const button = document.createElement("button");
  // span의 innerText에 newTodoObj의 text property를 할당
  span.innerText = newTodoObj.text;
  // button의 innerText에 X 이모지를 할당
  button.innerText = "❌";

  // button에 "click" 이벤트 발생 시 deleteToDo() 함수를 실행하는 addEventListener를 작성
  button.addEventListener("click",deleteToDo);

  // li에 button과 span을 child로 추가
  li.appendChild(button);
  li.appendChild(span);

  // toDoList에 li를 child로 추가
  toDoList.appendChild(li);
}

// toDoForm에 "submit" 이벤트가 발생할 때 실행하는 handleToDoSubmit() 함수
function handleToDoSubmit(event) {
   // 이벤트가 실행될 때 기본으로 실행되는 행동을 멈춤
  event.preventDefault();
  // toDoInput element의 있는 value를 newToDo 변수에 할당
  const newTodo = toDoInput.value;
  // todoList에 추가할 obj 생성
  const newTodoObj = {
    id : Date.now(), // 현재 시간을 기준으로 id 설정
    text : newTodo, // 위에서 할당받은 newTodo 값을 text property의 value값으로 할당
  }
  toDoInput.value = ""; // toDoInput element의 있는 value를 초기화
  toDos.push(newTodoObj); // toDos 배열에 위에서 생성한 obj를 push
  paintToDo(newTodoObj); // 위에서 생성한 obj를 인자로 paitToDo() 함수 실행
  saveToDos(); // 현재의 toDos 배열을 문자열로 localStorage에 저장하는 saveToDos() 함수 실행
}
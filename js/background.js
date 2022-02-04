// 배경 이미지 파일의 개수
const numberOfImages = 5;
// 1 ~ 5까지의 수를 Math.random()을 통해 획득후 파일 이름 생성
const image = `${Math.ceil(Math.random()*numberOfImages)}.jpg`
// HTML의 <img> element를 생성
const bgImage = document.createElement("img");

// <img> element에 src 속성 추가
bgImage.src = `img/${image}`;
// <img> element에 css요소인 "backGround"를 class에 추가
bgImage.classList.add("backGround");
// HTML <body> element에 위에서 작성한 bgImage element 요소를 추가
document.body.appendChild(bgImage);
const API_KEY = "ab7725a01cc84405742769a8e7eb6183";

// 현재 위치의 날씨정보를 이용한 함수를 실행
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

// navigator.geolocation.getCurrentPosition() 함수가 제대로 동작할 때 실행할 함수
function onGeoOk(position) {
  const lat = position.coords.latitude; // 현재 이용자의 위도 값을 lat에 할당
  const lon = position.coords.longitude; // 현재 이용자의 경도 값을 lon에 할당

  // open weather API를 이용하기 위한 url값
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    // document에서 "weather"이라는 id를 가진 element 호출
    const weather = document.querySelector('#weather');
    // weather element의 innerText의 값을 할당
    weather.innerText = `${data.name} @ ${Math.round(data.main.temp)}°C`;
  });
}

// navigator.geolocation.getCurrentPosition() 함수가 제대로 동작하지 않을 때 실행할 함수
function onGeoError() {
  // alert 창으로 오류가 발생했음을 이용자에게 전달
  alert("Can't find you. No weather for you.");
}
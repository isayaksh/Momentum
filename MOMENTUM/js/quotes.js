// 화면에 출력할 quote 목록
const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Love the life you live. Live the life you love.",
    author: "Bob Marley"
  },
  {
    quote: "Lead from the heart, not the head.",
    author: "Princess Diana"
  },
  {
    quote: "You define beauty yourself, society doesn’t define your beauty.",
    author: "Lady Gaga"
  },
  {
    quote: "Your love makes me strong, your hate makes me unstoppable!",
    author: "Cristiano Ronaldo"
  },
];
// document에서 "quote"이라는 id를 가진 element 호출
const quote = document.querySelector('#quote');
// quotes 배열의 길이에 맞는 index 값을 Math 객체를 이용하여 랜덤으로 호출하여 quote 할당
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

// todayQuote에 할당된 값을 이용하여 quote element의 innerText에 할당 
quote.innerText = `${todayQuote.quote} \n- ${todayQuote.author} -`;


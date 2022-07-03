const imageList = [
  {
    name: "01.jpg",
    author: "Julius Silver",
    url: "https://pixabay.com/ko/users/julius_silver-4371822/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3010407",
  },
  {
    name: "02.jpg",
    author: "Janko Ferlic",
    url: "https://pixabay.com/ko/users/thepoorphotographer-8678942/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4436914",
  },
  {
    name: "03.jpg",
    author: "artparta",
    url: "https://pixabay.com/ko/users/artparta-18060306/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5641320",
  },
  {
    name: "04.jpg",
    author: "analogicus",
    url: "https://pixabay.com/ko/users/analogicus-8164369/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3384386",
  },
  {
    name: "05.jpg",
    author: "liggraphy",
    url: "https://pixabay.com/ko/users/liggraphy-7165278/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3846525",
  },
  {
    name: "06.jpg",
    author: "Noel Bauza",
    url: "https://pixabay.com/ko/users/noel_bauza-2019050/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1216543",
  },
  {
    name: "07.jpg",
    author: "Giuseppe Dio",
    url: "https://pixabay.com/ko/users/giuseppedio-1945766/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4405357",
  },
  {
    name: "08.jpg",
    author: "mailanmaik",
    url: "https://pixabay.com/ko/users/mailanmaik-4340251/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2494526",
  },
];

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
  // round, ceil 사용 시 length를 넘는 수가 나올 수 있음.
}

function getRandomValue(datalist) {
  return datalist[getRandomNumber(datalist.length)];
}

const randomImage = getRandomValue(imageList);

const bgAuthor = document.querySelector("#bgimage-author:first-child");

const bgImageContainer = document.createElement("img");

bgImageContainer.classList.add("bgImage");

bgImageContainer.src = `img/${randomImage.name}`;
bgAuthor.innerHTML = `<span>Photo by <a href=${randomImage.url} target="_blank">${randomImage.author}</a><span>`;

document.body.appendChild(bgImageContainer);

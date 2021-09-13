AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/publicis-sapient.jpg",
    place: "Publicis Sapient",
    time: "(May, 2021 - July 2021)",
    desp: "Developed a Inventory Forecasting Full-Stack Webpage application using GraphQL, Node.js for backend, React, Redux for frontend, by fetching data from Commercetools platform and displaying Stock Expectancy days of products for each supply channel with advanced features.",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);




// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Amazon ML Challenge HackerEarth",
    subtitle: "Machine Learning",
    image: "assets/images/experience-page/amazon-ml.jpg",
    desp: "Text sequence Based Multi-class classification on a huge dataset. I solved by ensembling of different state-of-the-art Deep Learning algorithms. ",
  },
  {
    title: "Dphi Deep Learning Bootcamp",
    subtitle: "Gender Determination by Morphometry of Eyes",
    image: "assets/images/experience-page/dphi-dl.png",
    desp: "Participated in this competetion as part of Deep Learning Bootcamp.The challenge is to solve Binary prediction of image: male eye or female eye based on the image of eye.I solved by using different models like DenseNet201 with weights preloaded from Imagenet. I was ranked 14/116 in the competetion. ",
  },
  {
    title: "Geoffrey Hinton Fellowship(GHF)",
    subtitle: "Univ.ai Hackathons",
    image: "assets/images/experience-page/univ_ai.jpg",
    desp: "Partcipated in two hackathon rounds as part oF GHF conducted by Univ.ai and stood 1st in my college.",
  },
  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="https://github.com/krishnakaushik25/ML-Hackathons" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

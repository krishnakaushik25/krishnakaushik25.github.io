AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  
  {
    title: "Machine Learning Projects Using Streamlit,FastAPI with Deployment",
    cardImage: "assets/images/project-page/streamlit.jpg",
    description: "Used Streamlit platform for showcasing projects",
    Previewlink: "https://github.com/krishnakaushik25/Streamlit-Projects",
    Githublink: "https://github.com/krishnakaushik25/Streamlit-Projects",
  },
  {
    title: "Blockchain-powered cryptocurrency Full-Stack Application",
    cardImage: "assets/images/project-page/blockchain-logo.jpg",
    description: "blockchain-powered cryptocurrency Full-Stack Application",
    Previewlink: "https://protected-sierra-05982.herokuapp.com",
    Githublink: "https://github.com/krishnakaushik25/Full-Stack-Blockchain",
  },
 
  {
    title: "Diabetes Prediction Application using ML",
    cardImage: "assets/images/project-page/Mlapp.png",
    description: "A Machine Learning Web App created with Flask on the Heroku platform",
    Previewlink: "https://ml-diabetes-predictionapi.herokuapp.com/",
    Githublink: "https://github.com/krishnakaushik25/Diabetes-Prediction-ML-model-Deployment",
  },
  {
    title: "Django eCommerce Website",
    cardImage: "assets/images/project-page/ecommerce.jpg",
    description: "Built with a lot of advanced custom functionalities, RDS Postgres and deployed it on Amazon AWS",
    Previewlink: "http://simplekart-env.eba-eweha2je.eu-west-2.elasticbeanstalk.com/",
    Githublink: "https://github.com/krishnakaushik25/Django-eCommerce-website",
  },
  {
    title: "11 Detailed Exploratory Data Analysis Projects",
    cardImage: "assets/images/project-page/eda.jpg",
    description: "Inspired from Datauest Community and one personal Whatsapp chat analysis project",
    Previewlink: "https://github.com/krishnakaushik25/DataQuest-Guided-Projects",
    Githublink: "https://github.com/krishnakaushik25/DataQuest-Guided-Projects",
  },
  {
    title: "Two Web Scraping Projects",
    cardImage: "assets/images/project-page/web.jpg",
    description: "Web-Scraping-with-Python-using-Scrapy-Splash",
    Previewlink: "https://github.com/krishnakaushik25/Web-Scraping-with-Python-using-Scrapy-Splash",
    Githublink: "https://github.com/krishnakaushik25/Web-Scraping-with-Python-using-Scrapy-Splash",
  },
  {
    title: "3 Different projects using Javascript-HTML-CSS",
    cardImage: "assets/images/project-page/html-css-js.jpg",
    description: "A chess engine for a popular game dev engine",
    Previewlink: "https://github.com/krishnakaushik25/List-projects-using-JS-HTML-CSS",
    Githublink: "https://github.com/krishnakaushik25/List-projects-using-JS-HTML-CSS",
  },
  {
    title: "React Firebase Slack Web App",
    cardImage: "assets/images/project-page/slack_firebase_app.jpg",
    description: "Built a complete Slack chat application with React, Redux, and Firebase from scratch.",
    Previewlink: "https://slack-react-cl.web.app",
    Githublink: "https://github.com/krishnakaushik25/react-firebase-slack-web-app",
  },
  {
    title: "Image Similarity Application using ElasticSearch API",
    cardImage: "assets/images/project-page/image-search.png",
    description: "Built using Python, Keras, and Tensorflow.",
    Previewlink: "https://github.com/krishnakaushik25/Similar-Images-Finder",
    Githublink: "https://github.com/krishnakaushik25/Similar-Images-Finder",
  },
  {
    title: "Movie Recommendations using Spark in Azure",
    cardImage: "assets/images/project-page/movie.jpg",
    description: "Used Databricks Spark on Azure with Spark Sql to build this data pipeline.",
    Previewlink: "https://github.com/krishnakaushik25/Movielens_spark_azure",
    Githublink: "https://github.com/krishnakaushik25/Movielens_spark_azure",
  },
  {
    title: "Locality-Sensitive Hashing for Audience Extension",
    cardImage: "assets/images/project-page/lsh.jpg",
    description: "Locality-sensitive hashing to find customers most likely to click on an ad.",
    Previewlink: "https://github.com/krishnakaushik25/Locality-Sensitive-Hashing",
    Githublink: "https://github.com/krishnakaushik25/Locality-Sensitive-Hashing",
  },
  {
    title: "Chatbot with React-Node.js using Dialogflow",
    cardImage: "assets/images/project-page/chatbot.jpg",
    description:"Built a chatbot for a Webpage. Used Node.js and React for programming and GIT for deploying and version control. The bot is hosted on Heroku. Used DialogFlow to process natural language",
    Previewlink: "https://limitless-caverns-27572.herokuapp.com/",
    Githublink: "https://github.com/krishnakaushik25/Chatbot-with-React-Node.js-using-Dialogflow",
  },
  {
    title: "Market Basket Analysis using Association rule learning",
    cardImage: "assets/images/project-page/market.jpg",
    description:"application of Apriori and FP growth algorithms",
    Previewlink: "https://github.com/krishnakaushik25/association-rule-learning",
    Githublink: "https://github.com/krishnakaushik25/association-rule-learning",
  },
  {
    title: "Medical imaging application based on DL models.",
    cardImage: "assets/images/project-page/Medical.jpg",
    description:"This application can detect and categorize 6 diseases ",
    Previewlink: "https://github.com/krishnakaushik25/DL-models-medical",
    Githublink: "https://github.com/krishnakaushik25/DL-models-medical",
  }
  
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, Previewlink, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
import gradu from "./assets/graduation.jpg";
import gradu1 from "./assets/graduation1.png";
import gradu2 from "./assets/graduation2.jpg";
import gradu3 from "./assets/graduation4.jpg";
import gradu4 from "./assets/graduation5.jpg";
import gradu5 from "./assets/primaryschool1.jpg";
import cb from "./assets/cb0.png";
import store from "./assets/storeapp.png";
import booking from "./assets/booking.JPG";
import blog from "./assets/blogg.png";
import hh2 from "./assets/hh2.png";
import pf0 from "./assets/pf0.png";
import mby from "./assets/mby.PNG";

export const gradu_images = [gradu3, gradu5, gradu4, gradu, gradu1, gradu2];
export const projects = [

  {
    id: 6,
    title: "online ticket booking",
    description:
      "This is an application for helping bus passengers to be able to book for tickets online, hence freeing them from the burdern of making unneccessary trips to the offices of bus companies just for ticket booking.",
    tools: "nodejs,mongodb,reactjs,material ui",
    images: [booking],
    link: "https://simtenguticketbooking.netlify.app/",
    repo_link: "https://github.com/simtengu/ticketbooking_backend"
  },
  {
    id: 7,
    title: "Online shopping",
    description:
      "This is an eCommerce like application with features like cart,products searching,full product management(crud) and user account management",
    tools: "nodejs,mongodb,reactjs,material ui",
    images: [store],
    link: "https://simtengustoreapp.netlify.app/",
    repo_link: "https://github.com/simtengu/store_app"
  },
  {
    id: 5,
    title: "Blog app",
    description:
      "This is a simple blog application which allows  a person to create an account and start publishing various articles ,view and react (like/comment) to other users' posts. Also a person has full control (can perform crud operations) of his posts  ",
    tools: "nodejs,mongodb,reactjs,material ui",
    images: [blog],
    link: "https://simtengublogapp.netlify.app/",
    repo_link: "https://github.com/simtengu/blog_app"


  },
  {
    id: 4,
    title: "Mbeyamilk.com",
    description:
      "This application is a web application for managing activities of mbeya milk company like management of milk stock, sales, expenses of the company and cost analysis.",
    purpose:
      "Development of an application for Mbeya milk company as required.",
    tools: "laravel,jquery,ajax,bootstrap 4",
    images: [mby],
    link: "https://milkapp.prasedo.org/",
    repo_link: "https://github.com/simtengu/milkapp"
  },
  {
    id: 1,
    title: "Chuobusiness",
    description:
      "This is a project in progress which when completed will be used by university students as an online business center.",
    tools: "laravel,jquery,ajax,bootstrap 4",
    images: [cb],
    link: "chuobusiness.prasedo.org/",
    repo_link: "https://github.com/simtengu/chuobusiness"
  },
  {
    id: 2,
    title: "House Renting",
    description:
      "House renting management system is designed to help landloards especially those with many tenants on managing them easily.",
    tools: "laravel,jquery,ajax,bootstrap 4",
    
    images: [hh2],
    link: "houserenting.prasedo.org/",
    repo_link: "https://github.com/simtengu/chuobusiness"
  },
  {
    id: 3,
    title: "Albert Oscar portfolio",
    description:
      "This is a project for my personal portfolio which describes all neccessary information about me careerwise most specifically.",
    purpose:
      "Self learning and gaining some experience specifically in reactjs framework and eventually to deploy the application form marketing myself",
    tools: "reactjs,sass,bootstrap 4",
   
    images: [pf0],
    link: "https://simtenguportfolio.netlify.app/",
    repo_link: "https://github.com/simtengu/portfolio"
  },
];
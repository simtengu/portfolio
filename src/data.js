import gradu from "./assets/graduation.jpg";
import gradu1 from "./assets/graduation1.png";
import gradu2 from "./assets/graduation2.jpg";
import gradu3 from "./assets/graduation4.jpg";
import gradu4 from "./assets/graduation5.jpg";
import gradu5 from "./assets/primaryschool1.jpg";
import cb from "./assets/cb0.png";
import store from "./assets/storeapp.png";
import blog from "./assets/blogg.png";
import hh5 from "./assets/hh5.png";
import hh4 from "./assets/hh4.png";
import hh0 from "./assets/hh0.png";
import hh1 from "./assets/hh1.png";
import hh2 from "./assets/hh2.png";
import hh3 from "./assets/hh3.png";
import pf0 from "./assets/pf0.png";
import pf3 from "./assets/pf3.png";
import pf2 from "./assets/pf2.png";
import pf4 from "./assets/pf4.png";

import mby1 from "./assets/mby1.PNG";
import mby2 from "./assets/mby2.PNG";
import mby3 from "./assets/mby3.PNG";
import mby4 from "./assets/mby4.PNG";
import mby5 from "./assets/mby5.PNG";
import mby from "./assets/mby.PNG";

export const gradu_images = [gradu3, gradu5, gradu4, gradu, gradu1, gradu2];
export const projects = [
  {
    id: 4,
    title: "Mbeyamilk.com",
    description:
      "This application is a web application for managing activities of mbeya milk company especially Cost analysis.",
    features: [
      "Recieving data about company sells",
      "Receiving data about company consumptions",
      "Managing company products' stock",
      "Managing company products production",
    ],
    purpose:
      "Development of an application for Mbeya milk company as required.",
    tools: "laravel, jquery&ajax, bootstrap 4",
    status: 100,
    images: [mby, mby1, mby2, mby3, mby4, mby5],
    link: "http://milkapp.mbeyamilk.com/",
  },

  {
    id: 5,
    title: "Online shopping",
    description:
      "This is an eCommerce like application with features like cart,search engine,full product management(crud)",
    tools: "nodejs, mongodb, reactjs, material ui",
    images: [store],
    link: "https://simtengustoreapp.netlify.app/",
  },
  {
    id: 5,
    title: "Blog app",
    description:
      "With this project  a person can register and start publishing various articles ,view and react (like/comment) to other users' posts ",
    tools: "nodejs ,mongodb, reactjs, material ui",
    images: [blog],
    link: "https://simtengublogapp.netlify.app/",
  },
  {
    id: 1,
    title: "Chuobusiness",
    description:
      "This is a project in progress which when completely done will be used by Tanzania university students as an online business center.",
    tools: "laravel, jquery&ajax, bootstrap 4",
    images: [cb],
    link: "http://chuobusiness.mbeyamilk.com/",
  },
  {
    id: 2,
    title: "House Renting",
    description:
      "House renting management system is designed to help landloards especially those with many tenants on managing them easily.",
    features: [
      "i) Adding house details like number of rooms,house pictures,street where the house is found",
      "ii) Adding a tenant to a specific room or house",
      "iii) Checking payment status for a specific house or room",
      "iv) Searching for a specific tenant and view his or her details for instance his payment status",
      "v) Categorizing tenants in terms of depted and undepted ones",
      "vi) Displaying number of days left before a specific tenant has to pay his rent again",
    ],
    purpose:
      "Self learning and application of my laravel skills for the very fist time in a real world application and gaining some experience.",
    tools: "laravel, jquery&ajax, bootstrap 4",
    status: 100,
    images: [hh2, hh0, hh1, hh3, hh4, hh5],
    link: "http://houserenting.mbeyamilk.com",
  },
  {
    id: 3,
    title: "AOSimtengu portfolio",
    description:
      "This is project for my personal portfolio which provides almost all neccessary information about me.",
    purpose:
      "Self learning and gaining some experience specifically in reactjs framework and eventually to deploy the application form marketing myself",
    tools: "reactjs, sass, bootstrap 4",
    status: 100,
    images: [pf0, pf3, pf2, pf4],
    link: "https://simtengu.github.io/portfolio/",
  },
];
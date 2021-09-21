import gradu from "./assets/graduation.jpg";
import gradu1 from "./assets/graduation1.png";
import gradu2 from "./assets/graduation2.jpg";
import gradu3 from "./assets/graduation4.jpg";
import gradu4 from "./assets/graduation5.jpg";
import gradu5 from "./assets/primaryschool1.jpg";
import cb from "./assets/cb0.png";
import hh5 from "./assets/hh5.png";
import hh4 from "./assets/hh4.png";
import hh0 from "./assets/hh0.png";
import hh1 from "./assets/hh1.png";
import hh2 from "./assets/hh2.png";
import hh3 from "./assets/hh3.png";
import cb1 from "./assets/cb1.png";
import cb2 from "./assets/cb2.png";
import cb3 from "./assets/cb3.png";
import cb4 from "./assets/cb4.png";
import cb5 from "./assets/cb5.png";
import pf0 from "./assets/pf0.png";
import pf3 from "./assets/pf3.png";
import pf2 from "./assets/pf2.png";
import pf4 from "./assets/pf4.png";
import onp1 from "./assets/onp1.jpg";
import onp2 from "./assets/onp2.jpg";
import onp3 from "./assets/onp3.jpg";
import onp4 from "./assets/onp4.jpg";

export const gradu_images = [gradu3, gradu5, gradu4, gradu, gradu1, gradu2];
export const projects = [
  {
    id: 1,
    title: "Chuobusiness",
    description:
      "This is a project in progress which when completely done will be used by Tanzania universities students as an online business center for them to post their products and be connected to other customer students from their specific universities or from any other universites  who will be interested with their products",
    features: [
      "registration and authentication of students(users)",
      "products search engine",
      "universities search engine",
      "products registration by students",
      "admin panel for actions like adding universites,responding to users messages and adding products categories",
    ],
    purpose:
      "Self learning and gaining some experience and eventually to deploy the application if possible",
    tools: "laravel,jquery&ajax,bootstrap 4,html and css",
    status: 100,
    images: [cb, cb1, cb2, cb3, cb4, cb5],
    project_link: "https://chuobusiness.com/",
  },
  {
    id: 2,
    title: "House Renting",
    description:
      "House renting management system is designed to help landloards especially those with many tenants on managing the whole process of renting their houses to their tenants ",
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
    tools: "laravel,jquery&ajax,bootstrap 4,html and css",
    status: 100,
    images: [hh2, hh0, hh1, hh3, hh4, hh5],
    project_link: "https://houserenting.chuobusiness.com",
  },
  {
    id: 3,
    title: "AOSimtengu portfolio",
    description:
      "This is project for my personal portfolio which provides almost all neccessary information about me.",
    purpose:
      "Self learning and gaining some experience specifically in reactjs framework and eventually to deploy the application form marketing myself",
    tools: "reactjs,sass,bootstrap 4,html and css",
    status: 100,
    images: [pf0, pf3, pf2, pf4],
    project_link: "https://simtengu.github.io/",
  },
  {
    id: 4,
    title: "Restaurant system",
    description:
      "This application will be used for online meal ordering from a specific restaurant.",
    features: [
      "Addition of new meal",
      "Meal search engine",
      "Customer registration",
      "Meal order placement",
    ],
    purpose:
      "Self learning and gaining some experience specifically in Vuejs framework",
    tools: "laravel,jquery&ajax,bootstrap 4,html and css",
    status: 60,
    images: [onp3, onp2, onp1, onp4],
    project_link: "#",
  },
  {
    id: 5,
    title: "Blog",
    description:
      "House renting management system is designed to help landloards especially those with many tenants on managing the whole process of renting their houses to their tenants ",
    features: [
      "User registration",
      "Post creation",
      "Updating a post",
      "Deleting a post",
      "Displaying available posts",
      "Searching posts of a particular topic",
    ],
    purpose:
      "Self learning and gaining some experience specifically in reactjs framework",
    tools: "laravel,reactjs,axios,bootstrap 4,html and css",
    status: 10,
    images: [onp1, onp2, onp3, onp4],
    project_link: "#",
  },
  {
    id: 6,
    title: "Tourism site",
    description:
      "This will be a website for presenting the beauty of Tanzania Country through displaying basic information about some of main tourist attractions like mountains,national parks and historical sites found in the country.",
    purpose:
      "Self learning and gaining some experience specifically in Vuejs framework",
    tools: "Vuejs,sass,bootstrap 4,html and css",
    status: 0,
    images: [onp2, onp3, onp1, onp4],
    project_link: "#",
  },
];

const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("project wired!");

// nav bar
const mainHead = document.querySelectorAll("header nav a");

mainHead[0].textContent = siteContent.nav["nav-item-1"];
mainHead[1].textContent = siteContent.nav["nav-item-2"];
mainHead[2].textContent = siteContent.nav["nav-item-3"];
mainHead[3].textContent = siteContent.nav["nav-item-4"];
mainHead[4].textContent = siteContent.nav["nav-item-5"];
mainHead[5].textContent = siteContent.nav["nav-item-6"];

// italic
mainHead.forEach((item) => (item.style.fontStyle = "italic"));

// logo img
const logoHead = document.getElementById("logo-img");
logoHead.src = "http://localhost:9000/img/logo.png";

const resource = document.createElement("a");
resource.textContent = "Resource";
resource.href = "#";
resource.classList.add("nav-item-7");
document.querySelector("nav").appendChild(resource);

const sponsors = document.createElement("a");
sponsors.textContent = "Sponsors";
sponsors.href = "#";
sponsors.classList.add("nav-item-8");
document.querySelector("nav").prepend(sponsors);

//CTA
let roundImg = document.getElementById("cta-img");
roundImg.setAttribute("src", siteContent["cta"]["img-src"]);

const ctaTxt = document.querySelector("h1");
ctaTxt.textContent = siteContent.cta["h1"];

const ctaBtn = document.querySelector("button");
ctaBtn.textContent = siteContent.cta["button"];

//Top Section
const topSection = document.querySelector(".top-content");
const topHeading = topSection.querySelectorAll("h4");
const topP = topSection.querySelectorAll("p");

topHeading[0].textContent = siteContent["main-content"]["features-h4"];
topHeading[1].textContent = siteContent["main-content"]["about-h4"];

topP[0].textContent = siteContent["main-content"]["features-content"];
topP[1].textContent = siteContent["main-content"]["about-content"];

//Middle Img
document.querySelector("#middle-img").src =
  siteContent["main-content"]["middle-img-src"];

//Bottom Section
const bottomSection = document.querySelector(".bottom-content");
const bottomHeading = bottomSection.querySelectorAll("h4");
const bottomP = bottomSection.querySelectorAll("p");

bottomHeading[0].textContent = siteContent["main-content"]["services-h4"];
bottomHeading[1].textContent = siteContent["main-content"]["product-h4"];
bottomHeading[2].textContent = siteContent["main-content"]["vision-h4"];

bottomP[0].textContent = siteContent["main-content"]["services-content"];
bottomP[1].textContent = siteContent["main-content"]["product-content"];
bottomP[2].textContent = siteContent["main-content"]["vision-content"];

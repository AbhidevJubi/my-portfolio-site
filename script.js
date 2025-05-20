// // Circle info
// const circles = document.querySelectorAll(".circle");
// const hoverInfo = document.getElementById("hover-info");

// const infoMap = {
//   "video-editor": {
//     heading: "Video Editor",
//     description:
//       "Hello I am a video editor who loves to create motion-style video edits and FX.",
//   },
//   "graphic-designer": {
//     heading: "Graphic Designer",
//     description:
//       "I enjoy creating stunning visuals, posters, and brand identities.",
//   },
//   "ui-ux": {
//     heading: "UI/UX Designer",
//     description:
//       "I design modern user interfaces with a focus on usability and aesthetics.",
//   },
//   fullstack: {
//     heading: "Full Stack Developer",
//     description:
//       "I build responsive, functional websites and apps using modern technologies.",
//   },
// };

// // Circle hover effects
// circles.forEach((circle) => {
//   circle.addEventListener("mouseenter", () => {
//     // Make square
//     circle.style.borderRadius = "15px";
//     circle.style.zIndex = "10";
//     const className = Array.from(circle.classList).find((cls) => infoMap[cls]);
//     const { heading, description } = infoMap[className];

//     // Show description
//     hoverInfo.innerHTML = `<h3>${heading}</h3><p>${description}</p>`;
//     hoverInfo.style.display = "block";
//   });

//   circle.addEventListener("mouseleave", () => {
//     // Back to circle
//     circle.style.borderRadius = "50%";
//     circle.style.zIndex = "1";
//     hoverInfo.style.display = "none";
//   });
// });

// AJ hover expand
const logo = document.getElementById("logo");
logo.addEventListener("mouseenter", () => {
  logo.innerText = "ABHIDEV JUBI";
});
logo.addEventListener("mouseleave", () => {
  logo.innerText = "AJ";
});

const logo2 = document.getElementById("logo2");
logo2.addEventListener("mouseenter", () => {
  logo2.innerText = "ABHIDEV JUBI";
});
logo2.addEventListener("mouseleave", () => {
  logo2.innerText = "AJ";
});

const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }

  lastScroll = currentScroll;
});

// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

// toggle open/close on hamburger click
menuIcon.addEventListener("click", (e) => {
  navLinks.classList.toggle("show");
  e.stopPropagation(); // don’t let this click bubble to document
});

// close when clicking any nav link
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("show");
  })
);

// close when clicking outside the menu
document.addEventListener("click", (e) => {
  // if menu is open AND click target is not inside navLinks or the menuIcon
  if (
    navLinks.classList.contains("show") &&
    !navLinks.contains(e.target) &&
    !menuIcon.contains(e.target)
  ) {
    navLinks.classList.remove("show");
  }
});

const menuIcon2 = document.getElementById("menu-icon2");
const navLinks2 = document.getElementById("nav-links");

// toggle open/close on hamburger click
menuIcon2.addEventListener("click", (e) => {
  navLinks2.classList.toggle("show");
  e.stopPropagation(); // don’t let this click bubble to document
});

// close when clicking any nav link
navLinks2.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks2.classList.remove("show");
  })
);

// close when clicking outside the menu
document.addEventListener("click", (e) => {
  // if menu is open AND click target is not inside navLinks or the menuIcon
  if (
    navLinks2.classList.contains("show") &&
    !navLinks2.contains(e.target) &&
    !menuIcon2.contains(e.target)
  ) {
    navLinks2.classList.remove("show");
  }
});

document
  .querySelector(".hero-section")
  .addEventListener("mousemove", function (dets) {
    gsap.to(".cu", {
      x: gsap.utils.mapRange(0, window.innerWidth, -20, 20, dets.clientX),
      y: gsap.utils.mapRange(0, window.innerHeight, -20, 20, dets.clientY),
      duration: 0.5,
      zIndex: 10, // <-- add this line
    });
  });

document
  .querySelector(".hero-section")
  .addEventListener("mouseleave", function () {
    gsap.to(".cu", {
      x: 0,
      y: 0,
      duration: 0.5,
      zIndex: 10, // <-- again, reinforce the stacking
    });
  });

// Show skill descriptions on scroll
function revealSkills() {
  const skills = document.querySelectorAll(".reveal");
  skills.forEach((skill) => {
    const top = skill.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      skill.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSkills);

window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector(".skills-section");
  const sideNav = document.querySelector(".side-nav");
  const sectionTop = skillsSection.getBoundingClientRect().top;

  if (sectionTop <= window.innerHeight / 2) {
    sideNav.classList.add("active-skill");
  } else {
    sideNav.classList.remove("active-skill");
  }
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".side-nav li");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.dataset.section === currentSectionId) {
      item.classList.add("active");
    }
  });
});

function revealAboutme() {
  const skills = document.querySelectorAll(".aboutme");
  skills.forEach((skill) => {
    const top = skill.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      skill.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealAboutme);

window.addEventListener("scroll", () => {
  const aboutmeSection = document.querySelector(".about-section");
  const sideNav = document.querySelector(".side-nav");
  const sectionTop = aboutmeSection.getBoundingClientRect().top;

  if (sectionTop <= window.innerHeight / 2) {
    sideNav.classList.add("active-about");
  } else {
    sideNav.classList.remove("active-about");
  }
});

// Function to reveal portfolio items with 'visible' class
function revealPortfolio() {
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      item.classList.add("visible");
    }
  });
}

// Trigger the revealPortfolio function on scroll
window.addEventListener("scroll", revealPortfolio);

// Change side-nav background when portfolio section is in view
window.addEventListener("scroll", () => {
  const portfolioSection = document.querySelector("#portfolio");
  const sideNav = document.querySelector(".side-nav");

  if (!portfolioSection || !sideNav) return;

  const sectionTop = portfolioSection.getBoundingClientRect().top;
  const sectionBottom = portfolioSection.getBoundingClientRect().bottom;

  // Check if portfolio section is in view
  if (sectionTop <= window.innerHeight / 2 && sectionBottom > 0) {
    sideNav.classList.add("nav-highlight");
  } else {
    sideNav.classList.remove("nav-highlight");
  }
});

const projectDetails = {
  project1: {
    title: "Project One",
    image: "images/project1.jpg",
    description:
      "This is a detailed description of project one. You can include tools used, goals, and outcome.",
  },
  project2: {
    title: "Project Two",
    image: "images/project2.jpg",
    description:
      "This is a detailed description of project two. Talk about your contribution and tech stack.",
  },
};

function openModal(projectKey) {
  const modal = document.getElementById("portfolioModal");
  const details = projectDetails[projectKey];
  document.getElementById("modalTitle").innerText = details.title;
  document.getElementById("modalImage").src = details.image;
  document.getElementById("modalDescription").innerText = details.description;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("portfolioModal").style.display = "none";
}

function filterProjects(category) {
  const allItems = document.querySelectorAll(".portfolio-item");
  const buttons = document.querySelectorAll(".filter-btn");

  // Toggle button active style
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Filter logic
  allItems.forEach((item) => {
    if (category === "all") {
      item.style.display = "block";
    } else if (item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

window.addEventListener("scroll", () => {
  const servicesSection = document.querySelector("#services");
  const sideNav = document.querySelector(".side-nav");

  const sectionTop = servicesSection.getBoundingClientRect().top;
  const sectionHeight = servicesSection.offsetHeight;

  if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > 0) {
    sideNav.classList.add("white-background");
  } else {
    sideNav.classList.remove("white-background");
  }
});

window.addEventListener("scroll", () => {
  const sideNav = document.querySelector(".side-nav");
  const servicesSection = document.querySelector("#services");
  const contactSection = document.querySelector("#contact");

  const checkInView = (section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;
    return (
      sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > 0
    );
  };

  if (checkInView(servicesSection) || checkInView(contactSection)) {
    sideNav.classList.add("white-background");
  } else {
    sideNav.classList.remove("white-background");
  }
});

let current = 1;
setInterval(() => {
  document.getElementById(`slide-${current}`).checked = false;
  current = (current % 4) + 1;
  document.getElementById(`slide-${current}`).checked = true;
}, 5000); // 5 seconds

document.querySelector(".hire-me").addEventListener("click", function () {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".works").addEventListener("click", function () {
  document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" });
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.opacity = "1";
    backToTop.style.pointerEvents = "auto";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.pointerEvents = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});






window.addEventListener('DOMContentLoaded', () => {
  emailjs.init("ZELsn1nASVKwOU-cx");

  const form = document.getElementById("contact-form");
  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.time.value = new Date().toLocaleString();

    emailjs.sendForm("service_mabgzeu", "template_bl3z7zo", form)
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  });
});

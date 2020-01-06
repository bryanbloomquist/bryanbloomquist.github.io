$(document).ready(function () {

  $("#navbarCollapse").on("click", toggel);

  welcomePage();

  portfolioPage();

  techSkillsPage();

});

// Typed.js by Matt Boldt https://github.com/mattboldt/typed.js/
const typed = (divID, string, delay) => {
  let typed = new Typed(
    divID, {
    strings: [string],
    typeSpeed: 20,
    startDelay: delay,
    loop: false
  }
  )
}

const toggel = () => $("#navbar, .navbutton, .content").toggleClass("active");

/// WELCOMEPAGE ////////////
const welcomePage = () => {
  $(".greetings").empty();
  typed(".greetings", "Hi, I'm Bryan.  I design and code awesome websites and web applications.", 0);
}

/// PORTFOLIO //////////////////////////////////////////////////
const portfolioPage = () => {
  for (let i = 0; i < portfolio.length; i++) {
    $("#portfolio-projects").append(`
      <div class="project col-12 col-md-6 col-xl-4 mb-3">
        <div class="project-body text-center">
          <h5 class="project-title">${portfolio[i].name}</h5>
          <img class="project-image" src="${portfolio[i].src}" alt="${portfolio[i].alt}" />
          <p class="project-skills">${portfolio[i].skills}</p>
          <a class="pagelink btn p-1" href="${portfolio[i].deployed}" target="_blank">Deployed Site</a>
          <a class="pagelink btn p-1" href="${portfolio[i].github}" target="_blank">Github Repo</a>
        </div>
      </div>
    `);
  }
}

/// TECH SKILLS //////////////////////////////////////////////////
let techSkillsPage = () => {
  for (let i = 0; i < toolbox.length; i++) {
    $("#toolbox").append(`
      <div class="toolbox-item header col-6 col-md-4 col-xl-3 p-3">
        <h4 class="engraved">${toolbox[i].name}</h4>
        <img class="skillimage" src="${toolbox[i].src}" alt="${toolbox[i].alt}" />
      </div>
    `)
  }
}
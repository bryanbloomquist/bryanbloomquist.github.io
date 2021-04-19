$(document).ready(function () {
  $("#navbarCollapse").on("click", toggel);

  getYear();

  portfolioPage();

  techSkillsPage();

  testimonialsPage();
});

const toggel = () => $("#navbar, .navButton, .content").toggleClass("active");

const getYear = () => $("#current-year").html(new Date().getFullYear());

//// PORTFOLIO //////////////////////////////////////////////////

const portfolioPage = () => {
  const random = Math.floor(Math.random() * portfolio.length);
  portfolio.map((project, i) => {
    $("#project-buttons").append(`
			<button 
				class='${
          i === random
            ? "portfolio__link wow tada delay-500ms"
            : "portfolio__link"
        }' 
				type='button' 
				data-toggle='collapse' 
				data-target='#project-${i}' 
				aria-controls='project-${i}' 
				aria-expanded=${i === random ? true : false}
			>${project.name}</button>
		`);
    $("#project-accordion").append(`
			<div class='project collapse' id='project-${i}' data-parent='#project-accordion'>
				<h3 class='project__header'>${project.name}</h3>
				<img class='project__image' src='${project.src}' alt='${project.alt}' />
				<p class='project__skills'>${project.skills}</p>
				<div class="project__link-container">
					<a class='project__link' href='${
            project.deployed
          }' target='_blank' rel='noopener noreferrer'>Deployed Site</a>
					${
            project.github !== undefined
              ? `<a class='project__link' href='${project.github}' target='_blank' rel='noopener noreferrer'>Github Repo</a>`
              : null
          }
				</div>
			</div>
		`);
  });
  const randomProject = "#project-" + random;
  $(randomProject).addClass("show wow fadeInRightBig delay-1000ms");
};

/// TECH SKILLS //////////////////////////////////////////////////

const techSkillsPage = () => {
  toolbox.map((tool, i) => {
    $(".toolbox__container").append(
      '<div class="card">' +
        '<div class="card__side card__side--front">' +
        '<img src="' +
        tool.src +
        '" alt="' +
        tool.name +
        ' logo">' +
        "</div>" +
        '<div class="card__side card__side--back">' +
        "<h2>" +
        tool.name +
        "</h2>" +
        "<p>" +
        tool.description +
        "</p>" +
        "<h4>Skill Level: " +
        tool.level +
        " / 5</h4>" +
        "</div>" +
        "</div>"
    );
  });
};

/// TESTIMONIALS //////////////////////////////////////////////////

const testimonialsPage = () => {
  testimonials.map((data) => {
    $("#testimonials-slider").append(
      "<div class = 'slide'>" +
        "<p>" +
        data.testimonial +
        "</p>" +
        "<h5>" +
        data.name +
        "</h5>" +
        "<h6>" +
        data.role +
        "</h6>" +
        "<h6>" +
        data.company +
        "</h6>" +
        "</div>"
    );
  });
};

$(document).ready(function () {
  $("#testimonials-slider").slick({
    autoplay: true,
    autoplaySpeed: 15000,
    cssEase: "linear",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  });
});

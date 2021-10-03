$(document).ready(function () {

    $("#navbarCollapse").on("click", toggel);

    getYear();

    projectsPage();

    techSkillsPage();

    testimonialsPage();

});

const toggel = () => $("#navbar, .navbar-toggle, .main-content").toggleClass("active");

const getYear = () => $("#current-year").html(new Date().getFullYear());

const smallScreen = $(window).width() < 768 ? true : false;

//// PROJECTS //////////////////////////////////////////////////

const projectsPage = () => {

    const random = smallScreen ? null : Math.floor(Math.random() * portfolio.length);

    portfolio.map((project, i) => {
        $("#project-buttons").append(`
            <button 
                class='${i === random ? "btn btn--big btn--gold wow tada delay-500ms" : "btn btn--big btn--gold"}' 
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
                <div class="project__links">
                    <a class='btn btn--gold btn--small' href='${project.deployed}' target='_blank' rel='noopener noreferrer'>Deployed Site</a>
                    ${project.github !== undefined ? `<a class='btn btn--gold btn--small' href='${project.github}' target='_blank' rel='noopener noreferrer'>Github Repo</a>`: null }
                </div>
            </div>
        `);
    });

    const randomProject = "#project-" + random;

    smallScreen ? null : $(randomProject).addClass("show wow fadeInRightBig delay-1000ms");

    $('[data-toggle="collapse"]').on('click',function(e){
        if ( $(this).parents('.accordion').find('.collapse.show') ){
            var idx = $(this).index('[data-toggle="collapse"]');
            if (idx == $('.collapse.show').index('.collapse')) {
                e.stopPropagation();
            }
        }
    });

};

/// TECH SKILLS //////////////////////////////////////////////////

const techSkillsPage = () => {
    toolbox.map((tool, i) => {
        $(".toolbox__container").append(`
            <div class="tool">
                <h2 class="tool__title">${tool.name}</h2>
                <div class="tool__image"><img src="${tool.src}" alt="${tool.name} logo" /></div>
                <p class="tool__text">${tool.description}</p>
                <h4 class="tool__skill">Skill Level: ${tool.level} / 5</h4>
            </div>
        `);
    });
};

/// TESTIMONIALS //////////////////////////////////////////////////

const testimonialsPage = () => {
    testimonials.map((data) => {
        $("#testimonials-slider").append(`
            <div class='slide'>
                <p class="slide__text">${data.testimonial}</p>
                <h5 class="slide__name">${data.name}</h5>
                <h6 class="slide__role">${data.role}</h6>
                <h6 class="slide__role">${data.company}</h6>
            </div>
        `);
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
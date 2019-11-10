const portfolio = [
  {
    name: "My Little Pony Math Rescue",
    src: "assets/images/molly-pony.png",
    alt: "My Little Pony Math Rescue screenshot",
    skills: "React | CSS | Sass | JavaScript | Express.js | Node.js | MongoDB | Bootstrap",
    deployed: "https://molly-pony.herokuapp.com",
    github: "https://github.com/bryanbloomquist/molly-pony"
  },{
    name: "Choose Your Own Adventure",
    src: "assets/images/cyoa.png",
    alt: "Choose Your Own Adventure screenshot",
    skills: "Bootstrap | JavaScript | jQuery | Node.js | Express.js | mySQL | bCrypt | Gauge.js | Express-Validate",
    deployed: "https://cyoa-bc.herokuapp.com",
    github: "https://github.com/bryanbloomquist/group-project-2"
  },{
    name: "Dungeons & Dragons Hangman",
    src: "assets/images/hangman.png",
    alt: "Dungeons & Dragons Hangman screenshot",
    skills: "HTML | CSS | JavaScript | ES6",
    deployed: "https://bryanbloomquist.github.io/word-guess-game",
    github: "https://github.com/bryanbloomquist/word-guess-game"
  },{
    name: "Gimlet Podcast Scraper",
    src: "assets/images/gimlet.PNG",
    alt: "Gimlet Podcast Scraper screenshot",
    skills: "JavaScript | jQuery | Moment.js | Node.js | Handlebars | Express.js | Mongoose | Cheerio | Axios",
    deployed: "https://gimlet.herokuapp.com",
    github: "https://github.com/bryanbloomquist/news-scraper"
  },{
    name: "Google Book Search",
    src: "assets/images/google-book.png",
    alt: "Google Book Search screenshot",
    skills: "MongoDB | Express.js | React | Node.js | Bootstrap | CSS | JavaScript",
    deployed: "https://react-google.herokuapp.com",
    github: "https://github.com/bryanbloomquist/google-book-search"
  },{
    name: "Fallout Trivia",
    src: "assets/images/fallout.png",
    alt: "Fallout Trivia screenshot",
    skills: "HTML | CSS | JavaScript | jQuery",
    deployed: "https://bryanbloomquist.github.io/trivia-game",
    github: "https://github.com/bryanbloomquist/trivia-game"
  }
]

$( document ).ready( function() {

  $( "#navbarCollapse" ).on( "click", toggel );

  welcomePage();

  portfolioPage();

});

// Typed.js by Matt Boldt https://github.com/mattboldt/typed.js/
const typed = ( divID, string, delay ) => {
  let typed = new Typed (
    divID, { 
      strings: [ string ],
      typeSpeed: 30,
      startDelay: delay,
      loop: false
    }
  )
}

const toggel = () => $( "#navbar, .navbutton, .content" ).toggleClass( "active" );

/// WELCOMEPAGE ////////////
const welcomePage = ( ) => {
  $( ".greetings" ).empty( );
  typed( ".greetings", "Hi, I'm Bryan.  I design and code awesome websites and web applications.", 0 );
}


/// PORTFOLIO //////////////////////////////////////////////////
const portfolioPage = ( ) => {
  for( let i = 0; i < portfolio.length; i++ ) {
    let project = $( "<div>" ).attr( "class", "project col-12 col-md-6 col-xl-4 mb-3" );
    let projectBody = $( "<div>" ).attr( "class", "project-body text-center" );
    project.append( projectBody );
    let projectTitle = $( "<h5>" ).attr( "class", "project-title" );
      projectTitle.text( portfolio[ i ].name );
    projectBody.append( projectTitle );
    let projectImage = $( "<img>" );
      projectImage.attr( "class", "project-image" );
      projectImage.attr( "src", portfolio[ i ].src );
      projectImage.attr( "alt", portfolio[ i ].alt );
    projectBody.append( projectImage );
    let projectSkills = $( "<p>" ).attr( "class", "project-skills" );
      projectSkills.text( portfolio[ i ].skills );
    projectBody.append( projectSkills );
    let deployedLink = $( "<a>" );
      deployedLink.attr( "class", "pagelink btn p-1" );
      deployedLink.attr( "href", portfolio[ i ].deployed );
      deployedLink.attr( "target", "_blank" );
      deployedLink.text( "Deployed Site" );
    projectBody.append( deployedLink );
    let ghLink = $( "<a>" );
      ghLink.attr( "class", "pagelink btn ghub p-1" );
      ghLink.attr( "href", portfolio[ i ].github );
      ghLink.attr( "target", "_blank" );
      ghLink.text( "Github Repo" );
    projectBody.append( ghLink );
    $( "#portfolio-projects" ).append( project )
  }
}



/// TECH SKILLS //////////////////////////////////////////////////
let techSkills = () => {

}

/// ABOUTME //////////////////////////////////////////////////
let aboutMe = () => {

}

/// ALL APPS //////////////////////////////////////////////////
let allApps = () => {

}

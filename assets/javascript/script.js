const portfolio = [
  {
    name: "My Little Pony Math Rescue",
    src: "assets/images/molly-pony.png",
    alt: "My Little Pony Math Rescue screenshot",
    desc: "A full MERN stack application, themed around My Little Ponies, to practice math and logical thinking.  Made with love for my daughter.",
    skills: "React | CSS | Sass | JavaScript | Express.js | Node.js | MongoDB | Bootstrap",
    deployed: "https://molly-pony.herokuapp.com",
    github: "https://github.com/bryanbloomquist/molly-pony"
  },{
    name: "Choose Your Own Adventure",
    src: "assets/images/cyoa.png",
    alt: "Choose Your Own Adventure screenshot",
    desc: "",
    skills: "Bootstrap | JavaScript | jQuery | Node.js | Express.js | mySQL | bCrypt | Gauge.js | Express-Validate",
    deployed: "https://cyoa-bc.herokuapp.com",
    github: "https://github.com/bryanbloomquist/group-project-2"
  },{
    name: "Dungeons & Dragons Hangman",
    src: "assets/images/hangman.png",
    alt: "Dungeons & Dragons Hangman screenshot",
    desc: "",
    skills: "HTML | CSS | JavaScript | ES6",
    deployed: "https://bryanbloomquist.github.io/word-guess-game",
    github: "https://github.com/bryanbloomquist/word-guess-game"
  },{
    name: "Gimlet Podcast Scraper",
    src: "assets/images/gimlet.PNG",
    alt: "Gimlet Podcast Scraper screenshot",
    desc: "",
    skills: "JavaScript | jQuery | Moment.js | Node.js | Handlebars | Express.js | Mongoose | Cheerio | Axios",
    deployed: "https://gimlet.herokuapp.com",
    github: "https://github.com/bryanbloomquist/news-scraper"
  },{
    name: "Google Book Search",
    src: "assets/images/google-book.png",
    alt: "Google Book Search screenshot",
    desc: "",
    skills: "MongoDB | Express.js | React | Node.js | Bootstrap | CSS | JavaScript",
    deployed: "https://react-google.herokuapp.com",
    github: "https://github.com/bryanbloomquist/google-book-search"
  },{
    name: "Fallout Trivia",
    src: "assets/images/fallout.png",
    alt: "Fallout Trivia screenshot",
    desc: "",
    skills: "HTML | CSS | JavaScript | jQuery",
    deployed: "https://bryanbloomquist.github.io/trivia-game",
    github: "https://github.com/bryanbloomquist/trivia-game"
  }
]

const toggel = () => $( "#navbar, .navbutton, .content" ).toggleClass( "active" );

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


/// WELCOMEPAGE ////////////
const welcomePage = ( ) => {
  $( ".greetings" ).empty( );
  typed( ".greetings", "Hi, I'm Bryan.  I design and code awesome websites and web applications.", 0 );
}


/// PORTFOLIO //////////////////////////////////////////////////
const portfolioPage = ( ) => {
  for( let i = 0; i < portfolio.length; i++ ) {
    let card = $( "<div>" ).attr( "class", "card" );
    let cardImage = $( "<img>" );
      cardImage.attr( "class", "card-image" );
      cardImage.attr( "src", portfolio[ i ].src );
      cardImage.attr( "alt", portfolio[ i ].alt );
    card.append( cardImage );
    let cardBody = $( "<div>" ).attr( "class", "card-body text-center" );
    card.append( cardBody );
    let cardTitle = $( "<h5>" ).attr( "class", "card-title" );
      cardTitle.text( portfolio[ i ].name );
    cardBody.append( cardTitle );
    let cardSkills = $( "<p>" ).attr( "class", "card-skills" );
      cardSkills.text( portfolio[ i ].skills );
    cardBody.append( cardSkills );
    let ghLink = $( "<a>" );
      ghLink.attr( "class", "pagelink btn ghub p-1" );
      ghLink.attr( "href", portfolio[ i ].github );
      ghLink.attr( "target", "_blank" );
      ghLink.text( "Github Repo" );
    cardBody.append( ghLink );
    let deployedLink = $( "<a>" );
      deployedLink.attr( "class", "pagelink btn p-1" );
      deployedLink.attr( "href", portfolio[ i ].deployed );
      deployedLink.attr( "target", "_blank" );
      deployedLink.text( "Deployed Site" );
    cardBody.append( deployedLink );
    $( "#portfolio-cards" ).append( card )
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

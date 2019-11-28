const portfolio = [
  {
    name: "My Little Pony Math Rescue",
    src: "assets/images/molly-pony.png",
    alt: "My Little Pony Math Rescue screenshot",
    skills: "React | Sass | Express.js | Node.js | MongoDB | Bootstrap",
    deployed: "https://molly-pony.herokuapp.com",
    github: "https://github.com/bryanbloomquist/molly-pony"
  },{
    name: "Choose Your Own Adventure",
    src: "assets/images/cyoa.png",
    alt: "Choose Your Own Adventure screenshot",
    skills: "Bootstrap | JavaScript | jQuery | Node.js | Express.js | mySQL",
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
    name: "Google Book Search",
    src: "assets/images/google-book.png",
    alt: "Google Book Search screenshot",
    skills: "MongoDB | Express.js | React | Node.js | Bootstrap | CSS",
    deployed: "https://react-google.herokuapp.com",
    github: "https://github.com/bryanbloomquist/google-book-search"
  },{
    name: "Gimlet Podcast Scraper",
    src: "assets/images/gimlet.PNG",
    alt: "Gimlet Podcast Scraper screenshot",
    skills: "JavaScript | jQuery | Node.js | Express.js | Cheerio | Axios",
    deployed: "https://gimlet.herokuapp.com",
    github: "https://github.com/bryanbloomquist/news-scraper"
  },{
    name: "Tarot Reader",
    src: "assets/images/tarot-reader.PNG",
    alt: "Tarot Reader screenshot",
    skills: "HTML | CSS | JavaScript | jQuery",
    deployed: "https://bryanbloomquist.github.io/tarot-reader",
    github: "https://github.com/bryanbloomquist/tarot-reader"
  }
]

const toolbox = [
  {
    name: "HTML",
    alt: "HTML logo",
    src: "assets/images/html.png",
  },{
    name: "CSS",
    alt: "CSS logo",
    src: "assets/images/css.png",
  },{
    name: "JavaScript",
    alt: "JavaScript logo",
    src: "assets/images/javascript.png",
  },{
    name: "jQuery",
    alt: "jQuery logo",
    src: "assets/images/jquery.png",
  },{
    name: "React",
    alt: "React logo",
    src: "assets/images/react.png",
  },{
    name: "Bootstrap",
    alt: "Bootstrap logo",
    src: "assets/images/bootstrap.png",
  },{
    name: "Sass",
    alt: "Sass logo",
    src: "assets/images/sass.png",
  },{
    name: "Git",
    alt: "Git logo",
    src: "assets/images/git.png",
  },{
    name: "Github",
    alt: "Github logo",
    src: "assets/images/github.png",
  },{
    name: "Node.js",
    alt: "Node.js logo",
    src: "assets/images/nodejs.png",
  },{
    name: "MongoDB",
    alt: "Mongo DB logo",
    src: "assets/images/mongodb.png",
  },{
    name: "Express.js",
    alt: "Express JS logo",
    src: "assets/images/expressjs.png",
  }
]

$( document ).ready( function() {

  $( "#navbarCollapse" ).on( "click", toggel );

  welcomePage();

  portfolioPage();

  techSkillsPage();

});

// Typed.js by Matt Boldt https://github.com/mattboldt/typed.js/
const typed = ( divID, string, delay ) => {
  let typed = new Typed (
    divID, { 
      strings: [ string ],
      typeSpeed: 20,
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
    // let project = $( "<div>" ).attr( "class", "project col-12 col-md-5 mb-3" );
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
let techSkillsPage = () => {
  for( let i = 0; i < toolbox.length; i++ ) {
    let tool = $( "<div>" ).attr( "class", "toolbox-item col-6 col-md-4 col-xl-3 p-1" );
    let toolHeader = $( "<div>" ).attr( "class", "header my-1 p-3" );
    tool.append( toolHeader );
    let toolName = $( "<h4>" );
      toolName.attr( "class", "engraved" );
      toolName.text( toolbox[ i ].name );
    toolHeader.append( toolName );
    let toolImage = $( "<img>" );
      toolImage.attr( "class", "skillimage" );
      toolImage.attr( "src", toolbox[ i ].src );
      toolImage.attr( "alt", toolbox[ i ].alt );
    toolHeader.append( toolImage );
    $( "#toolbox" ).append( tool );
  }
}
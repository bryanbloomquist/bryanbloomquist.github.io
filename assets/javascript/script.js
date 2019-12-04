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
$( document ).ready( function() {

  $( "#navbarCollapse" ).on( "click", toggel );
  $( "#portfolio" ).on( "click", portfolio );
  $( "#techskills" ).on( "click", techSkills );
  $( "#aboutme" ).on( "click", aboutMe );
  $( document ).on( "click", "#allapps", allApps );

  welcomePage();

});

// Typed.js by Matt Boldt https://github.com/mattboldt/typed.js/
let typed = ( divID, string, delay ) => {
  let typed = new Typed (
    divID, { 
      strings: [ string ],
      typeSpeed: 10,
      startDelay: delay,
      loop: false,
      showCursor: false
    }
  )
}

let toggel = () => $( "#navbar, .navbutton, #content" ).toggleClass( "active" );

/// WELCOMEPAGE //////////////////////////////////////////////////
let welcomePage = ( ) => {
  $( "#content" ).empty( );
  toggel();
  $( "#content" ).html( `
    <div class = "row justify-content-center">
      <div class = "col laptop">
        <div class = "container typed-code text-monospace">
          <span id = "typed1"></span><br>
          <span id = "typed2" class = "oneindent"></span><br>
          <span id = "typed3" class = "oneindent"></span><br>
          <span id = "typed4" class = "oneindent"></span><br>
          <span id = "typed5" class = "twoindent"></span><br>
          <span id = "typed6" class = "oneindent"></span><br>
          <span id = "typed7" class = "oneindent"></span><br>
          <span id = "typed8"></span>
        </div>
      </div>
    </div>
  ` )
  typed( "#typed1", "<span class='darkblue'>function</span> <span class='gold'>rebootCareer</span><span class='yellow'>(</span> <span class='blue'>bryan</span> <span class='yellow'>) {</span>", 1000 );
  typed( "#typed2", "<span class='blue'>event</span><span class ='white'>.</span><span class='gold'>leaveThePostOffice</span> <span class='purple'>( )</span><span class ='white'>;</span>", 2500 );
  typed( "#typed3", "<span class='blue'>bryan</span><span class ='white'>.</span><span class='gold'>addClass</span><span class='purple'>(</span> <span class='orange'>'coding-boot-camp'</span> <span class='purple'>)</span><span class ='white'>;</span>", 4000 );
  typed( "#typed4", "<span class='purple'>if (</span> <span class='blue'>activity</span> <span class='white'>===</span> <span class='orange'>'webDevelopment'</span> <span class='purple'>) {</span>", 5500 );
  typed( "#typed5", "<span class='purple'>return</span> <span class='blue'>happiness</span> <span class ='white'>=</span> <span class='darkblue'>true</span><span class ='white'>;</span>", 7000 );
  typed( "#typed6", "<span class='purple'>}</span>", 8000 );
  typed( "#typed7", "<span class='gold'>$</span><span class='purple'>(</span> <span class='orange'>'#myLife'</span> <span class='purple'>)</span>.<span class='gold'>append</span><span class='purple'>(</span> <span class='orange'>'Hello World!'</span> <span class='purple'>)</span><span class ='white'>;</span>", 8250 );
  typed( "#typed8", "<span class='yellow'>}</span><span class ='white'>;</span>", 9750 );
}

/// PORTFOLIO //////////////////////////////////////////////////
let portfolio = () => {
  $( "#content" ).empty( );
  toggel();
  $( "#content" ).html( `
    <div class = "row justify-content-center">
      <div class = "col-12 col-lg-10 header">
        <h2 class = "engraved pt-2">Portfolio</h2>
      </div>
    </div>
    <div class = "row justify-content-center">
      <div class = "col-12 col-lg-10 portfolio p-3">
        <div class = "row justify-content-center">
          <div class = "col-12 col-md-6 col-xl-4 p-2 float-left">
            <div class = "hovereffect m-1">
              <img src = "assets/images/molly-pony.png" alt = "My Little Pony Math Rescue" class = "img-responsive portfolio-img" />
              <div class = "overlay">
                <h2>My Little Pony Math Rescue</h2>
                <p class = "projectskills mx-auto">React | CSS | Sass | JavaScript | Express.js | Node.js | MongoDB | Bootstrap</p>
                <a class = "info btn" href = "https://molly-pony.herokuapp.com" target = "_blank">View Project</a>
                <a class = "pagelink btn ghub p-1" href = "https://github.com/bryanbloomquist/molly-pony" target = "_blank"><i class = "fab fa-github fa-2x"></i></a>
              </div>
            </div>
          </div>
          <div class = "col-12 col-md-6 col-xl-4 p-2 float-left">
            <div class = "hovereffect m-1">
              <img src = "assets/images/cyoa.png" alt = "Choose Your Own Adventure" class = "img-responsive portfolio-img" />
              <div class = "overlay">
                <h2>Choose Your Own Adventure</h2>
                <p class = "projectskills mx-auto">Bootstrap | JavaScript | jQuery | Node.js | Express.js | mySQL | bCrypt | Gauge.js | Express-Validate</p>
                <a class = "info btn" href = "https://cyao-bc.herokuapp.com" target = "_blank">View Project</a>
                <a class = "pagelink btn ghub p-1" href = "https://github.com/bryanbloomquist/group-project-2" target = "_blank"><i class = "fab fa-github fa-2x"></i></a>
              </div>
            </div>
          </div>
          <div class = "col-12 col-md-6 col-xl-4 p-2 float-left">
            <div class = "hovereffect m-1">
              <img src = "assets/images/hangman.png" alt = "Dungeons & Dragons Hangman" class = "img-responsive portfolio-img" />
              <div class = "overlay">
                <h2>Dungeons & Dragons Hangman</h2>
                <p class = "projectskills mx-auto">HTML | CSS | JavaScript</p>
                <a class = "info btn" href = "https://bryanbloomquist.github.io/word-guess-game" target = "_blank">View Project</a>
                <a class = "pagelink btn ghub p-1" href = "https://github.com/bryanbloomquist/word-guess-game" target = "_blank"><i class = "fab fa-github fa-2x"></i></a>
              </div>
            </div>
          </div>
          <div class = "col-12 col-md-6 col-xl-4 p-2 float-left">
            <div class = "hovereffect m-1">
              <img src = "assets/images/gimlet.PNG" alt = "Gimlet Podcast Scraper" class = "img-responsive portfolio-img" />
              <div class = "overlay">
                <h2>Gimlet Podcast Scraper</h2>
                <p class = "projectskills mx-auto">JavaScript | jQuery | Moment.js | Node.js | Handlebars | Express.js | Mongoose | Cheerio | Axios</p>
                <a class = "info btn" href = "https://gimlet.herokuapp.com" target = "_blank">View Project</a>
                <a class = "pagelink btn ghub p-1" href = "https://github.com/bryanbloomquist/news-scraper" target = "_blank"><i class = "fab fa-github fa-2x"></i></a>
              </div>
            </div>
          </div>
          <div class = "col-12 col-md-6 col-xl-4 p-2 float-left">
            <div class = "hovereffect m-1">
              <img src = "assets/images/google-book.png" alt = "Google Book Search" class = "img-responsive portfolio-img" />
              <div class = "overlay">
                <h2>Google Book Search</h2>
                <p class = "projectskills mx-auto">MongoDB | Express.js | React | Node.js | Bootstrap | CSS | JavaScript</p>
                <a class = "info btn" href = "https://react-google" target = "_blank">View Project</a>
                <a class = "pagelink btn ghub p-1" href = "https://github.com/bryanbloomquist/google-book-search" target = "_blank"><i class = "fab fa-github fa-2x"></i></a>
              </div>
            </div>
          </div>
          <div class = "col-12 col-md-6 col-xl-4 p-2 float-left">
            <div class = "hovereffect m-1">
              <img src = "assets/images/fallout.png" alt = "Fallout Trivia" class = "img-responsive portfolio-img" />
              <div class = "overlay">
                <h2>Fallout Trivia</h2>
                <p class = "projectskills mx-auto">HTML | CSS | JavaScript | jQuery</p>
                <a class = "info btn" href = "https://bryanbloomquist.github.io/trivia-game" target = "_blank">View Project</a>
                <a class = "pagelink btn ghub p-1" href = "https://github.com/bryanbloomquist/trivia-game" target = "_blank"><i class = "fab fa-github fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>
        <button class = "animeTrigger hiddenLink" id = "allapps">[More Apps]</a>
      </div>
    </div>
  ` )
}

/// TECH SKILLS //////////////////////////////////////////////////
let techSkills = () => {
  $( "#content" ).empty( );
  $( "#content" ).html( `
    <div class = "row justify-content-center">
      <div class = "col-12 col-lg-8 header">
        <h2 class = "engraved pt-2">Technical Skills</h2>
      </div>
    </div>
    <div class = "row justify-content-center">
      <div class = "col-12 col-lg-8 techskills">
        <div class = "row justify-content-center">
          <div class = "col-12 col-sm-6 col-md-4 col-xl-3 float-left p-1">
            <div class = "header my-1 p-3">
              <h4 class = "engraved">HTML</h4>
              <img src = "assets/images/HTML.png" alt = "HTML" class = "skillimage" />
            </div>
          </div>
          <div class = "col-12 col-sm-6 col-md-4 col-xl-3 float-left p-1">
            <div class = "header my-1 p-3">
              <h4 class = "engraved">CSS</h4>
              <img src = "assets/images/CSS.png" alt = "CSS" class = "skillimage" />
            </div>
          </div>
          <div class = "col-12 col-sm-6 col-md-4 col-xl-3 float-left p-1">
            <div class = "header my-1 p-3">
              <h4 class = "engraved">JavaScript</h4>
              <img src = "assets/images/JavaScript.png" alt = "JavaScript" class = "skillimage" />
            </div>
          </div>
          <div class = "col-12 col-sm-6 col-md-4 col-xl-3 float-left p-1">
            <div class = "header my-1 p-3">
              <h4 class = "engraved">jQuery</h4>
              <img src = "assets/images/jQuery.png" alt = "jQuery" class = "skillimage" />
            </div>
          </div>
          <div class = "col-12 col-sm-6 col-md-4 col-xl-3 float-left p-1">
            <div class = "header my-1 p-3">
              <h4 class = "engraved">React</h4>
              <img src = "assets/images/React.png" alt = "React" class = "skillimage" />
            </div>
          </div>
          <div class = "col-12 col-sm-6 col-md-4 col-xl-3 float-left p-1">
            <div class = "header my-1 p-3">
              <h4 class = "engraved">Bootstrap</h4>
              <img src = "assets/images/Bootstrap.png" alt = "Bootstrap" class = "skillimage" />
            </div>
          </div>
          <div class = "col-12 col-sm-6 col-md-4 col-xl-3 float-left p-1">
            <div class = "header my-1 p-3">
              <h4 class = "engraved">Sass</h4>
              <img src = "assets/images/Sass.png" alt = "Sass" class = "skillimage" />
            </div>
          </div>
          <div class = "col-12 col-sm-6 col-md-4 col-xl-3 float-left p-1">
            <div class = "header my-1 p-3">
              <h4 class = "engraved">Git</h4>
              <img src = "assets/images/Git.png" alt = "Git" class = "skillimage" />
            </div>
          </div>
          <div class = "col-12 col-sm-6 col-md-4 col-xl-3 float-left p-1">
            <div class = "header my-1 p-3">
              <h4 class = "engraved">Github</h4>
              <img src = "assets/images/Github.png" alt = "Github" class = "skillimage" />
            </div>
          </div>
          <div class = "col-12 col-sm-6 col-md-4 col-xl-3 float-left p-1">
            <div class = "header my-1 p-3">
              <h4 class = "engraved">NodeJS</h4>
              <img src = "assets/images/NodeJS.png" alt = "NodeJS" class = "skillimage" />
            </div>
          </div>
          <div class = "col-12 col-sm-6 col-md-4 col-xl-3 float-left p-1">
            <div class = "header my-1 p-3">
              <h4 class = "engraved">MongoDB</h4>
              <img src = "assets/images/MongoDB.png" alt = "MongoDB" class = "skillimage" />
            </div>
          </div>
          <div class = "col-12 col-sm-6 col-md-4 col-xl-3 float-left p-1">
            <div class = "header my-1 p-3">
              <h4 class = "engraved">ExpressJS</h4>
              <img src = "assets/images/ExpressJS.png" alt = "ExpressJS" class = "skillimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ` )
}

/// ABOUTME //////////////////////////////////////////////////
let aboutMe = () => {
  $( "#content" ).empty( );
  $( "#content" ).html( `
    <div class = "row justify-content-center">
      <div class = "col-12 col-lg-8 header">
        <h2 class = "engraved pt-2">About Me</h2>
      </div>
    </div>
    <div class = "row justify-content-center">
      <div class = "col-12 col-lg-8 aboutme p-3">
        <img class = "float-right biopic p-3 " src = "assets/images/bio-pic.png" alt = "profile picture">
        <p>First and foremost, I am a Nerd.  I love Star Wars.  I read Marvel comic books.  I play board games.  I play Role Playing Games.  I am a Dungeon Master.  I love to develop awesome websites and applications.</p>
        <p>I enlisted in the Army Reserves after high school so I could go to college, because that is what you were supposed to do.  I changed majors three times because at 18 I had no idea what I wanted to do with my life, and before I could graduate I was activated and sent to Iraq.  I spent most of 2003 driving a fuel truck through Iraq and Kuwait.</p>
        <p>After I got home I got a job as a letter carrier at the USPS.  I had gone to college because I love to learn new things. As a mailman the only new things I learned came from the plethora of podcasts and audio books of which I listened to in order to avoid boredom. When you aren’t running away from dogs (it really is a thing) most of being a mailman is boredom.</p>
        <p>In 2018 I quit my job at the post office to become a full time dad and devote all my free time to learning web development, plus I completed a 24 week full stack web development boot camp at the University of Minnesota. I had learned some early web development when I was in college, even made a few web sites that thankfully no longer exist (this was the era of hamster dance), but I never thought to make a career out of it.  Now, I'm ready to make it a career.</p>
      </div>
    </div>
    <div class = "row justify-content-center">
      <div class = "col-12 col-sm-5 col-lg-4 header contactinfo engraved p-3">
        <h5>Phone: <a href = "tel:1-612-226-8339">(612) 226 - 8339</a></h5>
      </div>
      <div class = "col-12 col-sm-7 col-lg-4 header contactinfo engraved p-3">
        <h5>email: <a href = "mailto:bmbloomquist@gmail.com" title = "Email" target = "_top">bmbloomquist@gmail.com</a></h5>
      </div>
    </div>
  ` )
}

/// ALL APPS //////////////////////////////////////////////////
let allApps = () => {
  $( "#content" ).empty( );
  if ( $( "#navbar" ).attr( "class" ) === "active" ) { 
    toggel(); 
  }
  $( "#content" ).html( `
    <div class = "row justify-content-center">
      <div class = "col-12 col-md-10 header">
        <h2 class = "engraved pt-2">Full Project List</h2>
      </div>
    </div>
    <div class = "row justify-content-center">
      <div class = "col-6 col-md-5 allapps p-3">
        <a class = "btn applink p-1" href = "https://bryanbloomquist.com/word-guess-game" title = "Word Guess Game" target = "_blank">
          Dungeons and Dragons Hangman
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://bryanbloomquist.com/star-wars-rpg" title = "Star Wars RPG" target = "_blank">
          Star Wars RPG
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://bryanbloomquist.com/giftastic" title = "Giftastic" target = "_blank">
          Giftastic
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://bryanbloomquist.com/group-project-1" title = "D & D Combat Tracker" target = "_blank">
          D & D Combat Tracker
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://bryanbloomquist.github.io/bamazon" title = "Bamazon" target = "_blank">
          Bamazon CLI (Github Repo)
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://eater-of-burgers.herokuapp.com/" title = "Eat Da Burger" target = "_blank">
          Eat Da Burger
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://cyoa-bc.herokuapp.com" title = "Group Project 2" target = "_blank">
          Choose Your Own Adventure (Boot Camp)
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://bryanbloomquist.com/clicky-game" title = "Clicky Game" target = "_blank">
          Venture Bros. Memory Game
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://try-athlete.herokuapp.com" title = "Group Project 3" target = "_blank">
          Try Athlete
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://molly-pony.herokuapp.com" title = "My Little Pony Math Rescue" target = "_blank">
          My Little Pony Math Rescue
        </a>
      </div>
      <div class = "col-6 col-md-5 allapps p-3">
        <a class = "btn applink p-1" href = "https://bryanbloomquist.com/crystal-collector" title = "Crystal Collector" target = "_blank">
          Terraria Gem Collector
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://bryanbloomquist.com/trivia-game" title = "Trivia Game" target = "_blank">
          Fallout Trivia
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://bryanbloomquist.com/train-activity" title = "Train Activity" target = "_blank">
          Lud Train Station
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://bryanbloomquist.github.io/liri-bot" title = "Liri Bot" target = "_blank">
          Liri Bot CLI (Github Repo)
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://nerd-friend-finder.herokuapp.com/" title = "Friend Finder" target = "_blank">
          Nerd Friend Finder
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://eater-of-burgers-sequel.herokuapp.com" title = "Eat Da Burger Sequelized" target = "_blank">
          Eat Da Burger (da Sequel)
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://gimlet.herokuapp.com" title = "News Scraper" target = "_blank">
          Gimlet Podcast Scraper
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://react-google.herokuapp.com" title = "Google Book Search" target = "_blank">
          Google Book Search
        </a>
        <br>
        <a class = "btn applink p-1" href = "https://sezzle-calc.herokuapp.com" title = "Sezzle Calculator" target = "_blank">
          Sezzle Calculator Challenge
        </a>
      </div>
    </div>
  ` )
}

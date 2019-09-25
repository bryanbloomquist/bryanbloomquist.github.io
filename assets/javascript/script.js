$( document ).ready( function() {

  $( "#aboutme" ).on( "click", aboutMe );

  $( "#navbarCollapse" ).on( "click", function() {
    $( "#navbar, .navbutton, #content" ).toggleClass( "active" );
  })

  welcomePage();

});


// from Typed.js by Matt Boldt ( https://github.com/mattboldt/typed.js/ )
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


/// WELCOMEPAGE //////////////////////////////////////////////////////////
let welcomePage = ( ) => {
  $( "#content" ).empty( );
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


/// ABOUTME ///////////////////////////////////////////////////////////
let aboutMe = () => {
  $( "#content" ).empty( );
  $( "#content" ).html( `
    <div class = "row justify-content-center">
      <div class = "col-xs-12 col-lg-8 header">
        <h2 class = "engraved pt-2">About Me</h2>
      </div>
    </div>
    <div class = "row justify-content-center">
      <div class = "col-xs-12 col-lg-8 aboutme p-3">
        <img class = "float-right biopic p-3 " src = "assets/images/bio-pic.png" alt = "profile picture">
        <p>
          I enlisted in the Army Reserves after high school so I could go to college because that is what you were supposed to do.  I changed majors three times because at 18 I had no idea what I wanted to do with my life, and before I could graduate I was activated and sent to Iraq.  I spent most of 2003 driving a fuel truck through Iraq and Kuwait.
        </p>
        <p>
          After I got home I got a job as a letter carrier at the USPS.  I had gone to college because I love to learn new things. As a mailman the only new things I learned came from the plethora of podcasts and audio books of which I listened in order to avoid boredom. When you aren’t running away from dogs (it really is a thing) most of being a mailman is boredom.
        </p>
        <p>
          In 2018 I quit my job at the post office to become a full time dad and devote all my free time to learning web development, plus I completed a 24 week full stack web development boot camp at the University of Minnesota. I had learned some early coding when I was in college, even made a couple web sites that thankfully no longer exist (this was the era of hamster dance), but I never thought to make a career out of it.  Now, I'm ready to make it a career.
        </p>
      </div>
    </div>
    <div class = "row justify-content-center">
      <div class = "col-xs-12 col-sm-5 col-md-3 header contactinfo engraved p-3">
        <h5>Phone: <a href = "tel:1-612-226-8339">(612) 226 - 8339</a></h5>
      </div>
      <div class = "col-xs-12 col-sm-7 col-md-5 header contactinfo engraved p-3">
        <h5>email: <a href = "mailto:bmbloomquist@gmail.com" title = "Email" target = "_top">bmbloomquist@gmail.com</a></h5>
      </div>
      <div class = "clear"></div>
    </div>
  ` )
}
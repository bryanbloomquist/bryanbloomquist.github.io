$( document ).ready( function() {

  $( "#navbarCollapse" ).on( "click", function() {
    $( "#navbar, .navbutton, #content" ).toggleClass( "active" );
  })

  // load this when page is first opened
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
    typed( "#typed2", "<span class='blue'>event</span>.<span class='gold'>leaveThePostOffice</span> <span class='purple'>( )</span>;", 2500 );
    typed( "#typed3", "<span class='blue'>bryan</span>.<span class='gold'>addClass</span><span class='purple'>(</span> <span class='orange'>'coding-boot-camp'</span> <span class='purple'>)</span>;", 4000 );
    typed( "#typed4", "<span class='purple'>if (</span> <span class='blue'>activity</span> === <span class='orange'>'webDevelopment'</span> <span class='purple'>) {</span>", 5500 );
    typed( "#typed5", "<span class='purple'>return</span> <span class='blue'>happiness</span> = <span class='darkblue'>true</span>;", 7000 );
    typed( "#typed6", "<span class='purple'>}</span>", 8000 );
    typed( "#typed7", "<span class='gold'>$</span><span class='purple'>(</span> <span class='orange'>'#myLife'</span> <span class='purple'>)</span>.<span class='gold'>append</span><span class='purple'>(</span> <span class='orange'>'Hello World!'</span> <span class='purple'>)</span>;", 8250 );
    typed( "#typed8", "<span class='yellow'>}</span>;", 9750 );
  }

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



















  welcomePage();

})
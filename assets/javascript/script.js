$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content, .navbar').toggleClass('active');
    });

    function typed (divID, string, delay) {
        var typed = new Typed(divID, {
            strings: [ string ],
        typeSpeed: 10,
        startDelay: delay,
        loop: false,
        });
    };

    typed ("#typed1", "<span class='darkblue'>function</span> <span class='gold'>rebootCareer</span><span class='yellow'>(</span> <span class='blue'>bryan</span> <span class='yellow'>) {</span>", 1000);
    typed ("#typed2", "<span class='blue'>event</span>.<span class='gold'>leaveThePostOffice</span> <span class='purple'>( )</span>;", 3000);
    typed ("#typed3", "<span class='blue'>bryan</span>.<span class='gold'>addClass</span><span class='purple'>(</span> <span class='orange'>'coding-boot-camp'</span> <span class='purple'>)</span>;", 5000);
    typed ("#typed4", "<span class='purple'>if (</span> <span class='blue'>activity</span> === <span class='orange'>'webDevelopment'</span> <span class='purple'>) {</span>", 7000);
    typed ("#typed5", "<span class='purple'>return</span> <span class='blue'>happiness</span> = <span class='darkblue'>true</span>;", 9000);
    typed ("#typed6", "<span class='purple'>}</span>", 10000);
    typed ("#typed7", "<span class='gold'>$</span><span class='purple'>(</span> <span class='orange'>'#myLife'</span> <span class='purple'>)</span>.<span class='gold'>append</span><span class='purple'>(</span> <span class='orange'>'Hello World!'</span> <span class='purple'>)</span>;", 10500);
    typed ("#typed8", "<span class='yellow'>}</span>;", 12050);

});

function animateCss(element, animationName, callback) {
    var node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

$(function(){
    $(".animeTrigger").click(function(event){
        event.preventDefault();
        animateCss('.animeExit', 'fadeOutLeftBig');
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = link;
        }, 800);
    });
});
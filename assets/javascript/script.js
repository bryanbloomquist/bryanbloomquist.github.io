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


// function rebootCareer(bryan){
//     event.leaveThePostOffice();
//     bryan.addClass("coding-boot-camp");
//     if (activity === "Web-Development")
//         { return happiness = true; }
// }; $("#myLife").append("Hello World!");
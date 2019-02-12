$(function(){
    $(".special").click(function(event){
        event.preventDefault();
        animateCss(".exit", "fadeOutRight");
        var link = $(this).attr("href");
        setTimeout(function() {
            window.location.href = link;
        }, 400);
    });
});

function animateCss(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
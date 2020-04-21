$(document).ready(function() {
  $("#navbarCollapse").on("click", toggel);

  welcomePage();

  portfolioPage();

  techSkillsPage();

});

// Typed.js by Matt Boldt https://github.com/mattboldt/typed.js/

const typed = (divID, string, delay) => {
  let typed = new Typed(divID, {
    strings: [string],
    typeSpeed: 33,
    startDelay: delay,
    loop: false,
    showCursor: false
  });
};

const toggel = () => $("#navbar, .navbutton, .content").toggleClass("active");

/// WELCOMEPAGE ////////////////////////////////////////////////

const welcomePage = () => {
  $(".greetings").empty();
  typed(
    ".greetings",
    "Hi, I'm Bryan.  I make cool stuff happen on the internet.",
    0
  );
};

/// PORTFOLIO //////////////////////////////////////////////////

const portfolioPage = () => {
  portfolio.map((project, i) => {
    $("#project-buttons").append(
      "<div class = 'col-12'>" +
        "<button class = 'pagelink btn-block p-3 mb-3' type = 'button' data-toggle = 'collapse' data-target = '#project-" + i + "' aria-expanded = 'false' aria-controls = 'project-" + i + "'>" +
          project.name +
        "</button>" +
      "</div>"
    );
    $("#project-accordion").append(
      "<div class = 'col-12 p-0 collapse' id = 'project-" + i + "' data-parent = '#project-accordion'>" +
        "<div class = 'project-body text-center'>" +
          "<h5 class = 'project-title'>" + project.name + "</h5>" +
          "<img class = 'project-image' src = '" + project.src + "' alt = '" + project.alt + "' />" +
          "<p class = 'project-skills'>" + project.skills + "</p>" +
          "<a class='pagelink btn p-3 m-3' href='" + project.deployed + "' target='_blank'>Deployed Site</a>" +
          "<a class='pagelink btn p-3 m-3' href='" + project.github + "' target='_blank'>Github Repo</a>" +
        "</div>" +
      "</div>"
    );
  })
}

/// TECH SKILLS //////////////////////////////////////////////////

let techSkillsPage = () => {
  toolbox.map((tool,i) => {
    $(".slider-origin").append(
      '<div class="slider-item" id="section'+(i+1)+'">' +
        '<img src="'+tool.src+'"/>' +
      '</div>'
    );
    $(".text-section").append(
      '<div class="section'+(i+1)+'">'+
        '<h2>'+tool.name+'</h2>'+
        '<p>'+tool.description+'</p>'+
        '<h4>Skill Level: '+tool.level+' / 5</h4>'+
      '</div>'
    )
  });
};

/// TECH SKILLS SLIDER /////////////////////////////////////////////

$(function() {
  $('[data-toggle="popover"]').popover();
});

$(document).ready(function() {
  // helpful variables
  var slider = $(".slider-inside");
  var sliderInner = slider.find(".slider-inner");
  var sliderOrigin = slider.find(".slider-origin");
  var sliderItems = slider.find(".slider-item");
  var itemsLength = sliderItems.length;
  var calcDeg = 400 / itemsLength;
  var clickDown = false;
  var mouseMove = false;
  var moveFrom = null;
  var moveTo = null;
  var extraDeg = 0;
  var currentItem = sliderItems.eq(0);

  // slider origin width & height = half of item height
  sliderOrigin.width(sliderItems.outerHeight() / 2);
  sliderOrigin.height(sliderItems.outerHeight() / 2);

  // slider inner width & height = item height * 3.5
  sliderInner.width(sliderItems.outerHeight() * 3.5);
  sliderInner.height(sliderItems.outerHeight() * 3.5);

  var sliderInnerWidth = sliderInner.outerWidth();
  var sliderInnerOffset = sliderInner.offset();

  // sliderOrigin.css(
  //   "margin-top",
  //   sliderInner.height() / 2 - sliderOrigin.height() / 2
  // );

  // calc rotation positioning
  function rotationPosition(exceptIndex) {
    exceptIndex = exceptIndex | 0;
    var i = 1;
    sliderItems.each(function(e) {
      var $this = $(this);
      extraDeg = exceptIndex > itemsLength / 2 ? 360 : 0;

      if (e === exceptIndex) {
        $this
          .addClass("active")
          .css(
            "transform",
            "rotate(" + extraDeg + "deg)translateY(200%)scale(1.6)"
          );
        var the_id = this.id;

        console.log(the_id);
        $(".text-section div").hide();
        $("." + the_id).show();
      } else {
        $this.css(
          "transform",
          "rotate(" + (i * calcDeg + 0) + "deg) translateY(-40px)"
        );
        i++;
        $this.removeClass("active");
      }
    });
  }

  rotationPosition();
  $(".slider-item").click(function() {
    notclicked = false;
  });

  var count = 1;
  var notclicked = true;
  window.setInterval(function() {
    if (notclicked == true) {
      rotationPosition(count);
      count++;
      console.log("switched");
      if (count == 10) {
        count = 0;
      }
    } else {
    }
  }, 5000);

  // click event on item
  var clickedItemIndex = null;
  function sliderItemsClickEvent() {
    sliderItems.mousedown(function(e) {
      if (clickedItemIndex == null && e.which == 1) {
        clickedItemIndex = $(this).index();
      }
    });
    sliderItems.mouseup(function() {
      var $this = $(this);
      if (clickedItemIndex === $this.index()) {
        currentItem = $this;
        pushIndex($this.index());
      }
    });
  }
  sliderItemsClickEvent();

  // push index of the activated item
  function pushIndex(index) {
    sliderItems.removeClass("active");
    rotationPosition(index);
  }

  // clickDown = true if mousedown on slider
  sliderInner.mousedown(function(e) {
    clickDown = true;
    moveFrom = e.pageX;
  });

  // clickDown = false if mouseup on any place in the page
  $(document).mouseup(function(e) {
    clickDown = false;
    setTimeout(function() {
      clickedItemIndex = null;
    }, 505);
    // setTimeout(function(){clickDown = false;}, 505);
    if (mouseMove) {
      mouseMove = false;
      moveto = e.pageX;
      swipe(moveFrom, moveto);
    }
  });

  // calc mouse move on sliderInner div
  sliderInner.mousemove(function(e) {
    if (clickDown) {
      if (!mouseMove) {
        mouseMove = true;
      }
      var offsetX = e.pageX - sliderInnerOffset.left;
      var move = moveFrom - sliderInnerOffset.left;
      var motionDeg = ((offsetX - move) / sliderInnerWidth) * (calcDeg * 2);
      extraDeg = currentItem.index() > itemsLength / 2 ? 360 : 0;
      sliderInner
        .find(".slider-item.active")
        .css(
          "transform",
          "rotate(" + (motionDeg + extraDeg) + "deg)translateY(200%)scale(1.6)"
        );
    }
  });

  function swipe(from, to) {
    var distance = Math.abs(from - to); // mouse move distance
    var rightDir = from < to;
    if (distance > sliderInnerWidth / 4) {
      navigate();
    } else {
      currentItem.css(
        "transform",
        "rotate(" +
          (currentItem.index() > itemsLength / 2 ? 360 : 0) +
          "deg)translateY(200%)scale(1.6)"
      );
    }

    function navigate() {
      if (rightDir) {
        var nextIndex = currentItem.next().index();
        pushIndex(nextIndex != -1 ? nextIndex : 0);
      } else {
        var prevIndex = currentItem.prev().index();
        pushIndex(prevIndex != -1 ? prevIndex : sliderItems.length - 1);
      }
      currentItem = sliderInner.find(".slider-item.active");
    }
  }
});

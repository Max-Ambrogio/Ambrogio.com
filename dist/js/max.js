// Toggle navigation menu (Vanilla JS replacement for jQuery click handler)
document.getElementById("nav-btn").addEventListener("click", function () {
    document.getElementById("takeover-nav").classList.toggle("shown");
    document.querySelector(".sticky-nav").classList.toggle("difference");
});

// Menu icon animation variables
var icon_1 = document.getElementById("nav-btn");
var topLine_1 = document.getElementById("top-line-1");
var middleLine_1 = document.getElementById("middle-line-1");
var bottomLine_1 = document.getElementById("bottom-line-1");
var state_1 = "menu";

var segmentDuration_1 = 15;
var menuDisappearDurationInFrames_1 = segmentDuration_1;
var arrowAppearDurationInFrames_1 = segmentDuration_1;
var arrowDisappearDurationInFrames_1 = segmentDuration_1;
var menuAppearDurationInFrames_1 = segmentDuration_1;
var currentFrame_1 = 1;
var menuDisappearComplete_1 = false;
var arrowAppearComplete_1 = false;
var arrowDisappearComplete_1 = false;
var menuAppearComplete_1 = false;

const easeInBack = gsap.parseEase("back.in(1.7)");
const easeOutBack = gsap.parseEase("back.out(1.7)");

function interpolate(start, end, totalFrames, currentFrame, easeFn) {
  const t = currentFrame / totalFrames;
  const easedT = easeFn(t);
  return start + (end - start) * easedT;
}

function menuDisappearAnimation_1() {
  currentFrame_1++;
  if (currentFrame_1 <= menuDisappearDurationInFrames_1) {
    requestAnimationFrame(() => {
      let topLineY = interpolate(37, 50, menuDisappearDurationInFrames_1, currentFrame_1, easeInBack);
      topLine_1.setAttribute("d", `M30,${topLineY} L70,${topLineY}`);

      let bottomLineY = interpolate(63, 50, menuDisappearDurationInFrames_1, currentFrame_1, easeInBack);
      bottomLine_1.setAttribute("d", `M30,${bottomLineY} L70,${bottomLineY}`);

      menuDisappearAnimation_1();
    });
  } else {
    middleLine_1.style.opacity = "0";
    currentFrame_1 = 1;
    menuDisappearComplete_1 = true;
    openMenuAnimation_1();
  }
}

function arrowAppearAnimation_1() {
  currentFrame_1++;
  if (currentFrame_1 <= arrowAppearDurationInFrames_1) {
    requestAnimationFrame(() => {
      let topLeftX = interpolate(30, 35, arrowAppearDurationInFrames_1, currentFrame_1, easeOutBack);
      let topLeftY = interpolate(50, 35, arrowAppearDurationInFrames_1, currentFrame_1, easeOutBack);
      let bottomRightX = interpolate(70, 65, arrowAppearDurationInFrames_1, currentFrame_1, easeOutBack);
      let bottomRightY = interpolate(50, 65, arrowAppearDurationInFrames_1, currentFrame_1, easeOutBack);

      topLine_1.setAttribute("d", `M${topLeftX},${topLeftY} L${bottomRightX},${bottomRightY}`);

      let bottomLeftX = interpolate(30, 35, arrowAppearDurationInFrames_1, currentFrame_1, easeOutBack);
      let bottomLeftY = interpolate(50, 65, arrowAppearDurationInFrames_1, currentFrame_1, easeOutBack);
      let topRightX = interpolate(70, 65, arrowAppearDurationInFrames_1, currentFrame_1, easeOutBack);
      let topRightY = interpolate(50, 35, arrowAppearDurationInFrames_1, currentFrame_1, easeOutBack);

      bottomLine_1.setAttribute("d", `M${bottomLeftX},${bottomLeftY} L${topRightX},${topRightY}`);

      arrowAppearAnimation_1();
    });
  } else {
    currentFrame_1 = 1;
    arrowAppearComplete_1 = true;
    openMenuAnimation_1();
  }
}

function openMenuAnimation_1() {
  if (!menuDisappearComplete_1) {
    menuDisappearAnimation_1();
  } else if (!arrowAppearComplete_1) {
    arrowAppearAnimation_1();
  }
}

function arrowDisappearAnimation_1() {
  currentFrame_1++;
  if (currentFrame_1 <= arrowDisappearDurationInFrames_1) {
    requestAnimationFrame(() => {
      let topLeftX = interpolate(35, 30, arrowDisappearDurationInFrames_1, currentFrame_1, easeInBack);
      let topLeftY = interpolate(35, 50, arrowDisappearDurationInFrames_1, currentFrame_1, easeInBack);
      let bottomRightX = interpolate(65, 70, arrowDisappearDurationInFrames_1, currentFrame_1, easeInBack);
      let bottomRightY = interpolate(65, 50, arrowDisappearDurationInFrames_1, currentFrame_1, easeInBack);
      topLine_1.setAttribute("d", `M${topLeftX},${topLeftY} L${bottomRightX},${bottomRightY}`);

      let bottomLeftX = interpolate(35, 30, arrowDisappearDurationInFrames_1, currentFrame_1, easeInBack);
      let bottomLeftY = interpolate(65, 50, arrowDisappearDurationInFrames_1, currentFrame_1, easeInBack);
      let topRightX = interpolate(65, 70, arrowDisappearDurationInFrames_1, currentFrame_1, easeInBack);
      let topRightY = interpolate(35, 50, arrowDisappearDurationInFrames_1, currentFrame_1, easeInBack);
      bottomLine_1.setAttribute("d", `M${bottomLeftX},${bottomLeftY} L${topRightX},${topRightY}`);

      arrowDisappearAnimation_1();
    });
  } else {
    middleLine_1.style.opacity = "1";
    currentFrame_1 = 1;
    arrowDisappearComplete_1 = true;
    closeMenuAnimation_1();
  }
}

function menuAppearAnimation_1() {
  currentFrame_1++;
  if (currentFrame_1 <= menuAppearDurationInFrames_1) {
    requestAnimationFrame(() => {
      let topLineY = interpolate(50, 37, menuDisappearDurationInFrames_1, currentFrame_1, easeOutBack);
      topLine_1.setAttribute("d", `M30,${topLineY} L70,${topLineY}`);

      let bottomLineY = interpolate(50, 63, menuDisappearDurationInFrames_1, currentFrame_1, easeOutBack);
      bottomLine_1.setAttribute("d", `M30,${bottomLineY} L70,${bottomLineY}`);

      menuAppearAnimation_1();
    });
  } else {
    currentFrame_1 = 1;
    menuAppearComplete_1 = true;
    closeMenuAnimation_1();
  }
}

function closeMenuAnimation_1() {
  if (!arrowDisappearComplete_1) {
    arrowDisappearAnimation_1();
  } else if (!menuAppearComplete_1) {
    menuAppearAnimation_1();
  }
}

icon_1.addEventListener("click", () => {
  if (state_1 === "menu") {
    openMenuAnimation_1();
    state_1 = "arrow";
    arrowDisappearComplete_1 = false;
    menuAppearComplete_1 = false;
  } else if (state_1 === "arrow") {
    closeMenuAnimation_1();
    state_1 = "menu";
    menuDisappearComplete_1 = false;
    arrowAppearComplete_1 = false;
  }
});

// Cursor logic without jQuery
document.addEventListener("DOMContentLoaded", function () {
  var cursor = document.querySelector(".custom-cursor");
  var links = document.querySelectorAll("a, button, #nav-btn, input.btn");
  var initCursor = false;

  links.forEach(link => {
    link.addEventListener("mouseover", () => cursor.classList.add("custom-cursor--link"));
    link.addEventListener("mouseout", () => cursor.classList.remove("custom-cursor--link"));
  });

  function moveCursor(x, y) {
    if (!initCursor) {
      TweenLite.to(cursor, 0.5, { opacity: 1 });
      initCursor = true;
    }
    TweenLite.to(cursor, 0, {
      top: `${y}px`,
      left: `${x}px`
    });
  }

  window.addEventListener("mousemove", e => moveCursor(e.clientX, e.clientY));
  window.addEventListener("touchmove", e => moveCursor(e.touches[0].clientX, e.touches[0].clientY));
  window.addEventListener("mouseout", () => {
    TweenLite.to(cursor, 0.3, { opacity: 0 });
    initCursor = false;
  });
  window.addEventListener("touchstart", () => TweenLite.to(cursor, 0.3, { opacity: 1 }));
  window.addEventListener("touchend", () => {
    setTimeout(() => TweenLite.to(cursor, 0.3, { opacity: 0 }), 200);
  });
});

// slider
document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach(slider => {
    const sWrapper = slider.querySelector('.slider-wrapper'); 
    const sItems = slider.querySelectorAll('.slide');
    const buttons = slider.querySelectorAll('.slider-link');
    const sWidth = sItems[0].offsetWidth;
    const sCount = sItems.length;
    const slide_date = slider.querySelectorAll('.slide-date');
    const slide_title = slider.querySelectorAll('.slide-title');
    const slide_text = slider.querySelectorAll('.slide-text');
    const slide_more = slider.querySelectorAll('.slide-more');
    const slide_image = slider.querySelectorAll('.slide-image img');
    const sTotalWidth = sCount * sWidth;

    sWrapper.style.width = sTotalWidth + 'px';

    let clickCount = 0;

    buttons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();

        if (btn.classList.contains('next')) {
          clickCount = (clickCount < sCount - 1) ? clickCount + 1 : 0;
        } else if (btn.classList.contains('prev')) {
          clickCount = (clickCount > 0) ? clickCount - 1 : sCount - 1;
        }

        // Slide animation
        gsap.to(sWrapper, {
          duration: 0.4,
          x: '-' + (sWidth * clickCount)
        });

        // Content animations
        const fromProps = { autoAlpha: 0, x: -50, y: -10 };
        const toProps   = { autoAlpha: 0.8, x: 0, y: 0 };

        gsap.fromTo(slide_image, { autoAlpha: 0, y: 40 }, { duration: 1, autoAlpha: 1, y: 0 });
        gsap.fromTo(slide_date, fromProps, { ...toProps, duration: 0.4 });
        gsap.fromTo(slide_title, fromProps, { ...toProps, duration: 0.6 });
        gsap.fromTo(slide_text, fromProps, { ...toProps, duration: 0.8 });
        gsap.fromTo(slide_more, fromProps, { ...toProps, duration: 1 });
      });
    });
  });

  // Optional: Apply overlay class globally
  // document.querySelector('.overlay')?.classList.add('overlay-blue');
});

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video-bg");

  // Optional: ensure it's autoplaying and muted
  video.autoplay = true;
  video.muted = true;

  // When the video ends, reset and play again
  video.addEventListener("ended", function () {
    video.currentTime = 0;
    video.play();
  });

  // Try to start playback in case autoplay is blocked
  video.play().catch((err) => {
    console.warn("Autoplay failed:", err);
  });
});





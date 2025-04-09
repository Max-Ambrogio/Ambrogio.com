
// // create the smooth scroller FIRST!

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const loadWrapper = document.getElementById("loadWrapper");

    setTimeout(() => {
        loader.style.transition = "opacity 0.5s ease";
        loadWrapper.style.transition = "opacity 0.5s ease";

        loader.style.opacity = "0";
        loadWrapper.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
            loadWrapper.style.display = "none";
        }, 500); // Matches the transition duration

        gsap.from('.header .logo' , {
            opacity: 0,
            autoAlpha: 0,
            y:-80,
            ease: 'power3.out',
            duration:2,
            delay: 0.8,
        })
        gsap.from('.letters' , {
            opacity: 0,
            y:60,
         
            ease: 'power3.out',
            duration:2,
            // delay: .5,
        })
        gsap.from('.letters img' , {
            scale:0,
            opacity:0,
            y: 80,
            ease: 'power3.out',
            duration:1,
            // delay: .5,
            // stagger:.1,
        })

        gsap.from(".eye-svg ",{
            scale: 1.2,
            rotation: 0,
            ease:"power3.out",
        })
        gsap.from(".svg-two",{
            scale: 1.2,
            rotation: 3,
            ease:"power3.out",
        })
        gsap.from(".svg-three ",{
            scale: 1.2,
            rotation: 0,
            ease:"power3.out",
        })

        gsap.from('.webdevelopment h2' , {
            scrollTrigger:{
                trigger:'.webdevelopment',
                start: "5% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            // delay:.8,
        })
        gsap.from('.webdevelopment .content-left p' , {
            scrollTrigger:{
                trigger:'.webdevelopment',
                start: "20% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            delay:.8,
        })
        gsap.from('.webdevelopment .one p' , {
            scrollTrigger:{
                trigger:'.webdevelopment',
                start: "40% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            delay:.8,
        })
        gsap.from('.animation h2' , {
            scrollTrigger:{
                trigger:'.animation',
                start: "5% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            // delay:.8,
        })
        gsap.from('.animation .content-left p' , {
            scrollTrigger:{
                trigger:'.animation',
                start: "20% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            delay:.8,
        })
        gsap.from('.animation .one p' , {
            scrollTrigger:{
                trigger:'.animation',
                start: "40% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            delay:.8,
        })
        gsap.from('.videoproduction h2' , {
            scrollTrigger:{
                trigger:'.videoproduction',
                start: "5% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            // delay:.8,
        })
        gsap.from('.videoproduction .content-left p' , {
            scrollTrigger:{
                trigger:'.videoproduction',
                start: "20% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            delay:.8,
        })
        gsap.from('.videoproduction .one p' , {
            scrollTrigger:{
                trigger:'.videoproduction',
                start: "40% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            delay:.8,
        })
        gsap.from('.creative-technology h2' , {
            scrollTrigger:{
                trigger:'.creative-technology',
                start: "5% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            // delay:.8,
        })
        gsap.from('.creative-technology .content-left p' , {
            scrollTrigger:{
                trigger:'.creative-technology',
                start: "20% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            delay:.8,
        })
        gsap.from('.creative-technology .one p' , {
            scrollTrigger:{
                trigger:'.creative-technology',
                start: "40% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            delay:.8,
        })
        gsap.from('.about-me h2' , {
            scrollTrigger:{
                trigger:'.about-me',
                start: "10% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            delay:.8,
        })
        gsap.from('.about-me .about' , {
            scrollTrigger:{
                trigger:'.about-me',
                start: "20% 80%",
                // markers: true,
            },
            opacity:0,
            y: -50,
            stagger:0.2,
            ease: 'power3',
            duration:1,
            delay:.8,
        })



    }, 3000);
    var cards = document.querySelectorAll('.card')
      
    const cursorCont = document.querySelector(".cursor-container")
    const cursor = document.querySelector(".cursor")
    const root = document.documentElement;
    const rightContent = document.querySelectorAll(".content-right")
    
    document.addEventListener("mousemove", (event) => {
          x = event.pageX
        y = event.pageY
      
        cursorCont.style.transform = `translate(${x}px,${y}px) scale(1)`
    })
    
    //hover
    var cardInner = document.querySelectorAll('.card .inner-shadow')
    var cardCursorWrapper = document.querySelectorAll('.card .cursor-blur-wrapper')
    var cardCursor = document.querySelectorAll('.card .cursor-blur')

    window.addEventListener('mousemove' , (event) =>{
        rightContent.forEach((item, i) => {

            item.onmouseover = function(){
                cursor.style.minWidth = "128px"
                cursor.style.minHeight = "128px"
                cursor.style.backdropFilter  = 'invert(1)' 
                cursor.style.backgroundColor = 'rgba(0, 0, 0, 0)'
              };
              item.onmouseout = function(){
                cursor.style.minWidth = "10px"
                cursor.style.minHeight = "10px"
                cursor.style.backgroundColor = 'var(--initial)'
                cursor.style.backdropFilter  = 'invert(0)' 
              };  
        })

    })
    
    window.addEventListener("mousemove", (event) => {
        cards.forEach((item, i) => {
          const rect = item.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        let count = 0;
        
        if (x < 0) {
            x = 0
          translate()
        } else if (x > rect.width) {
            x = rect.width
          translate()
        }
        if (y < 0) {
            y = 0
          translate()
        } else if (y > rect.height) {
            y = rect.height
          translate()
        }
        function translate() {
            cardCursorWrapper[i].style.transform = `translate(${x}px,${y}px)`
        }
        
        item.onmouseover = function(){
          cursor.style.backgroundColor = `var(--animate${i + 1})`
          cardCursor[i].style.backgroundColor = `var(--animate${i + 1})`
          cardInner[i].style.color = `var(--animate${i + 1})`

        };
        item.onmouseout = function(){
          cursor.style.backgroundColor = 'var(--initial)'
          cardCursor[i].style.backgroundColor = 'var(--initial)'
          cardInner[i].style.color = 'var(--initial)'
        };  
      })
    });
});

if (document.body.classList.contains('page-home')) {

    
    const videos = document.querySelectorAll("video")
    videos.forEach(video => {
        video.addEventListener("mouseover", function () {
          this.play()
        })
        
        video.addEventListener("mouseout", function () {
          this.pause()
        })
        
        video.addEventListener("touchstart", function () {
          this.play()
        })
        
        video.addEventListener("touchend", function () {
          this.pause()
        })
    })

    var shiver = 20;
    TweenMax.set(".letters img", {xPercent:-10, yPercent:-10});
    
    var tl = new TimelineMax({repeat:-1, onRepeat:shiverMe })
    
    .to(".letters img", 0.1, {
         x:function(){return shiver},
         rotation:function(){return shiver},
         yoyo:true,
         repeat:1,
         ease:Power1.easeOut,
        //  stagger: 0.03,
    })
    
    function shiverMe(){shiver = 10 * getRandomArbitrary(.15,0.1);
                        tl.invalidate();
    }
    
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    let lastScrollY = window.scrollY;
    let ticking = false;

    function handleScroll() {
        const svgs = document.querySelectorAll('.svg');
        const scrollDiff = window.scrollY - lastScrollY;
        
        svgs.forEach((svg, index) => {
            let moveX = window.scrollY * 0.5 + index * 15;
            let rotate = window.scrollY * 0.5;
            svg.style.transform = `translateX(${moveX}px) rotate(${rotate}deg)`;
        });
        
        lastScrollY = window.scrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });



}




if (document.body.classList.contains('page-webdev')){

    const juveOne = gsap.timeline({
        scrollTrigger:{
            trigger:'.juventus',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    const juveTwo = gsap.timeline({
        scrollTrigger:{
            trigger:'.juventus',
            start: "top 90%",
            end:"bottom 90%",
            scrub: true,
            // markers: true,
        },
    });
    juveOne.to(".juve-one ",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    juveOne.to(".juve-one",{
        y:-60,
        rotation: 3,
        ease:"power3.out",
    })
    juveTwo.to(".juve-two ",{
        x:0,
        y:200,
        rotation: 0,
        ease:"power3.out",
    })
    juveTwo.to(".juve-two",{
        x:-10,
        y:-60,
        rotation: -3,
        ease:"power3.out",
    })
    const trulyOne = gsap.timeline({
        scrollTrigger:{
            trigger:'.truly',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    const trulyTwo = gsap.timeline({
        scrollTrigger:{
            trigger:'.truly',
            start: "top 90%",
            end:"bottom 90%",
            scrub: true,
            // markers: true,
        },
    });
    trulyOne.to(".truly-one ",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    trulyOne.to(".truly-one",{
        y:-60,
        rotation: 3,
        ease:"power3.out",
    })
    trulyTwo.to(".truly-two ",{
        x:0,
        y:100,
        rotation: 0,
        ease:"power3.out",
    })
    trulyTwo.to(".truly-two",{
        x:-10,
        y:-60,
        rotation: -3,
        ease:"power3.out",
    })
    const gProOne = gsap.timeline({
        scrollTrigger:{
            trigger:'.g-pro',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    const gProTwo = gsap.timeline({
        scrollTrigger:{
            trigger:'.g-pro',
            start: "top 90%",
            end:"bottom 90%",
            scrub: true,
            // markers: true,
        },
    });
    gProOne.to(".gpro-one ",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    gProOne.to(".gpro-one",{
        y:-60,
        rotation: 3,
        ease:"power3.out",
    })
    gProTwo.to(".gpro-two ",{
        x:0,
        y:100,
        rotation: 0,
        ease:"power3.out",
    })
    gProTwo.to(".gpro-two",{
        x:-10,
        y:-60,
        rotation: -3,
        ease:"power3.out",
    })
    
    const kid = gsap.timeline({
        scrollTrigger:{
            trigger:'.kid',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    
    kid.to(".k_d-one",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    
    const pokeOne = gsap.timeline({
        scrollTrigger:{
            trigger:'.pokebowl',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    const pokeTwo = gsap.timeline({
        scrollTrigger:{
            trigger:'.pokebowl',
            start: "top 90%",
            end:"bottom 90%",
            scrub: true,
            // markers: true,
        },
    });
    pokeOne.to(".poke-one ",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    pokeOne.to(".poke-one",{
        y:-60,
        rotation: 3,
        ease:"power3.out",
    })
    pokeTwo.to(".poke-two ",{
        x:0,
        y:100,
        rotation: 0,
        ease:"power3.out",
    })
    pokeTwo.to(".poke-two",{
        x:-10,
        y:-60,
        rotation: -3,
        ease:"power3.out",
    })
    const triviaOne = gsap.timeline({
        scrollTrigger:{
            trigger:'.trivia',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    const triviaTwo = gsap.timeline({
        scrollTrigger:{
            trigger:'.trivia',
            start: "top 90%",
            end:"bottom 90%",
            scrub: true,
            // markers: true,
        },
    });
    triviaOne.to(".trivia-one ",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    triviaOne.to(".trivia-one",{
        y:-60,
        rotation: 3,
        ease:"power3.out",
    })
    triviaTwo.to(".trivia-two ",{
        x:0,
        y:100,
        rotation: 0,
        ease:"power3.out",
    })
    triviaTwo.to(".trivia-two",{
        x:-10,
        y:-60,
        rotation: -3,
        ease:"power3.out",
    })
    const assassinsOne = gsap.timeline({
        scrollTrigger:{
            trigger:'.assassins',
            start: "top 90%",
            end:"bottom 60%",
            scrub: true,
            // markers: true,
        },
    });
    const assassinsTwo = gsap.timeline({
        scrollTrigger:{
            trigger:'.assassins',
            start: "top 90%",
            end:"bottom 90%",
            scrub: true,
            // markers: true,
        },
    });
    assassinsOne.to(".assassins-one ",{
        y:50,
        rotation: 0,
        ease:"power3.out",
    })
    assassinsOne.to(".assassins-one",{
        y:-60,
        rotation: 3,
        ease:"power3.out",
    })
    assassinsTwo.to(".assassins-two ",{
        x:0,
        y:100,
        rotation: 0,
        ease:"power3.out",
    })
    assassinsTwo.to(".assassins-two",{
        x:-10,
        y:-60,
        rotation: -3,
        ease:"power3.out",
    })


   
}

if (document.body.classList.contains('.page-video')){
    gsap.from('.bp-media div' , {
        scrollTrigger:{
            trigger:'bear-paw',
            start: "-10% 80%",
            // markers: true,
        },
        opacity:0,
        y: -50,
        stagger:0.2,
        ease: 'power3',
        duration:1,
        // delay:.8,
    })
    gsap.from('.lockn-media div' , {
        scrollTrigger:{
            trigger:'lockn',
            start: "-10% 80%",
            // markers: true,
        },
        opacity:0,
        y: -50,
        stagger:0.2,
        ease: 'power3',
        duration:1,
        // delay:.8,
    })

    
}


















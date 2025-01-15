
// // create the smooth scroller FIRST!

window.onload = function () {

}

if (document.body.classList.contains('page-home')) {

    
    // gsap.from('.header' , {
    //     opacity: 0,
    //     autoAlpha: 0,
    //     y:80,
    //     ease: 'power3.out',
    //     duration:2,
    //     delay: 0.5,
    // })

    gsap.from('.header .logo' , {
        opacity: 0,
        autoAlpha: 0,
        y:-80,
        ease: 'power3.out',
        duration:2,
        delay: 0.8,
    })
  

    gsap.from('.hero .accent-one' , {
        opacity: 0,
        autoAlpha: 0,
        x:80,
        ease: 'power3.out',
        duration:2,
        delay: 0.5,
    })
    gsap.from('.hero .accent-two' , {
        opacity: 0,
        autoAlpha: 0,
        y:-60,
        ease: 'power3.out',
        duration:2,
        delay: 1,
    })
    
    gsap.from('.letters' , {
        opacity: 0,
        y:60,
     
        ease: 'power3.out',
        duration:2,
        delay: 0.1,
    })
    gsap.from('.letters img' , {
        scale:0,
        y: 80,
        autoAlpha: 0,
        ease: 'power3.out',
        duration:1,
        // stagger:.1,
    })

    const trip = gsap.timeline({  repeat: -1,
        repeatDelay: 0.2,
        yoyo: true,});

    trip.to("#first", {
        duration: 1,
        ease: "expo.inOut",
        y:90,
    })
    trip.to("#second", {
        duration: 1,
        ease: "expo.inOut",
        y:-90,
    })
    trip.to("#third", {
        duration: 1,
        ease: "expo.inOut",
        y:90,
    })
    trip.to("#fourth", {
        duration: 1,
        ease: "expo.inOut",
        y:-90,
    })
    trip.to("#fith", {
        duration: 1,
        ease: "expo.inOut",
        y:90,
    })
    trip.to("#sixth", {
        duration: 1,
        ease: "expo.inOut",
        y:-90,
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

    gsap.to('.scramble',{
        duration:2,
        autoAlpha: 0,
        scrambleText:{
            delimiter:"",
            revealDelay:0.9,
            chars:"01",
            speed:0.1,
            // tweenLength: true,
            text: "{original}",
        }
    })
    gsap.to('.scramble-two',{
        // delay:1,
        duration:4,
        autoAlpha: 0,
        scrambleText:{
            chars:"01",
            revealDelay:0.7,
            speed:1,
            tweenLength: false,
            text: "{original}",
        }
    })
    gsap.to('.scarmble-three',{
        // delay:1,
        duration:6,
        // autoAlpha: 0,
        scrambleText:{
            chars:"01",
            revealDelay:0.9,
            speed:1,
            tweenLength: false,
            text: "{original}",
        }
    })
    gsap.to('.scramble-four',{
        // delay:1,
        duration:12,
        // autoAlpha: 0,
        scrambleText:{
            chars:"01",
            revealDelay:0.7,
            speed:1,
            tweenLength: false,
            text: "{original}",
        }
    })
    gsap.from('.about p',{
        delay:0.5,
        autoAlpha: 0,
        opacity:0,
        scrollTrigger: ".about",
        y:-50,
        ease: 'power3.out',
        duration:3,
        stagger:1,
    })
    gsap.registerPlugin(Observer);
    
    let sections = document.querySelectorAll("section"),
      images = document.querySelectorAll(".bg"),
      outerWrappers = gsap.utils.toArray(".outer"),
      innerWrappers = gsap.utils.toArray(".inner"),
      currentIndex = -1,
      wrap = gsap.utils.wrap(0, sections.length),
      animating;
    
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });
    
    function gotoSection(index, direction) {
      index = wrap(index); // make sure it's valid
      animating = true;
      let fromTop = direction === -1,
          dFactor = fromTop ? -1 : 1,
          tl = gsap.timeline({
            defaults: { duration: 1.25, ease: "power1.inOut" },
            onComplete: () => animating = false
          });
      if (currentIndex >= 0) {
        // The first time this function runs, current is -1
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
          yPercent: i => i ? -100 * dFactor : 100 * dFactor
        }, { 
          yPercent: 0 
        }, 0)
        .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        
      currentIndex = index;
    }
    
    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true
    });
    
    gotoSection(0, 1);
    
    // original: https://codepen.io/BrianCross/pen/PoWapLP
    // horizontal version: https://codepen.io/GreenSock/pen/xxWdeMK
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

if (document.body.classList.contains('page-video')){
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












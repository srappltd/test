var tl = gsap.timeline();
tl.to("#page2 h1",{
    scrollTrigger:{
        trigger:"#page2",
        scroll:"#main",
        start:"top -10%",
        end:"top 100%",
        markers:true,
        scrub:5,
        pin:true
    },
    x:300,

}).to("#page3 h1",{
    scrollTrigger:{
        trigger:"#page3",
        scroll:"#main",
        start:"top -10%",
        end:"top 100%",
        markers:true,
        scrub:3,
        ease:Expo.easeOut,
        pin:true,
    },
    y:300
}).to("#page4",{
    scrollTrigger:{
        trigger:"#page4",
        scroll:"#main",
        start:"top -10%",
        markers:true,
        end:"top 100%",
        // pin:true,
        scrub:5,
    },
    y:"100%",
    ease:Expo.easeIn,
})
.to("#page4 h1",{
    scrollTrigger:{
        trigger:"#page4",
        scroll:"#main",
        scrub:5,
        start:"top -10%",
        end:"top 100%",
    },
    x:-250,
    ease:Expo.easeInOut
})
.to("#page5 h1",{
    scrollTrigger:{
        trigger:"#page5",
        scroll:"#main",
        start:"top 30%",
        end:"top -100%",
        scrub:-3,
        pin:true
    },
    scale:2,
    // rotate:360
})
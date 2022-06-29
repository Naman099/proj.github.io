var tl = gsap.timeline();

tl.to("#makda",{  
    StaticRange:500,
    ease:Expo.easeinOut,
    opacity:0,
    duration:2.3,
    scale:1.5,
   delay:6
})
tl.from("#page",{  
    StaticRange:500,
    ease:Expo.easeinOut,
    opacity:0,
    duration:2.3,
    scale:1.5,
   
})

.from("#left",{
   StaticRange:-800,
    stagger:0,  
    ease:Expo.easeinOut,
    opacity:0,
    duration:2,
    scale:1.5,
})
.from("#gandu",{
    y:-500,
    stagger:.3,  
    ease:"bounce.out",
    opacity:0,
    duration:2,  
})
.from("#pic1,#pic2,#pic3",{
    y:-600, 
    scale:7,
    ease:"elastic.out",  
    opacity:0,
    duration:2.5,   
})
.from("#circul,#wenkda,#chutiya",{
    rotation:360,
    x:-500,
    scale:1,
    ease:Expo.easeinOut,
    opacity:0,
    duration:2,    
})


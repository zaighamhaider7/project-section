gsap.to(".project-outer .projects",{
    transform: "translateX(-260%)",
    delay:1,
    duration:1,
    scrollTrigger:{
        trigger:"#project",
        scroller:"body",
        start:("top 0%"),
        end:("top -500%"),
        markers:true,
        scrub:5,
        pin:true
    }
}
)
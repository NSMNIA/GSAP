if(document.querySelector('#home')){
    document.body.addEventListener('mousemove', e => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        gsap.set(".cursor", {
            x: mouseX,
            y: mouseY
        });

        gsap.to(".shape", {
            x: mouseX,
            y: mouseY,
            stagger: -.1
        });
    });
}

if(document.querySelector('#index2')){
    let rule = CSSRulePlugin.getRule(".anim1 span:after");
    let tl = gsap.timeline({defaults: {duration: 1}});
    tl.from('.anim1', {y: -50, stagger: .3, opacity: 0, clearProps: "all"})
        .to(rule, {duration: 1.8, cssRule: {scaleY: 0}}, "-=2.2");
    document.querySelector("#cta").addEventListener('click', e =>{
        e.preventDefault();
        tl.reversed() ? tl.play() : tl.reverse();
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 2200);
    })
}

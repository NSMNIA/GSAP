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
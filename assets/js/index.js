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

if(document.querySelector('#travel')){
    let t1 = gsap.timeline({paused: true, reversed: true});

    const bookNow = document.querySelector('.book');
    const containerBody = document.querySelector('.body');
    const containerBooking = document.querySelector('.booking-container');

    bookNow.addEventListener('click', e=> {
        if(bookNow.classList.contains('back')){
            bookNow.classList.remove('back');
            containerBooking.classList.remove('open');
            bookNow.innerText = "Book now";
            t1.reverse();
        }else{
            bookNow.classList.add('back');
            containerBooking.classList.add('open');
            bookNow.innerText = "Cancel";
            t1.play();
        }
    });

    containerBody.addEventListener('click', e => {
        if(bookNow.classList.contains('back')){
            bookNow.classList.remove('back');
            containerBooking.classList.remove('open');
            bookNow.innerText = "Book now";
            t1.reverse();
        }
    });

    t1.to(".body", {
        ease:"power1.inOut",
        marginTop: 0
    }, 0).to('.booking-container', {
        ease: 'power1.inOut',
        zIndex: 10,
        height: "calc(100% - 90px)"
    },0).to('.method', {
        ease: 'power1.inOut',
        opacity: 1,
        pointerEvents: 'all'
    }, 0).to('.confirm', {
        ease: 'power1.inOut',
        opacity: 1,
        bottom: 20,
    })
}

if(document.querySelector('#scroll')){
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('main'),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

     ScrollTrigger.scrollerProxy("main", {
      	scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : 		locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
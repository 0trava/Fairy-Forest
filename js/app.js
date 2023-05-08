window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
});

// WebGLSampler.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.container',
})

// script.js
document.addEventListener('DOMContentLoaded', () => {
    // GSAP Register Plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        gsap.to(cursorFollower, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
    
    // Magnetic Buttons
    const magneticButtons = document.querySelectorAll('.magnetic-button');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(button, {
                x: x * 0.2,
                y: y * 0.2,
                duration: 0.5,
                ease: 'power2.out'
            });
            
            gsap.to(cursorFollower, {
                width: 80,
                height: 80,
                duration: 0.3
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
            
            gsap.to(cursorFollower, {
                width: 60,
                height: 60,
                duration: 0.3
            });
        });
    });
    
    // Marquee Animation
    const marquees = document.querySelectorAll('.marquee-track');
    
    marquees.forEach(track => {
        const direction = track.parentElement.parentElement.classList.contains('reverse') ? -1 : 1;
        const duration = track.children.length * 2;
        
        gsap.to(track, {
            xPercent: direction * -50,
            duration: duration,
            ease: 'none',
            repeat: -1
        });
    });
    
    // Section Title Animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });
    
    // Portfolio Items Animation
    gsap.utils.toArray('.portfolio-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // Process Cards Animation
    gsap.utils.toArray('.process-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out'
        });
    });
    
    // Service Cards Animation
    gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });
    
    // CTA Section Animation
    const ctaTitle = document.querySelector('.cta-title');
    const ctaSpan = ctaTitle.querySelector('span');
    
    gsap.from(ctaTitle, {
        scrollTrigger: {
            trigger: ctaTitle,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from(ctaSpan, {
        scrollTrigger: {
            trigger: ctaSpan,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        scale: 1.5,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)'
    });
    
    // Contact Items Animation
    gsap.utils.toArray('.contact-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'power3.out'
        });
    });
    
    // Hero Video Animation
    const heroVideo = document.querySelector('.hero video');
    gsap.from(heroVideo, {
        scale: 1.2,
        opacity: 0,
        duration: 2,
        ease: 'power3.out'
    });
    
    // Scroll Indicator Animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    gsap.to(scrollIndicator, {
        y: 20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
});
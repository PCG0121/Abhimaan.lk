document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animations
    const heroContent = document.querySelector(".hero-content");
    const nav = document.querySelector("nav");
    if (heroContent) {
        const heroTl = gsap.timeline();
        
        if (nav) {
            heroTl.fromTo(nav, 
                { y: -100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
            );
        }
        
        heroTl.fromTo(".hero-content > *", 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
            nav ? "-=0.8" : "0"
        );
    }

    // Stats Cards Animation
    if (document.querySelector(".stat-card")) {
        gsap.fromTo(".stat-card", 
            { y: 40, opacity: 0 },
            { 
                scrollTrigger: {
                    trigger: ".stat-card",
                    start: "top 85%",
                },
                y: 0, 
                opacity: 1, 
                duration: 0.8, 
                stagger: 0.1, 
                ease: "back.out(1.7)" 
            }
        );
    }

    // About Section Animation
    gsap.from(".about-image", {
        scrollTrigger: {
            trigger: ".about-image",
            start: "top 75%",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });

    gsap.from(".about-content > *", {
        scrollTrigger: {
            trigger: ".about-content",
            start: "top 75%",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Country Cards Animation handled by CSS reveal
    // Category Cards Animation
    gsap.from(".category-card", {
        scrollTrigger: {
            trigger: "#vacancies",
            start: "top 85%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.4)"
    });

    // Gallery Items Animation
    if (document.querySelector(".gallery-item")) {
        gsap.from(".gallery-item", {
            scrollTrigger: {
                trigger: ".gallery-item",
                start: "top 90%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        });
    }

    // Footer Contact Details Animation
    if (document.querySelector(".lg\\:col-span-2 .grid")) {
        gsap.from(".lg\\:col-span-2 .grid > *", {
            scrollTrigger: {
                trigger: ".lg\\:col-span-2",
                start: "top 95%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });
    }

    // Intersection Observer for Reveal Animations
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // We can keep observing if we want to animate multiple times, but usually once is better
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar Background Change on Scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav div');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-2xl');
            nav.style.backgroundColor = 'rgba(10, 25, 47, 0.9)';
            nav.parentElement.classList.add('py-4');
            nav.parentElement.classList.remove('py-6');
        } else {
            nav.classList.remove('shadow-2xl');
            nav.style.backgroundColor = 'rgba(17, 34, 64, 0.7)';
            nav.parentElement.classList.add('py-6');
            nav.parentElement.classList.remove('py-4');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('nav button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        });

        const closeMenu = () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = 'auto';
        };

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', closeMenu);
        }

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Apply Now Modal Logic
    const applyModal = document.getElementById('apply-modal');
    const applyTriggers = document.querySelectorAll('[data-apply-trigger]');
    const closeApplyModal = document.getElementById('close-modal');
    const applicationForm = document.getElementById('application-form');

    if (applyModal && applyTriggers.length > 0) {
        const openModal = () => {
            applyModal.classList.remove('pointer-events-none', 'opacity-0');
            applyModal.querySelector('.modal-content').classList.remove('scale-95', 'opacity-0');
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            applyModal.classList.add('opacity-0', 'pointer-events-none');
            applyModal.querySelector('.modal-content').classList.add('scale-95', 'opacity-0');
            document.body.style.overflow = 'auto';
        };

        applyTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
                    mobileMenu.classList.add('translate-x-full');
                }
            });
        });

        if (closeApplyModal) {
            closeApplyModal.addEventListener('click', closeModal);
        }

        // Close on backdrop click
        applyModal.querySelector('.modal-backdrop').addEventListener('click', closeModal);

        // Form Submission
        if (applicationForm) {
            applicationForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = applicationForm.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                
                btn.disabled = true;
                btn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Processing...';
                lucide.createIcons();

                setTimeout(() => {
                    applicationForm.innerHTML = `
                        <div class="text-center py-12">
                            <div class="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold">
                                <i data-lucide="check-circle" class="w-12 h-12"></i>
                            </div>
                            <h3 class="text-3xl font-bold text-white mb-4 font-outfit">Application Received!</h3>
                            <p class="text-gray-400 mb-8">Thank you for applying. Our recruitment team will review your profile and contact you shortly.</p>
                            <button type="button" onclick="window.location.reload()" class="btn-gold px-8 py-3 rounded-xl text-brand-dark font-bold">Close</button>
                        </div>
                    `;
                    lucide.createIcons();
                }, 2000);
            });
        }
    }

    // Set Active Nav Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-brand-gold');
            link.classList.remove('hover:text-brand-gold');
        }
    });
});

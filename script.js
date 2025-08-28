
// Smooth scrolling untuk navigasi
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Event listeners untuk navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        } else {
            navbar.style.background = 'rgba(26, 26, 46, 0.9)';
        }
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah dikirim.');
            this.reset();
        });
    }

    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Fungsi untuk mengganti foto - INSTRUKSI PENGGANTIAN FOTO
function changeImage(imageId, newImageUrl) {
    const img = document.getElementById(imageId);
    if (img) {
        img.src = newImageUrl;
    }
}

// CARA MENGGANTI FOTO:
// Untuk mengganti foto profil, gunakan:
// changeImage('profile-img', 'URL_FOTO_BARU');

// Untuk mengganti foto about, gunakan:
// changeImage('about-img', 'URL_FOTO_BARU');

// Untuk mengganti foto project 1, gunakan:
// changeImage('project1-img', 'URL_FOTO_BARU');

// Untuk mengganti foto project 2, gunakan:
// changeImage('project2-img', 'URL_FOTO_BARU');

// Untuk mengganti foto project 3, gunakan:
// changeImage('project3-img', 'URL_FOTO_BARU');

// CONTOH PENGGUNAAN:
// Buka Console di browser (F12), lalu ketik:
// changeImage('profile-img', 'https://link-foto-anda.jpg');

// ATAU edit langsung di HTML pada bagian src="..." di tag img

// Efek typing untuk hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero h2');
    
    if (heroTitle && heroSubtitle) {
        // Ambil nama asli dari HTML
        const originalName = heroTitle.textContent.trim();
        const originalSubtitle = heroSubtitle.textContent.trim();
        
        setTimeout(() => {
            typeWriter(heroTitle, originalName, 150);
        }, 500);
        
        setTimeout(() => {
            typeWriter(heroSubtitle, originalSubtitle, 100);
        }, 2000);
    }
});

// Parallax effect untuk bintang
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const stars = document.querySelector('.stars');
    const stars2 = document.querySelector('.stars2');
    const stars3 = document.querySelector('.stars3');
    
    if (stars) stars.style.transform = `translateY(${rate}px) rotate(-45deg)`;
    if (stars2) stars2.style.transform = `translateY(${rate * 0.8}px) rotate(-45deg)`;
    if (stars3) stars3.style.transform = `translateY(${rate * 0.6}px) rotate(-45deg)`;
});

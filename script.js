document.addEventListener('DOMContentLoaded', function() {
    // Sample artwork data
    const artworks = [
        {
            id: 1,
            title: "Abstract Dreams",
            description: "A vibrant abstract piece exploring the boundaries of color and form. Created with acrylics on canvas, this work represents the artist's journey through dreams and imagination.",
            image: "download.jpeg",
            size: "24 x 36 inches",
            medium: "Acrylic on Canvas",
            price: 450,
            forSale: true
        },
        {
            id: 2,
            title: "Urban Reflections",
            description: "A digital painting capturing the essence of city life through reflective surfaces and dynamic compositions. This piece was created using digital brushes and photo manipulation techniques.",
            image: "Extra Large Wall Art _Vivid Awakening_ - one-a-kind canvas painting 72_36 in, Abstract Face Painting, Colorful Art, Huge Artwork on Canvas.jpeg",
            size: "Digital Print (Various Sizes Available)",
            medium: "Digital Art",
            price: 120,
            forSale: true
        },
        {
            id: 3,
            title: "Serenity in Blue",
            description: "A calming landscape painting featuring tranquil waters and soft skies. This oil painting was created during the artist's residency by the coast, capturing the peaceful moments of dawn.",
            image: "Die junge Künstlerin von Philly, Lindsay Rapp, über weibliche Themen, Wellencrash und.jpeg",
            size: "18 x 24 inches",
            medium: "Oil on Canvas",
            price: 680,
            forSale: true
        },
        {
            id: 4,
            title: "Geometric Harmony",
            description: "A study in balance and precision, this mixed media piece combines geometric shapes with organic textures. The artist explores the relationship between mathematical precision and natural chaos.",
            image: "4.jpeg",
            size: "30 x 30 inches",
            medium: "Mixed Media",
            price: 520,
            forSale: true
        },
        {
            id: 5,
            title: "Whispers of the Forest",
            description: "A surreal interpretation of forest mythology, blending realistic elements with fantastical creatures. This piece was inspired by folklore and created with watercolors and ink.",
            image: "5.jpeg",
            size: "22 x 28 inches",
            medium: "Watercolor and Ink",
            price: 380,
            forSale: true
        },
        {
            id: 6,
            title: "Metropolis",
            description: "A bold graphic representation of urban architecture and human movement. This limited edition screen print captures the energy of the city through stark contrasts and dynamic lines.",
            image: "6.jpeg",
            size: "Limited Edition Print",
            medium: "Screen Print",
            price: 250,
            forSale: true
        },
        {
            id: 7,
            title: "Ocean's Memory",
            description: "An experimental piece using resin and pigments to create depth and movement reminiscent of ocean waves. The layers of resin create a three-dimensional effect that changes with light.",
            image: "8.jpeg",
            size: "20 x 20 inches",
            medium: "Resin Art",
            price: 750,
            forSale: true
        },
        {
            id: 8,
            title: "Cultural Tapestry",
            description: "A celebration of cultural diversity through patterns and symbols from around the world. This intricate piece was hand-painted over several months, incorporating traditional motifs in a contemporary style.",
            image: "9.jpeg",
            size: "36 x 48 inches",
            medium: "Acrylic and Gold Leaf",
            price: 1200,
            forSale: true
        }
    ];

    // DOM Elements
    const galleryContainer = document.querySelector('.gallery-container');
    const shopContainer = document.querySelector('.shop-container');
    const modal = document.querySelector('.artwork-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalImage = document.querySelector('.modal-image');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const modalSize = document.querySelector('.modal-size');
    const modalMedium = document.querySelector('.modal-medium');
    const modalPrice = document.querySelector('.modal-price');
    const purchaseBtn = document.querySelector('.purchase-btn');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const scrollDown = document.querySelector('.scroll-down');

    // Populate Gallery
    function populateGallery() {
        galleryContainer.innerHTML = '';
        artworks.forEach(artwork => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${artwork.image}" alt="${artwork.title}">
                <div class="overlay">
                    <h3>${artwork.title}</h3>
                    <p>${artwork.medium}</p>
                </div>
            `;
            galleryItem.addEventListener('click', () => openModal(artwork));
            galleryContainer.appendChild(galleryItem);
        });
    }

    // Populate Shop
    function populateShop() {
        shopContainer.innerHTML = '';
        artworks.filter(artwork => artwork.forSale).forEach(artwork => {
            const shopItem = document.createElement('div');
            shopItem.className = 'shop-item';
            shopItem.innerHTML = `
                <div class="shop-item-image">
                    <img src="${artwork.image}" alt="${artwork.title}">
                </div>
                <div class="shop-item-info">
                    <h3>${artwork.title}</h3>
                    <div class="shop-item-meta">
                        <span>${artwork.size}</span>
                        <span>${artwork.medium}</span>
                    </div>
                    <div class="shop-item-price">$${artwork.price}</div>
                    <button class="btn shop-item-btn">Purchase</button>
                </div>
            `;
            shopItem.querySelector('.shop-item-btn').addEventListener('click', () => openModal(artwork));
            shopContainer.appendChild(shopItem);
        });
    }

    // Open Modal
    function openModal(artwork) {
        modalImage.src = artwork.image;
        modalImage.alt = artwork.title;
        modalTitle.textContent = artwork.title;
        modalDescription.textContent = artwork.description;
        modalSize.textContent = artwork.size;
        modalMedium.textContent = artwork.medium;
        modalPrice.textContent = `$${artwork.price}`;
        
        if (artwork.forSale) {
            purchaseBtn.style.display = 'block';
            purchaseBtn.textContent = 'Purchase Artwork';
        } else {
            purchaseBtn.style.display = 'none';
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close Modal
    function closeModalFunc() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Scroll Down Button
    scrollDown.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight - 80,
            behavior: 'smooth'
        });
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close Modal Events
    closeModal.addEventListener('click', closeModalFunc);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc();
        }
    });

    // Initialize
    populateGallery();
    populateShop();
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.gallery-item, .shop-item, .about-content, .about-image, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.gallery-item, .shop-item, .about-content, .about-image, .contact-info, .contact-form').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Purchase button functionality
    purchaseBtn.addEventListener('click', () => {
        alert(`Thank you for your interest in purchasing "${modalTitle.textContent}"! Our team will contact you shortly to complete the transaction.`);
        closeModalFunc();
    });
});
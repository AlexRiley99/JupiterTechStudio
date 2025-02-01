document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    const overlay = document.getElementById('overlay');
    const expandedImage = document.getElementById('expandedImage');
    const closeButton = document.getElementById('closeButton');

    // Function to expand an image
    function expandImage(imageSrc) {
        expandedImage.src = imageSrc;
        overlay.style.display = 'flex';
    }

    // Function to close the expanded image
    function closeImage() {
        overlay.style.display = 'none';
    }

    // Add click event to all carousel images
    carousels.forEach((carousel) => {
        const images = carousel.querySelectorAll('.carousel-item');
        images.forEach((image) => {
            image.addEventListener('click', () => {
                expandImage(image.src);
            });
        });
    });

    //Add click event to the close button
    closeButton.addEventListener('click', closeImage);

    //Add click event to the overlay to close the image
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            closeImage();
        }
    });

    carousels.forEach((carousel) => {
        const carouselInner = carousel.querySelector('.carousel-inner');
        const items = carousel.querySelectorAll('.carousel-item');
        const prevButton = carousel.querySelector('.carousel-control.prev');
        const nextButton = carousel.querySelector('.carousel-control.next');
        const dots = carousel.querySelectorAll('.carousel-dots .dot');
        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 100;
            carouselInner.style.transform = `translateX(${offset}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            if (currentIndex < items.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; //Loop back to the first image
            }
            updateCarousel();
        }

        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = items.length - 1; //Loop to the last image
            }
            updateCarousel();
        }

        //Arrow click events
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        //Dot click events
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });

        //Initialize the carousel
        updateCarousel();
    });
});
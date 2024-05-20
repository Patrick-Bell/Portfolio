document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const picture = urlParams.get('image');
    const projectId = urlParams.get('id');
    const techStack = urlParams.get('techStack').split(',');
    const description = urlParams.get('description');
    const features = urlParams.get('features').split(',');
    const improvements = urlParams.get('improvements').split(',');
    const sourceCode = urlParams.get('sourceCode');
    const productionWebsite = urlParams.get('productionWebsite');

    const encodedSampleImages = urlParams.get('sampleImages');
    const decodedSampleImages = decodeURIComponent(encodedSampleImages);
    const sampleImages = JSON.parse(decodedSampleImages);

    const projectWebsite = document.getElementById('project-website');
    projectWebsite.innerHTML = `<a href="${productionWebsite}"><i class="fa-regular fa-hand-point-right"></i> Go to Website</a>`;

    const projectCode = document.getElementById('project-code');
    projectCode.innerHTML = `<a href="${sourceCode}"><i class="fa-regular fa-hand-point-right"></i> Go to Github Code</a>`;

    const projectTitle = document.getElementById('project-title');
    projectTitle.innerHTML = `Project ${projectId} - ${name}`;

    const projectDesc = document.getElementById('project-description');
    projectDesc.innerHTML = description;

    const projectFeatures = document.getElementById('project-features');
    const formattedFeatures = features.map(feature => `<li>${feature}</li>`);
    projectFeatures.innerHTML = formattedFeatures.join('');

    const projectTechStack = document.getElementById('project-techstack');
    const formattedStack = techStack.map(tech => `<li>${tech}</li>`);
    projectTechStack.innerHTML = formattedStack.join('');

    const projectImprovements = document.getElementById('project-improvements');
    const formattedImprovements = improvements.map(improve => `<li>${improve}</li>`);
    projectImprovements.innerHTML = formattedImprovements.join('');

    const length = sampleImages.length;
    console.log(length);

    const swiperWrapper = document.querySelector('.swiper-wrapper');
    let loadedImagesCount = 0;

    function checkAllImagesLoaded() {
        loadedImagesCount++;
        if (loadedImagesCount === sampleImages.length) {
            initializeSwiper();
        }
    }
 
    sampleImages.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        const slideText = document.createElement('div');
        slideText.className = 'slide-text'; // Adding a class for styling
        slideText.innerHTML = `Showing image <strong>${index + 1}</strong> out of <strong>${length}</strong> - ${img.text}`;

        const image = document.createElement('img');
        image.className = 'swiper-img';
        image.src = img.image;
        image.onload = checkAllImagesLoaded;
        image.onerror = checkAllImagesLoaded;

        slide.appendChild(slideText); // Append the text before the image
        slide.appendChild(image);

        swiperWrapper.appendChild(slide);
    });

    function initializeSwiper() {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});

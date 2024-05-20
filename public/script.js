let projects = [
    {
        id: 1,
        name: 'Cointology',
        image: '/images/cointology-mockup.png',
        techStack: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'ExpressJS', 'MongoDB', 'StripeAPI'],
        description: 'Cointology is a full-stack e-commerce platform dedicated to the sales of coins, offering a seamless marketplace for collectors worldwide. Our user-friendly interface and secure backend infrastructure ensure a smooth browsing and purchasing experience, with a diverse range of coins available for sale, including rare and collectible pieces from various and different eras.',
        features: ['Admin dashboard to add/edit/delete products', 
        'Real-time data using Stripe webhooks to update product information such as stock after a successful order', 
        'Checkout functionality using StripeAPI', 
        'Validation that will reject users to proceed to checkout if a stock quantity is higher than the available stock',
        'Cart functionality (adding & removing  cart items)', 
        'Admin login with sample account using passport.js',
        'Filtering and search system for product page', 
        'Contact us section using Nodemailer', 
        'Automatic emails for purchases and status updates (e.g pending/shipped/delivered)', 
        'Validation for contact us form',
        'Shipping options when checking out with Stripe', 
        'Promotion Codes', 
        'Chatbot (currently not working)', 
        'Order page on admin dashboard that shows all orders, sorted in chronological order with filtering',
        'Toasts for adding / removing and out of stock products', 
        'Light and dark mode options on the admin dashboard',
        'Inventory Management & out of stock products',
        'Scheduled emails for low stock items using node-cron'
    ],
        improvements: ['User accounts with order history',
        'Leaving reviews on products'
        ],
        sourceCode: 'https://github.com/Patrick-Bell/test',
        productionWebsite: 'https://test-admin-wdmf.onrender.com',
        warning: 'As websites are hosted on render, they may take up to 60 seconds to load.',
        sampleImages: [
            {image: '/images/cointology.png', text: 'Cointology Logo'},
            {image: '/images/cointology-1.png', text: 'Cointology Home Page'},
            {image: '/images/cointology-2.png', text: 'Cointology Product Page'},
            {image: '/images/cointology-3.png', text: 'Cointology Cart Page'},
            {image: '/images/cointology-4.png', text: 'Cointology Contact Us Page'},
            {image: '/images/cointology-5.png', text: 'Cointology Admin Login Page'},
            {image: '/images/cointology-6.png', text: 'Cointology Admin Product Page (lightmode)'},
            {image: '/images/cointology-7.png', text: 'Cointology Admin Product Page (darkmode)'},
            {image: '/images/cointology-8.png', text: 'Cointology Stripe Checkout Page'},
            {image: '/images/cointology-9.png', text: 'Cointology Admin Order Page'},
            {image: '/images/cointology-10.png', text: 'Cointology Add Product Modal'},
        ],
    },
    {
        id: 2,
        name: 'TimeTicker',
        image: '/images/timeticker-mockup.png',
        techStack: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'ExpressJS', 'MongoDB'],
        description: 'EventTicker is a comprehensive full-stack application designed to empower users in managing and tracking various events seamlessly. Offering a user-friendly interface, it facilitates the creation, deletion, and countdown of events, enabling individuals to stay organized and informed about upcoming occasions. With a focus on user engagement, EventTicker incorporates robust user account functionality, allowing users to register, log in, and personalize their experience. Moreover, users can share their insights and experiences by writing reviews for events, fostering a vibrant community atmosphere. To enhance user engagement and ensure timely event notifications, EventTicker provides automatic email reminders, ensuring that users never miss important milestones. Whether planning personal celebrations, professional engagements, or community gatherings, EventTicker simplifies event management and amplifies user connectivity.',
        features: ['Add / delete events', 
        'Ability to customise the colour of the event',
        'Days left displayed and updated daily',
        'User register and log in authentication using passport.js', 
        'Hashed passwords using becrypt',
        'Functioning review page', 
        'Automatic reminders when events are at 1 day remaining using nodemailer',
        'Events automatically transition from future to past events when they have occured', 
        'Validation'],
        improvements: ['test'],
        sourceCode: 'https://test-admin-wdmf.onrender.com',
        productionWebsite: 'https://test-admin-wdmf.onrender.com',
        sampleImages: [
            {image: '/images/timeticker.png', text: 'TimeTicker Logo'},
            {image: '/images/timeticker-1.png', text: 'TimeTicker Home Page'},
            {image: '/images/timeticker-2.png', text: 'TimeTicker Review Page'},
            {image: '/images/timeticker-3.png', text: 'TimeTicker Login Page'},
            {image: '/images/timeticker-4.png', text: 'TimeTicker Register Page'},
            {image: '/images/timeticker-5.png', text: 'TimeTicker Event Page'},
            {image: '/images/timeticker-6.png', text: 'TimeTicker Profile Page (Write a Review with Validation)'},
        ],
        warning: 'As websites are hosted on render, they may take up to 60 seconds to load.',
    },
    {
        id: 3,
        name: 'Job Portal',
        image: '/images/jobportal-mockup.png',
        techStack: ['HTML', 'CSS', 'JavaScript', "NodeJS", "ExpressJS", "MongoDB"],
        description: 'Job Portal is a full stack application that allows users to apply for jobs by submitting their details and CV. Thew website also possess a comprehensive dashboard to allow admins to monnitor applicants, directly view their CVs, view number of jobs, generate reports and more. Ability to book meetings is possible by implementing calendy to improve productivity.',
        features: ['Submit job applications to jobs',
        'Recieve automatic emails when you apply for a job',
        'Refer a friend',
        'Salary calculator that retreives average salaries for a job title',
        'Contact form with validation',
        'Users can book a meeting via calendy',
        'Job page with filtering system',
        'File upload managed with multer',
        'Admin login using passport.js',
        'Advanced dashboard that shows jobs / referrals /  messages - all with pagination',
        'Admins can add / edit and delete jobs',
        'Ability to generate job reports that can be downloaded and/or printed',
        'Admins can send emails to all unique email subsribers using quill.js',
        'Message page that stores all user messages and can be filtered by name / email / id / month / year and more',
        'Animations throughout (including loading / buttons and more)',
        'FAQ section'
        ],
        improvements: ['test'],
        sourceCode: 'https://test-admin-wdmf.onrender.com',
        productionWebsite: 'https://test-admin-wdmf.onrender.com',
        sampleImages: [
            {image: '/images/techtroop-1.png', text: 'TechTroop Home Page'},
            {image: '/images/techtroop-2.png', text: 'TechTroop Calendy Integration'},
            {image: '/images/techtroop-3.png', text: 'TechTroop Job Page with Filters'},
            {image: '/images/techtroop-4.png', text: 'TechTroop Admin Login Modal'},
            {image: '/images/techtroop-5.png', text: 'TechTroop Admin Page'},
            {image: '/images/techtroop-6.png', text: 'TechTroop Job Details Page'},
            {image: '/images/techtroop-7.png', text: 'TechTroop Job Application Form'},
            {image: '/images/techtroop-8.png', text: 'TechTroop Job Confirmation Page'},
            {image: '/images/techtroop-9.png', text: 'TechTroop Generate Report Page (print / download report)'},
            {image: '/images/techtroop-10.png', text: 'TechTroop Messages Page (with filtering)'},
            {image: '/images/techtroop-11.png', text: 'TechTroop Edit Job Modal'},
            {image: '/images/techtroop-12.png', text: 'TechTroop View Job Applicants (can view CV, Linkedin Profile & more)'},
        ],
        warning: 'As websites are hosted on render, they may take up to 60 seconds to load.',
    },
    {
        id: 4,
        name: 'Wordle',
        image: '/images/wordle-mockup.png',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        description: 'Wordle is a clone from the original, with additional features such as stat tracking and achievements. This was my first project and was undertaken to grasp a solid understanding on basic coding principles such as data structures, data manipulation and algorithms',
        features: ['Animations when words are guessed correctly / incorrectly', 
        'Generates a random word per game', 
        'Tracks user stats (games played / games won / longest win streak etc)', 
        'Ability to earn achievements', 
        'Option to learn more about the chosen word', 
        'Share option to share user stats with friends',
        'Displays time taken to guess word', 
        'Light/Dark mode', 
        'Web/Mobile Reponsive'],
        improvements: ['Include backend server to create user profiles, track badges and stats for each user to create leaderboards and online competitions'],
        sourceCode: 'https://test-admin-wdmf.onrender.com',
        productionWebsite: 'https://test-admin-wdmf.onrender.com',
        sampleImages: [
            {image: '/images/cointology-1.png', text: 'Checkout page'},
            {image: '/images/cointology-2.png', text: 'Checkout page'},
            {image: '/images/cointology-3.png', text: 'Checkout page'},
            {image: '/images/cointology-4.png', text: 'Checkout page'},
            {image: '/images/cointology-5.png', text: 'Checkout page'},
            {image: '/images/cointology-6.png', text: 'Checkout page'},
            {image: '/images/cointology-7.png', text: 'Checkout page'},
            {image: '/images/cointology-8.png', text: 'Checkout page'},
            {image: '/images/cointology-9.png', text: 'Checkout page'},
            {image: '/images/cointology-10.png', text: 'Checkout page'},
        ],
        warning: 'As websites are hosted on render, they may take up to 60 seconds to load.',
    },
]

const renderProjectsOnPage = () => {

    const projectsContainer = document.querySelector('.project-container');
    const projectCard = document.querySelector('.project-card');

    projectsContainer.innerHTML = projects.map(project => {
        const formattedStack = project.techStack.join(', ');
        const formattedDesc = project.description.substring(0, 350) + '...';

        return `<div class="project-card">
        <h2>${project.name}</h2>
        <div class="grid-container">
            <div class="left">
                <img src="${project.image}" alt="">
            </div>
            <div class="right">
                <p>${formattedDesc}<br><br>
                <p>Tech Stack: ${formattedStack}</p><br>
                <div class="button-container">
                    <button><i class="fa-brands fa-github"></i><a href="${project.sourceCode}" target="_blank"> View Code</a></button>
                    <button><i class="fa-solid fa-eye"></i><a href="${project.productionWebsite}" target="_blank"> View Website</a></button>
                    <button class="view" data-project='${JSON.stringify(project)}'><i class="fa-solid fa-circle-info"></i> View More</button>
                    </div>
            </div>
        </div>
        <br><p class="warning"><i class="fa-solid fa-triangle-exclamation"></i> ${project.warning}</p>
    </div>`
    }).join(', ')


    const viewBtns = document.querySelectorAll('.view');
viewBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const project = JSON.parse(event.target.dataset.project); // Use btn instead of event.target
        const encodedSampleImages = encodeURIComponent(JSON.stringify(project.sampleImages));
        const queryParams = new URLSearchParams();
        for (const key in project) {
            if (key !== 'sampleImages') { // Exclude sampleImages from normal parameters
                queryParams.append(key, project[key]);
            }
        }
        queryParams.append('sampleImages', encodedSampleImages); // Append encoded sampleImages
        const queryString = queryParams.toString();
        window.location.href = `/projects?${queryString}`;
    });
});

    



}


renderProjectsOnPage()
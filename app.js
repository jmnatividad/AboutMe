//for populating the ul of about me projects
//add first all the html layout for the li's
const ulAbout = document.querySelector('.ul-about');

const data = [
    
    {
        "Title" : "Trifecta Exacta",
        "Date" : "2023",
        "Description" : "Trifecta Exacta is a prototype game developed using Unity 3d engine. Working as the development lead for the project and handled programming of the physics and events in the game, also troubleshooting and quality testing the game.",
        "Overview" : "Jul 2018 - Mar 2019. 2D PC game. C#, Unity Engine.",
        "image1" : "",
        "image2" : ""
    },
    {
        "Title" : "Jeric Flower shop website",
        "Date" : "2023",
        "Description" : "This website is personal project that is a ecomerce type website developed using Laravel and Mysql as the backend. Fullstack developing the website and overseeing the perfect design for the website output",
        "Overview" : "2023. Website . Php, Mysql, Javascript, Laravel.",
        "image1" : "",
        "image2" : ""
    },
    {
        "Title" : "Mystery Camsur",
        "Date" : "2022",
        "Description" : "Mystery Camsur is a 2d game developed using unity engine using C#, it is a finding the missing object game where the player is given a set of missing objects in silhouette and has a timer to find all the missing objects. Handled all the programming for the codes and events, worked with a graphic designer for the in game assets.",
        "Overview" : "2022 - 2023. 2D mobile game. C#, Unity Engine.",
        "image1" : "Img/Portfolio/Games/MysteryCamsurMenu.png",
        "image2" : "Img/Portfolio/Games/MysteryCamsurGame.png",
    },
    {
        "Title" : "Visit Camsur",
        "Date" : "2022",
        "Description" : "Visit Camsur is a mobile application developed using React Native and Supabase as the backend, Colaboratively working in a team handling the Front end development and Api integration of facebook and Google for the acount creation. Visit Camsur is an app that aims to showcase the beaty of each tourist spots in Camarine sur.",
        "Overview" : "Dec 2022 - april 2023. Mobile application. Typescript, Tailwind css, Supabase, React Nativd and Supabase.",
        "image1" : "Img/Portfolio/MobileApp/VisitCamsur.png",
        "image2" : ""
    },
    {
        "Title" : "Adventure of Anatoly Sokolov",
        "Date" : "2019",
        "Description" : "Adventure of Anatoly Sokolov is a 3d side scrolling game, it was developed using Unity 3D. Handled all the programming for the controlls and events in the game. Assets are from a unity assets store and are free.",
        "Overview" : "Aug - December, 2019. 3D PC game. C#, Unity Engine.",
        "image1" : "Img/Portfolio/Games/Adventure_Menu.png",
        "image2" : "",
    },
    {
        "Title" : "Operation Time",
        "Date" : "2019",
        "Description" : "Operation time is a 2D game developed with Unity engine. It is a fighting game that has a story and stages for enemies. Developed the entire game and asssets to be used in it and the codes for the events and functions for the game ",
        "Overview" : "Jul 2018 - Mar 2019. 2D mobile game. C#, Unity Engine.",
        "image1" : "",
        "image2" : ""
    },
    
];

data.forEach(entry => {
    ulAbout.insertAdjacentHTML('beforeend', `
        <li>
            <div class="About-Me">
                <div class="date" id="date">${entry.Date}</div>
                <div class="box boxhide">
                    <div class="about-item">
                        <span class="text-about1">${entry.Title}</span>
                        <span class="text-about2">${entry.Description}</span>
                        <span class="text-about3">${entry.Overview}</span>
                    </div>
                    <div class="About-image">
                        <div><img src="${entry.image1}" alt="" class="box-img" id="image"></div>
                        <div><img src="${entry.image2}" alt="" class="box-img" id="image"></div>
                    </div>
                </div>
            </div>
        </li>
    `);
});


//after putting all  the li's run the animation and script for the respective events
const boxes = document.querySelectorAll('.boxhide');
const dates = document.querySelectorAll('.date');

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(boxhide => {
        const boxTop = boxhide.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            boxhide.classList.add('show');
        } else {
            boxhide.classList.remove('show');
        }
    });

    dates.forEach(boxhide => {
        const boxTop = boxhide.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            boxhide.classList.add('dateshow');
        } else {
            boxhide.classList.remove('dateshow');
        }
    });
}

window.addEventListener('scroll', checkBoxes);

// // For populating the ul of about me projects
// fetch('data.json')
//     .then(response => response.json())
//     .then(data => {
//         // Sort the data by Date property in descending order (latest date first)
//         data.sort((a, b) => new Date(b.Date) - new Date(a.Date));

        
//     })
//     .catch(error => console.error('Error loading JSON data:', error));

                                
                          




window.addEventListener('scroll', function() {
    // Calculate the current scroll position
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the height of the entire document
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );

    // Calculate a threshold (e.g., 10 pixels from the bottom)
    const threshold = 10;

    // Select elements with the class "bottom-scrolling"
    const bottomScrolling = document.querySelectorAll('.bottom-scrolling');

    // Check if you've reached the bottom of the page
    if (scrollPosition + window.innerHeight >= documentHeight - threshold) {
        bottomScrolling.forEach(bottomtxt => {
            bottomtxt.classList.add('hideText'); // Corrected class name
        });
    } else {
        bottomScrolling.forEach(bottomtxt => {
            bottomtxt.classList.remove('hideText'); // Corrected class name
        });
    }
});








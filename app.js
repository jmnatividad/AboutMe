// //for populating the ul of about me projects
// //add first all the html layout for the li's
// const ulAbout = document.querySelector('.ul-about');

// // For populating the ul of about me projects
// fetch('data.json')
//     .then(response => response.json())
//     .then(data => {
//         // Sort the data by Date property in descending order (latest date first)
//         data.sort((a, b) => new Date(b.Date) - new Date(a.Date));

//         data.forEach(entry => {
//             ulAbout.insertAdjacentHTML('beforeend', `
//                 <li>
//                     <div class="About-Me">
//                         <span class="date" id="date">${entry.Date}</span>
//                         <div class="box boxhide">
//                             <div class="about-item">
//                                 <span class="text-about1">${entry.Title}</span>
//                                 <span class="text-about2">${entry.Description}</span>
//                                 <span class="text-about3">${entry.Overview}</span>
//                             </div>
//                             <div class="About-image">
//                                 <div><img src="${entry.image}" alt="" class="" id="image"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </li>
//             `);
//         });

//         //after putting all  the li's run the animation and script for the respective events
//         const boxes = document.querySelectorAll('.boxhide');
//         const dates = document.querySelectorAll('.date');
        
//         function checkBoxes() {
//             const triggerBottom = window.innerHeight / 5 * 4;
        
//             boxes.forEach(boxhide => {
//                 const boxTop = boxhide.getBoundingClientRect().top;
//                 if (boxTop < triggerBottom) {
//                     boxhide.classList.add('show');
//                 } else {
//                     boxhide.classList.remove('show');
//                 }
//             });
        
//             dates.forEach(boxhide => {
//                 const boxTop = boxhide.getBoundingClientRect().top;
//                 if (boxTop < triggerBottom) {
//                     boxhide.classList.add('dateshow');
//                 } else {
//                     boxhide.classList.remove('dateshow');
//                 }
//             });
//         }
        
//         window.addEventListener('scroll', checkBoxes);
//     })
//     .catch(error => console.error('Error loading JSON data:', error));

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






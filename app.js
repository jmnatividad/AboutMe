const boxes = document.querySelectorAll('.boxhide');
const dates = document.querySelectorAll('.date');

window.addEventListener('scroll', checkBoxes);


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






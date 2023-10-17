const boxes = document.querySelectorAll('.boxhide');
window.addEventListener('scroll',checkBoxes);

 function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 2.5;

    boxes.forEach(boxhide => {
        const boxTop = boxhide.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            boxhide.classList.add('show');
        }else{
            boxhide.classList.remove('show');
        }
    })
 }
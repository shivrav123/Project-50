let box = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
    let triggerBottom = (window.innerHeight/5*4);
    console.log(triggerBottom);

    box.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top
        console.log(boxTop)
        
        if(boxTop < triggerBottom) {
            box.classList.add("active");
        } else {
            box.classList.remove("active");
        }
    })
}

checkBoxes();

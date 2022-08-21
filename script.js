const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll' , scrollbox)

function scrollbox(){

    const triggerbox = window.innerHeight/5*2;
    console.log(triggerbox);

    boxes.forEach(box=>{
        const boxsize = box.getBoundingClientRect().top
        if(boxsize<triggerbox)
        {
            box.classList.add('show');

        }
        else{
            box.classList.remove('show');
        }
    })
}
const tema = document.getElementById('tema');
const observer = new IntersectionObserver(entries => {

    Array.from(entries).forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.add('init-hidden-off')
        }
    })
}, {
    threshold: 1
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
});

function lightDark (i){
    if ( i == 1){
        container.style.backgroundColor = "white";
        container.style.color = 'black'; 
    } else if (i == 0) {
        document.getElementById("tema").src="./images/sun.svg";
        container.style.backgroundColor = "black";
        container.style.color = 'white';  
    }
}

// tema.addEventListener('click', light);
lightDark.addEventListener('click', lightDark);


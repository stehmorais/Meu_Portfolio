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

var imagem = window.document.getElementById('sunMoon')
var container = window.document.getElementById('container')
tema.addEventListener('click', lightDark)

function lightDark() {
    if (container.style.background == 'black') {
        imagem.src = './images/moon.svg'
    } else {
        container.style.background = 'black'
        imagem.src = './images/sun.svg'
    }
}


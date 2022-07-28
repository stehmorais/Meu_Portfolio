const moon = document.getElementById('')
const container = document.getElementById('container')

function light () {
    container.style.backgroundColor = 'white';
}


chk.addEventListener('click', light);

const observer = new IntersectionObserver(entries => {
   

    Array.from(entries).forEach( entry => {
        if (entry.intersectionRatio >=1){
            entry.target.classList.add('init-hidden-off')
        }
    })
},{
    threshold: 1
})

Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
    observer.observe(element)
});  


    
    
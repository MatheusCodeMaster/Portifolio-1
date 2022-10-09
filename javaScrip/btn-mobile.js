const btnMobile=document.getElementById('btn-mobile');
function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const nav=document.getElementById('nav');
    nav.classList.toggle('active')
    
    const main=document.getElementById('main');
    main.classList.toggle('active2')
    const header=document.getElementById('header');
    header.classList.toggle('active3')
    const active = header.classList.contains('active3')
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label' ,'Fechar Menu');
    } else{
        event.currentTarget.setAttribute('aria-label' ,'Abrir Menu');
    }
}
btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);
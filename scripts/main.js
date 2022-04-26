// change navbar color when scrolling
window.addEventListener('scroll', () =>
{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
    // if we want it to scroll after 100px heaight we can do window.scrollY > 100
})

// toggle the faqs question and answer
var faqs = document.querySelectorAll('.faq');
// var faqs = [...faqsItems];
faqs.forEach(faq => {
    
    faq.addEventListener('click', () =>
    {
        faq.classList.toggle('open');
        // change icon to minus
        var icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    })
});

// toggle menu on small screens
var menu = document.querySelector('.nav__menu');
var openBtn = document.querySelector('#open-menu-btn');
var closeBtn = document.querySelector('#close-menu-btn');

openBtn.addEventListener('click', () =>
{
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none';
})

closeBtn.addEventListener('click', () =>
{
    menu.style.display = 'none';
    openBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})



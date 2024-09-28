window.addEventListener('scroll', function () 
{
    const target = document.getElementById('changeBg');
    const target2 = document.getElementById('chBg');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        target.classList.add('scrolled');
        target2.classList.add('invert');
    } else {
        target.classList.remove('scrolled');
        target2.classList.remove('invert');
    }

    document.querySelectorAll('.ch').forEach((e) => {

        if (scrollPosition > 100) {

            e.classList.add('wh');
        } else {
            e.classList.remove('wh');

        }

    });
});
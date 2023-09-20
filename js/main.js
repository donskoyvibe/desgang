document.getElementById('menuBtn').addEventListener('click', function () {
    const headerInner = document.querySelector('.header__inner');
    const menuBtn = document.getElementById('menuBtn');
    const body = document.body;

    if (headerInner.classList.contains('header__inner--active')) {
        headerInner.style.height = '90px';
        body.classList.remove('body--active');
    } else {
        headerInner.style.height = 'auto';
        const headerHeight = headerInner.clientHeight;
        headerInner.style.height = '90px';
        setTimeout(() => {
            headerInner.style.height = headerHeight + 'px';
            body.classList.add('body--active');
        }, 0);
    }
    headerInner.classList.toggle('header__inner--active');
    menuBtn.classList.toggle('active');
});
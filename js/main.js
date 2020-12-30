
let burger = document.querySelector( 'nav' ),
    aboutPage = document.getElementById( 'about-page' );

burger.addEventListener( 'click', () => {
    aboutPage.classList.toggle( 'active' );
});
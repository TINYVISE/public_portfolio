
// burger page

let burger = document.querySelector( 'nav' ),
    aboutPage = document.getElementById( 'about-page' );

burger.addEventListener( 'click', () => {
    aboutPage.classList.toggle( 'active' );
});

// gallery home

let homeTiles = document.querySelectorAll( '#gallery-home > div' );

homeTiles.forEach( function( item ) {
    item.addEventListener( 'click', ( e ) => {
        galleryProject.classList.add( 'open' );
    });
});

// gallery project

let galleryProject = document.getElementById( 'gallery-project' );
let galleryProjectClose = document.getElementById( 'gallery-project-close' );

galleryProjectClose.addEventListener( 'click', ( e ) => {
    galleryProject.classList.remove( 'open' );
});

// header

const  header = document.querySelector( 'header' );

function changeOnScroll( el, cssclass ) {

    window.onscroll = function() {
        var top = window.scrollY;
        if( top >= 100 ) {
            el.classList.add( cssclass );
        } else {
            el.classList.remove( cssclass );
        }
    }
}

changeOnScroll( header, 'active' );
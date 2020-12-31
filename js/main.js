
// burger page

let burger = document.querySelector( 'nav' ),
    aboutPage = document.getElementById( 'about-page' );

burger.addEventListener( 'click', () => {
    aboutPage.classList.toggle( 'active' );
});

// gallery home

let homeTiles = document.querySelectorAll( '#gallery-home > div' );
let dump = document.getElementById( 'dump' );

homeTiles.forEach( function( item ) {
    item.addEventListener( 'click', ( e ) => {
        galleryProject.classList.add( 'open' );
        dump.innerHTML = item.dataset.layout;
        if( item.dataset.layout === 'gallery' ) {
            galleryBuilder( 15 );
        }
        
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

// gallery builder

// let dump = document.getElementById( 'dump' );

function galleryBuilder( num_of_slides ) {
    
    let gridWrapper = document.createElement( 'div' );
    gridWrapper.setAttribute( 'class', 'gallery-wrapper' );
    for( let i = 0; i < num_of_slides; i++ ) {
        let slideDiv = document.createElement( 'div' );
        slideDiv.setAttribute( 'class', 'slide' );
        gridWrapper.appendChild( slideDiv );
    }

    dump.appendChild( gridWrapper );
}
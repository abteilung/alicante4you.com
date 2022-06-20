import AOS from 'aos';
AOS.init();

import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();



// Include Jarallax Video
// import { jarallax, jarallaxVideo } from 'jarallax';

// jarallax();
// jarallaxVideo();




// Include Lightbox 
import BigPicture from 'bigpicture'


;(function() {
    // four image gallery
    var imageLinks = document.querySelectorAll('[data-bp]')
    for (var i = 0; i < imageLinks.length; i++) {
        imageLinks[i].addEventListener('click', function(e) {
            e.preventDefault()
            BigPicture({
                el: e.target,
                gallery: 'main',
                animationStart: function () {
                    document.documentElement.style.overflowY = 'hidden'
                    document.body.style.overflowY = 'scroll'
                },
                onClose: function () {
                    document.documentElement.style.overflowY = 'auto'
                    document.body.style.overflowY = 'auto'
                },
            })
        })
    }

})()

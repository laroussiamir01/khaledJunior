"use strict";


jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

    /*---------------------------------------------*
     * Portfolio Pop Up Animation
     ---------------------------------------------*/

    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    /*---------------------------------------------*
     * Menu Section
     ---------------------------------------------*/

    // Open menu
$('.cd-menu-trigger').on('click', function (event) {
  event.preventDefault();
  $('#main-nav').addClass('is-visible');
  $('.cd-menu-trigger').addClass('hide');
  $('.cd-shadow-layer').addClass('is-visible');
});

// Close menu
$('.cd-close-menu').on('click', function (event) {
  event.preventDefault();
  $('#main-nav').removeClass('is-visible');
  $('.cd-menu-trigger').removeClass('hide');
  $('.cd-shadow-layer').removeClass('is-visible');
});

// Handle clicks on menu items
$('#main-nav a').on('click', function (event) {
  // Close the menu when a menu item is clicked
  $('#main-nav').removeClass('is-visible');
  $('.cd-menu-trigger').removeClass('hide');
  $('.cd-shadow-layer').removeClass('is-visible');
  // You can add any additional code here to handle the clicked menu item
});


    //clipped image - blur effect
    set_clip_property();
    $(window).on('resize', function () {
        set_clip_property();
    });

    function set_clip_property() {
        var $header_height = $('.cd-header').height(),
                $window_height = $(window).height(),
                $header_top = $window_height - $header_height,
                $window_width = $(window).width();
        $('.cd-blurred-bg').css('clip', 'rect(' + $header_top + 'px, ' + $window_width + 'px, ' + $window_height + 'px, 0px)');
    }
    $('#main-nav a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        $('.home-main-content').removeClass('move-out');
        $('#main-nav').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible');
        $('body,html').animate(
                {'scrollTop': target.offset().top},
        900
                );
    });


    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

//    $.localScroll();



    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/

//    $('.statistic-counter').counterUp({
//        delay: 10,
//        time: 2000
//    });




    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

//        var wow = new WOW({
//            mobile: false // trigger animations on mobile devices (default is true)
//        });
//        wow.init();


    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

//    $('.testimonials').owlCarousel({
//        responsiveClass: true,
//        autoplay: false,
//        items: 1,
//        loop: true,
//        dots: true,
//        autoplayHoverPause: true
//
//    });


    //End
});
// Assuming you have language-specific content wrapped in appropriate elements
const languageElements = document.querySelectorAll('.lang');

// Function to switch language based on selected option
function switchLanguage(event) {
  event.preventDefault();
  const selectedLang = this.getAttribute('data-lang');

  // Update language for each language-specific element
  languageElements.forEach((element) => {
    // Retrieve language-specific content based on selected language
    const content = element.getAttribute(`data-lang-${selectedLang}`);
    element.textContent = content;
  });
}

// Attach event listeners to language menu options
const languageOptions = document.querySelectorAll('.language-menu a');
languageOptions.forEach((option) => {
  option.addEventListener('click', switchLanguage);
});


const navItems = document.querySelectorAll('#main-nav li');

navItems.forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});


// liste de langue

document.addEventListener('DOMContentLoaded', function() {
  const languageSelectContainer = document.querySelector('.language-select-container');
  const selectedLanguage = languageSelectContainer.querySelector('.selected-language p');
  const selectedLanguageImg = languageSelectContainer.querySelector('.selected-language img');
  const languageOptions = languageSelectContainer.querySelectorAll('.language-options li');

  languageOptions.forEach(option => {
    option.addEventListener('click', function() {
      const languageValue = this.getAttribute('data-value');
      const languageText = this.querySelector('p').textContent;
      const languageImg = this.querySelector('img').getAttribute('src');

      selectedLanguage.textContent = languageText;
      selectedLanguageImg.setAttribute('src', languageImg);

      // You can use the "languageValue" variable to handle language selection in your application
    });
  });
});
function scrollToBottom() {
  const contentHeight = document.getElementById('team').offsetTop; // Obtient la position de la section #team
  window.scrollTo({
    top: contentHeight,
    behavior: 'smooth'
  });
}

// Fonction pour faire défiler la page vers le haut
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Fonction pour attacher un gestionnaire d'événement au clic sur l'image
function attachScrollEvent() {
  const imageElement = document.getElementById('about-photo');
  if (imageElement) {
    imageElement.addEventListener('click', function() {
      const contentHeight = document.getElementById('team').offsetTop;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY + windowHeight >= contentHeight) {
        // Si la page est terminée, faites défiler vers le haut
        scrollToTop();
      } else {
        // Si la page n'est pas terminée, faites défiler vers le bas
        scrollToBottom();
      }
    });
  }
}

// Attachez l'événement une fois que le contenu de la page est chargé
document.addEventListener('DOMContentLoaded', attachScrollEvent);

// Fonction pour faire défiler la page vers le bas
function scrollToBottom() {
  const contentHeight = document.getElementById('team').offsetTop; // Remplacez 'team' par l'ID de la section où vous souhaitez faire défiler la page
  window.scrollTo({
    top: contentHeight,
    behavior: 'smooth'
  });
}

// Fonction pour faire défiler la page vers le haut
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Fonction pour attacher un gestionnaire d'événement au clic sur l'image
function attachScrollEvent() {
  const imageElement = document.querySelector('.scroll-down-container img');
  if (imageElement) {
    imageElement.addEventListener('click', function() {
      const contentHeight = document.getElementById('team').offsetTop; // Remplacez 'team' par l'ID de la section où vous souhaitez faire défiler la page
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      if (scrollY + windowHeight >= contentHeight) {
        // Si la page est terminée, faites défiler vers le haut
        scrollToTop();
      } else {
        // Si la page n'est pas terminée, faites défiler vers le bas
        scrollToBottom();
      }
    });
  }
}

// Attachez l'événement une fois que le contenu de la page est chargé
document.addEventListener('DOMContentLoaded', attachScrollEvent);


// Obtenir les éléments DOM
/*
//Modal1
var modal = document.getElementById("myModal");
var text = document.getElementById("openModalText");
var span = document.getElementsByClassName("close")[0];

// Ouvrir la fenêtre modale lorsque l'utilisateur clique sur le texte
text.onclick = function() {
  modal.style.display = "block";
}

// Fermer la fenêtre modale lorsque l'utilisateur clique sur le bouton de fermeture
span.onclick = function() {
  modal.style.display = "none";
}

// Fermer la fenêtre modale si l'utilisateur clique en dehors de celle-ci
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/



/*traduchtion langue*/
// Détecter le changement de langue
document.querySelector(".language-options").addEventListener("click", function(event) {
  const selectedLanguage = event.target.parentElement.getAttribute("data-value");
  translateContent(selectedLanguage);
});

// Fonction pour traduire le contenu
function translateContent(language) {
  const elementsToTranslate = document.querySelectorAll(".lang");
  
  elementsToTranslate.forEach(element => {
      const translationKey = element.getAttribute(`data-lang-${language}`);
      if (translationKey) {
          element.textContent = translations[translationKey][language];
      }
  });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Exemple d'objet JSON de traduction (à remplacer par vos propres traductions)

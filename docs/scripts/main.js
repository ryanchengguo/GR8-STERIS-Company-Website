(function() {
    'use strict';
    // Your custom JavaScript goes here

    /**
     * narbar
     */
    $('.ui.navbar .search-icon > i')
        .click(function() {
            let icon = $(this)
            if (icon.text() === 'search') {
                icon.text('close').parents('.content').addClass('searching')
            } else {
                icon.text('search').parents('.content').removeClass('searching')
            }
        })

    /**
     *  sidebar
     */
    $('.ui.sidebar')
        .sidebar('setting', 'dimPage', false)
        .sidebar('attach events', '.ui.navbar .menu-icon')
        .sidebar('attach events', '.ui.sidebar .close-icon')

    $('.ui.navbar .menu')
        .clone()
        .appendTo('.ui.sidebar')

    /**
     *  slick carousel
     */
    $('.ui.hero.carousel')
        .slick({
          autoplay: true,
          autoplaySpeed: 4000,
            // arrows: false,
            // prevArrow: '<button type="button" class="ui prev button"><i class="material-icons">chevron_left</i></button>'
            // nextArrow: '<button type="button" class="ui prev button"><i class="material-icons">chevron_right</i></button>'
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  dots: true
                }
              }
            ]
        })


    $('.ui.picture .ui.carousel.for')
      .slick({
        asNavFor: '.ui.picture .ui.carousel.nav',
        arrows: false,
        slidesToShow: 1
      })
    $('.ui.picture .ui.carousel.nav')
      .slick({
        asNavFor: '.ui.picture .ui.carousel.for',
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        // slidesToScroll: 1,
        dots: true,
        centerMode: true,
        // prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
        // nextArrow: '<button class="ui prev button"><i class="material-icons">chevron_right</i></button>'
        // responsive: [
        //   {
        //     breakpoint: 767,
        //     setting: {
        //       slidesToShow: 1
        //     }
        //   }
        // ]
      })
})();

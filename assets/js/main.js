jQuery(document).ready(function () {

  $('.header__mobile-search-btn').click(function () {
    $('.header__search').toggleClass('show');
  });

  $('.header__mobile-btn-menu').click(function () {
    $('.header-main-menu').addClass('open');
    $('.overlay').addClass('show');
  });

  $('.header__menu-toolbar-btn-close').click(function () {
    $('.header-main-menu').removeClass('open');
    $('.overlay').removeClass('show');
  });

  $('.overlay').click(function () {
    $('.header-main-menu').removeClass('open');
    $('.overlay').removeClass('show');
  });

  $('.header__menu-list .menu-item.menu-item-has-children').click(function () {
    $('.header__menu-list .menu-item .sub-menu').slideToggle();
    $('.header__menu-list .menu-item.menu-item-has-children').toggleClass('active');
  });

  $('.slider__banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        }
      },
    ]
  });

  $('.feedback__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Tab Content
  $('ul.product__description-tabs li.product__description-tabs-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.product__description-tabs li.product__description-tabs-link').removeClass('active');
		$('.product__description-tab-content').removeClass('show');

		$(this).addClass('active');
		$("#"+tab_id).addClass('show');
	})

})
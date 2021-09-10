(function () {
  'use strict';
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  var fullHeight = function () {
    $('.js-fullheight').css('height', $(window).height());

    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  };

  var contentWayPoint = function () {
    var i = 0;
    $('.animate-box').waypoint(
      function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated')) {
          i++;
          $(this.element).addClass('item-animate');

          setTimeout(function () {
            $('body .animate-box.item-animate').each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data('animate-effect');
                  if (effect === 'fadeIn') {
                    el.addClass('fadeIn animated');
                  } else if (effect === 'fadeInLeft') {
                    el.addClass('fadeInLeft animated');
                  } else if (effect === 'fadeInRight') {
                    el.addClass('fadeInRight animated');
                  } else {
                    el.addClass('fadeInUp animated');
                  }
                  el.removeClass('item-animate');
                },
                k * 200,
                'easeInOutExpo'
              );
            });
          }, 100);
        }
      },
      {
        offset: '85%',
      }
    );
  };

  var burgerMenu = function () {
    $('.js-nav-toggle').on('click', function (event) {
      event.preventDefault();
      var $this = $(this);

      if ($('body').hasClass('offcanvas')) {
        $this.removeClass('active');
        $('body').removeClass('offcanvas');
      } else {
        $this.addClass('active');
        $('body').addClass('offcanvas');
      }
    });
  };

  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $('#aside, .js-nav-toggle');

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas')) {
          $('body').removeClass('offcanvas');
          $('.js-nav-toggle').removeClass('active');
        }
      }
    });

    $(window).scroll(function () {
      if ($('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-nav-toggle').removeClass('active');
      }
    });
  };

  var sliderMain = function () {
    $('#hero .flexslider').flexslider({
      animation: 'fade',
      slideshowSpeed: 5000,
      directionNav: true,
      start: function () {
        setTimeout(function () {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide')
            .find('.slider-text')
            .addClass('animated fadeInUp');
        }, 500);
      },
      before: function () {
        setTimeout(function () {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide')
            .find('.slider-text')
            .addClass('animated fadeInUp');
        }, 500);
      },
    });
  };

  var stickyFunction = function () {
    var h = $('.image-content').outerHeight();

    if ($(window).width() <= 992) {
      $('#sticky_item').trigger('sticky_kit:detach');
    } else {
      $('.sticky-parent').removeClass('stick-detach');
      $('#sticky_item').trigger('sticky_kit:detach');
      $('#sticky_item').trigger('sticky_kit:unstick');
    }

    $(window).resize(function () {
      var h = $('.image-content').outerHeight();
      $('.sticky-parent').css('height', h);

      if ($(window).width() <= 992) {
        $('#sticky_item').trigger('sticky_kit:detach');
      } else {
        $('.sticky-parent').removeClass('stick-detach');
        $('#sticky_item').trigger('sticky_kit:detach');
        $('#sticky_item').trigger('sticky_kit:unstick');
        $('#sticky_item').stick_in_parent();
      }
    });

    $('.sticky-parent').css('height', h);
    $('#sticky_item').stick_in_parent();
  };

  $(function () {
    fullHeight();
    contentWayPoint();
    burgerMenu();
    mobileMenuOutsideClick();
    sliderMain();
    stickyFunction();
  });
})();

$('body').magnificPopup({
  delegate: 'a.lightbox',
  type: 'image',
  removalDelay: 300,
  image: {
    titleSrc: 'title',
    gallery: {
      enabled: true,
    },
  },
  iframe: {
    markup:
      '<div class="mfp-iframe-scaler">' +
      '<div class="mfp-close"></div>' +
      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      '<div><div class="mfp-title mfp-bottom-iframe-title animate-box fadeInLeft animated" data-animate-effect="fadeInLeft"></div>' +
      `<div class="mfp-bottom-iframe-share"><ul id="shr-bttns" class="shr animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">  <a      href="https://www.facebook.com/sharer/sharer.php?u={{ site.url }}{{ site.baseurl }}{{ page.url }}"      onclick="window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"      title="Partilhar no Facebook"><li class="facebook">    <i class="fab fa-facebook-f"></i></li>    </a><a      href="https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.url }}{{ site.baseurl }}{{ page.url }}"      onclick="window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"      title="Partilhar no Twitter"><li class="twitter"><i class="fab fa-twitter"></i></li></a><a      href="https://www.linkedin.com/shareArticle?mini=true&url={{ site.url }}{{ site.baseurl }}{{ page.url }}&title={{ page.title }}&summary={{ page.description }}&source={{ site.title }}"      onclick="window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"      title="Partilhar no LinkedIn"><li class="linkedin"><i class="fab fa-linkedin-in"></i></li></a><a      href="http://www.reddit.com/submit?url={{ site.url }}{{ site.baseurl }}{{ page.url }}"      onclick="window.open(this.href, 'pop-up', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;"      title="Partilhar no Reddit"><li class="reddit"><i class="fab fa-reddit-alien"></i></li></a><a      href="mailto:?subject={{ page.title }}&amp;body={{ site.url }}{{ site.baseurl }}{{ page.url }}"      title="Partilhar por Email"      ><li class="email"><i class="fas fa-envelope"></i    ></li></a>  </ul></div></div>` +
      '</div>',
    patterns: {
      youtube: {
        index: 'youtube.com/',
        id: null,
        src: '%id%?autoplay=1',
      },
    },
    srcAction: 'iframe_src',
  },
  callbacks: {
    markupParse: function (template, values, item) {
      values.title = item.el.attr('title');
      values.url = item.el.attr('url');

      const _title = values.title.replace('#', '%23');
      const _url = values.url.replace('?', '%3F').replace('=', '%3D');

      const facebook = `https://www.facebook.com/sharer/sharer.php?u=${_url}`;
      template.find('li.facebook a').prop('href', facebook);

      const twitter = `https://twitter.com/intent/tweet?text=${_title}&url=${_url}`;
      template.find('li.twitter a').prop('href', twitter);

      const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${_url}&title=${_title}&summary=Description&source=${_title}`;
      template.find('li.linkedin a').prop('href', linkedin);

      const reddit = `http://www.reddit.com/submit?url=${_url}`;
      template.find('li.reddit a').prop('href', reddit);

      const email = `mailto:?subject=${_title}&body=${_url}`;
      template.find('li.email a').prop('href', email);
    },
  },
});

$('.ajax-page-load-link').magnificPopup({
  type: 'ajax',
  removalDelay: 300,
  mainClass: 'mfp-fade',
  gallery: {
    enabled: true,
  },
});

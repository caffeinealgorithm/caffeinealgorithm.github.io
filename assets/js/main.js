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
  // Full Height
  var fullHeight = function () {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
      $('.js-fullheight').css('height', $(window).height());
    });
  };
  // Animations
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
  // Burger Menu
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
  // Click outside of offcanvass
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
  // Slider
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
  // Sticky
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
  // Document on load.
  $(function () {
    fullHeight();
    contentWayPoint();
    burgerMenu();
    mobileMenuOutsideClick();
    sliderMain();
    stickyFunction();
  });
})();

// Lightbox init
$('body').magnificPopup({
  delegate: 'a.lightbox',
  type: 'image',
  removalDelay: 300,

  // Class that is added to popup wrapper and background
  // make it unique to apply your CSS animations just to this exact popup
  mainClass: 'mfp-fade',
  image: {
    // options for image content type
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
      `<div class="mfp-bottom-iframe-share"><ul id="share-buttons" class="share animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">  <li class="facebook">    <a      href="https://www.facebook.com/sharer/sharer.php?u={{ site.url }}{{ site.baseurl }}{{ page.url }}"      onclick="window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"      title="Partilhar no Facebook">      <i class="fab fa-facebook-f"></i>    </a>  </li>  <li class="twitter">    <a      href="https://twitter.com/intent/tweet?text={{ page.title }}&url={{ site.url }}{{ site.baseurl }}{{ page.url }}"      onclick="window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"      title="Partilhar no Twitter">      <i class="fab fa-twitter"></i>    </a>  </li>  <li class="linkedin">    <a      href="https://www.linkedin.com/shareArticle?mini=true&url={{ site.url }}{{ site.baseurl }}{{ page.url }}&title={{ page.title }}&summary={{ page.description }}&source={{ site.title }}"      onclick="window.open(this.href, 'pop-up', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"      title="Partilhar no LinkedIn">      <i class="fab fa-linkedin-in"></i>    </a>  </li>  <li class="reddit">    <a      href="http://www.reddit.com/submit?url={{ site.url }}{{ site.baseurl }}{{ page.url }}"      onclick="window.open(this.href, 'pop-up', 'left=20,top=20,width=900,height=500,toolbar=1,resizable=0'); return false;"      title="Partilhar no Reddit">      <i class="fab fa-reddit-alien"></i>    </a>  </li>  <li class="email">    <a      href="mailto:?subject={{ page.title }}&amp;body={{ site.url }}{{ site.baseurl }}{{ page.url }}"      title="Partilhar por Email"      ><i class="fas fa-envelope"></i    ></a>  </li></ul></div></div>` +
      '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

    patterns: {
      youtube: {
        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

        id: null, // String that splits URL in a two parts, second part should be %id%
        // Or null - full URL will be returned
        // Or a function that should return %id%, for example:
        // id: function(url) { return 'parsed id'; }

        src: '%id%?autoplay=1', // URL that will be set as a source for iframe.
      },
    },

    srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
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
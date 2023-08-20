/* --------------------------------
*  Vue.js
* -------------------------------- */
const app = new Vue({
  el: '#app',

  components: {
    'app-liquid': httpVueLoader('assets/components/app-liquid.vue'),
  },
});


/* --------------------------------
*  hamburgerMenu
* -------------------------------- */
$(function () {
  const headerHamburger = $('#hamburger');
  const headerNav = $('#headerNav');
  const headerNavLinks = $('#headerNav ul li a');

  headerHamburger.on('click', function () {
    $(this).toggleClass('active');
    headerNav.toggleClass('active');
  })

  headerNavLinks.on('click', function () {
    headerHamburger.removeClass('active');
    headerNav.removeClass('active');
  })
});


/* --------------------------------
*  lowerContent
* -------------------------------- */
$(function () {
  const headerHeight = $('#header').innerHeight()
  $('#main').css('margin-top', headerHeight);
  $('section:not(.contact)').css('padding-top', (headerHeight + 50));
});


/* --------------------------------
*  scrollsView
* -------------------------------- */
$(function () {
  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();
    const header = $('#header');
    const firstBottom = $('#first').height();

    if (firstBottom < scrollTop) {
      header.addClass('view');
    } else {
      header.removeClass('view');
    }

    const teacher = $('#teacher');
    const assistant = $('#assistant');
    const counselor = $('#counselor');
    const assTop = $('#assistantText').offset().top;
    const couTop = $('#counselorText').offset().top;
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    handle(mediaQuery);

    mediaQuery.addListener(handle);

    function handle(e) {
      if (e.matches) {
        if (assTop - 500 > scrollTop) {
          teacher.addClass('view');
          assistant.removeClass('view');
        } else if (assTop - 500 < scrollTop && couTop - 500 > scrollTop) {
          teacher.removeClass('view');
          assistant.addClass('view');
          counselor.removeClass('view');
        } else if (couTop - 500 < scrollTop) {
          assistant.removeClass('view');
          counselor.addClass('view');
        }
      } else {
        if (assTop - 300 > scrollTop) {
          teacher.addClass('view');
          assistant.removeClass('view');
        } else if (assTop - 300 < scrollTop && couTop - 300 > scrollTop) {
          teacher.removeClass('view');
          assistant.addClass('view');
          counselor.removeClass('view');
        } else if (couTop - 300 < scrollTop) {
          assistant.removeClass('view');
          counselor.addClass('view');
        }
      }
    }
  })
});


/* --------------------------------
*  modalWindow
* -------------------------------- */
$(function () {
  const body = $('body');
  const modal = $('#modal');
  const modalContent = $('.modal__content');

  $('.modalOpen').on('click', function () {
    body.addClass('active');
    modal.addClass('active');

    const target = $(this).data('target');
    $('#' + target).addClass('active');
  });

  $('.modalClose').on('click', function () {
    body.removeClass('active');
    modal.removeClass('active');
    modalContent.removeClass('active');
  });

  $(document).on('click', function (e) {
    if ($(e.target).is('#modal')) {
      body.removeClass('active');
      modal.removeClass('active');
      modalContent.removeClass('active');
    }
  });
});

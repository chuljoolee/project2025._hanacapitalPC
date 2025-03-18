!(function (v, w) {
  'use strict';
  function y() {
    var e = (i = w('.js-history-nav')).find('.history-nav-item'),
      s = i.find('.history-nav-item.is-active'),
      t = i.find('.history-nav-button.is-back'),
      i = i.find('.history-nav-button.is-next');
    0 === s.index()
      ? (t.prop('disabled', !0), i.prop('disabled', !1))
      : s.index() === e.length - 1
      ? (t.prop('disabled', !1), i.prop('disabled', !0))
      : (t.prop('disabled', !1), i.prop('disabled', !1));
  }
  function C() {
    var e, s, t, i, a;
    w('.js-history-nav').length &&
      ((e = (a = w('.js-history-nav')).find('.history-nav-list')),
      (t = a.find('.history-nav-box')),
      (s = (a = a.find('.history-nav-item.is-active')).index()),
      (t = t.offset().top),
      (i = a.offset().top),
      3 * (a = a.outerHeight(!0)) <= i - t
        ? e.css({ transform: 'translateY(' + -a * (s - 2) + 'px)' })
        : i - t < 0 &&
          e.css({ transform: 'translateY(' + (i - t) * s + 'px)' }));
  }
  new Swiper('.business-swiper.swiper', {
    centeredSlidesBounds: !0,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (e) {
        return '0' + e;
      },
      formatFractionTotal: function (e) {
        return '0' + e;
      },
    },
    breakpoints: {
      320: { slidesPerView: 1.1978, spaceBetween: 15, centeredSlides: !1 },
      769: {
        slidesPerView: 1.5023,
        spaceBetween: 80,
        slideToClickedSlide: !0,
        speed: 900,
        centerInsufficientSlides: !1,
        centeredSlides: !0,
      },
    },
  });
  w(v).on('scroll', function () {
    var i, a, o, n, e, r, l, c, d, t, h, s, p, f, u, g, m, b;
    C(),
      w('.section-archive').length &&
        ((f = w(v).scrollTop()),
        (u = w(v).height()),
        (g = w('.js-history-nav')),
        (e = w('.section-title')),
        (s = w('.section-history-message')),
        (p = w('.section-archive')),
        (e = e.outerHeight()),
        (s = s.outerHeight()),
        (p = p.offset().top),
        e + s - u / 4 < f && f < p - (3 * u) / 4
          ? g.fadeIn(300)
          : g.fadeOut(300)),
      (i = w(v).height()),
      (a = w(v).scrollTop()),
      (o = w('.header').outerHeight()),
      w('.section-history').each(function () {
        var e = w(this).offset().top,
          s = w(this).outerHeight(),
          t = w(this).attr('id'),
          e = e - o - i / 2;
        e <= a &&
          a < e + s &&
          (w('.js-history-nav .history-nav-item').removeClass('is-active'),
          w('.js-history-nav .history-nav-link[href="#' + t + '"]')
            .parents('.history-nav-item')
            .addClass('is-active'));
      }),
      y(),
      (n = w(v).scrollTop()),
      (e = w('.js-timeline')),
      (r = w('.header').outerHeight() || 0),
      e.each(function () {
        var e = w(this).offset().top,
          s = w(this).outerHeight(),
          t = w(this).find('.year-pc'),
          i = t.outerHeight(),
          a = e - r,
          s = a + s - i;
        a < n && n < s
          ? t.css({ top: n - (e - r), bottom: 'auto' })
          : n < a
          ? t.css({ top: 0, bottom: 'auto' })
          : s < n && t.css({ top: 'auto', bottom: 0 });
      }),
      e.find('.timeline-list').each(function () {
        var e = w(this).offset().top,
          s = w(this).outerHeight(),
          e = e - r - 32;
        e < n && n < e + s
          ? (w(this).removeClass('is-active-render'),
            w(this).addClass('is-active'),
            (s = (e = w(this).data('year').toString()).slice(0, 2)),
            (e = e.slice(2)),
            w(this)
              .parents('.timeline')
              .find('.year-pc')
              .html(s + '<em>' + e + '</em>'))
          : 0 !=
              w(this)
                .parents('.js-timeline')
                .find('.year-pc')
                .css('top')
                .split('px')[0] && w(this).removeClass('is-active');
      }),
      (l = w(v).width()),
      (c = w(v).height()),
      (d = w(v).scrollTop()),
      w('.js-history-image').each(function () {
        var e = w(this).offset().top,
          s = w(this).outerHeight(),
          s = e - (c - s),
          t = e - c;
        (s = 1600 < l ? e - c / 2 : s) < d
          ? w(this).find('.history-image').addClass('is-show')
          : d < t && w(this).find('.history-image').removeClass('is-show');
      }),
      w('.section-archive').length &&
        ((t = w(v).outerHeight(!0)),
        (h = w(v).scrollTop()),
        (s = w('.history-nav-mo')),
        (f = w('.section-title')),
        (p = w('.section-history')),
        (u = w('.section-archive')),
        (f = f.outerHeight()),
        (u = u.offset().top),
        f < h && h < u - t / 2
          ? s.fadeIn(300)
          : (s.fadeOut(300),
            s.find('.history-dropdown').removeClass('is-expanded')),
        p.each(function () {
          var e = w(this).offset().top,
            s = w(this).outerHeight(),
            e = e - t / 2;
          e < h &&
            h < e + s &&
            ((e = w(this).attr('id')),
            w('.history-nav-mo .dropdown-item').removeClass('is-active'),
            w('.history-nav-mo .history-period[href="#' + e + '"]')
              .parents('.dropdown-item')
              .addClass('is-active'));
        })),
      w('.section-history-message').length &&
        ((g = w(v).outerHeight(!0)),
        (m = w(v).scrollTop()),
        (b = w('.section-history-message')).offset().top - g / 2 < m) &&
        b.find('.txt-message').addClass('is-show');
  }),
    w(v).on('load', function () {
      var t, e, i, s, a;
      C(),
        (s = w('.js-history-nav')),
        (a = s.find('.history-nav-button')),
        (t = s.find('.history-nav-item')),
        (s = s.find('.history-nav-link')),
        a.on('click', function () {
          w(this).hasClass('is-back') &&
            w('.history-nav-item.is-active')
              .removeClass('is-active')
              .prev('.history-nav-item')
              .addClass('is-active'),
            w(this).hasClass('is-next') &&
              w('.history-nav-item.is-active')
                .removeClass('is-active')
                .next('.history-nav-item')
                .addClass('is-active'),
            C(),
            y(),
            w('.history-nav-item.is-active .history-nav-link').click();
        }),
        s.on('click', function (e) {
          e.preventDefault();
          var e = w('.header').outerHeight() || 0,
            s = w(w(this).attr('href')),
            e = s.offset().top - e;
          s.find('.history-image').removeClass('is-show'),
            t.removeClass('is-active'),
            w(this).parents('.history-nav-item').addClass('is-active'),
            y(),
            w(v).scrollTop(e);
        }),
        (e = w('.js-timeline')),
        (a = e.find('.timeline-event-item.has-image')),
        w(v).width() <= 1600 ||
          a
            .on('mouseenter', function () {
              w(this).parents('.timeline-item').addClass('is-hover');
            })
            .on('mouseleave', function () {
              e.find('.timeline-item').removeClass('is-hover');
            }),
        (i = w('.header').outerHeight() || 0),
        (s = w('.history-dropdown .dropdown-button')),
        (a = w('.history-dropdown .dropdown-layer .history-period')),
        s.on('click', function () {
          w(this).parents('.history-dropdown').toggleClass('is-expanded');
        }),
        a.on('click', function (e) {
          e.preventDefault();
          var e = w(w(this).attr('href')),
            s = e.find('.history-info').offset().top,
            t = s - i - 30,
            t = w(v).scrollTop() < t ? s - 30 : s - i - 30;
          e.find('.history-image').removeClass('is-show'),
            w(this)
              .parents('.dropdown-item')
              .addClass('is-active')
              .siblings()
              .removeClass('is-active'),
            w(v).scrollTop(t);
        }),
        w('body').on('click', function (e) {
          0 == w(e.target).closest('.dropdown-button').length &&
            w('.history-dropdown').removeClass('is-expanded');
        });
    });
})(window, window.jQuery),
  (function (o, n) {
    'use strict';
    gsap.registerPlugin(ScrollTrigger);
    function s(e) {
      e.preventDefault();
    }
    function e() {
      n('.factory-device-swiper').length &&
        n(o).outerWidth() <= 768 &&
        (i = new Swiper('.factory-device-swiper', {
          slidesPerView: 'auto',
          spaceBetween: 15,
          navigation: {
            nextEl: '.factory-device-swiper .btn-next',
            prevEl: '.factory-device-swiper .btn-prev',
          },
        }));
    }
    function t() {
      n('.js-banner-animate').length &&
        n('.js-banner-animate').each(function () {
          n(this).offset().top <= n(o).scrollTop() + n(o).height() &&
            n('.js-banner-animate').addClass('is-animate');
        });
    }
    function r(e, s) {
      e
        .find('.js-product-process-name-list .product-process-name-item')
        .eq(s)
        .addClass('active')
        .siblings()
        .removeClass('active'),
        e
          .find('.js-product-process-info-list .product-process-info-item')
          .eq(s)
          .addClass('is-active')
          .siblings()
          .removeClass('is-active');
    }
    function l(e, s, t, i) {
      n('.js-factory-detail-floor').removeClass('is-show'),
        n(e).addClass('is-show'),
        n(e)
          .find('.js-factory-detail-floor-select')
          .removeAttr('class')
          .addClass(i),
        ((i = n(e).find(
          `.js-factory-detail-floor-select img[data-floor-select=${s}]`
        )).hasClass('only-pc') || i.hasClass('only-mo')
          ? 768 < n(o).outerWidth()
            ? n(e).find(
                `.js-factory-detail-floor-select img[data-floor-select=${s}].only-pc`
              )
            : n(e).find(
                `.js-factory-detail-floor-select img[data-floor-select=${s}].only-mo`
              )
          : i
        )
          .attr('aria-hidden', 'false')
          .siblings()
          .attr('aria-hidden', 'true'),
        n('.js-floor-btn').removeClass('is-selected'),
        n(`.js-floor-btn[data-floor-room=${s}]`).addClass('is-selected'),
        n(e).find('.js-text-floor-name').html(t);
    }
    function c(e) {
      n.scrollLock(!0),
        n('.js-layer-factory-diagram').show(),
        n('#layer-' + e)
          .addClass('is-show')
          .siblings()
          .removeClass('is-show');
    }
    function d() {
      var e = n('.js-factory-tab-item').eq(0),
        s = '#' + e.find('.js-factory-tab-btn').attr('aria-controls');
      e.find('.js-factory-tab-btn').attr('aria-selected', 'true'),
        e
          .siblings()
          .children('.js-factory-tab-btn')
          .attr('aria-selected', 'false'),
        (768 < n(window).outerWidth()
          ? n('.factory-detail-process.only-pc')
          : n('.factory-detail-process.only-mo')
        )
          .find(s)
          .addClass('is-show')
          .siblings()
          .removeClass('is-show');
    }
    function h() {
      var e;
      n('.js-history-swiper').length &&
        ((e = 0),
        n('.js-history-swiper .history-item:odd .history-content').each(
          function () {
            n(this).outerHeight() > e && (e = n(this).outerHeight());
          }
        ),
        n('.js-history-swiper .history-item:even .history-content').css(
          'margin-top',
          e
        ),
        n('.js-history-swiper .line').css('top', e),
        n('.js-history-swiper .history-item:odd').height(e));
    }
    function p() {
      1366 <= n(o).outerWidth()
        ? n('.factory-detail-diagram').removeClass('is-mo').addClass('is-pc')
        : n('.factory-detail-diagram').removeClass('is-pc').addClass('is-mo');
    }
    function f() {
      var e;
      n('.js-banner-animate:last-child').length &&
        ((e = n('.js-banner-animate:last-child').offset().top),
        gsap.to(n('.js-banner-animate'), 2, { top: -e, ease: 'none' }));
    }
    var i,
      a,
      u = !1,
      g =
        (n(document).on(
          'mouseenter',
          '.factory-detail-diagram.is-pc .js-floor-focus',
          function () {
            var e, s;
            n(this).hasClass('is-clicked') ||
              ((e = n(this).data('floor-select')),
              n('.js-floor-focus').removeClass('is-clicked'),
              n(this)
                .parent()
                .find('.js-factory-detail-floor-select')
                .removeAttr('class')
                .addClass(
                  `factory-detail-floor-select js-factory-detail-floor-select ${e} is-show`
                ),
              ((s = n(this)
                .parent()
                .find(
                  `.js-factory-detail-floor-select img[data-floor-select=${e}]`
                )).hasClass('only-pc') || s.hasClass('only-mo')
                ? 768 < n(o).outerWidth()
                  ? n(this)
                      .parent()
                      .find(
                        `.js-factory-detail-floor-select img[data-floor-select=${e}].only-pc`
                      )
                  : n(this)
                      .parent()
                      .find(
                        `.js-factory-detail-floor-select img[data-floor-select=${e}].only-mo`
                      )
                : s
              )
                .attr('aria-hidden', 'false')
                .siblings()
                .attr('aria-hidden', 'true'),
              n(this)
                .parent()
                .find('.js-text-floor-name')
                .html(n(this).data('floor-name')));
          }
        ),
        n(document).on(
          'mouseleave',
          '.factory-detail-diagram.is-pc .js-floor-focus',
          function () {
            var e;
            n(this).hasClass('is-clicked') ||
              ((e = n(this).data('floor-select')),
              n(`.js-floor-btn[data-floor-room=${e}]`).hasClass(
                'is-selected'
              )) ||
              n(this)
                .parent()
                .find('.js-factory-detail-floor-select')
                .removeClass(e + ' is-show');
          }
        ),
        n(document).on('click', function (e) {
          n('.js-factory-dropdown-btn').length &&
            0 == n(e.target).closest('.js-factory-dropdown').length &&
            (n('.js-factory-dropdown-btn').removeClass('is-active'),
            n('.js-factory-dropdown-lst').removeClass('is-show'));
        }),
        0 < n('.js-banner-animate:last-child').length &&
          (n('.js-banner-animate:last-child').offset().top,
          n('.js-banner-animate:last-child').outerHeight(!0)),
        0 < n('.js-banner-animate:last-child').length &&
          n('.js-banner-animate:last-child').offset().top);
    n(o).on('wheel', function (e) {
      n('.js-banner-animate:last-child').length &&
        0 !== e.originalEvent.deltaY &&
        0 < e.originalEvent.deltaY &&
        (n('.js-banner-animate:last-child').css('top').split('px')[0] <= -g ||
          (window.addEventListener('wheel', s, { passive: !1 }),
          gsap.to(n('.js-banner-animate'), 2.4, {
            top: -g,
            ease: 'power2.out',
            onUpdate: function () {
              n('.js-banner-animate:last-child').css('top').split('px')[0] <=
                -(g - 80) &&
                (n('.js-animate-box-fade').addClass('is-show'),
                window.removeEventListener('wheel', s));
            },
          })));
    });
    n(o).on('resize', function () {
      a && clearTimeout(a),
        (a = setTimeout(function () {
          768 < n(o).outerWidth()
            ? i &&
              (i.destroy(!0, !0),
              n('.factory-device-swiper').removeAttr('style'),
              n('.factory-device-swiper .swiper-slide').removeAttr('style'))
            : e(),
            h(),
            d(),
            p(),
            768 < n(o).outerWidth()
              ? 'false' ==
                  n('.js-factory-detail-floor-select img.only-mo').attr(
                    'aria-hidden'
                  ) &&
                n('.js-factory-detail-floor-select img.only-pc')
                  .attr('aria-hidden', 'false')
                  .siblings()
                  .attr('aria-hidden', 'true')
              : 'false' ==
                  n('.js-factory-detail-floor-select img.only-pc').attr(
                    'aria-hidden'
                  ) &&
                n('.js-factory-detail-floor-select img.only-mo')
                  .attr('aria-hidden', 'false')
                  .siblings()
                  .attr('aria-hidden', 'true');
        }, 100));
    }),
      n(o).on('scroll', function () {
        t(),
          n('.js-banner-animate:last-child').length &&
            0 < n(o).scrollTop() &&
            (n('.js-animate-box-fade').addClass('is-show'),
            768 < n(o).outerWidth() ||
              gsap.to(n('.js-banner-animate'), 1.8, {
                top: '-=' + n(o).scrollTop() / 1.5,
                ease: 'power2.out',
              }));
      }),
      n(o).on('load', function () {
        var i, a;
        n('.js-animate-opacity').each(function (e, s) {
          var t = n(this)
            .text()
            .trim()
            .split(' ')
            .map((e) => "<span class='fade-opacity'>" + e + '</span>')
            .join(' ');
          n(this).html(t);
        }),
          (i = 0 < n('.section-about-factory').length ? 0 : 1.25),
          (a = 0 < n('.section-about-factory').length ? 0.1 : 0.2),
          n('.js-animate-box-fade').each(function (e, s) {
            var t = n(this).find('.fade-opacity');
            gsap.context(function (e) {
              e.add(function () {
                gsap.to(n(t), {
                  opacity: 1,
                  delay: i,
                  duration: 0.4,
                  ease: 'none',
                  stagger: a,
                });
              });
            });
          }),
          n('.factory-product-swiper').length &&
            new Swiper('.factory-product-swiper', {
              resistanceRatio: 0,
              grabCursor: !0,
              observer: !0,
              scrollbar: { el: '.swiper-scrollbar', draggable: !0 },
              freeMode: !0,
              slidesPerView: 4,
              breakpoints: {
                320: { slidesPerView: 'auto', spaceBetween: 12 },
                769: { slidesPerView: 4, spaceBetween: 24 },
              },
            }),
          // s: 240923 異붽�
          new Swiper('.factory-process-swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
          });

        // e:// 240923 異붽�
        e(),
          t(),
          0 < n('.js-product-process').length &&
            n('.js-product-process').each(function () {
              var e = n(this)
                  .find('.js-product-process-image-list')
                  .clone()
                  .children()
                  .removeClass('is-default image-slide-active')
                  .addClass('prev'),
                s = n(this)
                  .find('.js-product-process-image-list')
                  .clone()
                  .children()
                  .removeClass('is-default image-slide-active')
                  .addClass('next'),
                e = [
                  ...e,
                  ...n(this).find('.js-product-process-image-list').children(),
                  ...s,
                ];
              n(this).find('.js-product-process-image-list').append(e),
                n(this)
                  .find('.product-process-image-item.image-slide-active')
                  .prev()
                  .addClass('image-slide-prev'),
                n(this)
                  .find('.product-process-image-item.image-slide-active')
                  .next()
                  .addClass('image-slide-next');
            }),
          n('.product-process-image-item').on('click', function () {
            var e, s;
            u ||
              ((e = n(this).parents('.js-product-process'))
                .find('.product-process-image-item')
                .addClass('has-transition'),
              e
                .find('.product-process-image-item')
                .removeClass(
                  'image-slide-prev image-slide-active image-slide-next'
                ),
              n(this).prev().addClass('image-slide-prev'),
              n(this).next().addClass('image-slide-next'),
              n(this).addClass('image-slide-active'),
              r(e, n(this).data('number')),
              n(this).hasClass('is-default')) ||
              ((s = this),
              (u = !0),
              setTimeout(function () {
                e
                  .find('.product-process-image-item')
                  .removeClass('has-transition'),
                  e
                    .find('.product-process-image-item')
                    .removeClass(
                      'image-slide-prev image-slide-active image-slide-next'
                    ),
                  e
                    .find(`.is-default:eq(${n(s).attr('data-number')})`)
                    .addClass('image-slide-active'),
                  e
                    .find(`.is-default:eq(${n(s).attr('data-number')})`)
                    .prev()
                    .addClass('image-slide-prev'),
                  e
                    .find(`.is-default:eq(${n(s).attr('data-number')})`)
                    .next()
                    .addClass('image-slide-next'),
                  (u = !1);
              }, 800));
          }),
          n('.product-process-name-item a').on('click', function (e) {
            e.preventDefault(),
              u ||
                ((e = n(this).parents('.js-product-process'))
                  .find('.product-process-image-item')
                  .addClass('has-transition'),
                n(this)
                  .parents('.product-process-name-item')
                  .addClass('active')
                  .siblings()
                  .removeClass('active'),
                e
                  .find('.product-process-image-item')
                  .removeClass([
                    'image-slide-active',
                    'image-slide-next',
                    'image-slide-prev',
                  ]),
                e
                  .find(
                    `.product-process-image-item.is-default:eq(${n(this)
                      .parents('.product-process-name-item')
                      .index()})`
                  )
                  .addClass('image-slide-active'),
                e
                  .find(
                    `.product-process-image-item.is-default:eq(${n(this)
                      .parents('.product-process-name-item')
                      .index()})`
                  )
                  .next()
                  .addClass('image-slide-next'),
                e
                  .find(
                    `.product-process-image-item.is-default:eq(${n(this)
                      .parents('.product-process-name-item')
                      .index()})`
                  )
                  .prev()
                  .addClass('image-slide-prev'),
                r(e, n(this).parent().index()),
                (u = !0),
                setTimeout(function () {
                  u = !1;
                }, 600));
          }),
          n('.js-factory-dropdown-btn').on('click', function () {
            n(this).toggleClass('is-active'),
              n(this)
                .parent()
                .children('.js-factory-dropdown-lst')
                .toggleClass('is-show');
          }),
          n('.js-factory-dropdown-lst .factory-dropdown-option').on(
            'click',
            function () {
              var e = '#' + n(this).attr('aria-controls'),
                s = n(this).text();
              n(this)
                .attr('aria-selected', 'true')
                .parent()
                .siblings()
                .children('.factory-dropdown-option')
                .attr('aria-selected', 'false'),
                n(this)
                  .parents('.js-factory-dropdown')
                  .find('.js-factory-dropdown-btn')
                  .toggleClass('is-active')
                  .text(s),
                n(this)
                  .parents('.factory-detail-tab-content')
                  .find('.factory-tab-panel')
                  .hide(),
                n(e).show(),
                n(this)
                  .parents('.js-factory-dropdown-lst')
                  .toggleClass('is-show');
            }
          ),
          n('.js-btn-play-factory').on('click', function () {
            n(this).parent().hide(),
              n(this)
                .parents('.factory-detail-video-ratio')
                .find('.video')
                .show()
                .trigger('play');
          }),
          n('.js-floor-btn').on('click', function () {
            var e = n(this).data('floor'),
              s = n(this).data('floor-room'),
              t = n(this).data('floor-name'),
              i =
                'factory-detail-floor-select js-factory-detail-floor-select is-show ' +
                s;
            n('.js-floor-btn').removeClass('is-selected'),
              n(this).addClass('is-selected'),
              l(e, s, t, i),
              0 != n(this).data('haspopup') &&
                setTimeout(function () {
                  c(s);
                }, 300);
          }),
          new Swiper('.js-swiper-factory-layer', {
            navigation: {
              nextEl: '.swiper-btn-next',
              prevEl: '.swiper-btn-prev',
            },
            observeParents: !0,
            observer: !0,
            loop: !0,
            autoplay: !1,
            slidesPerView: 1,
            on: {
              init: function (e) {
                var s = n(e.el).find('.swiper-slide').length;
                n(e.el)
                  .find('.total')
                  .text(s < 10 ? '0' + s : s);
              },
              slideChange: function (e) {
                n(e.el).find('.swiper-slide').length <= 1 ||
                  n(e.el)
                    .find('.current')
                    .text(
                      9 < e.realIndex + 1
                        ? e.realIndex + 1
                        : '0' + (e.realIndex + 1)
                    );
              },
            },
          }),
          n('.js-layer-factory-change-content').on('click', function () {
            var e = n(this).data('target'),
              s = n(`.js-floor-btn[data-floor-room=${e}]`),
              t = s.data('floor'),
              i = s.data('floor-room'),
              a = s.data('floor-name'),
              o =
                'factory-detail-floor-select js-factory-detail-floor-select is-show ' +
                i;
            n('.js-floor-btn').removeClass('is-selected'),
              s.addClass('is-selected'),
              l(t, i, a, o),
              n('#layer-' + e)
                .addClass('is-show')
                .siblings()
                .removeClass('is-show');
          }),
          n(
            '.js-layer-factory-diagram .js-layer-dim, .js-layer-factory-diagram .btn-close'
          ).on('click', function (e) {
            e.preventDefault(),
              n.scrollLock(!1),
              n('.js-floor-btn').removeClass('is-selected'),
              n('.js-factory-detail-floor.is-show')
                .find('.js-factory-detail-floor-select')
                .removeAttr('class')
                .addClass(
                  'factory-detail-floor-select js-factory-detail-floor-select'
                ),
              n('.js-floor-focus').removeClass('is-clicked'),
              n(this).parents('.js-layer-factory-diagram').hide();
          }),
          n('.js-history-swiper').length &&
            new Swiper('.js-history-swiper', {
              slidesPerView: 'auto',
              resistanceRatio: 0,
              grabCursor: !0,
              observer: !0,
            }),
          h(),
          n('.js-factory-tab-btn').on('click', function (e) {
            e.preventDefault();
            e = '#' + n(this).attr('aria-controls');
            console.log(e),
              n(this)
                .attr('aria-selected', 'true')
                .parent('.js-factory-tab-item')
                .siblings()
                .children('.js-factory-tab-btn')
                .attr('aria-selected', 'false'),
              (768 < n(window).outerWidth()
                ? n('.factory-detail-process.only-pc')
                : n('.factory-detail-process.only-mo')
              )
                .find(e)
                .addClass('is-show')
                .siblings()
                .removeClass('is-show');
          }),
          d(),
          p(),
          n(document).on(
            'click',
            '.factory-detail-diagram .js-floor-focus',
            function (e) {
              var s, t, i;
              e.preventDefault(),
                0 != n(this).data('haspopup') &&
                  (n(this).addClass('is-clicked'),
                  (s = n(this).data('floor-select')),
                  (t = (e = n(`.js-floor-btn[data-floor-room=${s}]`)).data(
                    'floor'
                  )),
                  (i = e.data('floor-room')),
                  (e = e.data('floor-name')),
                  l(
                    t,
                    i,
                    e,
                    'factory-detail-floor-select js-factory-detail-floor-select is-show ' +
                      i
                  ),
                  n(o).outerWidth() <= 1366
                    ? setTimeout(function () {
                        c(s);
                      }, 300)
                    : c(s));
            }
          ),
          0 < n('.factory-detail-intro').length &&
            (n(o).scrollTop() <
              n('.factory-detail-intro').offset().top +
                n('.factory-detail-intro').outerHeight(!0) &&
              window.addEventListener('wheel', s, { passive: !1 }),
            n(o).scrollTop() > n('.factory-detail-intro').offset().top &&
              768 < n(o).outerWidth() &&
              (n('.js-animate-opacity .fade-opacity').css('opacity', '1'), f()),
            n(o).scrollTop() >
              n('.factory-detail-intro').offset().top + n(o).height() &&
              (n('.js-animate-opacity .fade-opacity').css('opacity', '1'), f()),
            setTimeout(function () {
              n(o).outerWidth() <= 768 &&
                n(o).scrollTop() >= n(o).height() &&
                n('.js-animate-opacity .fade-opacity').css('opacity', '1');
            }, 50));
      });
  })(window, window.jQuery),
  (function (a, o) {
    'use strict';
    function n(e) {
      var s = 'is-active',
        t = 'is-selected',
        i = o(e).attr('aria-controls'),
        t =
          (o('.btn-brand-tab[aria-controls=' + i + ']')
            .attr('aria-selected', !0)
            .parents('.brand-tab-item')
            .addClass(s)
            .siblings('.brand-tab-item')
            .removeClass(s)
            .children('.btn-brand-tab')
            .attr('aria-selected', !1),
          o('.btn-selected[aria-controls=' + i + ']')
            .attr('aria-selected', !0)
            .parents('.select-item')
            .addClass(t)
            .siblings('.select-item')
            .removeClass(t)
            .children('.btn-selected')
            .attr('aria-selected', !1),
          o(e).parents('.select-item.is-selected').data('value'));
      l(t),
        o('#' + i)
          .addClass(s)
          .siblings('.brand-tab-content')
          .removeClass(s);
    }
    function r(e) {
      var s = o(e).data('value'),
        t = o('.js-check-sort .selected-cur');
      o(t).text(s),
        o(t).attr('data-selected', s),
        (o(e).hasClass('sort-link') && o(e).not('.selected-cur')
          ? (o(e)
              .parents('.product-sort-item')
              .addClass('is-selected')
              .siblings('.product-sort-item')
              .removeClass('is-selected'),
            o('.js-check-sort .select-item[data-value=' + s + ']')
              .addClass('is-selected')
              .siblings('.select-item'))
          : (o(e).parents('.select-wrap').removeClass('is-selecting'),
            o(e)
              .addClass('is-selected')
              .siblings('.select-item')
              .removeClass('is-selected'),
            o('.js-check-sort .sort-link[data-value=' + s + ']')
              .parents('.product-sort-item')
              .addClass('is-selected')
              .siblings('.product-sort-item'))
        ).removeClass('is-selected');
    }
    var l = function (e) {
      var s = o('.js-brand-select .btn-selected-cur');
      s.text(e), s.attr('data-selected', e);
    };
    o(a).on('load', function () {
      var e, s, t, i;
      (s = (s = o('.js-product-accordion')).find('.product-btn-accordion'))
        .length &&
        s.on('click', function (e) {
          var e = o(e.currentTarget),
            s = 'true' === e.attr('aria-expanded') || !1;
          e.attr('aria-expanded', !s),
            e
              .parent('.product-accordion-item')
              .toggleClass('is-show')
              .find('.accordion-content-wrap')
              .stop()
              .slideToggle();
        }),
        o('.swiper-tabs').length &&
          new Swiper('.swiper-tabs', {
            slidesPerView: 'auto',
            resistanceRatio: 0,
            on: {
              init: function (e) {
                var s = o(this.el).find('.swiper-slide.is-active').index();
                e.slideTo(s);
              },
            },
          }),
        o('.keyword-swiper').length &&
          new Swiper('.keyword-swiper', {
            resistanceRatio: 0,
            breakpoints: {
              320: {
                slidesPerView: 'auto',
                spaceBetween: 12,
                centerInsufficientSlides: !1,
              },
              769: {
                slidesPerView: 4,
                spaceBetween: 24,
                centerInsufficientSlides: !0,
                grabCursor: !0,
                observer: !0,
              },
            },
          }),
        o('.brand-introduction .btn-more').hasClass('is-show') &&
          o('.brand-introduction .btn-more')
            .next('.brand-introduction-text')
            .stop()
            .slideDown(),
        o('.brand-introduction .btn-more').on('click', function () {
          o(this).hasClass('is-show')
            ? (o(this).next('.brand-introduction-text').stop().slideUp(),
              o(this).removeClass('is-show'))
            : (o(this).next('.brand-introduction-text').stop().slideDown(),
              o(this).addClass('is-show'));
        }),
        (s = o('.brand-tab-item')),
        (i = o('.btn-brand-tab')),
        s.length &&
          (i.each(function () {
            o(this).parents('.brand-tab-item').hasClass('is-active') && n(this);
          }),
          o(document).on('click', '.btn-brand-tab', function () {
            n(this);
          })),
        o('.js-brand-select').length &&
          (o(document).on(
            'click',
            '.js-brand-select .selected-cur',
            function () {
              o(this).parent('.select-wrap').toggleClass('is-selecting');
            }
          ),
          o(document).on(
            'click',
            '.js-brand-select .btn-selected',
            function () {
              o(this).parents('.select-wrap').removeClass('is-selecting'),
                n(o(this));
            }
          )),
        o('.product-lineup-swiper').length &&
          new Swiper('.product-lineup-swiper', {
            resistanceRatio: 0,
            grabCursor: !0,
            observer: !0,
            scrollbar: { el: '.swiper-scrollbar', draggable: !0 },
            freeMode: !0,
            breakpoints: {
              320: { slidesPerView: 'auto', spaceBetween: 12 },
              769: { slidesPerView: 3, spaceBetween: 24 },
            },
          }),
        o('.product-gallery').length &&
          new Swiper('.product-gallery', {
            slidesPerView: 1,
            loop: !0,
            pagination: { el: '.swiper-pagination', clickable: !0 },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          }),
        (s = o('.js-click-classify').find('.classify-item')),
        (e = 'is-active'),
        s.length &&
          s.on('click', function () {
            o(this).addClass(e).siblings().removeClass(e);
          }),
        o('.js-check-sort').length &&
          ((s = (i = o('.js-check-sort')).find('.selected-cur')),
          (t = i.find('.select-item')),
          (i = i.find('.sort-link:not(.selected-cur)')),
          s.on('click', function () {
            o(this).parents('.select-wrap').toggleClass('is-selecting');
          }),
          t.on('click', function () {
            r(this);
          }),
          i.on('click', function () {
            r(this);
          }),
          o(a).on('resize', function () {
            o('.select-wrap').removeClass('is-selecting');
          })),
        o('body').on('click', function (e) {
          0 == o(e.target).closest('.select-wrap').length &&
            (o('.select-wrap').removeClass('is-selecting'),
            o('.js-page-home').length || o('body').removeAttr('style'));
        });
    }),
      o(a).on('load resize', function () {
        var t, i;
        !o('.js-sticky').length ||
          (o('.js-sticky').hasClass('tab-list') && 768 < o(a).width()) ||
          ((t = o('.js-sticky')),
          (i = o(a).scrollTop()),
          o(a).on('scroll', function () {
            var e = o(a).scrollTop(),
              s = e - i;
            (i = e),
              0 < s
                ? 0 < e && t.addClass('is-scroll-down')
                : t.removeClass('is-scroll-down');
          }));
      });
  })(window, window.jQuery),
  (function (r, l) {
    'use strict';
    function c() {
      var e = document.documentElement;
      e.style.setProperty('--vh', 0.01 * e.clientHeight + 'px');
    }
    function d() {
      var e, s, t, i, a, o;
      l('.footer').length &&
        ((e = l('.header').outerHeight()),
        (s = l('.footer').offset().top - l(r).outerHeight()),
        (t = 50),
        (i = 0) < l('.js-page-home').length
          ? ((e = l(r).outerHeight()),
            (s = l('#content').outerHeight() - l(r).outerHeight()))
          : 0 < l('.js-back-top-ignore').length &&
            (l('.js-back-top-ignore').each(function () {
              i += l(this).outerHeight();
            }),
            (s = l('.footer').offset().top - l(r).outerHeight() - i)),
        (a = s - e),
        (o = ((l(r).scrollTop() - e) / a) * 100),
        l(r).width() <= 768 && (t = 24),
        l(r).scrollTop() >= s
          ? l('.js-back-to-top').css({ position: 'absolute', bottom: i + t })
          : l('.js-back-to-top').removeAttr('style'),
        a < 0
          ? (l('.js-back-to-top').addClass('is-show'),
            l('.js-back-to-top span').eq(0).css('height', '100%'),
            l('.js-back-to-top span').eq(1).css('width', '100%'),
            l('.js-back-to-top span').eq(2).css('height', '100%'),
            l('.js-back-to-top span').eq(3).css('width', '100%'))
          : (l(r).scrollTop() >= e
              ? l('.js-back-to-top').addClass('is-show')
              : l('.js-back-to-top').removeClass('is-show'),
            o <= 0 && l('.js-back-to-top span').eq(0).css('height', '0%'),
            o <= 25
              ? l('.js-back-to-top span')
                  .eq(0)
                  .css('height', 4 * o + '%')
              : l('.js-back-to-top span').eq(0).css('height', '100%'),
            o <= 50
              ? l('.js-back-to-top span')
                  .eq(1)
                  .css('width', 4 * (o - 25) + '%')
              : l('.js-back-to-top span').eq(1).css('width', '100%'),
            o <= 75
              ? l('.js-back-to-top span')
                  .eq(2)
                  .css('height', 4 * (o - 50) + '%')
              : l('.js-back-to-top span').eq(2).css('height', '100%'),
            o <= 100
              ? l('.js-back-to-top span')
                  .eq(3)
                  .css('width', 4 * (o - 75) + '%')
              : l('.js-back-to-top span').eq(3).css('width', '100%')));
    }
    l(r).innerHeight();
    function a() {
      var e, s;
      l(r).width() <= 1366 ||
        (0 < l('.js-page-home').length &&
          ((e = l('#content').outerHeight(!0)),
          (s =
            l('.section-message').outerHeight(!0) +
            Number(l('.section-news').css('padding-bottom').split('px')[0])),
          l(r).scrollTop() <= e - s
            ? l('.dropdown-opts-clone').css('z-index', '1')
            : l('.dropdown-opts-clone').css('z-index', '2')));
    }
    function h() {
      0 == l('.layer-default .layer-popup.is-show').length
        ? (t.removeClass('is-show'), e(!1), l.scrollLock(!1))
        : (1 == l('.js-popup-swiper').find('.swiper-slide.is-show').length &&
            l('.popup-pagination-total').text('01'),
          t.addClass('is-show'),
          e(!0),
          l.scrollLock(!0));
    }
    var o = l(r).scrollTop(),
      p = !0,
      s = 0,
      e = function (e) {
        e
          ? ((s = l(r).scrollTop()),
            l('body').css('top', `-${s}px`).addClass('scroll-lock'))
          : (l('body').css('top', '').removeClass('scroll-lock'),
            window.scrollTo(0, s));
      },
      t = l('.layer-default'),
      f = t.find('.layer-popup'),
      u =
        (t.find('.btn-close'),
        t.find('.js-layer-dim'),
        t.find('.js-btn-again')),
      g = void 0;
    function m() {
      var e;
      l('.js-popup-swiper').length &&
        ((e = l(window).width()) <= 768 && null == g
          ? (g = new Swiper('.js-popup-swiper', {
              activeIndex: 0,
              slidesPerView: 1,
              resistanceRatio: 0,
              pagination: { el: '.swiper-pagination', type: 'fraction' },
              on: {
                init: function (e) {
                  l('.popup-pagination-current').text(
                    ('0' + (e.realIndex + 1)).slice(-2)
                  ),
                    l('.popup-pagination-total').text(
                      (
                        '0' + l(e.el).find('.swiper-slide.is-show').length
                      ).slice(-2)
                    );
                },
                slideChange: function (e) {
                  l('.popup-pagination-current').text(
                    ('0' + (e.realIndex + 1)).slice(-2)
                  ),
                    l('.popup-pagination-total').text(
                      (
                        '0' + l(e.el).find('.swiper-slide.is-show').length
                      ).slice(-2)
                    );
                },
              },
            }))
          : 768 < e &&
            null != g &&
            (g.destroy(),
            (g = void 0),
            l('.js-popup-swiper .swiper-wrapper').removeAttr('style'),
            l('.js-popup-swiper .swiper-slide').removeAttr('style')));
    }
    function b() {
      768 < l(r).outerWidth()
        ? l('#input-search').attr(
            'placeholder',
            l('#input-search').data('placeholder')
          )
        : (l('#input-search').attr('placeholder', ''),
          l('#input-search').on('focus', function () {
            l('.js-placeholder-search').is(':hidden') ||
              l('.js-placeholder-search').hide();
          }),
          l('#input-search').on('blur', function () {
            0 == l(this).val().length && l('.js-placeholder-search').show();
          }));
    }
    var i;
    l(r)
      .on('resize', function () {
        i && clearTimeout(i),
          (i = setTimeout(function () {
            var e, s;
            c(),
              a(),
              m(),
              1366 < l(r).width()
                ? 0 < l('.js-page-home').length &&
                  0 < l('.dropdown.is-active .js-dropdown-opts').length &&
                  ((e = l('.footer').outerHeight(!0) + 6),
                  (s =
                    l(
                      '.dropdown.is-active .js-btn-dropdown'
                    )[0].getBoundingClientRect().right -
                    l('.dropdown-opts-clone').outerWidth(!0)),
                  l('.dropdown-opts-clone').css({ bottom: e, left: s }))
                : (l('.dropdown')
                    .removeClass('is-active')
                    .find('.js-btn-dropdown')
                    .attr('aria-expanded', 'false'),
                  l('.dropdown-opts-clone').remove()),
              b();
          }, 50));
      })
      .resize(),
      l(r).on('scroll', function () {
        var e, s, t, i;
        (p && 0 < l('#main-content').length) ||
          ((t = l('.header')),
          (e = l('.key-visual')),
          (i = (s = l(r).scrollTop()) - o),
          (o = s),
          t.hasClass('is-show-layer-search')) ||
          t.hasClass('is-disabled') ||
          (t.hasClass('is-hover')
            ? (t.css('transform', 'translateY(0)'), t.removeClass('is-hidden'))
            : 0 < e.length
            ? 0 < i && l(r).scrollTop() > l(r).outerHeight()
              ? (t.css('transform', 'translateY(-' + t.outerHeight() + 'px)'),
                t.addClass('is-hidden'))
              : (t.css('transform', 'translateY(0)'),
                t.removeClass('is-hidden'))
            : 0 < i
            ? 0 < s &&
              (t.css('transform', 'translateY(-' + t.outerHeight() + 'px)'),
              t.addClass('is-hidden'))
            : (t.css('transform', 'translateY(0)'),
              t.removeClass('is-hidden'))),
          l('.page-banner').length &&
            ((e = l(r).width()),
            (i = l(r).scrollTop()),
            (s = l('.page-banner')),
            (t = l('.page-banner-image')),
            i <= (i = s.offset().top) - 400
              ? gsap.to(t, 1.2, { top: '0', ease: Power3.easeOut })
              : l(r).scrollTop() > i - 400 && l(r).scrollTop() <= i - 300
              ? 1248 < e && e < 1920
                ? gsap.to(t, 1.2, { top: '-13%', ease: Power3.easeOut })
                : 768 < e && e <= 1248
                ? gsap.to(t, 1.2, { top: '-10%', ease: Power3.easeOut })
                : gsap.to(t, 1.2, { top: '-20%', ease: Power3.easeOut })
              : l(r).scrollTop() > i - 300 && l(r).scrollTop() <= i - 200
              ? 1248 < e && e < 1920
                ? gsap.to(t, 1.2, { top: '-26%', ease: Power3.easeOut })
                : 768 < e && e <= 1248
                ? gsap.to(t, 1.2, { top: '-20%', ease: Power3.easeOut })
                : gsap.to(t, 1.2, { top: '-40%', ease: Power3.easeOut })
              : l(r).scrollTop() > i - 200 && l(r).scrollTop() <= i - 100
              ? 1248 < e && e < 1920
                ? gsap.to(t, 1.2, { top: '-39%', ease: Power3.easeOut })
                : 768 < e && e <= 1248
                ? gsap.to(t, 1.2, { top: '-30%', ease: Power3.easeOut })
                : gsap.to(t, 1.2, { top: '-60%', ease: Power3.easeOut })
              : l(r).scrollTop() > i - 100 && l(r).scrollTop() <= i
              ? 1248 < e && e < 1920
                ? gsap.to(t, 1.2, { top: '-52%', ease: Power3.easeOut })
                : 768 < e && e <= 1248
                ? gsap.to(t, 1.2, { top: '-40%', ease: Power3.easeOut })
                : gsap.to(t, 1.2, { top: '-80%', ease: Power3.easeOut })
              : 1248 < e && e < 1920
              ? gsap.to(t, 1.2, { top: '-65%', ease: Power3.easeOut })
              : 768 < e && e <= 1248
              ? gsap.to(t, 1.2, { top: '-50%', ease: Power3.easeOut })
              : gsap.to(t, 1.2, { top: '-100%', ease: Power3.easeOut })),
          d(),
          a();
      }),
      l(r).on('load', function () {
        var t, i, s, a, o, e, n;
        c(),
          l('.js-btn-dropdown').on('click', function () {
            var e, s, t;
            l('.dropdown-opts-clone').remove(),
              l('.js-dropdown-opts').removeAttr('style'),
              l(this).parent().hasClass('is-active')
                ? (l(this).attr('aria-expanded', 'false'),
                  l(this).parent().removeClass('is-active'),
                  l('.js-btn-dropdown')
                    .attr('aria-expanded', 'false')
                    .parent()
                    .removeClass('is-active'))
                : (l('.js-btn-dropdown')
                    .attr('aria-expanded', 'false')
                    .parent()
                    .removeClass('is-active'),
                  l(this).attr('aria-expanded', 'true'),
                  l(this).parent().addClass('is-active'),
                  0 < l('.js-page-home').length &&
                    ((e = l('.footer').outerHeight(!0) + 6),
                    (s =
                      l(this)[0].getBoundingClientRect().right -
                      l(this)
                        .parent()
                        .children('.js-dropdown-opts')
                        .outerWidth(!0)),
                    (e = l(this)
                      .parent()
                      .children('.js-dropdown-opts')
                      .clone()
                      .addClass('dropdown-opts-clone')
                      .css({ bottom: e, left: s })),
                    l(this).parent().find('.js-dropdown-opts').hide(),
                    (s = l('#content').outerHeight(!0)),
                    (t =
                      l('.section-message').outerHeight(!0) +
                      Number(
                        l('.section-news').css('padding-bottom').split('px')[0]
                      )),
                    l(r).scrollTop() <= s - t &&
                      l(window).scrollTop(
                        l(window).scrollTop() +
                          l('.js-btn-dropdown').outerHeight(!0)
                      ),
                    l('.js-page-home').append(e)));
          }),
          l('.js-back-to-top').on('click', function () {
            l('html, body').animate({ scrollTop: 0 }, 500, function () {
              0 < l('.js-business-philosophy-swipe').length &&
                ScrollTrigger.enable();
            });
          }),
          d(),
          (t = l('.js-tab-about-address').find('.btn-tab')).on(
            'click',
            function (e) {
              e.preventDefault();
              var e = l(this).parents('.tab-item'),
                s = l(this).attr('aria-controls'),
                s = l('#' + s);
              t.attr('aria-selected', 'false'),
                l(this).attr('aria-selected', 'true'),
                e
                  .addClass('is-active')
                  .siblings('.tab-item')
                  .removeClass('is-active'),
                s.show().siblings('.tab-content').hide();
            }
          ),
          (i = l('.js-tab').find('.btn-tab')).on('click', function (e) {
            e.preventDefault();
            var e = l(this).parents('.tab-item'),
              s = l(this).attr('aria-controls'),
              s = l('#' + s);
            i.attr('aria-selected') &&
              (i.attr('aria-selected', 'false'),
              l(this).attr('aria-selected', 'true')),
              e
                .addClass('is-active')
                .siblings('.tab-item')
                .removeClass('is-active'),
              s
                .addClass('is-show')
                .siblings('.tab-content')
                .removeClass('is-show');
          }),
          (s = 'is-show'),
          (a = 'is-collapsed'),
          (o = l('.btn-accordion')),
          l('.accordion-item').each(function () {
            l(this).hasClass(s)
              ? (l(this).find('.icon-plus-minus').addClass(a),
                l(this).find('.accordion-content').slideDown())
              : l(this).find('.icon-plus-minus').removeClass(a);
          }),
          l(document).on('click', '.btn-accordion', function (e) {
            e = l(e.currentTarget);
            o.attr('aria-expanded', 'false'),
              e.parent().hasClass(s)
                ? (e.next().stop().slideUp(),
                  e.parent().removeClass(s),
                  e.children('.icon-plus-minus').removeClass(a))
                : (e.next().stop().slideDown(),
                  e.parent().addClass(s),
                  e.children('.icon-plus-minus').addClass(a),
                  l(this).attr('aria-expanded', 'true'));
          }),
          l('body').on('click', function (e) {
            0 == l(e.target).closest('.dropdown').length &&
              (l('.js-btn-dropdown')
                .attr('aria-expanded', 'false')
                .parent()
                .removeClass('is-active'),
              0 < l('.js-page-home').length) &&
              (l('.js-dropdown-opts').removeAttr('style'),
              l('.dropdown-opts-clone').remove());
          }),
          (e = Date.now()),
          f.each(function () {
            0 <= e - localStorage.getItem('popup' + l(this).index()) - 6048e5
              ? (l(this).removeClass('is-disable').addClass('is-show'),
                localStorage.removeItem('popup' + l(this).index()))
              : l(this).addClass('is-disable').removeClass('is-show');
          }),
          h(),
          m(),
          l(document).on(
            'click',
            '.layer-default .btn-close, .layer-default .js-btn-again',
            function () {
              l(this).closest('.layer-popup').removeClass('is-show'),
                l(window).width() <= 768 &&
                  (g.destroy(),
                  l('.popup-pagination-current').text('01'),
                  l('.popup-pagination-total').text('01')),
                h();
            }
          ),
          u.click(function () {
            var e = 'popup' + l(this).closest('.layer-popup').index();
            localStorage.setItem(e, new Date().valueOf()),
              l(this)
                .closest('.layer-popup')
                .addClass('is-disable')
                .removeClass('is-show'),
              h();
          }),
          0 !== l('.scrollbar-inner').length &&
            l('.scrollbar-inner').scrollbar(),
          l('.section-tabs').hasClass('js-sticky') &&
            (n && clearTimeout(n),
            (n = setTimeout(function () {
              l('.js-sticky').addClass('is-sticky');
            }, 50))),
          0 < l('#main-content').length &&
            ((n = l('#main-content').offset().top),
            l('#main-content').hasClass('section-tabs') ||
              (n -= l('.header').outerHeight(!0)),
            l('html, body').animate({ scrollTop: n }, 1e3, function () {
              setTimeout(function () {
                p = !1;
              }, 50);
            })),
          l('.js-table-sticky-col').length &&
            l('.js-table-sticky-col').on('scroll', function () {
              0 < l(this).scrollLeft()
                ? l(this).find('.sticky-head').addClass('is-covered')
                : l(this).find('.sticky-head').removeClass('is-covered');
            }),
          b();
      });
  })(window, window.jQuery),
  (function (n, r) {
    'use strict';
    function l() {
      var e, s;
      r('.js-swiper-tabs').length &&
        ((e = 0),
        r('.js-swiper-tabs .swiper-slide').each(function () {
          e += r(this).width();
        }),
        (s = r('.js-swiper-tabs .swiper-wrapper').width()) <= e && null == t
          ? ((t = new Swiper('.js-swiper-tabs', {
              slidesPerView: 'auto',
              resistanceRatio: 0,
              on: {
                init: function (e) {
                  var s = r(this.el).find('.swiper-slide.is-active').index();
                  e.slideTo(s);
                },
              },
            })),
            r('.js-swiper-tabs .swiper-wrapper').removeClass('is-center'))
          : e < s &&
            (r('.js-swiper-tabs .swiper-wrapper').addClass('is-center'),
            null != t) &&
            (t.destroy(),
            (t = void 0),
            r('.js-swiper-tabs .swiper-wrapper').removeAttr('style'),
            r('.js-swiper-tabs .swiper-slide').removeAttr('style')));
    }
    var t,
      c,
      d = r('.js-customer-support'),
      h = d.find('.tab-customer-btn');
    r(n).on('load', function () {
      var e, i, t, s, a, o;
      (e = r('.option-box.js-input-option').find('.btn-option')),
        (i = 'is-selecting'),
        (t = 'is-select'),
        r('.js-input-option').length &&
          (e.on('click', function (e) {
            r('.js-input-option')
              .removeClass(i)
              .children('.btn-option')
              .attr('aria-expanded', 'false');
            var e = r(e.currentTarget),
              s = 'true' === e.attr('aria-expanded') || !1,
              t = e.attr('aria-controls');
            e.attr('aria-expanded', !s),
              r('#' + t)
                .parents('.option-box')
                .toggleClass(i);
          }),
          r(document).on(
            'click',
            '.js-input-option .btn-option-select',
            function (e) {
              e = r(e.currentTarget);
              if (e.parents('.js-input-option').hasClass('js-change-form')) {
                var s = r(this).data('open');
                switch (s) {
                  case 'product-inquiry':
                    r('.js-customer-name').attr(
                      'placeholder',
                      '�대쫫�� �낅젰�섏꽭��.'
                    ),
                      r('.input-option').removeClass('is-show'),
                      r('.' + s).addClass('is-show');
                    break;
                  case 'product-recall':
                    r('.product-inquiry').addClass('is-show'),
                      r('.' + s).addClass('is-show'),
                      r('.js-customer-name').attr(
                        'placeholder',
                        '�대쫫�� �낅젰�섏꽭��. (*怨꾩쥖 �덇툑二쇱� �숈씪)'
                      );
                    break;
                  default:
                    r('.input-option').removeClass('is-show'),
                      r('.js-customer-name').attr(
                        'placeholder',
                        '�대쫫�� �낅젰�섏꽭��.'
                      );
                }
              }
              e.parents('li').addClass(t).siblings().removeClass(t),
                r(this).hasClass('is-default')
                  ? e
                      .parents('.option-list')
                      .siblings('.btn-option')
                      .find('.btn-option-curr')
                      .text(e.data('text'))
                  : e
                      .parents('.option-list')
                      .siblings('.btn-option')
                      .find('.btn-option-curr')
                      .text(e.text()),
                e.parents('.option-box').toggleClass(i),
                r('.btn-option').attr('aria-expanded', 'false');
            }
          ),
          r('body').on('click', function (e) {
            0 == r(e.target).closest('.js-input-option').length &&
              (r('.js-input-option.is-selecting')
                .children('.btn-option')
                .attr('aria-expanded', 'false'),
              r('.js-input-option').removeClass('is-selecting'),
              r('.btn-option').attr('aria-expanded', 'false'));
          })),
        r('.frequently-question .btn-more').on('click', function () {
          r('.frequently-question .btn-more')
            .parents('.customer-brand-faq')
            .toggleClass('is-show');
        }),
        r('.js-input-file').on('change', function (e) {
          var s;
          r(this).prop('files')[0] &&
            ((s = r(this).prop('files')[0].name),
            r(this).parent().children('.js-name-file').val(s));
        }),
        d.length &&
          (c = new Swiper('.js-customer-support .customer-support-swiper', {
            slidesPerView: 'auto',
            resistanceRatio: 0,
            spaceBetween: 11,
            769: { spaceBetween: 24 },
            on: {
              init: function (e) {
                var s = r(this.el).find('.swiper-slide.is-active').index();
                e.slideTo(s);
              },
            },
          })),
        d.length &&
          r(document).on('click', '.tab-customer-btn', function () {
            var e = r(this).attr('data-controls'),
              s = r('#' + e);
            void 0 !== e &&
              (h.closest('.tab-customer-item').removeClass('is-active'),
              r(this).closest('.tab-customer-item').addClass('is-active'),
              s
                .addClass('is-show')
                .siblings('.tab-customer-content')
                .removeClass('is-show'),
              l());
          }),
        (s = 'is-show'),
        (a = r('.js-customer-accordion')),
        r('.customer-accordion').each(function () {
          r(this).hasClass(s)
            ? (r(this)
                .find('.js-customer-accordion')
                .attr('aria-expanded', 'true'),
              r(this).find('.customer-accordion-content').slideDown())
            : (r(this)
                .find('.js-customer-accordion')
                .attr('aria-expanded', 'false'),
              r(this).find('.customer-accordion-content').slideUp());
        }),
        r(document).on('click', '.js-customer-accordion', function () {
          r(this).parent().hasClass(s)
            ? (r(this).next().stop().slideUp(),
              r(this).parent().removeClass(s),
              a.attr('aria-expanded', 'false'))
            : (r(this).next().stop().slideDown(),
              r(this).parent().addClass(s),
              r(this).attr('aria-expanded', 'true'));
        }),
        l(),
        r('.customer-support-tabs').hasClass('js-sticky') &&
          (o && clearTimeout(o),
          setTimeout(function () {
            r('.js-sticky').addClass('is-sticky');
          }, 50)),
        r('.js-customer-support').length &&
          r(n).on('resize', function () {
            var e = r('.js-customer-support .customer-support-swiper')
              .find('.swiper-slide.is-active')
              .index();
            c.slideTo(e);
          });
    }),
      r(n).on('resize', function () {
        l();
      });
  })(window, window.jQuery),
  (function (a, l) {
    'use strict';
    function s() {
      var e;
      768 < l(a).outerWidth() ||
        ((e = window.innerHeight),
        (e =
          58 + (document.querySelector('.js-height-device').clientHeight - e)),
        l('.header-bottom-center').css('height', `calc(100vh - ${e}px)`));
    }
    function t() {
      C.find('.header-bottom-center')
        .stop()
        .animate(
          { top: -m - 200 + 'px' },
          {
            duration: 600,
            progress: function () {
              var e = C.find('.header-bottom-center').css('top').split('px')[0];
              e < 0 &&
                l('.header-bottom').outerHeight(!0) - m >= e &&
                (j.css('height', '0'),
                C.removeClass('is-open'),
                0 < T.length && T.hasClass('is-dark')
                  ? (l('.logo-img').hide(),
                    l('.logo-img-black').css('display', 'inline'))
                  : (l('.logo-img').show(),
                    l('.logo-img-black').css('display', 'none')));
            },
          }
        );
    }
    function i(e) {
      S || e.preventDefault();
    }
    function o(e) {
      gsap.to(window, {
        duration: 0.65,
        scrollTo: e,
        onStart: () => {
          if (((x = !1), 0 == e)) {
            if (
              ((H = !0),
              C.css('background', ''),
              768 < l(a).innerWidth() &&
                T.children('.key-visual-inner').css('position', 'fixed'),
              C.hasClass('is-hover') &&
                l('.header-form-search').css('--color', v),
              l(a).width() <= 768)
            ) {
              if (C.hasClass('is-open')) return;
            } else if (C.hasClass('is-hover')) return;
            l('.gnb-depth').css('border-top-color', ''),
              T.hasClass('is-dark')
                ? (l('.logo-img-white').hide(), l('.logo-img-black').show())
                : (l('.logo-img-black').hide(),
                  l('.logo-img-white').show(),
                  l('.icon-search').removeClass('icon-search-black'),
                  l('.icon-hamburger').removeClass('icon-hamburger-black'),
                  l('.icon-language').removeClass('icon-language-black'));
          } else H = !1;
        },
        onComplete: () => {
          (x = !0),
            0 < e
              ? (C.css('background', w),
                768 < l(a).innerWidth() &&
                  (T.children('.key-visual-inner').css('position', 'relative'),
                  C.hasClass('is-hover')) &&
                  l('.gnb-depth').css('border-bottom', '1px solid #dbdbdb'))
              : (C.hasClass('is-hover') &&
                  (l('.header-form-search').css('--color', ''),
                  l('.gnb-depth').css('border-top-color', y)),
                C.hasClass('is-hover') &&
                  l('.gnb-depth').css('border-bottom', ''));
        },
      });
    }
    function e() {
      l('.js-layer-gnb-close, .js-btn-gnb').on('click', function () {
        var e, s;
        l(a).width() < 1500
          ? ((e = l('.js-btn-gnb').offset().top),
            (s =
              l(a).width() -
              (l('.js-btn-gnb').offset().left + l('.js-btn-gnb').outerWidth())),
            l('.js-layer-gnb-close').css({ top: e + 'px', right: s + 'px' }))
          : l('.js-layer-gnb-close').removeAttr('style');
      });
    }
    function n() {
      l('.js-open-layer-search').on('click', function (e) {
        e.preventDefault();
        e = l(this).data('layer-target');
        if (l(a).width() <= 768 && 0 < l(e).length)
          l('.header-search')
            .find('.js-open-layer-search.btn')
            .toggleClass('is-active'),
            C.removeClass('is-open').css('--color', ''),
            C.find('.header-bottom-center').css('top', ''),
            l('.js-btn-gnb').removeClass('is-active'),
            l('.header-search')
              .find('.js-open-layer-search.btn')
              .hasClass('is-active')
              ? (0 < T.length &&
                  (C.addClass('is-dark is-show-layer-search'),
                  C.find('.icon-hamburger').addClass('icon-hamburger-black'),
                  C.find('.header-search .icon-search').addClass(
                    'icon-search-black'
                  ),
                  j.css('height', '65px'),
                  l('.logo-img').hide(),
                  l('.logo-img-black').css('display', 'inline')),
                C.css({ 'z-index': '101', overflow: 'hidden' }))
              : (l('.swiper-key-visual .swiper-slide-active').hasClass(
                  'is-black'
                ) ||
                  (C.removeClass('is-dark'),
                  C.find('.icon-hamburger').removeClass('icon-hamburger-black'),
                  C.find('.header-search .icon-search').removeClass(
                    'icon-search-black'
                  ),
                  T.css('--color', '')),
                l('#js-layer-search').on(
                  'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
                  function () {
                    parseInt(
                      l('#js-layer-search').css('transform').split(',')[5]
                    ) < 0 &&
                      !C.hasClass('is-open') &&
                      (C.css({ 'z-index': '', overflow: '' }).removeClass(
                        'is-show-layer-search'
                      ),
                      j.css('height', ''),
                      l('.swiper-key-visual .swiper-slide-active').hasClass(
                        'is-black'
                      ) ||
                        (l('.logo-img-white').show(),
                        l('.logo-img-black').hide()));
                  }
                )),
            l('.header-search .js-open-layer-search.btn')
              .find('.icon-search')
              .toggleClass('icon-search-close'),
            l(e).toggleClass('is-show'),
            E(l(e).hasClass('is-show'));
        else {
          if (l(e).hasClass('is-show') && l('.layer-gnb').is(':hidden'))
            return !1;
          l('.layer-gnb').is(':visible') &&
            (l('.js-layer-gnb-close, .js-btn-gnb').removeClass('is-active'),
            l('.layer-gnb').hide(),
            C.css('pointer-events', 'none'),
            l('#js-layer-search').hasClass('is-show')) &&
            C.css('pointer-events', ''),
            (S = !0),
            (l(a).scrollTop() >= m || 0 == T.length) &&
              C.hasClass('is-hover') &&
              (C.removeClass('is-hover'),
              j.hide(),
              l('.gnb-depth').hide(),
              setTimeout(function () {
                j.css('display', ''), l('.gnb-depth').css('display', '');
              }, 100)),
            C.hasClass('is-hidden') && C.css('transform', 'translateY(0px)');
          var s = C.outerHeight(!0);
          l('#js-layer-search').css('z-index', '100'),
            l(e).addClass('is-show'),
            C.addClass('is-show-layer-search').css('z-index', '101'),
            0 < l('.key-visual').length &&
              l(a).scrollTop() < m &&
              j.stop().animate(
                {
                  height:
                    s + l('#js-layer-search .layer-content').outerHeight(!0),
                },
                {
                  duration: 600,
                  progress: function () {
                    50 <= j.height() &&
                      (C.css('--color', v),
                      l('.header .icon-search').addClass('icon-search-black'),
                      l('.icon-language').addClass('icon-language-black'),
                      l('.icon-hamburger').addClass('icon-hamburger-black'),
                      l('.logo-img-white').hide(),
                      l('.logo-img-black').show()),
                      j.height() >= s &&
                        (l('.header-bottom')
                          .delay(1e3)
                          .css('border-bottom', '1px solid #0079FA'),
                        C.css('overflow', 'hidden'));
                  },
                }
              ),
            l('#js-layer-search').css('--transform', s),
            l('.gnb-depth').css('--durationDepth', '0'),
            l.scrollLock(!0),
            r();
        }
      });
    }
    function r() {
      A ||
        l('#js-layer-search').on(
          'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
          function () {
            parseInt(l('#js-layer-search').css('transform').split(',')[5]) < 0
              ? (T.hasClass('is-dark') ||
                  (C.css('--color', ''),
                  l('.icon-language').removeClass('icon-language-black'),
                  l('.icon-hamburger').removeClass('icon-hamburger-black'),
                  l('.header .icon-search').removeClass('icon-search-black'),
                  l('.logo-img-white').show(),
                  l('.logo-img-black').hide()),
                C.removeClass('is-show-layer-search'),
                l('.header-bottom').css('border-bottom', ''),
                C.css({ overflow: '', 'z-index': '' }))
              : 768 < l(a).width() &&
                (0 < T.length &&
                  l(a).scrollTop() < m &&
                  C.hasClass('is-hover') &&
                  (C.removeClass('is-hover'),
                  j.hide(),
                  l('.gnb-depth').hide(),
                  setTimeout(function () {
                    j.css('display', ''), l('.gnb-depth').css('display', '');
                  }, 100)),
                l('.gnb-depth').css('--durationDepth', '0'),
                l('#js-layer-search .layer-dim').fadeIn('fast'),
                j.css('--duration', ''),
                l('.header').css('pointer-events', ''),
                l('#js-layer-search').hasClass('is-show') ||
                  j.css('height', '0'));
          }
        );
    }
    function V() {
      var e = l('#input-search').val();
      if (0 == e.length)
        W(), b <= 768 && l('.js-keyword-suggestion-box').hide();
      else {
        var s = e;
        if (
          0 ==
          (s = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e)
            ? e.replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g, '')
            : s).length
        )
          W();
        else if (
          ![
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
            '��',
          ].includes(e) &&
          ((B = 0), dataSearch) &&
          2 < JSON.stringify(dataSearch).length
        )
          for (const i in dataSearch) {
            var t = dataSearch[i];
            switch (i) {
              case 'searchBrand':
              case 'searchProductName':
              case 'searchEfficacy':
              case 'searchIngredient':
                Y(s, i, t);
            }
          }
      }
    }
    function z() {
      var s, t, i;
      l('#input-search').on(
        'keyup',
        ((s = V),
        (t = 200),
        (i = null),
        function (...e) {
          i && clearTimeout(i),
            (i = setTimeout(function () {
              s.apply(this, e);
            }, t));
        })
      );
    }
    function c(e) {
      var s = l('.tab-btn[data-link=' + e + ']'),
        e = l('.tab-content[data-id=' + e + ']');
      O.closest('.tab-item').removeClass('is-active'),
        s.closest('.tab-item').addClass('is-active'),
        e.addClass('is-show').siblings('.tab-content').removeClass('is-show');
    }
    function $() {
      l('.js-scroll-section .link, .layer-gnb .depth-link').on(
        'click',
        function () {
          var e, s;
          void 0 !==
            (e =
              l(this).attr('data-link') !== l(location)[0].hash.split('#')[1]
                ? l(this).attr('data-link')
                : e) &&
            (l(this).hasClass('depth-link')
              ? (l('.layer-gnb').fadeOut(400, function () {
                  setTimeout(function () {
                    l('.js-btn-gnb').removeClass('is-active');
                  }, 0);
                }),
                l('.js-layer-gnb-close').removeClass('is-active'),
                (S = !1),
                l.scrollLock(!1),
                0 < l('#main-content').length &&
                  ((s = l('#main-content').offset().top),
                  l('#main-content').hasClass('section-tabs') ||
                    (s -= l('.header').outerHeight(!0)),
                  l('html, body').animate({ scrollTop: s }, 1e3, function () {
                    setTimeout(function () {
                      A = !1;
                    }, 50);
                  })))
              : (E(!1), l('.js-btn-gnb').removeClass('is-active'), t()),
            c(e));
        }
      );
    }
    var d,
      h,
      p,
      f,
      u,
      g,
      m = l(a).innerHeight(),
      b = l(a).innerWidth(),
      v = '#212121',
      w = '#fff',
      y = '#0079FA',
      C = l('.header'),
      j = l('.header-mask'),
      k = 0.0014,
      x = !0,
      T = l('.key-visual'),
      H = !1,
      P = !0,
      S = !1,
      D =
        (l(document).on('mouseenter', '.is-pc .gnb-item', function () {
          var e = l(this),
            s = e.find('.gnb-depth'),
            t = e.find('.gnb-depth .gnb-depth-wrap'),
            t = e.data('min-height')
              ? e.data('min-height')
              : t.innerHeight() < 308
              ? 308
              : t.innerHeight(),
            i = C.innerHeight() + t;
          C.hasClass('is-transparent') || (i -= 1),
            (d = i * k),
            e.addClass('is-hover'),
            C.addClass('is-hover').css('overflow', ''),
            h && clearTimeout(h),
            p && clearTimeout(p),
            0 < s.length
              ? (j.css({ '--duration': d + 's', height: i }),
                l('.logo-img-white').hide(),
                l('.logo-img-black').show(),
                P
                  ? (e.addClass('is-render'),
                    0 < T.length &&
                    l(a).scrollTop() < m &&
                    C.hasClass('is-show-layer-search')
                      ? l('.gnb-depth').css({
                          '--durationDepth': '0',
                          height: t,
                        })
                      : l('.gnb-depth').css({
                          '--durationDepth': d + 's',
                          height: t,
                        }),
                    l(this).find('.gnb-depth-wrap').css('height', t),
                    f && clearTimeout(f),
                    (f = setTimeout(function () {
                      l('.gnb-depth').css('border-top-color', y);
                    }, C.innerHeight() * k * 1e3)),
                    (P = !1),
                    setTimeout(function () {
                      l('.gnb-depth').css('--durationDepth', '0');
                    }, 1e3 * (d + 0.2)))
                  : (l('.gnb-depth').css({ height: t }),
                    j.css('--duration', '0'),
                    l(this).find('.gnb-depth-wrap').css('height', t)))
              : j.css('height', C.innerHeight()),
            C.delay(1e3 * parseInt(0.084)).queue(function (e) {
              l('.icon-search').addClass('icon-search-black'),
                l('.icon-language').addClass('icon-language-black'),
                l('.icon-hamburger').addClass('icon-hamburger-black'),
                e();
            }),
            C.css('--color', v);
        }),
        l(document).on('mouseleave', '.is-pc .gnb-item', function () {
          var e = (g = l(this)).find('.gnb-depth'),
            s = e.innerHeight() < 308 ? 308 : e.innerHeight();
          g.removeClass('is-hover is-render'),
            h && clearTimeout(h),
            (h = setTimeout(function () {
              if (
                (e.css('--durationDepth', d + 's'),
                j.css('--duration', d + 's'),
                j.css('height', 0),
                768 < b && l('.gnb-depth').css('border-bottom', ''),
                C.removeClass('is-hover'),
                0 < T.length &&
                  l(a).scrollTop() < m &&
                  C.hasClass('is-show-layer-search'))
              )
                return (
                  C.css({ 'z-index': '101', overflow: 'hidden' }),
                  j.height(
                    C.outerHeight(!0) +
                      l('.layer-search .layer-content').outerHeight(!0)
                  ),
                  l('.gnb-depth').removeAttr('style'),
                  !1
                );
              l('.gnb-depth').css({ height: 0 });
            }, 50)),
            p && clearTimeout(p),
            0 != l(a).scrollTop() ||
              C.hasClass('is-show-layer-search') ||
              (p = setTimeout(function () {
                l('.gnb-depth').css('border-top-color', ''),
                  C.hasClass('is-dark') ||
                    (C.css('--color', ''),
                    l('.icon-search').removeClass('icon-search-black'),
                    l('.icon-language').removeClass('icon-language-black'),
                    l('.icon-hamburger').removeClass('icon-hamburger-black'),
                    l('.logo-img-white').show(),
                    l('.logo-img-black').hide());
              }, s * k * 1e3));
        }),
        j.on(
          'transitionstart webkitTransitionStart oTransitionStart MSTransitionStart',
          function () {
            d &&
              (0 < T.length &&
              l(a).scrollTop() < m &&
              C.hasClass('is-show-layer-search')
                ? l('.gnb-depth').css({ '--durationDepth': '0s' })
                : l('.gnb-depth').css('--durationDepth', d + 's'),
              0 < j) &&
              l('.gnb-depth').css('border-bottom', '');
          }
        ),
        l('.gnb-depth').on(
          'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
          function () {
            0 < l('.gnb-depth').innerHeight() &&
              l('.header-utility-link').css('--delay', '.5s'),
              l('.gnb-depth').innerHeight() <= 0 &&
                l('.gnb-depth').find('.gnb-depth-wrap').css('height', '');
          }
        ),
        j.on(
          'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
          function () {
            (P = !1),
              0 == j.innerHeight() &&
                ((P = !0),
                l('.gnb-depth .gnb-depth-inner').removeClass('is-animate'),
                l('.header-utility-link').css('--delay', ''),
                0 < T.length &&
                l(a).scrollTop() < m &&
                C.hasClass('is-show-layer-search')
                  ? l('.gnb-depth').css('--durationDepth', '0s')
                  : l('.gnb-depth').css('--durationDepth', ''));
          }
        ),
        l(document).on('click', '.is-mo .js-btn-gnb', function () {
          var e;
          l(this).parents('.header').hasClass('is-open')
            ? (E(!1),
              l('.js-btn-gnb').removeClass('is-active'),
              T.hasClass('is-dark') || C.removeClass('is-dark'),
              t())
            : (E(!0),
              setTimeout(function () {
                s();
              }, 120),
              l('.js-btn-gnb').addClass('is-active'),
              l('.js-open-layer-search.btn .icon-search-close').removeClass(
                'icon-search-close'
              ),
              l('#js-layer-search').removeClass('is-show'),
              C.removeClass('is-show-layer-search')
                .addClass('is-open')
                .css('overflow', ''),
              0 < T.length && j.css('height', '65px'),
              l('.logo-img').hide(),
              l('.logo-img-black').css('display', 'inline'),
              (e = C.hasClass('is-transparent') ? 80 : 180),
              C.find('.header-bottom-center')
                .stop()
                .delay(e)
                .animate({ top: '64px' }, 600)),
            l('.header-search')
              .find('.js-open-layer-search.btn')
              .removeClass('is-active');
        }),
        new Swiper('.swiper-suggestion-search', {
          direction: 'vertical',
          loop: !0,
          speed: 500,
          autoplay: { delay: 2e3, disableOnInteraction: !1 },
        }),
        l(document).on('click', '.is-mo .gnb-link', function (e) {
          e.preventDefault(),
            l(this).hasClass('is-active')
              ? (l('.gnb-depth').hide(),
                l('.gnb-link').removeClass('is-active'),
                l(this).removeClass('is-active'),
                l(this).parent().children('.gnb-depth').hide())
              : (l('.gnb-depth').hide(),
                l('.gnb-link').removeClass('is-active'),
                l(this).addClass('is-active'),
                l(this).parent().children('.gnb-depth').show());
        }),
        l(document).on('click', '.is-pc .js-btn-gnb', function () {
          (S = !0),
            l('.layer-gnb').fadeIn(400),
            l('.js-btn-gnb').addClass('is-active'),
            l('.js-layer-gnb-close').addClass('is-active'),
            l.scrollLock(!0);
        }),
        gsap.registerPlugin(ScrollToPlugin),
        0),
      E = function (e) {
        e
          ? ((D = l(a).scrollTop()),
            l('body').css('top', `-${D}px`).addClass('scroll-lock'))
          : (l('body').css('top', '').removeClass('scroll-lock'),
            window.scrollTo(0, D));
      },
      A = !0,
      q = 0,
      W =
        (l('html').on('mousewheel', function (e) {
          var s;
          0 < l('.layer-default.is-show').length ||
            (0 != T.length &&
              x &&
              !S &&
              (0 <= (s = l(a).scrollTop()) && s < T.height() - C.height()
                ? 1 == x &&
                  ((x = !1),
                  e.originalEvent.wheelDelta < 0
                    ? (window.addEventListener('wheel', i, { passive: !1 }),
                      o(T.height()))
                    : (window.addEventListener('wheel', i, { passive: !1 }),
                      o(0)))
                : s <= T.height()
                ? (window.removeEventListener('wheel', i),
                  1 == x &&
                    0 < e.originalEvent.wheelDelta &&
                    ((x = !1),
                    window.addEventListener('wheel', i, { passive: !1 }),
                    o(0)))
                : ((x = !0), window.removeEventListener('wheel', i))));
        }),
        l(a)
          .on('scroll', function () {
            768 < a.innerWidth &&
              l(a).scrollTop() >= m &&
              (T.children('.key-visual-inner').css('position', 'relative'),
              C.removeClass('is-transparent')
                .addClass('is-scroll is-load')
                .css({ '--color': v, background: w }),
              C.children('.header-top').addClass('is-background'),
              setTimeout(function () {
                C.removeClass('is-load');
              }, 0)),
              0 < T.length &&
                (0 == l(a).scrollTop() &&
                  (C.hasClass('is-show-layer-search') ||
                    C.removeClass('is-scroll')
                      .addClass('is-transparent')
                      .css('background', ''),
                  l('.gnb-depth').css('border-top-color', ''),
                  C.children('.header-top').removeClass('is-background'),
                  T.hasClass('is-dark')
                    ? C.css('--color', v)
                    : C.css('--color', '')),
                H
                  ? (C.children('.header-top').removeClass('is-background'),
                    C.hasClass('is-show-layer-search') ||
                      C.removeClass('is-scroll').addClass('is-transparent'),
                    l(a).scrollTop() <=
                      m - C.children('.header-bottom').innerHeight() &&
                      (T.hasClass('is-dark')
                        ? C.css('--color', v)
                        : C.css('--color', ''),
                      l(a).innerWidth() <= 768) &&
                      C.children('.header-bottom').removeClass('is-show-bg'))
                  : (0 < l(a).scrollTop() &&
                      l(a).scrollTop() >= m - C.innerHeight() &&
                      C.removeClass('is-transparent').addClass('is-scroll'),
                    0 < l(a).scrollTop() &&
                      (l(a).scrollTop() >=
                        m - C.children('.header-bottom').innerHeight() &&
                        (C.hasClass('is-load') ||
                          C.children('.header-top').addClass('is-background')),
                      l(a).scrollTop() >= m - 5) &&
                      l(a).innerWidth() <= 768 &&
                      C.children('.header-bottom').addClass('is-show-bg')),
                l(a).innerWidth() <= 768) &&
                (l(a).scrollTop() < m
                  ? (C.hasClass('is-show-layer-search') ||
                      C.removeClass('is-scroll')
                        .addClass('is-transparent')
                        .css('background', ''),
                    C.children('.header-top').removeClass('is-background'),
                    T.hasClass('is-dark')
                      ? C.addClass('is-dark').css('--color', v)
                      : C.css('--color', ''),
                    C.hasClass('is-show-layer-search') ||
                      C.children('.header-bottom').removeClass('is-show-bg'))
                  : C.css('background', w)),
              a.innerWidth <= 768 &&
                (l(a).scrollTop() >= m - C.innerHeight()
                  ? C.addClass('is-change-mo').removeClass('is-dark')
                  : C.removeClass('is-change-mo'));
          })
          .scroll(),
        l(a)
          .on('resize', function () {
            u && clearTimeout(u),
              (u = setTimeout(function () {
                768 < l(a).innerWidth()
                  ? (C.removeClass('is-mo').addClass('is-pc'),
                    C.removeClass('is-open'),
                    l('.layer-search').hasClass('is-show') || j.height(0),
                    l('.header-bottom-center').removeAttr('style'),
                    l('.gnb-depth').css('display', ''),
                    l('.js-btn-gnb').removeClass('is-active'),
                    l('#js-layer-search').css('--transform', -m),
                    l('#js-layer-search').hasClass('is-show') &&
                      'true' !=
                        l('[aria-controls="tabpanel-search"]').attr(
                          'aria-selected'
                        ) &&
                      (l('#js-layer-search')
                        .find('.tab-content')
                        .removeClass('is-show'),
                      l('#js-layer-search')
                        .find('.tab-item')
                        .removeClass('is-active'),
                      l('#js-layer-search')
                        .find('.tab-item .btn-tab')
                        .attr('aria-selected', 'false'),
                      l('[aria-controls="tabpanel-search"]')
                        .attr('aria-selected', 'true')
                        .parent()
                        .addClass('is-active'),
                      l('#tabpanel-search').addClass('is-show')),
                    l('.js-keyword-suggestion-box').show(),
                    l(
                      '.keyword-suggestion-list .keyword-suggestion-item'
                    ).removeAttr('style'),
                    l('.layer-search.is-show')
                      .find('.js-layer-dim')
                      .css('display', 'inline'),
                    E(!1))
                  : (C.removeClass('is-pc').addClass('is-mo'),
                    T.children('.key-visual-inner').removeAttr('style'),
                    l('.gnb-depth, .gnb-depth-wrap, .layer-gnb').removeAttr(
                      'style'
                    ),
                    l.scrollLock(!1),
                    C.hasClass('is-open') ||
                      l('.js-btn-gnb').removeClass('is-active'),
                    0 == B &&
                      (l('.js-keyword-suggestion-box').hide(),
                      l(
                        '.keyword-suggestion-list .keyword-suggestion-item'
                      ).hide()),
                    l('.layer-search.is-show')
                      .find('.js-layer-dim')
                      .removeAttr('style')),
                  l('.layer-search').hasClass('is-show') &&
                    (768 < l(a).width()
                      ? (C.css('--color', v),
                        j.height(C.outerHeight(!0)),
                        l('.header-bottom')
                          .delay(1e3)
                          .css('border-bottom', '1px solid #0079FA'),
                        l('.header .icon-search').addClass('icon-search-black'),
                        l('.icon-language').addClass('icon-language-black'),
                        l('.icon-hamburger').addClass('icon-hamburger-black'),
                        l('.logo-img-white').hide(),
                        l('.logo-img-black').show(),
                        l('.layer-search').css({
                          '--transform': C.outerHeight(!0),
                        }),
                        l('#js-layer-search').css('z-index', '100'))
                      : (l('.header-bottom').css('border-bottom', ''),
                        C.find('.js-open-layer-search.btn')
                          .addClass('is-active')
                          .find('.icon-search')
                          .addClass('icon-search-close'),
                        l('.logo-img-white').hide(),
                        l('.logo-img-black').show(),
                        l('#js-layer-search').css('z-index', ''),
                        j.height(C.outerHeight(!0)))),
                  l('#js-layer-product-filter').hasClass('is-show') &&
                    768 < l(a).width() &&
                    l('#js-layer-product-filter')
                      .removeClass('is-show')
                      .find('.layer-content')
                      .removeClass('is-full')
                      .removeAttr('style'),
                  e(),
                  (b = l(a).innerWidth()),
                  (m = l(a).innerHeight());
              }, 50));
          })
          .resize(),
        function () {
          0 < l('[data-search]').length &&
            l('[data-search]').each(function (e, s) {
              l(s).find('.js-suggestion-detail').children().remove(),
                l(s).find('.js-suggestion-total').text(0);
            });
        }),
      B = 0,
      Y = function (e, s, t) {
        var s = l('[data-search=' + s + ']'),
          i = l(s).find('.js-suggestion-detail'),
          a = l(s).find('.js-suggestion-total'),
          o = 0,
          n = '',
          r = new RegExp('' + e, 'gi');
        t.map(function (e) {
          var s;
          r.test(e.title) &&
            ((s = e.title.replace(
              r,
              (e) => !!Boolean(e) && `<mark class="highlight">${e}</mark>`
            )),
            o++,
            e.link
              ? (n += `<li><a href="${e.link}" class="link">${s}</a></li>`)
              : (n += `<li><a href="#none" class="link">${s}</a></li>`));
        }),
          (B += o),
          0 == o
            ? (i.children().remove(),
              a.text(0),
              b <= 768 &&
                (s.hide(), 0 == B) &&
                l('.js-keyword-suggestion-box').hide())
            : n.length &&
              (b <= 768 && (l('.js-keyword-suggestion-box').show(), s.show()),
              i.children().remove(),
              i.html(n),
              a.text(o));
      },
      I = l('.js-detail-lab-list'),
      O = I.find('.tab-btn');
    I.find('.tab-content');
    l(document).ready(function () {
      768 < l(a).outerWidth()
        ? C.removeClass('is-mo').addClass('is-pc')
        : C.removeClass('is-pc').addClass('is-mo'),
        l('.js-layer-gnb-close').on('click', function () {
          l('.layer-gnb').fadeOut(400, function () {
            setTimeout(function () {
              l('.js-btn-gnb').removeClass('is-active');
            }, 0);
          }),
            l('.js-layer-gnb-close').removeClass('is-active'),
            (S = !1),
            l.scrollLock(!1);
        }),
        e(),
        n(),
        l('.js-layer-dim, .js-layer-btn-close').on('click', function () {
          0 != l(this).parents('.layer-search').length &&
            0 != l('.js-layer-btn-close').parents('.layer-search').length &&
            (l(a).width() <= 768 &&
            l(this).parents('.layer').hasClass('layer-bottom')
              ? (E(!1),
                l(this).parents('.layer').removeClass('is-show'),
                l(this)
                  .parents('.layer')
                  .find('.layer-content')
                  .css('transform', '')
                  .removeClass('is-full'),
                C.removeClass('is-show-layer-search').css({
                  'z-index': '',
                  overflow: '',
                }))
              : (E(!1),
                l('.gnb-depth-wrap').css('height', ''),
                l('#js-layer-search').css({
                  '--transform': -m,
                  'transition-delay': '0s',
                }),
                l('#js-layer-search .layer-dim').hide(),
                j.css('--duration', ''),
                j.animate(
                  { height: 0 },
                  {
                    duration: 250,
                    complete: function () {
                      l('.layer-search').removeClass('is-show'),
                        l('#js-layer-search').css('transition-delay', ''),
                        l('#js-layer-search').css('z-index', '');
                    },
                  }
                )),
            l('.gnb-depth').css('--durationDepth', ''),
            l.scrollLock(!1),
            (S = !1),
            r());
        }),
        l('.js-layer-touchbar').on('touchmove', function (e) {
          var s = l(this).parents('.layer');
          e.touches[0].clientY > q
            ? s.find('.layer-content').hasClass('is-full') &&
              (s
                .find('.layer-content')
                .css('transform', 'translateY(100%)')
                .removeClass('is-full'),
              setTimeout(function () {
                s.removeClass('is-show'),
                  s.find('.layer-content').css('transform', '');
              }, 300),
              C.removeClass('is-show-layer-search').css({
                'z-index': '',
                overflow: '',
              }),
              E(!1))
            : s
                .find('.layer-content')
                .css('transform', 'translateY(0)')
                .addClass('is-full'),
            (q = e.touches[0].clientY);
        }),
        z(),
        r(),
        (A = !1),
        s(),
        l('.js-open-layer-filter').on('click', function (e) {
          e.preventDefault();
          e = l(this).data('layer-target');
          l(e).toggleClass('is-show'), E(l(e).hasClass('is-show'));
        }),
        l('.js-layer-dim, .js-layer-btn-close').on('click', function () {
          var e;
          0 < l(this).parents('.layer-product-filter').length &&
            ((e = l(this).parents('.layer-product-filter')).removeClass(
              'is-show'
            ),
            e.find('.layer-content').removeClass('is-full').removeAttr('style'),
            E(!1));
        });
    }),
      l(a).on('load', function () {
        var e;
        $(), void 0 !== (e = l(location)[0].hash.split('#')[1]) && c(e);
      });
  })(window, window.jQuery),
  (function (n, r) {
    'use strict';
    function t(e) {
      e
        ? (r('.header').addClass('is-dark'),
          r('.header, .key-visual').css('--color', '#212121'),
          r('.line-progress').css('--bg', '33,33,33'),
          r('.icon-search').addClass('icon-search-black'),
          r('.icon-language').addClass('icon-language-black'),
          r('.icon-hamburger').addClass('icon-hamburger-black'),
          (r(n).scrollTop() <= r(n).height() &&
            r('.header').hasClass('is-open')) ||
            (r('.logo-img-white').hide(), r('.logo-img-black').show()))
        : (r('.header').removeClass('is-dark'),
          r('.layer-search').hasClass('is-show') ||
            (r('.header, .key-visual').css('--color', ''),
            r('.line-progress').css('--bg', ''),
            r('.icon-search').removeClass('icon-search-black'),
            r('.icon-language').removeClass('icon-language-black'),
            r('.icon-hamburger').removeClass('icon-hamburger-black'),
            r(n).scrollTop() <= r(n).height() &&
              r('.header').hasClass('is-open')) ||
            (r('.logo-img-black').hide(), r('.logo-img-white').show()));
    }
    function s() {
      r('[data-animate]').each(function () {
        var e = r(this);
        e.offset().top < r(n).scrollTop() + r(n).innerHeight() &&
          (e.hasClass('link-animate-box') &&
            0 < e.parents('.js-section-main-brand').length &&
            e
              .parents('.js-section-main-brand')
              .addClass('is-change-bg')
              .css('--color', '#ffffff'),
          e.hasClass('js-step1') &&
            (r('.js-box-intro-kv-thumb .box-intro-kv-thumb-inner').addClass(
              'is-show'
            ),
            r(n).width() <= 768) &&
            r('.js-step1, .js-step2').addClass('animate-active'),
          e.addClass('animate-active'));
      });
    }
    function a() {
      var s;
      0 != r('.js-lab-item').length &&
        (r(n).scrollTop() + r(n).innerHeight() >=
          r('.lab-list').offset().top + 200 &&
          r('.js-lab-item').eq(0).addClass('active'),
        (s =
          r('.header').innerHeight() -
          r('.js-lab-item').eq(0).find('img').innerHeight() / 0.75),
        r('.js-lab-item').each(function (e) {
          0 < e &&
            ((e = (
              0 < r('.js-lab-item.active').length
                ? r('.js-lab-item.active').eq(
                    r('.js-lab-item.active').length - 1
                  )
                : r('.js-lab-item.active').eq(0)
            ).index()),
            r('.js-lab-item').eq(e)[0].getBoundingClientRect().top < 0 &&
              r('.js-lab-item').eq(e)[0].getBoundingClientRect().top >= s &&
              ((s =
                r('.header').innerHeight() -
                r('.js-lab-item')
                  .eq(e + 1)
                  .find('img')
                  .innerHeight() /
                  3),
              r('.js-lab-item')
                .eq(e + 1)
                .addClass('active')),
            0 < r('.js-lab-item').parents('.page-lab-list').length) &&
            r('.js-lab-item:nth-last-of-type(2)').hasClass('active') &&
            setTimeout(function () {
              r('.js-lab-item:last-child').addClass('active');
            }, 300);
        }));
    }
    function e() {
      var e, s, t, i, a, o;
      0 == d.length ||
        0 < r('.js-section-lab').parents('.page-lab-list').length ||
        ((e = r('.section-lab .section-box').offset().top),
        (s = r('.section-lab .main-title-area').offset().top),
        (t = r('.section-lab .main-title-area')),
        (i = r('.header').innerHeight()),
        (a = 270),
        (o = 250),
        (o =
          768 < r(n).width() && r(n).width() <= 1366
            ? ((a = 220), (12e3 / 1366) * 1)
            : ((a = 270), 250)),
        e + r('.section-lab .section-box').height() - (s + t.height()) <= 280
          ? (r('.section-lab .section-box').css(
              'padding-left',
              r('.section-lab .main-title-area').innerWidth()
            ),
            t.css({ position: 'absolute', '--bottom': o, '--top': '' }))
          : t.css({ position: 'sticky', '--top': a, '--bottom': '' }),
        r('.section-lab .main-title-area')[0].getBoundingClientRect().top >=
          i + 140 &&
          (r('.section-lab .section-box').css('padding-left', ''),
          t.css({ position: 'sticky', '--top': a, '--bottom': '' })));
    }
    function o() {
      var e;
      0 != r('.js-page-home').length &&
        ((e =
          r('#content').outerHeight(!0) + r('.content-bottom').outerHeight(!0)),
        r('body').css('min-height', e + 'px'));
    }
    function l() {
      1366 <= r(n).width()
        ? r('.section-news .news-link.only-pc').hover(
            function () {
              r(this).parent().addClass('is-hover');
            },
            function () {
              r(this).parent().removeClass('is-hover');
            }
          )
        : r('.section-news .news-link.only-pc').off('mouseenter mouseleave');
    }
    var i,
      c = r('.key-visual'),
      d = r('.js-section-lab'),
      h = !1,
      p = new Swiper('.swiper-key-visual', {
        navigation: {
          nextEl: '.btn-key-visual-next',
          prevEl: '.btn-key-visual-prev',
        },
        loop: !0,
        autoplay: { delay: 5e3, disableOnInteraction: !1 },
        observeParents: !0,
        observer: !0,
        watchSlidesProgress: !0,
        on: {
          init: function (e) {
            var s = r(e.el).find('.swiper-slide').length;
            1 < s &&
              (r('.key-visual-function').css('display', 'flex'),
              r(e.el).find('.group-btn').css('display', 'flex')),
              r('.swiper-key-visual .total').text(s < 10 ? '0' + s : s),
              r('.swiper-key-visual .swiper-slide-active').hasClass('is-black')
                ? (t(!0), c.addClass('is-dark'))
                : (t(!1), c.removeClass('is-dark'));
          },
          afterInit: function () {
            r('.line-progress-current').css('width', '100%');
          },
          beforeTransitionStart: function () {
            r('.line-progress-current').css({ width: '0', transition: 'none' });
          },
          slideChange: function (e) {
            r(e.el).find('.swiper-slide').length <= 1 ||
              r('.swiper-key-visual .current').text(
                9 < e.realIndex + 1 ? e.realIndex + 1 : '0' + (e.realIndex + 1)
              );
          },
          slideChangeTransitionStart: function () {
            r('.swiper-key-visual .swiper-slide-active').hasClass('is-black')
              ? (r('.header').hasClass('is-hover') || t(!0),
                c.addClass('is-dark'))
              : (r('.header').hasClass('is-hover') || t(!1),
                c.removeClass('is-dark')),
              r('.line-progress-current').css({
                width: '100%',
                transition: 'width 5150ms cubic-bezier(0.1, 0.1, 0.1, 0.1)',
              });
          },
        },
      }),
      f = new Swiper('.swiper-intro-lab', {
        navigation: {
          nextEl: '.btn-intro-lab-prev',
          prevEl: '.btn-intro-lab-next',
        },
        observeParents: !0,
        observer: !0,
        loop: !0,
        autoplay: !1,
        slidesPerView: 1,
      }),
      u = new Swiper('.swiper-intro-lab-text', {
        loop: !0,
        slidesPerView: 1,
        autoplay: !1,
        observeParents: !0,
        observer: !0,
        effect: 'fade',
      }),
      g = (((f.controller.control = u).controller.control = f), !1),
      m =
        (r(n).on('resize', function () {
          (i = new Date()),
            r('.section-lab .lab-item').css('transition', 'none'),
            o(),
            !1 === g && ((g = !0), setTimeout(m, 100));
        }),
        function () {
          o(),
            new Date() - i < 100
              ? setTimeout(m, 100)
              : ((g = !1),
                e(),
                l(),
                r('.section-lab .lab-item').css('transition', '1.4s all'),
                0 < r('.js-page-home').length &&
                  1440 <= r(n).width() &&
                  r('.content-bottom').removeAttr('style'));
        });
    r(n).on('scroll', function () {
      s(),
        a(),
        e(),
        h &&
          0 < d.length &&
          ((h = !1), r(n).scrollTop() > d.offset().top + 200) &&
          r('.js-lab-item').addClass('active'),
        0 < r('.js-page-home').length &&
          r(window).width() <= 768 &&
          (r('.content-bottom').outerHeight(!0) + 65 > screen.height
            ? (r('.content-bottom').css('position', 'static'),
              r('body').css('min-height', ''))
            : r(window).scrollTop() <= r(window).height()
            ? r('.content-bottom').css('top', '100%')
            : r('.content-bottom').css('top', ''));
    }),
      r(n).on('load', function () {
        var i, e;
        new Swiper('.news-swiper', {
          observeParents: !0,
          observer: !0,
          breakpoints: {
            320: { slidesPerView: 1.23305, spaceBetween: 16 },
            769: { slidesPerView: 3, spaceBetween: 24 },
          },
        }),
          r('.js-btn-control-kv').on('click', function () {
            r(this).hasClass('is-pause')
              ? (r(this)
                  .removeClass('is-pause')
                  .addClass('is-play')
                  .attr('aria-label', 'Play'),
                p.autoplay.stop())
              : (r(this)
                  .removeClass('is-play')
                  .addClass('is-pause')
                  .attr('aria-label', 'Pause'),
                p.autoplay.start());
          }),
          0 != r('.js-section-main-brand').length &&
            ((i = new Swiper('.brand-swiper', {
              loop: !0,
              slidesPerView: 'auto',
              centeredSlides: !0,
              noSwiping: !1,
              noSwipingClass: '.swiper-slide',
              allowTouchMove: !1,
              autoplay: {
                delay: 2e3,
                disableOnInteraction: !1,
                pauseOnMouseEnter: !0,
              },
              navigation: {
                nextEl: '.brand-area .btn-next',
                prevEl: '.brand-area .btn-prev',
              },
              on: {
                beforeInit: function () {
                  for (
                    var e = r(this.el).find('.swiper-slide').length,
                      s =
                        (r('.js-section-main-brand .total').text(
                          e < 10 ? '0' + e : e
                        ),
                        r('.brand-swiper .swiper-wrapper').html()),
                      e = r(this.el).find('.swiper-slide').length,
                      t = Math.floor(15 / e),
                      i = '',
                      a = 0;
                    a <= t;
                    a++
                  )
                    i += s;
                  r('.brand-swiper .swiper-wrapper').html(i);
                },
                init: function () {
                  r(this.el).find('.swiper-slide').addClass('changed');
                },
                slideChangeTransitionStart: function (e) {
                  var s;
                  r(this.el).find('.swiper-slide').removeClass('changed'),
                    r(this.el).find('.swiper-slide').removeClass('is-active'),
                    r(this.el)
                      .find('.swiper-wrapper')
                      .css('transition-delay', '620ms'),
                    r(this.el).find('.swiper-slide').length <= 1 ||
                      ((s = r(this.el)
                        .find('.swiper-slide-active')
                        .attr('data-num')),
                      r('.js-section-main-brand .current').text(
                        s < 10 ? '0' + s : s
                      ));
                },
                slideChangeTransitionEnd: function () {
                  r(this.el).find('.swiper-slide').addClass('changed'),
                    r(this.el)
                      .find('.swiper-slide-active')
                      .addClass('is-active');
                },
              },
            })),
            r('.btn-control').click(function () {
              r(this).toggleClass('is-stop'),
                r(this).hasClass('is-stop')
                  ? (r(this)
                      .children('.icon')
                      .removeClass('icon-play')
                      .addClass('icon-pause'),
                    r(this).find('.blind').text('Play'),
                    i.autoplay.stop())
                  : (r(this)
                      .children('.icon')
                      .removeClass('icon-pause')
                      .addClass('icon-play'),
                    r(this).find('.blind').text('Pause'),
                    i.autoplay.start());
            }),
            (e = function () {
              var e = r(n).scrollTop(),
                s = r('.brand-area').offset().top,
                t = r('.brand-area').outerHeight() / 2;
              e > s - (r(n).height() - t) &&
                r('.brand-swiper').addClass('is-show'),
                r('.brand-swiper').hasClass('is-show')
                  ? (r('.btn-control').hasClass('is-stop')
                      ? i.autoplay.stop()
                      : i.autoplay.start(),
                    r('.brand-swiper')
                      .find('.swiper-slide-active')
                      .addClass('is-active'))
                  : i.autoplay.stop();
            })(),
            r(n).on('scroll', function () {
              e();
            })),
          s(),
          a(),
          o(),
          l(),
          (h = !0),
          0 < d.length &&
            r(n).scrollTop() > d.offset().top + 200 &&
            r('.js-lab-item').addClass('active');
      });
  })(window, window.jQuery),
  (function (i, n) {
    'use strict';
    function a() {
      var e;
      y.length &&
        ((e = y.offset().top),
        n(i).scrollTop() >= e - 200
          ? (s.addClass('is-fixed').css({ top: 200, bottom: 'auto' }),
            n(i).scrollTop() > e + y.outerHeight() - s.outerHeight() - 200 &&
              s.removeClass('is-fixed').css({ top: 'auto', bottom: x }))
          : s.removeClass('is-fixed').css({ top: 160, bottom: 'auto' }));
    }
    function o() {
      var e = n('.section-entry-point').length
          ? n('.section-entry-point').outerHeight()
          : 0,
        s = (
          k.find('.tab-management-child').length
            ? k.find('.tab-management-child')
            : k
        ).outerHeight();
      C.length &&
        ((s =
          0 < P / 2 - s - e - x - M.outerHeight()
            ? Math.ceil(P / 2 - s - e - x - M.outerHeight())
            : 0),
        y.css('padding-bottom', s));
    }
    function r() {
      var e;
      w.length &&
        C.length &&
        (n(i).scrollTop() < C.offset().top - P / 2
          ? ((e = j.attr('id')),
            n('.btn-tab[aria-controls=' + (t = e) + ']')
              .attr('aria-selected', !0)
              .parent('.management-item')
              .addClass('is-active'))
          : ($.each(function () {
              var e = n(this).next('.tab-management-child').length
                  ? Number(
                      n(this)
                        .next('.tab-management-child')
                        .css('margin-top')
                        .slice(0, -2)
                    )
                  : 0,
                s = n(this).attr('id');
              n(i).scrollTop() >= n(this).offset().top - P / 2 &&
              n(i).scrollTop() <
                n(this).offset().top - P / 2 + n(this).innerHeight() + e
                ? (O.removeClass('is-active')
                    .children('.btn-tab-child')
                    .attr('aria-selected', !1),
                  n('.btn-tab-child[aria-controls=' + s + ']')
                    .attr('aria-selected', !0)
                    .parent('.management-child-item')
                    .addClass('is-active'))
                : n('.btn-tab-child[aria-controls=' + s + ']')
                    .attr('aria-selected', !1)
                    .parent('.management-child-item')
                    .removeClass('is-active');
            }),
            j.each(function () {
              var e = n(this).next('.tab-management-content').length
                  ? Number(
                      n(this)
                        .next('.tab-management-content')
                        .css('margin-top')
                        .slice(0, -2)
                    )
                  : 0,
                s = n(this).attr('id');
              n(i).scrollTop() >= n(this).offset().top - P / 2 &&
                n(i).scrollTop() <
                  n(this).offset().top - P / 2 + n(this).innerHeight() + e &&
                (Y.removeClass('is-active')
                  .children('.btn-tab')
                  .attr('aria-selected', !1),
                n('.btn-tab[aria-controls=' + s + ']')
                  .attr('aria-selected', !0)
                  .parent('.management-item')
                  .addClass('is-active'),
                n(i).scrollTop() >=
                  n(this).offset().top - P / 2 + n(this).innerHeight() &&
                  n('.btn-tab[aria-controls=' + s + ']')
                    .next('.management-child')
                    .find('.management-child-item:last-child')
                    .addClass('is-active')
                    .children('.btn-tab-child')
                    .attr('aria-selected', !0),
                (t = s));
            })));
    }
    function l() {
      var a;
      y.length &&
        ((a = n(i).scrollTop()),
        j.each(function () {
          var e = n(this).attr('id'),
            s = n('.js-management .select-item.is-selected').data('value'),
            t = n(this).offset().top - 150,
            i = t + n(this).outerHeight();
          t <= a &&
            a < i &&
            (L.removeClass('is-selected')
              .children('.btn-selected')
              .attr('aria-selected', !1),
            n('.btn-selected[aria-controls=' + e + ']')
              .attr('aria-selected', !0)
              .parents('.select-item')
              .addClass('is-selected'),
            H.text(s));
        }));
    }
    function c() {
      var e, s;
      y.length &&
        (w.find('.select-dim').css({ height: n(i).outerHeight() }),
        (s = (e = n(i).scrollTop()) - R),
        (R = e) >= y.offset().top - 138
          ? T.css({
              visibility: 'visible',
              opacity: 1,
              'pointer-events': 'initial',
            })
          : T.css({
              visibility: 'hidden',
              opacity: 0,
              'pointer-events': 'none',
            }),
        0 < s
          ? 0 < e &&
            n('.header').hasClass('is-hidden') &&
            (T.css({ transform: 'translateY(-65px)' }),
            w.find('.select-dim').css({ transform: 'translateY(65px)' }))
          : n('.header').hasClass('is-hidden') ||
            (T.css({ transform: 'translateY(0)' }),
            w.find('.select-dim').css({ transform: 'translateY(0)' })));
    }
    function d() {
      y.length &&
        (H.off('click'),
        H.on('click', function () {
          n(this).parents('.select-wrap').hasClass('is-selecting')
            ? (n(this).parents('.select-wrap').removeClass('is-selecting'),
              n('body').css('overflow', ''))
            : (n(this).parents('.select-wrap').addClass('is-selecting'),
              n('body').css('overflow', 'hidden'));
        }));
    }
    function h() {
      n('.js-management').length &&
        (n('.js-management').find('.btn-selected').off('click'),
        n(document).on('click', '.btn-selected', function () {
          var e = '#' + n(this).attr('aria-controls');
          n(i).scrollTop(Math.ceil(n(e).offset().top) - 145),
            l(),
            n(this).parents('.select-wrap').removeClass('is-selecting'),
            n('body').css('overflow', '');
        }));
    }
    function p(e, s) {
      var t;
      n('.header').addClass('is-disabled'),
        n('.js-business-philosophy-swipe').length &&
          !E &&
          ((z = s),
          (v = !0),
          (e === b.length && s) || (-1 === e && !s)
            ? (m.disable(),
              g.disable(),
              (v = !1),
              g.scrollY(g.scrollY() + (e === b.length ? 1 : -1)))
            : ((t = s ? b[e] : b[S]),
              n('.js-business-philosophy-swipe .business-philosophy-panel')
                .eq(e)
                .addClass('is-active'),
              n('.js-business-philosophy-swipe .business-philosophy-panel')
                .not(
                  n('.js-business-philosophy-swipe .business-philosophy-panel')[
                    e
                  ]
                )
                .removeClass('is-active'),
              gsap.to(t, {
                y: function () {
                  s
                    ? (n(
                        '.js-business-philosophy-swipe .business-philosophy-panel.is-active'
                      )
                        .prev()
                        .css({
                          transform: 'translateY(-120%)',
                          transition: 'transform .5s',
                        })
                        .addClass('animation-down'),
                      n(
                        '.js-business-philosophy-swipe .business-philosophy-panel.is-active'
                      )
                        .css({
                          transform: 'translateY(0)',
                          transition: 'transform .5s',
                        })
                        .removeClass('animation-down animation-up'))
                    : (n(
                        '.js-business-philosophy-swipe .business-philosophy-panel.is-active'
                      )
                        .next()
                        .css({
                          transform: 'translateY(-120%)',
                          transition: 'transform .5s',
                        })
                        .removeClass('animation-down')
                        .addClass('animation-up'),
                      n(
                        '.js-business-philosophy-swipe .business-philosophy-panel.is-active'
                      )
                        .css({
                          transform: 'translateY(0)',
                          transition: 'transform .5s',
                        })
                        .addClass('animation-down')
                        .removeClass('animation-down'));
                },
                duration: 0.65,
                onsStart: () => {
                  (E = !0),
                    (s
                      ? n('.header').removeClass('is-disabled is-hidden')
                      : n('.header')
                    ).css('transform', '');
                },
                onComplete: () => {
                  (v = E = !1), n('.header').removeClass('is-disabled');
                },
              }),
              (S = e)));
    }
    function f() {
      w.length &&
        n(document).on('click', '.btn-tab, .btn-tab-child', function (e) {
          var s;
          e.preventDefault(),
            t != n(this).attr('aria-controls') &&
              ((e =
                n('#' + n(this).attr('aria-controls')).offset().top -
                n(i).outerHeight() / 2 +
                1),
              (s = n(this).attr('aria-controls')),
              (t = n(this).attr('aria-controls')),
              0 < n('.js-business-philosophy-swipe').length &&
                'tab-management-content3' == s &&
                -1 == S &&
                p(
                  S +
                    n(
                      '.js-business-philosophy-swipe .business-philosophy-panel'
                    ).length -
                    2,
                  !0
                ),
              (D = !0),
              n('html, body').animate(
                { scrollTop: 0 < e ? e : 0 },
                {
                  duration: 500,
                  complete: function () {
                    D = !1;
                  },
                }
              ));
        });
    }
    function u() {
      var a, o;
      y.length &&
        ((a = n(i).outerWidth()),
        (o = y.find('.tooltip')),
        a <= 1366
          ? o.on('click', function () {
              var e = n(this).find('.tooltip-info'),
                s = n(this).find('.edge'),
                t = e.outerWidth(),
                i = n(this)[0].offsetLeft;
              a < i + t
                ? (e.css({ left: a - (i + t + 24) }),
                  s.css({ left: i + t + 41 - a }))
                : (e.removeAttr('style'), s.removeAttr('style')),
                o.find('.system-category-text').removeAttr('style'),
                o.find('.tooltip-info').hide(),
                e.show(),
                o.removeAttr('style'),
                n(this)
                  .find('.system-category-text')
                  .css({ borderBottom: '1px solid #0079fa' });
            })
          : o.off('click'));
    }
    function V() {
      n('.js-communication-detail').length &&
        n('.js-communication-detail, .js-communication-channel-btn').on(
          'click',
          function (e) {
            e.preventDefault(), n('html').css('scroll-behavior', 'smooth');
            var t = n(this).attr('aria-controls');
            n('.js-communication-detail').parent().removeClass('is-selected'),
              n('.js-communication-channel').removeClass('is-open'),
              n(this).hasClass('js-communication-detail')
                ? (n(this).parent().addClass('is-selected'),
                  n(t).addClass('is-open'),
                  (e = t),
                  n(i).width() <= 768 &&
                    n('html, body').scrollTop(
                      n(e).offset().top - n('.header').outerHeight()
                    ))
                : (n('.js-communication-detail').each(function (e, s) {
                    n(s).attr('aria-controls') == t
                      ? n(s).parent().addClass('is-selected')
                      : n(s).parent().removeClass('is-selected');
                  }),
                  n(this).parent().addClass('is-open')),
              n('html').css('scroll-behavior', '');
          }
        );
    }
    var g,
      m,
      b,
      v,
      z,
      t,
      w = n('.section-management'),
      y = n('.js-management'),
      s = y.find('.management-tabs'),
      C = y.find('.management-content'),
      j = y.find('.tab-management-content'),
      $ = y.find('.tab-management-child'),
      Y = y.find('.management-item'),
      O = y.find('.management-child-item'),
      k = j.eq(j.length - 1),
      x = 0 < w.length ? Number(w.css('padding-bottom').slice(0, -2)) : 0,
      T = y.find('.management-select'),
      L = T.find('.select-item'),
      H = T.find('.selected-cur'),
      P = n(i).outerHeight(),
      M = n('.footer'),
      R = n(i).scrollTop(),
      S = -1,
      D = !1,
      E = !1,
      Q =
        (gsap.registerPlugin(ScrollTrigger),
        n('.js-business-philosophy-swipe .business-philosophy-panel').on(
          'transitionstart webkitTransitionStart oTransitionStart MSTransitionStart',
          function () {
            E = !0;
          }
        ),
        n('.js-business-philosophy-swipe .business-philosophy-panel').on(
          'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
          function () {
            (E = !1),
              n(
                '.js-business-philosophy-swipe .business-philosophy-panel.animation-down'
              ).css('transform', 'translateY(120%)'),
              z ||
                (768 < n(i).width() &&
                  (n(
                    '.business-philosophy-box.business-philosophy-panel.animation-up'
                  ).css({
                    transform: 'translateY(120%)',
                    transition: 'transform 0s',
                    visibility: 'hidden',
                    opacity: '0',
                  }),
                  setTimeout(function () {
                    n('.business-philosophy-box.business-philosophy-panel')
                      .css({ visibility: '', opacity: '1' })
                      .removeClass('animation-up');
                  }, 0)));
          }
        ),
        0);
    function N() {
      n('.tab-activities-swiper').length &&
        new Swiper('.tab-activities-swiper', {
          slidesPerView: 'auto',
          grabCursor: !0,
          observer: !0,
          on: {
            init: function (e) {
              var s = n(this.el).find('.swiper-slide.is-active').index();
              e.slideTo(s);
            },
          },
        });
    }
    var A = void 0;
    function U() {
      var e;
      n('.csr-news-swiper').length &&
        ((e = n(window).width()) <= 768 && null == A
          ? (A = new Swiper('.csr-news-swiper', {
              spaceBetween: 24,
              activeIndex: 0,
              slidesPerView: 1,
            }))
          : 768 < e &&
            null != A &&
            (A.destroy(),
            (A = void 0),
            n('.csr-news-swiper .swiper-wrapper').removeAttr('style'),
            n('.csr-news-swiper .swiper-slide').removeAttr('style')));
    }
    function q(e) {
      e
        ? ((I = n(i).scrollTop()),
          n('body').css('top', `-${I}px`).addClass('scroll-lock'))
        : (n('body').css('top', '').removeClass('scroll-lock'),
          window.scrollTo(0, I));
    }
    function W() {
      e = new Swiper('.swiper-certification-iso', { slidesPerView: 'auto' });
    }
    function F() {
      5 < n('.swiper-certification-iso .swiper-certification-item').length
        ? W()
        : e && e.destroy(!1, !0);
    }
    var e,
      B,
      I = 0;
    n(i).on('load', function () {
      var e, s, t;
      n('.js-business-philosophy-swipe').length &&
        (ScrollTrigger.enable(),
        gsap.matchMedia().add('(min-width: 769px)', () => {
          (b = gsap.utils.toArray(
            '.js-business-philosophy-swipe .business-philosophy-panel'
          )),
            gsap.set('.translateY', { yPercent: 100 }),
            gsap.set(b, { zIndex: (e) => e }),
            (m = ScrollTrigger.observe({
              type: 'wheel, touch, scroll',
              onUp: () => !v && p(S + 1, !0),
              onDown: () => !v && p(S - 1, !1),
              wheelSpeed: -1,
              tolerance: 1,
              preventDefault: !0,
              onPress: (e) => {
                ScrollTrigger.isTouch && e.event.preventDefault();
              },
            })).disable(),
            (g = ScrollTrigger.observe({
              preventDefault: !0,
              type: 'wheel,scroll',
              allowClicks: !0,
              onEnable: (e) => (e.savedScroll = e.scrollY()),
              onChangeY: (e) => {
                e.scrollY(e.savedScroll);
              },
            })).disable(),
            ScrollTrigger.config({
              autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
            }),
            ScrollTrigger.create({
              trigger: '.js-business-philosophy-swipe',
              scrub: !0,
              start: 'top 30%',
              end: 'top 30%',
              onEnter: (e) => {
                n('.js-management .btn-tab').on('click', function () {
                  (v = !1), g.disable(), m.disable();
                }),
                  D ||
                    E ||
                    (!1 === g.isEnabled &&
                      (n('.header')
                        .removeClass('is-disabled is-hidden')
                        .css('transform', ''),
                      e.scroll(e.start),
                      g.enable(),
                      m.enable(),
                      p(S + 1, !0)));
              },
              onEnterBack: (e) => {
                D ||
                  E ||
                  (!1 === g.isEnabled &&
                    (n('.header').addClass('is-disabled'),
                    e.scroll(e.start),
                    g.enable(),
                    m.enable(),
                    p(S - 1, !1)));
              },
            }),
            n('.js-business-philosophy-swipe .business-philosophy-panel')
              .eq(0)
              .addClass('is-active');
        })),
        (1600 <= n(i).innerWidth()
          ? (a(), o(), r(), f)
          : (l(), c(), d(), h(), u))(),
        new Swiper('.operating-performance-swiper', {
          scrollbar: { el: '.swiper-scrollbar' },
          breakpoints: {
            360: { slidesPerView: 1, spaceBetween: 50 },
            769: { slidesPerView: 2, spaceBetween: 50 },
            1367: { slidesPerView: 2, spaceBetween: 128 },
          },
        }),
        n('body').on('click', function (e) {
          n(e.target).closest('.tooltip').length ||
            n('.js-page-home').length ||
            n(
              '.tooltip, .tooltip .system-category-text, .tooltip-info, .edge'
            ).removeAttr('style');
        }),
        V(),
        (e = n('.js-csr-activities')),
        (s = n('.tab-activities-content')),
        (t = e.find('.btn-activities-tab')),
        s.removeClass('is-active'),
        t.each(function () {
          var e;
          n(this).parent('.tab-activities-item').hasClass('is-active') &&
            ((e = n(this).attr('aria-controls')),
            n('#' + e).addClass('is-active'));
        }),
        t.on('click', function (e) {
          e.preventDefault();
          var e = n(this).parents('.tab-activities-item'),
            s = n(this).attr('aria-controls'),
            s = n('#' + s);
          t.attr('aria-selected', 'false'),
            n(this).attr('aria-selected', 'true'),
            e
              .addClass('is-active')
              .siblings('.tab-activities-item')
              .removeClass('is-active'),
            s
              .addClass('is-active')
              .siblings('.tab-activities-content')
              .removeClass('is-active');
        }),
        n('.csr-news-search-filter').length &&
          (n('.csr-news-search-filter .btn-filter').on('click', function (e) {
            var e = n(e.currentTarget),
              s = 'true' === e.attr('aria-expanded') || !1;
            e.attr('aria-expanded', !s), e.toggleClass('is-active');
          }),
          n('.csr-news-search-filter .filter-option-button').on(
            'click',
            function (e) {
              var e = n(e.currentTarget),
                s = e.text();
              e.parents('.filter-option')
                .prev('.btn-filter')
                .text(s)
                .removeClass('is-active');
            }
          ),
          n(document).on('click', function (e) {
            0 == n(e.target).closest('.csr-news-search-filter').length &&
              n('.csr-news-search-filter .btn-filter').removeClass('is-active');
          })),
        N(),
        U(),
        n('.js-csr-activities .csr-activities-link').on('click', function (e) {
          e.preventDefault();
          e = n(this).attr('aria-controls');
          n('.layer-csr-activities').show(),
            n('.layer-csr-activities .layer-wrap').hide(),
            n('.layer-csr-activities #' + e).show(),
            q(!0);
        }),
        n('.js-layer-csr-activities .btn-close').on('click', function (e) {
          n('.js-layer-csr-activities').hide(), q(!1);
        }),
        n('.js-layer-csr-activities .js-layer-dim').on('click', function (e) {
          n('.js-layer-csr-activities').hide(), q(!1);
        }),
        n('.js-synthetic-report-filter').length &&
          (n('.js-synthetic-report-filter .btn-filter').on(
            'click',
            function (e) {
              var e = n(e.currentTarget),
                s = 'true' === e.attr('aria-expanded') || !1;
              e.attr('aria-expanded', !s), e.toggleClass('is-active');
            }
          ),
          n('.js-synthetic-report-filter .btn-option').on(
            'click',
            function (e) {
              var e = n(e.currentTarget),
                s = e.text();
              e
                .addClass('is-selected')
                .closest('.option')
                .siblings()
                .children()
                .removeClass('is-selected'),
                e
                  .parents('.synthetic-report-options')
                  .prev('.btn-filter')
                  .attr('aria-expanded', !1)
                  .text(s)
                  .removeClass('is-active');
            }
          ),
          n(document).on('click', function (e) {
            0 == n(e.target).closest('.js-synthetic-report-filter').length &&
              n('.js-synthetic-report-filter .btn-filter').removeClass(
                'is-active'
              );
          })),
        new Swiper('.swiper-env-safety', { slidesPerView: 'auto' }),
        n('.js-business-philosophy-swipe').length &&
          n('.js-back-to-top').on('click', function () {
            ScrollTrigger.disable(), g.disable(), m.disable();
          }),
        (n(i).width() <= 768 ? W : F)();
    }),
      n(i).on('resize', function () {
        (v = !0),
          V(),
          N(),
          U(),
          1600 <= n(i).innerWidth()
            ? (r(), a(), o(), f())
            : (c(),
              d(),
              l(),
              h(),
              u(),
              T.length &&
                (T.find('.select-wrap').removeClass('is-selecting'),
                n('body').css('overflow', '')),
              y.find('.tooltip').length && n('body').trigger('click')),
          B && clearTimeout(B),
          (B = setTimeout(function () {
            768 < n(i).width() &&
              g &&
              m &&
              ((v = !1), g.disable(), m.disable()),
              0 < n('.js-business-philosophy-swipe').length &&
                ScrollTrigger.config({
                  autoRefreshEvents:
                    'visibilitychange,DOMContentLoaded,load,resize',
                }),
              n(i).width() <= 768
                ? W()
                : n('.swiper-certification-iso').length && F();
          }, 200));
      }),
      n(i).on('scroll', function () {
        1600 <= n(i).innerWidth()
          ? (a(),
            r(),
            n('.js-business-philosophy-swipe').length &&
              (Q <= n(i).scrollTop() &&
                !v &&
                n('.header').removeClass('is-disabled'),
              (Q = n(i).scrollTop())))
          : (l(), c(), h());
      });
  })(window, window.jQuery),
  (function (e, t) {
    'use strict';
    function i() {
      1366 <= window.innerWidth
        ? t('.js-press-release-slide').hover(
            function () {
              t('.js-press-release-info')
                .eq(t(this).index())
                .children('.press-release-title')
                .addClass('is-hover');
            },
            function () {
              t('.js-press-release-info')
                .eq(t(this).index())
                .children('.press-release-title')
                .removeClass('is-hover');
            }
          )
        : t('.js-press-release-slide').off('mouseenter mouseleave');
    }
    var s;
    t(e)
      .on('resize', function () {
        s && clearTimeout(s),
          (s = setTimeout(function () {
            i();
          }, 50));
      })
      .resize(),
      t(e).on('load', function () {
        var e, s;
        t('.js-thumb .thumb-link').on('click', function (e) {
          e.preventDefault();
          e = t(this).find('img').attr('src');
          t('.layer-thumb img').attr('src', e),
            t('.layer-sns').show(),
            t.scrollLock(!0);
        }),
          t('.js-layer-dim, .btn-close').on('click', function () {
            t('.layer-sns').hide(), t.scrollLock(!1);
          }),
          t('.js-history-back').on('click', function () {
            history.back();
          }),
          t('.newsroom-search-filter').length &&
            (t('.newsroom-search-filter .btn-filter').on('click', function (e) {
              var e = t(e.currentTarget),
                s = 'true' === e.attr('aria-expanded') || !1;
              e.attr('aria-expanded', !s), e.toggleClass('is-active');
            }),
            t('.newsroom-search-filter .filter-option-button').on(
              'click',
              function (e) {
                var e = t(e.currentTarget),
                  s = e.text();
                e.parents('.filter-option')
                  .prev('.btn-filter')
                  .text(s)
                  .removeClass('is-active');
              }
            ),
            t(document).on('click', function (e) {
              0 == t(e.target).closest('.newsroom-search-filter').length &&
                t('.newsroom-search-filter .btn-filter').removeClass(
                  'is-active'
                );
            })),
          0 != t('.swiper-press-release').length &&
            ((e = new Swiper('.swiper-press-release', {
              navigation: {
                nextEl: '.press-release-btn-next',
                prevEl: '.press-release-btn-prev',
              },
              loop: !0,
              autoplay: { delay: 5e3, disableOnInteraction: !1 },
              observeParents: !0,
              observer: !0,
              on: {
                init: function (e) {
                  e = t(e.el).find('.swiper-slide').length;
                  1 < e
                    ? t(
                        '.press-release-function, .press-release-group'
                      ).addClass('is-show')
                    : t('.swiper-press-release-info .total').text(
                        e < 10 ? '0' + e : e
                      );
                },
                afterInit: function (e) {
                  1 < t(e.el).find('.swiper-slide').length &&
                    setTimeout(function () {
                      t('.line-progress-current').css({
                        width: '100%',
                        transition:
                          'width 4850ms cubic-bezier(0.1, 0.1, 0.1, 0.1)',
                      });
                    }, 40);
                },
                beforeTransitionStart: function () {
                  t('.line-progress-current').css({
                    width: '0',
                    transition: 'none',
                  });
                },
                slideChange: function (e) {
                  t(e.el).find('.swiper-slide').length <= 1 ||
                    t('.swiper-press-release-info .current').text(
                      9 < e.realIndex + 1
                        ? e.realIndex + 1
                        : '0' + (e.realIndex + 1)
                    );
                },
                slideChangeTransitionStart: function () {
                  setTimeout(function () {
                    t('.line-progress-current').css({
                      width: '100%',
                      transition:
                        'width 5150ms cubic-bezier(0.1, 0.1, 0.1, 0.1)',
                    });
                  }, 20);
                },
              },
            })),
            (s = new Swiper('.swiper-press-release-info', {
              loop: !0,
              observeParents: !0,
              observer: !0,
              spaceBetween: 20,
              watchSlidesProgress: !0,
              allowTouchMove: !1,
            })),
            ((e.controller.control = s).controller.control = e)),
          i();
      });
  })(window, window.jQuery),
  (function (e, n) {
    'use strict';
    function s() {
      var e;
      n('.js-materials').length &&
        (768 < (e = n(window).width()) && null == c
          ? (c = new Swiper('.js-materials', {
              slidesPerView: 3,
              spaceBetween: 24,
              activeIndex: 0,
              grabCursor: !0,
              observer: !0,
              observeParents: !0,
              resistanceRatio: 0,
              scrollbar: { el: '.swiper-scrollbar', draggable: !0 },
            }))
          : e <= 768 &&
            null != c &&
            (c.destroy(),
            (c = void 0),
            n('.js-materials .swiper-wrapper').removeAttr('style'),
            n('.js-materials .swiper-slide').removeAttr('style')));
    }
    function t() {
      var e;
      n('.js-formulation').length &&
        (768 < (e = n(window).width()) && null == d
          ? (d = new Swiper('.js-formulation', {
              slidesPerView: 1,
              spaceBetween: 40,
              activeIndex: 0,
              grabCursor: !0,
              observer: !0,
              observeParents: !0,
              resistanceRatio: 0,
              scrollbar: { el: '.swiper-scrollbar', draggable: !0 },
            }))
          : e <= 768 &&
            null != d &&
            (d.destroy(),
            (d = void 0),
            n('.js-formulation .swiper-wrapper').removeAttr('style'),
            n('.js-formulation .swiper-slide').removeAttr('style')));
    }
    function i() {
      var e;
      n('.js-analytical-science').length &&
        (768 < (e = n(window).width()) && null == h
          ? (h = new Swiper('.js-analytical-science', {
              slidesPerView: 1,
              spaceBetween: 40,
              activeIndex: 0,
              grabCursor: !0,
              observer: !0,
              observeParents: !0,
              resistanceRatio: 0,
              scrollbar: { el: '.swiper-scrollbar', draggable: !0 },
            }))
          : e <= 768 &&
            null != h &&
            (h.destroy(),
            (h = void 0),
            n('.js-analytical-science .swiper-wrapper').removeAttr('style'),
            n('.js-analytical-science .swiper-slide').removeAttr('style')));
    }
    function a() {
      var a, o;
      n('.js-formulation').length &&
        ((a = n(e).outerWidth()),
        (o = n('.js-formulation').find('.tooltip')),
        a <= 1366
          ? o.on('click', function () {
              var e = n(this).find('.tooltip-info'),
                s = n(this).find('.edge'),
                t = e.outerWidth(),
                i = n(this)[0].offsetLeft;
              a < i + t
                ? (e.css({ left: a - (i + t + 24) }),
                  s.css({ left: i + t + 41 - a }))
                : (e.removeAttr('style'), s.removeAttr('style')),
                o.find('.tooltip-info').hide(),
                e.show(),
                o.removeAttr('style'),
                n(this).css({ borderBottom: '1px solid #0079fa' });
            })
          : o.off('click'));
    }
    var o,
      r = n('.js-detail-lab-list'),
      l = r.find('.tab-btn'),
      c = void 0,
      d = void 0,
      h = void 0;
    n(e).on('load', function () {
      r.length &&
        (o = new Swiper('.js-detail-lab-list .lab-list-swiper', {
          slidesPerView: 'auto',
          resistanceRatio: 0,
          spaceBetween: 20,
          breakpoints: { 769: { spaceBetween: 24 } },
          on: {
            init: function (e) {
              var s = n(this.el).find('.swiper-slide.is-active').index();
              e.slideTo(s);
            },
          },
        })),
        r.length &&
          n(document).on('click', '.tab-btn', function () {
            var e = n(this).attr('data-link'),
              e = n('.tab-content[data-id=' + e + ']');
            l.closest('.tab-item').removeClass('is-active'),
              n(this).closest('.tab-item').addClass('is-active'),
              e
                .addClass('is-show')
                .siblings('.tab-content')
                .removeClass('is-show');
          }),
        s(),
        t(),
        i(),
        n('body').on('click', function (e) {
          n(e.target).closest('.tooltip').length ||
            n('.js-page-home').length ||
            n('.tooltip, .tooltip-info, .edge').removeAttr('style');
        }),
        a(),
        r.length &&
          (n('.js-scroll-section .link').click(function () {
            var e = r.find('.swiper-slide.is-active').index();
            o.slideTo(e);
          }),
          n(e).on('resize', function () {
            var e = r.find('.swiper-slide.is-active').index();
            o.slideTo(e);
          }));
    }),
      n(e).on('resize', function () {
        s(), t(), i(), a(), n('.tooltip').length && n('body').trigger('click');
      }),
      n(e).on('scroll', function () {});
  })(window, window.jQuery),
  (function (o, n) {
    'use strict';
    function r(e, s) {
      n(s).fadeOut(500),
        n(s + ` .text, ${s} .desc`).animate(
          { opacity: '0' },
          {
            duration: 500,
            start: function () {
              (m = !0),
                n(e + ' .text').removeAttr('style'),
                n(e + ' .desc').removeAttr('style');
            },
            done: function () {
              (g = m = !1), n(e).show();
            },
          }
        );
    }
    function e() {
      var e, s, t, i, a;
      0 < n('.js-intro-kv').length &&
        ((e = n(o).scrollTop()),
        (s = n(o).height()),
        (t = n('.header').height()),
        (i = (a = n('.js-intro-kv')).outerHeight(!0)),
        (a = a.offset().top),
        (b = !(e < a - s / 2 || e > n('.js-intro-kv').next().offset().top)),
        m ||
          b ||
          (e < p
            ? ((f = !0),
              a + i < s ||
              (0 == e &&
                n('.js-step2').is(':visible') &&
                r('.js-step1', '.js-step2'),
              n('.js-intro-kv-content').offset().top - 280 > e + s)
                ? r('.js-step1', '.js-step2')
                : e + s <= a + i + t &&
                  ((u = !0),
                  r('.js-step1', '.js-step2'),
                  n('.js-step1').is(':visible')))
            : (u = f = !1),
          a < e + s &&
            s < a + i &&
            f &&
            n('.js-step2').is(':visible') &&
            !u &&
            (r('.js-step1', '.js-step2'), (g = !0)),
          (p = e)));
    }
    function s() {
      var e, s, t;
      0 != n('.js-box-intro-kv-text').length &&
        1366 <= n(o).width() &&
        ((t =
          (e = n('.js-intro-kv-content').width()) -
          (s = n('.js-box-intro-kv-thumb').width()) +
          24),
        n('.js-box-intro-kv-text')
          .eq(0)
          .css({ right: t, width: (e - s) / 2 - 12 }),
        n('.js-box-intro-kv-text')
          .eq(1)
          .css({ left: 22 + t, width: (e - s) / 2 + 6 }));
    }
    function i() {
      1366 <= n(o).width() && 0 < n('.research-product-info').length
        ? n('.research-product-info').each(function (e, s) {
            var t = n(this).parent(),
              i = t.children('.research-product-thumb'),
              t = (t.width() - i.width()) / 2 + i.width() + 20;
            n(this).css('left', t);
          })
        : n('.research-product-info').removeAttr('style');
    }
    function a() {
      n('.js-diagonal-line').length &&
        n('.js-diagonal-line tbody tr').each(function (e, a) {
          n(a)
            .find('.line')
            .each(function (e, s) {
              var t = n(s).attr('data-processing'),
                i = 0;
              n(a)
                .find('.' + t)
                .each(function (e, s) {
                  i += n(s).width();
                }),
                n(s).css('width', i);
            });
        });
    }
    function l() {
      n('.js-bg-diagonal-line').length &&
        n('.js-bg-diagonal-line tbody tr').each(function (e, a) {
          n(a)
            .find('.line')
            .each(function (e, s) {
              var t = n(s).attr('data-processing'),
                i = 0;
              n(a)
                .find('.' + t)
                .each(function (e, s) {
                  i += n(s).width();
                }),
                n(s).css('width', i);
            });
        });
    }
    function c() {
      n('.js-diagonal-line').length &&
        n('.js-diagonal-line tbody tr').each(function (e, s) {
          var t = n(s).find('.is-diagonal-line .processing-type7');
          let i = 0;
          t.each(function (e, s) {
            i += n(s).width();
          }),
            n(s).find('.diagonal-line').css('width', i);
        });
    }
    function d() {
      n('.js-bg-diagonal-line').length &&
        n('.js-bg-diagonal-line tbody tr').each(function (e, s) {
          var t = n(s).find('.is-diagonal-line');
          let i = 0;
          t.each(function (e, s) {
            i += n(s).width();
          }),
            n(s).find('.bg-diagonal-line').css('width', i);
        });
    }
    function h() {
      n('.js-pipeline').length &&
        n('.js-pipeline').offset().top <
          n(o).scrollTop() + n(o).innerHeight() / 2 &&
        (n('.js-pipeline').addClass('is-active'), c(), d(), a(), l());
    }
    var t,
      p = 0,
      f = !1,
      u = !1,
      g = !1,
      m = !0,
      b = !1;
    n('.js-step1').on(
      'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd',
      function () {
        (m = !1),
          g ||
            (n('.js-step1').is(':visible') &&
              n('.js-step1').hasClass('animate-active') &&
              (n('.js-step1').fadeOut(500),
              n('.js-step1 .text,.js-step1 .desc').animate(
                { opacity: '0' },
                {
                  duration: 500,
                  start: function () {
                    n(o).height() > n(o).scrollTop() && !f && (m = !0),
                      n('.js-step2 .text,.js-step2 .desc').removeAttr('style');
                  },
                  done: function () {
                    n('.js-step2').show(), (g = !(m = !1));
                  },
                }
              )));
      }
    );
    n(o)
      .on('resize', function () {
        t && clearTimeout(t),
          (t = setTimeout(function () {
            s();
          }, 50));
      })
      .resize(),
      n(o).on('resize', function () {
        c(), d(), a(), l();
      }),
      n(o).on('scroll', function () {
        e(), h();
      }),
      n(o).on('load', function () {
        var t;
        e(),
          s(),
          0 < n('.research-product-slider').length &&
            new Swiper('.research-product-slider', {
              grabCursor: !0,
              observer: !0,
              scrollbar: { el: '.swiper-scrollbar', draggable: !0 },
              breakpoints: {
                320: {
                  resistanceRatio: 0,
                  freeMode: !0,
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                769: { slidesPerView: 'auto', spaceBetween: 75 },
              },
              on: {
                init: function () {
                  i();
                },
                resize: function () {
                  i();
                },
              },
            }),
          (t = n('.js-pipeline').find('.btn-tab')).on('click', function (e) {
            e.preventDefault();
            var e = n(this).parents('.pipeline-item'),
              s = n(this).attr('aria-controls'),
              s = n('#' + s);
            t.attr('aria-selected', 'false'),
              n(this).attr('aria-selected', 'true'),
              e
                .addClass('is-active')
                .siblings('.pipeline-item')
                .removeClass('is-active'),
              s.show().siblings('.tab-content').hide(),
              c(),
              d(),
              a(),
              l();
          }),
          h();
      });
  })(window, window.jQuery),
  (function (n, r) {
    'use strict';
    function l() {
      var e;
      t.length &&
        ((e = t.offset().top),
        r(n).scrollTop() >= e - 200
          ? (s.addClass('is-fixed').css({ top: 200, bottom: 'auto' }),
            r(n).scrollTop() > e + t.outerHeight() - s.outerHeight() - 200 &&
              s.removeClass('is-fixed').css({ top: 'auto', bottom: j }))
          : s.removeClass('is-fixed').css({ top: 156, bottom: 'auto' }));
    }
    function c() {
      var e = r('.section-entry-point').length
          ? r('.section-entry-point').outerHeight()
          : 0,
        s = (
          C.find('.tab-recruit-child').length ? C.find('.tab-recruit-child') : C
        ).outerHeight();
      i.length &&
        ((s =
          0 < H / 2 - s - e - j - P.outerHeight()
            ? Math.ceil(H / 2 - s - e - j - P.outerHeight())
            : 0),
        t.css('padding-bottom', s));
    }
    function d() {
      var e;
      w.length &&
        i.length &&
        (r(n).scrollTop() < i.offset().top - H / 2
          ? ((e = o.attr('id')),
            r('.btn-tab[aria-controls=' + e + ']')
              .attr('aria-selected', !0)
              .parent('.recruit-item')
              .addClass('is-active'))
          : o.each(function () {
              var e = r(this).next('.tab-recruit-content').length
                  ? Number(
                      r(this)
                        .next('.tab-recruit-content')
                        .css('margin-top')
                        .slice(0, -2)
                    )
                  : 0,
                s = r(this).attr('id');
              r(n).scrollTop() >= r(this).offset().top - H / 2 &&
                r(n).scrollTop() <
                  r(this).offset().top - H / 2 + r(this).innerHeight() + e &&
                (a
                  .removeClass('is-active')
                  .children('.btn-tab')
                  .attr('aria-selected', !1),
                r('.btn-tab[aria-controls=' + s + ']')
                  .attr('aria-selected', !0)
                  .parent('.recruit-item')
                  .addClass('is-active'),
                r(n).scrollTop() >=
                  r(this).offset().top - H / 2 + r(this).innerHeight()) &&
                r('.btn-tab[aria-controls=' + s + ']')
                  .next('.recruit-child')
                  .find('.recruit-child-item:last-child')
                  .addClass('is-active')
                  .children('.btn-tab-child')
                  .attr('aria-selected', !0);
            }));
    }
    function h() {
      var a;
      t.length &&
        ((a = r(n).scrollTop()),
        o.each(function () {
          var e = r(this).attr('id'),
            s = r('.js-recruit .select-item.is-selected').data('value'),
            t = r(this).offset().top - 150,
            i = t + r(this).outerHeight();
          t <= a &&
            a < i &&
            (x
              .removeClass('is-selected')
              .children('.btn-selected')
              .attr('aria-selected', !1),
            r('.btn-selected[aria-controls=' + e + ']')
              .attr('aria-selected', !0)
              .parents('.select-item')
              .addClass('is-selected'),
            T.text(s));
        }));
    }
    function p() {
      var e, s;
      t.length &&
        (w.find('.select-dim').css({ height: r(n).outerHeight() }),
        (s = (e = r(n).scrollTop()) - E),
        (E = e) >= t.offset().top - 138
          ? k.css({
              visibility: 'visible',
              opacity: 1,
              'pointer-events': 'initial',
            })
          : k.css({
              visibility: 'hidden',
              opacity: 0,
              'pointer-events': 'none',
            }),
        0 < s
          ? 0 < e &&
            r('.header').hasClass('is-hidden') &&
            (k.css({ transform: 'translateY(-65px)' }),
            w.find('.select-dim').css({ transform: 'translateY(65px)' }))
          : r('.header').hasClass('is-hidden') ||
            (k.css({ transform: 'translateY(0)' }),
            w.find('.select-dim').css({ transform: 'translateY(0)' })));
    }
    function f() {
      t.length &&
        (T.off('click'),
        T.on('click', function () {
          r(this).parents('.select-wrap').hasClass('is-selecting')
            ? (r(this).parents('.select-wrap').removeClass('is-selecting'),
              r('body').css('overflow', ''))
            : (r(this).parents('.select-wrap').addClass('is-selecting'),
              r('body').css('overflow', 'hidden'));
        }));
    }
    function u() {
      r('.js-recruit').length &&
        (r('.js-recruit').find('.btn-selected').off('click'),
        r(document).on('click', '.btn-selected', function () {
          var e = '#' + r(this).attr('aria-controls');
          r(n).scrollTop(Math.ceil(r(e).offset().top) - 145),
            h(),
            r(this).parents('.select-wrap').removeClass('is-selecting'),
            r('body').css('overflow', '');
        }));
    }
    function g() {
      r('.js-benefits-swiper').length &&
        ((D = new Swiper('.js-benefits-swiper', {
          resistanceRatio: 0,
          grabCursor: !0,
          activeIndex: 0,
          navigation: {
            nextEl: '.swiper-control-next',
            prevEl: '.swiper-control-prev',
          },
          observeParents: !0,
          observer: !0,
          breakpoints: {
            320: { slidesPerView: 'auto', spaceBetween: 16 },
            769: { slidesPerView: 1, spaceBetween: 16 },
          },
        })),
        r('.js-pagination-current').text(1),
        D.on('slideChange', function () {
          var e = D.realIndex + 1;
          r('.js-pagination-current').text(e);
        }));
    }
    function m(s, t) {
      var i = r('.js-filter-position-detail');
      0 < i.find('li').length && i.find('li').remove(),
        arrPositionDetail.forEach((e) => {
          e.idPosition === s &&
            (e.id === t
              ? (i.find('.btn-filter').text(e.name).attr('data-id', t),
                i
                  .find('.filter-option')
                  .append(
                    `<li class="option"><button type="button" aria-selected="true" data-position="${e.idPosition}" data-detail="${e.id}" class="btn-option is-selected">${e.name}</button></li>`
                  ))
              : i
                  .find('.filter-option')
                  .append(
                    `<li class="option"><button type="button" aria-selected="false" data-position="${e.idPosition}" data-detail="${e.id}" class="btn-option">${e.name}</button></li>`
                  ));
        });
    }
    function b(s, t) {
      var e = r('.js-layer-job-introduction'),
        i =
          (r('.layer-inner').scrollTop(0),
          arrPositionContent.find(function (e) {
            return e.idDetail == t && e.idPosition == s;
          })),
        a = arrPositionDetail.find(function (e) {
          return e.id == t && e.idPosition == s;
        });
      e.find('.layer-title-name').html(a.name),
        e.find('.layer-title-text').html(i.text),
        e.find('.box-item-desc').each(function (e, s) {
          r(s).html(i.content[e]);
        });
    }
    function v(e) {
      e
        ? ((A = r(n).scrollTop()), r('body').addClass('scroll-lock'))
        : (r('body').removeClass('scroll-lock'), window.scrollTo(0, A));
    }
    var w = r('.section-recruit'),
      t = r('.js-recruit'),
      y = r('.js-benefits'),
      s = t.find('.recruit-tabs'),
      i = t.find('.recruit-content'),
      o = t.find('.tab-recruit-content'),
      a = t.find('.recruit-item'),
      C = o.eq(o.length - 1),
      j = 0 < w.length ? Number(w.css('padding-bottom').slice(0, -2)) : 0,
      k = t.find('.recruit-select'),
      x = k.find('.select-item'),
      T = k.find('.selected-cur'),
      H = r(n).outerHeight(),
      P = r('.footer'),
      S = { idPosition: '', idDetail: '' },
      D = null,
      E = r(n).scrollTop(),
      A = 0;
    r(n).on('load', function () {
      var t, e, i, s, a, o;
      r('.js-pagination-total').text(
        r('.js-benefits-swiper').find('.swiper-slide').length
      ),
        1600 <= r(n).innerWidth()
          ? (l(),
            c(),
            d(),
            w.length &&
              r(document).on('click', '.btn-tab', function (e) {
                e.preventDefault(),
                  null != r(this).attr('aria-controls') &&
                    ((e =
                      r('#' + r(this).attr('aria-controls')).offset().top -
                      r(n).outerHeight() / 2 +
                      1),
                    r('html, body').animate({ scrollTop: 0 < e ? e : 0 }, 500));
              }))
          : (h(), p(), f(), u()),
        768 <= r(n).innerWidth()
          ? D &&
            (D.destroy(!0, !0),
            (D = null),
            y.removeAttr('style'),
            y.find('.swiper-slide').removeAttr('style'))
          : D || g(),
        r('.recruit-job-introduction').length &&
          ((o = r('.js-filter-position-department')),
          arrPosition.forEach((e) => {
            o.find('.filter-option').append(
              `<li class="option"><button type="button" aria-selected="false" data-position="${e.id}" class="btn-option">${e.name}</button></li>`
            );
          }),
          (s = r('.js-layer-job-introduction')),
          (a = r('.js-filter-position-department')),
          r('.js-job-introduction .btn-detail').on('click', function (e) {
            e.preventDefault();
            var t = r(this).attr('data-position'),
              e = r(this).attr('data-detail');
            v(!0),
              s.show(),
              (S.idPosition === t && S.idDetail === e) ||
                ((S.idPosition = t),
                (S.idDetail = e),
                a
                  .find('.btn-option')
                  .attr('aria-selected', 'false')
                  .removeClass('is-selected'),
                a.find('.btn-option').each(function (e, s) {
                  r(s).attr('data-position') == t &&
                    (a.find('.btn-filter').text(r(s).text()).attr('data-id', t),
                    r(s).attr('aria-selected', 'true').addClass('is-selected'));
                }),
                m(t, e),
                b(t, e));
          }),
          (e = r('.js-filter-position-department')),
          (i = e.find('.btn-filter')),
          e.length &&
            (i.on('click', function (e) {
              e.preventDefault(), r(this).toggleClass('is-active');
            }),
            r(document).on(
              'click',
              '.js-filter-position-department .btn-option',
              function (e) {
                e.preventDefault();
                var s = r(this).attr('data-position'),
                  e = arrPositionDetail.filter((e) => e.idPosition === s)[0].id;
                i.removeClass('is-active'),
                  S.idPosition !== s &&
                    ((S.idPosition = s),
                    (S.idDetail = e),
                    i.text(r(this).text()).attr('data-id', s),
                    r(this)
                      .closest('.filter-position')
                      .find('.btn-option')
                      .attr('aria-selected', 'false')
                      .removeClass('is-selected'),
                    r(this)
                      .attr('aria-selected', 'true')
                      .addClass('is-selected'),
                    m(s, e),
                    b(s, e));
              }
            ),
            r(document).on('click', function (e) {
              0 ==
                r(e.target).closest('.js-filter-position-department').length &&
                r('.js-filter-position-department .btn-filter').removeClass(
                  'is-active'
                ),
                0 == r(e.target).closest('.js-filter-position-detail').length &&
                  r('.js-filter-position-detail .btn-filter').removeClass(
                    'is-active'
                  );
            })),
          (e = r('.js-filter-position-detail')),
          (t = e.find('.btn-filter')),
          e.length) &&
          (t.on('click', function (e) {
            e.preventDefault(), r(this).toggleClass('is-active');
          }),
          r(document).on(
            'click',
            '.js-filter-position-detail .btn-option',
            function (e) {
              e.preventDefault();
              var e = r(this).attr('data-position'),
                s = r(this).attr('data-detail');
              t.removeClass('is-active'),
                (S.idPosition === e && S.idDetail === s) ||
                  ((S.idPosition = e),
                  (S.idDetail = s),
                  t.text(r(this).text()).attr('data-id', s),
                  r(this)
                    .closest('.filter-position')
                    .find('.btn-option')
                    .attr('aria-selected', 'false')
                    .removeClass('is-selected'),
                  r(this).attr('aria-selected', 'true').addClass('is-selected'),
                  b(e, s));
            }
          )),
        r('.js-layer-job-introduction .btn-close').on('click', function () {
          r('.js-layer-job-introduction').hide(), v(!1);
        }),
        r('.js-layer-job-introduction .js-layer-dim').on('click', function (e) {
          r('.js-layer-job-introduction').hide(), v(!1);
        }),
        r('.recruit-story-swiper').length < 0 ||
          new Swiper('.recruit-story-swiper', {
            observer: !0,
            freeMode: !0,
            scrollbar: { el: '.swiper-scrollbar' },
            breakpoints: {
              320: { slidesPerView: 'auto', spaceBetween: 15 },
              769: { slidesPerView: 3, spaceBetween: 18 },
            },
          });
    }),
      r(n).on('resize', function () {
        1600 <= r(n).innerWidth()
          ? (d(), l(), c())
          : (p(),
            f(),
            h(),
            u(),
            k.length &&
              (k.find('.select-wrap').removeClass('is-selecting'),
              r('body').css('overflow', ''))),
          768 <= r(n).innerWidth()
            ? D &&
              (D.destroy(!0, !0),
              (D = null),
              y.removeAttr('style'),
              y.find('.swiper-slide').removeAttr('style'))
            : D || g();
      }),
      r(n).on('scroll', function () {
        (1600 <= r(n).innerWidth() ? (l(), d) : (h(), p(), u))();
      });
  })(window, window.jQuery);

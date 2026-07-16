import { useEffect } from 'react';

const PARALLAX = 50;

export default function useScrollEffects(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const rmq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const header = root.querySelector('.header');
    const heroInner = root.querySelector('.hero__inner');
    const hint = root.querySelector('.hero__hint');
    const icons = Array.from(root.querySelectorAll('.hero__icon'));
    const navlinks = Array.from(root.querySelectorAll('.nav__link'));
    const sections = Array.from(root.querySelectorAll('main section[id]'));
    const reveals = Array.from(root.querySelectorAll('.reveal'));

    let raf = 0;
    let activeId;

    const setActive = (id) => {
      navlinks.forEach((a) => {
        a.classList.toggle('nav__link--active', a.getAttribute('href') === id);
      });
    };

    const updateActive = () => {
      if (!sections.length) return;
      const vh = window.innerHeight || 800;
      const line = vh * 0.4;
      let current = null;
      for (const s of sections) {
        if (s.getBoundingClientRect().top - 1 <= line) current = s.id;
        else break;
      }
      if (current !== activeId) {
        activeId = current;
        setActive(current ? `#${current}` : '');
      }
    };

    const update = () => {
      const de = document.documentElement;
      const y = window.scrollY || window.pageYOffset || de.scrollTop || 0;
      const vh = window.innerHeight || de.clientHeight || 800;
      const reduce = rmq.matches;

      if (header) {
        header.classList.toggle('header--visible', y > vh * 0.52);
      }

      const k = reduce ? 0 : PARALLAX / 50;
      if (!reduce) {
        icons.forEach((el) => {
          const d = parseFloat(el.dataset.depth || '0.3');
          const dx = parseFloat(el.dataset.dx || '0');
          el.style.transform = `translate3d(${dx * y * d * 0.14}px, ${-(
            y *
            d *
            k
          )}px, 0)`;
        });
        if (heroInner && y < vh) {
          heroInner.style.transform = `translateY(${y * 0.22 * k}px)`;
          heroInner.style.opacity = String(Math.max(0, 1 - y / (vh * 0.72)));
        }
      }
      if (hint) hint.style.opacity = String(Math.max(0, 1 - y / 240));

      updateActive();
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    // reveal при попадании во вьюпорт
    let io;
    if (rmq.matches || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('reveal--visible'));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('reveal--visible');
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.14 }
      );
      reveals.forEach((el) => io.observe(el));
    }

    // активный пункт навигации по позиции секций
    let navObserver;
    if ('IntersectionObserver' in window && sections.length) {
      navObserver = new IntersectionObserver(() => updateActive(), {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      });
      sections.forEach((s) => navObserver.observe(s));
    }

    const opts = { passive: true };
    window.addEventListener('scroll', onScroll, opts);
    window.addEventListener('resize', update);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll, opts);
      window.removeEventListener('resize', update);
      if (raf) cancelAnimationFrame(raf);
      if (io) io.disconnect();
      if (navObserver) navObserver.disconnect();
    };
  }, [rootRef]);
}

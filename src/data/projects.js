import watchLogo from '../assets/img/yarphoenix-watch-logo.svg';
import libraryLogo from '../assets/img/yarphoenix-library_logo.svg';
import watchWhere from '../assets/img/watch-where.png';
import watchCatalog from '../assets/img/watch-catalog.png';
import watchFilm from '../assets/img/watch-film.png';
import ipDay from '../assets/img/ip-tracker-day.png';
import ipNight from '../assets/img/ip-tracker-night.png';
import watchDemo from '../assets/video/watch-demo.mp4';
import libraryDemo from '../assets/video/library-demo.mp4';

const projects = [
  {
    id: 'watch',
    heading: {
      logo: watchLogo,
      alt: 'YarPhoenix Watch',
      logoWidth: 203,
      logoHeight: 55,
      href: 'https://yarphoenix.github.io/yarphoenix-watch/',
      linkLabel: 'Открыть сайт YarPhoenix Watch',
      tooltip: 'Кликните, чтобы перейти на сайт',
    },
    meta: '// агрегатор видеопоиска',
    desc: 'Поиск по видео с интеграцией RuTube и VK Video, собственным движком ранжирования по релевантности, HybridCache для защиты от cache stampede.',
    tech: ['ASP.NET Core', 'VK OAuth', 'React', 'i18n'],
    slides: [
      { type: 'video', src: watchDemo },
      { type: 'image', src: watchCatalog, alt: 'YarPhoenix Watch — каталог' },
      { type: 'image', src: watchFilm, alt: 'YarPhoenix Watch — страница фильма' },
      { type: 'image', src: watchWhere, alt: 'YarPhoenix Watch — где смотреть' },
    ],
  },
  {
    id: 'library',
    heading: {
      logo: libraryLogo,
      alt: 'YarPhoenix Library',
      logoWidth: 203,
      logoHeight: 64,
      badge: '(в разработке)',
    },
    meta: '// библиотека с AI-ассистентом',
    desc: 'Веб-сервис для чтения книг: каталог, личная библиотека и AI-ассистент чтения. Модульная монолитная архитектура на бэкенде, React SPA на фронтенде.',
    tech: ['ASP.NET Core', 'EF Core', 'PostgreSQL', 'React', 'RTK Query'],
    slides: [{ type: 'video', src: libraryDemo }],
  },
  {
    id: 'ip-tracker',
    heading: {
      title: 'IP Address Tracker',
      href: 'https://yarphoenix.github.io/ip-address-tracker/',
      linkLabel: 'Открыть сайт IP Address Tracker',
      tooltip: 'Кликните, чтобы перейти на сайт',
    },
    meta: '// геолокация по IP',
    desc: 'Небольшой веб-сервис по выдаче геолокации по заданному IP (IPv4).',
    tech: ['JavaScript', 'Leaflet', 'Parcel'],
    slides: [
      { type: 'image', src: ipNight, alt: 'IP Address Tracker — ночная тема' },
      { type: 'image', src: ipDay, alt: 'IP Address Tracker — дневная тема' },
    ],
  },
];

export default projects;

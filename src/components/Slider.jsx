import { useEffect, useRef, useState } from 'react';
import './styles/Slider.scss';

export default function Slider({ slides }) {
  const [idx, setIdx] = useState(0);
  const videoRefs = useRef([]);
  const total = slides.length;
  const hasControls = total > 1;

  const go = (n) => setIdx((((n % total) + total) % total));

  // видео ставится на паузу при переключении слайда
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== idx) {
        try {
          v.pause();
        } catch (e) {
          // noop
        }
      }
    });
  }, [idx]);

  return (
    <div className="slider-wrap">
      <div className="slider">
        <div
          className="slider__track"
          style={{ transform: `translateX(${-idx * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="slider__slide" key={slide.src}>
              {slide.type === 'video' ? (
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  className="slider__media slider__media--video"
                  src={slide.src}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  className="slider__media"
                  src={slide.src}
                  alt={slide.alt || ''}
                />
              )}
            </div>
          ))}
        </div>

        {hasControls && (
          <>
            <button
              type="button"
              className="slider__btn slider__btn--prev"
              aria-label="Предыдущий"
              onClick={() => go(idx - 1)}
            >
              ‹
            </button>
            <button
              type="button"
              className="slider__btn slider__btn--next"
              aria-label="Следующий"
              onClick={() => go(idx + 1)}
            >
              ›
            </button>
          </>
        )}
      </div>

      {hasControls && (
        <div className="slider__dots">
          {slides.map((slide, i) => (
            <button
              type="button"
              key={slide.src}
              className={`slider__dot${i === idx ? ' slider__dot--active' : ''}`}
              aria-label={`Слайд ${i + 1}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

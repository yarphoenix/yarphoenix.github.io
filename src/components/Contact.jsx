import './styles/Contact.scss';

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="reveal">
        <div className="contact__head">
          <div className="contact__title">
            Давайте
            <br />
            поработаем :)
          </div>
        </div>
        <div className="contact__actions">
          <a
            className="contact__btn contact__btn--primary"
            href="mailto:yarikhectatuct@gmail.com"
          >
            Email <span>↗</span>
          </a>
          <a
            className="contact__btn contact__btn--ghost"
            href="https://t.me/yarphoenixx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram <span>↗</span>
          </a>
          <a
            className="contact__btn contact__btn--ghost"
            href="https://github.com/yarphoenix"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span>↗</span>
          </a>
        </div>
        <div className="contact__footer">
          <span>YARPHOENIX · Ярослав Извеков</span>
          <span>2026 · Москва</span>
        </div>
      </div>
    </section>
  );
}

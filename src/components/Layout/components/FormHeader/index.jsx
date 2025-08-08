import "./index.css";

export function FormHeader({ title }) {
  const logos = {
    mineduc: {
      href: "https://www.mineduc.cl",
      src: "mineduc_web.svg",
      alt: "Ministerio de educación",
    },
    junji: {
      href: "https://www.junji.gob.cl",
      src: "junji_web.svg",
      alt: "JUNJI",
      style: { width: "120px" },
    },
  };

  const { href, src, alt, style } = logos[title?.logo] || logos["mineduc"];

  return (
    <nav className="title-container">
      <a className="title-image" href={href} target="_blank">
        <img src={src} alt={alt} style={style} />
      </a>
      <span className="text-header">{title?.text}</span>
    </nav>
  );
}

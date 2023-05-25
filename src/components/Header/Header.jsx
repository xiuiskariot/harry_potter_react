import s from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = ({ title, subtitle, children, linkBack }) => {
  return (
    <div className={s.container}>
      {linkBack ? (<Link to="/"><span className={s.linkBack }>{linkBack}</span></Link>) : null}
      <h1 className={linkBack? s.small_tit : s.title}>{title}</h1>
      <h2 className={s.subtitle}>{subtitle}</h2>
      <form className={s.form}>{children}</form>
    </div>
  );
};

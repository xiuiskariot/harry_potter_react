import { ShowLiked } from "../ShowLiked/ShowLiked";
import s from "./Main.module.css";

export const Main = ({ children, showLiked, liked }) => {
  return (
    <section>
      <div className={s.container}>
        <div className={s.grid}>{children}</div>
      </div>
      {showLiked && liked.length ? <ShowLiked /> : null}
    </section>
  );
};

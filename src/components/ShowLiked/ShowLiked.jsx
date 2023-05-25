import s from "./ShowLiked.module.css";
import { Link } from "react-router-dom";

export const ShowLiked = () => {
  return (
    <Link to="favorites">
      <button className={s.show_liked}>Show Liked</button>;
    </Link>
  );
};

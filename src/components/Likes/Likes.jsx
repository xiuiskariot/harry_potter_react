import s from "./Likes.module.css"
import like_h from "./like.svg"
import empty_like from "./empty_like.svg"


export const Likes = ({name, isLiked, like, unlike }) => {

  return (
    <button
      onClick={() => (isLiked ? unlike(name) : like(name))}
      className={s.like_button}
    >
      <img src={!isLiked ? empty_like : like_h} alt="heart" />
    </button>
  );
}
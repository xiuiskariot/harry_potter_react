import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Card } from "../components/Card/Card";
import { Likes } from "../components/Likes/Likes";
import { v4 as uuidv4 } from "uuid";

export const LikedCards = ({ showLiked, liked, like, unlike, data }) => {
  const filteredData = data.filter((elem) => liked.includes(elem.name));

  return (
    <>
      <Header
        title="Liked ones"
        subtitle="Your favorite characters from the Harry Potter universe."
        linkBack="← Back To All"
      />
      <Main showLiked={showLiked} liked={liked}>
        {filteredData.map((card) => (
          <Card card={card} key={uuidv4()}>
            <Likes
              name={card.name}
              isLiked={liked.includes(card.name)}
              like={like}
              unlike={unlike}
            />
          </Card>
        ))}
      </Main>
    </>
  );
};

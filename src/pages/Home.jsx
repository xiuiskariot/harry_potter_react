import { Header } from '../components/Header/Header';
import { Input } from '../components/Input/Input';
import { Select } from '../components/Select/Select';
import { Main } from '../components/Main/Main';
import { Card } from '../components/Card/Card';
import { Likes } from '../components/Likes/Likes';
import { v4 as uuidv4 } from "uuid";

export const Home = ({input, setInput, data, select, setSelect, dataArr, liked, like, unlike, showLiked}) => {
  return (
    <>
      <Header
        title="Harry Potter"
        subtitle="View all characters from the Harry Potter universe."
      >
        <Input input={input} setInput={setInput} />
        <Select data={data} select={select} setSelect={setSelect} />
      </Header>
      <Main showLiked={showLiked} liked={liked}>
        {dataArr.map((card) => (
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
}

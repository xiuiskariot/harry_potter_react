import { RouterProvider, createHashRouter } from "react-router-dom";
import { data } from "./data/hp";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { LikedCards } from "./pages/LikedCards";

let savedCards = JSON.parse(localStorage.getItem("LIKED")) ?? [];

function App() {
  //состояния инпута и селекта для реализации поиска и перерисовки
  const [select, setSelect] = useState("");
  const [input, setInput] = useState("");
  const [dataArr, setDataArr] = useState(data);
  
  const [liked, setLiked] = useState(savedCards);
  localStorage.setItem("LIKED", JSON.stringify(liked));

  // функция, которая добавляет в массив с именами имя лайкнутой карточки
  const like = (name) => setLiked([...liked, name]);

  // функция, которая удаляет карточку из массива с карточками, по имени
  const unlike = (name) => setLiked(liked.filter((el) => el !== name));



  useEffect(() => {
    let filtred = data.filter(
      (card) =>
        card.house.includes(select) &&
        card.name.toLowerCase().trim().includes(input)
    );
    setDataArr(filtred);
  }, [select, input]);


  const router = createHashRouter([
    {
      path: "/",
      element: (
        <Home
          like={like}
          unlike={unlike}
          liked={liked}
          input={input}
          setInput={setInput}
          select={select}
          setSelect={setSelect}
          dataArr={dataArr}
          data={data}
          showLiked={true}
        />
      ),
    },
    {
      path: "favorites",
      element: (
        <LikedCards
          like={like}
          unlike={unlike}
          liked={liked}
          dataArr={dataArr}
          data={data}
          showLiked={false}
        />
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

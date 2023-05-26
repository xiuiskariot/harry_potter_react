# Поиск персонажей из вселенной Гарри Поттера

Вы можете найти персонажа, поставить лайк и вернуться к этому сайту спустя время, чтобы посмотреть тех, кто вас понравился

Сайт сделан с помощью React JS, технологии localStorage. Адаптирован под мобильные устройства.

## Основная страница
![основая страница](/examples/web_harry1.png)

## Страница с избранными персонажами 
![страница с лайками](/examples/web_harry2.png)

### Реализация роутинга
```
 const router = createHashRouter([
    {
      path: "/",
      element: (
        <Home {...props} />
      ),
    },
    {
      path: "favorites",
      element: (
        <LikedCards {...props}/>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
```

### Реализация localStorage
```
  const [liked, setLiked] = useState(savedCards);
  localStorage.setItem("LIKED", JSON.stringify(liked));
```
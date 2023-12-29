/*
Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное id, для упрощения, используем `Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Чак Паланик - Призраки",
    reviews: [
      {
        id: Date.now(),
        text: "Жуткая книга, одна из самых пробирающих и отвратительных",
      },
      {
        id: Date.now(),
        text: "Фантасмагоричные образы завораживают, настоящее торжество в мире литературного треша и сплэттер панка",
      },
    ],
  },
  {
    product: "Джо Аберкромби - Земной круг",
    reviews: [
      {
        id: Date.now(),
        text: "Если бы Тарантино писал фэнтези - он явно написал бы нечто подобное",
      },
    ],
  },
  {
    product: "Лю Цысинь - Задача трёх тел",
    reviews: [
      {
        id: Date.now(),
        text: "Если не душнить касательно технической части, то это мощнейшая эпопея об эволюции человечества",
      },
    ],
  },
];

const mainDiv = document.querySelector(".center");

function viewReviews() {
  for (const index in initialData) {
    const titleProduct = document.createElement("h1");
    titleProduct.innerText = `${initialData[index].product}`;
    mainDiv.appendChild(titleProduct);

    const tempElem = initialData[index].reviews;

    for (const el in tempElem) {
      const review = document.createElement("div");
      review.classList.add("review");
      review.innerText = `${tempElem[el].text}`;
      mainDiv.appendChild(review);
    }

    const inputElem = document.createElement("input");
    inputElem.classList.add("inputElem");
    mainDiv.appendChild(inputElem);

    const buttonElem = document.createElement("button");
    buttonElem.classList.add("buttonElem");
    buttonElem.innerText = "Добавить новый отзыв";
    mainDiv.appendChild(buttonElem);
  }
}

viewReviews();

const buttons = document.querySelectorAll(".buttonElem");
const inputs = document.querySelectorAll(".inputElem");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const text = inputs[i].value;

    try {
      if (text.length < 10 && text.length > 500) {
        throw new Error(
          "Отзыв должен быть не менее 50 символов в длину и не более 500"
        );
      }

      const tempElemNew = initialData[i].reviews;
      tempElemNew.push({ id: Date.now(), text: text });

      const deleteElement = document.querySelector(".center");
      deleteElement.innerHTML = "";

      viewReviews();
    } catch (error) {
      console.log(error.message);
    }
  });
}

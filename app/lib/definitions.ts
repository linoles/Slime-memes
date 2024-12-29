export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface CardProps {
  heading: string;
  description: string;
  bg: string;
  color: string;
  photoPath: string;
  id: number;
}

export const cards = [
  {
    heading: "СМЕХ",
    description:
      "Конечно же, смех! Для чего же ещё может быть канал по мемам? Здесь вы получите самые угарные мемы. :) Кстати, у нас нет баянов. (Почти)",
    bg: "#a3a3a3",
    color: "white",
    photoPath: "/fun.jpg",
    id: 0,
  },
  {
    heading: "ОТЛИЧНОЕ КОМЬЮНИТИ",
    description:
      "А как же без комьюнити самых лучших подписчиков, постоянно обсуждающих мемы нашего канала? И они присутствуют в нашем дружном канале!",
    bg: "#a3a3a3",
    color: "white",
    photoPath: "/comunity.jpg",
    id: 1,
  },
  {
    heading: "МЕМЫ ПРО АДМИНОВ",
    description:
      "Также в нашем канале присутствуют интересные и смешные мемы про админов, которые уж точно не могут быть в другом канале.",
    bg: "#a3a3a3",
    color: "white",
    photoPath: "/admins.jpg",
    id: 2,
  },
  {
    heading: "ИНТЕРАКТИВЫ С ПОДПИСЧИКАМИ",
    description:
      "Помимо всех плюсов, у нас в канале много интерактивов для подписчиков: конкурсы на различные призы, викторины, опросы и сходки в играх!",
    bg: "#a3a3a3",
    color: "white",
    photoPath: "/interactions.jpg",
    id: 3,
  }
];

export interface ReviewProps {
  author: string;
  text: string;
  file: string | null;
  id: number;
}

export const reviews = [
  {
    author: "Шишкин Сергей",
    text: "Мемы в канале очень крутые! Всегда здесь находятся новые мемы и интересные истории!",
    file: "/review0.jpg",
    id: 0,
  },
  {
    author: "Красников Владимир",
    text: "Отличный канал! Особенно наслаждаюсь интерактивами.",
    file: "/review1.jpg",
    id: 1,
  },
  {
    author: "Кузнецова Анна",
    text: "Очень нравится ваш тг-паблик! Спасибо админам!",
    file: "/review2.jpg",
    id: 2,
  },
  {
    author: "Anonimous",
    text: "Обожаю ваши мемы!",
    file: "/review3.jpg",
    id: 3,
  },
]

export interface MemeProps {
  heading: string;
  tags: string[];
  file: string;
  date: number;
  id: number;
}

export const memes =  [
  {
    heading: "IT МЕМЫ",
    tags: ["IT", "по_моему_смешно", "жиза"],
    file: "/meme0.jpg",
    date: 0,
    id: 0,
  },
  {
    heading: "ПАЦАНСКИЕ МЕМЫ",
    tags: ["по_моему_смешно", "жиза"],
    file: "/meme1.jpg",
    date: 0,
    id: 1,
  },
  {
    heading: "МЕМЫ С КОТАМИ",
    tags: ["кот"],
    file: "/meme2.jpg",
    date: 0,
    id: 2,
  },
]
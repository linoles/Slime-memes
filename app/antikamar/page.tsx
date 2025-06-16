"use client";

import "@/app/ui/global.css";
import { tektur } from "../ui/fonts";
import { useEffect } from "react";

interface InfoProps {
  color: string;
  text: string;
}

const Info: React.FC<InfoProps> = ({ color, text }) => {
  const borderClass = color === "black" ? "" : `border-l-2 pl-2 italic font-bold`;
  const textColorClass = color === "sky" ? "text-violet-500" : `text-${color}-500`;
  const borderColorClass = color === "sky" ? "border-violet-500" : `border-${color}-500`;

  return (
    <div
      className={`info-text mt-${color === "black" ? "4" : "3"} text-sm ${textColorClass} ml-3 pr-1 ${borderClass} ${borderColorClass}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default function Page() {
  return (
    <div className="overflow-y-auto h-screen w-full overflow-x-hidden">
      <h1
        className={`title w-full h-fit my-3 font-bold text-center text-[6cqi] cursor-pointer ${tektur.className}`}
        onClick={() =>
          alert(
            "Сборник всего того, что нужно. Написано Серафимом (@Kirill_Chepep), сайт реализовал Аноним :)."
          )
        }
      >
        FAQ по SM, а именно о Камаре, владельце этого канала.
      </h1>
      <div>
        <Info
          color="blue"
          text="Если ты читаешь этот текст, то ты понимаешь о чем речь. Пояснять что за канал и чат не буду."
        />
        <div>
          <Info
            color="black"
            text="<b>Начнем с того, кем является Камар:</b> <br> На вид он добрый и милый. Использует даже для незнакомцев добрые слова (особенно когда рекламится в лс людям и просит войти в его канал). Использует милые стикеры с котами и т.д. Но не дайте себя обмануть."
          />
          <Info
            color="black"
            text="<b>По факту Камар самый обыкновенный диктатор:</b> <br>&nbsp;◉ Банит за любые неугодные вещи, даже не сверяясь с правилами. <br>&nbsp;◉ Сам говорил, что при нём правила будут сильнее ужесточаться, что бы «боялись». <br>&nbsp;◉ Убирает ему невыгодных админов, а именно меня. Позже я расскажу что именно случилось, что меня побудило на этот текст, почему все так как есть. <br>&nbsp;◉ Максимально защищает своих друзей, так что за любой пук в их сторону может грозить и бан. В ряды забаненных попали несколько активных человек, в том числе и ФАНТИК. "
          />
          <Info
            color="blue"
            text="Человек, что буквально нарисовала сотни артов Камару и на тему чата, создала стикерпак для чата и ещё многое другое!"
          />
          <Info
            color="black"
            text="=> <br>&nbsp;◉ Камар не умеет в приоритеты, стреляет себя в ногу удалением культовых людей и тупо никого не ценит. <br>&nbsp;◉ Также, по сути в модерах остались только друзья Камара из ИРЛ, за небольшими исключениями. <br>&nbsp;◉ С каждым днём все сильнее закручиваются гайки. Теперь запрещено даже сфв. То бишь чат уже превращается в 0+ помойку. Камар почему считает что это сделает чат добрым и милым, не понимая что от этого недовольство только будет расти."
          />
          <Info
            color="black"
            text="<b>А теперь о других грехах Камара:</b> <br>&nbsp;1. Опять же как и упоминалось, не умение расставлять приоритеты. Например, ко всему перечисленному далее, он поставил в модеры нн с менее чем 100 сообщений в чате."
          />
          <Info
            color="blue"
            text="Человека, что даже не знает как Варн выдать."
          />
          <Info
            color="black"
            text="2. Систематичные наказания по «своему хотению». Ужасные методы решения проблем, даже мнимых. Например, если чат активит, а модеры ушли например спать (ночной актив), это не проблема модеров, что никого нету. Не Камара, что он не предусмотрел это, а чаттерсов: всем Муты или отключение чата на всю ночь. Крутое решение, да? <br>&nbsp;3. Отсутствие понимания, что он делает. Он может делать что угодно, несмотря даже на уговоры других админов, людей, и стоять на своем объективно плохом решении. <br>&nbsp;4. Крайне скверный характер. А именно подробнее в пунктах ниже. <br> Если ты попал к нему в немилость, он будет тебя игнорировать до талого в лс. Даже если этот вопрос очень важен. Даже если это вопрос жизни чата. Ему похуй. <br> Часто изводит людей своими стикерами, вынуждая человека покинуть диалог. Он так будет делать, даже если вопрос или обращение очень важно. <br>&nbsp;4.1. Крайне лицемерен и туп."
          />
          <Info
            color="red"
            text="Когда в чате был человек, который хотел покончить с собой и искал поддержки, Камар замутил его и дал Варн. А когда разгорелся срач на этой теме, обиженно покинул чат и сказал пусть сами разбираются. Очень хороший лидер, правда?"
          />
          <div className="flex flex-col items-center">
            <div className="relative">
              <button
                onClick={() => {
                  const imgElement = document.getElementById("proof-image") as HTMLImageElement;
                  const currentSrc = imgElement.src;
                  const currentIndex = parseInt(currentSrc.match(/(\d+)\.jpg$/)![1], 10);
                  const newIndex = currentIndex === 1 ? 12 : currentIndex - 1;
                  imgElement.src = `/prooves/${newIndex}.jpg`;
                }}
                className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 text-3xl bg-white/50 rounded-full p-2"
              >
                {"<-"}
              </button>
              <img
                id="proof-image"
                src="/prooves/1.jpg"
                alt="proof-1"
                className="w-full max-w-xs my-2"
                style={{ objectFit: "cover" }}
              />
              <button
                onClick={() => {
                  const imgElement = document.getElementById("proof-image") as HTMLImageElement;
                  const currentSrc = imgElement.src;
                  const currentIndex = parseInt(currentSrc.match(/(\d+)\.jpg$/)![1], 10);
                  const newIndex = currentIndex === 12 ? 1 : currentIndex + 1;
                  imgElement.src = `/prooves/${newIndex}.jpg`;
                }}
                className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 text-3xl bg-white/50 rounded-full p-2"
              >
                {"->"}
              </button>
            </div>
            <Info
              color="black"
              text="<b>Возникает снова тот же вопрос:</b> <br>&nbsp;Почему Кирпича, что извел весь чат, зюзю, что получил 15 банов, разбанивают и оправдываются нашим персонажем, но вот человеку активному в чате, кому нужна помощь, что ничего не нарушил нужно почему-то столь суровое наказание? Ответ прост. Камар просто конченый, по-другому не описать. И хватит питать надежд на него, обманывать себя и все подобное. <br><br> Также стоит отметить что весь см де факто культ его личности. Все связано с ним: название, аватарки, оформление и т.д. <br> Также Камар явно любит издеваться. Когда меня, Серафима, после второго бана всего трясло, блевало и просто ломало. Когда я пожалуй испытывал худшее время, он написал в чат, что он счастлив. Он видел это в канале и понимал, что сделал. На расспросы чата отвечал очень кратко и односложно. Мол девушка, и т.д ."
            />
            <Info
              color="black"
              text="Ты можешь спросить дорогой обыватель, кто я и почему я так цепляюсь за все это? Почему я тебе пишу? <br> <b>Well, меня зовут Серафим/Сера.</b>"
            />
            <Info
              color="sky"
              text="Я модерил в течении практически всей жизни чата. Находился там пол года, написал 28к сообщений, что является первым местом по сообщениям на время написания текста. Да, возможно уже кто то рядом с моей цифрой, или даже обогнал меня, но я уже как месяц в бане, и ничего не пишу, оттого меня и нагоняют. Я сделал бесчисленное количество полезных дел и в целом сильно отдавался делу."
            />
            <div className="h-[10px]"></div>
            <Info
              color="black"
              text="<b>А в целом, держи список, друг:</b> <br>&nbsp;◉ Добивание добавить Ирис в чат <br>&nbsp;◉ Изгнание Сновига - модера, что был максимально не компетентен"
            />
            <Info
              color="blue"
              text="Написал очень плохие правила, любая политика например бан год, а также там было много дыр. Также банил и мутил просто так. Мутил активных людей так как не мог уследить за чатом,  люди ничего не нарушали"
            />
            <Info
              color="black"
              text="&nbsp;◉ Самый активный модеринг в течении полугода (столько же чат и существует примерно) <br>&nbsp;◉ Массовая реклама в каналах своих, и в одном канале на ~1к <br>&nbsp;◉ Разбирательство с каждым недовольным человеком. То бишь постоянная отдача от модератора<br>&nbsp;◉ Написание двух статей правил, считающимися лучшими за все время, из всех 4 статей<br>&nbsp;◉ Написание 28 к сообщений в чат (первое место по всем сообщениям среди всего чата на 200 человек на момент написания текста)<br>&nbsp;◉ Создание отдельного чата для конфликтов <br>&nbsp;◉ Агитирование за баны деструктивных элементов, людей что постоянно нарушают правил и т.д. ( Да Камар разбанивал людей что получали по 10 банов, но людей, что никогда не нарушали и вложили душу в чат и канал) <br>&nbsp;◉ Попытка создать совет модеров<br>&nbsp;◉ Модеры заняты чатом, Админы каналом. Автономно работают и других не дергают. В целом могу поподробнее по нужде рассказать в <a href='tg://openmessage?user_id=5934897380' class='text-blue-400 underline'>своём лс (ТЫК)</a><br>&nbsp;◉ Создание хэштега #supSM<br>&nbsp;◉ Создание сокращений SM, которыми теперь пользуются все<br>&nbsp;◉ В целом постоянная активность и заинтересованность каналом и чатом <br>&nbsp;◉ Де факто стал вторым человеком всего См<br>&nbsp;◉ Агитирование за расширение кол-ва модеров для простоты модеринга чата <br>&nbsp;◉ Решение проблем, которые никто другой даже не трогал (проблемы со спамом ириса, который делал это сам по себе, никто не полез в дк разбираться кроме меня)"
            />
            <Info
              color="black"
              text="<b>А теперь к краткому содержанию той истории, с которой все началось:</b> <br>&nbsp;В один день зашла в чат не самая адекватная девочка. Над ней закономерно посмеялись и она вышла. <br> Камар снял меня и ещё одного админа под предлогом «буллинга». Да это именно предлог. Сам Камар пиздит другим, что именно это послужило причиной снятия. На деле, я просто не был удобен Камару. Я был конфликтен, из-за того, что не мирился с говном и шел до конца, продавливая свою позицию. Я не был удобен, потому что я был очень авторитетен, а Камар с каждым днём становился все менее популярным правителем. Камар просто уже не мог конкурировать со мной."
            />
            <div>
              <img src="/prooves2/1.jpg" alt="Proof 1" className="mt-2 max-w-xs" />
              <img src="/prooves2/2.jpg" alt="Proof 2" className="mt-2 max-w-xs" />
            </div>
            <Info
              color="black"
              text="&nbsp; Чат, когда увидел, что меня сняли, разразился скандалом на 7к сообщений (рекорд). Все недоумевали и были против такого решения. <br>&nbsp; Дальше мне пришлось аж упрашивать его, извинятся и всячески опускаться. Он меня всячески игнорил и в целом вел себя по-уебански. <br>&nbsp; Также за время моего бана правила поменялись. Почему-то мои правила были заменены на правила какого-то нн, что, простите, ебашил правила на угад. Самые уёбищные правила за все время. <br><div class='w-screen text-center'><a href='https://telegra.ph/pravila-slimemes-04-23' class='text-blue-400 underline'>Сами правила</a></div>&nbsp; Я создал отдельный канал и чат, где разоблачал Камара. Когда он увидел, что о нём говорят правду, он засуетился и начал мне писать в лс. В итоге мы пришли к компромиссу, крайне не выгодному для меня и крайне выгодному для него. Что он меня разбанивает, но любое поднятие этой темы бан."
            />
            <div className="relative">
              <button
                onClick={() => {
                  const imgElement = document.getElementById("proof-image2") as HTMLImageElement;
                  const currentSrc = imgElement.src;
                  const currentIndex = parseInt(currentSrc.match(/(\d+)\.jpg$/)![1], 10);
                  const newIndex = currentIndex === 1 ? 7 : currentIndex - 1;
                  imgElement.src = `/prooves3/${newIndex}.jpg`;
                }}
                className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 text-3xl bg-white/50 rounded-full p-2"
              >
                {"<-"}
              </button>
              <img
                id="proof-image2"
                src="/prooves3/1.jpg"
                alt="proof-1"
                className="w-full max-w-xs my-2"
                style={{ objectFit: "cover" }}
              />
              <button
                onClick={() => {
                  const imgElement = document.getElementById("proof-image2") as HTMLImageElement;
                  const currentSrc = imgElement.src;
                  const currentIndex = parseInt(currentSrc.match(/(\d+)\.jpg$/)![1], 10);
                  const newIndex = currentIndex === 7 ? 1 : currentIndex + 1;
                  imgElement.src = `/prooves3/${newIndex}.jpg`;
                }}
                className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 text-3xl bg-white/50 rounded-full p-2"
              >
                {"->"}
              </button>
            </div>
            <Info
              color="black"
              text="&nbsp; Потом я сделал нормальные правила. Пока что лучшие, какие было за все время. Но Камар, несмотря на это всё равно меня забанил после шутки, что см 1984. Он это притянул, как ту тему и попросту меня забанил. <br>&nbsp; Также стоит отметить, что текущие правила чата на 15 мая 25 года сделаны по сути полностью мной. Именно те, что заданы сейчас, а не те, что уже мысленно обработаны Камаром (запрет сфв и т.д). Камар снова нихуя не сделал и взял только заготовку с инета, которую пришлось пилить хуеву кучу лет. Всё, что он может делать - закручивать гайки, думая, что так делает лучше. <br>&nbsp; Мы видим, что как только убрался ограничитель в виде меня, все пошло по одному месту. Камар был во вседозволенности, что только всё портило."
            />
            <Info
              color="blue"
              text="Upd на 7 июня: Камар недавно решил устроить чистки и забанил кучу людей. Огромное количество, среди которых было очень много активных людей, олдов, и прочих заслуженных людей. Много кто не был виновен и не был даже со мной связан, но получил бан. Камар подтвердил статус кровавого деспота."
            />
            <Info
              color="red"
              text="Также за Камаром замечена одна ещё более ужасная история. <br> В чате ширу, одной художницы, когда он узнал что Индзами (другая художница) живёт с ним в одном городе, начал упорно требовать встречи. Дальше, когда он получил отказ, он перешел к запугиванию и даже деанону. Камару 17-18 лет, Индзами 14."
            />
            <div className="relative">
              <button
                onClick={() => {
                  const imgElement = document.getElementById("proof-image3") as HTMLImageElement;
                  const currentSrc = imgElement.src;
                  const currentIndex = parseInt(currentSrc.match(/(\d+)\.jpg$/)![1], 10);
                  const newIndex = currentIndex === 1 ? 5 : currentIndex - 1;
                  imgElement.src = `/prooves3/${newIndex}.jpg`;
                }}
                className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 text-3xl bg-white/50 rounded-full p-2"
              >
                {"<-"}
              </button>
              <img
                id="proof-image3"
                src="/prooves4/1.jpg"
                alt="proof-1"
                className="w-full max-w-xs my-2"
                style={{ objectFit: "cover" }}
              />
              <button
                onClick={() => {
                  const imgElement = document.getElementById("proof-image3") as HTMLImageElement;
                  const currentSrc = imgElement.src;
                  const currentIndex = parseInt(currentSrc.match(/(\d+)\.jpg$/)![1], 10);
                  const newIndex = currentIndex === 5 ? 1 : currentIndex + 1;
                  imgElement.src = `/prooves4/${newIndex}.jpg`;
                }}
                className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 text-3xl bg-white/50 rounded-full p-2"
              >
                {"->"}
              </button>
            </div>
            <Info
              color="blue"
              text="Весь конкурс - наеб, чтобы посмеяться с преданных подписчиков."
            />
            <div className="h-[10px]"></div>
            <Info
              color="black"
              text={`<div class='text-center'><b>Надеюсь, дорогой читатель, я тебе открыл глаза на Камара и ты понимаешь теперь, что к чему.</b></div> <br> <div class='w-screen text-center'><h2 class='${tektur.className} text-2xl font-extrabold'>Вступай, если ты за правду</h2><b><a href='https://t.me/ANTIKAMARACTION' class='text-blue-400 underlined text-2xl'>Канал AkA (ТЫК)</a><br><a href='https://t.me/+6T5251Z70dg0MGIy' class='text-blue-400 underlined text-2xl'>Чат AkA (ТЫК)</a></b></div>`}
            />
          </div>
        </div>
      </div>
      <div className="h-[15vh]"></div>
    </div>
  );
}


"use client";

import "@/app/ui/global.css";
import { tektur } from "@/app/ui/fonts";

interface RulesBlockProps {
  title: string;
  rules: string[];
  punishments: string[];
  info?: string;
  phone?: boolean;
}

const RulesBlock: React.FC<RulesBlockProps> = ({ title, rules, punishments, info, phone = false }) => {
  return (
    <div className="rules-block w-full h-full mt-3">
      <h2 className="text-center font-bold">{title}</h2>
      {rules.map((rule, index) => (
        <div key={index} className="rule-item my-3 ml-2">
          <p className="rule-text">{rule}</p>
          <p className="punish-text text-red-500 font-bold border-l-2 border-red-500 pl-2">{punishments[index]}</p>
        </div>
      ))}
      {info && <div className="info-text mt-4 text-sm text-blue-500 font-bold italic my-3 pl-2 ml-3 border-l-2 border-blue-500">{info}</div>}
    </div>
  );
};

export default function Page() {
  return (
    <div className="w-screen h-screen">
      <div className={`title w-full h-fit my-3 flex align-center justify-center ${tektur.className} ml3:text-[8cqi] ml2:text-[10cqi] ml1:text-[11cqi] text-[12cqi]`}>
        Правила чата SM
      </div>
      <div className="h-full w-full lg:flex lg:flex-row">
        <div className="w-1/3 max-lg:w-screen h-max border-gray-200 border-r-2">
          <div className="rules-block1 w-full lg:h-[57.5vh] max-lg:mb-3">
            <RulesBlock title="1. Конфликты и оскорбления" rules={[
              "1.1 Любые конфликты запрещены. Зачинщик получает двойное наказание",
              "1.2 Оскорбления участников или админов, их родни, нации, религии и т.д. (включая \"дружеские\" без согласия). Также, это правило распространяется на лс админов",
              "1.3 Критика только конструктивная. Переход на личности запрещён",
              "1.4 Шутки про суицид, жестокое насилие, психические расстройства запрещены",
            ]} punishments={[
              "Мут 1 час зачинщику, 30 минут участникам",
              "Варн на неделю",
              "Варн на неделю",
              "Варн на неделю",
            ]} />
          </div>
          <div className="rules-block2 w-full border-gray-200 border-t-2 lg:h-[57.5vh]">
            <RulesBlock title="2. Спам" rules={[
              "2.1 Спам в одном сообщении (повторы слов, символы и т.д)",
              "2.2 Флуд (более 5 сообщений подряд)",
              "2.3 Спам упоминаниями (@) (4 упоминания без перерыва подряд и более)",
              "2.4 Стикеры:  -Ответственность только за отправленный стикер (не за весь пак)  -Скрытый шок-контент (типа \"зайди в пак\") запрещён",
            ]} punishments={[
              "Варн на неделю",
              "Варн на неделю",
              "Варн на неделю и Мут 1 час",
              "Наказание будет за то, что нарушает стикер"
            ]} info="Если между сообщениями и в сообщении есть смысл, последовательность, то наказание не будет дано." />
          </div>
          <div className="rules-block3 w-full border-gray-200 border-t-2 lg:h-[57.5vh]">
            <RulesBlock title="3. Запрещённый контент" rules={[
              "3.1 18+, NSFW, жесть, расчленёнка",
              "3.2 Эпилептические медия запрещены без блюра и предупреждения",
              "3.3 Краш-стикеры (вылеты Telegram)",
              "3.4 Эпилептические аватарки",
            ]} punishments={[
              "Бан навсегда",
              "Бан навсегда",
              "Бан навсегда",
              "-Первое предупреждение → замена авы за 24 часа.  -Неисполнение → бан.",
            ]} />
          </div>
        </div>
        <div className="w-1/3 max-lg:w-screen h-max border-gray-200 border-r-2">
          <div className="rules-block4 w-full max-lg:border-gray-200 max-lg:border-t-2 lg:h-[57.5vh]">
            <RulesBlock title="4. Политика и расизм" rules={[
              "4.1 Обсуждение политики с переходам в открытую ненависть (кроме как к военным преступникам, террористам, нацистам)",
              "4.2 Оскорбление наций, стран, религий",
              "4.3 Споры не запрещены, запрещенны конфликты",
              "4.4 Изображения террористических, нацистских символов без цензуры",
            ]} punishments={[
              "Варн на неделю",
              "Варн на неделю",
              "Как за пункт о конфликтах",
              "Варн на неделю",
            ]} />
          </div>
          <div className="rules-block5 w-full border-gray-200 border-t-2 lg:h-[57.5vh]">
            <RulesBlock title="5. Реклама и ссылки" rules={[
              "5.1 Реклама без согласия админов",
              "5.2 Реклама сторонних чатов/сайтов",
            ]} punishments={[
              "Бан навсегда",
              "Бан навсегда",
            ]} info="Просто пересылка не является нарушением, важен контекст." />
          </div>
          <div className="rules-block6 w-full border-gray-200 border-t-2 lg:h-[57.5vh]">
            <RulesBlock title="6. Личные данные" rules={[
              "6.1 Любой слив личной информации без согласия кому она принадлежит запрещен",
            ]} punishments={[
              "Бан навсегда",
            ]} />
          </div>
        </div>
        <div className="w-1/3 max-lg:w-screen h-full">
          <div className="rules-block7 w-full max-lg:border-gray-200 max-lg:border-t-2 lg:h-[57.5vh]">
            <RulesBlock title="7. Голосовые сообщения" rules={[
              "7.1 Громкие звуки/крики в войсах",
              "7.2 Громкие звуки в голосовом сообщении без предупреждения",
            ]} punishments={[
              "Варн на неделю и возможное лишение участвовать в войсах/говорить там",
              "Варн на неделю",
            ]} />
          </div>
          <div className="rules-block8 w-full border-gray-200 border-t-2 lg:h-[57.5vh]">
            <RulesBlock title="8. Аватарки" rules={[
              "8.1 Если Ава нарушает какие либо правила, то следует её сменить",
            ]} punishments={[
              "В противном случае, будет выдано наказание по тому пункту, какое правило нарушает эта аватарка",
            ]} />
          </div>
          <div className="rules-block9 w-full border-gray-200 border-t-2 lg:h-[57.5vh]">
            <RulesBlock title="Дополнения" rules={[
              "1. Обход правил",
              "2. Админ может изменить меру наказания по ситуации",
              "3. Наказание недействительно без указания причины",
            ]} punishments={[
              "Усиление наказания"
            ]} />
          </div>
          <div className="h-fit w-fit">
            <p style={{ textAlign: "right", fontSize: "0.4rem" }}>**Усилия для создания сайта приложил <a href="https://t.me/linolef" className="text-blue-500 cursor-pointer">linoles</a>. Правила были созданы <a href="https://t.me/Kamar08" className="text-blue-500 cursor-pointer">Камаром</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

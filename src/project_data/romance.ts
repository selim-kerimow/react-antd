import { IBook } from "./IBook";

//images 
import ItEndsWithUs from '../images/romance/ItEndsWithUs.jpg'
import City from '../images/romance/City.jpg'
import AllThisTime from '../images/romance/AllThisTime.jpg'
import EveryBreath from '../images/romance/EveryBreath.jpg'
import Lyubow from '../images/romance/Lyubow.jpg'
import MyDark from '../images/romance/MyDark.jpg'
import NaBeregu from '../images/romance/NaBeregu.jpg'
import Pismo from '../images/romance/Pismo.jpg'
import Speshi from '../images/romance/Speshi.jpg'
import Tihaya from '../images/romance/Tihaya.jpg'
import Vinovaty from '../images/romance/Vinovaty.jpg'
import Everything from '../images/romance/Everything.jpg'

export const romance: IBook[] = [
    {
        id: 18, 
        title: 'City of Girls', 
        price: 200.00, 
        image: City,
        author: 'Elizabeth Gilbert', 
        category: 'romance', 
        language: 'English', 
        barcode: 9781594634734, 
        release: 2022,
        description: "\"Life is both fleeting and dangerous, and there is no point in denying yourself pleasure, or being anything other than what you are.\" Beloved author Elizabeth Gilbert returns to fiction with a unique love story set in the New York City theater world during the 1940s. Told from the perspective of an older woman as she looks back on her youth with both pleasure and regret (but mostly pleasure), City of Girls explores themes of female sexuality and promiscuity, as well as the idiosyncrasies of true love."
    },
    {
        id: 19, 
        title: 'All This Time', 
        price: 120.00, 
        image: AllThisTime,
        author: 'Elizabeth Gilbert', 
        category: 'romance', 
        language: 'English', 
        barcode: 9781534483897, 
        release: 2013,
        description: "From the team behind #1 New York Times bestseller Five Feet Apart comes a gripping new romance that asks: Can you find true love after losing everything? Kyle and Kimberly have been the perfect couple all through high school, but when Kimberly breaks up with him on the night of their graduation party, Kyle's entire world upends--literally. Their car crashes and when he awakes, he has a brain injury. Kimberly is dead. And no one in his life could possibly understand."
    },
    {
        id: 20,
        title: 'Тихая гавань',
        price: 110,
        image: Tihaya,
        author: 'Николас Спаркс',
        category: 'romance',
        language: 'Russian',
        barcode: 9785171351960,
        release: 2022,
        description: 'Кэти — женщина, много лет страдавшая от жестокости мужа. Полиция не могла ей помочь — ведь именно там служил человек, превративший ее жизнь в ад… И вот однажды терпение Кэти лопнуло. Потеряв надежду на спасение, она совершила отчаянный побег — и обрела "тихую гавань" в маленьком спокойном южном городке. Но готова ли Кэти к новым отношениям? Способна ли вновь поверить мужчине, понять его и полюбить? Даже если речь идет о таком обаятельном человеке, как молодой вдовец Алекс Уитли, который видит в Кэти не только возлюбленную и подругу, но и мать для своих детей. Алекс и Кэти идут по тонкому льду неизвестности, — а между тем муж Кэти уже начал ее поиски…'
    },
    {
        id: 21,
        title: 'Письмо незнакомки',
        price: 110,
        image: Pismo,
        author: 'Стефан Цвейг',
        category: 'romance',
        language: 'Russian',
        barcode: 9785171130718,
        release: 1950,
        description: "Страсть лишает сна и покоя, ослепляет и заставляет страдать. Именно этому неконтролируемому, иступленному чувству посвящены новеллы Цвейга – их сюжеты, полные драматического напряжения, раскрывают всю остроту душевных переживаний. Каждый рассказ одновременно восхищает и повергает в ярость, поражает воображение и заставляет спорить с автором. А в героях Цвейга мы и сейчас, почти столетие спустя, узнаем себя. Ведь подлинная страсть не подвластна времени… В сборник вошли такие проникновенные новеллы, как \"Письмо незнакомки\", \"Амок\", \"Жгучая тайна\" и другие."
    },
    {
        id: 22,
        title: 'Спеши любить',
        price: 220,
        image: Speshi,
        author: 'Николас Спаркс',
        category: 'romance',
        language: 'Russian',
        barcode: 9785171004262,
        release: 1952,
        description: "Культовый роман «Спеши любить» Николас Спаркс создал, вдохновившись нелегкой судьбой младшей сестры. «Как и Джейми, моя сестра была милой. Как и Джейми, моя сестра неистово верила. Как и Джейми, моя сестра не была популярна в школе. Как и Джейми, моя сестра всегда была жизнерадостной. Как и Джейми, больше всего на свете моя сестра хотела выйти замуж. И, как и Джейми, моя сестра заболела раком...» — рассказывал писатель. Трагическая история невероятной любви дочери священника и школьного красавца поразила любителей мелодраматического кино в 2002 году."
    },
    {
        id: 23,
        title: 'My dark Vanessa',
        price: 200,
        image: MyDark,
        author: 'Kate Elizabeth Russel',
        category: 'romance',
        language: 'English',
        barcode: 9780008342241,
        release: 2018,
        description: "2000. Bright, ambitious, and yearning for adulthood, fifteen-year-old Vanessa Wye becomes entangled in an affair with Jacob Strane, her magnetic and guileful forty-two-year-old English teacher.2017. Amid the rising wave of allegations against powerful men, a reckoning is coming due. Strane has been accused of sexual abuse by a former student, who reaches out to Vanessa, and now Vanessa suddenly finds herself facing an impossible choice: remain silent, firm in the belief that her teenage self willingly engaged in this relationship, or redefine herself and the events of her past. But how can Vanessa reject her first love, the man who fundamentally transformed her and has been a persistent presence in her life? Is it possible that the man she loved as a teenager—and who professed to worship only her—may be far different from what she has always believed?"
    },
    {
        id: 24,
        title: 'Любовь во время чумы',
        price: 170,
        image: Lyubow,
        author: 'Гарсиа Маркес Габриэль',
        category: 'romance',
        language: 'Russian',
        barcode: 9785170920075,
        release: 1970,
        description: "«Любовь во время чумы» — роман колумбийского писателя, лауреата Нобелевской премии Габриэля Гарсиа Маркеса. Впервые произведение было опубликовано в 1985 году. В основу его сюжета легла нелегкая история отношений родителей писателя. Примечательно, что во многих произведениях Маркеса присутствуют отсылки к его дедушке Николасу. В «Шалой листве» основной персонаж Аурелиано — полковник. Ровно так же, как и старик автора. В романе «Сто лет одиночества» после совершенного убийства Хосе уходит из города Буэндиа. Дед Маркеса в юном возрасте тоже преступил закон и бежал."
    },
    {
        id: 25,
        title: 'На берегу Рио-Пьедра села я и заплакала',
        price: 150,
        image: NaBeregu,
        author: 'Пауло Коэльо',
        category: 'romance',
        language: 'Russian',
        barcode: 9785171147914,
        release: 2965,
        description: "На берегу Рио-Пьедра... - первый роман трилогии \"В день седьмой\", куда входят также \"Вероника решает умереть\" и \"Дьявол и сеньорита Прим\". Это роман о любви, о том, что она - главное в нашей жизни, и через нее можно точно так же прийти к Богу, как и через служение Ему в роли монаха-чудотворца. А еще о том, что рано или поздно каждому из нас приходится преодолевать свои страхи и делать Выбор."
    },
    {
        id: 26,
        title: 'Виноваты звёзды',
        price: 200,
        image: Vinovaty,
        author: 'John Green',
        category: 'romance',
        language: 'Russian',
        barcode: 9785170867127,
        release: 2010,
        description: "Рецензии на него беспрецедентны, в них повторяются слова \"гениально\" и \"совершенно\". Так что же заставило миллионы читателей по всему миру с замиранием сердца читать роман Джона Грина? Это поймет каждый, кто его откроет.Подростки, страдающие от тяжелой болезни, не собираются сдаваться. Они по-прежнему остаются подростками - ядовитыми, неугомонными, взрывными, бунтующими, равно готовыми и к ненависти, и к любви. Хейзел и Огастус бросают вызов судьбе. Они влюблены друг в друга, их терзает не столько нависшая над ними тень смерти, сколько обычная ревность, злость и непонимание. Они - вместе. Сейчас - вместе. Но что их ждет впереди?"
    },
    {
        id: 27,
        title: 'It Ends With Us',
        price: 120,
        image: ItEndsWithUs,
        author: 'Colleen Hoover',
        category: 'romance',
        language: 'English',
        barcode: 9781501110368,
        release: 2022,
        description: "Ryle is assertive, stubborn, maybe even a little arrogant. He’s also sensitive, brilliant, and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn’t hurt. Lily can’t get him out of her head. But Ryle’s complete aversion to relationships is disturbing. Even as Lily finds herself becoming the exception to his “no dating” rule, she can’t help but wonder what made him that way in the first place. As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan — her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened. "
    },
    {
        id: 28,
        title: 'Everything Everything',
        price: 250,
        image: Everything,
        author: 'Nicola Yoon',
        category: 'romance',
        language: 'English',
        barcode: 9780553496673,
        release: 2017,
        description: "My disease is as rare as it is famous. It’s a form of Severe Combined Immunodeficiency, but basically, I’m allergic to the world. I don’t leave my house, have not left my house in fifteen years. The only people I ever see are my mom and my nurse, Carla. But then one day, a moving truck arrives. New next door neighbors. I look out the window, and I see him. He’s tall, lean and wearing all black—black t-shirt, black jeans, black sneakers and a black knit cap that covers his hair completely. He catches me looking and stares at me. I stare right back. His name is Olly. I want to learn everything about him, and I do. I learn that he is funny and fierce. I learn that his eyes are Atlantic Ocean-blue and that his vice is stealing silverware. I learn that when I talk to him, my whole world opens up, and I feel myself starting to change—starting to want things. To want out of my bubble. To want everything, everything the world has to offer."
    },
    {
        id: 29,
        title: 'Every Breath',
        price: 200,
        image: EveryBreath,
        author: 'Nicholas Sparks',
        category: 'romance',
        language: 'Russian',
        barcode: 9781538728529,
        release: 2015,
        description: "In the romantic tradition of The Notebook and Nights in Rodanthe, #1 New York Times bestselling author Nicholas Sparks returns with a story about a chance encounter that becomes a touchstone for two vastly different individuals -- transcending decades, continents, and the bittersweet workings of fate. Hope Anderson is at a crossroads. At thirty-six, she's been dating her boyfriend, an orthopedic surgeon, for six years. With no wedding plans in sight, and her father recently diagnosed with ALS, she decides to use a week at her family's cottage in Sunset Beach, North Carolina, to ready the house for sale and mull over some difficult decisions about her future."
    },
]
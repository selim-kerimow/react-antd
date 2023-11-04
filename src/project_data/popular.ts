import { IBook } from "./IBook";

//images
import Obama from '../images/biography/Obama.jpg'
import Jobs from '../images/biography/Jobs.jpg'
import Igra from '../images/fantsy/Igra.jpg'
import Lovets from '../images/fantsy/Lovets.jpg'
import Lyubow from '../images/romance/Lyubow.jpg'
import Vinovaty from '../images/romance/Vinovaty.jpg'


export const popular: IBook[] = [
    {
        id: 9,
        title: 'Barack Obama', 
        price: 500.00, 
        image: Obama,
        author: 'Barack Obama', 
        category: 'biography', 
        language: 'English', 
        barcode: 9780241491515, 
        release: 2014,
        description: "#1 NEW YORK TIMES BESTSELLER • NAACP IMAGE AWARD NOMINEE • NAMED ONE OF THE TEN BEST BOOKS OF THE YEAR BY THE NEW YORK TIMES BOOK REVIEW Reflecting on the presidency, he offers a unique and thoughtful exploration of both the awesome reach and the limits of presidential power, as well as singular insights into the dynamics of U.S. partisan politics and international diplomacy. Obama brings readers inside the Oval Office and the White House Situation Room, and to Moscow, Cairo, Beijing, and points beyond. We are privy to his thoughts as he assembles his cabinet, wrestles with a global financial crisis, takes the measure of Vladimir Putin, overcomes seemingly insurmountable odds to secure passage of the Affordable Care Act, clashes with generals about U.S. strategy in Afghanistan, tackles Wall Street reform, responds to the devastating Deepwater Horizon blowout, and authorizes Operation Neptune’s Spear, which leads to the death of Osama bin Laden."
    },
    {
        id: 37, 
        title: 'Игра Джералда', 
        price: 110.00, 
        image: Igra,
        author: 'Стивен Кинг', 
        category: 'fantasy', 
        language: 'Russian', 
        barcode: 9785170956906, 
        release: 2013,
        description: "В уединенном доме на берегу лесного озера в штате Мэн разыгралась трагедия. Джесси потеряла мужа и осталась одна, прикованная к кровати... Но ее одиночество было недолгим. Все страхи, которые она когда-либо испытывала в жизни, в одночасье вернулись и заполнили уединенный дом, превратившийся в зловещую камеру пыток..."
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
        id: 6, title: 'Steve Jobs', 
        price: 800.00, 
        image: Jobs,
        author: 'Walter Isaacson', 
        category: 'biography', 
        language: 'English', 
        barcode: 9780349140438, 
        release: 2012,
        description: "Based on more than forty interviews with Steve Jobs conducted over two years—as well as interviews with more than 100 family members, friends, adversaries, competitors, and colleagues—Walter Isaacson has written a riveting story of the roller-coaster life and searingly intense personality of a creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing. Isaacson’s portrait touched millions of readers. At a time when America is seeking ways to sustain its innovative edge, Jobs stands as the ultimate icon of inventiveness and applied imagination. He knew that the best way to create value in the twenty-first century was to connect creativity with technology. He built a company where leaps of the imagination were combined with remarkable feats of engineering."
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
        id: 36, 
        title: 'Ловец снов', 
        price: 150.00, 
        image: Lovets,
        author: 'Стивен Кинг', 
        category: 'fantasy', 
        language: 'Russian', 
        barcode: 9785170946389, 
        release: 2012,
        description: "Бред странного, безумного человека, ворвавшегося в лагерь четверых охотников, — это лишь первый шаг четверых друзей в мир кошмара, далеко превосходящего человеческое понимание. В мир кромешного Ада, правит которым Зло. Абсолютное Зло, пришедшее, дабы нести людям погибель и страх. Зло, единственное оружие против которого кроется в тайной магии старинного индейского амулета — \"Ловца снов\"..."
    },

]
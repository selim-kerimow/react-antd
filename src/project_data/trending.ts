import { IBook } from "./IBook";

// images 
import The100 from '../images/fantsy/The100.jpg'
import Ono from '../images/fantsy/Ono.jpg'
import Mark from '../images/biography/Mark.jpg'
import Bill from '../images/biography/Bill.jpg'
import Everything from '../images/romance/Everything.jpg'
import ItEndsWithUs from '../images/romance/ItEndsWithUs.jpg'


export const trending: IBook[] = [
    {
        id: 39, 
        title: 'The 100 - Rebellion', 
        price: 120.00, 
        image: The100,
        author: 'Kass Morgan', 
        category: 'fantasy', 
        language: 'English', 
        barcode: 9780316435277, 
        release: 2012,
        description: "Centuries after nuclear war destroyed our planet, humanity struggles to rebuild. It’s been a month since the dropships landed and the Colonists joined the Hundred on the ground. The teens, once branded juvenile delinquents, are now leaders among their people.The Colonists and the Earthborns are celebrating their first holiday together when, to everyone’s horror, they’re attacked by a group of strangers whose unusual battle cries fill the air. The newcomers kill scores of people, seize prisoners, and pillage crucial supplies. When hotheaded Bellamy and his analytical girlfriend Clarke discover that Wells, Octavia and Glass have been captured, they vow to get them back at all costs. But as they go after their new enemies, Bellamy and Clarke find themselves increasingly at odds, unable to agree on a plan to save their friends."
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
        id: 2, 
        title: 'Mark Zuckerberg', 
        price: 100.00, 
        image: Mark,
        author: 'Mark Zuckerberg', 
        category: 'biography', 
        language: 'English', 
        barcode: 9781572842625, 
        release: 2020,
        description: "Mark Zuckerberg: In His Own Words details the visionary thoughts and opinions of Facebook's founder entirely through direct quotations from Zuckerberg himself. It is an intimate and authoritative look at the man behind Facebook's once-in-a-generation success. This book serves up his most thought-provoking insights, as researched and chosen by George Beahm, the New York Times bestselling editor of I, Steve: Steve Jobs In His Own Words.Mark Zuckerberg: In His Own Words provides crucial illumination of Zuckerberg and the company he's created, emphasizing insights, business strategies, and lessons learned. It is essential reading for people who seek innovative solutions applicable to their business, regardless of size, and makes an ideal gift or reference item for anyone interested in this American business icon."
    },
    {
        id: 34, 
        title: 'Оно', 
        price: 200.00, 
        image: Ono,
        author: 'Стивен Кинг', 
        category: 'fantasy', 
        language: 'Russian', 
        barcode: 9781572892915, 
        release: 2010,
        description: "В маленьком провинциальном городке Дерри много лет назад семерым подросткам пришлось столкнуться с кромешным ужасом — живым воплощением ада. Прошли годы... Подростки повзрослели, и ничто, казалось, не предвещало новой беды. Но кошмар прошлого вернулся, неведомая сила повлекла семерых друзей назад, в новую битву со Злом. Ибо в Дерри опять льется кровь и бесследно исчезают люди. Ибо вернулось порождение ночного кошмара, настолько невероятное, что даже не имеет имени..."
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
        id: 3, 
        title: 'Bill Gates', 
        price: 100.00, 
        image: Bill,
        author: 'Bill Gates', 
        category: 'biography', 
        language: 'English', 
        barcode: 9781572842922, 
        release: 2020,
        description: "Bill Gates’s second act is no less compelling than his first. This collection of quotes provides an inside look into the inner workings of one of the most revered, and occasionally controversial, business icons of the past four decades. And whether you’re interested in his personal life or looking for inspiration to drive you forward in your own business endeavors, Bill Gates: In His Own Words has much to offer. As the tech giants who distinguished the turn of the 21st century shape public life in ways that outstrip the previous century's titans of industry, we look to figures like Gates for inspiration. Now updated, expanded, and redesigned since its original publication in 2012 as Impatient Optimist: Bill Gates In His Own Words, you can find Gates’s most inspirational, thought-provoking quotes in one place."
    },
]
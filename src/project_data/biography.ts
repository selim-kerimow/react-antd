import { IBook } from "./IBook";

// images
import Bill from '../images/biography/Bill.jpg'
import Brandson from '../images/biography/Brandson.jpg'
import Buffet from '../images/biography/Buffet.jpg'
import Devil from '../images/biography/Devil.jpg'
import Ford from '../images/biography/Ford.jpg'
import GoodLives from '../images/biography/GoodLives.jpg'
import Greenlights from '../images/biography/Greenlights.jpg'
import Happie from '../images/biography/Happie.jpg'
import Jobs from '../images/biography/Jobs.jpg'
import Mark from '../images/biography/Mark.jpg'
import Michel from '../images/biography/Michel.jpg'
import Obama from '../images/biography/Obama.jpg'
import Swift from '../images/biography/Swift.jpg'
import TheUnivese from '../images/biography/TheUnivese.jpg'
import TomHenks from '../images/biography/TomHenks.jpg'
import Maya from '../images/biography/Maya.jpg'
import Jesse from '../images/biography/Jesse.jpg'


export const biography: IBook[] = [
    {
        id: 1, 
        title: 'Том Хенкс', 
        price: 300.00, 
        image: TomHenks, 
        author: 'Том Хэнкс', 
        category: 'biography', 
        language: 'Russian',
        barcode: 9785389138414, 
        release: 2019,
        description: "Сборник блистательных рассказов от знаменитого американского актёра! Том Хэнкс, принадлежащий к числу интеллектуальных актёров, всю свою жизнь питал слабость к пишущим машинкам, которые он активно коллекционирует. Эта слабость и усадила его за писательский стол. Полноценный литературный дебют любимца публики в интересном оформлении!«Мистер Хэнкс оказался настоящим писателем с большой буквы «П», не посрамив ни одной из своих многочисленных пишущих машинок."},
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
    {
        id: 4, 
        title: 'Richard Brandson', 
        price: 100.00, 
        image: Brandson,
        author: 'Richard Brandson', 
        category: 'biography', 
        language: 'English', 
        barcode: 9781572892915, 
        release: 2021,
        description: "Richard Branson, who has been called 'England's most outrageous billionaire,' is also one of the world's most successful business leaders.Since the age of 16, when he founded Student magazine, Branson has been creating companies and finding innovative ways to grow them into the prodigious conglomerate known as the Virgin Group. At the age of 20, Branson founded a mail-order record retailer. Two years later he built a recording studio where the first artist signed to his Virgin label, Mike Oldfield, recorded the haunting soundtrack to The Exorcist. Decades later, industries as varied as entertainment (Virgin Music), retail (Virgin Megastores), transportation (Virgin Airlines), and telecommunications (Virgin Mobile) all bear Branson's business moniker. For the first time, the most thought-provoking, revealing, and inspiring quotes from Branson have been compiled in a single book."
    },
    {
        id: 5, 
        title: 'Taylor Swift', 
        price: 100.00, 
        image: Swift,
        author: 'Helena Hunt', 
        category: 'biography', 
        language: 'English', 
        barcode: 9781572842786, 
        release: 2022,
        description: "Get inside the head of one of the most influential musicians of our time, a pop music phenomenon turned titan of industry and cultural icon: Taylor Swift. This collection of quotes has been carefully curated from Swift’s numerous public statements—interviews, op-eds, social media posts, and more. It’s a comprehensive picture of her meteoric rise to the top, her ever-savvy business sense, and her increasingly vocalized perspective on the music world and beyond."
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
        id: 7, 
        title: 'Greenlights', 
        price: 200.00, 
        image: Greenlights,
        author: 'Matthew McConaughey', 
        category: 'biography', 
        language: 'English', 
        barcode: 9780593139134, 
        release: 2015,
        description: "I’ve been in this life for 50 years, been trying to work out its riddle for 42, and been keeping diaries of clues to that riddle for the last 35. Notes about successes and failures, joys and sorrows, things that made me marvel, and things that made me laugh out loud. How to be fair. How to have less stress. How to have fun. How to hurt people less. How to get hurt less. How to be a good man. How to have meaning in life. How to be more me. So I took a one-way ticket to the desert and wrote this book: an album, a record, a story of my life so far. This is fifty years of my sights and seens, felts and figured-outs, cools and shamefuls. Graces, truths, and beauties of brutality. Getting away withs, getting caughts, and getting wets while trying to dance between the raindrops."
    },
    {
        id: 8, 
        title: "The Universe Has Your Back: Transform Fear to Faith", 
        price: 150.00, 
        image: TheUnivese,
        author: 'Gabrielle Bernstein', 
        category: 'biography', 
        language: 'English', 
        barcode: 9781401946548, 
        release: 2017,
        description: "#1 New York Times Bestseller! In her latest book, The Universe Has Your Back, New York Times best-selling author Gabrielle Bernstein teaches readers how to transform their fear into faith in order to live a divinely guided life. Each story and lesson in the book guides readers to release the blocks to what they most long for: happiness, security, and clear direction. The lessons help readers relinquish the need to control so they can relax into a sense of certainty and freedom. Readers will learn to stop chasing life and truly live. Making the shift from fear to faith will give readers a sense of power in a world that all too often makes them feel utterly powerless. When the tragedies of the world seem overwhelming, this book will help guide them back to their true power. Gabrielle says, 'My commitment with this book is to wake up as many people as possible to their connection to faith and joy. In that connection, we can be guided to our true purpose: to be love and spread love.'"
    },
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
        id: 10, 
        title: 'Warren Buffet', 
        price: 100.00, 
        image: Buffet,
        author: 'Warren Buffet', 
        category: 'biography', 
        language: 'English', 
        barcode: 9781572842731, 
        release: 2019,
        description: "For more than half a century, Warren Buffett, the chairman and CEO of Berkshire Hathaway, has been one of the world's most respected businessmen, not just because of his savvy investments and unmatched record of returns, but also because of his humility, candor, and refreshing perspective on wealth. Despite this tremendous success, the Oracle of Omaha doesn't feel entitled to the $89 billion net worth his abilities have earned him. Instead, he likes to say that he was born at the right place and time, and as an active philanthropist, he has already pledged to give most of his money to charity. This modesty in the face of proven talent is part of what makes Buffett as popular on Main Street as he is on Wall Street--he is one of the world's wealthiest men and yet he is still personable and relatable."
    },
    {
        id: 11, 
        title: 'Becoming: Моя История', 
        price: 450.00, 
        image: Michel,
        author: 'Мишель Обама', 
        category: 'biography', 
        language: 'Russian', 
        barcode: 9785041018924, 
        release: 2015,
        description: "Becoming - одна из самых ожидаемых книг этого года. Искренние и вдохновляющие мемуары бывшей первой леди Соединенных Штатов Америки уже проданы тиражом более 3 миллионов экземпляров, переведены на 32 языка и 10 месяцев возглавляют самый престижный книжный рейтинг Amazon. В своей книге Мишель Обама впервые делится сокровенными моментами своего брака - когда она пыталась балансировать между работой и личной жизнью, а также стремительно развивающейся политической карьерой мужа."
    },
    {
        id: 12, 
        title: 'Devil In The White City', 
        price: 180.00, 
        image: Devil,
        author: 'Eric Larson', 
        category: 'biography', 
        language: 'English', 
        barcode: 9780609608449, 
        release: 2016,
        description: "Author Erik Larson imbues the incredible events surrounding the 1893 Chicago World's Fair with such drama that readers may find themselves checking the book's categorization to be sure that 'The Devil in the White City' is not, in fact, a highly imaginative novel. Larson tells the stories of two men: Daniel H. Burnham, the architect responsible for the fair's construction, and H.H. Holmes, a serial killer masquerading as a charming doctor. Burnham's challenge was immense. In a short period of time, he was forced to overcome the death of his partner and numerous other obstacles to construct the famous \"White City\" around which the fair was built. His efforts to complete the project, and the fair's incredible success, are skillfully related along with entertaining appearances by such notables as Buffalo Bill Cody, Susan B. Anthony, and Thomas Edison."
    },
    {
        id: 13, 
        title: 'Happie', 
        price: 100.00, 
        image: Happie,
        author: 'Paulo Coelho', 
        category: 'biography', 
        language: 'English', 
        barcode: 9781786331595, 
        release: 2019,
        description: "In Hippie, his most autobiographical novel to date, Paulo Coelho takes us back in time to re-live the dream of a generation that longed for peace and dared to challenge the established social order – authoritarian politics, conservative modes of behavior, excessive consumerism, and an unbalanced concentration of wealth and power.Following the “three days of peace and music” at Woodstock, the 1969 gathering in Bethel, NY that would change the world forever, hippie paradises began to emerge all around the world. In the Dam Square in Amsterdam, long-haired young people wearing vibrant clothes and burning incense could be found meditating, playing music and discussing sexual liberation, the expansion of consciousness and the search for an inner truth. They were a generation refusing to live the robotic and unquestioning life that their parents had known."
    },
    {
        id: 14, 
        title: 'Very Happy Lives', 
        price: 85.00, 
        image: GoodLives,
        author: 'J.K. Rowling', 
        category: 'biography', 
        language: 'English', 
        barcode: 9780316369152,
        release: 2019,
        description: "In 2008, J.K. Rowling delivered a deeply affecting commencement speech at Harvard University. Now published for the first time in book form, VERY GOOD LIVES presents J.K. Rowling's words of wisdom for anyone at a turning point in life. How can we embrace failure? And how can we use our imagination to better both ourselves and others? Drawing from stories of her own post-graduate years, the world famous author addresses some of life's most important questions with acuity and emotional force."
    },
    {
        id: 15, 
        title: 'Генри Форд: Моя Жизнь Мой Бизнес', 
        price: 160.00, 
        image: Ford,
        author: ' Генри Форд', 
        category: 'biography', 
        language: 'Russian', 
        barcode: 9785171224868, 
        release: 2021,
        description: "Генри Форд — личность поистине масштабная и противоречивая: один из богатейших людей своего времени, изобретатель-самоучка, безжалостный эксплуататор, страстный идеалист, консервативный новатор, прагматичный делец и оригинальный мыслитель. Эхо его великих достижений и оглушительных неудач раскатисто отозвалось в судьбе целых государств и отраслей промышленности по всему миру. Фордовская колоссальная автомобильная империя и легендарный сборочный конвейер вошли в историю, вдохновляя предпринимателей на смелые инновации и сегодня. Именно поэтому мемуары Форда \"Моя жизнь, мои достижения\" и \"Сегодня и завтра\" еще долго не потеряют своей актуальности."
    },
    {
        id: 16, 
        title: 'Who Was Maye Angelou', 
        price: 45.00, 
        image: Maya,
        author: 'Ellen Labrecque', 
        category: 'biography', 
        language: 'English', 
        barcode: 9780448488530, 
        release: 2020,
        description: "Born in Missouri in 1928, Maya Angelou had a difficult childhood. Jim Crow laws segregated blacks and whites in the South. Her family life was unstable at times. But much like her poem, \"Still I Rise,\" Angelou was able to lift herself out of her situation and flourish. She moved to California and became the first black—and first female—streetcar operator before following her interest in dance. She became a professional performer in her twenties and toured the U.S. and Europe as an opera star and calypso dancer. But Angelou's writing became her defining talent. Her poems and books, including I Know Why the Caged Bird Sings, brought her international acclaim."
    },
    {
        id: 17, 
        title: 'Who Was Jasse Owens', 
        price: 45.00, 
        image: Jesse,
        author: 'James Buckley', 
        category: 'biography', 
        language: 'English', 
        barcode: 9780448483078, 
        release: 2019,
        description: "At the 1936 Berlin Summer Olympics, track and field star Jesse Owens ran himself straight into international glory by winning four gold medals. But the life of Jesse Owens is much more than a sports story. Born in rural Alabama under the oppressive Jim Crow laws, Owens's family suffered many hardships. As a boy he worked several jobs like delivering groceries and working in a shoe repair shop to make ends meet. But Owens defied the odds to become a sensational student athlete, eventually running track for Ohio State. He was chosen to compete in the Summer Olympics in Nazi Germany where Adolf Hitler was promoting the idea of “Aryan superiority.” Owens’s winning streak at the games humiliated Hitler and crushed the myth of racial supremacy once and for all."
    },
]
import { IBook } from "./IBook";

//images
import MyDark from '../images/romance/MyDark.jpg'
import ItEndsWithUs from '../images/romance/ItEndsWithUs.jpg'
import TheHasel from '../images/fantsy/TheHasel.jpg'
import Unravel from '../images/fantsy/Unravel.jpg'
import TomHanks from '../images/biography/TomHenks.jpg'
import Swift from '../images/biography/Swift.jpg'


export const newBooks: IBook[] = [
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
        id: 30, 
        title: 'Unravel Me', 
        price: 400.00, 
        image: Unravel,
        author: 'Taheren Mafi', 
        category: 'fantasy', 
        language: 'English', 
        barcode: 9781405291767, 
        release: 2018,
        description: "X-Men meets The Handmaid's Tale in the second instalment in an epic and romantic YA fantasy trilogy perfect for fans of Sarah J. Maas, Victoria Aveyard's The Red Queen, Netflix's Stranger Things and Leigh Bardugo's Six of Crows. They want to find me. I will find them first. Juliette has escaped. She has found the headquarters of the rebel resistance - and people like her. People with gifts. She is free from The Reestablishment, free from their plan to use her as a weapon, and free to love Adam. But Juliette will never be free from her lethal touch. Or from Warner, who wants Juliette more than she ever thought possible. In this heart-racing sequel to the New York Times bestselling Shatter Me, Juliette has to make life-changing decisions between what she wants and what she thinks is right. Decisions that might involve choosing between her heartand the life of those she loves."
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
        id: 1, 
        title: 'Том Хенкс', 
        price: 300.00, 
        image: TomHanks, 
        author: 'Том Хэнкс', 
        category: 'biography', 
        language: 'Russian',
        barcode: 9785389138414, 
        release: 2019,
        description: "Сборник блистательных рассказов от знаменитого американского актёра! Том Хэнкс, принадлежащий к числу интеллектуальных актёров, всю свою жизнь питал слабость к пишущим машинкам, которые он активно коллекционирует. Эта слабость и усадила его за писательский стол. Полноценный литературный дебют любимца публики в интересном оформлении!«Мистер Хэнкс оказался настоящим писателем с большой буквы «П», не посрамив ни одной из своих многочисленных пишущих машинок."
    },
    {
        id: 38, 
        title: 'The Hazel Wood', 
        price: 105.00, 
        image: TheHasel,
        author: 'Melissa Albert', 
        category: 'fantasy', 
        language: 'English', 
        barcode: 9781250147905, 
        release: 2015,
        description: "Seventeen-year-old Alice and her mother have spent most of Alice’s life on the road, always a step ahead of the uncanny bad luck biting at their heels. But when Alice’s grandmother, the reclusive author of a cult-classic book of pitch-dark fairy tales, dies alone on her estate, the Hazel Wood, Alice learns how bad her luck can really get: her mother is stolen away-by a figure who claims to come from the Hinterland, the cruel supernatural world where her grandmother's stories are set. Alice's only lead is the message her mother left behind: “Stay away from the Hazel Wood.”"
    },
]
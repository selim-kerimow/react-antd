import { IBook } from "./IBook";
import '../css/magazines.css'

import magazine1 from '../images/magazines/magazine1.jpg'
import magazine2 from '../images/magazines/magazine2.jpg'
import magazine3 from '../images/magazines/magazine3.jpg'
import magazine4 from '../images/magazines/magazine4.jpg'

export const magazines: IBook[] = [
    {
        id: 40,
        title: 'Talking Tom and friends зимние фантазии',
        price: 120,
        image: magazine1,
        author: 'Комсомольская правда',
        barcode: 4620016296714,
        language: 'Russian',
        release: 2017,
        category: 'magazines',
        description: 'Знакомься, это Говорящий Том и его друзья! У каждого свои увлечения, свой характер, но все они весёлые и дружелюбные. В этом выпуске ребята готовятся к праздникам: пишут письмо с самым заветным желанием, выбирают подарки и устраивают сюрпризы. Присоединяйся! Дай волю воображению и творчеству! Читай комикс, фантазируй, раскрашивай, выполняй увлекательные задания. С Говорящим Томом и его друзьями ты точно не соскучишься и ещё обязательно проникнешься волшебным духом Нового года и Рождества.'
    },
    {
        id: 41,
        title: 'ELLE Левый берег Vs Правый берег',
        price: 90,
        image: magazine2,
        author: 'Комсомольская правда',
        barcode: 9771560318003,
        language: 'Russian',
        category: 'magazines',
        release: 2017,
    },
    {
        id: 42,
        title: 'Зарулём',
        price: 90,
        image: magazine3,
        author: 'Вячеслав Гудков',
        barcode: 9770321424007,
        language: 'Russian',
        category: 'magazines',
        release: 2017,
    },
    {
        id: 43,
        title: 'Вокруг света',
        price: 110,
        image: magazine4,
        author: 'Вячеслав Гудков',
        barcode: 4620002390013,
        language: 'Russian',
        category: 'magazines',
        release: 2015,
        description: 'Журнал «Вокруг света» основан в Санкт-Петербурге в 1861 году и издается на протяжении уже полутора веков. «Вокруг света» публикует новые взгляды на известные исторические события, рассказы о знаменитых людях и их судьбах, информацию о научных и географических открытиях и технических достижениях. Большую часть материалов составляют репортажи, подготовленные специально для журнала.'
    },
]
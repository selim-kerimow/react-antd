export interface IBook {
    id: number,
    title: string,
    price: number,
    image: string,
    category: string,
    language: string,
    barcode: number,
    release: number,
    author: string,
    description?: string
}
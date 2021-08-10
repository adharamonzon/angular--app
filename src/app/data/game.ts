export interface Game {
  id: number;
    tag?: string;
    title: string;
    subtitle?: string;
    price: string;
    image?:string;
    description?:string;
    imgDetailBG?:string;
    imgDetail?:string;
    top?: boolean;
    topBG?:string;
}
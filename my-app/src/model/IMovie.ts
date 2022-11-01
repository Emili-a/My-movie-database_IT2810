import { IReview } from './IReview';


export interface IMovie{
    id: string,
    title: string,
    duration?: string,
    plot?: string,
    genre?: string[],
    image_url?: string, //(link)
    review?: IReview[],
    agvRating?: number

}

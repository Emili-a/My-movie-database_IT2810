import { IReview } from './IReview';


export interface IMovie{
    id: string,
    title: string,
    duration?: string,
    plot?: string,
    genre?: string[],
    poster?: string, //(link)
    review?: IReview[],
    agvRating?: number
    favorite?: boolean
}

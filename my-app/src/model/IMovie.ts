
/**
 * @description The interface for IMovie with all possible movie data assigned to a type.
 */

export interface IMovie{
    _id: string,
    title: string,
    plot: string,
    fullplot?: string,
    rated?: string,
    year: string,
    released?: string,
    languages?: string[],
    directors?: string[],
    writers?: string[],
    runtime: string,
    genres: string[],
    cast: string[],
    poster: string, //(link)
    favorite?: boolean
}

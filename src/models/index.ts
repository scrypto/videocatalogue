export enum ProgramType {
    MOVIE = "movie",
    SERIES = "series",
}

export interface IPosterArt {
    url: string;
    width: number;
    height: number;
}

export interface IEntry {
    title: string;
    description: string;
    programType: ProgramType;
    images: IPosterArt;
    releaseYear: number;
}
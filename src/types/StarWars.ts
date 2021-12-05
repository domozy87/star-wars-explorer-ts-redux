export type Person = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    gender: string;
    birth_year: string;
};

export type People = {
    page: number;
    results: Person[];
    total_pages: number;
    total_results: number;
};

export type Movie = {
    title: string;
    director: string;
    producers: string;
    release_date: string;
};

export type Movies = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type Planet = {
    title: string;
    terrain: string;
    population: string;
};

export type Planets = {
    page: number;
    results: Planet[];
    total_pages: number;
    total_results: number;
};

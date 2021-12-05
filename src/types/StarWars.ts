export type PersonT = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    gender: string;
    birth_year: string;
};

export type PeopleT = {
    page: number;
    results: PersonT[];
    next: string;
    total_pages: number;
    count: number;
};

export type MovieT = {
    title: string;
    director: string;
    producers: string;
    release_date: string;
};

export type MoviesT = {
    page: number;
    results: MovieT[];
    total_pages: number;
    total_results: number;
};

export type PlanetT = {
    title: string;
    terrain: string;
    population: string;
};

export type PlanetsT = {
    page: number;
    results: PlanetT[];
    total_pages: number;
    total_results: number;
};

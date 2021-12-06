export type PersonT = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    gender: string;
    birth_year: string;
    url: string;
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
    producer: string;
    release_date: string;
    url: string;
};

export type MoviesT = {
    page: number;
    results: MovieT[];
    next: string;
    total_pages: number;
    count: number;
};

export type PlanetT = {
    name: string;
    terrain: string;
    population: string;
    url: string;
};

export type PlanetsT = {
    page: number;
    results: PlanetT[];
    next: string;
    total_pages: number;
    count: number;
};

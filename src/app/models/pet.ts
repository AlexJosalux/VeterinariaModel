export interface Pet {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}

export interface respuestaApi {
    data: Pet[];
}
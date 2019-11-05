import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    age: number;
    photoUrl: string;
    city: string;
    gender: string;
    introduction?: string;
    interest?: string;
    photo?: Photo[];
}


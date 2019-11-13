import { Photo } from './photo';
import { SourceNode } from 'source-list-map';

export interface User {
   userId: number;
    username: string;
    age: number;
    photoUrl: string;
    city: string;
    gender: string;
    introduction?: string;
    interest?: string;
    photo?: Photo[];
}


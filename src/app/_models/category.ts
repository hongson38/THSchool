import { DateInput } from 'ngx-bootstrap/chronos/test/chain';

export interface Category {
    categoryId: number;
    categoryName: string;
    isActive: boolean;
    timeCreated: Date;
    personCreateUserId: number;
    timeUpdate: Date;
}


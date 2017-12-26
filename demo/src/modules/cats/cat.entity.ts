import {Column, Model, Table} from 'sequelize-typescript';

@Table
export class Cat extends Model<Cat> {
    @Column public name: string;
    
    @Column public age: number;
    
    @Column public breed: string;
}

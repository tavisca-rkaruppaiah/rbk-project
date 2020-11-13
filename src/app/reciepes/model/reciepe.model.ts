import { Ingredient } from 'src/app/shared/model/ingredient.model';

export class Reciepe{
    constructor(public name:string, public description:string, public imagePath:string, public ingredients : Ingredient[]){}
}
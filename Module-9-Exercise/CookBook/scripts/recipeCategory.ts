//FROM MODULE 7&8:
//Fill out the body of this class so it extends BaseRecipeCategory
//and implements IRecipeCategory

class RecipeCategory implements IRecipeCategory {
    name: string;
    foodGroups: FoodGroup[];
    description: string;
    examples: IExample[];

    constructor(recipe: IRecipeCategory) {
        this.name = recipe.name;
        this.foodGroups = recipe.foodGroups;
        this.description = recipe.description;
        this.examples = recipe.examples;
    }    
} 
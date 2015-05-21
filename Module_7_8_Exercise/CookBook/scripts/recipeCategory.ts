//TODO:
//Fill out the body of this class so it extends BaseRecipeCategory
//and implements IRecipeCategory
//HINT: refer to the work you did on this in Module 6 to get started 

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
//TODO:
//Fill out the body of this class so it extends BaseRecipeCategory
//and implements IRecipeCategory
//HINT: refer to the work you did on this in Module 6 to get started 
var RecipeCategory = (function () {
    function RecipeCategory(recipe) {
        this.name = recipe.name;
        this.foodGroups = recipe.foodGroups;
        this.description = recipe.description;
        this.examples = recipe.examples;
    }
    return RecipeCategory;
})();
//# sourceMappingURL=recipeCategory.js.map
//FROM MODULE 7&8:
//Fill out the body of this class so it extends BaseRecipeCategory
//and implements IRecipeCategory
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
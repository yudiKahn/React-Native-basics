class Meal{
    /**
     * @param {string|number} id 
     * @param {[string|number]} cId 
     * @param {string} title 
     * @param {number} affordability range from 1 - 5 
     * @param {number} complexity range from 1 - 5 
     * @param {string} imgUrl 
     * @param {number} duration 
     * @param {[string]} ingredients 
     * @param {[string]} steps 
     * @param {boolean} isGlutenFree 
     * @param {boolean} isVegan 
     * @param {boolean} isVegetarian 
     * @param {boolean} isLactoseFree 
     */
    constructor(id, cId, title, affordability, complexity, imgUrl, duration, 
        ingredients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree){
            this.id = id;
            this.cId = cId;
            this.title = title;
            this.affordability = affordability;
            this.complexity = complexity;
            this.imgUrl = imgUrl;
            this.duration = duration;
            this.ingredients = ingredients;
            this.steps = steps;
            this.isGlutenFree = isGlutenFree;
            this.isVegan = isVegan;
            this.isVegetarian = isVegetarian;
            this.isLactoseFree = isLactoseFree;
        }

}

export default Meal;
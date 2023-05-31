const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'LOAD_RECIPES':
            return {...state,recipes:action.payload}
        case 'LOAD_BY_CATEGORIES':
            return {...state,recipeByCategory:action.payload}
        case 'LOAD_CATEGORIES':
            return {...state,categories:action.payload}
        case 'LOAD_DESSERTS':
            return {...state,desserts:action.payload}  
        case 'SELECT_CATEGORY':
            return {...state,selectedCategory:action.payload}
        case 'SELECT_CUISINE':
                return {...state,selectedCuisine:action.payload}
        case 'ADD_NAME':
                return {...state,recipeName:action.payload}
        case 'SEARCH_TEXT':
                return {...state,searchText:action.payload}
        case 'FILTERED_RECIPES':
             return {...state,filteredItems:action.payload}
        case 'SAVE_THE_RECIPE':
            if(!state.savedRecipes.find(item=>item.idMeal===action.payload.idMeal))
            {
                state.savedRecipes.push({...action.payload})
            }
            return {...state,savedRecipes:[...state.savedRecipes]}
        case 'SET_USER':
            return {...state,user:action.payload}

        case 'OPEN_SIDEBAR':
            return {...state,menuOpen:!state.menuOpen}
        case 'default':
            return {...state}
    }
}

export default reducer;
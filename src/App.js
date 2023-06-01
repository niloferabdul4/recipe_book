
import './App.css';
import Home from './Pages/Home/Home';
import { Routes,Route } from 'react-router-dom';
import SingleRecipe from './Pages/SingleRecipe/SingleRecipe';
import SavedRecipes from './Pages/SavedRecipes/SavedRecipes';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import { useContext } from 'react';
import { AppContext } from './Context/AppContextProvider';
import Profile from './Pages/ProfilePage/Profile';

import RecipeList from './Pages/RecipeList/RecipeList';
import FilteredRecipes from './Pages/FilteredRecipes/FilteredRecipes';


function App() {
  const {state:{user}}=useContext(AppContext)
  return (
    <div className="App">
      
        <Routes>
            <Route path='/' element={user ? <Home /> :<Register />} />           
            <Route path='/category/:category' element={<RecipeList/>} />
            <Route path='/details/:id' element={<SingleRecipe/>} />
            <Route path='/savedRecipes' element={<SavedRecipes/>} />
            <Route path='/recipe' element={<FilteredRecipes/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/login' element={user ? <Home /> : <Login />} />
            <Route path='/register' element={user ? <Home /> : <Register />} />

        </Routes>
       
    </div>
  );
}

export default App;

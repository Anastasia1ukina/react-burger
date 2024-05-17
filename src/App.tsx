import React from 'react';
import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';

const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <BurgerIngredients />
      </main>
    </>
  );
}

export default App;

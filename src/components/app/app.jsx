import React from 'react';
import stylesApp from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import data from '../../utils/data';

const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <section className={`${stylesApp.section} mt-10`}>
          <BurgerIngredients />
          <BurgerConstructor products={data} />
        </section>
      </main>
    </>
  );
}

export default App;

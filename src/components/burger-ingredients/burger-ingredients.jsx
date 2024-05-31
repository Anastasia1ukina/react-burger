import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesBurgerIngredients from './burger-ingredients.module.css';
import IngredientsList from '../ingredients-list/ingredients-list';
import data from '../../utils/data';
// import BurgerConstructor from '../burger-constructor/burger-constructor';

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('bun');

  const handleTabClick = (tab) => {
    setCurrent(tab);
    document.getElementById(tab).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={stylesBurgerIngredients.ingredients}>
        <div style={{ display: 'flex' }}>
          <Tab value="bun" active={current === 'bun'} onClick={() => handleTabClick('bun')}>
            Булки
          </Tab>
          <Tab value="sauce" active={current === 'sauce'} onClick={() => handleTabClick('sauce')}>
            Соусы
          </Tab>
          <Tab value="main" active={current === 'main'} onClick={() => handleTabClick('main')}>
            Начинки
          </Tab>
        </div>
        <ul className={`${stylesBurgerIngredients.list} mt-10 mb-10 custom-scroll`}>
          <li id="bun">
            <h2 className="text text_type_main-medium">Булки</h2>
            <IngredientsList products={data} type="bun" />
          </li>
          <li id="sauce">
            <h2 className="text text_type_main-medium">Соусы</h2>
            <IngredientsList products={data} type="sauce" />
          </li>
          <li id="main">
            <h2 className="text text_type_main-medium">Начинки</h2>
            <IngredientsList products={data} type="main" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerIngredients;

import React from 'react';
import { Counter, Tab, CurrencyIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesBurgerIngredients from './burger-ingredients.module.css';

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('Булки');

  return (
    <section className={`${stylesBurgerIngredients.section} mt-10`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={stylesBurgerIngredients.wrapper}>
        <div style={{ display: 'flex' }}>
          <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
import React from 'react';
import { Counter, Tab, CurrencyIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesBurgerIngredients from './burger-ingredients.module.css';
import data from '../../utils/data';
import { ingredientsPropTypes } from '../../utils/prop-type';

const IngredientsBunList = ({ ingredients }) => {
  const filteredIngredientsBun = ingredients.filter(item => item.type === 'bun');

  return (
    <ul>
      {filteredIngredientsBun.length > 0 ? (
        filteredIngredientsBun.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))
      ) : (
        <li>Список пуст</li>
      )}
    </ul>
  );
};

IngredientsBunList.propTypes = {
  ingredients: ingredientsPropTypes
};

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('Булки');

  return (
    <section className={`${stylesBurgerIngredients.section} mt-10`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={stylesBurgerIngredients.wrapper}>
        <div className={stylesBurgerIngredients.ingredients}>
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
          <h2 className="text text_type_main-medium">Булки</h2>
          <IngredientsBunList ingredients={data} />
          <h2 className="text text_type_main-medium">Соусы</h2>
          <h2 className="text text_type_main-medium">Начинки</h2>
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
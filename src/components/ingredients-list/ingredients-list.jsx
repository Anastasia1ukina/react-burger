import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesIngredientCard from './ingredients-list.module.css';
import { ingredientsPropTypes } from '../../utils/prop-type';
import PropTypes from 'prop-types';

const IngredientsList = ({ products, type }) => {
  const filteredIngredients = products.filter(item => item.type === type);

  return (
    <ul className={stylesIngredientCard.ingredients}>
      {filteredIngredients.length > 0 ? (
        filteredIngredients.map((item) => (
          <li key={item._id} className={`${stylesIngredientCard.card} mt-6 mb-10`}>
            <img src={item.image} alt={item.name} />
            <div className={`${stylesIngredientCard.price} mt-2 mb-2`}>
              <span className="text text_type_digits-default">{item.price}</span>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">{item.name}</p>
          </li>
        ))
      ) : (
        <li>Список пуст</li>
      )}
    </ul>
  );
};

IngredientsList.propTypes = {
  products: ingredientsPropTypes,
  type: PropTypes.string.isRequired
};

export default IngredientsList;

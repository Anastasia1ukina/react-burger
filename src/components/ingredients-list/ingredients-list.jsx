import { useState } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesIngredientCard from './ingredients-list.module.css';
import { ingredientsPropTypes } from '../../utils/prop-type';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

const IngredientsList = ({ products, type }) => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const filteredIngredients = products.filter(item => item.type === type);

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredient(ingredient);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedIngredient(null);
    setModalOpen(false);
  };

  return (
    <>
      <ul className={stylesIngredientCard.ingredients}>
        {filteredIngredients.length > 0 ? (
          filteredIngredients.map((item) => (
            <li
              key={item._id}
              className={`${stylesIngredientCard.card} mt-6 mb-10`}
              onClick={() => handleIngredientClick(item)}
            >
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
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <IngredientDetails ingredient={selectedIngredient} />
        </Modal>
      )}
    </>
  );
};

IngredientsList.propTypes = {
  products: ingredientsPropTypes,
  type: PropTypes.string.isRequired
};

export default IngredientsList;

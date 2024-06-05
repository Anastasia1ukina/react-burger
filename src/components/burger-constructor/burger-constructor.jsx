import { ConstructorElement, Button, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesBurgerConstructor from './burger-constructor.module.css';
import { ingredientsPropTypes } from '../../utils/prop-type';
import OrderDetails from '../order-details/order-details';
import { useState } from 'react';
import Modal from '../modal/modal';

const BurgerConstructor = ({ products, children }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOrderClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={`${stylesBurgerConstructor.wrapper} mt-10`}>
      <ul className={`${stylesBurgerConstructor.list}`}>
        <li className={`${stylesBurgerConstructor.itemFirst} mb-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={products[0].price}
            thumbnail={products[0].image_mobile}
          />
        </li>
        <li>
          <ul className={`${stylesBurgerConstructor.products} pr-2`}>
            {products.slice(1, -1).map(product => {
              return (
                <li key={product._id} className={`${stylesBurgerConstructor.item} mb-4`}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={product.name}
                    price={product.price}
                    thumbnail={product.image_mobile}
                  />
                </li>
              )
            })}
          </ul>
        </li>
        <li className={`${stylesBurgerConstructor.itemFirst} mt-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={products[0].price}
            thumbnail={products[0].image_mobile}
          />
        </li>
      </ul>
      <div className={`${stylesBurgerConstructor.wrapperOrder} mt-10 mr-4`}>
        <div className={`${stylesBurgerConstructor.wrapperPrice}`}>
          <span className="text text_type_digits-medium">610</span>
          <div className={`${stylesBurgerConstructor.wrapperIcon}`}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick}>Оформить заказ</Button>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <OrderDetails order={children} />
        </Modal>
      )}
    </div>
  );
}

BurgerConstructor.propTypes = {
  products: ingredientsPropTypes
};

export default BurgerConstructor;

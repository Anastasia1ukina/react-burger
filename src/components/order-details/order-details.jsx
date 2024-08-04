// import PropTypes from 'prop-types';
import stylesOrderDetails from './order-details.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import gradient from '../../images/gradient-order.svg';

const OrderDetails = ({ order }) => {
  // if (!order) {
  //   return null;
  // }

  return (
    <>
      <p className="text text_type_digits-large mt-20">034536</p>
      <p className="text text_type_main-medium mt-8 mb-15">идентификатор заказа</p>
      <div className={stylesOrderDetails.iconWrapper}>
        <img width="107" height="102" src={gradient} alt="gradient" />
        <CheckMarkIcon type="primary" />
      </div>
      <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-15">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  )
}

// OrderDetails.propTypes = {
//   order: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default OrderDetails;
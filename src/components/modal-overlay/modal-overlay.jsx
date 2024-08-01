import stylesModalOverlay from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ onClick }) => {
  return (
    <div className={`${stylesModalOverlay.modalOverlay}`} onClick={onClick} />
  )
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ModalOverlay;
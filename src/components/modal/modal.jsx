import { useEffect } from 'react';
import stylesModal from './modal.module.css';
import { createPortal } from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ingredientsPropTypes } from '../../utils/prop-type';

const modalRoot = document.getElementById('react-modals');

const Modal = ({ isOpen, onClose, children }) => {

  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={`${stylesModal.wrapper}`}>
      <div className={`${stylesModal.modal}`}>
        <div className={`${stylesModal.modalContent} pt-10 pr-10 pb-15 pl-10`}>
          <div className={`${stylesModal.content}`}>
            <div className={`${stylesModal.iconClose}`}>
              <CloseIcon type='primary' onClick={onClose} />
            </div>
            {children}
          </div>
        </div>
      </div>
      <ModalOverlay onClick={onClose} />
    </div>,
    modalRoot
  )
}

Modal.propTypes = {
  isOpen: PropTypes.string.isRequired,
  onClose: PropTypes.string.isRequired,
  children: ingredientsPropTypes,
};

export default Modal;
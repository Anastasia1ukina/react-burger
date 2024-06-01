import { useEffect } from 'react';
import stylesModal from './modal.module.css';
import { createPortal } from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('react-modals');

const Modal = ({ isOpen, onClose, children }) => {

  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={`${stylesModal.wrapper}`}>
      <div className={`${stylesModal.modal} p-10`}>
        <div>
          <h1>Детали ингредиента</h1>
          <CloseIcon type='primary' onClick={onClose} />
        </div>
        <div className={`${stylesModal.content}`}>
          {children}
        </div>
      </div>
      <ModalOverlay onClick={onClose} />
    </div>,
    modalRoot
  )
}

export default Modal;
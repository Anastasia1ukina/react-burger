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
          {/* <div className={`${stylesModal.header}`}> */}
          <div className={`${stylesModal.content}`}>
            <CloseIcon type='primary' onClick={onClose} />
            {children}
          </div>
          {/* <h1 className={`${stylesModal.title} text text_type_main-large`}>Детали ингредиента</h1> */}
          {/* </div> */}
        </div>
      </div>
      <ModalOverlay onClick={onClose} />
    </div>,
    modalRoot
  )
}

export default Modal;
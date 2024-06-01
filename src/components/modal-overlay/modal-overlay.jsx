import stylesModalOverlay from './modal-overlay.module.css';

const ModalOverlay = ({ onClick }) => {
  return (
    <div className={`${stylesModalOverlay.modalOverlay}`} onClick={onClick} />
  )
}

export default ModalOverlay;
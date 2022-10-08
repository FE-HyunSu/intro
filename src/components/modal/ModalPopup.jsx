import ReactDom from 'react-dom';
import '../../assets/styles/modal.scss';

export default function ModalPopup({open, children, onCloseModal}) {
  if(!open) return null;

  return ReactDom.createPortal (
    <>
      <div className="modal-pop">
        <div className='modal-dimed' onClick={onCloseModal}></div>
        <div className='modal-content'>
          {children}
        </div>
      </div>
    </>,
    document.getElementById('modal')
  )
}
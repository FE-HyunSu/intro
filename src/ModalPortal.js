import ReactDOM from 'react-dom';
import ModalPopup from './components/modal/ModalPopup';

export default function ModalPortal(){
  const el = document.getElementById('modal');
  const modalContents = <ModalPopup />;
  return ReactDOM.createPortal(modalContents, el);
}
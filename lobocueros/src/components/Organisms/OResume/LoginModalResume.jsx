import React from 'react';
import Modal from '@material-ui/core/Modal';
import Lobocueros from '../../../assets/Icons/Lobocueros.svg'
import TabsLoginModal from '../../Molecules/MReusable/TabsLoginModal';
import Buttons from '../../Atoms/AReusable/Buttons';

export default function LoginModalResume() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div  className="login-modal">
      <div className="logo-lobocueros-login-modal">
        <img src={Lobocueros}></img>
      </div>
      <div className="title-lobocueros-login-modal">
        <p>Lobocueros</p>
      </div>
      <div className="tabs-login-modal">
        <TabsLoginModal></TabsLoginModal>
      </div>
    </div>
  );

  return (
	<>
    <div onClick={handleOpen}>
      <Buttons type="Login" text="Iniciar Sesión" ></Buttons>
    </div> 
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>
			{body}
		</Modal>
	</>
  );
}
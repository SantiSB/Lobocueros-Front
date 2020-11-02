import React from 'react';
import Modal from '@material-ui/core/Modal';
import User from '../../../assets/Icons/User.svg'
import Lobocueros from '../../../assets/Icons/Lobocueros.svg'
import TabsLoginModal from '../../Molecules/MReusable/TabsLoginModal';

export default function LoginModal(props) {
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
        <img src={Lobocueros} alt="lobocueros"></img>
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
		<i onClick={handleOpen}><img src={User} alt="user"></img></i>
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
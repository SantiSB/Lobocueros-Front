import React from 'react';
import Instagram_Lobocueros from '../../../assets/Icons/Instagram_Lobocueros.svg'
import ig1 from '../../../assets/Images/ig1.jpg'
import ig2 from '../../../assets/Images/ig2.jpg'
import ig3 from '../../../assets/Images/ig3.jpg'
import ig4 from '../../../assets/Images/ig4.jpg'
import ig5 from '../../../assets/Images/ig5.jpg'

const InstagramSection = () => {
    return(
        <div className="instagramSection-main">
			<div className="instagram-bar">
				<img alt="link-instagram" src={Instagram_Lobocueros}></img>
				<span><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lobocueros/">Instagram</a></span>
			</div>
			<div className="instagram-photos-grid">
				<div className="img1"><a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/lobocueros/"><img alt="link-instagram" src={ig1}></img></a></div>
				<div className="img2"><a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/lobocueros/"><img alt="link-instagram" src={ig2}></img></a></div>
				<div className="img3"><a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/lobocueros/"><img alt="link-instagram" src={ig3}></img></a></div>
				<div className="img4"><a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/lobocueros/"><img alt="link-instagram" src={ig4}></img></a></div>
				<div className="img5"><a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/lobocueros/"><img alt="link-instagram" src={ig5}></img></a></div>
			</div>
		</div>
    )
}
export default InstagramSection;
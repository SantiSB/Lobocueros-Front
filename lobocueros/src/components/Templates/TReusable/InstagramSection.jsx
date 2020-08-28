import React from 'react';
import Instagram_Lobocueros from '../../../assets/Icons/Instagram_Lobocueros.svg'
import ig1 from '../../../assets/Images/ig1.png'
import ig2 from '../../../assets/Images/ig2.png'
import ig3 from '../../../assets/Images/ig3.png'
import ig4 from '../../../assets/Images/ig4.png'
import ig5 from '../../../assets/Images/ig5.png'

const InstagramSection = () => {
    return(
        <div className="instagramSection-main">
			<div className="instagram-bar">
				<img src={Instagram_Lobocueros}></img>
				<span><a target="_blank"href="https://www.instagram.com/lobocueros/">Instagram</a></span>
			</div>
			<div className="instagram-photos-grid">
				<div className="img1"><a target="_blank" href="https://www.instagram.com/lobocueros/"><img src={ig1}></img></a></div>
				<div className="img2"><a target="_blank" href="https://www.instagram.com/lobocueros/"><img src={ig2}></img></a></div>
				<div className="img3"><a target="_blank" href="https://www.instagram.com/lobocueros/"><img src={ig3}></img></a></div>
				<div className="img4"><a target="_blank" href="https://www.instagram.com/lobocueros/"><img src={ig4}></img></a></div>
				<div className="img5"><a target="_blank" href="https://www.instagram.com/lobocueros/"><img src={ig5}></img></a></div>
			</div>
		</div>
    )
}
export default InstagramSection;
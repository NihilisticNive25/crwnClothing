import React from 'react'
import './menuItem.styles.scss';

const menuItem = ({title, imageUrl, size}) => (
    <div style={{
    	backgroundImage:`url(${imageUrl})`
    }} className={`${size} menuItem`}>
				<div className="content">
					<div className="title">{title}</div>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>

)

export default menuItem;
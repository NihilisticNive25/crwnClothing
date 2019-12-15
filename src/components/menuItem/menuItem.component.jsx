import React from 'react'
import './menuItem.styles.scss';

const menuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menuItem`}>
    <div style={{
    	backgroundImage:`url(${imageUrl})`
    }} className="backgroundImage"/>
				<div className="content">
					<div className="title">{title.toUpperCase()}</div>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>

)

export default menuItem;
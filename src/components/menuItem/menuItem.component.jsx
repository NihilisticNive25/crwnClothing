import React from 'react'
import { withRouter } from 'react-router-dom'
import './menuItem.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <div className={`${size} menuItem`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div style={{
    	backgroundImage:`url(${imageUrl})`
    }} className="backgroundImage"/>
				<div className="content">
					<div className="title">{title.toUpperCase()}</div>
					<span className="subtitle">SHOP NOW</span>
				</div>
			</div>

)

export default withRouter(MenuItem);
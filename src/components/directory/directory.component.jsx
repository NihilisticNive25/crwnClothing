import React from 'react';
import MenuItem from '../menuItem/menuItem.component';

import {connect } from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

import './directory.styles.scss';

const Directory = ({sections}) => (
		<div className="directoryMenu">
		{
			sections.map(({id, ...otherSectionProps}) => (
				<MenuItem key={id} {...otherSectionProps}/>
			))
		}
		</div>
);

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
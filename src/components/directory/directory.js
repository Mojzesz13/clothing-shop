import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item';

import './directory.scss';

const Directory = ({ sections }) => {
  return (
    <div className='director-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStatetoProps)(Directory);

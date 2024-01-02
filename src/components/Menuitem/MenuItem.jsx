import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, price, tags}) => (
  <div className="blc__menuitem">
    <div className="blc__menuitem-head">
      <div className="blc__menuitem-name">
        <p className="p__cormornat" style={{ color: '#DCCA87'}}>{title}</p>
      </div>

      <div className="blc__menuitem-dash" />

      <div className="blc__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
      </div>
      
      <div className="blc__menuitem-sub">
        <p className="p__sans" style={{ color: '#AAA'}}>{tags}</p>
      </div>

  </div>
);

export default MenuItem;

import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="blc__specialMenu flex__center section__padding" id='menu'>
    <div className="blc__specialMenu-title">
      <SubHeading title="Menu that fits you palette" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="blc__specialMenu-menu">
      <div className="blc__specialMenu-menu_juice flex_center">
        <p className="blc__specialMenu-menu_heading">Desserts & Beverages </p>
        <div className="blc__specialMenu_menu_items">
          {data.juices.map((juice, index) => (
            <MenuItem key={juice.title + index} title={juice.title} price={juice.price} tags={juice.tags} />
          ))}          
        </div>
      </div>

      <div className="blc__specialMenu-menu_img">
        <img src={images.dessert} alt="dessert img" style={{width:'40rem', height:'34rem', padding: '1rem'}} />
        <img src={images.menu} alt="menu img" style={{width:'40rem', height:'33rem', padding: '1rem'}} />
      </div>

      <div className="blc__specialMenu-menu_meals flex_center">
        <p className="blc__specialMenu-menu_heading">Meals</p>
        <div className="blc__specialMenu_menu_items">
          {data.meals.map((meal, index) => (
            <MenuItem key={meal.title + index} title={meal.title} price={meal.price} tags={meal.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: '15px'}}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;

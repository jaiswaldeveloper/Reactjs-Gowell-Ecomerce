import React from 'react';
import { MenuListMat } from '../helpers/MenuListMat';
import MenuItem from './MenuItem';
import '../styles/Menu.css';

function MenuPillows() {
  return (
    <>
      <h1 className="menuTitle  top-space">Door Mat</h1>
      <div className="container-fluid">
        <div className="menu">
          <div className="menuList">
            {MenuListMat.map((menuItem, key) => {
              return (
                <MenuItem
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                  lastName={menuItem.lastName}
                  price={menuItem.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuPillows;

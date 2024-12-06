/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  
  return (
    <div className="explore-menu" id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p>
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our mission
        is to satisfy your atisfy your cravings and elevate your dining
        experience, one delicious meal at a time.
      </p>
      <div className="explore-menu-items">
        {menu_list.map((item,index) => (
          <div key={index}
            
            className="explore-menu-item">
            <img
            onClick={()=>setCategory(category===item.menu_name?"all":item.menu_name)}
            
              className={
                category === item.menu_name
                  ? "explore-menu-item-active"
                  : "explore-menu-item"
              }
              src={item.menu_image}
              alt=""
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu


import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
       <NavLink to={'/add'} className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>اضافة صنف</p>
        </NavLink>

       <NavLink to={'/list'} className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>قائمة الأصناف</p>
        </NavLink>
       <NavLink to={'/orders'} className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>قائمة الطلبات</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar

import "./Navbar.css";
import logo from "../Assets/logo.png";
import { ShopContext } from "../../Context/ShopContext";
import cart_icon from "../Assets/cart_icon.png"
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import nav_dropdown from "../Assets/nav_dropdown.png"
const Navbar = ()=>{
    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }

    return(
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>SHOPPER</p>
                </div>
                <img onClick={dropdown_toggle} src={nav_dropdown} alt="" className="nav-dropdown" />
                <ul ref={menuRef} className="nav-menu">
                    <li onClick={()=>setMenu("shop")}> <Link to="/">Shop</Link> {menu==="shop"?<hr/>:<></>} </li>
                    <li onClick={()=>setMenu("men")}> <Link to="/mens">Men</Link> {menu==="men"?<hr/>:<></>}</li>
                    <li onClick={()=>setMenu("women")}> <Link to="/womens">Women</Link> {menu==="women"?<hr/>:<></>}</li>
                    <li onClick={()=>setMenu("kids")}> <Link to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
                </ul>
                <div className="nav-login-cart">
                    <button><Link to="/login">Login</Link></button>
                    <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>
        </>
    )
}
export default Navbar;
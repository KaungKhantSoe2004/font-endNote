import "./index.css"
import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <div className="navBar">
<ul>
    <li>
        <Link to="/" >Home</Link>
    </li>
    <li>
        <Link to="/about" >About</Link>
    </li>
    <li>
        <Link to="/contact" >Contact</Link>
    </li>
    <li>
        <Link to="/login" >Login</Link>
    </li>
    <li>
        <Link to="/products" >Products</Link>
    </li>
</ul>
        </div>
    )
}
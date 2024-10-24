import '../styles/header.css'

import { Link } from 'react-router-dom';



const Header = ()=>{
    return(
        <>
        <section>
            <div className="header">
                <div className="brand">
                    <h1 className="brand-name">Chain Tech Network</h1>
                </div>
                <div className="header-list">
                    <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link><li>Users</li></Link>
                        <Link to={'/login'}><li>Login</li></Link>
                    </ul>
                </div>
            </div>
        </section>
        </>
    )
}


export default Header;
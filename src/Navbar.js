import {Link} from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="navbar">
            <h1>Blogocity</h1>
            <div className = "links">
                <Link to="/">Home</Link>
                <a href="https://www.instagram.com/apurvstic/">About Me😉</a><br /><br />
                <Link to="/create" style = {{
                    
                    backgroundColor:"#b3d9ff",
                    borderRadius: "6px",
                    color:"black",
                    fontWeight: "bold",
                }}>New Blog</Link>
            </div>
        </nav>
                

    );
}
 
export default Navbar;
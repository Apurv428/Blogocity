import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry☹️</h2>
            <p>That page cannot be found</p><br />
            <Link to= "/" style = {{
                    
                    color:"white",
                    fontWeight: "bold",
            }}>Back to Homepage</Link>
        </div>
     );
}
 
export default NotFound;

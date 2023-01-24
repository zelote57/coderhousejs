import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

const NavBar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Old Music Tapes</a>
            </div>            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">                
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Rock Tapes<span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Jazz Tapes</a>
                    <a className="nav-item nav-link" href="#">Blues Tapes</a>
                    <a className="nav-item nav-link disabled" href="#">Reggae Tapes</a>
                </div>
            </div>
            <CartWidget />
        </nav>
        <ItemListContainer gretting="Old Music New Souls" />
        </>
    );
}

export default NavBar;
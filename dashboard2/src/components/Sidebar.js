import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className='sidebar-list'>
                <li>
                    <Link to="">Inicio</Link>
                </li>
                <li>
                    <Link to="">Nuestros clientes</Link>
                </li>
                <li>
                    <Link to="">Lo que vendemos</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
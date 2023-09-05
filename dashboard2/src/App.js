import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.scss';

function App() {
    return (
        <Router>
            <Navbar />

            <Sidebar />

        </Router>
    );
}

export default App;

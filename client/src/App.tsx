import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import {CustomerPage} from './pages/CustomerPage';
import {ItemPage} from './pages/ItemPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div>

                {/* Navigation Bar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/customer">Customers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/item">Items</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Routing */}
                <div className="container my-5">
                    <Routes>
                        <Route path="/" element={<CustomerPage/>}/>
                        <Route path="/customer" element={<CustomerPage/>}/>
                        <Route path="/item" element={<ItemPage/>}/>
                    </Routes>
                </div>

            </div>
        </Router>
    );
}

export default App;
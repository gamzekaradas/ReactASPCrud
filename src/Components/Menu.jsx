import React from 'react';
import {Link} from 'react-router-dom';

export default function Menu() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand mb-0 h1" href="#">Kullanıcı Bilgi Sistemi</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Listele</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/add">Ekle</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/delete">Sil</Link>
                    </li>         
                    <li className="nav-item active">
                        <Link className="nav-link" to="/update">Güncelle</Link>
                    </li>                                       
                </ul>
            </div>
        </nav>
    )
}
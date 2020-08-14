import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import logoimg from '../../assets/images/logo.svg';
import homeimg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

function Home() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then((response) => {
            const { total } = response.data;

            setTotalConnections(total);
        });
    }, []);

    return (
        <div id="homepage">
            <div id="homepage-content" className="wrapper">
                <div className="logo-wrapper">
                    <img src={logoimg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img className="hero-image" src={homeimg} alt="Plataforma de estudos" />

                <div className="buttons-wrapper">
                    <Link to="../study/index.tsx" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>

                    <Link to="../teach/index.tsx" className="teach">
                        <img src={teachIcon} alt="Dar aulas" />
                        Ensinar
                    </Link>
                </div>
                <span className="total-connections">
                    Total de { totalConnections } conexões já realizada <img src={purpleHeart} alt="Coração roxo" />
                </span>
            </div>
        </div>

    );
}

export default Home;

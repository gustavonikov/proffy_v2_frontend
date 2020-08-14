import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import backIcon from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/logo.svg';

// mesma coisa do propTypes com JS, e colocar uma prop dentro do ()
interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children, description }) => (
    <header className="page-header">
        <div className="top-bar-wrapper">
            <Link to="/">
                <img src={backIcon} alt="Retornar para página inicial" />
            </Link>

            <img src={logo} alt="proffy" />
        </div>

        <div className="header-content">
            <strong>{ title }</strong>

            { description && <p>{description}</p> }

            { children }
        </div>
    </header>
);

export default PageHeader;

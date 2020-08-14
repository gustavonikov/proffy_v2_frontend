import React from 'react';

import './index.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    whatsapp: number;
    bio: string;
    subject: string;
    cost: number;
    // eslint-disable-next-line camelcase
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id,
        });
    }
    return (
        <article className="teacher-item">
            <header>

                <img
                    src={teacher.avatar}
                    alt={teacher.name}
                />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>Preço/horas <strong>R$ {teacher.cost}</strong></p>
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a target="_blank" onClick={createNewConnection} href={`https://api.whatsapp.com/send?1=pt_BR&phone=55${teacher.whatsapp}&text=Olá, ${teacher.name}! Tenho interesse na sua aula de ${teacher.subject}.`} type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
                </a>
            </footer>
        </article>
    );
};

export default TeacherItem;

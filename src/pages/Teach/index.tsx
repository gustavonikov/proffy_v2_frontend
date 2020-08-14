/* eslint-disable no-alert */
// eslint-disable-next-line no-unused-vars
import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import './index.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function Teach() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' },
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' },
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedSchedule = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }
            return scheduleItem;
        });
        setScheduleItems(updatedSchedule);
    }

    function handleCreateClass(ev: FormEvent) {
        ev.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems,
        }).then(() => {
            alert('Cadastro realizado com sucesso');

            history.push('/');
        }).catch(() => {
            alert('Não foi possível cadastrar');
        });
    }

    return (
        <div id="teach-page" className="wrapper">
            <PageHeader
                title="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher esse formulário de inscrição."
            />
            <main>
                <form onSubmit={handleCreateClass} action="">
                    <fieldset>
                        <legend> Seus dados</legend>
                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={(ev) => { setName(ev.target.value); }}
                            required
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            type="url"
                            required
                            value={avatar}
                            onChange={(ev) => { setAvatar(ev.target.value); }}
                        />
                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            type="number"
                            required
                            value={whatsapp}
                            onChange={(ev) => { setWhatsapp(ev.target.value); }}
                        />
                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(ev) => { setBio(ev.target.value); }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend> Sobre a aula </legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(ev) => { setSubject(ev.target.value); }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Inglês', label: 'Inglês' },
                                { value: 'Espanhol', label: 'Espanhol' },
                            ]}
                        />
                        <Input
                            name="cost"
                            label="Custo da sua hora/aula"
                            type="number"
                            value={cost}
                            onChange={(ev) => { setCost(ev.target.value); }}
                        />
                    </fieldset>

                    <fieldset id="schedule-items">
                        <legend>
                            Horários disponíveis
                            <button type="button" id="add-time" onClick={addNewScheduleItem}>
                                + Novo Horário
                            </button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Dia da semana"
                                    value={scheduleItem.week_day}
                                    onChange={(ev) => setScheduleItemValue(index, 'week_day', ev.target.value)}
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda' },
                                        { value: '2', label: 'Terça' },
                                        { value: '3', label: 'Quarta' },
                                        { value: '4', label: 'Quinta' },
                                        { value: '5', label: 'Sexta' },
                                        { value: '6', label: 'Sábado' },
                                    ]}
                                />
                                <Input
                                    name="from"
                                    label="Das"
                                    type="time"
                                    value={scheduleItem.from}
                                    onChange={(ev) => setScheduleItemValue(index, 'from', ev.target.value)}
                                />
                                <Input
                                    name="to"
                                    label="Até"
                                    type="time"
                                    value={scheduleItem.to}
                                    onChange={(ev) => setScheduleItemValue(index, 'to', ev.target.value)}
                                />
                            </div>
                        ))}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>

    );
}

export default Teach;

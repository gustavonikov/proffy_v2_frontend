const subjects = [
    'Artes',
    'Biologia',
    'Ciências',
    'Educação Física',
    'Física',
    'Geografia',
    'História',
    'Matemática',
    'Português',
    'Química',
    'Programação',
];

const weekdays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
];

function getSubject(subjectNumber) {
    const subjectPosition = +subjectNumber - 1; // sem + tava dando bom
    return subjects[subjectPosition];
}

function convertHoursToMinutes(time) {
    const [hour, min] = time.split(':');
    return Number((hour * 60) + min);
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes,
};

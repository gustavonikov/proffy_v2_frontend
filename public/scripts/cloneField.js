function cloneField() {
    // Duplicar os campos. Que campos?
    const newScheduleField = document.querySelector('.schedule-item').cloneNode(true);

    // limpar os campos, quais?
    const scheduleFields = newScheduleField.querySelectorAll('input');

    // limpar cada campo input pra ele duplicar vazio
    // eslint-disable-next-line no-param-reassign
    scheduleFields.forEach((field) => field.value = '');

    // colocar na página, onde?
    document.querySelector('#schedule-items').appendChild(newScheduleField);
}

// Procurar o botão na página
document.querySelector('#add-time')
// E quando eu achar o botão, e clickar o que deve acontecer?
    .addEventListener('click', cloneField);

/* eslint-disable global-require */
const dataBase = require('../database/db');
const { subjects, weekdays, getSubject, convertHoursToMinutes } = require('../utils/format');

function getHome() { return (req, res) => res.render('Home/index.html'); }

function getStudy() {
    // eslint-disable-next-line consistent-return
    return async (req, res) => {
        const filters = req.query;

        if (!filters.subject || !filters.weekday || !filters.time) {
            return res.render('Study/index.html', { filters, subjects, weekdays });
        }

        // converter as horas do campo time para minutos
        const convertTime = convertHoursToMinutes(filters.time);

        const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.* 
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${convertTime}
            AND class_schedule.time_to > ${convertTime}
        )
        AND classes.subject = '${filters.subject}'
        `;

        // caso haja erro na hora da consulta do banco dados

        try {
            const db = await dataBase;
            const proffys = await db.all(query);

            // eslint-disable-next-line no-param-reassign
            proffys.map((proffy) => proffy.subject = getSubject(proffy.subject));

            return res.render('Study/index.html', { proffys, subjects, filters, weekdays });
        } catch (error) {
            console.log(error);
        }
    };
}

function getTeach() {
    return (req, res) => res.render('Teach/index.html', { subjects, weekdays });
}

function postTeach() {
    // eslint-disable-next-line consistent-return
    return async (req, res) => {
        const createProffy = require('../database/createProffy');

        const proffyValue = {
            name: req.body.name,
            avatar: req.body.avatar,
            whatsapp: req.body.whatsapp,
            bio: req.body.bio,
        };

        const classValue = {
            subject: req.body.subject,
            cost: req.body.cost,
        };

        const classScheduleValues = req.body.weekday.map((weekday, index) => ({
            weekday,
            time_from: convertHoursToMinutes(req.body.time_from[index]),
            time_to: convertHoursToMinutes(req.body.time_to[index]),
        }));
        try {
            const db = await dataBase;
            await createProffy(db, { proffyValue, classValue, classScheduleValues });

            let queryString = `?subject=${req.body.subject}`;
            queryString += `&weekday=${req.body.weekday[0]}`;
            queryString += `&time=${req.body.time_from[0]}`;

            return res.redirect(`/study${queryString}`);
        } catch (error) {
            console.log(error);
        }
    };
}

module.exports = {
    getHome,
    getStudy,
    getTeach,
    postTeach,
};

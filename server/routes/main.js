const express = require('express');
const router = express.Router();

//routes of the website
router.get('', (req, res) => {
    const locals = {
        title: "Home General Tiburcio De Leon National High School School Disaster Risk Resduction and Management",
        description: "home page of gtdlnhs sdrrm"

    }

    res.render('index', { locals, });
})

router.get('/about', (req, res) => {
    const locals = {
        title: "About General Tiburcio De Leon National High School School Disaster Risk Resduction and Management",
        description: "about page of gtdlnhs sdrrm"
    }
    res.render('about', { locals });
})


router.get('/contacts', (req, res) => {
    const locals = {
        title: "Contacts General Tiburcio De Leon National High School School Disaster Risk Resduction and Management",
        description: "contact page of gtdlnhs sdrrm"
    }
    res.render('contacts', { locals });
})

router.get('/events',  (req, res) => {
    const locals = {
        title: "Events General Tiburcio De Leon National High School School Disaster Risk Resduction and Management",
        description: "event page of gtdlnhs sdrrm"
    }

    res.render('events',{ locals ,});
});

router.get('/reminders', async (req, res) => {
    const locals = {
        title: "Reminders General Tiburcio De Leon National High School School Disaster Risk Resduction and Management",
        description: "reminders page of gtdlnhs sdrrm"
    }
    res.render('reminders', { locals,  });
})

router.get('/updates', (req, res) => {
    const locals = {
        title: "Updates General Tiburcio De Leon National High School School Disaster Risk Resduction and Management",
        description: "update page of gtdlnhs sdrrm"
    }
    res.render('updates', { locals,  });
})


router.get('/announcements', (req, res) => {

    const locals = {
        title: "Announcements General Tiburcio De Leon National High School School Disaster Risk Resduction and Management",
        description: "announcements page of gtdlnhs sdrrm"
    }
    res.render('announcements', { locals , });
})




 module.exports = router
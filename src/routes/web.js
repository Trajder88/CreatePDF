const express = require('express');
const pdfService = require('../service/statementService');

let router = express.Router();

let initWebRoutes = (app) => {
    return app.use("/", router);
};

router.get('/statement', async (req, res, next) => {
    try {
        const profitLossData = await pdfService.getProfitLossData();  // Zakładam, że ta funkcja istnieje
        const chartImage = await pdfService.createChart(profitLossData);

        res.writeHead(200, {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline;filename=statement.pdf',
        });

        pdfService.buildPDF(
            chartImage,
            (chunk) => res.write(chunk),
            () => res.end()
        );
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const data = await pdfService.getProfitLossData();
        // console.log("data [web.js]: ", data)
        res.render('index', { chartData: JSON.stringify(data) });
    } catch (error) {
        next(error);
    }
});

router.get('/chart', async (req, res, next) => {
    try {
       
        // console.log("data [web.js]: ", data)
        res.render('chart');
    } catch (error) {
        next(error);
    }
});

module.exports = initWebRoutes;
const QuickChart = require('quickchart-js');
const PDFDocument = require('pdfkit'); // Upewnij się, że używasz pdfkit
const fetch = require('node-fetch'); // Użyj node-fetch do pobrania obrazu z URL

async function getProfitLossData() {
    try {
        // Przykładowe dane: Lista obiektów {x: numer, y: wartość}
        const sampleData = [
            { x: 0, y: 0 },
            { x: 1, y: 150 },
            { x: 2, y: 200 },
            { x: 3, y: 250 },
            { x: 4, y: 300 },
            { x: 5, y: 350 },
            { x: 6, y: 400 },
            { x: 7, y: 600 },
            { x: 8, y: 150 },
            { x: 9, y: 200 },
            { x: 10, y: 0 },
            { x: 11, y: 10 },
            { x: 12, y: 50 },
            { x: 13, y: 70 },
            { x: 14, y: 60 },
            { x: 15, y: 0 },
            { x: 16, y: 900 },
            { x: 17, y: 100 },
            { x: 18, y: 300 },
            { x: 19, y: 50 },
            { x: 20, y: 400 },
            { x: 21, y: 60 },
            { x: 22, y: 730 },
            { x: 23, y: 50 },
            { x: 24, y: 100 },
            { x: 25, y: 505 },
            { x: 26, y: 641 },
            { x: 27, y: 521 },
            { x: 28, y: -300 },
            { x: 29, y: -450 },
            { x: 30, y: -600 },
            { x: 31, y: 300 },
            { x: 32, y: 350 },
            { x: 33, y: 400 },
            { x: 34, y: 100 },
            { x: 35, y: 150 },
            { x: 36, y: 200 },
            { x: 37, y: 250 },
            { x: 38, y: 300 },
            { x: 39, y: 350 },
            { x: 40, y: 400 },
            { x: 41, y: 300 },
            { x: 42, y: 350 },
            { x: 43, y: 400 },
            { x: 44, y: 100 },
            { x: 45, y: 150 },
            { x: 46, y: 200 },
            { x: 47, y: 250 },
            { x: 48, y: 300 },
            { x: 49, y: 350 },
            { x: 50, y: 400 },
            { x: 51, y: 300 },
            { x: 52, y: 350 },
            { x: 53, y: 400 },
            { x: 54, y: 100 },
            { x: 55, y: 150 },
            { x: 56, y: 200 },
            { x: 57, y: 250 },
            { x: 58, y: 300 },
            { x: 59, y: 350 },
            { x: 60, y: 400 },
            { x: 61, y: 300 },
            { x: 62, y: 350 },
            { x: 63, y: 400 },
            { x: 64, y: 100 },
            { x: 65, y: 150 },
            { x: 66, y: 200 },
            { x: 67, y: 250 },
            { x: 68, y: 300 },
            { x: 69, y: 350 },
            { x: 70, y: 400 },
            { x: 71, y: 300 },
            { x: 72, y: 350 },
            { x: 73, y: 400 },
            { x: 74, y: 100 },
            { x: 75, y: 150 },
            { x: 76, y: 200 },
            { x: 77, y: 250 },
            { x: 78, y: 300 },
            { x: 79, y: 350 },
            { x: 80, y: 400 },
            { x: 81, y: 300 },
            { x: 82, y: 350 },
            { x: 83, y: 400 },
            { x: 84, y: 100 },
            { x: 85, y: 150 },
            { x: 86, y: 200 },
            { x: 87, y: 250 },
            { x: 88, y: 300 },
            { x: 89, y: 350 },
            { x: 90, y: 400 },
            { x: 91, y: 300 },
            { x: 92, y: 350 },
            { x: 93, y: 400 },
            { x: 94, y: 100 },
            { x: 95, y: 150 },
            { x: 96, y: 200 },
            { x: 97, y: 250 },
            { x: 98, y: 300 },
            { x: 99, y: 350 },
            { x: 100, y: 400 },
            { x: 101, y: 150 },
            { x: 102, y: 200 },
            { x: 103, y: 250 },
            { x: 104, y: 300 },
            { x: 105, y: 350 },
            { x: 106, y: 400 },
            { x: 107, y: 100 },
            { x: 108, y: 150 },
            { x: 109, y: 200 },
            { x: 110, y: 250 },
            { x: 111, y: 300 },
            { x: 112, y: 350 },
            { x: 113, y: 400 },
            { x: 114, y: 100 },
            { x: 115, y: 150 },
            { x: 116, y: 200 },
            { x: 117, y: 250 },
            { x: 118, y: 300 },
            { x: 119, y: 350 },
            { x: 120, y: 400 },
            { x: 121, y: 300 },
            { x: 122, y: 350 },
            { x: 123, y: 400 },
            { x: 124, y: 100 },
            { x: 125, y: 150 },
            { x: 126, y: 200 },
            { x: 127, y: 250 },
            { x: 128, y: 300 },
            { x: 129, y: 350 },
            { x: 130, y: 400 },
            { x: 131, y: 300 },
            { x: 132, y: 350 },
            { x: 133, y: 400 },
            { x: 134, y: 100 },
            { x: 135, y: 150 },
            { x: 136, y: 200 },
            { x: 137, y: 250 },
            { x: 138, y: 300 },
            { x: 139, y: 350 },
            { x: 140, y: 400 },
            { x: 141, y: 300 },
            { x: 142, y: 350 },
            { x: 143, y: 400 },
            { x: 144, y: 100 },
            { x: 145, y: 150 },
            { x: 146, y: 200 },
            { x: 147, y: 250 },
            { x: 148, y: 300 },
            { x: 149, y: 350 },
            { x: 150, y: 400 },
            { x: 151, y: 300 },
            { x: 152, y: 350 },
            { x: 153, y: 400 },
            { x: 154, y: 100 },
            { x: 155, y: 150 },
            { x: 156, y: 200 },
            { x: 157, y: 250 },
            { x: 158, y: 300 },
            { x: 159, y: 350 },
            { x: 160, y: 400 },
            { x: 161, y: 300 },
            { x: 162, y: 350 },
            { x: 163, y: 400 },
            { x: 164, y: 100 },
            { x: 165, y: 150 },
            { x: 166, y: 200 },
            { x: 167, y: 250 },
            { x: 168, y: 300 },
            { x: 169, y: 350 },
            { x: 170, y: 400 },
            { x: 171, y: 300 },
            { x: 172, y: 350 },
            { x: 173, y: 400 },
            { x: 174, y: 100 },
            { x: 175, y: 150 },
            { x: 176, y: 200 },
            { x: 177, y: 250 },
            { x: 178, y: 300 },
            { x: 179, y: 350 },
            { x: 180, y: 400 },
            { x: 181, y: 300 },
            { x: 182, y: 350 },
            { x: 183, y: 400 },
            { x: 184, y: 100 },
            { x: 185, y: 150 },
            { x: 186, y: 200 },
            { x: 187, y: 250 },
            { x: 188, y: 300 },
            { x: 189, y: 350 },
            { x: 190, y: 400 },
            { x: 191, y: 300 },
            { x: 192, y: 350 },
            { x: 193, y: 400 },
            { x: 194, y: 100 },
            { x: 195, y: 150 },
            { x: 196, y: 200 },
            { x: 197, y: 250 },
            { x: 198, y: 300 },
            { x: 199, y: 350 },
            { x: 200, y: 400 },
            { x: 201, y: 150 },
            { x: 202, y: 200 },
            { x: 203, y: 250 },
            { x: 204, y: 300 },
            { x: 205, y: 350 },
            { x: 206, y: 400 },
            { x: 207, y: 100 },
            { x: 208, y: 150 },
            { x: 209, y: 200 },
            { x: 210, y: 250 },
            { x: 211, y: 300 },
            { x: 212, y: 350 },
            { x: 213, y: 400 },
            { x: 214, y: 100 },
            { x: 215, y: 150 },
            { x: 216, y: 200 },
            { x: 217, y: 250 },
            { x: 218, y: 300 },
            { x: 219, y: 350 },
            { x: 220, y: 400 },
            { x: 221, y: 300 },
            { x: 222, y: 350 },
            { x: 223, y: 400 },
            { x: 224, y: 100 },
            { x: 225, y: 150 },
            { x: 226, y: 200 },
            { x: 227, y: 250 },
            { x: 228, y: 300 },
            { x: 229, y: 350 },
            { x: 230, y: 400 },
            { x: 231, y: 300 },
            { x: 232, y: 350 },
            { x: 233, y: 400 },
            { x: 234, y: 100 },
            { x: 235, y: 150 },
            { x: 236, y: 200 },
            { x: 237, y: 250 },
            { x: 238, y: 300 },
            { x: 239, y: 350 },
            { x: 240, y: 400 },
            { x: 241, y: 300 },
            { x: 242, y: 350 },
            { x: 243, y: 400 },
            { x: 244, y: 100 },
            { x: 245, y: 150 },
            { x: 246, y: 200 },
            { x: 247, y: 250 },
            { x: 248, y: 300 },
            { x: 249, y: 350 },
            // { x: 250, y: 400 },
            // { x: 251, y: 300 },
            // { x: 252, y: 350 },
            // { x: 253, y: 400 },
            // { x: 254, y: 100 },
            // { x: 255, y: 150 },
            // { x: 256, y: 200 },
            // { x: 257, y: 250 },
            // { x: 258, y: 300 },
            // { x: 259, y: 350 },
            // { x: 260, y: 400 },
            // { x: 261, y: 300 },
            // { x: 262, y: 350 },
            // { x: 263, y: 400 },
            // { x: 264, y: 100 },
            // { x: 265, y: 150 },
            // { x: 266, y: 200 },
            // { x: 267, y: 250 },
            // { x: 268, y: 300 },
            // { x: 269, y: 350 },
            // { x: 270, y: 400 },
            // { x: 271, y: 300 },
            // { x: 272, y: 350 },
            // { x: 273, y: 400 },
            // { x: 274, y: 100 },
            // { x: 275, y: 150 },
            // { x: 276, y: 200 },
            // { x: 277, y: 250 },
            // { x: 278, y: 300 },
            // { x: 279, y: 350 },
            // { x: 280, y: 400 },
            // { x: 281, y: 300 },
            // { x: 282, y: 350 },
            // { x: 283, y: 400 },
            // { x: 284, y: 100 },
            // { x: 285, y: 150 },
            // { x: 286, y: 200 },
            // { x: 287, y: 250 },
            // { x: 288, y: 300 },
            // { x: 289, y: 350 },
            // { x: 290, y: 400 },
            // { x: 291, y: 300 },
            // { x: 292, y: 350 },
            // { x: 293, y: 400 },
            // { x: 294, y: 100 },
            // { x: 295, y: 150 },
            // { x: 296, y: 200 },
            // { x: 297, y: 250 },
            // { x: 298, y: 300 },
            // { x: 299, y: 350 },
            // { x: 300, y: 400 },
            // { x: 301, y: 300 },
            // { x: 302, y: 350 },
            // { x: 303, y: 400 },
            // { x: 304, y: 100 },
            // { x: 305, y: 150 },
            // { x: 306, y: 200 },
            // { x: 307, y: 250 },
            // { x: 308, y: 300 },
            // { x: 309, y: 350 },
            // { x: 310, y: 400 },
            // { x: 311, y: 300 },
            // { x: 312, y: 350 },
            // { x: 313, y: 400 },
            // { x: 314, y: 100 },
            // { x: 315, y: 150 },
            // { x: 316, y: 200 },
            // { x: 317, y: 250 },
            // { x: 318, y: 300 },
            // { x: 319, y: 350 },
            // { x: 320, y: 400 },
            // { x: 321, y: 300 },
            // { x: 322, y: 350 },
            // { x: 323, y: 400 },
            // { x: 324, y: 100 },
            // { x: 325, y: 150 },
            // { x: 326, y: 200 },
            // { x: 327, y: 250 },
            // { x: 328, y: 300 },
            // { x: 329, y: 350 },
            // { x: 330, y: 400 },
            // { x: 341, y: 300 },
            // { x: 342, y: 350 },
            // { x: 343, y: 400 },
            // { x: 344, y: 100 },
            // { x: 345, y: 150 },
            // { x: 346, y: 200 },
            // { x: 347, y: 250 },
            // { x: 348, y: 300 },
            // { x: 349, y: 350 },
            // { x: 350, y: 400 },
            // { x: 351, y: 300 },
            // { x: 352, y: 350 },
            // { x: 353, y: 400 },
            // { x: 354, y: 100 },
            // { x: 355, y: 150 },
            // { x: 356, y: 200 },
            // { x: 357, y: 250 },
            // { x: 358, y: 300 },
            // { x: 359, y: 350 },
            // { x: 360, y: 400 },
        ];

        return sampleData;
    } catch (error) {
        console.error("Error in getProfitLossData:", error);
        throw error;
    }
}


async function createChart(profitLossData) {
    const chart = new QuickChart();

    chart.setConfig({
        type: 'line',
        data: {
            labels: profitLossData.map((data) => data.x),
            datasets: [{
                label: 'Profit Loss',
                data: profitLossData.map((data) => data.y),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    chart.setWidth(1200);
    chart.setHeight(500);
    chart.setBackgroundColor('white');

    const imageUrl = await chart.getUrl();
    return imageUrl;
}

async function buildPDF(chartImage, dataCallback, endCallback) {
    const doc = new PDFDocument();
    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    // Pobieramy obraz
    const response = await fetch(chartImage);
    const imageBuffer = await response.arrayBuffer();

    // Dodaj obraz do PDF
    doc.image(Buffer.from(imageBuffer), 50, 160, { fit: [500, 300], align: 'center' });

    // Szerokości kolumn (dostosuj według potrzeb)
    const leftColumnX = 50; // Pozycja X dla lewej kolumny
    const right1ColumnX150 = 150; // Pozycja X dla prawej kolumny
    const right2ColumnX300 = 300; // Pozycja X dla prawej kolumny
    const right3ColumnX450 = 450; // Pozycja X dla prawej kolumny
    const startY = 50; // Pozycja Y na górze strony (start dla obu kolumn)
    const rowHeight = 20; // Wysokość wiersza

    // Tytuł
    doc.fontSize(20).text('Account Statement', leftColumnX, startY, { align: 'left' });

    // Data w lewej kolumnie
    doc.fontSize(12).text('12 Dec 2023 0:00' + ' — ' + '24 Sep 2024 16:51', leftColumnX, startY + 20, { align: 'left' });
    // Dane w prawej kolumnie
    doc.fontSize(8).text(`Created: 24 Sep 2024 16:51:00`, right2ColumnX300, startY + 0, { width: 150 });
    doc.text(`Currency: BTC`, right2ColumnX300);

    doc.text(`User: 123`, right3ColumnX450, startY + 0);
    doc.text(`Account Code: BTC123`, right3ColumnX450);

    // doc.moveDown();

    // Column 1 Dane w lewej kolumnie
    doc.text(`Balance:`, leftColumnX, startY + 60);
    doc.text(`0.00004589`, right1ColumnX150 - 30, startY + 60);
    

    doc.text(`Equity:`, leftColumnX, startY + 70);
    doc.text(`0.00012453`, right1ColumnX150 - 30, startY + 70);

    doc.text(`Gross P/L:`, leftColumnX, startY + 80);
    doc.text(`0.00017042`, right1ColumnX150 - 30, startY + 80);


    doc.text(`Realized total P/L:`, leftColumnX, startY + 90);
    doc.text(`0.00024523`, right1ColumnX150 -30, startY + 90);


    // Column 2
    doc.text(`Used Margin:`, right1ColumnX150 + 20, startY + 60);
    doc.text(`0.00001000`, right1ColumnX150 + 95, startY + 60);

    doc.fontSize(8).text(`Usable Margin:`, right1ColumnX150 + 20, startY + 70);
    doc.text(`0.00011453`, right1ColumnX150 + 95, startY + 70);


    doc.text(`Usable Margin, %:`, right1ColumnX150 + 20, startY + 80);
    doc.text(`99.98`, right1ColumnX150 + 95, startY + 80);
    
    doc.text(`Equity MC Level, %:`, right1ColumnX150 + 20, startY + 90);
    doc.text(`102.2`, right1ColumnX150 + 95, startY + 90);
    
    

    // Column 3
    doc.text(`Deposit:`, right2ColumnX300, startY + 60);
    doc.text(`0.00069542`, right2ColumnX300 + 80, startY + 60);

    doc.fontSize(8).text(`Withdrawal:`, right2ColumnX300, startY + 70);
    doc.text(`0.00000000`, right2ColumnX300 + 80, startY + 70);

    doc.text(`Commissions and\nFinancing:`, right2ColumnX300, startY + 80);
    doc.text(`-0.00007531`, right2ColumnX300 + 78, startY + 80);

    //Column 4
    doc.text(`Adjustment:`, right3ColumnX450, startY + 60);
    doc.text(`0.00000000`, right3ColumnX450 + 47, startY + 60);

    doc.text(`Bonus:`, right3ColumnX450, startY + 70);
    doc.text(`0.00000000`, right3ColumnX450 + 47, startY + 70);

    doc.text(`Net:`, right3ColumnX450, startY + 80);
    doc.text(`-0.00345678`, right3ColumnX450 + 45, startY + 80);

    // doc.moveDown();

    // Możesz dodać więcej wierszy, jeśli masz więcej danych
    // Przykład dodatkowego wiersza
    const dataY180 = startY + 330;
    doc.text('12345', leftColumnX, dataY180);
    doc.text('0.5', right1ColumnX150, dataY180);
    doc.text('0.2', right2ColumnX300, dataY180);
    doc.text('100', right3ColumnX450, dataY180);

    // Pozycje kolumn
    const columnWidths = [100, 100, 100, 100];  // Szerokości kolumn
    const tableStartX = 50;  // Początek X dla tabeli
    const tableStartY = 410;  // Początek Y dla tabeli
    const tableRowHeight = 10;  // Wysokość wiersza

    // Rysowanie nagłówków kolumn
    doc.fontSize(10).text('Date', tableStartX, tableStartY);
    doc.text('Description', tableStartX + columnWidths[0], tableStartY);
    doc.text('Amount', tableStartX + columnWidths[0] + columnWidths[1], tableStartY);
    doc.text('Balance', tableStartX + columnWidths[0] + columnWidths[1] + columnWidths[2], tableStartY);

    // Rysowanie linii nagłówków
    doc.moveTo(tableStartX, tableStartY + tableRowHeight)
        .lineTo(tableStartX + columnWidths.reduce((a, b) => a + b, 0), tableStartY + tableRowHeight)
        .stroke();

    // Przykładowe dane
    const tableData = [
        { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
        // { date: '24/09/2024', description: 'Deposit', amount: '0.001234', balance: '0.001234' },
        // { date: '25/09/2024', description: 'Withdrawal', amount: '-0.000500', balance: '0.000734' },
        // { date: '26/09/2024', description: 'Interest', amount: '0.000005', balance: '0.000739' },
    ];
    

    // Iterowanie przez dane i wstawianie do tabeli
    tableData.forEach((row, index) => {
        const y = tableStartY + tableRowHeight * (index + 1);  // Y pozycja dla każdego wiersza
        
        // Tekst w każdej komórce
        doc.text(row.date, tableStartX, y);
        doc.text(row.description, tableStartX + columnWidths[0], y);
        doc.text(row.amount, tableStartX + columnWidths[0] + columnWidths[1], y);
        doc.text(row.balance, tableStartX + columnWidths[0] + columnWidths[1] + columnWidths[2], y);
    });

    // Rysowanie linii dla tabeli (pionowe linie)
    for (let i = 0; i <= tableData.length; i++) {
        const y = tableStartY + tableRowHeight * (i + 1);
        doc.moveTo(tableStartX, y).lineTo(tableStartX + columnWidths.reduce((a, b) => a + b, 0), y).stroke();
    }

    // Zakończ dokument PDF
    doc.end();
}

module.exports = {
    getProfitLossData,
    createChart,
    buildPDF,
};

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/proxy', async (req, res) => {
    try {
        const response = await axios.post('https://script.google.com/macros/s/AKfycbxCvAo8MK66PnDXlOn9ERLDtJZr6YWavq93Vu3mw75yiP7Ihm7tNbzL8esmbsY5FF8W3Q/exec', req.body, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error forwarding request: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});

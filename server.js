const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/say', async(req, res) => {
    try{
        const keyword = req.query.keyword;
        const response = await axios.get('https://oxqwvurkeicryvxxqeoagjplnq0sgult.lambda-url.us-east-2.on.aws/',{
            params: {
                keyword: keyword
            }
        });
        res.send(response.data);
    } catch (error) {
        // Handle error here
        console.error(error);
        res.status(500).send('Lambda function Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

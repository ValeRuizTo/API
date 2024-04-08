const express = require('express');
const app = express();
const PORT = 8085;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`It is alive on http://localhost:${PORT}`)
);

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'one',
        size: 'large'
    })
});


app.get('/:id', (req, res) => { 

    const UserID = req.params.id;
 
    res.send(`Listing user with ID ${userID}`);
    
});

module.exports = app;

const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();

event.on("count API", () => {
    console.log("count API called");
});


app.get('/', (req, res) => {
    res.send('api called');
    console.log('api called');
    event.emit("count API");
}
);

app.get('/search', (req, res) => {
    res.send('search called');
    console.log('search called');
}
);


app.listen(5000);
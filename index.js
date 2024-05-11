import express from 'express';
import router from './routes/router.js';

const app = express(); //middleware
const PORT = process.env.PORT || 3000;

app.use('/assets', express.static('assets'));

//middleware
app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use('/', router);



app.listen(PORT, console.log(`🔥Server on 🔥 http://localhost:${PORT}`));


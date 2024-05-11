import express from 'express';
import path from 'path';
import Jimp from 'jimp';
import { v4 as uuidv4 } from 'uuid';


const __dirname = path.resolve();
const router = express.Router();

//otra forma de llamar a styles.Notar la discrepancia con la forma usual en el index.html que sería
//<link rel="stylesheet" href="/css/style.css"> 
router.get('/styles', (req, res) => {
    res.sendFile(__dirname + '/assets/css/style.css');
});

router.get('/inicio', (req, res) => {
    res.send('hola mundo, server on 🔥');
});

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

//ruta para procesar y guardar la imagen
router.post('/editar', async (req, res) => {
    try {
        const { url } = req.body;
        const id = uuidv4().slice(-6);
        const nameImg = `${id}.jpeg`;
        const img = await Jimp.read(url);

        await img
            .resize(350, Jimp.AUTO)
            .grayscale()
            .writeAsync(path.join(__dirname, `/assets/uploads/${nameImg}`));

        //así redirecciono a la página index.html
        res.redirect(`/?nameImg=${nameImg}`);

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al procesar la imagen.');
    }
});

export default router;
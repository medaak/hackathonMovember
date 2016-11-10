import express from 'express';
import Newsletter from '../models/newsletter.js';

let router = express.Router();

module.exports = (app) => {

    var newsletter = new Newsletter();

    router.get('/', newsletter.findAll);

    router.get('/:id', newsletter.findById);

    router.post('/', newsletter.create);

    router.put('/:id', newsletter.update);

    router.delete('/:id', newsletter.delete);

    app.use('/newsletters', router);

}

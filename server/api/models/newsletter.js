import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema({
    email: String,
    nom: String
});

let model = mongoose.model('Newsletter', newsletterSchema);

export default class Newsletter {

    findAll(req, res) {
        model.find({}, (err, newsletters) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(newsletters);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, newsletter) => {
            if (err || !newsletter) {
                res.sendStatus(403);
            } else {
                res.json(newsletter);
            }
        });
    }

    create(req, res) {
        model.create({
                email: req.body.email,
                nom: req.body.nom
            },
            (err, newsletter) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(newsletter);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            email: req.body.email,
            nom: req.body.nom
        }, (err, newsletter) => {
            if (err || !newsletter) {
                res.status(500).send(err.message);
            } else {
                res.json(newsletter);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}

import mongoose from 'mongoose';

const membreSchema = new mongoose.Schema({
    pseudoMembre: String,
    nomMembre: String,
    prenomMembre: String,
    photoMoustacheMembre: String,
    noteMoustacheMembre: String,
    dateNaissanceMembre: Date,
    villeMembre: String,
    adresseMailMembre: String,
    motDePasseMembre: String,
    moustacheJour: Boolean

});

let model = mongoose.model('Membre', membreSchema);

export default class Membre {

    findAll(req, res) {
        model.find({}, (err, membres) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(membres);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, membre) => {
            if (err || !membre) {
                res.sendStatus(403);
            } else {
                res.json(membre);
            }
        });
    }

    create(req, res) {
        model.create({
                pseudoMembre: req.body.pseudoMembre,
                nomMembre: req.body.nomMembre,
                prenomMembre: req.body.prenomMembre,
                photoMoustacheMembre: req.body.photoMoustacheMembre,
                noteMoustacheMembre: req.body.noteMoustacheMembre,
                dateNaissanceMembre: req.body.dateNaissanceMembre,
                villeMembre: req.body.villeMembre,
                adresseMailMembre: req.body.adresseMailMembre,
                motDePasseMembre: req.body.motDePasseMembre,
                moustacheJour: req.body.moustacheJour
            },
            (err, membre) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(membre);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
          pseudoMembre: req.body.pseudoMembre,
          nomMembre: req.body.nomMembre,
          prenomMembre: req.body.prenomMembre,
          photoMoustacheMembre: req.body.photoMoustacheMembre,
          noteMoustacheMembre: req.body.noteMoustacheMembre,
          dateNaissanceMembre: req.body.dateNaissanceMembre,
          villeMembre: req.body.villeMembre,
          adresseMailMembre: req.body.adresseMailMembre,
          motDePasseMembre: req.body.motDePasseMembre,
          moustacheJour: req.body.moustacheJour
        }, (err, membre) => {
            if (err || !membre) {
                res.status(500).send(err.message);
            } else {
                res.json(membre);
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

class membreService {

    constructor($http) {
        this.$http = $http;
    }

    create(pseudo, nom, prenom, photo, note, date, ville, adresse, pass, moustache) {
        return this.$http.post('/api/membres', {
          pseudoMembre: pseudo,
          nomMembre: nom,
          prenomMembre: prenom,
          photoMoustacheMembre: photo,
          noteMoustacheMembre: note,
          dateNaissanceMembre: date,
          villeMembre: ville,
          adresseMailMembre: adresse,
          motDePasseMembre: pass,
          moustacheJour: moustache
        })
    }

    getAll() {
        return this.$http.get('/api/membres')
    }

    getOne(id) {
        return this.$http.get('/api/membres/' + id)
    }

    update(id, pseudo, nom, prenom, photo, note, date, ville, adresse, pass, moustache) {
        return this.$http.put('/api/membres/' + id, {
          pseudoMembre: pseudo,
          nomMembre: nom,
          prenomMembre: prenom,
          photoMoustacheMembre: photo,
          noteMoustacheMembre: note,
          dateNaissanceMembre: date,
          villeMembre: ville,
          adresseMailMembre: adresse,
          motDePasseMembre: pass,
          moustacheJour: moustache
        })
    }

    delete(id) {
        return this.$http.delete('/api/membres/' + id)
    }

}

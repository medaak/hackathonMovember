class newsletterService {

    constructor($http) {
        this.$http = $http;
    }

    create(email, nom) {
        return this.$http.post('/api/newsletters', {
            email: email,
            nom: nom
        })
    }

    getAll() {
        return this.$http.get('/api/newsletters')
    }

    getOne(id) {
        return this.$http.get('/api/newsletters/' + id)
    }

    update(id, email, nom) {
        return this.$http.put('/api/newsletters/' + id, {
          email: email,
          nom: nom
        })
    }

    delete(id) {
        return this.$http.delete('/api/newsletters/' + id)
    }

}

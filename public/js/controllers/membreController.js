class membreController {
    constructor(membreService, $location) {
      this.membreService = membreService;
      this.load();
      this.$location = $location;
    }

    load() {
        this.membreService.getAll().then((res) => {
            this.membres = res.data;
        })
    }

    create(membre) {
        this.membreService.create(membre.pseudoMembre, membre.nomMembre, membre.prenomMembre, membre.photoMoustacheMembre, membre.likeMoustacheMembre,  membre.unlikeMoustacheMembre, membre.dateNaissanceMembre, membre.villeMembre, membre.adresseMailMembre, membre.moustacheJour).then(() => {
            this.membre = '';
            this.load()
            this.$location.path('/')
        })
    }

    update(membre) {
        this.membreService.update(membre._id, membre.pseudoMembre, membre.nomMembre, membre.prenomMembre, membre.photoMoustacheMembre, membre.likeMoustacheMembre,  membre.unlikeMoustacheMembre, membre.dateNaissanceMembre, membre.villeMembre, membre.adresseMailMembre, membre.moustacheJour).then(() => {
            this.load()
        })
    }

    delete(membre) {
        this.membreService.delete(membre._id).then(() => {
            this.load()
        })
    }


  }

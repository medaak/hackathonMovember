class creerMembreController {
    constructor(membreService) {
      this.membreService = membreService;
      this.load();
    }

    load() {
        this.membreService.getAll().then((res) => {
            this.membres = res.data;
        })
    }

    create(membre) {
      console.log(membre.pseudoMembre)
        this.membreService.create(membre.pseudoMembre, membre.nomMembre, membre.prenomMembre, membre.photoMoustacheMembre, membre.noteMoustacheMembre, membre.dateNaissanceMembre, membre.villeMembre, membre.adresseMailMembre, membre.moustacheJour).then(() => {
            this.membre = '';
            this.load()
            this.$location.path('/profilMembre.html')
        })
    }

    update(membre) {
        this.membreService.update(membre._id, membre.pseudoMembre, membre.nomMembre, membre.prenomMembre, membre.photoMoustacheMembre, membre.noteMoustacheMembre, membre.dateNaissanceMembre, membre.villeMembre, membre.adresseMailMembre, membre.moustacheJour).then(() => {
            this.load()
        })
    }

    delete(membre) {
        this.membreService.delete(membre._id).then(() => {
            this.load()
        })
    }


  }

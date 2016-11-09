class membreEditController {
    constructor(membreService) {
      this.membreService = membreService;
      this.load();

    };

    load() {
      this.memberID="58237d189713dc551eaa986a"
      console.log(this.memberID);

        this.membreService.getOne(this.memberID).then((res) => {

            this.membre = res.data;
        })
    }

    update(membre) {
        this.membreService.update(membre._id, membre.pseudoMembre, membre.nomMembre, membre.prenomMembre, membre.photoMoustacheMembre, membre.noteMoustacheMembre, membre.dateNaissanceMembre, membre.villeMembre, membre.adresseMailMembre, membre.moustacheJour).then(() => {
            this.load()
        })
    }


  }

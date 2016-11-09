class membreEditController {
    constructor(membreService) {
        this.membreService = membreService;
        this.load();

    };

    load() {
        this.memberID = "58237d189713dc551eaa986a"
        this.membreService.getOne(this.memberID).then((res) => {
        this.membre = res.data;
        })
    }

    update(membre) {

        this.membreService.update(this.membre._id, this.membre.pseudoMembre, this.membre.nomMembre, this.membre.prenomMembre, this.membre.photoMoustacheMembre, this.membre.noteMoustacheMembre, this.membre.dateNaissanceMembre, this.membre.villeMembre, this.membre.adresseMailMembre, this.membre.moustacheJour).then(() => {
            this.load()
        })
    }


}

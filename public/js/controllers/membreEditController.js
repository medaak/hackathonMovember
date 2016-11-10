class membreEditController {
    constructor(membreService) {
        this.membreService = membreService;
        this.load();

        document.getElementById("take-picture").addEventListener("change", readFile, false);

        function readFile() {
          if (this.files && this.files[0]) {
            var FR= new FileReader();
            FR.onload = function(e) {
              document.getElementById("show-picture").src = e.target.result;
              // document.getElementById("b64").innerHTML = e.target.result;
            };
            FR.readAsDataURL( this.files[0] );
          }
        }

    }

    load() {
        this.memberID = "5823a455b46b321d74dfb7e5"
        this.membreService.getOne(this.memberID).then((res) => {
        this.membre = res.data;
        })
    }

    update(membre) {
        var img = document.getElementById("show-picture").src;
        console.log(img);
        this.membre.photoMoustacheMembre = img;
        this.membreService.update(this.membre._id, this.membre.pseudoMembre, this.membre.nomMembre, this.membre.prenomMembre, this.membre.photoMoustacheMembre, this.membre.likeMoustacheMembre,  this.membre.unlikeMoustacheMembre, this.membre.villeMembre, this.membre.adresseMailMembre, this.membre.moustacheJour).then(() => {
            this.load()
        })
    }


}

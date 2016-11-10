class membreEditController {
    constructor(membreService) {
        this.membreService = membreService;
        this.load();

        document.getElementById("take-picture").addEventListener("change", readFile, false);

        function readFile() {
            if (this.files && this.files[0]) {
                var FR = new FileReader();
                FR.onload = function(e) {
                    document.getElementById("show-picture").src = e.target.result;
                };
                FR.readAsDataURL(this.files[0]);
            }


        }
        this.position = {};

        var coords;
        var c = (pos) => {
            this.position.lat = pos.coords.latitude;
            this.position.long = pos.coords.longitude;
            document.getElementById('google_map').setAttribute('src', 'https://map.google.com/?q=' + this.position.lat + ',' + this.position.long + '&z=60&output=embed');
        }

        document.getElementById('take-picture').onclick = function() {
            navigator.geolocation.getCurrentPosition(c);
        }

    }



    load() {
        this.memberID = "582481879215a80759e36620"
        this.membreService.getOne(this.memberID).then((res) => {
            this.membre = res.data;
        })
    }

    update(membre) {
        var img = document.getElementById("show-picture").src;
        console.log(this.position.long)
        console.log(this.position.lat)
        this.membre.longitudeMembre=this.position.long
        this.membre.latitudeMembre=this.position.lat
        this.membre.photoMoustacheMembre = img;
        this.membreService.update(this.membre._id, this.membre.pseudoMembre, this.membre.nomMembre, this.membre.prenomMembre, this.membre.photoMoustacheMembre, this.membre.likeMoustacheMembre, this.membre.unlikeMoustacheMembre, this.membre.villeMembre, this.membre.adresseMailMembre, this.membre.moustacheJour).then(() => {
            this.load()
        })
    }


}

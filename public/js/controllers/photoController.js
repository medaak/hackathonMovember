class photoController {

    constructor() {
      document.getElementById("take-picture").addEventListener("change", readFile, false);

      function readFile() {
        if (this.files && this.files[0]) {
          var FR= new FileReader();
          FR.onload = function(e) {
            document.getElementById("show-picture").src = e.target.result;
            document.getElementById("b64").innerHTML = e.target.result;
            console.log(e.target.result);
            console.log(atob(e.target.result));
          };
          FR.readAsDataURL( this.files[0] );
        }
      }
    }

}

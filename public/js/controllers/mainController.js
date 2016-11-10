class mainController {

    constructor(membreService) {
        this.membreService = membreService;
        this.load();

        $('.carousel').carousel({
            interval: 500
        });

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.8";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

          function up () {
            console.log("pass");
          fieldName = $(this).attr('data-field');
          cnt = $(fieldName).text();
          console.log(cnt);
          btn = $(this);
          btn.button('loading');
          setTimeout(function () {
              cnt++;
              btn.button('reset');
              btn.text('  ' + cnt);
            }, 1000);
        }

        $("#dislike").click(function () {
            var fieldName = $(this).attr('data-field');
            var cnt= $(fieldName).text();
            var btn = $(this);
            console.log(cnt);
            console.log(btn);
            btn.button('loading');
            setTimeout(function () {
                if (cnt > 0) {
                    cnt--;
                }
                btn.button('reset');
                btn.text('  ' + cnt);
            }, 1000);
         });

    }



    load() {
        this.membreService.getAll().then((res) => {
            this.membres = res.data;
        });
    }

    // create() {
    //     this.todoService.create(this.todo).then(() => {
    //         this.todo = '';
    //         this.load();
    //     })
    // }
    //
    // updatePhoto() {
    //     this.todoService.update(todo._id, todo.description).then(() => {
    //         this.load()
    //     })
    // }
    // update(todo) {
    //     this.todoService.update(todo._id, todo.description).then(() => {
    //         this.load()
    //     })
    // }
    //
    // delete(todo) {
    //     this.todoService.delete(todo._id).then(() => {
    //         this.load()
    //     })
    // }

}

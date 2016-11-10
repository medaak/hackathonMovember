class mainController {

    constructor(membreService) {
        this.membreService = membreService;
        this.load();

        $('.carousel').carousel({
            interval: 5000
        });

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.8";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

          this.up = (up) => {
            up = "like" + up;
            var cnt = Number($("#"+up).text());
            console.log(cnt);
            cnt++;
            $("#"+up).text('   ' + cnt);
            this.updateLike(cnt);
        };

          this.down = (down) => {
            down = "dislike" + down;
            console.log(down);
            var cnt = Number($("#"+down).text());
            console.log(cnt);
            cnt++;
            $("#"+down).text('   ' + cnt);
            this.updateDislike(cnt);
         };

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

    updateLike(cnt) {

        this.memberService.update(member._id, member.likeMoustacheMembre).then(() => {
            this.load();
        });
      }

    updatedisLike(cnt) {

        this.memberService.update(member._id, member.unlikeMoustacheMembre).then(() => {
            this.load();
        });
      }
    //
    // delete(todo) {
    //     this.todoService.delete(todo._id).then(() => {
    //         this.load()
    //     })
    // }

}

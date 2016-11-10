class mainController {

    constructor(todoService) {
        this.todoService = todoService;
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

    }


    load() {
        this.todoService.getAll().then((res) => {
            this.todos = res.data;
        });
    }

    create() {
        this.todoService.create(this.todo).then(() => {
            this.todo = '';
            this.load();
        });
    }

    updatePhoto() {
        this.todoService.update(todo._id, todo.description).then(() => {
            this.load();
        });
    }
    update(todo) {
        this.todoService.update(todo._id, todo.description).then(() => {
            this.load();
        });
    }

    delete(todo) {
        this.todoService.delete(todo._id).then(() => {
            this.load();
        });
    }

}

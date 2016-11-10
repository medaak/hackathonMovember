class mainController {

    constructor(todoService) {
        this.todoService = todoService;
        this.load();

        $('.carousel').carousel({
            interval: 5000 //changes the speed
        });

    }


    load() {
        this.todoService.getAll().then((res) => {
            this.todos = res.data;
        })
    }

    create() {
        this.todoService.create(this.todo).then(() => {
            this.todo = '';
            this.load();
        })
    }

    updatePhoto() {
        this.todoService.update(todo._id, todo.description).then(() => {
            this.load()
        })
    }
    update(todo) {
        this.todoService.update(todo._id, todo.description).then(() => {
            this.load()
        })
    }

    delete(todo) {
        this.todoService.delete(todo._id).then(() => {
            this.load()
        })
    }

}

var wrap = new Vue({
    el: '.wrap',
    data: {
        todos: [],
        newTodo: ''
    },
    methods: {
        addTodo: function (todo) {
            this.todos.push({ content: todo, completed: false, show: true })
        },
        removeTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        },
        FinishAllTodo: function () {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = true;
            }
        },
        ClearCompleted: function(todo){
            this.todos.splice(0,this.todos.length);
        },
        ShowCompleted: function () {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    this.todos[i].show = true;
                } else {
                    this.todos[i].show = false;
                }
            }
        },
        ShowInComplete: function () {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === false) {
                    this.todos[i].show = true;
                }else{
                    this.todos[i].show = false ; 
                }
            }
        },
        ShowAll:  function () {
            for (let i = 0; i < this.todos.length; i++) {
                this.todos[i].show = true;
            }
        }
    }
})

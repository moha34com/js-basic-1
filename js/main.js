//front end
const view = {
    title    : document.querySelector('#title'),
    add      : document.querySelector('#add'), 
    list     : document.querySelector('#list'),
    render   : function (){
                    view.list.innerHTML = '';
                    for(i = 0 ; i < Store.todos.length; i++ ){
                        var neo = `
                    <div class="mt-2 row">
                    <div class="col-10">
                        <div class="card card-header">
                            <div class="row">
                                <div class="col-6">
                                    ${Store.todos[i].value}
                                </div>
                                <div class="col-6 text-end">
                                        <button id="${Store.todos[i].id}" class="delete-btn btn btn-danger">delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                    view.list.innerHTML += neo;
                    }
                    view.title.value = '';
                },
    validate : function (){
                    var is_valied = true;
                    if(view.title.value == ''){
                        view.title.style.border = '1px solid red';
                        is_valied = false
                    }else{
                        view.title.style.border = '1px solid green';
                    }
                    return is_valied
                },
    inormal  : function (){
                    for(i = 0 ; i < Store.todos.length ; i++ ){
                        var neo = `
                        <div class="mt-2 row">
                        <div class="col-10">
                            <div class="card card-header">
                                <div class="row">
                                    <div class="col-6">
                                        ${Store.todos[i].value}
                                    </div>
                                    <div class="col-6 text-end">
                                            <button class="delete-btn btn btn-danger">delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                        view.list.innerHTML += neo;
                    }
                },  
    normal   : function (){
                        for(i = Store.todos.length -1; i >= 0; i--){
                            var neo = `
                            <div class="mt-2 row">
                            <div class="col-10">
                                <div class="card card-header">
                                    <div class="row">
                                        <div class="col-6">
                                            ${Store.todos[i].value}
                                        </div>
                                        <div class="col-6 text-end">
                                                <button class="delete-btn btn btn-danger">delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `
                            view.list.innerHTML += neo;
                        }
                    }, 
    add_new_todo : function add_new_todo(value){
                            Store.todos.push(
                                {
                                    id      : Math.round(Math.random() * 1000 ),
                                    value   : value,
                                }
                            )
                        
                        },                                    



};


//Store
const Store = {
    todos : [
        {
            id     : 1,
            value  : "HTML",
        },
        {
            id     : 2,
            value  : "CSS",
        },
        {
            id     : 3,
            value  : "JS",
        },
    ]
};
function filter(target_todo_id,new_store){
    for(i = 0; i < Store.todos.length; i++){
        if(Store.todos[i].id != target_todo_id){
            new_store.push(Store.todos[i])
        }
    }
    Store.todos = new_store
}

//controller
const controller = {
    event_start : function(){
        //add event onclick
        view.add.onclick = ()=>{
            if(view.validate()){
                view.add_new_todo(view.title.value);
                view.render();
            }
        }
        //this is the real filter and operate on the Store
    view.list.onclick=(e)=>{
        if(e.target.classList.contains('delete-btn')){
            var target_id = e.target.id
            filter(target_id,[]);
            view.render()
        }
    }
    }
}
controller.event_start()









































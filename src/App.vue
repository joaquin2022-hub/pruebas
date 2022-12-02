<template>
  <!-- <car power="power"/> -->
  <div id="appcontainer">
    <h1>Lista de Tareas</h1>
    <form @submit.prevent="addTodos()">
     <input v-model="newTodo"/>
     <button class="waves-effect waves-light btn">añadir</button>
    </form>
    <div id="todoList">
      <div :class="{completed: todo.complete}" v-for="(todo, index) in todos" :key="index" @click="completedTodo(todo)">
      <div class="row">
        <div class="col s12 n6">
          <div class="card teal teal lightean-1">
            <div class="card-content while-text">
              <span class="card-title">{{todo.text}}</span> 
            </div>
          </div>
        </div>
      </div>
        
       </div>  
    </div>
    <p v-if = "todos.length === 0">lista vacía, por favor ingrese alguna tarea</p>
    <button class="btn waves-effect waves-light red lighten-2" v-if="todos.length !== 0" @click="removeTodos"> remover todo</button>
  </div>
</template>

<script>
import { ref } from 'vue';
// import { car } from "./props.vue"

export default {
  name: 'App',
  // components:{
  //   car,
  // },
  setup(){
    // let power = 30;
    const newTodo = ref("");
    const initialLoadData = [
      {
        complete: false,
        text: "crear funcionalidad de lista de tareas pendientes"
      },
    ];
    let stroedTodos;
    localStorage.getItem("todos")
    ? stroedTodos = JSON.parse(localStorage.getItem("todos"))
    : stroedTodos = initialLoadData;
    const todos = ref(stroedTodos);
    function addTodos() {
      if(newTodo.value !==""){
        todos.value.push({
          complete: false,
          text: newTodo.value,
        });
        newTodo.value = "";
        updatestore();
      }
    }
    function removeTodos(){
      todos.value.splice(0, todos.value.length);
      updatestore()
    }
    function completedTodo(todo){
      todo.complete = !todo.complete;
      updatestore()
    }
    function updatestore(){
      localStorage.setItem("todos", JSON.stringify(todos.value));
    }
    return{
      removeTodos,
      completedTodo,
      addTodos,
      todos,
      newTodo,
      // power,
    }
  },

};
</script>

<style>
#todolist{
  margin:2%;
  padding:0%;
}

.card-contant:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 2);
}

#todolist div.completed{
  opacity: 0,5;
}

#appContainer{
  padding: 2%;
}
</style>

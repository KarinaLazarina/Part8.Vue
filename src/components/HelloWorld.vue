<template>
  <div class="todo">
    <p>TO DO:</p>
    <ul>
      <li v-for="(task, index) in todoList" :key="index" v-on:click="checkItem()" >
        {{task}}
        <button v-on:click="removeItem(index)">Remove item</button>
      </li>
    </ul>

    <input type="text" v-model="newTask">
    <button v-on:click="todoList.push(newTask)">Add task</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      todoList: ['do task1','do task2','do task3','do task4','do task5'],
      newTask: ''
    }
  },
  methods:{
    removeItem(index){
      this.todoList.splice(index,1)
    },
    checkItem(){
      let list = document.querySelector('ul');
      list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
          ev.target.classList.toggle('checked');
        }
      }, false);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  font-family: "Arial Rounded MT Bold";
  font-size: large;
  color: cadetblue;
}
li{
  font-family: "Arial Rounded MT Bold";
  font-size: medium;
  color: cadetblue;
  margin: 5px;
}
button{
  background-color: cadetblue;
  border: solid lightslategray 1px;
  border-radius: 25px;
  color: azure;
  font-size: x-small;
}
input{
  background-color: azure;
  border: solid lightslategray 1px;
  border-radius: 25px;
  color : cadetblue;
  margin: 5px;
  padding: 5px;
}
ul li.checked {
  text-decoration: line-through;
}
/*ul li.checked::before {*/
/*  content: '';*/
/*  position: absolute;*/
/*  border-color: cadetblue;*/
/*  border-style: solid;*/
/*  border-width: 0 2px 2px 0;*/
/*  top: 10px;*/
/*  left: 16px;*/
/*  transform: rotate(45deg);*/
/*  height: 15px;*/
/*  width: 7px;*/
/*}*/
</style>

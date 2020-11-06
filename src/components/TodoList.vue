<template>
  <div class="todo">
    <p>To Do:</p>
    <ul>
      <li v-for="(item, i) in todoItems" :key="i">
        <TodoItem  :item="item" @remove="removeItem(i)"/>
      </li>
    </ul>
    <InputForNewItem @add="addItem" />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import InputForNewItem from "@/components/InputForNewItem";

export default {
  name: "TodoList",
  components:{
    TodoItem,
    InputForNewItem
  },
  data(){
    return{
      todoItems: ['do task1','do task2','do task3','do task4','do task5']
    }
  },
  methods: {
    removeItem(index){
      this.todoItems.splice(index,1)
    },
    addItem(newTask){
      this.todoItems.push(newTask);
    }
  }
}
</script>

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
</style>

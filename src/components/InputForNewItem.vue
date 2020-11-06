<template>
  <div>
    <input type="text" v-model="newTask">
    <button @click="add(newTask)">Add task</button>
  </div>
</template>

<script>
export default {
  name: "InputForNewItem",
  data(){
    return{
      newTask: ''
    }
  },
  methods: {
    add(newTask){
      this.$emit('add',newTask);
    }
  }
}
</script>

<style scoped>
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
</style>

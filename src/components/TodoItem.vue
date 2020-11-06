<template>
  <div>
    {{item}}
    <button @click="remove">Remove Item</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props:['item'],
  methods: {
    remove(){
      this.$emit('remove');
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
</style>

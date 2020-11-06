import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// export const eventBus = new Vue({
//   data() {
//     return {
//       todoItems: ['do task1','do task2','do task3','do task4','do task5']
//     }
//   },
//   methods: {
//       removeItem(index){
//         this.todoItems.splice(index,1)
//       },
//     addItem(newItem){
//       this.todoItems.push(newItem)
//     }
//   }
// });

new Vue({
  render: h => h(App),
}).$mount('#app')

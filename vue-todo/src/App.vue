<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @addTodoItem="addOneItem"/>
    <TodoList :propsData="todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem"/>
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"

export default {
  data() {
    return {
      todoItems: []
    }
  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  methods: {
    addOneItem: function(todoItem) {
      let obj = {completed: false, item: todoItem}
      localStorage.setItem(todoItem, JSON.stringify(obj)) // obj -> string 변환
      this.todoItems.push(obj)
    },
    removeOneItem: function(todoItem, idx) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(idx, 1) // 특정 인덱스에서 하나를 지움 cf) slice: 삭제되지만 원본 배열은 유지됨
    },
    toggleOneItem: function(todoItem, idx) {
      // todoItem.completed = !todoItem.completed // rf? rt? pattern (비추)
      this.todoItems[idx].completed = !this.todoItems[idx].completed
      // 로컬 스토리지의 데이터를 갱신
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    }
  },
  created() {
    if(localStorage.length > 0) {
        for(let i=0; i<localStorage.length; i++) {
            this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
    }
  },
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

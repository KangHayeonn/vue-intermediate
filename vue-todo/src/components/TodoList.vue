<template>
  <div>
    <!-- ul>li*3 -->
    <ul>
        <li v-for="(todoItem, idx) in todoItems" :key="idx">{{ todoItem }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            todoItems: []
        }
    },
    created: function() {
        if(localStorage.length > 0) {
            for(let i=0; i<localStorage.length; i++) {
                this.todoItems.push(localStorage.key(i))
            }
        }
    }
}
</script>

<style>

</style>
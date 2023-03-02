<template>
  <div>
    <!-- ul>li*3 -->
    <ul>
        <li v-for="(todoItem, idx) in todoItems" :key="idx" class="shadow">
            {{ todoItem }}
            <span class="removeBtn" @click="removeTodo(todoItem, idx)">
                <i class="fas fa-trash-alt"></i>
            </span>
        </li>
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
    },
    methods: {
        removeTodo(todoItem, idx) {
            localStorage.removeItem(todoItem)
            this.todoItems.splice(idx, 1)
        }
    },
}
</script>

<style>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: #fff;
    border-radius: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted {
    color: #b3adad;
}
.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}
</style>
<template>
  <div>
    <!-- ul>li*3 -->
    <transition-group name="list" tag="ul">
        <li v-for="(todoItem, idx) in this.getTodoItems" :key="idx" class="shadow">
            <i class="checkBtn fas fa-check" :class="{checkBtnCompleted: todoItem.completed}" 
                @click="toggleComplete({todoItem, idx})"></i>
            <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
            <span class="removeBtn" @click="removeTodo({todoItem, idx})">
                <i class="fas fa-trash-alt"></i>
            </span>
        </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"

export default {
    computed: {
        ...mapGetters(["getTodoItems"]),
    },
    methods: {
        ...mapMutations({
            removeTodo: "removeOneItem",
            toggleComplete: "toggleOneItem"
        }),
        // removeTodo(todoItem, idx) {
        //     // this.$emit("removeItem", todoItem, idx)
        //     this.$store.commit("removeOneItem", { todoItem, idx })
        // },
        // toggleComplete(todoItem, idx) {
        //     // this.$emit("toggleItem", todoItem, idx)
        //     this.$store.commit("toggleOneItem", { todoItem, idx })
        // }
    },
}
</script>

<style scoped>
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
/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
    transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
}
</style>
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex) // use : vue의 plugin 기능, vue를 사용할 때 전역으로 특정 기능을 추가하고 싶을 때 사용 (global funtionality 추가) 

const storage = {
    fetch() {
        const arr = []
        if(localStorage.length > 0) {
            for(let i=0; i<localStorage.length; i++) {
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
            }
        }

        return arr
    },
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = {completed: false, item: todoItem}
            localStorage.setItem(todoItem, JSON.stringify(obj)) // obj -> string 변환
            state.todoItems.push(obj)
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item)
            state.todoItems.splice(payload.idx, 1) // 특정 인덱스에서 하나를 지움 cf) slice: 삭제되지만 원본 배열은 유지됨
        },
        toggleOneItem(state, payload) {
            // todoItem.completed = !todoItem.completed // rf? rt? pattern (비추)
            state.todoItems[payload.idx].completed = !state.todoItems[payload.idx].completed
            // 로컬 스토리지의 데이터를 갱신
            localStorage.removeItem(payload.todoItem.item)
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
        },
        clearAllItems(state) {
            localStorage.clear()
            state.todoItems = []
        },
    }
});
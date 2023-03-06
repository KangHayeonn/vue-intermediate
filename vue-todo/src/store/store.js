import Vue from "vue"
import Vuex from "vuex"
import * as getters from "./getters"
import * as mutations from "./mutations"

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
    getters,
    mutations
});
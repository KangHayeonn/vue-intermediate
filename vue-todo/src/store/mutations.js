const addOneItem = (state, todoItem) => {
    const obj = {completed: false, item: todoItem}
    localStorage.setItem(todoItem, JSON.stringify(obj)) // obj -> string 변환
    state.todoItems.push(obj)
}
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item)
    state.todoItems.splice(payload.idx, 1) // 특정 인덱스에서 하나를 지움 cf) slice: 삭제되지만 원본 배열은 유지됨
}
const toggleOneItem = (state, payload) => {
    // todoItem.completed = !todoItem.completed // rf? rt? pattern (비추)
    state.todoItems[payload.idx].completed = !state.todoItems[payload.idx].completed
    // 로컬 스토리지의 데이터를 갱신
    localStorage.removeItem(payload.todoItem.item)
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
}
const clearAllItems = (state) => {
    localStorage.clear()
    state.todoItems = []
}

export {
    addOneItem,
    removeOneItem,
    toggleOneItem,
    clearAllItems
}
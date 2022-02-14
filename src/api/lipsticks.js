import lipsticks from "./lipsticks.json";
export function getAll() {
    return Promise.resolve(lipsticks);
}
export function getById(id) {
    const lipstick =lipsticks.find(item=>item.id===id);
    return Promise.resolve(lipstick);
}
export default {getAll,getById}
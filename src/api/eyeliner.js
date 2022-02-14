import eyeliners from "./eyeliners.json";
export function getAll() {
    return Promise.resolve(eyeliners);
}
export function getById(id) {
    const eyeliner =eyeliners.find(item=>item.id===id);
    return Promise.resolve(eyeliner);
}
export default {getAll,getById}
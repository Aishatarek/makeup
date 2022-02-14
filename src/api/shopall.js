import shops from "./shops.json";
export function getAll() {
    return Promise.resolve(shops);
}
export function getById(id) {
    const shop =shops.find(item=>item.id===id);
    return Promise.resolve(shop);
}
export default {getAll,getById}
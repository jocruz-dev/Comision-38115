import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where } from "firebase/firestore";

const db = ()=> getFirestore()

export function getCollection(name="") {
    const data = collection(db(),name)
    return getDocs(data)
}

export function getSingleDoc(collection="", id="") {
    const data = doc(db(), collection, id)
    return getDoc(data)
}

export function filterCollection(name="",condition=["","",""]) {
    const data = query(collection(db(), name),where(condition[0],condition[1],condition[2]))
    return getDocs(data)
}

export function addSingleDoc(order) {
    const data = collection(db(), "cart")
    return addDoc(data, order)
}


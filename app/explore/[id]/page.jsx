import { db } from "@/config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const fetchSinglePoem = async (id) => {
    if (!id) {
        return null;
    }

    const docRef = doc(db, "verses", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }

}

export default async function exploreDynamic ({params}){
    const poem = await fetchSinglePoem(params.id)
    console.log(poem);
    
    return (
        <main className="min-h-dvh">
            Hello
        </main>
    )
}
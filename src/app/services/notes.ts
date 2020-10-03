interface note  {
    title: string,
    content: string,
    createdAt?: string
}

enum API {
    NOTES="notes"
}

export async function noteInstance() {

    if (!localStorage.getItem(API.NOTES)){
        try {
            localStorage.setItem(API.NOTES, JSON.stringify([]))
        } catch (error) {
            throw error
        }
    }
}

export async function getCurrentNotes() {

    try {
        await noteInstance()
        return JSON.parse(localStorage.getItem(API.NOTES));
    }catch(err) {
        throw err
    }
}

export async function createNote(note: {title: string, content: string}) {

    try {
        await noteInstance()
        let notes = await getCurrentNotes();
        let newNotes = JSON.stringify([...notes, note]);
        localStorage.setItem(API.NOTES, newNotes);
    }catch(err) {
        console.log(err);
    }
}

export async function deleteAll() {

    try {
        localStorage.setItem(API.NOTES, JSON.stringify([]))
    }catch(err) {
        console.log("[ERROR]", err)
    }
}

export async function deleteOne(noteID: string) {

    try {
        let notes = await getCurrentNotes();
        let filtered = notes.filter((n: any) => n.id !== noteID);
        await localStorage.setItem(API.NOTES, JSON.stringify(filtered));
    } catch (error) {
        console.log("[ERROR]", error)
    }
}
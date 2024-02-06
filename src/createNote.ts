import "./main"
import "./types./interfaces"

async function createNote(username, title, content) {
    try {
        const note = { username, title, content };
        const response = await fetch("https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes", {
            method: "POST",
            body: JSON.stringify(note), // Gör om till ett JSON objekt
            headers: {
                'Content-Type': 'application/json' // Berätta för servern att det vi skickar med är ett JSON objekt
            }
        });

        if (!response.ok) {
            throw new Error("`HTTP error!")
        }
        const data = await response.json();
        console.log("Note created succefully: ", data)
    }

    catch (error) {

        console.error("error creting note: ", error);
    }
}
const username = "mcqueen";
const title = "ronaldo";
const content = "jag gillar blåbär";

createNote(username, title, content);
console.log(createNote);


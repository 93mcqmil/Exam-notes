export async function deleteNote(noteId: string) {
    try {
        const response = await fetch(
            `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${noteId}`,
            {
                method: "DELETE"
            }
        );

        if (response.ok) {
            const notesContainer = document.querySelector(".user-notes");
            if (notesContainer) {
                notesContainer.innerHTML = "";
            } else {
                console.error("Notes container not found.");
            }

            // Remove the note element from the UI
            const noteElement = document.getElementById(noteId);
            noteElement?.remove();
        } else if (response.status === 400) {
            console.log("Note already deleted or not found.");
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Couldn't delete note", error);
    }
}


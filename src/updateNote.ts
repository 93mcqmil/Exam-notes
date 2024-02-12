
export async function updateNote(note: any, noteElement: HTMLElement) {
    const updatedNoteContent = (noteElement.querySelector("textarea") as HTMLTextAreaElement).value;
    const updateButton = noteElement.querySelector(".updateBtn") as HTMLButtonElement;
    const editButton = noteElement.querySelector(".editBtn") as HTMLButtonElement;

    try {

        const response = await fetch(
            `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${note.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    note: updatedNoteContent
                })
            }
        );

        if (response.ok) {
            // console.log("Note updated successfully!");
            const noteParagraph = document.createElement("p");
            noteParagraph.textContent = updatedNoteContent;
            const noteInput = noteElement.querySelector("textarea");
            noteInput?.replaceWith(noteParagraph);
            editButton.removeAttribute("disabled");
            updateButton.style.display = "none";
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error("Couldn't update note", error);
    }
}


export function editNote(note: any, noteElement: HTMLElement) {
    const currentNoteContent = note.note;
    const noteInput = document.createElement("textarea");
    noteInput.value = currentNoteContent;
    const noteParagraph = noteElement.querySelector("p");
    noteParagraph?.replaceWith(noteInput);

    const editButton = noteElement.querySelector("button");
    const updateButton = editButton?.nextSibling as HTMLElement;
    editButton?.setAttribute("disabled", "true");
    updateButton.style.display = "inline";
}
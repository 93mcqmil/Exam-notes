import "./main";
import { User } from "./types/userFace";
import { createNote } from "./createNote";
import { editNote } from "./editNote";
import { updateNote } from "./updateNote";
import { deleteNote } from "./deleteNote";



export async function fetchNotesForUser() {
  const usernameInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#formInputUsername");
  const username: string | undefined = usernameInput?.value;

  console.log(username);
  try {
    const response = await fetch(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${username}`
    );
    //check if answer is ok
    if (response.ok) {
      const notesData = await response.json()
      const notes = notesData.notes;
      const notesContainer = document.querySelector(".user-notes");


      notes.map((note: any) => {
        // Create new DOM element for each note
        const noteElement = document.createElement("div");
        noteElement.classList.add("note");
        noteElement.innerHTML = `
          <h3>Username: ${note.username}</h3>
          <h3>Title: ${note.title}</h3>
          <p> Note: ${note.note}</p>`;
        // Append the note element to the notes container
        notesContainer?.appendChild(noteElement);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("editBtn");
        editButton.addEventListener("click", () => {
          editNote(note, noteElement)
        });
        noteElement.appendChild(editButton);

        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList.add("updateBtn");
        updateButton.style.display = "none";
        updateButton.addEventListener("click", () => {
          updateNote(note, noteElement);
        });
        noteElement.appendChild(updateButton);

        const deleteButton = document.createElement("button"); // Create delete button
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteBtn"); // Add deleteBtn class
        deleteButton.addEventListener("click", () => {
          deleteNoteHandler(note.id); // Call deleteNoteHandler with note ID
        });
        noteElement.appendChild(deleteButton);
      });
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Couldn't fetch notes", error);
    // Handle the error appropriately, e.g., display an error message to the user
  }
}
function deleteNoteHandler(noteId: string) {
  const confirmation = confirm("Are you sure you want to delete this note?");
  if (confirmation) {
    deleteNote(noteId);
  }
}

//username to get notes
// const username = "mcqueen";

// createNote("mcqueen");
document.getElementById("GetNotes-btn")?.addEventListener("click", () => { fetchNotesForUser() })
// document.getElementById("submit-btn")?.addEventListener("click", () => {
// createNote);
// });
document.getElementById("submit-btn")?.addEventListener("click", () => {
  createNote();
});




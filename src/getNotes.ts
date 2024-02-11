import "./main";
import { User } from "./types/userFace";
import { createNote } from "./createNote";


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
          <h3>${note.title}</h3>
          <p>${note.note}</p>`;
        // Append the note element to the notes container
        notesContainer?.appendChild(noteElement);
      });
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Couldn't fetch notes", error);
    // Handle the error appropriately, e.g., display an error message to the user
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




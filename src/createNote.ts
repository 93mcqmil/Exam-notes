import "./main";
import { User } from "./types/userFace";


export async function createNote() {
  const usernameInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#formInputUsername");
  const username: string | undefined = usernameInput?.value;

  const titleInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#formInputTitle");
  const title: string | undefined = titleInput?.value;

  const noteInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#formInputNote");
  const note: string | undefined = noteInput?.value;
  console.log("submit button clicked")
  try {
    const notePost = {
      username,
      title,
      note,
    };

    const response = await fetch(
      "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes",
      {
        method: "POST",
        body: JSON.stringify(notePost), // Gör om till ett JSON objekt
        headers: {
          "Content-Type": "application/json", // Berätta för servern att det vi skickar med är ett JSON objekt
        },
      }
    );

    if (response.ok) {
      //Send to new page
    }
    // const data = await response.json();
    // console.log(data.notePost);
  } catch (error) {
    console.error("error creating note: ", error);
  }
}






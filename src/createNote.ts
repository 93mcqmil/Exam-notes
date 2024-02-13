import "./main";
import { User } from "./types/userFace";


export async function createNote() {
  //Get users input from the form
  const usernameInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#formInputUsername");
  const username: string | undefined = usernameInput?.value;

  const titleInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#formInputTitle");
  const title: string | undefined = titleInput?.value;

  const noteInput: HTMLInputElement | null = document.querySelector<HTMLInputElement>("#formInputNote");
  const note: string | undefined = noteInput?.value;

  try {

    //create object for the note with user input
    const notePost = {
      username,
      title,
      note,
    };

    //send data to API "Post" apply
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
      const responseData = await response.json();
      console.log("Response data from server:", responseData);

      //String to post result
      const resultHTML = ` <h2><u>NOTE CREATED!</u></h2>
      <h2> <u> User: </u> ${notePost.username} </h2>
      <h2> <u> Title:</u> ${notePost.title} </h2>
      <h2> <u> Note:</u> ${notePost.note} </h2>
      `;
      const result: HTMLElement | null = document.querySelector<HTMLElement>("#result");
      if (result) {
        result.innerHTML = resultHTML;
      }

    }
    // console.log(data.notePost);
  } catch (error) {
    console.error("error creating note: ", error);
  }
}






import "./main";
import { User } from "./types/userFace";

export async function createNote(user: User) {
  try {
    const notePost = {
      username: user.username,
      title: "anteckning",
      note: "Första anteckningen",
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

    if (!response.ok) {
      throw new Error("`HTTP error!");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("error creting note: ", error);
  }
}
const user: User = {
  username: "Mcqueen",
  note: "",
  title: "",
  id: "",
};

createNote(user);

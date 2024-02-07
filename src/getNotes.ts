import "./main";

async function fetchNotesForUser(username: string) {
  try {
    const response = await fetch(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${username}`
    );
    //check if answer is ok
    if (!response.ok) {
      //if not ok throw error message
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    //converting answer(data) to a javascript-object
    const data = await response.json();
    console.log("Notes for user", username + ":");
    console.log(data);
  } catch (error) {
    console.error("Could't fetch notes", error);
  }
}

//username to get notes
const username = "mcqueen";
fetchNotesForUser(username);

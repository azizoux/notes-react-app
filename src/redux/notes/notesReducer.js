import { v4 as uuidv4 } from "uuid";
import { API } from "../../api-service";

const INITIAL_STATE = {
  notes: [],
};

export default function notesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SETNOTES": {
      return {
        notes: action.payload,
      }
    }
    case "ADDNOTE": {
     
      const note = API.createNote(action.payload);
      const listNotes = API.getNotes()
      return {
        notes: listNotes,
      };
    }

    case "UPDATENOTE": {
      const note = API.updateNotes(action.payload.id, action.payload)
      const listNotes = API.getNotes()
      return {
        notes: listNotes,
      };
    }

    case "DELETENOTE": {
      API.deleteNote(action.payload)
      const newNotesList = API.getNotes()
      return {
        notes: newNotesList,
      };
    }
  }

  return state;
}

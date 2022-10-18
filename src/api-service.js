export class API {

    static getNotes(){
        return fetch("http://127.0.0.1:8000/api/notes/", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(response => response.json())
    }

    static deleteNote(id){
        return  fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
             method: 'DELETE',
             headers: {
                 'Content-Type': 'application/json',
             }
         })
     }

     static createNote(note){
        return  fetch(`http://127.0.0.1:8000/api/notes/`, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 
             },
             body: JSON.stringify( note )
         }).then((response) => response.json())
     }

     static updateNotes(id, note){
        return  fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
             method: 'PUT',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify( note )
         }).then((response) => response.json())
     }

}
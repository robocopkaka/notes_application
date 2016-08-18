/**
	* Represents a note
	* @constructor
	* @param {object} properties - an object containing values for authors and note
 */
class Notes{
	constructor(properties){
		this.author = properties.author;
		this.note_content = properties.note_content;
	}
}

class NotesApplication{
	constructor(){
		this.notes = [];
	}
	/**
	* Creates a new note
	* @param {object} note - contains values for an author and his note
	*/
	create_notes(note){
		if(note instanceof Notes){
			this.notes.push(note);
		}
	}
	/**
	* Retrieves all notes in a particular format.
	*/
	list_notes(){
		for(var count = 0; count < this.notes.length; count++){
			console.log("Note ID: " + count);
			console.log("[" + this.notes[count].note_content + "]");
			console.log("By Author [" + this.notes[count].author + "]")
		}// nd for
	}// end of list_notes 
	
	/**
	* Gets a specific note with it's note ID
	* @param {number} note_id - The ID of the note 
	*/
	get(note_id){
		if(this.notes.hasOwnProperty(note_id)){ //checks to see if the notes id is an index of 
			return this.notes[note_id].note_content;
		}// end if
		else console.log("ID is invalid");
	}// end of get
	
	/**
	* Used to search for occurences of a search parameter in all notes on the system
	* @param {string} search_text - the parameter you're searching for an occurnce of
	*/
	search(search_text){
		console.log("Showing results for search \‘[<search_text>]\’");
		for(var count = 0; count< this.notes.length; count++){
			if(this.notes[count].note_content.indexOf(search_text) !== -1){
				console.log("Note ID: " + count);
				console.log("[" + this.notes[count].note_content + "]");
			}// end if
		}// end for
		console.log("No other results found");
	}//end of search
	
	/**
	* Editing content at a particular index
	* @param {number} note_id - Index to edit content at
	*/
	edit(note_id, new_content){
		if(this.notes.hasOwnProperty(note_id)) this.notes[note_id].note_content = new_content;
		else console.log("ID is invalid");
	}// end of edit
	

	/**
	* Deleting content at a particular index
	* @param {number} note_id - Index to delete
	*/
	delete(note_id){
		if(this.notes.hasOwnProperty(note_id)) this.notes.splice(note_id,1);
		else console.log("ID is invalid");
	}//end of delete

}



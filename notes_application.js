class Notes{
	constructor(properties){
		this.author = properties.author;
		this.notes = properties.note_content;
	}
}

class NotesApplication{
	constructor(){
		this.notes = {}; 
	}
	create_notes(new_note){
		if(!this.notes.hasOwnProperty(new_note.author)){
			this.notes[new_note.author] = [];
		}
		else{
			this.notes[new_note.author].push(new_note);
		}
	}// end of create_notes
	
	list_notes(){
		for(var count = 0; count < this.notes.length; count++){
			console.log("Note ID: " + count);
			console.log("[" + this.notes[count] + "]");
			console.log("By Author [" + this.author + "]")
		}// nd for
	}// end of list_notes 
	
	get(note_id){
		if(this.notes.hasOwnProperty(note_id)){ //checks to see if the notes id is an index of 
			return this.notes[note_id]
		}// end if
		else console.log("ID is invalid");
	}// end of get
	
	search(search_text){
		console.log("Showing results for search \‘[<search_text>]\’");
		for(var count = 0; count< this.notes.length; count++){
			if(this.notes[count].indexOf(search_text) !== -1){
				console.log("Note ID: " + count);
				console.log("[" + this.notes[count] + "]");
			}// end if
			
			else{
				continue;
			}
		}// end for
		console.log("No other results found");
	}//end of search
	
	edit(note_id, new_content){
		if(this.notes.hasOwnProperty(note_id)) this.notes[note_id] = new_content;
		else console.log("ID is invalid");
	}// end of edit
	
	delete(note_id){
		if(this.notes.hasOwnProperty(note_id)) this.notes[note_id] = "";
		else console.log("ID is invalid");
	}//end of delete
}
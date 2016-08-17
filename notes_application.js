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
	
	create_notes(note){
		if(note instanceof Notes){
			this.notes.push(note);
		}
	}
	
	list_notes(){
		for(var count = 0; count < this.notes.length; count++){
			console.log("Note ID: " + count);
			console.log("[" + this.notes[count].note_content + "]");
			console.log("By Author [" + this.notes[count].author + "]")
		}// nd for
	}// end of list_notes 
	
	get(note_id){
		if(this.notes.hasOwnProperty(note_id)){ //checks to see if the notes id is an index of 
			return this.notes[note_id].note_content;
		}// end if
		else console.log("ID is invalid");
	}// end of get
	
	search(search_text){
		console.log("Showing results for search \‘[<search_text>]\’");
		for(var count = 0; count< this.notes.length; count++){
			if(this.notes[count].note_content.indexOf(search_text) !== -1){
				console.log("Note ID: " + count);
				console.log("[" + this.notes[count].note_content + "]");
			}// end if
			
			else{
				continue;
			}
		}// end for
		console.log("No other results found");
	}//end of search
	
	edit(note_id, new_content){
		if(this.notes.hasOwnProperty(note_id)) this.notes[note_id].note_content = new_content;
		else console.log("ID is invalid");
	}// end of edit
	
	delete(note_id){
		if(this.notes.hasOwnProperty(note_id)) this.notes[note_id].note_content = "";
		else console.log("ID is invalid");
	}//end of delete

}
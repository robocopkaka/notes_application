class NotesApplication{
	constructor(author){
		this.author = author;
		this.notes = [];
	}
	
	create_notes(note_content){
		this.notes.push(note_content);
	}// end of create_notes
	
	list_notes(){
		for(var count = 0; count < this.notes.length; count++){
			console.log("Note ID: " + count);
			console.log("[" + this.notes[count] + "]");
			console.log("By Author [" + this.author + "]")
		}// nd for
	}// end of list_notes 
	
	get(note_id){
		if(this.notes.hasOwnProperty(note_id)){
			return this.notes[note_id]
		}// end if
		else console.log("ID is invalid");
	}// end of get

	edit(note_id, new_content){
		if(this.notes.hasOwnProperty(note_id)) this.notes[note_id] = new_content;
		else console.log("ID is invalid");
	}// end of edit
	
	delete(note_id){
		if(this.notes.hasOwnProperty(note_id)) this.notes[note_id] = "";
		else console.log("ID is invalid");
	}//end of delete
}
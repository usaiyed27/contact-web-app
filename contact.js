let name = document.getElementById('contactName').value;
let phnNum = document.getElementById('contactNumber').value;

class Contact {
	constructor(name,phnNum){
		this.name;
		this.phnNum;
	}
}

let addContact = () => {
	let contact = new Contact(name,phnNum);
}

addContact();
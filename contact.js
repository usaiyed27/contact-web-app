let name = document.querySelector('#contactName');
let phnNum = document.querySelector('#contactNumber');
let display = document.querySelector('#display-contact');


let addContact = (name,phnNum) => {
	if(name && phnNum){
	name = name.value;
	phnNum = phnNum.value;
}
	console.log(name);
	console.log(phnNum);
}

addContact();
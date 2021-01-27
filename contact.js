	//Store contacts	
		var contacts = [
				{
				  contactName: 'Contact 1',
				  contactNumber: 'Phone 1'	
				},
				{
				  contactName: 'Contact 2',
				  contactNumber: 'Phone 2'	
				},
				{
				  contactName: 'Contact 3',
				  contactNumber: 'Phone 3'	
				}
			];

		//Display contacts
		let allContactDisplay = document.querySelector('#display-contact');
		//console.log(allContactDisplay);
		
		function displayContacts(){
			contacts.forEach(contact => {
				let paragraph = document.createElement('p');
				let anchor = document.createElement('a');
				anchor.setAttribute('href', 'edit-contact.html');
				let contactDisplay = document.createTextNode(contact['contactName']);
				anchor.appendChild(contactDisplay);
				anchor.addEventListener('click', editContact);
				paragraph.appendChild(anchor);
				allContactDisplay.appendChild(paragraph);
			});
		}
		
		displayContacts();
		
		let inputName = document.getElementById('name');
		let inputPhone = document.getElementById('phone');
		let addBtn = document.getElementById('addBtn');
		
		//Add Contacts to Array
		function addContact(name, phone){
			contacts.push({contactName: name, contactNumber:phone});
			console.log(contacts);
		}

		addBtn.onclick = function() {addContact(inputName.value, inputPhone.value)};

		//Edit Contacts
		function editContact(event){
			let editName = document.getElementById('#editName');
			let editNumber = document.querySelector('#editPhone');
			let text = event.target.innerText;
				contacts.forEach(contact => {
					if(contact['contactName'] === text){
						console.log(editName.value);
						console.log(editNumber.value);
				    }
				});
		}

		//Remove Contacts
		function removeContact(position){
			contacts.splice(position,1);
			console.log(contacts);
		}
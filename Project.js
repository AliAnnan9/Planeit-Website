
		
	//define variable for each text field in the form
    var firstName, lastName, email, country;
	
	function ReadInput(){
	//read and save the input inside the variables
	firstName = document.getElementById("NFirst-Name").value;
	lastName = document.getElementById("NLast-Name").value;
	email = document.getElementById("NUser-Email").value;
	country =  document.getElementById("NUser-Suggestion").value;
		
		//validations against empty inputs
		if (firstName == ""){
			document.getElementById("N-errorMsg").innerHTML=("*Please enter your first name");
		}else if(lastName == ""){
			document.getElementById("N-errorMsg").innerHTML=("*Please enter your last name");
		}else if(email == ""){
			document.getElementById("N-errorMsg").innerHTML=("*Please enter your email");
		}else if(country == ""){
			document.getElementById("N-errorMsg").innerHTML=("*Please enter your country suggestion");
		}else{
			document.getElementById("N-errorMsg").innerHTML=("Successfully Registered");
			
			//set the data in the sessionStorage using setters
			sessionStorage.setItem("firstName", firstName);
			sessionStorage.setItem("lastName", lastName);
			sessionStorage.setItem("email", email);
			sessionStorage.setItem("country", country);
			
			
		}
	
		}
	
	function printUserDetails(){
        
		//get the data from the storage using getters
		document.getElementById("firstName").innerHTML=sessionStorage.getItem("firstName");
		document.getElementById("lastName").innerHTML=sessionStorage.getItem("lastName");
		document.getElementById("email").innerHTML=sessionStorage.getItem("email");
		document.getElementById("country").innerHTML=sessionStorage.getItem("country");
		
		
	}
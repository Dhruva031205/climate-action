const facts = [
    "The Earth’s average temperature has risen by 1.2°C since the late 19th century.",
    "Greenhouse gases can stay in the atmosphere for hundreds of years.",
    "Deforestation accounts for nearly 20% of global carbon emissions.",
    "Glaciers are melting at an unprecedented rate, contributing to rising sea levels.",
    "The past seven years have been the warmest years on record globally."
];

// Function to display a random fact
function displayRandomFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("random_fact").randomFact;
}
// Example: Array of climate action tips
const climateTips = [
  "Switch to renewable energy sources",
  "Reduce water waste",
  "Plant trees in your community",
  "Support eco-friendly businesses",
];



function validate(){
				//check name
				//check for the @ symbol in email
				// for any issues generate a msg-- return that msg is required
				// to check for the above set a flag to be true and then change to false if any form condition is not met
				
				let valid= true; //our flag
				let msge= "Incomplete form: ";
				// name validation
				if(document.getElementById("name").value ==""){
					msge+= "You need to fill name."; //building a message
					valid= false; // flag is false
					
				}
				//email validation
				if(document.getElementById("email").value ==""){
					msge+= "need to fill in email.";
					valid= false;
				}else if(document.getElementById("email").value !=""){
					inputE = document.getElementById("email").value;
					let symbol= inputE.indexOf("@"); //will return the index
					if(symbol<1){
						msge+="not a valid email";
						valid false;
					}
				}
				// message validation
				if(document.getElementById("message").value ==""){
					msge+= "You need to enter a message."; //building a message
					valid= false; // flag is false
					
				}

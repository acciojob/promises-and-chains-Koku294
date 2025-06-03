document.getElementById("votingform").addEventListener("Submit",function (e)
{
	e.preventDefault();
	const name=document.getElementById("name").value.trim();
	const age=document.getElementById("age").value.trim();

	if(!name||!age){
		alert("Please return valid details.");
		return;
	}
const agenum=Number(age);

	const checkeligibility=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(agenum>18){
				resolve("Welcome, ${name}. you can vote.");
			}
			else{
				reject("Oh sorry, ${name}. You are not old enough.");
			}
			
		},4000);
	});
	checkeligibility.then(message=>alert(message))
	.catch(error=>alert(error));
									   });
	
}
const age = parseInt(prompt("how old are you?"));

if(isNaN(age) || age < 0){
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("you are too young");
} else if (age>=18 && age<=50){
    console.log('you can drink');
} else if (age>50 && age<=80){
    console.log('you should not drink');
} else if(age>80){
    console.log("you can do whatever you want");
}

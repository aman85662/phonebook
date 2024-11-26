const contact = {
    suraj: "2020103415",
    sivaj: "2545854685",
    sohil: "2152454745"
}
function search(){
const searchinput = document.getElementById("inputbox");
const query = searchinput.value.toLowerCase();
const mobile = contact[query]
const result = document.getElementById("result");
if (mobile){
    result.innerText = `NO. of ${query} is ${mobile}`;
}
else{
    result.innerText = `contact not found`;
}
}
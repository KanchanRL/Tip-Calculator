

const bill = document.getElementById("bill");
const service = document.getElementById("service");
const people = document.getElementById("people");
const submitBtn = document.getElementById("submit");
const final_result =  document.getElementById("result");






submitBtn.addEventListener("click", () => {
    // check to see the answer

    
    if(bill.value == null || bill.value == undefined || bill.value == '' || bill.value <0 )
    {
        alert('Please enter a valid bill amount');
        return;
    }

    if(people.value == null || people.value == undefined || people.value == '' || people.value <0 || Number(people.value) % 1 != 0)
    {
        alert('Please enter a valid number of people');
        return;
    }

    let x = Number(bill.value);
    alert(x.toFixed(2));

    let result = Number(((x.toFixed(2) * service.value)/100)/people.value).toFixed(2);
    

    final_result.innerHTML = 'Tip Amount: Rs.' + result +  ' each';
});
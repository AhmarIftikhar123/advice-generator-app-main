let Advice_id = document.getElementById('adv_id');

let Advice_Txt = document.getElementById('advice');

let generate_btn= document.getElementById('subit_btn');

let url = "https://api.adviceslip.com/advice";


async function generate_advice(){
    try{
        let res = await fetch(url);
        let data = await res.json();

        let id = data.slip.advice;
        let advice = data.slip.id;

        Advice_id.innerHTML= advice;
        Advice_Txt.innerHTML = id;
    }
    catch(err){
        alert("Error occured",err);
    }
}
generate_advice();

generate_btn.addEventListener('click',generate_advice)
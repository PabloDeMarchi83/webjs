const frm = document.querySelector("from");
const resp = document.querySelector("h3");




frm.addEventListener("submit", (e) => {
    e.preventDefault(); // nao eviar formulario


//obter os valores dos imputs
 const nome = frm.inNome.value;
 const masculino = frm.inMasculino.checked;
 const altura = Number(frm.inAltura.value);

//let peso;

//if (masculino){

   // peso = 22 * Math.pow(altura,2);

//}else{

    peso = 21 * Math.pow(altura,2);

//}

const peso = masculino ? 22 * Math.pow(altura, 2): 21 * Math.pow(altura,2)

 resp.innerText = `${nome}: Seu peso ideal é ${peso} Kg.`

})

frm.addEventListener("reset" , () =>{
    resp.innerText = "";
})
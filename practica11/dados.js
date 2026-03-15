function dadoAlumno(){
    let numeroCaras;
    let opcion=parseInt(prompt("Dame una opcion"));
    switch(opcion){
        case 1:
            numeroCaras=6;
            break;
        case 2:
            numeroCaras=20;
             break;
        case 3:
            numeroCaras=100;
            break;
        default:
            alert(`la opción ingresada no fue correcta`);
            console.log
    }
    let resultado = Math.floor(Math.random() * (numeroCaras - 1 + 1)) + 1;
    alert(`El resultado del dado fue ${resultado}`);

}
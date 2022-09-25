const inputTexto = document.querySelector(".inputTexto")
const mensaje = document.querySelector(".mensaje")

function encriptar(stringencri){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringencri = stringencri.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringencri.includes(matrizCodigo[i][0])){
            stringencri = stringencri.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringencri
}

function desEncriptar(stringdesencri){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    stringdesencri = stringdesencri.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringdesencri.includes(matrizCodigo[i][1])){
            stringdesencri = stringdesencri.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringdesencri
}

function btnEncriptar(){
   const textoEncriptado = encriptar(inputTexto.value);
   mensaje.value = textoEncriptado;
   mensaje.style.backgroundImage = "none"
   inputTexto.value = ""
}

function btnDesencriptar(){
    const textoDesencriptado = desEncriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    inputTexto.value = ""
}

function copiar(){
    let contenido = document.querySelector(".mensaje")
    contenido.select()
    document.execCommand("copy")
    contenido.value = ""
}
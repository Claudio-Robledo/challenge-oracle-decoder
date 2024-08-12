const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const btnCopiar = document.querySelector('.btn-copiar');
const mensajeAviso = document.querySelector('.aviso');
const mensajeHabilitado = document.getElementById('habilitar');

function btnEncriptar() {
    mensajeHabilitado.disabled = false;
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    btnCopiar.classList.remove('ocultar-btn-copiar');
    mensajeAviso.style.display = "none";
}


function btnDesencriptar() {
    mensajeHabilitado.disabled = false;
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    btnCopiar.classList.remove('ocultar-btn-copiar');
    mensaje.style.backgroundImage = "none";
    mensajeAviso.style.display = "none";

}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {

            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }


    }

    return stringEncriptado;
}

function desencriptar(stringDesencriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptar = stringDesencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][1])) {

            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }


    }

    return stringDesencriptar;

}

function copiarTexto() {
    mensaje.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles')

}

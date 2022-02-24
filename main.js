let screen = document.querySelector("#screen-result");
/*  */
function getData(ref) {
    let value = ref.value;
    screen.value +=value;
}
/* funcion de raiz */
function raiz() {
    screen.value = Math.sqrt(screen.value);
}
function  porcentaje() {
    screen.value = screen.value/=100;
}
/* limpiar pantalla  */
function clean(){
    screen.value = '';
}
/* funcion de retroceso  */
function DEL() {
    screen.value = new String(screen.value).substring(0,
        new String(screen.value).length - 1);
}

function calculate(){
    try {
        screen.value = eval(screen.value);
    } 
    catch (error) {
        screen.value = 'Error';
        setTimeout (() => {
            clean();
        }, 900);
    }
}
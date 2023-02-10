/*
Prueba realizada el: 09-02-2023
Realizada por:
Revisado por:


1.- Organizar (la prueba)
2.- Actuar (Ejecutar las pruebas)
3.- Afirmar (Posibles escenarios)
*/
function studentStatus();

const status = {
    'ACTIVE':    'Activo',
    'INACTIVE':  'Inactivo',
    'DIE':       'Baja'
};

function getStudentStatus(status){
    if(!status){
        return "El status enviado no existe, verifique de nuevo, por favor.";
    }
}

//posibles casos para probar
// 1) Que la funcion exista
// 2) Enviar un parametro que no exista
// 3) Enviar otro tipo de dato que bo corresponda
// 4) No enviar ningun paramtro
// 5) Enviar mas o menos param de los q pide la funcion
// 6) Enviar parametro vacio



//Ejemplo de casos
// 1.1) 
// 2.1) getStudentStatus(´111315´)
// 3.1) getStudentStatus(6521150018)
// 4.1) getStudentStatus()
// 5.1) getStudentStatus(´alta´, 'die')
// 6.1) getStudentStatus('')
getStudentStatus();
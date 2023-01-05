//-------------------------------------------------------------------------------------------
//RELOJ
var momentoActual;
var hora;
var minuto;
var segundo;
var horaImprimible;

function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    horaImprimible = hora + " : " + minuto + " : " + segundo;
    document.form_reloj.reloj.value = horaImprimible;
    setTimeout("mueveReloj()",1000)
}
//-------------------------------------------------------------------------------------------
function cronometrar(){
    for(let h=0;h<24;h++){
        for(let m=0;m<60;m++){
            for(let s=0;s<60;s++){
                document.getElementById('segundos').innerHTML=s;
            }
            document.getElementById('minutos').innerHTML=m;
            s=0;
        }
        document.getElementById('horas').innerHTML=h;
        m=0;
    }
    setInterval(cronometrar,1000);
}
function restablecer(){
    clearInterval();
    document.getElementById('horas').innerHTML='0';
    document.getElementById('minutos').innerHTML='0';
    document.getElementById('segundos').innerHTML='0';
}
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
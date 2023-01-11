/*-----------------------------------------------------------------------*/
/*
---------------------------------------TIPOS DE DATOS---------------------------------------

    String
    Number
    Bigint
    Boolean
    Undefined
    Null
    Symbol
    Object
        Object
        Array
        Date

    Se puede utilizar 'typeof' para saber el tipo de dato de una variable
    
---------------------------------------VARIABLES---------------------------------------

    const _nombre_: _dato_;
    var _nombre_: _dato_;
    let _nombre_: _dato_;

---------------------------------------SCOPE O ALCANCE---------------------------------------

    Ámbito global-->toda declaración fuera de funciones y bloques pero dentro del .js
    Ámbito función-->toda declaración dentro de una función
    Ámbito bloque-->toda declaración dentro de llaves con let y const pero no con var, no se puede acceder desde fuera del bloque

---------------------------------------ENTRADA Y SALIDA DE DATOS---------------------------------------

    prompt("Ingrese un mensaje: ...");
    alert("Hola mundo");
    console.log("Hola mundo");
    document.write("Hola mundo");
    parseInt(); -->Para  parsear
    parseFloat(); -->Para  parsear

---------------------------------------OBJETOS INTEGRADOS DE JAVASCRIPT---------------------------------------

    Están integrados en el ámbito global y son lo siguientes:
        Number
        Math
        Date
        String
        Error
        Function
        Boolean

------------------------------------------------PROTOTIPOS------------------------------------------------
    Los prototipos vienen a ser como las clases en otros lenguajes
    Es lo que utilizamos en JavaScript para la programación orientada
    a objetos

------------------------------------------------CONDICIONALES------------------------------------------------

    IF-ELSE IF-ELSE:
        if(condición){

        }
        else if(condición){

        }
        else{

        }

    SWITCH:
        switch(evaluación de una variable){
            case 1: 
                bloque de instrucciones
                break;
            case 2: 
                bloque de instrucciones
                break;
            default: 
                bloque de instrucciones
        }
        switch(evaluación de una variable){
            case 'a': 
                bloque de instrucciones
                break;
            case 'b': 
                bloque de instrucciones
                break;
            default: 
                bloque de instrucciones
        }

-----------------------------------------ITERADORES Y BUCLES-----------------------------------------

    WHILE
        var i=0;
        while(condición con 'i'){
            bloque de instrucciones
            i++ o i-- o i+=50 o i-=50;
        }
    DO WHILE
        var i=0;
        do{
            bloque de instrucciones
            i++, etc.
        }while(condición);
    FOR
        for(let i=0;condición con 'i';iteración de 'i'){
            bloque de instrucciones
        }
    FOR IN
        for(let i in objeto){
            bloque de instrucciones
            -->básicamente me dice cuántos índices hay
        }
    FOR OF
        for(let i of objeto){
            bloque de instrucciones
            -->básicamente me dice cuántos los elementos que hay
        }

--------------------------------------PROGRAMACIÓN ORIENTADA A OBJETOS--------------------------------

    CONCEPTOS DEL PARADIGMA POO:
        herencia
        cohesión
        abstracción
        polimorfismo
        acoplamiento
        encapsulamiento
    OBJETO:
        var car = new Object();
        car.make = "Peugeot";
        car.model = "208";
        car.year = "2020";

        "esto es esto:"
        
        var car = {
            make = "Peugeot";
            model = "208";
            year = "2020";
        }

        "accedería así:"

        car._propiedad_;

        "esto es una función constructora de objeto:"

        function Car(make, model, year){
            this.make = make;
            this.model = model;
            this.year = year;
        }

    ClASE: -->Son como plantillas
        class Pelicula{ -->Los nombres de las clases siempre comienzan en mayúscula
            constructor(nombre, id){
                this.nombre = nombre;
                this.id = id;
            }
            reproducir(){
                return "Reproduciendo pelicula ${this.nombre}";
            }
        }
        const peliculaUno = new Pelicula("Spider-Man", 1); -->Estoy instanciando un objeto
        const peliculaDos = new Pelicula("Avengers", 2); -->Estoy instanciando otro objeto
        console.log(peliculaUno);
        console.log(peliculaDos.reproducir()); -->Este me va a mostrar el mensaje del método reproducir()

        class Serie extends Pelicula{ -->Es una clase que se hereda de la clase Pelicula
            constructor(nombre, id, cap){
                super(nombre, id);
                this.cap = cap;
            }
            reproducirCapitulo(){
                return "Reproduciendo capitulo ${this.cap}...${this.nombre}";
            }
        }
        const serieUno = new Serie("Dexter", 3, 55);
        console.log(serieUno.reproducirCapitulo());

-----------------------------------------------FUNCIONES----------------------------------------------

    function _nombreDeFunción_(_argumentos de la función_){
        bloque de instrucciones
        return; alternativo
    }
----------------------------------------EXPRESIONES Y OPERADORES---------------------------------------

    Asignación	                                            x = y	    x = y
    Asignación de adición	                                x += y	    x = x + y
    Asignación de resta	                                    x -= y	    x = x - y
    Asignación de multiplicación	                        x *= y	    x = x * y
    Asignación de división	                                x /= y	    x = x / y
    Asignación de residuo	                                x %= y	    x = x % y
    Asignación de exponenciación	                        x **= y	    x = x ** y
    Asignación de desplazamiento a la izquierda	            x <<= y	    x = x << y
    Asignación de desplazamiento a la derecha	            x >>= y	    x = x >> y
    Asignación de desplazamiento a la derecha sin signo	    x >>>= y	x = x >>> y
    Asignación AND bit a bit	                            x &= y	    x = x & y
    Asignación XOR bit a bit	                            x ^= y	    x = x ^ y
    Asignación OR bit a bit	                                x |= y	    x = x | y
    Asignación AND lógico	                                x &&= y	    x && (x = y)
    Asignación OR lógico	                                x ||= y	    x || (x = y)
    Asignación de anulación lógica	                        x ??= y	    x ?? (x = y)

---------------------------------------DOCUMENT OBJECT MODEL (DOM)---------------------------------------

    El navegador web permite visualizar los elementos de una 
    página web a través de la consola para desarrolladores. 
    Sólo hay que abrir la consola y en la pestaña llamada 
    Elementos se encuentra la estructura de la página. 
    Es posible navegar por la estructura desplegando 
    los diferentes nodos correspondientes a las etiquetas HTML.

    PARA ACCEDER A NODOS DEL DOM:
        document.head; -->Así como este, puedo acceder a los demás elementos sin necesidad de un getElementById()
        document.body; -->Así como este, puedo acceder a los demás elementos sin necesidad de un getElementById()
        document.stylesheet;
        document.link;
        document.getElementById();
        document.getElementByClassName()[_indice del elemento que lleva esta clase_];
        document.getElementByTagName()[];
        document.getElementByName()[];
        document.querySelector(); -->Tener en cuenta que solo me devuelve un elemento solo del que le he específicado
        document.querySelectorAll(); -->Tener en cuenta que me devuelve todos los elementos del que le he específicado

    PARA ACCEDER A ELEMENTOS CON HERENCIA Y PARENTESCO: -->Estos sirven mucho con querySelector, al momento de seleccionar un elemento y que hay una lista que comparte alguna info, ahí es cuando se complica para acceder y son estos métodos los que me sirven para eso
        .childElementCount
        .children
        .children[_indice_]
        .firstElementChild
        .lastElementChild
        .parentElement
        .nextElementSibling

    PARA CREAR Y AGREGAR:
        document.createElement(_Algun elemento html_); -->Se instancia
        elementoPadre.appendChild(_Nuevo_nodo_);    -->Se termina de crear la estructura
        var texto= document.creatTextNode(_ElTexto_); -->Se crea el contenido pero aún no se ubicó en el nuevo nodo que habíamos creado
        Nuevo_nodo.appendChild(texto); -->Se termina de insertar el contenido al nodo creado
        padre.append(_ELTexto_, document.createElement(_Nuevo_nodo_)); -->Esto sirve para resumir lo anterior en una sola línea
        padre.insertBefore(nuevo, final);}
        final.insertAdjacentElement(_ubicación_, nodo);
    
-----------------------------------LOCALSTORAGE Y SESSIONSTORAGE-----------------------------------

Permiten almacenar entre 5MB y 10MB de información; incluyendo texto y multimedia
La información está almacenada en la computadora del cliente y NO es enviada en cada petición del servidor, a diferencia de las cookies
Utilizan un número mínimo de peticiones al servidor para reducir el tráfico de la red
Previenen pérdidas de información cuando se desconecta de la red
La información es guardada por domino web (incluye todas las páginas del dominio)

localStorage.setItem(clave, valor); -->Para guardar elementos
localStorage.getItem(clave); -->Para obtener elementos guardados en el local storage
localStorage.removeItem(clave); -->Para remover el elemento especificado
storage.clear(); -->Para limpiar todo lo que haya en el localstorage

-----------------------------------------MANEJO DE ARCHIVOS--------------------------------------------



*/
/*-------------------------------PROGRAMAS-------------------------------*/
/*-----------------------------------------------------------------------*/
//VARIABLES

var mode=document.getElementById('mode');
var valor = localStorage.getItem('modo');

var time;
var hora;
var minuto;
var imprimible;

var contadorDias=0;
var contadorHoras=0;
var contadorMinutos=0;
var contadorSegundos=0;
var controlPausa=false;
var iterador;
var contador1=document.getElementById('contadorSegundos');
var contador2=document.getElementById('contadorMinutos');
var contador3=document.getElementById('contadorHoras');
var contador4=document.getElementById('contadorDias');

/*-----------------------------------------------------------------------*/
//CAMBIAR MODO DARK/LIGHT

mode.addEventListener('click', function(){
    var val = document.body.classList.toggle('dark');
    localStorage.setItem('modo', val);
});

if(valor=='true'){
    document.body.classList.add('dark');
}
else{
    document.body.classList.remove('dark');
}

/*-----------------------------------------------------------------------*/
//RELOJ

function moverReloj(){
    time = new Date();
    hora = time.getHours();
    minuto = time.getMinutes();
    imprimible = hora+':'+minuto;
    document.form_reloj.reloj.value = imprimible;
    setTimeout(moverReloj, 1000);
}

/*-----------------------------------------------------------------------*/
//CRONÓMETRO

function procesar(){
    contadorSegundos+=1;
    if(contadorSegundos==60){
        contadorSegundos=0;
        contadorMinutos++;
    }
    if(contadorMinutos==60){
        contadorMinutos=0;
        contadorHoras++;
    }
    if(contadorHoras==24){
        contadorHoras=0;
        contadorDias++;
    }
    console.log(contadorSegundos);
    contador1.innerHTML=contadorSegundos;
    contador2.innerHTML=contadorMinutos;
    contador3.innerHTML=contadorHoras;
    contador4.innerHTML=contadorDias;
}
function retrasar(){
    iterador=setInterval(procesar,1000);
}
function comenzar(){
    retrasar();
    document.getElementById('comenzar').disabled=true;
}
function controlar(){
    if(controlPausa==false){
        controlPausa=true;
        clearInterval(iterador);
    }
    else{
        controlPausa=false;
        retrasar();
    }
}
function restablecer(){
    clearInterval(iterador);
    contadorSegundos=0;
    contadorMinutos=0;
    contadorHoras=0;
    contadorDias=0;
    contador1.innerHTML=contadorSegundos;
    contador2.innerHTML=contadorMinutos;
    contador3.innerHTML=contadorHoras;
    contador4.innerHTML=contadorDias;
    document.getElementById('comenzar').disabled=false;
}

/*-----------------------------------------------------------------------*/
//CALCULADORA


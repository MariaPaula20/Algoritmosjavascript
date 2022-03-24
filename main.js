//        TAREA EJERCICIOS
function OPERACIONES(){
    alert("ALGORITMO OPERACIONES MATEMATICAS");
    var a = 0;  
    var b = 0;
    
    a = parseInt(prompt("POR FAVOR INGRESE UN VALOR NUMERICO PARA HACER LA OPERACIÓN"));
    b = parseInt(prompt("POR FAVOR INGRESE OTRO VALOR NUMERICO PARA HACER LA OPERACIÓN"));
    
    resultadosuma = a + b;
    resultadoresta = a - b;
    resultadomulti = a*b;
    resultadodivision = a / b;

    alert("EL RESULTADO ES DE LA SUMA ES:  " + resultadosuma);
    alert("EL RESULTADO ES DE LA RESTA ES:  " + resultadoresta);
    alert("EL RESULTADO ES DE LA MULTIPLICACIÓN ES:  " + resultadomulti);
    alert("EL RESULTADO ES DE LA DIVISIÓN ES:  " + resultadodivision);
}

function MAYORQUE(){
    alert("ALGORITMO MAYOR QUE");
    var a = 0;
    var b = 0;
    
    a = parseInt(prompt("POR FAVOR INGRESE UN VALOR NUMERICO"));
    b = parseInt(prompt("POR FAVOR INGRESE OTRO VALOR NUMERICO"));

    if(a > b){
    alert(a + " ES EL NUMERO MAYOR ");
    }
    else {
    alert(b + " ES EL NUMERO MAYOR " + a);   
    }
}

function MENORQUE(){
    alert("ALGORITMO MENOR QUE");
    var a = 0;
    var b = 0;
    var c = 0;

    a = parseInt(prompt("POR FAVOR INGRESE EL UN VALOR NUMERICO"));
    b = parseInt(prompt("POR FAVOR INGRESE EL UN SEGUNDO VALOR NUMERICO"));
    c = parseInt(prompt("POR FAVOR INGRESE EL UN TERCER VALOR NUMERICO"));

 if ((a<b) && (a<c)) {
   alert (" EL PRIMER VALOR " + a + " ES MENOR AL SEGUNDO: " + b + " Y AL TERCERO: " + c);
 }
 if ((b<a) && (b<c)){
 alert(" EL SEGUNDO VALOR " + b + " ES MENOR AL PRIMERO: " + a + " Y AL TERCERO: " + c);    
 }
 else {
 alert (" EL TERCER VALOR " + c + " ES MENOR AL PRIMERO: " + a + " Y AL SEGUNDO:  " + b);    
 }
}

function PAR_O_IMPAR(){
    alert("ALGORITMO PAR O IMPAR");
    var a = 0;
    
    a = parseInt(prompt("POR FAVOR INGRESE UN VALOR NUMERICO"));

    if (a%2==0){
alert ("EL NUMERO ES PAR");
    }
    else{
        alert ("EL NUMERO ES IMPAR")
    }
}

function CUADRADO(){
    alert("ALGORITMO CUADRADO DE UN NUMERO");
    var numero = 0;
    var elevado = 0;
    numero = parseInt(prompt("POR FAVOR INGRESE UN VALOR NUMERICO "));
    
    elevado = numero*numero

    alert("EL CUADRADO DEL VALOR QUE USTED INGRESO ES:  " + elevado);
}

function AREA(){
    alert("ALGORITMO AREA DE UN TRIANGULO");
    var h = 0;
    var b = 0;
    
    h = parseInt(prompt("POR FAVOR INGRESE LA ALTURA DE UN TRIANGULO IMAGINARIO"));
    b = parseInt(prompt("POR FAVOR INGRESE LA BASE DEL MISMO TRIANGULO"));
    
    result = b * h / 2

    alert("EL RESULTADO DEL AREA DEL TRIANGULO QUE USTED IMAGINO ES:  " + result);   
}

function CENTIMETROS(){
    alert("ALGORITMO METROS A CENTIMETROS");
    var metros = 0;
    var centimetros =0;

    metros = parseInt(prompt("POR FAVOR INGRESE UN LOS METROS QUE DESEA PASAR A CM"));

    centimetros = metros * 100

    alert("EL RESULTADO ES:  " + centimetros + "cm");
}

function EDAD() {
    alert("ALGORITMO SABER LA EDAD");
    var Edad = 0;
    var Tiempo = 0;

    edad = parseInt(prompt("POR FAVOR INGRESE SU EDAD"));

    Tiempo = 2022 - edad

    alert("USTED NACIO EN EL AÑO: " + Tiempo)
}

function BANCO(){
    alert("ALGORITMO INVERSION EN UN BANCO");
    var inversion = 0;
    var ganancias = 0;
    var años = 0;
    var interes_anual = 0;

    inversion = parseFloat(prompt("POR FAVOR INGRESE EL TOTAL DE SU INVERSIÓN "));
    años = parseInt(prompt("POR FAVOR INGRESE LOS AÑOS POR LOS CUALES DESEA INVERTIR "));

    interes_anual = 0.017 * 12/100

    ganancias = (inversion * interes_anual) * años

    ganancias = inversion + ganancias

    alert("EL DINERO QUE USTED GANARA ES: " + ganancias)
}

function COLEGIO_ABC(){
    alert("ALGORITMO PROMEDIO DE ALUMNO");
    var nota1 = 0;
    var nota2 = 0;
    var nota3 = 0;
    var nota4 = 0;
    var nota5 = 0;
    var promedio = 0;
    nota1 = parseInt(prompt("POR FAVOR INGRESE LA PRIMERA NOTA"));
    nota2 = parseInt(prompt("POR FAVOR INGRESE LA SEGUNDA NOTA"));
    nota3 = parseInt(prompt("POR FAVOR INGRESE LA TERCERA NOTA"));
    nota4 = parseInt(prompt("POR FAVOR INGRESE LA CUARTA NOTA"));
    nota5 = parseInt(prompt("POR FAVOR INGRESE LA QUINTA NOTA"));
    promedio = nota1 + nota2 + nota3 + nota4 + nota5 / 5;

    if (promedio>=3){
        alert("El ALUMNO HA APROBADO, SU PROMEDIO ES : " +promedio)
    }
    else {
        alert("EL ALUMNO HA REPROBADO, SU PROMEDIO ES : " + promedio)
    }
   }

function FRUTERIA(){
    alert("ALGORITMO DESCUENTO DE FRUTERIA");
    var kg = 0;
    var total1 = 0;
    var total2 = 0;
    var porcentaje = 0;

    kg = parseInt(prompt("POR FAVOR INGRESE LOS KILOGRAMOS QUE COMPRO"));
    total1 = 4.500 * kg

    if(kg<=2){
    alert("NO TIENE DESCUENTO SU TOTAL ES DE: " + total1)
    }

   if ((kg>=3)&& (kg<=5)){
       porcentaje = total1 * 10/100
       total2 = total1 - porcentaje
       alert("SU TOTAL A PAGAR ES: " + total2)
       alert("SU DESCUENTO ES DEL 10%")
   }

   if ((kg>=6) && (kg<=10)){
       porcentaje = total1 * 15/100
       total2 = total1 - porcentaje
       alert("SU TOTAL A PAGAR ES: " + total2)
       alert("SU DESCUENTO ES DEL 15%")
   }

   if (kg>=11){
    porcentaje = total1 * 20/100
       total2 = total1 - porcentaje
       alert("SU TOTAL A PAGAR ES: " + total2)
       alert("SU DESCUENTO ES DEL 20%")   
   }
}
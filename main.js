var display = document.getElementById("display");
var listaNumero = "", operacion = "";
var numero1 = 0, numero2 = 0 , respuesta = 0;
var selectOperacion = false, isClean = true;

function press(numero)
{ 
    if(isClean == true)
    {
        
        listaNumero += numero;

        if(listaNumero.length == 11)
        {
            display.innerText = listaNumero+"...";
        }
        else
        {
            if(listaNumero.length < 11)
            {
                display.innerText = listaNumero;
            }
        }

        if(selectOperacion == true)
        {
            numero2 = parseFloat(listaNumero)
        }
        else
        {
            numero1 = parseFloat(listaNumero)
        }
    }
    else
    {
        let aumento = Aumentar(numero);
        display.innerText = aumento;
    } 
}

function clr()
{
    display.innerText = 0;
    isClean = true;
    respuesta = 0;
    listaNumero = "";
    selectOperacion = false;
}

function setOP(operador)
{
    operacion = operador
    selectOperacion = true;
    listaNumero = "";
}

function calculate()
{
    switch (operacion)
    {
        case "+":
            respuesta = numero1+numero2;
            break;
        case "-":
            respuesta = numero1-numero2;
            break;
        case "*":
            respuesta = numero1*numero2;
            break;
        case "/":
            respuesta = numero1/numero2;
            break;
    }

    let longRespuesta = respuesta+"";
    let  respuestaCorta = "";

    if(longRespuesta.length>12)
    {
        for(let i = 0; i < 12 ; i++)
        {
            respuestaCorta += longRespuesta.charAt(i)
        }

        display.innerText = respuestaCorta+"...";
    }
    else
    {
        display.innerText = respuesta;
    }

    selectOperacion = false;
    isClean = false;
}

function Aumentar(num2)
{
    respuesta = respuesta+parseFloat(num2);
    return respuesta;
}
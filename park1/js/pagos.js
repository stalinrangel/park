$(document).ready(function(){
    console.log('e')
    //window.onload = function () {
      
        let fecha=localStorage.getItem('fecha');
        document.getElementById("fecha").innerHTML=fecha;
        let hora=localStorage.getItem('hora');
        document.getElementById("hora").innerHTML=hora;
        let adulto=localStorage.getItem('adulto');
        document.getElementById("adulto").innerHTML=adulto + ' Adult';
        let reducido=localStorage.getItem('reducido');
        document.getElementById("reducido").innerHTML=reducido + ' Reduced';
        let nino=localStorage.getItem('nino');
        document.getElementById("nino").innerHTML=nino + ' Child';
        let total=localStorage.getItem('total');
        document.getElementById("total").innerHTML=total;
    //}
});
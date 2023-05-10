$(document).ready(function(){
  
  
window.onload = function () {

  const btnSubmit = document.getElementById("btnSubmit");
  const total1 = document.getElementById("total1");
  const total2 = document.getElementById("total2");
  let select = document.getElementById("time-select");

  
  select.onclick = function ( e ) {
    console.log(e.target.value)
    
  };

  var calcular = function(){
    if (datepicker.value && select.value && inputRoom.value && inputAdult.value && inputChildren.value) {
      
      let costo=parseInt(inputRoom.value)*14+parseInt(inputAdult.value)*11+parseInt(inputChildren.value);
      console.log(costo)
      if (costo>0) {
        
        total1.style.visibility="visible";
        total2.style.visibility="visible";
        document.getElementById("total2").innerHTML=costo+"€";
        localStorage.setItem('total',costo+"€");
      }else{
        total1.style.visibility="hidden";
        total2.style.visibility="hidden";
      }
      

    }
  }
  
  btnSubmit.onclick = function () {
    console.log('btnSubmit');
    console.log(datepicker.value);//fecha
    console.log(select.value);//hora
    console.log(inputRoom.value);//adulto
    console.log(inputAdult.value);//reducido
    console.log(inputChildren.value);//niño

    localStorage.setItem('fecha',datepicker.value);
    localStorage.setItem('hora',select.value);
    localStorage.setItem('adulto',inputRoom.value);
    localStorage.setItem('reducido',inputAdult.value);
    localStorage.setItem('nino',inputChildren.value);
    if (costo>0) {
      window.location.href = "pagos.html";
    }
    
  }

  
  var loadSelect = function(date){
    //select.remove();
    select.options.length = 0;
    
    const fecha = new Date(date);
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = now.getMonth()+1;
    const dd = now.getDay();
    
    // Round the minutes up to the nearest 30
    const minutes = now.getMinutes();
    const roundedMinutes = Math.ceil(minutes / 30) * 30;

    // Set the current time to the rounded time
    now.setMinutes(roundedMinutes);
    now.setSeconds(0);
    now.setMilliseconds(0);

    // Add options to the select element every 30 minutes
    
    //
    setTimeout(() => {
      if (fecha.getDate()!=now.getDate()) {
        for (let i = 0; i < 48; i++) {

          const optionTime = new Date(now.getTime() + i * 30 * 60 * 1000);
          const optionText = optionTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const optionValue = optionTime.toISOString();
          //console.log(optionValue)
          const option = new Option(optionText, optionText);
          let arreglo = optionText.split(":");
          //console.log(arreglo[0])
          if ((arreglo[0]!='00'&&arreglo[0]!='01'&&arreglo[0]!='02'&&arreglo[0]!='03'&&arreglo[0]!='04'&&arreglo[0]!='05'&&arreglo[0]!='06')&&arreglo[0]<20) {
            
            select.add(option);
            
          }
          if (arreglo[0]=='00') {
          // break;
          }  
        }
      }else{
        for (let i = 0; i < 24; i++) {
          const optionTime = new Date(now.getTime() + i * 30 * 60 * 1000);
          const optionText = optionTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const optionValue = optionTime.toISOString();
          const option = new Option(optionText, optionValue);
          let arreglo = optionText.split(":");
          //console.log(arreglo[0])
          if (arreglo[0]<20) {
            select.add(option);
            
          }
          if (arreglo[0]==22) {
            break;
          }  
        }
      }
    }, 200);
  }


    //setTimeout(() => {
      
   // }, 1000);
  
  

  /*var elem = document.getElementById( 'test' );
  
  elem.onclick = function ( e ) {
    //console.log(e.target.value)
      if ( e.target.value == 'English' ) {
          console.log( 'English' );
          loadLang('en');
      }
      if ( e.target.value == 'Español' ) {
        console.log( 'Español' );
        loadLang('es');
    
      }
      if ( e.target.value == 'Français' ) {
        console.log( 'Français' );
        loadLang('fr');
      }
      if ( e.target.value == 'Italiano' ) {
        console.log( 'Italiano' );
        loadLang('it');
      }
  };*/

  const datepicker = document.getElementById("datepicker");

  datepicker.addEventListener("change", function() {
    const selectedDate = datepicker.value;
    console.log("Fecha seleccionada:", selectedDate);
    loadSelect(selectedDate);
    calcular();
  });
  select.addEventListener("change", function(e) {
    console.log('select')
    calcular();
  });
  inputRoom.addEventListener("change", function(e) {
    console.log('inputRoom')
    calcular();
    numero();
  });
  inputAdult.addEventListener("change", function(e) {
    console.log('inputAdult')
    calcular();
    numero();
  });
  inputChildren.addEventListener("change", function(e) {
    console.log('inputChildren')
    calcular();
    numero();
  });

  var numero = function(lang){
    let n=parseInt(inputRoom.value)+parseInt(inputAdult.value)+parseInt(inputChildren.value);
    console.log(n);
    if (n>9) {
      alert('The maximum number of entries must be between 1 and 9.')
      inputRoom.value=0;
      inputAdult.value=0
      inputChildren.value=0;
    }
  };
  
  var eng = document.getElementById( 'eng' );
  var esp = document.getElementById( 'esp' );
  var fra = document.getElementById( 'fra' );
  var ita = document.getElementById( 'ita' );
  var img = document.getElementById("myImage");
  var idio = document.getElementById( 'idio' );
  var paises = document.getElementById( 'paises' );
  var abrir = document.getElementById('abrir');

  abrir.onmouseover = function() {abrir()}
  abrir.onmouseout = function() {cerrar()}

  idio.onclick = function () {
    //myImage.style.display = "none";
    //idio.style.display = "none";
    //paises.style.display = "block";
    myImage.style.visibility= "hidden";
      idio.style.visibility= "hidden";
      paises.style.visibility= "visible";
  }
  var abrir = function(lang){
    myImage.style.visibility= "hidden";
      idio.style.visibility= "hidden";
      paises.style.visibility= "visible";
  }
  var cerrar = function(lang){
    /*myImage.style.display = "block";
      idio.style.display = "block";
      paises.style.display = "none";*/
      myImage.style.visibility= "visible";
      idio.style.visibility= "visible";
      paises.style.visibility= "hidden";
    }

  eng.onclick = function () {
    console.log('eng');
    document.getElementById("idio").innerHTML = " English";
    loadLang('en');
    img.setAttribute("src", "img/en.png");
    cerrar();
  }
  esp.onclick = function () {
    console.log('esp');
    document.getElementById("idio").innerHTML = " Español";
    img.setAttribute("src", "img/es.png");
    loadLang('es');
    cerrar();
  }
  fra.onclick = function () {
    console.log('fra');
    document.getElementById("idio").innerHTML = " Français";
    img.setAttribute("src", "img/fr.png");
    loadLang('fr');
    cerrar();
  }
  ita.onclick = function () {
    console.log('ita');
    document.getElementById("idio").innerHTML = " Italiano";
    img.setAttribute("src", "img/it.png");
    loadLang('it');
    cerrar();
  }
  
  var loadLang = function(lang){
    console.log(lang)
    var processLang = function(data){
      var arr = data.split('\n');
      for(var i in arr){
        if( lineValid(arr[i]) ){
          var obj = arr[i].split('=>');
          assignText(obj[0], obj[1]);
        }
      }
    };

  var setSelectedValue = function(val) {
    var selectElement = document.getElementById("test");
    selectElement.value = val;
    console.log(val)
  }

  var selector = '#translate';
  $(selector).on('click', function(e){

    e.preventDefault();
    startLang( $(this) );
  });
  var startLang = function(el){
    
    var el = $(el);
    var text = el.attr('data-text');
    var file = el.attr('data-file');
    console.log(file)
    file = file.split(',');
    text = text.split(',');
    var index = el.attr('data-index');
    if(index >= file.length){
      index = 0;
    }
    changeName(el, text[index]);
    changeIndex(el, index);
    loadLang(file[index]);
    $('html').attr('lang', file[index]);
  };

  var changeName = function(el, name){
    console.log(el,name)
    $(el).html( name );
  };

  var changeIndex = function(el, index){
    console.log(el,index)
    $(el).attr('data-index', ++index);
  };

  
    var assignText = function(key, value){
      $('[data-lang="'+key+'"]').each(function(){
        var attr = $(this).attr('data-destine');
        if(typeof attr !== 'undefined'){
          $(this).attr(attr, value);
        }else{
          $(this).html(value);
        }
      });
    };
    var lineValid = function(line){
      return (line.trim().length > 0);
    };
    $('.loading-lang').addClass('show');
    $.ajax({
      url: 'lang/'+lang+'.txt',
      error:function(){
        alert('No se cargó traducción');
      },
      success: function(data){
        $('.loading-lang').removeClass('show');
        processLang(data);
      }
    });
  };

  //setTimeout(() => {
    
      var ln = navigator.language || navigator.userLanguage;
      /*Validar que no se encuentre en la pagina correspondiente a su idioma*/
      let pagActual = window.location.pathname;
      
      //console.log(ln)
      if (ln == 'en-EN') {
        console.log('en')
        loadLang('en');
        //setSelectedValue("English");
        document.getElementById("idio").innerHTML = " English";
        img.setAttribute("src", "img/en.png");
      } else if (ln == 'es-ES') {
        console.log('es')
        loadLang('es');
        //setSelectedValue("Español");
        document.getElementById("idio").innerHTML = " Español";
        img.setAttribute("src", "img/es.png");
      } else if (ln == 'it-IT'){
        console.log('it')
        loadLang('it');
        //setSelectedValue("Français");
        document.getElementById("idio").innerHTML = " Français";
        img.setAttribute("src", "img/fr.png");
      }else if (ln == 'fr-FR'){
        console.log('fr')
        loadLang('fr');
        //setSelectedValue("Italiano");
        document.getElementById("idio").innerHTML = " Italiano";
        img.setAttribute("src", "img/it.png");
      } else{
        //alert("Otro idioma");
        console.log('es')
        loadLang('es');
        //setSelectedValue("Español");
        document.getElementById("idio").innerHTML = " Español";
        img.setAttribute("src", "img/es.png");
      }
  //}, 3000);
}
  
});
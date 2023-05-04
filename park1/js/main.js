$(document).ready(function(){
  
  
window.onload = function () {
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
$(function () {
    //adatok beolvas
    const termekek = [];
    
    getAjax("termekek.json", termekek, kiir);
  
  

  //feliratkozun az eseménykezelore
  $(window).on("torles", (event) => {
    //itt a kosarba teszem event.detail
    kosar.setKosar(event.detail);
  });

//feliratkozun az eseménykezelore
$(window).on("modositas", (event) => {
    //itt a kosarba teszem event.detail
    kosar.setKosar(event.detail);
  });



  
    function getAjax(fajlnev, tomb, myCallback) {
      $.ajax({
        url: fajlnev,
        type: "GET",
        success: function (result) {
          result.termek.forEach((element) => {
            tomb.push(element);
          });
          myCallback(tomb);
          console.log(tomb);
        },
      });
    }
    function kiir(tomb) {
      const szuloelem = $(".termekek");
      const sablonelem = $(".termek");
  
      tomb.forEach(function (tombelem) {
        let ujelem = sablonelem.clone().appendTo(szuloelem);
        let ujobj = new TermekAdmin(ujelem, tombelem);
      });
      sablonelem.remove();
    }
  });
  
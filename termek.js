class Termek {
  constructor(elem, adat) {
    this.elem = elem;
    this.adat = adat;
    //az elemunk ,inden egyes html tagja készitunk  egy mutatot
    this.cimElem = this.elem.children(".termeknev");
    
    this.leirasElem = this.elem.children(".leiras");
    this.arElem = this.elem.children(".ar");
   
    

  }
  setAdat(ertek) {
    this.cimElem.html(ertek.nev);
    this.kepElem.attr("src", ertek.kep);
    this.leirasElem.html(ertek.leiras);
    this.arElem.html(ertek.ar);
  }
  
}

class TermekVasarlo extends Termek{
    constructor(elem, adat) {
        super(elem,adat);
        this.kepElem = this.elem.children(".kep");
        this.setAdat(this.adat);
        this.kosarbaElem = this.elem.children(".kosarba");
    this.kosarbaElem.on("click", () => {
        this.kattintasTriger();
        
  
      });
     
    }
    kattintasTriger() {
        let esemeny = new CustomEvent("kosarba", {
          detail: this.adat,
        });
        window.dispatchEvent(esemeny);
      }
}
class TermekAdmin extends Termek{
    constructor(elem, adat) {
        super(elem,adat);
        this.kepElem = this.elem.children(".kep").children("img");
        this.setAdat(this.adat);
        this.torlesElem = this.elem.children("td").children(".torol");
        this.modositElem = this.elem.children("td").children(".modosit");
        this.torlesElem.on("click", () => {
        this.torolTriger();

      });
      this.modositElem.on("click", () => {
        this.modositTriger();

      });
      
    }
    torolTriger() {
        let esemeny = new CustomEvent("torles", {
          detail: this.adat,
        });
        window.dispatchEvent(esemeny);
      }
      modositTriger() {
        let esemeny = new CustomEvent("modositas", {
          detail: this.adat,
        });
        window.dispatchEvent(esemeny);
      }
}

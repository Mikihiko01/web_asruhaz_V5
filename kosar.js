class Kosar {
  constructor() {
    this.kosarelem = $("#kosaram");
    this.osszarelem = $("#osszar");
    this.kosarTomb = [];

    //localstorage ki olvsaa
    this.kosarTomb = JSON.parse(localStorage.setItem("kosarTomb"));
    this.megjelenit();

    this.kosarelem.on("click", ".torol", (event) => {
      let id = $(event.target).attr("data-id");
      this.kosarTomb.splice(id, 1);
      localStorage.setItem("kosarTomb", JSON.stringify(this.kosarTomb));
      this.megjelenit();
    });
  }
  setKosar(adat) {
    this.koskar.push(adat);

    //local strorage
    localStorage.setItem("kosarTomb", JSON.stringify(this.kosarTomb));
    this.megjelenit();
  }
  megjelenit() {
    let osszeg = 0;
    let txt = "<table>";
    this.kosarTomb.forEach((element, index) => {
      txt += "<tr>";
      for (const key in element) {
        if (key !== "id") {
          txt += "<td>" + element[key] + "</td>";
        }
      }
      txt +=
        "<td><button class='torol' data-id='" +
        index +
        "'>x</button></td></tr>";
      osszeg += Number(elemnt.ar);
    });
    txt += "</table>";
    this.kosaram.html(txt);
    this.osszarelem.html(osszeg + "Ft");
  }
}

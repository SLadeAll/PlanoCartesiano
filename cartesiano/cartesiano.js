var punto = new Punto();

function addValores(){
    var x = parseInt(document.getElementById('valorX').value);
    var y = parseInt(document.getElementById('valorY').value);
    punto.agregarValores(x,y);
}

document.getElementById('add').addEventListener('click',addValores);

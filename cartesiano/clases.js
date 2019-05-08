class Punto{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.distancia = null;
    }
    agregarValores(x, y){
        var equis = [];
        var iGriega = [];
        if(x == null){
            x = 0;
        }
        if(y== null){
            y = 0;
        }
        equis.push(x);
        iGriega.push(y);
        this.x = equis;
        this.y = iGriega;
        var d = distanciaTot(equis,iGriega);
        console.log(d);
    }
    distanciaTot(x,y){
        var valX = x;
        var valY = y;
        var i = valX.length;
        var distancia = [];
        if(i == 1){
            this.distancia = distancia.push(0);
            return distancia.push(0);
        }
        else{
            let res = (valX[i]+valX[i-1])+(valY[i]+valY[i-1]);
            distancia.push( Math.pow(res,0.5));
            this.distancia = distancia;
            return distancia;
        }
    }
}
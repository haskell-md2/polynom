// Ваша формула
let y = x => ((x**4)*arr[0] + (x**3)*arr[1] + (x**2)*arr[2] + arr[3]*x + arr[4]);
let scale = 25;
let step = 1;
let cnvs = document.querySelector('canvas');
let ctx = cnvs.getContext('2d');



function polyline(color, pts) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    pts.forEach((p, i) => i ? ctx.lineTo(...p) : ctx.moveTo(...p));
    ctx.stroke();
 }


function init(){

    ctx.clearRect(0,0,cnvs.width,cnvs.height);

    ctx.lineWidth = 0.5;

    for (let i = step*scale; i < cnvs.width; i += step*scale) { //вертикальные
      polyline('#7a7979', [[i, 0], [i, cnvs.height]]);
    }
    
    for (let i = step*scale; i < cnvs.height; i += step*scale) { //Горизонтальные
      polyline('#7a7979', [[0, i], [cnvs.width, i]]);
    }
    
    
    ctx.lineWidth = 2;


    //Ось X 
    polyline('black', [[0, cnvs.height / 2], [cnvs.width, cnvs.height / 2]]);

    // ось Y
    polyline('black', [[cnvs.width / 2, 0], [cnvs.width / 2, cnvs.height]]);
}

function up(){
    init();
    let inp = document.getElementsByClassName("in");
    arr = [inp[0].value,inp[1].value,inp[2].value,inp[3].value,inp[4].value];
    let pts = [];
    for(let x = -cnvs.width/2; x<cnvs.width/2; x+=5) {
        pts.push([cnvs.width/2+x, cnvs.height/2 - y(x/scale)*scale]);
    }
    polyline('blue', pts);

}

init();
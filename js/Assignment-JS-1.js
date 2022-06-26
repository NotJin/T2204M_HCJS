var p = 10;
var s = 60;
var clk = setInterval(function (){
    if (p>0){
        if (s === 0){
            p -= 1;
            s = 60;
        }
        s--;
        console.log(p);
        console.log(s);
    }
    if (p == 0 && s == 0){
        clearInterval(clk)
    }
    document.getElementById("p").innerText = p.toString();
    document.getElementById("s").innerText = s.toString();
},1000);
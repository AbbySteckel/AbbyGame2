red = ["#FEF1F2","#FAD2D4","#F5A4A8","#F1767C","#EC4850","#E82A32","#D91720","#BA141B","#9C1017","#7D0D12","#6E0C10","#4F080C"];
green = [];
blue = [];
selected = 0;

//color sort
//function to change hex to denary
//squares swap places when clicked
//check for ascending array after each swap

$(document).ready(function(){

    $("#start").click(function(){
        displayColors(red);
    });
    $("div").click(function (){
        selected++;
        $(".selected").removeClass('selected');
        $(this).addClass('selected');
        swapColors();
    });
    $("#check").click(function(){
       checkSort();
    });

});

function displayColors(arr){
    var colorsUsed = [];
    var i=0;
    while (colorsUsed.length<9){
        var color = arr[Math.floor(Math.random()*arr.length)];
        if(colorsUsed.indexOf(color)==-1){
            colorsUsed.push(color);
        }
    }
    for(var j=0; j<9; j++){
        $("#"+j).css("background-color",colorsUsed[j]);
    }
}

function swapColors(){
    if(selected==1){
        color1=$(".selected").css("background-color");
        console.log(color1);
        div1=$(".selected").attr("id");
        console.log(div1)
        //get background color $(this).get
    }
    if(selected==2){
        color2=$('.selected').css("background-color");
        div2=$('.selected').attr("id");
        console.log(color2);
        console.log(div2);
        $("#"+div1).css("background-color",color2);
        $("#"+div2).css("background-color",color1);
        color1="";
        color2="";
        div1="";
        div2="";
        selected=0;
        $('.selected').removeClass('selected');
    }


    //highlight selected colors on click
    //get RGB val on click
    //swap RGB vals
}

function checkSort(){
    for(var i=0; i<8; i++){
        var j=i+1;
        var prev=getR("#"+i);
        var next=getR("#"+j);
        if(prev>next){
            $("#verif").text('wrong order, try again');

        }
        if(prev>next&&i==7){
            $("#verif").text('good job');
        }
    }
}

function getR(id){
    var rgb=$(id).css("background-color");
    console.log(rgb);
    var r=parseInt(rgb.substring(4,7));
    console.log(r);
    return r;
}






//inefficient hex to decimal conversion
function hexToDen1(hex) {
    var n1 = hex.substring(1, 2);
    console.log(n1);
    var n2 = hex.substring(2, 3);
    var den = 0;
    den += hexToDen2(n1);
    den+=hexToDen2(n2);
    return den;
}

function hexToDen2(hex) {
    var den=0;
    if(hex>=0 && hex<10){
        den+=parseInt(hex);
    }
    if(hex=="A"){
        den+=10;
    }
    if(hex=="B"){
        den+=11;
    }
    if(hex=="C"){
        den+=12;
    }
    if(hex=="D"){
        den+=13;
    }
    if(hex=="E"){
        den+=14;
    }
    if(hex=="F"){
        den+=15;
    }
    return den;
}
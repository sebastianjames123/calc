var operation=0;
function btnclick(num) {

    if ((num=="+")||(num=="-")) {
        if (operation==0) {
            operation=1;
            document.getElementById("svalue").value+=num
        }else{   
        var res=document.getElementById("svalue").value;
        document.getElementById("svalue").value=eval(res)
        document.getElementById("svalue").value+=num
        }
    }else{
        document.getElementById("svalue").value+=num
    }

}
function resulteq() {
    var res=document.getElementById("svalue").value;
    document.getElementById("svalue").value=eval(res)

}
function clearscr() {
    document.getElementById("svalue").value=""
}

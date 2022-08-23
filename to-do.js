function fire() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("xyx").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("xyx").value = "";




    var span = document.createElement("button");
    var txt1 = document.createTextNode("\u00D7");
    span.className = "close1"; // giving class name to buttons
    span.appendChild(txt1);
    li.appendChild(span);

    try {
        var close = document.getElementsByClassName("close1");
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                // div.style.display = "none";
                div.remove(); //deleting the nth element of(li)
            }
        }
    }
    catch (e) {
        alert(e);
    }
}

// ======================================================================================================







// -------------------------------------------------------------------------------------------------------
function boom() {
    var lim = document.createElement("li");
    var txt = document.getElementById("1").value;
    var t1 = document.createTextNode(txt);


    lim.append(t1);


    // if (txt === "") {
    //     alert("please input value");
    // }
    // else {
        document.getElementById("3").appendChild(lim);
    // }
    document.getElementById("1").value = "";




    try {
        var nan = document.createElement("button");
        var txt = document.createTextNode("CLOSE");
        nan.className = "xoxo";
        nan.appendChild(txt);
        lim.appendChild(nan);
        
        var cloose =document.getElementsByClassName("xoxo");
        
        for( y=0;y<cloose.length;y++)
        {
            cloose[y].onclick=function()
            {
                this.parentElement.remove();
            }
        }
    }
    catch (e) {
        alert(e);
    }

try{

    function success() {
        if(document.getElementById("1").value==="") { 
               document.getElementById('2').disabled = true; 
           } else { 
               document.getElementById('2').disabled = false;
           }
       }
    }
    catch(m)
    {
        alert(m);
    }
}
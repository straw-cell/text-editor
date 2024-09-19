var part= document.getElementById("last")




function underline(){
    if(part.style.textDecoration=="underline"){
        part.style.textDecoration="none";
        document.getElementById("btntwo").style.background="white";
        document.getElementById("btntwo").style.color="black";
      
        
    }
    else{
        part.style.textDecoration="underline";
        document.getElementById("btntwo").style.background=" #0056e0";
        document.getElementById("btntwo").style.color="white";
    }
    
}

function bold(){
    if(part.style.fontWeight=="900"){
        part.style.fontWeight="100";
        document.getElementById("btnone").style.background="white";
        document.getElementById("btnone").style.color="black";
    }
    else{
        part.style.fontWeight="900";
        document.getElementById("btnone").style.background=" #0056e0";
        document.getElementById("btnone").style.color="white";
    }
    

    }

function italic(){
    if(part.style.fontStyle=="italic"){
        part.style.fontStyle="normal";
        document.getElementById("btnthree").style.background="white";
        document.getElementById("btnthree").style.color="black";

    }
    else{
        part.style.fontStyle="italic";
        document.getElementById("btnthree").style.background=" #0056e0";
        document.getElementById("btnthree").style.color="white";

    }
}

function fontsize(){
   var size=document.getElementById("font-size").value
   part.style.fontSize=size
}

var upper=document.getElementsBy("uppercase")


function uppercase(){
    if(part.style.textTransform=="uppercase"){
        part.style.textTransform="lowercase";
        document.getElementById("uppercase").style.background="white";
        document.getElementById("uppercase").style.color="black";
 
    }
    else{
        part.style.textTransform="uppercase";
        document.getElementById("uppercase").style.background=" #0056e0";
        document.getElementById("uppercase").style.color="white";


    }

    
}
function pick(){
    var color=document.getElementById("pick").value;
    console.log(color);
    part.style.color=color
}

function rightalign(){
    if(part.style.textAlign=="right"){
       part.style.textAlign="left";
       document.getElementById("right").style.background="white";
       document.getElementById("right").style.color="black";
    }
    else{
        part.style.textAlign="right";
        document.getElementById("right").style.background=" #0056e0";
        document.getElementById("right").style.color="white";
    }  
}

function centeralign(){
    if(part.style.textAlign=="center"){
       part.style.textAlign="left";
       document.getElementById("center").style.background="white";
       document.getElementById("center").style.color="black";
    }
    else{
        part.style.textAlign="center";
        document.getElementById("center").style.background=" #0056e0";
        document.getElementById("center").style.color="white";
    }  
}



function menu(){
   var a = document.getElementById('menu');
   if(a.style.display === "block"){
    a.style.display = "none";
   }
   else{
    a.style.display = "block";
   }
}
function comp(){
    document.getElementById('Components').scrollIntoView({behavior: "smooth"});
}
function Arch(){
    document.getElementById('Arch').scrollIntoView({behavior: "smooth"});
}
function Home(){
    document.getElementById('Home').scrollIntoView({behavior: "smooth"});
}
function About(){
    document.getElementById('Abt').scrollIntoView({behavior: "smooth"});
}
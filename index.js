let subMenu= document.getElementById("subMenu");

  function toggleMenu()
  {
    subMenu.classList.toggle("open-menu");

  }


let subMenu2= document.getElementById("subMenu2");

  function toggleMenu2()
  {
    subMenu2.classList.toggle("open-menu");
    
  } 




type="text/javascript"
var i=0,text;
text="Maria's House Cleaning"

function typing()
{
  if (i<text.length)
  {
    docuument.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,50);
  }
}
typing();
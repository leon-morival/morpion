function changeImg(id, turn)
{
    forme=document.getElementById(id).getAttribute("forme");
    circle="fa-regular fa-circle";
    cross="fa-solid fa-x";

    if(forme==""){
        if(turn==0){
            document.getElementById(id).className=circle;
            document.getElementById(id).setAttribute("forme", "circle");
        }else{
            document.getElementById(id).className=cross;
            document.getElementById(id).setAttribute("forme","cross");
        }
    }
}
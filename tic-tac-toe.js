window.onload = function(){
    var divsquare = document.querySelectorAll("#board > div");
    var statusbar = document.getElementById("status");
    var newgame = document.querySelector(".btn");

    var cplayer = true;
    var playerX = "X";
    var playerO = "O";
    var wincon = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    divsquare.forEach((element) =>{
        element.classList.add("square");
        element.innerHTML = "";

        element.addEventListener("click", function(){
            if ((cplayer == true) && (element.innerHTML == "")){
                element.innerHTML = playerX;
                element.classList.add("X");
                cplayer = false;
            }
            else if ((cplayer == false) && (element.innerHTML =="")){
                element.innerHTML = playerO;
                element.classList.add("O");
                cplayer = true;
            }

        });

        element.onmouseover = (event) =>{
            element.style.transition = "all .3s ease-in-out"
            element.classList.add("hover");
        }

        element.onmouseout = (event) =>{
            element.classList.remove("hover");
        }

    });
}
const player = document.getElementById("player");
player.textContent = "Player 1's move";
const game = document.getElementById("gameResult");
function move(id){
    if(document.getElementById(id).style.backgroundImage == "" && game.textContent == ""){
        if(player.textContent == "Player 1's move"){
            document.getElementById(id).style.backgroundImage = "url('https://img.icons8.com/carbon-copy/2x/ksi.png')";
            document.getElementById(id).style.backgroundSize = "40px 40px"
            if((document.getElementById(1).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(2).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(3).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")") || (document.getElementById(4).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(5).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(6).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")")||(document.getElementById(7).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(8).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(9).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")") || (document.getElementById(1).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(4).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(7).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")") || (document.getElementById(2).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(5).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(8).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")") ||(document.getElementById(3).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(6).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(9).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")") || (document.getElementById(1).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(5).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(9).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")") || (document.getElementById(3).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(5).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")" && document.getElementById(7).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/ksi.png\")")){
                game.textContent = "Congratulations! Player1 wins";
                alert("Congratulations! Player1 wins")
                player.textContent = "";
            }
            else{
                let flag = false;
                for(let i = 1;i<10;i++){
                    if(document.getElementById(i).style.backgroundImage == ""){
                        flag = true;
                        break;
                    }
                }
                if(flag){
                    player.textContent = "Player 2's move";
                }
                else{
                    game.textContent = "Draw!";
                    alert("Draw!");
                    player.textContent = "";
                }
            }
        }
        else{
            document.getElementById(id).style.backgroundImage = "url('https://img.icons8.com/carbon-copy/2x/omicron.png')";
            document.getElementById(id).style.backgroundSize = "40px 40px"
            if((document.getElementById(1).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(2).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(3).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")") || (document.getElementById(4).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(5).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(6).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")")||(document.getElementById(7).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(8).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(9).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")") || (document.getElementById(1).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(4).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(7).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")") || (document.getElementById(2).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(5).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(8).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")") || (document.getElementById(3).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(6).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(9).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")") || (document.getElementById(1).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(5).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(9).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")") || (document.getElementById(3).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(5).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")" && document.getElementById(7).style.backgroundImage == "url(\"https://img.icons8.com/carbon-copy/2x/omicron.png\")")){
                game.textContent = "Congratulations! Player2 wins";
                alert("Congratulations! Player2 wins");
                player.textContent = "";
            }
            else{
                let flag = false;
                for(let i = 1;i<10;i++){
                    if(document.getElementById(i).style.backgroundImage == ""){
                        flag = true;
                        break;
                    }
                }
                if(flag){
                    player.textContent = "Player 1's move";
                }
                else{
                    game.textContent = "Draw!";
                    alert("Draw!");
                    player.textContent = "";
                }
            }
        }
    }
}
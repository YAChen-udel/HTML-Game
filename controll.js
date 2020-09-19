
function moveup(){
    myGamePiece.speedyY -= 1;
}
function movedown(){
    myGamePiece.speedyY += 1;
}
function moveleft(){
    myGamePiece.speedyX -= 1;
}
function moveright(){
    myGamePiece.speedyX += 1;
}
function clearmove(){
    myGamePiece.speedyX = 0;
    myGamePiece.speedyY = 0;
}
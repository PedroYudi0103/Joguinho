function movimentaNavaTeclado(tecla){
    ctxclearRect(x, 700-160, 160);
    if (tecla == 37){// Seta pra esquerda
        x -= 50;
        x = Math.max(0, x);
        } else if (tecla == 39) { // Seta pra direita
        x += 50;
        x = Math.min(canvas.width - 160, x);
        } else if (tecla == 32) // Espaço
        disparaTiro(x+80, 700-160);
    }
ctx.drawimage(nave, x, 700-160);
function disparaTiro(col, lin) {
    if(lin > -6) {
        ctx.clearRect(col, lin, 2, 5);
        ctx.fillRect(col, lin-6, 2, 5);
        }
    setTimeout(function(){ disparaTiro(col, lin-6)}, 1);
    }
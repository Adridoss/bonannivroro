const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;

canvas.addEventListener('mousedown', () => {
    isDrawing = true;
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.beginPath();
    checkIfScratchedEnough();
});

canvas.addEventListener('mousemove', draw);

ctx.fillStyle = '#333'; // Couleur de recouvrement à "gratter"
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.lineWidth = 20; // Largeur du "grattage"

function draw(event) {
    if (!isDrawing) return;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round';
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

function checkIfScratchedEnough() {
    // Implementez la vérification pour voir si assez de la surface a été grattée
    // Si c'est le cas, affichez les feux d'artifice et le message
}

// Ajoutez le code pour les feux d'artifice si nécessaire

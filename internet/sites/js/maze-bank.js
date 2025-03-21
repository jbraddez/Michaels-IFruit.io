document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('body').style.background = '#f0f0f0'
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    const tileSize = 64;
    const gap = 5;
    const img = new Image();
    img.src = "/internet/maze-bank-small.png";
    let imgLoaded = false;

    img.onload = () => {
        imgLoaded = true;
        resizeCanvas(); 
    };

    const resizeCanvas = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        if (width >= 1000 && imgLoaded) {
            drawPattern(); 
        }
    };

    const drawPattern = () => {
        const cols = Math.ceil(canvas.width / (tileSize + gap));
        const rows = Math.ceil(canvas.height / (tileSize + gap));

        for (let y = 0; y < rows; y++) {
            for (let x = -1; x < cols; x++) { 
                const offsetX = (y % 2 === 0) ? 0 : (tileSize + gap) / 2;
                ctx.drawImage(img, x * (tileSize + gap) + offsetX, y * (tileSize + gap), tileSize, tileSize);
            }
        }
    };

    window.addEventListener("resize", resizeCanvas);
});
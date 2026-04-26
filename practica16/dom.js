function addImgs() {
    const perrosDiv = document.getElementById("#idPerros");
    const gatosDiv = document.getElementById("#idGatos");

    const perros = [
        "https://i.pinimg.com/236x/e4/1c/82/e41c8296fb6b2969ed8a11aa8cc9a367.jpg"
    ];

    const gatos = [
        "https://ih1.redbubble.net/image.4543478245.0824/st,small,507x507-pad,600x600,f8f8f8.u1.jpg"
    ];

    perros.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        perrosDiv.appendChild(img);
    });

    gatos.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        gatosDiv.appendChild(img);
    });
}

function toggleClass() {
    const imgs = document.querySelectorAll("img");

    imgs.forEach(img => {
        img.classList.toggle("roundImg");
    });
}
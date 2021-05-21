const imageURLs = ["puppy01.png", "puppy02.jpg", "puppy03.jpg", "puppy04.jpg", "puppy05.jpeg", "puppy06.jpg", "puppy07.jpg"];
const images = document.querySelector("#endless-images");
const infoPane = document.querySelector("#info-pane");
const paneImage = document.querySelector("#pane-img");
const closePane = document.querySelector("#close-pane");

function addImages(numOfImages) {
    for (let i = 0; i < numOfImages; i++) {
        let img = document.createElement("img");
        let randomIndex = Math.floor(Math.random() * imageURLs.length);

        img.classList.add("image");
        img.src = "images/" + imageURLs[randomIndex];

        images.appendChild(img);

    }
}

window.addEventListener("load", () => {
    addImages(100);
});

images.addEventListener("click", e => {
    console.log(e.target);

    if (e.target.classList.contains("image")) {
        infoPane.classList.remove("hidden");
        images.style.width = "75%";

        paneImage.src = e.target.src;

    }
});

closePane.addEventListener("click", () => {
    infoPane.classList.add("hidden");
    images.style.width = "100%";
});

window.addEventListener("scroll", e => {
    if ((window.scrollY + window.innerHeight) / document.body.scrollHeight > .9) {
        addImages(12);
    }

});
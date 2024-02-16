/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function expandNavigation() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* Rotate images in a single location */
function imageCarousel(id, images, interval = 5000) {
    let image = document.getElementById(id);
    let i = 0;

    let changeImage = function() {
        image.src = images[i].source;
        image.alt = images[i].description;
        i = (i + 1) % images.length;
    }

    changeImage();
    setInterval(changeImage, interval);
}
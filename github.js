let c = document.getElementById("my-canvas");
let ctx = c.getContext("2d");

let loadImage = (src, callBack) => {
    let img = document.createElement("img");
    img.onload = () => callBack(img);
    img.src = src;
};

let imagePath = (frameNumber) => {
    return "/" + frameNumber + ".png";
};

let loadImages = (callBack) => {
    let images = [];
    let imagesToLoad = 8;

    [1, 2, 3, 4, 5, 6, 7, 8].forEach((frameNumber) => {
        let path = imagePath(frameNumber);

        loadImage(path, (image) => {
            images[frameNumber - 1] = image;
            imagesToLoad = imagesToLoad - 1;

            if (imagesToLoad === 0) {
                callBack(images);
            }
        });
    });
};

loadImages((images) => {
    let i = 0;
    setInterval(() => {
        if (i == 7) i = 0;
        ctx.drawImage(images[i], 0, 0, 500, 500);
        i++;
    }, 10)
});
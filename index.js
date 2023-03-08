// console.log(document.getElementsByClassName("image1"))

function setImage1() {
    let index = 1
    let image1 = document.getElementsByClassName("image1")
    image1[0].style.backgroundImage = `url(./src/image/${index}.png)`;

    setInterval(() => {
        index++
        image1[0].style.backgroundImage = `url(./src/image/${index}.png)`;
        // console.log(index)
    }, 4000);
    
    setInterval(() => {
        index = 0
    }, 16000);
}

function setImage2() {
    let index = 6
    let image1 = document.getElementsByClassName("image2")


    let mF = setInterval(() => {
        index++
        image1[0].style.backgroundImage = `url(./src/image/${index}.png)`;
        // console.log(index)
    }, 3000);

    setInterval(() => {
        index = 5
    }, 12000);
}

function setImage3() {
    let index = 11
    let image1 = document.getElementsByClassName("image3")

    let mF = setInterval(() => {
        index++
        image1[0].style.backgroundImage = `url(./src/image/${index}.png)`;
        // console.log(index)
    }, 5000);


    setInterval(() => {
        index = 10
    }, 20000);
}

function setImage4() {
    let index = 16
    let image1 = document.getElementsByClassName("image4")

    let mF = setInterval(() => {
        index++
        image1[0].style.backgroundImage = `url(./src/image/${index}.png)`;
        // console.log(index)
    }, 6000);


    setInterval(() => {
        index = 15
    }, 30000);
}



setImage1()
setImage2()
setImage3()
setImage4()
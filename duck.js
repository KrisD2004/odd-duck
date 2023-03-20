function Product ( name, pathOfimage ) {
    this.name = name;
    this.pathOfimage = pathOfimage;
    this.timesImageshown = 0;
    this.clicks = 0;
}

let ImagesArray = [];

let bag = new Product('bag', 'bag.jpg');
let banana = new Product('banana', 'banana.jpg');
let bathroom = new Product('bathroom', 'bathroom.jpg');
let boots = new Product('boots', 'boots.jpg');
let breakfast = new Product('breakfast', 'breakfast.jpg');
let bubblegum = new Product('bubblegum', 'bubblegum.jpg');
let chair = new Product('chair', 'chair.jpg');
let cthulhu = new Product('cthulhu', 'cthulhu.jpg');
let dogduck = new Product('dog-duck', 'dog-duck.jpg');
let dragon = new Product('dragon', 'dragon.jpg');
let pen = new Product('pen', 'pen.jpg');
let petsweep = new Product('pet-sweep', 'pet-sweep.jpg');
let scissors = new Product('scissors', 'scissors.jpg');
let shark = new Product('shark', 'shark.jpg');
let sweep = new Product('sweep', 'sweep.png');
let tauntaun = new Product('tauntaun', 'tauntaun.jpg');
let unicorn = new Product('unicorn', 'unicorn.jpg');
let watercan = new Product('water-can', 'water-can.jpg');
let wineglass = new Product('wine-glass', 'wine-glass.jpg');
console.log("bag", bag)

//pushing images into empty array
ImagesArray.push(bag);
ImagesArray.push(banana);
ImagesArray.push(bathroom);
ImagesArray.push(boots);
ImagesArray.push(breakfast);
ImagesArray.push(bubblegum);
ImagesArray.push(chair);
ImagesArray.push(cthulhu);
ImagesArray.push(dogduck);
ImagesArray.push(dragon);
ImagesArray.push(pen);
ImagesArray.push(petsweep);
ImagesArray.push(scissors);
ImagesArray.push(shark);
ImagesArray.push(sweep);
ImagesArray.push(tauntaun);
ImagesArray.push(unicorn);
ImagesArray.push(watercan);
ImagesArray.push(wineglass);


console.log(ImagesArray)

//RandomImage Generator for image 1
let randomIndex = Math.floor(Math.random()* ImagesArray.length)
console.log("randomIndex:", randomIndex ) 
let randomProduct = ImagesArray[randomIndex]
console.log("randomProduct", randomProduct)

let randomPic = document.querySelector('#Image1')
randomPic.setAttribute('src', randomProduct.pathOfimage)

//randomImage generator for image 2 
let randomIndex2 = Math.floor(Math.random()* ImagesArray.length)
let randomProduct2 = ImagesArray[randomIndex2]
let randomPic2 = document.querySelector('#Image2')
randomPic2.setAttribute('src', randomProduct2.pathOfimage)

//randomImage gen for image3
let randomIndex3 = Math.floor(Math.random()* ImagesArray.length)
let randomProduct3 = ImagesArray[randomIndex3]
let randomPic3 = document.querySelector('#Image3')
randomPic3.setAttribute('src', randomProduct3.pathOfimage)





// let Image1 = document.querySelector('#Image1')
// Image1.src='chair.jpg'
// console.log("header", typeof(header))

function Product ( name, pathOfimage ) {
    this.name = name;
    this.pathOfimage = pathOfimage;
    this.timesImageshown = 0;
    this.clicks = 0;
}
//variables for product and render functions 
let PicClicks = 0
let views = 0 
let maxClicks = 25;
if(localStorage['PicClicks']){
  PicClicks = JSON.parse(localStorage.getItem('PicClicks'))
}
else{
  PicClicks = 0;
  let PicClicksString = JSON.stringify(PicClicks)
localStorage.setItem('PicClicks', PicClicksString)
}
// let maxClicksString = JSON.stringify(maxClicks)
// localStorage.setItem('maxClicks', maxClicksString)

let ImagesArray = [];
let newImagesArray = ['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','water-can','wine-glass',]
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

if(localStorage['ImagesArray']){
  let parsedArry = JSON.parse(localStorage.getItem('ImagesArray'))
  ImagesArray = parsedArry
}
else{
  

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
}

// let bag = new Product('bag', 'bag.jpg');
// let banana = new Product('banana', 'banana.jpg');
// let bathroom = new Product('bathroom', 'bathroom.jpg');
// let boots = new Product('boots', 'boots.jpg');
// let breakfast = new Product('breakfast', 'breakfast.jpg');
// let bubblegum = new Product('bubblegum', 'bubblegum.jpg');
// let chair = new Product('chair', 'chair.jpg');
// let cthulhu = new Product('cthulhu', 'cthulhu.jpg');
// let dogduck = new Product('dog-duck', 'dog-duck.jpg');
// let dragon = new Product('dragon', 'dragon.jpg');
// let pen = new Product('pen', 'pen.jpg');
// let petsweep = new Product('pet-sweep', 'pet-sweep.jpg');
// let scissors = new Product('scissors', 'scissors.jpg');
// let shark = new Product('shark', 'shark.jpg');
// let sweep = new Product('sweep', 'sweep.png');
// let tauntaun = new Product('tauntaun', 'tauntaun.jpg');
// let unicorn = new Product('unicorn', 'unicorn.jpg');
// let watercan = new Product('water-can', 'water-can.jpg');
// let wineglass = new Product('wine-glass', 'wine-glass.jpg');

// //pushing images into empty array
// ImagesArray.push(bag);
// ImagesArray.push(banana);
// ImagesArray.push(bathroom);
// ImagesArray.push(boots);
// ImagesArray.push(breakfast);
// ImagesArray.push(bubblegum);
// ImagesArray.push(chair);
// ImagesArray.push(cthulhu);
// ImagesArray.push(dogduck);
// ImagesArray.push(dragon);
// ImagesArray.push(pen);
// ImagesArray.push(petsweep);
// ImagesArray.push(scissors);
// ImagesArray.push(shark);
// ImagesArray.push(sweep);
// ImagesArray.push(tauntaun);
// ImagesArray.push(unicorn);
// ImagesArray.push(watercan);
// ImagesArray.push(wineglass);


//console.log(ImagesArray)

//RandomImage Generator for image 1
//let randomIndex = Math.floor(Math.random()* ImagesArray.length)
//console.log("randomIndex:", randomIndex ) 
// //let randomProduct = ImagesArray[randomIndex]
// let randomPic = document.querySelector('#Image1')
// randomPic.setAttribute('src', randomProduct.pathOfimage)

//randomImage generator for image 2 
//let randomIndex2 = Math.floor(Math.random()* ImagesArray.length)
//let randomProduct2 = ImagesArray[randomIndex2]
//let randomPic2 = document.querySelector('#Image2')
//randomPic2.setAttribute('src', randomProduct2.pathOfimage)

//randomImage gen for image3
//let randomIndex3 = Math.floor(Math.random()* ImagesArray.length)
// let randomProduct3 = ImagesArray[randomIndex3]
// let randomPic3 = document.querySelector('#Image3')
// randomPic3.setAttribute('src', randomProduct3.pathOfimage)

// random image gen
let randomPic = undefined
function getRandomNumber(){
    return Math.floor(Math.random()* ImagesArray.length)
}

//function to get pictures to show
function Pictures(){
    //getting random number
    let image1 = getRandomNumber();
    let image2 = getRandomNumber();
    let image3 = getRandomNumber();

    while (image1 === image2){
        image2 = getRandomNumber();

        // while (image2 === image3){
        //     image3 = getRandomNumber();
        // }
    }
    while (image2 === image3){
        image3 = getRandomNumber();
    }
    while (image1 === image3){
        image1 = getRandomNumber();
    }

    let randomProduct = ImagesArray[image1]
    let randomPic = document.querySelector('#Image1')
    randomPic.setAttribute('src', randomProduct.pathOfimage)

    let randomProduct2 = ImagesArray[image2]
    let randomPic2 = document.querySelector('#Image2')
    randomPic2.setAttribute('src', randomProduct2.pathOfimage)

    let randomProduct3 = ImagesArray[image3]
    let randomPic3 = document.querySelector('#Image3')
    randomPic3.setAttribute('src', randomProduct3.pathOfimage)

    let randProduct = [randomProduct, randomProduct2, randomProduct3]

    for (let i = 0; i < ImagesArray.length; i++) {
      // if (randProduct[i] === ImagesArray[i].pathOfimage) {
      //   console.log(ImagesArray[i].clicks)
      //   ImagesArray[i].clicks++;
      //   // ImagesArray[i].timesImageshown++;
      //   break;
      // }
      for (let j = 0; j < randProduct.length; j++) {
        if (randProduct[j].name === ImagesArray[i].name) {
          console.log(ImagesArray[i].timesImageshown)
          // ImagesArray[i].clicks++;
          ImagesArray[i].timesImageshown++;
          break;
        }
      }
    }
    let ImagesArrayString = JSON.stringify(ImagesArray)
    localStorage.setItem('ImagesArray', ImagesArrayString)



}

//added button event listeners
let resultButton = document.getElementById('Btn')
function ProductClick(event){

    if (event.target === document.querySelector('#Pictures')) {
        alert('Please click on an image');
      }
      PicClicks++;
      let picClicksString = JSON.stringify(PicClicks)
      localStorage.setItem('PicClicks', picClicksString)
      views++;
      let clickImage = event.target.getAttribute('src');
      for (let i = 0; i < ImagesArray.length; i++) {
        if (clickImage === ImagesArray[i].pathOfimage) {
          console.log(ImagesArray[i].clicks)
          ImagesArray[i].clicks++;
          // ImagesArray[i].timesImageshown++;
          break;
        }
      }
      let ImagesArrayString = JSON.stringify(ImagesArray)
      localStorage.setItem('ImagesArray', ImagesArrayString)

      if (PicClicks >= maxClicks) {
        document.querySelector('#Pictures').removeEventListener('click', ProductClick);
        // give the button an event lister and styles so the user
        // knows its an active button:
        
        resultButton.addEventListener('click', renderResults);
        resultButton.className = 'clicks-allowed';
        document.querySelector('#Pictures').className = 'no-voting';
      } else {
        Pictures();
      }
    }


    function renderResults() {
      let imageClicks = []
      let imageViews = []
      let arrayOfProducts = JSON.parse(localStorage.getItem('ImagesArray'))
      for(let i = 0; i < arrayOfProducts.length; i++){
        imageClicks.push(arrayOfProducts[i].clicks)
        imageViews.push(arrayOfProducts[i].timesImageshown)
      }
      // let imageClicks = [bag.clicks, banana.clicks, bathroom.clicks, boots.clicks, bubblegum.clicks, chair.clicks, cthulhu.clicks, dogduck.clicks, dragon.clicks, pen.clicks, petsweep.clicks, scissors.clicks, shark.clicks, sweep.clicks, tauntaun.clicks, unicorn.clicks, watercan.clicks, wineglass.clicks ];
      // let imageViews = [bag.timesImageshown, banana.timesImageshown, boots.timesImageshown, bubblegum.timesImageshown, chair.timesImageshown, cthulhu.timesImageshown, dogduck.timesImageshown, dragon.timesImageshown, pen.timesImageshown, petsweep.timesImageshown, scissors.timesImageshown, shark.timesImageshown, sweep.timesImageshown, tauntaun.timesImageshown, unicorn.timesImageshown, watercan.timesImageshown, wineglass.timesImageshown];
        let ul = document.querySelector('ul');
        for (let i = 0; i < ImagesArray.length; i++) {
          let li = document.createElement('li')
          li.textContent = `${ImagesArray[i].name} had ${ImagesArray[i].timesImageshown} views and was clicked ${ImagesArray[i].clicks} times.`;
          ul.appendChild(li);
          //function to print out results for the views and votes
        }
        //new chart
        const ctx = document.getElementById('newChart');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: newImagesArray,
            datasets: [{
              label: '# of votes',
              data: imageClicks,
              borderWidth: 1
            },
          {
            label: '# of clicks',
              data: imageViews,
              borderWidth: 1
          }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
      

      //renderResults();
    // if (event.target === document.querySelector('#Pictures')){
    //     alert('Please click on an image');
    // }
    //
     Pictures();
    
    
    


let imageClick = document.querySelector('#Pictures')
imageClick.addEventListener("click", ProductClick)


///local storage for lab 13
// let ImagesArrayString = JSON.stringify(ImagesArray)
// localStorage.setItem('ImagesArray', ImagesArrayString)

// let ViewString = JSON.stringify(ImagesArray)
// localStorage.setItem('ImagesArray', ViewString)




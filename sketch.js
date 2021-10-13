const myCanvas = { width: 600, height: 600};
const backgroundColor = [22, 53, 204];
const numOutfits = 12
let logo;
let cheetah;
let jasmine;
let outfits;

let currentOutfit = 0
let clothingChosen = false

let leftButtonImg;
let rightButtonImg;
let playButtonImg;

let leftButton = {x: 210, y: 535, w: 60, h: 30}
let rightButton = {x: 330, y: 535, w: 60, h: 30}
let playButton = {x: 280, y: 535, w: 40, h: 30}

function preload() {
    logo = loadImage('assets/cluelesslogo.png');
    jasmine = loadImage('assets/jasmine.png');
    cheetah = loadImage('assets/cheetah.png')
    leftButtonImg = loadImage('assets/leftbutton.png');
    rightButtonImg = loadImage('assets/rightbutton.png');
    playButtonImg = loadImage('assets/playbutton.png');
    outfits = Array.from({ length: numOutfits}, (el, idx) => {
        return loadImage(`assets/outfit${idx}.png`)
    })

    console.log(outfits)
  }


function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}


  function draw(){
    background(backgroundColor);
    image(logo, 164, -65, 270, 270)
    if(clothingChosen){
        image(outfits[currentOutfit], 70, 85, 475, 475)
    }else {
        image(jasmine, 65, 85, 475, 475)
    }
    

    image(cheetah, 0, 0, 600, 600)
    image(leftButtonImg, leftButton.x, leftButton.y, leftButton.w, leftButton.h)
    image(rightButtonImg, rightButton.x, rightButton.y, rightButton.w, rightButton.h)
    image(playButtonImg, playButton.x, playButton.y, playButton.w, playButton.h)
  }

function mousePressed(){
    console.log(mouseX, mouseY)

    if(checkClick(mouseX, mouseY, leftButton)){
        decrementOutfit()
    }
    if(checkClick(mouseX, mouseY, rightButton)){
        incrementOutfit()
    }
    //if(checkClick(mouseX, mouseY, playButton)){
       // gotoclass()
//     }
}

const decrementOutfit = () => {
    console.log('left button was pressed')
    if(!clothingChosen){
        clothingChosen = true
    }else{
        if(currentOutfit > 0){
          currentOutfit--
        } else {
            currentOutfit = outfits.length - 1
        }      
    }
}

 const incrementOutfit = () => {
    console.log('right button was pressed')
    if(!clothingChosen){
        clothingChosen = true
    }else{
        if(currentOutfit < Array.length - 1){
          currentOutfit++
        } else {
            currentOutfit = 0
        }      
    }
}

// const gotoclass = () => {
 //   console.log('play button was pressed')
// }

function checkClick(mx, my, button){
    if( mx > button.x &&
        mx < button.x + button.w && 
        my > button.y &&
        my < button.y + button.h){
            // the button was clicked
            return true
        } else {
            return false
        }
}

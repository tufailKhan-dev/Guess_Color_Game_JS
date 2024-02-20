const colorcode = document.getElementById('color-code'); 
const options = document.getElementById('options-container');
const addtext = document.getElementById('addtext');
let random = ""



// generate random number between any two 
const gRnB = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1))
}


// it generate random color for between given number
const generateRandomColorRGB = () => {
    const red = gRnB(0,255);
    const green = gRnB(0,255);
    const blue = gRnB(0,255);
    return `rgb(${red}, ${green}, ${blue})`
}

const validresult = (el) => {
    const selectedcolor = el.target.style.backgroundColor;
    
    if (selectedcolor === random){
        addtext.innerText = "yes u right";
        options.style.pointerEvents = 'none';
        setInterval(()=>{
            window.location.reload();  
        },5000);
    }
    else{
        addtext.innerText = "Wrong guess-- u have more chance";
    }

}


const startGame = () => {
    random = generateRandomColorRGB();
    colorcode.innerText = random;
    const ansIndex = gRnB(0,5);
    for(let i = 0; i<6;i++){
        const div = document.createElement('div');
        div.addEventListener('click', validresult);
        div.style.backgroundColor = i === ansIndex ? random : generateRandomColorRGB();
        options.append(div);
    }

}

window.addEventListener('load', startGame());

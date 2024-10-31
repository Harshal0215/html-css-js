const h1 = document.querySelector(".cont")
const profession = ["Cricketer ","Developer ","Biker ","Philosopher "]
let characterIndex = 0;
let careerIndex = 0;

function updateCareer(){
    characterIndex++
    h1.innerHTML = `<h1>I am a ${profession[careerIndex].slice(0,characterIndex)}</h1>`
    
    if(characterIndex === profession[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex === profession.length){
        careerIndex = 0;
    }
    setTimeout(updateCareer, 150);
};
updateCareer();


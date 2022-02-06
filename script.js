const H1 = document.getElementById("h1");
const counter = H1.textContent.length - 1;
const COLORS = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
const generatedColors = [];
let color = '#';

const getRandomColor = () => {
    let startC = '#';
    for(i=0;i<=5;i++){
        const index = COLORS[Math.floor(Math.random() * COLORS.length)];
        startC = startC.concat(index)
    }
    return startC;
}

const styleH1 = () => {
    const charArray = H1.textContent.split("")
    console.log(counter);
    for(i=0;i<=counter;i++){
        const spanEl = document.createElement("span")
        spanEl.textContent = charArray[i]
        H1.appendChild(spanEl);
    }
    H1.childNodes[0].remove()
    for(z=0;z<=counter;z++){
        // console.log(i);
        // let y = getRandomColor();
        // generatedColors.push(y);
        H1.childNodes[z].style.color = getRandomColor();
        console.log(H1.childNodes[z]);
    }
    console.log(generatedColors)
}

// Don't Change the above code


// Onload
styleH1()
const H1 = document.getElementById("h1");
const COLORS = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];let color = '#';

const getRandomColor = () => {
    let color = '#';
    for(i=0;i<=5;i++){
        const index = COLORS[Math.floor(Math.random() * COLORS.length)];
        color = color.concat(index)
    }
    return color;
}


const styleH1 = () => {
    const h1 = document.createElement("h1")
    const counter = H1.textContent.length;
    const charArray = H1.textContent.split("")
    console.log(counter);
    for(i=0;i<=counter;i++){
        const span = document.createElement("span")
        span.textContent = charArray[i]
        window.document.body.appendChild(h1)
        h1.appendChild(span)
    }
}

// Onload
styleH1()
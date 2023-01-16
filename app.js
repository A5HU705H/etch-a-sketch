const grid = document.querySelector('div.grid');
const body = document.querySelector('body');
const update = document.querySelector('.upd');
const range = document.querySelector('.ip');
const shade = document.querySelector('.shade');
const rainbow = document.querySelector('.rando');
const erase = document.querySelector('.eraser');
grid.addEventListener('mousedown', () => { drag = false });
grid.addEventListener('mouseup', () => { drag = true });
grid.addEventListener('mouseleave', ()=>{drag= true;})
let black = false;
let shading = false;
let Rainbow = false;
let eraze= false;
let drag = true;
// var rangeInput = document.getElementsByClassName("ip");

function addShading(block){
    if (!drag && !eraze && shading) { block.style.backgroundColor = 'black'; block.style.opacity = `${parseFloat(block.style.opacity) + 0.1}`}
}

range.addEventListener('mouseup', function() {
    let a = range.value;
    grid.textContent = '';
    for (let i = 0; i < a; i++) {
        const row = document.createElement(`div`);
        row.classList.add('row');
        row.style.height = `${500 / a}` + 'px';
        row.style.width = '500px';
        for (let j = 0; j < a; j++) {
            const block = document.createElement(`div`);
            const border = document.createElement('div');
            block.classList.add('block');
            block.style.height = `${500 / (a)}` + 'px';
            block.style.width = `${500 / (a)}` + 'px';
            if(shading){block.style.opacity = '0';}
            block.textContent = ' ';
            row.appendChild(block);
        }
        grid.appendChild(row);
    }

    const blocks = document.querySelectorAll('.block');
    if(black){
        blocks.forEach((block) => block.addEventListener('mouseenter', () => {
            if (!drag && !eraze) { block.style.backgroundColor = 'black';  }
    
        }));
    }else if(shading){
        blocks.forEach((block) => block.addEventListener('mouseenter', () => {
            if(!drag && !eraze){block.style.backgroundColor = 'black'; block.style.opacity = `0.0`; }  
        }));
    }else{
        blocks.forEach((block) => block.addEventListener('mouseenter', () => {
            if (!drag && !eraze) { block.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 1} )`; }
    
        }));
    }
});

erase.addEventListener('click', () => {
    if(!eraze){eraze=true;}
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => block.addEventListener('mouseenter', () => {
        if (!drag && eraze) { if(shading){block.style.opacity=`0.0`;}else{block.style.backgroundColor='transparent';} }
    }));
})

rainbow.addEventListener('click', () => {
    const blocks = document.querySelectorAll('.block');
    eraze= false;
    if (Rainbow) {
        
        blocks.forEach((block) => block.addEventListener('mouseenter', () => {
            if (!drag && !eraze) { block.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 1} )`; }
        }));
        return;
    } else {
        Rainbow = true; shading = false; black = false;
    }
    let a = range.value;
    grid.textContent = '';
    for (let i = 0; i < a; i++) {
        const row = document.createElement(`div`);
        row.classList.add('row');
        row.style.height = `${500 / a}` + 'px';
        row.style.width = '500px';
        for (let j = 0; j < a; j++) {
            const block = document.createElement(`div`);
            block.classList.add('block');
            block.style.height = `${500 / (a)}` + 'px';
            block.style.width = `${500 / (a)}` + 'px';
            block.textContent = ' ';
            row.appendChild(block);
        }
        grid.appendChild(row);
    }
    blocks.forEach((block) => block.addEventListener('mouseenter', () => {
        if (!drag && !eraze) { block.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 1} )`; }
    }));
})

shade.addEventListener('click', () => {
    const blocks = document.querySelectorAll('.block');
    eraze= false;
    if (shading) {
        blocks.forEach((block) => block.removeEventListener('mouseenter', addShading(block)));
        blocks.forEach((block) => block.addEventListener('mouseenter', addShading(block)));
        return;
    } else { shading = true; Rainbow = false; black = false; }
    let a = range.value;
    grid.textContent = '';
    for (let i = 0; i < a; i++) {
        const row = document.createElement(`div`);
        row.classList.add('row');
        row.style.height = `${500 / a}` + 'px';
        row.style.width = '500px';
        for (let j = 0; j < a; j++) {
            const block = document.createElement(`div`);
            const border = document.createElement('div');
            block.classList.add('block');
            block.style.height = `${500 / (a)}` + 'px';
            block.style.width = `${500 / (a)}` + 'px';
            block.style.opacity = `0.0`;
            block.textContent = ' ';
            row.appendChild(block);
        }
        grid.appendChild(row);
    }
    blocks.forEach((block) => block.addEventListener('mouseenter', addShading(block)));
})

update.addEventListener('click', () => {
    const blocks = document.querySelectorAll('.block');
    eraze=false;
    if (black) {
    

        blocks.forEach((block) => block.addEventListener('mouseenter', () => {
            if (!drag && !eraze) { block.style.backgroundColor = 'black'; }
        }));
        return;
    } else {
        black = true; shading = false; Rainbow = false;
    }
    let a = range.value;
    grid.textContent = '';
    for (let i = 0; i < a; i++) {
        const row = document.createElement(`div`);
        row.classList.add('row');
        row.style.height = `${500 / a}` + 'px';
        row.style.width = '500px';
        for (let j = 0; j < a; j++) {
            const block = document.createElement(`div`);
            block.classList.add('block');
            block.style.height = `${500 / (a)}` + 'px';
            block.style.width = `${500 / (a)}` + 'px';
            block.textContent = ' ';
            row.appendChild(block);
        }
        grid.appendChild(row);
    }
    blocks.forEach((block) => block.addEventListener('mouseenter', () => {
        if (!drag && !eraze) { block.style.backgroundColor = 'black'; }
    }));
});

const blocks = document.querySelectorAll('.block');
blocks.forEach((block) => block.addEventListener('mouseenter', () => {
    if (!drag && !eraze && !shading && !Rainbow && !eraze && !black) { block.style.backgroundColor = 'black'; }
}));



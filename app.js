const grid= document.querySelector('div.grid');
const body= document.querySelector('body');

const update= document.querySelector('.upd');
const range= document.querySelector('.ip');
const shade= document.querySelector('.shade');
const rainbow= document.querySelector('.rando');
const erase= document.querySelector('.eraser');

let black=false;
let shading=false;
let Rainbow=false;

erase.addEventListener('click', ()=>{
    // let a=range.value;
    // grid.textContent = '';
    // for(let i=0; i<a; i++){
    //     const row= document.createElement(`div`);
    //     row.classList.add('row');
    //     row.style.height=`${500/a}`+'px';
    //     row.style.width= '500px';
    //     for(let j=0; j<a; j++){
    //         const block=document.createElement(`div`);
    //         block.classList.add('block');
    //         block.style.height= `${500/(a)}`+'px';
    //         block.style.width= `${500/(a)}`+'px';
    //         block.textContent=' ';
    //         row.appendChild(block);
    //     }
    //     grid.appendChild(row);
    // }
    const blocks= document.querySelectorAll('.block');
    let drag = true;

    grid.addEventListener('mousedown', () => {drag = false});
    grid.addEventListener('mouseup', () => {drag = true});

    blocks.forEach((block) => block.addEventListener('mousemove', ()=>{
    if(!drag){block.style.backgroundColor = 'none'; }
    }));
})

rainbow.addEventListener('click', ()=>{
    if(Rainbow){
        const blocks= document.querySelectorAll('.block');
        let drag = true;

        grid.addEventListener('mousedown', () => {drag = false});
        grid.addEventListener('mouseup', () => {drag = true});

        blocks.forEach((block) => block.addEventListener('mousemove', ()=>{
        if(!drag){block.style.backgroundColor = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, ${Math.random()*1} )`; }
        }));
        return;
    }else{
        Rainbow=true; shading=false; black=false;
    }
    let a=range.value;
    grid.textContent = '';
    for(let i=0; i<a; i++){
        const row= document.createElement(`div`);
        row.classList.add('row');
        row.style.height=`${500/a}`+'px';
        row.style.width= '500px';
        for(let j=0; j<a; j++){
            const block=document.createElement(`div`);
            block.classList.add('block');
            block.style.height= `${500/(a)}`+'px';
            block.style.width= `${500/(a)}`+'px';
            block.textContent=' ';
            row.appendChild(block);
        }
        grid.appendChild(row);
    }
    const blocks= document.querySelectorAll('.block');
    let drag = true;

    grid.addEventListener('mousedown', () => {drag = false});
    grid.addEventListener('mouseup', () => {drag = true});

    blocks.forEach((block) => block.addEventListener('mousemove', ()=>{
    if(!drag){block.style.backgroundColor = `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, ${Math.random()*1} )`; }
    }));
})

shade.addEventListener('click', ()=>{
    if(shading){
        const blocks= document.querySelectorAll('.block');
    let drag = true;

    grid.addEventListener('mousedown', () => {drag = false});
    grid.addEventListener('mouseup', () => {drag = true});

    

    blocks.forEach((block) => block.addEventListener('mousemove', ()=>{
    if(!drag){block.style.backgroundColor = 'black'; block.style.opacity= `${parseFloat(block.style.opacity)+0.1}`;}
    }));
        return;
    }else{shading=true; Rainbow=false; black=false;}
    let a=range.value;
    grid.textContent = '';
    for(let i=0; i<a; i++){
        const row= document.createElement(`div`);
        row.classList.add('row');
        row.style.height=`${500/a}`+'px';
        row.style.width= '500px';
        for(let j=0; j<a; j++){
            const block=document.createElement(`div`);
            const border= document.createElement('div');
            border.style.height= `${500/(a)}`+'px';
            border.style.width= `${500/(a)}`+'px';
            border.style.border= '0.01px solid black';
            block.classList.add('block');
            block.style.height= `${500/(a)}`+'px';
            block.style.width= `${500/(a)}`+'px';
            block.style.opacity= '0';
            block.textContent=' ';
            border.appendChild(block);
            row.appendChild(border);
        }
        grid.appendChild(row);
    }
    const blocks= document.querySelectorAll('.block');
    let drag = true;

    grid.addEventListener('mousedown', () => {drag = false});
    grid.addEventListener('mouseup', () => {drag = true});

    

    blocks.forEach((block) => block.addEventListener('mousemove', ()=>{
    if(!drag){block.style.backgroundColor = 'black'; block.style.opacity= `${parseFloat(block.style.opacity)+0.1}`;}
    }));
})

update.addEventListener('click', ()=>{
    if(black){const blocks= document.querySelectorAll('.block');
    let drag = true;

    grid.addEventListener('mousedown', () => {drag = false});
    grid.addEventListener('mouseup', () => {drag = true});

    blocks.forEach((block) => block.addEventListener('mousemove', ()=>{
    if(!drag){block.style.backgroundColor = 'black'; }
    }));
    return;
    }else{
        black=true; shading=false; Rainbow=false;
    }   
    let a=range.value;
    grid.textContent = '';
    for(let i=0; i<a; i++){
        const row= document.createElement(`div`);
        row.classList.add('row');
        row.style.height=`${500/a}`+'px';
        row.style.width= '500px';
        for(let j=0; j<a; j++){
            const block=document.createElement(`div`);
            block.classList.add('block');
            block.style.height= `${500/(a)}`+'px';
            block.style.width= `${500/(a)}`+'px';
            block.textContent=' ';
            row.appendChild(block);
        }
        grid.appendChild(row);
    }
    const blocks= document.querySelectorAll('.block');
    let drag = true;

    grid.addEventListener('mousedown', () => {drag = false});
    grid.addEventListener('mouseup', () => {drag = true});

    blocks.forEach((block) => block.addEventListener('mousemove', ()=>{
    if(!drag){block.style.backgroundColor = 'black'; }
    }));
});


const blocks= document.querySelectorAll('.block');
    let drag = true;

    grid.addEventListener('mousedown', () => {drag = false});
    grid.addEventListener('mouseup', () => {drag = true});


    blocks.forEach((block) => block.addEventListener('mousemove', ()=>{
    if(!drag){block.style.backgroundColor = 'black';}
    }));



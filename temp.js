//document.querySelector('.vlvarriba').addEventListener('click',volvArriba(event));

// General

//Boton pata volver arriba
function volvArriba(e) {
    e.preventDefault();
    console.log(e);
    window.scrollTo(0, 0);
}

function Producto(e) {
    e.preventDefault();
    window.location.href='/Producto.html';
}
 
//Muestra carrito de compras
function ShopCar(e,t) {
    e.preventDefault();

    showCar();

}

function showCar() {
    //titulo
    const titl = document.createElement('div');
    titl.classList.add("tit", "col-m-10", "col-s-10");
    titl.innerText = "Carrito";
    //

    //botonx
    const x = document.createElement('button');
    x.classList.add("xm");
    x.innerText = "x";
    x.onclick = xm;
    
    const xx = document.createElement('div');
    xx.classList.add("col-m-2", "col-s-2");
    xx.appendChild(x);
    //

    //eneral
    const gen = document.createElement('div');
    gen.classList.add("row");
    
    gen.appendChild(titl);
    gen.appendChild(xx);
    //

    //principal
    const prn = document.createElement('div');
    prn.classList.add("car" , "w-m-car", "w-s-car");
    prn.appendChild(gen);
    //

    let prods = obtenerLocalSt();

    


    prods.forEach(function(elm) {
        //prn.appendChild(elm);
        //img
        const ima = document.createElement('img');
        ima.src = "https://picsum.photos/id/1/80/80";
        ima.classList.add("img-fluid");

        const imag = document.createElement('div');
        imag.classList.add("col-m-2", "col-s-2");

        imag.appendChild(ima);
        //

        //text
        const txt = document.createElement('div');
        txt.classList.add("col-m-9", "col-s-9");
        txt.innerText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi exercitationem, esse ipsam ea culpa
        at omnis eum atque dolores consectetur assumenda delectus tempore repellendus odio reprehenderit
        quidem modi sunt? Illum?`;
        //

        //boton x
        const btn = document.createElement('button');
        btn.innerText = `x`;
        btn.classList.add("x");
        btn.onclick = borrarPrd;
        const botn = document.createElement('div');
        botn.classList.add("col-m-1", "col-s-1");
        botn.appendChild(btn);
        //


        //div general
        const gen = document.createElement('div');
        gen.classList.add("row", "bt", "box");
        //

        //Agregar todo a div gen
        gen.appendChild(imag);
        gen.appendChild(txt);
        gen.appendChild(botn);

        //link
        const adiv = document.createElement('a');
        adiv.href = "Producto.html";
        adiv.appendChild(gen);
        //

        prn.appendChild(adiv);
    });

    document.getElementById('Cshop').appendChild(prn);
}

//Quita carrito de compras
function xm(e,t) {
    e.preventDefault();

    document.getElementById('Cshop').innerHTML = ``;
}

//Agrega al carrito de compras
function addCar(e,t) {
    e.preventDefault();
    
    const adiv = "elem";

    agregarLocalSt(adiv);

    showCar();
}




//Agregar elemento a Local Storage
function agregarLocalSt(elem) {
    let elems = obtenerLocalSt();

    //Añadir el nuevo tweet
    elems.push(elem);

    //Convertir a string a arreglo para ls
    //localStorage.setItem('elems', JSON.stringify(elems))
    localStorage.setItem('elems', JSON.stringify(elems))

}


//Obtener los elementos de Local Storage
function obtenerLocalSt() {
    let elems;

    //Checar valores de local storage
    if(localStorage.getItem('elems') === null) {
        elems = [];
    } else {
        elems = JSON.parse(localStorage.getItem('elems'));
    }
    return elems;
}

//Eliminar elemento de Local Storage 
function borrarTeetLs(elemtBr) {
    let elems;
    
    elems = obtenerLocalSt();

    elems.pop();

    // elems.forEach(function(elem, index) {
    //     console.log(elem);
    //     if(elemtBr === elem) {
            
    //         elems.splice(index, 1);
    //     }
    // });

    localStorage.setItem("elems", JSON.stringify(elems));
}

//Eliminar elemento
function borrarPrd(e,t) {
    e.preventDefault();

    e.path[3].remove();

    borrarTeetLs(e.path[3].innerHTML);
}
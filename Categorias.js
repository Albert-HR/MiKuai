var nom; 

function titlet(e,t) {
    e.preventDefault();

    nom = t.innerText;

    nome = "MiKiai | " + nom
    document.getElementById('titleh').innerText = nome;


    document.getElementById('contp').innerHTML = ' ';

    document.getElementById('prodc').innerHTML = `
    <div class="row pdconten pdconten-m" >
    
        <div class="title col-m-12">
                ${nom}
        </div>

        <div style="padding: 1em;" class="w-s-100 w-m-33">
            
            <div class="bxprdct">

                <div class = "product" > <a href=" " onclick="Producto(event)" > <img src="https://picsum.photos/id/1/400/300" alt=""> </a> </div>

                <div class="pdimfo">
                    <div style="font-size: 2em;">
                        $000,00
                    </div>
                    <div>
                        Informacion de Articulo
                    </div>
                </div>

                <div class="row">
                    <div class="col-m-5 col-s-5 btnbox" >
                        <a class="btn btncomprar" href="">Comprar</a>
                    </div>
                    <div class="col-m-7 col-s-7 btnbox" >
                        <a class="btn btncarrito" href="">Agregar al carrito</a>
                    </div>

                </div>
            </div>

        </div>
    </div>
    `;

    //window.location.href='/Categoria.html';
}
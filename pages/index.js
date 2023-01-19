

export default function HomePage() {
   return  <div>
    <header>
        <title className="flex items center">Núnka</title>
    </header>

    <header>
        <nav>
       <img />
       <a href="#">NúnKa</a>
       <a href="/nosotros">Nosotros</a>
       <a href="/viajes">viajes</a>
       <a href="/Imagenes">Imagenes</a>
       <a href="/contacto">Contacto</a> 
       
       
        </nav>
    </header>

 <main className="styles.main">

 

    <a href="viajes/viaje1">
    <img />
    <h2>Roma</h2>
    <p>
    La zona arqueológica es accesible, bien desde los caminos post-incaicos que llegan hasta ella, o bien utilizando la carretera Hiram Bingham (que asciende la cuesta del cerro Machu Picchu desde la antigua estación de tren de Puente Ruinas, ubicada al fondo del cañón). Ninguna de las dos formas exime al visitante del precio de ingreso al complejo.

    </p>
</a>

    <a href="#">
    <img />
    <h2>Florencia</h2>
    <p>
    La zona arqueológica es accesible, bien desde los caminos post-incaicos que llegan hasta ella, o bien utilizando la carretera Hiram Bingham (que asciende la cuesta del cerro Machu Picchu desde la antigua estación de tren de Puente Ruinas, ubicada al fondo del cañón). Ninguna de las dos formas exime al visitante del precio de ingreso al complejo.

    </p>
    </a>

    
    <a href="#">
    <img />
    <h2>Islas Galapagos</h2>
    <p>
    La zona arqueológica es accesible, bien desde los caminos post-incaicos que llegan hasta ella, o bien utilizando la carretera Hiram Bingham (que asciende la cuesta del cerro Machu Picchu desde la antigua estación de tren de Puente Ruinas, ubicada al fondo del cañón). Ninguna de las dos formas exime al visitante del precio de ingreso al complejo.

    </p>
    </a>

 </main>

   </div>

}
 



export async function getServerSideProps(){
   const {viajes_categories} = await import('/data/data.json')
   console.log(viajes_categories);

    return {
    props:{ 
        data: viajes_categories , 
       
    },

    };

}

  


  


   




 






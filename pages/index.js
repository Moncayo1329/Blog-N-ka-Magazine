import Image from 'next/image';
import img from "../public/public/images/Imagen1.jpg"

export default function HomePage() {
   return  <div>
    <header>
        <title>Núnka</title>
    </header>
  

     <header>
    <div class="menu">
        <nav class="" > 
        <div class=""> 
       <a href="#">NúnKa</a> 
       <a href="/nosotros">Nosotros</a>
       <a href="/viajes">Viajes</a>
       <a href="/Imagenes">Fotografías</a>
       

       </div>
       </nav>
        
        
       </div>
    
       </header>
   

    

 <main className="styles.main">

 
    


    <a href="viajes/viaje1">
    <img />
    <h2 className="text-indigo-400">Roma</h2>
    <p>
    La zona arqueológica es accesible, bien desde los caminos post-incaicos que llegan hasta ella, o bien utilizando la carretera Hiram Bingham (que asciende la cuesta del cerro Machu Picchu desde la antigua estación de tren de Puente Ruinas, ubicada al fondo del cañón). Ninguna de las dos formas exime al visitante del precio de ingreso al complejo.
    </p>
</a>


    <a href="#">
    <img />
    <h2>Florencia</h2>
    <p>
    , bien desde los caminos post-incaicos que llegan hasta ella, o bien utilizando la carretera Hiram Bingham (que asciende la cuesta del cerro Machu Picchu desde la antigua estación de tren de Puente Ruinas, ubicada al fondo del cañón). Ninguna de las dos formas exime al visitante del precio de ingreso al complejo.

    </p>
    </a>

    <div className="grid-element">
    <Image
      src={img}
      Layout= "fill"
      alt= "Picture of florencia"
     priority
      
    />
  </div>

    
    <a href="#">
    <img />
    <h2>Islas Galapagos</h2>
    <p>
     caminos post-incaicos que llegan hasta ella, o bien utilizando la carretera Hiram Bingham (que asciende la cuesta del cerro Machu Picchu desde la antigua estación de tren de Puente Ruinas, ubicada al fondo del cañón). Ninguna de las dos formas exime al visitante del precio de ingreso al complejo.
     
     
    </p>
    </a>
    
 </main>
 
   </div>
   

}
 







  


  


   




 






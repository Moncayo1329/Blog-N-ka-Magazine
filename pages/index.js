import Image from 'next/image';
import img from "../public/public/images/Imagen1.jpg"

export default function HomePage() {
   return  <div>
    <header>
        <title>Núnka</title>
    </header>
  

     <header>
    <div class="menu">
        <nav className="#"> 
        <div>
       <div className="text-zinc-900 text-left space-x-3  text-3xl  absolute top-[35px] left-[200px]"> 
       <a href="#">NúnKa </a>  </div>
       <div class="space-x-20 text-center absolute inset-x-0 top-[35px]  left-[550px] text-ls"> 
       <a href="/viajes">Viajes</a>
       <a href="/Imagenes">Fotografías</a>
       <a href="/nosotros">Nosotros</a>
       </div>
       
       </div>
       </nav>
        
        
       </div>
    
       </header>
   

    

 <main className="styles.main">

 
    


    <a href="viajes/viaje1">
    <img />
    <h2 className="text-neutral-900 font-size:3.75rem  md:text-center inline-block:align-baseline">Roma</h2>
    <p class="text-center">
    La zona arqueológica es accesible <br></br> bien desde los caminos post-incaicos<br></br> que llegan hasta ella<br></br>o bien utilizando la carretera Hiram Bingham <br></br>que asciende la cuesta del cerro Machu Picchu.
    </p>
</a>


    <a href="#">
    <img />
    <h2>Roma</h2>
    <p>
     bien desde los caminos post-incaicos que llegan hasta ella, o bien utilizando la carretera Hiram Bingham (que asciende la cuesta del cerro Machu Picchu desde la antigua estación de tren de Puente Ruinas, ubicada al fondo del cañón). Ninguna de las dos formas exime al visitante del precio de ingreso al complejo.

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
    <h2>Florencia</h2>
    <p>
     caminos post-incaicos que llegan hasta ella, o bien utilizando la carretera Hiram Bingham (que asciende la cuesta del cerro Machu Picchu desde la antigua estación de tren de Puente Ruinas, ubicada al fondo del cañón). Ninguna de las dos formas exime al visitante del precio de ingreso al complejo.
     
     
    </p>
    </a>
    
 </main>
 
   </div>
   

}
 







  


  


   




 






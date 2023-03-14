import Image from 'next/image';
import img from "../public/public/images/WEB.jpeg"





function nosotros() {
    return(<div>
      <Link href="/nosotros">nosotros</Link>
    

   <p class="About">

   Esta website fue creada por Michael Moncayo. Me gusta programar en mi tiempo libre. <br></br>
   Construi desde cero esta website con el objetivo de compartir mis viajes y algunos tips que creo que pueden ser util al momento de viajar.
   </p>

   <div className="grid-element">
    <Image
      src={img}
      Layout= "fill"
      alt= "Picture of florencia"
     priority
      
    />
  </div>

</div>
    );
}
 
export default nosotros
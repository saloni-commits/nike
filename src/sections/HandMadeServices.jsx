import Servicecard from '../components/Servicecard';
import { services } from "../constants";

const HandMadeServices = () => {
  return (
    <section id="HandMadeServices">
      <div className="grid grid-cols-1 text-center">
        <h2 className="text-3xl font-serif font-thin uppercase">Services we Offer</h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grids-col-1 sm:gap-4 gap-4">
         {
          services.map((item)=>{
            <Servicecard key={item.label}{... item}/>
          })
         }
      </div>
    </section>
  )
}

export default HandMadeServices
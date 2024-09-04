
import {star} from '../assets/icons';

const Featuredproductcard = ({imgURL,name,price}) => {
  return (
    <section id="featuredproduct">
          <div className="flex flex-1 flex-col justify-center sm:w-full">
            <img src={imgURL} alt={name} className="w-full h-full"/>
            <div className="mt-4 flex gap-2 justify-center">
              <img src={star} alt="" width={24} height={24}/>
              <h1 className='text-gray-900'>(4.5)</h1>
            </div>
            <div className="grid text-center">
              <h3>{name}</h3>
              <p className='text-red-300'>{price}</p>
            </div>

          </div>
    </section>


  )
}

export default Featuredproductcard
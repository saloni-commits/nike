import Featuredproductcard from "../components/Featuredproductcard";
import { featuredproducts } from "../constants";

const FeaturedProducts = () => {
  return (
    <section id="featuredProducts" className="max-container max-sm:mt-12">
      <div className="grid grid-cols-1 text-center">
        <h2 className="text-3xl font-serif font-thin">FEATURED PRODUCTS</h2>
        <p className=" mt-2 text-center">Latest productes for <span className="text-red-300">latest you </span></p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grids-col-1 sm:gap-4 gap-4">
        {featuredproducts.map((featuredproduct) => (
          <Featuredproductcard key={featuredproduct.name}{... featuredproduct}/>
        )
        )}
      </div>


    </section>
  )
}

export default FeaturedProducts
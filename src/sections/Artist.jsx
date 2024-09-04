import { artist } from "../constants";
const Artist = () => {
  return (
    <section id="artist">
        <div className="grid grid-cols-1">
            <h1 className="font-serif text-3xl text-center font-bold">KNOW YOUR <span className="text-red-300">ARTISTS</span></h1>
            <p className="text-gray-800 text-center mt-2">Dive into their world of Creativity and passion</p>
        </div>
        

        <div className="flex max-w-5xl mx-auto gap-14 py-8 justify-center">

            {artist.map((artist)=> (
                <div className="shadow rounded-xl mix-blend luminosity px-4 py-4">
                    <img src={artist.image} alt="" className="h-50 mx-auto" />
                    <h2 className="font-serif text-center uppercase text-xl mt-5 mb-3">{artist.name}</h2>
                    <p className="text-gray-800 text-center text-sm">{artist.intro}</p>
                </div>
            ))}
            
        </div>
        
    </section>
  )
}

export default Artist
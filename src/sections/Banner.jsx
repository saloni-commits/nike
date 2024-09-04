
const Banner = () => {
  return (
    <section className="py-5">
        
            {/* VIEW 1----------------------------------------------------------- */}
            
            <div class="grid grid-cols-2 grid-rows-4     md:grid-rows-4 md:grid-cols-4 gap-2 md:gap-4 h-screen">

                <div class="col-span-1 md:col-span-2 row-span-4 md:row-span-4 px-8 py-8 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <img class="absolute inset-0 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[75%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-serif text-8xl font-thin text-white">Featured Bags</h1>
                        <p class="mb-3 py-4 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">This week's exclusive collection</p>
                        <button class="rounded-full bg-red-200 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                    {/* <span className="font-serif text-4xl">This <br/>Week<br/> Featured<br/> Bags</span> */}
                </div>

                <div class="  col-span-2 md:col-span-2 row-span-2 px-8 py-8 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <img class="absolute inset-0 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[90%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-serif text-4xl font-bold text-white">Copper<br/>Water Tank</h1>
                        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Vibrant collection of printed copper water tanks</p>
                        <button class="rounded-full bg-red-200 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                    {/* <span className="font-serif text-3xl">Printed<br/> Copper Water<br/> Tank</span> */}
                </div>

                <div class="row-span-2 md:row-span-2 px-8 py-8 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <img class="absolute inset-0 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[90%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-serif text-2xl font-bold text-white">Ethnic Wears</h1>
                        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Explore the real style</p>
                        <button class="rounded-full bg-red-200 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                    {/* <span className="font-serif text-2xl">Ethnic Style</span>*/}
                </div>

                <div class=" row-span-2 md:row-span-2 px-8 py-8 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <img class="absolute inset-0 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[90%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-serif text-2xl font-bold text-white">Mandala Bags</h1>
                        <button class="rounded-full bg-red-200 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                    </div>
                    {/* <span className="font-serif text-2xl">Beautiful <br/>Mandala bags <br/>Collection</span> */}
                </div>

            </div>


    </section>
  )
}

export default Banner
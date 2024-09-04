
const Servicecard = ({imgURL, label, subtext}) => {
  return (
    <section className="w-24 h-24 rounded-lg shadow">
      hi
      <div className="flex justify-center item-center rounded-full bg-coral-red">
        <img src={imgURL} alt="" width={24} height={24}/>
      </div>
        
        <h1 className="text-xl">{label}</h1>
        <p>{subtext}</p>

    </section>
  )
}

export default Servicecard
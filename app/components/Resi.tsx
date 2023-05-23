const Resi = () => {
  return (
    <section id="resi">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row bg-resibanner w-full">
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-4 sm:mb-0 p-8 box-border">
            <h4 className="text-white text-center text-2xl font-bold w-full">
              Lacak Pengiriman anda
            </h4>
            <p className="text-white text-md text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae officia voluptatibus alias exercitationem 
            </p>
            <form className="flex flex-row flex-wrap md:flex-nowrap gap-4 w-full ">
              <input
                type="text"
                placeholder="Lacak Pengiriman"
                name="resi"
                className="flex-1 px-4 py-4 text-gray-400 rounded-lg text-sm min-w-[20vw]"
              />
              <button
                type="submit"
                className="bg-secondary px-4 py-4 rounded-lg text-white text-sm w-full md:w-auto"
              >
                Lacak
              </button>
            </form>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-center p-8 box-border">
            <h4 className="text-white text-center text-2xl font-bold mb-8 sm:mb-[min(4px, 1rem)]">
              Cek Tarif Pengiriman Anda
            </h4>
            <form className="flex flex-col justify-center items-center gap-4 w-full">
              <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center gap-2 w-full">
                <input
                  type="text"
                  placeholder="Origin"
                  name="origin"
                  className="px-4 py-4 text-gray-400 rounded-lg text-sm w-full md:w-1/2"
                />
                <input
                  type="text"
                  placeholder="Destination"
                  name="destination"
                  className="px-4 py-4 text-gray-400 rounded-lg text-sm w-full md:w-1/2"
                />
              </div>
              <button
                type="submit"
                className="bg-secondary px-4 py-4 rounded-lg text-white text-sm w-full"
              >
                Check
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resi;

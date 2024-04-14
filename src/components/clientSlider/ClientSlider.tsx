const ClientSlider = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center py-12 px-5">
      <h3 className="text-xl">Our Clients</h3>
      <div className="container overflow-hidden my-4 mx-auto select-none">
        <div className="slider w-full flex items-center justify-between max-sm:text-xs">
          <span className="py-3 px-5 max-sm:px-2 max-sm:py-1 text-white rounded-md bg-blue-500">
            client 1
          </span>
          <span className="py-3 px-5 max-sm:px-2 max-sm:py-1 text-white rounded-md bg-pink-500">
            client 2
          </span>
          <span className="py-3 px-5 max-sm:px-2 max-sm:py-1 text-white rounded-md bg-orange-500">
            client 3
          </span>
          <span className="py-3 px-5 max-sm:px-2 max-sm:py-1 text-white rounded-md bg-green-500">
            client 4
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;

export const Moto = () => {
  return (
    <div className="px-2 sm:px-10 lg:px-40 my-96 w-full sm:h-[calc(100vh-6rem)] bg-[#00A650]  flex-col flex sm:flex-row justify-center items-center gap-14">
      <div className="w-1/2 h-1/2 flex flex-col justify-center gap-5">
        <h2 className="py-3 text-start text-6xl font-bold padding-10 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">
          Moto
        </h2>
        <div className="py-4 text-green-100 text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolore
          aliquid, possimus, voluptatum voluptatem odio suscipit atque qui.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ab
          amet dignissimos ipsa molestias, quia consectetur dicta. Doloremque
          molestias praesentium odio ratione unde ab nesciunt magnam non
          pariatur? Rem, ullam!
        </div>
      </div>
      <div className="w-1/2 h-1/2 bg-white shadow-2xl rounded-md "></div>
    </div>
  );
};

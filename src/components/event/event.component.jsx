export const Event = ({ events }) => {
  return (
    <div
      className={`transition-transform duration-300 ease-in-out bg-white rounded-sm shadow-xl w-80 h-60 hover:${
        events ? "scale-110" : "scale-110"
      }`}
    >
      <div className="w-full h-full transition-[background-color] duration-100 ease-in-out hover hover:bg-[rgba(10,10,10,0.3)]">
        <div className="flex items-center justify-center w-full h-full opacity-0 hover:opacity-100">
          <p className="p-5 text-center text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            quibusdam iste corporis exercitationem laboriosam molestiae sunt
            excepturi delectus est alias quo voluptatum explicabo, quam
            provident fugiat accusamus voluptatem asperiores? Temporibus!
          </p>
        </div>
      </div>
    </div>
  );
};

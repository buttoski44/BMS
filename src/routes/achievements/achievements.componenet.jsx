import Paper from "../../assets/paper.jpg";
export const Achievements = () => {
   return ( 
      <div className='w-full h-full'>
         <div className="h-86 mx-20 bg-contain " style={{ backgroundImage: `url(${Paper})`}}>
            <div className="h-14 flex justify-center items-center gap-2 ">
               <button className="w-24 h-full outline-none bg-[#f3f3f3] transition-all delay-75 duration-150 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl hover:border-none hover:scale-105">SSC</button>
               <button className="w-24 h-full outline-none bg-[#f3f3f3] transition-all delay-75 duration-150 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl hover:border-none hover:scale-105">NTSE</button>
               <button className="w-24 h-full outline-none bg-[#f3f3f3] transition-all delay-75 duration-150 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl hover:border-none hover:scale-105">MTSE</button>
               <button className="w-24 h-full outline-none bg-[#f3f3f3] transition-all delay-75 duration-150 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl hover:border-none hover:scale-105">Scholarship</button>
               <button className="w-24 h-full outline-none bg-[#f3f3f3] transition-all delay-75 duration-150 ease-in hover:cursor-pointer hover:bg-[#e4e2e2] hover:rounded-md  hover:shadow-2xl hover:border-none hover:scale-105">Other</button>
            </div>
            <div className="mt-2 w-full h-84 flex justify-center gap-32 ">
               <div className="my-5 w-[270px] h-[320px] bg-[#c5c4c4] flex flex-col justify-end border-[#c2c2c2] border-solid border-[1px]">
                  <div className="w-full h-14 bg-[#f3f3f3]"></div>
               </div>
               <div className="my-5 w-[270px] h-[320px] bg-[#c5c4c4] flex flex-col justify-end border-[#c2c2c2] border-solid border-[1px]">
                  <div className="w-full h-14 bg-[#f3f3f3]"></div>
               </div>
               <div className="my-5 w-[270px] h-[320px] bg-[#c5c4c4] flex flex-col justify-end border-[#c2c2c2] border-solid border-[1px]">
                  <div className="w-full h-14 bg-[#f3f3f3]"></div>
               </div>
            </div>
         </div>
      </div>
   )
};
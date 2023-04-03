import { GoogleMap } from "../../components/google-map/google-map.component";


export const Contact = () => {
   return ( 
      <div className='mt-5 mx-20 p-5 bg-[#f3f3f3]'>
         <div className="flex justify-center my-5">
            <div className="flex flex-col w-1/2 pl-60">
               <p>Email:<br/>BMS1976@gmail.com</p>
               <p>Tele No.<br/> +2145-50987</p>
               <br/>
               <br/>
               <p>Address:<br/>Plot NO.110. ,Near Colagate company,<br/> bajananagar, Aurangabad.</p>
            </div>
            <GoogleMap/>
         </div>
      </div>
   )
};
import Single from '../Assets/single.png'
import Double from '../Assets/double.png'
import Triple from '../Assets/triple.png'

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            {/*the card  */}
            <div className="w-[90%] mx-auto shadow-xl flex flex-col p-4 md:0 my-8  rounded-xl
              hover:scale-110 duration-300 items-center">
              <img src={Single} alt=""  
                className='w-20 mx-auto mt-[-3rem] bg-white'
              />
              <h2 className='text-2xl font-bold text-center py-8'>
               Single user
               </h2>
              <p className='font-bold text-4xl'>149$</p>
              <div className='font-medium'>
                  <p className='py-2 border-b mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b '>1 Granted user</p>
                  <p className='py-2 border-b '>Send up tp 2 GB</p>
              </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 
                mx-auto py-3 text-black'>
                  Start Trial
                </button>
            </div>
            {/* **************** */}
            {/*the card  */}
            <div className="w-[90%] mx-auto shadow-xl flex flex-col p-4 md:0 my-8   rounded-xl
              hover:scale-105 duration-300 items-center">
              <img src={Double} alt=""  
                className='w-20 mx-auto mt-[-3rem] bg-white'
              />
              <h2 className='text-2xl font-bold text-center py-8'>
               Single user
               </h2>
              <p className='font-bold text-4xl'>149$</p>
              <div className='font-medium'>
                  <p className='py-2 border-b mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b '>1 Granted user</p>
                  <p className='py-2 border-b '>Send up tp 2 GB</p>
              </div>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 
                mx-auto py-3 bg-black'>
                  Start Trial
                </button>
            </div>
            {/* **************** */}
            {/*the card  */}
            <div className="w-[90%] mx-auto shadow-xl flex flex-col p-4 md:0 my-8  rounded-xl
              hover:scale-105 duration-300 items-center">
              <img src={Triple} alt=""  
                className='w-20 mx-auto mt-[-3rem] bg-white'
              />
              <h2 className='text-2xl font-bold text-center py-8'>
               Single user
               </h2>
              <p className='font-bold text-4xl'>149$</p>
              <div className='font-medium'>
                  <p className='py-2 border-b mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b '>1 Granted user</p>
                  <p className='py-2 border-b '>Send up tp 2 GB</p>
              </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 
                mx-auto py-3 text-black'>
                  Start Trial
                </button>
            </div>
            {/* **************** */}
            
        </div>
    </div>
  )
}

export default Cards

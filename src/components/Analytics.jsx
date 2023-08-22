import Laptop from '../Assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto 
      grid md:grid-cols-2 text-center'>
            <img src={Laptop} alt="" 
                className='w-[500px] mx-auto my-4'
            />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold' >
                DATA ANALYTICS DASHBOARD
                </p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>
                Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem beatae deserunt consequatur saepe repellendus eos ullam illum facilis quasi, exercitationem eaque voluptate voluptatum dolore perspiciatis doloribus eveniet aspernatur nisi adipisci!</p>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium
                         my-6 mx-auto py-3 bg-black'>
                    Get started
                </button>
            </div>
      </div>
    </div>
  )
}

export default Analytics
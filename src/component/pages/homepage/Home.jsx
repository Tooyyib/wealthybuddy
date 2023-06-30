import group from '../../img/group.png'
import woman from '../../img/woman.png'
import vector from '../../img/vector.png'
import laptop from '../../img/laptop.png'
import volunteer1 from '../../img/volunteer1.png'
import volunteer2 from '../../img/volunteer2.png'
import volunteer3 from '../../img/volunteer3.png'
import volunteer4 from '../../img/volunteer4.png'
import volunteer5 from '../../img/volunteer5.png'
import volunteer6 from '../../img/volunteer6.jpg'




import Container from "../../shared/nav/Container"

const Home = ( ) => {
  return (
<Container>
    <div className='flex justify-center font-Montserrat my-[4rem]'>
    <p className='text-[4.3rem] my-[-0.9rem] '>Be the <br /> next <p className='text-[1rem]'>Naija hottest<br />job with N1m<br />monthly salary.</p></p>
    <img className='w-[30rem] relative right-[11.1rem]' src={group} alt="people" />
    </div>
    <div className='flex flex-col justify-center row font-Montserrat my-[-9rem]'>
      <button><a className='bg-[#ffffe] rounded text-[3rem]' href="">Wealthybuddy</a></button> 
      <button className='my-[-2rem]'><a className='bg-[#ffffe] rounded text-[4.3rem] text-[#99bf19] ' href="">Ambassador</a></button> 
      <button className='my-[1rem]'><a className='bg-[#ffffe] rounded text-[1rem] bg-[#99bf18] text-[#ffff]' href="">Apply now</a></button> 
    </div>

    <div className='flex justify-evenly my-[17rem] item-center px-[16rem]'>
    <img className='w-[5rem]' src={vector} alt="vector" />
    <img className='w-[15rem]' src={woman} alt="woman" />
      <div className='w-[19rem] h-[7rem]'>
        <h2 className='font-semibold'>About the job...</h2>
        <p>As the Wealthbuddy lifestyle ambassador. 
            your main responsibility will be to use your unique skills, abilities, or talents to help
            people make better decisions with their
            money and switch up their lifestyles. 

            Salary: N1m monthly (3 months contract)
            Experience: None required <br />
            Age: Just be above 18.</p>
            <button className='my-[1rem] font-Montserrat'><a className='bg-[#ffffe] rounded text-[1rem] bg-[#99bf18] text-[#ffff]' href="">LEARN MORE</a></button>
      </div>


    </div>
    <div className='flex justify-evenly my-[17rem] item-center px-[16rem]'>
      <div className='w-[19rem] h-[7rem]'>
        <h2 className='font-semibold'>About Wealthbuddy</h2>
        <p>
          Wealthbuddy by Meristem is a savings and investment app that helps conveniently save money, grow money, and pay bills. 
            Everybody has a desired lifestyle they’d love to live. At Wealthbuddy, our goal is to help you grow your money so you can consistently live the life you’ve always dreamed of. Wealthbuddy is the app that helps you switch up your lifestyle.
            The Wealthbuddy app has many savings and investment plans to choose from.
      </p>
            <button className='my-[1rem] font-Montserrat'><a className='bg-[#ffffe] rounded text-[1rem] bg-[#99bf18] text-[#ffff]' href="">READ MORE</a></button>
      </div>
      <img className='w-[15rem]' src={laptop} alt="laptop" />
    </div>
    
    <div className='flex justify-evenly font-Montserrat'>
      <p>Featured Applicants </p>
      <button>View ALL</button>
    </div>
    
    <marquee>
    <div className="flex justify-between px-[7rem] my-[1rem]">
      <div className='flex justify-between border w-[15rem] p-[0.6rem] items center rounded'>
        <img className='w-[3rem] h-[3rem] rounded-full' src={volunteer1} alt="volunteer" />
        <p>Seun Babs <br />@sbee</p>
        <button className='bg-[#99bf18] rounded text-[#ffff] w-[3rem] p-[0.6rem]'>view</button>
      </div>
      <div className='flex justify-between border w-[15rem] p-[0.6rem]'>
      <img className='w-[3rem] h-[3rem] rounded-full' src={volunteer2} alt="volunteer" />
        <p>Tosin Green <br />@tgreen</p>
        <button className='bg-[#99bf18] rounded text-[#ffff] w-[3rem] p-[0.6rem]'>view</button>
      </div>
      <div className='flex justify-between border w-[15rem] p-[0.6rem]'>
      <img className='w-[3rem] h-[3rem] rounded-full' src={volunteer3} alt="volunteer" />
        <p>Johnson Nnaji <br />sonji</p>
        <button className='bg-[#99bf18] rounded text-[#ffff] w-[3rem] p-[0.6rem]'>view</button>
      </div>
    </div>
    </marquee>
    
    <marquee>
    <div className="flex justify-between px-[7rem] my-[1rem] p-[0.6rem] items center">
    <div className='flex justify-between border w-[15rem] p-[0.6rem] rounded'>
    <img className='w-[3rem] h-[3rem] rounded-full' src={volunteer4} alt="volunteer" />
        <p>Olusegun Kajola<br />@se-kajo</p>
        <button className='bg-[#99bf18] rounded text-[#ffff] w-[3rem] p-[0.6rem]'>view</button>
      </div>
      <div className='flex justify-between border w-[15rem] p-[0.6rem] rounded'>
      <img className='w-[3rem] h-[3rem] rounded-full' src={volunteer5} alt="volunteer" />
        <p>Nelson Adewale <br />@el_wale</p>
        <button className='bg-[#99bf18] rounded text-[#ffff] w-[3rem] p-[0.6rem]'>view</button>
      </div>
      <div className='flex justify-between border w-[15rem] p-[0.6rem] rounded'>
      <img className='w-[3rem] h-[3rem] rounded-full' src={volunteer6} alt="volunteer" />
        <p>Adebisi toyyib <br />@tboi</p>
        <button className='bg-[#99bf18] rounded text-[#ffff] w-[3rem] p-[0.6rem]'>view</button>
      </div>
    </div>
    </marquee>
</Container>
  )
}

export default Home
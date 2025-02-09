import React from 'react'
import TeamCard from '../../components/Teams Page/TeamCard';
import overwatchTeamData from '../../data/Overwatch Team.json';
import overwatchTeamBData from '../../data/Overwatch Team B.json';


const Overwatch = () => {
  return (
    <div>
      <section className=' pt-[87px] flex justify-center' id='Banner'>
        <div className='absolute h-[300px] w-full overflow-hidden'>
          <img
            src={require(`../../images/Team Page/Esports Banner/Overwatch Banner.png`)}
            className="h-full object-cover"
            loading="lazy"
            alt='Overwatch Banner'
          />
        </div>
        <div className='absolute pt-5 sm:w-max w-[80%]'>
          <img
            src={require(`../../images/Team Page/Esports Banner/Overwatch Logo.png`)}
            loading="lazy"
            alt='Overwatch Logo'
          />
        </div>
      </section>
        <section className='pt-80 font-Montserrat'>
          <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F]'>
            UCSC A Team
          </div>
          <div className='flex justify-center max-[1100px]:px-[50px] pt-3'>
            <img src={require('../../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
          </div>
          <div className='min-[1100px]:px-[215px] px-[50px] text-[25px] pt-[30px] text-center'>
            University of California, Santa Cruz | Overwatch Varsity Team
          </div>
          <div className='container mx-auto pb-24 pt-12 px-8 '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
              {overwatchTeamData.map((teamMember) => (
                <TeamCard key={teamMember.id} {...teamMember} />
              ))}
            </div>
          </div>
        </section>
        <section className='font-Montserrat'>
          <div className='flex justify-center sm:text-5xl text-3xl text-[#00588F]'>
            UCSC B Team
          </div>
          <div className='flex justify-center max-[1100px]:px-[50px] pt-3'>
            <img src={require('../../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
          </div>
          <div className='min-[1100px]:px-[215px] px-[50px] text-[25px] pt-[30px] text-center'>
            University of California, Santa Cruz | Overwatch Junior Varsity Team
          </div>
          <div className='container mx-auto pb-24 pt-12 px-8 '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
              {overwatchTeamBData.map((teamMember) => (
                <TeamCard key={teamMember.id} {...teamMember} />
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}

export default Overwatch
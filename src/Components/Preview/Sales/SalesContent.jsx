import React, { useContext } from 'react'
import { userContext } from '../Business/BusinessContext'
import Img from '../Marketing/marketingresumepfp.jpg'




function SalesContent() {
    const { data } = useContext(userContext)
    const experience = [
        {
            id: 1,
            title: "Business Analyst Intern",
            company: "Arowwai Industries",
            startdate: "4 sept 2020",
            enddate: "4 sept 2022",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis nobis odit, quidem eos aliquam itaque omnis, molestiae veniam, porro placeat. Aliquam laudantium dicta veritatis, accusantium id tempore ex reprehenderit!"
        },
    ]
    const edu = [
        {
            id: 1,
            title: "Bachelor of Science in Business Administration",
            institution: "University of Ghana",
        }
    ]
    const skills = [{
        id: 1,
        skill: 'Your Technical skills goes here'
    }]

    const acti = [
        {
            id: 1,
            title: "President, Business Club",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        }
    ]
    const project = [{
        "id": 1,
        "title": "Project 1",
        "description": "This is project 1",
    }]
    return (
        <div>
            <div className='flex w-full flex-1 overflow-hidden border border-[#323B4C]'>
                <div className='  p- w-[35%] h-auto  '>
                    <div className='flex flex-col gap-5 relative'>
                    <div className='bg-[#F1F1F1] p-8 h-[300px]'>
                            {data.img == '' ? < img className='h-44 w-44 rounded-full ' src={Img} alt="Preview" /> : < img className='h-44 w-44 rounded-full' src={data.img} alt="Preview" />}

                        </div>



                        <div className='polygon h-48 absolute w-[17.3vw] ml-[-2.2vw] mt-[7.2vw] bg-[#29555E] polgonprint'></div>
                        <div className='bg-[#29555E] mt-[-1.2vw] polgonprint1 h-full'>
                            <div className='font-sans text-white text-[24px] ml-4 mt-[-vw] '>

                                <h1 className='resume-heading1'>Contact</h1>
                            </div >
                            <div className='border border-zinc-400 mt-[vw] ml-4 w-[215px]  '></div>
                            <div className='flex flex-col gap-2 mt-2'>
                            <div className='font-sans text-white ml-4 mt-'>
                             
                             <p className='text-zinc-400 mt-[-5px] text-[13px]'>{data.phone ? data.phone : "+91 123-456-789"}</p>
                         </div>
                         <div className='font-sans text-white ml-4 mt-'>
                             
                             <p className='text-zinc-400 text-[13px] mt-[-5px] w-full'>{data.email ? data.email : "xyz@reallyagoodmail.com ."}</p>
                         </div>
                         {data.website && (
                         <div className='font-sans text-white ml-4 mt-'>
                           
                             <p className='text-zinc-400 mt-[-5px] text-[13px]'>{data.website}</p>
                         </div>
                     )}
                     <div className='font-sans text-white ml-4 mt-'>
                      
                         <p className='text-zinc-400 mt-[-5px] text-[13px]'>{data.address ? data.address : "123 anywhere anycity 23432"}</p>
                     </div>
                            </div>
                        <div className='font-mono text-white text-[24px] ml-4 mt-5 '>
                            <h1 className='resume-heading1'>Education</h1>
                        </div>
                        <div className='border border-zinc-400 mt-[vw] ml-4 w-[215px]  '></div>
                        <div>
                            {(data.education !== null && Object.keys(data.education).length > 0) && (
                                <div className='resume-paragraph ml-4 mt-2'>
                                    <h4 className='font-semibold font-sans text-white text-[15px]'>{data.education.title || edu[0].title}</h4>
                                    <p className='font-mono text-zinc-400 text-[13px]'>{data.education.institution || edu[0].institution}</p>


                                </div>


                            )}
                            {data.educations.length > 0 && (
                                <div>
                                    <div className='py-4 flex gap-6'>
                                        <div className=''>

                                            <div className='flex-col space-y-1 mt-[-1.2vw] ml-4 text-[2vh]'>
                                                {data.educations.map((edu) => (
                                                    <div key={edu.id} className='resume-paragraph mt-2'>
                                                        <h4 className='font-semibold font-sans text-white text-[15px]'>{edu.title}</h4>
                                                        <p className='font-mono text-zinc-400 text-[13px]'>{edu.institution}</p>

                                                    </div>

                                                ))}
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            )}
                        </div>
                        <div>
                            {(data.activity !== null && Object.keys(data.activity).length > 0) && (
                                <div>
                                    <div className='ml-4 mt-'>
                                        <h2 className='resume-heading1  font-sans text-white text-[22px]  tracking-[2px]'>Extracurricular Activities</h2>
                                        <div className='border border-zinc-400 mt-[0.5vw]  w-[215px]  '></div>
                                        <div className='flex-col space-y-1 mt-2 text-[2vh]'>
                                            <div className='resume-paragraph mt'>
                                                <h4 className='font-semibold font-sans text-white text-[15px]'>{data.activity.title || acti[0].title}</h4>
                                                <p className='text-zinc-400 font-sans text-[13px]'>{data.activity.description || acti[0].description} </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            )

                            }
                            {data.activities.length > 0 && (
                                <div>
                                    <div className='ml-4'>
                                        <h2 className='resume-heading1  font-sans text-white text-[22px]  tracking-[2px]'>Extracurricular Activities</h2>
                                        <div className='border border-zinc-400 mt-[0.5vw]  w-[215px]  '></div>
                                        <div className='flex-col space-y-1 mt-2'>
                                            {data.activities.map((act) => (
                                                <div key={act.id}>
                                                    <div className='flex-col space-y-1 mt- text-[2vh]'>
                                                        <div className='resume-paragraph'>
                                                            <h4 className='font-semibold font-sans text-white text-[15px]'>{act.title}</h4>
                                                            <p className='text-zinc-400 font-sans text-[13px]'>{act.description} </p>

                                                        </div>

                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            )}
                            <div>
                            {(data.tech !== null && Object.keys(data.tech).length > 0) && (
                                <div>
                                    <div className=' mt-2 ml-4'>
                                        <h2 className='resume-heading1  font-sans  uppercase text-white text-[22px]'>Skills</h2>
                                        <div className='border border-zinc-400 mt-[0.5vw]  w-[215px]  '></div>
                                        <p className='text-zinc-400 text-[13px]'>{data.tech.skill || skills[0].skill}</p>

                                    </div>
                                </div>
                            )}


                            {data.techs.length > 0 && (
                                <div>
                                    <div className=' mt-2 ml-4'>
                                        <h2 className='resume-heading1  font-sans tracking-wider uppercase text-white text-[22px]'>Skills</h2>
                                        <div className='border border-zinc-400 mt-[0.5vw]  w-[215px]  '></div>

                                        <div className=' gap-5 mt-2'>
                                            {data.techs.map((tech) => (
                                                <div key={tech.id} className='flex'>
                                                    <div className='flex gap-5  '>
                                                        <p className='flex text-zinc-400 text-[13px]'>{tech.skill}</p>
                                                    </div>

                                                </div>
                                            ))}



                                        </div>


                                    </div>
                                </div>

                            )}
                        </div>
                        </div>

                        </div>
                        
                       



                    </div>
                    
                </div>
                <div className='p-8 pr-10 pt-14'>
                    <div className='flex flex-col gap-3'>
                        <div className='overflow-hidden '>
                            <h1 className='resume-heading resume-name font-bold   text-[#323B4C] font-sans leading-none text-[3vw]  overflow-hidden'>
                                {data.name ? data.name : "Mariana Anderson"}
                            </h1>
                            <h3 className='resume-heading1 resume-name font-bold   text-[#323B4C] font-mono leading-none text-[1.5vw] mt-3 overflow-hidden'>
                                {data.post ? data.post : "Sales Representative"}
                            </h3>


                        </div>
                        <div className=' leading-tight text-zinc-600 text-[13px] overflow-hidden mt-20'>
                        <h2 className='resume-heading1 font-bold font-mono tracking-wider uppercase text-[#323B4C] text-[24px]'>Profile</h2>
                            <p className='resume-paragraph mt-2 leading-1 font-sans    '>{data.discription1 ? data.discription1 : " Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager. Offering a strong foundation in business strategy, data analysis, and project management, with a proven ability to drive efficiency, deliver successful outcomes and collaborate within cross-functional teams."}</p>
                        </div>
                        <div className='mt-5'>
                            {(data.exp !== null && Object.keys(data.exp).length > 0) && (
                                <div>
                                    <div className='py-4'>
                                        <h2 className='resume-heading1 font-bold font-mono tracking-wider uppercase text-[#323B4C] text-[24px]'>Experience</h2>

                                        <div className='flex-col space-y-4'>
                                            <div>
                                                <div className='flex justify-between'>
                                                    <h5 className='resume-heading font-semibold font-sans tracking-tight'>{data.exp.company || experience[0].company}</h5>
                                                    <h5 className='resume-heading font-semibold font-sans tracking-tight uppercase'>{data.exp.startdate || experience[0].startdate} {` to `} {data.exp.enddate || experience[0].enddate}</h5>
                                                </div>
                                                <h6 className='resume-heading font-semibold font-sans tracking-tight'>{data.exp.title || experience[0].title}</h6>
                                                <p className='resume-paragraph leading-1 font-sans  text-zinc-600 text-[13px]'>{data.exp.description || experience[0].description}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {data.experiences.length > 0 && (
                                <div>
                                    <div className='py-4'>
                                        <h2 className='resume-heading1 font-bold font-mono tracking-wider uppercase text-[#323B4C] text-[24px]'>Experience</h2>
                                        <div className='flex-col space-y-4'>
                                            {data.experiences.map((exp) => (
                                                <div key={exp.id}>
                                                    <div className='flex justify-between'>
                                                        <h5 className='resume-heading font-semibold font-sans tracking-tight'>{exp.company}</h5>
                                                        <h5 className='resume-heading font-semibold font-sans tracking-tight uppercase'>{exp.startdate} - {exp.enddate}</h5>
                                                    </div>
                                                    <h6 className='resume-heading font-semibold font-sans tracking-tight'>{exp.title}</h6>
                                                    <p className='resume-paragraph leading-1 font-sans text-zinc-600 text-[13px]'>{exp.description}</p>

                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                        
                        <div>
                            {(data.project !== null && Object.keys(data.project).length > 0) && (
                                <div>
                                    <div className=' mt-2 '>
                                        <h2 className='resume-heading1 font-bold font-mono tracking-wider uppercase text-[#323B4C] text-[24px]'>Projects</h2>
                                        <h5 className='resume-heading font-semibold font-sans tracking-tight'>{data.project.title || project[0].title}</h5>

                                        <p className='w-full text-zinc-600 text-[13px]'>{data.project.description || project[0].description}</p>

                                    </div>
                                </div>
                            )}
                            {data.projects.length > 0 && (
                                <div>
                                    <div className=' mt-2 '>
                                        <h2 className='resume-heading1 font-bold font-mono tracking-wider uppercase text-[#323B4C] text-[24px]'>Projects</h2>
                                        <div className='mt- gap-5 flex-col flex'>
                                            {data.projects.map((pro) => (
                                                <div key={pro.id} >

                                                    <h5 className='resume-heading font-semibold font-sans tracking-tight'>{pro.title}</h5>
                                                    <p className='w-full text-zinc-600 text-[13px]'>{pro.description}</p>

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            )}
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default SalesContent

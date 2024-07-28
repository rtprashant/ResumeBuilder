import React, { useContext } from 'react'
import { userContext } from './BusinessContext';


function Content() {

 

  const { data } = useContext(userContext);
  
  const project = [{
    "id": 1,
    "title": "Project 1",
    "description": "This is project 1",
  }]
  const skills = [{
    id: 1,
    skill: 'Your Technical skills goes here'
  }]
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
  const acti = [
    {
      id: 1,
      title: "President, Business Club",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis nobis odit, quidem eos aliquam itaque omnis, molestiae veniam, porro placeat. Aliquam laudantium dicta veritatis, accusantium id tempore ex reprehenderit!",
    }
  ]
  const edu = [
    {
      id: 1,
      title: "Bachelor of Science in Business Administration",
      institution: "University of Ghana",
    }
  ]
  const defaultCompetencies = [
    "Process improvement",
    "Report writing and presenting",
    "Strong interpersonal skills",
    "Data-driven strategic planning",
    "Critical thinking skills",
    "Proactive and self-motivated",
    "Cost-benefit analysis",
    "Excellent communication skills",
    "Exceptional organisational skills",
  ]
  const displayedCompetencies = data.keycompetencies.map((comp, index) => comp || defaultCompetencies[index]);



  return (
   
    <div>
      
      <div className=' w-full p-16 mr-[-5vw] bg- text-black bg mt-[0px]'>
        <h1 className='resume-heading font-bold font-sans leading-none text-[3vw]'>
          {data.name ? data.name : "Henrittea Mitchell"}

        </h1>
        <div className='flex gap-2 mt-2'>
          <h5 className='resume-paragraph'>{data.phone ? data.phone : "+91 123-456-789"}</h5>
          <h5 className='resume-paragraph'>{data.email ? data.email : "xyz@reallyagoodmail.com ."}</h5>
          {data.website && <h5 className='resume-paragraph'>{data.website}</h5>}
        </div>
        <div className='resume-paragraph'>
          <h5>{data.address ? data.address : "123 anywhere anycity 23432"}</h5>
        </div>
        <div className='border mt-6 border-black'></div>
        <div className='py-4'>
          <h2 className='resume-heading font-bold font-sans tracking-wider uppercase'>{data.heading1 ? data.heading1 : "Business management & Analysis"}</h2>
          <p className='resume-paragraph mt-2 leading-1 font-sans text-[2vh]'>{data.discription1 ? data.discription1 : "Motivated and results-driven Business School graduate seeking a challenging position within a large organisation as a Business Analyst or Project Manager. Offering a strong foundation in business strategy, data analysis, and project management, with a proven ability to drive efficiency, deliver successful outcomes and collaborate within cross-functional teams."}</p>
        </div>
        <div className='border border-black'></div>
        <div className='py-4'>
          <h2 className='resume-heading font-bold font-sans tracking-wider uppercase'>Key Competencies</h2>
          <div className='flex justify-between gap-5 text-[2vh]'>
            <div>
              {displayedCompetencies.slice(0, 3).map((competency, index) => (
                <div key={index} className='mt- leading-1 font-sans gap-5 tracking-tight'>
                  <p className='resume-paragrah '>{competency}</p>

                </div>
              ))}

            </div>

            <div>
              {displayedCompetencies.slice(3, 6).map((competency, index) => (
                <div key={index} className='mt- leading-1 font-sans flex-col gap-10'>
                  <p className='resume-paragraph '>{competency}</p>


                </div>
              ))}

            </div>
            <div>
              {displayedCompetencies.slice(6, 9).map((competency, index) => (
                <div key={index} className='mt- leading-1 font-sans flex-col gap-10'>
                  <p className='resume-paragraph '>{competency}</p>

                </div>
              ))}

            </div>



          </div>
        </div>
        <div className='border border-black'></div>
        <div>
          {(data.exp !== null && Object.keys(data.exp).length > 0) && (
            <div>
              <div className='py-4'>
                <h2 className='resume-heading font-bold font-sans tracking-wider uppercase'>Professional Experience</h2>

                <div className='flex-col space-y-4'>
                  <div>
                    <div className='flex justify-between'>
                      <h5 className='resume-heading font-semibold font-sans tracking-tight'>{data.exp.company || experience[0].company}</h5>
                      <h5 className='resume-heading font-semibold font-sans tracking-tight uppercase'>{data.exp.startdate || experience[0].startdate} {` to `} {data.exp.enddate || experience[0].enddate}</h5>
                    </div>
                    <h6 className='resume-heading font-semibold font-sans tracking-tight'>{data.exp.title || experience[0].title}</h6>
                    <p className='resume-paragraph leading-1 font-sans text-[2vh]'>{data.exp.description || experience[0].description}</p>
                  </div>
                </div>
              </div>
              <div className='border border-black'></div>
            </div>
          )}
          {data.experiences.length > 0 && (
            <div>
              <div className='py-4'>
                <h2 className='resume-heading font-bold font-sans tracking-wider uppercase'>Professional Experience</h2>
                <div className='flex-col space-y-4'>
                  {data.experiences.map((exp) => (
                    <div key={exp.id}>
                      <div className='flex justify-between'>
                        <h5 className='resume-heading font-semibold font-sans tracking-tight'>{exp.company}</h5>
                        <h5 className='resume-heading font-semibold font-sans tracking-tight uppercase'>{exp.startdate} - {exp.enddate}</h5>
                      </div>
                      <h6 className='resume-heading font-semibold font-sans tracking-tight'>{exp.title}</h6>
                      <p className='resume-paragraph leading-1 font-sans text-[2vh]'>{exp.description}</p>

                    </div>
                  ))}
                </div>
              </div>
              <div className='border border-black'></div>
            </div>
          )}
        </div>



        <div className='py-4 flex gap-6'>
          <div className=' w-[50%]'>
            <h2 className='resume-heading uppercase font-bold font-sans tracking-[2px] '>Education & Certifications</h2>
            <div className='flex-col space-y-1 mt-2 text-[2vh]'>
              {(data.education !== null && Object.keys(data.education).length > 0) && (
                <div className='resume-paragraph '>
                  <h4 className='font-semibold font-sans'>{data.education.title || edu[0].title}</h4>
                  <p>{data.education.institution || edu[0].institution}</p>
                  

                </div>
                

              )}

            </div>
            {data.educations.length > 0 && (
              <div>
                <div className='py-4 flex gap-6'>
                  <div className='w-[50%]'>

                    <div className='flex-col space-y-1 mt-[-1.2vw] text-[2vh]'>
                      {data.educations.map((edu) => (
                        <div key={edu.id} className='resume-paragraph'>
                          <h4 className='font-semibold font-sans'>{edu.title}</h4>
                          <p>{edu.institution}</p>
                          
                        </div>

                      ))}
                    </div>

                  </div>

                </div>

              </div>

            )}
          </div>

          <div className='w-[50%] '>
            <div>
              {(data.activity !== null && Object.keys(data.activity).length > 0) && (
                <div>
                  <div>
                    <h2 className='resume-heading uppercase font-bold font-sans tracking-[2px]'>Extracurricular Activities</h2>
                    <div className='flex-col space-y-1 mt-2 text-[2vh]'>
                      <div className='resume-paragraph'>
                        <h4 className='font-semibold font-sans'>{data.activity.title || acti[0].title}</h4>
                        <p>{data.activity.description || acti[0].description} </p>

                      </div>

                    </div>

                  </div>

                </div>

              )

              }
              {data.activities.length > 0 && (
                <div>
                  <div className='py-4'>
                    <h2 className='resume-heading font-bold font-sans tracking-wider uppercase'>Extracurricular Activities</h2>
                    <div className='flex-col space-y-4'>
                      {data.activities.map((act) => (
                        <div key={act.id}>
                          <div className='flex-col space-y-1 mt-2 text-[2vh]'>
                            <div className='resume-paragraph'>
                              <h4 className='font-semibold font-sans'>{act.title}</h4>
                              <p>{act.description} </p>

                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='border border-black'></div>
                </div>
              )}
            </div>



          </div>
        </div>
        <div className='border border-black mt-5'></div>

        <div>
          {(data.tech !== null && Object.keys(data.tech).length > 0) && (
            <div>
              <div className=' mt-2 '>
                <h2 className='resume-heading uppercase font-bold font-sans tracking-[2px]'>Skill</h2>
                <p>{data.tech.skill || skills[0].skill}</p>
                <div className='border border-black mt-5'></div>
              </div>
            </div>
          )}
        

          {data.techs.length > 0 && (
            <div>
              <div className=' mt-2 '>
                <h2 className='resume-heading uppercase font-bold font-sans tracking-[2px]'>Skill</h2>
                
                <div className='flex flex-wrap gap-5 mt-2'>
                  {data.techs.map((tech) => (
                    <div  key={tech.id} className='flex'>
                      <div className='flex gap-5  '>
                      <p className='flex'>{tech.skill}</p>
                      </div>

                    </div>
                  ))}
                  <div className='border border-black mt-5 w-full'></div>
                

                </div>
                
              
              </div>
            </div>

          )} 
        </div>

        <div>
          {(data.project !== null && Object.keys(data.project).length > 0) && (
            <div>
              <div className=' mt-2 '>
                <h2 className='resume-heading uppercase font-bold font-sans tracking-[2px]'>Projects</h2>
                <h5 className='resume-heading font-semibold font-sans tracking-tight'>{data.project.title || project[0].title}</h5>

                <p className='w-full'>{data.project.description || project[0].description}</p>
                <div className='border border-black mt-5'></div>
              </div>
            </div>
          )}
          {data.projects.length > 0 && (
            <div>
              <div className=' mt-2 '>
                <h2 className='resume-heading uppercase font-bold font-sans tracking-[2px]'>Projects</h2>
                <div className='mt- gap-5 flex-col flex'>
                  {data.projects.map((pro) => (
                    <div key={pro.id} >
                      
                      <h5 className='resume-heading font-semibold font-sans tracking-tight'>{pro.title}</h5>
                      <p className='w-full'>{pro.description}</p>
                     
                    </div>
                  ))}
                </div>
              </div>
            </div>

          )}
        </div>
      </div>
    </div>
  )
}

export default Content

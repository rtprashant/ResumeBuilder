import React, { useContext, useState } from 'react'
import { userContext } from './BusinessContext'
import {NavLink ,  useNavigate} from 'react-router-dom'

function Form() {
  const { data, setData, addKeyCompetency, removeKeyCompetency, removeExperience, addExperience, clearExperience, resetExperience, resetActivity, clearActivity, addActivity, removeActivity, addEducation, clearEducation, removeEducation, resetEducation, removeTech, addTech, resetTech, clearTech ,addProject,removeProject, resetProject ,clearProject } = useContext(userContext);
  
  const [website, setwebsite] = useState('no');
  const [exp, setExp] = useState('yes')
  const [act, setAct] = useState('yes')
  const [newSkill, setNewSkill] = useState('');
  const [newExperience, setNewExperience] = useState('');
  const [Tech, setTech] = useState('yes')
  const [techSkill, setTechSkill] = useState('');
  const [isProject ,setIsProject ] = useState('yes')
  const [project , setProject] = useState('')
  const handleProjectChange = (e)=>{
    const value = e.target.value;
    setIsProject(value);
    if(value === 'no'){
      clearProject()
    }else{
      resetProject()
    }
  }
  const handleInputChangePro = (event)=>{
    const {name , value} = event.target;
    setProject((prev)=>({...prev , [name] : value}));
    setData((prev)=>({...prev , project : {...prev.project ,[name] : value}}))

  }
  const AddNewProject =(e)=>{
    e.preventDefault()
    addProject()
    setProject(
      {
        title:'',
        description: ''
      }
    )

  }
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    // Your custom logic here, e.g., form validation, state updates, etc.
    console.log("Button clicked!");

    // Navigate to the preview page after your custom logic
    navigate('/Preview/Business');
  };

  const handleTechChange = (e) => {
    const value = e.target.value;
    setTech(value);
    if (value === 'no') {
      clearTech();
    } else {
      resetTech();
    }
  };
  const AddNewSkill = (e) => {
    e.preventDefault();
    addTech();
    setTechSkill({
      skill: '',
    })
  }
  const handleInputChnageTech = (event) => {
    const { name, value } = event.target;
    setTechSkill((prev) => ({ ...prev, [name]: value }));
    setData((prev) => ({ ...prev, tech: { ...prev.tech, [name]: value } }));
  }
  const handleInputChangeExp = (event) => {
    const { name, value } = event.target;
    setNewExperience((prev) => ({ ...prev, [name]: value }));
    setData((prev) => ({ ...prev, exp: { ...prev.exp, [name]: value } }));
  };


  const AddNewExperience = (e) => {
    e.preventDefault()
    addExperience();
    setNewExperience({
      company: '',
      title: '',
      startdate: '',
      enddate: '',
      description: '',
    });

  };
  const [newEdu, setNewEdu] = useState('');
  const handleInputChangeEdu = (event) => {
    const { name, value } = event.target;
    setNewEdu((prev) => ({ ...prev, [name]: value }));
    setData((prev) => ({
      ...prev, education: {
        ...prev.education, [name]:
          value
      }
    }));
  };

  const AddEducation = (e) => {
    e.preventDefault()
    addEducation();
    setNewEdu({
      title: "",
      institution: "",
    })

  }

  const [newAct, setNewAct] = useState('');
  const handleInputChangeAct = (event) => {
    const { name, value } = event.target;
    setNewAct((prev) => ({ ...prev, [name]: value }));
    setData((prev) => ({ ...prev, activity: { ...prev.activity, [name]: value } }));
  };
  const AddNewActivity = (e) => {
    e.preventDefault()
    addActivity();
    setNewAct({
      title: "",
      description: "",

    })
  }

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      addKeyCompetency(newSkill.trim());
      setNewSkill('');
    }
  };

  const handleExpChange = (e) => {
    const value = e.target.value;
    setExp(value);
    if (value === 'no') {
      clearExperience();
    } else {
      resetExperience();
    }
  };

  const handleActivityChange = (e) => {
    const value = e.target.value;
    setAct(value);
    if (value === 'no') {
      clearActivity();

    } else {
      resetActivity();
    }
    console.log(data.activity)
  }

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setwebsite(value);
    if (value === 'no') {
      setData((prev) => ({ ...prev, website: '' }));
    }
  };
  const [click, setclick] = useState(1);

  const handleNextClick = (e) => {
    e.preventDefault();
    setclick(click + 1);

  }
  const handlePrevClick = (e) => {
    e.preventDefault();
    setclick(click - 1);
  }

  const slide = () => {
    switch (click) {
      case 1:
        return (
          <div>
            <div>
              <h1 className='font-staatliches text-[2vw] text-[#264C42]'>Personal Info</h1>
              <p className='font-spaceGrotesk text-[#656E72] mt-[-1.5vh]'>Get Started With Basic Info</p>
            </div>
            <div className='mt-5'>
              <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor="name">Name</label><br />
              <input
                placeholder='Enter Your full Name'
                className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                type="text"
                name="name"
                value={data.name}
                onChange={handleInputChange}

              />

            </div>
            <div className='mt-5'>
              <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor="phone">Mobile No</label><br />
              <input
                placeholder='Enter Your Mobile Number'
                className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                type="text"
                name="phone"
                value={data.phone}
                onChange={handleInputChange}

              />
            </div>

            <div className='mt-5'>
              <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor="email">Enter Your E-mail</label><br />
              <input
                placeholder='Enter Your E-mail'
                className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                type="email"
                name="email"
                value={data.email}
                onChange={handleInputChange}

              />
            </div>

            <div className='mt-5'>
              <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor="email">Have Any website?</label><br />
              <div className='gap-5 flex'>
                <div>
                  <lable>
                    <input
                      type="radio"
                      name="website"
                      value="yes"
                      onChange={handleRadioChange}
                    /> YES

                  </lable>
                </div>
                <div>
                  <lable>
                    <input
                      type="radio"
                      name="website"
                      value="no"
                      onChange={handleRadioChange}
                    /> NO

                  </lable>
                </div>
                <div className='mt-5 w-full ml-[-7.5vw]'>
                  {website === 'yes' && (
                    <div className='mt-5'>
                      <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor="web">Your Website Name Or URL</label><br />
                      <input
                        placeholder='Enter Your Webiste Name Or URL'
                        className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                        type="text"
                        name="website"
                        value={data.website}
                        onChange={handleInputChange}

                      />
                    </div>)}
                </div>
              </div>

            </div>

            <div className='mt-5'>
              <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor="email">Your Full Address</label><br />
              <textarea
                placeholder='Enter Your Full Address'
                className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] h-32 focus:border-[#264C42]'

                name="address"
                value={data.address}
                onChange={handleInputChange}

              />
            </div>


            <button onClick={handleNextClick}
              className='border border-[#656E72] rounded-lg px-5 mt-4 ml-[39vw] py- font-staatliches text-[25px] hover:text-white hover:bg-[#264C42] transition-all'>
              NEXT</button>
          </div>

        )


      case 2:
        return (
          <div>
            <div>
              <h1 className='font-staatliches text-[2vw] text-[#264C42]'>Additional Info</h1>
              <p className='font-spaceGrotesk text-[#656E72] mt-[-1.5vh]'>Describe Yourself</p>
            </div>
            <div className='mt-5'>
              <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor='heading1'>Edit Heading</label><br />
              <input
                className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                placeholder='eg. BUSINESS MANAGEMENT & ANALYSIS'
                type="text"
                name="heading1"
                value={data.heading1}
                onChange={handleInputChange}

              />
            </div>
            <div className='mt-5'>
              <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor="discription1">Discription</label><br />
              <textarea
                placeholder='Enter Discription'
                className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42] h-[10vw]'
                type="text"
                name="discription1"
                value={data.discription1}
                onChange={handleInputChange}
              />
            </div>
            <div className='mt-5'>
              <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor='heading1'>KEY COMPETENCIES</label><br />
              <div className='flex items-center gap-2'>
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                  placeholder="you can add atmost 9 soft skills so remove some or all before adding more"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className='text-green-500 text-[2vw]'
                >
                  +
                </button>
              </div>

              {data.keycompetencies.map((competency, index) => (
                <div key={index} className='flex items-center gap-2 mt-2'>
                  <p className='font-spaceGrotesk'>{competency}</p>
                  <button
                    type="button"
                    onClick={() => removeKeyCompetency(index)}
                    className='text-red-500 mr-0  text-[20px]'
                  >
                    x
                  </button>
                </div>
              ))}



            </div>


            <div className='flex justify-between'>
              <button onClick={handlePrevClick}
                className='border border-[#656E72] rounded-lg px-5 mt-4   font-staatliches text-[25px] hover:text-white hover:bg-[#264C42] transition-all'>
                Previous</button>
              <button onClick={handleNextClick}
                className='border border-[#656E72] rounded-lg px-5 mt-4  font-staatliches text-[25px] hover:text-white hover:bg-[#264C42] transition-all'>
                NEXT</button>


            </div>
          </div>

        )
      case 3:
        return (
          <div>
            <div>
              <h1 className='font-staatliches text-[2vw] text-[#264C42]'>Experience</h1>
              <p className='font-spaceGrotesk text-[#656E72] mt-[-1.5vh]'>Tell Us About Your Experience / Internship</p>
            </div>
            <div className='mt-5'>
              <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor="haveexperince">Have Any Experience /  Intership ?</label>
            </div>
            <div className='flex gap-5'>
              <div>
                <label htmlFor="experinece" >
                  <input
                    type="radio"
                    value="yes"
                    name="experience"
                    onChange={handleExpChange}
                  />
                  Yes
                </label>
              </div>
              <div>
                <label htmlFor="experinece" >
                  <input
                    type="radio"
                    value="no"
                    name="experience"
                    onChange={handleExpChange}
                  />
                  No
                </label>
              </div>


            </div>
            <div className='mt-5 w-full '>
              {exp === 'yes' && (
                <div className='mt-5'
                >
                  <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor="web">Experience</label><br />
                  <div className='border border-[#264C42] rounded-xl p-5'>
                    <div>
                      <div className='flex justify-between gap-24'>
                        <input
                          className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                          type="text"
                          placeholder='Company Name'
                          name='company'
                          value={newExperience.company}
                          onChange={handleInputChangeExp}
                        />
                        <input
                          className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                          type="text"
                          placeholder='Your Job There'
                          name='title'
                          value={newExperience.title}
                          onChange={handleInputChangeExp}
                        />

                      </div>
                    </div>
                    <div className='flex mt-5 gap-[19vw]'>
                      <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor="web">Start Date</label>
                      <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor="web">End Date</label>
                    </div>

                    <div className='flex justify-between gap-24 mt-1'>

                      <input
                        className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                        type="date"
                        name='startdate'
                        value={newExperience.startdate}
                        onChange={handleInputChangeExp}

                      />

                      <input
                        className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                        type="date"

                        name='enddate'
                        value={newExperience.enddate}
                        onChange={handleInputChangeExp}
                      />
                    </div>
                    <div className='mt-5'>
                      <textarea
                        placeholder='Discription'
                        className='border w-full font-spaceGrotesk p-1 h-36 rounded-lg border-[#656E72] focus:border-[#264C42]'
                        type="text"
                        name='description'
                        value={newExperience.description}
                        onChange={handleInputChangeExp}



                      />



                    </div>
                  </div>
                  <div>
                    <button

                      onClick={AddNewExperience}

                      className='text-green-500 
                    '>
                      + Add Experience
                    </button>

                  </div>



                </div>)}
            </div>
            <div className=' w-full'>
              {data.experiences.map((exp) => (
                <div className='flex gap-2'>
                  <h1>{exp.company}

                  </h1>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      removeExperience(exp.id)
                    }}
                    className='text-red-500'>
                    Remove</button>

                </div>

              ))}

            </div>
            <div className='flex justify-between'>
              <button onClick={handlePrevClick}
                className='border border-[#656E72] rounded-lg px-5 mt-4   font-staatliches text-[25px] hover:text-white hover:bg-[#264C42] transition-all'>
                Previous</button>
              <button onClick={handleNextClick}
                className='border border-[#656E72] rounded-lg px-5 mt-4  font-staatliches text-[25px] hover:text-white hover:bg-[#264C42] transition-all'>
                NEXT</button>


            </div>



          </div>
        )

      case 4:
        return (
          <div>
            <div>
              <h1 className='font-staatliches text-[2vw] text-[#264C42]'>Education</h1>
              <p className='font-spaceGrotesk text-[#656E72] mt-[-1.5vh]'>Tell Us About Education & Certifications And Extracurricular Activities</p>
            </div>
            <div className='mt-5'>
              <label className='font-staatliches text-[20px] text-[#264C42]' htmlFor="haveexperince">Education  &  Certifications</label>
            </div>
            <div className='mt-2'>
              <div className='border border-[#264C42] rounded-xl p-3 '>
                <div>
                  <label htmlFor="university" className='font-staatliches text-[20px] text-[#264C42]'>Degree  /  Certificate</label>
                  <input
                    className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                    placeholder='Start Adding Higher One First'
                    type="text"
                    name="title"
                    value={newEdu.title}
                    onChange={handleInputChangeEdu} />
                </div>
                <div>
                  <label htmlFor="university" className='font-staatliches text-[20px] text-[#264C42]'>University  /  College Name</label>
                  <input
                    className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                    type="text"
                    name='institution'
                    value={newEdu.institution}
                    onChange={handleInputChangeEdu} />
                </div>
                <button
                  onClick={AddEducation}

                  className='text-green-500 mt-2'>
                  + Add Education

                </button>
                <div className=' w-full mt-2'>
                  {data.educations.map((edu) => (
                    <div className='flex gap-2'>
                      {console.log(edu.title)}
                      <h1>{edu.title}

                      </h1>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          removeEducation(edu.id)
                        }}
                        className='text-red-500'>
                        Remove</button>

                    </div>

                  ))}

                </div>

              </div>




              <div className='flex flex-col'>
                <div className='mt-5'>
                  <label className='font-staatliches text-[20px] text-[#264C42] ' htmlFor="activity">
                    Any Extracurricular Activities ?</label>
                </div>
                <div className='flex gap-5'>
                  <div>
                    <label htmlFor="activity" >
                      <input
                        type="radio"
                        value="yes"
                        name="activity"
                        onChange={handleActivityChange}
                      />
                      Yes
                    </label>
                  </div>
                  <div>
                    <label htmlFor="activity" >
                      <input
                        type="radio"
                        value="no"
                        name="activity"
                        onChange={handleActivityChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                {act === 'yes' && (
                  <div>
                    <div className='border border-[#264C42] rounded-xl p-3 '>
                      <div>
                        <label htmlFor="university" className='font-staatliches text-[20px] text-[#264C42]'> Activities</label>
                        <input
                          className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                          type="text"
                          name="title"
                          value={newAct.title}
                          onChange={handleInputChangeAct} />
                      </div>
                      <div>
                        <label htmlFor="university" className='font-staatliches text-[20px] text-[#264C42]'>Description</label>
                        <input
                          className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                          type="text"
                          name='description'
                          value={newAct.description}
                          onChange={handleInputChangeAct} />
                      </div>
                      <button
                        onClick={AddNewActivity}
                        className='text-green-500 mt-2'>
                        + Add Activity
                      </button>

                    </div>
                  </div>

                )}

              </div>

            </div>

            <div className=' w-full'>
              {data.activities.map((act) => (
                <div className='flex gap-2'>
                  {console.log(act.title)}
                  <h1>{act.title}

                  </h1>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      removeActivity(act.id)
                    }}
                    className='text-red-500'>
                    Remove</button>

                </div>

              ))}

            </div>
            <div className='mt-5'>
              <label htmlFor="techchange" className='font-staatliches text-[20px] text-[#264C42]'>Technical Skills ?</label>
              <div className='flex gap-5'>
                <div>
                  <label htmlFor="activity" >
                    <input
                      type="radio"
                      value="yes"
                      name="activity"
                      onChange={handleTechChange}
                    />
                    Yes
                  </label>
                </div>
                <div>
                  <label htmlFor="activity" >
                    <input
                      type="radio"
                      value="no"
                      name="activity"
                      onChange={handleTechChange}
                    />
                    No
                  </label>
                </div>




              </div>

            </div>
            {Tech === 'yes' && (
              <div>
                <div className='mt-5'>
                  <label htmlFor="tech" className='font-staatliches text-[20px] text-[#264C42]'>Technical Skills </label>
                </div>
                <div>
                  <input type="text"
                    name="skill"
                    value={techSkill.skill}
                    onChange={handleInputChnageTech}
                    className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                  />
                </div>
                <div>
                  <button
                    onClick={AddNewSkill}
                    className='text-green-500 '>
                    + Add Skill</button>
                </div>
              </div>
            )}
            <div className=' w-full'>
              {data.techs.map((tech) => (
                <div className='flex gap-2'>
                  {console.log(tech.title)}
                  <h1>{tech.skill}

                  </h1>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      removeTech(tech.id)
                    }}
                    className='text-red-500'>
                    Remove</button>

                </div>

              ))}

            </div>
            <div className='flex justify-between'>
              <button onClick={handlePrevClick}
                className='border border-[#656E72] rounded-lg px-5 mt-4   font-staatliches text-[25px] hover:text-white hover:bg-[#264C42] transition-all'>
                Previous</button>
              <button onClick={handleNextClick}
                className='border border-[#656E72] rounded-lg px-5 mt-4  font-staatliches text-[25px] hover:text-white hover:bg-[#264C42] transition-all'>
                NEXT</button>


            </div>


          </div>
        )
      case 5:
        return (
          <div>
            <div>
              <h1 className='font-staatliches text-[2vw] text-[#264C42]'>Projects</h1>
              <p className='font-spaceGrotesk text-[#656E72] mt-[-1.5vh]'>Tell Us About Your Projects</p>
            </div>
            <div className='mt-5'>
              <label
              className='font-staatliches text-[1.5vw]  text-[#264C42]'
               htmlFor="project">Have Any Project ?</label>
            </div>
            <div className='flex gap-5'>
                  <div>
                    <label htmlFor="project" >
                      <input
                        type="radio"
                        value="yes"
                        name="project"
                        onChange={handleProjectChange}
                      />
                      Yes
                    </label>
                  </div>
                  <div>
                    <label htmlFor="project" >
                      <input
                        type="radio"
                        value="no"
                        name="project"
                        onChange={handleProjectChange}
                      />
                      No
                    </label>
                  </div>
                </div>
                {isProject==='yes' && (
                  <div>
                  <div className='border border-[#264C42] rounded-xl p-2 mt-5'>
                    <div className='mt-2 '>
                      <input
                       type="text"
                       name="title"
                       value={project.title}
                       onChange={handleInputChangePro} 
                      className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] focus:border-[#264C42]'
                      placeholder='Project Name'/>
                    </div>
                    <div className='mt-5'>
                      <textarea
                       name="description"
                       value = {project.description}
                      
                        onChange={handleInputChangePro} 
                        className='border w-full font-spaceGrotesk p-1 rounded-lg border-[#656E72] h-32 focus:border-[#264C42]'
                      placeholder='Describe Your Role And Tech You Used'></textarea>
                    </div>
                  </div>
                  <button
                  className='text-green-500'
                  onClick={AddNewProject}>

                    + Add Project
                  </button>
                    </div>   
                  

                )}
                <div className=' w-full'>
              {data.projects.map((pro) => (
                <div className='flex gap-2'>
                 
                  <h1>{pro.title}

                  </h1>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      removeProject(pro.id)
                    }}
                    className='text-red-500'>
                    Remove</button>

                </div>

              ))}

            </div>
            <div className='flex justify-between'>
              <button onClick={handlePrevClick}
                className='border border-[#656E72] rounded-lg px-5 mt-4   font-staatliches text-[25px] hover:text-white hover:bg-[#264C42] transition-all'>
                Previous</button>
              <NavLink
              to='/Preview/Business'
              onClick={handleClick} >
              <button 
                className='border border-[#656E72] rounded-lg px-5 mt-4  font-staatliches text-[25px] hover:text-white hover:bg-[#264C42] transition-all'>
                Finish</button>
              </NavLink>


            </div>
            
          </div>
        )







      default:
        break;
    }
  }


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <div className='p-10 shadow-lg rounded-lg border-t-[#264C42] mt-10 border-t-4 h-fit'>

      <form action="">
        {slide()}

      </form>




    </div>
  )
}

export default Form

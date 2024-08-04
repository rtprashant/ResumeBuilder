import { createContext, useState } from "react";



import React from 'react'
const userContext = createContext();
const initialProject = [
    {
        id : 1,
        title : "Project 1",
        description : "This is project 1",
    }
]
const initialTech =[
    {id:1, skill:'React'},
]

const initialExperience = [
    {
      id: 1,
      title: "Business Analyst Intern",
      company: "Arowwai Industries",
      startdate: "4 sept 2020",
      enddate: "4 sept 2022",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis nobis odit, quidem eos aliquam itaque omnis, molestiae veniam, porro placeat. Aliquam laudantium dicta veritatis, accusantium id tempore ex reprehenderit!"
    }
  ];

  const intialEducation = [
    {
        id : 1,
        title: "Bachelor of Science in Business Administration",
        institution: "University of Ghana",
    }
  ]

const intialActivity = [
    {
        id: 1,
        title: "President, Business Club",
        description : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dolor temporibus error quaerat neque ut quas quidem maiores cum magni, modi voluptas, facere esse officia nesciunt aliquid voluptate molestiae fugiat."
    }
]

function BusinessContext({ children }) {
    
    const [data , setData] = useState({
        name: '',
        phone: '',
        email: '',
        website: 'xyz.com',
        address: '',
        heading1: '',
        discription1: '',
        post:'',
        keycompetencies: [
            "Process improvement",
            "Report writing and presenting",
            "Strong interpersonal skills",
            "Data-driven strategic planning",
            "Critical thinking skills",
            "Proactive and self-motivated",
            "Cost-benefit analysis",
            "Excellent communication skills",
            "Exceptional organisational skills",
        ],
        exp : initialExperience,
        experiences : [],
        activity : intialActivity,
        activities : [],
        education : intialEducation ,
        educations : [],
        tech : initialTech,
        techs : [],
        project : initialProject,
        projects : [],
        img : ''

    })
    const addProject = ()=>{
        setData(prev => ({
            ...prev ,
            projects : [...prev.projects, {...prev.project , id : Date.now()}],
            project : '',
        }))
    }
    const addExperience = () => {
        setData(prev => ({
            ...prev,
            experiences: [...prev.experiences, { ...prev.exp, id: Date.now() }],
            exp: '',
        }));
    };
    const addTech =()=>{
        setData(prev => ({
            ...prev,
            techs: [...prev.techs, { ...prev.tech, id: Date.now() }],
            tech: '',
                }));
    }
    const addEducation = () => {
        setData(prev => ({
            ...prev,
            educations: [...prev.educations, { ...prev.education, id: Date.now() }],
            education: '',
        }));
    };
    const addActivity = ()=>{
        setData(prev=>({
            ...prev,
            activities: [...prev.activities, { ...prev.activity, id: Date.now()}],
            activity: '',
        }))
    }
    const resetProject = ()=>{
        setData(prev => ({ ...prev, project : initialProject }));

    }

    const resetExperience = () => {
        setData(prev => ({ ...prev, exp: initialExperience }));
    };

    
    const resetEducation = ()=>{
        setData(prev=>({ ...prev, education: intialEducation }))
    }
    const resetActivity = () => {
        setData(prev => ({ ...prev, activity : intialActivity }));
    };
    const resetTech = ()=>{
        setData(prev=>({ ...prev, tech: initialTech }))
    }

    const clearProject = ()=>{
        setData(prev => ({ ...prev, project : [] }));
    
    }
    const clearExperience = () => {
        setData(prev => ({ ...prev, exp: [] }));
    };
    const clearEducation =() =>{
        setData(prev=>({ ...prev, education: [] }))
    }
     const clearTech =()=>{
        setData(prev=>({ ...prev, tech: [] }))
     }

    const clearActivity= () => {
        setData(prev => ({ ...prev, activity: [] }));
    };

    const removeProject = (id) =>{
        setData(prev => ({
            ...prev,
            projects : prev.projects.filter(project => project.id !== id)
        }));

    }
    const removeExperience = (id) => {
        setData(prev => ({
            ...prev,
            experiences: prev.experiences.filter(exp => exp.id !== id)
        }));
    };
    const removeActivity = (id) => {
        setData(prev => ({
            ...prev,
            activities: prev.activities.filter(activity => activity.id !== id)
        }));
    };
    const removeEducation =(id) =>{
        setData(prev=>({
            ...prev,
            educations: prev.educations.filter(edu=>edu.id !== id)
            }))
    }
    const removeImg = (e)=>{
       
        setData(prev=>({...prev,img:''}))
       
    }
    const removeTech =(id)=>{
        setData(prev=>({
            ...prev,
            techs: prev.techs.filter(t=>t.id !== id)
            }))
            }

    const addKeyCompetency = (newSkill) => {
        setData(prev => {
            if (prev.keycompetencies.length < 9 && newSkill.trim() !== "") {
                return { ...prev, keycompetencies: [...prev.keycompetencies, newSkill] };
            }
            return prev;
        });
    };
    const removeKeyCompetency = (index) => {
        setData(prev => {
            const newKeyCompetencies = prev.keycompetencies.filter((_, i) => i !== index);
            return { ...prev, keycompetencies: newKeyCompetencies };
        });
    };
    return (
        <userContext.Provider value={{ data , setData, addKeyCompetency, removeKeyCompetency ,removeExperience ,addExperience ,clearExperience ,resetExperience ,resetActivity,clearActivity ,addActivity ,removeActivity ,addEducation ,clearEducation ,removeEducation ,resetEducation ,removeTech,addTech ,resetTech,clearTech ,addProject,removeProject, resetProject ,clearProject ,removeImg}}>
            {children}
        </userContext.Provider>

    )
}

export { BusinessContext, userContext } 

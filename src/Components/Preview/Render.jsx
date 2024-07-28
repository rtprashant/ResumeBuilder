import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Map from './MapTemplate';

// function Render({ templateId }) {
//     const TemplateComponent = Map[templateId.toUpperCase()]?.component;
//     return (
//       <div>
//         {TemplateComponent ? <TemplateComponent /> : "Page not found"}
//         <Outlet />
//       </div>
//     );
//   }

// function Render() {
//     const { templateId } = useParams();
//     console.log(templateId);
//     // const TemplateComponent = Map[templateId]?.component;
//     const TemplateComponent=templateId && Map[templateId.toUpperCase()]?.component;
  
//     return (
//       <div>
//         {TemplateComponent ? <TemplateComponent /> : "Page not found"}
//         <Outlet /> {/* This will render the nested route */}
//       </div>
//     );
//   }

function Render() {

    const {templateId} = useParams();
    const Templatecomponent = Map[templateId]
   return (
    <div>
        {Templatecomponent ? <Templatecomponent/>:"page not found"}
        <Outlet/>

    </div>
   )
   
}

export default Render

import SALES from "./Sales/SALES";
import BusinessManagement from "./Business/BusinessManagement";
import Marketing from "./Marketing/Marketing";
import Art from "./Art/Art";
import Graphics from "./Graphics/Graphics";
import SalesPreview from "./Sales/SalesPreview";
import BusinessPreview from "./Business/BusinessPreview";
import MarketingPreview from "./Marketing/MarketingPreview";
import ArtPreview from "./Art/ArtPreview";
import GraphicsPreview from "./Graphics/GraphicsPreview";


const Map = {
    'SALES': SALES ,
    'BUSINESS MANAGEMENT' : BusinessManagement,
    'MARKETING' : Marketing,
    'ART DIRECTOR' : Art,
    'GRAPHICS DESIGNER' :Graphics 
    
}

// const Map = {
//     'SALES': {
//       component: SALES,
//       preview: SalesPreview,
//     },
//     'BUSINESS MANAGEMENT': {
//       component: BusinessManagement,
//       preview: BusinessPreview,
//     },
//     'MARKETING': {
//       component: Marketing,
//       preview: MarketingPreview,
//     },
//     'ART DIRECTOR': {
//       component: Art,
//       preview: ArtPreview,
//     },
//     'GRAPHICS DESIGNER': {
//       component: Graphics,
//       preview: GraphicsPreview,
//     }
//   };


export default Map;
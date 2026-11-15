import {NavLink} from 'react-router-dom';
import {House,Search,LayoutGrid,Inbox,Settings,Image as ImageIcon,Plus} from 'lucide-react';
const links=[['/','Inicio',House],['/search','Buscar',Search],['/boards','Tableros',LayoutGrid],['/inbox','Bandeja',Inbox],['/upload','Subir',Plus],['/settings','Ajustes',Settings]] as const;
export default function Sidebar(){return <aside className="sidebar"><div className="brand"><ImageIcon size={26}/><span>Empireterest</span></div><nav>{links.map(([path,label,Icon])=><NavLink key={path} to={path} end={path==='/'} className={({isActive})=>`nav-link ${isActive?'active':''}`}><Icon size={20}/><span>{label}</span></NavLink>)}</nav><div className="sidebar-foot">Tu biblioteca visual privada</div></aside>}

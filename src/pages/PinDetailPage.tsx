import {useParams,Link} from 'react-router-dom';import {usePins} from '../hooks/usePins';import PinViewer from '../components/pins/PinViewer';
export default function PinDetailPage(){const {id}=useParams();const pin=usePins().find(p=>p.id===id);return pin?<PinViewer pin={pin}/>:<p>Imagen no encontrada. <Link to="/">Volver</Link></p>}

import PinGrid from '../components/pins/PinGrid';import {usePins} from '../hooks/usePins';
export default function HomePage(){return <><div className="page-heading"><h1>Para ti</h1><p>Tu espacio de inspiración</p></div><PinGrid pins={usePins()}/></>}

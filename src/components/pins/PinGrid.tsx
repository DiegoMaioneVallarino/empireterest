import type {Pin} from '../../types/pin.types';import PinCard from './PinCard';
export default function PinGrid({pins}:{pins:Pin[]}){return pins.length?<div className="pin-grid">{pins.map(pin=><PinCard key={pin.id} pin={pin}/>)}</div>:<p className="empty">No encontramos imágenes.</p>}

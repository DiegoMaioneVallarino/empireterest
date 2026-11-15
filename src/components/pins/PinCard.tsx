import {Link} from 'react-router-dom';import type {Pin} from '../../types/pin.types';
export default function PinCard({pin}:{pin:Pin}){return <Link className="pin-card" to={`/pin/${pin.id}`}><img loading="lazy" src={pin.imageUrl} alt={pin.title}/><div className="pin-overlay"><strong>{pin.title}</strong><small>{pin.tags.join(' · ')}</small></div></Link>}

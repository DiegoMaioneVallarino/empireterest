import {usePinStore} from '../store/pinStore';
export const usePins=()=>usePinStore(s=>s.pins);

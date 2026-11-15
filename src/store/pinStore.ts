import { create } from 'zustand';
import { demoPins } from '../services/pinService';
import type { Pin } from '../types/pin.types';
interface PinState { pins:Pin[]; addPin:(pin:Pin)=>void; }
export const usePinStore=create<PinState>((set)=>({pins:demoPins,addPin:(pin)=>set(s=>({pins:[pin,...s.pins]}))}));

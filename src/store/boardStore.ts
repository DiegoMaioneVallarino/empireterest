import { create } from 'zustand';
import type { Board } from '../types/board.types';
const KEY='empireterest.boards.v1';
function load():Board[]{try {return JSON.parse(localStorage.getItem(KEY)||'[]') as Board[]}catch{return []}}
interface BoardState { boards:Board[]; createBoard:(name:string)=>void; togglePin:(boardId:string,pinId:string)=>void; }
export const useBoardStore=create<BoardState>((set)=>({boards:load(),createBoard:(name)=>set(s=>{const boards=[...s.boards,{id:crypto.randomUUID(),name,description:'',pinIds:[],createdAt:new Date().toISOString()}];localStorage.setItem(KEY,JSON.stringify(boards));return {boards}}),togglePin:(boardId,pinId)=>set(s=>{const boards=s.boards.map(b=>b.id!==boardId?b:{...b,pinIds:b.pinIds.includes(pinId)?b.pinIds.filter(id=>id!==pinId):[...b.pinIds,pinId]});localStorage.setItem(KEY,JSON.stringify(boards));return {boards}})}));

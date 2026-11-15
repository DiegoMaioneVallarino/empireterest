import {useBoardStore} from '../store/boardStore';
export const useBoards=()=>useBoardStore(s=>s.boards);

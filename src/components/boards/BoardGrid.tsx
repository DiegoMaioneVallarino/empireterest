import type {Board} from '../../types/board.types';import BoardCard from './BoardCard';
export default function BoardGrid({boards}:{boards:Board[]}){return <div className="board-grid">{boards.map(b=><BoardCard key={b.id} board={b}/>)}</div>}

import {Link} from 'react-router-dom';import {FolderOpen} from 'lucide-react';import type {Board} from '../../types/board.types';
export default function BoardCard({board}:{board:Board}){return <Link className="board-card" to={`/boards/${board.id}`}><FolderOpen size={30}/><h3>{board.name}</h3><p>{board.pinIds.length} imágenes</p></Link>}

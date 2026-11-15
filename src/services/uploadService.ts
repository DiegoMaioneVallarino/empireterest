import { api } from './api';
export async function uploadImage(file:File):Promise<void> { const form = new FormData(); form.append('image',file); await api.post('/uploads',form); }

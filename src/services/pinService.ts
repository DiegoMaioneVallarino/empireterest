import type { Pin } from '../types/pin.types';
const photos = [
 ['photo-1470770841072-f978cf4d019e','Lago entre montañas','naturaleza'],
 ['photo-1493246507139-91e8fad9978e','Bosque de montaña','paisaje'],
 ['photo-1519681393784-d120267933ba','Cielo nocturno','espacio'],
 ['photo-1500534623283-312aade485b7','Horizonte verde','naturaleza'],
 ['photo-1483985988355-763728e1935b','Estilo urbano','moda'],
 ['photo-1441986300917-64674bd600d8','Diseño interior','diseño'],
 ['photo-1518837695005-2083093ee35b','Océano azul','mar'],
 ['photo-1487958449943-2429e8be8625','Arquitectura blanca','arquitectura'],
 ['photo-1500534314209-a25ddb2bd429','Desierto','viajes'],
 ['photo-1519608487953-e999c86e7455','Atardecer','paisaje'],
 ['photo-1519125323398-675f0ddb6308','Paisaje natural','naturaleza'],
 ['photo-1501785888041-af3ef285b470','Montañas y lago','viajes'],
] as const;
export const demoPins: Pin[] = photos.map(([photo,title,tag],i)=>({id:`demo-${i+1}`,title,description:`Inspiración: ${title.toLowerCase()}`,imageUrl:`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=800&q=85`,tags:[tag],createdAt:new Date(Date.now()-i*86400000).toISOString(),source:'demo'}));
export async function fetchPins():Promise<Pin[]> { return demoPins; } // Reemplazar con api.get('/pins') al conectar el backend

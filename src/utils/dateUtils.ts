export const formatDate=(value:string)=>new Intl.DateTimeFormat('es-MX',{dateStyle:'medium'}).format(new Date(value));

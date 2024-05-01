export interface NewsDto {
    id:number;
    title:string;
    description:string;
    images:{id:number; imgUrl:string}[];
}
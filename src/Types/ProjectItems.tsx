interface ProjectItems{
    id:number,
    title:string,
    description:string,
    image:string,
    tags:string[],
    links:{
        live:string,
        github?:string
    },
    type:string;
    isAvailable:boolean;


};

export default ProjectItems

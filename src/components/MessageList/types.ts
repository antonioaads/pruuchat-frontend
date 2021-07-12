export type Image = string | ArrayBuffer | null

export type Message = {
    content: string ,
    image?: Image,
    owner?: boolean
};

import {Position} from "postcss";

export type Token = {
    accessToken: string;
    refreshToken?: string;
}

export type Role = "USER" | "ANONYMOUS" | "ADMIN" ;

export type User = {
    id:number;
    profile:string;
    nickname: string;
    role: Role;
}

export type Position = {
    leftTopX: number;
    leftTopY: number;
    rightTopX:number;
    rightTopY: number;
    leftBottomX:number;
    leftBottomY: number;
    rightBottomX: number;
    rightBottomY: number;
}
type Id = number;
export type SpeechBubble = {
    id:number;
    sentence: string;
    position: Id & Position;
}

export type MangaImgInfo = {
    imageUrl: string;
    width: number;
    height: number;
    speeches: Array<SpeechBubble>;
}


export type Size = {
    width:number;
    height: number;
}
export type MangaImageResponse = Response<MangaImgInfo>;
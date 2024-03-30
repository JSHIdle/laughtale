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
//response.data => chapter => cut => words > definition
export type MangaAnalyze = {
    title: string,
    thumbnail: string,
    author: string,
    category: string,
    description: string,
    chapter: Array<ChapterAnalyze>
}

export type ChapterAnalyze = {
    chapterNo: number,
    level: number,
    cuts: Array<CutAnalyze>
}

export type CutAnalyze = {
    imageUrl: string,
    width: number,
    height: number,
    sentence: Array<SpeechAnalyze>,
    words: Array<WordAnalyze>
}

export type SpeechAnalyze = {
    sentence: string,
    positionBasic: Position
}

export type WordAnalyze = {
    word: string,
    definition?: string,
    partOfSpeech: string,
    level: number
}
export type MangaImageResponse = Response<MangaImgInfo>;
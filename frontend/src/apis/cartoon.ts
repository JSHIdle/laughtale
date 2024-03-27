import client, {get} from "./index.ts";
import {Cartoon, ChapterItem, ChapterList, MangaHistory, Page} from "../types/types";
import {Response} from "../types/common/page.ts";

export type ChapterListRequest = {
  page: Page | undefined;
  mangaId: number;
}

export const getMangaInfo = (mangaId: number) => get<Cartoon>(`/manga/info/${mangaId}`);

export const getChapterList = (param : ChapterListRequest ) => get<Response<ChapterList>>(`/chapter/list?page=${param.page}&mangaid=${param.mangaId}`);

export const getMangaHistory = (mangaId: number) => get<MangaHistory>(`/history/${mangaId}`);
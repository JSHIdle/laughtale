import client, {get} from "./index.ts";
import {Cartoon, ChapterList, MangaHistory, Page} from "../types/types";
import {Response} from "../types/common/page.ts";

export type ChapterListRequest = {
  page: Page | undefined;
  mangaId: number;
}

export const getMangaInfo = async (mangaId: number) =>  await get<Cartoon>(`/manga/info/${mangaId}`);

export const getChapterList = async (param : ChapterListRequest ) => await get<Response<ChapterList>>(`/chapter/list?page=${param.page}&mangaid=${param.mangaId}`);

export const getMangaHistory = async (mangaId: number) => await get<MangaHistory>(`/history/${mangaId}`);
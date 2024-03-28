import MangaErrorBoundary from "./MangaErrorBoundary.tsx";
import MangaInfoFetchingSuspense from "./MangaInfoFetchingSuspense.tsx";
import MangaInfoFetcher from "./MangaInfoFetcher.tsx";
import CartoonHeader from "../../../components/cartoon/CartoonHeader.tsx";
import {useSuspenseQuery} from "@tanstack/react-query";
import {getMangaInfo} from "../../../apis/cartoon.ts";

type Props = {
  mangaId:number;
}
export default function MagaInfo(props: Props){
  const {mangaId} = props;
  const {data, isLoading} = useSuspenseQuery({
    queryKey: ["mangaInfo", mangaId],
    queryFn: () => getMangaInfo(+ mangaId),
    retry:0
  });
  if(data){
    console.log("cache " , data);
  }
  return (
    <MangaInfoFetchingSuspense>
      <MangaInfoFetcher mangaId={mangaId}>
        <CartoonHeader mangaId={mangaId}/>
      </MangaInfoFetcher>
    </MangaInfoFetchingSuspense>
  )
}
import MangaErrorBoundary from "./MangaErrorBoundary.tsx";
import MangaInfoFetchingSuspense from "./MangaInfoFetchingSuspense.tsx";
import MangaInfoFetcher from "./MangaInfoFetcher.tsx";
import CartoonHeader from "../../components/cartoon/CartoonHeader.tsx";
import FirstEpisode from "./FirstEpisode.tsx";

type Props = {
  mangaId:number;
}
export default function MagaInfo(props: Props){
  const {mangaId} = props;
  return (<MangaErrorBoundary>
    <MangaInfoFetchingSuspense>
      <MangaInfoFetcher mangaId={mangaId}>
        <CartoonHeader mangaId={mangaId}/>
      </MangaInfoFetcher>
    </MangaInfoFetchingSuspense>
  </MangaErrorBoundary>)
}
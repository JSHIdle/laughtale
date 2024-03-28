import MangaErrorBoundary from "./MangaErrorBoundary.tsx";
import MangaInfoFetchingSuspense from "./MangaInfoFetchingSuspense.tsx";
import MangaInfoFetcher from "./MangaInfoFetcher.tsx";
import CartoonHeader from "../../components/cartoon/CartoonHeader.tsx";
import FirstEpisode from "./FirstEpisode.tsx";

type Props = {
  magaId:number;
}
export default function MagaInfo(props: Props){

  return (<MangaErrorBoundary>
    <MangaInfoFetchingSuspense>
      <MangaInfoFetcher mangaId={mangaId}>
        <CartoonHeader/>
      </MangaInfoFetcher>
    </MangaInfoFetchingSuspense>
  </MangaErrorBoundary>)
}
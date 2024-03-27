import {useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {getMangaInfo} from "../../apis/cartoon.ts";
import {ThemeProvider} from "@material-tailwind/react";
import {ReactNode} from "react";

type Props = {
  mangaId: number
  children: ReactNode
}

export default function MangaInfoFetcher (props: Props){
  const {mangaId, children} = props;
  const {data, isLoading} = useSuspenseQuery({
    queryKey: ["mangaInfo", mangaId],
    queryFn: () => getMangaInfo(+ mangaId),

  });
  return <>
    {children}
  </>

}
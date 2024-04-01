import {ReactNode, useEffect} from "react";
import {ThemeProvider} from "@material-tailwind/react";
import children = ThemeProvider.propTypes.children;

type Props = {
  children: ReactNode;
}
export default function WordListWrapper(props:Props){
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
  useEffect(() => {

  }, []);
  return <div className="flex-1 fixed pl-5 pr-5 break-all overflow-auto" style={{maxHeight:"100vh", width:"-webkit-fill-available"}}>
    {props.children}
  </div>
}
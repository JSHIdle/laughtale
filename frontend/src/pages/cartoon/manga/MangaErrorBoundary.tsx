import {QueryErrorResetBoundary, useQueryErrorResetBoundary} from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import {ThemeProvider} from "@material-tailwind/react";
import children = ThemeProvider.propTypes.children;
import {Navigate} from "react-router-dom";
export default function MangaErrorBoundary ({children}){
  const { reset } = useQueryErrorResetBoundary()
  return (<QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        fallbackRender={fallbackRender}>
        {children}
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>)
}

function fallbackRender({ error, resetErrorBoundary }) {
  return <Navigate to="/error"/>
}
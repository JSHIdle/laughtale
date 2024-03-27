import {QueryErrorResetBoundary, useQueryErrorResetBoundary} from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import {ThemeProvider} from "@material-tailwind/react";
import children = ThemeProvider.propTypes.children;
export default function MangaErrorBoundary ({children}){
  const { reset } = useQueryErrorResetBoundary()
  return (<QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            There was an error!
            <button onClick={() => resetErrorBoundary()}>Try again</button>
          </div>
        )}
      >
        {children}
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>)
}
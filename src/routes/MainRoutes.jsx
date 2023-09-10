import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// Pages imports
import Home from "../pages/Home/Home";
import Error from "../pages/Error";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback/ErrorFallback";

// Lazy components
const MovieDetails = React.lazy(() =>
  import("../pages/MovieDetails/MovieDetails")
);

function MainRoutes() {
  return (
    <Routes>
      {/*  Routes contain multiple Route */}
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            <Suspense fallback={<div>loading...</div>}>
              <MovieDetails />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default MainRoutes;

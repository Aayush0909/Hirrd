import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/LandingPage';
import Onboarding from './pages/Onboarding';
import Joblistings from './pages/job-listing';
import JobPage from './pages/job';
import { ThemeProvider } from './components/theme-provider';
import ProtectedRoute from './components/protected-route';
import MyJobs from './pages/my-jobs';
import SavedJobs from './pages/saved-job';
import PostJob from './pages/post-jobs';
const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <LandingPage/>,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding/>
          </ProtectedRoute>
        )
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage/>
          </ProtectedRoute>
        )
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <Joblistings/>
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs/>
          </ProtectedRoute>
        )
      },
      {
        path: "/post-job",
        element:(
          <ProtectedRoute>
            <PostJob/>
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJobs/>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
function App() {
  return (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <RouterProvider router={router}/>
</ThemeProvider>
);

}

export default App;
// rYHCgZiBV3GFwGWH
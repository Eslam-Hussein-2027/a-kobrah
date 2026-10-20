import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layout/Layout'
import { ROUTES } from './config/routes'
import AppReadyProvider from './context/AppReadyProvider'
import ContentProvider from './context/ContentProvider'
import ToastProvider from './context/ToastProvider'
import AboutPage from './pages/about/AboutPage'
import BusinessPage from './pages/business/BusinessPage'
import ContactPage from './pages/contact/ContactPage'
import FormsPage from './pages/forms/FormsPage'
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PersonalPage from './pages/personal/PersonalPage'

export default function App() {
  return (
    <BrowserRouter>
      <ContentProvider>
        <ToastProvider>
          <AppReadyProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path={ROUTES.home} element={<HomePage />} />
                <Route path={ROUTES.about} element={<AboutPage />} />
                <Route path={ROUTES.personal} element={<PersonalPage />} />
                <Route path={ROUTES.business} element={<BusinessPage />} />
                <Route path={ROUTES.forms} element={<FormsPage />} />
                <Route path={ROUTES.contact} element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </AppReadyProvider>
        </ToastProvider>
      </ContentProvider>
    </BrowserRouter>
  )
}

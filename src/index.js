import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import enTranslation from './locales/en.json'
import frTranslation from './locales/fr.json'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import TrainingPlan from './pages/TrainingPlan'
// import Layout from './pages/Layout'
import Calendar from './pages/Calendar'
import Nopage from './pages/NoPage'
import Profil from './pages/Profil'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        resources: {
            en: {
                translation: enTranslation,
            },
            fr: {
                translation: frTranslation,
            },
        },
        lng: 'fr',
        fallbackLng: 'en',
        supportedLngs: ['fr', 'en'],
        interpolation: {
            escapeValue: false,
        },
    })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' /* element={<Layout />}*/>
                        <Route index element={<App />} />
                        <Route path='/trainingPlan' element={<TrainingPlan />} />
                        <Route path='/calendar' element={<Calendar />} />
                        <Route path='/profil' element={<Profil />} />
                        <Route path='/*' element={<Nopage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </I18nextProvider>
    </React.StrictMode>
)

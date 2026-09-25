import react from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useTranslation } from "react-i18next";

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <>
        <div className='flex w-full flex-col h-screen'>
          <Navbar />
          <div>
            <div className='pageOne flex flex-col items-center justify-center gap-4 mt-20'>
              <h1 className='text-3xl font-bold'>
                {t("landingPage.pageOne.title")}
              </h1>
              <h2 className='text-lg font-medium text-gray-600'>
                {t("landingPage.pageOne.description")}
              </h2>

              <div className='flex gap-2 mt-4'>
                <button className='bg-white hover:bg-gray-100 duration-200 ease-in-out text-black font-bold py-2 px-4 rounded-full border border-black'>
                  Contribute
                </button>
                <button className='bg-black hover:bg-gray-600 duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-full'>
                  {t("landingPage.pageOne.button")} →
                </button>
              </div>

            </div>

            <div className='pageTwo flex flex-col items-center justify-center gap-4 mt-20'>
                <h1 className='text-3xl font-bold'>
                  {t("landingPage.pageTwo.title")}
                </h1>
                <h2 className='text-lg font-medium text-gray-600'>
                  {t("landingPage.pageTwo.description")}
                </h2>
            </div>

          </div>
        </div>

    </>
  )
}
import '../styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Компонент SpeedInsights выполняет анализ скорости и выводит метрики */}
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
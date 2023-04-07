import Header from "@src/components/Header"
import Footer from "@src/components/Footer"
import { BasePropsType } from "@src/types/basePropsType"

export default function Default({ children }: BasePropsType) {
  return (
    <>
      <Header />

      <div className="mx-auto max-w-2xl px-4 pt-6 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
        { children }
      </div>

      <Footer />
    </>
  )
}

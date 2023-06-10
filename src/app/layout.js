import './globals.css'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: "Dr. Hemapriya | E-commmerce Coach",
  description: `I am Dr Hemapriya, Founder of The E-Commerce Growth Lab.
  I am on a mission to help 100,000 Women Entrepreneurs achieve Financial Freedom by starting and growing a product based E-Commerce Business`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        </body>
    </html>
  )
}

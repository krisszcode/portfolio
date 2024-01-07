import './globals.css';
import { Providers } from './providers';
import Layout from "src/app/components/DefaultLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  
  return (
      <html lang="en" suppressHydrationWarning>
        <body>
          <Providers>
            <Layout>
              {children}
            </Layout>
          </Providers>
        </body>
      </html>
  )
}

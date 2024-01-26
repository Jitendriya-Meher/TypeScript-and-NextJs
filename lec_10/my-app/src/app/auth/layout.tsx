export const metadata = {
    title: 'auth',
    description: 'Generated by Next.js',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="">
          <h2>
              This is a custom layout element for auth page
          </h2>
          {children}
      </div>
    )
  }
  
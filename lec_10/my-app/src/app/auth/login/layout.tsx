export const metadata = {
  title: 'auth login',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
        <h3>
            This is a custom layout element for login page
        </h3>
        {children}
    </div>
  )
}
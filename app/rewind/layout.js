import Card from '../../ui/Card'
import PageTitle from '../../ui/PageTitle'

function RewindLayout({ children }) {
  return (
    <div className="w-full max-w-2xl">
      <PageTitle />
      <Card>{children}</Card>
    </div>
  )
}

export default RewindLayout

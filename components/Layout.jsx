import Link from 'next/link'
import { Button } from 'antd'

export default ({ children }) => (
  <>
    <header>
      <Link href="/a?id=1" as="/a/1">
        <Button type="primary">A</Button>
      </Link>
      <Link href="/b?id=1" as="/b/1">
        <Button>B</Button>
      </Link>
    </header>
    {children}
  </>
)

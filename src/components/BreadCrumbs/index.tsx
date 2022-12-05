import { useBreadcrumbsPath } from 'hooks/useBreadcrumbPath'
import { Breadcrumb } from 'antd'
import Link from 'next/link'

const BreadCrumbs = () => {
  const breadCrumb = useBreadcrumbsPath()

  return (
    <Breadcrumb style={{ marginBottom: '1rem' }}>
      {breadCrumb.map(function (route, index) {
        return (
          <Breadcrumb.Item>
            <Link href={`/${route.toLocaleLowerCase()}`}>{route}</Link>
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

export default BreadCrumbs

import PageSection from 'components/PageSection'
import { PageMeta } from 'components/Layout/Page'
import MetricsSection from './components/MetricsSection'
import OpenliveBanner from './components/Banners/OpenliveBanner'

const Home: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <PageMeta />

      <OpenliveBanner />

      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-2',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>
    </>
  )
}

export default Home

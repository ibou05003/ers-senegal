import { useTranslations } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import CommitmentSection from '@/components/commitments/CommitmentSection'

export default function CommunitiesPage() {
  const t = useTranslations('commitments')

  const bullets = [
    t('communitiesBullet1'),
    t('communitiesBullet2'),
    t('communitiesBullet3'),
    t('communitiesBullet4'),
  ]

  return (
    <>
      <PageHero
        title={t('communitiesTitle')}
        subtitle={t('communitiesSubtitle')}
        image="/images/engagements/communautes-equipe-village.jpg"
      />
      <CommitmentSection number="01" intro={t('communitiesIntro')} bullets={bullets} />
    </>
  )
}

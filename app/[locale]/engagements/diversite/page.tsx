import { useTranslations } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import CommitmentSection from '@/components/commitments/CommitmentSection'

export default function DiversityPage() {
  const t = useTranslations('commitments')

  const bullets = [t('diversityBullet1'), t('diversityBullet2'), t('diversityBullet3')]

  return (
    <>
      <PageHero
        title={t('diversityTitle')}
        subtitle={t('diversitySubtitle')}
        image="/images/engagements/diversite-equipe-portrait.jpg"
      />
      <CommitmentSection number="03" intro={t('diversityIntro')} bullets={bullets} />
    </>
  )
}

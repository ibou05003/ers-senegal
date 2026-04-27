import { useTranslations } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import CommitmentSection from '@/components/commitments/CommitmentSection'

export default function SafetyPage() {
  const t = useTranslations('commitments')

  const bullets = [t('safetyBullet1'), t('safetyBullet2'), t('safetyBullet3')]

  return (
    <>
      <PageHero
        title={t('safetyTitle')}
        subtitle={t('safetySubtitle')}
        image="/images/engagements/securite-EPI-formation.jpg"
      />
      <CommitmentSection number="04" intro={t('safetyIntro')} bullets={bullets} />
    </>
  )
}

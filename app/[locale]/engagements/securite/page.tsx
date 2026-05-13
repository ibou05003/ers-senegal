import { useTranslations } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import CommitmentSection from '@/components/commitments/CommitmentSection'

export default function SafetyPage() {
  const t = useTranslations('commitments')

  return (
    <>
      <PageHero
        title={t('safetyTitle')}
        subtitle={t('safetySubtitle')}
        image="/images/engagements/securite-EPI-formation.jpg"
      />
      <CommitmentSection
        number="04"
        lead={t('safetyLead')}
        body={[t('safetyBody1'), t('safetyBody2')]}
      />
    </>
  )
}

import { useTranslations } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import CommitmentSection from '@/components/commitments/CommitmentSection'

export default function DiversityPage() {
  const t = useTranslations('commitments')

  return (
    <>
      <PageHero
        title={t('diversityTitle')}
        subtitle={t('diversitySubtitle')}
        image="/images/engagements/diversite-equipe-portrait.jpg"
      />
      <CommitmentSection
        number="03"
        lead={t('diversityLead')}
        body={[t('diversityBody1'), t('diversityBody2')]}
      />
    </>
  )
}

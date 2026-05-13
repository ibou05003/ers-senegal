import { useTranslations } from 'next-intl'
import PageHero from '@/components/ui/PageHero'
import CommitmentSection from '@/components/commitments/CommitmentSection'

export default function CommunitiesPage() {
  const t = useTranslations('commitments')

  return (
    <>
      <PageHero
        title={t('communitiesTitle')}
        subtitle={t('communitiesSubtitle')}
        image="/images/engagements/communautes-femme-bergere.jpg"
      />
      <CommitmentSection
        number="01"
        lead={t('communitiesLead')}
        body={[t('communitiesBody1'), t('communitiesBody2')]}
      />
    </>
  )
}

#!/usr/bin/env node
// Removes <ScrollReveal …>…</ScrollReveal> wrappers while preserving inner content.
// Also strips the `import ScrollReveal from '@/components/ui/ScrollReveal'` line.
// Skips files where ScrollReveal is the only animation primitive (it's safe to flatten).

const fs = require('fs')
const path = require('path')

const FILES = [
  'app/[locale]/engagements/environnement/page.tsx',
  'app/[locale]/engagements/page.tsx',
  'app/[locale]/engagements/securite/page.tsx',
  'app/[locale]/engagements/diversite/page.tsx',
  'app/[locale]/projets/page.tsx',
  'app/[locale]/contact/page.tsx',
  'app/[locale]/projets/notto/page.tsx',
  'app/[locale]/engagements/communautes/page.tsx',
  'app/[locale]/projets/kahone/page.tsx',
  'app/[locale]/projets/niakhar/page.tsx',
  'app/[locale]/projets/cap-des-biches/page.tsx',
  'app/[locale]/a-propos/partenaires/page.tsx',
  'app/[locale]/a-propos/page.tsx',
  'app/[locale]/actualites/page.tsx',
  'app/[locale]/services/developpement/page.tsx',
  'app/[locale]/services/exploitation/page.tsx',
  'app/[locale]/services/production/page.tsx',
  'app/[locale]/carrieres/page.tsx',
  'app/[locale]/services/maintenance/page.tsx',
  'app/[locale]/services/construction/page.tsx',
]

const root = process.cwd()

let totalRemoved = 0
let filesTouched = 0

for (const rel of FILES) {
  const full = path.join(root, rel)
  if (!fs.existsSync(full)) {
    console.warn('skip (missing):', rel)
    continue
  }
  let src = fs.readFileSync(full, 'utf8')
  const before = src

  // Remove import line
  src = src.replace(/^import\s+ScrollReveal\s+from\s+['"]@\/components\/ui\/ScrollReveal['"]\s*\r?\n/m, '')

  // Remove opening tags <ScrollReveal …> (with arbitrary props on one or more lines)
  src = src.replace(/<ScrollReveal\b[^>]*>/g, '')
  // Remove closing tags </ScrollReveal>
  src = src.replace(/<\/ScrollReveal>/g, '')

  // Collapse blank-line runs introduced by stripping
  src = src.replace(/\n[ \t]*\n[ \t]*\n+/g, '\n\n')

  if (src !== before) {
    fs.writeFileSync(full, src, 'utf8')
    const removed = (before.match(/ScrollReveal/g) || []).length - (src.match(/ScrollReveal/g) || []).length
    totalRemoved += removed
    filesTouched++
    console.log(`✓ ${rel} (-${removed} occurrences)`)
  }
}

console.log(`\nDone. ${filesTouched} files modified, ${totalRemoved} ScrollReveal references removed.`)

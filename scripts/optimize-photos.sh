#!/usr/bin/env bash
# Optimisation des photos client ERS pour Hostinger (sans runtime next/image).
# - sips : redimensionne + recompresse JPEG
# - cwebp : génère WebP (servi par défaut via custom loader Next.js)
# - avifenc : génère AVIF (servi via <picture> sur les hero LCP critiques)
#
# Utilisation :
#   bash scripts/optimize-photos.sh           # Première optimisation depuis Downloads
#   bash scripts/optimize-photos.sh recompress # Re-compress + regen WebP/AVIF sur dossier public/images existant
set -euo pipefail

SRC="/Users/ibrahima/Downloads/swisstransfer_d66bfe1d-f2ba-457e-94fa-c4d9582b9353"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/images"

# Génère WebP + AVIF (pour hero) à côté du JPG
gen_modern_formats() {
  local jpg="$1"
  local is_hero="${2:-false}"
  local webp="${jpg%.*}.webp"
  cwebp -q 68 -m 6 -mt -quiet "$jpg" -o "$webp" 2>/dev/null
  if [ "$is_hero" = "true" ]; then
    local avif="${jpg%.*}.avif"
    avifenc --min 30 --max 40 -j 4 -y 444 "$jpg" "$avif" >/dev/null 2>&1
  fi
}

# usage: optimize <input> <output_jpg> <max_width> <quality> [is_hero]
optimize() {
  local input="$1" output="$2" maxw="$3" quality="$4" is_hero="${5:-false}"
  cp "$input" "$output"
  sips -Z "$maxw" -s format jpeg -s formatOptions "$quality" "$output" --out "$output" >/dev/null
  gen_modern_formats "$output" "$is_hero"
}

# Mode recompress : re-traite tous les JPG existants dans DEST sans copier depuis SRC
if [ "${1:-}" = "recompress" ]; then
  echo "=== Mode recompress : re-traitement des JPG existants ==="
  find "$DEST" \( -name "*.jpg" -o -name "*.jpeg" \) | while read -r f; do
    size=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f" 2>/dev/null)
    if [ "$size" -lt 100000 ]; then continue; fi
    sips -Z 1600 -s formatOptions 65 "$f" --out "$f" >/dev/null 2>&1
    cwebp -q 68 -m 6 -mt -quiet "$f" -o "${f%.*}.webp" 2>/dev/null
  done
  # AVIF uniquement sur les hero LCP critiques
  for f in "$DEST"/hero/*.jpg "$DEST"/projects/kahone-centrale-solaire-aerienne.jpg "$DEST"/projects/niakhar-panneaux-perspective.jpg; do
    if [ -f "$f" ]; then
      avifenc --min 30 --max 40 -j 4 -y 444 "$f" "${f%.*}.avif" >/dev/null 2>&1
    fi
  done
  echo "Done. Total :"
  du -sh "$DEST"
  exit 0
fi

mkdir -p "$DEST/hero" "$DEST/projects" "$DEST/services" "$DEST/team" "$DEST/engagements" "$DEST/news" "$DEST/careers" "$DEST/contact" "$DEST/about"

# ============================================================
# HEROS — 1 photo unique par hero principal, 2400px / qualité 80
# ============================================================
optimize "$SRC/DJI_0326.jpg" "$DEST/hero/centrale-solaire-aerienne-senegal.jpg" 2400 80
optimize "$SRC/DJI_0349.jpg" "$DEST/hero/kahone-paysage-large.jpg" 2400 80
optimize "$SRC/DJI_0327.jpg" "$DEST/hero/panneaux-detail-perspective.jpg" 2400 80

# ============================================================
# PROJETS — galeries dédiées 1920px / qualité 82
# ============================================================
optimize "$SRC/DJI_0354.jpg" "$DEST/projects/kahone-centrale-solaire-aerienne.jpg" 1920 82
optimize "$SRC/DJI_0326.jpg" "$DEST/projects/kahone-vue-panoramique.jpg" 1920 82
optimize "$SRC/DJI_0327.jpg" "$DEST/projects/kahone-galerie-1.jpg" 1600 82
optimize "$SRC/DJI_0330.jpg" "$DEST/projects/kahone-galerie-2.jpg" 1600 82
optimize "$SRC/DJI_0337.jpg" "$DEST/projects/kahone-galerie-3.jpg" 1600 82
optimize "$SRC/DJI_0345.jpg" "$DEST/projects/kahone-galerie-4.jpg" 1600 82
optimize "$SRC/DJI_0357.jpg" "$DEST/projects/kahone-galerie-5.jpg" 1600 82

optimize "$SRC/DJI_0341.jpg" "$DEST/projects/niakhar-panneaux-perspective.jpg" 1920 82
optimize "$SRC/DJI_0349.jpg" "$DEST/projects/niakhar-vue-aerienne.jpg" 1920 82
optimize "$SRC/DJI_0350.jpg" "$DEST/projects/niakhar-paysage.jpg" 1920 82

optimize "$SRC/DJI_0355.jpg" "$DEST/projects/notto-paysage-eolien.jpg" 1920 82
optimize "$SRC/DJI_0338.jpg" "$DEST/projects/cap-des-biches-cote.jpg" 1920 82

# ============================================================
# SERVICES — 1 hero unique par service / 1920px
# ============================================================
optimize "$SRC/_MOM2843.jpg" "$DEST/services/developpement-equipe-corporate.jpg" 1920 82
optimize "$SRC/DJI_0341.jpg" "$DEST/services/construction-panneaux-installation.jpg" 1920 82
optimize "$SRC/DJI_0308.jpg" "$DEST/services/exploitation-nettoyage-panneaux.jpg" 1920 82
optimize "$SRC/DJI_0326.jpg" "$DEST/services/production-vue-aerienne-centrale.jpg" 1920 82
optimize "$SRC/_MOM2793.jpg" "$DEST/services/maintenance-equipe-salle-controle.jpg" 1920 82

# ============================================================
# ENGAGEMENTS — 1 hero unique par sous-page
# ============================================================
optimize "$SRC/_MOM2851.jpg" "$DEST/engagements/index-equipe-terrain.jpg" 1920 82
optimize "$SRC/_MOM2860.jpg" "$DEST/engagements/communautes-equipe-village.jpg" 1920 82
optimize "$SRC/DJI_0357.jpg" "$DEST/engagements/environnement-paysage.jpg" 1920 82
optimize "$SRC/_MOM2842.jpg" "$DEST/engagements/diversite-equipe-portrait.jpg" 1920 82
optimize "$SRC/_MOM2796.jpg" "$DEST/engagements/securite-EPI-formation.jpg" 1920 82

# ============================================================
# ÉQUIPE / À PROPOS / PARTENAIRES / CARRIÈRES / CONTACT / ACTUS
# ============================================================
optimize "$SRC/_MOM2843.jpg" "$DEST/team/sabaly-chef-exploitation.jpg" 1200 85
optimize "$SRC/_MOM2793.jpg" "$DEST/team/equipe-controle.jpg" 1600 82
optimize "$SRC/_MOM2843.jpg" "$DEST/team/equipe-corporate.jpg" 1600 82
optimize "$SRC/_MOM2810.jpg" "$DEST/team/equipe-terrain-portrait.jpg" 1600 82

optimize "$SRC/DJI_0349.jpg" "$DEST/about/histoire-kahone-paysage.jpg" 1920 82
optimize "$SRC/DJI_0327.jpg" "$DEST/about/mission-panneaux-detail.jpg" 1920 82
optimize "$SRC/_MOM2810.jpg" "$DEST/about/partenaires-equipe-reunion.jpg" 1920 82

optimize "$SRC/_MOM2851.jpg" "$DEST/careers/equipe-jeunes-EPI.jpg" 1920 82
optimize "$SRC/DJI_0345.jpg" "$DEST/contact/siege-aerien.jpg" 1920 82
optimize "$SRC/DJI_0337.jpg" "$DEST/news/centrale-soleil.jpg" 1920 82

echo "Optimization complete."
echo "Total images:"
find "$DEST" -name "*.jpg" -not -path "*/og/*" | wc -l
echo ""
echo "Total weight:"
du -sh "$DEST"/*.jpg "$DEST"/{hero,projects,services,team,engagements,news,careers,contact,about} 2>/dev/null | tail -20

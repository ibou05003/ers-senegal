#!/usr/bin/env bash
# Optimisation des photos client ERS : sips (resize + JPEG quality).
# next/image génère AVIF/WebP automatiquement à partir des JPG en runtime.
set -euo pipefail

SRC="/Users/ibrahima/Downloads/swisstransfer_d66bfe1d-f2ba-457e-94fa-c4d9582b9353"
DEST="/Users/ibrahima/projects/ers-senegal/.claude/worktrees/cranky-tesla-7de5e4/public/images"

# usage: optimize <input> <output_jpg> <max_width> <quality>
optimize() {
  local input="$1" output="$2" maxw="$3" quality="$4"
  cp "$input" "$output"
  sips -Z "$maxw" -s format jpeg -s formatOptions "$quality" "$output" --out "$output" >/dev/null
}

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

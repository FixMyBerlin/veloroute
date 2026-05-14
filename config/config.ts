export const META = {
  title: 'Veloroute ehemalige B 68',
  description:
    'Die Veloroute entlang der ehemaligen Bundesstraße 68 – eine neue Radverkehrsachse von Borgholzhausen über Halle und Steinhagen bis nach Bielefeld. Rund 20 Kilometer für schnelles, sicheres und nachhaltiges Pendeln in der Regiopolregion Bielefeld.',
}

/** @desc Enable/disable matomo tracking */
export const USE_MATOMO: boolean = false

export const BASE_CONFIG = {
  CMS_NAME: 'Veloroute ehemalige B 68',
  CMS_LOGO_PATH: '/icons/icon-48x48.png',
  GITHUB_REPO_NAME: 'rsv-veloroute',
  PRODUCTION_URL: 'https://veloroute.example.de',
  META,
  USE_MATOMO,
  TRASSENSCOUT_PROJECT_API_URL: ['https://trassenscout.de/api/projects/veloroute'],
}

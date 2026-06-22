// Ассеты-плейсхолдеры берём 1:1 из референса juanmora.co.
// Это временно — позже заменишь на свои файлы (положишь в /public и поменяешь пути).
const REF = 'https://juanmora.co'

export const A = {
  // Фоновые видео (полноэкранные фото-секции)
  deskVideo: `${REF}/videos-work/desk_jm3.mp4`,
  heroPhoto: `/hero.png`,
  videoPoster: `${REF}/portfolio2025/video/juan-video-loading.jpg`,

  // Логотип в футере
  footerLogo: `${REF}/images/juan-mora-logo-footer.svg`,

  // 3D-шейпы (плавающая секция)
  shapes: {
    pill: `${REF}/images/big-pill-scroll1.png`,
    circle1: `${REF}/images/big-circle-scroll1.png`,
    hexagon: `${REF}/images/big-hexagon-scroll1.png`,
    circle2: `${REF}/images/big-circle-scroll2.png`,
    circle3: `${REF}/images/big-circle-scroll3.png`,
    square: `${REF}/images/big-square-scroll1.png`,
    bluePill: `${REF}/images/blue-pill-scroll.svg`,
    blueCircle: `${REF}/images/blue-circle-scroll.svg`,
    blueHex: `${REF}/images/blue-hexagon-scroll.svg`,
    arrow: `${REF}/images/arrow-grey.svg`,
  },

  // Папка Work
  folder: {
    back: `${REF}/images/folder-icon-back.png`,
    front: `${REF}/images/folder-icon-front.png`,
    full: `${REF}/images/projects-folder.png`,
  },

  // Иконки
  check: `${REF}/images/check-mark-icon.svg`,
  arrowGrey: `${REF}/images/arrow-grey.svg`,
  webflowFrame: `${REF}/images/webflow-frame.svg`,
  framerFrame: `${REF}/images/framer-frame.svg`,

  // Ряды работ (по 5 в каждом сервисе) — реальные превью из референса
  websites: [1, 2, 3, 4, 5].map((n) => `${REF}/images/home-work${n}.jpg`),
  branding: [6, 7, 8, 9, 1].map((n) => `${REF}/images/home-work${n}.jpg`),
  product: [2, 3, 4, 5, 6].map((n) => `${REF}/images/home-work${n}.jpg`),
}

// Навигация / контакты (из CV Dmitry Edinac)
// TODO: вставь реальные ссылки на профили — пока плейсхолдеры.
export const NAV = {
  email: 'mailto:e.dmitry12@gmail.com?subject=Hey%20Dmitry!',
  phone: 'tel:+37369883690',
  linkedin: 'https://www.linkedin.com/in/dmitryedinac/',
  dribbble: 'https://dribbble.com/edmitry12',
}

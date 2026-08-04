// // Photography Portfolio Script
// // import { v2 as cloudinary } from 'cloudinary';
// const cloudinary = require('cloudinary').v2;
// (async function() {

//     // Configuration
//     cloudinary.config({ 
//         cloud_name: 'ds9ru6lxp', 
//         api_key: '233152584831665', 
//         api_secret: 'M8HMI8K0y_jybMN9Hl1anUF8aug' // Click 'View API Keys' above to copy your API secret
//     });
    
//     // Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'shoes',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// })();
// Photo data
const photos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1779214156/streetstyle-22_uwggss.jpg",
    title: "David",
    location: "Atlanta, GA",
    year: "2026",
    category: "Street",
    span: "tall",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1779214154/streetstyle-19_zvngcn.jpg",
    title: "David",
    location: "Atlanta, GA",
    year: "2026",
    category: "street",
    span: "wide",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1779214160/trackstar_19_fi7ui7.jpg",
    title: "Khalil",
    location: "Atlanta, GA",
    year: "2025",
    category: "Portrait",
    span: "square",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1779213914/DSC01530_eytw5u.jpg",
    title: "Khalil",
    location: "Atlanta, GA",
    year: "2025",
    category: "Portrait",
    span: "wide",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1779213910/DSC01489_ma211d.jpg",
    title: "Khalil",
    location: "Atlanta, GA",
    year: "2025",
    category: "Portrait",
    span: "square",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1779213878/composite-2_cewg1j.jpg",
    title: "Khalil",
    location: "Atlanta, GA",
    year: "2025",
    category: "Portrait",
    span: "wide",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1779213902/DSC01132_bisx4q.jpg",
    title: "Jon",
    location: "Decatur, GA",
    year: "2025",
    category: "Portrait",
    span: "square",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1779213870/Btsm_3-1_uexqnu.jpg",
    title: "BTSM",
    location: "Lost Lands",
    year: "2019",
    category: "liveevent",
    span: "wide",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1779213846/austin-11_mcgf8i.png",
    title: "Cutlace",
    location: "Terminal West",
    year: "2025",
    category: "liveevent",
    span: "wide",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1779213840/austin-2_t9blw2.png",
    title: "Cutlace",
    location: "Terminal West",
    year: "2025",
    category: "liveevent",
    span: "wide",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1779213976/insta-edit_06_icadvh.png",
    title: "Yumi",
    location: "Atlanta, GA",
    year: "2025",
    category: "street",
    span: "tall",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1779213975/insta-edit_03_dwrjgn.png",
    title: "Yumi",
    location: "Atlanta, GA",
    year: "2025",
    category: "street",
    span: "square",
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785261897/STVSHDENVA-66_sbrh3u.jpg",
    title: "STVSH",
    location: "Denver, CO",
    year: "2026",
    category: "liveevent",
    span: "wide",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785261896/CLTSTVSH-11_rjhesg.jpg",
    title: "STVSH",
    location: "Charolette, SC",
    year: "2026",
    category: "liveevent",
    span: "wide",
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785261895/CLTSTVSH-18_mfxsmn.jpg",
    title: "STVSH",
    location: "Charolette, SC",
    year: "2026",
    category: "liveevent",
    span: "square",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785261894/HULAB2B-26_gqe9t5.jpg",
    title: "STVSH",
    location: "Hulaween, FL",
    year: "2025",
    category: "liveevent",
    span: "wide",
  },
  {
    id: 17,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785261893/HULAB2B-34_ef1zgt.jpg",
    title: "STVSH",
    location: "Hulaween, FL",
    year: "2025",
    category: "liveevent",
    span: "wide",
  },
  {
    id: 18,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785261891/MAX09902_jcq0ys.jpg",
    title: "Sally",
    location: "Atlanta, GA",
    year: "2026",
    category: "portrait",
    span: "square",
  },
  {
    id: 19,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785259146/Laundry-6_q2ylal.jpg",
    title: "Sally",
    location: "Atlanta, GA",
    year: "2026",
    category: "portrait",
    span: "square",
  },
  {
    id: 20,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785261891/Laundry-17_vrjmqy.jpg",
    title: "Sally",
    location: "Atlanta, GA",
    year: "2026",
    category: "portrait",
    span: "square",
  },
  {
    id: 21,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785261885/MAX07574_l2qh6a.jpg",
    title: "Genie",
    location: "Atlanta, GA",
    year: "2026",
    category: "portrait",
    span: "wide",
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785261886/MAX07144_bav7x8.jpg",
    title: "Genie",
    location: "Atlanta, GA",
    year: "2026",
    category: "portrait",
    span: "square",
  },
  {
    id: 23,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785261886/MAX07487_llopjz.jpg",
    title: "Genie",
    location: "Atlanta, GA",
    year: "2026",
    category: "portrait",
    span: "wide",
  },
  {
    id: 24,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785259674/cavenrssss-10_wisyjs.jpg",
    title: "Cutlace",
    location: "Cavenrs, TN",
    year: "2026",
    category: "liveevent",
    span: "square",
  },
  {
    id: 25,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785259709/cavenrssss-6_vk5am8.jpg",
    title: "Cutlace",
    location: "Cavenrs, TN",
    year: "2026",
    category: "liveevent",
    span: "square",
  },
  {
    id: 26,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785260529/peruWEB-9_be2yln.jpg",
    title: "ARMNHMR",
    location: "Duluth, GA",
    year: "2026",
    category: "liveevent",
    span: "wide",
  },
  {
    id: 27,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785260537/peruWEB-13_vploeu.jpg",
    title: "PLUR",
    location: "Duluth, GA",
    year: "2026",
    category: "liveevent",
    span: "square",
  },
  {
    id: 28,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785260566/peruWEB-25_hxtc6e.jpg",
    title: "PLUR",
    location: "Duluth, GA",
    year: "2026",
    category: "liveevent",
    span: "square",
  },
  {
    id: 29,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785260699/combo-14_e44jnn.jpg",
    title: "STVSH + Crucial",
    location: "Atlanta, GA",
    year: "2026",
    category: "street",
    span: "square",
  },
  {
    id: 30,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785261006/nightSHIFT-13_ywwbgy.jpg",
    title: "STVSH",
    location: "Atlanta, GA",
    year: "2026",
    category: "street",
    span: "square",
  },
  {
    id: 31,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785345988/max_ncwx6i.jpg",
    title: "Travel",
    location: "Lima, Peru",
    year: "2026",
    category: "street",
    span: "tall",
  },
  {
    id: 32,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303404/DSC07334_light_maskingV2_uccvwg.jpg",
    title: "Crucial",
    location: "Atlanta, GA",
    year: "2026",
    category: "portrait",
    span: "tall",
  },
  {
    id: 33,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303400/DSC07234_cmvmqn.jpg",
    title: "Crucial",
    location: "Atlanta, GA",
    year: "2026",
    category: "portrait",
    span: "square",
  },
  {
    id: 34,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303399/DSC07200_h7d2ms.jpg",
    title: "Crucial",
    location: "Atlanta, GA",
    year: "2026",
    category: "portrait",
    span: "square",
  },
  {
    id: 35,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303398/eprom-main_kgdjtx.png",
    title: "Eprom",
    location: "Atlanta, GA",
    year: "2025",
    category: "liveevents",
    span: "square",
  },
  {
    id: 36,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303396/Seven_Lions_2019_trphvq.jpg",
    title: "Seven Lions",
    location: "Atlanta, GA",
    year: "2019",
    category: "liveevents",
    span: "wide",
  },
  {
    id: 37,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303395/Armin_Van_Buren_2019_seclzi.jpg",
    title: "Armin Van Buren",
    location: "Atlanta, GA",
    year: "2019",
    category: "liveevents",
    span: "wide",
  },
  // {
  //   id: 38,
  //   src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303393/WNO25-92_yc04xo.jpg",
  //   title: "Wild Night Out",
  //   location: "Atlanta, GA",
  //   year: "2025",
  //   category: "liveevents",
  //   span: "square",
  // },
  // {
  //   id: 39,
  //   src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303391/WNO25-115_aebepl.jpg",
  //   title: "Wild Night Out",
  //   location: "Atlanta, GA",
  //   year: "2025",
  //   category: "liveevents",
  //   span: "square",
  // },
  // {
  //   id: 40,
  //   src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303389/WNO25-109_avfez4.jpg",
  //   title: "Wild Night Out",
  //   location: "Atlanta, GA",
  //   year: "2025",
  //   category: "liveevents",
  //   span: "square",
  // },
  // {
  //   id: 41,
  //   src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303388/WNO25-106_zljphh.jpg",
  //   title: "Wild Night Out",
  //   location: "Atlanta, GA",
  //   year: "2025",
  //   category: "liveevents",
  //   span: "square",
  // },
  // {
  //   id: 42,
  //   src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303387/WNO25-55_ku9dvi.jpg",
  //   title: "Wild Night Out",
  //   location: "Atlanta, GA",
  //   year: "2025",
  //   category: "liveevents",
  //   span: "tall",
  // },
  // {
  //   id: 43,
  //   src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303385/WNO25-53_bbewjz.jpg",
  //   title: "Wild Night Out",
  //   location: "Atlanta, GA",
  //   year: "2025",
  //   category: "liveevents",
  //   span: "square",
  // },
  // {
  //   id: 44,
  //   src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303384/WNO25-49_g6gw3t.jpg",
  //   title: "Wild Night Out",
  //   location: "Atlanta, GA",
  //   year: "2025",
  //   category: "liveevents",
  //   span: "square",
  // },
  // {
  //   id: 45,
  //   src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785303383/WNO25-57_ydypgy.jpg",
  //   title: "Wild Night Out",
  //   location: "Atlanta, GA",
  //   year: "2025",
  //   category: "liveevents",
  //   span: "square",
  // },
  {
    id: 46,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785301932/MAX09943_omoi99.jpg",
    title: "Sally",
    location: "Atlanta, GA",
    year: "2026",
    category: "portrait",
    span: "wide",
  },
  {
    id: 47,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785261887/MAX07071_nverh1.jpg",
    title: "Genie",
    location: "Atlanta, GA",
    year: "2026",
    category: "portrait",
    span: "square",
  },
  {
    id: 48,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785261885/MAX07627_fjrdic.jpg",
    title: "Genie",
    location: "Atlanta, GA",
    year: "2026",
    category: "portrait",
    span: "tall",
  },
  {
    id: 49,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785555764/MAX01669_vlx44l.jpg",
    title: "Crankworx",
    location: "Vancouver, CA",
    year: "2026",
    category: "liveevent",
    span: "tall",
  },
  {
    id: 50,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785555764/MAX01285_dfztvl.jpg",
    title: "Crankworx",
    location: "Vancouver, CA",
    year: "2026",
    category: "liveevent",
    span: "square",
  },
  {
    id: 51,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785555764/MAX01598_l3io4x.jpg",
    title: "Crankworx",
    location: "Vancouver, CA",
    year: "2026",
    category: "liveevent",
    span: "square",
  },
  {
    id: 52,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785555764/MAX01495_aazf7r.jpg",
    title: "Crankworx",
    location: "Vancouver, CA",
    year: "2026",
    category: "liveevent",
    span: "wide",
  },
  {
    id: 53,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785555765/MAX01692_ptza2j.jpg",
    title: "Crankworx",
    location: "Vancouver, CA",
    year: "2026",
    category: "liveevent",
    span: "tall",
  },
  {
    id: 54,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785555767/MAX01593_kxlqvo.jpg",
    title: "Crankworx",
    location: "Vancouver, CA",
    year: "2026",
    category: "liveevent",
    span: "square",
  },
  {
    id: 55,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785555768/MAX01562_eskwtp.jpg",
    title: "Crankworx",
    location: "Vancouver, CA",
    year: "2026",
    category: "liveevent",
    span: "square",
  },
  {
    id: 56,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785555767/MAX01482_vqbq3s.jpg",
    title: "Crankworx",
    location: "Vancouver, CA",
    year: "2026",
    category: "liveevent",
    span: "square",
  },
  {
    id: 57,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785555770/MAX01459_ecdkxy.jpg",
    title: "Crankworx",
    location: "Vancouver, CA",
    year: "2026",
    category: "liveevent",
    span: "square",
  },
  {
    id: 58,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785555770/MAX01474_kdr69g.jpg",
    title: "Crankworx",
    location: "Vancouver, CA",
    year: "2026",
    category: "liveevent",
    span: "tall",
  },
  {
    id: 59,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785555770/MAX01492_mjbxxp.jpg",
    title: "Crankworx",
    location: "Vancouver, CA",
    year: "2026",
    category: "liveevent",
    span: "tall",
  },
  {
    id: 60,
    src: "https://res.cloudinary.com/ds9ru6lxp/image/upload/v1785555771/MAX01588_khmpqp.jpg",
    title: "Crankworx",
    location: "Vancouver, CA",
    year: "2026",
    category: "liveevent",
    span: "tall",
  },
];

const categories = [
  { label: "All Work", value: "all" },
  { label: "Portrait", value: "portrait" },
  { label: "Street", value: "street" },
  { label: "Live Event", value: "liveevent" },
];

// State
let activeCategory = "all";
let lightboxIndex = null;
let mobileMenuOpen = false;
let scrolled = false;
let shuffledPhotos = [];

// DOM elements
const nav = document.getElementById('nav');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const filters = document.getElementById('filters');
const gallery = document.getElementById('gallery');
const noWork = document.getElementById('no-work');
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxContent = document.getElementById('lightbox-content');
const heroEyebrow = document.getElementById('hero-eyebrow');
const heroTitle = document.getElementById('hero-title');
const heroDetails = document.getElementById('hero-details');
const aboutSection = document.getElementById('about');
const aboutCopy = document.getElementById('about-copy');
const aboutImage = document.getElementById('about-image');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  shuffledPhotos = shufflePhotos(photos);
  renderGallery();
  updateFilterButtons();
  setupEventListeners();
  setupScrollHandler();
  animateHero();
  animateAbout();
});

function animateHero() {
  if (!window.gsap) return;

  gsap.set([heroEyebrow, heroTitle, heroDetails], { opacity: 0 });

  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  timeline
    .fromTo(heroEyebrow, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7 })
    .fromTo(heroTitle, { opacity: 0, y: 42 }, { opacity: 1, y: 0, duration: 1 }, '-=0.35')
    .fromTo(heroDetails, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5');
}

function animateAbout() {
  if (!window.gsap || !window.ScrollTrigger || !aboutSection) return;

  gsap.registerPlugin(ScrollTrigger);

  const aboutTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: aboutSection,
      start: 'top 75%',
      once: true,
    },
    defaults: { ease: 'power3.out' },
  });

  aboutTimeline
    .fromTo(aboutCopy, { opacity: 0, x: -36 }, { opacity: 1, x: 0, duration: 0.85 })
    .fromTo(aboutImage, { opacity: 0, x: 36 }, { opacity: 1, x: 0, duration: 0.85 }, '-=0.6');
}

function animateGallery() {
  if (!window.gsap || !window.ScrollTrigger || !gallery) return;

  gsap.registerPlugin(ScrollTrigger);

  const photoItems = gsap.utils.toArray('.photo-item');

  gsap.fromTo(
    photoItems,
    {
      autoAlpha: 0,
      y: 32,
      scale: 0.98,
      opacity: 0,
    },
    {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 0.75,
      ease: 'power3.out',
      delay: 0.1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: gallery,
        start: 'top 82%',
        once: true,
      },
    }
  );
}

function shufflePhotos(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

// Setup event listeners
function setupEventListeners() {
  // Mobile menu toggle
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);

  // Filter buttons
  filters.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const category = e.target.dataset.category;
      setActiveCategory(category);
    }
  });

  // Gallery click
  gallery.addEventListener('click', (e) => {
    const photoItem = e.target.closest('.photo-item');
    if (photoItem) {
      const index = Number.parseInt(photoItem.dataset.index, 10);
      openLightbox(index);
    }
  });

  // Lightbox
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', prevPhoto);
  lightboxNext.addEventListener('click', nextPhoto);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightboxIndex !== null) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    }
  });
}

// Setup scroll handler
function setupScrollHandler() {
  window.addEventListener('scroll', () => {
    const shouldScroll = window.scrollY > 60;
    if (shouldScroll !== scrolled) {
      scrolled = shouldScroll;
      updateNavStyle();
    }
  });
}

// Update navigation style based on scroll
function updateNavStyle() {
  if (scrolled) {
    nav.style.background = 'rgba(14, 0, 32, 0.75)';
    nav.style.backdropFilter = 'blur(16px)';
    nav.style.borderBottom = '1px solid rgba(255,255,255,0.07)';
  } else {
    nav.style.background = 'transparent';
    nav.style.backdropFilter = 'none';
    nav.style.borderBottom = 'none';
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  if (mobileMenuOpen) {
    mobileMenu.classList.remove('hidden');
    mobileMenuToggle.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 6L6 18"/>
      <path d="M6 6l12 12"/>
    </svg>`;
  } else {
    mobileMenu.classList.add('hidden');
    mobileMenuToggle.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>`;
  }
}

// Set active category
function setActiveCategory(category) {
  activeCategory = category;
  updateFilterButtons();
  renderGallery();
}

function normalizeCategory(category) {
  const rawCategory = String(category || '').trim().toLowerCase();
  return rawCategory === 'liveevents' ? 'liveevent' : rawCategory;
}

function getCategoryLabel(category) {
  switch (normalizeCategory(category)) {
    case 'portrait': return 'Portrait';
    case 'street': return 'Street';
    case 'liveevent': return 'Live Event';
    default: return 'Work';
  }
}

// Update filter button styles
function updateFilterButtons() {
  const buttons = filters.querySelectorAll('button');
  buttons.forEach(button => {
    const isActive = button.dataset.category === activeCategory;
    if (isActive) {
      button.style.background = '#4DFF30';
      button.style.color = '#0e0020';
      button.style.border = '1px solid #4DFF30';
      button.classList.add('active');
    } else {
      button.style.background = 'rgba(255,255,255,0.07)';
      button.style.color = 'rgba(240,234,255,0.6)';
      button.style.border = '1px solid rgba(255,255,255,0.1)';
      button.classList.remove('active');
    }
  });
}

// Get filtered photos
function getFilteredPhotos() {
  const sourcePhotos = shuffledPhotos.length ? shuffledPhotos : photos;
  return activeCategory === 'all'
    ? sourcePhotos
    : sourcePhotos.filter(p => normalizeCategory(p.category) === activeCategory);
}

// Render gallery
function renderGallery() {
  const filtered = getFilteredPhotos();
  gallery.innerHTML = '';

  if (filtered.length === 0) {
    noWork.classList.remove('hidden');
    return;
  }

  noWork.classList.add('hidden');

  filtered.forEach((photo, index) => {
    const photoElement = createPhotoElement(photo, index);
    gallery.appendChild(photoElement);
  });

  animateGallery();
}

// Create photo element
function createPhotoElement(photo, index) {
  const div = document.createElement('div');
  div.className = 'photo-item break-inside-avoid relative overflow-hidden cursor-pointer group';
  div.dataset.index = index;
  div.style.border = '1px solid rgba(255,255,255,0.06)';
  div.style.opacity = '0';
  div.style.transform = 'translateY(28px)';

  const aspectRatio = photo.span === 'tall' ? '3/4' :
                     photo.span === 'wide' ? '16/9' : '1/1';
  const categoryLabel = getCategoryLabel(photo.category);

  div.innerHTML = `
    <img
      src="${photo.src}"
      alt="${photo.title} — ${photo.location}"
      class="w-full block transition-transform duration-700 ease-out group-hover:scale-105"
      style="aspect-ratio: ${aspectRatio}; object-fit: cover; background: #1a0035;"
    />
    <!-- Hover overlay -->
    <div
      class="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style="background: linear-gradient(to top, rgba(14,0,32,0.9) 0%, transparent 55%);"
    >
      <div class="flex items-end justify-between">
        <div>
          <p
            class="text-base font-medium leading-tight mb-0.5"
            style="font-family: 'Syncopate', sans-serif; font-size: 0.8rem; letter-spacing: 0.1em;"
          >
            ${photo.title}
          </p>
          <p
            class="text-xs"
            style="color: rgba(240,234,255,0.5); font-family: 'JetBrains Mono', monospace;"
          >
            ${photo.location} · ${photo.year}
          </p>
        </div>
        <div
          class="w-8 h-8 flex items-center justify-center flex-shrink-0"
          style="background: #4DFF30; color: #0e0020;"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Category tag -->
    <div
      class="absolute top-3 left-3 px-2 py-0.5 text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style="font-family: 'JetBrains Mono', monospace; background: ${getCategoryColor(photo.category)}; border: 1px solid rgba(255,255,255,0.15); color: #f0eaff;"
    >
      ${categoryLabel}
    </div>
  `;

  return div;
}

// Get category color
function getCategoryColor(category) {
  switch (normalizeCategory(category)) {
    case 'portrait': return '#D9033C';
    case 'landscape': return 'rgba(14,0,32,0.7)';
    case 'street': return 'rgba(77,255,48,0.15)';
    case 'liveevent': return 'rgba(14,0,32,0.6)';
    default: return 'rgba(14,0,32,0.6)';
  }
}

// Open lightbox
function openLightbox(index) {
  lightboxIndex = index;
  renderLightbox();
  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
  lightboxIndex = null;
  lightbox.classList.add('hidden');
  document.body.style.overflow = '';
}

// Previous photo
function prevPhoto() {
  if (lightboxIndex === null) return;
  const filtered = getFilteredPhotos();
  lightboxIndex = (lightboxIndex - 1 + filtered.length) % filtered.length;
  renderLightbox();
}

// Next photo
function nextPhoto() {
  if (lightboxIndex === null) return;
  const filtered = getFilteredPhotos();
  lightboxIndex = (lightboxIndex + 1) % filtered.length;
  renderLightbox();
}

// Render lightbox
function renderLightbox() {
  if (lightboxIndex === null) return;

  const filtered = getFilteredPhotos();
  const photo = filtered[lightboxIndex];

  lightboxContent.innerHTML = `
    <img
      src="${photo.src}"
      alt="${photo.title}"
      class="max-h-[75vh] max-w-full object-contain"
      style="background: #1a0035;"
    />
    <div class="mt-5 flex items-center justify-between w-full max-w-xl px-1">
      <div>
        <p
          class="text-base mb-0.5"
          style="font-family: 'Syncopate', sans-serif; font-weight: 700; letter-spacing: 0.1em;"
        >
          ${photo.title}
        </p>
        <p
          class="text-xs"
          style="color: rgba(240,234,255,0.45); font-family: 'JetBrains Mono', monospace;"
        >
          ${photo.location} · ${photo.year}
        </p>
      </div>
      <span
        class="text-[10px] px-3 py-1 tracking-widest uppercase"
        style="font-family: 'JetBrains Mono', monospace; color: #4DFF30; border: 1px solid rgba(77,255,48,0.3);"
      >
        ${getCategoryLabel(photo.category)}
      </span>
    </div>
    <div
      class="mt-3 text-xs"
      style="color: rgba(240,234,255,0.2); font-family: 'JetBrains Mono', monospace;"
    >
      ${lightboxIndex + 1} / ${filtered.length}
    </div>
  `;
}
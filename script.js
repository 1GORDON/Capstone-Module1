const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('mob-nav');
const menuItems = Array.from(document.querySelectorAll('.page-sections'));

function openMobileMenu() {
  menu.style.display = 'block';
}

function closeMobileMenu() {
  menu.style.display = 'none';
}

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);

menuItems.forEach((item) => {
  item.addEventListener('click', closeMobileMenu);
});

const data = [
  {
    id: 1,
    pic: './images/speaker1.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Gordon',
    designation: 'Institute for Professional Excellence in Coaching',
    history: 'Inspiring children to achieve greatness is not about wanting them to be confident in all areas of their life',
  },
  {
    id: 2,
    pic: './images/speaker2.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Smith',
    designation: 'Institute for Professional Excellence in Coaching',
    history: 'Inspiring children to achieve greatness is not about wanting them to be confident in all areas of their life',
  },
  {
    id: 3,
    pic: './images/speaker3.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Kenneth',
    designation: 'Institute for Professional Excellence in Coaching',
    history: 'Inspiring children to achieve greatness is not about wanting them to be confident in all areas of their life',
  },
  {
    id: 4,
    pic: './images/speaker4.png',
    altText: 'Canadian venture capitalist and entrepreneur',
    nameOfSpeaker: 'Keith',
    designation: 'Institute for Professional Excellence in Coaching',
    history: 'Inspiring children to achieve greatness is not about wanting them to be confident in all areas of their life',
  },
  {
    id: 5,
    pic: './images/speaker5.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Daniel',
    designation: 'Institute for Professional Excellence in Coaching',
    history: 'Inspiring children to achieve greatness is not about wanting them to be confident in all areas of their life',
  },
  {
    id: 6,
    pic: './images/speaker6.png',
    altText: 'This is featured speaker image',
    nameOfSpeaker: 'Stephen',
    designation: 'Institute for Professional Excellence in Coaching',
    history: 'Inspiring children to achieve greatness is not about wanting them to be confident in all areas of their life',
  },
];

const speakerContainer = document.createElement('section');
speakerContainer.setAttribute('class', 'featured-speakers');
speakerContainer.setAttribute('id', 'speakers');

data.forEach((speakerPara) => {
  const speakerSection = document.createElement('div');
  speakerSection.setAttribute('class', 'speaker-section');
  speakerSection.setAttribute('id', 'each-speaker');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'speaker-image-section');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker-image');
  image.setAttribute('src', speakerPara.pic);
  image.setAttribute('alt', speakerPara.altText);

  imageSection.appendChild(image);
  speakerSection.appendChild(imageSection);

  const contentSection = document.createElement('div');
  contentSection.setAttribute('class', 'speaker-details');
  contentSection.setAttribute('id', 'about-speaker');

  const speakerName = document.createElement('h2');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.textContent = speakerPara.nameOfSpeaker;
  contentSection.appendChild(speakerName);

  const speakerDesignation = document.createElement('p');
  speakerDesignation.setAttribute('class', 'speaker-designation');
  speakerDesignation.textContent = speakerPara.designation;
  contentSection.appendChild(speakerDesignation);

  const dotText = document.createElement('p');
  dotText.setAttribute('id', 'dots');
  dotText.textContent = '.........';
  contentSection.appendChild(dotText);

  const speakerHistory = document.createElement('p');
  speakerHistory.setAttribute('class', 'speaker-history');
  speakerHistory.textContent = speakerPara.history;
  contentSection.appendChild(speakerHistory);

  speakerSection.appendChild(contentSection);
  speakerContainer.appendChild(speakerSection);
});

const body = document.querySelector('body');
const partners = document.getElementById('partners');
body.insertBefore(speakerContainer, partners);

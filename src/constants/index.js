export { default as images } from './images';
export { getDateDiffInDays, fetcher, reactSvgComponentToMarkupString } from './utils';
export const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

export const HOME_LINK = 'home';
export const ABOUT_LINK = 'about';
export const WORK_LINK = 'projects';
export const SKILLS_LINK = 'skills';
export const CERTIFICATES_LINK = 'certifications';
export const ACCOMPLISHMENTS_LINK = 'accomplishments';
export const PAINTINGS_LINK = 'paintings';
export const CONTACT_LINK = 'contact';
export const navLinks = [ABOUT_LINK, WORK_LINK, SKILLS_LINK, CERTIFICATES_LINK, ACCOMPLISHMENTS_LINK, PAINTINGS_LINK, CONTACT_LINK];
export const navDotsLinks = [HOME_LINK, ABOUT_LINK, WORK_LINK, SKILLS_LINK, CERTIFICATES_LINK, ACCOMPLISHMENTS_LINK, PAINTINGS_LINK, CONTACT_LINK];

export const ALL_TAG = 'All';
export const PROJECT_TAGS = [ALL_TAG, 'AI', 'Full-Stack', 'JavaScript', 'Python', 'PWA', 'R', 'React', 'SpringBoot', 'ThreeJS', 'Web 3.0'];

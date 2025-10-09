const AUTH_PATH = {
	login: '/login',
	forgotPassword: '/forgot-password',
	changePassword: '/change-password',
	resetPassword: '/reset-password',
	verifyOtp: '/verify-otp',
};

const DASHBOARD_PATH = {
	dashboard: '/dashboard',
};

const CATEGORIES_PATH = {
	wishesCategory: '/wishes-category',
	createWishCategory: '/wishes-category/create',
	updateWishCategory: '/wishes-category/update/:id',
	newsCategory: '/news-category',
	createNewsCategory: '/news-category/create',
	updateNewsCategory: '/news-category/update/:id',
	eventCategory: '/event-category',
	createEventCategory: '/event-category/create',
	updateEventCategory: '/event-category/update/:id',
	newsLetterCategory: '/news-letter-category',
	createNewsLetterCategory: '/news-letter-category/create',
	updateNewsLetterCategory: '/news-letter-category/update/:id',
};

const EVENT_PATH = {
	eventList: '/event',
	eventDetails: '/event/details/:id',
	createEvent: '/event/create',
	updateEvent: '/event/update/:id',
	deleteEvent: '/event/delete/:id',
};
const NEWS_PATH = {
	list: '/news',
	createNews: '/news/create',
	updateNews: '/news/update/:id',
	newsDetails: '/news/details/:id',
};
const NEWS_CHANNEL = {
	list: '/news-channel',
	NewsChannelDetails: '/news/details/:id',
};
const WISHES_PATH = {
	list: '/wishes',
	create: '/wishes/create',
	update: '/wishes/update/:id',
	details: '/wishes/details/:id',
};
const FAQ_PATH = {
	list: '/faq',
	create: '/faq/create',
	update: '/faq/update/:id',
	details: '/faq/details/:id',
};
const PRIVACY_PATH = {
	list: '/privacy-policy',
	create: '/privacy-policy/create',
	update: '/privacy-policy/update/:id',
	details: '/privacy-policy/details/:id',
};
const USER_ROUTES = {
	list: '/user',
	create: '/user/create',
	update: '/user/update/:id',
	details: '/user/details/:id',
};
const SUPERADMIN_ROUTES = {
	list: '/admin',
	create: '/admin/create',
	update: '/admin/update/:id',
	details: '/admin/details/:id',
};
const NOTIFICATION_ROUTES = {
	list: '/notification-type',
	create: '/notification-type/create',
	update: '/notification-type/update/:id',
	details: '/notification-type/details/:id',
};

const CONTACT_PATH = {
	list: '/contact-us',
};

const SETTING_PATH = {
	setting: '/setting',
	admin: SUPERADMIN_ROUTES,
	donationSetting: '/donation-setting',
	notification: NOTIFICATION_ROUTES,
	newsLetter: '/news-letter',
};
const DONATION_PATH = {
	donation: '/donation',
};
const WITHDRAW_REQUEST = {
	withdrawRequest: '/withdraw-request',
};
const BANNER_ROUTES = {
	list: '/banner',
	create: '/banner/create',
	update: '/banner/update/:id',
	details: '/banner/details/:id',
};
const CMS_ROUTES = {
	aboutUs: '/about-us',
	updateAbouts: '/about-us/update',
	banner: BANNER_ROUTES,
};

export const PATH = {
	auth: AUTH_PATH,
	dashboard: DASHBOARD_PATH,
	category: CATEGORIES_PATH,
	event: EVENT_PATH,
	news: NEWS_PATH,
	news_channel: NEWS_CHANNEL,
	wishes: WISHES_PATH,
	faqs: FAQ_PATH,
	privacy: PRIVACY_PATH,
	contact: CONTACT_PATH,
	setting: SETTING_PATH,
	donation: DONATION_PATH,
	withdrawRequest: WITHDRAW_REQUEST,
	cms: CMS_ROUTES,
	user: USER_ROUTES,
};

import AboutMe from "../../components/applications/about/aboutMe.about";
import ContactMe from "../../components/applications/about/contactMe.about";
import Education from "../../components/applications/about/education.about";
import Experience from "../../components/applications/about/experience.about";
import Projects from "../../components/applications/about/projects.about";
import Resume from "../../components/applications/about/resume.about";
import Skills from "../../components/applications/about/skills.about";
import Chrome from "../../components/applications/chrome.application";
import aboutMe from "../../assets/images/apps/aboutMe.png";
import chrome from "../../assets/images/apps/chrome.svg";
import mail from "../../assets/images/apps/mail.png";
import projectsIcon from "../../assets/images/baseImages/default_folder.png";
import settings from "../../assets/images/apps/settings.svg";
import BackgroundSettings from "../../components/applications/settings/background.settings";
import MacOSSettings from "../../components/macOS/settings/macOSSettings";

const appConfig = [
	{
		id: "aboutMe",
		name: "About Me",
		order: 1,
		icon: aboutMe,
		showInDesktop: true,
		isApplication: false,
		showLinks: true,
		subComponent: [
			{
				name: "About Me",
				component: AboutMe,
			},
			{
				name: "Experience",
				component: Experience,
			},
			{
				name: "Education",
				component: Education,
			},
			{
				name: "Projects",
				component: Projects,
			},
			{
				name: "Skills",
				component: Skills,
			},
			{
				name: "Resume",
				component: Resume,
			},
			{
				name: "Contact Me",
				component: ContactMe,
			},
		],
	},
	{
		id: "projects",
		name: "Projects",
		order: 2,
		icon: projectsIcon,
		isApplication: true,
		showInDesktop: true,
		showLinks: true,
		subComponent: [
			{
				name: "Projects",
				component: Projects,
			},
		],
	},
	{
		id: "mail",
		name: "Contact Me",
		order: 4,
		icon: mail,
		isApplication: true,
		showInDesktop: true,
		showLinks: true,
		subComponent: [
			{
				name: "Contact Me",
				component: ContactMe,
			},
		],
	},
	{
		id: "chrome",
		name: "Chrome",
		order: 5,
		icon: chrome,
		isApplication: true,
		showInDesktop: true,
		showLinks: true,
		subComponent: [
			{
				name: "chrome",
				component: Chrome,
			},
		],
	},
	{
		id: "settings",
		name: "Settings",
		order: 8,
		icon: settings,
		showInDesktop: false,
		isApplication: false,
		showLinks: true,
		subComponent: [
			{
				name: "Background",
				component: BackgroundSettings,
			},
			{
				name: "System Settings",
				component: MacOSSettings,
			},
		],
	},
];

export default appConfig;

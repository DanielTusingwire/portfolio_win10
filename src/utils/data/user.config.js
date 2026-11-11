import ResumePDF from "./Daniel_Tusingwire_CV.pdf";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";
import Farmsell from "../../assets/images/data/farmsell.png";
import Othware from "../../assets/images/data/othware.png";
import Tallen from "../../assets/images/data/tallen.png";

const user = {
	firstName: "Daniel",
	lastName: "Tusingwire",
	title: "Product Design Engineer",
	userImage: default_avatar,
	resume: ResumePDF,
	email: "dtusingwiree@gmail.com",
	phone: "+256 758 361 967",
	whatsapp: "+256 758 361 967",
	// Not on the CV. Fill these in to show the icons:
	// linkedIn: "in/your-handle", gitHub: "your-handle", twitter: "your-handle"
	linkedIn: "",
	gitHub: "",
	twitter: "",
	aboutMe: {
		intro: "Product Design Engineer | Uganda",
		description: "Product Design Engineer with over 5 years of experience contributing to the design and development of digital products, with experience across mobile applications, business software, and customer-facing platforms. Skilled in translating complex business requirements and user needs into intuitive product experiences through user research, interaction design, information architecture, wireframing, high-fidelity UI design, and interactive prototyping.",
		outro: "Combining hands-on product design experience with a Bachelor of Science in Software Engineering, I bring a practical understanding of both user experience and technical implementation. Experienced in working across the product development lifecycle, from problem discovery and concept development to design validation, developer handoff, implementation, and continuous improvement. Proficient in Figma, design systems, cross-functional collaboration, and AI-assisted product development, with a focus on building accessible, consistent, and effective digital experiences."
	},
	experiences: [
		{
			organization: "farmsell (Tech-Enabled Agricultural Enterprise)",
			organizationPicture: Farmsell,
			isCurrent: true,
			startDate: "01/2024",
			endDate: null,
			positions: [
				{
					positionName: "Product Design Engineer",
					startDate: "01/2024",
					endDate: "Present",
					location: "Bujjuko, Wakiso, Uganda",
					isPresent: true,
					description: "Contributed to the design and development of a multi-product agricultural commerce ecosystem, building digital applications that connect farmers, business partners, aggregators, distributors, and buyers. Worked across product discovery, user experience design, prototyping, design systems, and implementation, translating operational and business requirements into practical digital workflows.",
					highlights: [
						"Designed and refined user experiences across multiple mobile applications, including the Buyer, Business Partner, Distributor, and Aggregator applications, supporting different user groups within the agricultural commerce ecosystem.",
						"Translated business requirements and customer needs into user flows, information architecture, wireframes, interactive prototypes, and high-fidelity mobile interfaces.",
						"Designed application workflows for product discovery, farmer registration, partner management, product listing, inventory coordination, and agricultural commerce operations.",
						"Worked on complex, role-based experiences, ensuring that application features, navigation, permissions, and workflows aligned with the responsibilities of different platform participants.",
						"Collaborated with business stakeholders, operations teams, and customers to understand existing processes, identify usability challenges, and translate findings into product improvements.",
						"Participated in field activities and customer engagement to understand user behaviours, operational challenges, and the practical conditions in which the applications were used.",
						"Created and maintained reusable design components, interaction patterns, and design system documentation to improve consistency across applications.",
						"Worked closely with software engineers throughout product development, communicating design specifications, reviewing implementation, and resolving usability and interface inconsistencies.",
						"Conducted design reviews, gathered feedback, and refined product experiences through iterative design and validation.",
						"Applied AI-assisted tools and prompt engineering to support product discovery, workflow exploration, documentation, and product development activities.",
						"Contributed to continuous product improvement by evaluating existing workflows, identifying usability gaps, and recommending design solutions."
					]
				}
			]
		},
		{
			organization: "Othware Limited Uganda",
			organizationPicture: Othware,
			isCurrent: false,
			startDate: "11/2022",
			endDate: "11/2023",
			positions: [
				{
					positionName: "Product Design Engineer",
					startDate: "11/2022",
					endDate: "11/2023",
					location: "Kampala, Uganda",
					isPresent: false,
					description: "Contributed to product design and development activities at Othware Limited, working across product requirements, user experience design, interface development, and product implementation. Collaborated with the team to translate business and user needs into functional product experiences.",
					highlights: [
						"Participated in product discovery and requirements analysis to understand business problems, user needs, and product objectives.",
						"Translated product requirements into user flows, wireframes, interface designs, and interactive prototypes.",
						"Designed and refined user-centred interfaces and workflows for software products.",
						"Developed and refined product interactions, navigation structures, and reusable interface components.",
						"Collaborated with software engineers and stakeholders to align design decisions with technical requirements and implementation constraints.",
						"Participated in design reviews, implementation feedback, and product quality assurance to ensure consistency between approved designs and delivered functionality.",
						"Contributed to improving existing product experiences through feedback, usability considerations, and iterative design improvements."
					]
				}
			]
		},
		{
			organization: "Tallen Limited – Software Development Company",
			organizationPicture: Tallen,
			isCurrent: false,
			startDate: "06/2020",
			endDate: "09/2022",
			positions: [
				{
					positionName: "Junior Product Designer",
					startDate: "09/2020",
					endDate: "09/2022",
					location: "Wakiso, Uganda",
					isPresent: false,
					description: "Progressed from a Product Design Intern into a Junior Product Designer role, contributing to the design and development of software products across education, e-commerce, and enterprise applications. Worked with clients, product stakeholders, and development teams to transform user and business requirements into functional, user-centred digital experiences.",
					highlights: [
						"Contributed to the design of software products, including education management systems, e-commerce applications, and internal business management platforms.",
						"Worked with clients and product stakeholders to understand business processes, user requirements, and functional expectations.",
						"Conducted user research, customer interviews, and usability evaluations to identify user challenges and inform design decisions.",
						"Created user flows, information architecture, wireframes, and interactive prototypes to communicate product concepts and validate proposed solutions.",
						"Designed high-fidelity user interfaces with attention to visual hierarchy, typography, navigation, accessibility, and consistency.",
						"Collaborated with developers during product implementation to clarify design requirements, review interfaces, and address usability issues.",
						"Contributed to reusable UI components and design system documentation to maintain consistency across different software products.",
						"Participated in product discovery and design reviews, incorporating stakeholder and user feedback into subsequent design iterations.",
						"Supported frontend implementation activities, strengthening collaboration between product design and software development."
					]
				},
				{
					positionName: "Product Design Intern",
					startDate: "06/2020",
					endDate: "09/2020",
					location: "Wakiso, Uganda",
					isPresent: false,
					description: "Joined Tallen as a Product Design Intern, gaining practical experience in designing software products and translating user requirements into structured interface solutions. Worked alongside designers and developers on real-world digital product development projects.",
					highlights: [
						"Assisted in designing user interfaces for education management systems, e-commerce applications, and business software.",
						"Created low-fidelity wireframes, user flows, and high-fidelity interface mockups using Figma and Adobe XD.",
						"Participated in requirements discussions and design activities to understand user needs and product objectives.",
						"Supported user research and usability evaluation activities, helping identify opportunities to improve navigation and product interactions.",
						"Assisted in maintaining reusable UI components and visual design consistency across product interfaces.",
						"Collaborated with developers to communicate design specifications and understand the implementation of interface elements.",
						"Developed practical skills in interaction design, visual hierarchy, prototyping, and collaborative product development."
					]
				}
			]
		}
	],
	education: [
		{
			degree: "Bachelor of Science in Software Engineering",
			instituteName: "Cavendish University Uganda",
			year: "05/2021 – 08/2025",
			location: "Nsambya, Kampala",
			id: 1
		},
		{
			degree: "Certificate in Graphic Design",
			instituteName: "Fine Graphic School",
			year: "12/2019 – 02/2020",
			location: "Kampala",
			id: 2
		},
		{
			degree: "A-Level Certificate (UACE)",
			instituteName: "St Joseph's Secondary School",
			year: "2018 – 2019",
			location: "Nansana, Kampala",
			id: 3
		},
		{
			degree: "O-Level Certificate (UCE)",
			instituteName: "St Joseph's Secondary School",
			year: "2014 – 2017",
			location: "Nansana, Kampala",
			id: 4
		}
	],
	certifications: [
		{
			name: "User Experience Design",
			issuer: "Georgia Institute of Technology · 2022"
		},
		{
			name: "UX Design Fundamentals",
			issuer: "California Institute of the Arts · 2022"
		},
		{
			name: "Data Analytics Fundamentals",
			issuer: "IBM"
		},
		{
			name: "Introduction to HTML, CSS and JavaScript",
			issuer: "Coursera"
		}
	],
	projects: [
		{
			projectName: "Farmsell App – Agricultural Logistics Platform",
			description:
				"A role-based mobile app that helps aggregators, transporters, hub operators, distributors, and vendors coordinate agricultural produce efficiently and transparently. From collecting and recording farm produce to moving loads, verifying and allocating stock at hubs, last-mile delivery, and vendor orders, each user gets an experience shaped around their role in the supply chain.",
			madeWith: [
				"Product Design",
				"UX/UI Design",
				"Mobile Experience",
				"Agricultural Technology",
			],
			availabilityNote: "Available after public release",
			caseStudyApp: "farmsellCaseStudy",
		},
		{
			projectName:
				"Etasuisse PM – Internal Project Management & Cost Tracking Platform",
			description:
				"An internal platform built for Etasuisse AG, a Swiss engineering company specialising in piping systems, geothermal energy and technical water treatment. It connects an admin web dashboard with a mobile app for field operators, replacing manual Excel-based processes with one system for managing projects, logging work hours, recording material and vehicle costs, handling expenses and producing financial reports. Office teams can now coordinate field operations, monitor project costs and track profitability in real time.",
			madeWith: ["Product Design", "Internal Tools", "Web Dashboard", "Mobile App"],
			links: [
				{
					label: "View Mobile App",
					url: "https://www.figma.com/proto/hZqxhmjRNfMzXw1wapgXrJ/Etasuisse.com?node-id=296-10048&p=f&t=sSlYWFfVHVXURiCw-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=203%3A5496",
				},
				{
					label: "View Dashboard",
					url: "https://www.figma.com/proto/hZqxhmjRNfMzXw1wapgXrJ/Etasuisse.com?node-id=176-2134&p=f&t=9R2sRrs7Lfn3fJkk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=176%3A2134",
				},
			],
		},
		{
			projectName: "Fullness – Personal Finance & Budgeting App",
			description:
				"A mobile app that helps people take control of their money and build lasting financial habits. Fullness brings expense tracking, savings, budgeting, financial goals, and net worth into one place, guided by simple daily actions, streaks that keep users motivated, and practical money-saving tips.",
			madeWith: [
				"Product Design",
				"UX/UI Design",
				"Mobile Experience",
				"Financial Technology",
			],
			link: "https://www.figma.com/proto/jSi0ulQaDiDI7mSRO1HxuG/Fullness-Application?node-id=15-884&starting-point-node-id=2%3A5&t=UWCshTjFtFniwFCX-1",
		},
		{
			projectName: "PaysLo – Seamless Digital Wallet for Everyone",
			description:
				"A modern digital wallet app built for fast, secure, and accessible money management. PaysLo allows users to send, receive, deposit, withdraw, and exchange funds through mobile money, bank, PayPal, and Stripe. Designed with simplicity and trust at its core, the app empowers users across currencies and borders.",
			madeWith: ["Product Design", "UX/UI Design", "Financial Technology"],
			link: "https://www.figma.com/proto/6sBHelBOWnLNrsaHLjrHrj/PaysLo--local-?page-id=0%3A1&node-id=79-618&p=f&viewport=476%2C102%2C0.04&t=rbKUsP0FD2x71Hjf-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A2",
		},
		{
			projectName: "Budytalk – Voice-First Social Platform",
			description:
				"A dynamic social platform designed for real-time connection through posts, live video, audio spaces, and professional networking. Budytalk empowers users to share, chat, and grow their digital presence—all while sounding like themselves.",
			madeWith: ["Product Design", "UX Research", "Design Strategy"],
			link: "https://www.figma.com/proto/MPfl5K0T7G8zCBSvez50ZB/Budytalk-App--local-?page-id=0%3A1&node-id=1793-4440&p=f&viewport=414%2C238%2C0.03&t=HYFWPHvVLTbM8gxi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1793%3A4440",
		},
		{
			projectName: "Utluff – Global Service Connector App",
			description:
				"A seamless mobile platform that bridges the gap between service seekers and verified professionals across the world. From booking doctors or handymen to live chat and secure wallet integration—Utluff is built for convenience, trust, and global accessibility.",
			madeWith: [
				"Product Design",
				"UX/UI Design",
				"Mobile Experience",
				"Design Systems",
			],
			link: "https://www.figma.com/proto/7lljoFdh5QNAJgsuVdvSOc/Utluff-App?page-id=0%3A1&node-id=516-3631&p=f&viewport=454%2C543%2C0.18&t=jWH2sMHQIdwqU4IV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
		},
		{
			projectName:
				"ICPAU Website Redesign – Transforming the Digital Experience for Uganda's Accountants",
			description:
				"A complete redesign of the homepage and key sections for the Institute of Certified Public Accountants of Uganda (ICPAU). This project focused on enhancing user experience, content clarity, and modern interface design—tailored for students, members, and the broader financial community.",
			madeWith: [
				"Product Design",
				"UX Research",
				"Information Architecture",
				"UI Design",
			],
			link: "https://www.figma.com/proto/kL0HdNlhQeTC0YXTXzV9FM/CPA-Website--Copy-?page-id=0%3A1&node-id=3-2&p=f&viewport=627%2C213%2C0.05&t=7xd6hezLIl739nBH-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A2",
		},
		{
			projectName: "Enterprise Solutions – Tech Solutions for Business Growth",
			description:
				"A corporate website crafted for Enterprise Solutions Limited to showcase their digital transformation services. It features intuitive navigation, product storytelling, and client-focused design to drive engagement and conversions for ERP, Power Platform, and vertical solution offerings.",
			madeWith: [
				"Web Design",
				"UI/UX Design",
				"Responsive Design",
				"B2B Platform",
			],
			link: "https://www.figma.com/proto/PuNs8xNkqTJwm7oG8S8TyB/Enterprise-Solutions-Ltd?page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2&scaling=contain&content-scaling=responsive&t=OuhZixlNY1kT9Rqj-1",
		},
		{
			projectName: "RENTIFY – Property Rental Platform",
			description:
				"A user-centric web platform designed to simplify house rentals. RENTIFY enables users to search properties by location, price, and rooms, then seamlessly book visits or contact landlords. With landlord onboarding, admin review flow, and property listing dashboard—RENTIFY balances intuitive UX with functional scalability.",
			madeWith: [
				"Product Design",
				"UX/UI Design",
				"Web Experience",
				"Interaction Design",
			],
			link: "https://www.figma.com/proto/Xdcll2HHPPXX9lMu6RFBhT/Rentify-Home-Renting?page-id=0%3A1&node-id=1-8&p=f&viewport=268%2C299%2C0.04&t=KALGJFTrKAM9kfgt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A8",
		},
	],
	skills: [
		{
			name: "Product Design & User Experience",
			values: [
				"End-to-End Product Design",
				"Mobile Application Design",
				"UX Design",
				"UI Design",
				"Interaction Design",
				"Information Architecture",
				"User Journey Mapping",
				"User Flows and Wireframing",
				"High-Fidelity Interface Design",
			],
		},
		{
			name: "Research & Product Validation",
			values: [
				"User Research and Customer Interviews",
				"Usability Testing",
				"Product Discovery",
				"Requirements Analysis",
				"Customer Feedback Analysis",
				"Design Iteration and Validation",
			],
		},
		{
			name: "Prototyping & Design Systems",
			values: [
				"Low- and High-Fidelity Prototyping",
				"Interactive Prototyping",
				"Design Systems and Component Libraries",
				"Reusable UI Components",
				"Design Documentation",
				"Developer Handoff",
				"Design Quality Assurance",
			],
		},
		{
			name: "Software Engineering & AI",
			values: [
				"HTML, CSS and JavaScript",
				"Software Development Lifecycle",
				"Software Architecture Fundamentals",
				"Database and API Concepts",
				"Agile Product Development",
				"AI-Assisted Product Development",
				"Prompt Engineering",
			],
		},
		{
			name: "Design & Development Tools",
			values: [
				"Figma and FigJam",
				"Adobe XD",
				"Adobe Photoshop",
				"Adobe Illustrator",
				"Adobe InDesign",
				"Git and GitHub",
				"Microsoft Teams",
				"Google Workspace",
			],
		},
	],
};

export default user;

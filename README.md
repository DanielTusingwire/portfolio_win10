# Daniel Tusingwire | Portfolio

The portfolio of Daniel Tusingwire, a Product Design Engineer from Uganda. It works like a Windows 10 desktop: visitors press Enter, then open apps to explore my work. A macOS version is also available at `/macOS`.

## What's inside

- **About Me:** my summary, experience, education, projects, skills, resume and contact details
- **Farmsell Case Study:** a full UX case study, also at `/case-studies/farmsell/`
- **Projects:** nine product design projects, most with links to their Figma prototypes
- **Contact Me:** email, phone and WhatsApp links
- **Chrome:** a small browser window inside the desktop
- **Settings:** wallpaper and system options

## Projects

- Farmsell App: agricultural logistics platform
- Etasuisse PM: project management and cost tracking platform
- Fullness: personal finance and budgeting app
- PaysLo: digital wallet
- Budytalk: voice-first social platform
- Utluff: global service connector app
- ICPAU: website redesign
- Enterprise Solutions: corporate website
- RENTIFY: property rental platform

## Run it locally

You need [Node.js](https://nodejs.org/). The version this project expects is in `.nvmrc`.

```bash
npm ci
```

```bash
npm start
```

The site opens at http://localhost:3000. To use another port, add a `.env` file with a line such as `PORT=3005`.

| Page | Address |
| --- | --- |
| Windows 10 | `/` |
| macOS | `/macOS` |

## Build it

```bash
npm run build
```

This creates a static site in the `build` folder.

## Deploy

Live at https://daniel-tusingwire.pages.dev/

The site is hosted on Cloudflare Pages, connected to this repository. Its build command is `npm run build` and its build output directory is `build`. Each push to `main` updates the live site.

## Update the content

| To change | Edit |
| --- | --- |
| Details, experience, education, projects and skills | `src/utils/data/user.config.js` |
| Case studies | `public/case-studies/` |
| Resume | `src/utils/data/Daniel_Tusingwire_CV.pdf` |
| Desktop apps | `src/utils/data/apps.config.js` |
| Page title and description | `public/index.html` |

## Built with

React, Redux, React Router, Fluent UI and UIkit.

## Credits

Based on [Portfolio OS Theme](https://github.com/srinibasbiswal/Portfolio_OS_Theme) by Srinibas Biswal, used under the [MIT License](LICENSE).

## Contact

dtusingwiree@gmail.com

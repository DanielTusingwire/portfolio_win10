# Daniel Tusingwire | Portfolio

The portfolio of Daniel Tusingwire, a Product Design Engineer from Uganda. It works like a desktop computer: visitors choose a Windows 10 or macOS desktop, then open apps to explore my work.

## What's inside

- **About Me:** my summary, experience, education, projects, skills, resume and contact details
- **Projects:** six product design projects, each with a link to its Figma prototype
- **Contact Me:** email, phone and WhatsApp links
- **Chrome:** a small browser window inside the desktop
- **Settings:** wallpaper and system options

## Projects

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
| Choose a desktop | `/` |
| Windows 10 | `/windows` |
| macOS | `/macOS` |

## Build it

```bash
npm run build
```

This creates a static site in the `build` folder. Your host must send every address to `index.html`, so that pages such as `/windows` load when opened directly.

## Update the content

| To change | Edit |
| --- | --- |
| Details, experience, education, projects and skills | `src/utils/data/user.config.js` |
| Resume | `src/utils/data/Daniel_Tusingwire_CV.pdf` |
| Desktop apps | `src/utils/data/apps.config.js` |
| Page title and description | `public/index.html` |

## Built with

React, Redux, React Router, Fluent UI and UIkit.

## Credits

Based on [Portfolio OS Theme](https://github.com/srinibasbiswal/Portfolio_OS_Theme) by Srinibas Biswal, used under the [MIT License](LICENSE).

## Contact

dtusingwiree@gmail.com

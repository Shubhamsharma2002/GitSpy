# GitSpy 🔍

**Inspect any GitHub profile in seconds.**

GitSpy is a developer lookup tool that lets you search any GitHub username and instantly view their profile overview, repository highlights, and activity stats — all in one clean interface.

![GitSpy Logo](./src/assets/gitspy-logo-main.svg)

## Features

- **User Overview** — Avatar, bio, location, followers/following count, and joined date.
- **Repository Highlights** — Pinned/top repos, stars, forks, and primary languages used.
- **Activity & Stats** — Recent commit history, contribution heatmaps, and public gists.
- **Quick Actions** — Direct link to the user's GitHub profile and a button to copy clone URLs.

## Tech Stack

- **React** (Vite)
- **JavaScript**
- GitHub REST API

## Project Structure

```
gitspy/
├── public/
│   └── gitspy-icon-only.svg
├── src/
│   ├── assets/
│   │   ├── gitspy-horizontal-dark.svg
│   │   └── gitspy-logo-main.svg
│   ├── Components/
│   ├── services/
│   │   └── githubApi.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/gitspy.git
   cd gitspy
   ```


2. Install dependencies
   ```bash
   npm install
   ```



3. Start the development server
   ```bash
   npm run dev
   ```

4. Open [https://gitspy-seven.vercel.app/](https://gitspy-seven.vercel.app/) in your browser

### Build for Production

```bash
npm run build
```

## Usage

1. Enter a GitHub username in the search bar.
2. View their profile overview, pinned repositories, and activity stats.
3. Click through to their GitHub profile or copy a repo's clone URL directly.

## API

GitSpy uses the [GitHub REST API](https://docs.github.com/en/rest) via `src/services/githubApi.js` to fetch user and repository data. Note that unauthenticated requests are subject to GitHub's [rate limits](https://docs.github.com/en/rest/overview/rate-limits-for-the-rest-api).

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.



## 👤 Developer: Shubham Sharma

Feel free to connect with me:

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Shubhamsharma2002)  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shubhamsharma2026/)   [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:shubhamjii2002@gmail.com)
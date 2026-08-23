import ProfileCard from "./Components/ProfileCard";

const dummyUser = {
  login: "Shubhamsharma2002",
  id: 142394297,
  node_id: "U_kgDOCHzDuQ",
  avatar_url: "https://avatars.githubusercontent.com/u/142394297?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Shubhamsharma2002",
  html_url: "https://github.com/Shubhamsharma2002",
  type: "User",
  name: "Shubham Sharma",
  company: null,
  blog: "https://techshubh.fun",
  location: "Noida, India",
  email: null,
  hireable: true,
  bio: "Full Stack Developer | MERN | Next.js | TypeScript\nBuilding scalable web apps & clean UI/UX\nOpen to opportunities 🚀",
  public_repos: 71,
  public_gists: 0,
  followers: 5,
  following: 0,
  created_at: "2023-08-16T09:13:31Z",
  updated_at: "2026-05-06T19:24:10Z"
};

const App = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-100 dark:bg-slate-950">
      <ProfileCard user={dummyUser} />
    </div>
  );
};

export default App;
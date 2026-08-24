import logoDark from "../assets/gitspy-horizontal-dark.svg";

const Navbar = () => {
  return (
    <header className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logoDark}
            alt="GitSpy"
            className="h-12 w-auto"
          />
        </div>

        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-400">
          v1.0
        </span>
      </div>
    </header>
  );
};

export default Navbar;
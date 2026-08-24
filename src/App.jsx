import { useState } from "react";
import Navbar from "./Components/Navbar";
import ProfileCard from "./Components/ProfileCard";
import Footer from "./Components/Footer";
import { fetchGithubUserData } from "./services/githubApi.js";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchUser = async (usernameToFetch) => {
    if (!usernameToFetch.trim()) return;

    setLoading(true);
    setError("");

    try {
      const data = await fetchGithubUserData(usernameToFetch);
      setUser(data);
    } catch (err) {
      setError(err.message || "Failed to load user");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleFetchUser(searchInput);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-12 flex flex-col items-center justify-center">
        {/* Search Bar Form */}
        <form onSubmit={handleSearchSubmit} className="w-full max-w-md mb-8">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search GitHub username..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full py-3 pl-4 pr-24 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
            />
            <button
              type="submit"
              disabled={loading || !searchInput.trim()}
              className="absolute right-1.5 px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white text-xs font-semibold rounded-lg transition duration-200 cursor-pointer"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-10 h-10 border-4 border-orange-500/20 border-t-orange-600 rounded-full animate-spin"></div>
            <p className="mt-3 text-sm text-slate-500">Fetching profile...</p>
          </div>
        )}

        {/* Error Notification */}
        {error && !loading && (
          <div className="w-full max-w-md p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-xl text-center mb-4">
            <p className="text-sm text-red-600 dark:text-red-400 font-medium">
              {error}
            </p>
          </div>
        )}

        {/* Default Landing State (Jab user ne kuch search na kiya ho) */}
        {!user && !loading && !error && (
          <div className="text-center text-slate-400 py-12">
            <p className="text-base font-medium">Type any GitHub username above to view details</p>
          </div>
        )}

        {/* Profile Card Output */}
        {user && !loading && !error && (
          <ProfileCard user={user} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
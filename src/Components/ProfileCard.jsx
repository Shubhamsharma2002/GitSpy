
const ProfileCard = ({ user }) => {
  if (!user) return null;

  const joinedDate = new Date(user.created_at).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-6 transition-all duration-300">
      {/* Header: Avatar + Main Info */}
      <div className="flex items-start gap-4">
        <img
          src={user.avatar_url}
          alt={user.name || user.login}
          className="w-20 h-20 rounded-full ring-4 ring-orange-500/20 object-cover shadow-sm"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h2 className="md:text-xl  text-xs font-bold text-slate-900 dark:text-white truncate">
              {user.name || user.login}
            </h2>
            {user.hireable && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                Available
              </span>
            )}
          </div>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="md:text-sm  text-xs font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400 hover:underline inline-block"
          >
            @{user.login}
          </a>
          <p className="text-xs text-slate-400 mt-1">Joined {joinedDate}</p>
        </div>
      </div>

      {/* Bio */}
      {user.bio && (
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">
          {user.bio}
        </p>
      )}

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-3 gap-2 mt-5 py-3 px-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-100 dark:border-slate-800 text-center">
        <div>
          <span className="block text-lg font-bold text-slate-900 dark:text-white">
            {user.public_repos}
          </span>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Repos
          </span>
        </div>
        <div>
          <span className="block text-lg font-bold text-slate-900 dark:text-white">
            {user.followers}
          </span>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Followers
          </span>
        </div>
        <div>
          <span className="block text-lg font-bold text-slate-900 dark:text-white">
            {user.following}
          </span>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Following
          </span>
        </div>
      </div>

      {/* Meta Details */}
      <div className="mt-5 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
        {user.location && (
          <div className="flex items-center gap-2.5">
            <svg
              className="w-4 h-4 text-slate-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="truncate">{user.location}</span>
          </div>
        )}

        {user.blog && (
          <div className="flex items-center gap-2.5">
            <svg
              className="w-4 h-4 text-slate-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <a
              href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 dark:text-orange-400 hover:underline truncate"
            >
              {user.blog}
            </a>
          </div>
        )}
      </div>

      {/* Action Button */}
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-sm font-semibold rounded-xl shadow-sm transition duration-200"
      >
        <span>View Full GitHub Profile</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
};

export default ProfileCard;
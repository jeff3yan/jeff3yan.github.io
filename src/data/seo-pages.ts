export interface SeoPageData {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  primaryKeyword: string;
  bullets: string[];
  sections: Array<{
    title: string;
    body: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const seoPages: SeoPageData[] = [
  {
    slug: 'slack-custom-emoji-search',
    title: 'Search Your Slack Custom Emojis by Meaning | Remoji',
    description: 'Remoji makes your workspace custom Slack emojis searchable by meaning, vibe, or similar emoji. Find the right custom emoji without remembering its exact name.',
    eyebrow: 'Slack custom emoji search',
    h1: 'Search your Slack custom emojis by meaning',
    intro: 'Slack can search emoji names. Remoji searches what your custom emojis mean, look like, and feel like — so your team can find the right emoji even when nobody remembers the weird internal name.',
    primaryKeyword: 'slack custom emoji search',
    bullets: [
      'Search by meaning, vibe, or a similar emoji',
      'Works on your own workspace custom emoji library',
      'No message, channel, DM, or file access',
      'Installs once for the whole Slack workspace',
    ],
    sections: [
      {
        title: 'Slack emoji search only works when names are obvious',
        body: 'Custom emoji libraries become team folklore. The best emojis often have names like :shipit-squirrel:, :panic-blob:, or :q3-roadmap-energy:. If a teammate does not know the exact name, Slack’s native picker usually cannot help.',
      },
      {
        title: 'Remoji makes the library discoverable',
        body: 'Remoji indexes your workspace’s custom emojis and lets anyone use /remoji to find related suggestions. Search from an emoji you already know, then discover the custom emojis your team forgot existed.',
      },
      {
        title: 'Built for admins as well as emoji power users',
        body: 'Remoji reads the emoji list only, keeps workspace data isolated, and does not need access to Slack messages. Pricing is per workspace, not per seat.',
      },
    ],
    faqs: [
      {
        question: 'Can Slack already search custom emojis?',
        answer: 'Slack can search emoji names and aliases. Remoji helps when people remember the meaning or vibe, but not the exact custom emoji name.',
      },
      {
        question: 'Does Remoji search standard Unicode emoji?',
        answer: 'No. Remoji is designed for your workspace’s custom Slack emojis — the ones unique to your team.',
      },
    ],
  },
  {
    slug: 'how-to-find-custom-emojis-in-slack',
    title: 'How to Find Custom Emojis in Slack When You Do Not Know the Name | Remoji',
    description: 'Learn the practical ways to find custom Slack emojis — native search, aliases, directories, and semantic search with Remoji.',
    eyebrow: 'Guide',
    h1: 'How to find custom emojis in Slack when you do not know the name',
    intro: 'If your workspace has hundreds or thousands of custom emojis, finding the right one becomes a memory test. Here are the realistic options — and where Remoji fits.',
    primaryKeyword: 'how to find custom emojis in Slack',
    bullets: [
      'Use Slack’s picker when you know the name',
      'Add aliases for common misspellings or alternate names',
      'Create a directory for important team rituals',
      'Use Remoji when you only know the meaning or vibe',
    ],
    sections: [
      {
        title: 'Option 1: Slack’s built-in emoji picker',
        body: 'The native picker is fine when emoji names are clean and predictable. It struggles with inside jokes, abbreviations, old team references, and emojis uploaded years ago by people who have since left.',
      },
      {
        title: 'Option 2: aliases and naming cleanup',
        body: 'Aliases help for your most important emojis, but they require ongoing admin effort. Most teams never maintain them consistently once the custom emoji library gets large.',
      },
      {
        title: 'Option 3: semantic custom emoji search',
        body: 'Remoji is the low-maintenance option. Install it once, let it index your custom emoji library, then search with /remoji by related emoji, meaning, or vibe.',
      },
    ],
    faqs: [
      {
        question: 'What is the fastest way to find a custom Slack emoji?',
        answer: 'If you know the name, use Slack’s native picker. If you only know the meaning, use Remoji to search your workspace’s custom emoji library semantically.',
      },
      {
        question: 'Do I need to rename all our emojis?',
        answer: 'No. Renaming helps, but Remoji is designed for the mess teams already have.',
      },
    ],
  },
  {
    slug: 'slackmojis-alternative',
    title: 'Slackmojis Alternative for Your Team’s Own Emojis | Remoji',
    description: 'Slackmojis helps you find new custom emojis to add. Remoji helps your team find the custom emojis already inside your Slack workspace.',
    eyebrow: 'Slackmojis alternative',
    h1: 'A Slackmojis alternative for the emojis your team already has',
    intro: 'Slackmojis is great for discovering new emojis to add to Slack. Remoji solves the next problem: your team already added hundreds of custom emojis, and now nobody can find the right one.',
    primaryKeyword: 'Slackmojis alternative',
    bullets: [
      'Private search for your workspace’s own custom emoji library',
      'Find emojis by meaning, vibe, or similarity',
      'No public sharing of workspace emoji data',
      'Free for workspaces with up to 500 custom emojis',
    ],
    sections: [
      {
        title: 'Slackmojis helps you add more emojis',
        body: 'Public emoji directories are useful when you want fresh custom emojis. But adding more emojis can make the discovery problem worse unless your team can actually find them later.',
      },
      {
        title: 'Remoji helps your team use what it already installed',
        body: 'Remoji indexes your private Slack emoji list and exposes it through a simple slash command. It is built for everyday discovery inside your own workspace.',
      },
      {
        title: 'Use both together',
        body: 'Use Slackmojis to collect great emojis. Use Remoji to make the resulting library searchable for everyone on your team.',
      },
    ],
    faqs: [
      {
        question: 'Is Remoji a public emoji directory?',
        answer: 'No. Remoji searches your private workspace emoji library. It does not publish your emojis to a public directory.',
      },
      {
        question: 'Does Remoji replace Slackmojis?',
        answer: 'Not really. Slackmojis is for finding new emojis. Remoji is for finding the emojis your team already added.',
      },
    ],
  },
  {
    slug: 'emojibox-alternative',
    title: 'EmojiBox Alternative for Private Slack Emoji Search | Remoji',
    description: 'Compare EmojiBox and Remoji. Remoji focuses on private, low-permission discovery for your workspace’s existing custom Slack emojis.',
    eyebrow: 'EmojiBox alternative',
    h1: 'EmojiBox alternative for private Slack emoji search',
    intro: 'EmojiBox focuses on a searchable custom emoji library and emoji lore. Remoji focuses on making your own workspace’s existing custom emojis discoverable with a low-permission Slack command.',
    primaryKeyword: 'EmojiBox alternative',
    bullets: [
      'Private workspace emoji discovery',
      'Search by meaning, vibe, or similar emoji',
      'No message access required',
      'Per-workspace pricing instead of per-seat pricing',
    ],
    sections: [
      {
        title: 'Different jobs around the same emoji problem',
        body: 'EmojiBox is useful for browsing broader emoji libraries and adding lore. Remoji is narrower: it helps people find the right custom emoji from the set already installed in their own Slack workspace.',
      },
      {
        title: 'Admin-friendly permissions',
        body: 'Remoji is deliberately scoped around emoji discovery. It reads the workspace emoji list and responds to the /remoji command, without message, DM, channel, or file access.',
      },
      {
        title: 'Best for teams with existing emoji chaos',
        body: 'If your Slack already has hundreds or thousands of custom emojis, Remoji is designed to make that library useful without running a cleanup project first.',
      },
    ],
    faqs: [
      {
        question: 'Does Remoji expose our custom emojis publicly?',
        answer: 'No. Remoji is designed around private workspace search and workspace-isolated data.',
      },
      {
        question: 'Can Remoji help if our emoji names are messy?',
        answer: 'Yes. That is the point: search by meaning or similarity instead of relying only on exact names.',
      },
    ],
  },
  {
    slug: 'slack-custom-emoji-directory',
    title: 'Create a Searchable Directory of Your Slack Custom Emojis | Remoji',
    description: 'Turn your Slack workspace’s custom emoji list into a searchable private directory with Remoji.',
    eyebrow: 'Custom emoji directory',
    h1: 'Create a searchable directory of your Slack custom emojis',
    intro: 'A big custom emoji library is only valuable if people can find what is in it. Remoji turns your workspace’s custom emojis into a searchable private directory inside Slack.',
    primaryKeyword: 'Slack custom emoji directory',
    bullets: [
      'Index your workspace custom emoji library automatically',
      'Find related emojis with /remoji',
      'Keep data tied to your workspace',
      'Automatically detects new custom emojis',
    ],
    sections: [
      {
        title: 'Custom emoji directories should not require maintenance',
        body: 'Manual documentation goes stale quickly. Remoji keeps up as your workspace adds new emojis, so discoverability does not depend on someone maintaining a spreadsheet or wiki page.',
      },
      {
        title: 'A directory people actually use',
        body: 'Because Remoji lives in Slack, discovery happens where people are already writing messages. Type /remoji with a known emoji or vibe and get suggestions from the workspace library.',
      },
      {
        title: 'Useful for onboarding and team culture',
        body: 'New hires can discover the team’s emoji language faster, and long-time employees can rediscover the strange gems buried in the library.',
      },
    ],
    faqs: [
      {
        question: 'Can Remoji help new hires understand team emojis?',
        answer: 'Yes. Remoji makes obscure custom emojis easier to discover instead of relying on tribal knowledge.',
      },
      {
        question: 'Do we need to configure categories manually?',
        answer: 'No. Remoji indexes and analyzes the emoji library automatically after install.',
      },
    ],
  },
  {
    slug: 'slack-emoji-manager',
    title: 'Slack Emoji Manager for Discoverability | Remoji',
    description: 'A Slack emoji manager focused on discoverability, not bulk upload/delete. Remoji helps teams find and use their existing custom emojis.',
    eyebrow: 'Slack emoji manager',
    h1: 'A Slack emoji manager focused on discoverability',
    intro: 'Most Slack emoji manager tools help admins upload, remove, or organize emojis. Remoji focuses on the everyday user problem: finding the right emoji from the library your team already built.',
    primaryKeyword: 'Slack emoji manager',
    bullets: [
      'Make custom emojis searchable by meaning',
      'Reduce reliance on perfect naming conventions',
      'Install once for the whole workspace',
      'Low-permission Slack app built for admins',
    ],
    sections: [
      {
        title: 'Management is not the same as discoverability',
        body: 'Bulk upload and cleanup tools are useful for admins. Remoji is useful for everyone in the workspace because it turns the custom emoji library into something people can search while they work.',
      },
      {
        title: 'Avoid a naming cleanup project',
        body: 'Renaming every custom emoji is painful and political. Remoji helps teams get value from the existing mess by searching based on generated metadata and similarity.',
      },
      {
        title: 'Simple pricing for the whole team',
        body: 'Remoji is priced per workspace, not per seat, so the entire team can use /remoji without adding another per-user SaaS bill.',
      },
    ],
    faqs: [
      {
        question: 'Can Remoji bulk upload or delete Slack emojis?',
        answer: 'No. Remoji is not a bulk admin tool. It is a discovery tool for the custom emojis your workspace already has.',
      },
      {
        question: 'Who is Remoji for?',
        answer: 'Emoji-heavy teams, Slack admins, People Ops teams, and remote-first companies whose custom emoji libraries have become hard to navigate.',
      },
    ],
  },
];

export const seoPageSlugs = seoPages.map((page) => page.slug);

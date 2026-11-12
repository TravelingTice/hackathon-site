const iso = d => d.toLocaleDateString('sv');
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

const START = new Date(2026, 10, 13, 12);
const END = new Date(2026, 10, 24, 12);
const KICKOFF = '2026-11-16';
const DEADLINE = '2026-12-16';

const RULE = 'Until Monday 15:00: planning is fine, building and registering are not. No code, no name, no domain, no TrustMRR or store listing.';

const WARMUP = { name: 'Warm-up · 30 min', items: [['X: 10 real replies to iOS and indie devs', '20 min'], ['X: 1 post of your own, see below', '5 min'], ['LinkedIn: react or comment on 2–3 posts, post nothing', '5 min']] };
const post = idea => ({ name: "Today's post on X", items: [[idea, '']] });

const TASKS = {
  '2026-11-13': {
    kind: 'learn', title: 'Learn the rulebook', mins: 90, why: RULE,
    blocks: [WARMUP, { name: 'Tonight · 60 min', items: [['Sign up for the hackathon and read the full rules: how profit is counted, ad spend, payouts', ''], ['Read App Review Guidelines 2.1, 2.3, 3.1, 4.2, 4.3 and 5.1', '40 min'], ['Start a sheet: guideline, what happened, how it got fixed, link, can software catch it?', '']] },
      post('"Joining the $100k hackathon on Monday. Until then I am reading every App Store rejection I can find."')],
  },
  '2026-11-14': {
    kind: 'learn', title: 'Collect 30 real rejections', mins: 150, why: RULE,
    blocks: [WARMUP,
      { name: 'Hunt · 90 min', items: [['Reddit: search "rejected" in r/iOSProgramming, r/reactnative, r/FlutterDev, r/expo', ''], ['Apple Developer Forums: the App Review tag', ''], ['X: search "app rejected", "guideline 4.3", "App Store review rejected"', ''], ['Log 30 cases in the sheet and tally the guidelines', '']] },
      { name: 'Help · 30 min', items: [['Answer 3 fresh rejection posts with a concrete fix', ''], ['Keep a list of everyone you helped', '']] },
      post('The most surprising rejection you read today, and how it got fixed.')],
    note: 'Only answer what you are sure of. Quote the guideline number, that is what makes you the expert in the thread.',
  },
  '2026-11-15': {
    kind: 'plan', title: 'Pick the problem', mins: 120, why: RULE,
    blocks: [WARMUP,
      { name: 'Decide · 60 min', items: [['From the tally: the 5 most common rejections software can catch', ''], ['Who pays: solo dev, agency, vibe coder? Pick one', ''], ['How does it take money in week one? Profit is the score', ''], ['One page: the promise, the price, what version 1 does and does not do', '']] },
      { name: 'Runway · 30 min', items: [['Open the payment account if you need a new one (allowed early, zero customers)', ''], ['X bio: say you help apps get through App Review', ''], ["Draft Monday's kick-off post", '']] },
      post('"I read 30 App Store rejections this weekend. The top 5 reasons:" and then the list.')],
    note: 'The tally post is your best asset this week. Take time over it.',
  },
  '2026-11-16': {
    kind: 'build', title: 'Go: 15:00', mins: 180,
    why: 'It opens at 15:00, in the middle of your work day. Everything below happens after work.',
    blocks: [WARMUP,
      { name: 'Tonight · 2.5 h', items: [['Name it. 30-minute timebox, then stop', ''], ['Buy the domain', ''], ['One-page site: the promise, the price, a way to pay or pre-order', ''], ['List it on TrustMRR and connect the payment provider', ''], ['Empty repo, first deploy', '']] },
      post('Kick-off, with the link: what you are building, for whom, and that you will share the numbers.')],
    note: 'Check the full rules for what the TrustMRR listing needs on day one.',
  },
  '2026-11-17': {
    kind: 'build', title: 'Check 1, end to end', mins: 120,
    blocks: [WARMUP,
      { name: 'Build · 90 min', items: [['Take rejection reason number 1 from your tally', ''], ['Input in, verdict out, with the guideline number and the fix', ''], ['Run it on one real app', ''], ['Ugly is fine. Deployed is not optional', '']] },
      post('Screen recording: it catches a real rejection.')],
  },
  '2026-11-18': {
    kind: 'build', title: 'Checks 2 to 5', mins: 120,
    blocks: [WARMUP,
      { name: 'Build · 90 min', items: [['Add the next 4 checks from the tally', ''], ['One report page a stranger understands', ''], ['Run it on 3 apps, write down every false alarm', '']] },
      post('One rejection story from your sheet as a short thread: what happened, how to avoid it.')],
  },
  '2026-11-19': {
    kind: 'sell', title: 'First 5 users, by hand', mins: 120,
    blocks: [WARMUP,
      { name: 'Outreach · 60 min', items: [['Message the people you helped: a free run on their app for honest feedback', ''], ['Reply to 5 new rejection posts, offer the same', ''], ['Watch one person use it if they let you. Note where they get stuck', '']] },
      { name: 'Build · 30 min', items: [['Fix the worst thing you saw', '']] },
      post('"Ran it on N real apps today. It found X." Show one, with permission.')],
  },
  '2026-11-20': {
    kind: 'build', title: 'Turn on the money', mins: 120,
    blocks: [WARMUP,
      { name: 'Build · 90 min', items: [['Fix what the first users hit', ''], ['Run the whole payment flow in test mode, then switch to live', ''], ['Ask your 5 users to pay. Write down every reason for a no', '']] },
      post('Week 1 numbers: users, revenue, costs. Link the TrustMRR page.')],
  },
  '2026-11-21': {
    kind: 'sell', title: 'Soft launch', mins: 180,
    blocks: [WARMUP,
      { name: 'Launch · 2.5 h', items: [['X: launch post with a 30-second demo video', ''], ["Reddit: share your top-5 rejection findings where self-promo is allowed. Read each sub's rules first", ''], ['Indie Hackers or Show HN, one of the two', ''], ['LinkedIn: your one launch post, today or saved for a bigger moment', ''], ['Reply to every comment within the hour', '']] }],
    note: 'The launch post is the post of the day.',
  },
  '2026-11-22': {
    kind: 'plan', title: 'Week 1 review', mins: 90,
    blocks: [WARMUP,
      { name: 'Review · 60 min', items: [['Numbers: visitors, runs, paid, profit', ''], ['What did people ask for? What made them say no?', ''], ['Decide: more of the same, a new angle, or a new audience', ''], ['Plan the days after the move and extend this calendar', '']] },
      post('Honest week 1 recap: what worked, what flopped, what is next.')],
  },
  '2026-11-23': {
    kind: 'build', title: 'The top request', mins: 120,
    blocks: [WARMUP,
      { name: 'Build · 90 min', items: [['Build the one thing most people asked for', ''], ['Remove one thing nobody used', ''], ['Go through the full flow once as a new user', '']] },
      post('Before and after of what you shipped. Credit the user who asked.')],
  },
  '2026-11-24': {
    kind: 'build', title: 'Make it run without you', mins: 100,
    blocks: [WARMUP,
      { name: 'Travel-proof · 70 min', items: [['Signup, payment and report delivery work with nobody watching', ''], ['Support address set up and forwarded to your phone', ''], ['Uptime alert on the site', ''], ['Schedule a post for the 25th and one for the 26th', '']] },
      post('"Moving to Jakarta in the middle of a 30-day hackathon. Here is how the app keeps running."')],
    note: 'You fly tomorrow. The next stretch gets planned from Jakarta.',
  },
};

const PLAN = [];
for (let d = new Date(START); d <= END; d = addDays(d, 1)) {
  const k = iso(d);
  const n = Math.round((new Date(k + 'T12:00') - new Date(KICKOFF + 'T12:00')) / 864e5) + 1;
  PLAN.push({ date: k, d: new Date(d), place: n < 1 ? 'Pre-work' : `Hackathon day ${n} of 30`, ...TASKS[k] });
}

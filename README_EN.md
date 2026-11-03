# Wanwu Shengzhang Notes (All Things Grow Notes)

> A note-taking system where AI participates — but doesn't decide for you.
> The only original intent: **see the growth, see the road traveled.**
> 📘 中文版: [README.md](./README.md)

---

## Getting Started

**Online version**: Open the shared link in a browser.

**Local version**: Double-click `index.html` — a single file, zero dependencies, nothing to install, works offline.

⚠️ **iPhone users: please tap "Share → Add to Home Screen" and enter from the home-screen icon.**
If you don't open it in Safari for 7 consecutive days, the system clears the notes stored in browser storage.

Your notes live only on your own device, never uploaded. To move them to another device, use the "Export / Import" buttons in the top bar to move a `.json`.

---

## What it is

We are not building "a better notepad." The built-in notepad on your phone does that better than we ever could — system-level, zero launch time, synced across platforms; we would lose that comparison outright.

We do exactly one thing: **turn what has already happened into something visible.**

---

## Two modules, two maps

Not because we have many features, but because **the topology of these two kinds of relationships is fundamentally different**.

| | Knowledge module · Galaxy map | Drip module · Vine map |
|---|---|---|
| What it records | What the world gave you | How you responded |
| Nature | Absorbing · objective · shareable · right/wrong exist | Feeling · subjective · private · no right/wrong |
| What to see | **Structure**: how concepts connect, where the gaps are | **Process**: how it grew, broke, closed |
| Relationship type | **Spatial** (coexist, who connects to whom) | **Temporal** (sequential, how it grew/broke) |
| Therefore | Galaxy | Vines / threads |

**One map cannot hold two topologies.** Forcing them together is the "channel overload" we already stepped on.

### Why specifically "galaxy" and "vine" — and what they have to do with "river"

Concepts come in three blocks: **soil → water flow → river**. Both modules observe the **water flow**; they just focus on different angles:

- **The knowledge module cares more about: knowledge-point recognition, fusion, and connection** — seeing what shape the water flow has converged into, that is the **river**. Pulled far out it is a whole **galaxy**; zoomed in it is a **river network** (these two words auto-switch on the slider).
  *A galaxy is itself a river*: the Milky Way, the Heavenly River, the Star Han — in Chinese it has always been a river. And real river networks and galaxies are literally the same shape — forking outward from one center, finer and finer. Horton-Strahler measures exactly this shape; blood vessels, tree branches, and lightning are the same set.
- **The drip module cares more about: how things relate to each other, offering a new angle of observation** — seeing whether each individual stream is still flowing, those are individual **vines**.
  A river is what many streams look like *after they join*; here we want to see each one separately, so it is a cluster of vines climbing upward.
  *Vines and soil are the same set*: from your soil (the people, places, and things you keep writing about), these vines grow.

**Explanations of the three blocks** (also written in the left skeleton "soil · water flow · river"):
- **Soil**: In the drip module, the people, places, and things you've mentioned — together they witness your road traveled — they are all your soil.
- **Water flow**: All saved information, regardless of which module, we treat as water flow; water flow gives shape to the construction and growth of knowledge.
- **River**: The convergence, fusion, and forking of water flow all form rivers; we let you see various shapes.
- **River Chronicle (河历)** = the dynamic description of daily water flow · **River Shape (河形)** = the shape of the river built by water flow and time together · **River Record (河志)** = the major events that happened in the river.

So it is not three metaphors fighting; it is **the same water, two scales, two views**.

### Drip module · Vine map (current prototype)

Vertical is time, old at the bottom, new at the top — like Tetris pieces falling, like strata depositing. **Crystallization sinks downward; growing upward is the metaphor of "progress," and "progress" is exactly what we want to take apart.**

- One cell = a span of time × an element (person / place)
- Cell hue = who; cell shade = how much that element appeared in that span
- Vine = a thread: the stem is its direction, the leaf is the mark of "this is a plant," the flower is the result
- **Flowers have only two looks**: bud, and bloomed. What the AI judged and what you confirmed look exactly the same
- Removing a flower reverts it to a bud; the AI will not re-open that flower for you

---

## Why there is no "pure record" mode

**Because users don't lack places to record.** The harder reason is positioning: if we advertise "AI helps you understand," yet also offer an option "you can also not use AI" — that is slapping our own face on our own ad page.

And a module without visualization dilutes the verb "see." Content that comes in but can't be seen drops out of the product narrative — zero value to the user, non-zero cost to us.

**But cutting the mode does not cut the input box.** The difference is "whether you can see it crystallize on the spot after recording." So the first-time guide should not be "pick a mode," but: **record a sentence, then immediately see how that sentence got understood.** Use feedback instead of a manual.

---

## Three design disciplines

1. **Can click back to the original sentence** — every sentence the AI says can be traced back to the source text it relied on. Features that can't do this, we don't build.
2. **Can undo, and undoing is final** — it won't re-guess under a different wording.
3. **One channel says only one thing** — color, shape, line style, position, each encodes only one dimension. We've stepped on this pit three times; each time we cut, not tuned.

Full explanation → [**Why we let AI participate, but don't let it decide for you**](./docs/为什么让AI参与但不替你决定.md)

---

## Current status: prototype (read this first)

What's in the repo now is a **visual prototype**, not a usable product. Three points must be clear:

1. **The data is generated fake diary**, not real records;
2. **"AI judgment" is currently a rule, not a large model** — the criterion is "whether you mentioned it again after this event," published openly in the explanation above;
3. **Storage is fragile**: only the main HTML file is hooked to the browser's built-in local storage; clearing cache, switching browsers, or switching computers loses it. No account, no cloud sync — so no one backs it up for you.

The prototype has one purpose only: **to draw out what "seeing" actually looks like, and see it clearly first.**

### Prototype files

> `prototypes` is the English for "prototype" — means **viewable, clickable, but not finished** — like a clay mockup at a car show: exterior and interior are right, but it can't be driven on the road.

> **🔴 The two modules each use their own map; do not mix or swap them**: **Knowledge module → galaxy**; **Drip module → pixel grid**. Both maps are embedded in the main file and **switch automatically with the module** — switch to whichever module, and the map below switches to that module's.
> The two maps express different things (one is the hierarchy and connection of knowledge, the other is the time and causality of events), so looking different is correct.

| File | What it is |
|---|---|
| `prototypes/原型.html` | **Current main line**. Two columns: left = **soil · water flow · river (skeleton)** + **water-flow classification** (folder tree) + river chronicle / **river shape** / river record / **my soil** / advanced; middle = save → central big screen (tabbed, one page per entry) → what I saved → map. Both maps **embedded and read real data**, switching with the module. Tree nodes / list rows / vine-map columns all support **right-click menus**; list rows and folders are both **draggable** |
| `prototypes/事件_模拟_像素栅格.html` | Drip module · vine map. **Form merged into prototype** (reads real data after merge); this file kept as an independent reference (fake data) |
| `prototypes/河_模拟_星系.html` | Independent verification version of the galaxy form (fake data, for tuning the drawing) |
| `prototypes/人物_模拟_关系图.html` | Person relationship graph · **form simulation (fake data)**. Demonstrates three things: pronoun slots are independent per "one entry × one pronoun" without pre-merging, multiple names for one person (including same-name different-person and rejected suggestions), batch claiming |
| `prototypes/河_模拟_未来态.html` | Knowledge module · future-state concept |
| `prototypes/事件_模拟_要素结晶.html` | Two-dimensional element crystallization |

### Example data (top-right "Load Example")

One click replaces all local data with a written example, **so every map has something to draw and you can see clearly what it's talking about**:

| Where | How many | What |
|---|---|---|
| Knowledge module | 3 entries | Circumference of a circle, a retro, a new process rollout (with knowledge points) |
| Drip module | **20 entries** | Four threads of one person over half a year: mom's knee (6 · diary), the iron fern on the balcony (4 · home), the noodle shop downstairs and Old Zhou (5 · on the road), casual short lines (5 · flashes). Spanning early June to late October |
| My soil | 6 entries | 2 people (my mom / Old Zhou), 3 places (balcony / noodle shop downstairs / old house), 1 event (iron fern) — **hand-filled**: there is no model now, it can't recognize people or places |

**Every entry in the soil can click back to the original sentence** (discipline 1). Below the entry it says "appeared in what you wrote · N entries"; click "see original sentences" to list the hits (with context, hit words highlighted), then click "open this entry" to jump straight to that sentence and highlight it. If it's wrong, click "not it" to remove this entry's basis — **what's removed is the basis; your written words are untouched**, and after removal it never counts again. Hits are computed in real time each time (changing the original text changes it too, **not persisted**); only "what you removed" is persisted, because that is your judgment.
| River chronicle | 35 entries | Of which 21 are tagged with a module — switching modules to view the chronicle shows two timelines |

Some threads in the example **broke, some kept growing** (the noodle shop closed, that iron fern died and came back to life) — this is intentional: the vine map is meant to draw "which things you're still writing, which you've stopped."

**The maps read this real data, not hardcoded** — delete a few yourself and the map changes accordingly.

### Two locked rules (written into the UI and the code)

1. **Only two modules: Knowledge module, Drip module.** The top layer of the folder tree is exactly these two; a third cannot be added; how they subdivide below and what they're called is entirely the user's freedom.
2. **The two modules each go their own way.** Saving has two entries; the calendar splits into two blocks (different background colors); only the knowledge module recognizes knowledge points and waits for your nod — the drip module just arranges by time, and won't quiz you with "feeling a bit sad today."

### AI does only two things in this product (external wording)

| Name | What it does | Who does it |
|---|---|---|
| Recognition | From saved things, find "sentences that look like knowledge points," **present them for your nod** | Real model (if not connected, local rules) |
| Connection | Connect things distributed in two places but representing the same concept | Local rules |

**Connection (通水) doesn't rely on quizzes, it relies on your nod.** In the detail view, click "yes, note it" on a candidate, and it connects and lights up in the galaxy — we don't quiz you, nor do we judge for you "remembered or not."

**The fourth "judgment" (judging whether you got it right) is never implemented**, cancelled entirely since V24 rather than postponed — this, together with "hit rate / level / murkiness belongs to script not model," belongs to **internal mechanism, not written into the C-end UI**: putting it up only adds reading pressure.
Only two lines remain in the UI; "only these two things" is stated by the title "**the two things it can do**" itself, without a separate paragraph of explanation.

### Promotion: lift a sentence from the drip module into the knowledge module as a separate entry

Entry = right-click a list row in the drip module → "pick a sentence to promote to knowledge…", a popup lists the qualified sentences in this entry (8~60 chars), pick one.

🔴 **It is "start a separate entry," not "copy."**

- The original stays in the drip module, **untouched (folder unchanged)**
- The sentence you picked **starts a new record** in the knowledge module, with its own id, its own folder, can grow knowledge points, enters the galaxy
- The new record only records a `fromId`: which entry it came from

One is the **source**, one is what you picked out to **look at separately** — two things, not one thing in two places.
Copying would let the two drift apart and finally confuse which is real; starting a separate entry won't: the two have their own folders, editing either doesn't affect the other.

Three visible traces: the soil-colored tags on both sides of the list row (`promoted N sentences` / `from "…"`), the hint bar at the top of the detail page (both sides can click back to the other), and two river-chronicle strokes (`promoted to knowledge` on the knowledge side, `a sentence promoted away` on the drip side).

Promoting the same sentence twice is blocked. After promotion, if no knowledge point can be picked (that sentence has no knowledge flavor), it will say plainly "promotion only sends it over, doesn't care whether it has knowledge points" — not pretending something happened.

### Drag and drop: move only one item at a time, and only within the same module

| Drag what → drop where | Result |
|---|---|
| A list entry → a folder | Belongs to that folder (the row's handle is in the title area, the button area works as usual) |
| A list entry → module root | **Unclassified**, becomes unclassified (only keeps basic data, not counted in overall calculation) |
| A folder → another folder | **Merge in** — it asks first "are these the same thing," because merging means that folder is gone |
| A folder → module root | Raise to this layer (equals undoing the last merge) |

Three rules guarded:

1. **Move only within the same module.** Things from the knowledge module can't fall into the drip module's folders — the drop target turns red and states the reason on drop.
2. **Merging folders requires your nod.** Merging in equals you saying "these two are the same thing" out loud; it dares not say it for you; after merging, a new entry grows in "My Soil" on its own.
3. **Original words untouched.** What moves is the belonging, not the content.

Technically: the `dragover` phase can't read `dataTransfer` content (browsers deliberately withhold it), so drag data goes through the `DRAG` global variable, and the event only carries an id as fallback.

### Narrow screens: three tiers, the middle one was patched in

A breakpoint is just a "screen-width threshold": crossing it, the page switches to a different layout.

| Width | Layout | Measured (window 1100 / 1000) |
|---|---|---|
| ≥1150px | Two columns: left 330 + middle 1012 (as-is) | — |
| **941–1150px** | **Left column shrinks to 260**, left sections only expand "water-flow classification" | Middle 686→**760**, 586→**660** (regains 74px) |
| ≤940px | Stacked into one column (left on top, middle below) | — |

The left column **is not hidden** — hiding it equals taking away navigation, just shrunk from 330 to 260. Every bit narrower, originally we cut from the middle column (the central big screen and two maps would break first); now the left column yields first.

Two rules about "not making things hard for people," written into `syncNarrow()`:

1. **Only collapse once, at the moment of crossing the breakpoint.** If you manually expanded "river shape" in the middle tier, dragging the window a bit more won't auto-close it.
2. **Don't auto-expand when widening.** What to expand is your business; it doesn't decide for you.
3. **"Folder" always stays** — that's the navigation body, not an overview.

Making the phone (≤768px) a callable drawer is another matter, much more costly, **not done for now** — the product's first scene is at the desk.

### The tool row above the input box: only give buttons that can actually format

Forum-style two rows (font, size, color, alignment, emoji…) **not done**. Two reasons:

1. **A button that can't format is lying.** Our `mdRender()` recognizes these: headings, bold, italic, inline code, code blocks, quotes, unordered/ordered lists, tables, `[[double links]]`. The tool row above gives **only these 9 + image**. Giving a button that does nothing on click is worse than not giving one.
2. **No rich text.** That row inserts markdown symbols at the cursor; the input box is always **plain text**. Switching to contenteditable rich text would turn what you paste into HTML tags — violating "your original words untouched."

Select text then click = wrap those words; no selection = cursor sits between the two symbols. When editing a saved entry, the same row is on the edit box too.

### List rows: three font sizes, the title must dominate the body

Originally list rows were "11px meta / **13px** title (500) / **12.5px** body" — **title and body differ by only 0.5px and half a weight step**, scanning they're just a patch of gray text, no single row catchable. After change:

| Layer | Size / weight / color | Note |
|---|---|---|
| Meta (time · words · tags) | 11px / 400 / `--ink3` lightest | First glance doesn't read it |
| **Title** | **15px / 600 / `--ink` darkest** | Bolder + larger + darkest, the three together make "distinguishable at a glance" |
| Body preview | 13px / 400 / `--ink2` | Line height 1.75, loose enough |

- **Entries without a title: pull the first sentence of the body as the title** (break at the period, don't hard-cut 26 chars). Originally no title meant just two lines of gray — the flattest row in the whole list. Examples also got titles.
- **Meta row at most 4 tags**, extras collapse into `+N` (hover to see). Filling it up is noise.
- Row spacing 9px → **13px**, added hover background and "currently open row" water-color background — eyes have a landing spot.
- Detail page: title input 15px/500 → **17px/600**.

### Overwrite protection (added after the 2026-11-01 incident)

"Load Example" used to **silently wipe everything you saved** (`S` rewritten entirely). A batch the user saved himself was lost this way. Now three rules:

1. **Auto-save a backup before overwriting** (key `wgs_v1_bak`, keeps only the latest).
2. **If you have anything here, must ask before loading**, and the default option is "merge in — your saved stuff stays."
3. **The backup is visible in the "Data" panel and one-click recoverable** (asks again before recovering, and saves the current as a new backup). "Import" is handled the same way.

### Edit body: the entry was hidden too deep before

Being able to edit after saving, and save after editing, is a basic promise of this product. Originally there was only a tiny 11px button squeezed among a bunch of small buttons — users didn't see it at all, equivalent to not doing it. Now: above the body is a normal-sized "✎ Edit", **also in the list row right-click**. On save, local rules re-pick candidates against the new original text (what you've nodded stays).

All single-file HTML, double-click to open, no dependencies, no build, no network.

---

## License (Dual License)

This software uses a **dual license**:

- **AGPLv3 (free)**: Provided by default under the GNU Affero General Public License v3, see [LICENSE](./LICENSE). You may use, modify, and self-host it for free, but any distributed derivative must remain open source under AGPLv3. We chose it because this product is naturally a network service (AI processing in the cloud), and AGPLv3's article 13 "providing services over a network counts as distribution" fits exactly, ensuring **any improvement must flow back**.
- **Commercial license (paid)**: If you wish to use it for closed-source SaaS / paid product / embedding in a paid system / not publishing derivative source, you need a commercial license, see [COMMERCIAL_LICENSE.md](./COMMERCIAL_LICENSE.md). Commercial license contact: **mayautumn5460@gmail.com**.

**Trademark not open source**: The license governs code, the trademark governs the name. You may use and modify the code, but may not use the name "万物生长笔记系统 (Wanwu Shengzhang Notes)" to provide services externally.

> The full reasoning about open-source strategy (why not MIT, why not MIT-first-then-change, what if copied) will be sorted out and published separately. **One-line version: once MIT is released it can't be taken back; changing the license afterward is the most expensive class of mistake in open-source projects.**

---

## Copyright

Copyright (C) 2026 **mayautumn5460-dev**

> The owning entity matches the GitHub account. If a company / studio entity is established later, this line must be changed to that entity's name and synced in the headers of each source file.

---

## One sentence to remember it

> Not "has AI" — anyone can say they have AI.
> It is **"AI participates, but doesn't decide for you"**, and everywhere leaves a traceable, undoable entry.

**Before, these were costs; now they are the positioning itself.**

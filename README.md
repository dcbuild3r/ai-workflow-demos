# AI Workflow Demos

Editframe/Next.js source and PowerPoint decks for two white-label AI workflow demos.

## Demos

- `src/app/centaur-white-label/page.tsx` - Centaur white-label team-agent demo.
- `src/app/personal-white-label/page.tsx` - Personal AI stack white-label demo.

## Presentations

- `presentations/Centaur-Public-Demo.pptx`
- `presentations/Personal-AI-Stack-White-Label.pptx`

## Run locally

```bash
bun install
bun run dev
```

Then open:

- `http://localhost:3000/centaur-white-label`
- `http://localhost:3000/personal-white-label`

## Voiceover with ElevenLabs

ElevenLabs turns a written script into narration by combining a text-to-speech model with a selected voice. For these demos, the usual workflow is:

1. Write or edit the narration in `voiceover/`.
2. Create or choose a voice in ElevenLabs.
3. Generate audio from the script with Text to Speech.
4. Export the audio file and add it to the Editframe composition as an audio asset.

Use these ElevenLabs products:

- **Text to Speech** for generating the final narration from a script.
- **Instant Voice Cloning** for fast rough cuts or early client previews from short voice samples.
- **Professional Voice Cloning** for the final public version when the voice needs to stay consistent and close to the speaker. ElevenLabs positions this as the higher-fidelity option, but it requires more audio and training time.
- **Voice Library** or **Voice Design** when you do not need to clone a specific person.

To clone your own voice:

1. Record clean spoken audio in a quiet, low-echo room. Use one speaker only.
2. For a fast draft, use **Voices -> Add a new voice -> Instant Voice Clone** and upload a short sample.
3. For the polished version, use **Voices -> Add a new voice -> Professional Voice Clone** and upload substantially more clean speech. More consistent source audio produces a more consistent clone.
4. Complete the voice verification step when prompted.
5. After the voice is ready, use it in Text to Speech with the final script.

Only clone voices you have the right to use. For client work, get explicit permission and keep the generated voiceover aligned with the approved script.

Useful docs:

- [ElevenLabs Text to Speech](https://elevenlabs.io/docs/overview/capabilities/text-to-speech)
- [ElevenLabs Voice Cloning](https://elevenlabs.io/docs/eleven-creative/voices/voice-cloning)
- [ElevenLabs Professional Voice Cloning](https://elevenlabs.io/docs/eleven-creative/voices/voice-cloning/professional-voice-cloning)

## Using Editframe

This project is an Editframe composition built with Next.js. The video source lives in React pages and uses Editframe's timing model to turn normal web layout, CSS animation, image assets, and audio into rendered video.

Edit these files for the two white-label demos:

- `src/app/centaur-white-label/page.tsx`
- `src/app/personal-white-label/page.tsx`
- `src/app/_shared/chrome.tsx`
- `src/app/_shared/animations.css`

The core Editframe pattern is:

- Use `Timegroup` containers for timing.
- Use `mode="sequence"` when scenes should play one after another.
- Use `mode="fixed"` for a scene with a fixed duration.
- Put local images, video, and audio under `public/assets/`.
- Keep the root composition framed at `1920x1080` so renders have a stable video canvas.

Typical edit loop:

```bash
bun install
bun run dev
```

Then open the route, adjust the React/CSS, and refresh the preview. To export, use the Editframe workbench or the Editframe CLI against the local route, for example:

```bash
bunx @editframe/cli render --url http://localhost:3000/centaur-white-label -o outputs/centaur-white-label.mp4
bunx @editframe/cli render --url http://localhost:3000/personal-white-label -o outputs/personal-white-label.mp4
```

Useful docs:

- [Editframe docs](https://www.editframe.com/docs)
- [Editframe rendering](https://www.editframe.com/docs/rendering)

## Agent skills for Codex and Claude Code

Skills are reusable instructions, scripts, and reference files that tell a coding agent how to do a recurring workflow. They are especially useful for things like video composition rules, release checklists, rendering commands, QA passes, or house style.

For Codex, skills can live in:

- `.agents/skills/` inside this repo for project-specific workflows.
- `~/.agents/skills/` for personal skills available across repos.
- `/etc/codex/skills/` for machine-wide/admin skills.

For Claude Code, skills can live in:

- `.claude/skills/` inside this repo for project-specific workflows.
- `~/.claude/skills/` for personal skills available across repos.
- Plugin skill folders when installed through a Claude Code plugin.

A skill is usually a folder with a `SKILL.md` file:

```text
.agents/skills/editframe-composition/
  SKILL.md
  references/
  scripts/
```

`SKILL.md` should include frontmatter with a clear `name` and `description`, then concise instructions. Keep big docs in `references/` and helper commands in `scripts/` so the agent can load only what it needs.

Places to get or build skills:

- Codex built-ins and curated installs through `$skill-creator` and `$skill-installer`.
- Claude Code bundled skills and project/personal skills.
- Official/plugin skill packages from the agent vendor.
- Your own repo-scoped skills in `.agents/skills/` or `.claude/skills/`.

Useful docs:

- [Codex Agent Skills](https://developers.openai.com/codex/skills)
- [Claude Code Skills](https://code.claude.com/docs/en/skills)

## Notes

The published repo intentionally excludes local build output, dependency folders, presentation QA renders, and internal scratch assets.

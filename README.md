# AI Workflow Demos

Presentation posts:

- [Centaur white-label demo](https://x.com/dcbuilder/status/2059651046830490024?s=20)
- [Personal AI stack white-label demo](https://x.com/dcbuilder/status/2059663573874356536)

Editframe/Next.js source and PowerPoint decks for two white-label AI workflow demos.
The Editframe code in this repo is the source for the videos shown in the presentation posts above.

## Demos

- `src/app/centaur-white-label/page.tsx` - Centaur white-label team-agent demo.
- `src/app/personal-white-label/page.tsx` - Personal AI stack white-label demo.

## Presentations

- `presentations/Centaur-Public-Demo.pptx`
- `presentations/Personal-AI-Stack-White-Label.pptx`

## YouTube thumbnails

- `public/assets/thumbnails/centaur-youtube-thumbnail.png`
- `public/assets/thumbnails/personal-ai-stack-youtube-thumbnail.png`

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

## Editframe agent skills

Install the official Editframe agent skills before asking Codex, Claude Code, Cursor, OpenCode, or Windsurf to make larger video edits:

```bash
npx skills add editframe/skills
```

Editframe's create command also installs these skills automatically when scaffolding a fresh project:

```bash
npm create @editframe@latest
```

The Editframe docs list these installed skills:

- `editframe-composition` - HTML web components and React for building video compositions.
- `editframe-motion-design` - animation and motion design principles for video.

Useful docs:

- [Editframe Agent Skills](https://editframe.com/skills/editframe-create/agent-skills)
- [Editframe docs](https://editframe.com/docs)

## Notes

The published repo intentionally excludes local build output, dependency folders, presentation QA renders, and internal scratch assets.

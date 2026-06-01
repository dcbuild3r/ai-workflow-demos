# Centaur White-Label Voiceover Script

Route: `/centaur-white-label`

Target runtime: about 4:40.

ElevenLabs format: each scene title is its own paragraph, followed by the narration as its own paragraph.

Centaur

Centaur is a multiplayer agent platform for modern teams. It is self-hosted, Slack-native, and designed around channel-scoped permissions, so agents can help with real work without turning into an unbounded black box.

Agenda

I will walk through why this matters now, how the architecture works, what data sources to connect, where it helps with code collaboration, how permissioning should work, and what a team can do next.

Part 1: Why now

The short version: agent tools are getting useful, but most stacks still feel built for one person on one machine. Teams need the same power, with ownership, review, and operational boundaries.

Why Centaur, why now

Centaur is open source under Apache 2.0, built by Paradigm and Tempo. That matters because companies can own the stack, inspect it, extend it, and adapt it to their security model instead of waiting for a vendor roadmap.

Part 2: Architecture

Before rolling this into a company, the architecture has to prove a few things. Can we trust the boundary? Can it feel native in Slack? Can state survive restarts? Can policy vary by channel and person?

What the architecture has to prove

These are the rollout gates: boundary, Slack, state, tools, policy, and metrics. If those pieces are clean, the system can start small and expand without turning every new workflow into a security exception.

How it works

A Slack message registers a thread with the API. The API persists durable state in Postgres, sends work to a sandbox, receives the results back, and routes internet egress through a proxy that handles credentials and policy.

Six services that make Centaur work

The mental model is simple. Slackbot starts the turn. The API coordinates it. Postgres remembers it. Sandbox runs it. Proxy gates it. Observability explains what happened and gives the system a way to improve.

Kernel / userspace split

The kernel should stay small, auditable, and slow to change: lifecycle, proxy, sandbox policy, and audit log. Userspace can move fast: tools, skills, workflows, and self-improvement loops that teams edit as their work changes.

iron-proxy: the credential boundary

The proxy is the important security move. Real secrets never enter the sandbox. Agents see placeholders, the proxy swaps in credentials at egress, and traffic can be denied, redacted, logged, or constrained before it leaves.

Extension via overlays, not forks

The clean way to customize Centaur is overlays, not forks. Keep the upstream kernel intact, mount company-specific tools and workflows in an overlay repo, and keep infrastructure config in a separate GitOps layer.

Part 3: Data sources

Once the boundary is credible, the product question becomes: what should the agent know how to read? The first wave is usually product data, engineering state, collaboration history, and the docs people already trust.

Data sources to hook up

For a practical rollout, I would start with Metabase, Dune or Allium, the application database, Datadog, Linear, Slack, GitHub, and the knowledge base. That gives enough context for useful answers without boiling the ocean.

Code-collab surface

One high-leverage surface is code collaboration. Internally, Centaur can triage Linear and GitHub, draft PR comments, and summarize blocked work. Externally, it can watch releases, advisories, research feeds, and competitor movement.

Part 4: Permissioning

The permission model is the difference between a demo and something you can actually run in production. The agent should know what channel it is in, who is asking, what tool is being called, and whether the action is read or write.

Permissioning model

Reads can be broader, but writes should go through action-card approval. Sensitive workflows need role overlays. Every cross-source query should leave an audit trail with user, channel, tool, arguments, and timestamp.

Use cases I want to unlock

The first useful workflows are boring in the best way: weekly customer signal summaries, product metric readouts, standup summaries, partner memos, incident triage, Linear labeling, and PR review drafts.

Demo plan

For a short demo, I would show four things: Slack-driven Linear triage, an upstream-watch digest, a scoped data readout from Metabase, and a permissioning walkthrough that shows reads, approvals, and audit trails.

Open questions for the sync

The open questions are mostly rollout questions. Which sources come first? Who owns privacy and retention? Where should approvals live? Which Slack channels are safe for the first run? And what KPIs justify expanding it?

How to get started

Start with the quickstart docs and the ACME overlay example. Stand up a sandbox instance, pick two or three workflows, align on privacy and access control, integrate Slack and the first tools, then measure outcomes and let the workflow library improve.

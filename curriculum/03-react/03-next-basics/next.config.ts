import type { NextConfig } from "next";

const config: NextConfig = {
  // No generated AGENTS.md: this repo has its own
  agentRules: false,
  // The repo has more lockfiles; this app is its own root
  turbopack: { root: import.meta.dirname },
};

export default config;

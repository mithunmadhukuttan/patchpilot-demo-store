# patchpilot-demo-store

Demo application for PatchPilot end-to-end validation.

This repo is intentionally seeded with stale dependencies so that:
1. the first onboarding creates a vulnerable SBOM in Dependency-Track
2. PatchPilot can analyze severity-based findings
3. later pushes can auto-refresh the SBOM and trigger new remediation paths

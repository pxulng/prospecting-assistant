# Prompts

English **translation** of the French prompts used in the measured runs; the translation has **not** been re-run (see the root README).

- `prompt_v1.txt`: first prompt (to be completed in n8n with the brand sheet at the end of the prompt). Flaws: "branded content" offer by default, alerts on every sheet, claims outside the sheet.
- `prompt_v2.txt`: corrected prompt (10 rules), **frozen before the validation set**. The remaining flaws are in `evaluation/error_log.md` and were deliberately not fixed.

The JSON keys (`fonctions`, `angle`, `offre`, `raison_offre`, `email_1`, `relance_1`, `relance_2`, `a_verifier`) stay in French so that the workflow's reading node and the result files keep working.

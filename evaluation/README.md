# Evaluation

| File | Contents |
|---|---|
| `results_v1_haiku55_test.csv` | v1, Haiku 5.5, 28 test sheets |
| `results_v2_haiku55_test.csv` | v2, Haiku 5.5, test, run 1 (reference) |
| `results_v2_haiku55_test_run2.csv` | v2, Haiku 5.5, test, run 2 (variance) |
| `results_v2_sonnet55_test.csv` | v2, Sonnet 5.5, test |
| `results_v2_*_validation.csv` | v2, 12 validation sheets, Haiku and Sonnet. In the Sonnet file, M018 appears as a reading error: the reader has since been fixed (see log, entry 14) |
| `rating_grid.md` | 1-to-4 grid on 5 criteria |
| `ai_scoring_validation.csv` | AI judge's scores on 24 validation outputs (columns: id, model, accuracy, flagging, targeting, relevance, email quality, total) |
| `blind_human_check_notes.xlsx` | 10 shuffled outputs, rated blind by the author (French run; the author's comments are in French) |
| `blind_human_check_key.csv` | Key (which output comes from which model), opened after the rating |
| `error_log.md` | 18 entries: what went wrong, why, decision |
| `results_summary.md` | Quantified summary and limits |

**The raw CSV and XLSX outputs are those of the French-language run** (French headers, emails in French; for example `fonctions` = roles, `offre` = offer, `a_verifier` = facts to check, `relance` = follow-up); they were not regenerated on the English translation.

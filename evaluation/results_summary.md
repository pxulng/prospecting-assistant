# Results: media-prospecting preparation assistant

Everything is measured on **synthetic data** (40 fictional brands, fictional agency Hexamédia). Nothing was tested on real brands or in production. The figures say whether the assistant follows its rules on fabricated cases, not whether it would help a real salesperson. **Measured on the French-language run; not re-measured on the English translation.**

## 1. What was compared

| Version | Contents |
|---|---|
| No-AI baseline | Generic 3-email template; only brand, sector and site change; no alert |
| v1 Haiku 5.5 | First prompt |
| v2 Haiku 5.5 / v2 Sonnet 5.5 | Corrected prompt (10 rules), frozen before validation |

Sets: 28 test sheets (used to correct the prompt) and 12 validation sheets (used once). Traps: contradictory figure, old fact, missing information, none.

## 2. Measured results (counts on the output files)

| Indicator | v1 Haiku | v2 Haiku run 1 | v2 Haiku run 2 | v2 Sonnet | Valid. Haiku | Valid. Sonnet |
|---|---|---|---|---|---|---|
| Readable sheets (strict reading, before reader fix) | 26/28 | 27/28 | 28/28 | 28/28 | 12/12 | 11/12 (12/12 after fix) |
| "Branded content" offer | 88% | 62% | 53% | 57% | 66% | 72% |
| Email 1 over 120 words | 2 | 0 | 0 | 2 | 0 | 2 |
| Empty "a_verifier" lists on sheets without a trap | 0/16 | 0/16 | 1/16 | 9/16 | 0/2 | 0/2 |
| Traps flagged | not recorded | 12/12 | 12/12 | 12/12 | 10/10 | 10/10 |

Baseline: 0 traps flagged, every brand = "marketing manager", by construction.

## 3. AI rating of the validation set (grid 1 to 4, 12 sheets per model)

| Criterion | Haiku | Sonnet |
|---|---|---|
| Accuracy | 3.92 | 3.92 |
| Flagging | 3.67 | 3.67 |
| Targeting | 4.00 | 3.92 |
| Relevance | 3.33 | 3.67 |
| Email quality | 3.75 | 3.50 |

3 sheets out of 12 at 20/20 for each model. Differences too thin to conclude.

## 4. Blind human check (Paul, 10 outputs)

- Same score as the AI judge: 35 scores out of 50 (70%). Within at most 1 point: 49/50. Mean gap: 0.32.
- Disagreements: 15, of which 13 where Paul scores higher than the AI. The AI judge is stricter.
- Flagging: 10/10 identical (both noted 1935 and 1903 used without an alert, by Sonnet). Accuracy: 9/10.
- Human scores: Haiku 19.8/20, Sonnet 18.8/20 (5 outputs each).

## 5. Cost (measured from the account balance, 1-cent precision)

Haiku 5.5: about $0.002 per sheet. Sonnet 5.5: about $0.030 per sheet (28 sheets: $0.84), about 17 times more. My initial Sonnet estimate ($0.4 to 0.6) was wrong.

## 6. What these results do not prove

1. **Flagging is inflated.** 22/22 traps flagged, but Haiku puts alerts on almost every sheet, including those without a trap (empty list 1 time out of 18). An alert everywhere detects every trap while distinguishing nothing. The rule "empty list if nothing" is not followed. Sonnet empties more often, but only on the test set. On validation there are only 2 sheets without a trap: false alarms are not measurable there.
2. **The baseline is a weak adversary.** It can neither use a fact nor flag. The fair comparison would be with emails written by hand on the same sheets. It was not done.
3. **The test set was used to correct the prompt.** Its results are development results. Only validation is unbiased, with 12 sheets. Full AI rating was done only on validation, not on test.
4. **The judge and the authors are from the same model family.** The human check is a single evaluator, Paul, who knows the project, on 10 outputs and 5 fairly easy sheets. The 70% agreement is a hint, not proof of reliability.
5. **The choice between models rests on very little.** Sonnet's flaw (an old fact as a hook without an alert) comes from 2 sheets out of the 5 compared blind, 4 across test and validation. No significance possible.
6. **Variance.** Two runs of the same prompt differ (offer changed on 2 sheets, branded-content share 62% then 53%, one instruction leak in run 2). Each version was run only once (run 2 was a forced rerun).
7. **No measure of real usefulness.** No recipient, no reply rate, no time saved measured.
8. **Residual flaws not fixed** (see error_log.md, entries 9 to 18): lists never empty, facts outside the sheet (M024, M032, M016, M003), "Subject" repeated in follow-ups, style ("me indiquer").

## 7. Defensible conclusion

On 40 fictional sheets, with a 10-rule prompt, the assistant avoids inventing facts and names the traps, but cannot yet say "nothing to flag". Haiku 5.5 is enough for this work and costs about 17 times less than Sonnet 5.5; Sonnet brings no visible advantage on this sample. These conclusions hold for synthetic data and a small sample; the honest next step is a test on 5 real public brands, with human review.

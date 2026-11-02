# Error log: prospecting-preparation assistant (synthetic data)

> Measured on the French-language run. Brand IDs (M001-M040) exist in English translation in `data/`.

| No. | What happened | Cause | Decision |
|---|---|---|---|
| 1 | Two runs without a sheet (assistant answers "no sheet provided"), about $0.03 lost | Assembly error: the prompt v1 did not contain the variable that inserts the sheet | Fixed (sheet added at the end of the prompt). These trials do not count. |
| 2 | 2 sheets out of 28 unreadable (M007, M026), answer cut off | Answer too long for the token limit | v2: emails limited to 120 words, "a_verifier" limited to 4 points |
| 3 | "Branded content" offer in 23 cases out of 26 readable | No choice criterion: default value | v2: offer-choice guide by type of fact |
| 4 | "a_verifier" alerts on all 14 sheets without a trap, often administrative | Prompt v1 too broad | v2: sheet facts only, empty list if nothing |
| 5 | Claims outside the sheet (site audience, "we sometimes support", "terroir", "just launched", melatonin) | The model completes with common sense | v2: ban on claiming anything about audience, past campaigns, or more precise than the sheet |
| 6 | Legal alerts (Evin law, health claims) from the model | Out of scope | Paul's decision (2026-11-01): excluded from scope |
| 7 | "Subject" missing (M003, M014, M025), bullets stuck together (M003) | Instruction too weak | v2: explicit instruction |
| 8 | v2: 1 sheet out of 28 unreadable (M016): a stray "\" in place of "\n" in relance_2 makes the JSON invalid (the sheet is otherwise correct) | Format error of the model, not truncation | Reader made tolerant of this flaw; counted 27/28 in strict reading, 28/28 after reader fix |
| 9 | v2: every sheet still has at least one "a_verifier" alert (list never empty), including mentions "offers 3 and 4 not chosen" | The rule "empty list if nothing" is not followed | Documented, not fixed (prompt v2 frozen before validation) |
| 10 | v2: M024 uses "more than 100 countries" (undated) as a hook; M026 writes "planned in 2026" (the sheet says "in 2026"); M032 claims the creators "address a similar audience" | Residual deviations from rules 1 and 3 | Documented, not fixed |
| 11 | Second complete run of v2 (same prompt, same 28 sheets): 28/28 readable; offer different on 2 sheets (M023, M033 go from 2 to 4); 1 empty "a_verifier" list (M006); traps 12/12 as in run 1 | Non-determinism of the model | Both runs published; run 1 remains the reference |
| 12 | Run 2: M035 writes "I am preparing an approach to petfood brands" (instruction leak); M016 and M003 claim things about the site's readers or creators (outside the sheet); M022 quotes a figure in follow-up 1 (rule "no figure") | Residual deviations from rules 1 and 7 | Documented, not fixed |
| 13 | Sonnet 5.5 + prompt v2 (28 sheets): 28/28 readable, traps 12/12; empty "a_verifier" lists on 9 sheets out of 16 without a trap (Haiku: 0 to 1), none empty on the 12 sheets with a trap. Residual flaws: old facts as a hook (M023 "founded in 1921", M024 "1840"), "Pourriez-vous me indiquer" (M015), emails sometimes over 120 words | Residual deviations from rules 3, 7 and 9 | Documented |
| 14 | Validation (12 sheets, 1 run per model, v2): Sonnet adds a "Note" and then a 2nd corrected JSON after its JSON (M018): strict reading 11/12; Haiku 12/12 | Output not conforming to "only a JSON object" | Reader fixed (first complete JSON object): 12/12 after fix |
| 15 | Validation: Sonnet uses an old fact as a hook for M009 ("founded in 1935") and M028 ("founded in 1903") without flagging it; Haiku respects rule 3 on these two sheets | Sonnet deviates from rule 3 (already seen on M023/M024 in test) | Documented, prompt not modified |
| 16 | Validation: Haiku writes "Pouvez-vous me indiquer" (M030), a revenue hook for M018; Sonnet writes "adapté à une PME" in an email to an SME (M010) | Style deviations | Documented |
| 17 | Blind human check (S06, S08, both models): "Subject" repeated at the start of the follow-ups, mechanical reading | The "Subject" instruction of email 1 spills over to the follow-ups | Documented, prompt frozen, not fixed |
| 18 | Blind human check (S05, Sonnet, M028, SME): a communications manager proposed, outside the strict instruction for an SME; 1903 used as a hook without an alert | Deviation from the targeting rule and from rule 3 | Documented, not fixed |

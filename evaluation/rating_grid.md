# Rating grid (1 to 4): prospecting-preparation assistant

Each sheet is rated on 5 criteria. 4 = flawless, 3 = good with a minor flaw, 2 = bothersome flaw, 1 = unusable.

| Criterion | What is checked |
|---|---|
| Accuracy (blocking criterion) | No invented fact; a contradicted figure, an old fact or missing information is not used as if nothing were wrong. Rate 1 if a fact is invented. |
| Flagging | The "a_verifier" column flags exactly the trap in the sheet (and nothing false). Sheet without a trap: empty list. |
| Targeting | The roles proposed match the size (comparison with `expected_roles`), with no person's name. |
| Relevance | The chosen offer is defensible from the facts and the reason cites a fact from the sheet. |
| Email quality | Natural tone, short, a single call to action, different follow-ups, correct language, no price or promised result. |

Key measure: share of sheets with no invented fact and the trap flagged (compared with the baseline, which uses no fact and flags nothing).
Rating by an AI model, then a blind human check of 10 sheets.

# Case study: preparing media prospecting with an AI assistant, and measuring honestly what it is worth

> Demonstration project on **entirely synthetic data** (invented agency, sites and 40 brands). Designed from my own practice of commercial prospecting; never used in production, nor at any employer, and no real data appears in it. Measured on the French-language run; this English edition is a translation (see the root README).

## The problem

Before writing to a brand, a media salesperson spends time understanding who it is, choosing the offer to propose and personalising a sequence of three emails. It is repetitive work but demands rigour: a misquoted figure or an outdated fact used as a hook discredits the email.

Question asked: can an assistant prepare this work, **with a salesperson always reviewing before sending**, without inventing facts and while flagging what is doubtful?

## What I built

An n8n + Claude workflow. From a fact sheet on a brand, it produces:
- 2 to 3 **roles to target** (never names of people: finding contacts is out of scope);
- an **offer** among 4, with its justification;
- **3 emails** (first email, two follow-ups);
- a list of **facts to check** (contradictory figure, fact older than 2 years, missing information).

It sends nothing. No prices and no promised results.

## How I evaluated it

I treated the project like an assignment for a client, with criteria fixed before testing:
- **A no-AI baseline**: a single 3-email template, to know what the simplest tool is worth.
- **40 fictional brands**, 28 for testing and 12 for validation, with deliberately placed traps (contradictory figure, old fact, missing information) and sheets without a trap.
- **A 1-to-4 grid** on 5 criteria: accuracy (blocking), flagging, targeting, offer relevance, email quality.
- **The validation set used once**, after freezing the prompt.
- **Two models compared** (Haiku 5.5 and Sonnet 5.5), cost measured from the account balance.
- **A blind human check**: I rated 10 shuffled outputs myself without knowing which model wrote them, then compared with an AI judge.
- **An error log** (18 entries): what went wrong, why, what I decided.

## What happened

**The first prompt had clear flaws.** It chose the "branded content" offer in 88% of cases by default, put alerts on every sheet and stated things absent from the sheet (a site's audience, past campaigns). Two sheets out of 28 were unreadable, the answer being cut off. After analysing the errors, I wrote a second prompt of 10 rules. The share of branded content fell to 53 to 62%.

**An assembly error cost me one trial.** My first prompt did not contain the variable that inserts the brand sheet: the assistant answered "no sheet provided". I saw it by reading the outputs, fixed it and noted it in the log.

**Every trap is spotted, but that is worth less than it looks.** Both models flag 22 traps out of 22. But Haiku also puts an alert on almost every sheet without a trap (an empty list 1 time out of 18). Flagging everything is easy; knowing how to say "nothing to flag" is what would make the tool useful to a salesperson. I documented it without fixing it, to keep the validation clean.

**Haiku is enough.** On validation, the two models score very close (accuracy 3.92 for both). In the blind check, the two most serious flaws come from Sonnet: an old year (1935, 1903) used as a hook with no alert. Haiku costs about $0.002 per sheet against $0.030, 17 times less. The sample is too small to speak of a demonstrated difference; I keep Haiku as the default.

**My judgement and the AI judge's agree on the essentials.** Out of 50 scores, 35 are identical (70%) and 49 within one point. Both spotted the same cases where an old date served as a hook without an alert. The AI judge is stricter than me on style (13 disagreements out of 15 where I score higher). To rely on it, it would have to be recalibrated on human ratings.

## What I take from it

- **A score without a point of comparison says nothing.** The baseline forced me to define what the AI had to do better, and to notice that the comparison was weak (the template can neither use a fact nor flag one). The real reference would be emails written by hand on the same sheets.
- **The set used to fix must be separated from the set used to judge.** The 28 test sheets guided the prompt; only the 12 validation sheets are unbiased.
- **Residual errors are the most useful information.** Alerts on every sheet, hooks on an old fact with Sonnet, small style slips ("me indiquer") are the places where a human really must review.
- **The model is not deterministic.** Two runs of the same prompt did not give the same offers on 2 sheets. The conclusions hold for one run, not for all.

## Limitations

Data invented with the same approach as the prompt, so probably too favourable; a single human evaluator (me), 10 outputs, fairly easy sheets; an AI judge from the same model family as those evaluated; no measure of real usefulness (reply rate, time saved); no test on real brands; English edition not re-measured.

## What I would do next

1. A prompt v3 that enforces the empty list when there is nothing to flag, tested on new sheets, without touching the v2 results.
2. A test on five real public brands, with facts read and dated by a human.
3. A comparison with emails written by hand on the same sheets.
4. Measure manual preparation time to quantify the possible gain, labelled as an assumption until measured.

Everything is in the repository: data, prompts, outputs, grid, ratings, log and quantified summary.

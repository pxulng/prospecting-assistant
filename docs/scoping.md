# Scoping: media-prospecting preparation assistant

> Everything is fictional: the agency (Hexamédia), its sites, its offers and the 40 brands are invented. No real data (prospects, contacts, prices, company figures) was used.

## Problem
Preparing a commercial approach takes two slow tasks: understanding the target brand (who it is, what it does, what to offer it) and personalising a sequence email. The project tests whether an assistant can prepare this work, which a salesperson always reviews before sending.

## Origin of the project
Designed from my own practice of prospecting (3-step email sequences, targeting by sector, personalisation by brand). Tested on synthetic data, not in production.

## What the assistant does
For a sheet of facts about a brand: 2 to 3 roles to target (never names of people), a main offer among 4 with its justification, 3 emails (first email, D+4 follow-up, D+9 follow-up) and a list of facts to check (contradictory figures, old facts, missing information).

## Out of scope
- Finding named contacts (personal data).
- Sending the emails: a human reviews everything.
- Promising results, quoting prices or past campaigns.

## Success criteria (fixed before testing)
1. No invented fact in the emails.
2. A contradictory figure, an old fact (more than 2 years) or missing information is flagged and never presented as certain.
3. The chosen offer is defensible from the facts, and the roles targeted match the brand's size.
4. Short emails, a single call to action, correct language.

## Method
No-AI baseline (single template), test set of 28 brands, validation set of 12 brands used once, comparison of two models, error log. Status of figures: measured, assumption or projected.

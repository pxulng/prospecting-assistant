# Data

- `brands_synthetic.csv`: 40 **fictional** brands (IDs M001 to M040), English translation of the French original. Columns `set` (test or validation), `trap` (none, contradictory_figure, old_fact, missing_info), `facts`, `expected_roles`. The facts were written by Claude; the expected roles were reviewed by the author.
- `fictional_agency.md`: the fictional seller (Hexamédia), its 4 sites and its 4 offers, no price.
- `make_brands.py`: script that generates the CSV.
- `original_fr/`: the **French original** CSV and script (French columns and content), kept so that the published figures can be traced to the data they were measured on. Original names: `marques_synthetiques.csv`, `make_marques.py`.

Brand names are invented; any resemblance to a real brand is coincidental.

# Baseline

`baseline.py` generates the no-AI reference: a single 3-email template (D0, D+4, D+9) in which only brand, sector and site change. Its emails are in French and it reads the French original data (`data/original_fr/brands_synthetic.csv`, columns `marque`, `secteur`, ...), so it reproduces the published baseline on the French data. `results_baseline.csv` is that French output. It has not been ported to the English translation.

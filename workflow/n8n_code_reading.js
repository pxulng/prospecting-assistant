// Code node "Lecture" (Run Once for All Items)
const fiches = $('Demandes').all();
const sorties = [];
$input.all().forEach((item, i) => {
  const bloc = (item.json.content ?? []).find((c) => c.type === 'text');
  const brut = bloc?.text ?? '';
  let r;
  try {
    // Extract the FIRST complete JSON object (the model sometimes adds a note and then a 2nd JSON)
    const debut = brut.indexOf('{');
    let prof = 0, fin = -1, dansTexte = false, echap = false;
    for (let k = debut; k < brut.length && debut >= 0; k++) {
      const ch = brut[k];
      if (echap) { echap = false; continue; }
      if (ch === '\\') { echap = true; continue; }
      if (ch === '"') dansTexte = !dansTexte;
      if (!dansTexte) { if (ch === '{') prof++; if (ch === '}') { prof--; if (prof === 0) { fin = k; break; } } }
    }
    const txt = (fin > 0 ? brut.slice(debut, fin + 1) : brut).replace(/\\(?!["\\\/bfnrtu])/g, '\\n'); // tolerate a stray backslash
    r = JSON.parse(txt);
  } catch (e) {
    r = { fonctions: [], angle: 'ERREUR_JSON', offre: '', raison_offre: '', email_1: brut, relance_1: '', relance_2: '', a_verifier: ['unreadable answer'] };
  }
  sorties.push({ json: {
    id: fiches[i].json.id,
    fonctions: (r.fonctions ?? []).join('; '),
    angle: r.angle, offre: r.offre, raison_offre: r.raison_offre,
    email_1: r.email_1, relance_1: r.relance_1, relance_2: r.relance_2,
    a_verifier: (r.a_verifier ?? []).join(' | '),
    input_tokens: item.json.usage?.input_tokens ?? null,
    output_tokens: item.json.usage?.output_tokens ?? null,
  } });
});
return sorties;

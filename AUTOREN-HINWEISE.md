> **⚠️ Migration Astro/Starlight — Hinweise für Autor:innen**
> Dieses Dokument fasst zusammen, was sich durch den Umstieg von MkDocs Material auf Astro/Starlight für die inhaltliche Arbeit ändert. Es richtet sich an alle, die Seiten in der RZL Online Hilfe schreiben oder pflegen — nicht nur an Entwickler:innen. Bitte einmal ganz durchlesen, bevor die erste Seite nach dem Umstieg bearbeitet wird.
>
> Technische Hintergründe und der Projektstatus stehen in `plan.md`; dieses Dokument beschränkt sich bewusst auf das, was beim täglichen Schreiben von Markdown-Seiten wichtig ist.

# Was bleibt gleich

- **Sprache und Ton:** weiterhin durchgehend Deutsch, gleicher Schreibstil.
- **Markdown als Format:** Seiten werden weiterhin als `.md`-Dateien geschrieben, Syntax bleibt größtenteils CommonMark/GFM (Listen, Tabellen, Fett/Kursiv, Codeblöcke, Links, Bilder …).
- **`.pages`-Dateien für die Navigation:** Die Reihenfolge und Struktur der Sidebar wird weiterhin über `.pages`-Dateien neben den Inhalten gepflegt — genau wie bisher mit `awesome-pages`. Ihr müsst **keine** neue Konfigurationssprache lernen, um die Navigation zu ändern.
- **DevContainer + `F5`:** Vorschau starten funktioniert weiterhin über den DevContainer. Einziger Unterschied: Der Befehl im Hintergrund heißt jetzt `pnpm dev` statt `mkdocs serve` (das passiert automatisch, ihr müsst nichts einstellen).
- **Bilder neben dem Inhalt:** Bilder liegen weiterhin in `img/`-Ordnern neben den Markdown-Dateien, keine Umstellung auf einen zentralen Assets-Ordner nötig.

# Was sich geändert hat

## 1. Speicherort der Inhalte

| Vorher | Jetzt |
|---|---|
| `docs/**/*.md` | `src/content/docs/**/*.md` |
| `docs/**/img/**` | `src/content/docs/**/img/**` |
| `docs/**/.pages` | `src/content/docs/**/.pages` |

Alle Inhalte wurden mechanisch migriert. Neue Seiten legt ihr direkt unter `src/content/docs/<programm>/...` an.

## 2. Seitentitel: nur noch im Frontmatter, keine doppelte Überschrift

**Neu — bitte ab sofort beachten:** Der Seitentitel steht **ausschließlich** im Frontmatter-Feld `title`. Die Seite beginnt **nicht mehr** mit einer `# Überschrift` im Fließtext — Starlight zeigt den Frontmatter-Titel automatisch groß am Seitenanfang an. Eine zusätzliche H1 im Text würde zu einer doppelten, unschönen Überschrift führen.

```markdown
---
title: Stammdaten anlegen
---

Hier beginnt der eigentliche Inhalt, direkt mit einem Absatz oder einer
Zwischenüberschrift (`##`), aber **ohne** eigene `#`-Überschrift.
```

Wenn eine Seite mehrere Abschnitte hat, beginnt die erste sichtbare Überschrift im Text mit `##` (H2), nicht mit `#` (H1).

## 3. Hinweisboxen (Admonitions): neue Schreibweise

Die alte MkDocs-Material-Syntax mit `!!!` bzw. `???` **funktioniert bei neuen Inhalten nicht mehr**. Bestehende Seiten wurden einmalig automatisch umgewandelt; für **neue** Hinweisboxen muss ab sofort die Starlight-Syntax mit `:::` verwendet werden.

| Alte Schreibweise (MkDocs) | Neue Schreibweise (Starlight) |
|---|---|
| `!!! warning` | `:::caution` |
| `!!! info` / `!!! Info` | `:::note` |
| `!!! note` | `:::note` |
| `!!! question` | `:::tip` |
| `??? info` (einklappbar) | `<details><summary>…</summary>…</details>` |

Beispiel — vorher (MkDocs, **nicht mehr verwenden**):

```markdown
!!! warning "Achtung"
    Dieser Vorgang kann nicht rückgängig gemacht werden.
```

Beispiel — jetzt (Starlight, **so schreiben**):

```markdown
:::caution[Achtung]
Dieser Vorgang kann nicht rückgängig gemacht werden.
:::
```

Ohne eigenen Titel reicht:

```markdown
:::note
Das ist ein einfacher Hinweis ohne eigenen Titel.
:::
```

Verfügbare Typen: `:::note`, `:::tip`, `:::caution`, `:::danger`.

## 4. Bilder für Hell-/Dunkelmodus

Die Schreibweise mit `#only-light` bzw. `#only-dark` am Ende des Bildpfads funktioniert **unverändert weiter** — hier ist keine Umstellung nötig:

```markdown
![Alt-Text](img/Icon.svg#only-light)
![Alt-Text](img/Icon-dunkel.svg#only-dark)
```

## 5. Bildbreite festlegen

Auch die Attribut-Schreibweise für die Bildbreite bleibt gleich:

```markdown
![Alt-Text](img/Screenshot.png){:width="600px"}
```

## 6. Links auf externe Seiten in neuem Tab öffnen

Neu unterstützt, funktioniert genauso wie zuvor über ein Attribut direkt nach dem Link:

```markdown
[RZL Website](https://www.rzlsoftware.at){:target="_blank"}
```

## 7. Fußzeile auf einzelnen Seiten ausblenden

Das frühere Frontmatter `hide: [footer]` wird automatisch nach `hideFooter: true` übersetzt. Bei neuen Seiten bitte direkt die neue Schreibweise verwenden:

```yaml
---
title: Landingpage ohne Fußzeile
hideFooter: true
---
```

## 8. Dateinamen und URLs: durchgehend "kebab-case"

Alle Ordner- und Dateinamen wurden für die neuen, kürzeren und URL-freundlichen Adressen normalisiert: klein geschrieben, Wörter mit Bindestrichen getrennt, **keine Leerzeichen**, deutsche Umlaute transliteriert (ä → ae, ö → oe, ü → ue, ß → ss).

Beispiel: `docs/FIBUNext/Elektronische Übermittlung an das Finanzamt/` → `src/content/docs/fibu-next/elektronische-uebermittlung-an-das-finanzamt/`

**Für neue Seiten bitte von Anfang an so benennen:**

- ✅ `stammdaten-anlegen.md`
- ✅ `kurzanleitungen/installation-uebersiedeln.md`
- ❌ `Stammdaten anlegen.md` (Leerzeichen)
- ❌ `Übermittlung_ans_Finanzamt.md` (Umlaut, Unterstrich statt Bindestrich)

Alte Adressen aus der bisherigen Hilfe funktionieren weiterhin — sie leiten automatisch (301-Redirect bzw. Weiterleitung über die 404-Seite) auf die neue Adresse weiter. Ihr müsst bestehende Links in Foren, E-Mails o. Ä. nicht anpassen, es empfiehlt sich aber, **eigene neue Links direkt mit der neuen Adresse** zu setzen.

## 9. `.pages`: Ziele verweisen jetzt auf die neuen (kebab-case) Namen

Die `.pages`-Dateien funktionieren wie gewohnt, aber die referenzierten Datei-/Ordnernamen folgen jetzt natürlich der neuen Namensregel aus Punkt 8:

```yaml
nav:
  - LOHN Handbuch: index.md
  - Allgemeines: allgemeines
  - sachbezuege.md
```

Der **Anzeigename** in der Sidebar (links vor dem `:`) kann weiterhin frei und mit Leerzeichen/Umlauten geschrieben werden — nur der **Datei-/Ordnerverweis** (rechts) muss der neuen Datei- bzw. Ordnerstruktur entsprechen.

## 10. Kein PDF/Druck-Stylesheet mehr

Die Hilfe ist ab jetzt reine Bildschirmdarstellung; ein spezielles Druck-/PDF-Stylesheet gibt es nicht mehr und wird auch nicht mehr gepflegt. Für den Druck wird der Browser-Standarddruck verwendet.

## 11. Suche mit Programmfilter

Die Suche (unten rechts bzw. über das Suchfeld) funktioniert weiterhin wie gewohnt inkl. Filter nach Programm ("Alle Programme" oder ein bestimmtes Programm). Die Bezeichnungen im Filter entsprechen den Titeln der obersten Navigationsebene (z. B. „FIBU Next“, „LOHN“, „KIS“, …) — hier ist nichts weiter zu tun.

# Kurz-Checkliste für neue Seiten

- [ ] Datei liegt unter `src/content/docs/<programm>/…`, Datei-/Ordnername in kebab-case, ohne Leerzeichen/Umlaute.
- [ ] Frontmatter mit `title:` gesetzt — **kein** `# Titel` mehr am Anfang des Texts.
- [ ] Neue Seite in der passenden `.pages`-Datei eingetragen (sonst erscheint sie nicht in der Sidebar).
- [ ] Hinweisboxen mit `:::note` / `:::tip` / `:::caution` / `:::danger` geschrieben, nicht mehr mit `!!!`.
- [ ] Bilder mit `#only-light` / `#only-dark` versehen, falls es hell/dunkel-spezifische Varianten gibt.
- [ ] Vorschau lokal mit `pnpm dev` geprüft, bevor der Pull Request erstellt wird.

# Bekannte offene Punkte (noch nicht final)

- Die Fußzeile (Copyright-Zeile, Links zu Impressum/Datenschutz) verwendet aktuell noch die Starlight-Standardfußzeile; das RZL-spezifische Layout dafür ist noch nicht vollständig nachgebaut.
- Die redaktionelle Abnahme (UAT) je Programmbereich ist noch nicht abgeschlossen — falls euch beim Durchklicken eurer Programmbereiche etwas auffällt, bitte im Projekt melden.

Bei Fragen zur neuen Struktur oder wenn etwas beim Schreiben nicht wie erwartet funktioniert: bitte im Projekt melden, nicht stillschweigend improvisieren — viele Sonderfälle (z. B. eingebettetes HTML, ungewöhnliche Tabellen) wurden bewusst nicht automatisch migriert und brauchen ggf. eine kurze Abstimmung.

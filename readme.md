# RZL Hilfe

Die RZL Online Hilfe ist unter [https://hilfe.rzlsoftware.at](https://hilfe.rzlsoftware.at) erreichbar.

Sie wird mit [Astro](https://astro.build/) und [Starlight](https://starlight.astro.build/) erstellt.

## Contribute

Für das Anpassen und Erstellen der RZL Hilfe werden [DevContainer](https://code.visualstudio.com/docs/devcontainers/containers) verwendet.  
Diese können entweder lokal mit Hilfe von Docker oder in [GitHub Codespaces](https://github.com/features/codespaces) gestartet werden.  
Dadurch kann sichergestellt werden, dass alle Abhängigkeiten und Tools (Node.js, [pnpm](https://pnpm.io/)) bereits installiert und richtig eingerichtet sind.

Ist der DevContainer oder Codespace vollständig gestartet und im [Visual Studio Code](https://code.visualstudio.com/) geöffnet, kann mit dem Drücken der `F5` Taste eine Live-Preview gestartet werden.

Im Hintergrund führt `F5` diesen Befehl aus:
```sh
pnpm dev
```

### Inhalte bearbeiten

Die Markdown-Inhalte liegen unter `src/content/docs/`, gruppiert nach Programmbereichen (z. B. `board/`, `lohn/`, `kis/`, ...). Jede Seite besitzt Frontmatter mit mindestens einem `title`.

Die Navigation (Reihenfolge, Struktur) wird weiterhin über `.pages`-Dateien direkt neben den Inhalten gepflegt (gleiches Format wie bisher) – die Sidebar wird daraus automatisch generiert und muss nicht manuell in einer Konfigurationsdatei angepasst werden.

### Wichtige Befehle

```sh
pnpm install       # Abhängigkeiten installieren
pnpm dev           # lokale Live-Preview (http://localhost:4321)
pnpm check         # TypeScript-/Astro-Diagnose (muss vor einem PR fehlerfrei sein)
pnpm build         # Produktions-Build nach dist/
pnpm preview       # gebauten Output lokal ansehen
```

`pnpm dev` und `pnpm build` generieren die Navigation automatisch aus den `.pages`-Dateien; ein manueller Zwischenschritt ist nicht nötig.

## Toolchain

- Paketmanager: **pnpm** (Version über `packageManager` in `package.json` gepinnt)
- Node.js: LTS-Version, gepinnt in `.nvmrc`
- CI: GitHub Actions führt `pnpm check` und `pnpm build` aus und deployt `dist/` auf Azure Static Web Apps
</content>

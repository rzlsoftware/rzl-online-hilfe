# RZL Hilfe

Die RZL Online Hilfe ist unter [https//hilfe.rzlsoftware.at](https://hilfe.rzlsoftware.at) erreichbar.

Sie wird mit Hilfe von [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/). erstellt.

## Contribute

Für das Anpassen und Erstellen der RZL Hilfe werden [DevContainer](https://code.visualstudio.com/docs/devcontainers/containers) verwendet.  
Diese können etweder lokal mit Hilfe von Docker oder in [GitHub Codespaces](https://github.com/features/codespaces) gestartet werden.  
Dadurch kann sichergestellt werden, dass alle Abhängigkeiten und Tools bereits installiert und richtig eingerichtet sind.

Ist der DevContainer oder Codespace vollständig gestartet und im [Visual Studio Code](https://code.visualstudio.com/) geöffnet, kann mit dem drücken der `F5` Taste eine live Preview gestartet werden.

Im Hintergrund führt `F5` diesen Befehl aus:
```sh
mkdocs serve
```

# Installation übertragen/verschieben

## Komplette Übertragung

### RZL Daten sichern

Gehen Sie wie im Kapitel [*RZL Daten sichern*](daten-sichern.md) beschrieben vor.

### Installieren Sie RZL in der neuen Umgebung

Den Downloadlink für die aktuelle RZL-Komplettversion finden Sie unter Downloads in
der RZL Technik-Knowledge-Base unter [*rzlsoftware.at/kb*](https://rzlsoftware.at/kb).

Eine genaue Beschreibung zur Installation finden Sie im Kapitel
[*Installation*](installation.md).

### RZL Daten wiederherstellen

Stellen Sie die gesicherten Daten wie in Kapitel
[*RZL Daten wiederherstellen*](daten-wiederherstellen.md) beschrieben in der neuen
Umgebung wieder her.

### Zurücklegen der Lizenz bei der alten Installation

Sie werden beim Sichern der Daten aufgefordert, die Lizenz zurückzulegen.

### Neue Installation lizenzieren

Gehen Sie wie im Kapitel [*RZL Lizenzierung*](lizenzierung.md) beschrieben vor.

### Deinstallation und Bereinigung der alten Installation

Sie können die alte Installation nun deinstallieren sowie das Daten-Repository und
die Datenbank (falls vorhanden) bereinigen.

---

## Übertragung einzelner Komponenten

### Datenrepository

1. Kopieren Sie vom alten Server das gesamte Datenrepository auf den neuen Server.
2. Stellen Sie nach dem Kopieren der Daten sicher, dass die Arbeitsplätze wieder mit
   demselben Laufwerksbuchstaben auf das Datenrepository (analog zum alten Server)
   zugreifen können.
3. Bereinigen Sie das Datenrepository am alten Server.

### Datenbank

1. Sichern Sie die RZL-Datenbank mit dem *RZL Admin* (*Menüpunkt Sicherung*).
2. Ändern Sie die Verbindungseinstellungen der Datenbank
   (*ZMV → Hilfsmittel → Einstellungen → Datenbank*) auf die neue
   Datenbank-Server-Instanz.
3. Spielen Sie mit dem *RZL Admin* (*Menüpunkt Wiederherstellen*) die Sicherung in
   die neue Datenbank-Instanz ein.
4. Bereinigen Sie die Datenbank am alten Datenbank-Server.
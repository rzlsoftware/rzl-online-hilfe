# Add-Ins in Office-Programmen nicht mehr sichtbar

## Problembeschreibung
Wenn die Add-Ins in Office-Programmen (z. B. Outlook, Word, Excel, PowerPoint) nicht mehr sichtbar sind, wurden sie vermutlich von Office automatisch deaktiviert. Dies passiert meist, wenn ein Add-In durch einen unbehandelten Fehler beendet wurde. Office deaktiviert es dann, um Programmabstürze zu vermeiden.

## Lösungswege

### Add-In manuell wieder aktivieren
1. Öffnen Sie das betroffene Office-Programm.
2. Gehen Sie zu **Datei > Optionen > Add-Ins**.
3. Unten im Fenster finden Sie **Verwalten**. Wählen Sie dort **Deaktivierte Elemente** und klicken Sie auf **Gehe zu**.
4. Suchen Sie das gewünschte KIS Add-In und aktivieren Sie es wieder.
5. Starten Sie das Office-Programm neu.

### Reaktivierung über KIS
Beim Start von KIS wird versucht, deaktivierte und inaktive Add-Ins automatisch wieder zu aktivieren. Sie erhalten dann gegebenenfalls eine entsprechende Meldung.

### Problemlösung bei Installationsproblemen/Fehlermeldungen
- Falls die Add-Ins nicht neu installiert werden können (z. B. weil sie als bereits installiert angezeigt werden), deinstallieren Sie alle KIS Add-Ins vollständig über **Programme und Features** in der Systemsteuerung und installieren Sie sie anschließend neu.

!!! warning "Achtung"
    Führen Sie die folgende Änderung nur durch, wenn Ihnen klar ist, welche Auswirkungen sie auf Ihr System hat. Ein vollständiges Backup des Betriebssystems wird empfohlen.

## Weitere Tipps und Hinweise
- Achten Sie darauf, das **TEMP-Verzeichnis** regelmäßig zu leeren, da zu viele Dateien Probleme verursachen können.
- Bei Office 64 Bit: Die Add-In-Registrierung muss in beiden Hives (32 und 64 Bit) erfolgen.

## Weitere Microsoft-Hilfeartikel
- [Anzeigen, Verwalten und Installieren von Add-Ins für Excel, PowerPoint und Word](https://support.microsoft.com/de-de/office/anzeigen-verwalten-und-installieren-von-add-ins-f%C3%BCr-excel-powerpoint-und-word-16278816-1948-4028-91e5-76dca5380f8d)

!!! note "Hinweis"
    Sollten Sie weiterhin Probleme haben (z. B. Add-In ist installiert, aber nicht sichtbar), prüfen Sie, ob Antivirus-Software oder eingeschränkte Benutzerrechte die Ausführung verhindern.
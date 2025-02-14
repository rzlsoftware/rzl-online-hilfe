# Dokumentenverwaltung Plus einrichten

Damit Sie die kosten- und lizenzpflichtige Dokumentenverwaltung Plus
aktivieren können, muss der RZL Dienst installiert sein (siehe
[*RZL Dienst installieren*](/setup/dienst-installieren)), und einige zusätzliche
technische Voraussetzungen am Datenbankserver müssen erfüllt sein.
Um diese Voraussetzungen zu prüfen und eventuell fehlende Komponenten
bzw. Konfigurationen einzurichten, verwenden Sie bitte unseren
Einrichtungsassistenten (RZL Server Konfigurator). Nachdem Sie diesen
am Datenbankserver gestartet haben, folgen Sie bitte den Anweisungen
des Programms.

[*RZL Server Konfigurator herunterladen*](https://rzl.blob.core.windows.net/programme/RZL.Server.Configurator.zip)

Sollte der Server Konfigurator nicht funktionieren, können Sie
alternativ die Einrichtungen am Datenbankserver auch manuell vornehmen.
Hierfür gibt es eine Kurzanleitung. Sollten Sie diese benötigen, senden
Sie einfach eine Mail an [*technik@rzl.at*](mailto:technik@rzl.at).

## Aktivierung Dokumentenverwaltung Plus

Sobald alle technischen Voraussetzungen für den Betrieb der
Dokumentenverwaltung Plus erfüllt sind, kann die Dokumentenverwaltung
Plus aktiviert werden. Starten Sie dazu einen Web-Browser
(Microsoft Edge, Mozilla Firefox, Google Chrome, ...) und öffnen Sie die
Startseite des RZL Dienstes. (Sollten Sie die URL dafür noch nicht
kennen, können Sie sich diese im RZL Admin im Bereich
*Information zur Installation und Update der Programme* anzeigen lassen).
Wechseln Sie in den Bereich *DokV Plus*. Sollte dieser Eintrag bei Ihnen
nicht erscheinen, besitzen Sie noch keine Lizenz für dieses Modul.

![Dokumentenverwaltung Plus aktivieren](img/DokVPlus_Aktivieren.png)

Zur Aktivierung klicken Sie nun auf *RZL Dokumentenverwaltung Plus aktivieren*.

![Dokumentenverwaltung Plus erfolgreich aktiviert](img/DokVPlus_AktivierungErfolgreich.png)

Sollten bestimmte technische Voraussetzungen noch nicht erfüllt sein,
wird Ihnen statt einer Erfolgsmeldung eine Liste der fehlenden
Komponenten bzw. Einstellungen angezeigt. Gehen Sie in diesem Fall die
obigen Punkte noch einmal durch und kontrollieren Sie alle Einstellungen
auf ihre Richtigkeit.

Im Bereich der Einstellungen können Sie spezielle Konfigurationen
vornehmen, die die Dokumentenverwaltung Plus betreffen.

![Dokumentenverwaltung Plus Einstellung für gelöschte Dokumente](img/DokVPlus_EinstellungenGeloeschteDokumente.png)

Im Feld *Gelöschte Dokumente kopieren nach* können Sie ein
Archiv-Verzeichnis angeben, in das sämtliche aus der Dokumentenverwaltung
Plus gelöschten Dokumente gesichert werden sollen. Es muss sich dabei um
einen Pfad handeln, der vom RZL Dienst erreicht werden kann.

Sie können im KIS Vorgängerversionen von DokV+ Dokumenten
wiederherstellen. Eine genauere Beschreibung finden Sie im KIS Handbuch.

In den Einstellungen der Dokumentenverwaltung Plus kann der KIS-Admin
festlegen, wie lange solche Vorgängerversionen aufbewahrt werden sollen.
Sie können hierbei zwischen 1, 2, 3, 7 und 30 Tagen wählen.

!!! warning "Hinweis"  
    Bitte beachten Sie, dass für die Vorgängerversionen zusätzlicher
    Speicherplatz benötigt wird. *(Originaldateigröße x Anzahl der Versionen)*

Nach Aktivierung der Dokumentenverwaltung Plus werden alle neuen
Dokumente (Belege, KIS-Dokumente, …) automatisch in der sicheren
Dokumentenverwaltung abgelegt. Diese Dokumente liegen dann nicht mehr
direkt im Dateisystem, sondern in der RZL-Datenbank, und der Zugriff
darauf ist nur noch über die RZL-Programme mit den beim Mitarbeiter
hinterlegten Rechten möglich.

Bestehende Dokumente, die bereits vorher durch RZL verwaltet wurden,
werden bei dieser Aktivierung **nicht automatisch übernommen**.
Hierzu ist eine Migration dieser Dokumente notwendig, die im nächsten
Punkt beschrieben wird.
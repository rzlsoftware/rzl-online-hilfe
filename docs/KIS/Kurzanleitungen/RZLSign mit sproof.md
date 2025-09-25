# RZL Sign mit sproof 

## Verknüpfung sproof mit RZL

Um Dokumente von RZL zu sproof hochladen und signieren zu können, ist die Einrichtung der sproof Lizenz und sproof User notwendig. Diese Daten können im RZL Board unter Portale und RZLSign hinterlegt werden.

![RZLSign - Portale](<img/Portale_RZLSign.png>)

### sproof Lizenz

Die sproof Lizenz ist im RZL Board unter **Portale / RZLSign** und **Lizenz** zu hinterlegen.
Mithilfe **Neue sproof Lizenz** im Ribbon oder im Detail kann die sproof Lizenz angelegt werden. Den API Token erhalten Sie direkt von sproof und dieser ist hier einzutragen und der entsprechende Lizenznehmer zuzuordnen.

![sproof Lizenz](<img/Lizenz.png>)

Die sproof Lizenz kann hier auch gelöscht werden. Mit **sproof Lizenz löschen** wird lediglich die Verknüpfung zu RZL gelöscht.

!!! info "Hinweis"
    Sofern Sie keine Fehlermeldung beim Speichern der sproof Lizenz erhalten, ist die Verbindung aufrecht. Der API-Token wird beim Speichern mit sproof verglichen und geprüft.

### sproof User

Mit **neuer sproof User** im Ribbon/bei Details legen Sie Ihre sproof User an. Unter Mitarbeiter wählen Sie einen Mitarbeiter aus, welchem der sproof User zugeordnet werden soll. Die angezeigten Mitarbeiter im Drop-Down Feld sind jene, die bereits im Board als Mitarbeiter angelegt wurden.
In dieser Übersicht werden nicht nur von RZL angelegte User angezeigt, sondern auch User direkt von sproof. Wenn die sproof User Ansicht geöffnet wird, wird RZL und sproof synchronisiert. Welche Art für welchen sproof User vorliegt, ist im sproof festgelegt und wird synchronisiert und rein als Information im RZL angezeigt.

![sproof User](<img/User.png>)

Der Unterschied von Users und User+ ist im sproof relevant. Für das Signieren von Dokumenten ist die Zuordnung zum Mitarbeiter notwendig.

!!! info "Hinweis"
    Einem sproof User können mehere Mitarbeiter zugeordnet werden. So können alle zugeordneten Mitarbeiter mit einem sproof User z.B. einem allgemeinen Kanzlei-User Dokumenten zum Signieren an sproof hochladen.

Der Status gibt an, ob ein sproof User bereits einem Mitarbeiter zugeordnet wurde oder nicht. Ohne Zuordnung zum Mitarbeiter können von diesem Mitarbeiter keine Dokumente zum Signieren an sproof hochgeladen werden.

![Status sproof User](img/Status_User.png)

## Dokumente signieren

Die sproof Funktionen sind im RZL Kanzlei-Informations-System in den Bereichen *Mein Arbeitsplatz, Klient und Kanzlei* jeweils unter *Dokumente* zu finden. Sie können diese entweder über das Kontextmenü  (rechte Maustaste auf Dokument) oder im Ribbon aufrufen.

![Kontextmenü](<img/Kontextmenü.png>)

Soll ein Dokument signiert werden, wählen Sie **mit sproof signieren**.
Befinden sich in den Stammdaten des Klienten eine oder mehrere E-Mail-Adressen, werden diese Empfänger vor Weiterleitung des Dokuments an sproof angezeigt und Sie können jetzt bereits einen oder mehrere Empfänger wählen.

![Empfänger](<img/Empfänger wählen.png>)

Sie werden anschließend auf die Website von sproof weitergeleitet, wo Ihnen neben dem Weiterleiten an Empfänger zur Signatur weitere Möglichkeiten zur Verfügung stehen.

![sproof Website](<img/sproof Website.png>)

### Selbst unterschreiben

Sie können das Dokument vor Weiterleitung an den/die Empfänger selbst unterschreiben. 
Wählen Sie hier die Art der Signatur aus. Diese kann bereits im sproof für den User vordefiniert werden.
Als nächsten Schritt wählen Sie den Signatur-Stil aus. Einen Signatur-Stil können Sie auch neu erstellen.
Zusätzlich können Sie separate Formularfelder im Dokument platzieren wie z.B. Checkboxen, Textfelder, vordefiniertes Textfeld für den IBAN.
Damit Sie schlussendlich unterschreiben können, ist das Signaturfeld auf das Dokument an die gewünschte Stelle zu platzieren. Das führen Sie mittels Drag&Drop aus.

### Empfänger:innen

Klicken Sie auf den Bereich *Empfänger:innen*, um die Einstellungen zum Signieren des Empfängers zu treffen.
Im Schritt 1 fügen Sie entweder den Empfänger bzw. die Empfänger-E-Mail-Adresse ein.

![Empfänger sproof](<img/Empfänger bei sproof.png>)

!!! info "Tipp"
    Falls Sie bereits vorm hochladen auf sproof im RZL KIS den Empfänger gewählt haben, ist der Empfänger inkl. seiner/ihrer E-Mail-Adresse bereits angeführt.

Wenn Sie die Option **Signaturart des Dokuments festlegen** aktivieren, bestimmen Sie mit welcher Signaturart der Empfänger unterzeichnen muss.

!!! warning "Exkurs"
    EES: Die einfache elektronische Signatur (EES) wird nicht näher bestimmt, da sie der niedrigsten Sicherheitsstufe entspricht, für welche keine besonderen Anforderungen gelten.
    FES: Eine fortgeschrittene elektronische Signatur (FES) ist eine digitale Unterschrift, die bestimmte Sicherheitsanforderungen erfüllt. Unterschriften dieser Art sind so angelegt, dass sie (eindeutig) einem Unterzeichner bzw. einer Unterzeichnerin zuzuordnen sind und so die Identifizierung der unterzeichnenden Person ermöglichen sollen.
    QES: Eine qualifizierte elektronische Signatur (kurz QES) hat im Wesentlichen die gleiche Wertigkeit wie die handschriftliche Unterschrift und kann damit zur Unterzeichnung im elektronischen Datenverkehr eingesetzt werden. Es handelt sich dabei um die sicherste Form einer digitalen Signatur. Darunter fällt unter anderem die ID-Austria.
    Quelle: https://www.a-trust.at/de/





















**--> Berechtigungen??**
Keine Berechtigungen, weil eh mit Klientengruppe und Hinterlegung bei sproof User

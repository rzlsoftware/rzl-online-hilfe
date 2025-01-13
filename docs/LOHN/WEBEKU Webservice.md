# WEBEKU Webservice 

Diese Anbindung – über einen neu anzulegenden USP-Webservice-Benutzer – ermöglicht einen einfachen und direkten Zugriff auf die Kontosalden und/oder Buchungen auf den abgerechneten ÖGK-Beitragskontonummern.

## Anlage eines Webservice-Benutzers im Unternehmensserviceportal (USP)

In den meisten Fällen wird es noch keinen Webservice-Benutzer im Unternehmensserviceportal geben. Dafür muss der **Administrator** in Ihrem Unternehmensserviceportal wie folgt vorgehen:

Wählen Sie zunächst den Punkt *Webservicekonten verwalten*.

![Image](<img/image717.png>)

Über die Schaltfläche *Neues Konto* *anlegen* wird automatisch ein Username vergeben, der noch mit einer E-Mail-Adresse ergänzt werden muss. Bereits bestehende Webservice-Benutzer können Sie in dieser Liste bearbeiten bzw. löschen.

![Image](<img/image718.png>)

![Image](<img/image719.png>)

![Image](<img/image720.png>)

Im anschließenden Bildschirm können Sie über die entsprechende Schaltfläche ein PDF-Dokument mit den Zugangsdaten herunterladen, welches Sie abspeichern oder ausdrucken sollten.

Nun muss der neu angelegte Webservice–Benutzer noch mit der entsprechenden Berechtigung belegt werden. Dazu wählen Sie im USP die Option *Webservicerechte verwalten*.

Über den Punkt *Zuordnen* können Sie den jeweiligen Benutzer „WEBEKU WS-Beitragskonto“ vergeben.

![Image](<img/image721.png>)

!!! warning "Hinweis"
    Bei Fragen zur Anlage eines Webservice-Benutzers für den WEBEKU-Webservice im USP wenden Sie sich bitte an <https://www.usp.gv.at/ueber-das-usp/index/kontakt.html>.

## Hinterlegung des Webservice-Benutzers in der ZMV (Zentralen Mandantenverwaltung)

Die oben erhaltenen Zugangsdaten geben Sie in der ***ZMV*** (*Zentralen Mandantenverwaltung*) unter *Allg. Dateien / Stammdaten Absender* im Registerblatt *Online-Dienste* ein:

![Image](<img/image722.png>)

## Aufruf in der RZL Lohnverrechnung 

Sie haben in der Symbolleiste einen neuen Button für den Aufruf des WEBEKU Dialogs ![Image](<img/image723.png>)

![Image](<img/image724.png>)

Ebenso können Sie über *Aufruf / WEBEKU Abfrage* den Dialog öffnen.

### Suchen / Öffnen

Durch Auswahl des Buttons *Suchen / Öffnen* werden **alle Beitragskonten dieses Klienten** in der Tabelle darunter angeführt:

![Image](<img/image725.png>)

!!! warning "Hinweis"
    Es werden nur all jene Beitragskonten angeführt, die im Klienten bzw. Unterdienstgeber hinterlegt sind und welche im USP zugeordnet wurden.

![Image](<img/image726.png>)

Den aktuellen Saldo der einzelnen Beitragskontonummern sehen Sie in der Spalte *Saldo.*

### Ausgabe-/Ausdruckmöglichkeiten

Sie haben in den drei Bereichen Kontosalden, Buchungsliste und Kontoinformationen die Möglichkeit:

- die Liste zu drucken (Druckvorschau, Drucker und PDF-Drucker bzw. PDF-Manager)
- die Liste zu exportieren (PDF, xlsx, csv)
- die Liste zu kopieren
- den Eintrag zu kopieren.

![Image](<img/image727.png>)

### Aufruf Kontoinformation 

Durch das Markieren des gewünschten Beitragskontos und Anwahl der rechten Maustaste öffnet sich das Kontextmenü. Wählen Sie hier *Kontoinformation öffnen* aus.

![Image](<img/image728.png>)

Es öffnet sich ein weiteres Fenster. Wählen Sie hier *Suchen / Öffnen* aus, damit die Kontoinformationen des Beitragskontos angezeigt werden.

![Image](<img/image729.png>)

!!! warning "Hinweis"
    Durch Auswahl des *Zurück-Buttons* kommen Sie in die Beitragskontenliste zurück.

### Aufruf Kontobuchungsliste 

Durch Markieren des gewünschten Beitragskontos und Anwahl der rechten Maustaste öffnet sich das Kontextmenü. Wählen Sie hier *Kontobuchungsliste öffnen* aus.

![Image](<img/image730.png>)

Es öffnet sich ein weiteres Fenster. Wählen Sie hier *Suchen / Öffnen* an, damit die Buchungsliste des Beitragskontos erscheint.

![Image](<img/image731.png>)

Bei diesem Dialog haben Sie die Möglichkeit, nach bestimmten Kriterien eine Einschränkung vorzunehmen (Buchungszeitraum, Buchungsdatum und Beitragszeitraum).

!!! warning "Hinweis"
    Durch Auswahl des *Zurück-Buttons* kommen Sie in die Beitragskontenliste zurück.

### Abfragefehler

Kommt es zu einem Abfragefehler, erscheinen unterhalb des Fortschrittbalkens ein oder mehrere Hinweise.

**Zum Beispiel:**

Es ist eine Beitragskontonummer beim Klienten hinterlegt, wofür es im USP keine Abfrageberechtigung gibt.

![Image](<img/image732.png>)

## Versicherungsnummernabfrage

Sie haben die Möglichkeit in der Abrechnung des Dienstnehmers oder über *Aufruf / WEBEKU SV Nr. Abfrage* die Versicherungsnummernabfrage durchzuführen.

### Einstellungen im USP-Portal

Im USP-Portal geben Sie beim bereits bestehenden Webservicekonto noch die Berechtigung für die Abfrage VSNR hinzu.

![Image](<img/image733.png>)

### Versicherungsnummernabfrage in der Abrechnung des Dienstnehmers

Im Bereich *Stammdaten Dienstnehmer* finden Sie den neuen Aufruf-Button *Abfrage SV-Nr*.

![Image](<img/image734.png>)

!!! warning "Hinweis"
    Wenn der Button *Abfrage SV-Nr.* ausgegraut ist, dann ist in der *ZMV* (Zentrale Mandantenverwaltung) **kein** WEBEKU-Benutzer hinterlegt.

Sobald die Versicherungsnummernabfrage gestartet wird, erscheint ein neues Fenster.

![Image](<img/image735.png>)

Die Felder in diesem Fenster werden ausgefüllt, wenn in der Abrechnung diese Daten vorhanden sind. Pflichtfelder sind Name, Vorname und Geburtsdatum.

Durch Anwahl der Schaltfläche *Suchen* erscheint folgender Hinweis:

![Image](<img/image736.png>)

Mit diesem Hinweis möchten wir Sie darauf aufmerksam machen, dass bei jeder Abfrage das WEBEKU aufzeichnet, wer eine Abfrage durchgeführt hat. Dies muss WEBEKU aus datenschutzrechtlichen Gründen machen. Daher empfehlen wir, dass Sie nicht wahllos Abfragen durchführen, sondern nur wenn erforderlich.

Wurde die Abfrage erfolgreich durchgeführt, erhalten Sie als Antwort die Sozialversicherungsnummer.

![Image](<img/image737.png>)

Durch Anwahl der Schaltfläche *Übernehmen / Zwischenablage* wird die Sozialversicherungsnummer in das Feld *SV-Nummer* übernommen.

### Versicherungsnummernabfrage über Aufruf

Sie haben auch die Möglichkeit die Versicherungsnummernabfrage über *Aufruf / WEBEKU SV Nr. Abfrage* aufzurufen, woraufhin der WEBEKU Versicherungsnummernabfrage-Dialog erscheint. Der Dialog kann dann mit den Pflichtfeldern Name, Vorname und Geburtsdatum befüllt werden. Durch Drücken des Buttons *Suchen* ist der Hinweis bezüglich Datenschutzes zu sehen, sowie nach erfolgreicher Suche die Sozialversicherungsnummer. Die Sozialversicherungsnummer kann über die Schaltfläche *Übernehmen / Zwischenablage* in die Zwischenablage gegeben und in ein beliebiges Feld oder Dokument eingefügt werden.

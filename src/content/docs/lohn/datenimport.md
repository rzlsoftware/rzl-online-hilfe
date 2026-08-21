---
title: Datenimport
program: LOHN
---

<span id="datenimport" class="legacy-anchor" aria-hidden="true"></span>

## Allgemeines

Im Lohnprogramm besteht die Möglichkeit, Daten, die ein bestimmtes Format aufweisen, in die Lohnverrechnung im Rahmen einer *Neuanlage*, *Korrektur letzter Abrechnung*, *laufender Abrechnung mit Änderung*, *Aufrollung* bzw. *mit Wiedereintritt* zu importieren.

Um den Import zu ermöglichen, ist im Lohnverrechnungsprogramm eine Listenform mit den gewünschten Import-Daten und den entsprechenden Datei-Eigenschaften anzulegen.

Die tatsächlich zu importierende Datei muss sowohl vom Inhalt, als auch von der Reihenfolge und von den Datei-Eigenschaften, genau dieser Listenform entsprechen.

## Erstellen der Listenform

Im Programmteil *Bearbeiten / Datenimport* besteht die Möglichkeit, innerhalb der Abrechnungsvarianten *Import lfd. Abrechnung, Import Korrektur letzte Abrechnung, Import Aufrollung, Import Wiedereintritt, Import Neuanlage, Neuanlage Exekution, Import Bankdaten* eine Datenübernahme aus einer Datei vorzunehmen.

![Image](<img/image290.png>){width="500"}

Hier kann außerdem angewählt werden, ob es nach dem Import eine Abrechnungsvorschau geben soll. Es ist auch möglich, die Listenform *als Standard festzulegen*.

**Import lfd. Abrechnung**

Mit diesem Import können Sie Daten in die ausgewählte laufende Abrechnung übernehmen.

:::caution[Hinweis]
Wurde die laufende Abrechnung bereits durchgeführt, ist der Datenimport ausschließlich über die Funktion *Import Korrektur letzte Abrechnung* möglich.

:::
**Import Korrektur letzte Abrechnung**

Dieser Import wird verwendet, wenn bereits eine Abrechnung für den gewünschten Monat existiert und zusätzlich noch Änderungen importiert werden sollen.

**Import Aufrollung**

Korrekturen für vergangene Monate sind im Rahmen einer Aufrollung vorzunehmen. Über diesen Menüpunkt können Aufrollungsdaten in einen bereits abgerechneten Monat importiert werden.

**Import Wiedereintritt**

Über diesen Menüpunkt können Stammdaten bzw. Abrechnungsdaten eines Wiedereintritts importiert werden.

**Import Neuanlage**

Über diesen Menüpunkt können neue Dienstnehmer importiert und angelegt werden.

**Neuanlage Exekution**

Über diesen Menüpunkt können Exekutionen importiert und neu angelegt werden.

## Dialog Datenimport

![Image](<img/image291.png>){width="500"}

Es können nur jene Daten in das RZL-Lohnprogramm übernommen werden, die in der Listenform eingetragen sind. Die Eintragung der gewünschten Daten in die Listenform ist vom Anwender vorzunehmen. Durch Anwahl der Schaltfläche *Einstellungen* wird die Erstellung einer Listenform ermöglicht.

:::note[Tipp]
Im Feld Listenform kann durch Anwahl der *F3-Taste* die Liste beim Klienten *als Standard fixiert* werden. Mit der *F2-Taste* kann die Liste im Detail aufgerufen werden.

:::
![Image](<img/image292.png>){width="400"}

**Allgemein**

Die Zuordnung *Allgemein* bewirkt, dass sämtliche Netzarbeitsplätze die erstellte Liste verwenden können.

**Arbeitsplatz**

Wird die Liste mit der Zuordnung *Arbeitsplatz* erstellt, dann steht sie nur auf dem Arbeitsplatz zur Verfügung, auf dem sie erstellt wurde.

**Persönlich**

Wird als Zuordnung *Persönlich* ausgewählt, dann kann die Liste nur vom Ersteller selbst verwendet werden.

Durch Anwahl der Schaltfläche *Neu* (siehe oben) wird folgender Dialog aufgerufen:

![Image](<img/image293.png>){width="500"}

**Registerblatt Allgemein**

Im Registerblatt *Allgemein* werden der *Name* und ein eventueller *Kommentar* dazu eingetragen.

**Registerblatt Felder**

Im Registerblatt *Felder* findet die Auswahl der Daten, die in die Liste übernommen werden sollen, statt. Im Listenfeld *Felder* (am Bildschirm links) werden sämtliche Daten angezeigt, die importiert werden können.

![Image](<img/image294.png>){width="600"}

Durch Anwahl des +(plus)-Feldes vor dem jeweiligen Datenordner wird die darunterliegende hierarchische Datenstruktur geöffnet. Es werden jene Felder in die Listenform übernommen, die entweder mittels *Leertaste* oder *Maus* aktiviert werden. Die Aktivierung wird im Listenfeld *Felder* durch ein Häkchen im Kästchen vor den jeweiligen Datenordnern angezeigt.

:::caution[Hinweis]
Die Daten, die im Listenfeld *Listenform* eingetragen sind, können in der angezeigten Reihenfolge in das Lohnverrechnungsprogramm importiert werden.

:::
Wird die +(plus)-Struktur eines Datenordners nicht geöffnet (z. B. Sozialversicherung), dann werden durch Aktivierung des Kästchens sämtliche Felder, die sich hinter diesem Datenordner befinden, in die Listenform übertragen.

Im Listenfeld *Listenform* (am Bildschirm rechts) werden die ausgewählten Daten, die in die Liste eingetragen werden, angezeigt. Die Bewegung innerhalb der *Listenform* erfolgt entweder mit der *Maus*, mit der *Pfeil-nach-oben* oder der *Pfeil-nach-unten-Taste*. Durch Anwahl der Schaltfläche *Feld löschen* wird die im Listenfeld *Listenform* farblich hinterlegte Zeile gelöscht. Die Schaltfläche *Leerfeld* bewirkt das Einfügen einer Leerzeile. Dabei wird die farblich hinterlegte Zeile um eine Zeile nach unten verschoben.

:::note[Tipp]
Die Reihenfolge der Eintragung der zu importierenden Daten in das Listenfeld *Listenform* hängt von der Reihenfolge der Aktivierung der Daten im Listenfeld *Felder* ab. Die farblich hinterlegte Zeile kann durch Anwahl der *Nach-Oben*- oder *Nach-Unten-Schaltflächen* in eine andere Position in Bezug auf die Reihenfolge der Ausgabe gebracht werden.

:::
**Registerblatt Optionen**

Im Registerblatt *Optionen* werden die Eigenschaften der Importdatei festgelegt:

![Image](<img/image295.png>){width="500"}

- **Datenformat**

    Die Auswahl des Datenformates ANSI- oder ASCII hängt vom Programm, in dem die Import-Datei erzeugt wird, ab.

- **Feldtrennzeichen, Textbegrenzungszeichen**

    Als *Feldtrennzeichen* können *Strichpunkt, Komma, Leerzeichen, Tabulator* oder *Anderes* verwendet werden. Wird die Option *Anderes* angewählt, dann kann ein beliebiges *Feldtrennzeichen* eingetragen werden.

    Als *Textbegrenzungszeichen* können *Anführungszeichen, Hochkomma* oder *kein* (Textbegrenzungszeichen) verwendet werden.

- **Spaltenüberschriften generieren**

    Beinhaltet die zu übernehmende Datei Spaltenüberschriften, dann ist dieses Auswahlfeld zu aktivieren.

Nach der Festlegung der einzelnen Felder und des Formates der Import-Datei in den jeweiligen Registerblättern, wird durch Anwahl der Schaltfläche *Neu* die erstellte Liste im Ausgangsdialog (siehe oben) in den Bereich *Auswahl Listenform* eingetragen.

<span id="durchfuhrung-des-datenimports" class="legacy-anchor" aria-hidden="true"></span>
## Durchführung des Datenimports

Der Datenimport kann für die Abrechnungsarten *lfd. Abrechnung, Korrektur letzte Abrechnung, Wiedereintritt, Neuanlage, Neuanlage Exekution* und *Import Bankdaten* durchgeführt werden.

Der Import der Daten vollzieht sich für alle sechs Abrechnungsarten gleich:

![Image](<img/image296.png>){width="500"}

Im Feld *Monat* ist der Monat einzutragen, in dem der Datenimport durchgeführt werden soll.

Bei einer *automatischen Übernahme* werden die Daten ohne Korrekturmöglichkeit importiert. Wird das Auswahlfeld *Abrechnungsvorschau* angewählt, dann wird zumindest das Ergebnis des Imports (ohne Korrekturmöglichkeit) am Bildschirm angezeigt.

Bei der *benutzergesteuerten Übernahme* gelangt man in die Abrechnungsbildschirme der Dienstnehmer und kann die importierten Daten überprüfen bzw. Korrekturen vornehmen.

Wird das Auswahlfeld *Protokoll drucken* angewählt, werden die importierten Dienstnehmer angeführt oder eventuelle Nichtübernahmen bzw. Fehlermeldungen angezeigt.

Zusätzlich wird durch Anwahl des Auswahlfeldes *Dateiinhalt drucken* der Inhalt der importierten Datei entweder in *Tabellendarstellung* oder in *Detaildarstellung* angezeigt. Hier ist es auch möglich, eine Kurzfassung zu drucken.

Im Listenfeld *Listenform* ist die angelegte Listenform einzutragen. Diese Listenform muss in Inhalt, Reihenfolge und Dateieigenschaften genau mit der zu übernehmenden Datei übereinstimmen (Erstellung von Listenformen siehe oben).

Im Bereich *Auswahl Importdatei* kann die zu importierende Datei durch Anwahl der Schaltfläche *Suchen* gesucht und eingetragen werden.

Die Anwahl der Schaltfläche *Importieren* bewirkt den Import der ausgewählten Datei.

## Datenimport Bankdaten

Wie bei [Datenexport Bankdaten](/lohn/datenexport/#datenexport-bankdaten) beschrieben, kann eine Exportdatei erstellt werden. Die Datei, die das Kreditinstitut zurückschickt (inkl. IBAN/BIC), kann im Programmteil *Bearbeiten / Datenimport / Import Bankdaten* in die Lohnverrechnung übernommen werden. Das bedeutet, dass bei den einzelnen Bankverbindungen IBAN und BIC automatisch ergänzt werden.

![Image](<img/image297.png>){width="500"}

**Bestehende IBAN/BIC beim Import überschreiben**

Wird dieses Feld aktiviert, werden bereits existierende IBAN/BIC durch die Daten in der Import-Datei ersetzt.

**Auswahl der Bankverbindungen**

In diesem Bereich können bestimmte Bereiche deaktiviert werden. Wenn ein Feld kein Häkchen aufweist, werden die Bankdaten dieses Bereiches nicht importiert.

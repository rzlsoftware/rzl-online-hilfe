# Erstellen der Listenform

Im Programmteil *Bearbeiten / Datenimport* besteht die Möglichkeit, innerhalb der Abrechnungsvarianten *Import lfd. Abrechnung, Import Korrektur letzte Abrechnung, Import Wiedereintritt, Import Neuanlage, Neuanlage Exekution, Import Bankdaten* eine Datenübernahme aus einer Datei zu übernehmen.

![Image](<img/image290.png>){width="500"}

Hier kann außerdem angewählt werden, ob es nach dem Import eine Abrechnungsvorschau geben soll. Es ist auch möglich, die Listenform *als Standard festzulegen*.

**Import Korrektur letzte Abrechnung**

Dieser Import wird verwendet, wenn bereits eine Abrechnung für den gewünschten Monat existiert und zusätzlich noch Änderungen importiert werden sollen.

**Import Wiedereintritt**

Über diesen Menüpunkt können Stammdaten bzw. Abrechnungsdaten eines Wiedereintritts importiert werden.

![Image](<img/image291.png>){width="500"}

Es können nur jene Daten in das RZLWin-Lohnprogramm übernommen werden, die in der Listenform eingetragen sind. Die Eintragung der gewünschten Daten in die Listenform ist vom Anwender vorzunehmen. Durch Anwahl der Schaltfläche *Einstellungen* wird die Erstellung einer Listenform ermöglicht.

!!! info "Tipp"
    Im Feld Listenform kann durch Anwahl der *F3-Taste* die Liste beim Klienten *als Standard fixiert* werden. Mit der *F2-Taste* kann die Liste im Detail aufgerufen werden.

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

Im Registerblatt *Allgemein* wird der *Name* und ein eventueller *Kommentar* dazu eingetragen.

**Registerblatt Felder**

Im Registerblatt *Felder* findet die Auswahl der Daten, die in die Liste übernommen werden sollen, statt. Im Listenfeld *Felder* (am Bildschirm links) werden sämtliche Daten angezeigt, die importiert werden können.

![Image](<img/image294.png>){width="600"}

Durch Anwahl des +(plus)-Feldes vor dem jeweiligen Datenordner wird die darunterliegende hierarchische Datenstruktur geöffnet. Es werden jene Felder in die Listenform übernommen, die entweder mittels *Leertaste* oder *Maus* aktiviert werden. Die Aktivierung wird im Listenfeld *Felder* durch ein Häkchen im Kästchen vor den jeweiligen Datenordnern angezeigt.

!!! warning "Hinweis"
    Die Daten, die im Listenfeld *Listenform* eingetragen sind, können in der angezeigten Reihenfolge in das Lohnverrechnungsprogramm importiert werden.

Wird die +(plus)-Struktur eines Datenordners nicht geöffnet (z. B. Sozialversicherung), dann werden durch Aktivierung des Kästchens sämtlich Felder, die sich hinter diesem Datenordner befinden, in die Listenform übertragen.

Im Listenfeld *Listenform* (am Bildschirm rechts) werden die ausgewählten Daten, die in die Liste eingetragen werden, angezeigt. Die Bewegung innerhalb der *Listenform* erfolgt entweder mit der *Maus*, mit der *Pfeil-nach-oben* oder der *Pfeil-nach-unten-Taste*. Durch Anwahl der Schaltfläche *Feld löschen* wird die im Listenfeld *Listenform* farblich hinterlegte Zeile gelöscht. Die Schaltfläche *Leerfeld* bewirkt das Einfügen einer Leerzeile, dabei wird die farblich hinterlegte Zeile um eine Zeile nach unten verschoben.

!!! info "Tipp"
    Die Reihenfolge der Eintragung der zu importierenden Daten in das Listenfeld Listenform hängt von der Reihenfolge der Aktivierung der
Daten im Listenfeld *Felder* ab. Die farblich hinterlegte Zeile kann durch Anwahl der *Nach-Oben*- oder *Nach-Unten-Schaltflächen* in eine andere Position, in Bezug auf die Reihenfolge der Ausgabe, gebracht werden.

**Registerblatt Optionen**

Im Registerblatt *Optionen* werden die Eigenschaften der Importdatei festgelegt:

![Image](<img/image295.png>){width="500"}

*Datenformat*

Die Auswahl des Datenformates ANSI- oder ASCII hängt vom Programm, in dem die Import-Datei erzeugt wird, ab.

*Feldtrennzeichen, Textbegrenzungszeichen*

Als *Feldtrennzeichen* können *Strichpunkt, Komma, Leerzeichen, Tabulator* oder *Anderes* verwendet werden. Wird die Option *Anderes* angewählt, dann kann ein beliebiges *Feldtrennzeichen* eingetragen werden.

Als *Textbegrenzungszeichen* können *Anführungszeichen, Hochkomma* oder *kein* (Textbegrenzungszeichen) verwendet werden.

*Spaltenüberschriften generieren*

Beinhaltet die zu übernehmende Datei Spaltenüberschriften, dann ist dieses Auswahlfeld zu aktivieren.

Nach der Festlegung der einzelnen Felder und des Formates der Import-Datei in den jeweiligen Registerblättern, wird durch Anwahl der Schaltfläche *Neu* die erstellte Liste im Ausgangsdialog (siehe oben) in den Bereich *Auswahl Listenform* eingetragen.
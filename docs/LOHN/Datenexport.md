# Datenexport

## Allgemeines

Im Programmteil *Bearbeiten / Datenexport / Datenexport* können Dienstnehmer-Daten aus der Lohnverrechnung exportiert werden. Je nach Format der Export-Datei kann diese in verschiedenen Anwendungen verwendet werden (z. B. Word, Excel). Es können mehrere Listen mit unterschiedlichen Export-Daten erstellt werden. Diese Listen können nach Erstellung *klientenübergreifend* angewendet werden.

Nach Anwahl des Menüpunktes *Bearbeiten / Datenexport / Datenexport* wird folgender Dialog aufgerufen:

![Image](<img/image282.png>){width="500"}

Als erster Schritt ist im Eingabefeld *Monate einzeln von,* der Zeitraum anzuwählen, für den der Datenexport erfolgen soll.

Der Export der Daten kann für einzelne Dienstnehmer, für den gesamten Klienten oder für einzelne Unterdienstgeber, falls vorhanden, erfolgen. Ist das Auswahlfeld *Aufrolldifferenzen in laufendem Monat* aktiviert, werden etwaige Differenzen aus Aufrollungen im laufenden Monat berücksichtigt.

Der Dialogbereich *Auswahl Listenform* dient der Erstellung und Auswahl der Listenform. In diese Listen werden die zu exportierenden Daten eingetragen.

Die Anwahl des Feldes *Summierung ab Monat* hat nur eine Auswirkung, wenn in der Listenform (siehe unten) im Ordner *Summen*, das entsprechende Feld zusätzlich angewählt wurde.

!!! info "Tipp"
    Im Feld *Listenform* kann durch Anwahl der *F3-Taste* die Liste beim Klienten als Standard fixiert werden. Mit der *F2-Taste* kann die Liste im Detail aufgerufen werden.

## Erstellung / Aufbau der Daten-Liste (Export-Datei)

Die Auswahl der zu exportierenden Daten erfolgt im Dialogbereich *Auswahl Listenform*. Die Zuordnung der bereits angelegten Listenformen kann *Allgemein, Arbeitsplatz* oder *Persönlich* sein.

**Allgemein**

Die Zuordnung *Allgemein* bewirkt, dass sämtliche Netzarbeitsplätze die erstellte Liste verwenden können.

**Arbeitsplatz**

Wird die Liste mit der Zuordnung *Arbeitsplatz* erstellt, dann steht sie nur auf dem Arbeitsplatz zur Verfügung, auf dem sie erstellt wurde.

**Persönlich**

Wird als Zuordnung *Persönlich* ausgewählt, dann kann die Liste nur vom Ersteller selbst verwendet werden.

Nach Auswahl der gewünschten Zuordnung ist die Schaltfläche *Einstellungen* anzuwählen und es wird folgender Dialog aufgerufen:

![Image](<img/image283.png>)

In den Registerblättern *Allgemein, Arbeitsplatz, Persönlich* sind die bereits erstellten Listen eingetragen. Durch Anwahl der Schaltfläche *Ändern* kann eine bereits erstellte Liste bearbeitet werden. Durch Anwahl der Schaltfläche *Löschen* wird die im jeweiligen Registerblatt farblich hinterlegte (markierte) Liste gelöscht.

Zur Erstellung einer Liste ist die Schaltfläche *Neu* anzuwählen und es wird folgender Dialog aufgerufen:

![Image](<img/image284.png>){width="500"}

**Registerblatt Allgemein**

Im Registerblatt *Allgemein* werden der *Name* und ein eventueller *Kommentar* eingetragen.

**Registerblatt Felder**

Im Registerblatt *Felder* findet die Auswahl der Daten, die in die Liste übernommen werden sollen, statt. Im Listenfeld *Felder* (am Bildschirm links) werden sämtliche Daten angezeigt, die exportiert werden können. Ein Großteil der Daten der einzelnen Abrechnungsbildschirme kann zum Exportieren ausgewählt werden.

![Image](<img/image285.png>){width="600"}

Durch Anwahl des +(plus)-Feldes vor dem jeweiligen Datenordner wird die darunterliegende hierarchische Datenstruktur geöffnet. Es werden jene Felder in die Listenform übernommen, die entweder mittels *Leertaste* oder *Maus* aktiviert werden. Die Aktivierung wird im Listenfeld *Felder* durch ein Häkchen im Kästchen vor den jeweiligen Datenordnern angezeigt.

Wird die +(plus)-Struktur eines Datenordners nicht geöffnet (z. B. Stammdaten), dann werden durch Aktivierung des Kästchens sämtliche Felder, die sich hinter diesem Datenordner befinden, in die Listenform übertragen.

Im Listenfeld *Listenform* (am Bildschirm rechts) werden die ausgewählten Daten, die in die Liste eingetragen werden, angezeigt. Die Bewegung innerhalb der *Listenform* erfolgt entweder mit der *Maus*, mit der *Pfeil-nach-oben* oder der *Pfeil-nach-unten-Taste*. Durch Anwahl der Schaltfläche *Feld löschen* wird im Listenfeld *Listenform* die farblich hinterlegte Zeile gelöscht. Die Schaltfläche *Leerfeld* bewirkt, dass das Einfügen einer Leerzeile erfolgt. Dabei wird die farblich hinterlegte Zeile um eine Zeile nach unten verschoben.

!!! info "Tipp"
    Die Reihenfolge der Eintragung der zu exportierenden Daten in das Listenfeld *Listenform* hängt von der Reihenfolge der Aktivierung der Daten im Listenfeld *Felder* ab. Die farblich hinterlegte Zeile kann durch Anwahl der *Nach-Oben*- oder *Nach-Unten-Schaltflächen* in eine andere Position in Bezug auf die Reihenfolge der Ausgabe gebracht werden.

**Registerblatt Optionen**

Im Registerblatt *Optionen* werden die Eigenschaften der Exportdatei festgelegt:

![Image](<img/image286.png>){width="500"}

- **Datenformat**

    Die Auswahl des Datenformates ANSI (Windows) oder ASCII (DOS) hängt vom Programm, mit dem die exportierten Daten weiterverarbeitet werden, ab.

- **Feldtrennzeichen, Textbegrenzungszeichen**

    Als *Feldtrennzeichen* können *Strichpunkt, Komma, Leerzeichen, Tabulator* oder *anderes* verwendet werden. Wird die Option *Anderes* angewählt, dann kann ein beliebiges *Feldtrennzeichen* eingetragen werden.

    Als *Textbegrenzungszeichen* können *Anführungszeichen, Hochkomma* oder *kein* (Textbegrenzungszeichen) verwendet werden.

- **Spaltenüberschriften generieren**

    Wird das Auswahlfeld *Spaltenüberschriften* aktiviert, dann werden die jeweiligen Überschriften mit exportiert und im jeweiligen Import-Programm angezeigt.

Nach der Festlegung der einzelnen Felder und des Formates der Export-Datei in den jeweiligen Registerblättern, wird durch Anwahl der Schaltfläche *Neu* die erstellte Liste im Ausgangsdialog (siehe oben) in den Bereich *Auswahl Listenform* eingetragen.

## Datenexport

Der Datenexport erfolgt im unteren Bereich des Export-Dialoges. Zuerst ist im Bereich *Auswahl Listenform* eine der erstellten Listenformen auszuwählen. Dann sind der Pfad und der Name der Export-Datei einzutragen oder mittels der Schaltfläche *Suchen* festzulegen.

![Image](<img/image287.png>){width="500"}

Nach Auswahl der Export-Datei ist die Schaltfläche *Exportieren* anzuwählen. Der erfolgreiche Export wird mit folgender Meldung durch das Programm bestätigt.

![Image](<img/image288.png>){width="350"}

## Datenexport Bankdaten

Im Programmteil *Bearbeiten / Datenexport / Bankdaten* können die Bankverbindungen, die innerhalb des Klienten gespeichert sind, 
exportiert werden. Die erstellte Datei kann an das Bankinstitut (siehe Bildschirm unten) übermittelt werden. In Zusammenarbeit mit dem Bankinstitut mit der Stuzza (Studiengesellschaft für Zusammenarbeit im Zahlungsverkehr) werden die Daten geprüft und werden die BLZ und die Kontonummer in BIC und IBAN umgewandelt. Die Datei wird anschließend vom Kreditinstitut retourniert und kann in der Lohnverrechnung im Programmteil *Bearbeiten / Datenimport / Bankdaten* hereingespielt werden.

![Image](<img/image289.png>){width="500"}

**Dateiname**

In diesem Feld muss, am besten mit Hilfe der Schaltfläche *Durchsuchen*, festgelegt werden, wohin die Datei gespeichert wird und wie diese Datei heißen soll.

**Eigene Kontoverbindung (Kontoverbindung des Fragenden)**

Im Bereich *Eigene Kontoverbindung* müssen die Bankleitzahl und die Kontonummer des Absenders der erstellten Datei eingetragen werden.

**Bestehende IBAN/BIC nicht exportieren**

Wenn dieses Feld aktiviert wird, werden bereits existierende IBAN/BIC nicht in die Datei übernommen.

**Auswahl der Bankverbindungen**

In diesem Bereich können bestimmte Bereiche deaktiviert werden. Wenn ein Feld kein Häkchen aufweist, werden die Bankdaten dieses Bereiches nicht exportiert.
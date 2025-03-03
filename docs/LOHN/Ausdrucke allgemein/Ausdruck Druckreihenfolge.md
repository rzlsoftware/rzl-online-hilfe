# Ausdruck Druckreihenfolge

Im Programmteil *Ausdruck / Druckreihenfolge* kann eine Liste mit den benötigten Ausdrucken erstellt werden (z. B. Abrechnungen, Lohnjournal, Auszahlungsjournal). Diese erstellte Liste braucht dann nur mehr angewählt werden und die gewünschten Ausdrucke erfolgen in der festgelegten Reihenfolge.

Die Druckreihenfolge kann auch klientenübergreifend im Programmteil *Klient / Drucken / Druckreihenfolge* verwendet bzw. erstellt werden.

![Image](<img/image235.png>){width="500"}

Die Registerblätter beinhalten die Druckoptionen für die einzelnen möglichen Ausdrucke der Druckreihenfolge. Die eingestellten Druckoptionen können durch Anwahl der Schaltfläche *Optionen speichern* (rechts oben) abgespeichert werden.

!!! warning "Hinweis"
    Soll für die Anzahl der Ausdrucke auf die Einstellungen der Druckformatvorlagen zugegriffen werden, ist bei Anzahl der Ausdrucke 0 (null) einzutragen.

!!! info "Tipp"
    Im Feld *Druckreihenfolge* kann durch Anwahl der *F3-Taste* die Liste beim Klienten als Standard fixiert werden. Mit der *F2-Taste* kann die Liste im Detail aufgerufen werden.

Durch Anwahl der Schaltfläche *Drucken* wird die ausgewählte Druckreihenfolge mit den einzelnen Ausdrucken, die diese Druckreihenfolge beinhaltet, in der festgelegten Reihenfolge ausgedruckt.

## Erstellung / Aufbau der Druckreihenfolge

Die Auswahl der zu exportierenden Daten erfolgt im Bereich *Druckreihenfolge*. Im Bereich *Zuordnung* wird die Verfügbarkeit der Druckreihenfolge angezeigt.

**Allgemein**

Die Zuordnung *Allgemein* bewirkt, dass sämtliche Netzarbeitsplätze die erstellte Druckreihenfolge verwenden können.

**Arbeitsplatz**

Wird die Druckreihenfolge mit der Zuordnung *Arbeitsplatz* erstellt, dann steht sie nur auf dem Arbeitsplatz zur Verfügung, auf dem sie erstellt wurde.

**Persönlich**

Wird als Zuordnung *Persönlich* ausgewählt, dann kann die Druckreihenfolge nur vom Ersteller selbst verwendet werden.

Nach Auswahl der gewünschten Zuordnung ist die Schaltfläche *Einstellungen* anzuwählen und es wird folgender Dialog aufgerufen:

![Image](<img/image236.png>){width="300"}

In den Registerblättern *Allgemein, Arbeitsplatz, Persönlich* sind die bereits erstellten Listen eingetragen. Durch Anwahl der Schaltfläche *Ändern* kann eine bereits erstellte Liste bearbeitet werden. Durch Anwahl der Schaltfläche *Löschen* wird die im jeweiligen Registerblatt farblich hinterlegte (markierte) Liste gelöscht.

Zur Erstellung einer Liste ist die Schaltfläche *Neu* anzuwählen und es wird folgender Dialog aufgerufen:

![Image](<img/image237.png>){width="500"}

**Registerblatt Allgemein**

Im Registerblatt *Allgemein* wird der Name und ein eventueller Kommentar dazu eingetragen.

**Registerblatt Felder**

Im Registerblatt *Felder* findet die Auswahl der Ausdrucke, die in die Druckreihenfolge übernommen werden sollen, statt. Im Listenfeld *Felder* (am Bildschirm links) werden sämtliche Ausdrucke angezeigt, die ausgewählt werden können.

![Image](<img/image238.png>){width="500"}

Durch Anwahl des +(plus)-Feldes vor dem jeweiligen Datenordner wird die darunterliegende hierarchische Datenstruktur geöffnet. Es werden jene Felder in die Druckreihenfolge übernommen, die entweder mittels *Leertaste* oder *Maus* aktiviert werden. Die Aktivierung wird im Listenfeld *Felder* durch ein Häkchen im Kästchen vor den jeweiligen Datenordnern angezeigt.

Wird die +(plus)-Struktur eines Datenordners nicht geöffnet (z. B. Stammdaten), dann werden durch Aktivierung des Kästchens sämtlich Felder, die sich hinter diesem Datenordner befinden, in die Listenform übertragen.

Im Listenfeld *Listenform* (am Bildschirm rechts) werden die ausgewählten Daten, die in die Liste eingetragen werden, angezeigt. Die Bewegung innerhalb der *Listenform* erfolgt entweder mit der *Maus*, mit der *Pfeil-nach-oben* oder der *Pfeil-nach-unten-Taste*. Durch Anwahl der Schaltfläche *Feld löschen* wird die im Listenfeld *Listenform* farblich hinterlegte Zeile gelöscht. Die Schaltfläche *Leerfeld* bewirkt das Einfügen einer Leerzeile, dabei wird die farblich hinterlegte Zeile um eine Zeile nach unten verschoben.

!!! info "Tipp"
    Die Reihenfolge der Eintragung der Ausdrucke in das Listenfeld *Listenform* hängt von der Reihenfolge der Aktivierung der Ausdrucke im Listenfeld *Felder* ab. Die farblich hinterlegte Zeile kann durch Anwahl der *Nach-Oben-* oder *Nach-Unten*-Schaltflächen in eine andere Position in Bezug auf die Reihenfolge der Ausgabe gebracht werden.
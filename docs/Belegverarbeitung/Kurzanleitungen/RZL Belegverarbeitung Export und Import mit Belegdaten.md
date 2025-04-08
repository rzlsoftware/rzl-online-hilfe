# Belege mit XML-Belegdaten exportieren und in andere Installationen importieren

## RZL Belegverarbeitung Export und Import von Belegen mit Belegdaten


### 1. Export von Belegen mit Belegdaten


Sowohl im klientenübergreifenden Bereich *BOARD / Belege* als auch innerhalb eines geöffneten Klienten haben Sie im RZL Board in der Belegverarbeitung die Möglichkeit, Belege mit Belegdaten zu exportieren (1). Mit Hilfe dieser Funktion können Sie Belege zwischen unterschiedlichen RZL Installationen austauschen. Die Verknüpfung der gebuchten Belege zu den Buchungssätzen in der RZL FIBU / EA bleibt dabei erhalten. Es spielt dabei keine Rolle, ob die aktuelle Buchhaltung bereits hereingespielt wurde. Dies kann ebenso erst nach dem Import der Belege erfolgen.

Folgende Funktionen stehen zur Verfügung:
• Alle markierten Belege exportieren: „Ausgewählte Belege exportieren“
• Alle Belege, die aufgrund der gesetzten Filter angezeigt werden: „Gefilterte Belege exportieren“
• Alle Belege dieses Klienten: „Alle Belege exportieren“


![Image](<img/image-5.png>)


Der Export der Belege ist in allen Ansichten *(Ungebuchte Belege/Gebuchte Belege)* möglich. Um mehrere Belege zu exportieren, müssen Sie diese vor Auswahl der Funktion markieren (mittels Strg oder Umschalt-Taste und Klick auf die gewünschten Belege).

Nach Auswahl der Funktion *Belege exportieren / Belege mit Belegdaten exportieren* öffnet sich ein Speicherdialog. Dort haben Sie die Möglichkeit, über die Pfeiltaste (2) Platzhalter für den Dateinamen der Belege zu vergeben. Ein gesetzter Platzhalter setzt die Belegdaten des jeweiligen Belegs in den generierten Dateinamen.

Über die Auswahl *Vorschläge* werden von uns ein paar mögliche Kombinationen von Platzhaltern vorgeschlagen.


![Image](<img/image-6.png>)


Die ausgewählten Platzhalter sollten idealerweise je Beleg eindeutig sein. Sollte dies nicht der Fall sein, werden Belege mit gleichlautendem Dateinamen fortlaufend durchnummeriert ((1), (2), (3),…).

Im gewählten Speicherort finden Sie nach erfolgreichem Export zwei Dateien (3) pro Beleg. Die Belegdaten zum jeweiligen Beleg werden in einer XML Datei mit gleichem Dateinamen mitgespeichert.


![Image](<img/image-7.png>)


### 2. Import von Belegen mit Belegdaten

Möchten Sie Belege mit Belegdaten in die Belegverarbeitung im RZL Board importieren, ist entscheidend, dass zum jeweiligen Beleg auch eine XML Datei mit den Belegdaten vorhanden ist (siehe Abbildung 3). Ohne diese XML Datei können Belege nicht ins RZL Board importiert werden.

Der Import von Belegen finden Sie im RZL Board im Bereich BELEGE im Menüpunkt *Extras / Belege mit XML importieren* (4).


![Image](<img/image-8.png>)


Es öffnet sich ein Dialog zum Auswählen des Ordners. Hier ist nun der Ordner auszuwählen, in dem die exportierten Belege samt Belegdaten abgelegt wurden. Im unteren Bereich wird eine Liste der gefundenen Belege angezeigt. Über die Schaltfläche *Prüfen und Importieren* (5) können Sie die Belege in die RZL Belegverarbeitung importieren. Nach erfolgreichem Import erhalten Sie in diesem Dialog die Informationen, ob der Import erfolgreich 
war.

Beim Import ist es wichtig, dass der richtige Klient zu den Belegen im RZL Board gefunden wird. Kann diese Zuordnung nicht eindeutig getroffen werden, erhalten Sie nach dem Start des Importvorgangs einen weiteren Dialog. Dort werden Sie aufgefordert, den jeweiligen Klienten zu den entsprechenden Belegen zuzuordnen. Die Zuordnung muss jeweils nur beim Import des ersten Belegs getroffen werden – für die weiteren Belege wird diese gesetzte Klientenzuordnung dann automatisch getroffen.

In der RZL FIBU / EA kann nun wieder auf die Belege zugegriffen werden.


![Image](<img/image-9.png>)


# Anlage von Lohn-Formeln

Anschließend kann im Programmteil *Stamm / Lohn-Formeln* mit der Anlage der Lohn-Formeln begonnen werden.

![Image](<img/image374.png>){width="500"}

Im Feld *Nummer* ist eine laufende Nummer für die Lohn-Formeln einzutragen und im Feld *Name* wird die Lohnformel bezeichnet.

Der *Gültig **ab** Zeitraum* ist ein Pflichtfeld. Die Lohnformel kann ab dem eingetragenen Monat angewendet werden.

Der *Gültig **bis** Zeitraum* muss normalerweise nicht befüllt werden. Nur in Ausnahmefällen wird es hier zu einer Erfassung kommen.

Bei der Lohnformel-Eingabe selbst wurden keine Änderungen vorgenommen.

Bei allen bereits vorhandenen Lohnformeln wurde als Gültig ab Zeitraum der 01.2000 gewählt.

![Image](<img/image375.png>)

## Veränderung einer Lohnformel ab einem gewissen Zeitpunkt

Kommt es zu einer Veränderung einer Lohnformel ab einem bestimmten Monat und Jahr, muss nicht wie ursprünglich eine neue Lohnformel und Lohnformel-Nummer vergeben werden. Es gibt die Möglichkeit, durch das Anklicken von *Neue Version*, die Lohnformel ab einem bestimmten Zeitpunkt zu ändern:

![Image](<img/image376.png>)

Markieren Sie die zu ändernde Lohnformel und klicken Sie auf *Neue Version*.

Es ändert sich nun der Bildschirm wie folgt:

![Image](<img/image377.png>)

Sie können nun einen neuen *Gültig **ab** Zeitraum* erfassen und die Lohnformel entsprechend abändern.

Durch Anwahl *Alle Versionen* sehen Sie alle Versionen der Lohnformel im oberen Bereich.

![Image](<img/image378.png>)

![Image](<img/image379.png>)

Der *Gültig **bis** Zeitraum* bei der vorherigen Lohnformel wird automatisch mit dem Monat vor dem neuen Zeitraum der geänderten Lohnformel befüllt. Somit wird die erste Lohnformel in unserem Beispiel bis Mai verwendet und die geänderte Lohnformel ab dem Monat Juni. Zur Absicherung kann die erste Lohnformel bis Mai nach der neuen Version nicht mehr abgeändert werden.

## Duplizieren

Lohnformeln können dupliziert werden. Markieren Sie die zu duplizierende Lohnformel und klicken Sie auf der rechten Seite auf *Duplizieren*.

![Image](<img/image380.png>)

![Image](<img/image381.png>)

Durch Eingabe der neuen Nummer wird ein Duplikat dieser Lohnformel erzeugt. Sie müssen das Feld *Formel Name* abändern und den *Gültig **ab** Zeitraum* entsprechend anpassen oder stehen lassen.

![Image](<img/image382.png>){width="500"}

!!! warning "Hinweis"
    Der Name darf keine Leerzeichen oder Sonderzeichen enthalten, da Formeln auch als Subformeln verwendet werden können. D. h. innerhalb einer anderen Lohnformel kann auf bereits bestehende Lohnformeln zugegriffen werden.

Zunächst ist der gewünschte Parameter mittels Doppelklick zu aktivieren (hier: Durchschnitt) und anschließend die *F2-Taste* anzuwählen.

Im nächsten Schritt wird festgelegt, mit welchen Werten (Lohnarten fix oder frei, Bemessungen) gerechnet werden soll.

## Aufruf Lohnarten/Bemessungen – Fixe Lohnarten

![Image](<img/image383.png>){width="400"}

Durch Anwahl der Schaltfläche *Übernehmen* wird die aktivierte Lohnart (hier Lohn/Gehalt, Erschwerniszulage und Auslandstätigkeit) in das Formelfeld eingetragen.

**Freie Lohnarten**

![Image](<img/image384.png>){width="400"}

Durch Anwahl der Schaltfläche *Übernehmen* wird die aktivierte Lohnart (hier Auslandstätigkeit frei) in das Formelfeld eingetragen.

**Aufruf Bemessungen**

![Image](<img/image385.png>){width="400"}

Durch Anwahl der Schaltfläche *Übernehmen* wird die aktivierte Lohnart (hier Bem. SZ ohne Überstunden (fixe LA) Nr. 2012) in das Formelfeld eingetragen.

![Image](<img/image386.png>){width="500"}

Für die Berechnung des Durchschnittes wird dem Programm in der Klammer nach dem Wort *Durchschnitt* der Zeitraum für die Durchschnittsberechnung (-2:0) für 3 Monate (aktueller Monat und 2 Vormonate) eingetragen.

![Image](<img/image387.png>){width="400"}

Für die Aliquotierung der Sonderzahlung wird die Formel *TageSZ / ZR().TageKalenderjahr* (für unterjährige Ein- oder Austritte) eingetragen.

![Image](<img/image388.png>){width="400"}

Wenn die Lohn-Formel vollständig eingetragen wurde, kann diese durch Anwahl der Schaltfläche *Speichern* abgespeichert werden.

![Image](<img/image389.png>){width="500"}

## Aufruf RZL Lohn-Formel-Vorlagen

!!! warning "Hinweis"
    Wenn im Feld *Formel* die *F2-Taste* angewählt wird, werden 2 vorgegebene Formeln (siehe unten) für die Sonderzahlungsberechnung aufgerufen und können verwendet werden (3 Monatsschnitt und 6 Monatsschnitt-Sonderzahlungsberechnung).

![Image](<img/image390.png>){width="500"}
# Datenübernahme

Die Honorarverrechnung ermöglicht durch Anwahl des Programmteils
*Datenübernahme / Datenimport* den Import von Tätigkeiten aus einer CSV-
Datei. Um den erfolgreichen Import zu gewährleisten, muss die
Importdatei genau dem Format laut Schnittstellenbeschreibung
entsprechen.

## Datenimport Tätigkeiten

Im Feld *Dateiname* können Sie mit den drei Punkten **(1)** die zu
importierende Datei auswählen. Mit der Lupe **(2)** können Sie sich die
Datei vor dem Import nochmals ansehen.

Vorab wird empfohlen, eine Vorprüfung **(3)** durchzuführen, somit werden
Sie gleich auf etwaige Probleme hingewiesen. Nach der erfolgreichen
Vorprüfung können Sie mit der Schaltfläche *Prüfen und Importieren*
**(4)** die Tätigkeiten in die Honorarverrechnung holen.

Folgende Ergebnisse kann die Prüfung liefern:

![](<img/image150.png>) Info – Dies erhalten Sie,
wenn z. B. es die hinterlegte Verrechnungsgruppe noch nicht gibt und
diese angelegt wird. Der Import kann dennoch durchgeführt werden.

![](<img/image151.png>) Fehler – Der Import kann
nicht durchgeführt werden. Die Importdatei muss dementsprechend
angepasst werden. Das Programm zeigt eine genaue Fehlerbeschreibung.


![](<img/image405.png>)

!!! warning "Hinweis"
    Im Zuge des Imports von Tätigkeiten werden sämtliche Tätigkeiten neu
    angelegt. Bestehende Tätigkeiten können mit dem Import nicht
    überschrieben werden.

### Schnittstellenbeschreibung Import Tätigkeiten

Es werden nur Dateien im Format „CSV (Trennzeichen-getrennt)“
unterstützt. Jede einzelne Zeile wird von der nächsten durch die Zeichen
CR\LF getrennt.

Die Importdatei der Tätigkeiten muss wie folgt aufgebaut sein:

Für sämtliche in der folgenden Tabelle angeführten Felder muss eine
Spalte in der Importdatei reserviert werden. Die Spalte „Pflichtfeld“ in
der folgenden Tabelle gibt lediglich Auskunft, ob die jeweilige Spalte
verpflichtend mit Werten befüllt werden muss.

| *Nr* | *Datenfeld*                                 | *Pflichtfeld* | *Feldinhalt*                                                                                                                                                                       |
| ---- | ------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Nummer                                      | Ja            | Die Nummer der Tätigkeit im Bereich: 1-999999999; muss eindeutig sein                                                                                                              |
| 2    | Bezeichnung                                 | Ja            | Die interne Bezeichnung der Tätigkeit, welche im Programm verwendet wird, ist auf maximal 40 Zeichen beschränkt und muss eindeutig sein                                            |
| 3    | Bezeichnung In Note                         | Ja            | Die Bezeichnung der Tätigkeit, welche auf der Note gedruckt wird, kann mehr als 40 Zeichen enthalten                                                                               |
| 4    | Verrechnungsgruppe                          | Ja            | Die Verrechnungsgruppe zur der die Tätigkeit zugeordnet werden soll, ist auf maximal 40 Zeichen beschränkt                                                                         |
| 5    | Verrechnungsart                             | Ja            | Dieses Feld definiert die Verrechnungsart der Tätigkeit. Es stehen folgende Verrechnungsarten zur Verfügung: Stunden, Einheiten, StundenUndEinheiten, StundenOderEinheiten, Betrag |
| 6    | Verrechenbar                                | Nein          | **J**, wenn die Tätigkeit verrechenbar sein soll. Ansonsten **N** oder leer lassen                                                                                                 |
| 7    | USt-Pflichtig                               | Nein          | **J**, wenn die Tätigkeit umsatzsteuerpflichtig sein soll. Ansonsten **N** oder leer lassen                                                                                        |
| 8    | Außerhalb der Arbeitszeit                   | Nein          | **J**, wenn Leistungen der Tätigkeit außerhalb der Arbeitszeit sind. Ansonsten **N** oder leer lassen                                                                              |
| 9    | Nicht in Pauschale                          | Nein          | **J**, wenn Leistungen der Tätigkeit nicht durch Pauschalen gedeckt sein sollen. Ansonsten **N** oder leer lassen                                                                  |
| 10   | Betrag in Note                              | Nein          | **J**, wenn in den Honorarnoten Beträge dieser Tätigkeit gedruckt werden sollen. Ansonsten **N** oder leer lassen                                                                  |
| 11   | Urlaub                                      | Nein          | **J**, wenn es sich um eine Urlaubstätigkeit handelt. Ansonsten **N** oder leer lassen                                                                                             |
| 12   | Krankenstand                                | Nein          | **J**, wenn es sich um eine Krankenstandstätigkeit handelt. Ansonsten **N** oder leer lassen                                                                                       |
| 13   | Feiertag                                    | Nein          | **J**, wenn es sich um eine Feiertagstätigkeit handelt. Ansonsten **N** oder leer lassen                                                                                           |
| 14   | Spesen                                      | Nein          | **J**, wenn Leistungen der Tätigkeiten Spesen sind. Ansonsten **N** oder leer lassen                                                                                               |
| 15   | Projektzeitraum in Note                     | Nein          | **J**, wenn in den Honorarnoten Projektzeiträume dieser Tätigkeit gedruckt werden sollen. Ansonsten **N** oder leer lassen                                                         |
| 16   | Projektzeitraumeingabe verpflichtend        | Nein          | **J**, wenn bei der Erfassung von Leistungen auf diese Tätigkeit die Eingabe des Projektzeitraumes verpflichtend sein soll. Ansonsten **N** oder leer lassen                       |
| 17   | Uhrzeiteingabe verpflichtend                | Nein          | **J**, wenn bei der Erfassung von Leistungen auf diese Tätigkeit die Eingabe des Beginns und des Endes verpflichtend sind. Ansonsten **N** oder leer lassen                        |
| 18   | Texteingabe verpflichtend                   | Nein          | **J**, wenn bei der Erfassung von Leistungen auf diese Tätigkeit die Eingabe eines Textes verpflichtend ist. Ansonsten **N** oder leer lassen                                      |
| 19   | Erlöskonto                                  | Nein          | Bereich: 1-999999999; Das Erlöskonto wird beim Erstellen der Buchungssätze im Zuge des Finalisierens einer Note verwendet                                                          |
| 20   | Erlöskonto IG-Leistungen                    | Nein          | Bereich: 1-999999999; Das Erlöskonto wird beim Erstellen der Buchungssätze im Zuge des Finalisierens einer Note verwendet                                                          |
| 21   | Erlöskonto für Drittländer (Reverse Charge) | Nein          | Bereich: 1-999999999; Das Erlöskonto wird beim Erstellen der Buchungssätze im Zuge des Finalisierens einer Note verwendet                                                          |
| 22   | Kostenstelle                                | Nein          | Bereich: 1-999999999; Die Kostenstelle wird beim Erstellen der Buchungssätze im Zuge des Finalisierens einer Note verwendet                                                        |




## Datenimport Leistungen und Arbeitszeiten

Im HON Next können über den Menüpunkt *Datenübernahme / Datenimport*
zentral die Leistungen und Arbeitszeiten aller Mitarbeiter gesammelt
importiert werden.

!!! warning "Hinweis"
    Auch über *Leistungserfassung / Mitarbeiterübersicht / Datenimport* ist
    ein [Import der Arbeitszeiten und Leistungen](/HONNext/Mitarbeiterübersicht/Import%20Arbeitszeiten%20und%20Leistungen) möglich – hier muss jedoch der Import pro Mitarbeiter einzeln erfolgen.

Wählen Sie Leistungen oder Arbeitszeiten aus.

Im Feld *Dateiname* können Sie mit den drei Punkten **(1)** die zu
importierende Datei auswählen. Mit der Lupe **(2)** können Sie sich die
Datei vor dem Import nochmals ansehen.

Vorab wird empfohlen, eine Vorprüfung **(3)** durchzuführen, somit werden
Sie gleich auf etwaige Probleme hingewiesen. Nach der erfolgreichen
Vorprüfung können Sie mit der Schaltfläche *Prüfen und Importieren*
**(4)** die Leistungen und Arbeitszeiten in die Leistungserfassung der
Mitarbeiter bzw. ins HON Next holen.

Folgende Ergebnisse kann die Prüfung liefern:

![](<img/image150.png>) Info – Dies erhalten Sie,
wenn z. B. der Projektzeitraum im falschen Format ist und daher nicht
übernommen wird. Der Import kann dennoch durchgeführt werden.

![](<img/image151.png>) Fehler – Der Import kann
nicht durchgeführt werden. Die Importdatei muss dementsprechend
angepasst werden. Das Programm zeigt eine genaue Fehlerbeschreibung.


![](<img/image153.png>)

!!! warning "Hinweis"
    Mit der Option *Importdatei nach Übernahme löschen* wird die
    Importdatei nach erfolgreichem Import im hinterlegten Ordner gelöscht.

### Schnittstellenbeschreibung Datenimport Leistungen

Die importierten Leistungen werden als „freigegeben“ importiert. Es
können nur vollständige Leistungen importiert werden, das heißt, alle
Pflichtfelder müssen befüllt und in Ordnung sein. Bei unvollständigen
und/oder fehlerhaften Leistungen wird der Import abgebrochen und alle
fehlerhaften Zeilen werden im Protokoll angezeigt.

Die Importdatei der Leistungen muss wie folgt aufgebaut sein:


![](<img/image406.png>)

Das Datum und die Mitarbeiternummer sind Pflichtfelder. Die restlichen
Felder sind wie in der Leistungserfassung einzugeben. Nicht benötigte
Felder werden leer gelassen.

Es werden nur Dateien im Format „CSV (Trennzeichen-getrennt)“
unterstützt. Jede einzelne Zeile wird von der nächsten durch die Zeichen
CR\LF getrennt.

<table>
<colgroup>
<col style="width: 6%" />
<col style="width: 23%" />
<col style="width: 13%" />
<col style="width: 56%" />
</colgroup>
<thead>
<tr class="header">
<th>Nr.</th>
<th>Datenfeld</th>
<th>Pflichtfeld</th>
<th>Feldinhalt</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td>Erfassungsdatum</td>
<td>Ja</td>
<td>In der Form TT.MM.JJJJ (z.B.: 01.01.2022)</td>
</tr>
<tr class="even">
<td>2</td>
<td>Mitarbeiternummer</td>
<td>Ja</td>
<td>Nummer des Mitarbeiters</td>
</tr>
<tr class="odd">
<td>3</td>
<td>Tätigkeitsnummer</td>
<td>Ja</td>
<td>Nummer der Tätigkeit</td>
</tr>
<tr class="even">
<td>4</td>
<td>Klientennummer</td>
<td>Abhängig</td>
<td>Nummer des Klienten</td>
</tr>
<tr class="odd">
<td>5</td>
<td>Projektzeitraum</td>
<td>Abhängig</td>
<td>Angabe des Projektzeitraumes in der Form JJ (Jahr), JJJJ (Jahr),
JJJJJJJJ (Jahr von-bis), MMJJ (Monat, Jahr), MMMMJJ (Monat von-bis,
Jahr), MMJJMMJJ oder MMJJJJJMMJJJJJ (Monat von, Jahr von, Monat bis,
Jahr bis).</td>
</tr>
<tr class="even">
<td>6</td>
<td>Beginn</td>
<td>Abhängig</td>
<td>In der Form SS:MM (07:30)</td>
</tr>
<tr class="odd">
<td>7</td>
<td>Ende</td>
<td>Abhängig</td>
<td>In der Form SS:MM (16:00)</td>
</tr>
<tr class="even">
<td>8</td>
<td>Dauer</td>
<td>Abhängig</td>
<td><p>Anzahl der Stunden zur Verrichtung der Leistung. Die Dauer darf
maximal 23:59 betragen.</p>
<p>Form ist abhängig vom eingestellten Zeitformat.</p>
<p>Bei “Normalstunden”: In der Form SS:MM (02:30)</p>
<p>Bei „Industriestunden“: Maximal 2 Vorkommastellen, Beistrich oder
Punkt, 2 Nach-kommastellen (2,50).</p>
<p>Bei negativen Beträgen wird das Minus unmittelbar vor den Stunden
gestellt.</p></td>
</tr>
<tr class="odd">
<td>9</td>
<td>Einheiten</td>
<td>Abhängig</td>
<td>Das Feld muss abhängig von der Verrechnungsart der Tätigkeit
beschrieben werden. Bei Verrechnung nach Einheiten muss dieses Feld
ausgefüllt sein. Ansonsten das Feld „Einheiten“ leer lassen. (keine
0)<br />
Erlaubt sind nur Ganzzahlen.</td>
</tr>
<tr class="even">
<td>10</td>
<td>Betrag</td>
<td>Abhängig</td>
<td>Das Feld muss abhängig von der Verrechnungsart der Tätigkeit
beschrieben werden. Bei Verrechnung nach Betrag muss dieses Feld
ausgefüllt sein. Ansonsten das Feld „Betrag“ leer lassen. (keine
0)<br />
Eingabe als Dezimalzahl mit 2 Nach-kommastellen.</td>
</tr>
<tr class="odd">
<td>11</td>
<td>Text</td>
<td>Abhängig</td>
<td>Erläuternder Text; bei der Verwendung von Sonderzeichen wie
Semikolon, Anführungszeichen oder Zeilenumbrüchen müssen diese laut
CSV-Standard „RFC 4180“ behandelt werden.</td>
</tr>
</tbody>
</table>

!!! warning "Hinweis"
    Abhängig bedeutet, dass die Befüllung dieses Feldes abhängig von den
    Einstellungen im HON Next ist. Ist beispielsweise bei einer Tätigkeit
    die Option *Projektzeitraum Eingabe* verpflichtend gesetzt, muss auch in
    der Importdatei der Projektzeitraum eingegeben werden, da die Leistung
    sonst ungültig ist.

### Schnittstellenbeschreibung Datenimport Arbeitszeiten

Ein Datenimport von Arbeitszeiten ist nur bei der Art der
Arbeitszeitaufzeichnung *Beginn, Ende und Pausen pro Tag erfassen*
(*Einstellungen / Mitarbeiter Leistungserfassung*) möglich.

Es können nur vollständige Arbeitszeiten importiert werden, das heißt,
alle Pflichtfelder müssen befüllt und in Ordnung sein. Bei
unvollständigen und/oder fehlerhaften Arbeitszeiten wird der Import
abgebrochen und alle fehlerhaften Zeilen werden im Protokoll angezeigt.

Die Importdatei der Arbeitszeiten muss wie folgt aufgebaut sein:


![](<img/image407.png>)

Das Datum und die Mitarbeiternummer sind Pflichtfelder. Die restlichen
Felder sind wie in der Leistungserfassung einzugeben. Nicht benötigte
Felder werden leer gelassen. Wenn es sich um einen ganztägigen
Zeitausgleich handelt, darf keine Arbeitszeit eingetragen werden,
sondern nur ein J (=Ja) in der Spalte *ganztägiger Zeitausgleich*.
Macht der Mitarbeiter Telearbeit, muss in der Spalte
Telearbeit ein J (=Ja) eingetragen werden.

Es werden nur Dateien im Format „CSV (Trennzeichen-getrennt)“
unterstützt. Jede einzelne Zeile wird von der nächsten durch die Zeichen
CR\LF getrennt.

<table>
<colgroup>
<col style="width: 7%" />
<col style="width: 26%" />
<col style="width: 14%" />
<col style="width: 51%" />
</colgroup>
<thead>
<tr class="header">
<th>Nr.</th>
<th>Datenfeld</th>
<th>Pflichtfeld</th>
<th>Feldinhalt</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>1</td>
<td>Mitarbeiternummer</td>
<td>Ja</td>
<td>Nummer des Mitarbeiters</td>
</tr>
<tr class="even">
<td>2</td>
<td>Erfassungsdatum</td>
<td>Ja</td>
<td>In der Form TT.MM.JJJJ (z.B.: 01.01.2022)</td>
</tr>
<tr class="odd">
<td>3</td>
<td>Arbeitszeit - Beginn</td>
<td>Nein</td>
<td>In der Form SS:MM (Stunden:Minuten)</td>
</tr>
<tr class="even">
<td>4</td>
<td>Arbeitszeit - Ende</td>
<td>Nein</td>
<td>Siehe Arbeitszeit – Beginn</td>
</tr>
<tr class="odd">
<td>5</td>
<td>Pause 1 - Beginn</td>
<td>Nein</td>
<td>Siehe Arbeitszeit – Beginn</td>
</tr>
<tr class="even">
<td>6</td>
<td>Pause 1 - Ende</td>
<td>Nein</td>
<td>Siehe Arbeitszeit – Beginn</td>
</tr>
<tr class="odd">
<td>7</td>
<td>Pause 2 - Beginn</td>
<td>Nein</td>
<td>Siehe Arbeitszeit – Beginn</td>
</tr>
<tr class="even">
<td>8</td>
<td>Pause 2 – Ende</td>
<td>Nein</td>
<td>Siehe Arbeitszeit – Beginn</td>
</tr>
<tr class="odd">
<td>9</td>
<td>Pause 3 - Beginn</td>
<td>Nein</td>
<td>Siehe Arbeitszeit – Beginn</td>
</tr>
<tr class="even">
<td>10</td>
<td>Pause 3 - Ende</td>
<td>Nein</td>
<td>Siehe Arbeitszeit – Beginn</td>
</tr>
<tr class="odd">
<td>11</td>
<td>Pause 4 - Beginn</td>
<td>Nein</td>
<td>Siehe Arbeitszeit – Beginn</td>
</tr>
<tr class="even">
<td>12</td>
<td>Pause 4 - Ende</td>
<td>Nein</td>
<td>Siehe Arbeitszeit – Beginn</td>
</tr>
<tr class="odd">
<td>13</td>
<td>Pause 5 - Beginn</td>
<td>Nein</td>
<td>Siehe Arbeitszeit – Beginn</td>
</tr>
<tr class="even">
<td>14</td>
<td>Pause 5 - Ende</td>
<td>Nein</td>
<td>Siehe Arbeitszeit – Beginn</td>
</tr>
<tr class="odd">
<td>15</td>
<td>Ganztägiger Zeitausgleich</td>
<td>Nein</td>
<td>J, wenn es sich um einen ganztägigen Zeitausgleich handelt.</td>
</tr>
<tr class="even">
<td>16</td>
<td>Telearbeit</td>
<td>Nein</td>
<td>J, wenn es sich um einen Telearbeitstag handelt.</td>
</tr>
</tbody>
</table>

### Protokolle Datenübernahme

Über den Menüpunkt *Datenübernahme / Protokolle* können Sie sich die
Importprotokolle aller durchgeführten Importe von Leistungen und
Arbeitszeiten aufrufen.
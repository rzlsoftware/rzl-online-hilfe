# Datenübernahme

Die Honorarverrechnung ermöglicht durch Anwahl des Programmteils
*Datenübernahme / Datenimport* den Import von Tätigkeiten aus einer CSV
Datei. Um den erfolgreichen Import zu gewährleisten, muss die
Import-Datei genau dem Format laut Schnittstellenbeschreibung
entsprechen.

## Datenimport Tätigkeiten

Im Feld *Dateiname* können Sie mit den drei Punkten **(1)** die zu
importierende Datei auswählen. Mit der Lupe **(2)** können Sie sich die
Datei vor dem Import nochmals ansehen.

Vorab wird empfohlen eine Vorprüfung **(3)** durchzuführen, somit werden
Sie gleich auf etwaige Probleme hingewiesen. Nach der erfolgreichen
Vorprüfung können Sie mit der Schaltfläche *Prüfen und Importieren*
**(4)** die Tätigkeiten in die Honorarverrechnung holen.

Folgende Ergebnisse kann die Prüfung liefern:

<img src=".\img/image150.png"
style="width:0.36528in;height:0.19097in" /> Info – Dies erhalten Sie,
wenn Bsp. es die hinterlegte Verrechnungsgruppe noch nicht gibt und
diese angelegt wird. Der Import kann dennoch durchgeführt werden.

<img src=".\img/image151.png"
style="width:0.36528in;height:0.16528in" /> Fehler – Der Import kann
nicht durchgeführt werden. Die Importdatei muss dementsprechend
angepasst werden. Das Programm zeigt eine genaue Fehlerbeschreibung.

Abb. 20‑1 Datenimport Tätigkeiten

<img src=".\img/image152.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image47.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image107.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image19.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image405.png"
style="width:6.29921in;height:2.52887in" />

Hinweis

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

<table>
<colgroup>
<col style="width: 5%" />
<col style="width: 24%" />
<col style="width: 12%" />
<col style="width: 56%" />
</colgroup>
<thead>
<tr class="header">
<th><blockquote>
<p>Nr.</p>
</blockquote></th>
<th><blockquote>
<p>Datenfeld</p>
</blockquote></th>
<th><blockquote>
<p>Pflichtfeld</p>
</blockquote></th>
<th><blockquote>
<p>Feldinhalt</p>
</blockquote></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><blockquote>
<p>1</p>
</blockquote></td>
<td><blockquote>
<p>Nummer</p>
</blockquote></td>
<td><blockquote>
<p>Ja</p>
</blockquote></td>
<td><blockquote>
<p>Die Nummer der Tätigkeit im Bereich: 1-999999999; muss eindeutig
sein.</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>2</p>
</blockquote></td>
<td><blockquote>
<p>Bezeichnung</p>
</blockquote></td>
<td><blockquote>
<p>Ja</p>
</blockquote></td>
<td><blockquote>
<p>Die interne Bezeichnung der Tätigkeit, welche im Programm verwendet
wird, ist auf maximal 40 Zeichen beschränkt und muss eindeutig sein.</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>3</p>
</blockquote></td>
<td><blockquote>
<p>Bezeichnung In Note</p>
</blockquote></td>
<td><blockquote>
<p>Ja</p>
</blockquote></td>
<td><blockquote>
<p>Die Bezeichnung der Tätigkeit, welche auf der Note gedruckt wird,
kann mehr als 40 Zeichen enthalten.</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>4</p>
</blockquote></td>
<td><blockquote>
<p>Verrechnungsgruppe</p>
</blockquote></td>
<td><blockquote>
<p>Ja</p>
</blockquote></td>
<td><blockquote>
<p>Die Verrechnungsgruppe zur der die Tätigkeit zugeordnet werden soll,
ist auf maximal 40 Zeichen beschränkt.</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>5</p>
</blockquote></td>
<td><blockquote>
<p>Verrechnungsart</p>
</blockquote></td>
<td><blockquote>
<p>Ja</p>
</blockquote></td>
<td><blockquote>
<p>Dieses Feld definiert die Verrechnungsart der Tätigkeit. Es stehen
folgende Verrechnungsarten zur Verfügung:</p>
</blockquote>
<ul>
<li><p><em>Stunden</em></p></li>
<li><p><em>Einheiten</em></p></li>
<li><p><em>StundenUndEinheiten</em></p></li>
<li><p><em>StundenOderEinheiten</em></p></li>
<li><p><em>Betrag</em></p></li>
</ul></td>
</tr>
<tr class="even">
<td><blockquote>
<p>6</p>
</blockquote></td>
<td><blockquote>
<p>Verrechenbar</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p><em>J</em>, wenn die Tätigkeit verrechenbar sein soll. Ansonsten
<em>N</em> oder leer lassen.</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>7</p>
</blockquote></td>
<td><blockquote>
<p>USt-Pflichtig</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p><em>J</em>, wenn die Tätigkeit umsatzsteuerpflichtig sein soll.
Ansonsten <em>N</em> oder leer lassen.</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>8</p>
</blockquote></td>
<td><blockquote>
<p>Außerhalb der Arbeitszeit</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p><em>J</em>, wenn Leistungen der Tätigkeit außerhalb der Arbeitszeit
sind. Ansonsten <em>N</em> oder leer lassen.</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>9</p>
</blockquote></td>
<td><blockquote>
<p>Nicht in Pauschale</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p><em>J</em>, wenn Leistungen der Tätigkeit nicht durch Pauschalen
gedeckt sein sollen. Ansonsten <em>N</em> oder leer lassen.</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>10</p>
</blockquote></td>
<td><blockquote>
<p>Betrag in Note</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p><em>J</em>, wenn in den Honorarnoten Beträge dieser Tätigkeit
gedruckt werden sollen. Ansonsten <em>N</em> oder leer lassen.</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>11</p>
</blockquote></td>
<td><blockquote>
<p>Urlaub</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p><em>J</em>, wenn es sich um eine Urlaubstätigkeit handelt. Ansonsten
<em>N</em> oder leer lassen.</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>12</p>
</blockquote></td>
<td><blockquote>
<p>Krankenstand</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p><em>J</em>, wenn es sich um eine Krankenstandstätigkeit handelt.
Ansonsten <em>N</em> oder leer lassen.</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>13</p>
</blockquote></td>
<td><blockquote>
<p>Feiertag</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p><em>J</em>, wenn es sich um eine Feiertagstätigkeit handelt.
Ansonsten <em>N</em> oder leer lassen.</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>14</p>
</blockquote></td>
<td><blockquote>
<p>Spesen</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p><em>J</em>, wenn Leistungen der Tätigkeiten Spesen sind. Ansonsten
<em>N</em> oder leer lassen.</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>15</p>
</blockquote></td>
<td><blockquote>
<p>Projektzeitraum in Note</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p><em>J</em>, wenn in den Honorarnoten Projektzeiträume dieser
Tätigkeit gedruckt werden sollen. Ansonsten <em>N</em> oder leer
lassen.</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>16</p>
</blockquote></td>
<td>Projektzeitraumeingabe verpflichtend</td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p><em>J</em>, wenn bei der Erfassung von Leistungen auf diese Tätigkeit
die Eingabe des Projektzeitraumes verpflichtend sein soll. Ansonsten
<em>N</em> oder leer lassen.</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>17</p>
</blockquote></td>
<td><blockquote>
<p>Uhrzeiteingabe verpflichtend</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p><em>J</em>, wenn bei der Erfassung von Leistungen auf diese Tätigkeit
die Eingabe des Beginns und des Endes verpflichtend sind. Ansonsten
<em>N</em> oder leer lassen.</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>18</p>
</blockquote></td>
<td><blockquote>
<p>Texteingabe verpflichtend</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p><em>J</em>, wenn bei der Erfassung von Leistungen auf diese Tätigkeit
die Eingabe eines Textes verpflichtend ist. Ansonsten <em>N</em> oder
leer lassen.</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>19</p>
</blockquote></td>
<td><blockquote>
<p>Erlöskonto</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p>Bereich: 1-999999999; Das Erlöskonto wird beim Erstellen der
Buchungssätze im Zuge des Finalisierens einer Note verwendet.</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>20</p>
</blockquote></td>
<td><blockquote>
<p>Erlöskonto IG-Leistungen</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p>Bereich: 1-999999999; Das Erlöskonto wird beim Erstellen der
Buchungssätze im Zuge des Finalisierens einer Note verwendet.</p>
</blockquote></td>
</tr>
<tr class="odd">
<td><blockquote>
<p>21</p>
</blockquote></td>
<td><blockquote>
<p>Erlöskonto für Drittländer (Reverse Charge</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p>Bereich: 1-999999999; Das Erlöskonto wird beim Erstellen der
Buchungssätze im Zuge des Finalisierens einer Note verwendet.</p>
</blockquote></td>
</tr>
<tr class="even">
<td><blockquote>
<p>22</p>
</blockquote></td>
<td><blockquote>
<p>Kostenstelle</p>
</blockquote></td>
<td><blockquote>
<p>Nein</p>
</blockquote></td>
<td><blockquote>
<p>Bereich: 1-999999999; Die Kostenstelle wird beim Erstellen der
Buchungssätze im Zuge des Finalisierens einer Note verwendet.</p>
</blockquote></td>
</tr>
</tbody>
</table>

## Datenimport Leistungen und Arbeitszeiten

Im HON Next können über den Menüpunkt *Datenübernahme / Datenimport*
zentral die Leistungen und Arbeitszeiten aller Mitarbeiter gesammelt
importiert werden.

Hinweis

Auch über *Leistungserfassung / Mitarbeiterübersicht / Datenimport* ist
ein Import der Arbeitszeiten und Leistungen möglich – hier muss jedoch
der Import pro Mitarbeiter einzeln erfolgen (vgl. Kapitel 9.3, Seite
[74](#import-arbeitszeiten-und-leistungen)).

Wählen Sie Leistungen oder Arbeitszeiten aus.

Im Feld *Dateiname* können Sie mit den drei Punkten **(1)** die zu
importierende Datei auswählen. Mit der Lupe **(2)** können Sie sich die
Datei vor dem Import nochmals ansehen.

Vorab wird empfohlen eine Vorprüfung **(3)** durchzuführen, somit werden
Sie gleich auf etwaige Probleme hingewiesen. Nach der erfolgreichen
Vorprüfung können Sie mit der Schaltfläche *Prüfen und Importieren*
**(4)** die Leistungen und Arbeitszeiten in die Leistungserfassung der
Mitarbeiter bzw. ins HON Next holen.

Folgende Ergebnisse kann die Prüfung liefern:

<img src=".\img/image150.png"
style="width:0.36528in;height:0.19097in" /> Info – Dies erhalten Sie,
wenn Bsp. der Projektzeitraum im falschen Format ist und daher nicht
übernommen wird. Der Import kann dennoch durchgeführt werden.

<img src=".\img/image151.png"
style="width:0.36528in;height:0.16528in" /> Fehler – Der Import kann
nicht durchgeführt werden. Die Importdatei muss dementsprechend
angepasst werden. Das Programm zeigt eine genaue Fehlerbeschreibung.

Abb. 20‑2 Datenimport Leistungen

<img src=".\img/image19.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image47.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image152.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image107.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image153.png"
style="width:6.29921in;height:1.59529in" />

Hinweis

Mit der Option *Importdatei nach Übernahme löschen*, wird die
Importdatei nach erfolgreichem Import im hinterlegten Ordner gelöscht.

### Schnittstellenbeschreibung Datenimport Leistungen

Die importierten Leistungen werden als „freigegeben“ importiert. Es
können nur vollständige Leistungen importiert werden, das heißt alle
Pflichtfelder müssen befüllt und in Ordnung sein. Bei unvollständigen
und/oder fehlerhaften Leistungen wird der Import abgebrochen und alle
fehlerhaften Zeilen werden im Protokoll angezeigt.

Die Importdatei der Leistungen muss wie folgt aufgebaut sein:

Abb. 20‑3 Aufbau Datenimport Leistungen

<img src=".\img/image406.png"
style="width:6.29921in;height:1.52763in" />

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

Hinweis

Abhängig bedeutet, dass die Befüllung dieses Feldes abhängig von den
Einstellungen im HON Next sind. Ist beispielsweise bei einer Tätigkeit
die Option Projektz*eitraum Eingabe* verpflichtend gesetzt, muss auch in
der Importdatei der Projektzeitraum eingegeben werde, da die Leistung
sonst ungültig ist.

### Schnittstellenbeschreibung Datenimport Arbeitszeiten

Ein Datenimport von Arbeitszeiten ist nur bei der Art der
Arbeitszeitaufzeichnung *Beginn, Ende und Pausen pro Tag erfassen*
(*Einstellungen / Mitarbeiter Leistungserfassung*) möglich.

Es können nur vollständige Arbeitszeiten importiert werden, das heißt
alle Pflichtfelder müssen befüllt und in Ordnung sein. Bei
unvollständigen und/oder fehlerhaften Arbeitszeiten wird der Import
abgebrochen und alle fehlerhaften Zeilen werden im Protokoll angezeigt.

Die Importdatei der Arbeitszeiten muss wie folgt aufgebaut sein:

Abb. 20‑4 Aufbau Datenimport Arbeitszeiten

<img src=".\img/image407.png"
style="width:6.29921in;height:0.77902in" />

Das Datum und die Mitarbeiternummer sind Pflichtfelder. Die restlichen
Felder sind wie in der Leistungserfassung einzugeben. Nicht benötigte
Felder werden leer gelassen. Wenn es sich um einen ganztätigen
Zeitausgleich handelt, darf keine Arbeitszeit eingetragen werden,
sondern nur ein J (=Ja) in der Spalte *ganztätiger Zeitausgleich*.
Befindet sich der Mitarbeiter im Homeoffice, muss in der Spalte
Homeoffice ein J (=Ja) eingetragen werden.

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
<td>Homeoffice</td>
<td>Nein</td>
<td>J, wenn es sich um einen Homeoffice-Tag handelt.</td>
</tr>
</tbody>
</table>

### Protokolle Datenübernahme

Über den Menüpunkt *Datenübernahme / Protokolle* können Sie sich die
Importprotokolle aller durchgeführten Importe von Leistungen und
Arbeitszeiten aufrufen.
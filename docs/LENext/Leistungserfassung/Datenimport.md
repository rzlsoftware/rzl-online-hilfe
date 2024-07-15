## Datenimport Leistungen und Arbeitszeiten

Jeder Mitarbeiter hat in seiner Leistungserfassung die Möglichkeit
Leistungen und Arbeitszeiten zu importieren. Den Importdialog öffnen Sie
in der Leistungserfassung über den Reiter *Datenübernahme /
Datenimport*.


![](<img/image63.png>)

!!! warning "Hinweis"
    Leistungen und Arbeitszeiten können nur für den eigenen Mitarbeiter
    importiert werden.

### Datenimport Leistungen

Leistungen können Sie über den Menüpunkt *Datenübernahme / Datenimport*
und den Punkt *Leistungen* importieren. Im Feld *Dateiname* können Sie
mit den drei Punkten **(1)** die zu importierende Datei auswählen. Mit
der Lupe **(2)** können Sie sich die Datei vor dem Import nochmals
ansehen.

Vorab wird empfohlen eine Vorprüfung **(3)** durchzuführen, somit werden
Sie gleich auf etwaige Probleme hingewiesen. Nach der erfolgreichen
Vorprüfung können Sie mit der Schaltfläche *Prüfen und Importieren*
**(4)** die Leistungen in die Leistungserfassung holen.

Folgende Ergebnisse kann die Prüfung liefern:

![](<img/image64.png>)Info – Dies erhalten Sie,
wenn Bsp. der Projektzeitraum im falschen Format ist und daher nicht
übernommen wird. Der Import kann dennoch durchgeführt werden.

![](<img/image65.png>)Fehler – Der Import kann
nicht durchgeführt werden. Die Importdatei muss dementsprechend
angepasst werden. Das Programm zeigt eine genaue Fehlerbeschreibung.


![](<img/image69.png>)

!!! warning "Hinweis"
    Mit der Option *Importdatei nach Übernahme löschen*, wird die
    Importdatei nach erfolgreichem Import im hinterlegten Ordner gelöscht.

**Schnittstellenbeschreibung Import Leistungen**

Die Importdatei der Leistungen muss wie folgt aufgebaut sein:


![](<img/image70.png>)

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
<td>Nein</td>
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
    Leistungen können nur importiert werden, wenn der Tag nicht gesperrt
    ist.

!!! warning "Hinweis"
    Abhängig bedeutet, dass die Befüllung dieses Feldes abhängig von den
    Einstellungen im HON Next sind. Ist beispielsweise bei einer Tätigkeit
    die Option Projektz*eitraum Eingabe* verpflichtend gesetzt, muss auch in
    der Importdatei der Projektzeitraum eingegeben werde, da die Leistung
    sonst ungültig ist.

Nach dem Import der Leistungen müssen diese noch explizit freigegeben
werden. Dies machen Sie, indem Sie den Tag über den Kalender öffnen und
über die Schaltfläche [Tagesfreigabe](/LENext/Leistungserfassung/Tagesfreigabe) den Tag freigeben.



![](<img/image71.png>)

### Datenimport Arbeitszeiten

Arbeitszeiten können Sie über den Menüpunkt *Datenübernahme /
Datenimport* und den Punkt *Arbeitszeiten* importieren. Im Feld
*Dateiname* können Sie mit den drei Punkten **(1)** die zu importierende
Datei auswählen. Mit der Lupe **(2)** können Sie sich die Datei vor dem
Import nochmals ansehen.

Vorab wird empfohlen eine Vorprüfung **(3)** durchzuführen, somit werden
Sie gleich auf etwaige Probleme hingewiesen. Nach der erfolgreichen
Vorprüfung können Sie mir der Schaltfläche *Prüfen und Importieren*
**(4)** die Arbeitszeiten in die Leistungserfassung holen.

Folgende Ergebnisse kann die Prüfung liefern:

![](<img/image65.png>) Fehler – Der Import kann
nicht durchgeführt werden. Die Importdatei muss dementsprechend
angepasst werden. Das Programm zeigt eine genaue Fehlerbeschreibung.


![](<img/image72.png>)

!!! warning "Hinweis"
    Mit der Option *Importdatei nach Übernahme löschen*, wird die
    Importdatei nach erfolgreichem Import im hinterlegten Ordner gelöscht.

**Schnittstellenbeschreibung Import Arbeitszeiten**

Die Importdatei der Arbeitszeiten muss wie folgt aufgebaut sein:


![](<img/image73.png>)

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

!!! warning "Hinweis"
    Wurde für diesen Tag bereits eine Arbeitszeit eingetragen, ist ein
    Import der Arbeitszeiten nicht mehr möglich.

### Protokolle Datenübernahme

Über den Menüpunkt *Datenübernahme / Protokolle* können Sie sich die
Importprotokolle aller durchgeführten Importe von Leistungen und
Arbeitszeiten aufrufen.

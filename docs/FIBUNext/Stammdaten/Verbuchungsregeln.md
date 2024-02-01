# Verbuchungsregeln zur Retourdatenverarbeitung

## Verbuchungsregeln zur Retourdatenverarbeitung

&nbsp;

Zur automatisierten Verarbeitung der Retourdaten können für gleichartige bzw. wiederkehrende Geschäftsfälle (z.B. Strom, Miete) Verbuchungsregeln angelegt werden. Dadurch wird beim wiederkehrenden Import automatisch der vordefinierte Buchungsvorschlag erstellt.

Unter *Stammdaten / Verbuchungsregeln* ***(1)*** können Sie neue Verbuchungsregeln anlegen oder bestehende Verbuchungsregeln bearbeiten.

Abb. 1 Verbuchungsregeln

![Image](<img/NeuesElement150.png>)

**TIPP**

Verbuchungsregeln sollten am besten direkt im Zuge der Retourdatenverarbeitung hinterlegt werden, da alle vorhandenen Daten aus dem Import automatisch vorgeschlagen und ausgewählt werden können. Nach Auswahl der betroffenen Buchungszeile im camt-Stapel kann mit der F4-Taste bzw. der rechten Maustaste oder auch über das Menüband die Verbuchungsregel angelegt werden.

Abb. 2 Verbuchungsregel Retourdaten I

![Image](<img/NeuesElement149.png>)

&nbsp;

Folgende Felder stehen als Auswahlkriterium zur Verfügung:

* *Betrag*: Einschränkung auf einen bestimmten Betrag oder einen Bereich.
* *IBAN*: Einschränkung auf den IBAN vom Empfänger/Absender aus der Importdatei.
* *Name*: Auslesung des Empfänger-/Absendernamens aus der Importdatei. Es werden auch Teile daraus (einzelne Wörter) ausgelesen, sofern diese gleichbleibend sind.
* *Verwendungszweck*: Sofern der Verwendungszweck oder Teile daraus (einzelne Wörter) gleichbleibend sind, können diese in der Verbuchungsregel hinterlegt werden (max. 40 Zeichen).
* *Bankverbindung*: Soll die Verbuchungsregel nur für eine bestimmte Stammdaten-Bankverbindung gelten, kann diese hier über das Dropdown-Menü aufgerufen und ausgewählt werden.
* *Zahlungsart*: Einschränkung der Verbuchungsregel auf die Zahlungsart (Zahlungseingang oder Zahlungsausgang)

&nbsp;

**TIPP**

Da alle angewählten Felder zur Auslesung der Verbuchungsregel erfüllt sein müssen, sollten nur notwendige Kriterien ausgewählt werden. Meist reicht beispielsweise das Feld *IBAN* als eindeutiges Zuordnungsfeld.

&nbsp;

Im zweiten Registerblatt wird der dazugehörige Buchungsvorschlag eingegeben.

Abb. 3 Verbuchungsregel Retourdaten II

![Image](<img/NeuesElement148.png>)

Der Buchungsvorschlag kann mit den Feldern *FIBU Konto*, *Steuercode* und *Buchungstext* festgelegt werden.

Ist die Verbuchungsregel auf mehrere FIBU Konten aufzuteilen, so kann im Feld *Aufteilung nach **(1)*** *Betrag* oder *Prozent* gewählt werden, je nachdem welches Aufteilungskriterium in diesem Fall verwendet werden soll. Im Feld *Betrag/Prozent* ***(3)*** ist der jeweilige Betrag bzw. Prozentsatz für die Buchung zu erfassen. Soll bei einer dieser Buchungen stets der überbleibende Restbetrag verbucht werden, so ist das Häkchen im Feld *Restbetrag* zu setzen ***(2)***.\
Sobald Sie eine Zeile für einen Buchungsvorschlag mit Aufteilung abgeschlossen haben, erscheint automatisch eine neue Zeile, in welcher der nächste Buchungssatz für die Aufteilung erfasst werden kann.\
Bei Aufteilung nach Prozenten ist immer darauf zu achten, dass insgesamt 100% aufgeteilt werden, um die Verbuchungsregel speichern zu können.

**HINWEIS**

OP-führende Konten können im Rahmen einer Verbuchungsregel nicht bebucht werden.

Als Ergänzung des Buchungstextes mit einer Datumsangabe oder dem Namen des Partners können beispielsweise folgende Platzhalter im Text Buchungstext eingetragen werden.\
Zusätzlich können Sie mittels dem Pfeil neben dem Buchungstext bereits vorgefertigte Platzhalter auswählen und einfach einfügen.

| {BDAT,dd.MM.yyyy} | Buchungsdatum im Format **09.04.2022** |
| --- | --- |
| {BDAT,MMMM yyyy} | Buchungsdatum im Format **April 2022** |
| {BDAT,MM(-1).yy} | Buchungsdatum vorangegangenes Monat im Format **03.22** |
| {PARTNER} | Name des Partners (Auftraggeber bzw. Empfänger der Überweisung) |
| {VWZ} | Verwendungszweck der Überweisung |


&nbsp;

Mittels der in Klammern angeführten Buchstaben **d** (=\>Tag), **M** (=\>Monat) und **y** (=\>Jahr) wird das Ausgabeformat bestimmt, z.B. 09.04.2022, 9.April.22, 0904, etc. Die Auflösung der einzelnen Buchstaben am Beispiel des Datums 09.04.2022 lautet wie folgt:

* d -\> 9 (vorangestellte 0 wird entfernt. Zweistellige Zahlen bleiben immer zweistellig)
* dd -\> 09
* M -\> 4 (vorangestellte 0 wird entfernt. Zweistellige Zahlen bleiben immer zweistellig)
* MM -\> 04
* MMM -\> Apr
* MMMM -\> April
* yy -\> 22
* yyyy -\> 2022

&nbsp;

Diese Formatierungsparameter können entweder direkt aufeinander folgen (z.B. yyyyMMdd) oder können durch . (Punkt), - (Bindestrich/Minus) oder / (Slash) getrennt sein.

**HINWEIS**

Aus der FIBU Klassik übernommene Verbuchungsregeln mit Platzhaltern werden automatisch auf das neue Format adaptiert.

&nbsp;

**TIPP**

Werden während dem Verbuchen eines Kontoauszug-Stapels neue Verbuchungsregeln angelegt oder geändert, so werden diese auf alle ungeklärte Buchungszeilen angewandt, sobald die Verbuchungsregel gespeichert wird.\
Bereits geklärte und somit verbuchte Zeilen werden durch die Änderung einer Verbuchungsregel nicht angepasst.

&nbsp;

Möchten Sie eine Verbuchungsregel auf eine bestimmte Zeile anwenden, auf die die hinterlegten Regeln nicht zutreffen, so kann die Verbuchungsregel auch erzwungen werden. Dazu ist der Menüpunkt Verbuchungsregel anwenden ***(1)*** zu verwenden.

Abb. 4 Verbuchungsegel anwenden

![Image](<img/NeuesElement147.png>)

&nbsp;


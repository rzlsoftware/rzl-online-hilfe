# Abfertigung Neu

Alle Dienstverhältnisse, die ab 01.01.2003 neu begonnen wurden, unterliegen dem Bundesgesetz über die Betriebliche Vorsorge (Abfertigung neu). Das bedeutet, dass der Dienstgeber monatlich Beiträge an eine Betriebliche Vorsorgekasse (BV-Kasse) zahlt. Die Abfertigungsansprüche der Dienstnehmer im Abfertigungssystem neu bestehen nicht mehr gegenüber dem Dienstgeber, sondern nur noch gegenüber der BV-Kasse.

Die Beiträge werden von der ÖGK eingehoben und geprüft und betragen derzeit 1,53 Prozent des SV-pflichtigen Entgelts, allerdings ohne Berücksichtigung der Geringfügigkeitsgrenze und Höchstbeitragsgrundlage.

Für bereits bestehende Dienstverhältnisse ist ein Wechsel möglich. Einerseits der Vollumstieg auf das neue System, indem durch eine schriftliche Vereinbarung zwischen Arbeitgeber und Arbeitnehmer eine an die BV-Kasse zu zahlende Summe für die Abgeltung der Altabfertigungsanwartschaft festgelegt wird.

Andererseits der Teilumstieg, der zum Umstieg ins neue System bei gleichzeitigem Einfrieren der Abfertigungsansprüche gegenüber dem Dienstgeber zum Umstiegszeitpunkt führt.

## Anlegen der BV-Kassen

Bis zum Ende des Jahres 2002 mussten sich die Dienstgeber für eine BV-Kasse entscheiden, da auf jeder Anmeldung seit 2003 auch die BV-Kasse angeführt werden muss.

Die BV-Kassen sind in der Behörden-Datei im Programmteil *Klient / Finanzämter, Gemeinden, ÖGK, BV-Kassen, Gerichte / Bearbeiten* anzulegen.

![Image](<img/image299.png>){width="500"}

### Registerblatt Adresse

**Nummer**

Vergabe einer laufenden Nummer für die BV-Kasse

**Leitzahl**

Eintragung der fünfstelligen Leitzahl der BV-Kasse. Über diese Leitzahl wird die BV-Kasse in den Stammdaten des Klienten angewählt.

**Name, PLZ, Ort, Straße, Telefon**

Eintragung der Bezeichnung und des Firmensitzes der BV-Kasse.

### Registerblatt Bankverbindungen

Die Eintragung der Bankverbindung der BV-Kasse ist nur erforderlich, wenn Zahlungen direkt an die BV-Kasse geleistet werden.

## Verankerung der BV-Kassen in den Klienten-Stammdaten

Nach Anlage der BV-Kasse in den Stammdaten der Behörden, muss in den Stammdaten des Klienten im Programmteil *Stamm / Klient* im Registerblatt *ÖGK, BV-Kasse* die BV-Kasse für die sich der Dienstgeber entschieden hat, verankert werden.

![Image](<img/image300.png>){width="500"}

**BV-Kassenleitzahl**

Die Verankerung der BV-Kasse erfolgt mittels der BV-Kassenleitzahl. Die in der Behörden-Datei angelegten BV-Kassen können im Feld *BV-Kassenleitzahl* durch Anwahl der *F2-Taste* ausgewählt werden.

**Mehrere BV-Kassen**

Wird dieses Auswahlfeld aktiviert, können pro Bundesland verschiedene BV-Kassen angelegt werden.

**Bank**

Dieses Feld wird nur benötigt, wenn Zahlungen direkt an die BV-Kassen zu leisten sind. Normalerweise erfolgt die Abfuhr über die ÖGK.

**Mehrere BV-Kassen in einem Bundesland**

Sollte dieser Ausnahmefall eintreten, erhält der Dienstgeber von der ÖGK verschiedene DG-Beitragsnummern. In diesem Fall sind die Dienstnehmer über Unterdienstgeber zu trennen. Über die Stammdaten dieser können für ein Bundesland mehrere DG-Kontonummern und BV-Kassen geführt werden.

## Änderungen in der Abrechnung der Dienstnehmer seit 2003

### Neueintritt eines Dienstnehmers seit 01.01.2003

Im Zuge einer Neuanlage eines Dienstnehmers ab 01.01.2003 ist im Abrechnungsbildschirm *Eintritt* die BV-Beitragspflicht festzulegen:

![Image](<img/image301.png>){width="500"}

**BV-Beitragspflicht**

Grundsätzlich ist das Auswahlfeld *BV-Beitragspflicht* aktiviert. Unterliegt der Dienstnehmer nicht der Beitragspflicht (z. B. fallweise Beschäftigte, befristetes Dienstverhältnis nicht länger als ein Monat), dann ist dieses Feld zu deaktivieren.

**Beginn BV-Beitragspflicht**

Der Beginn der BV-Beitragspflicht wird vom Programm vorgeschlagen. Grundsätzlich ist der erste Monat beitragsfrei. Sollte der Dienstnehmer während des Monats eintreten, wird vom Programm der BV-Beitrag im Folgemonat automatisch aliquotiert.

Der Vorschlag vom Programm muss nur abgeändert werden, wenn eine (fremde) Lohnverrechnung übernommen und ein Dienstnehmer neu angelegt wird, der innerhalb der letzten 12 Monate bereits bei diesem Dienstgeber beschäftigt war (Abrechnung mit Wiedereintritt nicht möglich). In diesem Fall entsteht sofort Beitragspflicht. Das Programm würde jedoch aufgrund der fehlenden Wiedereintrittsdaten einen Monat beitragsfrei belassen.

### Ende der BV-Beitragspflicht

Das Ende der BV-Beitragspflicht wird vom Programm anhand des Austrittsdatums automatisch vorgeschlagen.

![Image](<img/image302.png>){width="500"}

Der Vorschlag anhand des Austrittsdatums kann in Ausnahmefällen abgeändert werden.

### BV-Beitragsleistungen während entgeltfreier Zeiträume

Bei Ableistung von Präsenz- und Zivildienst sind vom Dienstgeber auf Basis des Kinderbetreuungsgeldes die BV-Beiträge weiterhin an die BV-Kasse abzuführen. Im Falle des Wochengeldbezuges ist die Bemessungsgrundlage, das für den Kalendermonat vor dem Eintritt des Versicherungsfalles gebührende Entgelt, maßgeblich. Beim Bezug von Krankengeld gelten verschiedene je nach Tatbestand abgestufte Bemessungsgrundlagen.

![Image](<img/image303.png>){width="400"}

Die Eintragung der Bemessungsgrundlage erfolgt im Abrechnungsbildschirm *Fixe Lohnarten* getrennt für *Präsenz-/Zivildienst, Mutterschutz* oder *Krankheit*.

Aufgrund des im Abrechnungsbildschirm [*Austritt*](../LOHN/Abrechnungsbildschirme/Austritt.md) eingetragenen Austrittsgrundes wird vom Programm automatisch die Bemessungsgrundlage in das jeweilige Feld eingetragen.

Beim Bezug von Krankengeld ist die Eintragung und Aliquotierung manuell vorzunehmen.

Für Zeiten des Kinderbetreuungsgeldbezugs, der Bildungskarenz und der Hospizkarenz werden die Abfertigungsbeiträge vom Familienlastenausgleichsfonds gezahlt. Den Arbeit­geber trifft für diese Zeiten keine Beitragspflicht.

### Sonderfall BUAK (Bauarbeiter- Urlaubs- und Abfertigungskasse)

Werden Mitarbeiter, die zwangsweise der BUAK unterliegen seit 01.01.2003 im Programm neu angelegt, dann sind im Abrechnungsbildschirm [*Bauarbeiter- Urlaubs- und Abfertigungskasse (BUAK)*](../LOHN/Abrechnungsbildschirme/Bauarbeiter_Urlaubs_und_Abfertigungskasse.md) Eintragungen vorzunehmen.

![Image](<img/image304.png>){width="500"}

Unterliegt der Dienstnehmer **zwingend** der BUAK, dann ist dieses Auswahlfeld für die Anmeldung des Dienstnehmers zu aktivieren. In diesem Fall werden die BV-Beiträge an die BUAK nicht über das Programm abgerechnet. Die Beiträge werden von der BUAK direkt vorgeschrieben.

Wird die BUAK freiwillig als Abfertigungskasse gewählt, dann ist hier keine Eintragung vorzunehmen, sondern die Abrechnung erfolgt, wie für jede andere Abfertigungskasse auch.

## Bestehende Dienstverhältnisse – Umstiegsmöglichkeiten

Für bestehende Dienstverhältnisse besteht die Möglichkeit, auf das neue Abfertigungssystem umzusteigen. Es besteht kein Zwang zum Umstieg. Wenn die Dienstnehmer oder der Dienstgeber keinen Umstieg wünschen, bleibt das Dienstverhältnis weiterhin im alten System. Es müssen nicht alle Dienstnehmer auf das neue System wechseln, sondern es können auch nur einzelne Dienstnehmer umsteigen.

Grundsätzlich stehen zwei Möglichkeiten zur Verfügung, auf das neue Abfertigungssystem umzusteigen.

### Vollumstieg

Ein Vollumstieg ist unbefristet möglich.

### Teilumstieg

Bei einem Teilumstieg wird ein Stichtag für den Umstieg ausgewählt. Ab diesem Stichtag werden für die Dienstnehmer die BV-Beiträge an die BV-Kasse abgeführt. Der zum Zeitpunkt des Umstieges bestehende Abfertigungsanspruch bleibt erhalten.

Diese beiden Umstiegsmöglichkeiten werden im Lohnprogramm im Abrechnungsbildschirm *Stammdaten Fristen* abgerechnet.

![Image](<img/image305.png>){width="500"}

### Vollumstieg Abfertigung neu

Der Betrag, der im Zuge eines Vollumstiegs an die BV-Kasse für den Dienstnehmer zu leisten ist, kann entweder auf einmal geleistet werden oder auf 5 Jahre verteilt werden.

Einzutragen ist: der Übertragungszeitpunkt und die Höhe des Übertragungsbetrags.

### Teilumstieg Abfertigung neu

Bei Abrechnung eines Teilumstiegs ist das Datum des Übertritts (Einfrierungszeitpunkt) einzutragen, damit die BV-Beiträge über das Programm abgeführt werden können. Weiters ist der Einfrierungsanspruch in Monaten (Abfertigungsanspruch zum Zeitpunkt des Übertritts ins neue System) für die Rückstellungsberechnung anzugeben.

!!! warning "Hinweis"
    Damit die BV-Beiträge ab dem Umstiegsstichtag für den jeweiligen Dienstnehmer abgeführt werden, ist im Abrechnungsbildschirm [*Eintritt*](../LOHN/Abrechnungsbildschirme/Eintritt.md) die BV-Pflicht zu aktivieren und der Beginn einzutragen.
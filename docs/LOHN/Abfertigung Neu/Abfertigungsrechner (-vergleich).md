# Abfertigungsrechner (-vergleich)

Im Programmteil *Ausdruck / Rückstellungen / Abfertigungsvergleich* besteht die Möglichkeit, aufgrund der Stammdaten der angelegten Dienstnehmer einen Vorteilsvergleich zwischen Abfertigung alt und Abfertigung neu bei Vollumstieg und Teilumstieg vorzunehmen. Es werden dazu für jede der drei Varianten die Endwerte der Dienstnehmer, sowie die Barwerte des Dienstgebers vom Programm errechnet.

![Image](<img/image306.png>){width="500"}

**Stichtag Umstieg**

Hier ist der Stichtag, zu dem auf Abfertigung neu umgestiegen werden soll, einzutragen.

**Liste**

Ausdruck der Berechnung des Abfertigungsvergleiches in Listenform.

**Detail**

Ausdruck des Abfertigungsvergleiches pro Dienstnehmer vom Umstiegsstichtag bis zur Pensionierung inklusive grafischer Darstellung.

**Summen**

Ausdruck des Abfertigungsvergleiches vom Umstiegsstichtag bis zur Pensionierung der Dienstnehmer des Klienten in einer Summe inklusive grafischer Darstellung.

**Endwerte drucken (Dienstnehmer) – Barwerte drucken (Dienstgeber)**

In diesen Feldern wird aktiviert, welche der Berechnungen ausgedruckt werden sollen. Die Anzeige am Bildschirm (siehe unten) erfolgt unabhängig von der vorgenommenen Einstellung.

**Basis für Abfertigung**

Vgl. [Abfertigungsrückstellung](../Rückstellungen/Abfertigungsrückstellung.md)

**Basis für Sonderzahlung**

Vgl. [Abfertigungsrückstellung](../Rückstellungen/Abfertigungsrückstellung.md)

Durch Anwahl der Schaltfläche *Weiter* (siehe oben) wird folgender Dialog geöffnet:

![Image](<img/image307.png>){width="500"}

!!! info "Tipp"
    Durch Anwahl der *F2-Taste* werden für den jeweils markierten Dienstnehmer die Jahreswerte aufgerufen und können ausgedruckt werden.

**Abfertigung alt Bezug, Abfertigung alt Sonderzahlung, Abfertigung neu Bezug, Abfertigung neu Sonderzahlung, Pension**

Die angezeigten Werte werden aus den derzeitigen Lohnverrechnungsdaten übernommen. Eine Abweichung zwischen Bezug Abfertigung alt und Bezug Abfertigung neu kann sich aufgrund der unterschiedlichen Berechnungsgrundlagen (Basis für Abfertigung neu sind alle SV-pflichtigen Bezüge) ergeben.

**Gehaltssteigerung, Umstiegsbetrag, Abfertigung alt Fluktuation, Abfertigung neu Fluktuation**

Die Daten dieser Eingabefelder werden aus dem *Detail-Bildschirm* übernommen (siehe unten).

**Stichtag Umstieg**

Diese Eintragung wird aus dem Anfangsdialog (Ausdruck Abfertigungsvergleich) übernommen.

!!! info "Hinweis"
    Die angezeigten Einträge können geändert werden. Soll eine Änderung rückgängig gemacht werden, ist im jeweiligen Feld die *F2-Taste* anzuwählen.

Durch Anwahl der Schaltfläche *Details* können die Parameter für die Berechnung des Abfertigungsvergleiches eingetragen werden.

**Registerblatt Pension, Steigerung, BV-Kasse**

![Image](<img/image308.png>){width="500"}

*Pensionsalter*

Eintragung des voraussichtlichen Pensionsalters getrennt für Männer und Frauen.

*Gehaltssteigerung*

In dieses Feld ist die zu erwartende durchschnittliche Gehaltssteigerung jährlich einzutragen. Diese Eintragung wird für alle Dienstnehmer verwendet, kann jedoch im Stammdatenbildschirm (siehe oben) für einzelne Dienstnehmer geändert werden.

*Umstiegs-Betrag (in Prozent)*

In dieses Feld ist der Umstiegsbetrag in Prozent einzutragen. Der Betrag pro Dienstnehmer wird in den Stammdaten errechnet und angezeigt.

*BV-Beitrag*

Eintragung des BV-Beitrages (Mindestwert 1,53 %).

*Verzinsung BV-Kasse*

Eintragung der voraussichtlichen Verzinsung der BV-Kasse.

*BV-Kasse-Kosten*

- *laufende Kosten*

Eintragung der laufenden Kosten der BV-Kasse. Derzeit laut BMVG darf die BV-Kasse zwischen 1 % und 3,5 % der laufenden BV-Beiträge an Kosten verrechnen.

- *Umstiegskosten*

Eintragung der Kosten der BV-Kasse bei einem Vollumstieg. Derzeit bis maximal 1,5 % des Übertragungswertes.

- *Kosten für Vermögensverwaltung*

Eintragung des Prozentsatzes, den die BV-Kasse von den veranlagten Beträgen berechnen darf. Derzeit bis 1 % pro Geschäftsjahr und seit 2005 0,8 % pro Geschäftsjahr.

- *Höchstbetrag*

Eintragung des Höchstbetrages, der je Übertragungswert bei einem Vollübertritt von der BV-Kasse einbehalten werden darf. Derzeit EUR 500,00 je Altabfertigungsanwartschaft.

**Registerblatt Steuersatz, Auflösung Rückstellung, Fluktuationen**

![Image](<img/image309.png>){width="500"}

*Auflösung der Abfertigungs-Rückstellung*

Die in den Jahren 2002 oder 2003 mögliche steuerfreie Auflösung beeinflusst die Barwerte der Kosten des Dienstgebers.

*Grenzsteuersatz*

In dieses Feld kann der Grenzsteuersatz des Unternehmers / Unternehmens eingetragen werden. Der eingetragene Grenzsteuersatz reduziert die Barwerte des Dienstgebers um die Steuerbelastung.

*Abzinsung Barwert-Ermittlung*

Eingabe des Abzinsungsprozentsatzes für die Abzinsung der Barwerte des Dienstgebers.

*Fluktuationsabschläge Abfertigung alt*

Für die Berechnung der Abfertigungsanwartschaft alt können hier Fluktuationsabschläge in 5-Jahres-Intervalle eingetragen werden.

*Fluktuationsabschläge Abfertigung neu*

Für die Berechnung der Abfertigungsanwartschaft neu können hier Fluktuationsabschläge für 5-Jahres-Intervalle eingetragen werden.

Nach der Eintragung der Parameter für den Abfertigungsvergleich kehrt das Programm durch Anwahl der Schaltfläche *Speichern* in den Ausgangsdialog der Stammdaten zurück und es können durch Anwahl der Schaltflächen *Endwerte Dienstnehmer* oder *Barwerte Dienstgeber* (siehe Pfeil unten) die Vergleichsrechnungen angezeigt und ausdruckt werden.

![Image](<img/image310.png>){width="500"}

*Anspruch Stichtag*

In diese Spalte wird der Anspruch an Monatsgehältern zum Stichtag angezeigt. Der Stichtag wird im Ausdruckbildschirm (*Ausdruck / Rückstellungen / Abfertigungsvergleich*) eingetragen, kann jedoch für die einzelnen Dienstnehmer auch abweichend eingetragen werden.

*Abf. (Abfertigung) alt Stichtag*

Berechnung der Abfertigung alt zum Stichtag.

*Abf. (Abfertigung) alt Pension*

Berechnung der Abfertigung alt bei Pensionierung des Dienstnehmers.

*Umstiegsbetrag*

Der Umstiegsbetrag wird anhand der Eintragung im *Detail-Bildschirm* im Feld *Umstiegs-Beitrag* errechnet. Dieser kann für einzelne Dienstnehmer auch abweichend eingetragen werden.

*Abf. (Abfertigung) neu Pension*

Errechnung des Wertes Abfertigung neu, den der Dienstnehmer zur Pensionierung bei einem Vollumstieg erhält.

*Teilumstieg Pension*

Berechnung des Wertes Abfertigung neu bei Pensionierung bei einem Teilübertritt zum Stichtag.

*Gleichstand alt*

Hier wird der Prozentsatz für den Umstiegsbetrag berechnet, bei dem Gleichstand zwischen Abfertigung alt und Vollumstieg herrscht.

*Gleichstand Teilumstieg*

Hier wird der Prozentsatz für den Umstiegsbetrag berechnet, bei dem Gleichstand zwischen Voll- und Teilübertritt (Einfrieren) herrscht.

Im unten angeführten Abrechnungsbildschirm werden die *Barwerte* für den Dienstgeber (siehe Pfeil) berechnet.

![Image](<img/image311.png>){width="500"}

Die Felder der Anzeige sind identisch mit jenen der Endwerte der Dienstnehmer. Hier werden jedoch die ermittelten Barwerte zum eingetragenen Stichtag (z. B. 01.01.2003) der Kosten des Dienstgebers unter Berücksichtigung der Steuerbelastung angezeigt.
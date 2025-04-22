# Exekutionsberechnung

Die Exekution wird in einem eigenen Abrechnungsbildschirm durchgeführt. Bevor die Exekution automatisch berechnet wird, sind die freien Lohnarten bezüglich der Pflichtigkeiten für die Exekutionsberechnung zu bearbeiten.

## Bearbeitung freie Lohnarten

![Image](<img/image314.png>){width="500"}

Im unteren rechten Bereich des Bildschirmes sind die freien Lohnarten für die Exekutionsberechnung zu bearbeiten.

**unpfändbar**

Soll die freie Lohnart als nicht pfändbar behandelt werden (z. B. Reisekosten frei), ist dieses Feld zu aktivieren.

**SZ für Exekution**

Handelt es sich bei der freien Lohnart um den 13. oder 14. Bezug, ist dieses Feld zu aktivieren.

**Beendigungsansprüche**

Beendigungsansprüche (Abfertigungen, Urlaubsersatzleistungen), die als freie Lohnarten abgerechnet werden, sind durch Aktivierung dieses Feldes zu kennzeichnen.

**Aktivierung bzw. Eintragung der Unterhaltsberechtigten**

Die Anzahl der Unterhaltsberechtigten wird aus dem Abrechnungsbildschirm *Stammdaten* *Dienstnehmer* aus den Bereichen *Ehepartner* und *Kinder* übernommen, wenn dort das Feld *Unterhalt* aktiviert wird.

![Image](<img/image315.png>){width="500"}

## Automatische Ermittlung der Exekution

![Image](<img/image316.png>){width="500"}

Im ersten Bereich wird festgelegt, ob die Exekutionsberechnung automatisch erfolgen soll oder nicht.

**Abzug Exekutionsbetrag**

Wird dieses Feld aktiviert, erfolgt **keine** automatische Berechnung der Exekution. Der selbst errechnete Exekutionsbetrag kann im Feld *Exekutionsbetrag* eingetragen werden. Firmen, die das Modul *Exekution* nicht erworben haben, steht nur diese Eingabemöglichkeit zur Verfügung.

**Automatische Ermittlung**

Die Exekutionsbeträge werden vom Programm automatisch ermittelt.

**Händische Berechnung**

Nach Aktivierung dieser Option können die vom Programm automatisch berechneten Beträge korrigiert werden.

**Abzug Exekutionskosten**

Sollen die laufenden Exekutionskosten abgezogen werden, ist dieses Feld zu aktivieren.

**Abzug Drittschuldnerkosten**

Neben der Option für die eigentlichen *Exekutionskosten*, gibt es die Möglichkeit die Kosten für die Drittschuldnererklärung einzubehalten. Der Abzug richtet sich nach der *Kostenvariante*, welche unter [*Stamm / Exekutionen*](../Exekutionen/Drittschuldner-Erklärung.md) hinterlegt wurde. Diese Kosten reduzieren nicht das Existenzminimum des Dienstnehmers, sondern kürzen jenen Betrag, der an die Gläubiger überwiesen wird.

!!! warning "Hinweis"
    Diese Kostenvariante ist in der Regel nur sinnvoll, wenn es sich um eine Pfändung im 1. Rang handelt.

In der Abrechnung wird diese Position bei den Abzügen als eigenständige Position neben den normalen Exekutionskosten berücksichtigt.

![Image](<img/image317.png>)

!!! warning "Hinweis"
    Sollte die einlangende Pfändung nicht vorrangig sein, ist wie bisher die Option, die Kosten beim zuständigen Exekutionsgericht zu begehren, die sinnvollste Alternative.

***Pfändbarer Betrag geringer als Drittschuldnerkosten***

In unserem Beispiel können beim Dienstnehmer nur EUR 26,88 gepfändet werden. Im ersten Monat werden nur die Drittschuldnerkosten einbehalten und keine Exekutionsbeträge an den Gläubiger abgeführt.

![Image](<img/image318.png>)

Im nächsten Monat wird der Restbetrag von EUR 8,12 für die Drittschuldnerkosten verwendet, der restliche pfändbare Betrag wird auf die Exekutionskosten und die Exekutionsbeträge für den Gläubiger aufgeteilt.

![Image](<img/image319.png>)

!!! warning "Hinweis"
    Es wird trotz Abzug der Drittschuldnerkosten nie das Existenzminimum unterschritten.

**Anspruch auf Sonderzahlung**

Hat der Dienstnehmer Anspruch auf Sonderzahlung, ist dieses Feld zu aktivieren. Dadurch erhöht sich der pfändbare Betrag.

**Quartalsweise Sonderzahlung**

Durch die entsprechende Option werden nur mehr 50 % der Grundbeträge bei der Exekutionsberechnung berücksichtigt. Es werden dadurch auch bei den niedrigeren quartalweisen Sonderzahlungsgrundlagen pfändbare Werte ermittelt.

***Beispiel:***

Anstelle einer halbjährlichen Sonderzahlung von EUR 3.000,00 werden die Sonderzahlungen nun quartalsweise in der Höhe von EUR 1.500,00 Brutto bezahlt. Netto-Bemessungsgrundlage EUR 1.248,11; allg. Grundbetrag 2023 = EUR 1.110,00.

Mit Hilfe der Option *quartalsweise Sonderzahlung* wird nur mehr die **Hälfte des allgemeinen Grundbetrages** in Höhe von EUR 555,00 berücksichtigt.

| **Urlaubszuschuss netto**      | **EUR** | **1.248,11** |
| :----------------------------- | ------: | -----------: |
| Berechnungsgrundlage           |     EUR |     1.240,00 |
| - allg. Grundbetrag (Hälfte)   |     EUR |     - 555,00 |
| *Mehrbetrag*                   |     EUR |     *685,00* |
| - allg. Steigerungsbetrag 30 % |     EUR |     - 205,50 |
| *Pfändbar*                     |     EUR |     *479,50* |
| + Abrundung                    |     EUR |         8,11 |
| **Pfändbar gesamt**            |     EUR |   **487,61** |

Der pfändbare Betrag aus der Sonderzahlung steigt auf EUR 487,61. Das Existenzminimum sinkt im gleichen Ausmaß auf EUR 760,50.

| **Laufender Bezug netto**      | **EUR** | **2.112,20** |
| :----------------------------- | ------: | -----------: |
| Berechnungsgrundlage           |     EUR |     2.100,00 |
| - allg. Grundbetrag            |     EUR |   - 1.110,00 |
| *Mehrbetrag*                   |     EUR |     *990,00* |
| - allg. Steigerungsbetrag 30 % |     EUR |     - 297,00 |
| *Pfändbar*                     |     EUR |     *693,00* |
| + Abrundung                    |     EUR |        12,20 |
| **Pfändbar gesamt**            |     EUR |   **705,20** |

In der Kombination aus lfd. Bezug und quartalsweiser Sonderzahlung ergibt dies einen pfändbaren Betrag von EUR 1.192,81 bzw. ein kombiniertes Existenzminimum von EUR 2.167,50.

![Image](<img/image320.png>){width="500"}

In den folgenden Sonderzahlungsmonaten ergibt sich die gleiche Vorgehensweise. Durch die veränderte Lohnsteuerberechnung ergeben sich leichte Unterschiede in der Netto-Berechnungsgrundlage und dadurch auch bei der Pfändung. (Freigrenzen und Freibeträge)

**Zuordnung Exekutionssachen**

Hier erfolgt die automatische Berechnung der Exekution. Angezeigt werden die ungerundete Berechnungsgrundlage und die Anzahl der Unterhaltsberechtigten (siehe oben).

Weiters wird der maximal pfändbare Betrag angezeigt, wenn es sich um eine Unterhaltsexekution oder eine sonstige Exekution handelt. Ebenfalls ist ersichtlich, aus welcher Tabelle der unpfändbare Freibetrag entnommen wird. Die Daten aus dem Listenfeld werden aus dem Programmteil *Stamm / Exekutionen* entnommen.

Der errechnete Exekutionsbetrag und die Exekutionskosten können nicht verändert werden. Es sei denn, es wird im Abrechnungsbildschirm ganz oben auf die Option *händische Berechnung* umgestellt.

**Dauer Beendigungsansprüche**

Hier ist die Anzahl der Monate des längsten Beendigungsanspruches einzutragen. Die Pfandschutzobergrenze wird mit der Anzahl der eingetragenen Monate multipliziert. Durch Anwahl der *F2-Taste* erfolgt ein Vorschlag vom Programm.

**Erweiterter Pfändungsschutz**

Hat der Dienstnehmer einen erweiterten Pfändungsschutz gerichtlich erwirkt, ist dieses Feld zu aktivieren und die Anzahl der Monate sind einzutragen.

**Zahlungsklage des Dienstnehmers**

Klagt der Dienstnehmer auf Zahlung der Bezüge, ist hier eine Eintragung vorzunehmen. Diese Eintragung ist für den Ausdruck der Drittschuldnererklärung relevant.

**Keine Zahlungsbereitschaft**

Liegt keine Zahlungsbereitschaft des Dienstgebers (Drittschuldners) vor, dann ist dieses Feld zu aktiveren und der Grund einzutragen (z. B. es existiert eine Gegenforderung oder eine Schadenersatzforderung).
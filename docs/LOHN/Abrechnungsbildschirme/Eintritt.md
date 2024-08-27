## Eintritt

In diesem Bildschirm sind Daten, die unmittelbar mit dem Eintritt des Dienstnehmers und dessen Anmeldung bei der ÖGK zusammenhängen, einzugeben.

![Image](<img/image55.png>)

### Beschreibung der Eingabefelder

#### **Eintritt**

Eingabe des Eintrittsdatums. Dieses Datum ist bei Neuanlage bzw. Wiedereintritt einzugeben. Auf Grund dieses Datums erfolgt die automatische Berechnung der SV-Tage. Dieses Eintrittsdatum wird auf den Lohnabrechnungen und am Lohnzettel angedruckt. Liegt das Eintrittsdatum nicht im Abrechnungsmonat, so erfolgt die Warnung *„Achtung, Eintrittsdatum liegt nicht im Abrechnungszeitraum“*. Wird mit der RZLWin-Lohnverrechnung neu begonnen und müssen daher sämtliche Dienstnehmer neu anlegt werden, so kann diese Warnung ignoriert werden. Ansonsten ist zu beachten, dass der Dienstnehmer im Monat des Eintrittes zu erfassen ist.

Bei einem Wiedereintritt aufgrund des Beginnes des Karenzurlaubes darf kein Eintrittsdatum eingegeben werden

#### **Ersteintritt**

Eingabe des Datums des Ersteintrittes des Dienstnehmers in den Betrieb. Dieses Datum ist maßgeblich für die Berechnung des Abfertigungsanspruches. Bei einem Neueintritt müssen beide Datumsfelder befüllt werden.

#### **Beschäftigt in der Woche**

Eingabe der Tage, die der Dienstnehmer in der Woche beschäftigt ist. Maximal 7 Tage.

#### **Beschäftigungsstunden je Tag**

Eingabe der durchschnittlichen Beschäftigungsstunden je Tag mit bis zu 2 Nachkommastellen. Maximal 24 Stunden.

#### **Wochenstunden**

Eingabe der Wochenstunden mit bis zu 2 Nachkommastellen.

#### **Arbeitstage**

Arbeitstage werden vom Programm beginnend mit Montag abhängig von der Anzahl der Beschäftigungstage vorgeschlagen und können abgeändert werden. Der erstmalige Vorschlag vom Programm wird in die Abrechnungsbildschirme *Lohnsteuer* und *Krankenstand* übernommen. Korrekturen im Eintritt und im Krankenstand werden wechselweise angepasst. Da die Fahrttage im Abrechnungsbildschirm *Lohnsteuer* nicht zwingend den Arbeitstagen entsprechen müssen, erfolgt hier keine automatische Korrektur.

#### **Beschäftigungsverhältnis**

Hier ist die Auswahl zwischen voll- und teilzeitbeschäftigt zu treffen. Diese Auswahl hat erstmals Gültigkeit für die Lohnzettelübermittlung 2002 und hat keinerlei Auswirkung auf die Abrechnung.

Die Information, ob der Dienstnehmer voll- oder teilzeitbeschäftigt ist, wird am Lohnzettel angedruckt bzw. übermittelt. Die Beschäftigungsart, die im Kalenderjahr überwiegend war, wird vom Programm am Lohnzettel ausgewiesen. Bei Gleichstand zählt der Eintrag des zuletzt abgerechneten Monats.

#### **Arbeitsverhältnis unterliegt (gesetzliche Grundlage)**

Eingabe der gesetzlichen Grundlage des Arbeitsverhältnisses durch Auswahl aus der von der ÖGK vorgegebenen Liste.

Für geringfügig beschäftigte Arbeiter ist als gesetzliche Grundlage *EFZG* anzuwählen, für geringfügig beschäftigte Angestellte *Angestelltengesetz*.

Es besteht auch die Möglichkeit, durch Anwahl von *anderen Gesetzen,*eine individuelle gesetzliche Grundlage mit bis zu 8 Zeichen einzugeben.

#### **DV befristet bis**

Hier kann eine Befristung des Dienstverhältnisses hinterlegt werden. Bei der Abrechnung des Monats – in dem die Befristung endet – erfolgt ein Hinweis vom Programm.

#### **DV kürzer als 1 Monat vereinbart**

Damit die Beschäftigtengruppe für die geringfügigen Beschäftigungen, welche kürzer als 1 Monat vereinbart sind, abgerechnet werden können, muss dieses Feld aktiviert werden.

#### **Paralleles Beschäftigungsverhältnis beim selben Arbeitgeber**

Die Aktivierung dieses Feldes ermöglicht die Erstellung eines L16 mit der Lohnzettelart 18. Die Lohnzettelart 18 wird laut Hilfetext innerhalb von FinanzOnline als „Lohnzettel § 84(1) EStG - mehrere LZ vom selben Arbeitgeber mit überschneidenden Zeiträumen“ beschrieben.

Beispiel: Ein Dienstnehmer ist während der Karenz/Bildungskarenz beim gleichen Dienstgeber geringfügig beschäftigt. Für die geringfügige Beschäftigung muss der Dienstnehmer im Lohnprogramm unter einer neuen Nummer (Sonderfall: Wiedereintritt unter neuer Nummer) abgerechnet werden. Bei der Übermittlung der L16 akzeptiert die Finanzverwaltung keine zwei Lohnzettel vom gleichen Dienstgeber für einen überschneidenden Zeitraum. Die Lösung ist, den L16 für die geringfügige Beschäftigung mit der Lohnzettelart 18 zu übermitteln.

#### **mBGM Hauptdienstnehmer**

Durch Eingabe oder Auswahl (*F2-Taste*) des mBGM Hauptdienstnehmers können zwei parallele Dienstverhältnisse miteinander verbunden werden. Diese Funktion ist notwendig, damit für den mBGM ein Paket mit 2 oder mehreren Tarifblöcken erzeugt wird. Ohne diese Eingabe werden zwei mBGM Pakete erzeugt, welches die ÖGK nicht akzeptiert.

Wurde ein *mBGM Hauptdienstnehmer* hinterlegt, wird das durchgestrichene Rufzeichen aktiviert:

![Image](<img/image56.png>)

Durch Anwahl des blauen Rufzeichens wird angezeigt, welche Dienstverhältnisse zusammengefasst werden:

![Image](<img/image57.png>)

#### **BV-Beitragspflicht**

Grundsätzlich ist das Auswahlfeld *BV-Beitragspflicht* aktiviert. Unterliegt der Dienstnehmer nicht der Beitragspflicht (z. B.: fallweise Beschäftigte, befristetes Dienstverhältnis nicht länger als ein Monat), dann ist dieses Feld zu deaktivieren. Vgl. Kapitel 21, Seite [290](#section-15).

#### **Beginn BV-Beitragspflicht**

Der *Beginn der BV-Beitragspflicht* wird vom Programm vorgeschlagen. Grundsätzlich ist der erste Monat beitragsfrei. Sollte der Dienstnehmer während des Monats eintreten, wird vom Programm der BV-Beitrag im Folgemonat automatisch aliquotiert.

Der Vorschlag vom Programm muss nur abgeändert werden, wenn eine (fremde) Lohnverrechnung übernommen wird, dafür muss ein Dienstnehmer angelegt werden, der bereits in den letzten 12 Monaten bei diesem Dienstgeber beschäftigt war (Abrechnung mit Wiedereintritt nicht möglich).

In diesem Fall entsteht sofort Beitragspflicht, das Programm würde jedoch aufgrund der fehlenden Wiedereintrittsdaten einen Monat beitragsfrei belassen.

#### **Dauer der Lehrzeit**

Hier können der Beginn und das Ende der Lehrzeit eingegeben werden.

#### **Ende erstes Lehrjahr**

Hier kann das Ende des ersten Lehrjahres eingegeben werden.

#### **Lehrabschluss-Prüfung**

Hier können Sie das Datum der Lehrabschlussprüfung eintragen.

#### **kein Lehrlings-Freibetrag (LFB)**

Steht für den Lehrling kein Lehrlingsfreibetrag zu, ist dieses Auswahlfeld zu aktivieren. Das wäre beispielsweise bei einer vorzeitigen Beendigung des Lehrverhältnisses der Fall.

#### **Abweichender Betrag Anmeldung**

Bis 2018 (vor mBGM) musste auf der Anmeldung der monatliche Geldbezug angegeben werden. Grundsätzlich wurde dieser Geldbezug automatisch vom Programm vorgeschlagen.

Wird dieses Auswahlfeld aktiviert, dann kann hier ein abweichender Betrag eingetragen werden (gilt nur für die Anmeldung – hat keinerlei Einfluss auf die Abrechnung selbst).

#### **Beschäftigungsbonus**

Die hier verwalteten Daten werden für den Ausdruck der Liste der Arbeitsverhältnisse ab 01.07.2017 für den Beschäftigungsbonus verwendet. Der Ausdruck kann innerhalb der Sonderdrucke angewählt werden.

Im Programmteil *Ausdruck / Sonderdrucke …* können Sie auch die Liste mit den Referenzwerten für den Beschäftigungsbonus und die voraussichtliche Zuschusshöhe ausdrucken.

#### **Vorbezüge**

Vorbezüge sind nur bei Eintritt eines Dienstnehmers während des Jahres einzugeben und nur dann, wenn vom Dienstnehmer ein Lohnzettel über diese Bezüge vorgelegt wird.

!!! info "Tipp"
    Es ist zu beachten, dass ab 1994 die Dienstnehmer nicht mehr verpflichtet sind, einen Lohnzettel über die bisherigen Bezüge vorzulegen. Bei Nichtvorlage der bisherigen Bezüge kann trotzdem bei Sonderzahlungen der Freibetrag von EUR 620,00 berücksichtigt werden, es ist nur die Sechstelgrenze entsprechend geringer.

#### **Verbrauchte Bemessungsgrundlage SV-Sonderzahlung**

Für während eines Jahres eingetretene Dienstnehmer, die bereits vorher in einem Dienstverhältnis standen, ist hier die Summe der bisher verbrauchten Bemessungsgrundlage der SV-Sonderzahlung einzugeben.

#### **Bisherige SV KZ 225**

Hier können Sie den Betrag vom Jahreslohnzettel in der KZ 225 eintragen.

#### **Bisherige Sonderzahlung**

Eingabe der bisher verrechneten Sonderzahlung gemäß § 67 (1) und (2).

#### **Bisherige Sonderzahlung ohne feste LSt**

Es ist jener Betrag, der bisherigen Sonderzahlung einzugeben, der ohne feste Lohnsteuer behandelt wurde. Also jener Betrag zwischen EUR 620,00 und EUR 2.447,00 (bis 2023: EUR 2.100,00) von dem vom Vordienstgeber keine feste Lohnsteuer abgezogen wurde, weil die Sechstelgrenze von EUR 2.447,00 (bis 2023: EUR 2.100,00) nicht erreicht wurde (Bagatellgrenze).

#### **Bisheriger Bruttolohn**

Eingabe des bisherigen Bruttolohnes (ohne Sonderzahlungen) laut Lohnzettel. Dieser Betrag bildet die Grundlage für die Sechstelberechnung. Tritt ein Dienstnehmer während eines Jahres ein und legt keinen Lohnzettel vor, so ist die Sechstelgrenze entsprechend niedriger und es kann bei einer Sonderzahlung zu einer Überschreitung dieser Grenze kommen.

#### **Vorjahresbemessungs-Grundlage**

Eingabe der Lohnsteuer-Vorjahresbemessungs-Grundlage laut Lohnzettel (KZ 245). Im Zuge der Jahresübernahme wird diese Grundlage automatisch ermittelt und im neuen Jahr eingetragen.

#### **Tage als Aushilfskraft**

Wenn der Dienstnehmer im aktuellen Kalenderjahr bereits als Aushilfskraft gemäß § 3 Abs. 1 Z 11a EStG tätig war, ist hier die Anzahl der Tage einzutragen. Mit Hilfe dieses Eintrages werden die 18 Tage pro Dienstnehmer und Jahr überwacht. Dieses Feld hat ab 2020 keine Relevanz mehr, da es lohnsteuerlich keine Aushilfskräfte mehr gibt.
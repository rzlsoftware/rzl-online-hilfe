# Abrechnungsbildschirm Bauarbeiter- Urlaubs- und Abfertigungskasse

## Allgemeines

Unterliegt der Dienstnehmer **zwingend** der BUAK, muss das Auswahlfeld *Bauarbeiter- Urlaubs- und Abfertigungskasse (BUAK)* unbedingt aktiviert werden, auch wenn die elektronische Übermittlung nicht verwendet wird. In diesem Fall werden die BV-Beiträge an die BUAK nicht über die monatliche Beitragsgrundlagenmeldung an die ÖGK abgerechnet. Die BV-Beiträge werden von der BUAK direkt vorgeschrieben.

Der Urlaubszuschuss wird im Abrechnungsbildschirm *Fixe Lohnarten* abgerechnet. Wenn die BUAK eine Direktauszahlung vornimmt, erfolgt die Eintragung im Bereich *BUAK Direktauszahlung*. Wenn der Dienstgeber den Urlaubszuschuss ausbezahlt, erfolgt die Eintragung im Feld *UZ (BUAG)*. In beiden Fällen kommt der Freibetrag von EUR 620,00 und die Freigrenze von EUR 2100,00 nicht zur Anwendung. Zudem gibt es hier keine Jahressechstelbetrachtung.

Zudem bewirkt die Option, dass für weitere sonstige Bezüge (Weihnachtsremuneration) gemäß § 67 (5) EStG ein Jahres**zwölftel** (statt Jahressechstel) zur Anwendung kommt.

!!! warning "Hinweis"
    Wenn Sie als Treuhandkonto-Betrieb die Sonderzahlung mit freien Lohnarten abrechnen wollen, müssen Sie darauf achten, dies mit zwei verschiedenen Lohnarten abzurechnen. Für den UZ BUAK mit der Lohnsteuerpflichtigkeit 3 *Lohnsteuer gem. § 67 ohne Freibetrag von 620, ohne Sechstelbestimmung* und für alle weiteren sonstigen Bezüge die Lohnsteuerpflichtigkeit 2 *Lohnsteuer gem. § 67 mit Freibetrag und mit Sechstelbestimmung*.

## Stammdaten Dienstnehmer

![Image](<img/image471.png>){width="500"}

Im ersten Bereich des Abrechnungsbildschirmes muss zunächst der Haken im Feld *Bauarbeiter- Urlaubs- und Abfertigungskasse (BUAK)* gesetzt werden.

Das in den Klientenstammdaten im *Registerblatt NeuFöG, BUAK, ELDA* eingetragene *Betriebskennzeichen* und die *Direktauszahlung* ja/nein werden angezeigt. Wenn [Direktauszahlung](../Abrechnungsbildschirme/Fixe_Lohnarten.md) aktiviert ist, kann die Urlaubsentgelt-Verrechnung nicht durchgeführt werden. Die Erfassung ist derzeit nur manuell am Portal der BUAK möglich.

**Arbeitnehmerkennzeichen**

In dieses Feld ist das *Arbeitnehmerkennzeichen* des Dienstnehmers einzutragen. Wenn der Dienstnehmer noch kein Arbeitnehmerkennzeichen hat, weil z. B. erstmals eine buak-pflichtige Tätigkeit ausgeübt wird, bleibt dieses Feld zunächst leer.

![Image](<img/image472.png>){width="500"}

**Beruf**

Anwahl des Berufes des Dienstnehmers aus der Liste der Bauarbeiter- Urlaubs- und Abfertigungskasse.

**Stundensatz lt. KV**

Eintragung des Stundensatzes laut Kollektivvertrag für den ausgewählten Beruf.

Wenn im [Abrechnungsbildschirm *Kollektivvertrag*](../Abrechnungsbildschirme/Kollektivvertrag.md) der Dienstnehmer richtig eingestuft wurde, kann der Stundensatz laut Kollektivvertrag mit der *F2-Taste* übernommen werden.

**Wochenstunden lt. KV**

Eintragung der Wochenstunden laut Kollektivvertrag, diese können ebenfalls mit der *F2-Taste* übernommen werden.

## BUAK-Monatsmeldung – Meldung der Beschäftigungszustände

![Image](<img/image473.png>){width="500"}

Die *BUAK-Monatsmeldung* wird unterhalb der Stammdaten des Dienstnehmers erfasst. Aus dem Drop-Down-Menü können die jeweiligen für die BUAK relevanten Beschäftigungszustände ausgewählt werden. Automatisch vorgeschlagen wird das aktuelle Lohnverrechnungsmonat. Durch Anwahl der Schaltfläche *Vormonat* oder *Folgemonat* kann nach vor oder zurückgeblättert werden. Änderungen können aber nur im aktuellen Monat vorgenommen werden.

**Eingabe Meldungsarten**

![Image](<img/image474.png>){width="500"}

Wenn im Lohnverrechnungsprogramm eine Neuanlage stattfindet, werden im Abrechnungsbildschirm *Bauarbeiter- Urlaubs- und Abfertigungskasse (BUAK)* die Stammdaten des Dienstnehmers erfasst (siehe oben). Es gibt keine eigene Eintrittsmeldung für die BUAK, sondern nur die Meldungsart *Eintritt* als Teil der normalen Monatsmeldung.

**Standardmeldungen**

![Image](<img/image475.png>){width="500"}

Der Programmvorschlag sieht in jedem Monat zunächst den Standardvorschlag einer *Regiearbeit* vom 1. des Monats bis zum Monatsende vor. Im Folgemonat wird die Meldung für laufende Arbeit des Vormonats vorgeschlagen. Diese erste Zeile im Listenfeld sollte nicht bearbeitet werden, sondern die Änderungen (z. B. Urlaub, Präsenzdienst, usw.) sollten in der zweiten offenen Zeile erfasst werden.

Wenn beispielsweise eine Urlaubszeile erfasst wird, wird der Zeitraum in der ersten Zeile entsprechend gekürzt, die Urlaubszeile wird eingetragen und die nachfolgende Standardzeile (Regie) wird automatisch generiert.

**Regie**

*Regie* ist der Standardzuschlag der Bauarbeiter- Urlaubs- und Abfertigungskasse. Regie würde auch verrechnet werden, wenn in einem Monat keine Meldung erfolgt, außer es ist ein anderer laufender Beschäftigungsstatus gespeichert.

**Akkord**

Wenn *Akkordarbeit* gemeldet wird, muss bei unten angeführten Betriebsarten (laut Liste der BUAK-Dokumentation) zusätzlich der *Wochenlohn* des Dienstnehmers bekanntgegeben werden. 

- Steinmetzgewerbe

- Beton- und Kunststeinerzeuger

- Beton- und Fertigteilindustrie in Österreich

- Pflasterer in Wien

- Salzburger Marmorindustrie

- Baumaschinenverleih

- Steinmetzgewerbe und Beton- und Kunststeinerzeuger in Österreich

- Urlaub

Mit der Meldungsart Urlaub werden die konsumierten Urlaube mitgeteilt.
Den Zuschlag bezahlt für diesen Zeitraum die Bauarbeiter- Urlaubs- und Abfertigungskasse.

**Weitere Meldungen**

Wenn unterhalb des Listenfeldes im Bereich *Meldungsart* die Liste aufgeklappt wird, können weitere Meldungen erstellt werden.

![Image](<img/image476.png>){width="500"}

## Austrittsmeldung

Wenn ein Dienstnehmer austritt muss eine Austrittsmeldung unverzüglich an die Bauarbeiter- Urlaubs- und Abfertigungskasse gesendet werden. Austritte sind zwar auch in der Monatsmeldung erfasst, sind aber vorab als eigene *Austrittsmeldung* an die BUAK zu übermitteln.

Die Austrittsdaten werden nicht im Abrechnungsbildschirm *Bauarbeiter- Urlaubs- und Abfertigungskasse*, sondern im *normalen* Austrittsbildschirm eingetragen.

![Image](<img/image477.png>){width="500"}

Für BUAK-Mitarbeiter ist eine zweite Liste mit Austrittsgründen freigeschaltet. Wenn möglich wird aufgrund der Auswahl des normalen ÖGK-Austrittsgrundes auch der Austrittsgrund für die BUAK vorgeschlagen. Falls kein Vorschlag seitens des Programmes erfolgt, ist der Austrittsgrund für die BUAK manuell zu wählen Nach dem Speichern der Abrechnung mit den Austrittsdaten erhalten Sie die Abfrage, ob die *BUAK-Austrittsmeldung* erstellt werden soll.

![Image](<img/image478.png>){width="350"}

!!! warning "Hinweis"
    Wenn der Dienstnehmer noch nicht bei der BUAK gemeldet ist, kann noch keine Austrittsmeldung versendet werden. D. h. die Monatsmeldung mit den Eintritten muss vorher erfolgt sein. Beachten Sie, dass die Monatsmeldung pro Monat nur einmal erstellt werden kann und somit vollständig sein sollte.

## Urlaubsentgelt-Verrechnung (nur bei Treuhandkonto)

Die Verrechnung der UE-Einreichung kann im unteren Bereich des Abrechnungsbildschirmes *Bauarbeiter- Urlaubs- und Abfertigungskasse* erfasst werden.

![Image](<img/image479.png>){width="500"}

Für die Verrechnung ist die Anzahl der Urlaubstage zu erfassen. Ein Direktdatenaustausch der Urlaubsentgelt-Verrechnung ist nur für Unternehmen möglich, die über ein Treuhandkonto verfügen (bei Direktauszahlung der Bezüge durch die BUAK, nur über das BUAK Portal).

Wenn die BUAK-Rückmeldungsdateien importiert werden, wird im oberen Bereich der *Monat* der letzten Rückmeldung, die *Offenen Urlaubstage* und der *Offene Anspruch* angezeigt. Der Import der Datei erfolgt im Programmteil *Bearbeiten / Elektronische Übermittlung / Elektronische Urlaubsentgeltsmeldung BUAK Rückdatei importieren*. Durch Anwahl der *rechten Maustaste* oder der Tastenkombination *Strg + U* kann innerhalb des Dienstnehmers die BUAK-Urlaubsentgeltsverrechnungsliste aufgerufen und ausgedruckt werden.
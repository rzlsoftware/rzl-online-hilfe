Ausgehend von einer Aufgabevorlage kann eine Aufgabe als wiederkehrend
definiert werden. Wiederkehrende Aufgaben werden bei jedem Neustart des
Kanzlei-Informations-Systems erstellt. Sie können in der Ansicht des
Klienten als auch in der Kanzleiansicht erstellt werden.

![wiedkehrende Aufgabe](<img/image72.png>)

Die wiederkehrende Aufgabe bietet Ihnen zusätzlich die Möglichkeit
festzulegen, wann die Aufgabe erstellt werden soll. Der aus der
Aufgabenvorlage übernommene Endtermin kann abgeändert werden und
übersteuert letztendlich die Eintragung in der Aufgabenvorlage. Dieses
Prinzip gilt auch für die Uhrzeit und die zuständigen Mitarbeiter.

![neue wiederkehrende Aufgabe](<img/image73.png>)

## Aufgabenvorlage

Hier wählen Sie aus den in der Verwaltung angelegten [Aufgabenvorlagen](../Aufgabenverwaltung/Arbeiten%20mit%20Aufgabenvorlagen.md)
die zutreffende Aufgabenvorlage aus.

## Klient

Wird die wiederkehrende Aufgabe im Klientenbereich angelegt, wird der
vorher ausgewählte Klient automatisch eingetragen. Erfolgt die Anlage im
Kanzleibereich muss der Klient aus der Liste ausgewählt werden.
Wiederkehrende Aufgaben können auf andere Klienten übertragen
(dupliziert) werden.

!!! info "Tipp"
    Die Erstellung von wiederkehrenden Aufgaben (zB.: laufende Buchhaltung) sollte bei einem Klienten begonnen werden, dessen eingestellte Parameter auf die meisten anderen Klienten zutreffen. Anschließend kann diese wiederkehrende Aufgabe auf die anderen Klienten dupliziert werden. Bei Klienten, für die diese Parameter nicht zutreffen können diese manuell abgeändert werden.

## Aktivität für Klientenspiegel

Innerhalb der Klienten-Stammdaten können [Aktivitäten](../Stammdaten/Sonstige%20Stammdaten.md/#aktivitat) zugeordnet werden. Die Aktivitäten werden mit Zeiträumen
verknüpft.

Der zugeordnete Zeitraum wird innerhalb der wiederkehrenden Aufgabe
automatisch im Bereich *Endtermin* eingetragen. In diesem
Bereich sind daher die Felder *Täglich*,
*Wöchentlich*, *Monatlich*, *Jährlich* und *Jeden/Alle ….* ausgegraut.

## Endtermin

Im Bereich *Endtermin* wählen Sie aus wie oft (täglich, wöchentlich,
monatlich, jährlich) und wann (Uhrzeit) die Aufgaben erstellt werden
sollen. Für den Zeitpunkt der Aufgabenerstellung wird das Feld
*Generierungszeitpunkt (Tage vor Endtermin)* verwendet. Das Programm
nimmt die eingetragenen Daten im Bereich Endtermin, zieht die Tage im
Feld *Generierungszeitpunkt (Tage vor Endtermin)* ab und stellt die
Aufgabe automatisch bei jedem Neustart des Kanzlei-Informations-Systems
hinein.

!!! warning "Hinweis"
    Wenn die Felder *Wöchentlich*, *Monatlich*, *Jährlich* und *Jeden/Alle* **nicht** angewählt werden können (ausgegraut), liegt das an der in den Klientenstammdaten zugeordneten „Aktivität für den Klientenspiegel“

![Zuordnungen Aktivitäten und Fachbereiche](<img/image74.png>)

Innerhalb der [Stammdaten des Klienten](../Stammdaten/Klientenstammdaten.md) können die in der Verwaltung angelegten
*Aktivitäten/Fachbereiche* mit den Zeiträumen *monatlich*,
*quartalsweise*, *halbjährlich* und *jährlich* zugeordnet werden. Diese
Zuordnung wird automatisch in den Bereich *Endtermin* übertragen und die
Eintragungsmöglichkeiten sind grau dargestellt.

Wenn Sie im Bereich des Endtermins den Eintrag *Jährlich* auswählen,
kann das Programm automatisch auf den in den Klientenstammdaten im
RZL-Board eingetragenen Bilanzstichtag zugreifen.

![Zuordnungen II](<img/image75.png>)

Wenn kein Bilanzstichtag eingetragen wird, wählt das Kanzlei-Informations-System automatisch den 31.12. als
Bilanzstichtag.

Wiederkehrende Aufgaben mit einem jährlichen Endtermin können auch das
Geburtsdatum des Unternehmers oder das Ende des geplanten
Quotenzeitraumes abfragen.

Das Feld zum Ende des geplanten Quotenzeitraums wird für die
[Quotenplanung](../FinanzOnline/Aufruf%20Status%20der%20Quotenerfüllung.md/#quotenplanung) benötigt.

## Uhrzeit

Festlegung der Uhrzeit des Endtermins. Die Uhrzeit wird aus der
Aufgabenvorlage übernommen, kann jedoch abgeändert werden.

## Zuständige

In diesem Bereich wählen Sie die zuständigen Mitarbeiter oder
Zuständigkeiten aus. Die Auswahl kann mit Hilfe der Liste erfolgen bzw.
durch Eintippen der Anfangsbuchstaben des Mitarbeiters.

![Zuordnungen III](<img/image76.png>)

Durch Klick auf ![MA plus Symbol](<img/image387.png>) können Sie neue zuständige Mitarbeiter bzw. einen neuen Zuständigkeitsbereich
hinzufügen.

Im Bereich der zuständigen Mitarbeiter können nicht nur – wie bei einer
normalen Aufgabe – Mitarbeiter zugeordnet werden, sondern auch
Zuständigkeiten. Wenn in der Verwaltung im Zuständigkeitsbereich beispielsweise ein
Hauptverantwortlicher definiert ist, kann dieser Eintrag im Feld
*Zuständiger Mitarbeiter* zugeordnet werden. Wenn Sie nun diese
Aufgabevorlage verwenden, wird automatisch der beim jeweiligen
Klienten - als Hauptverantwortlicher - zugeordnete Mitarbeiter
vorgeschlagen. Sie können hier auch mehr als eine Zuständigkeit
zuordnen.

## Endtermin der nächsten zu generierenden Aufgabe

Damit die wiederkehrende Einstellung der Aufgabe gestartet werden kann,
muss dieses Feld ausgefüllt werden. Hier tragen Sie den Zeitpunkt des
ersten Endtermins ein.

## Generierungszeitpunkt (Tage vor Endtermin)

Dieses Feld ist verantwortlich für den Zeitpunkt der Aufgabenerstellung.
Die Daten des Bereichs *Endtermin der nächsten zu generierenden Aufgabe* werden um die Eintragung in diesem Feld gekürzt und die
Aufgabe wird erstellt. Das Ergebnis der Eintragung wird rechts neben dem
Feld angezeigt.

## Zeitraum (+/- Monate nach/vor Endtermin)

In diesem Feld tragen Sie den Monat ein, für das die Arbeit erledigt
werden muss. Die Eintragung bezieht sich auf den Endtermin und erfolgt durch die Eintragung von positiven oder negativen Zahlen.
Das Ergebnis der Eintragung wird rechts neben dem Feld angezeigt.

## Automatische Generierung aktiv

Dieses Feld können Sie verwenden um eine wiederkehrende Aufgabe zu
deaktivieren, ohne die Aufgaben löschen zu müssen.

## Duplizieren von wiederkehrenden Aufgaben

Innerhalb der Details ![Detail Aufgabe](<img/image77.png>) einer wiederkehrenden Aufgabe kann durch Anwahl
des Duplizieren-Symbols die Aufgabe auf weitere Klienten übertragen werden.

![Duplizieren von Aufgabenvorlage](<img/image78.png>)

In der Klientenliste können Sie die Klienten, für welche die
wiederkehrende Aufgabe dupliziert werden soll, einzeln auswählen. Wenn
alle Klienten in der Liste markiert werden sollen, kann ![Alle-Auswählen-Symbol](<img/image79.png>) ausgewählt werden. Die Hakerl können gesamt durch Anwahl des Symbols rechts daneben wieder gelöscht werden. Natürlich können Sie die
 [Liste filtern](../Allgemeine%20Programmbedienung/Programmstart%20und%20mögliche%20Funktionen.md/#moglichkeiten-der-listengestaltung).

In der Spalte *bereits vorhanden* wird Ihnen angezeigt, bei welchen
Klienten diese wiederkehrende Aufgabe bereits angelegt wurde.

Nach Anwahl der Schaltfläche *Duplizieren* wird die wiederkehrende
Aufgabe auf die aktivierten Klienten übertragen.

Wiederkehrende Aufgaben können auch in der Klienten- und Kanzleiansicht dupliziert werden.

!!! info "Tipp"
    Auch das Duplizieren von mehreren wiederkehrenden Aufgaben gleichzeitig ist möglich.

## Generierungsvorschau

Innerhalb der wiederkehrenden Aufgaben können Sie durch Anwahl der
Schaltfläche *Generierungsvorschau* die nächsten zu generierenden
Aufgaben ansehen.

![Generierungsvorschau](<img/image80.png>)

Dieser Programmteil ermöglicht vorab die händische Generierung einer
Aufgabe. Zunächst muss die Aufgabe durch ein Hakerl im Kästchen
aktiviert werden und anschließend die Schaltfläche *Ausgewählte Aufgaben sofort generieren* angewählt werden.

Ein möglicher Anwendungsfall ist das beispielsweise ein Klient atypisch
die Buchhaltung sofort nach Ablauf des Monats bringt und diese gleich
erledigt wird. Somit kann die Aufgabe – die zu diesem Zeitpunkt noch
nicht automatisch erzeugt wurde – händisch erzeugt und auf *Erledigt*
gesetzt werden und es ist nicht notwendig auf die automatische
Generierung zu warten. Für die Aktivität *Jahresabschluss* könnte man
einen möglichst späten Endtermin wählen, damit die Liste der Offenen
Ausgaben nicht unübersichtlich wird. Wenn der Klient die Unterlagen
bereitstellt bzw. wenn der Sachbearbeiter mit der Erstellung beginnt,
wird die Aufgabe in der Generierungsvorschau angelegt.

## Zuständigkeiten: Auffang-Zuständigkeitsbereich – Auffang-Mitarbeiter

Sie können im Programmteil *Extras / Einstellungen* im Registerblatt
*Aufgabenverwaltung* bei fehlenden Zuständigkeiten in den
Klientenstammdaten einen Auffang-Zuständigkeitsbereich und einen
Auffang-Mitarbeiter anlegen.

![autom Generierung Aufgaben](<img/image81.png>)

Mit Hilfe dieser Zuordnungen wird verhindert, dass automatisch
generierte Aufgaben ohne Zuständigkeit erstellt werden.
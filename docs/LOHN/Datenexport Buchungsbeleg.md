# Datenexport Buchungsbeleg

Die Anwahl des Programmteiles *Bearbeiten / Datenexport / Export Buchungsbeleg (RZL-Format)* ermöglicht die Erstellung einer Datei, die die Buchungen des Buchungsbeleges beinhaltet und die in das RZLWin-Finanzbuchhaltungsprogramm bzw. RZLWin-Einnahmen-Ausgaben-Programm importiert werden kann.

Voraussetzung für eine erfolgreiche Erstellung der Datei ist die Verankerung eines [Kanzleilohnkontenplanes](../LOHN/Klientenstammdaten/Stammdaten%20Klient/LA,%20Formeln,%20Texte,%20Kontenplan,%20Beiträge,%20Währung.md) in den Stammdaten des Klienten. Im Kanzleilohnkontenplan müssen die Aufwandskonten (Löhne, Gehälter, Überstunden, SV-AGA, KommST, usw.) vorkontiert werden. In den Stammdaten des Klienten sind die Verbindlichkeitskonten der einzelnen Behörden einzutragen.

![Image](<img/image298.png>){width="500"}

Zunächst ist festzulegen, für welchen Monat der Datenexport erfolgen soll. Wurden im Ausgabemonat Aufrollungen durchgeführt, können die Aufrolldifferenzen berücksichtigt werden oder nicht.

Wird das Auswahlfeld *Aufteilung nach Kostenstellen* aktiviert, dann wird innerhalb des Buchungsbeleges eine Aufteilung nach den bei den einzelnen Dienstnehmern angelegten Kostenstellen vorgenommen. Wird das Auswahlfeld *Aufteilung nach Kostenträgern* aktiviert, dann wird innerhalb des Buchungsbeleges eine Aufteilung nach den bei den einzelnen Dienstnehmern angelegten Kostenträgern vorgenommen.

Die Aktivierung des Feldes *Sachbezüge als DG-Kosten* bewirkt die Verbuchung von Sachbezügen in der Kostenstellenrechnung als Aufwand. Das bedeutet auf der Habenseite erfolgt bei den Sachbezügen keine Kostenstellenzuordnung. Wenn *Kostenstellen pro DN* aktiviert ist, dann wird pro Dienstnehmer die Kostenstelle zugeordnet.

Sind den Dienstnehmern einzelne [Buchungskreise](../LOHN/Abrechnungsbildschirme/Stammdaten%20Fristen.md) zugeordnet und somit auf verschiedene Buchungsbelege aufgeteilt, kann durch die Anwahl des Feldes *Buchungskreise zusammenfassen* dennoch ein gemeinsamer Ausdruck erfolgen.

!!! info "Hinweis"
    Bei dieser Ausdruckvariante wird jene Kontierung verwendet, die im Lohnkontenplan unter dem Buchungskreis *Null* festgelegt wurde.

Die Aktivierung des Feldes *Detail BUAK* hat zur Folge, dass sämtliche im Abrechnungsbildschirm [*Fixe Lohnarten*](../LOHN/Abrechnungsbildschirme/Fixe%20Lohnarten.md) im Bereich *BUAK* eingetragenen Lohnarten inklusive der Rückverrechnungsbeträge verbucht werden. Wird dieses Feld nicht aktiviert, wird nur die Verbindlichkeit an die ÖGK gekürzt. Eine Aktivierung dieses Feldes ist nicht zwingend notwendig.

Sollen Aufrolldifferenzen aus Vormonaten im laufenden Monat berücksichtigt werden, ist das Auswahlfeld *Aufrolldifferenzen im laufenden Monat* zu aktivieren. Wird das Auswahlfeld *ursprüngliche Werte verwenden* aktiviert, dann erfolgt die Ausgabe **vor** Aufrolldifferenzen (betrifft die aufgerollten Monate).

Im Feld *Belegkreis* kann entweder der Belegkreis *LV* ausgewählt werden oder ein beliebiger Eintrag mit höchstens 2 Buchstaben vorgenommen werden.

Das im Feld *Belegdatum* eingetragene Datum wird in der Finanzbuchhaltung als Buchungsdatum verwendet. Dieses Eingabefeld ist ein *Pflichtfeld* und muss befüllt werden, da ansonsten das Erstellen der Export-Datei nicht möglich ist.

In das Eingabefeld *Belegnummer* kann eine Nummer eingetragen werden, die in der Finanz­buchhaltung entsprechend verbucht wird.

Im Feld *Offene Posten-Nummer* können Eintragungen für die Verbuchung der OP-Nummer (Sachkonten) gemacht werden. Es besteht die Möglichkeit, mit sogenannten Platzhaltern zu arbeiten. *0* bedeutet keinen Eintrag. Wenn einzelne Buchungskreise vorhanden sind, werden diese durch das Kürzel *BB* eingetragen. *MM* steht für das Buchungsmonat und *JJ* steht für das Buchungsjahr.

In das Feld *Auswahl Export-Datei* sind der Pfad zur Export-Datei und die Bezeichnung der Export-Datei einzutragen oder über die Schaltfläche *Suchen* festzulegen.

Bezüglich des Datenimportes in der Finanzbuchhaltung vgl. Handbuch Finanzbuchhaltung **Kapitel 29 Datenimport/Datenexport.**
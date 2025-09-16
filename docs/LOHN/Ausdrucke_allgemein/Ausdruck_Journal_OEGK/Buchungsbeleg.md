# Buchungsbeleg

![Image](<img/image226.png>){width="500"}

Durch Anwahl des Menüpunktes *Ausdruck / Ausdruck Journal / ÖGK / Buchungsbeleg* wird der Ausdruck eines monatlichen Buchungsbelegs bewirkt.

Wird das Auswahlfeld *Aufteilung nach Kostenstellen* aktiviert, dann wird innerhalb des Buchungsbelegs eine Aufteilung nach den bei den einzelnen Dienstnehmern angelegten Kostenstellen vorgenommen. Wird das Auswahlfeld *Aufteilung nach Kostenträger* aktiviert, dann wird innerhalb des Buchungsbelegs eine Aufteilung nach dem bei den einzelnen Dienstnehmern angelegten Kostenträger vorgenommen. Das Feld *Sachbezüge als DG-Kosten* bewirkt, dass die Erlösbuchungen des Sachbezuges in der Kostenstellenrechnung NICHT berücksichtigt werden, d. h. es erfolgt keine Aufteilung. Wird das Feld *Kostenstellen pro DN* angewählt, wird pro Dienstnehmer die Kostenstelle dargestellt.

Bei diesem Ausdruck wird die im Abrechnungsbildschirm *Stammdaten Fristen* getroffene Zuordnung zu einem [Buchungskreis](../../Abrechnungsbildschirme/Stammdaten_Fristen.md) wirksam. Wenn das Feld *Buchungskreise zusammenfassen* aktiviert wird, wird trotz Aufteilung auf mehrere Buchungskreise nur ein Gesamtbuchungsbeleg ausgedruckt.

Die Aktivierung des Feldes [*Detail BUAK*](../../Abrechnungsbildschirme/Bauarbeiter_Urlaubs_und_Abfertigungskasse.md) hat zur Folge, dass sämtliche im Abrechnungsbildschirm *Fixe Lohnarten* im Bereich *BUAK* eingetragenen Lohnarten inklusive der Rückverrechnungsbeträge am Buchungsbeleg dargestellt werden. Wird dieses Feld nicht aktiviert, wird nur die Verbindlichkeit an die ÖGK gekürzt. Eine Aktivierung dieses Feldes ist nicht zwingend erforderlich.

Wenn es sich um einen sehr umfangreichen Buchungsbeleg handelt, kann das Feld *Konten aufsummieren* aktiviert werden. Es werden hierbei alle Beträge von einem Fibu-Konto aufsummiert dargestellt. Wenn pro Buchungskreis die Summe aufsummiert werden soll, aktivieren Sie *Summe nach Buchungskreis trennen*.

Wird das Auswahlfeld *ursprüngliche Werte verwenden* aktiviert, dann erfolgt der Ausdruck vor Aufrolldifferenzen (betrifft aufgerollte Monate).

Wurden in den Stammdaten des Klienten für die einzelnen Abgaben Kontonummern aus der FIBU vergeben (Verbindlichkeitskonten) und werden entweder klientenspezifische Kontonummern oder ein Kanzleilohnkontenplan (Aufwandskonten) verwendet, wird der Buchungsbeleg vom Programm automatisch vorkontiert.

!!! info "Tipp"
    Der Buchungsbeleg kann auch für mehrere Klienten gleichzeitig (klientenübergreifend) im Programmteil *Klient / Drucken / Journal / ÖGK / Buchungsbeleg* ausgedruckt werden.
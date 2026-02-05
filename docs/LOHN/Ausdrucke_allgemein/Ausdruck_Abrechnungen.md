# Ausdruck Abrechnungen

Die Abrechnungen der Dienstnehmer werden im Programmteil *Ausdruck / Abrechnungen* ausgedruckt.

## Ausdruck Abrechnungen - Optionen (1)

![Image](<img/image220.png>){width="500"}

Der erste Eingabebereich betrifft das Monat bzw. die Monate, für die die Abrechnungen ausgedruckt werden sollen.

Unterhalb kann ausgewählt werden, ob die Abrechnungen für einzelne Dienstnehmer durch Eingabe der Dienstnehmernummer; für alle Dienstnehmer des Klienten inklusive eventueller Dienstnehmer der Unterdienstgeber oder nur für Dienstnehmer eines oder mehrerer Unterdienstgeber ausgedruckt werden sollen.

Der Ausdruck der Abrechnungen kann auch nach angelegten [Auswahlkriterien](../Auswahlkriterien.md) erfolgen.

Weiters besteht die Möglichkeit, durch Anwahl des Feldes *alphabetisch sortiert* die Dienstnehmer in alphabetischer Reihenfolge oder entsprechend den festgelegten Auswahlkriterien sortiert auszugeben.

Durch Auswahl *Originalabrechnungen zusätzlich drucken* werden alle ursprünglichen Abrechnungen des ausgewählten Monats ausgedruckt.

Durch Auswahl *berichtigte Vormonate nicht drucken* werden die aufgerollten Monate nicht mit ausgedruckt, sondern nur der aktuelle Monat.

Wenn die Abrechnungen über den RZL-PDF Drucker per E-Mail versendet werden, muss das Feld *Einzeldruck* für den E-Mailversand aktiviert werden, damit pro Abrechnung ein Druckauftrag erstellt wird. Nach Aktivierung dieses Feldes können die zwei Filter *E-Mail-Adresse* und *Klientenportal* gesetzt werden. D. h. es werden nur die Abrechnungen der Dienstnehmer in den PFD-Drucker geladen, auf die die Filter zutreffen.

!!! info "Tipp"
    Das Hochladen von Abrechnungen auf das RZL-Klientenportal wird bei [*Abrechnungen für Dienstnehmer bereitstellen*](../RZL_Klientenportal.md) beschrieben.

Wird das Auswahlfeld *zwei Abrechnungen pro Seite* aktiviert, werden zwei Lohnabrechnungen auf einer A4-Seite ausgedruckt. Werden bei der Abrechnung des Dienstnehmers mehr als 4 oder 5 Lohnarten abgerechnet, dann hat die Abrechnung auf einer *A5-Seite* nicht mehr Platz, sondern benötigt eine ganze *A4-Seite*. In diesem Fall sollte das Auswahlfeld *2 Abrechnungen pro Seite* nicht aktiviert werden.

Durch Anwahl des Feldes *Formular (endlos) in Verwendung* kann festgelegt werden, dass die Abrechnung auf „diskrete“-Dreifach-Vordrucke ausgedruckt werden. Die Aktivierung des Auswahlfeldes *Formular (endlos)* *in* *Verwendung* soll bei Ausdruck mittels Matrixdrucker immer erfolgen (unter Windows der Ausnahmefall).

Die einzelnen Abrechnungen können mit einer *Schattierung* hinterlegt werden, wobei durch Anwahl der Schaltfläche *Farbe* zwischen verschiedenen Schattierungen ausgewählt werden kann. Der gewünschte Wert kann durch Probeausdrucke ermittelt werden.

!!! info "Tipp"
    Durch Anwahl der Auswahlfelder *Adressvorblatt, auf extra Seite* wird auf einem A4-Blatt zunächst die Adresse des Dienstnehmers und anschließend die Lohnabrechnung ausgedruckt. Diese Abrechnung wird gefaltet, in ein A5-Fensterkuvert kuvertiert und kann ohne irgendwelchen Etikettierungsaufwand als diskrete Lohnabrechnung versendet werden.

Wird nur das Auswahlfeld *Adressvorblatt* aktiviert, dann wird im ersten Drittel des Ausdrucks die Adresse des Dienstnehmers angedruckt und im unteren Bereich die Abrechnung.

Durch Anwahl *mit Lohnnebenkosten* wird ein extra Blatt mit der Aufstellung der Lohnnebenkosten zusätzlich ausgedruckt.

## Ausdruck Abrechnungen - Optionen (2)

![Image](<img/image221.png>){width="500"}

Wird das Auswahlfeld *Uest.-/ Mehrarbeitszuschläge getrennt* aktiviert, dann werden beim Ausdruck der Abrechnungen die Über- und Mehrarbeitsstunden in Grundlohn und Zuschläge getrennt.

Wenn bei einem Dienstnehmer Exekutionen abgezogen werden, können diese durch Aktivierung des Feldes *Exekutionsabzüge getrennt* einzeln aufgelistet werden.

Weiters besteht in diesem Programmteil die Möglichkeit, die *Dienstgebergesamtkosten* (inkl. Lohnnebenkosten), die *Zeitausgleichsverwaltung* (Abrechnungsbildschirm [*Zeitausgleich*](../Abrechnungsbildschirme/Zeitausgleich.md)) und die [*Urlaubsverwaltung*](../Abrechnungsbildschirme/Urlaub.md) können entweder *normal* oder *detailliert* ausgedruckt werden.

Zusätzlich können *Bankverbindung* des Dienstnehmers, das *Jahressechstel* und die *Kostenstelle* auf der Abrechnung angedruckt werden.

Wenn mehrere freie Lohnarten mit der gleichen Nummer abgerechnet werden, können diese Lohnarten durch Anwahl des Feldes *gleiche Lohnarten zusammenfassen* in einer Zeile dargestellt werden.

*Detail Auslandsbezüge* wurden für die Übergangsjahre 2012-2013 benötigt, um die Auslandsbezüge entsprechend darzustellen.

Das Feld *Lohnarten-Nr drucken* zeigt, bei der Verwendung von freien Lohnarten, die laufende Nummer der abgerechneten freien Lohnarten an.

Die im Abrechnungsbildschirm [*Eintritt*](../Abrechnungsbildschirme/Eintritt.md) hinterlegte Wochenarbeitszeit des Dienstnehmers wird durch Anwahl des Feldes *Wochenarbeitszeit drucken* auf der Abrechnung angezeigt.

Wenn das Modul [*Kollektivverträge*](../Kollektivverträge/Abrechnungsbildschirm_Kollektivvertrag.md) lizensiert ist, werden durch Anwahl des Feldes
*KV-Einstufung drucken* der zugeordnete Kollektivvertrag, die Tätigkeitsgruppe und der Beginn der Einstufung auf die Abrechnung gedruckt.

Wenn abweichende externe Dienstnehmer-Nummern verwendet werden, können diese Nummern durch Aktivierung der Option *externe DN-Nr. drucken* auf der Abrechnung angedruckt werden.

Wenn das Zusatzblatt zur Berechnung des Kontrollsechstels ausgedruckt werden soll, aktivieren Sie das Feld *K/6 Aufrollungen drucken*.

!!! warning "Hinweis"
    Die Abrechnung kann **nicht** in englischer Sprache ausgegeben werden.
## Pauschalstatistik

Siehe Kapitel 14.9, Seite [137](#pauschalstatistik)

## Offene Leistungen Statistik

Die Offene Leistungen-Statistik ermöglicht die Verwaltung der „noch
nicht verrechneten Leistungen“ zu einem bestimmten Stichtag. Diese
Statistik ist in der Lage die Offenen Leistungen zu einem bestimmten
Stichtag in der Vergangenheit zu ermitteln, auch wenn diese Leistungen
aktuell abgerechnet worden sind.

Nach dem Öffnen der Offenen Leistungen Statistik ist zuerst der
*Stichtag* zu definieren Bsp. offene Leistungen zum 31.12.. Initial wird
hier das Tagesdatum vorgeschlagen.


![](<img/image391.png>)

Anschließend besteht noch die Möglichkeit die Auswertung zu Gruppieren,
zu Filtern oder einzelne Spalten ein-/auszublenden (vgl. Kapitel 19.3,
Seite [161](#umsatzstatistik-allgemein)).

### Offene Leistungen Allgemein

Die Offene Leistungen Statistik zeigt Ihnen alle Zeilen die zum
definierten Stichtag noch nicht abgerechnet worden sind. Nachstehend ein
Beispiel eines Klienten der nicht pauschal, sondern nach den tatsächlich
angefallenen Leistungen abgerechnet wird.

Man möchte die offenen Leistungen des Klienten Nr. 1600 zum Stichtag
31.12.2022 herausfiltern. Dazu öffnet man die Offene Leistungen
Statistik, definiert den Stichtag und Filtert auf diesen Klienten.


![](<img/image392.png>)

Wurden nun die Leistungen von November 2022 bereits im Jänner 2023
abgerechnet ändert dies nichts an der offenen Leistungen Statistik zum
31.12.2022. Da zum eingegebenen Stichtag die Leistungen noch nicht
abgerechnet waren.

### Offene Leistungen mit Pauschalen

Wird nun ein Klient Pauschal abgerechnet (vgl. Kapitel 14, Seite
[118](#pauschalverrechnung)) ist der Zustand der Pauschalzeile für die
Ermittlung der offenen Leistungen Statistik ausschlaggebend.

Ausgangssituation: Mit Klient Nr. 146 ist eine monatliche Pauschale über
500 € für die Buchhaltung vereinbart.

**Fall 1** – die Pauschalzeile wurde noch nicht abgerechnet und es wurde
noch keinen Pauschalausgleich durchgeführt

Ansicht der Pauschalzeile:  
Ausgleichsstatus und Status sind leer.

![](<img/image393.png>)

Ansicht in der offenen Leistungen Statistik:  
In der offenen Leistungen Statistik wird die tatsächlich erfasste
Leistung des Mitarbeiters ausgewiesen inkl. dem Wert der Erfassungszeile
(Stundensatz \* Stundenanzahl). Nicht die vereinbarte Pauschale.

![](<img/image394.png>)

**Fall 2** – die Pauschale wurde bereits abgerechnet aber es wurde noch
kein Pauschalausgleich durchgeführt

Ansicht der Pauschalzeile:  
Ausgleichsstatus ist leer und der Status ist *Verrechnet.*

![](<img/image395.png>)

Ansicht in der offenen Leistungen Statistik:  
In der offenen Leistungen Statistik wird die tatsächlich erfasste
Leistung des Mitarbeiters ausgewiesen inkl. dem Wert der Erfassungszeile
(Stundensatz \* Stundenanzahl). Weiters wird die bereits abgerechnet
Pauschale in Abzug gebracht. Mittels des Rufzeichens am Beginn der
Zeile, weißt das Programm auf noch nicht ausgeglichene Pauschalen hin.

![](<img/image396.png>)

**Fall 3** - die Pauschalzeile wurde noch nicht abgerechnet aber es
wurde bereits ein Pauschalausgleich durchgeführt

Ansicht der Pauschalzeile:  
Der Ausgleichsstatus ist auf *Ausgeglichen* und der Status ist leer.  
![](<img/image397.png>)

Ansicht in der offenen Leistungen Statistik:  
In der offenen Leistungen Statistik wird die tatsächlich erfasste
Leistung des Mitarbeiters ausgewiesen inkl. dem Wert der Erfassungszeile
(Stundensatz \* Stundenanzahl). Weiters werden die beim
Pauschalausgleich ermittelten Zu-/Abschläge berücksichtigt.

![](<img/image398.png>)

**Fall 4** - die Pauschalzeile wurde abgerechnet und es wurde ein
Pauschalausgleich durchgeführt

Ansicht der Pauschalzeile:  
Der Ausgleichsstatus ist auf *Ausgeglichen* und der Status ist
*Verrechnet*

![](<img/image399.png>)

Ansicht in der offenen Leistungen Statistik:  
Diese Pauschalzeile ist nicht mehr in der offenen Leistungen Statistik,
da Sie bereits ausgeglichen und abgerechnet wurde.

## Transferstunden Statistik

Vgl. Kapitel 5.2, Seite [54](#transferstunden-statistik)
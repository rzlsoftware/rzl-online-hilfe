# Stammdaten Mitarbeiter

In den Mitarbeiterstammdaten werden grundlegende Einstellungen für die
Honorarverrechnung bzw. Leistungserfassung der Mitarbeiter verwaltet.

Sie gelangen in die Mitarbeiterstammdaten, wenn Sie den Punkt *STAMM* im
RZL-Board – *Personen/Klientenverwaltung – Mitarbeiter* auswählen.
Anschließend gelangen Sie in die Mitarbeiterliste. Wählen Sie den zu
bearbeitenden Mitarbeiter mit einem Doppelklick aus.

Beim Mitarbeiter selbst klicken Sie auf *HON Next*, um die
Honorarverrechnungs-Einstellungen zu hinterlegen.

![](img/image409.png)

!!! warning "Hinweis"
    Die HON-Mitarbeiterstammdaten sind nur für jene Personen ersichtlich,
    die auch das HON-Modul (Rolle Honorarverrechnung) benutzen dürfen.

Die Eingabefelder *Zeitausgleich Stichtag* und *Zeitausgleich
Anfangsbestand* sind für die Berechnung des Zeitausgleichs in der
Leistungserfassung des Mitarbeiters relevant.

Das hinterlegte *Mitarbeiter-Tarifschema* wird angezeigt. Weitere Infos
zum Mitarbeiter-Tarifschema finden Sie im Kapitel [Tarifschemata](Stammdaten%20HON%20Next/Tarifschemata.md).

Der *Eigenkosten-Stundensatz* zur späteren Berechnung der Eigenkosten
bei diversen Auswertungen ist zu hinterlegen. Das Arbeitszeitmodell und
der Urlaubsanspruch sowie der Beginn des Urlaubsjahres können ebenso
hinterlegt werden. Weiterführende Informationen zum Arbeitszeitmodell
finden Sie im Kapitel [Arbeitszeitmodelle](Stammdaten%20HON%20Next/Arbeitszeitmodelle.md).
Das Arbeitszeitmodell wird unter anderem für die
Leistungserfassung der Mitarbeiter benötigt. Weiterführende
Informationen zum Urlaub finden Sie im Kapitel [Urlaubskartei](Mitarbeiterübersicht/Urlaubskartei.md). Die Urlaubsinformationen werden als
Information für die Mitarbeiter in der Leistungserfassung dargestellt.

Die Option *Rahmenarbeitszeit ignorieren* kann aktiviert werden, wenn die Prüfung auf die Einhaltung der Rahmenarbeitszeit nicht erfolgen soll.

Die Option *Geschäftsführung oder leitende Anstellung* kann aktiviert
werden, wenn eine Arbeitszeitaufzeichnung nicht zwingend ist und die
Regeln des Arbeitszeitgesetzes nicht angewandt werden sollen.

Mit dem Feld *Abweichende Arbeitszeitaufzeichnung* kann für den gewählten Mitarbeiter die Art der Arbeitsaufzeichnung abweichend zum Standard hinterlegt werden, vgl. Kapitel [Mitarbeiter-Leistungserfassung](Einstellungen/Mitarbeiter%20Leistungserfassung.md).

Durch Aktivierung dieser Option prüft das Programm nicht mehr, ob
Arbeits- und Leistungszeit übereinstimmen, ob das Arbeitszeitgesetz
eingehalten wird oder ob die Leistungserfassung vollständig ist (z. B.:
Erfassung ganztägiger Zeitausgleich nicht notwendig).

!!! info "Tipp"
    Ausgetretene Mitarbeiter können Sie für die Leistungserfassung sperren,
    indem Sie in den Mitarbeiterstammdaten ein **Austrittsdatum** eintragen.

!!! info "Tipp"
    Die HON-Mitarbeiterstammdaten sind generationsverwaltet. Falls eine
    Änderung ab einem bestimmten Zeitpunkt gelten soll, so ist eine neue
    Generation anzulegen.

Wird eine Änderung ohne neue Generation eingegeben, erhalten Sie
folgenden Hinweis:

![](<img/image105.png>)

## Transferstundensätze

Dieser Eingabebereich ist nur aktiv, wenn mehrere [Unternehmensbereiche](Unternehmensbereiche.md)
angelegt wurden. Ist dies der Fall, dann ist in den Stammdaten der Mitarbeiter im Reiter
*Mitarbeiterdaten* festzulegen, für welchen Unternehmensbereich dieser
Mitarbeiter tätig ist **(1).** Weiters ist in den Stammdaten des
Klienten im Reiter *Klientendaten* festzulegen, welchem
Unternehmensbereich der Klient angehört **(2).**

![](<img/image106.png>)

![](<img/image108.png>)

In den Mitarbeiterstammdaten im Reiter *Transferstundensätze* werden die
Stundensätze für die interne Verrechnung zwischen mehreren
Unternehmensbereichen hinterlegt. Der Transferstundensatz wird nicht der
Honorarnotenerstellung zugrunde gelegt. Bei der Honorarnotenerstellung
werden die Stundensätze der jeweiligen Tarifschemata verwendet. Der
Transferstundensatz kommt dann zur Anwendung, wenn ein Mitarbeiter für
einen Klienten Leistungen erbringt, der einem anderen
Unternehmensbereich zugeordnet ist als der Mitarbeiter selbst. Der
Transferstundensatz wird für die Transferstunden-Statistik benötigt.

![](<img/image109.png>)

## Transferstunden-Statistik

Im HON Next können Sie über den Menüpunkt *Auswertungen* eine
Transferstunden-Statistik öffnen.

![](<img/image110.png>)

Diese Auswertung zeigt Ihnen initial alle Leistungen, bei denen sich der
Unternehmensbereich des Mitarbeiters und der Rechnungssteller, für den
die Leistungen erbracht wurden, unterscheiden. Durch Filtern des
Zeitraums oder durch Gruppieren und Filtern einzelner Spalten können
die dargestellten Zeilen eingeschränkt werden.

Die Spalte *Transferwert* wird aufgrund der erfassten Dauer mal dem
hinterlegten Transferstundensatz beim Mitarbeiter ermittelt.

![](<img/image111.png>)

In der Transferstunden-Statistik steht Ihnen das RZL-Layout
*Unternehmensbereich für Rechnungssteller* zur Verfügung (3). Diese
Auswertung zeigt Ihnen auf einen Blick, wie viel Dauer/Wert der jeweilige
Mitarbeiter-Unternehmensbereich für einen Rechnungssteller erfasst
wurde.

**Beispiel:**

Mitarbeiter, welche dem Unternehmensbereich *RZL Steuerberatung*
zugeordnet sind, haben für Klienten des Rechnungsstellers *RZL
Unternehmensberatung* 78 Stunden erfasst.

Mitarbeiter, welche dem *Unternehmensbereich Vier* zugeordnet sind, haben
für Klienten des Rechnungsstellers *RZL Steuerberatung* 4 Stunden
erfasst.

![](<img/image112.png>)


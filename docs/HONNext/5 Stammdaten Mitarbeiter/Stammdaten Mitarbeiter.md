# Stammdaten Mitarbeiter

In den Mitarbeiterstammdaten werden grundlegende Einstellungen für die
Honorarverrechnung bzw. Leistungserfassung der Mitarbeiter verwaltet.

Sie gelangen in die Mitarbeiterstammdaten, wenn Sie den Punkt *STAMM* im
RZL-Board *– Personen/Klientenverwaltung – Mitarbeiter* auswählen.
Anschließend gelangen Sie in die Mitarbeiterliste. Wählen Sie den zu
bearbeitenden Mitarbeiter mit einem Doppelklick aus.

Beim Mitarbeiter selbst klicken Sie auf *HON,* um die
Honorarverrechnungs-Einstellungen zu hinterlegen.

Abb. 5‑1 Stammdaten Mitarbeiter

![](<img/image104.png>)

HInweis

Die HON Mitarbeiterstammdaten sind nur für jene Personen ersichtlich,
die auch das HON Modul (Rolle Honorarverrechnung) benutzen dürfen.

Die Eingabefelder *Zeitausgleich Stichtag* und *Zeitausgleich
Anfangsbestand* sind für die Berechnung des Zeitausgleiches in der
Leistungserfassung des Mitarbeiters relevant.

Das hinterlegte *Mitarbeiter-Tarifschema* wird angezeigt. Weitere Infos
zum Mitarbeiter-Tarifschema finden Sie im Kapitel 2.3 Seite
[21](#tarifschemata) ff beschrieben.

Der *Eigenkosten-Stundensatz* zur späteren Berechnung der Eigenkosten,
bei diversen Auswertungen, ist zu hinterlegen. Das Arbeitszeitmodell und
der Urlaubsanspruch, sowie der Beginn des Urlaubsjahres können ebenso
hinterlegt werden. Weiterführende Informationen zum Arbeitszeitmodell
finden Sie im Kapitel 2.4 Seite [31](#arbeitszeitmodelle) ff
beschrieben. Das Arbeitszeitmodell wird unter anderem für die
Leistungserfassung der Mitarbeiter benötigt. Weiterführende
Informationen zum Urlaub finden Sie im Kapitel 9.4, Seite
[75](#urlaubskartei) beschrieben. Die Urlaubsinformationen werden als
Information für die Mitarbeiter in der Leistungserfassung dargestellt.

Die Option *Geschäftsführung oder leitende Anstellung* kann aktiviert
werden, wenn eine Arbeitszeitaufzeichnung nicht zwingend ist und die
Regeln des Arbeitszeitgesetztes nicht angewandt werden sollen.

Durch Aktivierung dieser Option prüft das Programm nicht mehr, ob
Arbeits- und Leistungszeit übereinstimmen, ob das Arbeitszeitgesetzt
eingehalten wird oder ob die Leistungserfassung vollständig ist (Bsp.
Erfassung ganztätiger Zeitausgleich nicht notwendig).

Tipp

Ausgetretene Mitarbeiter können Sie für die Leistungserfassung sperren,
indem Sie in den Mitarbeiterstammdaten ein **Austrittsdatum** eintragen.

Tipp

Die HON Mitarbeiter Stammdaten sind generationsverwaltet. Falls eine
Änderung ab einem bestimmten Zeitpunkt gelten soll, so ist eine neue
Generation anzulegen.

Wird eine Änderung ohne neue Generation eingegeben, erhalten Sie
folgenden Hinweis:

![](<img/image105.png>)

## Transferstundensätze

Dieser Eingabebereich ist nur aktiv, wenn mehrere Unternehmensbereiche
angelegt wurden (Kapitel 4, Seite [50](#unternehmensbereiche)). Ist dies
der Fall, dann ist in den Stammdaten der Mitarbeiter im Reiter
*Mitarbeiterdaten* festzulegen, für welchen Unternehmensbereich dieser
Mitarbeiter tätig ist **(1).** Weiters ist in den Stammdaten des
Klienten im Reiter *Klientendaten* festzulegen, welchem
Unternehmensbereich der Klient angehört **(2).**

Abb. 5‑2 Zuordnung Mitarbeiter zu Unternehmensbereich

![](<img/image106.png>)

Abb. 5‑3 Zuordnung Klient zu Unternehmensbereich

![](<img/image107.png>)
![](<img/image108.png>)

In den Mitarbeiterstammdaten im Reiter *Transferstundensätze* werden die
Stundensätze für die interne Verrechnung zwischen mehreren
Unternehmensbereichen hinterlegt. Der Transferstundensatz wird nicht der
Honorarnotenerstellung zugrunde gelegt. Bei der Honorarnotenerstellung
werden die Stundensätze der jeweiligen Tarifschemata verwendet. Der
Transferstundensatz kommt dann zur Anwendung, wenn ein Mitarbeiter für
einen Klienten Leistungen erbringt, der einem anderen
Unternehmensbereich zugeordnet ist als der Mitarbeiter selbst. Der
Transfer-Stundensatz wird für die Transferstunden Statistik benötigt.

Abb. 5‑4 Transferstundensätze

![](<img/image109.png>)

## Transferstunden Statistik

Im HON Next können Sie über den Menüpunkt *Auswertungen* eine
Transferstunden Statistik öffnen.

Abb. 5‑5 Transferstunden Statistik

![](<img/image110.png>)

Diese Auswertung zeigt Ihnen initial alle Leistungen, wo sich der
Unternehmensbereich des Mitarbeiters und der Rechnungssteller für den
die Leistungen erbracht wurden unterscheiden. Durch Filtern des
Zeitraumes oder durch Gruppieren und Filtern einzelner Spalten können
die dargestellten Zeilen eingeschränkt werden.

Die Spalte *Transferwert* wird aufgrund der erfassten Dauer \* dem
hinterlegten Transferstundensatz beim Mitarbeiter ermittelt.

Abb. 5‑6 Transferstunden Statistik Zeilen

![](<img/image111.png>)

In der Transferstunden Statistik steht Ihnen das RZL Layout
*Unternehmensbereich für Rechnungssteller* zur Verfügung (3). Diese
Auswertung zeigt Ihnen auf einen Blick wie viel Dauer/Wert des jeweilige
Mitarbeiter Unternehmensbereich für einen Rechnungssteller erfasst
wurde.

**Beispiel:**

Mitarbeiter, welche dem Unternehmensbereich *RZL Steuerberatung*
zugeordnet sind haben für Klienten des Rechnungsstellers *RZL
Unternehmensberatung* 78 Stunden erfasst.

Mitarbeiter, welche dem *Unternehmensbereich Vier* zugeordnet sind haben
für Klienten des Rechnungsstellers *RZL Steuerberatung* 4 Stunden
erfasst.

Abb. 5‑7 Unternehmensbereich zu Rechnungssteller

![](<img/image112.png>)


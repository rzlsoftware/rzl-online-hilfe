# Beispiel IST-Versteuerer - Wiederkehrende Anzahlung M20

Ausgangssituation:   
Die Kanzleibuchhaltung wird nach der IST-Versteuerung gebucht. In den Stammdaten in der FIBU kann die *Teilrechnungsverbuchung* daher nicht aktiviert werden.

Im Unternehmensbereich im Board ist die Option *Teilrechnungsverbuchung* **NICHT** aktiv. In den Grundeinstellungen im HON Next ist die Option *Anzahlungsnoten* gesetzt und das *Konto für Anzahlungen **M20*** ist hinterlegt.

## 	Anlage der Anzahlung

Der Klient Nr. 103 leistet monatlich immer am ersten jedes Monats eine Anzahlung in der Höhe von 250 € für die Verrechnungsgruppe Buchhaltung.

Im HON Next über *Akonto/Anzahlungen / wiederkehrende Anzahlungen* werden die Stammdaten der wiederkehrenden Anzahlung **einmalig** angelegt. Die regelmäßigen Anzahlungszeilen zum Abrechnen, werden vom RZL Dienst generiert.

![](<img/image21.png>)
 
•	Häufigkeit: Wie oft wird die Anzahlung geleistet? -> monatlich = 1   
•	Datum der nächsten Zeile: Wann wird die Anzahlung ca. geleistet? -> immer am ersten jedes Monats   
Beim Datum der nächsten Zeile ist auch zu berücksichtigen, wann Sie die Anzahlungsnote an den Klien-ten schicken möchten (in diesem Bsp. ab 01.01. möglich).   
•	Geplanter Leistungszeitraum? Wann wird die Leistung für diese Anzahlung ca. von den Mitarbeitern er-bracht? -> im Folgemonat   
•	Projektzeitraum? Welchen Projektzeitraum betrifft die geleistete Anzahlung? -> Monat der Anzahlung (=BH für Jänner 2024)  

Grundsätzlich erzeugt nun der RZL Dienst monatlich die benötigten Anzahlungszeilen zum Abrechnen. In diesem Beispiel generieren wir über die Schaltfläche *Anzahlungen generieren* die bisher versäumten Anzahlungszeilen.

Mit der Vorschau ist nun ersichtlich, dass mit 01.01. die Anzahlungszeile für die BH 01/24 erzeugt wird, mit 01.02. die Anzahlungszeile für die BH 02/24 usw. 

![](<img/image22.png>)
 
Die generierten Anzahlungszeilen sind im HON Next über *Akonto/Anzahlungen / Anzahlungen* ersichtlich.

![](<img/image23.png>)
 
##	Erstellung der Anzahlungsnote
Über *Honorarnoten / Notenerstellung* kann nun die Anzahlungsnote für den Klienten erstellt werden.

![](<img/image24.png>)
 
![](<img/image25.png>)
 
!!! warning "Hinweis"
    Die Anzahlungszeile hat nun den Status Verrechnet in Anzahlungsnote.

## 	Verbuchung der Anzahlungsnote
Nachdem die Anzahlungsnote im HON Next über *Honorarnoten / Notenübersicht* finalisiert wurde, kann der Beleg in der FIBU verbucht werden.

In der FIBU steigt man über *Buchen / Belegsverbuchung aus DMS System* ein (Belegkreis AR). Die Anzahlungsnote wird auf das hinterlegte *Anzahlungskonto M20* mit dem **Steuercode M20** verbucht. In der FIBU wird die UST aufgrund der IST-Versteuerung auf das Wartekonto verbucht.

![](<img/image26.png>)
 
##	Erstellung Schlussrechnung
Nachdem die Buchhaltung für Jänner 2024 fertiggestellt wurde und von den Mitarbeitern alle Leistungen erfasst wurden, kann im HON über *Honorarnoten / Notenerstellung* die Schlussrechnung an den Klienten ge-stellt werden.

![](<img/image27.png>)
 
Die bereits abgerechnete und finalisierte Anzahlungsnote wird in Abzug gebracht.

![](<img/image28.png>)
 
!!! warning "Hinweis"
    Die Anzahlungszeile hat nun den Status *Verrechnet in Schlussnote*.


##	Verbuchung der Schlussrechnung
Nachdem die Schlussrechnung im HON Next über *Honorarnoten / Notenübersicht *finalisiert wurde, kann der Beleg in der FIBU verbucht werden.

In der FIBU steigt man über *Buchen / Belegsverbuchung aus DMS System *ein (Belegkreis AR). Die Buchung erfolgt nun wie bei allen Noten auf das bei der Verrechnungsgruppe/Tätigkeit hinterlegte Erlöskonto. Beim Verbuchen der Schlussrechnung muss in diesem Fall **KEIN** OP-Ausgleich durchgeführt werden. Die zuvor ge-buchte Anzahlungsnote wird automatisch mit **Minus Betrag** storniert.

![](<img/image29.png>)
 

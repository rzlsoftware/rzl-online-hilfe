#	Beispiel SOLL-Versteuerer - Wiederkehrende Anzahlung T20
Ausgangssituation:
Die Kanzleibuchhaltung wird nach der Soll-Versteuerung gebucht und in den Stammdaten in der FIBU ist die Teilrechnungsverbuchung sowie die Verbuchung der Schlussrechnung in voller Höhe aktiviert.
Weiters ist im Unternehmensbereich im Board die Option Teilrechnungsverbuchung aktiv. In den Grundein-stellungen im HON Next die Option Anzahlungsnoten gesetzt und das Konto für Anzahlungen T20 ist hinter-legt.
##	Anlage der Anzahlung
Der Klient Nr. 55 leistet monatlich immer am ersten jedes Monats eine Anzahlung in der Höhe von 250 € für die Verrechnungsgruppe Buchhaltung.
Im HON Next über Akonto/Anzahlungen / wiederkehrende Anzahlungen werden die Stammdaten der wieder-kehrenden Anzahlung einmalig angelegt. Die regelmäßigen Anzahlungszeilen zum Abrechnen, werden vom RZL Dienst generiert.
Abb. 14 11 Beipsiel SOLL Versteuerer
 
•	Häufigkeit: Wie oft wird die Anzahlung geleistet?  monatlich = 1
•	Datum der nächsten Zeile: Wann wird die Anzahlung ca. geleistet?  immer am ersten jedes Monats
Beim Datum der nächsten Zeile ist auch zu berücksichtigen, wann Sie die Anzahlungsnote an den Klien-ten schicken möchten (in diesem Bsp. ab 01.01. möglich).
•	Geplanter Leistungszeitraum? Wann wird die Leistung für diese Anzahlung ca. von den Mitarbeitern er-bracht?  im Folgemonat
•	Projektzeitraum? Welchen Projektzeitraum betrifft die geleistete Anzahlung?  Monat der Anzahlung (=BH für Jänner 2024)
Grundsätzlich erzeugt nun der RZL Dienst monatlich die benötigten Anzahlungszeilen zum Abrechnen. In diesem Beispiel generieren wir über die Schaltfläche Anzahlungen generieren die bisher versäumten Anzah-lungszeilen.
Mit der Vorschau ist nun ersichtlich, dass mit 01.01. die Anzahlungszeile für die BH 01/24 erzeugt wird, mit 01.02. die Anzahlungszeile für die BH 02/24 usw. 
Abb. 14 12 Beipsiel SOLL Versteuerer – Anzahlung generieren
 
Die generierten Anzahlungszeilen sind im HON Next über Akonto/Anzahlungen / Anzahlungen ersichtlich.
Abb. 14 13 Beipsiel SOLL Versteuerer – Anzahlungszeile
 
##	Erstellung der Anzahlungsnote
Über Honorarnoten / Notenerstellung kann nun die Anzahlungsnote für den Klienten erstellt werden.
Abb. 14 14 Beipsiel SOLL Versteuerer – Anzahlungsnote
 
Abb. 14 15 Beipsiel SOLL Versteuerer – Anzahlungsnote
 
HINWEIS
Die Anzahlungszeile hat nun den Status Verrechnet in Anzahlungsnote.

##	Verbuchung der Anzahlungsnote
Nachdem die Anzahlungsnote im HON Next über Honorarnoten / Notenübersicht finalisiert wurde, kann der Beleg in der FIBU verbucht werden.
In der FIBU steigt man über Buchen / Belegsverbuchung aus DMS System ein (Belegkreis AR). Die Anzahlungs-note wird auf das hinterlegte Anzahlungskonto T20 mit dem Steuercode T20 verbucht. In der FIBU wird aufgrund der Teilrechnungssystematik die UST auf das UST-Wartekonto verbucht.
Abb. 14 16 Beipsiel SOLL Versteuerer – Verbuchung Anzahlungsnote
 
##	Erstellung Schlussrechnung
Nachdem die Buchhaltung für Jänner 2024 fertiggestellt wurde und von den Mitarbeitern alle Leistungen er-fasst wurden, kann im HON über Honorarnoten / Notenerstellung die Schlussrechnung an den Klienten ge-stellt werden.
Abb. 14 17 Beipsiel SOLL Versteuerer – Erstellung Schlussnote
 
Die bereits abgerechnete und finalisierte Anzahlungsnote wird in Abzug gebracht.
Abb. 14 18 Beipsiel SOLL Versteuerer – Erstellung Schlussnote
 
##	Verbuchung der Schlussrechnung
Nachdem die Schlussrechnung im HON Next über Honorarnoten / Notenübersicht finalisiert wurde, kann der Beleg in der FIBU verbucht werden.
In der FIBU steigt man über Buchen / Belegsverbuchung aus DMS System ein (Belegkreis AR). Die Buchung er-folgt wie bei allen Noten auf das bei der Verrechnungsgruppe/Tätigkeit hinterlegte Erlöskonto. Beim Verbu-chen der Schlussrechnung MUSS im OP-Feld über die Schaltfläche Teilrechnungen der OP-Ausgleich der Teil-rechnung und der Teilzahlung zwingend durchgeführt werden. Ohne OP-Ausgleich kann die Schlussrechnung nicht verbucht werden.
Abb. 14 19 Beipsiel SOLL Versteuerer – Verbuchung Schlussnote
 
HINWEIS
Die Anzahlungszeile hat nun den Status Verrechnet in Schlussnote.

HINWEIS 
Damit die Schlussrechnung verbucht werden kann, muss vorher die Teilrechnung verbucht werden. In ei-nem Beleglauf die Teilrechnung und die Schlussrechnung zu verbuchen ist nicht möglich.

HINWEIS
Ein OP-Ausgleich von Teilrechnungen bei Splitbuchungen ist nicht möglich.

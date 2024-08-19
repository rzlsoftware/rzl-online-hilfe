# Allgemeines

Bei der Anzahlungsrechnung handelt es sich um eine Rechnung, welche der Rechnungssteller für eine zukünftig zu erbringende Leistung erstellt. Das bedeutet, dass noch keine erbrachte Leistung existiert. Anzah-lungsrechnungen werden auch Vorauszahlungsrechnungen genannt und in der Regel vor allem bei der Durchführung von größeren Projekten gestellt.

## Unterschied Anzahlungen und Akonto
Bei Anzahlungen werden vorab Anzahlungsnoten mit UST-Ausweis erstellt, diese werden in der FIBU verbucht und abschließend bei der Schlussrechnung in Abzug gebracht.
Akonten werden ohne UST-Ausweis direkt bei der Note vom Bruttobetrag abgezogen. Es gibt nur eine Akontozahlung aber keine vorangegangene Rechnung.

##  Unterschied Anzahlungen und Teilrechnungen RZL FIBU
Beides sind Anzahlungsrechnungen und unterliegen der Ist-Versteuerung. Der Unterschied ist, dass bei der Teilrechnung der Teilrechnungserlös vorab gebucht wird und bei der Anzahlungsrechnung nicht (siehe auch Kapitel 6 Anzahlungen und Teilrechnungen im FIBU Handbuch).

### RZL FIBU Anzahlungen
Hier wird direkt die Anzahlung (Zahlungseingang mit dem Steuercode A20, A10, A13 usw.) verbucht. Es erfolgt vorab keine Buchung der Anzahlungsrechnung selbst.
Abschließend wird eine Schlussrechnung erstellt, in der im OP-Ausgleich über die Schaltfläche Anzahlungen alle dazugehörigen Anzahlungen ausgewählt werden.

!!! warning "Hinweis"
    Wird nicht direkt von HON Next unterstützt.

### RZL FIBU Teilrechnungen
Hier wird zuerst die Teilrechnung (T20, T10 usw.) gebucht. Bei den darauffolgenden Zahlungen wird dann bei der Verbuchung der Teilrechnungs-OP ausgewählt und somit wird die Zahlung als Teilzahlung gekenn-zeichnet.
Abschließend wird die Schlussrechnung erstellt, in der im OP-Ausgleich über die Schaltfläche Teilrechnungen alle dazugehörigen Teilrechnungen und Teilzahlungen ausgewählt werden.

!!! warning "Hinweis"
    Es wird nur die FIBU Einstellung Teilrechnungsverbuchung + Schlussrechnung in voller Höhe vom HON Next unterstützt. Ohne Schlussrechnung in voller Höhe wird nicht unterstützt.
    ![](<img/image1.png>)

!!! warning "Hinweis"
    Sind Sie IST-Versteuerer, kann die Teilrechnungsverbuchung in der FIBU nicht aktiviert werden. Daher wer-den bei Anzahlungen die jeweiligen Anzahlungserlöskonten (M20, IGL, RC) gebucht und diese dann bei der Schlussrechnung wieder abgezogen (siehe Kapitel 14.6, Seite 134).
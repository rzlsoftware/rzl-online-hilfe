# Laufende Abrechnung mit Änderung

Nach Aufruf des Menüpunkts *Abrechnungen / Lfd. Abrechnung mit Änderung* wird folgender Dialog aufgerufen:

![Image](<img/image39.png>){width="500"}

Der Menüpunkt *Abrechnung mit Änderung* ermöglicht die Abrechnung eines Teils der Dienstnehmer oder der gesamten Dienstnehmer eines Klienten. Nach Anwahl der Schaltfläche *Abrechnen* wird automatisch in den Abrechnungsbildschirm gewechselt und die gewünschten Änderungen können vorgenommen werden.

!!! info "Tipp"
    Im Programmteil *Bearbeiten / Übernahme / Datenimport laufende Abrechnung* kann ein [Datenimport](../Datenimport/Allgemeines.md) für diese Abrechnungsart durchgeführt werden.

!!! warning "Hinweis"
    Ist ein Dienstnehmer in der Liste mit einem Rufzeichen markiert, so sind im [Abrechnungsbildschirm *Stammdaten Fristen*](../Abrechnungsbildschirme/Stammdaten%20Fristen.md) Anmerkungen eingetragen, bei denen die Frist abgelaufen ist. Wird der Dienstnehmer angewählt, dann erscheint die betreffende Anmerkung (z. B. Geburtstag, Lohnerhöhung) am Eingabebildschirm.

Sie haben vier verschiedene Möglichkeiten auszuwählen, welche Dienstnehmer abgerechnet werden sollen:

**Dienstnehmer**

Wird das Auswahlfeld *Dienstnehmer* ausgewählt, so können sämtliche Dienstnehmer des Klienten in einem Vorgang abgerechnet werden.

Soll nur ein Teil der Dienstnehmer abgerechnet werden, so sind die Kästchen, die sich vor den betreffenden Dienstnehmernummern befinden, mittels Maus oder Leertaste zu aktivieren und über die Schaltfläche *Abrechnen* abzurechnen.

Weiters kann durch Eingabe eines Bereiches von Dienstnehmer-Nummern bestimmt werden, welche Dienstnehmer abgerechnet werden sollen.

!!! info "Tipp"
    Einzelne Dienstnehmer können mittels *Match-Code* durch Eingabe der Anfangsbuchstaben des Nachnamens im Auswahlfeld *Nummer* gesucht werden. Eine erweiterte Match-Code-Suche wird durch das Zeichen * (Stern) und der entsprechenden Buchstaben ermöglicht. In diesem Fall sucht das Programm nach sämtlichen Dienstnehmern, welche die nach dem Stern eingetragenen Buchstaben beinhalten.

**Klient**

Das Auswahlfeld *Klient* bewirkt, dass alle Dienstnehmer eines Klienten inklusive sämtlicher Dienstnehmer der Unterdienstgeber abgerechnet werden. Es besteht in diesem Fall nicht die Möglichkeit, einzelne Dienstnehmer von der Abrechnung auszunehmen.

**UDG (Unterdienstgeber)**

Wird das Auswahlfeld *UDG* aktiviert, so besteht die Möglichkeit, die Mitarbeiter der jeweiligen Unterdienstgeber des Klienten abzurechnen, jedoch ohne die Möglichkeit einzelne Dienstnehmer von der Abrechnung auszunehmen.

**Auswahlkriterium**

Über den Menüpunkt *Stamm / Auswahlkriterium* können individuelle Filterkriterien angelegt und anschließend dem Dienstnehmer zugeordnet werden. Wird hier ein entsprechendes Kriterium festgelegt, stehen nur mehr die betroffenen Dienstnehmer zur Auswahl.

!!! info "Tipp"
    Durch Anwahl der Option *abrechenbare DN* beschränkt sich die Anzeige der Dienstnehmer auf jene Mitarbeiter, die im gewählten Monat laufend abgerechnet werden können.

!!! warning "Hinweis"
    Wurden Dienstnehmer bereits abgerechnet erscheint die Meldung *„Dienstnehmer bereits abgerechnet“*. War der zuletzt abgerechnete Monat nicht der Vormonat, erscheint ebenfalls ein Warnhinweis vom Programm.

Sollten sich nachträgliche Änderungen ergeben, bzw. soll der letzte bereits abgerechnete Monat noch einmal neu berechnet werden, so besteht durch Anwahl des Menüpunkts *Abrechnungen / Korrektur letzte Abrechnung* die Möglichkeit, bei den betreffenden Dienstnehmern Korrekturen vorzunehmen.

Weiter zurückreichende Änderungen können nur mehr durch eine [Lohn- und Gehaltsaufrollung](../Abrechnungen/Aufrollung/Lohn-%20und%20Gehaltsaufrollung.md) vorgenommen werden.
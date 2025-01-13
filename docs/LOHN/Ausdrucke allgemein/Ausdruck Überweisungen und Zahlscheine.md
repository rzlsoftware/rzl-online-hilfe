## Ausdruck Überweisungen/Zahlscheine

Bei Durchführung der Überweisungen der Lohnabrechnungen (*Ausdruck / Überweisungen, Zahlscheine* bzw. Überweisungen mittels SEPA) wird dies beim Dienstnehmer vermerkt. Damit ist sichergestellt, dass eine Überweisung nicht versehentlich zweimal erfolgen kann. Ist es erforderlich, die Überweisung nochmals auszudrucken bzw. die Überweisungs-Datei nochmals zu erstellen, muss vorher ein *Repair* (Kapitel 13.9, Seite [238](#repair-überweisungen)) der Überweisungen durchgeführt werden.

### Überweisungsliste Abrechnungen Inland / Ausland / Abgaben / Exekutionsbeträge / Sonstige Behörden

Die Überweisungsliste wird pro Dienstgeber oder aber auch pro Unterdienstgeber als Auftrag an die Bank des Dienstgebers ausgedruckt. Es ist dazu kein eigenes Formular notwendig. Es werden nur die Überweisungsbeträge angeführt, nicht jedoch die Lohnabgaben.

Die Überweisungsliste kann auch für die Dienstgeberabgaben gedruckt werden.

Durch Anwahl des Feldes *IBAN und BIC drucken*, werden anstatt Bankleitzahl und Kontonummer eben IBAN und BIC angedruckt.

!!! warning "Hinweis"
    Es kann zwischen den in den *Dienstgeberstammdaten* (Kapitel 2.1.1, Seite [23](#registerblatt-bank-überweisung-zahltag)) oder *Unter­dienstgeberstammdaten* (Kapitel 2.2, Seite [37](#unterdienstgeber-1)) angelegten Banken ausgewählt werden.

Beim Ausdruck der Überweisungslisten wird bei den Abrechnungen automatisch ein Sperrvermerk gesetzt. Ein neuerlicher Ausdruck der *Überweisungsliste Abrechnungen* kann nur nach einem *Repair* (*Bearbeiten/Repair/Überweisungen/Überweisung Abrechnung zurücksetzen*) durchgeführt werden.

### Überweisung Abrechnungen

Nach Anwahl des Menüpunktes *Ausdruck / Überweisungen/Zahlscheine / Abrechnungen (Inland)* erscheint folgender Dialog:

![Image](<img/image225.png>)

!!! waring "Hinweis"
    Der Ausdruck von Überweisungen und Zahlscheinen wird nur für Dienstnehmer durchgeführt, bei denen im Abrechnungsbildschirm *Stammdaten Dienstnehmer* (Kapitel 5.3, Seite [52](#stammdaten-dienstnehmer)) die vollständige Bankverbindung eingegeben worden ist.

Die Formulare können für einzelne Dienstnehmer, für den gesamten Klienten inklusive Unterdienstgeber, oder auch nur für einzelne Unterdienstgeber ausgedruckt werden. Bei einem dienstgeberweisen Ausdruck wird automatisch ein Sammelüberweisungsbeleg ausgedruckt.

**Zahlschein**

Durch Anwahl des Auswahlfeldes *Zahlschein* können Zahlscheine als Einzelformular ausgedruckt werden.

!!! warning "Hinweis"
    Werden die A4-Zahlscheinvordrucke verwendet, dann ist das Feld *Einzelblatt,* aber nicht das Feld *einreihig* zu aktivieren, da diese Zahlscheinvordrucke in der Regel zweireihig sind.

**Überweisung**

Diese Option kann für den Ausdruck von Überweisungen im A4-Format verwendet werden. Wird das Feld *Einzelblatt* deaktiviert, kann durch Anwahl des Feldes *drei pro Seite* auf Endlosausdruck umgestellt werden.

**Sepa**

Für den Ausdruck von Sepa-Zahlungsanweisungen werden als Stammdaten der Bankverbindung immer IBAN und BIC verwendet. Daher müssen IBAN und BIC sowohl in den *Dienstnehmerbankverbindungen*, als auch in der *Dienstgeberbankverbindung* eingetragen werden.

Sollten die Formulare (Zahlscheine, Überweisungsformulare) nicht ordnungsgemäß ausgedruckt werden, so können über die Schaltfläche *Einstellungen* (siehe Handbuch Installation und allgemeine Programmbeschreibung Kapitel 6 Ausdrucke) Änderungen bei den Seitenrändern, bei der Schriftgröße oder bei der Schriftart vorgenommen werden, um einen ordnungsgemäßen Ausdruck zu erreichen.

Um die Änderungen wirksam werden zu lassen, ist das Auswahlfeld *Einstellungen in der DFV berücksichtigen* zu aktivieren.

**Sammelüberweisung drucken**

Wird dieses Auswahlfeld deaktiviert, wird die Erstellung einer Sammelüberweisung unterdrückt.

### Überweisung Abgaben

Die Überweisungen der Lohnabgaben können klientenweise oder pro Unterdienstgeber ausgedruckt werden. Hinsichtlich der verwendeten Formulare gilt das oben angeführte.

Um den Ausdruck der Überweisungen überhaupt zu ermöglichen, sind die betreffenden Bankverbindungen der einzelnen Behörden vollständig auszufüllen.

!!! warning "Hinweis"
    Weiters ist es unbedingt erforderlich im Registerblatt *FA, ÖGK, Überweisung* der Stammdaten des Klienten und UDG im Eingabebereich *Überweisungen* die entsprechenden Behörden zu aktivieren.

### Überweisung BV-Übertragungsbeträge

Dieser Programmteil ermöglicht den Ausdruck der Überweisung für die Übertragungsbeträge an die jeweilige BV-Kasse bei einem Vollumstieg eines Mitarbeiters ins neue Abfertigungssystem.

Damit die Erstellung erfolgreich durchgeführt werden kann, muss die BV-Kasse in den Stammdaten der Behörden mit der Bankverbindung angelegt sein. Die BV-Kasse muss in den Stammdaten des Klienten im Registerblatt *ÖGK, BV-Kasse* verankert werden.

Die Übertragungsbeträge werden bei den einzelnen Dienstnehmern im Abrechnungsbildschirm *Stammdaten Fristen* im Bereich *Vollumstieg Abfertigung neu* eingetragen.

### Überweisung Exekutionsbeträge

Der Programmteil ermöglicht den Ausdruck der vom Programm errechneten Exekutionsbeträge (vgl. Kapitel 22, Seite [302](#section-16)) für die einzelnen Monate. Nach dem Ausdruck wird für den jeweiligen Dienstnehmer und dem jeweiligen Monat ein Sperrvermerk gesetzt, damit der Ausdruck nicht versehentlich noch einmal erfolgt.

Dieser Sperrvermerk kann im Programmteil *Bearbeiten / Repair / Überweisungen / Überweisung Exekutionsbeträge zurücksetzen* wieder gelöscht werden. Nachdem Repair kann der Ausdruck nochmals durchgeführt werden.

### Überweisung Sonstige Behörden

Dieser Programmteil ermöglicht den Ausdruck der Überweisung für die Sonstigen Behörden.

Damit die Erstellung erfolgreich durchgeführt werden kann, muss die Sonstige Behörde in den Stammdaten der Behörden mit der Bankverbindung angelegt sein. Die Daten müssen in den Stammdaten des Klienten im Registerblatt *Sozialfonds, Überw. an Behörden* verankert werden.

Die Beträge für die Behörde werden bei den einzelnen Dienstnehmern im Abrechnungsbildschirm *Freie Lohnarten* erfasst.

### händisch erstellen

Im Programmteil *Ausdruck / Überweisungen / Zahlscheine / händisch erstellen* kann ein Zahlschein manuell erstellt und ausgedruckt werden.

### Test

Dieser Programmteil ermöglicht den Ausdruck eines Musters über die Überweisung bzw. eines Zahlscheines, um die richtige Einstellung der Formulare am Drucker überprüfen zu können.
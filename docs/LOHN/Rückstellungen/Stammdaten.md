## Stammdaten

Im Menüpunkt *Stamm / Klient / Details Rückstellungen (1), Details Rückstellungen (2)*, *Details Rückstellungen* *(3) und Details Rückstellungen (4)* können die Grundeinstellungen für die einzelnen Rückstellungen aufgerufen bzw. bearbeitet werden. Alle Rückstellungen können auch in ASCII (.csv-Datei) ausgegeben werden.

### Details Rückstellungen (1)

![Image](<img/image250.png>)


**Rechnungszinssatz**

Das Feld *Rechnungszinssatz* ermöglicht die Eingabe eines Prozentsatzes mit bis zu 2 Kommastellen (negative Zinssätze sind möglich). Für die unterschiedlichen Rückstellungsarten wird es daher nötig sein, die Rechnungszinssätze über dieses Feld zu adaptieren.

**Pensionsalter Männer, Frauen**

Das Pensionsantrittsalter wird sich normalerweise nach der aktuellen Gesetzeslage richten. Das durchschnittliche Pensionsalter nach den statistischen Unterlagen des Unternehmens oder der Pensionsversicherungsanstalten oder bei einzelvertraglicher Regelung der vertragliche Zeitpunkt kommen ebenfalls in Betracht.

**Gesetzliches Pensionsalter verwenden**

Wird dieses Auswahlfeld aktiviert, dann wird die schrittweise Erhöhung des Mindestpensionsalters für Frauen automatisch berücksichtigt. Die Berücksichtigung erfolgt bis zum Pensionsalter das in den Feldern Pensionsalter (max.) für Männer und Frauen eingetragen ist. Das Feld Pensionsalter darf daher trotzdem nicht auf null belassen werden.

**Fluktuationsabschläge**

Fluktuationsabschläge für die Abfertigungsrückstellung werden in diese Felder eingetragen und reduzieren die fiktiven Ansprüche bei der Abfertigungs- und der Jubiläumsgeldrückstellung.

**Gehaltssteigerung AFRAC**

Diverse Fachgutachten fordern die Berücksichtigung der Abfertigungen bzw. Jubiläumsgelder mit dem Erfüllungsbetrag d. h. unter Einbeziehung der zu erwartenden Gehaltssteigerungen.

**Netto-/Realwertmethode und Rentenendwertfaktor progressiv**

Bei der Bruttomethode mit progressiven Rentenendwertfaktoren wird der Bezug über den Steigerungsprozentsatz erhöht und anschließend mit dem Rechenzinssatz verzinst. Bei der ebenfalls zulässigen Nettomethode, fließt der Gehaltssteigerungssatz bei der Ermittlung eines Nettozinssatzes mit ein und es kommt zu keiner direkten Steigerung der Bezüge.

**Valorisierung HBGL**

Aufgrund der SV-Pflicht der Jubiläumsgelder kommt der Höchstbemessungsgrundlage in der Sozialversicherung eine wichtige Rolle bei der Ermittlung der Nebenkosten und damit auch bei der Ermittlung der Gesamtrückstellung zu. Mit diesem Feld kann eine durchschnittliche Steigerung der HBGL in die Berechnung aufgenommen werden.

**Auflösung der Abfertigungs-Rückstellung**

Wird die Abfertigungsrückstellung im Jahr 2002 oder 2003 aufgelöst, dann ist das jeweilige Auswahlfeld zu aktiveren. Die Aktivierung unterbindet den Ausdruck einer steuerlichen Abfertigungsrückstellung für das jeweilige Jahr.

**Berücksichtigung des Dienstnehmers erst wenn fiktive Ansprüche bestehen (Abfertigungsrückstellung)**

In der finanzmathematischen Berechnung werden im Gegensatz zur steuerlichen Berechnung, neu eingetretene Dienstnehmer bereits im ersten Jahr in der Rückstellungsberechnung berücksichtigt. Laut Fachgutachten kann es jedoch in Unternehmen mit hoher Fluktuationsrate zweckmäßig sein, mit der Berechnung der Rückstellung für neu eingetretene Dienstnehmer erst in dem Zeitpunkt zu beginnen, in dem erstmals fiktive Ansprüche bestehen (d. h. erst drei Jahre nach Diensteintritt). Ist das der Fall, dann ist dieses Auswahlfeld zu aktivieren.

**Änderung des Fachgutachtens 2004 berücksichtigen – Gehaltssteigerung**

Durch Aktivierung dieses Feldes berücksichtigt das Programm die Berechnung lt. Fachgutachten für die eingefrorenen Abfertigungsansprüche für Dienstnehmer bei einem Teilumstieg ins neue Abfertigungssystem.

### Details Rückstellungen (2)

![Image](<img/image251.png>)


**Automatische Ermittlung der Lohnnebenkosten**

Wird dieses Auswahlfeld aktiviert, werden die Lohnnebenkosten lt. Programm für die Berechnung der Urlaubsrückstellung herangezogen.

**DG-Abgabe (Geringfügig.) berücksichtigen**

Die Aktivierung dieses Feldes bewirkt die Berücksichtigung der pauschalen Dienstgeberabgabe, wenn geringfügig Beschäftigte abgerechnet werden. D. h. der Nebenkostenprozentsatz wird dadurch um 16,4 % erhöht. Wird das Feld nicht aktiviert, wird nur der Unfallversicherungsbeitrag berücksichtigt.

**Abweichende Nebenkosten Arbeiter, Angestellte**

Die vom Programm automatisch ermittelten Nebenkostensätze können über dieses Feld für Ausnahmefälle übersteuert werden. Im Gegensatz zur automatischen Ermittlung der Nebenbeiträge kommt es hier zu keiner Unterscheidung mehr zwischen den Bezügen bis zur sozialversicherungsrechtlichen Höchstbemessungsgrundlage und den Bezügen über dieser Grenze.

**Monatsteiler**

In das Eingabefeld *Monatsteiler* wird der Monatsteiler in ganzen Tagen eingegeben. Für die Berechnung des Monatsentgeltes je Werktag / Arbeitstag wird das laufende Entgelt durch die hier eingegebene Anzahl der Tage dividiert.

Wenn die Urlaubskartei nach Stunden geführt wird, hat die Eintragung des Monatsteilers keine Auswirkung, da das Programm automatisch die Anzahl der Wochenstunden (Abrechnungsbildschirm *Eintritt*) auf einen vollen Monat hochrechnet und diesen Wert als Teiler verwendet.

**Eingabe Urlaubs-Rest**

Falls Sie keine Urlaubskartei im Programm führen und vom Klienten eine Liste mit den bereits abgegrenzten Urlaubstagen erhalten, empfehlen wir diese Option zu wählen. Sie müssen dadurch nur die Resttage beim Ausdruck der Rückstellung nacherfassen und nicht den Anspruch oder den Verbrauch während des Jahres.

**Berechnung Einheitswert**

Wird das Auswahlfeld *Berechnung Einheitswert* aktiviert, dann erfolgt die separate Berechnung und der Ausdruck einer Urlaubsrückstellung für die Berechnung des Einheitswertes des Betriebsvermögens.

### Details Rückstellungen (3)

![Image](<img/image252.png>)


**Berechnung laut Erlass**

Ohne die Option bringt das Programm den unternehmensrechtlichen Ansatz für die Jubiläumsgelder zur Anwendung. Wird das Auswahlfeld *Berechnung lt. Erlass* aktiviert, so ist das Ergebnis der steuerliche Wert der Rückstellung. Es werden vom Programm 25 % Fluktuationsabschlag und anschließend ein Gegenwartsverfahren-Abschlag von 10 % vorgenommen.

**tatsächliche Fluktuationsabschläge berücksichtigen**

Dieses Feld ist nur aktiv, wenn zuvor *Berechnung laut Erlass* aktiviert wurde. Wird dieses Auswahlfeld aktiviert, werden nicht die pauschalen 25 % Fluktuationsabschlag berücksichtigt, sondern die manuell erfassten tatsächlichen Fluktuationsabschläge aus dem Registerblatt *Details Rückstellungen (1)*. Auch in dieser Variante kommt zusätzlich der Gegenwartsverfahren-Abschlag von 10 % zur Anwendung.

**Automatische Ermittlung der Lohnnebenkosten**

Wird dieses Auswahlfeld aktiviert, werden automatisch die aktuellen Lohnnebenkostensätze lt. Programm für die Berechnung der Jubiläumsgeldrückstellung herangezogen.

**DG-Abgabe (Geringfügig.) berücksichtigen**

Die Aktivierung dieses Feld bewirkt die Berücksichtigung der pauschalen Dienstgeberabgabe, wenn geringfügig Beschäftigte abgerechnet werden. D. h. der Nebenkostenprozentsatz wird dadurch um 16,4 % erhöht. Wird das Feld nicht aktiviert, wird nur der Unfallversicherungsbeitrag berücksichtigt.

**Abweichende Nebenkosten Arbeiter, Angestellte**

Die vom Programm automatisch ermittelten Nebenkostensätze können über dieses Feld für Ausnahmefälle übersteuert werden. Im Gegensatz zur automatischen Ermittlung der Nebenbeiträge kommt es hier zu keiner Unterscheidung mehr zwischen den Bezügen bis zur sozialversicherungsrechtlichen Höchstbemessungsgrundlage und den Bezügen über dieser Grenze.

**abweichende Jahre für Staffelung**

Durch Anwahl dieses Feldes kann die vorgeschlagene Jahresstaffelung für die Jubiläumsgelder den Bestimmungen des Kollektivvertrages abgeändert werden.

**Fälligkeitszeitpunkt SZ berücksichtigen**

Nachdem Jubiläumsgelder im Bereich der Sozialversicherung als Sonderzahlung zu werten sind, gilt es bei der Ermittlung der Nebenkosten, die jährliche Sonderzahlungshöchstbeitragsgrundlage zu berücksichtigen. Durch die Festlegung der Sonderzahlungsmonate wird je nach Jubiläumsstichtag (Eintrittstag) des Dienstnehmers die Höchstbemessungsgrundlage bereits komplett oder zum Teil durch die normalen Sonderzahlungen verbraucht.

Als aufzuschlagende Nebenkosten bleiben dann nur noch jene Beiträge, die nicht durch die Höchstbemessungsgrundlage gedeckt sind (DB, DZ und Kommst, sowie BV-Beitrag).

### Details Rückstellungen (4)

![Image](<img/image253.png>)


**Automatische Ermittlung der Lohnnebenkosten**

Wird dieses Auswahlfeld aktiviert, werden automatisch die aktuellen Lohnnebenkostensätze lt. Programm für die Berechnung der Zeitausgleichsrückstellung herangezogen.

**DG-Abgabe (Geringfügig.) berücksichtigen**

Die Aktivierung dieses Feld bewirkt die Berücksichtigung des Pauschalen Dienstgeberbeitrages, wenn geringfügig Beschäftigte abgerechnet werden. D. h. der Nebenkostenprozentsatz wird dadurch um 16,4 % erhöht. Wird das Feld nicht aktiviert, wird nur der Unfallversicherungsbeitrag berücksichtigt.

**Abweichende Nebenkosten Arbeiter, Angestellte**

Die vom Programm automatisch ermittelten Nebenkostensätze können über dieses Feld für Ausnahmefälle übersteuert werden. Im Gegensatz zur automatischen Ermittlung der Nebenbeiträge kommt es hier zu keiner Unterscheidung mehr zwischen den Bezügen bis zur sozialversicherungsrechtlichen Höchstbemessungsgrundlage und den Bezügen über dieser Grenze.

Für die Sonderzahlungsrückstellung gibt es die gleichen Grundoptionen, wie oben für die Zeitausgleichsrückstellung beschrieben.

**Kartei-Namen**

Sie können hier für die vier Zeitausgleichskarteien eine Bezeichnung hinterlegen.

**Rückstellung nach Zeitpunkt der SZ berechnen – Sonderzahlungsrückstellung**

Wenn Sie dieses Feld aktivieren und die Sonderzahlungsmonate anhaken, wirkt sich dies nach Bilanzstichtag auf die abgegrenzten Beträge aus. Zudem wird über diese Option verhindert, dass im Falle von Prämienlohnarten mit der *Lst-Pflichtigkeit 2* die Ermittlung der Rückstellung verfälscht wird.

!!! info "Tipp"
    Diese Stammdaten können bei jeder einzelnen Rückstellung im Bearbeitungsdialog mit Hilfe der Schaltfläche *Detail* aufgerufen und bearbeitet werden. Die Dialoge, die direkt den einzelnen Rückstellungen zugeordnet sind, enthalten jeweils die für die jeweilige Rückstellung relevanten Felder.
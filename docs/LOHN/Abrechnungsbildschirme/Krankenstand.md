# Krankenstand

Dieser Abrechnungsbildschirm ermöglicht die automatische Berechnung der Entgeltfortzahlungsansprüche für Arbeiter, Angestellte und Lehrlinge im Krankenstand.

![Image](<img/image128.png>)

**Allgemeine Daten**

Im ersten Bereich des Bildschirmes wird in den Feldern *Anrechnung* *ab* … *als* das Eintrittsdatum und die Zuordnung (Arbeiter, Angestellter, Lehrling) automatisch eingetragen. Die Zuordnung zu Arbeiter, Angestellter oder Lehrling erfolgt aufgrund der im [Abrechnungsbildschirm *Sozialversicherung*](../Abrechnungsbildschirme/Sozialversicherung.md) ausgewählten Beschäftigtengruppe.

Im Feld *Beginn Arbeitsjahr* wird ebenfalls das Eintrittsdatum vorgeschlagen. Die Abrechnung erfolgt entweder in *Kalendertagen* oder *Arbeitstagen*. Feiertage werden vom Programm automatisch berücksichtigt. Eine nachträgliche Umstellung zwischen diesen beiden Möglichkeiten ist nur möglich, wenn vorhandene Krankenstandzeilen gelöscht werden. Seitens RZL wird die Praxismethode der Abrechnung nach Kalendertagen empfohlen.

Wenn *Abrechnung in Arbeitstage* angewählt wurde, müssen im Bereich der Arbeitstage die Tage aktiviert werden, an denen gearbeitet wird. Der Anspruch auf Entgeltfortzahlung wird aufgrund der aktivierten Tage gerechnet. Eine Erhöhung oder eine Verminderung der Arbeitstage während eines Arbeitsjahres ist nicht möglich, da der Anspruch immer für das gesamte Arbeitsjahr gerechnet wird.

**Krankenstandskartei**

![Image](<img/image129.png>){width="500"}

In diesem Bereich können die Krankenstandstage eingetragen werden. Die Eintragung kann manuell erfolgen oder durch eine automatische [Übernahme der Krankenstandsbescheinigungen](../Elektronische%20Meldungen%20ÖGK/Krankenstandsbescheinigungen.md) von Elda.

Im Feld *von … bis* wird der Zeitraum des Krankenstandes eingetragen. Im Feld *Dauer* wird aufgrund der Einstellungen im Bereich *Allgemeines* (siehe oben) die Anzahl der Kalender- oder Arbeitstage eingetragen. Pro Krankenstandzeile kann ausgewählt werden, ob es sich um eine *Krankheit*, einen *Arbeitsunfall* oder einen *Freizeitunfall* handelt.

Wenn im Bereich der Krankenstandskartei die *rechte Maustaste* oder die *F10-Taste* angewählt wird, erfolgt der Aufruf eines Kontextmenüs. 

![Image](<img/image130.png>){width="300"}

**Zeile einfügen / Zeile löschen**

Mit Hilfe dieses Programmteils können markierte Zeilen eingefügt oder gelöscht werden. Krankenstandszeilen können auch manuell durch Anwahl der *Entf-Taste* gelöscht bzw. durch Anwahl der *Einf-Taste* eingefügt werden.

**Aufruf KSB (Krankenstandsbescheinigungen)**

![Image](<img/image131.png>){width="500"}

Wenn die *F2-Taste* angewählt wird, werden die von Elda heruntergeladenen Krankenstandsbescheinigungen angezeigt und können, wenn dies noch nicht automatisch erfolgt ist, nachträglich in die Krankenstandskartei übernommen werden.

**Folgeerkrankung**

Im Bereich der Arbeitsunfälle steht ein extra Kontingent an Entgeltfortzahlung zur Verfügung. Folgekrankheiten aufgrund eines Arbeitsunfalles werden in der Kartei als „normale“ Krankheit erfasst und durch Anwahl der *F4-Taste* dem betreffenden Arbeitsunfall zugeordnet.Dadurch wird sichergestellt, dass der Verbrauch vom extra Kontingent für Arbeitsunfälle gerechnet wird.

**Neuberechnung aller EFZ-Tage**

Dieser Eintrag ermöglicht die Neuberechnung der eingetragenen Zeilen.

**Arbeiter – Angestellter – Lehrling – Arbeiter und Angestellte getrennt (Arbeitsjahr)**

Ändert sich die Rechtsgrundlage des Dienstverhältnisses erfolgt die Umstellung für die Berechnung der Entgeltfortzahlungsansprüche durch Anwahl des entsprechenden Eintrages. Bestehende Eintragungen werden nicht geändert.

Die bloße Änderung der Beschäftigtengruppe im [Abrechnungsbildschirm *Sozialversicherung*](../Abrechnungsbildschirme/Sozialversicherung.md) bewirkt keine Änderung im Bereich der Krankenstandsverwaltung.

Mit der Angleichung der EFZ-Ansprüche bei Arbeiter und Angestellten kam es zu der Änderung, dass bei einem Wechsel von Arbeiter auf Angestellte bzw. umgekehrt, zu keinem getrennten Anspruch mehr kommt. Falls jedoch in Ausnahmefällen die EFZ-Ansprüche bei einem Wechsel getrennt werden müssen, können Sie seit 01.10.2021 *Arbeiter und Angestellte getrennt (Arbeitsjahr)* anwählen. Somit werden die Ansprüche von Arbeiter und Angestellte in diesem Arbeitsjahr getrennt betrachtet.

**Anzeige der Ansprüche – Vornahme von Kürzungen**

Im unteren Bereich des Abrechnungsbildschirmes *Krankenstand* werden die Ansprüche, der Verbrauch und die noch zur Verfügung stehenden Tage angezeigt. Die Darstellung erfolgt unterschiedlich, je nachdem, ob ein Arbeiter, Angestellter oder Lehrling abgerechnet wird.

![Image](<img/image132.png>){width="400"}

Im Bereich *EFZ-Tage* kann geprüft werden, welche Tage für die angewählte Krankenstandszeile verbraucht wurden. Im rechten unteren Bereich wird monatsbezogen der Verbrauch dargestellt. Das bedeutet, wenn der Zeitraum eines Krankenstandes über mehr als 1 Monat reicht, erfolgt die Darstellung in mehreren Zeilen.

Wird im Bereich der Krankenstandskartei keine Krankenstandszeile angewählt, erfolgt in diesem Bereich auch keine Anzeige.

**Eingabe von Kürzungen (der Dienstjahre)**

![Image](<img/image133.png>){width="400"}

Durch Anwahl der Schaltfläche *Kürzungen* wird folgender Bildschirm aufgerufen:

![Image](<img/image134.png>){width="400"}

Hier besteht die Möglichkeit insgesamt 5 Kürzungen der Dienstjahre mit Eintragung des Datums und der Monate der Kürzung einzutragen. Die Eintragungen werden bei der Berechnung der Dienstjahre berücksichtigt. Dies hat eine Relevanz für die Höhe des Entgeltfortzahlungsanspruches.
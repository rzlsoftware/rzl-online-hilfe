# Duplikate erkennen und zusammenführen

Im RZL KIS wurde in vielen Fällen eine Person an mehreren Stellen in den
Stammdaten eingetragen. Durch die Migration der Daten werden nun im RZL
Board diese Duplikate offensichtlich. Wir empfehlen Ihnen Duplikate zu
bereinigen.

## Manuelles Zusammenführen von Duplikaten

Wenn aus der Ansicht *Personen und Firmen* ersichtlich ist, dass
Duplikate von Personen vorliegen, können Sie diese rasch und
unkompliziert über das Kontextmenü zusammenführen.

![](<img/image115.png>)

Über den Menüpunkt *Ausgewählte Personen als Duplikate
zusammenführen *kommen Sie in Dialog für das Zusammenführen.

![](<img/image116.png>)

Hier sehen Sie die Personen/Firmen, die zusammengeführt werden sollen.
Rechts neben dem Namen ist - wenn vorhanden - ebenfalls die Verwendung
ersichtlich. Für die angezeigten Felder der Person gilt folgendes:

Felder, die Sie nicht bearbeiten können und somit hellgrau sind, haben
entweder bei allen zusammenzuführenden Personen keinen oder immer
denselben Eintrag. Im obigen Beispiel ist bei allen Personen „Huber“ als
Nachname eingetragen und bei keinem der Fälle ein Beruf. Die Einträge
sind somit überall gleich und bedürfen für das Zusammenführen keiner
Bearbeitung.

Felder, die aktiv sind und bei denen ein Eintrag vorgeschlagen ist,
haben nur in einem der zusammenzuführenden Fälle einen Eintrag, in den
anderen aber nicht. So ist beispielsweise der akademische Grad nur bei
einer Person eingetragen, bei der anderen Person nicht. Daher wird „Mag.
(FH)“ als akademischer Grad vorgeschlagen.

Felder, die aktiv sind und bei denen kein Eintrag vorgeschlagen ist,
haben zumindest mehr als einen gültigen Eintrag. Es wird in diesem Fall
nichts vorgeschlagen und Sie müssen den richtigen Eintrag auswählen. Im
obigen Beispiel ist einmal beim Familienstand „verheiratet“ und einmal
„ledig“ eingetragen. Es ist der richtige Eintrag auszuwählen.

![](<img/image117.png>)

Bei Feldern, die mehrere zulässige Werte haben, können Sie sich über das
Drop-Down Menü die Werte anzeigen lassen. Durch Setzen eines Häkchens
können Sie einzelne Werte übernehmen und durch Entfernen eines Häkchens
von der Übernahme ausschließen. Im obigen Beispiel sind beide
Telefonnummern ausgewählt und werden daher auch übernommen.

Mit der Option *Personendaten nach dem Zusammenführen bearbeiten* werden
Ihnen nach Abschluss des Zusammenführens die Personendaten der
zusammengeführten Person angezeigt.

## Automatische Duplikatsgruppen

Über *Duplikate erkennen und zusammenführen* bildet das Programm
automatisch Duplikatsgruppen, die einen Vorschlag für mögliche Duplikate
darstellen. Das Programm versucht anhand von verschiedenen harten
Kriterien (wie SV-Nummer oder Steuernummer), aber beim Zusammentreffen
von mehreren weicheren Kriterien (wie Geburtsdatum, Name usw.) einen
zielführenden Vorschlag für Duplikate zu machen. Grund dieser
Vorgehensweise ist, eher großzügig bei der Annahme von Duplikaten zu
sein, um eine noch größere Anzahl von Duplikatsgruppen zu vermeiden.

![](<img/image118.png>)

Es können entweder alle oder die in der Liste gewählten Duplikatsgruppen
bearbeitet werden. Im nächsten Dialog werden Ihnen die möglichen
Duplikate angezeigt.

![](<img/image119.png>)

Wir empfehlen Ihnen zuerst alle jene Personen, die Duplikate darstellen,
auszuwählen und über die Schaltfläche *Ausgewählte Personen
zusammenführen* zusammenzuführen. Das Zusammenführen funktioniert nach
derselben Logik, wie bereits beim manuellen Zusammenführen von
Duplikaten beschrieben.

Sollten dann in der Ansicht der möglichen Duplikate noch Personen
aufscheinen, die in Wirklichkeit keine Duplikate darstellen, so können
Sie diese mit der Schaltfläche *Kein Duplikat mehr* aus der Liste der
möglichen Duplikate entfernen. Dies heißt aber, dass nur diese Personen
zueinander keine Duplikate darstellen. Eine Bildung einer
Duplikatsgruppe mit anderen Personen ist dann noch immer möglich.

Über die Schaltfläche *Gruppe überspringen* können Sie ohne
Zusammenführen der aktuellen Duplikatsgruppe in die nächste Gruppe
springen.
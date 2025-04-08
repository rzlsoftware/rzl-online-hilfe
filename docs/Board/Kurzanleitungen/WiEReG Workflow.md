## Variante 1 - WiEReG-Meldungen mithilfe von wiederkehrenden Aufgaben

Bei dieser Variante legen Sie sich im Kanzlei-Informations-System eine wiederkehrende Aufgabe an. In dieser Aufgabenvorlage definieren Sie den Zeitpunkt der durchzuführenden WiEReg-Meldung, für die Klienten, wo eine Meldung erforderlich ist. Damit legen Sie also fest zu welchem Zeitpunkt eine Aufgabe an den zuständigen Mitarbeiter bei diesem Klienten generiert werden soll.

![wiederkehrende Aufgabe WiEReG](<img/Wiederkehrende Aufgabe WiEReG.png>)

Der/die zuständige Mitarbeiter/in erhält nun jährlich automatisch die Aufgabe zur Durchführung der WiEReG-Überprüfung für die Klienten gestellt.

Anschließend führt der/die Mitarbeiter/in die WiEReG-Meldung bei dem Klienten im RZL Board durch.

![neue Meldung über USP](<img/image186 copy.png>)

Ist in den Einstellungen zum automatischen Abruf eines Auszuges bei dem Klienten die Variante **bei Signal des Änderungsdienstes** hinterlegt, können mithilfe des Kanzlei-Informations-Systems zwei Aufgaben automatisch generiert werden. Bei dieser Variante werden durch dieses Vorgehen die Aufgabe WiEReG-Meldung erfolgt und die Aufgabe WiEReG-Auszug abgerufen erzeugt. Soll nur eine der Aufgaben erzeugt werden, können Sie eine Aufgabenvorlage entfernen.

![WiEReG Einstellungen](<img/Einstellungen Signal Ädienst.png>)

Definieren Sie innerhalb einer der beiden Aufgabenvorlagen eine Aktivität, können Sie mithilfe eines Klientenspiegels den Status der WiEReG-Meldungen überprüfen. Der Vorteil dieser Variante liegt darin, dass erst nach erfolgter Meldung ein WiEReG-Auszug automatisch abgerufen wird.

![Zuweisungen Aufgabenvorlagen](<img/USP Zuweisungen Aufgabenvorlagen.png>)

!!! warning "Hinweis"
    Bei *Meldung Neu, Meldung mit Änderung im WiEReG und Meldung/Ergänzung mit Neuanlage / Änderung des Compliance Packages* kann die gleiche Aufgabenvorlage hinterlegt werden, da alle drei signalisieren, dass eine neue Meldung im USP durchgeführt wurde. Es wird daher in der Kurzanleitung für alle drei Eingabefelder von einer Aufgabe bzw. einer Aufgabenvorlage gesprochen.

## Variante 2 - WiEReG-Meldungen mithilfe eines fixen Datums zum Abruf der Auszüge

Bei dieser Variante definieren Sie in den Klientenstammdaten im RZL Board im Register *WiEReG/Einstellungen* bzw. klientenübergreifend über den Menüpunkt *Portale* ein Datum zu dem ein WiEReG-Auszug automatisiert abgerufen werden soll.

![Einstellungen jährlich](<img/Einstellungen jährl. Datum.png>)

Zu diesem vordefinierten Datum wird nun jährlich ein Auszug abgerufen. Dafür ist im KIS bei dem Eintrag *Automatischer Abruf des Auszuges* eine Aufgabenvorlage zu hinterlegen. Aufgrund dieser Aufgabenvorlage wird eine Aufgabe erstellt, die jener Mitarbeiter erhält, der/die für die WiEReG-Meldung zuständig ist.

![Zuweisungen Aufgabenvorlagen](<img/USP Zuweisungen Aufgabenvorlagen.png>)

Anschließend führt der Mitarbeiter die WiEReG-Meldung bei dem Klienten im RZL Board durch.

![neue Meldung über USP](<img/image186 copy.png>)

Nach erfolgter Meldung wird eine Aufgabe auf Basis der Aufgabenvorlage unter dem Eintrag Meldung Neu an den zuständigen Mitarbeiter generiert. Setzt diese/r die Aufgabe auf erledigt und ist diese Aufgabe bzw. die Aufgabenvorlage mit einer Aktivität verknüpft, können Sie mithilfe eines Klientenspiegels den Status der WiEReG-Meldungen überprüfen.
Der Vorteil dieser Variante liegt darin, dass Sie keine eigene wiederkehrende Aufgabe pro Klienten erstellen müssen. Jedoch ist bei dieser Variante zu beachten, dass der entsprechende WiEReG-Auszug automatisiert bereits vor der erfolgten Meldung abgerufen wird.

## Variante 3 - WiEReG-Meldungen mithilfe der Aufgabenvorlage Meldepflicht tritt ein

Haben Sie im KIS unter Verwaltung/USP-Zuweisungen im Feld *Meldepflicht tritt ein* eine Aufgabenvorlage hinterlegt, wird automatisch vom KIS eine Aufgabe an den jeweilig zuständigen Mitarbeiter erstellt.

![Zuweisungen Aufgabenvorlagen](<img/USP Zuweisungen Aufgabenvorlagen.png>)

Anschließend führt der Mitarbeiter die WiEReG-Meldung bei dem Klienten im RZL Board durch.

![neue Meldung über USP](<img/image186 copy.png>)

Je nach Einstellung kann anschließend optional ein automatischer Abruf eines Auszuges erfolgen.

![WiEReG Einstellungen](<img/Einstellungen Signal Ädienst.png>)

!!! warning "Hinweis"
    Hinterlegen Sie bei den Aufgabenvorlagen für *Meldung Neu, Meldung mit Änderung im WiEReG und Mel-dung/Ergänzung mit Neuanlage / Änderung des Compliance Packages* und automatischer Abruf des Auszugs dieselbe Aufgabenvorlage und besteht ein zeitlicher Zusammenhang zwischen einer erfolgten neuen Meldung und dem automatischen Abruf eines Auszuges, erkennt das Kanzlei-Informations-System dies als eine Aufgabe und erstellt Ihnen auch nur eine Aufgabe für diesen Vorgang.

![Zuweisungen Aufgabenvorlagen](<img/USP Zuweisungen Aufgabenvorlagen.png>)

Der große Vorteil dieser Variante ist, dass Sie vier Wochen vor Fälligkeit der WiEReG-Meldung automatisiert eine Aufgabe in das Kanzleiinformationssystem gestellt bekommen und somit keine Klienten mehr hinsichtlich der Meldepflicht übersehen werden können. 
**Davon ausgenommen** sind jene Klienten, bei denen in den letzten Jahren keine Meldung erfolgt ist, da bei diesen  kein automatisches Signal erzeugt wird.

!!! warning "Hinweis"
    Bei Eingang eines entsprechenden Signals des WiEReG Änderungsdienst wird vom Programm automatisch eine neue Aufgabe für die Prüfung des Rechtsträgers erstellt. Dafür ist eine entsprechende Aufgabenvorlage anzulegen und unter USP Zuweisungen im KIS zu hinterlegen. Diese eine Aufgabe gilt für die Merkmale RT Beendet, RT Insolvent, RT Scheinunternehmen, RT Sanktioniert.
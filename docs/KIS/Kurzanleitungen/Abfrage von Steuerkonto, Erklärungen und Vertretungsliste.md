Für die Steuerkontoabfrage, die Abfrage von Steuererklärungen und der Vertretungsliste wird kein Web-Service-Benutzer Zugang verwendet. Hier ist ein FinanzOnline-Zugang einzutragen, der es ermöglicht ins FinanzOnline einzusteigen, um Steuerkonten, Steuererklärungen und Vertretungslistenabfragen usw. herunterzuladen. Sie sollten hier allerdings keinen im Kanzlei-Informations-System gespeicherten Mitarbeiter-Zugang eintragen, sondern einen allgemeinen Zugang, den kein Mitarbeiter verwendet. Nur so können Sie klar erkennen, welche Abfragen durch das KIS automatisch durchgeführt wurden und welche von den jeweiligen Mitarbeitern.

![Steuerkonto Zugang](<img/Steuerkonto Zugang.png>)

Im Bereich Zuordnung wählen Sie den Eintrag Steuerkonto-, Erklärungen- und Vertretungslistenabfragen an. Dieser Benutzer kann durch Anwahl des Felds Aktiv deaktiviert werden. Daneben wird im Feld Aktuellster DataBox-Eingang das Datum des letzten persönlichen Eingangs angezeigt.
Die Abfrage der Steuerkonten und der Erklärungen kann für einzelne Klienten in den Finanzamt-Stammdaten im RZL-Board deaktiviert werden. Damit Steuererklärungen und Steuerkonto eines Klienten grundsätzlich abgefragt werden können, muss für den Klienten innerhalb von FinanzOnline Akteneinsicht gemäß § 90a BAO aktiviert sein.
Folgendes ist also für eine funktionierende Abfrage notwendig:

* Kein Web-Service-Benutzer, sondern ein gewöhnlicher FinanzOnline Zugang (mit dem Zugang ist das Anmelden in FinanzOnline möglich)
* Akteneinsicht gemäß § 90a BAO bei entsprechenden Klienten im FinanzOnline aktiveren
* Eintragen der Zugangsdaten und Setzen der Option Aktiv im KIS (Verwaltung / FinanzOnline/USP-Zugänge)
* Setzen der Option Abfrage durchführen in den Klientenstammdaten unter Finanzämter im RZL Board

### **Was sind die Gründe für eine nicht funktionierende Abfrage?**

1.	Die laut obere Auflistung notwendigen Einstellungen wurden nicht getroffen.
2.	Der Benutzer für die Steuerkonto-Abfrage ist nicht dem Team zugeordnet (FinanzOnline – Teamverwaltung)
3.	Die Zugangsdaten sind nicht aktuell oder der Zugang wurde gesperrt
4.	Die Option Persönliche DataBox abrufen bei den Mitarbeiter-Zugängen im KIS ist nicht aktiv

### **Ursachen/Auswirkungen und Lösungen für eine nicht funktionierende Abfrage**

**Zu Punkt 2:** Ist der Benutzer für die Steuerkonto-Abfrage nicht dem Team zugeordnet, wird die Option Abfrage durchführen für jene Klienten, die dem entsprechenden Teilnehmer zugeordnet sind deaktiviert. Die Zuordnung des Benutzers zum Teilnehmer führen Sie im FinanzOnline in der Teamverwaltung durch. Aktivieren Sie nun für all die betroffenen Klienten wieder die Abfrage durchführen Option. Öffnen Sie das KIS unter Kanz-lei/FinanzOnline/Steuerkonten und führen Sie die Aktivierung der Option über FinanzOnline-Abruf konfigurieren durch Auswählen der Klienten durch.

![FinOn Abruf konfigurieren](<img/FinOn Abruf konfig.png>)

**Zu Punkt 3:** Sind die Zugangsdaten nicht aktuell, wird die Option Aktiv automatisch deaktiviert, um eine Sper-rung des Zugangs zu vermeiden. Der Versuch den Zugang zu aktivieren schlägt fehl. Geben Sie die aktuellen Zu-gangsdaten ein und Aktivieren Sie den Zugang wieder. 
Falls das Aktivieren noch nicht funktioniert, melden Sie sich bitte mit den Zugangsdaten des Steuerkonto-Abfrage Benutzers über den Browser bei FinanzOnline an. Bitte melden Sie sich NICHT über das KIS an, sondern öffnen Sie den Browser mit der FinanzOnline Login-Seite separat. Wenn auch hier der Login nicht funktioniert, ist der Zugang entweder gesperrt oder die Zugangsdaten sind falsch. Hier muss der Supervisor eingreifen und den Zugang ent-weder entsperren oder ein Start-Passwort vergeben. 
Mit dem Start-Passwort müssen Sie sich erneut separat im Browser bei FinanzOnline anmelden. Sie werden umge-hend von FinanzOnline weitergeleitet, da das Start-Passwort geändert werden muss.
Tragen Sie im Anschluss die richtigen und aktuellen Zugangsdaten im KIS ein und setzen Sie den Zugang Aktiv.

**Zu Punkt 4:** Das Problem betrifft nicht die Steuerkonto-Abfrage an sich bzw. betrifft es nicht die gesamte Kanz-lei. Hier ist es für einen Mitarbeiter/eine Mitarbeiterin nicht möglich, die Steuerkonto-Abfrage durchzuführen. Was jedoch mit Aktivierung der Option Persönliche DataBox abrufen wieder möglich ist.

### **Anlage des Zugangs im Detail**

Der Zugang für die Steuerkonto-, Erklärungen- und Vertretungslistenabfrage
sollte nur die notwendigen Rechte besitzen. Sie sollten keinen
Supervisor-Zugang verwenden. Bei der Anlage dieses Benutzers sollten nur
nachfolgende Felder aktiviert werden. Dieser Zugang muss alle Klienten
einsehen können. D.h. es darf keine Beschränkungen durch eine ev.
Teamverwaltung geben.

![Benutzerdaten - Übersicht](<img/image129.png>)

![Benutzerkennung](<img/image130.png>)

In den Bereichen *Abfragen, Databox* und *Admin* müssen nachfolgende
Aktivierungen vorgenommen werden.

![Benutzerzugang Abfragen](<img/image131.png>)

![Benutzerzugang - Nachrichten](<img/image132.png>)

![Benutzerzugang](<img/Steuerkonto Admin Bereich FinOn.png>)
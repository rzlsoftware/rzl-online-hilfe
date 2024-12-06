### Lohn-Formel Zuordnungen

Um die angelegten Lohn-Formeln automatisiert in bestimmten Monaten innerhalb der Abrechnung verwenden zu können, müssen die Lohn-Formeln einer (oder auch mehrerer) Tabelle(n) zugeordnet werden. In dieser Tabelle werden die Lohn-Formeln den Lohnarten (Fixe Lohnarten, Freie Lohnarten) zugeordnet. Die Zuordnung erfolgt im Programmteil *Stamm / Lohn-Formelzuordnungen.* Erfolgt keine Zuordnung der angelegten Lohnformeln kann auf diese dennoch innerhalb der Lohnarten durch Anwahl der *F2-Taste* zugegriffen werden.

![Image](<img/image391.png>)

Zunächst ist im Feld *Tabelle* eine Nummer und im Feld *Bezeichnung* ein Name für die Tabelle zu vergeben.

Im Feld *Lohnart* können zunächst mit der *F2-Taste* die Lohnarten aufgerufen werden.

![Image](<img/image392.png>)

Hier wird festgelegt, mit welcher Lohnart (fixe oder freie) der automatisch aufgrund der Lohnformel errechnete Betrag, abgerechnet werden soll (hier Fixe Lohnart: Sonderzahlungen). Nach Anwahl der Schaltfläche *Übernehmen* wird die Nummer der Lohnart in die Lohn-Formel-Zuordnungstabelle eingetragen.

![Image](<img/image393.png>)

Der nächste Schritt ist die Eintragung (oder Aufruf mit der *F2-Taste*) der Lohnformel (hier SZ_Berechnung_3Mon).

![Image](<img/image394.png>)

Im unteren Bereich wird festgelegt, wann die Lohnformel (hier SZ_Berechnung_3Mon) bei der ausgewählten Lohnart (hier Sonderzahlungen) automatisch verwendet werden soll. Nach Anwahl der Schaltfläche *Speichern* wird die Zuordnung abgespeichert und in der Liste angezeigt. 

![Image](<img/image395.png>)

**Duplizieren**

Sie haben die Möglichkeit, einer Lohnart mehrere Formeln zuzuordnen, jedoch muss sich das Anwendungsmonat der einzelnen Formeln unterscheiden.

Wählen Sie die gewünschte Lohnart aus und klicken Sie auf der rechten Seite auf *Duplizieren*.

![Image](<img/image396.png>)

Geben Sie nun die gewünschte Lohnformel ein.

![Image](<img/image397.png>)

Wählen Sie die anzuwendenden Monate aus. Es dürfen keine gleichen Monate verwendet werden.

![Image](<img/image398.png>)

Es wird somit in unserem Beispiel in der Lohnart *Sonderzahlung* im Monat Juni die Lohnformel 61 für den Urlaubszuschuss und im Monat November bei der gleichen Lohnart die Lohnformel 63 Weihnachtsremuneration angewandt.
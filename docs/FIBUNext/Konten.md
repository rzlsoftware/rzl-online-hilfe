# Kontostammdaten

## Kontostammdaten

&nbsp;

Mit einem Klick auf die Schaltfläche *Konten* ***(1)*** öffnen sich die Kontostammdaten des Klienten.

Abb. 1 Auswahl Kontenstammdaten

![Image](<../lib/NeuesElement109.png>)

Anschließend können Sie über das Eingabefeld *Kontonummer **(1)*** eines der angelegten Konten auswählen und es öffnen sich die zugehörigen Kontenstammdaten.&nbsp;

Abb. 2 Kontostammdaten

![Image](<../lib/NeuesElement108.png>)

Für die Beschreibung der verfügbaren Eingabefelder siehe Kapitel [Kontenplan anlegen](FIBUNext/Kontenplane.md#Kontenplan\_anlegen). Die Funktionen *Neues Konto **(2)*** sowie *Konto löschen **(3)*** und *Kontonummer ändern **(4)*** werden ebenso in diesem Kapitel beschrieben.

Mit einem Klick auf die Schaltfläche *Kontosperre **(5)*** im Menü öffnet sich der Dialog zum Setzen der Kontosperre für das unten ausgewählte Konto. Setzen Sie die Sperre für ein Konto wird dieses in der Kontenliste ausgeblendet und kann nicht mehr bebucht werden.

Abb. 3 Kontensperre setzen

![Image](<../lib/NeuesElement107.png>)

Über den Button *Gesperrte Konten anzeigen **(6)*** werden die gesperrten Konten ausgegraut wieder eingeblendet. Die Kontosperre kann anschließend über die Schaltfläche *Kontosperre / Aufheben* wieder aufgehoben werden.

Abb. 4 Kontensperre aufheben

![Image](<../lib/NeuesElement106.png>)

&nbsp;

### Personenkonto anlegen

Wählen Sie die Schaltfläche *Neues Konto* ***(1)*** an und vergeben Sie eine Nummer die im Nummernbereich der Personenkonten liegt (siehe Kapitel [Kontenplan anlegen](FIBUNext/Kontenplane.md#Kontenplan\_anlegen)), erkennt die FIBU Next automatisch, dass es sich hierbei um ein Personenkonto handelt. Anschließend können Sie die FIBU Person zu diesem Personenkonto anlegen.&nbsp;

Abb. 5 Neuanlage Personenkonto

![Image](<../lib/NeuesElement105.png>)

Klicken Sie auf die Schaltfläche *zur FIBU Firmenansicht,* wechselt das Programm zur angelegten FIBU Person. Dort können Sie die allgemeinen Stammdaten dieser Person sowie Telefonnummern, E-Mail-Adressen, Adressen und Bankverbindungen erfassen. Die Erläuterungen zu diesen Feldern finden Sie im Handbuch Board.&nbsp;

**Tipp**

Tragen Sie direkt im Feld *Person/Firma* die UID Nummer ein, um ein neues Personenkonto automatisch mit den Daten aus FinanzOnline anzulegen.

&nbsp;

Mithilfe der Funktion *Alle UID-Nummern mit FinanzOnline prüfen* werden alle bei dieser FIBU Person angelegten UID-Nummern auf Ihre Gültigkeit überprüft. Im Feld *UID-Nummer* kann diese ebenso mit rechter Maustaste *UID prüfen* oder der F3-Taste auf Ihre Gültigkeit überprüft werden.

Abb. 6 Überprüfung UID-Nummer

![Image](<../lib/NeuesElement104.png>)

&nbsp;

### Aktualisierungsoptionen Personenkonten

&nbsp;

Beim Finalisieren eines Stapels mit Belegverbuchung oder aus einer Kontoauszugsverbuchung werden folgende Daten aus der Überweisung bzw. Buchung automatisch auf den entsprechenden Personenkonten hinterlegt, um künftig Buchungsvorschläge anhand dieser Daten erstellen zu können.

* **IBAN:** Der IBAN des Partners aus der Überweisung wird automatisch am entsprechenden Personenkonto, auf welches die Buchung erfolgt, hinterlegt.\
Einzige Ausnahme ist, wenn sich der betroffene IBAN in der Ausschlussliste IBAN (siehe [Ausschlussliste IBAN](FIBUNext/IBANAusschlussliste.md)).\
Ist am Personenkonto bereits ein IBAN hinterlegt, so wird dieser als weiterer Eintrag zusätzlich erzeugt. Der bestehende IBAN wird nicht überschrieben.
* **Kundennummer:** Wird aus einem Beleg eine Kundennummer ausgelesen, so wird diese auch am entsprechenden Personenkonto hinterlegt.\
Gibt es am Konto bereits eine bestehende Kundennummer, so wird diese überschrieben.
* **UID-Nummer:** Auch die UID-Nummer, welche aus einem Beleg ausgelesen werden konnte, wird am bebuchten Personenkonto hinterlegt. Auch hier wird eine bestehende UID-Nummer überschrieben, mit der Ausnahme, dass es sich um ein anderes USt-Land handelt. Ist beispielsweise beim Debitor bereits eine österreichische UID-Nummer hinterlegt und anschließend wird eine deutsche UID-Nummer ausgelesen, so wird diese zusätzlich gespeichert.


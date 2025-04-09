# Electronic-Banking Abrechnungen Inland

Im Programmteil *Bearbeiten / Elektronic Banking (SEPA)* können Sie Überweisungsdateien für die Abrechnungen der Dienstnehmer, für die Zahlungen an die Behörden (Abgaben) und für die mit dem Exekutionsmodul errechneten Exekutionsbeträge erstellt werden.

Durchgeführte Überweisungen von Lohnabrechnungen werden bei den einzelnen Dienstnehmern vermerkt. Damit ist sichergestellt, dass eine Überweisung nicht zweimal erfolgen kann. Ist es erforderlich, dass Sie die Überweisung nochmals ausdrucken bzw. die Überweisungsdatei nochmals erstellen, müssen Sie vorher ein [*Repair*](../Repair.md) der Überweisungen durchführen.

![Image](<img/image212.png>){width="500"}

Im Eingabefeld *Monat* legen Sie fest, für welchen Monat die Überweisungen durchgeführt werden sollen. Anschließend müssen Sie festlegen, für welche Dienstnehmer überwiesen wird.

Für die Überweisung legen Sie nun fest, von welchem [Bankkonto](../Klientenstammdaten/Stammdaten%20Klient/Bank,%20Überweisung,%20Zahltag.md) (*Dienstgeber-Banken)* die Zahlung erfolgen soll.

**Dienstnehmer alphabetisch sortiert**

Die Dienstnehmer können wahlweise alphabetisch sortiert in die Datei übernommen werden.

**Ausgabe über RZL PDF-Drucker**

Wird dieses Feld angewählt, erfolgt die Ausgabe des Überweisungsprotokolls als PDF-Format.

**ohne Umlaute ausgeben**

Bei ausländischen Banken können sich Probleme ergeben, wenn Umlaute in die Datei mitausgegeben werden. Die Anwahl dieses Feldes ersetzt folgende Zeichen (ä = a, ü =u, ö = o, ß = s).

**Dateiname**

Im Feld *Dateiname* ist festzulegen, wo (auf welchem Laufwerk, in welchem Ordner) die Überweisungsdatei mit welcher Bezeichnung (z. B. Lohn Feb 2020) vom Lohnprogramm erzeugt werden soll.

**Durchführungsdatum**

In dieses Feld ist das Datum der Durchführung einzugeben. Dieses Datum muss aufgrund des Datenträger-Begleitzettels von der durchzuführenden Bank berücksichtigt werden.

Nach der vollständigen Eingabe der Daten wird durch Anwahl der Schaltfläche *Überweisen* die Datei erzeugt. 
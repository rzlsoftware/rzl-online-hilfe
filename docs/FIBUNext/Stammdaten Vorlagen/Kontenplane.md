# Kontenpläne

### Kontenpläne


Durch Anwahl der Schaltfläche K*ontenpläne* in den allgemeinen FIBU-Stammdaten gelangen Sie zur Verwaltung der Kontenpläne. Darunter wird eine Liste aller bereits angelegten Kontenpläne angezeigt.


![Image](<img/NeuesElement97.png>)

### Kontenplan anlegen

Mit Klick auf die Schaltfläche *Kontenplan anlegen* öffnet sich ein neues Fenster für die Anlage eines neuen Kontenplans.
Im linken Bereich des Fensters sind einzelne Registerblätter für die Bearbeitung des Kontenplans anwählbar.

Im Register *Allgemein* können Sie zu Beginn eine Bezeichnung für den Kontenplan vergeben.

#### Register Allgemein


![Image](<img/NeuesElement99.png>)

Weiters können Sie hier die Maximalanzahl der Stellen für Sachkonten und Personenkonten über die jeweiligen Dropdownfelder ***(1)*** festlegen. Dabei ist eine Auswahl zwischen drei und neun Stellen möglich.


![Image](<img/NeuesElement94.png>){width="80"}

Die Option *Kontonummernbereiche prüfen* ***(2)*** bewirkt, dass in den angelegten Kontenbereichen überprüft wird, ob bereits angelegte Konten vorhanden sind, die nicht der hinterlegten Validierung entsprechen. (siehe Kapitel [Kontenplan anlegen](/FIBUNext/Stammdaten%20Vorlagen/Kontenplane/#kontenplan-anlegen))

Unten wird eine Liste mit den verfügbaren USt-Ländern angezeigt. Durch das Aktivieren eines USt-Landes werden im Bereich der Pflichtkonten für die Punkte USt, Skontoaufwand und Skontoertrag eigene Felder pro aktiviertem USt-Land angezeigt und Sie haben dort die Möglichkeit die jeweiligen Konten zu hinterlegen.

Ebenso haben Sie durch das Aktivieren eines USt-Landes bei der Anlage von Konten die Möglichkeit die aktivierten USt-Länder bei dem jeweiligen Konto zu hinterlegen.

USt-Länder können durch einen Klick auf die aktivierte Checkbox auch wieder deaktiviert werden.

Wenn für ein USt-Land Konten im Kontenplan oder in den Pflichtkonten oder in beiden Bereichen hinterlegt sind, erscheint folgender Hinweis:


![Image](<img/NeuesElement93.png>)

Wird hier der Button *Fortsetzen* angewählt, werden alle hinterlegten Pflichtkonten sowie Konten im Kontenplan für das deaktivierte USt-Land unwiderruflich gelöscht.

#### Register Gliederungen

Im Register *Gliederungen* haben Sie die Möglichkeit eine oder mehrere der angelegten KER-Gliederungen dem Kontenplan zuzuordnen. Die ausgewählte Gliederung kann anschließend bei der Anlage von Konten für deren Zuordnung zur Gliederung der kurzfristigen Erfolgsrechnung verwendet werden. Das Anlegen und Bearbeiten von KER-Gliederungen wird im Kapitel [KER-Gliederungen](/FIBUNext/Stammdaten/KER%20Gliederungen) beschrieben.


![Image](<img/NeuesElement92.png>){width="600"}


#### Register Konten

Die in diesem Kontenplan angelegten Konten sind im Register *Konten* ersichtlich.


![Image](<img/NeuesElement101.png>)


Mit einem Klick auf die Schaltfläche *Neues Konto* ***(1)*** im oberen Menü öffnet sich die Detailansicht und Sie können ein neues Konto innerhalb dieses Kontenplanes anlegen. Über *Kontonummer ändern* ***(2)*** können Sie die Kontonummer eines angelegten Kontos auf eine verfügbare Nummer verschieben.

#### Ertragskonto anlegen



![Image](<img/NeuesElement90.png>)


**Beschreibung** **der** **Eingabefelder:**

| Feld                           | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bezeichnung**                | Kontobezeichnung muss zwingend vergeben werden. Hier ist eine Eingabe von bis zu 40 Zeichen möglich.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Währung**                    | Definiert die Währung in der das Konto bebucht werden soll.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **USt-Land**                   | Hier muss das USt-Land eingetragen werden. Diese Einstellung ist für die korrekte Darstellung und Berechnung der Umsätze pro Land notwendig.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **USt-Code**                   | In diesem Feld sind folgende Einstellungen möglich: Ohne Steuer Vorsteuer Umsatzsteuer Erwerbsteuer Nicht abzugsf. Vorsteuer Reverse Charge                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Prozentsatz**                | Im Feld Prozentsatz (im Falle USt-Land = AT) können Sie folgende Steuersätze der Höhe nach festlegen: steuerfrei 5% ermäßigter Steuersatz 7% Zusatzsteuer (nur bei USt-Code Umsatzsteuer) 8% Zusatzsteuer (nur bei USt-Code Umsatzsteuer) 10% ermäßigter Steuersatz 12% für Weinumsätze durch landwirtschaftliche Betriebe (nur für inländische Umsätze/Erwerbe) 13% speziell ermäßigter Steuersatz 19% für Jungholz und Mittelberg 20% Normalsteuersatz Haben Sie ein anderes USt-Land als Österreich definiert, können Sie hier die USt-Sätze des jeweiligen Landes auswählen.                                                                                                                                                                                                                                                                                                                  |
| **Steuertyp**                  | Das Feld Steuertyp ist aktiv sobald ein USt-Code für einen gültigen Vorsteuerabzug ausgewählt wurde (VSt, Erwerbsteuer, Reverse Charge). Folgende Einstellungen können hier vorgenommen werden: Vorsteuer Bauleistung mit oder ohne VSt-Abzug Dreiecksgeschäft mit oder ohne VSt-Abzug Innergemeinschaftlicher Erwerb mit oder ohne VSt-Abzug Ohne VSt-Abzug Reverse Charge Ausland mit oder ohne VSt-Abzug Reverse Charge § 19 Abs 1b mit oder ohne VSt-Abzug USt Schrott und Abfallstoffe mit oder ohne VSt-Abzug Erwerbsteuer Innergemeinschaftlicher Erwerb mit oder ohne VSt-Abzug Reverse-Charge Bauleistung mit oder ohne VSt-Abzug Dreiecksgeschäft mit oder ohne VSt-Abzug Innergemeinschaftlicher Erwerb mit oder ohne VSt-Abzug Reverse Charge Ausland mit oder ohne VSt-Abzug Reverse Charge § 19 Abs 1b mit oder ohne VSt-Abzug USt Schrott und Abfallstoffe mit oder ohne VSt-Abzug |
| **Buchungscode /Kennzahl UVA** | Je nach Einstellung in den Feldern USt-Code und Prozentsatz wird der entsprechende Buchungscode sowie die entsprechende UVA Kennzahl angezeigt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |



Im Register *Gliederung FIBU* können Sie das jeweilige Konto einer KER-Gliederung zuordnen.


![Image](<img/NeuesElement89.png>){width="500"}

#### Aufwandskonto anlegen

Legen Sie ein Aufwandskonto an, erscheint zusätzlich das Feld *Anlagevermögen (KU1).* Aktivieren Sie diese Option, werden auf diesem Konto gebuchte Vorsteuern bei der Berechnung der Kammerumlage in Abzug gebracht.


![Image](<img/NeuesElement88.png>)

#### Bestandskonto anlegen

Legen Sie ein Bestandskonto an, erscheint zusätzlich das Feld *Eröffnungsbilanz buchen.* Aktivieren Sie diese Option, wird die Eröffnungsbilanz auf diesem Konto bei der Jahresübernahme automatisch gebucht. \
Diese Option kann ebenso in den Klientenstammdaten für alle Bestandskonten eines Klienten gesetzt werden (vgl. Kapitel [Neues Wirtschaftsjahr anlegen](/FIBUNext/Stamm/Allgemein/NeuesWirtschaftsjahranlegen)).


![Image](<img/NeuesElement87.png>)


Im Register *Sonstiges* können Sie ein Konto (z.B. Bank, Kassa) als *Zahlungsmittelkonto* definieren.
Ist innerhalb der Kontenstammdaten kein Konto als Zahlungsmittelkonto angelegt, erhalten Sie beim Einstieg in den Menüpunkt *Buchen* eine Hinweismeldung.


![Image](<img/NeuesElement86.png>){width="500"}


#### Register Pflichtkonten

Wechseln Sie in das Register *Pflichtkonten,* können Sie im Bereich ***Sammelkonten*** die jeweiligen Konten definieren.
Ist eines dieser Konten noch nicht angelegt, können Sie dieses mit der F4-Taste neu anlegen.


![Image](<img/NeuesElement85.png>)

Im Bereich ***USt*** können Sie die Konten für die automatische Verbuchung der Umsatzsteuer bzw. Vorsteuer hinterlegen. Diese Konten werden anschließend beim Buchen je nach verwendetem Steuercode automatisiert bebucht. Haben Sie im Register *Allgemein* zusätzliche USt-Länder definiert, haben Sie neben *Österreich* noch weitere Register ***(1)*** mit den jeweiligen USt-Ländern zur Verfügung und müssen dort ebenso die notwendigen Pflichtkonten hinterlegen.


![Image](<img/NeuesElement84.png>)

Im Bereich ***Skontoaufwand*** können Sie für jeden umsatzsteuerrechtlich relevanten Sachverhalt ein eigenes Pflichtkonto für die automatische Verbuchung des Skontoaufwandes hinterlegen. Haben Sie im Register *Allgemein* zusätzliche USt-Länder aktiviert, stehen hier ebenso weitere Register mit den jeweiligen USt-Ländern zur Hinterlegung der Konten zur Verfügung.


![Image](<img/NeuesElement83.png>)

Im Bereich ***Skontoertrag*** haben Sie die Möglichkeit die Konten für die automatische Verbuchung des Skontoertrages für jedes USt-Land zu hinterlegen.


![Image](<img/NeuesElement82.png>)

Im Bereich ***Anzahlungen*** können Sie die Pflichtkonten für die Verbuchung von Anzahlungen hinterlegen. Genaueres zur Anzahlungsverbuchung finden Sie im Kapitel [Anzahlungen](/FIBUNext/Erfassen/Anzahlungen/ErhalteneAnzahlungenvonDebitoren).


![Image](<img/NeuesElement81.png>)

#### Register Kontenbereiche

In diesem Register können Kontenbereiche neu angelegt sowie bestehende Kontonummernbereiche bearbeitet werden. Die Kontenbereiche für Anlagekonten, Bestandskonten, Aufwandskonten und Ertragskonten können nicht gelöscht werden. Ist in der Liste ein Kontenbereich ausgewählt, haben Sie mit einem Klick auf die Schaltfläche *Kontonummernbereiche bearbeiten* ***(1)*** die Möglichkeit die Nummernbereiche für diese Kontoart anzupassen.



![Image](<img/NeuesElement102.png>)

Im Dialog *Kontonummernbereiche bearbeiten* können Sie definieren, welche Kontonummern für welche Kontoart innerhalb dieses Kontenplanes gelten sollen.


![Image](<img/NeuesElement79.png>){width="500"}

**Bindestrich** **(-)** Definiert den Bereich zwischen zwei Kontonummern für die ausgewählte Kontoart

**Strichpunkt** **(;)** Definiert einen zusätzlichen Kontenbereich

Wählen Sie die Schaltfläche *Neuer Kontenbereich* ***(1)*** an kann für die Kontoarten Debitor und Kreditor ein zusätzlicher Kontenbereich angelegt werden. Hier müssen Sie ein Sammelkonto für diesen Kontenbereich vergeben.


![Image](<img/NeuesElement78.png>)


### Kontenplan bearbeiten

Wurde in der Liste der Kontenpläne ein Kontenplan, können Sie diesen über die Schaltfläche *Kontenplan bearbeiten* ***(1)*** weiter bearbeiten. Diese Möglichkeit haben Sie ebenso mit einem Doppelklick auf den jeweiligen Kontenplan.


![Image](<img/NeuesElement77.png>)

### Kontenplan umbenennen

Haben Sie in der Liste der Kontenpläne einen Kontenplan ausgewählt und klicken auf die Schaltfläche *Kontenplan umbenennen* ***(2)***, können Sie den Titel des ausgewählten Kontenplanes verändern. Ein Kontenplan kann auch durch Klick auf den Titel des Kontenplans umbenannt werden.

### Kontenplan löschen

Haben Sie in der Liste der Kontenpläne einen Kontenplan ausgewählt und klicken auf die Schaltfläche *Kontenplan löschen* ***(3)***, wird der Kontenplan gelöscht. Der Kontenplan kann ebenso mithilfe der ENTF-Taste gelöscht werden.

### Kontenplan duplizieren

Haben Sie in der Liste der Kontenpläne einen Kontenplan ausgewählt und klicken auf die Schaltfläche *Kontenplan duplizieren* ***(4)***, öffnet sich anschließend der Dialog zum Duplizieren eines Kontenplans.

Hier können Sie die Bezeichnung für den zu duplizierenden Kontenplan vergeben. Klicken Sie anschließend auf *Speichern*, scheint der Kontenplan mit der gewünschten Bezeichnung in der Liste der Kontenpläne auf.


![Image](<img/NeuesElement76.png>){width="500"}

### Kontenplan von Klient übernehmen

Klicken Sie auf die Schaltfläche *Kontenplan von Klient übernehmen* ***(5)*** haben Sie die Möglichkeit, den bei einem Klienten hinterlegten Kontenplan in die Liste der Kanzleikontenpläne zu übernehmen.

Im folgenden Dialog müssen Sie eine Bezeichnung für den Kontenplan vergeben, den Klienten auswählen von dem der Kontenplan übernommen werden soll sowie das entsprechende Wirtschaftsjahr für die Übernahme auswählen. Optional haben Sie hier die Möglichkeit, die bei dem Kontenplan auf Klientenebene hinterlegten KER-Gliederungen ebenfalls zu übernehmen.


![Image](<img/NeuesElement75.png>){width="700"}


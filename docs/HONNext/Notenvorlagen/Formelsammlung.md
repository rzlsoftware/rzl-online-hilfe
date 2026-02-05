# Formelsammlung

**Honorarnote Allgemein**

| Formel                          | Beschreibung                                                                                    |
| ------------------------------- | ----------------------------------------------------------------------------------------------- |
| Note.Notenbezeichnung           | Bezeichnung der Note (z. B. vorläufige Honorarnote, Honorarnote 01/2024)                        |
| Note.Datum                      | Notendatum                                                                                      |
| Note.Leistungszeitraum.von      | Zeitraum, in dem die Leistungen erbracht wurden                                                 |
| Note.Leistungszeitraum.bis      | Zeitraum, in dem die Leistungen erbracht wurden                                                 |
| Note.ISTDuplikat                | Kann als Bedingungsformel für den Andruck des Wortes „Duplikat“ verwendet werden                |
| Note.GutgeschriebeneNote.Nummer | Notennummer der gutgeschriebenen Honorarnote                                                    |
| Note.GutgeschriebeneNote.Datum  | Notendatum der gutgeschriebenen Honorarnote                                                     |
| Note.IstAnzahlungsnote          | Bedingungsformel für den Andruck auf einer Anzahlungsnote                                       |
| Note.Zusatztext                 | Zusatztext, der bei der Honorarnote eingegeben wurde                                            |
| Note.IstReverseCharge           | Kann als Bedingungsformel für den Andruck des Ausweises von Reverse Charge verwendet werden     |
| Note.Anmerkung                  | Die Anmerkung, welche bei jeder Note individuell hinterlegt werden kann, kann angedruckt werden |


Über die Notenvorlage besteht auch die Möglichkeit, die Rechnungsnummer
mit führenden Nullen zu ergänzen. Hier ist die Funktion
*MitNullFüllen(Note.NummerAlsZahl;4)* nötig. Die Zahl 4 beschreibt die
Anzahl der Stellen (mehr/weniger möglich).

Soll die Funktion *MitNullFüllen* verwendet werden, kann die vorgegebene
Formel *Note.Notenbezeichnung* nicht verwendet werden. Die Formel für
die Bezeichnung lautet dann wie folgt:

![](<img/image347.png>)

Beispiel der Bezeichnung: Honorarnote 0001/2021

**Unternehmensbereich (Rechnungsaussteller)**

| Formel                                   | Beschreibung                            |
| ---------------------------------------- | --------------------------------------- |
| Note.Unternehmensbereich.Bezeichnung     | Name des Unternehmensbereichs           |
| Note.Unternehmensbereich.Logo            | Logo des Unternehmensbereichs           |
| Note.Unternehmensbereich.Adresse.PLZ     | PLZ des Unternehmensbereichs            |
| Note.Unternehmensbereich.Adresse.Ort     | Ort des Unternehmensbereichs            |
| Note.Unternehmensbereich.Adresse.Strasse | Straße des Unternehmensbereichs         |
| Note.Unternehmensbereich.Adresse.Land    | Länderkürzel des Unternehmensbereichs   |
| Note.Unternehmensbereich.EMail           | E-Mail-Adresse des Unternehmensbereichs |
| Note.Unternehmensbereich.Telefonnummer   | Telefonnummer des Unternehmensbereichs  |
| Note.Unternehmensbereich.Homepage        | Homepage des Unternehmensbereichs       |
| Note.Unternehmensbereich.UID             | UID-Nummer des Unternehmensbereichs     |
| Note.Zahlung.Bankverbindung.Kontoinhaber | Kontoinhaber des Unternehmensbereichs   |



**Klient (Rechnungsempfänger)**

| Formel                          | Beschreibung                                                       |
| ------------------------------- | ------------------------------------------------------------------ |
| Note.Klient.Nummer              | Klientennummer                                                     |
| Note.Klient.Adressanrede        | Adressanrede                                                       |
| Note.Klient.Titel               | Titel (z. B. „Prof.“)                                              |
| Note.Klient.AkademischerGrad    | Vorangestellter akademischer Grad (z. B. „Mag.“)                   |
| Note.Klient.AkademischerGrad2   | Hinten angestellter akademischer Grad (z. B. „MSc“)                |
| Note.Klient.Name                | Klientenname                                                       |
| Note.Klient.Adresse.Strasse     | Straße                                                             |
| Note.Klient.Adresse.Ort         | Ort                                                                |
| Note.Klient.Adresse.Land        | Länderkürzel                                                       |
| Note.Klient.Taetigkeit          | Art der Tätigkeit (bei Firmendaten) bzw. Beruf (bei Personendaten) |
| Note.Klient.Briefanrede         | Briefanrede                                                        |
| Note.Klient.Email               | E-Mail-Adresse des Klienten                                        |
| Note.Klient.UID                 | UID-Nummer des Klienten                                            |
| Note.Klient.DebKonto.Nummer     | Debitorenkontonummer                                               |
| Note.Klient.ZuHanden.Gesamtname | Name inkl. akademischer Grad der hinterlegten Person               |



**Zustellvertreter**

| Formel                                  | Beschreibung                                        |
| --------------------------------------- | --------------------------------------------------- |
| Note.Zustellvertreter.Adressanrede      | Adressanrede                                        |
| Note.Zustellvertreter.Titel             | Titel (z. B. „Prof.“)                               |
| Note.Zustellvertreter.AkademischerGrad  | Vorangestellter akademischer Grad (z. B. „Mag.“)    |
| Note.Zustellvertreter.AkademischerGrad2 | Hinten angestellter akademischer Grad (z. B. „MSc“) |
| Note.Zustellvertreter.Name              | Name Zustellvertreter                               |
| Note.Zustellvertreter.Adresse.Strasse   | Straße Zustellvertreter                             |
| Note.Zustellvertreter.Adresse.Ort       | Ort Zustellvertreter                                |
| Note.Zustellvertreter.Adresse.Land      | Länderkürzel Zustellvertreter                       |


**Zahlung**

| Formel                                   | Beschreibung                          |
| ---------------------------------------- | ------------------------------------- |
| Note.Zahlung.Bankverbindung.Geldinstitut | Name der Bank                         |
| Note.Zahlung.Bankverbindung.IBAN         | International Bank Account Number     |
| Note.Zahlung.Bankverbindung.BIC          | Bank Identifier Code                  |
| Note.Zahlung.Frist                       | Zahlungsfrist in Tagen                |
| Note.Datum+Tage(Note.Zahlung.Frist)      | Zahlbar bis spätestens (Datum)        |
| Note.Zahlung.QRCode                      | Überweisungsdaten als QR-Code (Bild)  |
| Note.Zahlung.Zahlungsreferenz            | Zahlungsreferenz (= Notennummer)      |
| Note.Zahlung.Skonto.Betrag               | Skonto-Betrag                         |
| Note.Zahlung.Skonto.Frist                | Skonto-Frist in Tagen                 |
| Note.Zahlung.Skonto.Prozent              | Skonto-Prozentsatz                    |
| Note.Zahlung.IstLastschrift              | Bedingungsformel für den Bankeinzug   |
| Note.Zahlung.IstKeineZahlung             | Bedingungsformel für keine Zahlung    |
| Note.Zahlung.Bankverbindung.Kontoinhaber | Kontoinhaber des Unternehmensbereichs |

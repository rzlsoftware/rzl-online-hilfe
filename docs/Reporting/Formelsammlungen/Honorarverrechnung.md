# Honorarverrechnung 

Im folgenden Kapitel finden Sie eine Auflistung der verfügbaren Formeln für das Reporting im *Honorarverrechnungsprogramm*.

## RZL Notenvorlage Erweitert

Eine aktuelle Übersicht finden Sie in der *ZMV* unter *Allg. Dateien* / *Installieren* im Registerblatt *Reports* oder unter [Auflistung Musterreports](../Auflistung_Musterreports.md).

!!! info "Tipp"
    RZL bietet Ihnen Musterhonorarnotenvorlagen in Form eines Reports mit der Nummer *300-RZL Muster Notenvorlagen* an. Diese können auf den gewünschten Klienten überspielt und anschließend abgeändert werden.

!!! info "Tipp"
    Die RZL-Musterreports werden stetig erweitert. Neuerungen werden auch im Zuge der RZL-Programmaktualisierung in den RZL-Newslettern veröffentlicht.

## Liste der Honorarverrechnungsformeln

Die folgenden Formeln sind im *Honorarverrechnungsprogramm* anwendbar.

### Dokument Allgemein

| **Formel**                                             | **Beschreibung**           |
| ------------------------------------------------------ | -------------------------- |
| `AktuellesDatum`{data-clipboard-text="AktuellesDatum"} | Tagesdatum                 |
| `AktuelleSeite`{data-clipboard-text="AktuelleSeite"}   | Nummer der aktuellen Seite |
| `Seitenanzahl`{data-clipboard-text="Seitenanzahl"}     | Gesamtzahl der Seiten      |

### Honorarnote Allgemein

| **Formel**                                               | **Beschreibung**                                                    |
| -------------------------------------------------------- | ------------------------------------------------------------------- |
| `Note.Nr`{data-clipboard-text="Note.Nr"}                 | Notennummer                                                         |
| `Note.Datum`{data-clipboard-text="Note.Datum"}           | Notendatum                                                          |
| `Note.EMail`{data-clipboard-text="Note.EMail"}           | E-Mail-Adresse                                                      |
| `Note.Intern`{data-clipboard-text="Note.Intern"}         | „Wahr", wenn es sich um eine interne Note handelt                   |
| `Note.Zeitraum`{data-clipboard-text="Note.Zeitraum"}     | Erfassungszeitraum; Zeitraum, in dem die Leistungen erbracht wurden |
| `Note.Zusatztext`{data-clipboard-text="Note.Zusatztext"} | Zusatztext; kann während der Notenerstellung eingegeben werden.     |

### Kanzleibereich (Rechnungssteller)

Die Daten des Kanzleibereichs können vor allem für die Erstellung des Briefkopfes herangezogen werden.

| **Formel**                                                                         | **Beschreibung**                    |
| ---------------------------------------------------------------------------------- | ----------------------------------- |
| `Note.Kanzleibereich.Nr`{data-clipboard-text="Note.Kanzleibereich.Nr"}             | Nummer                              |
| `Note.Kanzleibereich.Name`{data-clipboard-text="Note.Kanzleibereich.Name"}         | Name                                |
| `Note.Kanzleibereich.Strasse`{data-clipboard-text="Note.Kanzleibereich.Strasse"}   | Straße                              |
| `Note.Kanzleibereich.PLZ`{data-clipboard-text="Note.Kanzleibereich.PLZ"}           | Postleitzahl                        |
| `Note.Kanzleibereich.Ort`{data-clipboard-text="Note.Kanzleibereich.Ort"}           | Ort                                 |
| `Note.Kanzleibereich.Land`{data-clipboard-text="Note.Kanzleibereich.Land"}         | Länderkürzel                        |
| `Note.Kanzleibereich.UID`{data-clipboard-text="Note.Kanzleibereich.UID"}           | Umsatzsteuer-Identifikations-Nummer |
| `Note.Kanzleibereich.Homepage`{data-clipboard-text="Note.Kanzleibereich.Homepage"} | Homepage                            |
| `Note.Kanzleibereich.EMail`{data-clipboard-text="Note.Kanzleibereich.EMail"}       | E-Mail-Adresse                      |

### Klient (Rechnungsempfänger)

| **Formel**                                                                           | **Beschreibung**                                                                   |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| `Note.Klient.Nr`{data-clipboard-text="Note.Klient.Nr"}                               | Nummer                                                                             |
| `Note.Klient.Adressanrede`{data-clipboard-text="Note.Klient.Adressanrede"}           | Adressanrede                                                                       |
| `Note.Klient.AkademischerGrad`{data-clipboard-text="Note.Klient.AkademischerGrad"}   | Vorangestellter akademischer Grad (z. B. „Mag.")                                   |
| `Note.Klient.Gesamtname`{data-clipboard-text="Note.Klient.Gesamtname"}               | Zusammengesetzter Name inkl. Akademischer Grade, Vorname und Nachname              |
| `Note.Klient.Vorname`{data-clipboard-text="Note.Klient.Vorname"}                     | Vorname                                                                            |
| `Note.Klient.Nachname`{data-clipboard-text="Note.Klient.Nachname"}                   | Nachname                                                                           |
| `Note.Klient.AkademischerGrad2`{data-clipboard-text="Note.Klient.AkademischerGrad2"} | Nachgestellter akademischer Grad (z. B. „MS")                                      |
| `Note.Klient.Tätigkeit`{data-clipboard-text="Note.Klient.Tätigkeit"}                 | Art der Tätigkeit (bei Firmendaten) bzw. Beruf (bei Personendaten)                 |
| `Note.Klient.Strasse`{data-clipboard-text="Note.Klient.Strasse"}                     | Straße                                                                             |
| `Note.Klient.PLZ`{data-clipboard-text="Note.Klient.PLZ"}                             | Postleitzahl                                                                       |
| `Note.Klient.Ort`{data-clipboard-text="Note.Klient.Ort"}                             | Ort                                                                                |
| `Note.Klient.Land`{data-clipboard-text="Note.Klient.Land"}                           | Langform (z. B. „Deutschland"); bei österreichischen Klienten bleibt das Feld leer |
| `Note.Klient.Briefanrede`{data-clipboard-text="Note.Klient.Briefanrede"}             | Briefanrede                                                                        |
| `Note.Klient.EMail`{data-clipboard-text="Note.Klient.EMail"}                         | E-Mail-Adresse                                                                     |
| `Note.Klient.Kurzbezeichnung`{data-clipboard-text="Note.Klient.Kurzbezeichnung"}     | Kurzbezeichnung                                                                    |
| `Note.Klient.UID`{data-clipboard-text="Note.Klient.UID"}                             | Umsatzsteuer-Identifikations-Nummer                                                |

### Zustellvertreter

| **Formel**                                                                                     | **Beschreibung**                                                                   |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `Note.Zustellvertreter.Vorhanden`{data-clipboard-text="Note.Zustellvertreter.Vorhanden"}       | „Wahr" wenn ein Zustellvertreter vorhanden ist                                     |
| `Note.Zustellvertreter.Adressanrede`{data-clipboard-text="Note.Zustellvertreter.Adressanrede"} | Adressanrede                                                                       |
| `Note.Zustellvertreter.Name`{data-clipboard-text="Note.Zustellvertreter.Name"}                 | Name                                                                               |
| `Note.Zustellvertreter.Funktion`{data-clipboard-text="Note.Zustellvertreter.Funktion"}         | Funktion                                                                           |
| `Note.Zustellvertreter.Strasse`{data-clipboard-text="Note.Zustellvertreter.Strasse"}           | Straße                                                                             |
| `Note.Zustellvertreter.PLZ`{data-clipboard-text="Note.Zustellvertreter.PLZ"}                   | Postleitzahl                                                                       |
| `Note.Zustellvertreter.Ort`{data-clipboard-text="Note.Zustellvertreter.Ort"}                   | Ort                                                                                |
| `Note.Zustellvertreter.Land`{data-clipboard-text="Note.Zustellvertreter.Land"}                 | Langform (z. B. „Deutschland"); bei österreichischen Klienten bleibt das Feld leer |

## Bereiche

### Mit Umsatzsteuer

In diesem Bereich werden die Tätigkeiten mit Umsatzsteuerpflicht dargestellt. Je nach Einstellungen in den Programmoptionen erfolgt eine Aufteilung auf die (Unter-)Klienten und die Verrechnungskreise.

!!! warning "Hinweis"
    Die Klammern weisen darauf hin, dass mehrere Zeilen vorhanden sind.

| **Formel**                                                                                                                                                                 | **Beschreibung**                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `Note.Bereich.MitUSt.Klient().Nr`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Nr"}                                                                                   | Klientennummer                                    |
| `Note.Bereich.MitUSt.Klient().Name`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Name"}                                                                               | Klientenname                                      |
| `Note.Bereich.MitUSt.Klient().Stunden`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Stunden"}                                                                         | Anzahl der Stunden für den Klienten               |
| `Note.Bereich.MitUSt.Klient().Verrechnungskreis().Nr`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Verrechnungskreis().Nr"}                                           | Verrechnungskreis-Nummer                          |
| `Note.Bereich.MitUSt.Klient().Verrechnungskreis().Bezeichnung`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Verrechnungskreis().Bezeichnung"}                         | Bezeichnung bzw. Text                             |
| `Note.Bereich.MitUSt.Klient().Verrechnungskreis().Stunden`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Verrechnungskreis().Stunden"}                                 | Anzahl der Stunden                                |
| `Note.Bereich.MitUSt.Klient().Verrechnungskreis().Zeitraum`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Verrechnungskreis().Zeitraum"}                               | Leistungszeitraum (wenn nach VK abgerechnet wird) |
| `Note.Bereich.MitUSt.Klient().Verrechnungskreis().Betrag`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Verrechnungskreis().Betrag"}                                   | Betrag (wenn nach VK abgerechnet wird)            |
| `Note.Bereich.MitUSt.Klient().Verrechnungskreis().Tätigkeit().Nr`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Verrechnungskreis().Tätigkeit().Nr"}                   | Nummer der Tätigkeit                              |
| `Note.Bereich.MitUSt.Klient().Verrechnungskreis().Tätigkeit().Bezeichnung`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Verrechnungskreis().Tätigkeit().Bezeichnung"} | Bezeichnung bzw. Text                             |
| `Note.Bereich.MitUSt.Klient().Verrechnungskreis().Tätigkeit().Einheiten`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Verrechnungskreis().Tätigkeit().Einheiten"}     | Anzahl der Einheiten                              |
| `Note.Bereich.MitUSt.Klient().Verrechnungskreis().Tätigkeit().Stunden`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Verrechnungskreis().Tätigkeit().Stunden"}         | Anzahl der Stunden                                |
| `Note.Bereich.MitUSt.Klient().Verrechnungskreis().Tätigkeit().Zeitraum`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Verrechnungskreis().Tätigkeit().Zeitraum"}       | Leistungszeitraum                                 |
| `Note.Bereich.MitUSt.Klient().Verrechnungskreis().Tätigkeit().Betrag`{data-clipboard-text="Note.Bereich.MitUSt.Klient().Verrechnungskreis().Tätigkeit().Betrag"}           | Betrag                                            |

### Ohne Umsatzsteuer

In diesem Bereich werden die Tätigkeiten ohne Umsatzsteuerpflicht dargestellt. Der Aufbau ist identisch zum Bereich „Mit Umsatzsteuer".

| **Formel**                                                         | **Beschreibung**                 |
| ------------------------------------------------------------------ | -------------------------------- |
| `Note.Bereich.OhneUSt`{data-clipboard-text="Note.Bereich.OhneUSt"} | Siehe Bereich „Mit Umsatzsteuer" |

### Rabatte

| **Formel**                                                                                   | **Beschreibung**       |
| -------------------------------------------------------------------------------------------- | ---------------------- |
| `Note.Bereich.Rabatt().Nr`{data-clipboard-text="Note.Bereich.Rabatt().Nr"}                   | Nummer der Rabattzeile |
| `Note.Bereich.Rabatt().Bezeichnung`{data-clipboard-text="Note.Bereich.Rabatt().Bezeichnung"} | Bezeichnung bzw. Text  |
| `Note.Bereich.Rabatt().Zeitraum`{data-clipboard-text="Note.Bereich.Rabatt().Zeitraum"}       | Leistungszeitraum      |
| `Note.Bereich.Rabatt().Betrag`{data-clipboard-text="Note.Bereich.Rabatt().Betrag"}           | Betrag                 |
| `Note.Bereich.Rabatt().Stunden`{data-clipboard-text="Note.Bereich.Rabatt().Stunden"}         | Stunden                |

### Akonto

In diesem Bereich werden die Akonto-Zeilen dargestellt. Je nach Einstellungen in den Programmoptionen erfolgt eine Aufteilung auf die (Unter-)Klienten.

| **Formel**                                                                                                                         | **Beschreibung**            |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `Note.Bereich.Akonto.Klient().Nr`{data-clipboard-text="Note.Bereich.Akonto.Klient().Nr"}                                           | Klientennummer              |
| `Note.Bereich.Akonto.Klient().Name`{data-clipboard-text="Note.Bereich.Akonto.Klient().Name"}                                       | Klientenname                |
| `Note.Bereich.Akonto.Klient().Stunden`{data-clipboard-text="Note.Bereich.Akonto.Klient().Stunden"}                                 | Stundenanzahl               |
| `Note.Bereich.Akonto.Klient().Tätigkeit().Nr`{data-clipboard-text="Note.Bereich.Akonto.Klient().Tätigkeit().Nr"}                   | Nummer der Akonto-Tätigkeit |
| `Note.Bereich.Akonto.Klient().Tätigkeit().Bezeichnung`{data-clipboard-text="Note.Bereich.Akonto.Klient().Tätigkeit().Bezeichnung"} | Bezeichnung bzw. Text       |
| `Note.Bereich.Akonto.Klient().Tätigkeit().Zeitraum`{data-clipboard-text="Note.Bereich.Akonto.Klient().Tätigkeit().Zeitraum"}       | Akonto-Zeitraum             |
| `Note.Bereich.Akonto.Klient().Tätigkeit().Betrag`{data-clipboard-text="Note.Bereich.Akonto.Klient().Tätigkeit().Betrag"}           | Betrag                      |
| `Note.Bereich.Akonto.Klient().Tätigkeit().Einheiten`{data-clipboard-text="Note.Bereich.Akonto.Klient().Tätigkeit().Einheiten"}     | Einheiten                   |
| `Note.Bereich.Akonto.Klient().Tätigkeit().Stunden`{data-clipboard-text="Note.Bereich.Akonto.Klient().Tätigkeit().Stunden"}         | Stunden                     |

## Summen

### Nettosumme vor Abzug der Rabatte

| **Formel**                                                                                   | **Beschreibung**                         |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `Note.Summe.NettoVorRabatt.Drucken`{data-clipboard-text="Note.Summe.NettoVorRabatt.Drucken"} | „Wahr", wenn Rabattzeilen vorhanden sind |
| `Note.Summe.NettoVorRabatt.Text`{data-clipboard-text="Note.Summe.NettoVorRabatt.Text"}       | Text laut Programmoptionen               |
| `Note.Summe.NettoVorRabatt.Betrag`{data-clipboard-text="Note.Summe.NettoVorRabatt.Betrag"}   | Summe                                    |

### Nettosumme vor der Umsatzsteuer

| **Formel**                                                                 | **Beschreibung**                               |
| -------------------------------------------------------------------------- | ---------------------------------------------- |
| `Note.Summe.Netto.Drucken`{data-clipboard-text="Note.Summe.Netto.Drucken"} | „Wahr", wenn eine Umsatzsteuer auszuweisen ist |
| `Note.Summe.Netto.Text`{data-clipboard-text="Note.Summe.Netto.Text"}       | Text laut Programmoptionen                     |
| `Note.Summe.Netto.Betrag`{data-clipboard-text="Note.Summe.Netto.Betrag"}   | Summe                                          |

### Umsatzsteuer

| **Formel**                                                                               | **Beschreibung**                               |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `Note.Summe.Umsatzsteuer.Drucken`{data-clipboard-text="Note.Summe.Umsatzsteuer.Drucken"} | „Wahr", wenn eine Umsatzsteuer auszuweisen ist |
| `Note.Summe.Umsatzsteuer.Text`{data-clipboard-text="Note.Summe.Umsatzsteuer.Text"}       | Text laut Programmoptionen                     |
| `Note.Summe.Umsatzsteuer.Prozent`{data-clipboard-text="Note.Summe.Umsatzsteuer.Prozent"} | Prozentsatz                                    |
| `Note.Summe.Umsatzsteuer.Berag`{data-clipboard-text="Note.Summe.Umsatzsteuer.Berag"}     | Umsatzsteuerbetrag                             |

### Summe Nach Umsatzsteuer

| **Formel**                                                                     | **Beschreibung**                                                                                              |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| `Note.Summe.NachUSt.Drucken`{data-clipboard-text="Note.Summe.NachUSt.Drucken"} | „Wahr", wenn eine Umsatzsteuer auszuweisen ist und wenn im Bereich „ohne Umsatzsteuer" Zeilen vorhanden sind. |
| `Note.Summe.NachUSt.Text`{data-clipboard-text="Note.Summe.NachUSt.Text"}       | Text laut Programmoptionen                                                                                    |
| `Note.Summe.NachUSt.Betrag`{data-clipboard-text="Note.Summe.NachUSt.Betrag"}   | Summe                                                                                                         |

### Bruttosumme (Zwischensumme vor Akonto)

| **Formel**                                                                   | **Beschreibung**                          |
| ---------------------------------------------------------------------------- | ----------------------------------------- |
| `Note.Summe.Brutto.Drucken`{data-clipboard-text="Note.Summe.Brutto.Drucken"} | „Wahr", wenn Akonto-Zeilen vorhanden sind |
| `Note.Summe.Brutto.Text`{data-clipboard-text="Note.Summe.Brutto.Text"}       | Text laut Programmoptionen                |
| `Note.Summe.Brutto.Betrag`{data-clipboard-text="Note.Summe.Brutto.Betrag"}   | Summe                                     |

### Akonto Umsatzsteuer

| **Formel**                                                                                           | **Beschreibung**                                         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `Note.Summe.AkontoUmsatzsteuer.Drucken`{data-clipboard-text="Note.Summe.AkontoUmsatzsteuer.Drucken"} | „Wahr", wenn Akontozeilen mit USt-Ausweis vorhanden sind |
| `Note.Summe.AkontoUmsatzsteuer.Text`{data-clipboard-text="Note.Summe.AkontoUmsatzsteuer.Text"}       | Text laut Programmoptionen                               |
| `Note.Summe.AkontoUmsatzsteuer.Prozent`{data-clipboard-text="Note.Summe.AkontoUmsatzsteuer.Prozent"} | Prozentsatz                                              |
| `Note.Summe.AkontoUmsatzsteuer.Betrag`{data-clipboard-text="Note.Summe.AkontoUmsatzsteuer.Betrag"}   | Umsatzsteuerbetrag                                       |

### Gesamtbetrag

| **Formel**                                                                               | **Beschreibung**                              |
| ---------------------------------------------------------------------------------------- | --------------------------------------------- |
| `Note.Summe.Gesamtbetrag.Drucken`{data-clipboard-text="Note.Summe.Gesamtbetrag.Drucken"} | Immer „Wahr“; Gesamtsumme wird immer gedruckt |
| `Note.Summe.Gesamtbetrag.Text`{data-clipboard-text="Note.Summe.Gesamtbetrag.Text"}       | Text laut Programmoptionen                    |
| `Note.Summe.Gesamtbetrag.Betrag`{data-clipboard-text="Note.Summe.Gesamtbetrag.Betrag"}   | Summe des Gesamtbetrags                       |

### Zahlung

| **Formel**                                                                       | **Beschreibung**                                             |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `Note.Zahlung.Bankeinzug`{data-clipboard-text="Note.Zahlung.Bankeinzug"}         | „Wahr“, wenn für diese Rechnung ein Bankeinzug erfolgen soll |
| `Note.Zahlung.Bankname`{data-clipboard-text="Note.Zahlung.Bankname"}             | Name der Bank (laut Stammdaten des Kanzleibereiches)         |
| `Note.Zahlung.BIC`{data-clipboard-text="Note.Zahlung.BIC"}                       | Bank Identifier Code                                         |
| `Note.Zahlung.Frist`{data-clipboard-text="Note.Zahlung.Frist"}                   | Zahlungsfrist in Tagen                                       |
| `Note.Zahlung.IBAN`{data-clipboard-text="Note.Zahlung.IBAN"}                     | International Bank Account Number                            |
| `Note.Zahlung.QRCode`{data-clipboard-text="Note.Zahlung.QRCode"}                 | Überweisungsdaten als QR-Code (Bild)                         |
| `Note.Zahlung.Referenz`{data-clipboard-text="Note.Zahlung.Referenz"}             | Zahlungsreferenz (12-stellig numerisch)                      |
| `Note.Zahlung.Skonto.Betrag`{data-clipboard-text="Note.Zahlung.Skonto.Betrag"}   | Skonto-Betrag                                                |
| `Note.Zahlung.Skonto.Frist`{data-clipboard-text="Note.Zahlung.Skonto.Frist"}     | Skonto-Frist in Tagen                                        |
| `Note.Zahlung.Skonto.Prozent`{data-clipboard-text="Note.Zahlung.Skonto.Prozent"} | Skonto-Prozentsatz                                           |

## Journal

Das Journal ist eine Auflistung der in der Note abgerechneten Erfassungszeilen. Das Journal ist untergliedert in die Ebenen Bereich, Klient, Verrechnungskreis, Tätigkeit und Erfassungszeile. Je nach Verwendung der Formeln können einzelne Bereiche auch zusammengefasst werden. Ein Beispiel ist in der „RZL Mustervorlage mit Vorblatt Journal Rückblick" zu finden.

| **Formel**                                                                                                                                                                                                                                       | **Beschreibung**              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| `Note.Journal.Bereich().Nr`{data-clipboard-text="Note.Journal.Bereich().Nr"}                                                                                                                                                                     | Bereichsnummer                |
| `Note.Journal.Bereich().Bezeichnung`{data-clipboard-text="Note.Journal.Bereich().Bezeichnung"}                                                                                                                                                   | Bereichsbezeichnung           |
| `Note.Journal.Bereich().Zeitraum`{data-clipboard-text="Note.Journal.Bereich().Zeitraum"}                                                                                                                                                         | Leistungszeitraum             |
| `Note.Journal.Bereich().Stunden`{data-clipboard-text="Note.Journal.Bereich().Stunden"}                                                                                                                                                           | Anzahl der Stunden            |
| `Note.Journal.Bereich().Betrag`{data-clipboard-text="Note.Journal.Bereich().Betrag"}                                                                                                                                                             | Summe                         |
| `Note.Journal.Bereich().Kurzbezeichnung`{data-clipboard-text="Note.Journal.Bereich().Kurzbezeichnung"}                                                                                                                                           | Kurzbezeichnung des Bereiches |
| `Note.Journal.Bereich().Klient().Nr`{data-clipboard-text="Note.Journal.Bereich().Klient().Nr"}                                                                                                                                                   | Klientennummer                |
| `Note.Journal.Bereich().Klient().Name`{data-clipboard-text="Note.Journal.Bereich().Klient().Name"}                                                                                                                                               | Klientenname                  |
| `Note.Journal.Bereich().Klient().Kurzbezeichnung`{data-clipboard-text="Note.Journal.Bereich().Klient().Kurzbezeichnung"}                                                                                                                         | Klienten-Kurzbezeichnung      |
| `Note.Journal.Bereich().Klient().Zeitraum`{data-clipboard-text="Note.Journal.Bereich().Klient().Zeitraum"}                                                                                                                                       | Leistungszeitraum             |
| `Note.Journal.Bereich().Klient().Stunden`{data-clipboard-text="Note.Journal.Bereich().Klient().Stunden"}                                                                                                                                         | Anzahl der Stunden            |
| `Note.Journal.Bereich().Klient().Betrag`{data-clipboard-text="Note.Journal.Bereich().Klient().Betrag"}                                                                                                                                           | Summe                         |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Nr`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Nr"}                                                                                                           | Verrechnungskreis-Nummer      |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Bezeichnung`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Bezeichnung"}                                                                                         | Verrechnungskreis-Bezeichnung |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Kurzbezeichnung`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Kurzbezeichnung"}                                                                                 | VK-Kurzbezeichnung            |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Zeitraum`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Zeitraum"}                                                                                               | Leistungszeitraum             |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Stunden`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Stunden"}                                                                                                 | Anzahl der Stunden            |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Betrag`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Betrag"}                                                                                                   | Summe                         |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Nr`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Nr"}                                                                                   | Nummer                        |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Bezeichnung`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Bezeichnung"}                                                                 | Bezeichnung                   |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Kurzbezeichnung`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Kurzbezeichnung"}                                                         | Kurzbezeichnung               |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Zeitraum`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Zeitraum"}                                                                       | Leistungszeitraum             |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Stunden`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Stunden"}                                                                         | Anzahl der Stunden            |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Betrag`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Betrag"}                                                                           | Summe                         |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Einheiten`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Einheiten"}                                                                     | Anzahl der Einheiten          |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Nr`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Nr"}                                                   | Zeilen-Nummer                 |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Datum`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Datum"}                                             | Erfassungsdatum               |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Mitarbeiter.Nr`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Mitarbeiter.Nr"}                           | Mit.-Nummer                   |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Mitarbeiter.Name`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Mitarbeiter.Name"}                       | Mit.-Name                     |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Mitarbeiter.Kurzbezeichnung`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Mitarbeiter.Kurzbezeichnung"} | Mit.-Kurzbezeichnung          |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Tätigkeit.Nr`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Tätigkeit.Nr"}                               | Tät.-Nummer                   |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Tätigkeit.Bezeichnung`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Tätigkeit.Bezeichnung"}             | Tät. Bezeichnung              |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Tätigkeit.Kurzbezeichnung`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Tätigkeit.Kurzbezeichnung"}     | Tät. Kurzbez.                 |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Klient.Nr`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Klient.Nr"}                                     | Kli-Nummer                    |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Klient.Kurzbezeichnung`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Klient.Kurzbezeichnung"}           | Kli.-Kurzbezeichnung          |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Zeitraum`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Zeitraum"}                                       | Leistungszeitraum             |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Stunden`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Stunden"}                                         | Anzahl der Stunden            |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Einheiten`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Einheiten"}                                     | Anzahl der Einheiten          |
| `Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Betrag`{data-clipboard-text="Note.Journal.Bereich().Klient().Verrechnungskreis().Tätigkeit().Erfassungszeile.Betrag"}                                           | Betrag                        |

## Verrechnungskreis-Rückblick

Je Verrechnungskreis können die Werte der aktuellen und der letzten 5 Honorarnoten dargestellt werden. Ein Beispiel ist in der „RZL
Mustervorlage mit Vorblatt Journal Rückblick" zu finden

| **Formel**                                                                                                                                 | **Beschreibung**             |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| `Note.VkRückblick().Verrechnungskreis().Nr`{data-clipboard-text="Note.VkRückblick().Verrechnungskreis().Nr"}                               | Verrechnungskreisnummer      |
| `Note.VkRückblick().Verrechnungskreis().Bezeichnung`{data-clipboard-text="Note.VkRückblick().Verrechnungskreis().Bezeichnung"}             | Verrechnungskreisbezeichnung |
| `Note.VkRückblick().Verrechnungskreis().Note().Nr`{data-clipboard-text="Note.VkRückblick().Verrechnungskreis().Note().Nr"}                 | Notennummer                  |
| `Note.VkRückblick().Verrechnungskreis().Note().Datum`{data-clipboard-text="Note.VkRückblick().Verrechnungskreis().Note().Datum"}           | Notendatum                   |
| `Note.VkRückblick().Verrechnungskreis().Note().Stunden`{data-clipboard-text="Note.VkRückblick().Verrechnungskreis().Note().Stunden"}       | Anzahl der Stunden           |
| `Note.VkRückblick().Verrechnungskreis().Note().ZuAbschlag`{data-clipboard-text="Note.VkRückblick().Verrechnungskreis().Note().ZuAbschlag"} | Zu- und Abschläge            |
| `Note.VkRückblick().Verrechnungskreis().Note().Summe`{data-clipboard-text="Note.VkRückblick().Verrechnungskreis().Note().Summe"}           | Summe                        |

# Formelsammlung für die Honorarverrechnung 

Im folgenden Kapitel finden Sie die Auflistung der verfügbaren Formeln für das Reporting im Honorarverrechnungsprogramm.

## RZL Notenvorlage Erweitert

Eine aktuelle Übersicht finden Sie in der ZMV unter *Allg. Dateien* / *Installieren* im Registerblatt *Reports* oder im Kapitel 9 Auflistung Musterreports Seite [57](#auflistung-musterreports) ff beschrieben.

!!! info "Tipp"
    RZL bietet Ihnen Musterhonorarnotenvorlagen in Form eines Reports mit der Nummer *300-RZL Muster Notenvorlagen* an. Diese können auf den gewünschten Klienten überspielt und anschließend abgeändert werden. Die notwendigen Einstellungen betreffend des Klienten in der RZL-Honorarverrechnung finden Sie in der Kurzanleitung *Notenvorlage Erweitert*, welche über *Hilfe / Kurzanleitungen* im Honorarprogramm aufgerufen werden kann.

!!! info "Tipp"
    Die RZL-Musterreports werden stetig erweitert. Neuerungen werden auch im Zuge der RZL-Programmaktualisierung in den RZL-Newslettern veröffentlicht.

## Liste der Honorarverrechnungsformeln

Die folgenden Formeln sind im Honorarverrechnungsprogramm anwendbar.

### Dokument Allgemein

| **Formel**     | **Beschreibung**           |
| -------------- | -------------------------- |
| AktuellesDatum | Tagesdatum                 |
| AktuelleSeite  | Nummer der aktuellen Seite |
| Seitenanzahl   | Gesamtzahl der Seiten      |

### Honorarnote Allgemein

| **Formel** |            | **Beschreibung**                                                   |
| ---------- | ---------- | ------------------------------------------------------------------ |
| Note       | Nr         | Notennummer                                                        |
| Note       | Datum      | Notendatum                                                         |
| Note       | EMail      | E-Mail                                                             |
| Note       | Intern     | „Wahr" wenn es sich um eine interne Note handelt                   |
| Note       | Zeitraum   | Erfassungszeitraum; Zeitraum in dem die Leistungen erbracht wurden |
| Note       | Zusatztext | Zusatztext; kann während der Notenerstellung eingegeben werden     |

### Kanzleibereich (Rechnungssteller)

Die Daten des Kanzleibereiches können vor allem für die Erstellung des Briefkopfes herangezogen werden

| **Formel** |                |          | **Beschreibung**                    |
| ---------- | -------------- | -------- | ----------------------------------- |
| Note       | Kanzleibereich | Nr       | Nummer                              |
| Note       | Kanzleibereich | Name     | Name                                |
| Note       | Kanzleibereich | Strasse  | Straße                              |
| Note       | Kanzleibereich | PLZ      | Postleitzahl                        |
| Note       | Kanzleibereich | Ort      | Ort                                 |
| Note       | Kanzleibereich | Land     | Länderkürzel                        |
| Note       | Kanzleibereich | UID      | Umsatzsteuer-Identifikations-Nummer |
| Note       | Kanzleibereich | Homepage | Homepage                            |
| Note       | Kanzleibereich | EMail    | E-Mail-Adresse                      |

### Klient (Rechnungsempfänger)

| **Formel** |        |                   | **Beschreibung**                                                                |
| ---------- | ------ | ----------------- | ------------------------------------------------------------------------------- |
| Note       | Klient | Nr                | Nummer                                                                          |
| Note       | Klient | Adressanrede      | Adressanrede                                                                    |
| Note       | Klient | AkademischerGrad  | Vorangestellter akademischer Grad (zB „Mag.")                                   |
| Note       | Klient | Gesamtname        | Zusammengesetzter Name inkl. Akademischer Grade, Vorname und Nachname           |
| Note       | Klient | Vorname           | Vorname                                                                         |
| Note       | Klient | Nachname          | Nachname                                                                        |
| Note       | Klient | AkademischerGrad2 | Nachgestellter akademischer Grad (zB „MS")                                      |
| Note       | Klient | Tätigkeit         | Art der Tätigkeit (bei Firmendaten) bzw. Beruf (bei Personendaten)              |
| Note       | Klient | Strasse           | Straße                                                                          |
| Note       | Klient | PLZ               | Postleitzahl                                                                    |
| Note       | Klient | Ort               | Ort                                                                             |
| Note       | Klient | Land              | Langform (zB „Deutschland"); bei österreichischen Klienten bleibt das Feld leer |
| Note       | Klient | Briefanrede       | Briefanrede                                                                     |
| Note       | Klient | EMail             | E-Mail-Adresse                                                                  |
| Note       | Klient | Kurzbezeichnung   | Kurzbezeichnung                                                                 |
| Note       | Klient | UID               | Umsatzsteuer-Identifikations-Nummer                                             |

### Zustellvertreter

| **Formel** |                  |              | **Beschreibung**                                                                |
| ---------- | ---------------- | ------------ | ------------------------------------------------------------------------------- |
| Note       | Zustellvertreter | Vorhanden    | „Wahr" wenn ein Zustellvertreter vorhanden ist                                  |
| Note       | Zustellvertreter | Adressanrede | Adressanrede                                                                    |
| Note       | Zustellvertreter | Name         | Name                                                                            |
| Note       | Zustellvertreter | Funktion     | Funktion                                                                        |
| Note       | Zustellvertreter | Strasse      | Straße                                                                          |
| Note       | Zustellvertreter | PLZ          | Postleitzahl                                                                    |
| Note       | Zustellvertreter | Ort          | Ort                                                                             |
| Note       | Zustellvertreter | Land         | Langform (zB „Deutschland"); bei österreichischen Klienten bleibt das Feld leer |

## Bereiche

### Mit Umsatzsteuer

In diesem Bereich werden die Tätigkeiten mit Umsatzsteuer-Pflicht dargestellt. Je nach Einstellungen in den Programmoptionen erfolgt eine Aufteilung auf die (Unter-)Klienten und die Verrechnungskreise.

!!! warning "Hinweis"
    Die Klammern weisen darauf hin, dass mehrere Zeilen vorhanden sind.

| **Formel** |         |        |          |                     |             |             | **Beschreibung**                             |
| ---------- | ------- | ------ | -------- | ------------------- | ----------- | ----------- | -------------------------------------------- |
| Note       | Bereich | MitUSt | Klient() | Nr                  |             |             | Klientennummer                               |
| Note       | Bereich | MitUSt | Klient() | Name                |             |             | Klientenname                                 |
| Note       | Bereich | MitUSt | Klient() | Stunden             |             |             | Anzahl der Stunden für den Klienten          |
| Note       | Bereich | MitUSt | Klient() | Verrechnungskreis() | Nr          |             | Verrechnungskreis-Nummer                     |
| Note       | Bereich | MitUSt | Klient() | Verrechnungskreis() | Bezeichnung |             | Bezeichnung bzw. Text                        |
| Note       | Bereich | MitUSt | Klient() | Verrechnungskreis() | Stunden     |             | Anzahl der Stunden                           |
| Note       | Bereich | MitUSt | Klient() | Verrechnungskreis() | Zeitraum    |             | Leistungszeitraum (wenn nach VK abgerechnet) |
| Note       | Bereich | MitUSt | Klient() | Verrechnungskreis() | Betrag      |             | Betrag (wenn nach VK abgerechnet)            |
| Note       | Bereich | MitUSt | Klient() | Verrechnungskreis() | Tätigkeit() | Nr          | Nummer der Tätigkeit                         |
| Note       | Bereich | MitUSt | Klient() | Verrechnungskreis() | Tätigkeit() | Bezeichnung | Bezeichnung bzw. Text                        |
| Note       | Bereich | MitUSt | Klient() | Verrechnungskreis() | Tätigkeit() | Einheiten   | Anzahl der Einheiten                         |
| Note       | Bereich | MitUSt | Klient() | Verrechnungskreis() | Tätigkeit() | Stunden     | Anzahl der Stunden                           |
| Note       | Bereich | MitUSt | Klient() | Verrechnungskreis() | Tätigkeit() | Zeitraum    | Leistungszeitraum                            |
| Note       | Bereich | MitUSt | Klient() | Verrechnungskreis() | Tätigkeit() | Betrag      | Betrag                                       |

### Ohne Umsatzsteuer

In diesem Bereich werden die Tätigkeiten ohne Umsatzsteuer-Pflicht dargestellt. Der Aufbau ist ident zum Bereich „Mit Umsatzsteuer".

| **Formel** |         |         | **Beschreibung**                 |
| ---------- | ------- | ------- | -------------------------------- |
| Note       | Bereich | OhneUSt | Siehe Bereich „Mit Umsatzsteuer" |

### Rabatte

| **Fomel** |         |          |             | **Beschreibung**       |
| --------- | ------- | -------- | ----------- | ---------------------- |
| Note      | Bereich | Rabatt() | Nr          | Nummer der Rabattzeile |
| Note      | Bereich | Rabatt() | Bezeichnung | Bezeichnung bzw. Text  |
| Note      | Bereich | Rabatt() | Zeitraum    | Leistungszeitraum      |
| Note      | Bereich | Rabatt() | Betrag      | Betrag                 |
| Note      | Bereich | Rabatt() | Stunden     | Stunden                |

### Akonto

In diesem Bereich werden die Akonto-Zeilen dargestellt. Je nach Einstellungen in den Programmoptionen erfolgt eine Aufteilung auf die (Unter-)Klienten.

| **Formel** |         |        |          |             |             | **Beschreibung**            |
| ---------- | ------- | ------ | -------- | ----------- | ----------- | --------------------------- |
| Note       | Bereich | Akonto | Klient() | Nr          |             | Klientennummer              |
| Note       | Bereich | Akonto | Klient() | Name        |             | Klientenname                |
| Note       | Bereich | Akonto | Klient() | Stunden     |             | Stundenanzahl               |
| Note       | Bereich | Akonto | Klient() | Tätigkeit() | Nr          | Nummer der Akonto-Tätigkeit |
| Note       | Bereich | Akonto | Klient() | Tätigkeit() | Bezeichnung | Bezeichnung bzw. Text       |
| Note       | Bereich | Akonto | Klient() | Tätigkeit() | Zeitraum    | Akonto-Zeitraum             |
| Note       | Bereich | Akonto | Klient() | Tätigkeit() | Betrag      | Betrag                      |
| Note       | Bereich | Akonto | Klient() | Tätigkeit() | Einheiten   | Einheiten                   |
| Note       | Bereich | Akonto | Klient() | Tätigkeit() | Stunden     | Stunden                     |

## Summen

### Nettosumme vor Abzug der Rabatte

| **Fomel** |       |                |         | **Beschreibung**                         |
| --------- | ----- | -------------- | ------- | ---------------------------------------- |
| Note      | Summe | NettoVorRabatt | Drucken | „Wahr", wenn Rabattzeilen vorhanden sind |
| Note      | Summe | NettoVorRabatt | Text    | Text lt. Programmoptionen                |
| Note      | Summe | NettoVorRabatt | Betrag  | Summe                                    |

### Nettosumme vor der Umsatzsteuer

| **Fomel** |       |       |         | **Beschreibung**                               |
| --------- | ----- | ----- | ------- | ---------------------------------------------- |
| Note      | Summe | Netto | Drucken | „Wahr", wenn eine Umsatzsteuer auszuweisen ist |
| Note      | Summe | Netto | Text    | Text lt. Programmoptionen                      |
| Note      | Summe | Netto | Betrag  | Summe                                          |

### Umsatzsteuer

| **Fomel** |       |              |         | **Beschreibung**                               |
| --------- | ----- | ------------ | ------- | ---------------------------------------------- |
| Note      | Summe | Umsatzsteuer | Drucken | „Wahr", wenn eine Umsatzsteuer auszuweisen ist |
| Note      | Summe | Umsatzsteuer | Text    | Text lt. Programmoptionen                      |
| Note      | Summe | Umsatzsteuer | Prozent | Prozentsatz                                    |
| Note      | Summe | Umsatzsteuer | Berag   | Umsatzsteuerbetrag                             |

### Summe Nach Umsatzsteuer

| **Fomel** |       |         |         | **Beschreibung**                                                                                              |
| --------- | ----- | ------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| Note      | Summe | NachUSt | Drucken | „Wahr", wenn eine Umsatzsteuer auszuweisen ist und wenn im Bereich „ohne Umsatzsteuer" Zeilen vorhanden sind. |
| Note      | Summe | NachUSt | Text    | Text lt. Programmoptionen                                                                                     |
| Note      | Summe | NachUSt | Betrag  | Summe                                                                                                         |

### Bruttosumme (Zwischensumme vor Akonto)

| **Fomel** |       |        |         | **Beschreibung**                          |
| --------- | ----- | ------ | ------- | ----------------------------------------- |
| Note      | Summe | Brutto | Drucken | „Wahr", wenn Akonto-Zeilen vorhanden sind |
| Note      | Summe | Brutto | Text    | Text lt. Programmoptionen                 |
| Note      | Summe | Brutto | Betrag  | Summe                                     |

### Akonto Umsatzsteuer

| **Fomel** |       |                    |         | **Beschreibung**                                         |
| --------- | ----- | ------------------ | ------- | -------------------------------------------------------- |
| Note      | Summe | AkontoUmsatzsteur  | Drucken | „Wahr", wenn Akontozeilen mit USt-Ausweis vorhanden sind |
| Note      | Summe | AkontoUmsatzsteuer | Text    | Text lt. Programmoptionen                                |
| Note      | Summe | AkontoUmsatzsteuer | Prozent | Prozentsatz                                              |
| Note      | Summe | AkontoUmsatzsteuer | Betrag  | Umsatzsteuerbetrag                                       |

### Gesamtbetrag

| Fomel |       |              |         | Beschreibung                                  |
| ----- | ----- | ------------ | ------- | --------------------------------------------- |
| Note  | Summe | Gesamtbetrag | Drucken | Immer „Wahr"; Gesamtsumme wird immer gedruckt |
| Note  | Summe | Gesamtbetrag | Text    | Text lt. Programmoptionen                     |
| Note  | Summe | Gesamtbetrag | Betrag  | Summe                                         |

### Zahlung

| Formel |         |            |         | Beschreibung                                                 |
| ------ | ------- | ---------- | ------- | ------------------------------------------------------------ |
| Note   | Zahlung | Bankeinzug |         | „Wahr", wenn für diese Rechnung ein Bankeinzug erfolgen soll |
| Note   | Zahlung | Bankname   |         | Name der Bank (lt. Stammdaten des Kanzleibereiches)          |
| Note   | Zahlung | BIC        |         | Bank Identifier Code                                         |
| Note   | Zahlung | Frist      |         | Zahlungs-Frist in Tagen                                      |
| Note   | Zahlung | IBAN       |         | International Bank Accout Number                             |
| Note   | Zahlung | QRCode     |         | Überweisungsdaten als QR-Code (Bild)                         |
| Note   | Zahlung | Referenz   |         | Zahlungsreferenz (12-stellig nummerisch)                     |
| Note   | Zahlung | Skonto     | Betrag  | Skonto-Betrag                                                |
| Note   | Zahlung | Skonto     | Frist   | Skonto-Frist in Tagen                                        |
| Note   | Zahlung | Skonto     | Prozent | Skonto-Prozentsatz                                           |

### Journal

Das Journal ist eine Auflistung der in der Note abgerechneten Erfassungszeilen. Das Journal ist untergliedert in die Ebenen Bereich, Klient, Verrechnungskreis, Tätigkeit und Erfassungszeile. Je nach Verwendung der Formeln können einzelne Bereiche auch zusammengefasst werden. Ein Beispiel ist in der „RZL Mustervorlage mit Vorblatt Journal Rückblick" zu finden.

| **Formel** |         |           |                 |                     |                 | **Beschreibung**              |
| ---------- | ------- | --------- | --------------- | ------------------- | --------------- | ----------------------------- |
| Note       | Journal | Bereich() | Nr              |                     |                 | Bereichsnummer                |
| Note       | Journal | Bereich() | Bezeichnung     |                     |                 | Bereichs-Bezeichnung          |
| Note       | Journal | Bereich() | Zeitraum        |                     |                 | Leistungszeitraum             |
| Note       | Journal | Bereich() | Stunden         |                     |                 | Anzahl der Stunden            |
| Note       | Journal | Bereich() | Betrag          |                     |                 | Summe                         |
| Note       | Journal | Bereich() | Kurzbezeichnung |                     |                 | Kurzbezeichnung des Bereiches |
| Note       | Journal | Bereich() | Klient()        | Nr                  |                 | Klienten-Nummer               |
| Note       | Journal | Bereich() | Klient()        | Name                |                 | Klienten-Name                 |
| Note       | Journal | Bereich() | Klient()        | Kurzbezeichnung     |                 | Klienten-Kurzbezeichnung      |
| Note       | Journal | Bereich() | Klient()        | Zeitraum            |                 | Leistungszeitraum             |
| Note       | Journal | Bereich() | Klient()        | Stunden             |                 | Anzahl der Stunden            |
| Note       | Journal | Bereich() | Klient()        | Betrag              |                 | Summe                         |
| Note       | Journal | Bereich() | Klient()        | Verrechnungskreis() | Nr              | Verrechnungskreis-Nummer      |
| Note       | Journal | Bereich() | Klient()        | Verrechnungskreis() | Bezeichnung     | Verrechnungskreis-Bezeichnung |
| Note       | Journal | Bereich() | Klient()        | Verrechnungskreis() | Kurzbezeichnung | VK-Kurzbezeichnung            |
| Note       | Journal | Bereich() | Klient()        | Verrechnungskreis() | Zeitraum        | Leistungszeitraum             |
| Note       | Journal | Bereich() | Klient()        | Verrechnungskreis() | Stunden         | Anzahl der Stunden            |
| Note       | Journal | Bereich() | Klient()        | Verrechnungskreis() | Betrag          | Summe                         |

| **Formel** |         |           |           |                     |             |                 |             |                 | **Beschreibung**     |
| ---------- | ------- | --------- | --------- | ------------------- | ----------- | --------------- | ----------- | --------------- | -------------------- |
| Note       | Journal | Bereich() | Klient()  | Verrechnungskreis() | Tätigkeit() | Nr              |             |                 | Nummer               |
| Note       | Journal | Bereich() | Klient()  | Verrechnungskreis() | Tätigkeit() | Bezeichnung     |             |                 | Bezeichnung          |
| Note       | Journal | Bereich() | Klient()  | Verrechnungskreis() | Tätigkeit() | Kurzbezeichnung |             |                 | Kurzbezeichnung      |
| Note       | Journal | Bereich() | Klient()  | Verrechnungskreis() | Tätigkeit() | Zeitraum        |             |                 | Leistungszeitraum    |
| Note       | Journal | Bereich() | Klient()  | Verrechnungskreis() | Tätigkeit() | Stunden         |             |                 | Anzahl der Stunden   |
| Note       | Journal | Bereich() | Klient()  | Verrechnungskreis() | Tätigkeit() | Betrag          |             |                 | Summe                |
| Note       | Journal | Bereich() | Klient()  | Verrechnungskreis() | Tätigkeit() | Einheiten       |             |                 | Anzahl der Einheiten |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Nr.         |                 | Zeilen-Nummer        |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Datum       |                 | Erfassungsdatum      |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Mitarbeiter | Nr.             | Mit.-Nummer          |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Mitarbeiter | Name            | Mit.-Name            |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Mitarbeiter | Kurzbezeichnung | Mit.-Kurzbezeichnung |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Tätigkeit   | Nr.             | Tät.-Nummer          |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Tätigkeit   | Bezeichnung     | Tät. Bezeichnung     |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Tätigkeit   | Kurzbezeichnung | Tät. Kurzbez.        |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Klient      | Nr.             | Kli-Nummer           |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Klient      | Kurzbezeichnung | Kli.-Kurzbezeichnung |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Zeitraum    |                 | Leistungszeitraum    |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Stunden     |                 | Anzahl der Stunden   |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Einheiten   |                 | Anzahl der Einheiten |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Betrag      |                 | Betrag               |
| Note       | Journal | Bereich() | Klient () | Verrechnungskreis() | Tätigkeit() | Erfassungszeile | Text        |                 | Eingegebener Text    |

### Verrechnungskreis-Rückblick

Je Verrechnungskreis können die Werte der aktuellen und der letzten 5 Honorarnoten dargestellt werden. Ein Beispiel ist in der „RZL
Mustervorlage mit Vorblatt Journal Rückblick" zu finden

| Formel |               |                     |             |            | Beschreibung                  |
| ------ | ------------- | ------------------- | ----------- | ---------- | ----------------------------- |
| Note   | VkRückblick() | Verrechnungskreis() | Nr          |            | Verrechnungskreis-Nummer      |
| Note   | VkRückblick() | Verrechnungskreis() | Bezeichnung |            | Verrechnungskreis-Bezeichnung |
| Note   | VkRückblick() | Verrechnungskreis() | Note()      | Nr         | Notennummer                   |
| Note   | VkRückblick() | Verrechnungskreis() | Note()      | Datum      | Notendatum                    |
| Note   | VkRückblick() | Verrechnungskreis() | Note()      | Stunden    | Anzahl der Stunden            |
| Note   | VkRückblick() | Verrechnungskreis() | Note()      | ZuAbschlag | Zu-/Abschläge                 |
| Note   | VkRückblick() | Verrechnungskreis() | Note()      | Summe      | Summe                         |

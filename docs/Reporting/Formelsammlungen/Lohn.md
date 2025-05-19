# Formelsammlung für das Lohn-Reporting

Im folgenden Kapitel finden Sie die Auflistung der verfügbaren Formeln für das Reporting im RZL Lohnprogramm. Seitens der RZL Software werden Ihnen mit dem Reporting-Modul auch diverse Musterreports zur Verfügung gestellt.

## RZL Musterreports LV

Neben Statistikauswertungen können Sie auch Musterschreiben für Dienstzettel oder Dienstverträge von RZL übernehmen und nach Ihren individuellen Bedürfnissen einrichten. Eine aktuelle Übersicht zu den Musterreports finden Sie in der ZMV unter *Allg. Dateien / Installieren* im Registerblatt *Reports* oder unter [Musterreports](../Auflistung_Musterreports.md) beschrieben.

!!! info "Tipp"
    Die RZL-Musterreports werden stetig erweitert. Neuerungen werden auch im Zuge der Programmaktualisierung in den RZL-Newslettern veröffentlicht.

Diese können nach erfolgreicher Installation in der ZMV auf den gewünschten [Klienten überspielt](../Kanzleireports.md) und anschließend individuell angepasst und abgeändert werden.

## Liste der Lohnformeln

Für das RZL Lohnprogramm stehen Ihnen im Reporting-Modul die folgenden Lohnformeln zur Verfügung.

!!! warning "Hinweis"
    Sofern bei einem Dienstnehmer mehrere Abrechnungen vorhanden sind, kann mit der Formel **Monat_L().** **anstatt Monat().** immer **auf die letzte Abrechnung** zugegriffen werden.

### Zeitraum

| **Formel**                                            | **Beschreibung**                                 |
| ----------------------------------------------------- | ------------------------------------------------ |
| `ZR().AktMonat`{ data-clipboard-text="ZR().AktMonat"} | Zeigt das aktuelle Monat an                      |
| `ZR().Jahr().Jahr`                                    | Zeigt das ausgewählte Jahr an                    |
| `ZR().Jahr().Anfang`                                  | Zeigt den Beginn des aktuellen Jahres an         |
| `ZR().Jahr().Ende`                                    | Zeigt das Ende des aktuellen Jahres an           |
| `ZR().Jahr().Monat().Anfang`                          | Zeigt den ersten Tag des ausgewählten Monats an  |
| `ZR().Jahr().Monat().Ende`                            | Zeigt den letzten Tag des ausgewählten Monats an |

### Arbeitsstätte

| **Formel**                            | **Beschreibung**                                      |
| ------------------------------------- | ----------------------------------------------------- |
| `Arbeitsstaette().Gemeinde`           | Gemeinde der Arbeitsstätte                            |
| `Arbeitsstaette().GemeindeKennziffer` | Gemeindekennziffer der Arbeitsstätte                  |
| `Arbeitsstaette().GemeindeNr`         | Nummer der Gemeinde der Arbeitsstätte                 |
| `Arbeitsstaette().HausNrBis`          | Hausnummer bis der Arbeitsstätte                      |
| `Arbeitsstaette().HausNrVon`          | Hausnummer von der Arbeitsstätte                      |
| `Arbeitsstaette().Land`               | Länderkennzeichen der Arbeitsstätte                   |
| `Arbeitsstaette().Nummer`             | Nummer der Arbeitsstätte beim jeweiligen Dienstgebers |
| `Arbeitsstaette().Ortschaft`          | Ort der Arbeitsstätte                                 |
| `Arbeitsstaette().Plz`                | Postleitzahl der Arbeitsstätte                        |
| `Arbeitsstaette().Staat`              | Staat -- nur bei ausländischer Arbeitsstätte          |
| `Arbeitsstaette().Stiege`             | Stiegennummer der Arbeitsstätte                       |
| `Arbeitsstaette().Strasse`            | Straße der Arbeitsstätte                              |
| `Arbeitsstaette().Tuer`               | Türnummer der Arbeitsstätte                           |

### Dienstgeber - Allgemein

| **Formel** |                        |             | **Beschreibung**                                        |
| ---------- | ---------------------- | ----------- | ------------------------------------------------------- |
| DG().      | Bank().                | BIC         | BIC des Dienstgebers der ausgewählten Bank              |
| DG().      | Bank().                | BLZ         | Bankleitzahl des Dienstgebers der ausgewählten Bank     |
| DG().      | Bank().                | IBAN        | IBAN des Dienstgebers der ausgewählten Bank             |
| DG().      | Bank().                | KtoNr       | Kontonummer des Dienstgebers der ausgewählten Bank      |
| DG().      | Bank().                | Name        | Name der Bank des Dienstgebers der ausgewählten Bank    |
| DG().      | Bank().                | Nummer      | Nummer der Bank des Dienstgebers der ausgewählten Bank  |
| DG().      | Beruf                  |             | Art der Tätigkeit des Dienstgebers                      |
| DG().      | DvrNr                  |             | Datenverarbeitungsregister-Nummer des Dienstgebers      |
| DG().      | EMail                  |             | E-Mail-Adresse des Dienstgeber                          |
| DG().      | FbGericht              |             | Firmenbuchgericht des Dienstgebers                      |
| DG().      | FbName                 |             | Abweichender Firmenbuchname des Dienstgebers            |
| DG().      | FbNummer               |             | Firmenbuchnummer des Dienstgebers                       |
| DG().      | Finanz                 |             | Finanzamt des Dienstgebers                              |
| DG()       | FinanzDienststelle     |             | Finanzamtdienststelle                                   |
| DG().      | FinanzNr               |             | Finanzamtnummer des Dienstgebers                        |
| DG().      | FinanzOrt              |             | Ort des Finanzamtes des Dienstgebers                    |
| DG().      | FinanzPlz              |             | Postleitzahl des Finanzamtes des Dienstgebers           |
| DG().      | FinanzStrasse          |             | Straße des Finanzamtes des Dienstgebers                 |
| DG()       | FinanzZahlungsreferenz |             | Zahlungsreferenz Finanzamt                              |
| DG().      | GKK().                 | BKNr        | Beitragskontonummer des DG mit Auswahl des Bundeslandes |
| DG().      | GKK().                 | MVKEMail    | E-Mail-Adresse der Mitarbeitervorsorgekasse des DG      |
| DG().      | GKK().                 | MVKLeitzahl | Leitzahl der Mitarbeitervorsorgekasse des DG            |
| DG().      | GKK().                 | MVKName     | Name der Mitarbeitervorsorgekasse des DG                |
| DG().      | GKK().                 | MVKOrt      | Ort der Mitarbeitervorsorgekasse des DG                 |
| DG().      | GKK().                 | MVKPlz      | Postleitzahl der Mitarbeitervorsorgekasse des DG        |
| DG().      | GKK().                 | MVKStrasse  | Straße der Mitarbeitervorsorgekasse des DG              |
| DG().      | GKK().                 | MVKTelefon  | Telefonnummer der Mitarbeitervorsorgekasse des DG       |
| DG().      | GKK().                 | Name        | Name und Bundesland der Krankenkasse                    |
| DG().      | GKK().                 | Nummer      | Nummer der Krankenkasse                                 |
| DG().      | GKK().                 | Ort         | Ort der Krankenkasse                                    |
| DG().      | GKK().                 | Plz         | PLZ der Krankenkasse                                    |
| DG().      | GKK().                 | Strasse     | Straße der Krankenkasse                                 |
| DG().      | GKK().                 | Telefon     | Telefonnummer der Krankenkasse                          |
| DG().      | Land                   |             | Länderkennzeichen des Dienstgebers                      |

### Dienstgeber - Stammdaten

| Formel |             | **Beschreibung**                          |
| ------ | ----------- | ----------------------------------------- |
| DG().  | Name        | Name des Dienstgeber                      |
| DG().  | Nummer      | Klientennummer des Dienstgebers           |
| DG().  | Ort         | Ort des Dienstgebers                      |
| DG().  | Plz         | Postleitzahl des Dienstgebers             |
| DG().  | Rechtsform  | Rechtsform des Dienstgebers               |
| DG().  | Steuer      | Steuernummer des Dienstgebers             |
| DG().  | Strasse     | Straße des Dienstgebers                   |
| DG().  | Telefon     | Telefonnummer des Dienstgebers            |
| DG().  | Uid         | Umsatzsteuer-Identifikationsnummer des DG |
| DG().  | Unternummer | Nummer des Unterdienstgebers              |

### Dienstgeber - Lohnarten

| **Formel** |              |          |        | **Beschreibung**                                                              |
| ---------- | ------------ | -------- | ------ | ----------------------------------------------------------------------------- |
| DG().      | Lohnart().   | Monat(). | Anzahl | Bei Lohnarten nach Einheiten - Summe der Einheiten                            |
| DG().      | Lohnart().   | Monat(). | Basis  | Basis einer Lohnart                                                           |
| DG().      | Lohnart().   | Monat(). | Monat  | Zeigt den ausgewählten Monat an                                               |
| DG().      | Lohnart().   | Monat(). | Wert   | Wert der Lohnart                                                              |
| DG().      | Lohnart().   | Name     | Wert   | Name der Lohnart                                                              |
| DG().      | Lohnart().   | Nummer   | Wert   | Interne Nummer der Lohnart                                                    |
| DG()       | LohnartAktDV | Monat()  |        | Zeigt den ausgewählten Monat an (aktives Dienstverhältnis)                    |
| DG()       | LohnartAktDV | Monat()  | Anzahl | Bei Lohnarten nach Einheiten - Summe der Einheiten (aktives Dienstverhältnis) |
| DG()       | LohnartAktDV | Monat()  | Basis  | Basis einer Lohnart (aktives Dienstverhältnis)                                |
| DG()       | LohnartAktDV | Monat()  | Wert   | Wert der Lohnart (aktives Dienstverhältnis)                                   |

### Dienstgeber - Monatssummen

| **Formel** |                     |          |       | **Beschreibung**                |
| ---------- | ------------------- | -------- | ----- | ------------------------------- |
| DG().      | Monatssumme().      | Monat(). | Monat | Zeigt den ausgewählten Monat an |
| DG().      | Monatssumme().      | Monat(). | Wert  | Wert der ausgewählten Lohnart   |
| DG().      | Monatssumme().      | Name     |       | Name der Lohnart                |
| DG().      | Monatssumme().      | Nummer   |       | Interne Nummer der Lohnart      |
| DG().      | MonatssummeAktDV(). | Monat(). |       | Zeigt den ausgewählten Monat an |
| DG().      | MonatssummeAktDV(). | Monat(). | Wert  | Wert der ausgewählten Lohnart   |

### Dienstgeber - Zeitraum

| **Formel** |            |          |                   | **Beschreibung**                                                                      |
| ---------- | ---------- | -------- | ----------------- | ------------------------------------------------------------------------------------- |
| DG().      | ZR().      | Monat(). | LStTage           | Anzahl der abgerechneten Lohnsteuertage                                               |
| DG().      | ZR().      | Monat(). | SVTage            | Anzahl der abgerechneten SV-Tage                                                      |
| DG().      | ZR().      | Monat(). | SVTageKuerzungEFZ | Anzahl der abgerechneten Tage Kürzung EFZ                                             |
| DG().      | ZRAktDV(). | Monat(). | SVTageKuerzungEFZ | Anzahl der abgerechneten Tage Kürzung EFZ (aktives Dienstverhältnis)                  |
| DG().      | ZR().      | Monat(). | SVTageKÜ          | Anzahl abgerechneten SV-Tage der Kündigungsentschädigung                              |
| DG().      | ZRAktDV(). | Monat(). | SVTageKÜ          | Anzahl abgerechneten SV-Tage der Kündigungsentschädigung (aktives Dienstverhältnis)   |
| DG().      | ZR().      | Monat(). | SVTageUE          | Anzahl der abgerechneten SV-Tage der Urlaubsersatzleistung                            |
| DG().      | ZRAktDV(). | Monat(). | SVTageUE          | Anzahl der abgerechneten SV-Tage der Urlaubsersatzleistung (aktives Dienstverhältnis) |
| DG().      | ZRAktDV(). | Monat(). | LStTage           | Anzahl der abgerechneten Lohnsteuertage                                               |
| DG().      | ZRAktDV(). | Monat(). | SVTage            | Anzahl der abgerechneten SV-Tage                                                      |
| DG().      | ZRAktDV(). | Monat(). | SVTageKuerzungEFZ | Anzahl der abgerechneten Tage Kürzung EFZ                                             |
| DG().      | ZRAktDV(). | Monat(). | SVTageKÜ          | Anzahl abgerechneten SV-Tage der Kündigungsentschädigung                              |
| DG().      | ZRAktDV(). | Monat(). | SVTageUE          | Anzahl der abgerechneten SV-Tage der Urlaubsersatzleistung                            |

### Dienstgeber - Überstunden

| **Formel** |                  |          |       | **Beschreibung**                          |
| ---------- | ---------------- | -------- | ----- | ----------------------------------------- |
| DG().      | Üst_Alle().      | Monat(). | Monat | Zeigt das ausgewählte Monat an            |
| DG().      | Üst_Alle().      | Monat(). | Wert  | Wert der Überstunden                      |
| DG().      | Üst_Alle().      | Name     |       | Name der ausgewählten Überstundenart      |
| DG().      | Üst_Alle().      | Nummer   |       | Nummer der auswählten Überstundenart      |
| DG().      | Üst_AlleAktDV(). | Monat(). | Monat | Zeigt das ausgewählte Monat an            |
| DG().      | Üst_AlleAktDV(). | Monat(). | Wert  | Wert der Überstunden                      |
| DG().      | Üst_AlleAktDV(). | Name     |       | Name der ausgewählten Überstundenart      |
| DG().      | Üst_AlleAktDV(). | Nummer   |       | Nummer der auswählten Überstundenart      |
| DG().      | Üst_Wk().        | Monat(). | Monat | Zeigt das ausgewählte Monat an            |
| DG().      | Üst_Wk().        | Monat(). | Wert  | Wert der wiederkehrenden Überstunden      |
| DG().      | Üst_Wk().        | Name     |       | Name der wiederkehrenden Überstundenart   |
| DG().      | Üst_Wk().        | Nummer   |       | Nummer der wiederkehrenden Überstundenart |
| DG().      | Üst_WkAktDV().   | Monat(). | Monat | Zeigt das ausgewählte Monat an            |
| DG().      | Üst_WkAktDV().   | Monat(). | Wert  | Wert der wiederkehrenden Überstunden      |
| DG().      | Üst_WkAktDV().   | Name     |       | Name der wiederkehrenden Überstundenart   |
| DG().      | Üst_WkAktDV().   | Nummer   |       | Nummer der wiederkehrenden Überstundenart |

### Dienstnehmer - Allgemein

| **Formel** |            |                        |                    | **Beschreibung**                                                                                  |
| ---------- | ---------- | ---------------------- | ------------------ | ------------------------------------------------------------------------------------------------- |
| DN().      | Monat().   | Abgerechnet            |                    | Ob das Monat abgerechnet ist - Wahr/Falsch                                                        |
| DN().      | Monat().   | Jahr                   |                    | Zeigt das aktuelle Jahr an                                                                        |
| DN().      | Monat().   | Monat                  |                    | Zeigt das ausgewählte Monat an                                                                    |
| DN().      | Monat().   | MonatJahr              |                    | Zeigt das ausgewählte Monat und Jahr an                                                           |
| DN().      | Monat().   | MonatKurz              |                    | Monat in Kurzform -- z.B. Feb                                                                     |
| DN().      | Monat().   | MonatNr                |                    | Nummer des Monat -- z.B. 4 für April                                                              |
| DN().      | Monat().   | UDG                    |                    | Nummer des Unterdienstgebers des ausgewählten Monats                                              |
| DN().      | Monat().   | NurAufrollung          |                    | Ob Monat nur aufgerollt wurde - Wahr/Falsch                                                       |
| DN().      | Monat().   | NurMvBemKrankheit      |                    | Nur mit MV-Bemessung Krankheit abgerechnet wurde (Wahr/Falsch)                                    |
| DN().      | Monat().   | NurMvBemMutterschutz   |                    | Nur mit MV-Bemessung Mutterschutz abgerechnet wurde (Wahr/Falsch)                                 |
| DN().      | Monat().   | NurMvBemPraesenzdienst |                    | Nur mit MV-Bemessung Präsenzdienst abgerechnet wurde (Wahr/Falsch)                                |
| DN().      | Monat().   | NurSvBemessung         |                    | Nur mit SV-Bemessung abgerechnet wurde (Wahr/Falsch)                                              |
| DN().      | ZR().      | AktuellesMonat         |                    | Zeigt das aktuelle Monat in Zahlen an                                                             |
| DN().      | ZRAktDV(). | AktuellesMonat         |                    | Zeigt das aktuelle Monat des aktiven Dienstverhältnisses in Zahlen an                             |
| DN().      | ZR().      | JahreEintritt          |                    | Zeigt die Anzahl der Jahr seit dem Eintritt an                                                    |
| DN().      | ZRAktDV(). | JahreEintritt          |                    | Zeigt die Anzahl der Jahr des aktiven Dienstverhältnisses seit dem Eintritt an                    |
| DN().      | ZR().      | MonateEintritt         |                    | Zeigt die Anzahl der Monate seit dem Eintritt an                                                  |
| DN().      | ZRAktDV(). | MonateEintritt         |                    | Zeigt die Anzahl der Monate seit dem Eintritt an (aktives Dienstverhältnis)                       |
| DN().      | ZR().      | TageEintritt           |                    | Zeigt die Anzahl der Tage seit dem Eintritt an                                                    |
| DN().      | ZRAktDV(). | TageEintritt           |                    | Zeigt die Anzahl der Tage seit dem Eintritt an (aktives Dienstverhältnis)                         |
| DN().      | ZR().      | TageKalenderjahr       |                    | Zeigt die Anzahl der Kalendertage des Jahres                                                      |
| DN().      | ZRAktDV(). | TageKalenderjahr       |                    | Zeigt die Anzahl der Kalendertage des Jahres (aktives Dienstverhältnis)                           |
| DN().      | ZR().      | TageSZ                 |                    | Zeigt die Anzahl der Kalendertage des Jahres für die Sonderzahlung  an (aktives Dienstverhältnis) |
| DN().      | ZRAktDV(). | TageSZ                 |                    | Zeigt die Anzahl der Kalendertage des Jahres für die Sonderzahlung an                             |
| DN().      | ZR().      | Monat().               | AnzahlAbrechnungen | AnzahlAbrechnungen                                                                                |
| DN().      | ZRAktDV(). | Monat().               | AnzahlAbrechnungen | AnzahlAbrechnungen aktives Dienstverhältnis                                                       |

### Dienstnehmer - Stammdaten

| **Formel** |                  |                 | **Beschreibung**                                                      |
| ---------- | ---------------- | --------------- | --------------------------------------------------------------------- |
| DN().      | UDG              |                 | Nummer des UDG                                                        |
| DN().      | Nummer           |                 | Nummer des Dienstnehmers                                              |
| DN().      | Nachname         |                 | Nachname des Dienstnehmers                                            |
| DN().      | Vorname          |                 | Vorname des Dienstnehmers                                             |
| DN().      | Name             |                 | Gibt den kompletten Namen mit den Titeln aus                          |
| DN().      | NameAlt          |                 | Ist der Frühere Name des Dienstnehmers                                |
| DN().      | Titel1           |                 | Titel des Dienstnehmers 🡪 Akademischer Grad                           |
| DN().      | Titel2           |                 | Titel des Dienstnehmers 🡪 Akademischer Grad2                          |
| DN().      | Strasse          |                 | Straße des Dienstnehmers                                              |
| DN().      | Land             |                 | Länderkennzeichen des Dienstnehmers                                   |
| DN().      | PLZ              |                 | Postleitzahl des Dienstnehmers                                        |
| DN().      | Ort              |                 | Ort des Dienstnehmers                                                 |
| DN().      | Telefon          |                 | Telefonnummer des Dienstnehmers                                       |
| DN().      | EMail            |                 | E-Mail-Adresse des Dienstnehmers                                      |
| DN().      | Passwort         |                 | Passwort des Dienstnehmers für PDF's                                  |
| DN().      | DnKliportal      |                 | Option Dienstnehmer am Klientenportal anlegen aktiviert (Wahr/Falsch) |
| DN().      | SvNummer         |                 | SV-Nummer des Dienstnehmers                                           |
| DN().      | GebDatum         |                 | Geburtsdatum des Dienstnehmers                                        |
| DN().      | Geschlecht       |                 | Wert im Feld „Geschlecht"                                             |
| DN().      | FamStand         |                 | Wert im Feld „Familienstand"                                          |
| DN().      | Staat            |                 | Staatsangehörigkeit des Dienstnehmers                                 |
| DN().      | NummerExtern     |                 | Externe DN-Nummer                                                     |
| DN().      | Beruf            |                 | Beruf des Dienstnehmers                                               |
| DN().      | DienstortLand    |                 | Länderkennzeichen des Dienstortes                                     |
| DN().      | DienstortPLZ     |                 | Postleitzahl des Dienstortes                                          |
| DN().      | Dienstort        |                 | Ort des Dienstortes                                                   |
| DN().      | Monat().         | ArbeitsstätteNr | Nummer der Arbeitsstätte                                              |
| DN().      | BankLand         |                 | Länderkennzeichen der Bank des Dienstnehmers                          |
| DN().      | Bank             |                 | Name der Bank des Dienstnehmers                                       |
| DN().      | BLZ              |                 | Bankleitzahl des Dienstnehmers                                        |
| DN().      | KontoNr          |                 | Kontonummer des Dienstnehmers                                         |
| DN().      | IBAN             |                 | IBAN des Dienstnehmers                                                |
| DN().      | BIC              |                 | BIC des Dienstnehmers                                                 |
| DN().      | DgBank           |                 | Nummer der ausgewählten DG-Bank beim DN                               |
| DN().      | Partner          |                 | Name des (Ehe)Partners                                                |
| DN().      | PartnerSvNr      |                 | Ersten vier Stellen der SV-Nummer des (Ehe)Partners                   |
| DN().      | PartnerGebDat    |                 | Geburtsdatum des (Ehe)Partners                                        |
| DN().      | PartnerUnterhalt |                 | Unterhalt beim Ehepartner aktiviert (Wahr/Falsch)                     |
| DN().      | Kind().          | Name            | Name des Kindes                                                       |
| DN().      | Kind().          | SvNummer        | SV-Nummer des Kindes (ersten vier Stellen)                            |
| DN().      | Kind().          | GebDatum        | Geburtsdatum des Kindes                                               |
| DN().      | Kind().          | Unterhalt       | Unterhalt bei Kind aktiviert (Wahr/Falsch)                            |
| DN().      | Kind().          | Para106         | Kind § 106 beim Kind aktiviert (Wahr/Falsch)                          |

### Dienstnehmer - Stammdaten Fristen

| **Formel** |                    |                  | **Beschreibung**                                      |
| ---------- | ------------------ | ---------------- | ----------------------------------------------------- |
| DN().      | Monat().           | Aliquotierung    | Aliquotierung aktiviert -Wahr/Falsch                  |
| DN().      | Monat().           | BuchungskreisNr  | Nummer des Buchungskreises                            |
| DN().      | Monat()            | Auswahlkriterium | Nummer des Auswahlkriterium                           |
| DN().      | Auwahlkriterium    |                  | Nummer des Auswahlkriterium                           |
| DN().      | Monat().           | KeineAuszahlung  | Keine Auszahlung aktiviert -Wahr/Falsch               |
| DN().      | Monat().           | Zahltag          | Datum im Feld „Zahltag Abrechnung"                    |
| DN().      | Monat().           | LFZTabellenNr    | Nummer der zugeordneten Lohnformel-Zuordnungstabelle  |
| DN().      | EndeArbBew         |                  | Datum für Ende der Arbeitsbewilligung                 |
| DN().      | Monat().           | Behinderung      | Feld begünstigter Behinderter aktiviert (Wahr/Falsch) |
| DN().      | Anmerkung().       | Datum            | Stichtag der Anmerkung                                |
| DN().      | Anmerkung().       | Text             | Text der Anmerkung                                    |
| DN().      | Abrechnungstext(). | Von              | Von-Datum für Abrechnungs-Texte                       |
| DN().      | Abrechnungstext(). | Bis              | Bis-Datum für Abrechnungs-Texte                       |
| DN().      | Abrechnungstext(). | Text             | Abrechnungs-Text                                      |

### Dienstnehmer - Eintritt

| **Formel** |                         |                                           | **Beschreibung**                                                                    |
| ---------- | ----------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------- |
| DN().      | Monat().                | Eintritt                                  | Eintrittsdatum des Dienstnehmer                                                     |
| DN().      | Ersteintritt            |                                           | Ersteintrittsdatum des Dienstnehmer                                                 |
| DN().      | Monat().                | BeschäftigtInWo                           | Anzahl Tage Beschäftigt in der Woche                                                |
| DN().      | Monat().                | Arbeitsstunden                            | Anzahl der Stunden pro Tag                                                          |
| DN().      | Monat().                | Wochenstunden                             | Anzahl der Stunden pro Woche                                                        |
| DN().      | Monat().                | ArbeitstagMo                              | Arbeitstag Montag aktiviert (Wahr/Falsch)                                           |
| DN().      | Monat().                | ArbeitstagDi                              | Arbeitstag Dienstag aktiviert (Wahr/Falsch)                                         |
| DN().      | Monat().                | ArbeitstagMi                              | Arbeitstag Mittwoch aktiviert (Wahr/Falsch)                                         |
| DN().      | Monat().                | ArbeitstagDo                              | Arbeitstag Donnerstag aktiviert (Wahr/Falsch)                                       |
| DN().      | Monat().                | ArbeitstagFr                              | Arbeitstag Freitag aktiviert (Wahr/Falsch)                                          |
| DN().      | Monat().                | ArbeitstagSa                              | Arbeitstag Samstag aktiviert (Wahr/Falsch)                                          |
| DN().      | Monat().                | ArbeitstagSo                              | Arbeitstag Sonntag aktiviert (Wahr/Falsch)                                          |
| DN().      | Monat().                | ArbeitstageAnz                            | Anzahl der aktivierten Arbeitstage                                                  |
| DN().      | Monat().                | Teilzeit                                  | Beschäftigungsverhältnis Teilzeit aktiviert (Wahr/Falsch)                           |
| DN().      | Monat().                | Gesetz                                    | Ausgewähltes Gesetz, welches das Arbeitsverhältnis unterliegt                       |
| DN().      | Monat().                | BefristungBis                             | Datum der Befristung des DV - wenn vorhanden                                        |
| DN().      | Monat().                | DvParallel                                | Paralleles Beschäftigungsverhältnis beim selben Arbeitgeber aktiviert (Wahr/Falsch) |
| DN().      | Monat().                | MVPflicht                                 | MV-Beitragspflicht aktiviert (Wahr/Falsch)                                          |
| DN().      | Monat().                | BeginnMv                                  | Datum des Beginn der MV-Pflicht                                                     |
| DN().      | LehrzeitBeginn          |                                           | Beginn der Lehrzeit                                                                 |
| DN().      | LehrzeitEnde            |                                           | Ende der Lehrzeit                                                                   |
| DN().      | EndeErstesLj            |                                           | Ende des ersten Lehrjahres                                                          |
| DN().      | Lehrabschlussprüfung    |                                           | Datum der Lehrabschlussprüfung                                                      |
| DN().      | Lehrlingsfreibetrag     |                                           | Kein Lehrlingsfreibetrag aktiviert (Wahr/Falsch)                                    |
| DN().      | Monat().                | BetragAnmeldungAbw                        | Abweichender Betrag für die Anmeldung                                               |
| DN().      | MitKlientVerwandt       |                                           | DN mit DG verwandt (Wahr/Falsch)                                                    |
| DN().      | Verwandtschaftsgrad     |                                           | Art des Verwandtschaftsgrades                                                       |
| DN().      | MitKlientVerheiratet    |                                           | DN mit DG verheiratet (Wahr/Falsch)                                                 |
| DN().      | Monat().                | AngNachTabak                              | Angehöriger nach Tabakmonopolgesetz aktiviert ist (Wahr/Falsch)                     |
| DN().      | AnFirmaBeteiligt        |                                           | DN an Firma beteiligt aktiviert ist (Wahr/Falsch)                                   |
| DN().      | ArtBeteiligung          |                                           | Art der Beteiligung                                                                 |
| DN().      | Monat().                | SachBezTageProWoche                       | Anzahl der Tage für den Sachbezug                                                   |
| DN().      | Monat().                | SachBezFreieStation                       | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| DN().      | Monat().                | SachBezVerpflegung                        | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| DN().      | Monat().                | SachBezFruehstueck1                       | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| DN().      | Monat().                | SachBezFruehstueck2                       | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| DN().      | Monat().                | SachBezMittagessen                        | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| DN().      | Monat().                | SachBezJause                              | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| DN().      | Monat().                | SachBezAbendessen                         | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| DN().      | Monat().                | SachBezWohnung                            | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| DN().      | Monat().                | VorbezugBemSvSz                           | Vorbezüge - Verbrauch Bemessungsgrundlage SV-SZ                                     |
| DN().      | Monat().                | VorbezugSvKz225                           | Vorbezüge - bisherige SV KZ 225                                                     |
| DN().      | Monat().                | VorbezugSz                                | Vorbezüge - bisherige Sonderzahlung                                                 |
| DN().      | Monat().                | VorbezugSzOhneFesteLSt                    | Vorbezüge - ohne feste Lohnsteuer                                                   |
| DN().      | Monat().                | VorbezugBrutto                            | Vorbezüge - bisheriger Brutto-Lohn                                                  |
| DN().      | VorbezugBemLStVj        | Vorbezüge - Vorjahres-Bemessungsgrundlage |
| DN().      | Monat().                | KuerzerEinMonat                           | DV kürzer als ein Monat vereinbart aktiviert (Wahr/Falsch)                          |
| DN().      | ArbeitslosGemeldet      |                                           | Beschäftigungsbonus - Arbeitslos gemeldet aktiviert (Wahr/Falsch)                   |
| DN().      | BeschaeftigtAb          |                                           | Beschäftigungsbonus - Beschäftigt ab                                                |
| DN().      | BeschaeftigtBis         |                                           | Beschäftigungsbonus - Beschäftigt bis                                               |
| DN().      | Bildungsabgaenger       |                                           | Beschäftigungsbonus - Bildungsabgänger aktiviert (Wahr/Falsch)                      |
| DN().      | Foerderungen            |                                           | Beschäftigungsbonus - Förderungen                                                   |
| DN().      | Jobwechsler             |                                           | Beschäftigungsbonus - Jobwechsler aktiviert (Wahr/Falsch)                           |
| DN().      | MonatsentgeltBrutto     |                                           | Beschäftigungsbonus - Monatsentgelt Brutto                                          |
| DN().      | SaisonaleBeschaeftigung |                                           | Beschäftigungsbonus - Saisonale Beschäftigung (Wahr/Falsch)                         |
| DN().      | mBGMHauptdienstnehmer   |                                           | mBGM Hauptdienstnehmer                                                              |

### Dienstnehmer - Kollektivvertrag

| **Formel**                 | **Beschreibung**              |
| -------------------------- | ----------------------------- |
| `DN().Monat().KV().Nummer` | Nummer des Kollektivvertrages |


| DN().      | Monat(). | KV().            | Name                      | Name des Kollektivvertrages                                       |
| DN().      | Monat(). | KV().            | EinstufungBeg             | Beginn der Einstufung                                             |
| DN().      | Monat(). | KV().            | Vordienstzeit             | Anzahl der Monate der Vordienstzeiten                             |
| DN().      | Monat(). | KV().            | Taetigkeitsgruppe         | Name aktuelle Tätigkeitsgruppe                                    |
| DN().      | Monat(). | KV().            | TaetigkeitsgruppeNr       | Interne Nummer der aktuellen Tätigkeitsgruppe                     |
| DN().      | Monat(). | KV().            | Gruppenwechsel            | Datum des letzten Gruppenwechsels                                 |
| DN().      | Monat(). | KV().            | LetzteTaetigkeitsgruppe   | Name der letzten Tätigkeitsgruppe                                 |
| DN().      | Monat(). | KV().            | LetzteTaetigkeitsgruppeNr | Interne Nummer letzten Tätigkeitsgruppe                           |
| DN().      | Monat(). | KV().            | Stufe                     | Zeigt die aktuelle Stufe des KV an                                |
| DN()       | Monat()  | KV()             | Dienstjahre               | Zeigt das aktuelle Dienstjahr                                     |
| DN()       | Monat()  | KV()             | StufeKuerzung             | Zeit die Monate, um welche die Stufe gekürzt werden soll          |
| DN().      | Monat(). | KV().            | Vorrueckung               | Zeigt das Datum der nächsten Vorrückung an                        |
| DN().      | Monat(). | KV().            | Stundensatz               | Stundensatz laut Kollektivvertrag                                 |
| DN().      | Monat(). | KV().            | Bezug                     | Bezug laut Kollektivvertrag                                       |
| DN().      | Monat(). | KV().            | HochrechnungsfaktorAbw    | Wert des abw. Hochrechnungsfaktors                                |
| DN().      | Monat(). | KV().            | NAZ                       | Normalarbeitszeit laut Kollektivvertrag                           |
| DN().      | Monat(). | KV().            | BezugAliquot              | Wert aliquoter Kollektivvertrag-Bezug                             |
| DN().      | Monat(). | KV().            | UeberzahlungVm            | Wert der Überzahlung im Vormonat                                  |
| DN().      | Monat(). | KV().            | UeberzahlungVmPorz        | Prozent der Überzahlung im Vormonat                               |
| DN()       | Monat()  | KV()             | Reformbetrag1             | Wert des Reformbetrag 1                                           |
| DN()       | Monat()  | KV()             | Reformbetrag1Vm           | Wert des Reformbetrag 1 im Vormonat                               |
| DN().      | Monat(). | KV().            | TeilerAbw                 | Abw. Stundenteiler bei Teilzeit                                   |
| DN().      | Monat(). | KV().            | ZuAbschlagBezug           | Abweichender Zu-/Abschlag KV Bezug                                |
| DN().      | Monat(). | KV().            | Ueberzahlung              | Überzahlung beibehalten aktiviert - Wahr/Falsch                   |
| DN().      | Monat(). | KV().            | UeberzahlungBiennal       | Überzahlung bei Biennalsprung beibehalten aktiviert (Wahr/Falsch) |
| DN().      | Monat(). | KV().            | UeberzahlungProz          | Prozentuelle Überzahlung beibehalten aktiviert - Wahr/Falsch      |
| DN().      | KVAlt    |                  |                           | Name des KV - wenn HGKV-DB nicht aktiviert                        |
| DN().      | Monat()  | KVAltStundensatz |                           | Stundensatz lt. KV - wenn HGKV-DB nicht aktiviert ist             |
| DN().      | Monat()  | KVAltBezug       |                           | Bezug lt. KV - wenn HGKV-DB nicht aktiviert ist                   |

### Dienstnehmer -- Austritt

| **Formel** |                                |                             |             | **Beschreibung**                                                        |
| ---------- | ------------------------------ | --------------------------- | ----------- | ----------------------------------------------------------------------- |
| DN().      | Monat().                       | Austritt                    |             | Datum des Austrittes                                                    |
| DN().      | Monat().                       | Austrittsgrund              |             | Grund des Austrittes                                                    |
| DN().      | Monat().                       | AustrittsgrundBuak          |             | Grund des Austrittes für die BUAK                                       |
| DN().      | Monat().                       | EndeEntgelt                 |             | Datum bei Ende des Entgeltsanspruches                                   |
| DN().      | Monat().                       | BezahltBis                  |             | Ende Entgeltsanspruch - Datum „bezahlt bis"                             |
| DN().      | Monat().                       | AnspruchSZ                  |             | Anzahl der Monate für Anspruch Sonderzahlung                            |
| DN().      | Monat().                       | Aufloesungsabgabe           |             | Auflösungsabgabe aktiviert (Wahr/Falsch)                                |
| DN().      | KarenzurlaubVon                |                             |             | Datum des Beginn des Karenzurlaubes                                     |
| DN().      | KarenzurlaubBis                |                             |             | Datum des Ende des Karenzurlaubes                                       |
| DN().      | Monat().                       | EndeMv                      |             | Datum für das Ende der MV-Beitragspflicht                               |
| DN().      | Monat().                       | BetragAbmeldungAbw          |             | Abweichender Betrag für die Abmeldung                                   |
| DN().      | Monat().                       | KUEVon                      |             | Datum des Beginnes der Kündigungsentschädigung                          |
| DN().      | Monat().                       | KUEBis                      |             | Datum des Ende der Kündigungsentschädigung                              |
| DN().      | ZR().                          | Monat().                    | SVTageKÜ    | Anzahl der SV-Tage der Kündigungsentschädigung                          |
| DN().      | ZR().                          | Monat().                    | TageKÜ      | Kalendertage der Kündigungsentschädigung                                |
| DN().      | ZRAktDV().                     | Monat().                    | TageKÜ      | Kalendertage der Kündigungsentschädigung (aktives Dienstverhältnis)     |
| DN().      | Monat().                       | UEVon                       |             | Datum des Beginnes der Urlaubsersatzleistung                            |
| DN().      | Monat().                       | UEBis                       |             | Datum des Endes der Urlaubsersatzleistung                               |
| DN().      | ZR().                          | Monat().                    | SVTageUE    | Anzahl der SV-Tage der Urlaubsersatzleistung                            |
| DN().      | ZR().                          | Monat().                    | TageUE      | Kalendertage der Urlaubsersatzleistung                                  |
| DN().      | ZRAktDV().                     | Monat().                    | TageUE      | Kalendertage der Urlaubsersatzleistung (aktives Dienstverhältnis)       |
| DN().      | ZR().                          | Monat().                    | TageUEExakt | Kalendertage der Urlaubsersatzleistung exakt                            |
| DN().      | ZRAktDV().                     | Monat().                    | TageUEExakt | Kalendertage der Urlaubsersatzleistung exakt (aktives Dienstverhältnis) |
| DN().      | Monat().                       | UnterbrechnungVon           |             | Beginn der Unterbrechung der Beschäftigung                              |
| DN().      | Monat().                       | UnterbrechnungBis           |             | Ende der Unterbrechung der Beschäftigung                                |
| DN().      | Monat().                       | UnterbrechnungGrund         |             | Grund der Unterbrechung der Beschäftigung                               |
| DN().      | Monat().                       | TeilzeitVon                 |             | Datum des Beginnes der Teilzeitbeschäftigung                            |
| DN().      | Monat().                       | TeilzeitBis                 |             | Datum des Endes der Teilzeitbeschäftigung                               |
| DN().      | Monat().                       | HospizkarenzBeginn          |             | Datum Beginn der Hospizkarenz                                           |
| DN().      | Monat().                       | HospizkarenzEnde            |             | Datum Ende der Hospizkarenz                                             |
| DN().      | Monat().                       | HospizkarenzArt             |             | Ausgewählter Eintrag bei Art der Karenz                                 |
| DN().      | Monat().                       | HospizkarenzEntgeltVor      |             | Entgelt vor Hospizkarenz                                                |
| DN().      | Monat().                       | HospizkarenzEntgeltWaehrend |             | Entgelt während der Hospizkarenz                                        |
| DN().      | Arbeitsinspektorat             |                             |             | Arbeitsinspektorat                                                      |
| DN().      | ArbeitsplatzTaetigkeit         |                             |             | Mutterschutzmeldung Arbeitsplatz/Tätigkeit                              |
| DN().      | BeginnMutterschutz             |                             |             | Beginn Mutterschutz                                                     |
| DN().      | EndeMutterschutz               |                             |             | Ende Mutterschutz                                                       |
| DN().      | DienstnehmerGehtInKarenz       |                             |             | Dienstnehmer geht in Karenz aktiviert (Wahr/Falsch)                     |
| DN().      | TagDerGeburt                   |                             |             | Tag der Geburt                                                          |
| DN().      | VerlängerterMutterschutz       |                             |             | Verlängerter Mutterschutz aktiviert (Wahr/Falsch)                       |
| DN().      | VoraussichtlicherGeburtstermin |                             |             | Voraussichtlicher Geburtstermin                                         |

### Dienstnehmer - Lohnsteuer

| **Formel** |          |                                          |         | **Beschreibung**                                                           |
| ---------- | -------- | ---------------------------------------- | ------- | -------------------------------------------------------------------------- |
| DN().      | Monat(). | Alleinverdiener                          |         | Ob Alleinverdiener aktiviert ist (Wahr/Falsch)                             |
| DN().      | Monat(). | Alleinerzieher                           |         | Ob Alleinerzieher aktiviert ist (Wahr/Falsch)                              |
| DN().      | Monat(). | KinderPar106                             |         | Anzahl der Kinder gemäß § 106                                              |
| DN().      | Monat(). | PendlerpauschaleNr                       |         | Nummer der Pendlerpauschale                                                |
| DN().      | Monat(). | PendlerpauschaleText                     |         | Art der Pendlerpauschale (zB „klein 20 -- 40 km")                          |
| DN().      | Monat(). | EinfacheFahrtstrecke                     |         | Anzahl der Kilometer der einfachen Fahrtstrecke                            |
| DN().      | Monat(). | Werkverkehr                              |         | Werkverkehr/Jobticket aktiviert (Wahr/Falsch)                              |
| DN().      | Monat(). | Firmenfahrzeug                           |         | Firmenfahrzeug aktiviert (Wahr/Falsch)                                     |
| DN().      | Monat(). | FahrtagMo                                |         | Fahrttage Montag aktiviert (Wahr/Falsch)                                   |
| DN().      | Monat(). | FahrtagDi                                |         | Fahrttage Dienstag aktiviert (Wahr/Falsch)                                 |
| DN().      | Monat(). | FahrtagMi                                |         | Fahrttage Mittwoch aktiviert (Wahr/Falsch)                                 |
| DN().      | Monat(). | FahrtagDo                                |         | Fahrttage Donnerstag aktiviert (Wahr/Falsch)                               |
| DN().      | Monat(). | FahrtagFr                                |         | Fahrttage Freitag aktiviert (Wahr/Falsch)                                  |
| DN().      | Monat(). | FahrtagSa                                |         | Fahrttage Samstag aktiviert (Wahr/Falsch)                                  |
| DN().      | Monat(). | FahrtagSo                                |         | Fahrttage Sonntag aktiviert (Wahr/Falsch)                                  |
| DN().      | Monat(). | Fahrtage                                 |         | Anzahl der Fahrttage pro Monat                                             |
| DN().      | Monat(). | FahrtageAbw                              |         | Anzahl der abweichenden Fahrttage                                          |
| DN().      | Monat(). | FahrtabeAbwWiederkend                    |         | Abw. Fahrttage wiederkehrend aktiviert (Wahr/Falsch)                       |
| DN().      | Monat(). | Freibetrag                               |         | Wert des monatlichen Freibetrages                                          |
| DN().      | Monat(). | Werbungskosten                           |         | Prozentwert der Werbungskosten                                             |
| DN().      | Monat(). | WerbungskostenMax                        |         | Höchstbetrag der Werbungskosten                                            |
| DN().      | Monat(). | Nachtarbeit                              |         | Nachtarbeit aktiviert (Wahr/Falsch)                                        |
| DN().      | Monat(). | Pensionist                               |         | Pensionist aktiviert (Wahr/Falsch)                                         |
| DN().      | Monat(). | PauschaleLSt                             |         | Pauschale Lohnsteuer aktiviert (Wahr/Falsch)                               |
| DN().      | Monat(). | PauschaleLStProz                         |         | Prozentsatz der Pauschalen Lohnsteuer                                      |
| DN().      | Monat(). | Grenzgaenger                             |         | Grenzgänger aktiviert (Wahr/Falsch)                                        |
| DN().      | Monat(). | BeschraenkteSteuerpflicht                |         | Beschränkte Steuerpflicht aktiviert (Wahr/Falsch)                          |
| DN().      | Monat(). | LStGemPara70Z2                           |         | Lohnsteuer gem. § 70 / 2 Z 2 aktiviert (Wahr/Falsch)                       |
| DN().      | Monat(). | LandarbeiterFreibetrag                   |         | Landarbeiter-Freibetrag aktiviert (Wahr/Falsch)                            |
| DN().      | Monat(). | Entwicklungshelfer                       |         | Auslandsbezüge als Entwicklungshelfer Z 11 aktiviert (Wahr/Falsch)         |
| DN().      | Monat(). | Gemeinde().                              | Nummer  | Nummer der gewählten Gemeinde                                              |
| DN().      | Monat(). | Gemeinde().                              | Name    | Name der gewählten Gemeinde                                                |
| DN().      | Monat(). | Gemeinde().                              | Prozent | Prozentzuordnung der gewählten Gemeinde                                    |
| DN().      | Monat(). | BefreiungKommst                          |         | Befreiung von Kommunalsteuer aktiviert (Wahr/Falsch)                       |
| DN().      | Monat(). | KuerzungKommSt                           |         | Kürzung der Bemessungsgrundlage der Kommunalsteuer aktiviert (Wahr/Falsch) |
| DN().      | Monat(). | KuerzungKommstProz                       |         | Prozentsatz der Kürzung der Kommunalsteuer-Grundlage                       |
| DN().      | Monat(). | BefreiungDB                              |         | Befreiung von DB aktiviert (Wahr/Falsch)                                   |
| DN().      | Monat(). | DZBundeslandAbw                          |         | Abweichendes DZ-Bundesland                                                 |
| DN().      | Monat(). | BefreiungDZ                              |         | Befreiung von DZ aktiviert (Wahr/Falsch)                                   |
| DN().      | Monat(). | KuerzungDZ                               |         | Befreiung von DZ aktiviert (Wahr/Falsch)                                   |
| DN().      | Monat(). | KuerzungDZProz                           |         | Kürzung der Bemessungsgrundlage des DZ aktiviert (Wahr/Falsch)             |
| DN().      | Monat(). | UBahnAbgabe                              |         | U-Bahn-Abgabe aktiviert (Wahr/Falsch)                                      |
| DN().      | Monat(). | UBahnWochenAbw                           |         | Anzahl der U-Bahn-Wochen                                                   |
| DN().      | Monat(). | HomeofficePauschale                      |         | Steuerfreie Pauschale aktiviert (Wahr/Falsch)                              |
| DN().      | Monat(). | HomeofficePauschaleBetrag                |         | Betrag der Homeoffice Pauschale                                            |
| DN().      | Monat(). | HomeofficePauschaleSatz                  |         | Satz der Homeoffice Pauschale                                              |
| DN().      | Monat(). | HomeofficePauschaleWiederkehrend         |         | Homeoffice Pauschale wiederkehrend aktiviert (Wahr/Falsch)                 |
| DN().      | Monat(). | HomeofficeTage                           |         | Homeoffice Tage                                                            |
| DN().      | Monat(). | KostenuebernahmeOeffiTicket              |         | Betrag der Kostenübernahme durch DG                                        |
| DN().      | Monat(). | KostenuebernahmeOeffiTicketNurL16        |         | Nur Ausweis am Lohnkonto u. L16 aktiviert (Wahr/Falsch)                    |
| DN().      | Monat(). | KostenuebernahmeOeffiTicketWiederkehrend |         | Kostenübernahme durch DG wiederkehrend aktiviert (Wahr/Falsch)             |

### Dienstnehmer - Sozialversicherung

| **Formel** |          |                                 | **Beschreibung**                                                     |
| ---------- | -------- | ------------------------------- | -------------------------------------------------------------------- |
| DN().      | Monat(). | BundeslandNr                    | Nummer des ÖGK-Bundeslandes                                          |
| DN().      | Monat(). | Bundesland                      | ÖGK Bundesland                                                       |
| DN().      | Monat(). | BkNr                            | ÖGK Beitragsnummer                                                   |
| DN().      | Monat(). | SvGruppe                        | Ausgewählte SV-Gruppe                                                |
| DN().      | Monat(). | SvGruppeAlv                     | SV-Gruppe Arbeitslosenversicherungspfl. (Wahr/Falsch)                |
| DN().      | Monat(). | SvGruppeAngestellter            | SV-Gruppe Angestellter (Wahr/Falsch)                                 |
| DN().      | Monat(). | SvGruppeArbeiter                | SV-Gruppe Arbeiter (Wahr/Falsch)                                     |
| DN().      | Monat(). | SvGruppeBahn                    | SV-Gruppe VA der Eisenbahnen (Wahr/Falsch)                           |
| DN().      | Monat(). | SvGruppeBVA                     | SV-Gruppe VA öffentlicher Bediensteter (Wahr/Falsch)                 |
| DN().      | Monat(). | SvGruppeGfg                     | SV-Gruppe geringfügig (Wahr/Falsch)                                  |
| DN().      | Monat(). | SvGruppeGfgAng                  | SV-Gruppe Angestellter geringfügig (Wahr/Falsch)                     |
| DN().      | Monat(). | SvGruppeGfgArb                  | SV-Gruppe Arbeiter geringfügig (Wahr/Falsch)                         |
| DN().      | Monat(). | SvGruppeKv                      | SV-Gruppe Krankenversicherungspflichtig (Wahr/Falsch)                |
| DN().      | Monat(). | SvGruppeLehrling                | SV-Gruppe Lehrling (Wahr/Falsch)                                     |
| DN().      | Monat(). | SvGruppeLehrlingAng             | SV-Gruppe Angestellten-Lehrling (Wahr/Falsch)                        |
| DN().      | Monat(). | SvGruppeLehrlingArb             | SV-Gruppe Arbeiter-Lehrling (Wahr/Falsch)                            |
| DN().      | Monat(). | SvGruppeNotar                   | SV-Gruppe VA des Notariats (Wahr/Falsch)                             |
| DN().      | Monat(). | SvGruppePv                      | SV-Gruppe Pensionsversicherungspflichtig (Wahr/Falsch)               |
| DN().      | Monat(). | SvGruppeUv                      | SV-Gruppe Unfallversicherungspflichtig (Wahr/Falsch)                 |
| DN().      | Monat(). | KeineSvGruppe                   | Keine SV-Gruppe ausgewählt (Wahr/Falsch)                             |
| DN().      | Monat(). | Arbeiter                        | Arbeiter(in) aktiviert (Wahr/Falsch)                                 |
| DN().      | Monat(). | KUPflicht                       | Kammerumlage aktiviert (Wahr/Falsch)                                 |
| DN().      | Monat(). | LKUPflicht                      | LKU-Pflicht aktiviert (Wahr/Falsch)                                  |
| DN().      | Monat(). | WFPflicht                       | WF-Pflicht aktiviert (Wahr/Falsch)                                   |
| DN().      | Monat(). | IESGPflicht                     | IESG-Pflicht aktiviert (Wahr/Falsch)                                 |
| DN().      | Monat(). | SWPflicht                       | SW-Pflicht aktiviert (Wahr/Falsch)                                   |
| DN().      | Monat(). | NBPflicht                       | Nachtschicht-Schwerarbeiter aktiviert (Wahr/Falsch)                  |
| DN().      | Monat(). | Bildungsfonds                   | Bildungsfonds aktiviert (Wahr/Falsch)                                |
| DN().      | Monat(). | Geschaeftsfuehrer               | Geschäftsführer aktiviert (Wahr/Falsch)                              |
| DN().      | Monat(). | Zugehoerigkeit                  | Ausgewählter Text für Zugehörigkeit (Anmeldung)                      |
| DN().      | Monat(). | FallweiseBeschaeftigt           | Fallweise Beschäftig aktiviert (Wahr/Falsch)                         |
| DN().      | Monat(). | TageFallweise                   | Markierte Tage bei Fallweise Beschäftigt                             |
| DN().      | Monat(). | L16Monatlich                    | L16 monatlich aktiviert (Wahr/Falsch)                                |
| DN().      | Monat(). | SVFreibetrag                    | SV-Freibetrag aktiviert (Wahr/Falsch)                                |
| DN().      | Monat(). | SVFreibetragProz                | Prozentsatz des SV-Freibetrages                                      |
| DN().      | Monat(). | SVFreibetragMax                 | Höchstbetrag des SV-Freibetrages                                     |
| DN().      | Monat(). | KeineAlVRueckverrechnung        | Keine AlV-Rückverrechnung aktiviert (Wahr/Falsch)                    |
| DN().      | Monat(). | AlVRueckverrechnungN25h         | N25h AlV-Rückverrechnung aktiviert (Wahr/Falsch)                     |
| DN().      | Monat(). | BonusgruppenNachSept2009        | Bonusgruppe nach 1. Sept. 2009 erlauben aktiviert (Wahr/Falsch)      |
| DN()       | Monat()  | BeginnVerrechnung               | Abweichende Eingabe des Tages des Beginn der Verrechnung beim mBGM   |
| DN()       | Monat()  | Beschaeftigungsbereich          | Beschäftigungsbereich der Anmeldung (Arbeiter, Angestellter, etc.)   |
| DN()       | Monat()  | BonusAltfall                    | Bonus Altfall aktiviert (Wahr/Falsch)                                |
| DN()       | Monat()  | EntfallAVLehrlingssonderfall    | Entfall AV Lehrlingssonderfall aktiviert (Wahr/Falsch)               |
| DN()       | Monat()  | EntfallAVLehrlingssonderfallAlt | Entfall AV Lehrlingssonderfall alt aktiviert (Wahr/Falsch)           |
| DN()       | Monat()  | AVEntfallPensionsanspruch       | AV Entfall Pensionsanspruch aktiviert (Wahr/Falsch)                  |
| DN()       | Monat()  | AVIEEntfallPensionsanspruch     | AV+IE Entfall Pensionsanspruch aktiviert (Wahr/Falsch)               |
| DN()       | Monat()  | BefreiungServiceEntgelt         | Befreiung Service-Entgelt (e-card) aktiviert (Wahr/Falsch)           |
| DN()       | Monat()  | mBGMNichtErstellen              | mBGM nicht erstellen                                                 |
| DN()       | Monat()  | MinderungAlV02Proz              | Minderung ALV um 0,20% (Lehrling) aktiviert (Wahr/Falsch)            |
| DN()       | Monat()  | MinderungAlV12Proz              | Minderung ALV um 1,20% (Lehrling) aktiviert (Wahr/Falsch)            |
| DN()       | Monat()  | MinderungAlV1Proz               | Minderung ALV um 1% aktiviert (Wahr/Falsch)                          |
| DN()       | Monat()  | MinderungAlV2Proz               | Minderung ALV um 2% aktiviert (Wahr/Falsch)                          |
| DN()       | Monat()  | MinderungAlV3Proz               | Minderung ALV um 3% aktiviert (Wahr/Falsch)                          |
| DN()       | Monat()  | MinderungPVum50Proz             | Minderung PV um 50% aktiviert (Wahr/Falsch)                          |
| DN()       | Monat()  | SchwerarbeitBis                 | Schwerarbeit (Dauer der Tätigkeit) bis                               |
| DN()       | Monat()  | SchwerarbeitVon                 | Schwerarbeit (Dauer der Tätigkeit) von                               |
| DN()       | Monat()  | SchwerarbeitWiederkehrend       | Schwerarbeit wiederkehrend aktiviert (Wahr/Falsch)                   |
| DN()       | Monat()  | SchwerarbeitZ1                  | Schwerarbeit Z1 aktiviert (Wahr/Falsch)                              |
| DN()       | Monat()  | SchwerarbeitZ2                  | Schwerarbeit Z2 aktiviert (Wahr/Falsch)                              |
| DN()       | Monat()  | SchwerarbeitZ4                  | Schwerarbeit Z4 aktiviert (Wahr/Falsch)                              |
| DN()       | Monat()  | SchwerarbeitZ5                  | Schwerarbeit Z5 aktiviert (Wahr/Falsch)                              |
| DN()       | Monat()  | SchwerarbeitZ6                  | Schwerarbeit Z6 aktiviert (Wahr/Falsch)                              |
| DN()       | Monat()  | Sozialfonds                     | Sozialfonds aktiviert (Wahr/Falsch)                                  |
| DN()       | Monat()  | SZKeineAlVRueckverrechnung      | SZ keine AlV-Rückverrechnung aktiviert (Wahr/Falsch)                 |
| DN()       | Monat()  | SZMinderungAlV02Proz            | SZ Minderung ALV um 0,2% (Lehrling) aktiviert (Wahr/Falsch)          |
| DN()       | Monat()  | SZMinderungAlV12Proz            | SZ Minderung ALV um 1,2% (Lehrling) aktiviert (Wahr/Falsch)          |
| DN()       | Monat()  | SZMinderungAlV1Proz             | SZ Minderung ALV um 1% aktiviert (Wahr/Falsch)                       |
| DN()       | Monat()  | SZMinderungAlV2Proz             | SZ Minderung ALV um 2% aktiviert (Wahr/Falsch)                       |
| DN()       | Monat()  | SZMinderungAlV3Proz             | SZ Minderung ALV um 3% aktiviert (Wahr/Falsch)                       |
| DN()       | Monat()  | UStPflicht                      | USt-Pflicht aktiviert (Wahr/Falsch)                                  |
| DN()       | Monat()  | UStProzentsatz                  | USt-Prozentsatz                                                      |
| DN()       | Monat()  | UVEntfall60LJvollendet          | UV-Entfall 60. LJ vollendet aktiviert (Wahr/Falsch)                  |
| DN()       | Monat()  | UVEntfallNeufoeg                | UV-Entfall Neufög aktiviert (Wahr/Falsch)                            |
| DN()       | Monat()  | Verrechnungsgrundlage           | Abweichende Eingabe der Verrechnungsgrundlage                        |
| DN()       | Monat()  | WeiterbildungsbeitragAUEG       | Weiterbildungsbeitrag - AÜG aktiviert (Wahr/Falsch)                  |
| DN()       | Monat()  | Wiederkehrend                   | Abweichende mBGM Einstellungen wiederkehrend aktiviert (Wahr/Falsch) |
| DN()       | Monat()  | WVEntfallNeufoeg                | WF-Entfall Neufög aktiviert (Wahr/Falsch)                            |

### Dienstnehmer - Lohnarten

| **Formel** |                      |                        |              |     | **Beschreibung**                                                           |
| ---------- | -------------------- | ---------------------- | ------------ | --- | -------------------------------------------------------------------------- |
| DN().      | Lohnart().           | Monat().               | Wert         |     | Betrag der Lohnart                                                         |
| DN().      | Lohnart().           | Monat().               | Anzahl       |     | Anzahl der Basis der Lohnart                                               |
| DN().      | Lohnart().           | Monat().               | Basis        |     | Basis der Anzahl der Lohnart                                               |
| DN().      | Lohnart().           | Monat().               | Monat        |     | Zeigt das Monatskürzel und Jahr der Lohnart an                             |
| DN().      | Lohnart().           | Name                   |              |     | Name der Lohnart                                                           |
| DN().      | Lohnart().           | Nummer                 |              |     | Nummer der Lohnart                                                         |
| DN().      | LohnartAktDV().      | Monat().               | Wert         |     | Betrag der Lohnart (aktives Dienstverhältnis)                              |
| DN().      | LohnartAktDV ().     | Monat().               | Anzahl       |     | Anzahl der Basis der Lohnart (aktives Dienstverhältnis)                    |
| DN().      | LohnartAktDV ().     | Monat().               | Basis        |     | Basis der Anzahl der Lohnart (aktives Dienstverhältnis)                    |
| DN().      | LohnartAktDV ().     | Monat().               | Monat        |     | Zeigt das Monatskürzel und Jahr der Lohnart an (aktives Dienstverhältnis)  |
| DN().      | LohnartAktDV ().     | Name                   |              |     | Name der Lohnart (aktives Dienstverhältnis)                                |
| DN().      | LohnartAktDV ().     | Nummer                 |              |     | Nummer der Lohnart (aktives Dienstverhältnis)                              |
| DN().      | Monatssumme().       | Monat().               | Monat        |     | Zeigt Monatskürzel und Jahr der Monatssumme an                             |
| DN().      | Monatssumme().       | Monat()                | Wert         |     | Wert der ausgewählten Monatssumme                                          |
| DN().      | Monatssumme().       | Name                   |              |     | Name der ausgewählten Monatssumme                                          |
| DN().      | Monatssumme().       | Nummer                 |              |     | Nummer der ausgewählten Monatssumme                                        |
| DN().      | MonatssummeAktDV().  | Monat().               | Monat        |     | Zeigt Monatskürzel und Jahr der Monatssumme an (aktives Dienstverhältnis)  |
| DN().      | MonatssummeAktDV (). | Monat()                | Wert         |     | Wert der ausgewählten Monatssumme (aktives Dienstverhältnis)               |
| DN().      | MonatssummeAktDV (). | Name                   |              |     | Name der ausgewählten Monatssumme (aktives Dienstverhältnis)               |
| DN().      | MonatssummeAktDV (). | Nummer                 |              |     | Nummer der ausgewählten Monatssumme (aktives Dienstverhältnis)             |
| DN().      | Monat().             | NurAufrollung          |              |     | Ob nur die Aufrollung vorhanden ist (Wahr/Falsch)                          |
| DN().      | Monat().             | NurMvBemKrankheit      |              |     | Ob nur ein Wert MV-Bemessung Krankheit abgerechnet wurde (Wahr/Falsch)     |
| DN().      | Monat().             | NurMvBemMutterschutz   |              |     | Ob nur ein Wert MV-Bemessung Mutterschutz abgerechnet wurde (Wahr/Falsch)  |
| DN().      | Monat().             | NurMvBemPraesenzdienst |              |     | Ob nur ein Wert MV-Bemessung Präsenzdienst abgerechnet wurde (Wahr/Falsch) |
| DN().      | Monat().             | NurSvBemessung         |              |     | Ob nur ein Wert in SV-Bemessung abgerechnet wurde (Wahr/Falsch)            |
| DN().      | ZR().                | Monat().               | Arbeitstage  |     | Anzahl der Arbeitstage                                                     |
| DN().      | ZRAktDV().           | Monat().               | Arbeitstage  |     | Anzahl der Arbeitstage (aktives Dienstverhältnis)                          |
| DN().      | ZR().                | Monat().               | Feiertage    |     | Anzahl der Feiertage                                                       |
| DN().      | ZRAktDV().           | Monat().               | Feiertage    |     |                                                                            | Anzahl der Feiertage (aktives Dienstverhältnis) |
| DN().      | ZR().                | Monat().               | LStTage      |     |                                                                            | Anzahl der Lohnsteuertage                       |
| DN().      | ZRAktDV().           | Monat().               | LStTage      |     | Anzahl der Lohnsteuertage (aktives Dienstverhältnis)                       |
| DN().      | ZR().                | Monat().               | Monat        |     | Zeigt das Monat und Jahr an                                                |
| DN().      | ZRAktDV().           | Monat().               | Monat        |     | Zeigt das Monat und Jahr an (aktives Dienstverhältnis)                     |
| DN().      | ZR().                | Monat().               | SVTage       |     | Anzahl der SV-Tage                                                         |
| DN().      | ZRAktDV().           | Monat().               | SVTage       |     | Anzahl der SV-Tage (aktives Dienstverhältnis)                              |
| DN().      | ZR().                | Monat().               | TageProWoche |     | Anzahl der abgerechneten Tage                                              |
| DN().      | ZRAktDV().           | Monat().               | TageProWoche |     | Anzahl der abgerechneten Tage (aktives Dienstverhältnis)                   |
| DN().      | ZR().                | Monat().               | WochenStd    |     | Anzahl der Wochenstunden                                                   |
| DN().      | ZRAktDV().           | Monat().               | WochenStd    |     | Anzahl der Wochenstunden (aktives Dienstverhältnis)                        |

### Dienstnehmer - Über-/Mehrstunden

| **Formel** |             |          |       | **Beschreibung**                                                              |
| ---------- | ----------- | -------- | ----- | ----------------------------------------------------------------------------- |
| DN().      | Üst_Alle(). | Monat(). | Monat | Zeigt das Monatskürzel und Jahr an                                            |
| DN().      | Üst_Alle(). | Monat(). | Wert  | Wert der ausgewählten Über- und/oder Mehrarbeitsstunden                       |
| DN().      | Üst_Alle(). | Name     |       | Text der ausgewählten Über- und/oder Mehrarbeitsstunden                       |
| DN().      | Üst_Alle(). | Nummer   |       | Nummer der ausgewählten Über- und/oder Mehrarbeitsstunden                     |
| DN().      | Üst_WK().   | Monat()  | Monat | Zeigt das Monatskürzel und Jahr an                                            |
| DN().      | Üst_WK().   | Monat(). | Wert  | Wert der ausgewählten und wiederkehrenden Über- und/oder Mehrarbeitsstunden   |
| DN().      | Üst_WK().   | Name     |       | Text der ausgewählten und wiederkehrenden Über- und/oder Mehrarbeitsstunden   |
| DN().      | Üst_WK().   | Nummer   |       | Nummer der ausgewählten und wiederkehrenden Über- und/oder Mehrarbeitsstunden |

### Dienstnehmer - BUAK

| **Formel** |          |                     | **Beschreibung**                                                                   |
| ---------- | -------- | ------------------- | ---------------------------------------------------------------------------------- |
| DN().      | Monat(). | Buak                | BUAK aktiviert -- Wahr/Falsch                                                      |
| DN().      | Monat(). | BuakBkz             | Betriebskennzeichen bzw. wenn abw. Betriebskennzeichen eingeben wurde, dieser Wert |
| DN().      | BuakAkz  |                     | Arbeitnehmerkennzeichen bei der BUAK                                               |
| DN().      | Monat(). | BuakBeruf           | BUAK -- Beruf                                                                      |
| DN().      | Monat(). | BuakStundensatzKv   | BUAK -- Stundensatz lt. KV                                                         |
| DN().      | Monat(). | BuakWochenstundenKv | BUAK -- Wochenstunden lt. KV                                                       |

### Dienstnehmer - Urlaub

| **Formel** |                        |                 |                         | **Beschreibung**                                                             |
| ---------- | ---------------------- | --------------- | ----------------------- | ---------------------------------------------------------------------------- |
| DN().      | UrlaubsjahrBeginn      |                 |                         | Datum im Beginn Urlaubsjahr                                                  |
| DN().      | UrlaubInAT             |                 |                         | Ob Urlaub in Arbeitstagen abgerechnet wird (Wahr/Falsch)                     |
| DN().      | UrlaubInStunden        |                 |                         | Ob Urlaub in Stunden abgerechnet wird (Wahr/Falsch)                          |
| DN().      | UrlaubAnspruch         |                 |                         | Wert im Feld Anspruch                                                        |
| DN().      | UrlaubAnfang           |                 |                         | Wert im Feld Anfangsstand                                                    |
| DN().      | MonatsteilerAbw        |                 |                         | Eingabe der Tage bei abweichenden Monatsteiler für die Urlaubsrückstellung   |
| DN().      | UrlaubAliquot          |                 |                         | Anspruchsaliquotierung aktiviert (Wahr/Falsch)                               |
| DN().      | UrlaubAliquotDauerhaft |                 |                         | Dauerhafte Anspruchsaliquotierung aktiviert (Wahr/Falsch)                    |
| DN().      | UrlaubskarteiJaNein    |                 |                         | Ob die Urlaubskartei verwendet wird (Wahr/Falsch)                            |
| DN().      | Urlaubskartei().       | Von             |                         | Datum Von bei Eintrag der Urlaubszeile                                       |
| DN().      | Urlaubskartei().       | Bis             |                         | Datum Bis bei Eintrag der Urlaubszeile                                       |
| DN().      | Urlaubskartei().       | Dauer           |                         | Dauer der ausgewählten Urlaubszeile                                          |
| DN().      | Urlaubskartei().       | Sonderurlaub    |                         | Ob bei Urlaubseintrag Sonderurlaub aktiviert ist (Wahr/Falsch)               |
| DN().      | Urlaubskartei().       | Saldo           |                         | Wert im Feld Saldo des Urlaubeintrages                                       |
| DN().      | Urlaubskartei().       | Text            |                         | Text der ausgewählten Urlaubszeile                                           |
| DN().      | ZR().                  | Monat().        | TageUrlaub              | Anzahl Kalendertage des Urlaubs                                              |
| DN().      | ZRAktDV().             | Monat().        | TageUrlaub              | Anzahl Kalendertage des Urlaubs (aktives Dienstverhältnis)                   |
| DN().      | ZR().                  | Monat().        | TageUrlaubOhneFeiertage | Kalendertage des Urlaubs ohne Feiertage                                      |
| DN().      | ZRAktDV().             | Monat().        | TageUrlaubOhneFeiertage | Kalendertage des Urlaubs ohne Feiertage (aktives Dienstverhältnis)           |
| DN().      | ZR().                  | Monat().        | TageUrlaubMonatSaldo    | Saldo der Urlaubskartei zu einem bestimmten Monat                            |
| DN().      | ZRAktDV().             | Monat().        | TageUrlaubMonatSaldo    | Saldo der Urlaubskartei zu einem bestimmten Monat (aktives Dienstverhältnis) |
| DN().      | ZR().                  | TageUrlaubSaldo |                         | Saldo der Urlaubskartei                                                      |
| DN().      | ZRAktDV().             | TageUrlaubSaldo |                         | Saldo der Urlaubskartei (aktives Dienstverhältnis)                           |

### Dienstnehmer - Krankenstand

| **Formel** |                                     |                |                        | **Beschreibung**                                                                                                             |
| ---------- | ----------------------------------- | -------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| DN().      | KrankenstandBeginnBeschaeftigung    |                |                        | Datum im Feld „Beschäftigt ab"                                                                                               |
| DN().      | KrankenstandBeginnArbeitsjahr       |                |                        | Datum im Feld „Beginn Arbeitsjahr"                                                                                           |
| DN().      | KrankenstandAnspruchArbeitsjahr     |                |                        | Berechnung der Ansprüche nach Arbeitsjahr (Wahr/Falsch)                                                                      |
| DN().      | KrankenstandAnspruchKalenderjahr    |                |                        | Berechnung der Ansprüche nach Kalenderjahr (Wahr/Falsch)                                                                     |
| DN().      | KrankenstandAbrechnungArbeitstage   |                |                        | Abrechnung in Arbeitstagen (Wahr/Falsch)                                                                                     |
| DN().      | KrankenstandAbrechnungKalendertagen |                |                        | Abrechnung in Kalendertagen (Wahr/Falsch)                                                                                    |
| DN().      | KrankenstandskarteiJaNein           |                |                        | Krankenstandkartei aktiviert (Wahr/Falsch)                                                                                   |
| DN().      | Krankenstandskartei().              | Art            |                        | Krankenstandskartei - Wert bei Art                                                                                           |
| DN().      | Krankenstandskartei().              | Von            |                        | Krankenstandskartei - Datum Von                                                                                              |
| DN().      | Krankenstandskartei().              | Bis            |                        | Krankenstandskartei - Datum Bis                                                                                              |
| DN().      | Krankenstandskartei().              | Dauer          |                        | Krankenstandskartei - Tage der Dauer                                                                                         |
| DN().      | Krankenstandskartei().              | Grund          |                        | Krankenstandskartei - Grund des Krankenstandes                                                                               |
| DN().      | Krankenstandskartei().              | Ersterkrankung |                        | Krankenstandskartei - Ersterkrankung (Wahr/Falsch)                                                                           |
| DN().      | Krankenstandskartei().              | Text           |                        | Krankenstandskartei - Eintrag im Feld Text                                                                                   |
| DN().      | ZR().                               | Monat().       | TageEFZ                | Anzahl der EFZ-Tage des ausgewählten Zeitraumes                                                                              |
| DN().      | ZRAktDV().                          | Monat().       | TageEFZ                | Anzahl der EFZ-Tage des ausgewählten Zeitraumes  (aktives Dienstverhältnis)                                                  |
| DN().      | ZR().                               | Monat().       | TageEFZ0               | Anzahl der EFZ-Tage des ausgewählten Zeitraumes für die kein Anspruch mehr besteht                                           |
| DN().      | ZRAktDV().                          | Monat().       | TageEFZ0               | Anzahl der EFZ-Tage des ausgewählten Zeitraumes für die kein Anspruch mehr besteht (aktives Dienstverhältnis)                |
| DN().      | ZR().                               | Monat().       | TageEFZ100             | Anzahl der EFZ-Tage des ausgewählten Zeitraumes für die ein Anspruch zu 100 % besteht                                        |
| DN().      | ZRAktDV().                          | Monat().       | TageEFZ100             | Anzahl der EFZ-Tage des ausgewählten Zeitraumes für die ein Anspruch zu 100 % besteht (aktives Dienstverhältnis)             |
| DN().      | ZR().                               | Monat().       | TageEFZ25              | Anzahl der EFZ-Tage des ausgewählten Zeitraumes für die ein Anspruch zu 25 % besteht                                         |
| DN().      | ZRAktDV().                          | Monat().       | TageEFZ25              | Anzahl der EFZ-Tage des ausgewählten Zeitraumes für die ein Anspruch zu 25 % besteht (aktives Dienstverhältnis)              |
| DN().      | ZR().                               | Monat().       | TageEFZ50_1            | Anzahl der EFZ-Tage des ausgewählten Zeitraumes für die ein Anspruch zu 50 % besteht                                         |
| DN().      | ZRAktDV().                          | Monat().       | TageEFZ50_1            | Anzahl der EFZ-Tage des ausgewählten Zeitraumes für die ein Anspruch zu 50 % besteht (aktives Dienstverhältnis)              |
| DN().      | ZR().                               | Monat().       | TageEFZ50_2            | Anzahl der EFZ-Tage des ausgewählten Zeitraumes für die ein Anspruch zu 50 % (§ 8/2 AngG) besteht                            |
| DN().      | ZRAktDV().                          | Monat().       | TageEFZ50_2            | Anzahl der EFZ-Tage des ausgewählten Zeitraumes für die ein Anspruch zu 50 % (§ 8/2 AngG) besteht (aktives Dienstverhältnis) |
| DN().      | ZR().                               | Monat().       | TageEFZTE              | Anzahl der EFZ-Tage des ausgewählten Zeitraumes für die ein Teilentgelt besteht (Lehrling)                                   |
| DN().      | ZRAktDV().                          | Monat().       | TageEFZTE              | Anzahl der EFZ-Tage des ausgewählten Zeitraumes für die ein Teilentgelt besteht (Lehrling) (aktives Dienstverhältnis)        |
| DN().      | ZR().                               | Monat().       | TageKrank              | Anzahl der Krankentage                                                                                                       |
| DN().      | ZRAktDV().                          | Monat().       | TageKrank              | Anzahl der Krankentage (aktives Dienstverhältnis)                                                                            |
| DN().      | ZR().                               | Monat().       | TageKrankOhneFeiertage | Anzahl der Krankentage ohne Freitage                                                                                         |
| DN().      | ZRAktDV().                          | Monat().       | TageKrankOhneFeiertage | Anzahl der Krankentage ohne Freitage (aktives Dienstverhältnis)                                                              |

### Dienstnehmer -Dienstzettel

| **Formel** |                                  |        | **Beschreibung**                         |
| ---------- | -------------------------------- | ------ | ---------------------------------------- |
| DN().      | DienstzettelEndeAV               |        | Datum im Feld „Ende Arbeitsverhältnis"   |
| DN().      | DienstzettelEntgeltFaelligAm     |        | Text im Feld Entlohnung „fällig am"      |
| DN().      | DienstzettelSonstigeVereinbarung |        | Text der sonstigen Vereinbarungen        |
| DN().      | DienstzettelVdzEinstufung        |        | Anrechnung Vordienstzeiten - Einstufung  |
| DN().      | DienstzettelVdzAbfertigung       |        | Anrechnung Vordienstzeiten - Abfertigung |
| DN().      | DienstzettelVdzUrlaub            |        | Anrechnung Vordienstzeiten - Urlaub      |
| DN().      | DienstzettelEinstufung           |        | Einstufung - Einstufung                  |
| DN().      | DienstzettelEinstufungGruppe     |        | Einstufung - Gruppe im                   |
| DN().      | DienstzettelEinstufungJahr       |        | Einstufung - Jahr ab                     |
| DN().      | DienstzettelVorrueckung          |        | Vorrückung - Vorrückung                  |
| DN().      | DienstzettelVorrueckungGruppe    |        | Vorrückung - Gruppe im                   |
| DN().      | DienstzettelVorrueckungJahr      |        | Vorrückung - Jahr ab                     |
| DN().      | DienstzettelKuendText().         | Nummer | Nummer des Textbausteines bei Kündigung  |
| DN().      | DienstzettelSonstText().         | Nummer | Nummer des Textbausteines bei Sonstiges  |
| DzText().  | Nummer                           |        | Nummer des Dienstzetteltextes            |
| DzText().  | Text                             |        | Wortlaut des Dienstzetteltextes          |

### Auswahlkriterium

| **Formel**          |        | **Beschreibung**             |
| ------------------- | ------ | ---------------------------- |
| Auswahlkriterium(). | Nummer | Nummer des Auswahlkriteriums |
| Auswahlkriterium(). | Text   | Text des Auswahlkriteriums   |

### Zeitausgleich

| **Formel** |                               |                                |                             |                     | **Beschreibung**                                                      |
| ---------- | ----------------------------- | ------------------------------ | --------------------------- | ------------------- | --------------------------------------------------------------------- |
| DN().      | ZeitausgleichAnfang           |                                |                             |                     | Anfangsbestand des ZA                                                 |
| DN().      | ZeitausgleichInArbeitsstunden |                                |                             |                     | ZA in Arbeitsstunden                                                  |
| DN().      | Zeitauslgeichskartei().       | Arbeitsstunden                 |                             |                     | Arbeitsstunden                                                        |
| DN().      | Zeitauslgeichskartei().       | Datum                          |                             |                     | Datum                                                                 |
| DN().      | Zeitauslgeichskartei().       | Saldo                          |                             |                     | Saldo des ZA                                                          |
| DN().      | Zeitauslgeichskartei().       |                                |                             |                     | StundenRueckstellung   Stundenrückstellung                            |
| DN().      | Zeitauslgeichskartei().       | Zuschlag                       |                             |                     | ZA Zuschlag                                                           |
| DN().      | ZeitausgleichskarteiJaNein    |                                |                             |                     | Zeitausgleichskartei ist  aktiviert oder nicht                        |
| DN().      | ZeitausgleichStundenteiler    |                                |                             |                     | Stundenteiler                                                         |
| DN().      | ZeitausgleichStundenteilerAbw |                                |                             |                     | Abw. Stundenteiler                                                    |
| DN().      | ZR().                         | Monat().                       | ZA1                         |                     | ZA 1                                                                  |
| DN().      | ZR().                         | Monat().                       | ZA1                         | AnfangsstandBetrag  | ZA 1 Anfangsstand Betrag                                              |
| DN().      | ZR().                         | Monat().                       | ZA1                         | AnfangsstandStunden | ZA 1 Anfangsstand Stunden                                             |
| DN().      | ZR().                         | Monat().                       | ZA1                         | EndsaldoBetrag      | ZA 1 Endsaldo Betrag                                                  |
| DN().      | ZR().                         | Monat().                       | ZA1                         | EndsaldoStunden     | ZA 1 Endsaldo Stunden                                                 |
| DN().      | ZR().                         | Monat().                       | ZA1                         | VeraenderungBasis   | ZA 1 Veränderung der Basis                                            |
| DN().      | ZR().                         | Monat().                       | ZA1                         | VeraenderungBetrag  | ZA 1 Veränderung des Betrages                                         |
| DN().      | ZR().                         | Monat().                       | ZA1                         | VeraenderungStunden | ZA 1 Veränderung der Stunden                                          |
| DN().      | ZRAktDV().                    | Monat().                       | ZA1                         |                     | ZA 1 (aktives Dienstverhältnis)                                       |
| DN().      | ZRAktDV().                    | Monat().                       | ZA1                         | AnfangsstandBetrag  | ZA 1 Anfangsstand Betrag (aktives Dienstverhältnis)                   |
| DN().      | ZRAktDV().                    | Monat().                       | ZA1                         | AnfangsstandStunden | ZA 1 Anfangsstand Stunden (aktives Dienstverhältnis)                  |
| DN().      | ZRAktDV().                    | Monat().                       | ZA1                         | EndsaldoBetrag      | ZA 1 Endsaldo Betrag (aktives Dienstverhältnis)                       |
| DN().      | ZRAktDV().                    | Monat().                       | ZA1                         | EndsaldoStunden     | ZA 1 Endsaldo Stunden (aktives Dienstverhältnis)                      |
| DN().      | ZRAktDV().                    | Monat().                       | ZA1                         | VeraenderungBasis   | ZA 1 Veränderung der Basis (aktives Dienstverhältnis)                 |
| DN().      | ZRAktDV().                    | Monat().                       | ZA1                         | VeraenderungBetrag  | ZA 1 Veränderung des Betrages (aktives Dienstverhältnis)              |
| DN().      | ZRAktDV().                    | Monat().                       | ZA1                         | VeraenderungStunden | ZA 1 Veränderung der Stunden (aktives Dienstverhältnis)               |
| DN().      | ZR().                         | Monat().                       | ZA2                         |                     | ZA 2                                                                  |
| DN().      | ZR().                         | Monat().                       | ZA2                         | AnfangsstandBetrag  | ZA 2 Anfangsstand Betrag                                              |
| DN().      | ZR().                         | Monat().                       | ZA2                         | AnfangsstandStunden | ZA 2 Anfangsstand Stunden                                             |
| DN().      | ZR().                         | Monat().                       | ZA2                         | EndsaldoBetrag      | ZA 2 Endsaldo Betrag                                                  |
| DN().      | ZR().                         | Monat().                       | ZA2                         | EndsaldoStunden     | ZA 2 Endsaldo Stunden                                                 |
| DN().      | ZR().                         | Monat().                       | ZA2                         | VeraenderungBasis   | ZA 2 Veränderung der Basis                                            |
| DN().      | ZR().                         | Monat().                       | ZA2                         | VeraenderungBetrag  | ZA 2 Veränderung des Betrages                                         |
| DN().      | ZR().                         | Monat().                       | ZA2                         | VeraenderungStunden | ZA 2 Veränderung der Stunden                                          |
| DN().      | ZRAktDV().                    | Monat().                       | ZA2                         |                     | ZA 2 (aktives Dienstverhältnis)                                       |
| DN().      | ZRAktDV().                    | Monat().                       | ZA2                         | AnfangsstandBetrag  | ZA 2 Anfangsstand Betrag (aktives Dienstverhältnis)                   |
| DN().      | ZRAktDV().                    | Monat().                       | ZA2                         | AnfangsstandStunden | ZA 2 Anfangsstand Stunden (aktives Dienstverhältnis)                  |
| DN().      | ZRAktDV().                    | Monat().                       | ZA2                         | EndsaldoBetrag      | ZA 2 Endsaldo Betrag (aktives Dienstverhältnis)                       |
| DN().      | ZRAktDV().                    | Monat().                       | ZA2                         | EndsaldoStunden     | ZA 2 Endsaldo Stunden (aktives Dienstverhältnis)                      |
| DN().      | ZRAktDV().                    | Monat().                       | ZA2                         | VeraenderungBasis   | ZA 2 Veränderung der Basis (aktives Dienstverhältnis)                 |
| DN().      | ZRAktDV().                    | Monat().                       | ZA2                         | VeraenderungBetrag  | ZA 2 Veränderung des Betrages (aktives Dienstverhältnis)              |
| DN().      | ZRAktDV().                    | Monat().                       | ZA2                         | VeraenderungStunden | ZA 2 Veränderung der Stunden (aktives Dienstverhältnis)               |
| DN().      | ZR().                         | Monat().                       | ZAArbeitsstunden            |                     | ZA Arbeitstunden                                                      |
| DN().      | ZRAktDV().                    | Monat().                       | ZAArbeitsstunden            |                     | ZA Arbeitstunden (aktives Dienstverhältnis)                           |
| DN().      | ZR().                         | Monat().                       | ZASaldoArbeitsstunden       |                     | ZA Saldo Arbeitsstunden                                               |
| DN().      | ZRAktDV().                    | Monat().                       | ZASaldoArbeitsstunden       |                     | ZA Saldo Arbeitsstunden (aktives Dienstverhältnis)                    |
| DN().      | ZR().                         | Monat().                       | ZASaldoStundenRueckstellung |                     | Der Saldo der Stunden Rückstellung für ZA                             |
| DN().      | ZRAktDV().                    | Monat().                       | ZASaldoStundenRueckstellung |                     | Der Saldo der STeunden Rückstellung für ZA (aktives Dienstverhältnis) |
| DN().      | ZR().                         | Monat().                       | ZAStundenRueckstellung      |                     | ZA Stunden Rückstellung ist aktiviert                                 |
| DN().      | ZRAktDV().                    | Monat().                       | ZAStundenRueckstellung      |                     | ZA Stunden Rückstellung ist aktiviert (aktives Dienstverhältnis)      |
| DN().      | ZR().                         | ZAEndsaldoArbeitsstunden       |                             |                     | ZA Endsaldo Arbeitsstunden                                            |
| DN().      | ZRAktDV().                    | ZAEndsaldoArbeitsstunden       |                             |                     | ZA Endsaldo Arbeitsstunden (aktives Dienstverhältnis)                 |
| DN().      | ZR().                         | ZAEndsaldoStundenRueckstellung |                             |                     | ZA Endsaldo Stunden Rückstellung                                      |
| DN().      | ZRAktDV().                    | ZAEndsaldoStundenRueckstellung |                             |                     | ZA Endsaldo Stunden Rückstellung (aktives Dienstverhältnis)           |

### Abzüge

| **Formel** |         |                                  | **Beschreibung**                                                                          |
| ---------- | ------- | -------------------------------- | ----------------------------------------------------------------------------------------- |
| DN()       | Monat() | Betriebsratsumlage               | Betrag Betriebsratsumlage                                                                 |
| DN()       | Monat() | BetriebsratsumlageInklSZ         | Betriebsratsumlage inkl. Sonderzahlungen (Wahr/Falsch)                                    |
| DN()       | Monat() | BetriebsratsumlageProzenteingabe | Betriebsratsumlage Prozenteingabe (Wahr/Falsch)                                           |
| DN()       | Monat() | BetriebsratsumlageProzentsatz    | Betriebsratsumlage Prozentsatz                                                            |
| DN()       | Monat() | ErhoehungDB                      | 20% Regel Sachbezug - Erhöhung DB-Bemessungsgrundlage aktiviert (Wahr/Falsch)             |
| DN()       | Monat() | ErhoehungKommunalsteuer          | 20% Regel Sachbezug - Erhöhung Kommunalsteuer-Bemessungsgrundlage aktiviert (Wahr/Falsch) |
| DN()       | Monat() | GewerkschaftProzenteingabe       | Gewerkschaftsbeitrag Prozenteingabe (Wahr/Falsch)                                         |
| DN()       | Monat() | GewerkschaftProzentsatz          | Gewerkschaftsbeitrag Prozentsatz                                                          |
| DN()       | Monat() | Gewerkschaftsbeitrag             | Betrag Gewerkschaftsbeitrag                                                               |
| DN()       | Monat() | Sachbezug                        | Betrag Sachbezug                                                                          |
| DN()       | Monat() | Vorschuss                        | Betrag Vorschuss                                                                          |

### Exekutionen

| **Formel** |         |                                | **Beschreibung**                                         |
| ---------- | ------- | ------------------------------ | -------------------------------------------------------- |
| DN()       | Monat() | AbzugExekutionskosten          | Abzug Exekutionskosten (Wahr/Falsch)                     |
| DN()       | Monat() | Aktenzahl                      | Aktenzahl der Exekution                                  |
| DN()       | Monat() | DauerBeendigungsansprueche     | Anzahl Monate der Beendigungsansprüche                   |
| DN()       | Monat() | ErweiterterPfaendungsschutz    | Erweiterter Pfändungsschutz in Monate                    |
| DN()       | Monat() | Exekutionsbetrag               | Exekutionsbetrag                                         |
| DN()       | Monat() | Gericht                        | Gericht                                                  |
| DN()       | Monat() | KeineZahlungsbereitschaft      | Keine Zahlungsbereitschaft aktiviert (Wahr/Falsch)       |
| DN()       | Monat() | KeineZahlungsbereitschaftGrund | Keine Zahlungsbereitschaft Grund                         |
| DN()       | Monat() | AbwBerechnungsgrundlagen       | Abweichende Berechnungsgrundlage aktiviert (Wahr/Falsch) |
| DN()       | Monat() | AnspruchAufSonderzahlung       | Anspruch auf Sonderzahlung (Wahr/Falsch)                 |
| DN()       | Monat() | LfdBezuegeAbweichend           | Abweichende Berechnungsgrundlage laufende Bezüge         |
| DN()       | Monat() | BeendigungAbweichend           | Abweichende Berechnungsgrundlage Beendigungsansprüche    |
| DN()       | Monat() | SonderzahungAbweichend         | Abweichende Berechnungsgrundlage Sonderzahlungen         |
| DN()       | Monat() | SummeExekutionsbetraege        | Summe Exekutionsbeträge                                  |
| DN()       | Monat() | SummeExekutionskosten          | Summe Exekutionskosten                                   |
| DN()       | Monat() | ZahlungsklageDesDienstnehmers  | Zahlungsklage des Dienstnehmers aktiviert (Wahr/Falsch)  |

### Kostenstelle

| **Formel** |         |                |         | **Beschreibung**             |
| ---------- | ------- | -------------- | ------- | ---------------------------- |
| DN()       | Monat() | Kostenstelle() | Name    | Name der Kostenstelle        |
| DN()       | Monat() | Kostenstelle() | Nummer  | Nummer der Kostenstelle      |
| DN()       | Monat() | Kostenstelle() | Prozent | Prozentsatz der Kostenstelle |

### Freie Dienstnehmer

| **Formel** |                          |                                       | **Beschreibung**                                                        |
| ---------- | ------------------------ | ------------------------------------- | ----------------------------------------------------------------------- |
| DN()       | Monat()                  | Abmeldedatum                          | Abmeldedatum                                                            |
| DN()       | Monat()                  | AbwBVBeitragssatz                     | Abweichender BV-Beitagssatz                                             |
| DN()       | Monat()                  | AbweichendeUStBasis                   | USt-Pflicht - abweichende USt-Basis                                     |
| DN()       | Monat()                  | AndereVereinbarungen                  | Anmeldung - andere Vereinbarungen                                       |
| DN()       | Monat()                  | SZvereinbart                          | Anmeldung - SZ vereinbart (Wahr/Falsch)                                 |
| DN()       | Monat()                  | BeginnAnderweitigePflichtversicherung | Datumsfeld: Abmeldung - Beginn anderweitige Pflichtversicherung         |
| DN()       | Monat()                  | BerufFreierDn                         | Beruf                                                                   |
| DN()       | Monat()                  | EndeTaetigkeit                        | Ende der Tätigkeit                                                      |
| DN()       | Monat()                  | EntgeltMonatlich                      | Vereinbartes Entgelt monatlich aktiviert (Wahr/Falsch)                  |
| DN()       | Monat()                  | Erfuellungszeitpunkt                  | Anmeldung - Erfüllungszeitpunkt                                         |
| DN()       | Monat()                  | FreierDNmitSZ                         | Sozialversicherung - Freier Dienstnehmer mit SZ aktiviert (Wahr/Falsch) |
| DN()       | Monat()                  | SZBetrag                              | SZ vereinbart Betrag                                                    |
| DN()       | Monat()                  | VereinbartesEntgelt                   | Vereinbartes Entgelt Betrag                                             |
| DN()       | Monat()                  | Vertragsabschluss                     | Vertragsabschluss (Datum)                                               |
| DN()       | Monat()                  | VertragsdauerBis                      | Vertragsdauer bis (Datum)                                               |
| DN()       | Monat()                  | VertragsdauerVon                      | Vertragsdauer von (Datum)                                               |
| DN()       | Monat()                  | Zahlungstermine                       | Zahlungstermine                                                         |
| DN()       | ArtDerErbrachtenLeistung |                                       | Art der erbrachten Leistung                                             |

### Kurzarbeit

| **Formel** |                     |                                |                                  | **Beschreibung**                                                                 |
| ---------- | ------------------- | ------------------------------ | -------------------------------- | -------------------------------------------------------------------------------- |
| DN()       | Monat()             | KurzarbeitCovid19()            | AbgerechnetInMonth               | Zeigt an ob in dem ausgewählten Monat Kurzarbeit abgerechnet wurde (Wahr/Falsch) |
| DN()       | Monat()             | KurzarbeitCovid19()            | Arbeitsstunden                   | Geleistete Arbeitsstunden (ohne Überstunden)                                     |
| DN()       | Monat()             | KurzarbeitCovid19()            | Ausfallstunden                   | Verrechnete Ausfallstunden                                                       |
| DN()       | Monat()             | KurzarbeitCovid19()            | BruttoVorKua68_1                 | Brutto vor Kurzarbeit davon § 68 (1)                                             |
| DN()       | Monat()             | KurzarbeitCovid19()            | BruttoVorKua68_2                 | Brutto vor Kurzarbeit davon § 68 (2)                                             |
| DN()       | Monat()             | KurzarbeitCovid19()            | BruttoVorKuaBeihilfe             | Brutto vor Kurzarbeit (Bruttoentgelt für Kurzarbeitsbeihilfe)                    |
| DN()       | Monat()             | KurzarbeitCovid19()            | BruttoVorKuaNettoersatzrate      | Brutto vor Kurzarbeit (Bruttoentgelt für Kurzarbeitsunterstützung)               |
| DN()       | Monat()             | KurzarbeitCovid19()            | Bruttozuschlag                   | Bruttozuschlag                                                                   |
| DN()       | Monat()             | KurzarbeitCovid19()            | BVBemVorKua                      | BV-Bemessung vor Kurzarbeit                                                      |
| DN()       | Monat()             | KurzarbeitCovid19()            | ErhoehungBvBem                   | Erhöhung BV-Bemessung                                                            |
| DN()       | Monat()             | KurzarbeitCovid19()            | ErhoehungSvBem                   | Erhöhung SV-Bemessung                                                            |
| DN()       | Monat()             | KurzarbeitCovid19()            | ErhoehungSvBemHandlungsempf      | Erhöhung SV-Bemessung Handlungsempfehlung                                        |
| DN()       | Monat()             | KurzarbeitCovid19()            | Ersatzleistungen                 | Stunden für die Ersatzleistungen gebühren                                        |
| DN()       | Monat()             | KurzarbeitCovid19()            | IsLehrling                       | DN gilt für Kurzarbeit als Lehrling (Wahr/Falsch)                                |
| DN()       | Monat()             | KurzarbeitCovid19()            | Krankenstand                     | Entgeltfortzahlung für Krankenstand                                              |
| DN()       | Monat()             | KurzarbeitCovid19()            | KurzarbeitsabschlagHandlungsempf | Corona-Kurzarbeitsabschlag Handlungsempfehlung                                   |
| DN()       | Monat()             | KurzarbeitCovid19()            | Kurzarbeitsbeihilfe              | Kurzarbeitsbeihilfe                                                              |
| DN()       | Monat()             | KurzarbeitCovid19()            | Kurzarbeitsunterstuetzung        | Kurzarbeitsunterstützung                                                         |
| DN()       | Monat()             | KurzarbeitCovid19()            | Kurzarbeitsunterstuetzung68_1    | Davon steuerfrei gem. § 68 (1)                                                   |
| DN()       | Monat()             | KurzarbeitCovid19()            | Kurzarbeitsunterstuetzung68_2    | Davon steuerfrei gem. § 68 (2)                                                   |
| DN()       | Monat()             | KurzarbeitCovid19()            | MindestBruttoWaehrendKua         | Mindest-Brutto während Kurzarbeit                                                |
| DN()       | Monat()             | KurzarbeitCovid19()            | NazAbrechnungszeitraum           | Normalarbeitsstunden im Abrechnungszeitraum                                      |
| DN()       | Monat()             | KurzarbeitCovid19()            | Nettoersatzrate                  | Nettoersatzrate in %                                                             |
| DN()       | Monat()             | KurzarbeitCovid19()            | Pauschalsatz                     | Pauschalsatz pro Ausfallstunde umgerechnet in ... h                              |
| DN()       | Monat()             | KurzarbeitCovid19()            | ReduktionBrutto                  | Reduktion Brutto durch Kurzarbeit                                                |
| DN()       | Monat()             | KurzarbeitCovid19()            | SvBemVorKua                      | SV-Bemessung vor Kurzarbeit                                                      |
| DN()       | Monat()             | KurzarbeitCovid19()            | Ueberstunden                     | Geleistete Überstunden                                                           |
| DN()       | Monat()             | KurzarbeitCovid19()            | UrlaubZa                         | Konsumierter Urlaub                                                              |
| DN()       | Monat()             | KurzarbeitCovid19()         Za | Konsumiertes Zeitguthaben        |
| DN()       | AMSKuaProjekt       | AMSNr                          |                                  | AMS Nummer                                                                       |
| DN()       | AMSKuaProjekt       | Beginn                         |                                  | AMS-KUA-Projekt Beginn                                                           |
| DN()       | AMSKuaProjekt       | DnKuaZr                        |                                  | Anzahl Dienstnehmer pro AMS-KUA-Projekt                                          |
| DN()       | AMSKuaProjekt       | Ende                           |                                  | AMS-KUA-Projekt Ende                                                             |
| DN()       | AMSKuaProjekt       | RZLNr                          |                                  | RZL Nummer                                                                       |
| DN()       | KurzarbeitCovid19() | Aktiviert                      |                                  | Kurzarbeit aktiviert (Wahr/Falsch)                                               |
| DN()       | KurzarbeitCovid19() | AMSProjektNr                   |                                  | AMS-Projekt Nummer                                                               |
| DN()       | KurzarbeitCovid19() | Arbeitsausfall                 |                                  | Arbeitsausfall in %                                                              |
| DN()       | KurzarbeitCovid19() | Beginn                         |                                  | Beginn der Kurzarbeit                                                            |
| DN()       | KurzarbeitCovid19() | BruttoVorKua                   |                                  | Brutto vor Kurzarbeit (Bruttoentgelt für Kurzarbeitsbeihilfe)                    |
| DN()       | KurzarbeitCovid19() | BvBemVorKua                    |                                  | BV-Bemessung vor Kurzarbeit                                                      |
| DN()       | KurzarbeitCovid19() | Ende                           |                                  | Ende der Kurzarbeit                                                              |
| DN()       | KurzarbeitCovid19() | NazLtKv                        |                                  | Normalarbeitszeit laut KV                                                        |
| DN()       | KurzarbeitCovid19() | RZLProjektNr                   |                                  | RZL-Projekt Nummer                                                               |
| DN()       | KurzarbeitCovid19() | SvBemVorKua                    |                                  | SV-Bemessung vor Kurzarbeit                                                      |
| DN()       | KurzarbeitCovid19() | UestdPauschUnwiderruflich      |                                  | Überstundenpauschale unwiderruflich (Wahr/Falsch) aktiviert                      |
| DN()       | KurzarbeitCovid19() | WochenStd                      |                                  | Wochenstunden                                                                    |

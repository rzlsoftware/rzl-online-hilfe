# Lohnverrechnung

Im folgenden Kapitel finden Sie die Auflistung der verfügbaren Formeln für das Reporting im *RZL Lohnprogramm*. Seitens der RZL Software werden Ihnen mit dem *Reporting-Modul* auch diverse Musterreports zur Verfügung gestellt.

## RZL Musterreports LV

Neben Statistikauswertungen können Sie auch Musterschreiben für Dienstzettel oder Dienstverträge von RZL übernehmen und nach Ihren individuellen Bedürfnissen einrichten. Eine aktuelle Übersicht zu den Musterreports finden Sie in der ZMV unter *Allg. Dateien / Installieren* im Registerblatt *Reports* oder unter [Musterreports](../Auflistung_Musterreports.md) zu finden.

!!! info "Tipp"
    Die RZL-Musterreports werden stetig erweitert. Neuerungen werden auch im Zuge der Programmaktualisierung in den RZL-Newslettern veröffentlicht.

Diese können nach erfolgreicher Installation in der *ZMV* auf den gewünschten [Klienten überspielt](../Kanzleireports.md) und anschließend individuell angepasst oder abgeändert werden.

## Liste der Lohnformeln

Für das *RZL Lohnprogramm* stehen Ihnen im *Reporting-Modul* die folgenden Lohnformeln zur Verfügung.

!!! warning "Hinweis"
    Sofern bei einem Dienstnehmer mehrere Abrechnungen vorhanden sind, kann mit der Formel `Monat_L().`{data-clipboard-text="Monat_L()."} anstatt `Monat().`{data-clipboard-text="Monat()."} immer **auf die letzte Abrechnung** zugegriffen werden.

### Zeitraum

| **Formel**                                                                     | **Beschreibung**                                 |
| ------------------------------------------------------------------------------ | ------------------------------------------------ |
| `ZR().AktMonat`{data-clipboard-text="ZR().AktMonat"}                           | Zeigt den aktuellen Monat an                     |
| `ZR().Jahr().Jahr`{data-clipboard-text="ZR().Jahr().Jahr"}                     | Zeigt das ausgewählte Jahr an                    |
| `ZR().Jahr().Anfang`{data-clipboard-text="ZR().Jahr().Anfang"}                 | Zeigt den Beginn des aktuellen Jahres an         |
| `ZR().Jahr().Ende`{data-clipboard-text="ZR().Jahr().Ende"}                     | Zeigt das Ende des aktuellen Jahres an           |
| `ZR().Jahr().Monat().Anfang`{data-clipboard-text="ZR().Jahr().Monat().Anfang"} | Zeigt den ersten Tag des ausgewählten Monats an  |
| `ZR().Jahr().Monat().Ende`{data-clipboard-text="ZR().Jahr().Monat().Ende"}     | Zeigt den letzten Tag des ausgewählten Monats an |

### Arbeitsstätte

| **Formel**                                                                                       | **Beschreibung**                                      |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| `Arbeitsstaette().Gemeinde`{data-clipboard-text="Arbeitsstaette().Gemeinde"}                     | Gemeinde der Arbeitsstätte                            |
| `Arbeitsstaette().GemeindeKennziffer`{data-clipboard-text="Arbeitsstaette().GemeindeKennziffer"} | Gemeindekennziffer der Arbeitsstätte                  |
| `Arbeitsstaette().GemeindeNr`{data-clipboard-text="Arbeitsstaette().GemeindeNr"}                 | Nummer der Gemeinde der Arbeitsstätte                 |
| `Arbeitsstaette().HausNrBis`{data-clipboard-text="Arbeitsstaette().HausNrBis"}                   | Hausnummer bis der Arbeitsstätte                      |
| `Arbeitsstaette().HausNrVon`{data-clipboard-text="Arbeitsstaette().HausNrVon"}                   | Hausnummer von der Arbeitsstätte                      |
| `Arbeitsstaette().Land`{data-clipboard-text="Arbeitsstaette().Land"}                             | Länderkennzeichen der Arbeitsstätte                   |
| `Arbeitsstaette().Nummer`{data-clipboard-text="Arbeitsstaette().Nummer"}                         | Nummer der Arbeitsstätte beim jeweiligen Dienstgebers |
| `Arbeitsstaette().Ortschaft`{data-clipboard-text="Arbeitsstaette().Ortschaft"}                   | Ort der Arbeitsstätte                                 |
| `Arbeitsstaette().Plz`{data-clipboard-text="Arbeitsstaette().Plz"}                               | Postleitzahl der Arbeitsstätte                        |
| `Arbeitsstaette().Staat`{data-clipboard-text="Arbeitsstaette().Staat"}                           | Staat - nur bei ausländischer Arbeitsstätte           |
| `Arbeitsstaette().Stiege`{data-clipboard-text="Arbeitsstaette().Stiege"}                         | Stiegennummer der Arbeitsstätte                       |
| `Arbeitsstaette().Strasse`{data-clipboard-text="Arbeitsstaette().Strasse"}                       | Straße der Arbeitsstätte                              |
| `Arbeitsstaette().Tuer`{data-clipboard-text="Arbeitsstaette().Tuer"}                             | Türnummer der Arbeitsstätte                           |

### Dienstgeber

#### Allgemein

| **Formel**                                                                       | **Beschreibung**                                        |
| -------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `DG().Bank().BIC`{data-clipboard-text="DG().Bank().BIC"}                         | BIC des Dienstgebers der ausgewählten Bank              |
| `DG().Bank().BLZ`{data-clipboard-text="DG().Bank().BLZ"}                         | Bankleitzahl des Dienstgebers der ausgewählten Bank     |
| `DG().Bank().IBAN`{data-clipboard-text="DG().Bank().IBAN"}                       | IBAN des Dienstgebers der ausgewählten Bank             |
| `DG().Bank().KtoNr`{data-clipboard-text="DG().Bank().KtoNr"}                     | Kontonummer des Dienstgebers der ausgewählten Bank      |
| `DG().Bank().Name`{data-clipboard-text="DG().Bank().Name"}                       | Name der Bank des Dienstgebers der ausgewählten Bank    |
| `DG().Bank().Nummer`{data-clipboard-text="DG().Bank().Nummer"}                   | Nummer der Bank des Dienstgebers der ausgewählten Bank  |
| `DG().Beruf`{data-clipboard-text="DG().Beruf"}                                   | Tätigkeitsart des Dienstgebers                          |
| `DG().DvrNr`{data-clipboard-text="DG().DvrNr"}                                   | Datenverarbeitungsregister-Nummer des Dienstgebers      |
| `DG().EMail`{data-clipboard-text="DG().EMail"}                                   | E-Mail-Adresse des Dienstgebers                         |
| `DG().FbGericht`{data-clipboard-text="DG().FbGericht"}                           | Firmenbuchgericht des Dienstgebers                      |
| `DG().FbName`{data-clipboard-text="DG().FbName"}                                 | Abweichender Firmenbuchname des Dienstgebers            |
| `DG().FbNummer`{data-clipboard-text="DG().FbNummer"}                             | Firmenbuchnummer des Dienstgebers                       |
| `DG().Finanz`{data-clipboard-text="DG().Finanz"}                                 | Finanzamt des Dienstgebers                              |
| `DG().FinanzDienststelle`{data-clipboard-text="DG().FinanzDienststelle"}         | Finanzamtsdienststelle                                  |
| `DG().FinanzNr`{data-clipboard-text="DG().FinanzNr"}                             | Finanzamtnummer des Dienstgebers                        |
| `DG().FinanzOrt`{data-clipboard-text="DG().FinanzOrt"}                           | Ort des Finanzamtes des Dienstgebers                    |
| `DG().FinanzPlz`{data-clipboard-text="DG().FinanzPlz"}                           | Postleitzahl des Finanzamtes des Dienstgebers           |
| `DG().FinanzStrasse`{data-clipboard-text="DG().FinanzStrasse"}                   | Straße des Finanzamtes des Dienstgebers                 |
| `DG().FinanzZahlungsreferenz`{data-clipboard-text="DG().FinanzZahlungsreferenz"} | Zahlungsreferenz Finanzamt                              |
| `DG().GKK().BKNr`{data-clipboard-text="DG().GKK().BKNr"}                         | Beitragskontonummer des DG mit Auswahl des Bundeslandes |
| `DG().GKK().MVKEMail`{data-clipboard-text="DG().GKK().MVKEMail"}                 | E-Mail-Adresse der Mitarbeitervorsorgekasse des DG      |
| `DG().GKK().MVKLeitzahl`{data-clipboard-text="DG().GKK().MVKLeitzahl"}           | Leitzahl der Mitarbeitervorsorgekasse des DG            |
| `DG().GKK().MVKName`{data-clipboard-text="DG().GKK().MVKName"}                   | Name der Mitarbeitervorsorgekasse des DG                |
| `DG().GKK().MVKOrt`{data-clipboard-text="DG().GKK().MVKOrt"}                     | Ort der Mitarbeitervorsorgekasse des DG                 |
| `DG().GKK().MVKPlz`{data-clipboard-text="DG().GKK().MVKPlz"}                     | Postleitzahl der Mitarbeitervorsorgekasse des DG        |
| `DG().GKK().MVKStrasse`{data-clipboard-text="DG().GKK().MVKStrasse"}             | Straße der Mitarbeitervorsorgekasse des DG              |
| `DG().GKK().MVKTelefon`{data-clipboard-text="DG().GKK().MVKTelefon"}             | Telefonnummer der Mitarbeitervorsorgekasse des DG       |
| `DG().GKK().Name`{data-clipboard-text="DG().GKK().Name"}                         | Name und Bundesland der Krankenkasse                    |
| `DG().GKK().Nummer`{data-clipboard-text="DG().GKK().Nummer"}                     | Nummer der Krankenkasse                                 |
| `DG().GKK().Ort`{data-clipboard-text="DG().GKK().Ort"}                           | Ort der Krankenkasse                                    |
| `DG().GKK().Plz`{data-clipboard-text="DG().GKK().Plz"}                           | PLZ der Krankenkasse                                    |
| `DG().GKK().Strasse`{data-clipboard-text="DG().GKK().Strasse"}                   | Straße der Krankenkasse                                 |
| `DG().GKK().Telefon`{data-clipboard-text="DG().GKK().Telefon"}                   | Telefonnummer der Krankenkasse                          |
| `DG().Land`{data-clipboard-text="DG().Land"}                                     | Länderkennzeichen des Dienstgebers                      |

#### Stammdaten

| **Formel**                                                 | **Beschreibung**                          |
| ---------------------------------------------------------- | ----------------------------------------- |
| `DG().Name`{data-clipboard-text="DG().Name"}               | Name des Dienstgebers                     |
| `DG().Nummer`{data-clipboard-text="DG().Nummer"}           | Klientennummer des Dienstgebers           |
| `DG().Ort`{data-clipboard-text="DG().Ort"}                 | Ort des Dienstgebers                      |
| `DG().Plz`{data-clipboard-text="DG().Plz"}                 | Postleitzahl des Dienstgebers             |
| `DG().Rechtsform`{data-clipboard-text="DG().Rechtsform"}   | Rechtsform des Dienstgebers               |
| `DG().Steuer`{data-clipboard-text="DG().Steuer"}           | Steuernummer des Dienstgebers             |
| `DG().Strasse`{data-clipboard-text="DG().Strasse"}         | Straße des Dienstgebers                   |
| `DG().Telefon`{data-clipboard-text="DG().Telefon"}         | Telefonnummer des Dienstgebers            |
| `DG().Uid`{data-clipboard-text="DG().Uid"}                 | Umsatzsteuer-Identifikationsnummer des DG |
| `DG().Unternummer`{data-clipboard-text="DG().Unternummer"} | Nummer des Unterdienstgebers              |


#### Lohnarten

| **Formel**                                                                                 | **Beschreibung**                                                              |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `DG().Lohnart().Monat().Anzahl`{data-clipboard-text="DG().Lohnart().Monat().Anzahl"}       | Bei Lohnarten nach Einheiten – Summe der Einheiten                            |
| `DG().Lohnart().Monat().Basis`{data-clipboard-text="DG().Lohnart().Monat().Basis"}         | Basis einer Lohnart                                                           |
| `DG().Lohnart().Monat().Monat`{data-clipboard-text="DG().Lohnart().Monat().Monat"}         | Zeigt den ausgewählten Monat an                                               |
| `DG().Lohnart().Monat().Wert`{data-clipboard-text="DG().Lohnart().Monat().Wert"}           | Wert der Lohnart                                                              |
| `DG().Lohnart().Name.Wert`{data-clipboard-text="DG().Lohnart().Name.Wert"}                 | Bezeichnung der Lohnart                                                       |
| `DG().Lohnart().Nummer.Wert`{data-clipboard-text="DG().Lohnart().Nummer.Wert"}             | Interne Nummer der Lohnart                                                    |
| `DG().LohnartAktDV.Monat()`{data-clipboard-text="DG().LohnartAktDV.Monat()"}               | Zeigt den ausgewählten Monat an (aktives Dienstverhältnis)                    |
| `DG().LohnartAktDV.Monat().Anzahl`{data-clipboard-text="DG().LohnartAktDV.Monat().Anzahl"} | Bei Lohnarten nach Einheiten – Summe der Einheiten (aktives Dienstverhältnis) |
| `DG().LohnartAktDV.Monat().Basis`{data-clipboard-text="DG().LohnartAktDV.Monat().Basis"}   | Basis einer Lohnart (aktives Dienstverhältnis)                                |
| `DG().LohnartAktDV.Monat().Wert`{data-clipboard-text="DG().LohnartAktDV.Monat().Wert"}     | Wert der Lohnart (aktives Dienstverhältnis)                                   |

#### Monatssummen

| **Formel**                                                                                         | **Beschreibung**                |
| -------------------------------------------------------------------------------------------------- | ------------------------------- |
| `DG().Monatssumme().Monat().Monat`{data-clipboard-text="DG().Monatssumme().Monat().Monat"}         | Zeigt den ausgewählten Monat an |
| `DG().Monatssumme().Monat().Wert`{data-clipboard-text="DG().Monatssumme().Monat().Wert"}           | Wert der ausgewählten Lohnart   |
| `DG().Monatssumme().Name`{data-clipboard-text="DG().Monatssumme().Name"}                           | Bezeichnung der Lohnart         |
| `DG().Monatssumme().Nummer`{data-clipboard-text="DG().Monatssumme().Nummer"}                       | Interne Nummer der Lohnart      |
| `DG().MonatssummeAktDV().Monat()`{data-clipboard-text="DG().MonatssummeAktDV().Monat()"}           | Zeigt den ausgewählten Monat an |
| `DG().MonatssummeAktDV().Monat().Wert`{data-clipboard-text="DG().MonatssummeAktDV().Monat().Wert"} | Wert der ausgewählten Lohnart   |

#### Zeitraum

| **Formel**                                                                                                 | **Beschreibung**                                                                        |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `DG().ZR().Monat().LStTage`{data-clipboard-text="DG().ZR().Monat().LStTage"}                               | Anzahl der abgerechneten Lohnsteuertage                                                 |
| `DG().ZR().Monat().SVTage`{data-clipboard-text="DG().ZR().Monat().SVTage"}                                 | Anzahl der abgerechneten SV-Tage                                                        |
| `DG().ZR().Monat().SVTageKuerzungEFZ`{data-clipboard-text="DG().ZR().Monat().SVTageKuerzungEFZ"}           | Anzahl der abgerechneten Tage der Kürzung EFZ                                           |
| `DG().ZR().Monat_L().SVTageKürzungEFZ`{data-clipboard-text="DG().ZR().Monat_L().SVTageKürzungEFZ"}         | Anzahl der abgerechneten Tage der Kürzung EFZ (aktives Dienstverhältnis)                |
| `DG().ZRAktDV().Monat().SVTageKuerzungEFZ`{data-clipboard-text="DG().ZRAktDV().Monat().SVTageKuerzungEFZ"} | Anzahl der abgerechneten Tage der Kürzung EFZ (aktives Dienstverhältnis)                |
| `DG().ZR().Monat().SVTageKÜ`{data-clipboard-text="DG().ZR().Monat().SVTageKÜ"}                             | Anzahl der abgerechneten SV-Tage der Kündigungsentschädigung                            |
| `DG().ZRAktDV().Monat().SVTageKÜ`{data-clipboard-text="DG().ZRAktDV().Monat().SVTageKÜ"}                   | Anzahl der abgerechneten SV-Tage der Kündigungsentschädigung (aktives Dienstverhältnis) |
| `DG().ZR().Monat().SVTageUE`{data-clipboard-text="DG().ZR().Monat().SVTageUE"}                             | Anzahl der abgerechneten SV-Tage der Urlaubsersatzleistung                              |
| `DG().ZRAktDV().Monat().SVTageUE`{data-clipboard-text="DG().ZRAktDV().Monat().SVTageUE"}                   | Anzahl der abgerechneten SV-Tage der Urlaubsersatzleistung (aktives Dienstverhältnis)   |
| `DG().ZRAktDV().Monat().LStTage`{data-clipboard-text="DG().ZRAktDV().Monat().LStTage"}                     | Anzahl der abgerechneten Lohnsteuertage                                                 |
| `DG().ZRAktDV().Monat().SVTage`{data-clipboard-text="DG().ZRAktDV().Monat().SVTage"}                       | Anzahl der abgerechneten SV-Tage                                                        |
| `DG().ZRAktDV().Monat().SVTageKuerzungEFZ`{data-clipboard-text="DG().ZRAktDV().Monat().SVTageKuerzungEFZ"} | Anzahl der abgerechneten Tage Kürzung EFZ                                               |
| `DG().ZRAktDV().Monat().SVTageKÜ`{data-clipboard-text="DG().ZRAktDV().Monat().SVTageKÜ"}                   | Anzahl abgerechneter SV-Tage der Kündigungsentschädigung                                |
| `DG().ZRAktDV().Monat().SVTageUE`{data-clipboard-text="DG().ZRAktDV().Monat().SVTageUE"}                   | Anzahl der abgerechneten SV-Tage der Urlaubsersatzleistung                              |

#### Überstunden

| **Formel**                                                                                     | **Beschreibung**                                                |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `DG().Üst_Alle().Monat().Monat`{data-clipboard-text="DG().Üst_Alle().Monat().Monat"}           | Zeigt den ausgewählten Monat an                                 |
| `DG().Üst_Alle().Monat().Wert`{data-clipboard-text="DG().Üst_Alle().Monat().Wert"}             | Wert der Überstunden                                            |
| `DG().Üst_Alle().Name`{data-clipboard-text="DG().Üst_Alle().Name"}                             | Name der ausgewählten Überstundenart                            |
| `DG().Üst_Alle().Nummer`{data-clipboard-text="DG().Üst_Alle().Nummer"}                         | Nummer der ausgewählten Überstundenart                          |
| `DG().Üst_AlleAktDV().Monat().Monat`{data-clipboard-text="DG().Üst_AlleAktDV().Monat().Monat"} | Zeigt das ausgewählte Monat an                                  |
| `DG().Üst_AlleAktDV().Monat().Wert`{data-clipboard-text="DG().Üst_AlleAktDV().Monat().Wert"}   | Wert der Überstunden (aktives Dienstverhältnis)                 |
| `DG().Üst_AlleAktDV().Name`{data-clipboard-text="DG().Üst_AlleAktDV().Name"}                   | Name der ausgewählten Überstundenart                            |
| `DG().Üst_AlleAktDV().Nummer`{data-clipboard-text="DG().Üst_AlleAktDV().Nummer"}               | Nummer der ausgewählten Überstundenart                          |
| `DG().Üst_Wk().Monat().Monat`{data-clipboard-text="DG().Üst_Wk().Monat().Monat"}               | Zeigt das ausgewählte Monat an                                  |
| `DG().Üst_Wk().Monat().Wert`{data-clipboard-text="DG().Üst_Wk().Monat().Wert"}                 | Wert der wiederkehrenden Überstunden                            |
| `DG().Üst_Wk().Name`{data-clipboard-text="DG().Üst_Wk().Name"}                                 | Name der wiederkehrenden Überstundenart                         |
| `DG().Üst_Wk().Nummer`{data-clipboard-text="DG().Üst_Wk().Nummer"}                             | Nummer der wiederkehrenden Überstundenart                       |
| `DG().Üst_WkAktDV().Monat().Monat`{data-clipboard-text="DG().Üst_WkAktDV().Monat().Monat"}     | Zeigt das ausgewählte Monat an                                  |
| `DG().Üst_WkAktDV().Monat().Wert`{data-clipboard-text="DG().Üst_WkAktDV().Monat().Wert"}       | Wert der wiederkehrenden Überstunden (aktives Dienstverhältnis) |
| `DG().Üst_WkAktDV().Name`{data-clipboard-text="DG().Üst_WkAktDV().Name"}                       | Name der wiederkehrenden Überstundenart                         |
| `DG().Üst_WkAktDV().Nummer`{data-clipboard-text="DG().Üst_WkAktDV().Nummer"}                   | Nummer der wiederkehrenden Überstundenart                       |

### Dienstnehmer

#### Allgemein

| **Formel**                                                                                                   | **Beschreibung**                                                      |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| `DN().Monat().Abgerechnet`{data-clipboard-text="DN().Monat().Abgerechnet"}                                   | Gibt an, ob der Monat abgerechnet ist – Wahr/Falsch                   |
| `DN().Monat().Jahr`{data-clipboard-text="DN().Monat().Jahr"}                                                 | Zeigt das aktuelle Jahr an                                            |
| `DN().Monat().Monat`{data-clipboard-text="DN().Monat().Monat"}                                               | Zeigt den ausgewählten Monat an                                       |
| `DN().Monat().MonatJahr`{data-clipboard-text="DN().Monat().MonatJahr"}                                       | Zeigt den ausgewählten Monat und das Jahr an                          |
| `DN().Monat().MonatKurz`{data-clipboard-text="DN().Monat().MonatKurz"}                                       | Monat in Kurzform – z. B. „Feb“                                       |
| `DN().Monat().MonatNr`{data-clipboard-text="DN().Monat().MonatNr"}                                           | Nummer des Monats – z. B. „4“ für April                               |
| `DN().Monat().UDG`{data-clipboard-text="DN().Monat().UDG"}                                                   | Nummer des Unterdienstgebers für den ausgewählten Monat               |
| `DN().Monat().NurAufrollung`{data-clipboard-text="DN().Monat().NurAufrollung"}                               | Gibt an, ob der Monat nur aufgerollt wurde – Wahr/Falsch              |
| `DN().Monat().NurMvBemKrankheit`{data-clipboard-text="DN().Monat().NurMvBemKrankheit"}                       | Nur mit MV-Bemessung Krankheit abgerechnet – Wahr/Falsch              |
| `DN().Monat().NurMvBemMutterschutz`{data-clipboard-text="DN().Monat().NurMvBemMutterschutz"}                 | Nur mit MV-Bemessung Mutterschutz abgerechnet – Wahr/Falsch           |
| `DN().Monat().NurMvBemPraesenzdienst`{data-clipboard-text="DN().Monat().NurMvBemPraesenzdienst"}             | Nur mit MV-Bemessung Präsenzdienst abgerechnet – Wahr/Falsch          |
| `DN().Monat().NurSvBemessung`{data-clipboard-text="DN().Monat().NurSvBemessung"}                             | Nur mit SV-Bemessung abgerechnet – Wahr/Falsch                        |
| `DN().ZR().AktuellesMonat`{data-clipboard-text="DN().ZR().AktuellesMonat"}                                   | Zeigt den aktuellen Monat in Zahlen an                                |
| `DN().ZRAktDV().AktuellesMonat`{data-clipboard-text="DN().ZRAktDV().AktuellesMonat"}                         | Zeigt den aktuellen Monat des aktiven Dienstverhältnisses als Zahl an |
| `DN().ZR().JahreEintritt`{data-clipboard-text="DN().ZR().JahreEintritt"}                                     | Zeigt die Anzahl der Jahre seit  Eintritt an                          |
| `DN().ZRAktDV().JahreEintritt`{data-clipboard-text="DN().ZRAktDV().JahreEintritt"}                           | Anzahl der Jahre seit Eintritt (aktives Dienstverhältnis)             |
| `DN().ZR().MonateEintritt`{data-clipboard-text="DN().ZR().MonateEintritt"}                                   | Zeigt die Anzahl der Monate seit Eintritt an                          |
| `DN().ZRAktDV().MonateEintritt`{data-clipboard-text="DN().ZRAktDV().MonateEintritt"}                         | Anzahl der Monate seit Eintritt (aktives Dienstverhältnis)            |
| `DN().ZR().TageEintritt`{data-clipboard-text="DN().ZR().TageEintritt"}                                       | Zeigt die Anzahl der Tage seit Eintritt an                            |
| `DN().ZRAktDV().TageEintritt`{data-clipboard-text="DN().ZRAktDV().TageEintritt"}                             | Anzahl der Tage seit Eintritt (aktives Dienstverhältnis)              |
| `DN().ZR().TageKalenderjahr`{data-clipboard-text="DN().ZR().TageKalenderjahr"}                               | Anzahl der Kalendertage des Jahres                                    |
| `DN().ZRAktDV().TageKalenderjahr`{data-clipboard-text="DN().ZRAktDV().TageKalenderjahr"}                     | Anzahl der Kalendertage des Jahres (aktives Dienstverhältnis)         |
| `DN().ZR().TageSZ`{data-clipboard-text="DN().ZR().TageSZ"}                                                   | Kalendertage des Jahres für Sonderzahlung                             |
| `DN().ZRAktDV().TageSZ`{data-clipboard-text="DN().ZRAktDV().TageSZ"}                                         | Kalendertage des Jahres für Sonderzahlung (aktives Dienstverhältnis)  |
| `DN().ZR().Monat().AnzahlAbrechnungen`{data-clipboard-text="DN().ZR().Monat().AnzahlAbrechnungen"}           | Anzahl der Abrechnungen im Monat                                      |
| `DN().ZRAktDV().Monat().AnzahlAbrechnungen`{data-clipboard-text="DN().ZRAktDV().Monat().AnzahlAbrechnungen"} | Anzahl der Abrechnungen im Monat (aktives Dienstverhältnis)           |

#### Stammdaten

| **Formel**                                                                         | **Beschreibung**                                                      |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `DN().UDG`{data-clipboard-text="DN().UDG"}                                         | Nummer des UDG                                                        |
| `DN().Nummer`{data-clipboard-text="DN().Nummer"}                                   | Nummer des Dienstnehmers                                              |
| `DN().Nachname`{data-clipboard-text="DN().Nachname"}                               | Nachname des Dienstnehmers                                            |
| `DN().Vorname`{data-clipboard-text="DN().Vorname"}                                 | Vorname des Dienstnehmers                                             |
| `DN().Name`{data-clipboard-text="DN().Name"}                                       | Gibt den kompletten Namen mit den Titeln aus                          |
| `DN().NameAlt`{data-clipboard-text="DN().NameAlt"}                                 | Ist der frühere Name des Dienstnehmers                                |
| `DN().Titel1`{data-clipboard-text="DN().Titel1"}                                   | Titel des Dienstnehmers 🡪 Akademischer Grad                           |
| `DN().Titel2`{data-clipboard-text="DN().Titel2"}                                   | Titel des Dienstnehmers 🡪 Akademischer Grad2                          |
| `DN().Strasse`{data-clipboard-text="DN().Strasse"}                                 | Straße des Dienstnehmers                                              |
| `DN().Land`{data-clipboard-text="DN().Land"}                                       | Länderkennzeichen des Dienstnehmers                                   |
| `DN().PLZ`{data-clipboard-text="DN().PLZ"}                                         | Postleitzahl des Dienstnehmers                                        |
| `DN().Ort`{data-clipboard-text="DN().Ort"}                                         | Ort des Dienstnehmers                                                 |
| `DN().Telefon`{data-clipboard-text="DN().Telefon"}                                 | Telefonnummer des Dienstnehmers                                       |
| `DN().EMail`{data-clipboard-text="DN().EMail"}                                     | E-Mail-Adresse des Dienstnehmers                                      |
| `DN().Passwort`{data-clipboard-text="DN().Passwort"}                               | Passwort des Dienstnehmers für PDF's                                  |
| `DN().DnKliportal`{data-clipboard-text="DN().DnKliportal"}                         | Option Dienstnehmer am Klientenportal anlegen aktiviert (Wahr/Falsch) |
| `DN().SvNummer`{data-clipboard-text="DN().SvNummer"}                               | SV-Nummer des Dienstnehmers                                           |
| `DN().GebDatum`{data-clipboard-text="DN().GebDatum"}                               | Geburtsdatum des Dienstnehmers                                        |
| `DN().Geschlecht`{data-clipboard-text="DN().Geschlecht"}                           | Wert im Feld „Geschlecht"                                             |
| `DN().FamStand`{data-clipboard-text="DN().FamStand"}                               | Wert im Feld „Familienstand"                                          |
| `DN().Staat`{data-clipboard-text="DN().Staat"}                                     | Staatsangehörigkeit des Dienstnehmers                                 |
| `DN().NummerExtern`{data-clipboard-text="DN().NummerExtern"}                       | Externe DN-Nummer                                                     |
| `DN().Beruf`{data-clipboard-text="DN().Beruf"}                                     | Beruf des Dienstnehmers                                               |
| `DN().DienstortLand`{data-clipboard-text="DN().DienstortLand"}                     | Länderkennzeichen des Dienstortes                                     |
| `DN().DienstortPLZ`{data-clipboard-text="DN().DienstortPLZ"}                       | Postleitzahl des Dienstortes                                          |
| `DN().Dienstort`{data-clipboard-text="DN().Dienstort"}                             | Ort des Dienstortes                                                   |
| `DN().Monat().ArbeitsstätteNr`{data-clipboard-text="DN().Monat().ArbeitsstätteNr"} | Nummer der Arbeitsstätte                                              |
| `DN().BankLand`{data-clipboard-text="DN().BankLand"}                               | Länderkennzeichen der Bank des Dienstnehmers                          |
| `DN().Bank`{data-clipboard-text="DN().Bank"}                                       | Name der Bank des Dienstnehmers                                       |
| `DN().BLZ`{data-clipboard-text="DN().BLZ"}                                         | Bankleitzahl des Dienstnehmers                                        |
| `DN().KontoNr`{data-clipboard-text="DN().KontoNr"}                                 | Kontonummer des Dienstnehmers                                         |
| `DN().IBAN`{data-clipboard-text="DN().IBAN"}                                       | IBAN des Dienstnehmers                                                |
| `DN().BIC`{data-clipboard-text="DN().BIC"}                                         | BIC des Dienstnehmers                                                 |
| `DN().DgBank`{data-clipboard-text="DN().DgBank"}                                   | Nummer der ausgewählten DG-Bank beim DN                               |
| `DN().Partner`{data-clipboard-text="DN().Partner"}                                 | Name des (Ehe)Partners                                                |
| `DN().PartnerSvNr`{data-clipboard-text="DN().PartnerSvNr"}                         | Erste vier Stellen der SV-Nummer des (Ehe)Partners                    |
| `DN().PartnerGebDat`{data-clipboard-text="DN().PartnerGebDat"}                     | Geburtsdatum des (Ehe)Partners                                        |
| `DN().PartnerUnterhalt`{data-clipboard-text="DN().PartnerUnterhalt"}               | Unterhalt beim Ehepartner aktiviert (Wahr/Falsch)                     |
| `DN().Kind().Name`{data-clipboard-text="DN().Kind().Name"}                         | Name des Kindes                                                       |
| `DN().Kind().SvNummer`{data-clipboard-text="DN().Kind().SvNummer"}                 | SV-Nummer des Kindes (ersten vier Stellen)                            |
| `DN().Kind().GebDatum`{data-clipboard-text="DN().Kind().GebDatum"}                 | Geburtsdatum des Kindes                                               |
| `DN().Kind().Unterhalt`{data-clipboard-text="DN().Kind().Unterhalt"}               | Unterhalt bei Kind aktiviert (Wahr/Falsch)                            |
| `DN().Kind().Para106`{data-clipboard-text="DN().Kind().Para106"}                   | Kind § 106 beim Kind aktiviert (Wahr/Falsch)                          |

#### Stammdaten Fristen

| **Formel**                                                                           | **Beschreibung**                                      |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| `DN().Monat().Aliquotierung`{data-clipboard-text="DN().Monat().Aliquotierung"}       | Aliquotierung aktiviert - Wahr/Falsch                 |
| `DN().Monat().BuchungskreisNr`{data-clipboard-text="DN().Monat().BuchungskreisNr"}   | Nummer des Buchungskreises                            |
| `DN().Monat().Auswahlkriterium`{data-clipboard-text="DN().Monat().Auswahlkriterium"} | Nummer des Auswahlkriterium                           |
| `DN().Auswahlkriterium`{data-clipboard-text="DN().Auswahlkriterium"}                 | Nummer des Auswahlkriterium                           |
| `DN().Monat().KeineAuszahlung`{data-clipboard-text="DN().Monat().KeineAuszahlung"}   | Keine Auszahlung aktiviert - Wahr/Falsch              |
| `DN().Monat().Zahltag`{data-clipboard-text="DN().Monat().Zahltag"}                   | Datum im Feld „Zahltag Abrechnung“                    |
| `DN().Monat().LFZTabellenNr`{data-clipboard-text="DN().Monat().LFZTabellenNr"}       | Nummer der zugeordneten Lohnformel-Zuordnungstabelle  |
| `DN().EndeArbBew`{data-clipboard-text="DN().EndeArbBew"}                             | Datum für Ende der Arbeitsbewilligung                 |
| `DN().Monat().Behinderung`{data-clipboard-text="DN().Monat().Behinderung"}           | Feld begünstigter Behinderter aktiviert (Wahr/Falsch) |
| `DN().Anmerkung().Datum`{data-clipboard-text="DN().Anmerkung().Datum"}               | Stichtag der Anmerkung                                |
| `DN().Anmerkung().Text`{data-clipboard-text="DN().Anmerkung().Text"}                 | Text der Anmerkung                                    |
| `DN().Abrechnungstext().Von`{data-clipboard-text="DN().Abrechnungstext().Von"}       | Von-Datum für Abrechnungs-Texte                       |
| `DN().Abrechnungstext().Bis`{data-clipboard-text="DN().Abrechnungstext().Bis"}       | Bis-Datum für Abrechnungs-Texte                       |
| `DN().Abrechnungstext().Text`{data-clipboard-text="DN().Abrechnungstext().Text"}     | Abrechnungs-Text                                      |

#### Eintritt

| **Formel**                                                                                       | **Beschreibung**                                                                    |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| `DN().Monat().Eintritt`{data-clipboard-text="DN().Monat().Eintritt"}                             | Eintrittsdatum des Dienstnehmer                                                     |
| `DN().Ersteintritt`{data-clipboard-text="DN().Ersteintritt"}                                     | Ersteintrittsdatum des Dienstnehmer                                                 |
| `DN().Monat().BeschäftigtInWo`{data-clipboard-text="DN().Monat().BeschäftigtInWo"}               | Anzahl der Tage beschäftigt in der Woche                                            |
| `DN().Monat().Arbeitsstunden`{data-clipboard-text="DN().Monat().Arbeitsstunden"}                 | Anzahl der Stunden pro Tag                                                          |
| `DN().Monat().Wochenstunden`{data-clipboard-text="DN().Monat().Wochenstunden"}                   | Anzahl der Stunden pro Woche                                                        |
| `DN().Monat().ArbeitstagMo`{data-clipboard-text="DN().Monat().ArbeitstagMo"}                     | Arbeitstag Montag aktiviert (Wahr/Falsch)                                           |
| `DN().Monat().ArbeitstagDi`{data-clipboard-text="DN().Monat().ArbeitstagDi"}                     | Arbeitstag Dienstag aktiviert (Wahr/Falsch)                                         |
| `DN().Monat().ArbeitstagMi`{data-clipboard-text="DN().Monat().ArbeitstagMi"}                     | Arbeitstag Mittwoch aktiviert (Wahr/Falsch)                                         |
| `DN().Monat().ArbeitstagDo`{data-clipboard-text="DN().Monat().ArbeitstagDo"}                     | Arbeitstag Donnerstag aktiviert (Wahr/Falsch)                                       |
| `DN().Monat().ArbeitstagFr`{data-clipboard-text="DN().Monat().ArbeitstagFr"}                     | Arbeitstag Freitag aktiviert (Wahr/Falsch)                                          |
| `DN().Monat().ArbeitstagSa`{data-clipboard-text="DN().Monat().ArbeitstagSa"}                     | Arbeitstag Samstag aktiviert (Wahr/Falsch)                                          |
| `DN().Monat().ArbeitstagSo`{data-clipboard-text="DN().Monat().ArbeitstagSo"}                     | Arbeitstag Sonntag aktiviert (Wahr/Falsch)                                          |
| `DN().Monat().ArbeitstageAnz`{data-clipboard-text="DN().Monat().ArbeitstageAnz"}                 | Anzahl der aktivierten Arbeitstage                                                  |
| `DN().Monat().Teilzeit`{data-clipboard-text="DN().Monat().Teilzeit"}                             | Beschäftigungsverhältnis Teilzeit aktiviert (Wahr/Falsch)                           |
| `DN().Monat().Gesetz`{data-clipboard-text="DN().Monat().Gesetz"}                                 | Ausgewähltes Gesetz, welches das Arbeitsverhältnis unterliegt                       |
| `DN().Monat().BefristungBis`{data-clipboard-text="DN().Monat().BefristungBis"}                   | Datum der Befristung des DV - wenn vorhanden                                        |
| `DN().Monat().DvParallel`{data-clipboard-text="DN().Monat().DvParallel"}                         | Paralleles Beschäftigungsverhältnis beim selben Arbeitgeber aktiviert (Wahr/Falsch) |
| `DN().Monat().MVPflicht`{data-clipboard-text="DN().Monat().MVPflicht"}                           | MV-Beitragspflicht aktiviert (Wahr/Falsch)                                          |
| `DN().Monat().BeginnMv`{data-clipboard-text="DN().Monat().BeginnMv"}                             | Datum des Beginn der MV-Pflicht                                                     |
| `DN().LehrzeitBeginn`{data-clipboard-text="DN().LehrzeitBeginn"}                                 | Beginn der Lehrzeit                                                                 |
| `DN().LehrzeitEnde`{data-clipboard-text="DN().LehrzeitEnde"}                                     | Ende der Lehrzeit                                                                   |
| `DN().EndeErstesLj`{data-clipboard-text="DN().EndeErstesLj"}                                     | Ende des ersten Lehrjahres                                                          |
| `DN().Lehrabschlussprüfung`{data-clipboard-text="DN().Lehrabschlussprüfung"}                     | Datum der Lehrabschlussprüfung                                                      |
| `DN().Lehrlingsfreibetrag`{data-clipboard-text="DN().Lehrlingsfreibetrag"}                       | Lehrlingsfreibetrag aktiviert (Wahr/Falsch)                                         |
| `DN().Monat().BetragAnmeldungAbw`{data-clipboard-text="DN().Monat().BetragAnmeldungAbw"}         | Abweichender Betrag für die Anmeldung                                               |
| `DN().MitKlientVerwandt`{data-clipboard-text="DN().MitKlientVerwandt"}                           | DN mit DG verwandt (Wahr/Falsch)                                                    |
| `DN().Verwandtschaftsgrad`{data-clipboard-text="DN().Verwandtschaftsgrad"}                       | Art des Verwandtschaftsgrades                                                       |
| `DN().MitKlientVerheiratet`{data-clipboard-text="DN().MitKlientVerheiratet"}                     | DN mit DG verheiratet (Wahr/Falsch)                                                 |
| `DN().Monat().AngNachTabak`{data-clipboard-text="DN().Monat().AngNachTabak"}                     | Angehöriger nach Tabakmonopolgesetz aktiviert (Wahr/Falsch)                         |
| `DN().AnFirmaBeteiligt`{data-clipboard-text="DN().AnFirmaBeteiligt"}                             | DN an Firma beteiligt aktiviert (Wahr/Falsch)                                       |
| `DN().ArtBeteiligung`{data-clipboard-text="DN().ArtBeteiligung"}                                 | Art der Beteiligung                                                                 |
| `DN().Monat().SachBezTageProWoche`{data-clipboard-text="DN().Monat().SachBezTageProWoche"}       | Anzahl der Tage für den Sachbezug                                                   |
| `DN().Monat().SachBezFreieStation`{data-clipboard-text="DN().Monat().SachBezFreieStation"}       | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| `DN().Monat().SachBezVerpflegung`{data-clipboard-text="DN().Monat().SachBezVerpflegung"}         | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| `DN().Monat().SachBezFruehstueck1`{data-clipboard-text="DN().Monat().SachBezFruehstueck1"}       | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| `DN().Monat().SachBezFruehstueck2`{data-clipboard-text="DN().Monat().SachBezFruehstueck2"}       | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| `DN().Monat().SachBezMittagessen`{data-clipboard-text="DN().Monat().SachBezMittagessen"}         | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| `DN().Monat().SachBezJause`{data-clipboard-text="DN().Monat().SachBezJause"}                     | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| `DN().Monat().SachBezAbendessen`{data-clipboard-text="DN().Monat().SachBezAbendessen"}           | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| `DN().Monat().SachBezWohnung`{data-clipboard-text="DN().Monat().SachBezWohnung"}                 | Art des Sachbezuges aktiviert (Wahr/Falsch)                                         |
| `DN().Monat().VorbezugBemSvSz`{data-clipboard-text="DN().Monat().VorbezugBemSvSz"}               | Vorbezüge - Verbrauch Bemessungsgrundlage SV-SZ                                     |
| `DN().Monat().VorbezugSvKz225`{data-clipboard-text="DN().Monat().VorbezugSvKz225"}               | Vorbezüge - bisherige SV KZ 225                                                     |
| `DN().Monat().VorbezugSz`{data-clipboard-text="DN().Monat().VorbezugSz"}                         | Vorbezüge - bisherige Sonderzahlung                                                 |
| `DN().Monat().VorbezugSzOhneFesteLSt`{data-clipboard-text="DN().Monat().VorbezugSzOhneFesteLSt"} | Vorbezüge - ohne feste Lohnsteuer                                                   |
| `DN().Monat().VorbezugBrutto`{data-clipboard-text="DN().Monat().VorbezugBrutto"}                 | Vorbezüge - bisheriger Brutto-Lohn                                                  |
| `DN().VorbezugBemLStVj`{data-clipboard-text="DN().VorbezugBemLStVj"}                             | Vorbezüge - Vorjahres-Bemessungsgrundlage                                           |
| `DN().Monat().KuerzerEinMonat`{data-clipboard-text="DN().Monat().KuerzerEinMonat"}               | DV kürzer als ein Monat vereinbart aktiviert (Wahr/Falsch)                          |
| `DN().ArbeitslosGemeldet`{data-clipboard-text="DN().ArbeitslosGemeldet"}                         | Beschäftigungsbonus - Arbeitslos gemeldet aktiviert (Wahr/Falsch)                   |
| `DN().BeschaeftigtAb`{data-clipboard-text="DN().BeschaeftigtAb"}                                 | Beschäftigungsbonus - Beschäftigt ab                                                |
| `DN().BeschaeftigtBis`{data-clipboard-text="DN().BeschaeftigtBis"}                               | Beschäftigungsbonus - Beschäftigt bis                                               |
| `DN().Bildungsabgaenger`{data-clipboard-text="DN().Bildungsabgaenger"}                           | Beschäftigungsbonus - Bildungsabgänger aktiviert (Wahr/Falsch)                      |
| `DN().Foerderungen`{data-clipboard-text="DN().Foerderungen"}                                     | Beschäftigungsbonus - Förderungen                                                   |
| `DN().Jobwechsler`{data-clipboard-text="DN().Jobwechsler"}                                       | Beschäftigungsbonus - Jobwechsler aktiviert (Wahr/Falsch)                           |
| `DN().MonatsentgeltBrutto`{data-clipboard-text="DN().MonatsentgeltBrutto"}                       | Beschäftigungsbonus - Monatsentgelt Brutto                                          |
| `DN().SaisonaleBeschaeftigung`{data-clipboard-text="DN().SaisonaleBeschaeftigung"}               | Beschäftigungsbonus - Saisonale Beschäftigung (Wahr/Falsch)                         |
| `DN().mBGMHauptdienstnehmer`{data-clipboard-text="DN().mBGMHauptdienstnehmer"}                   | mBGM Hauptdienstnehmer                                                              |

#### Kollektivvertrag

| **Formel**                                                                                                       | **Beschreibung**                                             |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `DN().Monat().KV().Nummer`                                                                                       | Nummer des Kollektivvertrages                                |
| `DN().Monat().KV().Name`{data-clipboard-text="DN().Monat().KV().Name"}                                           | Name des Kollektivvertrages                                  |
| `DN().Monat().KV().EinstufungBeg`{data-clipboard-text="DN().Monat().KV().EinstufungBeg"}                         | Beginn der Einstufung                                        |
| `DN().Monat().KV().Vordienstzeit`{data-clipboard-text="DN().Monat().KV().Vordienstzeit"}                         | Anzahl der Monate der Vordienstzeiten                        |
| `DN().Monat().KV().Taetigkeitsgruppe`{data-clipboard-text="DN().Monat().KV().Taetigkeitsgruppe"}                 | Name der aktuellen Tätigkeitsgruppe                          |
| `DN().Monat().KV().TaetigkeitsgruppeNr`{data-clipboard-text="DN().Monat().KV().TaetigkeitsgruppeNr"}             | Interne Nummer der aktuellen Tätigkeitsgruppe                |
| `DN().Monat().KV().Gruppenwechsel`{data-clipboard-text="DN().Monat().KV().Gruppenwechsel"}                       | Datum des letzten Gruppenwechsels                            |
| `DN().Monat().KV().LetzteTaetigkeitsgruppe`{data-clipboard-text="DN().Monat().KV().LetzteTaetigkeitsgruppe"}     | Name der letzten Tätigkeitsgruppe                            |
| `DN().Monat().KV().LetzteTaetigkeitsgruppeNr`{data-clipboard-text="DN().Monat().KV().LetzteTaetigkeitsgruppeNr"} | Interne Nummer der letzten Tätigkeitsgruppe                  |
| `DN().Monat().KV().Stufe`{data-clipboard-text="DN().Monat().KV().Stufe"}                                         | Zeigt die aktuelle Stufe des KV an                           |
| `DN().Monat().KV().Dienstjahre`{data-clipboard-text="DN().Monat().KV().Dienstjahre"}                             | Zeigt das aktuelle Dienstjahr                                |
| `DN().Monat().KV().StufeKuerzung`{data-clipboard-text="DN().Monat().KV().StufeKuerzung"}                         | Anzahl der Monate, um die die Stufe gekürzt wird             |
| `DN().Monat().KV().Vorrueckung`{data-clipboard-text="DN().Monat().KV().Vorrueckung"}                             | Zeigt das Datum der nächsten Vorrückung an                   |
| `DN().Monat().KV().Stundensatz`{data-clipboard-text="DN().Monat().KV().Stundensatz"}                             | Stundensatz laut Kollektivvertrag                            |
| `DN().Monat().KV().Bezug`{data-clipboard-text="DN().Monat().KV().Bezug"}                                         | Bezug laut Kollektivvertrag                                  |
| `DN().Monat().KV().HochrechnungsfaktorAbw`{data-clipboard-text="DN().Monat().KV().HochrechnungsfaktorAbw"}       | Wert des abweichenden Hochrechnungsfaktors                   |
| `DN().Monat().KV().NAZ`{data-clipboard-text="DN().Monat().KV().NAZ"}                                             | Normalarbeitszeit laut Kollektivvertrag                      |
| `DN().Monat().KV().BezugAliquot`{data-clipboard-text="DN().Monat().KV().BezugAliquot"}                           | Wert des aliquoten Kollektivvertrags-Bezugs                  |
| `DN().Monat().KV().UeberzahlungVm`{data-clipboard-text="DN().Monat().KV().UeberzahlungVm"}                       | Wert der Überzahlung im Vormonat                             |
| `DN().Monat().KV().UeberzahlungVmPorz`{data-clipboard-text="DN().Monat().KV().UeberzahlungVmPorz"}               | Prozent der Überzahlung im Vormonat                          |
| `DN().Monat().KV().Reformbetrag1`{data-clipboard-text="DN().Monat().KV().Reformbetrag1"}                         | Wert des Reformbetrag 1                                      |
| `DN().Monat().KV().Reformbetrag1Vm`{data-clipboard-text="DN().Monat().KV().Reformbetrag1Vm"}                     | Wert des Reformbetrag 1 im Vormonat                          |
| `DN().Monat().KV().TeilerAbw`{data-clipboard-text="DN().Monat().KV().TeilerAbw"}                                 | Abweichender Stundenteiler bei Teilzeit                      |
| `DN().Monat().KV().ZuAbschlagBezug`{data-clipboard-text="DN().Monat().KV().ZuAbschlagBezug"}                     | Abweichender Zu-/Abschlag KV-Bezug                           |
| `DN().Monat().KV().Ueberzahlung`{data-clipboard-text="DN().Monat().KV().Ueberzahlung"}                           | Überzahlung beibehalten aktiviert (Wahr/Falsch)              |
| `DN().Monat().KV().UeberzahlungBiennal`{data-clipboard-text="DN().Monat().KV().UeberzahlungBiennal"}             | Überzahlung bei Biennalsprung beibehalten (Wahr/Falsch)      |
| `DN().Monat().KV().UeberzahlungProz`{data-clipboard-text="DN().Monat().KV().UeberzahlungProz"}                   | Prozentuelle Überzahlung beibehalten aktiviert (Wahr/Falsch) |
| `DN().KVAlt`{data-clipboard-text="DN().KVAlt"}                                                                   | Name des KV, wenn HGKV-DB nicht aktiviert                    |
| `DN().Monat().KVAltStundensatz`{data-clipboard-text="DN().Monat().KVAltStundensatz"}                             | Stundensatz lt. KV, wenn HGKV-DB nicht aktiviert             |
| `DN().Monat().KVAltBezug`{data-clipboard-text="DN().Monat().KVAltBezug"}                                         | Bezug lt. KV, wenn HGKV-DB nicht aktiviert                   |

#### Austritt

| **Formel**                                                                                                 | **Beschreibung**                                                        |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `DN().Monat().Austritt`{data-clipboard-text="DN().Monat().Austritt"}                                       | Datum des Austrittes                                                    |
| `DN().Monat().Austrittsgrund`{data-clipboard-text="DN().Monat().Austrittsgrund"}                           | Grund des Austrittes                                                    |
| `DN().Monat().AustrittsgrundBuak`{data-clipboard-text="DN().Monat().AustrittsgrundBuak"}                   | Grund des Austrittes für die BUAK                                       |
| `DN().Monat().EndeEntgelt`{data-clipboard-text="DN().Monat().EndeEntgelt"}                                 | Datum bei Ende des Entgeltsanspruches                                   |
| `DN().Monat().BezahltBis`{data-clipboard-text="DN().Monat().BezahltBis"}                                   | Ende Entgeltsanspruch - Datum „bezahlt bis"                             |
| `DN().Monat().AnspruchSZ`{data-clipboard-text="DN().Monat().AnspruchSZ"}                                   | Anzahl der Monate für Anspruch Sonderzahlung                            |
| `DN().Monat().Aufloesungsabgabe`{data-clipboard-text="DN().Monat().Aufloesungsabgabe"}                     | Auflösungsabgabe aktiviert (Wahr/Falsch)                                |
| `DN().KarenzurlaubVon`{data-clipboard-text="DN().KarenzurlaubVon"}                                         | Datum des Beginns des Karenzurlaubes                                    |
| `DN().KarenzurlaubBis`{data-clipboard-text="DN().KarenzurlaubBis"}                                         | Datum des Endes des Karenzurlaubes                                      |
| `DN().Monat().EndeMv`{data-clipboard-text="DN().Monat().EndeMv"}                                           | Datum für das Ende der MV-Beitragspflicht                               |
| `DN().Monat().BetragAbmeldungAbw`{data-clipboard-text="DN().Monat().BetragAbmeldungAbw"}                   | Abweichender Betrag für die Abmeldung                                   |
| `DN().Monat().KUEVon`{data-clipboard-text="DN().Monat().KUEVon"}                                           | Datum des Beginns der Kündigungsentschädigung                           |
| `DN().Monat().KUEBis`{data-clipboard-text="DN().Monat().KUEBis"}                                           | Datum des Endes der Kündigungsentschädigung                             |
| `DN().ZR().Monat().SVTageKÜ`{data-clipboard-text="DN().ZR().Monat().SVTageKÜ"}                             | Anzahl der SV-Tage der Kündigungsentschädigung                          |
| `DN().ZR().Monat().TageKÜ`{data-clipboard-text="DN().ZR().Monat().TageKÜ"}                                 | Kalendertage der Kündigungsentschädigung                                |
| `DN().ZRAktDV().Monat().TageKÜ`{data-clipboard-text="DN().ZRAktDV().Monat().TageKÜ"}                       | Kalendertage der Kündigungsentschädigung (aktives Dienstverhältnis)     |
| `DN().Monat().UEVon`{data-clipboard-text="DN().Monat().UEVon"}                                             | Datum des Beginns der Urlaubsersatzleistung                             |
| `DN().Monat().UEBis`{data-clipboard-text="DN().Monat().UEBis"}                                             | Datum des Endes der Urlaubsersatzleistung                               |
| `DN().ZR().Monat().SVTageUE`{data-clipboard-text="DN().ZR().Monat().SVTageUE"}                             | Anzahl der SV-Tage der Urlaubsersatzleistung                            |
| `DN().ZR().Monat().TageUE`{data-clipboard-text="DN().ZR().Monat().TageUE"}                                 | Kalendertage der Urlaubsersatzleistung                                  |
| `DN().ZRAktDV().Monat().TageUE`{data-clipboard-text="DN().ZRAktDV().Monat().TageUE"}                       | Kalendertage der Urlaubsersatzleistung (aktives Dienstverhältnis)       |
| `DN().ZR().Monat().TageUEExakt`{data-clipboard-text="DN().ZR().Monat().TageUEExakt"}                       | Kalendertage der Urlaubsersatzleistung exakt                            |
| `DN().ZRAktDV().Monat().TageUEExakt`{data-clipboard-text="DN().ZRAktDV().Monat().TageUEExakt"}             | Kalendertage der Urlaubsersatzleistung exakt (aktives Dienstverhältnis) |
| `DN().Monat().UnterbrechnungVon`{data-clipboard-text="DN().Monat().UnterbrechnungVon"}                     | Beginn der Unterbrechung der Beschäftigung                              |
| `DN().Monat().UnterbrechnungBis`{data-clipboard-text="DN().Monat().UnterbrechnungBis"}                     | Ende der Unterbrechung der Beschäftigung                                |
| `DN().Monat().UnterbrechnungGrund`{data-clipboard-text="DN().Monat().UnterbrechnungGrund"}                 | Grund der Unterbrechung der Beschäftigung                               |
| `DN().Monat().TeilzeitVon`{data-clipboard-text="DN().Monat().TeilzeitVon"}                                 | Datum des Beginns der Teilzeitbeschäftigung                             |
| `DN().Monat().TeilzeitBis`{data-clipboard-text="DN().Monat().TeilzeitBis"}                                 | Datum des Endes der Teilzeitbeschäftigung                               |
| `DN().Monat().HospizkarenzBeginn`{data-clipboard-text="DN().Monat().HospizkarenzBeginn"}                   | Datum Beginn der Hospizkarenz                                           |
| `DN().Monat().HospizkarenzEnde`{data-clipboard-text="DN().Monat().HospizkarenzEnde"}                       | Datum Ende der Hospizkarenz                                             |
| `DN().Monat().HospizkarenzArt`{data-clipboard-text="DN().Monat().HospizkarenzArt"}                         | Ausgewählter Eintrag bei Art der Karenz                                 |
| `DN().Monat().HospizkarenzEntgeltVor`{data-clipboard-text="DN().Monat().HospizkarenzEntgeltVor"}           | Entgelt vor Hospizkarenz                                                |
| `DN().Monat().HospizkarenzEntgeltWaehrend`{data-clipboard-text="DN().Monat().HospizkarenzEntgeltWaehrend"} | Entgelt während der Hospizkarenz                                        |
| `DN().Arbeitsinspektorat`{data-clipboard-text="DN().Arbeitsinspektorat"}                                   | Arbeitsinspektorat                                                      |
| `DN().ArbeitsplatzTaetigkeit`{data-clipboard-text="DN().ArbeitsplatzTaetigkeit"}                           | Mutterschutzmeldung Arbeitsplatz/Tätigkeit                              |
| `DN().BeginnMutterschutz`{data-clipboard-text="DN().BeginnMutterschutz"}                                   | Beginn Mutterschutz                                                     |
| `DN().EndeMutterschutz`{data-clipboard-text="DN().EndeMutterschutz"}                                       | Ende Mutterschutz                                                       |
| `DN().DienstnehmerGehtInKarenz`{data-clipboard-text="DN().DienstnehmerGehtInKarenz"}                       | Dienstnehmer geht in Karenz aktiviert (Wahr/Falsch)                     |
| `DN().TagDerGeburt`{data-clipboard-text="DN().TagDerGeburt"}                                               | Tag der Geburt                                                          |
| `DN().VerlängerterMutterschutz`{data-clipboard-text="DN().VerlängerterMutterschutz"}                       | Verlängerter Mutterschutz aktiviert (Wahr/Falsch)                       |
| `DN().VoraussichtlicherGeburtstermin`{data-clipboard-text="DN().VoraussichtlicherGeburtstermin"}           | Voraussichtlicher Geburtstermin                                         |

#### Lohnsteuer

| **Formel**                                                                                                                               | **Beschreibung**                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `DN().Monat().Alleinverdiener`{data-clipboard-text="DN().Monat().Alleinverdiener"}                                                       | Ob Alleinverdiener aktiviert ist (Wahr/Falsch)                                                                     |
| `DN().Monat().Alleinerzieher`{data-clipboard-text="DN().Monat().Alleinerzieher"}                                                         | Ob Alleinerzieher aktiviert ist (Wahr/Falsch)                                                                      |
| `DN().Monat().KinderPar106`{data-clipboard-text="DN().Monat().KinderPar106"}                                                             | Anzahl der Kinder gemäß § 106                                                                                      |
| `DN().Monat().PendlerpauschaleNr`{data-clipboard-text="DN().Monat().PendlerpauschaleNr"}                                                 | Nummer der Pendlerpauschale                                                                                        |
| `DN().Monat().PendlerpauschaleText`{data-clipboard-text="DN().Monat().PendlerpauschaleText"}                                             | Art der Pendlerpauschale (z. B. „klein 20-40 km")                                                                  |
| `DN().Monat().EinfacheFahrtstrecke`{data-clipboard-text="DN().Monat().EinfacheFahrtstrecke"}                                             | Anzahl der Kilometer der einfachen Fahrtstrecke                                                                    |
| `DN().Monat().Werkverkehr`{data-clipboard-text="DN().Monat().Werkverkehr"}                                                               | Werkverkehr/Jobticket aktiviert (Wahr/Falsch)                                                                      |
| `DN().Monat().Firmenfahrzeug`{data-clipboard-text="DN().Monat().Firmenfahrzeug"}                                                         | Firmenfahrzeug aktiviert (Wahr/Falsch)                                                                             |
| `DN().Monat().FahrtagMo`{data-clipboard-text="DN().Monat().FahrtagMo"}                                                                   | Fahrttage Montag aktiviert (Wahr/Falsch)                                                                           |
| `DN().Monat().FahrtagDi`{data-clipboard-text="DN().Monat().FahrtagDi"}                                                                   | Fahrttage Dienstag aktiviert (Wahr/Falsch)                                                                         |
| `DN().Monat().FahrtagMi`{data-clipboard-text="DN().Monat().FahrtagMi"}                                                                   | Fahrttage Mittwoch aktiviert (Wahr/Falsch)                                                                         |
| `DN().Monat().FahrtagDo`{data-clipboard-text="DN().Monat().FahrtagDo"}                                                                   | Fahrttage Donnerstag aktiviert (Wahr/Falsch)                                                                       |
| `DN().Monat().FahrtagFr`{data-clipboard-text="DN().Monat().FahrtagFr"}                                                                   | Fahrttage Freitag aktiviert (Wahr/Falsch)                                                                          |
| `DN().Monat().FahrtagSa`{data-clipboard-text="DN().Monat().FahrtagSa"}                                                                   | Fahrttage Samstag aktiviert (Wahr/Falsch)                                                                          |
| `DN().Monat().FahrtagSo`{data-clipboard-text="DN().Monat().FahrtagSo"}                                                                   | Fahrttage Sonntag aktiviert (Wahr/Falsch)                                                                          |
| `DN().Monat().Fahrtage`{data-clipboard-text="DN().Monat().Fahrtage"}                                                                     | Anzahl der Fahrttage pro Monat                                                                                     |
| `DN().Monat().FahrtageAbw`{data-clipboard-text="DN().Monat().FahrtageAbw"}                                                               | Anzahl der abweichenden Fahrttage                                                                                  |
| `DN().Monat().FahrtageAbwWiederkend`{data-clipboard-text="DN().Monat().FahrtabeAbwWiederkend"}                                           | Abw. Fahrttage wiederkehrend aktiviert (Wahr/Falsch)                                                               |
| `DN().Monat().Freibetrag`{data-clipboard-text="DN().Monat().Freibetrag"}                                                                 | Wert des monatlichen Freibetrages                                                                                  |
| `DN().Monat().Werbungskosten`{data-clipboard-text="DN().Monat().Werbungskosten"}                                                         | Prozentwert der Werbungskosten                                                                                     |
| `DN().Monat().WerbungskostenMax`{data-clipboard-text="DN().Monat().WerbungskostenMax"}                                                   | Höchstbetrag der Werbungskosten                                                                                    |
| `DN().Monat().Nachtarbeit`{data-clipboard-text="DN().Monat().Nachtarbeit"}                                                               | Nachtarbeit aktiviert (Wahr/Falsch)                                                                                |
| `DN().Monat().Pensionist`{data-clipboard-text="DN().Monat().Pensionist"}                                                                 | Pensionist aktiviert (Wahr/Falsch)                                                                                 |
| `DN().Monat().PauschaleLSt`{data-clipboard-text="DN().Monat().PauschaleLSt"}                                                             | Pauschale Lohnsteuer aktiviert (Wahr/Falsch)                                                                       |
| `DN().Monat().PauschaleLStProz`{data-clipboard-text="DN().Monat().PauschaleLStProz"}                                                     | Prozentsatz der Pauschalen Lohnsteuer                                                                              |
| `DN().Monat().Grenzgaenger`{data-clipboard-text="DN().Monat().Grenzgaenger"}                                                             | Grenzgänger aktiviert (Wahr/Falsch)                                                                                |
| `DN().Monat().BeschraenkteSteuerpflicht`{data-clipboard-text="DN().Monat().BeschraenkteSteuerpflicht"}                                   | Beschränkte Steuerpflicht aktiviert (Wahr/Falsch)                                                                  |
| `DN().Monat().LStGemPara70Z2`{data-clipboard-text="DN().Monat().LStGemPara70Z2"}                                                         | Lohnsteuer gem. § 70 / 2 Z 2 aktiviert (Wahr/Falsch)                                                               |
| `DN().Monat().LandarbeiterFreibetrag`{data-clipboard-text="DN().Monat().LandarbeiterFreibetrag"}                                         | Landarbeiter-Freibetrag aktiviert (Wahr/Falsch)                                                                    |
| `DN().Monat().Entwicklungshelfer`{data-clipboard-text="DN().Monat().Entwicklungshelfer"}                                                 | Auslandsbezüge als Entwicklungshelfer Z 11 aktiviert (Wahr/Falsch)                                                 |
| `DN().Monat().Gemeinde().Nummer`{data-clipboard-text="DN().Monat().Gemeinde().Nummer"}                                                   | Nummer der gewählten Gemeinde                                                                                      |
| `DN().Monat().Gemeinde().Name`{data-clipboard-text="DN().Monat().Gemeinde().Name"}                                                       | Name der gewählten Gemeinde                                                                                        |
| `DN().Monat().Gemeinde().Prozent`{data-clipboard-text="DN().Monat().Gemeinde().Prozent"}                                                 | Prozentzuordnung der gewählten Gemeinde                                                                            |
| `DN().Monat().BefreiungKommst`{data-clipboard-text="DN().Monat().BefreiungKommst"}                                                       | Befreiung von Kommunalsteuer aktiviert (Wahr/Falsch)                                                               |
| `DN().Monat().KuerzungKommSt`{data-clipboard-text="DN().Monat().KuerzungKommSt"}                                                         | Kürzung der Bemessungsgrundlage der Kommunalsteuer aktiviert (Wahr/Falsch)                                         |
| `DN().Monat().KuerzungKommstProz`{data-clipboard-text="DN().Monat().KuerzungKommstProz"}                                                 | Prozentsatz der Kürzung der Kommunalsteuer-Grundlage                                                               |
| `DN().Monat().BefreiungDB`{data-clipboard-text="DN().Monat().BefreiungDB"}                                                               | Befreiung von DB aktiviert (Wahr/Falsch)                                                                           |
| `DN().Monat().DZBundeslandAbw`{data-clipboard-text="DN().Monat().DZBundeslandAbw"}                                                       | Abweichendes DZ-Bundesland                                                                                         |
| `DN().Monat().BefreiungDZ`{data-clipboard-text="DN().Monat().BefreiungDZ"}                                                               | Befreiung von DZ aktiviert (Wahr/Falsch)                                                                           |
| `DN().Monat().KuerzungDZ`{data-clipboard-text="DN().Monat().KuerzungDZ"}                                                                 | Kürzung von DZ aktiviert (Wahr/Falsch)                                                                             |
| `DN().Monat().KuerzungDZProz`{data-clipboard-text="DN().Monat().KuerzungDZProz"}                                                         | Kürzung der Bemessungsgrundlage des DZ aktiviert (Wahr/Falsch)                                                     |
| `DN().Monat().UBahnAbgabe`{data-clipboard-text="DN().Monat().UBahnAbgabe"}                                                               | U-Bahn-Abgabe aktiviert (Wahr/Falsch)                                                                              |
| `DN().Monat().UBahnWochenAbw`{data-clipboard-text="DN().Monat().UBahnWochenAbw"}                                                         | Anzahl der U-Bahn-Wochen                                                                                           |
| `DN().Monat().HomeofficePauschale`{data-clipboard-text="DN().Monat().HomeofficePauschale"}                                               | Steuerfreie Pauschale aktiviert (Wahr/Falsch)                                                                      |
| `DN().Monat().HomeofficePauschaleBetrag`{data-clipboard-text="DN().Monat().HomeofficePauschaleBetrag"}                                   | Betrag der Homeoffice-Pauschale bzw. Telearbeitspauschale                                                          |
| `DN().Monat().HomeofficePauschaleSatz`{data-clipboard-text="DN().Monat().HomeofficePauschaleSatz"}                                       | Satz der Homeoffice-Pauschale bzw. Telearbeitspauschale                                                            |
| `DN().Monat().HomeofficePauschaleWiederkehrend`{data-clipboard-text="DN().Monat().HomeofficePauschaleWiederkehrend"}                     | Homeoffice Pauschale bzw. Telearbeitspauschale wiederkehrend aktiviert (Wahr/Falsch)                               |
| `DN().Monat().HomeofficeTage`{data-clipboard-text="DN().Monat().HomeofficeTage"}                                                         | Homeoffice Tage bzw. Telearbeitstage                                                                               |
| `DN().Monat().KostenuebernahmeOeffiTicket`{data-clipboard-text="DN().Monat().KostenuebernahmeOeffiTicket"}                               | Betrag der Kostenübernahme durch DG                                                                                |
| `DN().Monat().KostenuebernahmeOeffiTicketNurL16`{data-clipboard-text="DN().Monat().KostenuebernahmeOeffiTicketNurL16"}                   | Nur Ausweis am Lohnkonto und L16 aktiviert (Wahr/Falsch)                                                           |
| `DN().Monat().KostenuebernahmeOeffiTicketWiederkehrend`{data-clipboard-text="DN().Monat().KostenuebernahmeOeffiTicketWiederkehrend"}     | Kostenübernahme durch DG wiederkehrend aktiviert (Wahr/Falsch)                                                     |
| `DN().Monat().Zuschuss().AnschaffungLadeeinrichtung`{data-clipboard-text="DN().Monat().Zuschuss().AnschaffungLadeeinrichtung"}           | Anschaffungskosten der Ladeeinrichtung                                                                             |
| `DN().Monat().Zuschuss().AnschaffungLadeeinrichtungNurLK`{data-clipboard-text="DN().Monat().Zuschuss().AnschaffungLadeeinrichtungNurLK"} | Ausweis der Anschaffungskosten der Ladeeinrichtung auf dem Jahreslohnkonto und auf dem L16 (Wahr/Falsch)           |
| `DN().Monat().Zuschuss().Aufladung`{data-clipboard-text="DN().Monat().Zuschuss().Aufladung"}                                             | Betrag des Kostenersatzes der Aufladung eines emissionsfreien Fahrzeuges                                           |
| `DN().Monat().Zuschuss().AufladungBasis`{data-clipboard-text="DN().Monat().Zuschuss().AufladungBasis"}                                   | Basis des Kostenersatzes der Aufladung eines emissionsfreien Fahrzeuges                                            |
| `DN().Monat().Zuschuss().AufladungKWH`{data-clipboard-text="DN().Monat().Zuschuss().AufladungKWH"}                                       | Kilowattstunden des Kostenersatzes der Aufladung eines emissionsfreien Fahrzeuges                                  |
| `DN().Monat().Zuschuss().AufladungNurLK`{data-clipboard-text="DN().Monat().Zuschuss().AufladungNurLK"}                                   | Der Betrag der Aufladung des emissionsfreien Fahrzeuges soll nur auf dem Jahreslohnkonto und L16 angeführt werden. |
| `DN().Monat().Zuschuss().Enabled`{data-clipboard-text="DN().Monat().Zuschuss().Enabled"}                                                 | Der Bereich Zuschuss und Kostenersätze ist aktiviert bzw. nicht aktiviert (Wahr/Falsch)                            |
| `DN().Monat().Zuschuss().KinderbetreuungsZS`{data-clipboard-text="DN().Monat().Zuschuss().KinderbetreuungsZS"}                           | Betrag des Kinderbetreuungszuchusses                                                                               |
| `DN().Monat().Zuschuss().KinderbetreuungsZSKinder`{data-clipboard-text="DN().Monat().Zuschuss().KinderbetreuungsZRKinder"}               | Anzahl der Kinder für den Kinderbetreuungszuchuss                                                                  |
| `DN().Monat().Zuschuss().KinderbetreuungsZSNurLK`{data-clipboard-text="DN().Monat().Zuschuss().KinderbetreuungsZSNurLK"}                 | Ausweis des Betrages des Kinderbetreuungszuschusses nur auf dem Jahreslohnkonto (Wahr/Falsch)                      |

#### Sozialversicherung

| **Formel**                                                                                                         | **Beschreibung**                                                     |
| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| `DN().Monat().BundeslandNr`{data-clipboard-text="DN().Monat().BundeslandNr"}                                       | Nummer des ÖGK-Bundeslandes                                          |
| `DN().Monat().Bundesland`{data-clipboard-text="DN().Monat().Bundesland"}                                           | ÖGK Bundesland                                                       |
| `DN().Monat().BkNr`{data-clipboard-text="DN().Monat().BkNr"}                                                       | ÖGK Beitragsnummer                                                   |
| `DN().Monat().SvGruppe`{data-clipboard-text="DN().Monat().SvGruppe"}                                               | Ausgewählte SV-Gruppe                                                |
| `DN().Monat().SvGruppeAlv`{data-clipboard-text="DN().Monat().SvGruppeAlv"}                                         | SV-Gruppe Arbeitslosenversicherungspfl. (Wahr/Falsch)                |
| `DN().Monat().SvGruppeAngestellter`{data-clipboard-text="DN().Monat().SvGruppeAngestellter"}                       | SV-Gruppe Angestellter (Wahr/Falsch)                                 |
| `DN().Monat().SvGruppeArbeiter`{data-clipboard-text="DN().Monat().SvGruppeArbeiter"}                               | SV-Gruppe Arbeiter (Wahr/Falsch)                                     |
| `DN().Monat().SvGruppeBahn`{data-clipboard-text="DN().Monat().SvGruppeBahn"}                                       | SV-Gruppe VA der Eisenbahnen (Wahr/Falsch)                           |
| `DN().Monat().SvGruppeBVA`{data-clipboard-text="DN().Monat().SvGruppeBVA"}                                         | SV-Gruppe VA öffentlicher Bediensteter (Wahr/Falsch)                 |
| `DN().Monat().SvGruppeGfg`{data-clipboard-text="DN().Monat().SvGruppeGfg"}                                         | SV-Gruppe geringfügig (Wahr/Falsch)                                  |
| `DN().Monat().SvGruppeGfgAng`{data-clipboard-text="DN().Monat().SvGruppeGfgAng"}                                   | SV-Gruppe Angestellter geringfügig (Wahr/Falsch)                     |
| `DN().Monat().SvGruppeGfgArb`{data-clipboard-text="DN().Monat().SvGruppeGfgArb"}                                   | SV-Gruppe Arbeiter geringfügig (Wahr/Falsch)                         |
| `DN().Monat().SvGruppeKv`{data-clipboard-text="DN().Monat().SvGruppeKv"}                                           | SV-Gruppe Krankenversicherungspflichtig (Wahr/Falsch)                |
| `DN().Monat().SvGruppeLehrling`{data-clipboard-text="DN().Monat().SvGruppeLehrling"}                               | SV-Gruppe Lehrling (Wahr/Falsch)                                     |
| `DN().Monat().SvGruppeLehrlingAng`{data-clipboard-text="DN().Monat().SvGruppeLehrlingAng"}                         | SV-Gruppe Angestellten-Lehrling (Wahr/Falsch)                        |
| `DN().Monat().SvGruppeLehrlingArb`{data-clipboard-text="DN().Monat().SvGruppeLehrlingArb"}                         | SV-Gruppe Arbeiter-Lehrling (Wahr/Falsch)                            |
| `DN().Monat().SvGruppeNotar`{data-clipboard-text="DN().Monat().SvGruppeNotar"}                                     | SV-Gruppe VA des Notariats (Wahr/Falsch)                             |
| `DN().Monat().SvGruppePv`{data-clipboard-text="DN().Monat().SvGruppePv"}                                           | SV-Gruppe Pensionsversicherungspflichtig (Wahr/Falsch)               |
| `DN().Monat().SvGruppeUv`{data-clipboard-text="DN().Monat().SvGruppeUv"}                                           | SV-Gruppe Unfallversicherungspflichtig (Wahr/Falsch)                 |
| `DN().Monat().KeineSvGruppe`{data-clipboard-text="DN().Monat().KeineSvGruppe"}                                     | Keine SV-Gruppe ausgewählt (Wahr/Falsch)                             |
| `DN().Monat().Arbeiter`{data-clipboard-text="DN().Monat().Arbeiter"}                                               | Arbeiter(in) aktiviert (Wahr/Falsch)                                 |
| `DN().Monat().KUPflicht`{data-clipboard-text="DN().Monat().KUPflicht"}                                             | Kammerumlage aktiviert (Wahr/Falsch)                                 |
| `DN().Monat().LKUPflicht`{data-clipboard-text="DN().Monat().LKUPflicht"}                                           | LKU-Pflicht aktiviert (Wahr/Falsch)                                  |
| `DN().Monat().WFPflicht`{data-clipboard-text="DN().Monat().WFPflicht"}                                             | WF-Pflicht aktiviert (Wahr/Falsch)                                   |
| `DN().Monat().IESGPflicht`{data-clipboard-text="DN().Monat().IESGPflicht"}                                         | IESG-Pflicht aktiviert (Wahr/Falsch)                                 |
| `DN().Monat().SWPflicht`{data-clipboard-text="DN().Monat().SWPflicht"}                                             | SW-Pflicht aktiviert (Wahr/Falsch)                                   |
| `DN().Monat().NBPflicht`{data-clipboard-text="DN().Monat().NBPflicht"}                                             | Nachtschicht-Schwerarbeiter aktiviert (Wahr/Falsch)                  |
| `DN().Monat().Bildungsfonds`{data-clipboard-text="DN().Monat().Bildungsfonds"}                                     | Bildungsfonds aktiviert (Wahr/Falsch)                                |
| `DN().Monat().Geschaeftsfuehrer`{data-clipboard-text="DN().Monat().Geschaeftsfuehrer"}                             | Geschäftsführer aktiviert (Wahr/Falsch)                              |
| `DN().Monat().Zugehoerigkeit`{data-clipboard-text="DN().Monat().Zugehoerigkeit"}                                   | Ausgewählter Text für Zugehörigkeit (Anmeldung)                      |
| `DN().Monat().FallweiseBeschaeftigt`{data-clipboard-text="DN().Monat().FallweiseBeschaeftigt"}                     | Fallweise beschäftigt aktiviert (Wahr/Falsch)                        |
| `DN().Monat().TageFallweise`{data-clipboard-text="DN().Monat().TageFallweise"}                                     | Markierte Tage bei fallweiser Beschäftigung                          |
| `DN().Monat().L16Monatlich`{data-clipboard-text="DN().Monat().L16Monatlich"}                                       | L16 monatlich aktiviert (Wahr/Falsch)                                |
| `DN().Monat().SVFreibetrag`{data-clipboard-text="DN().Monat().SVFreibetrag"}                                       | SV-Freibetrag aktiviert (Wahr/Falsch)                                |
| `DN().Monat().SVFreibetragProz`{data-clipboard-text="DN().Monat().SVFreibetragProz"}                               | Prozentsatz des SV-Freibetrages                                      |
| `DN().Monat().SVFreibetragMax`{data-clipboard-text="DN().Monat().SVFreibetragMax"}                                 | Höchstbetrag des SV-Freibetrages                                     |
| `DN().Monat().KeineAlVRueckverrechnung`{data-clipboard-text="DN().Monat().KeineAlVRueckverrechnung"}               | Keine AlV-Rückverrechnung aktiviert (Wahr/Falsch)                    |
| `DN().Monat().AlVRueckverrechnungN25h`{data-clipboard-text="DN().Monat().AlVRueckverrechnungN25h"}                 | N25h AlV-Rückverrechnung aktiviert (Wahr/Falsch)                     |
| `DN().Monat().BonusgruppenNachSept2009`{data-clipboard-text="DN().Monat().BonusgruppenNachSept2009"}               | Bonusgruppe nach 1. Sept. 2009 aktiviert (Wahr/Falsch)               |
| `DN().Monat().BeginnVerrechnung`{data-clipboard-text="DN().Monat().BeginnVerrechnung"}                             | Abweichende Eingabe des Tages des Beginn der Verrechnung beim mBGM   |
| `DN().Monat().Beschaeftigungsbereich`{data-clipboard-text="DN().Monat().Beschaeftigungsbereich"}                   | Beschäftigungsbereich der Anmeldung (Arbeiter, Angestellter, etc.)   |
| `DN().Monat().BonusAltfall`{data-clipboard-text="DN().Monat().BonusAltfall"}                                       | Bonus Altfall aktiviert (Wahr/Falsch)                                |
| `DN().Monat().EntfallAVLehrlingssonderfall`{data-clipboard-text="DN().Monat().EntfallAVLehrlingssonderfall"}       | Entfall AV Lehrlingssonderfall aktiviert (Wahr/Falsch)               |
| `DN().Monat().EntfallAVLehrlingssonderfallAlt`{data-clipboard-text="DN().Monat().EntfallAVLehrlingssonderfallAlt"} | Entfall AV Lehrlingssonderfall alt aktiviert (Wahr/Falsch)           |
| `DN().Monat().AVEntfallPensionsanspruch`{data-clipboard-text="DN().Monat().AVEntfallPensionsanspruch"}             | AV Entfall Pensionsanspruch aktiviert (Wahr/Falsch)                  |
| `DN().Monat().AVIEEntfallPensionsanspruch`{data-clipboard-text="DN().Monat().AVIEEntfallPensionsanspruch"}         | AV+IE Entfall Pensionsanspruch aktiviert (Wahr/Falsch)               |
| `DN().Monat().BefreiungServiceEntgelt`{data-clipboard-text="DN().Monat().BefreiungServiceEntgelt"}                 | Befreiung Service-Entgelt (e-card) aktiviert (Wahr/Falsch)           |
| `DN().Monat().mBGMNichtErstellen`{data-clipboard-text="DN().Monat().mBGMNichtErstellen"}                           | mBGM nicht erstellen                                                 |
| `DN().Monat().MinderungAlV02Proz`{data-clipboard-text="DN().Monat().MinderungAlV02Proz"}                           | Minderung ALV um 0,20 % (Lehrling) aktiviert (Wahr/Falsch)           |
| `DN().Monat().MinderungAlV12Proz`{data-clipboard-text="DN().Monat().MinderungAlV12Proz"}                           | Minderung ALV um 1,20 % (Lehrling) aktiviert (Wahr/Falsch)           |
| `DN().Monat().MinderungAlV1Proz`{data-clipboard-text="DN().Monat().MinderungAlV1Proz"}                             | Minderung ALV um 1 % aktiviert (Wahr/Falsch)                         |
| `DN().Monat().MinderungAlV2Proz`{data-clipboard-text="DN().Monat().MinderungAlV2Proz"}                             | Minderung ALV um 2 % aktiviert (Wahr/Falsch)                         |
| `DN().Monat().MinderungAlV3Proz`{data-clipboard-text="DN().Monat().MinderungAlV3Proz"}                             | Minderung ALV um 3 % aktiviert (Wahr/Falsch)                         |
| `DN().Monat().MinderungPVum50Proz`{data-clipboard-text="DN().Monat().MinderungPVum50Proz"}                         | Minderung PV um 50 % aktiviert (Wahr/Falsch)                         |
| `DN().Monat().SchwerarbeitBis`{data-clipboard-text="DN().Monat().SchwerarbeitBis"}                                 | Schwerarbeit (Dauer der Tätigkeit) bis                               |
| `DN().Monat().SchwerarbeitVon`{data-clipboard-text="DN().Monat().SchwerarbeitVon"}                                 | Schwerarbeit (Dauer der Tätigkeit) von                               |
| `DN().Monat().SchwerarbeitWiederkehrend`{data-clipboard-text="DN().Monat().SchwerarbeitWiederkehrend"}             | Schwerarbeit wiederkehrend aktiviert (Wahr/Falsch)                   |
| `DN().Monat().SchwerarbeitZ1`{data-clipboard-text="DN().Monat().SchwerarbeitZ1"}                                   | Schwerarbeit Z1 aktiviert (Wahr/Falsch)                              |
| `DN().Monat().SchwerarbeitZ2`{data-clipboard-text="DN().Monat().SchwerarbeitZ2"}                                   | Schwerarbeit Z2 aktiviert (Wahr/Falsch)                              |
| `DN().Monat().SchwerarbeitZ4`{data-clipboard-text="DN().Monat().SchwerarbeitZ4"}                                   | Schwerarbeit Z4 aktiviert (Wahr/Falsch)                              |
| `DN().Monat().SchwerarbeitZ5`{data-clipboard-text="DN().Monat().SchwerarbeitZ5"}                                   | Schwerarbeit Z5 aktiviert (Wahr/Falsch)                              |
| `DN().Monat().SchwerarbeitZ6`{data-clipboard-text="DN().Monat().SchwerarbeitZ6"}                                   | Schwerarbeit Z6 aktiviert (Wahr/Falsch)                              |
| `DN().Monat().Sozialfonds`{data-clipboard-text="DN().Monat().Sozialfonds"}                                         | Sozialfonds aktiviert (Wahr/Falsch)                                  |
| `DN().Monat().SZKeineAlVRueckverrechnung`{data-clipboard-text="DN().Monat().SZKeineAlVRueckverrechnung"}           | SZ keine AlV-Rückverrechnung aktiviert (Wahr/Falsch)                 |
| `DN().Monat().SZMinderungAlV02Proz`{data-clipboard-text="DN().Monat().SZMinderungAlV02Proz"}                       | SZ Minderung ALV um 0,2 % (Lehrling) aktiviert (Wahr/Falsch)         |
| `DN().Monat().SZMinderungAlV12Proz`{data-clipboard-text="DN().Monat().SZMinderungAlV12Proz"}                       | SZ Minderung ALV um 1,2 % (Lehrling) aktiviert (Wahr/Falsch)         |
| `DN().Monat().SZMinderungAlV1Proz`{data-clipboard-text="DN().Monat().SZMinderungAlV1Proz"}                         | SZ Minderung ALV um 1 % aktiviert (Wahr/Falsch)                      |
| `DN().Monat().SZMinderungAlV2Proz`{data-clipboard-text="DN().Monat().SZMinderungAlV2Proz"}                         | SZ Minderung ALV um 2 % aktiviert (Wahr/Falsch)                      |
| `DN().Monat().SZMinderungAlV3Proz`{data-clipboard-text="DN().Monat().SZMinderungAlV3Proz"}                         | SZ Minderung ALV um 3 % aktiviert (Wahr/Falsch)                      |
| `DN().Monat().UStPflicht`{data-clipboard-text="DN().Monat().UStPflicht"}                                           | USt-Pflicht aktiviert (Wahr/Falsch)                                  |
| `DN().Monat().UStProzentsatz`{data-clipboard-text="DN().Monat().UStProzentsatz"}                                   | USt-Prozentsatz                                                      |
| `DN().Monat().UVEntfall60LJvollendet`{data-clipboard-text="DN().Monat().UVEntfall60LJvollendet"}                   | UV-Entfall 60. LJ vollendet aktiviert (Wahr/Falsch)                  |
| `DN().Monat().UVEntfallNeufoeg`{data-clipboard-text="DN().Monat().UVEntfallNeufoeg"}                               | UV-Entfall Neufög aktiviert (Wahr/Falsch)                            |
| `DN().Monat().Verrechnungsgrundlage`{data-clipboard-text="DN().Monat().Verrechnungsgrundlage"}                     | Abweichende Eingabe der Verrechnungsgrundlage                        |
| `DN().Monat().WeiterbildungsbeitragAUEG`{data-clipboard-text="DN().Monat().WeiterbildungsbeitragAUEG"}             | Weiterbildungsbeitrag - AÜG aktiviert (Wahr/Falsch)                  |
| `DN().Monat().Wiederkehrend`{data-clipboard-text="DN().Monat().Wiederkehrend"}                                     | Abweichende mBGM Einstellungen wiederkehrend aktiviert (Wahr/Falsch) |
| `DN().Monat().WVEntfallNeufoeg`{data-clipboard-text="DN().Monat().WVEntfallNeufoeg"}                               | WF-Entfall Neufög aktiviert (Wahr/Falsch)                            |

#### Lohnarten

| **Formel**                                                                                         | **Beschreibung**                                                               |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `DN().Lohnart().Monat().Wert`{data-clipboard-text="DN().Lohnart().Monat().Wert"}                   | Betrag der Lohnart                                                             |
| `DN().Lohnart().Monat().Anzahl`{data-clipboard-text="DN().Lohnart().Monat().Anzahl"}               | Anzahl der Basis der Lohnart                                                   |
| `DN().Lohnart().Monat().Basis`{data-clipboard-text="DN().Lohnart().Monat().Basis"}                 | Basis der Anzahl der Lohnart                                                   |
| `DN().Lohnart().Monat().Monat`{data-clipboard-text="DN().Lohnart().Monat().Monat"}                 | Zeigt das Monatskürzel und Jahr der Lohnart an                                 |
| `DN().Lohnart().Name`{data-clipboard-text="DN().Lohnart().Name"}                                   | Name der Lohnart                                                               |
| `DN().Lohnart().Nummer`{data-clipboard-text="DN().Lohnart().Nummer"}                               | Nummer der Lohnart                                                             |
| `DN().LohnartAktDV().Monat().Wert`{data-clipboard-text="DN().LohnartAktDV().Monat().Wert"}         | Betrag der Lohnart (aktives Dienstverhältnis)                                  |
| `DN().LohnartAktDV().Monat().Anzahl`{data-clipboard-text="DN().LohnartAktDV().Monat().Anzahl"}     | Anzahl der Basis der Lohnart (aktives Dienstverhältnis)                        |
| `DN().LohnartAktDV().Monat().Basis`{data-clipboard-text="DN().LohnartAktDV().Monat().Basis"}       | Basis der Anzahl der Lohnart (aktives Dienstverhältnis)                        |
| `DN().LohnartAktDV().Monat().Monat`{data-clipboard-text="DN().LohnartAktDV().Monat().Monat"}       | Zeigt das Monatskürzel und Jahr der Lohnart an (aktives Dienstverhältnis)      |
| `DN().LohnartAktDV().Name`{data-clipboard-text="DN().LohnartAktDV().Name"}                         | Name der Lohnart (aktives Dienstverhältnis)                                    |
| `DN().LohnartAktDV().Nummer`{data-clipboard-text="DN().LohnartAktDV().Nummer"}                     | Nummer der Lohnart (aktives Dienstverhältnis)                                  |
| `DN().Monatssumme().Monat`{data-clipboard-text="DN().Monatssumme().Monat"}                         | Zeigt das Monatskürzel und das Jahr der Monatssumme an                         |
| `DN().Monatssumme().Monat().Wert`{data-clipboard-text="DN().Monatssumme().Monat().Wert"}           | Wert der ausgewählten Monatssumme                                              |
| `DN().Monatssumme().Name`{data-clipboard-text="DN().Monatssumme().Name"}                           | Name der ausgewählten Monatssumme                                              |
| `DN().Monatssumme().Nummer`{data-clipboard-text="DN().Monatssumme().Nummer"}                       | Nummer der ausgewählten Monatssumme                                            |
| `DN().MonatssummeAktDV().Monat`{data-clipboard-text="DN().MonatssummeAktDV().Monat"}               | Zeigt Monatskürzel und Jahr der Monatssumme an (aktives Dienstverhältnis)      |
| `DN().MonatssummeAktDV().Monat().Wert`{data-clipboard-text="DN().MonatssummeAktDV().Monat().Wert"} | Wert der ausgewählten Monatssumme (aktives Dienstverhältnis)                   |
| `DN().MonatssummeAktDV().Name`{data-clipboard-text="DN().MonatssummeAktDV().Name"}                 | Name der ausgewählten Monatssumme (aktives Dienstverhältnis)                   |
| `DN().MonatssummeAktDV().Nummer`{data-clipboard-text="DN().MonatssummeAktDV().Nummer"}             | Nummer der ausgewählten Monatssumme (aktives Dienstverhältnis)                 |
| `DN().Monat().NurAufrollung`{data-clipboard-text="DN().Monat().NurAufrollung"}                     | Ob nur die Aufrollung vorhanden ist (Wahr/Falsch)                              |
| `DN().Monat().NurMvBemKrankheit`{data-clipboard-text="DN().Monat().NurMvBemKrankheit"}             | Ob nur ein Wert der MV-Bemessung Krankheit abgerechnet wurde (Wahr/Falsch)     |
| `DN().Monat().NurMvBemMutterschutz`{data-clipboard-text="DN().Monat().NurMvBemMutterschutz"}       | Ob nur ein Wert der MV-Bemessung Mutterschutz abgerechnet wurde (Wahr/Falsch)  |
| `DN().Monat().NurMvBemPraesenzdienst`{data-clipboard-text="DN().Monat().NurMvBemPraesenzdienst"}   | Ob nur ein Wert der MV-Bemessung Präsenzdienst abgerechnet wurde (Wahr/Falsch) |
| `DN().Monat().NurSvBemessung`{data-clipboard-text="DN().Monat().NurSvBemessung"}                   | Ob nur ein Wert der SV-Bemessung abgerechnet wurde (Wahr/Falsch)               |
| `DN().ZR().Monat().Arbeitstage`{data-clipboard-text="DN().ZR().Monat().Arbeitstage"}               | Anzahl der Arbeitstage                                                         |
| `DN().ZRAktDV().Monat().Arbeitstage`{data-clipboard-text="DN().ZRAktDV().Monat().Arbeitstage"}     | Anzahl der Arbeitstage (aktives Dienstverhältnis)                              |
| `DN().ZR().Monat().Feiertage`{data-clipboard-text="DN().ZR().Monat().Feiertage"}                   | Anzahl der Feiertage                                                           |
| `DN().ZRAktDV().Monat().Feiertage`{data-clipboard-text="DN().ZRAktDV().Monat().Feiertage"}         | Anzahl der Feiertage (aktives Dienstverhältnis)                                |
| `DN().ZR().Monat().LStTage`{data-clipboard-text="DN().ZR().Monat().LStTage"}                       | Anzahl der Lohnsteuertage                                                      |
| `DN().ZRAktDV().Monat().LStTage`{data-clipboard-text="DN().ZRAktDV().Monat().LStTage"}             | Anzahl der Lohnsteuertage (aktives Dienstverhältnis)                           |
| `DN().ZR().Monat().Monat`{data-clipboard-text="DN().ZR().Monat().Monat"}                           | Zeigt den Monat und das Jahr an                                                |
| `DN().ZRAktDV().Monat().Monat`{data-clipboard-text="DN().ZRAktDV().Monat().Monat"}                 | Zeigt den Monat und das Jahr an (aktives Dienstverhältnis)                     |
| `DN().ZR().Monat().SVTage`{data-clipboard-text="DN().ZR().Monat().SVTage"}                         | Anzahl der SV-Tage                                                             |
| `DN().ZRAktDV().Monat().SVTage`{data-clipboard-text="DN().ZRAktDV().Monat().SVTage"}               | Anzahl der SV-Tage (aktives Dienstverhältnis)                                  |
| `DN().ZR().Monat().TageProWoche`{data-clipboard-text="DN().ZR().Monat().TageProWoche"}             | Anzahl der abgerechneten Tage                                                  |
| `DN().ZRAktDV().Monat().TageProWoche`{data-clipboard-text="DN().ZRAktDV().Monat().TageProWoche"}   | Anzahl der abgerechneten Tage (aktives Dienstverhältnis)                       |
| `DN().ZR().Monat().WochenStd`{data-clipboard-text="DN().ZR().Monat().WochenStd"}                   | Anzahl der Wochenstunden                                                       |
| `DN().ZRAktDV().Monat().WochenStd`{data-clipboard-text="DN().ZRAktDV().Monat().WochenStd"}         | Anzahl der Wochenstunden (aktives Dienstverhältnis)                            |

#### Über- und Mehrstunden

| **Formel**                                                                           | **Beschreibung**                                                                   |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| `DN().Üst_Alle().Monat().Monat`{data-clipboard-text="DN().Üst_Alle().Monat().Monat"} | Zeigt das Monatskürzel und das Jahr an                                             |
| `DN().Üst_Alle().Monat().Wert`{data-clipboard-text="DN().Üst_Alle().Monat().Wert"}   | Wert der ausgewählten Über- und/oder Mehrarbeitsstunden                            |
| `DN().Üst_Alle().Name`{data-clipboard-text="DN().Üst_Alle().Name"}                   | Bezeichnung der ausgewählten Über- und/oder Mehrarbeitsstunden                     |
| `DN().Üst_Alle().Nummer`{data-clipboard-text="DN().Üst_Alle().Nummer"}               | Nummer der ausgewählten Über- und/oder Mehrarbeitsstunden                          |
| `DN().Üst_WK().Monat().Monat`{data-clipboard-text="DN().Üst_WK().Monat().Monat"}     | Zeigt das Monatskürzel und das Jahr an                                             |
| `DN().Üst_WK().Monat().Wert`{data-clipboard-text="DN().Üst_WK().Monat().Wert"}       | Wert der ausgewählten und wiederkehrenden Über- und/oder Mehrarbeitsstunden        |
| `DN().Üst_WK().Name`{data-clipboard-text="DN().Üst_WK().Name"}                       | Bezeichnung der ausgewählten und wiederkehrenden Über- und/oder Mehrarbeitsstunden |
| `DN().Üst_WK().Nummer`{data-clipboard-text="DN().Üst_WK().Nummer"}                   | Nummer der ausgewählten und wiederkehrenden Über- und/oder Mehrarbeitsstunden      |

#### BUAK

| **Formel**                                                                                 | **Beschreibung**                                                           |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| `DN().Monat().Buak`{data-clipboard-text="DN().Monat().Buak"}                               | BUAK aktiviert – Wahr/Falsch                                               |
| `DN().Monat().BuakBkz`{data-clipboard-text="DN().Monat().BuakBkz"}                         | Betriebskennzeichen bzw. bei abweichendem Kennzeichen der eingegebene Wert |
| `DN().BuakAkz`{data-clipboard-text="DN().BuakAkz"}                                         | Arbeitnehmerkennzeichen bei der BUAK                                       |
| `DN().Monat().BuakBeruf`{data-clipboard-text="DN().Monat().BuakBeruf"}                     | BUAK – Beruf                                                               |
| `DN().Monat().BuakStundensatzKv`{data-clipboard-text="DN().Monat().BuakStundensatzKv"}     | BUAK – Stundensatz laut Kollektivvertrag                                   |
| `DN().Monat().BuakWochenstundenKv`{data-clipboard-text="DN().Monat().BuakWochenstundenKv"} | BUAK – Wochenstunden laut Kollektivvertrag                                 |

#### Urlaub

| **Formel**                                                                                                             | **Beschreibung**                                                             |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `DN().UrlaubsjahrBeginn`{data-clipboard-text="DN().UrlaubsjahrBeginn"}                                                 | Datum des Beginns des Urlaubsjahres                                          |
| `DN().UrlaubInAT`{data-clipboard-text="DN().UrlaubInAT"}                                                               | Ob Urlaub in Arbeitstagen abgerechnet wird (Wahr/Falsch)                     |
| `DN().UrlaubInStunden`{data-clipboard-text="DN().UrlaubInStunden"}                                                     | Ob Urlaub in Stunden abgerechnet wird (Wahr/Falsch)                          |
| `DN().UrlaubAnspruch`{data-clipboard-text="DN().UrlaubAnspruch"}                                                       | Wert im Feld Anspruch                                                        |
| `DN().UrlaubAnfang`{data-clipboard-text="DN().UrlaubAnfang"}                                                           | Wert im Feld Anfangsstand                                                    |
| `DN().MonatsteilerAbw`{data-clipboard-text="DN().MonatsteilerAbw"}                                                     | Eingabe der Tage bei abweichenden Monatsteiler für die Urlaubsrückstellung   |
| `DN().UrlaubAliquot`{data-clipboard-text="DN().UrlaubAliquot"}                                                         | Anspruchsaliquotierung aktiviert (Wahr/Falsch)                               |
| `DN().UrlaubAliquotDauerhaft`{data-clipboard-text="DN().UrlaubAliquotDauerhaft"}                                       | Dauerhafte Anspruchsaliquotierung aktiviert (Wahr/Falsch)                    |
| `DN().UrlaubskarteiJaNein`{data-clipboard-text="DN().UrlaubskarteiJaNein"}                                             | Ob die Urlaubskartei verwendet wird (Wahr/Falsch)                            |
| `DN().Urlaubskartei().Von`{data-clipboard-text="DN().Urlaubskartei().Von"}                                             | Datum Von bei Eintrag der Urlaubszeile                                       |
| `DN().Urlaubskartei().Bis`{data-clipboard-text="DN().Urlaubskartei().Bis"}                                             | Datum Bis bei Eintrag der Urlaubszeile                                       |
| `DN().Urlaubskartei().Dauer`{data-clipboard-text="DN().Urlaubskartei().Dauer"}                                         | Dauer der ausgewählten Urlaubszeile                                          |
| `DN().Urlaubskartei().Sonderurlaub`{data-clipboard-text="DN().Urlaubskartei().Sonderurlaub"}                           | Ob bei Urlaubseintrag Sonderurlaub aktiviert ist (Wahr/Falsch)               |
| `DN().Urlaubskartei().Saldo`{data-clipboard-text="DN().Urlaubskartei().Saldo"}                                         | Wert im Feld Saldo des Urlaubeintrages                                       |
| `DN().Urlaubskartei().Text`{data-clipboard-text="DN().Urlaubskartei().Text"}                                           | Text der ausgewählten Urlaubszeile                                           |
| `DN().ZR().Monat().TageUrlaub`{data-clipboard-text="DN().ZR().Monat().TageUrlaub"}                                     | Anzahl Kalendertage des Urlaubs                                              |
| `DN().ZRAktDV().Monat().TageUrlaub`{data-clipboard-text="DN().ZRAktDV().Monat().TageUrlaub"}                           | Anzahl Kalendertage des Urlaubs (aktives Dienstverhältnis)                   |
| `DN().ZR().Monat().TageUrlaubOhneFeiertage`{data-clipboard-text="DN().ZR().Monat().TageUrlaubOhneFeiertage"}           | Kalendertage des Urlaubs ohne Feiertage                                      |
| `DN().ZRAktDV().Monat().TageUrlaubOhneFeiertage`{data-clipboard-text="DN().ZRAktDV().Monat().TageUrlaubOhneFeiertage"} | Kalendertage des Urlaubs ohne Feiertage (aktives Dienstverhältnis)           |
| `DN().ZR().Monat().TageUrlaubMonatSaldo`{data-clipboard-text="DN().ZR().Monat().TageUrlaubMonatSaldo"}                 | Saldo der Urlaubskartei zu einem bestimmten Monat                            |
| `DN().ZRAktDV().Monat().TageUrlaubMonatSaldo`{data-clipboard-text="DN().ZRAktDV().Monat().TageUrlaubMonatSaldo"}       | Saldo der Urlaubskartei zu einem bestimmten Monat (aktives Dienstverhältnis) |
| `DN().ZR().TageUrlaubSaldo`{data-clipboard-text="DN().ZR().TageUrlaubSaldo"}                                           | Saldo der Urlaubskartei                                                      |
| `DN().ZRAktDV().TageUrlaubSaldo`{data-clipboard-text="DN().ZRAktDV().TageUrlaubSaldo"}                                 | Saldo der Urlaubskartei (aktives Dienstverhältnis)                           |

#### Krankenstand

| **Formel**                                                                                                           | **Beschreibung**                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `DN().KrankenstandBeginnBeschaeftigung`{data-clipboard-text="DN().KrankenstandBeginnBeschaeftigung"}                 | Datum im Feld „Beschäftigt ab"                                                                                                |
| `DN().KrankenstandBeginnArbeitsjahr`{data-clipboard-text="DN().KrankenstandBeginnArbeitsjahr"}                       | Datum im Feld „Beginn Arbeitsjahr"                                                                                            |
| `DN().KrankenstandAnspruchArbeitsjahr`{data-clipboard-text="DN().KrankenstandAnspruchArbeitsjahr"}                   | Berechnung der Ansprüche nach Arbeitsjahr (Wahr/Falsch)                                                                       |
| `DN().KrankenstandAnspruchKalenderjahr`{data-clipboard-text="DN().KrankenstandAnspruchKalenderjahr"}                 | Berechnung der Ansprüche nach Kalenderjahr (Wahr/Falsch)                                                                      |
| `DN().KrankenstandAbrechnungArbeitstage`{data-clipboard-text="DN().KrankenstandAbrechnungArbeitstage"}               | Abrechnung in Arbeitstagen (Wahr/Falsch)                                                                                      |
| `DN().KrankenstandAbrechnungKalendertagen`{data-clipboard-text="DN().KrankenstandAbrechnungKalendertagen"}           | Abrechnung in Kalendertagen (Wahr/Falsch)                                                                                     |
| `DN().KrankenstandskarteiJaNein`{data-clipboard-text="DN().KrankenstandskarteiJaNein"}                               | Krankenstandskartei aktiviert (Wahr/Falsch)                                                                                   |
| `DN().Krankenstandskartei().Art`{data-clipboard-text="DN().Krankenstandskartei().Art"}                               | Krankenstandskartei - Wert bei Art                                                                                            |
| `DN().Krankenstandskartei().Von`{data-clipboard-text="DN().Krankenstandskartei().Von"}                               | Krankenstandskartei - Datum Von                                                                                               |
| `DN().Krankenstandskartei().Bis`{data-clipboard-text="DN().Krankenstandskartei().Bis"}                               | Krankenstandskartei - Datum Bis                                                                                               |
| `DN().Krankenstandskartei().Dauer`{data-clipboard-text="DN().Krankenstandskartei().Dauer"}                           | Krankenstandskartei - Dauer in Tagen                                                                                          |
| `DN().Krankenstandskartei().Grund`{data-clipboard-text="DN().Krankenstandskartei().Grund"}                           | Krankenstandskartei - Grund des Krankenstandes                                                                                |
| `DN().Krankenstandskartei().Ersterkrankung`{data-clipboard-text="DN().Krankenstandskartei().Ersterkrankung"}         | Krankenstandskartei - Ersterkrankung (Wahr/Falsch)                                                                            |
| `DN().Krankenstandskartei().Text`{data-clipboard-text="DN().Krankenstandskartei().Text"}                             | Krankenstandskartei - Eintrag im Feld Text                                                                                    |
| `DN().ZR().Monat().TageEFZ`{data-clipboard-text="DN().ZR().Monat().TageEFZ"}                                         | Anzahl der EFZ-Tage des ausgewählten Zeitraumes                                                                               |
| `DN().ZRAktDV().Monat().TageEFZ`{data-clipboard-text="DN().ZRAktDV().Monat().TageEFZ"}                               | Anzahl der EFZ-Tage des ausgewählten Zeitraumes (aktives Dienstverhältnis)                                                    |
| `DN().ZR().Monat().TageEFZ0`{data-clipboard-text="DN().ZR().Monat().TageEFZ0"}                                       | Anzahl der EFZ-Tage des ausgewählten Zeitraumes, für die kein Anspruch mehr besteht                                           |
| `DN().ZRAktDV().Monat().TageEFZ0`{data-clipboard-text="DN().ZRAktDV().Monat().TageEFZ0"}                             | Anzahl der EFZ-Tage des ausgewählten Zeitraumes, für die kein Anspruch mehr besteht (aktives Dienstverhältnis)                |
| `DN().ZR().Monat().TageEFZ100`{data-clipboard-text="DN().ZR().Monat().TageEFZ100"}                                   | Anzahl der EFZ-Tage des ausgewählten Zeitraumes, für die ein Anspruch zu 100 % besteht                                        |
| `DN().ZRAktDV().Monat().TageEFZ100`{data-clipboard-text="DN().ZRAktDV().Monat().TageEFZ100"}                         | Anzahl der EFZ-Tage des ausgewählten Zeitraumes, für die ein Anspruch zu 100 % besteht (aktives Dienstverhältnis)             |
| `DN().ZR().Monat().TageEFZ25`{data-clipboard-text="DN().ZR().Monat().TageEFZ25"}                                     | Anzahl der EFZ-Tage des ausgewählten Zeitraumes, für die ein Anspruch zu 25 % besteht                                         |
| `DN().ZRAktDV().Monat().TageEFZ25`{data-clipboard-text="DN().ZRAktDV().Monat().TageEFZ25"}                           | Anzahl der EFZ-Tage des ausgewählten Zeitraumes, für die ein Anspruch zu 25 % besteht (aktives Dienstverhältnis)              |
| `DN().ZR().Monat().TageEFZ50_1`{data-clipboard-text="DN().ZR().Monat().TageEFZ50_1"}                                 | Anzahl der EFZ-Tage des ausgewählten Zeitraumes, für die ein Anspruch zu 50 % besteht                                         |
| `DN().ZRAktDV().Monat().TageEFZ50_1`{data-clipboard-text="DN().ZRAktDV().Monat().TageEFZ50_1"}                       | Anzahl der EFZ-Tage des ausgewählten Zeitraumes, für die ein Anspruch zu 50 % besteht (aktives Dienstverhältnis)              |
| `DN().ZR().Monat().TageEFZ50_2`{data-clipboard-text="DN().ZR().Monat().TageEFZ50_2"}                                 | Anzahl der EFZ-Tage des ausgewählten Zeitraumes, für die ein Anspruch zu 50 % (§ 8/2 AngG) besteht                            |
| `DN().ZRAktDV().Monat().TageEFZ50_2`{data-clipboard-text="DN().ZRAktDV().Monat().TageEFZ50_2"}                       | Anzahl der EFZ-Tage des ausgewählten Zeitraumes, für die ein Anspruch zu 50 % (§ 8/2 AngG) besteht (aktives Dienstverhältnis) |
| `DN().ZR().Monat().TageEFZTE`{data-clipboard-text="DN().ZR().Monat().TageEFZTE"}                                     | Anzahl der EFZ-Tage des ausgewählten Zeitraumes, für die ein Teilentgelt besteht (Lehrling)                                   |
| `DN().ZRAktDV().Monat().TageEFZTE`{data-clipboard-text="DN().ZRAktDV().Monat().TageEFZTE"}                           | Anzahl der EFZ-Tage des ausgewählten Zeitraumes, für die ein Teilentgelt besteht (Lehrling) (aktives Dienstverhältnis)        |
| `DN().ZR().Monat().TageKrank`{data-clipboard-text="DN().ZR().Monat().TageKrank"}                                     | Anzahl der Krankentage                                                                                                        |
| `DN().ZRAktDV().Monat().TageKrank`{data-clipboard-text="DN().ZRAktDV().Monat().TageKrank"}                           | Anzahl der Krankentage (aktives Dienstverhältnis)                                                                             |
| `DN().ZR().Monat().TageKrankOhneFeiertage`{data-clipboard-text="DN().ZR().Monat().TageKrankOhneFeiertage"}           | Anzahl der Krankentage ohne Feiertage                                                                                         |
| `DN().ZRAktDV().Monat().TageKrankOhneFeiertage`{data-clipboard-text="DN().ZRAktDV().Monat().TageKrankOhneFeiertage"} | Anzahl der Krankentage ohne Feiertage (aktives Dienstverhältnis)                                                              |


#### Dienstzettel

| **Formel**                                                                                           | **Beschreibung**                         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `DN().DienstzettelEndeAV`{data-clipboard-text="DN().DienstzettelEndeAV"}                             | Datum im Feld „Ende Arbeitsverhältnis"   |
| `DN().DienstzettelEntgeltFaelligAm`{data-clipboard-text="DN().DienstzettelEntgeltFaelligAm"}         | Text im Feld Entlohnung „fällig am"      |
| `DN().DienstzettelSonstigeVereinbarung`{data-clipboard-text="DN().DienstzettelSonstigeVereinbarung"} | Text der sonstigen Vereinbarungen        |
| `DN().DienstzettelVdzEinstufung`{data-clipboard-text="DN().DienstzettelVdzEinstufung"}               | Anrechnung Vordienstzeiten - Einstufung  |
| `DN().DienstzettelVdzAbfertigung`{data-clipboard-text="DN().DienstzettelVdzAbfertigung"}             | Anrechnung Vordienstzeiten - Abfertigung |
| `DN().DienstzettelVdzUrlaub`{data-clipboard-text="DN().DienstzettelVdzUrlaub"}                       | Anrechnung Vordienstzeiten - Urlaub      |
| `DN().DienstzettelEinstufung`{data-clipboard-text="DN().DienstzettelEinstufung"}                     | Einstufung - Einstufung                  |
| `DN().DienstzettelEinstufungGruppe`{data-clipboard-text="DN().DienstzettelEinstufungGruppe"}         | Einstufung - Gruppe im                   |
| `DN().DienstzettelEinstufungJahr`{data-clipboard-text="DN().DienstzettelEinstufungJahr"}             | Einstufung - Jahr ab                     |
| `DN().DienstzettelVorrueckung`{data-clipboard-text="DN().DienstzettelVorrueckung"}                   | Vorrückung - Vorrückung                  |
| `DN().DienstzettelVorrueckungGruppe`{data-clipboard-text="DN().DienstzettelVorrueckungGruppe"}       | Vorrückung - Gruppe im                   |
| `DN().DienstzettelVorrueckungJahr`{data-clipboard-text="DN().DienstzettelVorrueckungJahr"}           | Vorrückung - Jahr ab                     |
| `DN().DienstzettelKuendText().Nummer`{data-clipboard-text="DN().DienstzettelKuendText().Nummer"}     | Nummer des Textbausteines bei Kündigung  |
| `DN().DienstzettelSonstText().Nummer`{data-clipboard-text="DN().DienstzettelSonstText().Nummer"}     | Nummer des Textbausteines bei Sonstiges  |
| `DzText().Nummer`{data-clipboard-text="DzText().Nummer"}                                             | Nummer des Dienstzetteltextes            |
| `DzText().Text`{data-clipboard-text="DzText().Text"}                                                 | Wortlaut des Dienstzetteltextes          |

#### Zeitausgleich

| **Formel**                                                                                                                     | **Beschreibung**                                                     |
| ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| `DN().ZeitausgleichAnfang`{data-clipboard-text="DN().ZeitausgleichAnfang"}                                                     | Anfangsbestand des ZA                                                |
| `DN().ZeitausgleichInArbeitsstunden`{data-clipboard-text="DN().ZeitausgleichInArbeitsstunden"}                                 | ZA in Arbeitsstunden                                                 |
| `DN().Zeitauslgeichskartei().Arbeitsstunden`{data-clipboard-text="DN().Zeitauslgeichskartei().Arbeitsstunden"}                 | Arbeitsstunden                                                       |
| `DN().Zeitauslgeichskartei().Datum`{data-clipboard-text="DN().Zeitauslgeichskartei().Datum"}                                   | Datum                                                                |
| `DN().Zeitauslgeichskartei().Saldo`{data-clipboard-text="DN().Zeitauslgeichskartei().Saldo"}                                   | Saldo des ZA                                                         |
| `DN().Zeitauslgeichskartei().StundenRueckstellung`{data-clipboard-text="DN().Zeitauslgeichskartei().StundenRueckstellung"}     | Stundenrückstellung                                                  |
| `DN().Zeitauslgeichskartei().Zuschlag`{data-clipboard-text="DN().Zeitauslgeichskartei().Zuschlag"}                             | ZA Zuschlag                                                          |
| `DN().ZeitausgleichskarteiJaNein`{data-clipboard-text="DN().ZeitausgleichskarteiJaNein"}                                       | Zeitausgleichskartei ist aktiviert oder nicht                        |
| `DN().ZeitausgleichStundenteiler`{data-clipboard-text="DN().ZeitausgleichStundenteiler"}                                       | Stundenteiler                                                        |
| `DN().ZeitausgleichStundenteilerAbw`{data-clipboard-text="DN().ZeitausgleichStundenteilerAbw"}                                 | Abw. Stundenteiler                                                   |
| `DN().ZR().Monat().ZA1`{data-clipboard-text="DN().ZR().Monat().ZA1"}                                                           | ZA 1                                                                 |
| `DN().ZR().Monat().ZA1.AnfangsstandBetrag`{data-clipboard-text="DN().ZR().Monat().ZA1.AnfangsstandBetrag"}                     | ZA 1 Anfangsstand Betrag                                             |
| `DN().ZR().Monat().ZA1.AnfangsstandStunden`{data-clipboard-text="DN().ZR().Monat().ZA1.AnfangsstandStunden"}                   | ZA 1 Anfangsstand Stunden                                            |
| `DN().ZR().Monat().ZA1.EndsaldoBetrag`{data-clipboard-text="DN().ZR().Monat().ZA1.EndsaldoBetrag"}                             | ZA 1 Endsaldo Betrag                                                 |
| `DN().ZR().Monat().ZA1.EndsaldoStunden`{data-clipboard-text="DN().ZR().Monat().ZA1.EndsaldoStunden"}                           | ZA 1 Endsaldo Stunden                                                |
| `DN().ZR().Monat().ZA1.VeraenderungBasis`{data-clipboard-text="DN().ZR().Monat().ZA1.VeraenderungBasis"}                       | ZA 1 Veränderung der Basis                                           |
| `DN().ZR().Monat().ZA1.VeraenderungBetrag`{data-clipboard-text="DN().ZR().Monat().ZA1.VeraenderungBetrag"}                     | ZA 1 Veränderung des Betrages                                        |
| `DN().ZR().Monat().ZA1.VeraenderungStunden`{data-clipboard-text="DN().ZR().Monat().ZA1.VeraenderungStunden"}                   | ZA 1 Veränderung der Stunden                                         |
| `DN().ZRAktDV().Monat().ZA1`{data-clipboard-text="DN().ZRAktDV().Monat().ZA1"}                                                 | ZA 1 (aktives Dienstverhältnis)                                      |
| `DN().ZRAktDV().Monat().ZA1.AnfangsstandBetrag`{data-clipboard-text="DN().ZRAktDV().Monat().ZA1.AnfangsstandBetrag"}           | ZA 1 Anfangsstand Betrag (aktives Dienstverhältnis)                  |
| `DN().ZRAktDV().Monat().ZA1.AnfangsstandStunden`{data-clipboard-text="DN().ZRAktDV().Monat().ZA1.AnfangsstandStunden"}         | ZA 1 Anfangsstand Stunden (aktives Dienstverhältnis)                 |
| `DN().ZRAktDV().Monat().ZA1.EndsaldoBetrag`{data-clipboard-text="DN().ZRAktDV().Monat().ZA1.EndsaldoBetrag"}                   | ZA 1 Endsaldo Betrag (aktives Dienstverhältnis)                      |
| `DN().ZRAktDV().Monat().ZA1.EndsaldoStunden`{data-clipboard-text="DN().ZRAktDV().Monat().ZA1.EndsaldoStunden"}                 | ZA 1 Endsaldo Stunden (aktives Dienstverhältnis)                     |
| `DN().ZRAktDV().Monat().ZA1.VeraenderungBasis`{data-clipboard-text="DN().ZRAktDV().Monat().ZA1.VeraenderungBasis"}             | ZA 1 Veränderung der Basis (aktives Dienstverhältnis)                |
| `DN().ZRAktDV().Monat().ZA1.VeraenderungBetrag`{data-clipboard-text="DN().ZRAktDV().Monat().ZA1.VeraenderungBetrag"}           | ZA 1 Veränderung des Betrages (aktives Dienstverhältnis)             |
| `DN().ZRAktDV().Monat().ZA1.VeraenderungStunden`{data-clipboard-text="DN().ZRAktDV().Monat().ZA1.VeraenderungStunden"}         | ZA 1 Veränderung der Stunden (aktives Dienstverhältnis)              |
| `DN().ZR().Monat().ZA2`{data-clipboard-text="DN().ZR().Monat().ZA2"}                                                           | ZA 2                                                                 |
| `DN().ZR().Monat().ZA2.AnfangsstandBetrag`{data-clipboard-text="DN().ZR().Monat().ZA2.AnfangsstandBetrag"}                     | ZA 2 Anfangsstand Betrag                                             |
| `DN().ZR().Monat().ZA2.AnfangsstandStunden`{data-clipboard-text="DN().ZR().Monat().ZA2.AnfangsstandStunden"}                   | ZA 2 Anfangsstand Stunden                                            |
| `DN().ZR().Monat().ZA2.EndsaldoBetrag`{data-clipboard-text="DN().ZR().Monat().ZA2.EndsaldoBetrag"}                             | ZA 2 Endsaldo Betrag                                                 |
| `DN().ZR().Monat().ZA2.EndsaldoStunden`{data-clipboard-text="DN().ZR().Monat().ZA2.EndsaldoStunden"}                           | ZA 2 Endsaldo Stunden                                                |
| `DN().ZR().Monat().ZA2.VeraenderungBasis`{data-clipboard-text="DN().ZR().Monat().ZA2.VeraenderungBasis"}                       | ZA 2 Veränderung der Basis                                           |
| `DN().ZR().Monat().ZA2.VeraenderungBetrag`{data-clipboard-text="DN().ZR().Monat().ZA2.VeraenderungBetrag"}                     | ZA 2 Veränderung des Betrages                                        |
| `DN().ZR().Monat().ZA2.VeraenderungStunden`{data-clipboard-text="DN().ZR().Monat().ZA2.VeraenderungStunden"}                   | ZA 2 Veränderung der Stunden                                         |
| `DN().ZRAktDV().Monat().ZA2`{data-clipboard-text="DN().ZRAktDV().Monat().ZA2"}                                                 | ZA 2 (aktives Dienstverhältnis)                                      |
| `DN().ZRAktDV().Monat().ZA2.AnfangsstandBetrag`{data-clipboard-text="DN().ZRAktDV().Monat().ZA2.AnfangsstandBetrag"}           | ZA 2 Anfangsstand Betrag (aktives Dienstverhältnis)                  |
| `DN().ZRAktDV().Monat().ZA2.AnfangsstandStunden`{data-clipboard-text="DN().ZRAktDV().Monat().ZA2.AnfangsstandStunden"}         | ZA 2 Anfangsstand Stunden (aktives Dienstverhältnis)                 |
| `DN().ZRAktDV().Monat().ZA2.EndsaldoBetrag`{data-clipboard-text="DN().ZRAktDV().Monat().ZA2.EndsaldoBetrag"}                   | ZA 2 Endsaldo Betrag (aktives Dienstverhältnis)                      |
| `DN().ZRAktDV().Monat().ZA2.EndsaldoStunden`{data-clipboard-text="DN().ZRAktDV().Monat().ZA2.EndsaldoStunden"}                 | ZA 2 Endsaldo Stunden (aktives Dienstverhältnis)                     |
| `DN().ZRAktDV().Monat().ZA2.VeraenderungBasis`{data-clipboard-text="DN().ZRAktDV().Monat().ZA2.VeraenderungBasis"}             | ZA 2 Veränderung der Basis (aktives Dienstverhältnis)                |
| `DN().ZRAktDV().Monat().ZA2.VeraenderungBetrag`{data-clipboard-text="DN().ZRAktDV().Monat().ZA2.VeraenderungBetrag"}           | ZA 2 Veränderung des Betrages (aktives Dienstverhältnis)             |
| `DN().ZRAktDV().Monat().ZA2.VeraenderungStunden`{data-clipboard-text="DN().ZRAktDV().Monat().ZA2.VeraenderungStunden"}         | ZA 2 Veränderung der Stunden (aktives Dienstverhältnis)              |
| `DN().ZR().Monat().ZAArbeitsstunden`{data-clipboard-text="DN().ZR().Monat().ZAArbeitsstunden"}                                 | ZA Arbeitstunden                                                     |
| `DN().ZRAktDV().Monat().ZAArbeitsstunden`{data-clipboard-text="DN().ZRAktDV().Monat().ZAArbeitsstunden"}                       | ZA Arbeitstunden (aktives Dienstverhältnis)                          |
| `DN().ZR().Monat().ZASaldoArbeitsstunden`{data-clipboard-text="DN().ZR().Monat().ZASaldoArbeitsstunden"}                       | ZA Saldo Arbeitsstunden                                              |
| `DN().ZRAktDV().Monat().ZASaldoArbeitsstunden`{data-clipboard-text="DN().ZRAktDV().Monat().ZASaldoArbeitsstunden"}             | ZA Saldo Arbeitsstunden (aktives Dienstverhältnis)                   |
| `DN().ZR().Monat().ZASaldoStundenRueckstellung`{data-clipboard-text="DN().ZR().Monat().ZASaldoStundenRueckstellung"}           | Der Saldo der Stunden Rückstellung für ZA                            |
| `DN().ZRAktDV().Monat().ZASaldoStundenRueckstellung`{data-clipboard-text="DN().ZRAktDV().Monat().ZASaldoStundenRueckstellung"} | Der Saldo der Stunden Rückstellung für ZA (aktives Dienstverhältnis) |
| `DN().ZR().Monat().ZAStundenRueckstellung`{data-clipboard-text="DN().ZR().Monat().ZAStundenRueckstellung"}                     | ZA Stunden Rückstellung ist aktiviert                                |
| `DN().ZRAktDV().Monat().ZAStundenRueckstellung`{data-clipboard-text="DN().ZRAktDV().Monat().ZAStundenRueckstellung"}           | ZA Stunden Rückstellung ist aktiviert (aktives Dienstverhältnis)     |
| `DN().ZR().ZAEndsaldoArbeitsstunden`{data-clipboard-text="DN().ZR().ZAEndsaldoArbeitsstunden"}                                 | ZA Endsaldo Arbeitsstunden                                           |
| `DN().ZRAktDV().ZAEndsaldoArbeitsstunden`{data-clipboard-text="DN().ZRAktDV().ZAEndsaldoArbeitsstunden"}                       | ZA Endsaldo Arbeitsstunden (aktives Dienstverhältnis)                |
| `DN().ZR().ZAEndsaldoStundenRueckstellung`{data-clipboard-text="DN().ZR().ZAEndsaldoStundenRueckstellung"}                     | ZA Endsaldo Stunden Rückstellung                                     |
| `DN().ZRAktDV().ZAEndsaldoStundenRueckstellung`{data-clipboard-text="DN().ZRAktDV().ZAEndsaldoStundenRueckstellung"}           | ZA Endsaldo Stunden Rückstellung (aktives Dienstverhältnis)          |

#### Abzüge

| **Formel**                                                                                                           | **Beschreibung**                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `DN().Monat().Betriebsratsumlage`{data-clipboard-text="DN().Monat().Betriebsratsumlage"}                             | Betrag Betriebsratsumlage                                                                 |
| `DN().Monat().BetriebsratsumlageInklSZ`{data-clipboard-text="DN().Monat().BetriebsratsumlageInklSZ"}                 | Betriebsratsumlage inkl. Sonderzahlungen (Wahr/Falsch)                                    |
| `DN().Monat().BetriebsratsumlageProzenteingabe`{data-clipboard-text="DN().Monat().BetriebsratsumlageProzenteingabe"} | Betriebsratsumlage Prozenteingabe (Wahr/Falsch)                                           |
| `DN().Monat().BetriebsratsumlageProzentsatz`{data-clipboard-text="DN().Monat().BetriebsratsumlageProzentsatz"}       | Betriebsratsumlage Prozentsatz                                                            |
| `DN().Monat().ErhoehungDB`{data-clipboard-text="DN().Monat().ErhoehungDB"}                                           | 20%-Regel Sachbezug - Erhöhung DB-Bemessungsgrundlage aktiviert (Wahr/Falsch)             |
| `DN().Monat().ErhoehungKommunalsteuer`{data-clipboard-text="DN().Monat().ErhoehungKommunalsteuer"}                   | 20%-Regel Sachbezug - Erhöhung Kommunalsteuer-Bemessungsgrundlage aktiviert (Wahr/Falsch) |
| `DN().Monat().GewerkschaftProzenteingabe`{data-clipboard-text="DN().Monat().GewerkschaftProzenteingabe"}             | Gewerkschaftsbeitrag Prozenteingabe (Wahr/Falsch)                                         |
| `DN().Monat().GewerkschaftProzentsatz`{data-clipboard-text="DN().Monat().GewerkschaftProzentsatz"}                   | Gewerkschaftsbeitrag Prozentsatz                                                          |
| `DN().Monat().Gewerkschaftsbeitrag`{data-clipboard-text="DN().Monat().Gewerkschaftsbeitrag"}                         | Betrag Gewerkschaftsbeitrag                                                               |
| `DN().Monat().Sachbezug`{data-clipboard-text="DN().Monat().Sachbezug"}                                               | Betrag Sachbezug                                                                          |
| `DN().Monat().Vorschuss`{data-clipboard-text="DN().Monat().Vorschuss"}                                               | Betrag Vorschuss                                                                          |

#### Exekutionen

| **Formel**                                                                                                       | **Beschreibung**                                         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `DN().Monat().AbzugExekutionskosten`{data-clipboard-text="DN().Monat().AbzugExekutionskosten"}                   | Abzug Exekutionskosten (Wahr/Falsch)                     |
| `DN().Monat().Aktenzahl`{data-clipboard-text="DN().Monat().Aktenzahl"}                                           | Aktenzahl der Exekution                                  |
| `DN().Monat().DauerBeendigungsansprueche`{data-clipboard-text="DN().Monat().DauerBeendigungsansprueche"}         | Anzahl Monate der Beendigungsansprüche                   |
| `DN().Monat().ErweiterterPfaendungsschutz`{data-clipboard-text="DN().Monat().ErweiterterPfaendungsschutz"}       | Erweiterter Pfändungsschutz in Monaten                   |
| `DN().Monat().Exekutionsbetrag`{data-clipboard-text="DN().Monat().Exekutionsbetrag"}                             | Exekutionsbetrag                                         |
| `DN().Monat().Gericht`{data-clipboard-text="DN().Monat().Gericht"}                                               | Gericht                                                  |
| `DN().Monat().KeineZahlungsbereitschaft`{data-clipboard-text="DN().Monat().KeineZahlungsbereitschaft"}           | Keine Zahlungsbereitschaft aktiviert (Wahr/Falsch)       |
| `DN().Monat().KeineZahlungsbereitschaftGrund`{data-clipboard-text="DN().Monat().KeineZahlungsbereitschaftGrund"} | Keine Zahlungsbereitschaft Grund                         |
| `DN().Monat().AbwBerechnungsgrundlagen`{data-clipboard-text="DN().Monat().AbwBerechnungsgrundlagen"}             | Abweichende Berechnungsgrundlage aktiviert (Wahr/Falsch) |
| `DN().Monat().AnspruchAufSonderzahlung`{data-clipboard-text="DN().Monat().AnspruchAufSonderzahlung"}             | Anspruch auf Sonderzahlung (Wahr/Falsch)                 |
| `DN().Monat().LfdBezuegeAbweichend`{data-clipboard-text="DN().Monat().LfdBezuegeAbweichend"}                     | Abweichende Berechnungsgrundlage laufende Bezüge         |
| `DN().Monat().BeendigungAbweichend`{data-clipboard-text="DN().Monat().BeendigungAbweichend"}                     | Abweichende Berechnungsgrundlage Beendigungsansprüche    |
| `DN().Monat().SonderzahlungAbweichend`{data-clipboard-text="DN().Monat().SonderzahungAbweichend"}                | Abweichende Berechnungsgrundlage Sonderzahlungen         |
| `DN().Monat().SummeExekutionsbetraege`{data-clipboard-text="DN().Monat().SummeExekutionsbetraege"}               | Summe Exekutionsbeträge                                  |
| `DN().Monat().SummeExekutionskosten`{data-clipboard-text="DN().Monat().SummeExekutionskosten"}                   | Summe Exekutionskosten                                   |
| `DN().Monat().ZahlungsklageDesDienstnehmers`{data-clipboard-text="DN().Monat().ZahlungsklageDesDienstnehmers"}   | Zahlungsklage des Dienstnehmers aktiviert (Wahr/Falsch)  |

#### Kostenstelle

| **Formel**                                                                                       | **Beschreibung**                 |
| ------------------------------------------------------------------------------------------------ | -------------------------------- |
| `DN().Monat().Kostenstelle().Name`{data-clipboard-text="DN().Monat().Kostenstelle().Name"}       | Name der Kostenstelle            |
| `DN().Monat().Kostenstelle().Nummer`{data-clipboard-text="DN().Monat().Kostenstelle().Nummer"}   | Nummer der Kostenstelle          |
| `DN().Monat().Kostenstelle().Prozent`{data-clipboard-text="DN().Monat().Kostenstelle().Prozent"} | Prozentsatz für die Kostenstelle |


### Freie Dienstnehmer

| **Formel**                                                                                                                     | **Beschreibung**                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| `DN().Monat().Abmeldedatum`{data-clipboard-text="DN().Monat().Abmeldedatum"}                                                   | Abmeldedatum                                                            |
| `DN().Monat().AbwBVBeitragssatz`{data-clipboard-text="DN().Monat().AbwBVBeitragssatz"}                                         | Abweichender BV-Beitragssatz                                            |
| `DN().Monat().AbweichendeUStBasis`{data-clipboard-text="DN().Monat().AbweichendeUStBasis"}                                     | USt-Pflicht - abweichende USt-Basis                                     |
| `DN().Monat().AndereVereinbarungen`{data-clipboard-text="DN().Monat().AndereVereinbarungen"}                                   | Anmeldung - andere Vereinbarungen                                       |
| `DN().Monat().SZvereinbart`{data-clipboard-text="DN().Monat().SZvereinbart"}                                                   | Anmeldung - SZ vereinbart (Wahr/Falsch)                                 |
| `DN().Monat().BeginnAnderweitigePflichtversicherung`{data-clipboard-text="DN().Monat().BeginnAnderweitigePflichtversicherung"} | Abmeldung - Beginn anderweitige Pflichtversicherung (Datum)             |
| `DN().Monat().BerufFreierDn`{data-clipboard-text="DN().Monat().BerufFreierDn"}                                                 | Beruf                                                                   |
| `DN().Monat().EndeTaetigkeit`{data-clipboard-text="DN().Monat().EndeTaetigkeit"}                                               | Ende der Tätigkeit                                                      |
| `DN().Monat().EntgeltMonatlich`{data-clipboard-text="DN().Monat().EntgeltMonatlich"}                                           | Vereinbartes Entgelt monatlich aktiviert (Wahr/Falsch)                  |
| `DN().Monat().Erfuellungszeitpunkt`{data-clipboard-text="DN().Monat().Erfuellungszeitpunkt"}                                   | Anmeldung - Erfüllungszeitpunkt                                         |
| `DN().Monat().FreierDNmitSZ`{data-clipboard-text="DN().Monat().FreierDNmitSZ"}                                                 | Sozialversicherung - Freier Dienstnehmer mit SZ aktiviert (Wahr/Falsch) |
| `DN().Monat().SZBetrag`{data-clipboard-text="DN().Monat().SZBetrag"}                                                           | SZ vereinbarter Betrag                                                  |
| `DN().Monat().VereinbartesEntgelt`{data-clipboard-text="DN().Monat().VereinbartesEntgelt"}                                     | Vereinbarter Entgeltbetrag                                              |
| `DN().Monat().Vertragsabschluss`{data-clipboard-text="DN().Monat().Vertragsabschluss"}                                         | Vertragsabschluss (Datum)                                               |
| `DN().Monat().VertragsdauerBis`{data-clipboard-text="DN().Monat().VertragsdauerBis"}                                           | Vertragsdauer bis (Datum)                                               |
| `DN().Monat().VertragsdauerVon`{data-clipboard-text="DN().Monat().VertragsdauerVon"}                                           | Vertragsdauer von (Datum)                                               |
| `DN().Monat().Zahlungstermine`{data-clipboard-text="DN().Monat().Zahlungstermine"}                                             | Zahlungstermine                                                         |
| `DN().ArtDerErbrachtenLeistung`{data-clipboard-text="DN().ArtDerErbrachtenLeistung"}                                           | Art der erbrachten Leistung                                             |

### Kurzarbeit

| **Formel**                                                                                                                                                   | **Beschreibung**                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `DN().Monat().KurzarbeitCovid19().AbgerechnetInMonth`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().AbgerechnetInMonth"}                             | Zeigt an, ob im ausgewählten Monat Kurzarbeit abgerechnet wurde (Wahr/Falsch) |
| `DN().Monat().KurzarbeitCovid19().Arbeitsstunden`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().Arbeitsstunden"}                                     | Geleistete Arbeitsstunden (ohne Überstunden)                                  |
| `DN().Monat().KurzarbeitCovid19().Ausfallstunden`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().Ausfallstunden"}                                     | Verrechnete Ausfallstunden                                                    |
| `DN().Monat().KurzarbeitCovid19().BruttoVorKua68_1`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().BruttoVorKua68_1"}                                 | Brutto vor Kurzarbeit, davon § 68 (1)                                         |
| `DN().Monat().KurzarbeitCovid19().BruttoVorKua68_2`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().BruttoVorKua68_2"}                                 | Brutto vor Kurzarbeit, davon § 68 (2)                                         |
| `DN().Monat().KurzarbeitCovid19().BruttoVorKuaBeihilfe`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().BruttoVorKuaBeihilfe"}                         | Brutto vor Kurzarbeit (Bruttoentgelt für Kurzarbeitsbeihilfe)                 |
| `DN().Monat().KurzarbeitCovid19().BruttoVorKuaNettoersatzrate`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().BruttoVorKuaNettoersatzrate"}           | Brutto vor Kurzarbeit (Bruttoentgelt für Kurzarbeitsunterstützung)            |
| `DN().Monat().KurzarbeitCovid19().Bruttozuschlag`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().Bruttozuschlag"}                                     | Bruttozuschlag                                                                |
| `DN().Monat().KurzarbeitCovid19().BVBemVorKua`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().BVBemVorKua"}                                           | BV-Bemessung vor Kurzarbeit                                                   |
| `DN().Monat().KurzarbeitCovid19().ErhoehungBvBem`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().ErhoehungBvBem"}                                     | Erhöhung BV-Bemessung                                                         |
| `DN().Monat().KurzarbeitCovid19().ErhoehungSvBem`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().ErhoehungSvBem"}                                     | Erhöhung SV-Bemessung                                                         |
| `DN().Monat().KurzarbeitCovid19().ErhoehungSvBemHandlungsempf`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().ErhoehungSvBemHandlungsempf"}           | Erhöhung SV-Bemessung Handlungsempfehlung                                     |
| `DN().Monat().KurzarbeitCovid19().Ersatzleistungen`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().Ersatzleistungen"}                                 | Stunden, für die Ersatzleistungen gebühren                                    |
| `DN().Monat().KurzarbeitCovid19().IsLehrling`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().IsLehrling"}                                             | DN gilt für Kurzarbeit als Lehrling (Wahr/Falsch)                             |
| `DN().Monat().KurzarbeitCovid19().Krankenstand`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().Krankenstand"}                                         | Entgeltfortzahlung für Krankenstand                                           |
| `DN().Monat().KurzarbeitCovid19().KurzarbeitsabschlagHandlungsempf`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().KurzarbeitsabschlagHandlungsempf"} | Corona-Kurzarbeitsabschlag Handlungsempfehlung                                |
| `DN().Monat().KurzarbeitCovid19().Kurzarbeitsbeihilfe`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().Kurzarbeitsbeihilfe"}                           | Kurzarbeitsbeihilfe                                                           |
| `DN().Monat().KurzarbeitCovid19().Kurzarbeitsunterstuetzung`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().Kurzarbeitsunterstuetzung"}               | Kurzarbeitsunterstützung                                                      |
| `DN().Monat().KurzarbeitCovid19().Kurzarbeitsunterstuetzung68_1`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().Kurzarbeitsunterstuetzung68_1"}       | Davon steuerfrei gem. § 68 (1)                                                |
| `DN().Monat().KurzarbeitCovid19().Kurzarbeitsunterstuetzung68_2`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().Kurzarbeitsunterstuetzung68_2"}       | Davon steuerfrei gem. § 68 (2)                                                |
| `DN().Monat().KurzarbeitCovid19().MindestBruttoWaehrendKua`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().MindestBruttoWaehrendKua"}                 | Mindest-Brutto während Kurzarbeit                                             |
| `DN().Monat().KurzarbeitCovid19().NazAbrechnungszeitraum`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().NazAbrechnungszeitraum"}                     | Normalarbeitsstunden im Abrechnungszeitraum                                   |
| `DN().Monat().KurzarbeitCovid19().Nettoersatzrate`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().Nettoersatzrate"}                                   | Nettoersatzrate in %                                                          |
| `DN().Monat().KurzarbeitCovid19().Pauschalsatz`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().Pauschalsatz"}                                         | Pauschalsatz pro Ausfallstunde umgerechnet in ... h                           |
| `DN().Monat().KurzarbeitCovid19().ReduktionBrutto`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().ReduktionBrutto"}                                   | Reduktion Brutto durch Kurzarbeit                                             |
| `DN().Monat().KurzarbeitCovid19().SvBemVorKua`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().SvBemVorKua"}                                           | SV-Bemessung vor Kurzarbeit                                                   |
| `DN().Monat().KurzarbeitCovid19().Ueberstunden`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().Ueberstunden"}                                         | Geleistete Überstunden                                                        |
| `DN().Monat().KurzarbeitCovid19().UrlaubZa`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().UrlaubZa"}                                                 | Konsumierter Urlaub                                                           |
| `DN().Monat().KurzarbeitCovid19().Za`{data-clipboard-text="DN().Monat().KurzarbeitCovid19().Za"}                                                             | Konsumiertes Zeitguthaben                                                     |
| `DN().AMSKuaProjekt.AMSNr`{data-clipboard-text="DN().AMSKuaProjekt.AMSNr"}                                                                                   | AMS-Nummer                                                                    |
| `DN().AMSKuaProjekt.Beginn`{data-clipboard-text="DN().AMSKuaProjekt.Beginn"}                                                                                 | AMS-KUA-Projekt Beginn                                                        |
| `DN().AMSKuaProjekt.DnKuaZr`{data-clipboard-text="DN().AMSKuaProjekt.DnKuaZr"}                                                                               | Anzahl Dienstnehmer pro AMS-KUA-Projekt                                       |
| `DN().AMSKuaProjekt.Ende`{data-clipboard-text="DN().AMSKuaProjekt.Ende"}                                                                                     | AMS-KUA-Projekt Ende                                                          |
| `DN().AMSKuaProjekt.RZLNr`{data-clipboard-text="DN().AMSKuaProjekt.RZLNr"}                                                                                   | RZL Nummer                                                                    |
| `DN().KurzarbeitCovid19().Aktiviert`{data-clipboard-text="DN().KurzarbeitCovid19().Aktiviert"}                                                               | Kurzarbeit aktiviert (Wahr/Falsch)                                            |
| `DN().KurzarbeitCovid19().AMSProjektNr`{data-clipboard-text="DN().KurzarbeitCovid19().AMSProjektNr"}                                                         | AMS-Projektnummer                                                             |
| `DN().KurzarbeitCovid19().Arbeitsausfall`{data-clipboard-text="DN().KurzarbeitCovid19().Arbeitsausfall"}                                                     | Arbeitsausfall in %                                                           |
| `DN().KurzarbeitCovid19().Beginn`{data-clipboard-text="DN().KurzarbeitCovid19().Beginn"}                                                                     | Beginn der Kurzarbeit                                                         |
| `DN().KurzarbeitCovid19().BruttoVorKua`{data-clipboard-text="DN().KurzarbeitCovid19().BruttoVorKua"}                                                         | Brutto vor Kurzarbeit (Bruttoentgelt für Kurzarbeitsbeihilfe)                 |
| `DN().KurzarbeitCovid19().BvBemVorKua`{data-clipboard-text="DN().KurzarbeitCovid19().BvBemVorKua"}                                                           | BV-Bemessung vor Kurzarbeit                                                   |
| `DN().KurzarbeitCovid19().Ende`{data-clipboard-text="DN().KurzarbeitCovid19().Ende"}                                                                         | Ende der Kurzarbeit                                                           |
| `DN().KurzarbeitCovid19().NazLtKv`{data-clipboard-text="DN().KurzarbeitCovid19().NazLtKv"}                                                                   | Normalarbeitszeit laut Kollektivvertrag                                       |
| `DN().KurzarbeitCovid19().RZLProjektNr`{data-clipboard-text="DN().KurzarbeitCovid19().RZLProjektNr"}                                                         | RZL-Projekt Nummer                                                            |
| `DN().KurzarbeitCovid19().SvBemVorKua`{data-clipboard-text="DN().KurzarbeitCovid19().SvBemVorKua"}                                                           | SV-Bemessung vor Kurzarbeit                                                   |
| `DN().KurzarbeitCovid19().UestdPauschUnwiderruflich`{data-clipboard-text="DN().KurzarbeitCovid19().UestdPauschUnwiderruflich"}                               | Überstundenpauschale unwiderruflich aktiviert (Wahr/Falsch)                   |
| `DN().KurzarbeitCovid19().WochenStd`{data-clipboard-text="DN().KurzarbeitCovid19().WochenStd"}                                                               | Wochenstunden                                                                 |
                                                                                                                                                         
### Auswahlkriterium

| **Formel**                                                                   | **Beschreibung**             |
| ---------------------------------------------------------------------------- | ---------------------------- |
| `Auswahlkriterium().Nummer`{data-clipboard-text="Auswahlkriterium().Nummer"} | Nummer des Auswahlkriteriums |
| `Auswahlkriterium().Text`{data-clipboard-text="Auswahlkriterium().Text"}     | Text des Auswahlkriteriums   |

### Dienstverhinderung

| **Formel**                                                                             | **Beschreibung**                                                              |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `Dienstverhinderung().InAT`{data-clipboard-text="Dienstverhinderung().InAT"}           | Gibt an, ob die Dienstverhinderung in Arbeitstagen geführt wird (Wahr/Falsch) |
| `Dienstverhinderung().InStunden`{data-clipboard-text="Dienstverhinderung().InStunden"} | Gibt an, ob die Dienstverhinderung in Stunden geführt wird (Wahr/Falsch)      |
| `Dienstverhinderung().Name`{data-clipboard-text="Dienstverhinderung().Name"}           | Bezeichnung der Dienstverhinderung                                            |
| `Dienstverhinderung().Nummer`{data-clipboard-text="Dienstverhinderung().Nummer"}       | Nummer der Dienstverhinderung                                                 |
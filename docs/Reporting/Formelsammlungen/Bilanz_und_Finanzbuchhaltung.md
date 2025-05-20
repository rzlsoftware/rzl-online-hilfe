# Formelsammlung für die Bilanz und Finanzbuchhaltung

Im folgenden Kapitel finden Sie die Auflistung der verfügbaren Formeln für das Reporting im RZL Bilanz- und Finanzbuchhaltungsprogramm. Seitens RZL Software werden Ihnen mit dem Reporting-Modul auch diverse RZL-Musterreports zur Verfügung gestellt.

## RZL Musterreports Finanzbuchhaltung und Bilanz

Neben Briefvorlagen für Mahnungen können Sie auch unterschiedliche Musteranhänge, Checklisten oder Kennzahlenanalysen für Ihre Jahresabschlüsse übernehmen und nach Ihren individuellen Bedürfnissen einrichten. Eine aktuelle Übersicht finden Sie in der *ZMV* unter *Allg. Dateien / Installieren* im Registerblatt *Reports* oder unter [Auflistung Musterreports](../Auflistung_Musterreports.md) beschrieben.

!!! info "Tipp"
    Die RZL-Musterreports werden stetig erweitert. Neuerungen werden auch im Zuge der RZL-Programmaktualisierung in den  RZL-Newslettern veröffentlicht.

Diese Musterreports können nach erfolgreicher Installation in der ZMV auf den gewünschten Klienten überspielt und anschließend individuell angepasst und abgeändert werden.

## Liste der Bilanz- und Finanzbuchhaltungsformeln

Die folgenden Formeln sind sowohl in der RZL-Finanzbuchhaltung als auch im RZL-Bilanzprogramm anwendbar.

### Zeitraum

| **Formel**                                                                       | **Beschreibung**                                                           |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `ZR.AktMonat`{data-clipboard-text="ZR.AktMonat"}                                 | Zeigt den letzten Monat des Wirtschaftsjahres an                           |
| `ZR.FolgeJ`{data-clipboard-text="ZR.FolgeJ"}                                     | Zeigt das Folgejahr an, z.B. 2017                                          |
| `ZR.Jahr().Anfang`{data-clipboard-text="ZR.Jahr().Anfang"}                       | Erster Tag des Wirtschaftsjahres                                           |
| `ZR.Jahr().BeginnMon`{data-clipboard-text="ZR.Jahr().BeginnMon"}                 | Nummer des ersten Monats des Wirtschaftsjahres                             |
| `ZR.Jahr().Ende`{data-clipboard-text="ZR.Jahr().Ende"}                           | Letzter Tag des Wirtschaftsjahres                                          |
| `ZR.Jahr().EndeMon`{data-clipboard-text="ZR.Jahr().EndeMon"}                     | Nummer des letzten Monats des Wirtschaftsjahres                            |
| `ZR.Jahr().Jahr`{data-clipboard-text="ZR.Jahr().Jahr"}                           | Jahr des Wirtschaftsjahres                                                 |
| `ZR.Jahr().MonatKJ()`{data-clipboard-text="ZR.Jahr().MonatKJ()"}                 | Nummer des ausgewählten Monats im Kalenderjahr                             |
| `ZR.Jahr().MonatKJ().Anfang`{data-clipboard-text="ZR.Jahr().MonatKJ().Anfang"}   | Nummer des ausgewählten Monats im Kalenderjahr Anfang                      |
| `ZR.Jahr().MonatKJ().Ende`{data-clipboard-text="ZR.Jahr().MonatKJ().Ende"}       | Nummer des ausgewählten Monats im Kalenderjahr Ende                        |
| `ZR.Jahr().MonatKJ().MonatWJ`{data-clipboard-text="ZR.Jahr().MonatKJ().MonatWJ"} | Nummer des ausgewählten Monats im Kalenderjahr Monat des Wirtschaftsjahres |
| `ZR.Jahr().MonatWJ()`{data-clipboard-text="ZR.Jahr().MonatWJ()"}                 | Nummer des ausgewählten Monats im WJ                                       |
| `ZR.Jahr().MonatWJ().Anfang`{data-clipboard-text="ZR.Jahr().MonatWJ().Anfang"}   | Nummer des ausgewählten Monats im WJ Anfang                                |
| `ZR.Jahr().MonatWJ().Ende`{data-clipboard-text="ZR.Jahr().MonatWJ().Ende"}       | Nummer des ausgewählten Monats im WJ Ende                                  |
| `ZR.Jahr().MonatWJ().MonatKJ`{data-clipboard-text="ZR.Jahr().MonatWJ().MonatKJ"} | Nummer des ausgewählten Monats im WJ Monat des Kalenderjahres              |
| `ZR.Jahr().Vorhanden`{data-clipboard-text="ZR.Jahr().Vorhanden"}                 | Ob das ausgewählte Jahr vorhanden ist (Wahr/Falsch)                        |
| `ZR.Monat().Kurztext`{data-clipboard-text="ZR.Monat().Kurztext"}                 | Kurzbezeichnung des ausgewählten Monats z. B. Apr                          |
| `ZR.Monat().MonWj`{data-clipboard-text="ZR.Monat().MonWj"}                       | Nummer des ausgewählten Monats                                             |
| `ZR.Monat().Römisch`{data-clipboard-text="ZR.Monat().Römisch"}                   | Nummer des ausgewählten Monats in römischen Zahlen z. B. IV                |
| `ZR.Monat().Text`{data-clipboard-text="ZR.Monat().Text"}                         | Name des ausgewählten Monats                                               |
| `ZR.DruckreihenfolgeMonat`{data-clipboard-text="ZR.DruckreihenfolgeMonat"}       | Monat der Druckreihenfolge                                                 |
| `ZR.LetztesBuchungsmonat`{data-clipboard-text="ZR.LetztesBuchungsmonat"}         | Letztes Buchungsmonat                                                      |

### Klientendaten

| **Formel**                                                                         | **Beschreibung**                                  |
| ---------------------------------------------------------------------------------- | ------------------------------------------------- |
| `Stamm.BankBIC`{data-clipboard-text="Stamm.BankBIC"}                               | BIC des Klienten                                  |
| `Stamm.BankBLZ`{data-clipboard-text="Stamm.BankBLZ"}                               | Bankleitzahl des Klienten                         |
| `Stamm.BankIBAN`{data-clipboard-text="Stamm.BankIBAN"}                             | IBAN des Klienten                                 |
| `Stamm.BankKtoNr`{data-clipboard-text="Stamm.BankKtoNr"}                           | Bankkontennummer des Klienten                     |
| `Stamm.BankName`{data-clipboard-text="Stamm.BankName"}                             | Name der Bank                                     |
| `Stamm.Beruf`{data-clipboard-text="Stamm.Beruf"}                                   | Art der Tätigkeit des Klienten                    |
| `Stamm.EMail`{data-clipboard-text="Stamm.EMail"}                                   | E-Mail-Adresse des Klienten                       |
| `Stamm.FbGericht`{data-clipboard-text="Stamm.FbGericht"}                           | Firmenbuchgericht des Klienten                    |
| `Stamm.FbName`{data-clipboard-text="Stamm.FbName"}                                 | Firmenname bzw. abweichender Name für Firmenbuch  |
| `Stamm.FbNummer`{data-clipboard-text="Stamm.FbNummer"}                             | Firmenbuchnummer des Klienten                     |
| `Stamm.Finanz`{data-clipboard-text="Stamm.Finanz"}                                 | Finanzamt des Klienten                            |
| `Stamm.FinanzDienststelle`{data-clipboard-text="Stamm.FinanzDienststelle"}         | Finanzamtsdienststelle des Klienten               |
| `Stamm.FinanzNummer`{data-clipboard-text="Stamm.FinanzNummer"}                     | Finanzamtnummer                                   |
| `Stamm.FinanzOrt`{data-clipboard-text="Stamm.FinanzOrt"}                           | Ort des Finanzamtes des Klienten                  |
| `Stamm.FinanzPlz`{data-clipboard-text="Stamm.FinanzPlz"}                           | Postleitzahl des Finanzamtes des Klienten         |
| `Stamm.FinanzStrasse`{data-clipboard-text="Stamm.FinanzStrasse"}                   | Straße des Finanzamtes des Klienten               |
| `Stamm.FinanzZahlungsreferenz`{data-clipboard-text="Stamm.FinanzZahlungsreferenz"} | Zahlungsreferenz des Finanzamtes                  |
| `Stamm.Gruendung`{data-clipboard-text="Stamm.Gruendung"}                           | Gründungsdatum des Klienten                       |
| `Stamm.GW`{data-clipboard-text="Stamm.GW"}                                         | Zeigt die Grundwährung an                         |
| `Stamm.Name`{data-clipboard-text="Stamm.Name"}                                     | Name des Klienten                                 |
| `Stamm.Nummer`{data-clipboard-text="Stamm.Nummer"}                                 | Nummer des Klienten                               |
| `Stamm.NummerWert`{data-clipboard-text="Stamm.NummerWert"}                         | Nummer des Klienten                               |
| `Stamm.Ort`{data-clipboard-text="Stamm.Ort"}                                       | Ort des Klienten                                  |
| `Stamm.Plz`{data-clipboard-text="Stamm.Plz"}                                       | Länderkennzeichen und Postleitzahl des Klienten   |
| `Stamm.Rechtsform`{data-clipboard-text="Stamm.Rechtsform"}                         | Rechtsform des Klienten z. B. Kapitalgesellschaft |
| `Stamm.RechtsformNr`{data-clipboard-text="Stamm.RechtsformNr"}                     | Rechtsformnummer des Klienten                     |
| `Stamm.Steuer`{data-clipboard-text="Stamm.Steuer"}                                 | Steuernummer des Klienten                         |
| `Stamm.Strasse`{data-clipboard-text="Stamm.Strasse"}                               | Straße des Klienten                               |
| `Stamm.Telefon1`{data-clipboard-text="Stamm.Telefon1"}                             | Telefonnummer im Feld „Telefon1"                  |
| `Stamm.Telefon2`{data-clipboard-text="Stamm.Telefon2"}                             | Telefonnummer im Feld „Telefon2"                  |
| `Stamm.Uid`{data-clipboard-text="Stamm.Uid"}                                       | UID-Nummer des Klienten                           |

### Bilanzdaten

| **Formel**                                                                     | **Beschreibung**                                                                                       |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `Bil().Jahr().Wert`{data-clipboard-text="Bil().Jahr().Wert"}                   | Wert der gewählten Bilanzposition(en)                                                                  |
| `Bil().Konten`{data-clipboard-text="Bil().Konten"}                             | Kontonummer(n) der Bilanzposition(en)                                                                  |
| `Bil().Monat().Monat`{data-clipboard-text="Bil().Monat().Monat"}               | Zeigt den ausgewählten Monat an                                                                        |
| `Bil().Monat().MonWert`{data-clipboard-text="Bil().Monat().MonWert"}           | Monatswert der ausgewählten Bilanzposition(en)                                                         |
| `Bil().Monat().Wert`{data-clipboard-text="Bil().Monat().Wert"}                 | Kontensaldo bis zum ausgewählten Monat                                                                 |
| `Bil().Nummer`{data-clipboard-text="Bil().Nummer"}                             | Nummer der ausgewählten Bilanzposition                                                                 |
| `Bil().Text`{data-clipboard-text="Bil().Text"}                                 | Bezeichnung der ausgewählten Bilanzposition                                                            |
| `Bil().ÜS`{data-clipboard-text="Bil().ÜS"}                                     | Überschrift der Bilanzposition, z.B. G (große Überschrift)                                             |
| `BilAlt().Jahr().Wert`{data-clipboard-text="BilAlt().Jahr().Wert"}             | Wert der gewählten Bilanzposition(en) der alten Gliederung                                             |
| `BilAlt().Konten`{data-clipboard-text="BilAlt().Konten"}                       | Kontonummer(n) der Bilanzposition(en) der alten Gliederung                                             |
| `BilAlt().Monat().Monat`{data-clipboard-text="BilAlt().Monat().Monat"}         | Zeigt den ausgewählten Monat an der alten Gliederung                                                   |
| `BilAlt().Monat().MonWert`{data-clipboard-text="BilAlt().Monat().MonWert"}     | Monatswert der ausgewählten Bilanzposition(en) der alten Gliederung                                    |
| `BilAlt().Monat().Wert`{data-clipboard-text="BilAlt().Monat().Wert"}           | Kontensaldo bis zum ausgewählten Monat der alten Gliederung                                            |
| `BilAlt().MonatWJ().Monat`{data-clipboard-text="BilAlt().MonatWJ().Monat"}     | Zeigt den ausgewählten Monat im WJ der alten Gliederung                                                |
| `BilAlt().MonatWJ().MonWert`{data-clipboard-text="BilAlt().MonatWJ().MonWert"} | Monatswert der ausgewählten Bilanzposition(en) des ausgewählten Wirtschaftsjahres der alten Gliederung |
| `BilAlt().MonatWJ().Wert`{data-clipboard-text="BilAlt().MonatWJ().Wert"}       | Kontensaldo bis zum ausgewählten Monat des Wirtschaftsjahres der alten Gliederung                      |
| `BilAlt().Nummer`{data-clipboard-text="BilAlt().Nummer"}                       | Nummer der ausgewählten Bilanzposition der alten Gliederung                                            |
| `BilAlt().Text`{data-clipboard-text="BilAlt().Text"}                           | Bezeichnung der ausgewählten Bilanzposition der alten Gliederung                                       |
| `BilAlt().ÜS`{data-clipboard-text="BilAlt().ÜS"}                               | Überschrift der Bilanzposition, z.B. G (große Überschrift) der alten Gliederung                        |
| `Bil().MonatWJ().Monat`{data-clipboard-text="Bil().MonatWJ().Monat"}           | Zeigt den ausgewählten Monat im WJ der Gliederung                                                      |
| `Bil().MonatWJ().MonWert`{data-clipboard-text="Bil().MonatWJ().MonWert"}       | Monatswert der ausgewählten Bilanzposition(en) des ausgewählten Wirtschaftsjahres der Gliederung       |
| `Bil().MonatWJ().Wert`{data-clipboard-text="Bil().MonatWJ().Wert"}             | Kontensaldo bis zum ausgewählten Monat des WJ der Gliederung                                           |

### Gewinn- und Verlustrechnung

| **Formel**                                                                                                       | **Beschreibung**                                                                    |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `Guv().Jahr().Wert`{data-clipboard-text="Guv().Jahr().Wert"}                                                     | Wert der gewählten GuV-Position(en)                                                 |
| `Guv().Konten`{data-clipboard-text="Guv().Konten"}                                                               | Kontonummer(n) der GuV-Position(en)                                                 |
| `Guv().Monat().Monat`{data-clipboard-text="Guv().Monat().Monat"}                                                 | Zeigt den ausgewählten Monat an                                                     |
| `Guv().Monat().MonWert`{data-clipboard-text="Guv().Monat().MonWert"}                                             | Monatswert der ausgewählten GuV-Position(en)                                        |
| `Guv().Monat().Wert`{data-clipboard-text="Guv().Monat().Wert"}                                                   | Kontensaldo bis zum ausgewählten Monat                                              |
| `GuV().MonatWJ().Monat`{data-clipboard-text="GuV().MonatWJ().Monat"}                                             | Zeigt den ausgewählten Monat im jeweiligen WJ an                                    |
| `GuV().MonatWJ().MonWert`{data-clipboard-text="GuV().MonatWJ().MonWert"}                                         | Monatswert der ausgewählten GuV-Position(en) im jeweiligen WJ                       |
| `GuV().MonatWJ().Wert`{data-clipboard-text="GuV().MonatWJ().Wert"}                                               | Kontensaldo bis zum ausgewählten Monat des jeweiligen WJ.                           |
| `Guv().Nummer`{data-clipboard-text="Guv().Nummer"}                                                               | Nummer der ausgewählten GuV-Position                                                |
| `Guv().Text`{data-clipboard-text="Guv().Text"}                                                                   | Bezeichnung der ausgewählten GuV-Position                                           |
| `Guv().ÜS`{data-clipboard-text="Guv().ÜS"}                                                                       | Überschrift der Bilanzposition, z.B. G (große Überschrift)                          |
| `GuvAlt().Jahr().Wert`{data-clipboard-text="GuvAlt().Jahr().Wert"}                                               | Wert der gewählten GuV-Position(en) der alten Gliederung                            |
| `GuvAlt().Konten`{data-clipboard-text="GuvAlt().Konten"}                                                         | Kontonummer(n) der GuV-Position(en) der alten Gliederung                            |
| `GuvAlt().Monat().Monat`{data-clipboard-text="GuvAlt().Monat().Monat"}                                           | Zeigt den ausgewählten Monat an der alten Gliederung                                |
| `GuvAlt().Monat().MonWert`{data-clipboard-text="GuvAlt().Monat().MonWert"}                                       | Monatswert der ausgewählten GuV-Position(en) der alten Gliederung                   |
| `GuVAlt().MonatWJ().Monat`{data-clipboard-text="GuVAlt().MonatWJ().Monat"}                                       | Zeigt den ausgewählten Monat der alten Gliederung im jeweiligen WJ an               |
| `GuVAlt().MonatWJ().MonWert`{data-clipboard-text="GuVAlt().MonatWJ().MonWert"}                                   | Monatswert der ausgewählten GuV-Position(en) der alten Gliederung im jeweiligen WJ. |
| `GuVAlt().MonatWJ().Wert`{data-clipboard-text="GuVAlt().MonatWJ().Wert"}                                         | Kontensaldo der alten Gliederung bis zum ausgewählten Monat des jeweiligen WJ.      |
| `GuvAlt().Monat().Wert`{data-clipboard-text="GuvAlt().Monat().Wert"}                                             | Kontensaldo bis zum ausgewählten Monat der alten Gliederung                         |
| `GuvAlt().Nummer`{data-clipboard-text="GuvAlt().Nummer"}                                                         | Nummer der ausgewählten GuV-Position der alten Gliederung                           |
| `GuvAlt().Text`{data-clipboard-text="GuvAlt().Text"}                                                             | Bezeichnung der ausgewählten GuV-Position der alten Gliederung                      |
| `GuvAlt().ÜS`{data-clipboard-text="GuvAlt().ÜS"}                                                                 | Überschrift der Bilanzposition, z.B. G (große Überschrift) der alten Gliederung     |
| `GuVKonto().Jahr().NettoUmsätze().Beleg`{data-clipboard-text="GuVKonto().Jahr().NettoUmsätze().Beleg"}           | Belegnummer des GuV-Konto Nettoumsatzes pro Zeile                                   |
| `GuVKonto().Jahr().NettoUmsätze().Datum`{data-clipboard-text="GuVKonto().Jahr().NettoUmsätze().Datum"}           | Datum des GuV-Konto Nettoumsatzes pro Zeile                                         |
| `GuVKonto().Jahr().NettoUmsätze().Gegenkonto`{data-clipboard-text="GuVKonto().Jahr().NettoUmsätze().Gegenkonto`} | Gegenkonto des GuV-Konto Nettoumsatzes pro Zeile                                    |
| `GuVKonto().Jahr().NettoUmsätze().Haben`{data-clipboard-text="GuVKonto().Jahr().NettoUmsätze().Haben"}           | Habenbetrag des GuV-Konto Nettoumsatzes pro Zeile                                   |
| `GuVKonto().Jahr().NettoUmsätze().Konto`{data-clipboard-text="GuVKonto().Jahr().NettoUmsätze().Konto"}           | Kontonummer des GuV-Konto Nettoumsatzes pro Zeile                                   |
| `GuVKonto().Jahr().NettoUmsätze().Soll`{data-clipboard-text="GuVKonto().Jahr().NettoUmsätze().Soll"}             | Sollbetrag des GuV-Konto Nettoumsatzes pro Zeile                                    |
| `GuVKonto().Jahr().NettoUmsätze().Text`{data-clipboard-text="GuVKonto().Jahr().NettoUmsätze().Text"}             | Bezeichnung des GuV-Konto Nettoumsatzes pro Zeile                                   |
| `GuVKonto().Jahr().NettoUmsätze().Wert`{data-clipboard-text="GuVKonto().Jahr().NettoUmsätze().Wert"}             | Betrag des GuV-Konto Nettoumsatzes pro Zeile                                        |
| `GuVKonto().Nummer`{data-clipboard-text="GuVKonto().Nummer"}                                                     | Nummer des GuV-Kontos                                                               |
| `GuVKonto().Text`{data-clipboard-text="GuVKonto().Text"}                                                         | Bezeichnung des GuV-Kontos                                                          |

### KER - Kurzfristige Erfolgsrechnung

| **Formel**                                                                       | **Beschreibung**                                                             |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `Ker().Jahr().Planwert`{data-clipboard-text="Ker().Jahr().Planwert"}             | Planwert der KER-Position(en)                                                |
| `Ker().Jahr().Wert`{data-clipboard-text="Ker().Jahr().Wert"}                     | Werte der ausgewählten KER-Position(en)                                      |
| `Ker().Konten`{data-clipboard-text="Ker().Konten"}                               | Aufzählung aller Konten, die zu dieser KER-Position gehören                  |
| `Ker().Monat().Monat`{data-clipboard-text="Ker().Monat().Monat"}                 | Zeigt den ausgewählten Monat an                                              |
| `Ker().Monat().MonPlanWert`{data-clipboard-text="Ker().Monat().MonPlanWert"}     | Monatsplanwert der ausgewählten KER-Position(en)                             |
| `Ker().Monat().MonWert`{data-clipboard-text="Ker().Monat().MonWert"}             | Monatswert der ausgewählten KER-Position(en)                                 |
| `Ker().Monat().PlanWert`{data-clipboard-text="Ker().Monat().PlanWert"}           | Planwert der ausgewählten KER-Position(en) bis zum ausgewählten Monat        |
| `Ker().Monat().Wert`{data-clipboard-text="Ker().Monat().Wert"}                   | Wert der KER-Position(en) bis zum ausgewählten Monat                         |
| `Ker().MonatWJ().Monat`{data-clipboard-text="Ker().MonatWJ().Monat"}             | Zeigt den ausgewählten Monat im WJ an                                        |
| `Ker().MonatWJ().MonPlanWert`{data-clipboard-text="Ker().MonatWJ().MonPlanWert"} | Monatsplanwert des WJ der ausgewählten KER-Position(en)                      |
| `Ker().MonatWJ().MonWert`{data-clipboard-text="Ker().MonatWJ().MonWert"}         | Monatswert des WJ der ausgewählten KER-Position(en)                          |
| `Ker().MonatWJ().PlanWert`{data-clipboard-text="Ker().MonatWJ().PlanWert"}       | Planwert des WJ der ausgewählten KER-Position(en) bis zum ausgewählten Monat |
| `Ker().MonatWJ().Wert`{data-clipboard-text="Ker().MonatWJ().Wert"}               | Wert des WJ der KER-Position(en) bis zum ausgewählten Monat                  |
| `Ker().Art`{data-clipboard-text="Ker().Art"}                                     | Art der KER-Position                                                         |
| `Ker().Nummer`{data-clipboard-text="Ker().Nummer"}                               | Nummer der KER-Position                                                      |
| `Ker().Text`{data-clipboard-text="Ker().Text"}                                   | Text der ausgewählten KER-Position                                           |

### Kostenrechnung

| **Formel**                                                                                                     | **Beschreibung**                                                               |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `KoArt().Jahr().Plan`{data-clipboard-text="KoArt().Jahr().Plan"}                                               | Planwert                                                                       |
| `KoArt().Jahr().PlanWert`{data-clipboard-text="KoArt().Jahr().PlanWert"}                                       | Jahresplanwert der ausgewählten Kostenart(en)                                  |
| `KoArt().Jahr().Wert`{data-clipboard-text="KoArt().Jahr().Wert"}                                               | Jahreswert der ausgewählten Kostenart(en)                                      |
| `KoArt().Monat().Monat`{data-clipboard-text="KoArt().Monat().Monat"}                                           | Zeigt den ausgewählten Monat an                                                |
| `KoArt().Monat().MonPlanWert`{data-clipboard-text="KoArt().Monat().MonPlanWert"}                               | Monatsplanwert der ausgewählten Kostenart(en)                                  |
| `KoArt().Monat().MonWert`{data-clipboard-text="KoArt().Monat().MonWert"}                                       | Monatswert der ausgewählten Kostenart(en)                                      |
| `KoArt().Monat().Plan`{data-clipboard-text="KoArt().Monat().Plan"}                                             | Planwert                                                                       |
| `KoArt().Monat().Planwert`{data-clipboard-text="KoArt().Monat().Planwert"}                                     | Planwert der Kostenart(en) bis zum ausgewählten Monat                          |
| `KoArt().Monat().Wert`{data-clipboard-text="KoArt().Monat().Wert"}                                             | Wert der Kostenart(en) bis zum ausgewählten Monat                              |
| `KoArt().Nummer`{data-clipboard-text="KoArt().Nummer"}                                                         | Nummer der Kostenart                                                           |
| `KoArt().Text`{data-clipboard-text="KoArt().Text"}                                                             | Bezeichnung der Kostenart                                                      |
| `KoArt().Stelle().Jahr().Planwert`{data-clipboard-text="KoArt().Stelle().Jahr().Planwert"}                     | Jahresplanwert der ausgewählten Kostenart und Kostenstelle                     |
| `KoArt().Stelle().Jahr().Wert`{data-clipboard-text="KoArt().Stelle().Jahr().Wert"}                             | Jahreswert der ausgewählten Kostenart und Kostenstelle                         |
| `KoArt().Stelle().Monat().Monat`{data-clipboard-text="KoArt().Stelle().Monat().Monat"}                         | Zeigt den ausgewählten Monat an                                                |
| `KoArt().Stelle().Monat().MonPlanWert`{data-clipboard-text="KoArt().Stelle().Monat().MonPlanWert"}             | Monatsplanwert der ausgewählten Kostenart(en) und  Kostenstelle(n)             |
| `KoArt().Stelle().Monat().MonWert`{data-clipboard-text="KoArt().Stelle().Monat().MonWert"}                     | Monatswert der ausgewählten Kostenart(en) und Kostenstelle(n)                  |
| `KoArt().Stelle().Monat().PlanWert`{data-clipboard-text="KoArt().Stelle().Monat().PlanWert"}                   | Planwert der Kostenart(en) und Kostenstelle(n) bis zum  ausgewählten Monat     |
| `KoArt().Stelle().Monat().Wert`{data-clipboard-text="KoArt().Stelle().Monat().Wert"}                           | Ergebnis der Kostenart(en) und Kostenstelle(n) bis zum ausgewählten Monat      |
| `KoStel().Jahr().Erlös`{data-clipboard-text="KoStel().Jahr().Erlös"}                                           | Jahressumme der Erlöse der Kostenstelle(n)                                     |
| `KoStel().Jahr().Kosten`{data-clipboard-text="KoStel().Jahr().Kosten"}                                         | Jahressumme der Kosten der Kostenstelle(n)                                     |
| `KoStel().Jahr().PlanErlös`{data-clipboard-text="KoStel().Jahr().PlanErlös"}                                   | Jahressumme der Planerlöse der Kostenstelle(n)                                 |
| `KoStel().Jahr().PlanKosten`{data-clipboard-text="KoStel().Jahr().PlanKosten"}                                 | Jahressumme der Plankosten der Kostenstelle(n)                                 |
| `KoStel().Jahr().PlanWert`{data-clipboard-text="KoStel().Jahr().PlanWert"}                                     | Jahressumme der Planwerte der Kostenstelle(n)                                  |
| `KoStel().Jahr().Wert`{data-clipboard-text="KoStel().Jahr().Wert"}                                             | Jahresergebnis der Kostenstelle(n)                                             |
| `KoStel().Monat().Erlös`{data-clipboard-text="KoStel().Monat().Erlös"}                                         | Summe der Erlöse bis zum ausgewählten Monat                                    |
| `KoStel().Monat().Kosten`{data-clipboard-text="KoStel().Monat().Kosten"}                                       | Summe der Kosten bis zum ausgewählten Monat                                    |
| `KoStel().Monat().Monat`{data-clipboard-text="KoStel().Monat().Monat"}                                         | Zeigt den ausgewählten Monat an                                                |
| `KoStel().Monat().MonErlös`{data-clipboard-text="KoStel().Monat().MonErlös"}                                   | Monatserlös des ausgewählten Monats                                            |
| `KoStel().Monat().MonKosten`{data-clipboard-text="KoStel().Monat().MonKosten"}                                 | Monatskosten des ausgewählten Monats                                           |
| `KoStel().Monat().MonPlanErlös`{data-clipboard-text="KoStel().Monat().MonPlanErlös"}                           | Monatsplanerlöse des ausgewählten Monats                                       |
| `KoStel().Monat().MonPlanKosten`{data-clipboard-text="KoStel().Monat().MonPlanKosten"}                         | Monatsplankosten des ausgewählten Monats                                       |
| `KoStel().Monat().MonPlanWert`{data-clipboard-text="KoStel().Monat().MonPlanWert"}                             | Monatsplanwert des ausgewählten Monats                                         |
| `KoStel().Monat().MonWert`{data-clipboard-text="KoStel().Monat().MonWert"}                                     | Monatsergebnis des ausgewählten Monats                                         |
| `KoStel().Monat().PlanErlös`{data-clipboard-text="KoStel().Monat().PlanErlös"}                                 | Planerlöse bis zum ausgewählten Monat                                          |
| `KoStel().Monat().PlanKosten`{data-clipboard-text="KoStel().Monat().PlanKosten"}                               | Plankosten bis zum ausgewählten Monat                                          |
| `KoStel().Monat().PlanWert`{data-clipboard-text="KoStel().Monat().PlanWert"}                                   | Planwerte bis zum ausgewählten Monat                                           |
| `KoStel().Monat().Wert`{data-clipboard-text="KoStel().Monat().Wert"}                                           | Ergebnis bis zum ausgewählten Monat                                            |
| `KoStel().Nummer`{data-clipboard-text="KoStel().Nummer"}                                                       | Nummer der ausgewählten Kostenstelle                                           |
| `KoStel().Text`{data-clipboard-text="KoStel().Text"}                                                           | Bezeichnung der ausgewählten Kostenstelle                                      |
| `KoStel().Überschrift`{data-clipboard-text="KoStel().Überschrift"}                                             | Ob die ausgewählte Kostenstelle eine Überschrift ist (Wahr/Falsch)             |
| `KoTraeger().Art().Jahr().Planwert`{data-clipboard-text="KoTraeger().Art().Jahr().Planwert"}                   | Jahresplanwert pro Kostenträger und Kostenart                                  |
| `KoTraeger().Art().Wert`{data-clipboard-text="KoTraeger().Art().Wert"}                                         | Jahreswert pro Kostenträger und Kostenart                                      |
| `KoTraeger().Art().Monat().Monat`{data-clipboard-text="KoTraeger().Art().Monat().Monat"}                       | Zeigt den ausgewählten Monat an                                                |
| `KoTraeger().Art().Monat().MonPlanWert`{data-clipboard-text="KoTraeger().Art().Monat().MonPlanWert"}           | Monatsplanwert pro Kostenträger und Kostenart                                  |
| `KoTraeger().Art().Monat().MonWert`{data-clipboard-text="KoTraeger().Art().Monat().MonWert"}                   | Monatswert pro Kostenträger und Kostenart                                      |
| `KoTraeger().Art().Monat().PlanWert`{data-clipboard-text="KoTraeger().Art().Monat().PlanWert"}                 | Planwert bis zum ausgewählten Monat pro Kostenträger und Kostenart             |
| `KoTraeger().Art().Monat().Wert`{data-clipboard-text="KoTraeger().Art().Monat().Wert"}                         | Ergebnis bis zum ausgewählten Monat pro Kostenträger und Kostenart             |
| `KoTraeger().Beginn`{data-clipboard-text="KoTraeger().Beginn"}                                                 | Beginn-Datum des ausgewählten Kostenträgers                                    |
| `KoTraeger().Ende`{data-clipboard-text="KoTraeger().Ende"}                                                     | Ende-Datum des ausgewählten Kostenträgers                                      |
| `KoTraeger().Jahr().Erlös`{data-clipboard-text="KoTraeger().Jahr().Erlös"}                                     | Jahreserlöse der ausgewählten Kostenträger                                     |
| `KoTraeger().Jahr().Kosten`{data-clipboard-text="KoTraeger().Jahr().Kosten"}                                   | Jahreskosten der ausgewählten Kostenträger                                     |
| `KoTraeger().Jahr().PlanErlös`{data-clipboard-text="KoTraeger().Jahr().PlanErlös"}                             | Jahresplanerlöse der ausgewählten Kostenträger                                 |
| `KoTraeger().Jahr().PlanKosten`{data-clipboard-text="KoTraeger().Jahr().PlanKosten"}                           | Jahresplankosten der ausgewählten Kostenträger                                 |
| `KoTraeger().Monat().Erlös`{data-clipboard-text="KoTraeger().Monat().Erlös"}                                   | Kostenträger-Erlöse bis zum ausgewählten Monat                                 |
| `KoTraeger().Monat().Kosten`{data-clipboard-text="KoTraeger().Monat().Kosten"}                                 | Kostenträger-Kosten bis zum ausgewählten Monat                                 |
| `KoTraeger().Monat().Monat`{data-clipboard-text="KoTraeger().Monat().Monat"}                                   | Zeigt den ausgewählten Monat an                                                |
| `KoTraeger().Monat().MonPlanErlös`{data-clipboard-text="KoTraeger().Monat().MonPlanErlös"}                     | Planerlöse des ausgewählten Monats und Kostenträger                            |
| `KoTraeger().Monat().MonPlanKosten`{data-clipboard-text="KoTraeger().Monat().MonPlanKosten"}                   | Plankosten des ausgewählten Monats und Kostenträger                            |
| `KoTraeger().Monat().MonWertErlös`{data-clipboard-text="KoTraeger().Monat().MonWertErlös"}                     | Monatserlös des ausgewählten Monats und Kostenträger                           |
| `KoTraeger().Monat().MonWertKosten`{data-clipboard-text="KoTraeger().Monat().MonWertKosten"}                   | Monatskosten des ausgewählten Monats und Kostenträger                          |
| `KoTraeger().Monat().PlanErlös`{data-clipboard-text="KoTraeger().Monat().PlanErlös"}                           | Kostenträger-Planerlöse bis zum ausgewählten Monat                             |
| `KoTraeger().Monat().PlanKosten`{data-clipboard-text="KoTraeger().Monat().PlanKosten"}                         | Kostenträger-Plankosten bis zum ausgewählten Monat                             |
| `KoTraeger().Nummer`{data-clipboard-text="KoTraeger().Nummer"}                                                 | Nummer des ausgewählten Kostenträgers                                          |
| `KoTraeger().Stelle().Jahr().Erlös`{data-clipboard-text="KoTraeger().Stelle().Jahr().Erlös"}                   | Jahreserlöse der Kostenträger und Kostenstelle                                 |
| `KoTraeger().Stelle().Jahr().Kosten`{data-clipboard-text="KoTraeger().Stelle().Jahr().Kosten"}                 | Jahreskosten der Kostenträger und Kostenstelle                                 |
| `KoTraeger().Stelle().Jahr().PlanErlös`{data-clipboard-text="KoTraeger().Stelle().Jahr().PlanErlös"}           | Jahres-Planerlöse der Kostenträger und Kostenstelle                            |
| `KoTraeger().Stelle().Jahr().PlanKosten`{data-clipboard-text="KoTraeger().Stelle().Jahr().PlanKosten"}         | Jahres-Plankosten der Kostenträger und Kostenstelle                            |
| `KoTraeger().Stelle().Monat().Erlös`{data-clipboard-text="KoTraeger().Stelle().Monat().Erlös"}                 | Erlöse bis zum ausgewählten Monat der Kostenträger und Kostenstelle            |
| `KoTraeger().Stelle().Monat().Kosten`{data-clipboard-text="KoTraeger().Stelle().Monat().Kosten"}               | Kosten bis zum ausgewählten Monat der Kostenträger und Kostenstelle            |
| `KoTraeger().Stelle().Monat().Monat`{data-clipboard-text="KoTraeger().Stelle().Monat().Monat"}                 | Zeigt den ausgewählten Monat an                                                |
| `KoTraeger().Stelle().Monat().MonPlanErlös`{data-clipboard-text="KoTraeger().Stelle().Monat().MonPlanErlös"}   | Planerlöse des ausgewählten Monats, Kostenträger und Kostenstelle              |
| `KoTraeger().Stelle().Monat().MonPlanKosten`{data-clipboard-text="KoTraeger().Stelle().Monat().MonPlanKosten"} | Plankosten des ausgewählten Monats, Kostenträger und Kostenstelle              |
| `KoTraeger().Stelle().Monat().MonWertErlös`{data-clipboard-text="KoTraeger().Stelle().Monat().MonWertErlös"}   | Monatserlös des ausgewählten Monats, Kostenträger und Kostenstelle             |
| `KoTraeger().Stelle().Monat().MonWertKosten`{data-clipboard-text="KoTraeger().Stelle().Monat().MonWertKosten"} | Monatskosten des ausgewählten Monats, Kostenträger und Kostenstelle            |
| `KoTraeger().Stelle().Monat().PlanErlös`{data-clipboard-text="KoTraeger().Stelle().Monat().PlanErlös"}         | Planerlöse bis zum ausgewählten Monat sowie des Kostenträgers und Kostenstelle |
| `KoTraeger().Stelle().Monat().PlanKosten`{data-clipboard-text="KoTraeger().Stelle().Monat().PlanKosten"}       | Plankosten bis zum ausgewählten Monat sowie des Kostenträgers und Kostenstelle |
| `KoTraeger().Text`{data-clipboard-text="KoTraeger().Text"}                                                     | Bezeichnung des Kostenträgers                                                  |
| `KoTraeger().Überschrift`{data-clipboard-text="KoTraeger().Überschrift"}                                       | ausgewählte Kostenträger ist eine Überschrift (Wahr/Falsch)                    |

### Konto

| **Formel**                                                                               | **Beschreibung**                                        |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `Konto().Adressblock`{data-clipboard-text="Konto().Adressblock"}                         | Kontobezeichnung                                        |
| `Konto().Art`{data-clipboard-text="Konto().Art"}                                         | Art des Kontos                                          |
| `Konto().Jahr().EBilanz`{data-clipboard-text="Konto().Jahr().EBilanz"}                   | Wert der Eröffnungsbilanz der ausgewählten Konten       |
| `Konto().Jahr().Haben`{data-clipboard-text="Konto().Jahr().Haben"}                       | Habenumsatz der ausgewählten Konten                     |
| `Konto().Jahr().Soll`{data-clipboard-text="Konto().Jahr().Soll"}                         | Sollumsatz der ausgewählten Konten                      |
| `Konto().Jahr().Wert`{data-clipboard-text="Konto().Jahr().Wert"}                         | Endsalden der ausgewählten Konten                       |
| `Konto().Jahr().WertH`{data-clipboard-text="Konto().Jahr().WertH"}                       | Habensalden der ausgewählten Konten                     |
| `Konto().Jahr().WertS`{data-clipboard-text="Konto().Jahr().WertS"}                       | Sollsalden der ausgewählten Konten                      |
| `Konto().Kundennummer`{data-clipboard-text="Konto().Kundennummer"}                       | Kundennummer des ausgewählten Debitoren oder Kreditoren |
| `Konto().Monat().Monat`{data-clipboard-text="Konto().Monat().Monat"}                     | Zeigt den ausgewählten Monat an                         |
| `Konto().Monat().MonWert`{data-clipboard-text="Konto().Monat().MonWert"}                 | Monatswert der ausgewählten Konten                      |
| `Konto().Monat().MonWertH`{data-clipboard-text="Konto().Monat().MonWertH"}               | Monats-Habensalden der ausgewählten Konten              |
| `Konto().Monat().MonWertOhneEB`{data-clipboard-text="Konto().Monat().MonWertOhneEB"}     | Monatswert ohne EB                                      |
| `Konto().Monat().MonWertS`{data-clipboard-text="Konto().Monat().MonWertS"}               | Monats-Sollsalden der ausgewählten Konten               |
| `Konto().Monat().Wert`{data-clipboard-text="Konto().Monat().Wert"}                       | Kontensaldo bis zum ausgewählten Monat                  |
| `Konto().Monat().WertH`{data-clipboard-text="Konto().Monat().WertH"}                     | Kontensaldo Haben bis zum ausgewählten Monat            |
| `Konto().Monat().WertS`{data-clipboard-text="Konto().Monat().WertS"}                     | Kontensaldo Soll bis zum ausgewählten Monat             |
| `Konto().MonatWJ().Monat`{data-clipboard-text="Konto().MonatWJ().Monat"}                 | Zeit den ausgewählten Monat an                          |
| `Konto().MonatWJ().MonWert`{data-clipboard-text="Konto().MonatWJ().MonWert"}             | Monatswert der ausgewählten Konten im WJ                |
| `Konto().MonatWJ().MonWertH`{data-clipboard-text="Konto().MonatWJ().MonWertH"}           | Habensalden der ausgewählten Konten im WJ               |
| `Konto().MonatWJ().MonWertOhneEB`{data-clipboard-text="Konto().MonatWJ().MonWertOhneEB"} | Monatswert ohne EB der ausgewählten Konten im WJ        |
| `Konto().MonatWJ().MonWertS`{data-clipboard-text="Konto().MonatWJ().MonWertS"}           | Kontensaldo im Soll der ausgewählten Konten im WJ       |
| `Konto().MonatWJ().Wert`{data-clipboard-text="Konto().MonatWJ().Wert"}                   | Wert der ausgewählten Konten im WJ                      |
| `Konto().MonatWJ().WertH`{data-clipboard-text="Konto().MonatWJ().WertH"}                 | Habenwert der ausgewählten Konten im WJ                 |
| `Konto().MonatWJ().WertS`{data-clipboard-text="Konto().MonatWJ().WertS"}                 | Sollwert der ausgewählten Konten im WJ                  |
| `Konto().Nummer`{data-clipboard-text="Konto().Nummer"}                                   | Kontonummer des ausgewählten Kontos                     |
| `Konto().Text`{data-clipboard-text="Konto().Text"}                                       | Kontenbezeichnung                                       |
| `Konto().Text2`{data-clipboard-text="Konto().Text2"}                                     | Kontenbezeichnung 2                                     |

###  Kammerumlage

| **Formel**                                                                           | **Beschreibung**                       |
| ------------------------------------------------------------------------------------ | -------------------------------------- |
| `KammerUmlage().Quartal().Wert`{data-clipboard-text="KammerUmlage().Quartal().Wert"} | Kammerumlage für das jeweilige Quartal |

### Umsatzsteuer

| **Formel**                                                                                                   | **Beschreibung**                                                              |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `USt().Land().Monat().EUStFinanz`{data-clipboard-text="USt().Land().Monat().EUStFinanz"}                     | EUSt für den jeweiligen Monat                                                 |
| `USt().Land().Monat().Monat`{data-clipboard-text="USt().Land().Monat().Monat"}                               | Monat der Umsatzsteuer                                                        |
| `USt().Land().Monat().Zahllast`{data-clipboard-text="USt().Land().Monat().Zahllast"}                         | Zahllast für das jeweilige Monat                                              |
| `USt().Land().MonatWJ().EUStFinanz`{data-clipboard-text="USt().Land().MonatWJ().EUStFinanz"}                 | EUSt für das jeweiligen Wirtschaftsjahr                                       |
| `USt().Land().MonatWJ().Monat`{data-clipboard-text="USt().Land().MonatWJ().Monat"}                           | Monat der Ust im Wirtschaftsjahr                                              |
| `USt().Land().MonatWJ().Zahllast`{data-clipboard-text="USt().Land().MonatWJ().Zahllast"}                     | Zahllast für das jeweilige Monat im Wirtschaftsjahr                           |
| `USt().Land().Name`{data-clipboard-text="USt().Land().Name"}                                                 | Name des Ust-Landes                                                           |
| `USt().Land().Nummer`{data-clipboard-text="USt().Land().Nummer"}                                             | Nummer des Ust-Landes                                                         |
| `USt().Land().Kennziffer().Monat().Monat`{data-clipboard-text="USt().Land().Kennziffer().Monat().Monat"}     | Kennziffer des ausgewählten Ust-Landes für den jeweiligen Monat               |
| `USt().Land().Kennziffer().Monat().Wert`{data-clipboard-text="USt().Land().Kennziffer().Monat().Wert"}       | Wert der Kennziffer des ausgewählten Ust-Landes EUSt für den jeweiligen Monat |
| `USt().Land().Kennziffer().MonatWJ().Monat`{data-clipboard-text="USt().Land().Kennziffer().MonatWJ().Monat"} | Kennziffer des ausgewählten Ust-Landes für den jeweiligen Monat               |
| `USt().Land().Kennziffer().MonatWJ().Wert`{data-clipboard-text="USt().Land().Kennziffer().MonatWJ().Wert"}   | Wert der Kennziffer des ausgewählten Ust-Landes EUSt für den jeweiligen Monat |
| `USt().Land().Kennziffer().Ziffer`{data-clipboard-text="USt().Land().Kennziffer().Ziffer"}                   | Kennziffer des Ust-Landes                                                     |

### Personenkonten

| **Formel**                                                                                                 | **Beschreibung**                         |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `DebKonto().Monat().Monat`{data-clipboard-text="DebKonto().Monat().Monat"}                                 | Monat des Debitors                       |
| `DebKonto().Monat().NettoumsatzMonWert`{data-clipboard-text="DebKonto().Monat().NettoumsatzMonWert"}       | Monatswert des ausgewählten Debitors     |
| `DebKonto().Monat().NettoumsatzWert`{data-clipboard-text="DebKonto().Monat().NettoumsatzWert"}             | Wert des ausgewählten Debitors im Monat  |
| `DebKonto().MonatWJ().Monat`{data-clipboard-text="DebKonto().MonatWJ().Monat"}                             | Monat des Debitors                       |
| `DebKonto().MonatWJ().NettoumsatzMonWert`{data-clipboard-text="DebKonto().MonatWJ().NettoumsatzMonWert"}   | Monatswert des ausgewählten Debitors     |
| `DebKonto().MonatWJ().NettoumsatzWert`{data-clipboard-text="DebKonto().MonatWJ().NettoumsatzWert"}         | Wert des ausgewählten Debitors im Monat  |
| `DebKonto().Nummer`{data-clipboard-text="DebKonto().Nummer"}                                               | Kontonummer des Debitors                 |
| `DebKonto().Text`{data-clipboard-text="DebKonto().Text"}                                                   | Bezeichnung des Debitors                 |
| `KredKonto().Monat().Monat`{data-clipboard-text="KredKonto().Monat().Monat"}                               | Monat des Kreditors                      |
| `KredKonto().Monat().NettoumsatzMonWert`{data-clipboard-text="KredKonto().Monat().NettoumsatzMonWert"}     | Monatswert des ausgewählten Kreditors    |
| `KredKonto().Monat().NettoumsatzWert`{data-clipboard-text="KredKonto().Monat().NettoumsatzWert"}           | Wert des ausgewählten Kreditors im Monat |
| `KredKonto().MonatWJ().Monat`{data-clipboard-text="KredKonto().MonatWJ().Monat"}                           | Monat des Kreditors                      |
| `KredKonto().MonatWJ().NettoumsatzMonWert`{data-clipboard-text="KredKonto().MonatWJ().NettoumsatzMonWert"} | Monatswert des ausgewählten Kreditors    |
| `KredKonto().MonatWJ().NettoumsatzWert`{data-clipboard-text="KredKonto().MonatWJ().NettoumsatzWert"}       | Wert des ausgewählten Kreditors im Monat |
| `KredKonto().Nummer`{data-clipboard-text="KredKonto().Nummer"}                                             | Kontonummer des Kreditors                |
| `KredKonto().Text`{data-clipboard-text="KredKonto().Text"}                                                 | Bezeichnung des Kreditors                |

### Kontoart

| **Formel**                                                   | **Beschreibung**                                 |
| ------------------------------------------------------------ | ------------------------------------------------ |
| `KontoArt().Konten`{data-clipboard-text="KontoArt().Konten"} | Auflistung der Konten laut ausgewählter Kontoart |
| `KontoArt().Nummer`{data-clipboard-text="KontoArt().Nummer"} | Nummer der Kontoart                              |
| `KontoArt().Text`{data-clipboard-text="KontoArt().Text"}     | Bezeichnung der Kontoart                         |

## Formelliste für die RZL Bilanz

Die folgenden Formeln können nur im Bilanz-Reporting verwendet werden.

### Anlagenwerte auf Kontenbasis

| **Formel**                                                                                         | **Beschreibung**                                          |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `Anl().Jahr().Abgang`{data-clipboard-text="Anl().Jahr().Abgang"}                                   | Restbuchwert des Abgangs                                  |
| `Anl().Jahr().AfA`{data-clipboard-text="Anl().Jahr().AfA"}                                         | Wert der laufenden Abschreibung                           |
| `Anl().Jahr().BWAlt`{data-clipboard-text="Anl().Jahr().BWAlt"}                                     | Buchwert zu Beginn des Wirtschaftsjahres                  |
| `Anl().Jahr().BWNeu`{data-clipboard-text="Anl().Jahr().BWNeu"}                                     | Buchwert zum Ende des Wirtschaftsjahres                   |
| `Anl().Jahr().BWR`{data-clipboard-text="Anl().Jahr().BWR"}                                         | Wert der Bewertungsreserve zum Ende des Wirtschaftsjahres |
| `Anl().Jahr().BWRAlt`{data-clipboard-text="Anl().Jahr().BWRAlt"}                                   | Bewertungsreserve des Vorjahres                           |
| `Anl().Jahr().BWRSubvention`{data-clipboard-text="Anl().Jahr().BWRSubvention"}                     | Subvention                                                |
| `Anl().Jahr().BWRSubventionAlt`{data-clipboard-text="Anl().Jahr().BWRSubventionAlt"}               | Subvention des Vorjahres                                  |
| `Anl().Jahr().BWRSubventionAufloesung`{data-clipboard-text="Anl().Jahr().BWRSubventionAufloesung"} | Auflösung der Subvention                                  |
| `Anl().Jahr().BWRSubventionUmbuchung`{data-clipboard-text="Anl().Jahr().BWRSubventionUmbuchung"}   | Umbuchung der Subvention                                  |
| `Anl().Jahr().BWRSubventionVerbrauch`{data-clipboard-text="Anl().Jahr().BWRSubventionVerbrauch"}   | Verbrauch der Subvention                                  |
| `Anl().Jahr().BWRSubventionZugang`{data-clipboard-text="Anl().Jahr().BWRSubventionZugang"}         | Zugang der Subvention                                     |
| `Anl().Jahr().EHW`{data-clipboard-text="Anl().Jahr().EHW"}                                         | Zeigt den Einheitswert neu an                             |
| `Anl().Jahr().IFB`{data-clipboard-text="Anl().Jahr().IFB"}                                         | Investitionsfreibetrag (IFB)                              |
| `Anl().Jahr().Kost`{data-clipboard-text="Anl().Jahr().Kost"}                                       | Anschaffungskosten                                        |
| `Anl().Jahr().KumAfA`{data-clipboard-text="Anl().Jahr().KumAfA"}                                   | Wert der kumulierten Abschreibung                         |
| `Anl().Jahr().Umbu`{data-clipboard-text="Anl().Jahr().Umbu"}                                       | Wert der Umbuchung des Buchwertes                         |
| `Anl().Jahr().VbBWR`{data-clipboard-text="Anl().Jahr().VbBWR"}                                     | Wert des Verbrauchs der Bewertungsreserve                 |
| `Anl().Jahr().Zugang`{data-clipboard-text="Anl().Jahr().Zugang"}                                   | Wert der Zugänge                                          |
| `Anl().Jahr().Zuschr`{data-clipboard-text="Anl().Jahr().Zuschr"}                                   | Zuschreibungswert                                         |
| `Anl().Nummer`{data-clipboard-text="Anl().Nummer"}                                                 | Zeigt die Nummer des ausgewählten Kontos an               |
| `Anl().Text`{data-clipboard-text="Anl().Text"}                                                     | Zeigt den Text des ausgewählten Kontos an                 |

### Anlagenwerte auf Gliederungsnummer-Basis

| **Formel**                                                                                               | **Beschreibung**                                          |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `AnlBil().Jahr().Abgang`{data-clipboard-text="AnlBil().Jahr().Abgang"}                                   | Restbuchwert des Abgangs                                  |
| `AnlBil().Jahr().AfA`{data-clipboard-text="AnlBil().Jahr().AfA"}                                         | Wert der laufenden Abschreibung                           |
| `AnlBil().Jahr().BWAlt`{data-clipboard-text="AnlBil().Jahr().BWAlt"}                                     | Buchwert zu Beginn des Wirtschaftsjahres                  |
| `AnlBil().Jahr().BWNeu`{data-clipboard-text="AnlBil().Jahr().BWNeu"}                                     | Buchwert zum Ende des Wirtschaftsjahres                   |
| `AnlBil().Jahr().BWR`{data-clipboard-text="AnlBil().Jahr().BWR"}                                         | Wert der Bewertungsreserve zum Ende des Wirtschaftsjahres |
| `AnlBil().Jahr().BWRAlt`{data-clipboard-text="AnlBil().Jahr().BWRAlt"}                                   | Wert der Bewertungsreserve des Vorjahres (BWR Alt)        |
| `AnlBil().Jahr().BWRSubvention`{data-clipboard-text="AnlBil().Jahr().BWRSubvention"}                     | Subvention                                                |
| `AnlBil().Jahr().BWRSubventionAlt`{data-clipboard-text="AnlBil().Jahr().BWRSubventionAlt"}               | Wert der Subvention des Vorjahres                         |
| `AnlBil().Jahr().BWRSubventionAufloesung`{data-clipboard-text="AnlBil().Jahr().BWRSubventionAufloesung"} | Auflösungswert der Subvention                             |
| `AnlBil().Jahr().BWRSubventionUmbuchung`{data-clipboard-text="AnlBil().Jahr().BWRSubventionUmbuchung"}   | Umbuchung der Subvention                                  |
| `AnlBil().Jahr().BWRSubventionVerbrauch`{data-clipboard-text="AnlBil().Jahr().BWRSubventionVerbrauch"}   | Verbrauch der Subvention                                  |
| `AnlBil().Jahr().BWRSubventionZugang`{data-clipboard-text="AnlBil().Jahr().BWRSubventionZugang"}         | Zugang der Subvention                                     |
| `AnlBil().Jahr().IFB`{data-clipboard-text="AnlBil().Jahr().IFB"}                                         | Investitionsförderbetrag (IFB)                            |
| `AnlBil().Jahr().EHW`{data-clipboard-text="AnlBil().Jahr().EHW"}                                         | Zeigt den Einheitswert neu an                             |
| `AnlBil().Jahr().Kost`{data-clipboard-text="AnlBil().Jahr().Kost"}                                       | Anschaffungskosten                                        |
| `AnlBil().Jahr().KumAfA`{data-clipboard-text="AnlBil().Jahr().KumAfA"}                                   | Wert der kumulierten Abschreibung                         |
| `AnlBil().Jahr().Umbu`{data-clipboard-text="AnlBil().Jahr().Umbu"}                                       | Wert der Umbuchung des Buchwertes                         |
| `AnlBil().Jahr().VbBWR`{data-clipboard-text="AnlBil().Jahr().VbBWR"}                                     | Wert des Verbrauchs der Bewertungsreserve                 |
| `AnlBil().Jahr().Zugang`{data-clipboard-text="AnlBil().Jahr().Zugang"}                                   | Wert der Zugänge                                          |
| `AnlBil().Jahr().Zuschr`{data-clipboard-text="AnlBil().Jahr().Zuschr"}                                   | Zuschreibungswert                                         |
| `AnlBil().Nummer`{data-clipboard-text="AnlBil().Nummer"}                                                 | Zeigt die Nummer der ausgewählten Gliederung an           |
| `AnlBil().Text`{data-clipboard-text="AnlBil().Text"}                                                     | Zeigt den Text der ausgewählten Gliederung an             |

### Gesellschafter und Geschäftsführer

| **Formel**                                                 | **Beschreibung**                                                                 |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `Gesell().Land`{data-clipboard-text="Gesell().Land"}       | Länderkennzeichen des Gesellschafters                                            |
| `Gesell().Name`{data-clipboard-text="Gesell().Name"}       | Name des Gesellschafters                                                         |
| `Gesell().Nummer`{data-clipboard-text="Gesell().Nummer"}   | Nummer des Gesellschafters                                                       |
| `Gesell().Ort`{data-clipboard-text="Gesell().Ort"}         | Ort des Gesellschafters                                                          |
| `Gesell().PLZ`{data-clipboard-text="Gesell().PLZ"}         | Postleitzahl des Gesellschafters                                                 |
| `Gesell().Strasse`{data-clipboard-text="Gesell().Strasse"} | Straße des Gesellschafters                                                       |
| `Gf().FBNr`{data-clipboard-text="Gf().FBNr"}               | Firmenbuchnummer der Komplementär GmbH des dafür zuständigen Geschäftsführers    |
| `Gf().GebDat`{data-clipboard-text="Gf().GebDat"}           | Geburtsdatum des Gesellschafters                                                 |
| `Gf().Name`{data-clipboard-text="Gf().Name"}               | Nachname des Gesellschafters                                                     |
| `Gf().Register`{data-clipboard-text="Gf().Register"}       | Registerbezeichnung der Komplementär GmbH des dafür zuständigen Geschäftsführers |
| `Gf().Titel`{data-clipboard-text="Gf().Titel"}             | Titel des Gesellschafters                                                        |
| `Gf().Vorhanden`{data-clipboard-text="Gf().Vorhanden"}     | Ob der Gesellschafter vorhanden ist (Wahr/Falsch)                                |
| `Gf().Vorname`{data-clipboard-text="Gf().Vorname"}         | Vorname des Gesellschafters                                                      |
| `Gf().Wortlt`{data-clipboard-text="Gf().Wortlt"}           | Firmenname der Komplementär GmbH des dafür zuständigen Geschäftsführers          |

## Formelliste für das Mahnwesen in der RZL-Finanzbuchhaltung

Die folgenden Formeln sind für Mahnvorlagen in der RZL-Finanzbuchhaltung anwendbar.

!!! info "Tipp"
    RZL bietet Ihnen Mustermahnschreiben in Form eines Reports mit der Nummer *91-RZL Mahnreports* an. Diese können auf den gewünschten Klienten überspielt und anschließend abgeändert werden. Die notwendigen Einstellungen betreffend des Klienten in der RZL-Finanzbuchhaltung finden Sie im *RZL Handbuch Finanzbuchhaltung* (Kapitel *Mahnwesen*).

### Allgemein

Siehe Kapitel [Kanzleireports](../Kanzleireports.md)

### Bankkonten des Klienten

| **Formel**                                                                                                       | **Beschreibung**                                                  |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `KlientBankkonto().Bezeichnung`{data-clipboard-text="KlientBankkonto().Bezeichnung"}                             | Name der ausgewählten Bank                                        |
| `KlientBankkonto().BIC`{data-clipboard-text="KlientBankkonto().BIC"}                                             | BIC der ausgewählten Bank                                         |
| `KlientBankkonto().IBAN`{data-clipboard-text="KlientBankkonto().IBAN"}                                           | IBAN der ausgewählten Bank                                        |
| `KlientBankkonto().Kundendatenfeld_erster_OP`{data-clipboard-text="KlientBankkonto().Kundendatenfeld_erster_OP"} | Zahlungsreferenz des ersten Offenen Postens der ausgewählten Bank |
| `KlientBankkonto().Land`{data-clipboard-text="KlientBankkonto().Land"}                                           | Länderkennzeichen der ausgewählten Bank                           |
| `KlientBankkonto().Währung`{data-clipboard-text="KlientBankkonto().Währung"}                                     | Währung der ausgewählten Bank                                     |

### Kontendaten

| **Formel**                                                                           | **Beschreibung**                                                                                                                                 |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Konto.Adressblock`{data-clipboard-text="Konto.Adressblock"}                         | Adressblock des Kunden mit Anrede                                                                                                                |
| `Konto.Adressblock_Ohne_Anrede`{data-clipboard-text="Konto.Adressblock_Ohne_Anrede"} | Adressblock des Kunden ohne Anrede                                                                                                               |
| `Konto.Anrede`{data-clipboard-text="Konto.Anrede"}                                   | Anrede des Kunden                                                                                                                                |
| `Konto.Name`{data-clipboard-text="Konto.Name"}                                       | Name des Kunden                                                                                                                                  |
| `Konto.Nummer`{data-clipboard-text="Konto.Nummer"}                                   | Kontonummer des Kunden                                                                                                                           |
| `Konto.DIENSTGEBERNR`{data-clipboard-text="Konto.DIENSTGEBERNR"}                     | Dienstgebernummer des Kunden                                                                                                                     |
| `Konto.Email`{data-clipboard-text="Konto.Email"}                                     | E-Mail-Adresse des Kunden                                                                                                                        |
| `Konto.IN_HFU_LISTE`{data-clipboard-text="Konto.IN_HFU_LISTE"}                       | Kunde in HFU-Liste (Wahr/Falsch)                                                                                                                 |
| `Konto.Kundennummer`{data-clipboard-text="Konto.Kundennummer"}                       | Kundennummer des Kunden                                                                                                                          |
| `Konto.Saldo`{data-clipboard-text="Konto.Saldo"}                                     | Saldo des Kunden                                                                                                                                 |
| `Konto.Strasse`{data-clipboard-text="Konto.Strasse"}                                 | Straße des Kunden                                                                                                                                |
| `Konto.Land_PLZ_Ort`{data-clipboard-text="Konto.Land_PLZ_Ort"}                       | bei österreichischen Kunden: Postleitzahl und Ort bei ausländischen Kunden: Postleitzahl, Ort sowie Land mit Zeilenumbruch und in Großbuchstaben |
| `Konto.Telefon`{data-clipboard-text="Konto.Telefon"}                                 | Telefonnummer des Kunden                                                                                                                         |
| `Konto.UID`{data-clipboard-text="Konto.UID"}                                         | UID-Nummer des Kunden                                                                                                                            |
| `Konto.Zusatztext`{data-clipboard-text="Konto.Zusatztext"}                           | Zusatztext des Kunden                                                                                                                            |
| `Konto.Land`{data-clipboard-text="Konto.Land"}                                       | Land des Kunden                                                                                                                                  |
| `Konto.La`{data-clipboard-text="Konto.La"}                                           | Land des Kunden                                                                                                                                  |
| `Konto.Ort`{data-clipboard-text="Konto.Ort"}                                         | Ort des Kunden                                                                                                                                   |
| `Konto.PLZ`{data-clipboard-text="Konto.PLZ"}                                         | Postleitzahl des Kunden                                                                                                                          |
| `Konto.SVNr`{data-clipboard-text="Konto.SVNr"}                                       | Sozialversicherungsnummer des Kunden                                                                                                             |

### Buchungen / Offene Posten

| **Formel**                                                                                   | **Beschreibung**                                         |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `MahnOP.Beleg`{data-clipboard-text="MahnOP.Beleg"}                                           | Belegnummer der jeweiligen Buchung                       |
| `MahnOP.Belegkreis`{data-clipboard-text="MahnOP.Belegkreis"}                                 | Belegkreis der jeweiligen Buchung                        |
| `MahnOP.Datum`{data-clipboard-text="MahnOP.Datum"}                                           | Datum der jeweiligen Buchung                             |
| `MahnOP.Fremdbeleg`{data-clipboard-text="MahnOP.Fremdbeleg"}                                 | Fremdbelegnummer der jeweiligen Buchung, falls vorhanden |
| `MahnOP.Fälligkeitsdatum`{data-clipboard-text="MahnOP.Fälligkeitsdatum"}                     | Fälligkeitsdatum der jeweiligen Buchung                  |
| `MahnOP.Fälligkeitstage`{data-clipboard-text="MahnOP.Fälligkeitstage"}                       | Fälligkeitstage der jeweiligen Buchung                   |
| `MahnOP.Gegenkonto`{data-clipboard-text="MahnOP.Gegenkonto"}                                 | Gegenkonto der jeweiligen Buchung                        |
| `MahnOP.Haben`{data-clipboard-text="MahnOP.Haben"}                                           | Habenwert der jeweiligen Buchung                         |
| `MahnOP.Letztes_Mahndatum`{data-clipboard-text="MahnOP.Letztes_Mahndatum"}                   | Letztes Mahndatum der jeweiligen Buchung                 |
| `MahnOP.Mahnstufe`{data-clipboard-text="MahnOP.Mahnstufe"}                                   | Aktuelle Mahnstufe der jeweiligen Buchung                |
| `MahnOP.Mahnstufe_Text`{data-clipboard-text="MahnOP.Mahnstufe_Text"}                         | Text der aktuellen Mahnstufe der jeweiligen Buchung      |
| `MahnOP.OP_Zeilen_Bereich`{data-clipboard-text="MahnOP.OP_Zeilen_Bereich"}                   | Bereich der Buchungen in der Mahnung                     |
| `MahnOP.OPNr`{data-clipboard-text="MahnOP.OPNr"}                                             | Offene-Posten-Nummer der jeweiligen Buchung              |
| `MahnOP.Soll`{data-clipboard-text="MahnOP.Soll"}                                             | Sollwert der jeweiligen Buchung                          |
| `MahnOP.Steuercode`{data-clipboard-text="MahnOP.Steuercode"}                                 | Steuercode der jeweiligen Buchung                        |
| `MahnOP.Tage_seit_Buchungsdatum`{data-clipboard-text="MahnOP.Tage_seit_Buchungsdatum"}       | Tage zwischen Buchung und Mahnung                        |
| `MahnOP.Tage_seit_Fälligkeitsdatum`{data-clipboard-text="MahnOP.Tage_seit_Fälligkeitsdatum"} | Tage zwischen Fälligkeit und Mahnung                     |
| `MahnOP.Text`{data-clipboard-text="MahnOP.Text"}                                             | Text der jeweiligen Buchung                              |
| `MahnOP.Text_mit_OP_Zusatztest`{data-clipboard-text="MahnOP.Text_mit_OP_Zusatztest"}         | Text mit OP-Zusatztext der jeweiligen Buchung            |
| `MahnOP.Valutadatum`{data-clipboard-text="MahnOP.Valutadatum"}                               | Valutadatum der jeweiligen Buchung                       |
| `MahnOP.Zahlungsreferenz`{data-clipboard-text="MahnOP.Zahlungsreferenz"}                     | Zahlungsreferenz der jeweiligen Buchung                  |

### Weitere Mahndaten

| Formel                                                                                                     |                                               | Beschreibung |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------ |
| `WeitereMahndaten.Drittes_Mahndatum`{data-clipboard-text="WeitereMahndaten.Drittes_Mahndatum"}             | Zeigt das dritte Mahndatum an, wenn vorhanden |
| `WeitereMahndaten.Erstellungsdatum`{data-clipboard-text="WeitereMahndaten.Erstellungsdatum"}               | Erstellungsdatum der Mahnung                  |
| `WeitereMahndaten.Erstes_Mahndatum`{data-clipboard-text="WeitereMahndaten.Erstes_Mahndatum"}               | Zeigt das erste Mahndatum an                  |
| `WeitereMahndaten.Letzter_Zahlungseingang`{data-clipboard-text="WeitereMahndaten.Letzter_Zahlungseingang"} | Datumseingabe bei „letztem Zahlungseingang"   |
| `WeitereMahndaten.Spesen`{data-clipboard-text="WeitereMahndaten.Spesen"}                                   | Wert der Mahnspesen                           |
| `WeitereMahndaten.Stichtag`{data-clipboard-text="WeitereMahndaten.Stichtag"}                               | Stichtag der Mahnung                          |
| `WeitereMahndaten.Verzugszinsen`{data-clipboard-text="WeitereMahndaten.Verzugszinsen"}                     | Verzugszinsen der Mahnung                     |
| `WeitereMahndaten.Zahlungsfrist`{data-clipboard-text="WeitereMahndaten.Zahlungsfrist"}                     | Zahlungsfrist der Buchung                     |
| `WeitereMahndaten.Zinssatz`{data-clipboard-text="WeitereMahndaten.Zinssatz"}                               | Zinssatz der Verzugszinsen                    |
| `WeitereMahndaten.Zweites_Mahndatum`{data-clipboard-text="WeitereMahndaten.Zweites_Mahndatum"}             | Zeigt das zweite Mahndatum an, wenn vorhanden |

# Formelsammlung für die Bilanz und Finanzbuchhaltung

Im folgenden Kapitel finden Sie die Auflistung der verfügbaren Formeln
für das Reporting im RZL Bilanz- und Finanzbuchhaltungsprogramm. Seitens
RZL Software werden Ihnen mit dem Reporting-Modul auch diverse
RZL-Musterreports zur Verfügung gestellt.

## RZL Musterreports[[]{.indexref entry="Formelliste:Finanzbuchhaltung"}]{.indexref entry="Formelliste: Bilanz"} Finanzbuchhaltung und Bilanz

Neben Briefvorlagen für Mahnungen können Sie auch unterschiedliche
Musteranhänge, Checklisten oder Kennzahlenanalysen für Ihre
Jahresabschlüsse übernehmen und nach Ihren individuellen Bedürfnissen
einrichten. Eine aktuelle Übersicht finden Sie in der *ZMV* unter *Allg.
Dateien / Installieren* im Registerblatt *Reports* oder im Kapitel 9
Auflistung Musterreports Seite [57](#auflistung-musterreports) ff
beschrieben.

Tipp

Die RZL-Musterreports werden stetig erweitert. Neuerungen werden auch im
Zuge der RZL-Programmaktualisierung in den RZL-Newslettern
veröffentlicht.

Diese Mustereports können nach erfolgreicher Installation in der ZMV auf
den gewünschten Klienten überspielt und anschließend individuell
angepasst und abgeändert werden.

## Liste der Bilanz- und Finanzbuchhaltungsformeln

Die folgenden Formeln sind sowohl in der RZL-Finanzbuchhaltung, als auch
im RZL-Bilanzprogramm anwendbar.

### Zeitraum

  --------------------------------------------------------------------------------------------------
  **Formel**                                                 **Beschreibung**
  ------------ ----------------------- ----------- --------- ---------------------------------------
  ZR.          AktMonat                                      Zeigt das letzte Monat des
                                                             Wirtschaftsjahres an

  ZR.          FolgeJ                                        Zeigt das Folgejahr an, z.B. 2017

  ZR.          Jahr().                 Anfang                Erster Tag des Wirtschaftsjahres

  ZR.          Jahr().                 BeginnMon             Nummer des ersten Monats des
                                                             Wirtschaftsjahres

  ZR.          Jahr().                 Ende                  Letzter Tag es Wirtschaftsjahres

  ZR.          Jahr().                 EndeMon               Nummer des letzten Monats des
                                                             Wirtschaftsjahres

  ZR.          Jahr().                 Jahr                  Jahr des Wirtschaftsjahres

  ZR.          Jahr().                 MonatKJ()             Nummer des ausgewählten Monats im
                                                             Kalenderjahr

  ZR.          Jahr().                 MonatKJ()   Anfang    Nummer des ausgewählten Monats im
                                                             Kalenderjahr Anfang

  ZR.          Jahr().                 MonatKJ()   Ende      Nummer des ausgewählten Monats im
                                                             Kalenderjahr Ende

  ZR.          Jahr().                 MonatKJ()   MonatWJ   Nummer des ausgewählten Monats im
                                                             Kalenderjahr Monat des
                                                             Wirtschaftsjahres

  ZR.          Jahr().                 MonatWJ()             Nummer des ausgewählten Monats im WJ

  ZR.          Jahr().                 MonatWJ()   Anfang    Nummer des ausgewählten Monats im WJ
                                                             Anfang

  ZR.          Jahr().                 MonatWJ()   Ende      Nummer des ausgewählten Monats im WJ
                                                             Ende

  ZR.          Jahr().                 MonatWJ()   MonatKJ   Nummer des ausgewählten Monats im WJ
                                                             Monat des Kalenderjahres

  ZR.          Jahr().                 Vorhanden             Ob das ausgewählte Jahr vorhanden ist
                                                             (Wahr/Falsch)

  ZR.          Monat().                Kurztext              Kurzbezeichnung des ausgewählten Monats
                                                             z.B. Apr

  ZR.          Monat().                MonWj                 Nummer des ausgewählten Monats

  ZR.          Monat().                Römisch               Nummer des ausgewählten Monats in
                                                             römsichen Zahlen z.B. IV

  ZR.          Monat().                Text                  Name des ausgewählten Monats

  ZR.          DruckreihenfolgeMonat                         Monat der Druckreihenfolge

  ZR.          LetztesBuchungsmonat                          Letztes Buchungsmonat
  --------------------------------------------------------------------------------------------------

### Klientendaten

  ---------------------------------------------------------------------------------
  **Formel**                            **Beschreibung**
  ------------ ------------------------ -------------------------------------------
  Stamm.       BankBIC                  BIC des Klienten

  Stamm.       BankBLZ                  Bankleitzahl des Klienten

  Stamm.       BankIBAN                 IBAN des Klienten

  Stamm.       BankKtoNr                Bankkontennummer des Klienten

  Stamm.       BankName                 Name der Bank

  Stamm.       Beruf                    Art der Tätigkeit des Klienten

  Stamm.       EMail                    E-Mail-Adresse des Klienten

  Stamm.       FbGericht                Firmenbuchgericht des Klienten

  Stamm.       FbName                   Firmenname bzw. abweichender Name für
                                        Firmenbuch

  Stamm.       FbNummer                 Firmenbuchnummer des Klienten

  Stamm.       Finanz                   Finanzamt des Klienten

  Stamm.       FinanzDienststelle       Finanzamtsdienststelle des Klienten

  Stamm.       FinanzNummer             Finanzamtnummer

  Stamm.       FinanzOrt                Ort des Finanzamtes des Klienten

  Stamm.       FinanzPlz                Postleitzahl des Finanzamtes des Klienten

  Stamm.       FinanzStrasse            Straße des Finanzamtes des Klienten

  Stamm.       FinanzZahlungsreferenz   Zahlungseferenz des Finanzamtes

  Stamm.       Gruendung                Gründungsdatum des Klienten

  Stamm.       GW                       Zeigt die Grundwährung an

  Stamm.       Name                     Name des Klienten

  Stamm.       Nummer                   Nummer des Klienten

  Stamm.       NummerWert               Nummer des Klienten

  Stamm.       Ort                      Ort des Klienten

  Stamm.       Plz                      Länderkennzeichen und Postleitzahl des
                                        Klienten

  Stamm.       Rechtsform               Rechtsform des Klienten z.B.
                                        Kapitalgesellschaft

  Stamm.       RechtsformNr             Rechtsformnummer des Klienten

  Stamm.       Steuer                   Steuernummer des Klienten

  Stamm.       Strasse                  Straße des Klienten

  Stamm.       Telefon1                 Telefonnummer im Feld „Telefon1"

  Stamm.       Telefon2                 Telefonnummer im Feld „Telefon2"

  Stamm.       Uid                      UID-Nummer des Klienten
  ---------------------------------------------------------------------------------

### Bilanzdaten

  ------------------------------------------------------------------------------
  **Formel**                           **Beschreibung**
  ------------ ------------ ---------- -----------------------------------------
  Bil().       Jahr().      Wert       Wert der gewählten Bilanzposition(en)

  Bil().       Konten                  Kontonummer(n) der Bilanzposition(en)

  Bil().       Monat().     Monat      Zeigt das ausgewählte Monat an

  Bil().       Monat().     MonWert    Monatswert der ausgewählten
                                       Bilanzposition(en)

  Bil().       Monat().     Wert       Kontensaldo bis zum ausgewählten Monat

  Bil().       Nummer                  Nummer der ausgewählten Bilanzposition

  Bil().       Text                    Text der ausgewählten Bilanzposition

  Bil().       ÜS                      Überschrift der Bilanzposition, z.B. G
                                       (große Überschrift)

  BilAlt().    Jahr().      Wert       Wert der gewählten Bilanzposition(en) der
                                       alten Gliederung

  BilAlt().    Konten                  Kontonummer(n) der Bilanzposition(en) der
                                       alten Gliederung

  BilAlt().    Monat().     Monat      Zeigt das ausgewählte Monat an der alten
                                       Gliederung

  BilAlt().    Monat().     MonWert    Monatswert der ausgewählten
                                       Bilanzposition(en) der alten Gliederung

  BilAlt().    Monat().     Wert       Kontensaldo bis zum ausgewählten Monat
                                       der alten Gliederung

  BilAlt().    MonatWJ().   Monat      Zeigt das ausgewählte Monat im WJ der
                                       alten Gliederung

  BilAlt().    MonatWJ().   MonWert    Monatswert der ausgewählten
                                       Bilanzposition(en) des ausgewählten
                                       Wirtschaftsjahres der alten Gliederung

  BilAlt().    MonatWJ().   Wert       Kontensaldo bis zum ausgewählten Monat
                                       des Wirtschaftsjahres der alten
                                       Gliederung

  BilAlt().    Nummer                  Nummer der ausgewählten Bilanzposition
                                       der alten Gliederung

  BilAlt().    Text                    Text der ausgewählten Bilanzposition der
                                       alten Gliederung

  BilAlt().    ÜS                      Überschrift der Bilanzposition, z.B. G
                                       (große Überschrift) der alten Gliederung

  Bil().       MonatWJ()    Monat      Zeigt das ausgewählte Monat im WJ der
                                       Gliederung

  Bil().       MonatWJ()    MonWert    Monatswert der ausgewählten
                                       Bilanzposition(en) des ausgewählten
                                       Wirtschaftsjahres der Gliederung

  Bil().       MonatWJ()    Wert       Kontensaldo bis zum ausgewählten Monat
                                       des Wj der Gliederung
  ------------------------------------------------------------------------------

### Gewinn- und Verlustrechnung

  -------------------------------------------------------------------------------------------
  **Formel**                                                **Beschreibung**
  ------------- ------------ ----------------- ------------ ---------------------------------
  Guv().        Jahr().      Wert                           Wert der gewählten
                                                            GuV-Position(en)

  Guv().        Konten                                      Kontonummer(n) der
                                                            GuV-Position(en)

  Guv().        Monat().     Monat                          Zeigt das ausgewählte Monat an

  Guv().        Monat().     MonWert                        Monatswert der ausgewählten
                                                            GuV-Position(en)

  Guv().        Monat().     Wert                           Kontensaldo bis zum ausgewählten
                                                            Monat

  GuV().        MonatWJ().   Monat                          Zeigt das ausgewählte Monat im
                                                            jeweiligen WJ an

  GuV().        MonatWJ().   MonWert                        Monatswert der ausgewählten
                                                            GuV-Position(en) im jeweiligen
                                                            WJ.

  GuV().        MonatWJ().   Wert                           Kontensaldo bis zum ausgewählten
                                                            Monat des jeweiligen WJ.

  Guv().        Nummer                                      Nummer der ausgewählten
                                                            GuV-Position

  Guv().        Text                                        Text der ausgewählten
                                                            GuV-Position

  Guv().        ÜS                                          Überschrift der Bilanzposition,
                                                            z.B. G (große Überschrift)

  GuvAlt().     Jahr().      Wert                           Wert der gewählten
                                                            GuV-Position(en) der alten
                                                            Gliederung

  GuvAlt().     Konten                                      Kontonummer(n) der
                                                            GuV-Position(en) der alten
                                                            Gliederung

  GuvAlt().     Monat().     Monat                          Zeigt das ausgewählte Monat an
                                                            der alten Gliederung

  GuvAlt().     Monat().     MonWert                        Monatswert der ausgewählten
                                                            GuV-Position(en) der alten
                                                            Gliederung

  GuVAlt().     MonatWJ().   Monat                          Zeigt das ausgewählte Monat der
                                                            alten Gliederung im jeweiligen WJ
                                                            an

  GuVAlt().     MonatWJ().   MonWert                        Monatswert der ausgewählten
                                                            GuV-Position(en) der alten
                                                            Gliederung im jeweiligen WJ.

  GuVAlt().     MonatWJ().   Wert                           Kontensaldo der alten Gliederung
                                                            bis zum ausgewählten Monat des
                                                            jeweiligen WJ.

  GuvAlt().     Monat().     Wert                           Kontensaldo bis zum ausgewählten
                                                            Monat der alten Gliederung

  GuvAlt().     Nummer                                      Nummer der ausgewählten
                                                            GuV-Position der alten Gliederung

  GuvAlt().     Text                                        Text der ausgewählten
                                                            GuV-Position der alten Gliederung

  GuvAlt().     ÜS                                          Überschrift der Bilanzposition,
                                                            z.B. G (große Überschrift) der
                                                            alten Gliederung

  GuVKonto().   Jahr().      NettoUmsätze().   Beleg        Belegnummer des GuV-Konto
                                                            Nettoumsatzes pro Zeile

  GuVKonto().   Jahr().      NettoUmsätze().   Datum        Datum des GuV-Konto Nettoumsatzes
                                                            pro Zeile

  GuVKonto().   Jahr().      NettoUmsätze().   Gegenkonto   Gegenkonto des GuV-Konto
                                                            Nettoumsatzes pro Zeile

  GuVKonto().   Jahr().      NettoUmsätze().   Haben        Habenbetrag des GuV-Konto
                                                            Nettoumsatzes pro Zeile

  GuVKonto().   Jahr().      NettoUmsätze().   Konto        Kontonummer des GuV-Konto
                                                            Nettoumsatzes pro Zeile

  GuVKonto().   Jahr().      NettoUmsätze().   Soll         Sollbetrag des GuV-Konto
                                                            Nettoumsatzes pro Zeile

  GuVKonto().   Jahr().      NettoUmsätze().   Text         Bezeichnung des GuV-Konto
                                                            Nettoumsatzes pro Zeile

  GuVKonto().   Jahr().      NettoUmsätze().   Wert         Betrag des GuV-Konto
                                                            Nettoumsatzes pro Zeile

  GuVKonto().   Nummer                                      Nummer des GuV-Kontos

  GuVKonto().   Text                                        Bezeichnung des GuV-Kontos
  -------------------------------------------------------------------------------------------

### KER -- Kurzfristige Erfolgsrechnung

  ----------------------------------------------------------------------------------------
  **Formel**                              **Beschreibung**
  ------------ ------------ ------------- ------------------------------------------------
  Ker().       Jahr().      Planwert      Planwert der KER-Position(en)

  Ker().       Jahr().      Wert          Werte der ausgewählten KER-Position(en)

  Ker().       Konten                     Aufzählung aller Konten, die zu dieser
                                          KER-Position gehören

  Ker().       Monat().     Monat         Zeigt das ausgewählte Monat an

  Ker().       Monat().     MonPlanWert   Monatsplanwert der ausgewählten KER-Position(en)

  Ker().       Monat().     MonWert       Monatswert der ausgewählten KER-Position(en)

  Ker().       Monat().     PlanWert      Planwert der ausgewählten KER-Position(en) bis
                                          zum ausgewählten Monat

  Ker().       Monat().     Wert          Wert der KER-Position(en) bis zum ausgewählten
                                          Monat

  Ker().       MonatWJ().   Monat         Zeigt das ausgewählte Monat im WJ an

  Ker().       MonatWJ().   MonPlanWert   Monatsplanwert des WJ der ausgewählten
                                          KER-Position(en)

  Ker().       MonatWJ().   MonWert       Monatswert des WJ der ausgewählten
                                          KER-Position(en)

  Ker().       MonatWJ().   PlanWert      Planwert des WJ der ausgewählten
                                          KER-Position(en) bis zum ausgewählten Monat

  Ker().       MonatWJ().   Wert          Wert des WJ der KER-Position(en) bis zum
                                          ausgewählten Monat

  Ker().       Art                        Art der KER-Position

  Ker().       Nummer                     Nummer der KER-Position

  Ker().       Text                       Text der ausgewählten KER-Position
  ----------------------------------------------------------------------------------------

### Kostenrechnung

  -----------------------------------------------------------------------------------------------------
  **Formel**                                                   **Beschreibung**
  -------------- ------------- --------------- --------------- ----------------------------------------
  KoArt().       Jahr().       Plan                            Planwert

  KoArt().       Jahr().       PlanWert                        Jahresplanwert der ausgewählten
                                                               Kostenart(en)

  KoArt().       Jahr().       Wert                            Jahreswert der ausgewählten
                                                               Kostenart(en)

  KoArt().       Monat().      Monat                           Zeigt das ausgewählte Monat an

  KoArt().       Monat().      MonPlanWert                     Monatsplanwert der ausgewählten
                                                               Kostenart(en)

  KoArt().       Monat().      MonWert                         Monatswert der ausgewählten
                                                               Kostenart(en)

  KoArt().       Monat().      Plan                            Planwert

  KoArt().       Monat().      Planwert                        Planwert der Kostenart(en) bis zum
                                                               ausgewählten Monat

  KoArt().       Monat().      Wert                            Wert der Kostenart(en) bis zum
                                                               ausgewählten Monat

  KoArt().       Nummer                                        Nummer der Kostenart

  KoArt().       Text                                          Text der Kostenart

  KoArt().       Stelle().     Jahr().         Planwert        Jahresplanwert der ausgewählten
                                                               Kostenart und Kostenstelle

  KoArt().       Stelle().     Jahr().         Wert            Jahreswert der ausgewählten Kostenart
                                                               und Kostenstelle

  KoArt().       Stelle().     Monat().        Monat           Zeigt das ausgewählte Monat an

  KoArt().       Stelle().     Monat().        MonPlanWert     Monatsplanwert der ausgewählten
                                                               Kostenart(en) und Kostenstelle(n)

  KoArt().       Stelle().     Monat().        MonWert         Monatswert der ausgewählten
                                                               Kostenart(en) und Kostenstelle(n)

  KoArt().       Stelle().     Monat().        PlanWert        Planwert der Kostenart(en) und
                                                               Kostenstelle(n) bis zum ausgewählten
                                                               Monat

  KoArt().       Stelle().     Monat().        Wert            Ergebnis der Kostenart(en) und
                                                               Kostenstelle(n) bis zum ausgewählten
                                                               Monat

  KoStel().      Jahr().       Erlös                           Jahressumme der Erlöse der
                                                               Kostenstelle(n)

  KoStel().      Jahr().       Kosten                          Jahressumme der Kosten der
                                                               Kostenstelle(n)

  KoStel().      Jahr().       PlanErlös                       Jahressumme der Planerlöse der
                                                               Kostenstelle(n)

  KoStel().      Jahr().       PlanKosten                      Jahressumme der Plankosten der
                                                               Kostenstelle(n)

  KoStel().      Jahr().       PlanWert                        Jahressumme der Planwerte der
                                                               Kostenstelle(n)

  KoStel().      Jahr().       Wert                            Jahresergebnis der Kostenstelle(n)

  KoStel().      Monat().      Erlös                           Summe der Erlöse bis zum ausgewählten
                                                               Monat

  KoStel().      Monat().      Kosten                          Summe der Kosten bis zum ausgewählten
                                                               Monat

  KoStel().      Monat().      Monat                           Zeigt das ausgewählte Monat an

  KoStel().      Monat().      MonErlös                        Monatserlös des ausgewählten Monats

  KoStel().      Monat().      MonKosten                       Monatskosten des ausgewählten Monats

  KoStel().      Monat().      MonPlanErlös                    Monatsplanerlöse des ausgewählten Monats

  KoStel().      Monat().      MonPlanKosten                   Monatsplankosten des ausgewählten Monats

  KoStel().      Monat().      MonPlanWert                     Monatsplanwert des ausgewählten Monats

  KoStel().      Monat().      MonWert                         Monatsergebnis des ausgewählten Monats

  KoStel().      Monat().      PlanErlös                       Planerlöse bis zum ausgewählten Monat

  KoStel().      Monat().      PlanKosten                      Plankosten bis zum ausgewählten Monat

  KoStel().      Monat().      PlanWert                        Planwerte bis zum ausgewählten Monat

  KoStel().      Monat().      Wert                            Ergebnis bis zum ausgewählten Monat

  KoStel().      Nummer                                        Nummer der ausgewählten Kostenstelle

  KoStel().      Text                                          Bezeichnung der ausgewählten
                                                               Kostenstelle

  KoStel().      Überschrift                                   Ob die ausgewählte Kostenstelle eine
                                                               Überschrift ist (Wahr/Falsch)

  KoTraeger().   Art().        Jahr().         Planwert        Jahresplanwert pro Kostenträger und
                                                               Kostenart

  KoTraeger().   Art().                        Wert            Jahreswert pro Kostenträger und
                                                               Kostenart

  KoTraeger().   Art().        Monat().        Monat           Zeigt das ausgewählte Monat an

  KoTraeger().   Art().        Monat().        MonPlanWert     Monatsplanwert pro Kostenträger und
                                                               Kostenart

  KoTraeger().   Art().        Monat().        MonWert         Monatswert pro Kostenträger und
                                                               Kostenart

  KoTraeger().   Art().        Monat().        PlanWert        Planwert bis zum ausgewählten Monat pro
                                                               Kostenträger und Kostenart

  KoTraeger().   Art().        Monat().        Wert            Ergebnis bis zum ausgewählten Monat pro
                                                               Kostenträger und Kostenart

  KoTraeger().   Beginn                                        Beginn-Datum des ausgewählten
                                                               Kostenträgers

  KoTraeger().   Ende                                          Ende-Datum des ausgewählten
                                                               Kostenträgers

  KoTraeger().   Jahr().       Erlös                           Jahreserlöse der ausgewählten
                                                               Kostenträger

  KoTraeger().   Jahr().       Kosten                          Jahreskosten der ausgewählten
                                                               Kostenträger

  KoTraeger().   Jahr().       PlanErlös                       Jahresplanerlöse der ausgewählten
                                                               Kostenträger

  KoTraeger().   Jahr().       PlanKosten                      Jahresplankosten der ausgewählten
                                                               Kostenträger

  KoTraeger().   Monat().      Erlös                           Kostenträger-Erlöse bis zum ausgewählten
                                                               Monat

  KoTraeger().   Monat().      Kosten                          Kostenträger-Kosten bis zum ausgewählten
                                                               Monat

  KoTraeger().   Monat().      Monat                           Zeigt das ausgewählte Monat an

  KoTraeger().   Monat().      MonPlanErlös                    Planerlöse des ausgewählten Monats und
                                                               Kostenträger

  KoTraeger().   Monat().      MonPlanKosten                   Plankosten des ausgewählten Monats und
                                                               Kostenträger

  KoTraeger().   Monat().      MonWertErlös                    Monatserlös des ausgewählten Monats und
                                                               Kostenträger

  KoTraeger().   Monat().      MonWertKosten                   Monatskosten des ausgewählten Monats und
                                                               Kostenträger

  KoTraeger().   Monat().      PlanErlös                       Kostenträger-Planerlöse bis zum
                                                               ausgewählten Monat

  KoTraeger().   Monat().      PlanKosten                      Kostenträger-Plankosten bis zum
                                                               ausgewählten Monat

  KoTraeger().   Nummer                                        Nummer des ausgewählten Kostenträgers

  KoTraeger().   Stelle().     Jahr().         Erlös           Jahreserlöse der Kostenträger und
                                                               Kostenstelle

  KoTraeger().   Stelle().     Jahr().         Kosten          Jahreskosten der Kostenträger und
                                                               Kostenstelle

  KoTraeger().   Stelle().     Jahr().         PlanErlös       Jahres-Planerlöse der Kostenträger und
                                                               Kostenstelle

  KoTraeger().   Stelle().     Jahr().         PlanKosten      Jahres-Plankosten der Kostenträger und
                                                               Kostenstelle

  KoTraeger().   Stelle().     Monat().        Erlös           Erlöse bis zum ausgewählten Monat der
                                                               Kostenträger und Kostenstelle

  KoTraeger().   Stelle().     Monat().        Kosten          Kosten bis zum ausgewählten Monat der
                                                               Kostenträger und Kostenstelle

  KoTraeger().   Stelle().     Monat().        Monat           Zeigt das ausgewählte Monat an

  KoTraeger().   Stelle().     Monat().        MonPlanErlös    Planerlöse des ausgewählten Monats,
                                                               Kostenträger und Kostenstelle

  KoTraeger().   Stelle().     Monat().        MonPlanKosten   Plankosten des ausgewählten Monats,
                                                               Kostenträger und Kostenstelle

  KoTraeger().   Stelle().     Monat().        MonWertErlös    Monatserlös des ausgewählten Monats,
                                                               Kostenträger und Kostenstelle

  KoTraeger().   Stelle().     Monat().        MonWertKosten   Monatskosten des ausgewählten Monats,
                                                               Kostenträger und Kostenstelle

  KoTraeger().   Stelle().     Monat().        PlanErlös       Planerlöse bis zum ausgewählten Monat
                                                               sowie des Kostenträgers und Kostenstelle

  KoTraeger().   Stelle().     Monat().        PlanKosten      Plankosten bis zum ausgewählten Monat
                                                               sowie des Kostenträgers und Kostenstelle

  KoTraeger().   Text                                          Bezeichnung des Kostenträgers

  KoTraeger().   Überschrift                                   ausgewählte Kostenträger ist eine
                                                               Überschrift (Wahr/Falsch)
  -----------------------------------------------------------------------------------------------------

### Konto

  --------------------------------------------------------------------------------------
  **Formel**                                  **Beschreibung**
  ------------ -------------- --------------- ------------------------------------------
  Konto().     Adressblock                    Kontobezeichnung

  Konto().     Art                            Art des Kontos

  Konto().     Jahr().        EBilanz         Wert der Eröffnungsbilanz der ausgewählten
                                              Konten

  Konto().     Jahr().        Haben           Habenumsatz der ausgewählten Konten

  Konto().     Jahr().        Soll            Sollumsatz der ausgewählten Konten

  Konto().     Jahr().        Wert            Endsalden der ausgewählten Konten

  Konto().     Jahr().        WertH           Habensalden der ausgewählten Konten

  Konto().     Jahr().        WertS           Sollsalden der ausgewählten Konten

  Konto().     Kundennummer                   Kundennummer des ausgewählten Debitoren
                                              oder Kreditoren

  Konto().     Monat().       Monat           Zeigt das ausgewählte Monat an

  Konto().     Monat().       MonWert         Monatswert der ausgewählten Konten

  Konto().     Monat().       MonWertH        Monats-Habensalden der ausgewählten Konten

  Konto().     Monat().       MonWertOhneEB   Monatswert ohne EB

  Konto().     Monat().       MonWertS        Monats-Sollsalden der ausgewählten Konten

  Konto().     Monat().       Wert            Kontensaldo bis zum ausgewählten Monat

  Konto().     Monat().       WertH           Kontensaldo Haben bis zum ausgewählten
                                              Monat

  Konto().     Monat().       WertS           Kontensaldo Soll bis zum ausgewählten
                                              Monat

  Konto().     MonatWJ()      Monat           Zeit das ausgewählte Monat an

  Konto().     MonatWJ()      MonWert         Monatswert der ausgewählten Konten im WJ

  Konto().     MonatWJ()      MonWertH        Habensalden der ausgewählten Konten im WJ

  Konto().     MonatWJ()      MonWertOhneEB   Monatswert ohne EB der ausgewählten Konten
                                              im WJ

  Konto().     MonatWJ()      MonWertS        Kontensaldo im Soll der ausgewählten
                                              Konten im WJ

  Konto().     MonatWJ().     Wert            Wert der ausgewählten Konten im WJ

  Konto().     MonatWJ().     WertH           Habenwert der ausgewählten Konten im WJ

  Konto().     MonatWJ().     WertS           Sollwert der ausgewählten Konten im WJ

  Konto().     Nummer                         Kontonummer des ausgewählten Kontos

  Konto().     Text                           Kontenbezeichnung

  Konto().     Text2                          Kontenbezeichnung 2
  --------------------------------------------------------------------------------------

###  Kammerumlage

  ---------------------------------------------------------------------------------
  **Formel**                            **Beschreibung**
  ----------------- ------------ ------ -------------------------------------------
  KammerUmlage().   Quartal().   Wert   Kammerumlage für das jeweilige Quartal

  ---------------------------------------------------------------------------------

### Umsatzsteuer

  -------------------------------------------------------------------------------------------
  **Formel**                                                  **Beschreibung**
  ------------ --------- --------------- ------------ ------- -------------------------------
  USt.         Land().   Monat().        EUStFinanz           EUSt für das jeweilige Monat

  USt.         Land().   Monat().        Monat                Monat der Ust

  USt.         Land().   Monat().        Zahllast             Zahllast für das jeweilige
                                                              Monat

  USt.         Land().   MonatWJ().      EUStFinanz           EUSt für das jeweilige Monat im
                                                              WJ

  USt.         Land().   MonatWJ().      Monat                Monat der Ust im WJ

  USt.         Land().   MonatWJ().      Zahllast             Zahllast für das jeweilige
                                                              Monat im WJ

  USt.         Land().   Name                                 Name des Ust-Landes

  USt.         Land().   Nummer                               Nummer des Ust-Landes

  USt.         Land().   Kennziffer().   Monat().     Monat   Kennziffer des ausgewählten
                                                              Ust-Landes für das jeweilige
                                                              Monat

  USt.         Land().   Kennziffer().   Monat().     Wert    Wert der Kennziffer des
                                                              ausgewählten Ust-Landes EUSt
                                                              für das jeweilige Monat

  USt.         Land().   Kennziffer().   Monat(WJ).   Monat   Kennziffer des ausgewählten
                                                              Ust-Landes für das jeweilige
                                                              Monat

  USt.         Land().   Kennziffer().   Monat(WJ).   Wert    Wert der Kennziffer des
                                                              ausgewählten Ust-Landes EUSt
                                                              für das jeweilige Monat

  USt.         Land().   Kennziffer().   Ziffer               Kennziffer des Ust-Landes
  -------------------------------------------------------------------------------------------

### Personenkonten

  -----------------------------------------------------------------------------------
  **Formel**                                       **Beschreibung**
  -------------- ------------ -------------------- ----------------------------------
  DebKonto().    Monat().     Monat                Monat des Debitors

  DebKonto().    Monat().     NettoumsatzMonWert   Monatswert des ausgewählten
                                                   Debitors

  DebKonto().    Monat().     NettoumsatzWert      Wert des ausgewählten Debitors im
                                                   Monat

  DebKonto().    MonatWJ().   Monat                Monat des Debitors

  DebKonto().    MonatWJ().   NettoumsatzMonWert   Monatswert des ausgewählten
                                                   Debitors

  DebKonto().    MonatWJ().   NettoumsatzWert      Wert des ausgewählten Debitors im
                                                   Monat

  DebKonto().    Nummer                            Kontonummer des Debitors

  DebKonto().    Text                              Bezeichnung des Debitors

  KredKonto().   Monat().     Monat                Monat des Kreditors

  KredKonto().   Monat().     NettoumsatzMonWert   Monatswert des ausgewählten
                                                   Kreditors

  KredKonto().   Monat().     NettoumsatzWert      Wert des ausgewählten Kreditors im
                                                   Monat

  KredKonto().   MonatWJ().   Monat                Monat des Kreditors

  KredKonto().   MonatWJ().   NettoumsatzMonWert   Monatswert des ausgewählten
                                                   Kreditors

  KredKonto().   MonatWJ().   NettoumsatzWert      Wert des ausgewählten Kreditors im
                                                   Monat

  KredKonto().   Nummer                            Kontonummer des Kreditors

  KredKonto().   Text                              Bezeichnung des Kreditors
  -----------------------------------------------------------------------------------

### Kontoart

  -----------------------------------------------------------------------
  **Formel**                           **Beschreibung**
  ------------------- ---------------- ----------------------------------
  KontoArt().         Konten           Auflistung der Konten laut
                                       ausgewählter Kontoart

  KontoArt().         Nummer           Nummer der Kontoart

  KontoArt().         Text             Bezeichnung der Kontoart
  -----------------------------------------------------------------------

## Formelliste für die RZL Bilanz

Die folgenden Formeln können nur im Bilanz-Reporting verwendet werden.

### Anlagenwerte auf Kontenbasis

  --------------------------------------------------------------------------------------------------
  **Formel**                                       **Beschreibung**
  ------------ --------- ------------------------- -------------------------------------------------
  Anl().       Jahr().   Abgang                    Restbuchwert des Abganges

  Anl().       Jahr().   AfA                       Wert der laufenden Abschreibung

  Anl().       Jahr().   BWAlt                     Buchwert zu Beginn des Wirtschaftsjahres

  Anl().       Jahr().   BWNeu                     Buchwert zum Ende des Wirtschaftsjahres

  Anl().       Jahr().   BWR                       Wert der Bewertungsreserve zum Ende des
                                                   Wirtschaftsjahres

  Anl().       Jahr().   BWRAlt                    BWR VJ

  Anl().       Jahr().   BWRSubvention             Subvention

  Anl().       Jahr().   BWRSubventionAlt          Subvention VJ

  Anl().       Jahr().   BWRSubventionAufloesung   Auflösung Subvention

  Anl().       Jahr().   BWRSubventionUmbuchung    Umbuchung Subvention

  Anl().       Jahr().   BWRSubventionVerbrauch    Verbrauch der Subvention

  Anl().       Jahr().   BWRSubventionZugang       Zugang der Subvention

  Anl().       Jahr().   EHW                       Zeigt den Einheitswert neu an

  Anl().       Jahr().   IFB                       IFB

  Anl().       Jahr().   Kost                      Anschaffungskosten

  Anl().       Jahr().   KumAfA                    Wert der kumulierten Abschreibung

  Anl().       Jahr().   Umbu                      Wert der Umbuchung des Buchwertes

  Anl().       Jahr().   VbBWR                     Wert des Verbrauches der Bewertungsreserve

  Anl().       Jahr().   Zugang                    Wert der Zugänge

  Anl().       Jahr().   Zuschr                    Zuschreibungswert

  Anl().       Nummer                              Zeigt die Nummer des ausgewählten Kontos an

  Anl().       Text                                Zeigt den Text des ausgewählten Kontos an
  --------------------------------------------------------------------------------------------------

### 

### Anlagenwerte auf Gliederungsnummer-Basis

  ----------------------------------------------------------------------------------------
  **Formel**                                       **Beschreibung**
  ------------ --------- ------------------------- ---------------------------------------
  AnlBil().    Jahr().   Abgang                    Restbuchwert des Abganges

  AnlBil().    Jahr().   AfA                       Wert der laufenden Abschreibung

  AnlBil().    Jahr().   BWAlt                     Buchwert zu Beginn des
                                                   Wirtschaftsjahres

  AnlBil().    Jahr().   BWNeu                     Buchwert zum Ende des Wirtschaftsjahres

  AnlBil().    Jahr().   BWR                       Wert der Bewertungsreserve zum Ende des
                                                   Wirtschaftsjahres

  AnlBil().    Jahr().   BWRAlt                    Wert der BWR Alt

  AnlBil().    Jahr().   BWRSubvention             Subvention

  AnlBil().    Jahr().   BWRSubventionAlt          Wert der Subvention VJ

  AnlBil().    Jahr().   BWRSubventionAufloesung   Auflösungswert der Subvention

  AnlBil().    Jahr().   BWRSubventionUmbuchung    Umbuchung der Subvention

  AnlBil().    Jahr().   BWRSubventionVerbrauch    Verbrauch der Subvention

  AnlBil().    Jahr().   BWRSubventionZugang       Zugang der Subvention

  AnlBil().    Jahr().   IFB                       IFB

  AnlBil().    Jahr().   EHW                       Zeigt den Einheitswert neu an

  AnlBil().    Jahr().   Kost                      Anschaffungskosten

  AnlBil().    Jahr().   KumAfA                    Wert der kumulierten Abschreibung

  AnlBil().    Jahr().   Umbu                      Wert der Umbuchung des Buchwertes

  AnlBil().    Jahr().   VbBWR                     Wert des Verbrauches der
                                                   Bewertungsreserve

  AnlBil().    Jahr().   Zugang                    Wert der Zugänge

  AnlBil().    Jahr().   Zuschr                    Zuschreibungswert

  AnlBil().    Nummer                              Zeigt die Nummer der ausgewählten
                                                   Gliederung an

  AnlBil().    Text                                Zeigt den Text der ausgewählten
                                                   Gliederung an
  ----------------------------------------------------------------------------------------

### Gesellschafter und Geschäftsführer

  -----------------------------------------------------------------------------
  **Formel**               **Beschreibung**
  ------------ ----------- ----------------------------------------------------
  Gesell().    Land        Länderkennzeichen des Gesellschafters

  Gesell().    Name        Name des Gesellschafters

  Gesell().    Nummer      Nummer des Gesellschafters

  Gesell().    Ort         Ort des Gesellschafters

  Gesell().    PLZ         Postleitzahl des Gesellschafters

  Gesell().    Strasse     Straße des Gesellschafters

  Gf().        FBNr        Firmenbuchnummer der Komplementär GmbH des dafür
                           zuständigen Geschäftsführers

  Gf().        GebDat      Geburtsdatum des Gesellschafters

  Gf().        Name        Nachname des Gesellschafters

  Gf().        Register    Registerbezeichnung der Komplementär GmbH des dafür
                           zuständigen Geschäftsführers

  Gf().        Titel       Titel des Gesellschafters

  Gf().        Vorhanden   Ob der Gesellschafter vorhanden ist (Wahr/Falsch)

  Gf().        Vorname     Vorname des Gesellschafters

  Gf().        Wortlt      Firmenname der Komplementär GmbH des dafür
                           zuständigen Geschäftsführers
  -----------------------------------------------------------------------------

## Formelliste für das Mahnwesen in der RZL-Finanzbuchhaltung

Die folgenden Formeln sind für Mahnvorlagen[]{.indexref
entry="Mahnvorlagen"} in der RZL-Finanzbuchhaltung anwendbar.

Tipp

RZL bietet Ihnen Mustermahnschreiben in Form eines Reports mit der
Nummer *91-RZL Mahnreports* an. Diese können auf den gewünschten
Klienten überspielt und anschließend abgeändert werden. Die notwendigen
Einstellungen betreffend des Klienten in der RZL-Finanzbuchhaltung
finden Sie im *RZL Handbuch Finanzbuchhaltung* (Kapitel
*Mahnwesen*).[]{.indexref entry="Formelliste:Mahnungen"}

### Allgemein

Siehe Kapitel []{.mark}1 []{.mark}Kanzleireports, Seite
[]{.mark}[7](#kanzleireports) ff.

### Klientendaten

Siehe Kapitel 12.2.2 Klientendaten, Seite [87](#klientendaten).

### Bankkonten des Klienten

  --------------------------------------------------------------------------------------
  **Formel**                                       **Beschreibung**
  -------------------- --------------------------- -------------------------------------
  KlientBankkonto().   Bezeichnung                 Name der ausgewählten Bank

  KlientBankkonto().   BIC                         BIC der ausgewählten Bank

  KlientBankkonto().   IBAN                        IBAN der ausgewählten Bank

  KlientBankkonto().   Kundendatenfeld_erster_OP   Zahlungsreferenz des ersten OP der
                                                   ausgewählten Bank

  KlientBankkonto().   Land                        Länderkennzeichen der ausgewählten
                                                   Bank

  KlientBankkonto().   Währung                     Währung der ausgewählten Bank
  --------------------------------------------------------------------------------------

### Kontendaten

+----+----------------+-----------------------------------------------+
| ** |                | **Beschreibung**                              |
| Fo |                |                                               |
| rm |                |                                               |
| el |                |                                               |
| ** |                |                                               |
+====+================+===============================================+
| Ko | Adressblock    | Adressblock des Kunden mit Anrede             |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | Adressblo      | Adressblock des Kunden ohne Anrede            |
| nt | ck_Ohne_Anrede |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | Anrede         | Anrede des Kunden                             |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | Name           | Name des Kunden                               |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | Nummer         | Kontonummer des Kunden                        |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | DIENSTGEBERNR  | Dienstgebernummer des Kunden                  |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | Email          | E-Mail-Adresse des Kunden                     |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | IN_HFU_LISTE   | Kunde in HFU-Liste -- Wahr/Falsch             |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | Kundennummer   | Kundennummer des Kunden                       |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | Saldo          | Saldo des Kunden                              |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | Strasse        | Straße des Kunden                             |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | Land_PLZ_Ort   | bei österreichischen Kunden: Postleitzahl und |
| nt |                | Ort                                           |
| o. |                |                                               |
|    |                | bei ausländischen Kunden: Postleitzahl, Ort   |
|    |                | sowie Land mit Zeilenumbruch und in           |
|    |                | Großbuchstaben                                |
+----+----------------+-----------------------------------------------+
| Ko | Telefon        | Telefonnummer des Kunden                      |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | UID            | UID-Nummer des Kunden                         |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | Zusatztext     | Zusatztext des Kunden                         |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | Land           | Land des Kunden                               |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | La             | Land des Kunden                               |
| nt | nd_Langversion |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | Ort            | Ort des Kunden                                |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | PLZ            | PLZ des Kunden                                |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+
| Ko | SVNr           | SV Nummer des Kunden                          |
| nt |                |                                               |
| o. |                |                                               |
+----+----------------+-----------------------------------------------+

### Buchungen / Offene Posten

  ------------------------------------------------------------------------------------
  **Formel**                                **Beschreibung**
  ------------ ---------------------------- ------------------------------------------
  MahnOP().    Beleg                        Belegnummer des jeweiligen Buchung

  MahnOP().    Belegkreis                   Belegkreis des jeweiligen Buchung

  MahnOP().    Datum                        Datum der jeweiligen Buchung

  MahnOP().    Fremdbeleg                   Fremdbelegnummer der jeweiligen Buchung,
                                            wenn vorhanden

  MahnOP().    Fälligkeitsdatum             Fälligkeitsdatum der jeweiligen Buchung

  MahnOP().    Fälligkeitstage              Fälligkeitstage der jeweiligen Buchung

  MahnOP().    Gegenkonto                   Gegenkonto der jeweiligen Buchung

  MahnOP().    Haben                        Habenwert der jeweiligen Buchung

  MahnOP().    Letztes_Mahndatum            Letztes Mahndatum der jeweiligen Buchung

  MahnOP().    Mahnstufe                    Derzeitige Mahnstufe der jeweiligen
                                            Buchung

  MahnOP().    Mahnstufe_Text               Text der derzeitigen Mahnstufe der
                                            jeweiligen Buchung

  MahnOP().    OP_Zeilen_Bereich            Bereich der Buchungen in der Mahnung

  MahnOP().    OPNr                         Offene Posten-Nummer der jeweiligen
                                            Buchung

  MahnOP().    Soll                         Sollwert der jeweiligen Buchung

  MahnOP().    Steuercode                   Steuercode der jeweiligen Buchung

  MahnOP().    Tage_seit_Buchungsdatum      Tage zwischen Buchung und Mahnung

  MahnOP().    Tage_seit_Fälligkeitsdatum   Tage zwischen Fälligkeit und Mahnung

  MahnOP().    Text                         Text der jeweiligen Buchung

  MahnOP().    Text_mit_OP_Zusatztest       Text mit OP Zusatztext der jeweiligen
                                            Buchung

  MahnOP().    Valutadatum                  Valutadatum der jeweiligen Buchung

  MahnOP().    Zahlungsreferenz             Zahlungsreferenz der jeweiligen Buchung
  ------------------------------------------------------------------------------------

### Weitere Mahndaten

  ----------------------------------------------------------------------------------
  Formel                                        Beschreibung
  ------------------- ------------------------- ------------------------------------
  WeitereMahndaten.   Drittes_Mahndatum         Zeigt das dritte Mahndatum an, wenn
                                                vorhanden

  WeitereMahndaten.   Erstellungsdatum          Erstellungsdatum der Mahnung

  WeitereMahndaten.   Erstes_Mahndatum          Zeigt das erste Mahndatum an

  WeitereMahndaten.   Letzter_Zahlungseingang   Datumseingabe bei „letzter
                                                Zahlungseingang"

  WeitereMahndaten.   Spesen                    Wert der Mahnspesen

  WeitereMahndaten.   Stichtag                  Stichtag der Mahnung

  WeitereMahndaten.   Verzugszinsen             Verzugszinsen der Mahnung

  WeitereMahndaten.   Zahlungsfrist             Zahlungsfrist der Buchung

  WeitereMahndaten.   Zinssatz                  Zinssatz der Verzugszinsen

  WeitereMahndaten.   Zweites_Mahndatum         Zeigt das zweite Mahndatum an, wenn
                                                vorhanden
  ----------------------------------------------------------------------------------

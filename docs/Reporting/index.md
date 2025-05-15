![](img/image1.jpg){width="8.257787620297464in"
height="11.677918853893264in"}

Handbuch & Dokumentation zum Modul Reporting

**Impressum**

Herausgeber\
RZL Software GmbH\
Hannesgrub Nord 35, 4911 Tumeltsham

Reporting-Modul in:\
Finanzbuchhaltung/Bilanz, 07752/252-33, <bil@rzl.at>\
Lohnverrechnung, 07752/252-32, <lohn@rzl.at>\
WT-Honorarverrechnung, 07752/252-37, hon@rzl.at

rzlSoftware.at

Handbuch REPORTING

Version A7

Alle Rechte an diesem Handbuch vorbehalten. Jede Verwertung ohne
ausdrückliche schriftliche Zustimmung des Herausgebers ist untersagt.
Vervielfältigungen sind nur im Rahmen der mit uns abgeschlossenen
Lizenz- und Wartungsverträge für den lizenzierten Standort erlaubt.

© RZL-Software, Tumeltsham

# Inhaltsverzeichnis {#inhaltsverzeichnis .TOC-Heading}

[1 Kanzleireports [7](#kanzleireports)](#kanzleireports)

[1.1 RZL Musterreports installieren
[7](#rzl-musterreports-installieren)](#rzl-musterreports-installieren)

[1.2 Reports auf einen Klienten überspielen
[7](#reports-auf-einen-klienten-überspielen)](#reports-auf-einen-klienten-überspielen)

[1.3 Report öffnen [9](#report-öffnen)](#report-öffnen)

[2 Report bearbeiten [10](#report-bearbeiten)](#report-bearbeiten)

[2.1 Erste Schritte/Kurzübersicht
[10](#erste-schrittekurzübersicht)](#erste-schrittekurzübersicht)

[2.1.1 Die Arbeitsoberfläche im Report Designer
[10](#die-arbeitsoberfläche-im-report-designer)](#die-arbeitsoberfläche-im-report-designer)

[2.1.2 Nützliche Shortcuts und Symbole
[12](#nützliche-shortcuts-und-symbole)](#nützliche-shortcuts-und-symbole)

[2.1 Text- und Absatzbearbeitung
[12](#text--und-absatzbearbeitung)](#text--und-absatzbearbeitung)

[2.1.1 Die Werkzeugleiste für Text-/Absatzformatierungen
[13](#die-werkzeugleiste-für-text-absatzformatierungen)](#die-werkzeugleiste-für-text-absatzformatierungen)

[2.1.2 Texte/Absätze ausblenden
[13](#texteabsätze-ausblenden)](#texteabsätze-ausblenden)

[2.1.3 Eingabefelder/Eingabewerte in Reports
[14](#eingabefeldereingabewerte-in-reports)](#eingabefeldereingabewerte-in-reports)

[2.1.4 Arbeiten mit Tabulator und Lineal
[15](#arbeiten-mit-tabulator-und-lineal)](#arbeiten-mit-tabulator-und-lineal)

[2.2 Suchen und Ersetzen
[17](#suchen-und-ersetzen)](#suchen-und-ersetzen)

[2.3 Formatvorlagen [18](#formatvorlagen)](#formatvorlagen)

[2.3.1 Textformatvorlagen
[18](#textformatvorlagen)](#textformatvorlagen)

[2.3.2 Zahlenformatvorlagen
[19](#zahlenformatvorlagen)](#zahlenformatvorlagen)

[2.3.3 Farbformatvorlagen
[19](#farbformatvorlagen)](#farbformatvorlagen)

[2.4 Kopf- und Fußzeile [19](#kopf--und-fußzeile)](#kopf--und-fußzeile)

[3 Ansichten [21](#ansichten)](#ansichten)

[3.1 Absatzmarke ausblenden / einblenden
[21](#absatzmarke-ausblenden-einblenden)](#absatzmarke-ausblenden-einblenden)

[3.2 Formeltext einblenden
[21](#formeltext-einblenden)](#formeltext-einblenden)

[3.3 Verborgenen Text ausblenden / einblenden
[21](#verborgenen-text-ausblenden-einblenden)](#verborgenen-text-ausblenden-einblenden)

[3.4 Dokumentgliederung [21](#dokumentgliederung)](#dokumentgliederung)

[3.5 Zweite Dokumentenansicht öffnen
[22](#zweite-dokumentenansicht-öffnen)](#zweite-dokumentenansicht-öffnen)

[3.6 Eigenschaftsfenster
[22](#eigenschaftsfenster)](#eigenschaftsfenster)

[3.6.1 Abschnitt (Dokument) - Eigenschaftsfenster
[22](#abschnitt-dokument---eigenschaftsfenster)](#abschnitt-dokument---eigenschaftsfenster)

[3.6.2 Absatz-Eigenschaftsfenster
[23](#absatz-eigenschaftsfenster)](#absatz-eigenschaftsfenster)

[3.6.3 Tabulator-Eigenschaftsfenster
[24](#tabulator-eigenschaftsfenster)](#tabulator-eigenschaftsfenster)

[3.6.4 Text-Eigenschaftsfenster
[25](#text-eigenschaftsfenster)](#text-eigenschaftsfenster)

[3.6.5 Formel-Eigenschaftsfenster
[25](#formel-eigenschaftsfenster)](#formel-eigenschaftsfenster)

[3.6.6 Tabelle-Eigenschaftsfenster
[28](#tabelle-eigenschaftsfenster)](#tabelle-eigenschaftsfenster)

[3.6.7 Tabellenzeile-Eigenschaftsfenster
[28](#tabellenzeile-eigenschaftsfenster)](#tabellenzeile-eigenschaftsfenster)

[3.6.8 Tabellenspalte-Eigenschaftsfenster
[29](#tabellenspalte-eigenschaftsfenster)](#tabellenspalte-eigenschaftsfenster)

[3.6.9 Tabellenzelle-Eigenschaftsfenster
[30](#tabellenzelle-eigenschaftsfenster)](#tabellenzelle-eigenschaftsfenster)

[3.6.10 Diagramm-Eigenschaftsfenster
[30](#diagramm-eigenschaftsfenster)](#diagramm-eigenschaftsfenster)

[3.6.11 Aufruf Eigenschaftsfenster
[32](#aufruf-eigenschaftsfenster)](#aufruf-eigenschaftsfenster)

[4 Einfügen [33](#einfügen)](#einfügen)

[4.1 Grafik [33](#grafik)](#grafik)

[4.2 Manueller Seitenumbruch
[33](#manueller-seitenumbruch)](#manueller-seitenumbruch)

[4.3 Abschnittswechsel [33](#abschnittswechsel)](#abschnittswechsel)

[4.4 Geschütztes Leerzeichen
[33](#geschütztes-leerzeichen)](#geschütztes-leerzeichen)

[4.5 Zeilenumbruch [33](#zeilenumbruch)](#zeilenumbruch)

[4.6 Formel [33](#formel)](#formel)

[4.7 Tabelle [34](#tabelle)](#tabelle)

[4.8 Formeltabelle [34](#formeltabelle)](#formeltabelle)

[4.9 Diagramm [34](#diagramm)](#diagramm)

[4.9.1 Neues Diagramm erstellen
[35](#neues-diagramm-erstellen)](#neues-diagramm-erstellen)

[4.9.2 Diagramme formatierenFehler! Textmarke nicht definiert.
[35](#diagramme-formatierenfehler-textmarke-nicht-definiert.)](#diagramme-formatierenfehler-textmarke-nicht-definiert.)

[4.10 Eledigtsymbol [35](#eledigtsymbol)](#eledigtsymbol)

[4.11 Symbol [35](#symbol)](#symbol)

[5 Formeln [36](#formeln)](#formeln)

[5.1 Einfügen und Bearbeiten von Formeln
[36](#einfügen-und-bearbeiten-von-formeln)](#einfügen-und-bearbeiten-von-formeln)

[5.1.1 Das Formeldialogfenster
[36](#das-formeldialogfenster)](#das-formeldialogfenster)

[5.1.2 Berechnungen [37](#berechnungen)](#berechnungen)

[5.1.3 Datenzugriff auf Klientendaten
[42](#datenzugriff-auf-klientendaten)](#datenzugriff-auf-klientendaten)

[5.1.4 Datenzugriff auf Reportdaten
[43](#datenzugriff-auf-reportdaten)](#datenzugriff-auf-reportdaten)

[5.1.5 Formatieren von Formeln
[43](#formatieren-von-formeln)](#formatieren-von-formeln)

[5.1.6 Benannte Formeln [44](#benannte-formeln)](#benannte-formeln)

[5.1.7 Andruck durch Bedingungen
[45](#andruck-durch-bedingungen)](#andruck-durch-bedingungen)

[5.1.8 Arbeiten mit Tabellenformeln
[46](#arbeiten-mit-tabellenformeln)](#arbeiten-mit-tabellenformeln)

[5.1.9 Arbeiten mit Formeltabellen
[47](#arbeiten-mit-formeltabellen)](#arbeiten-mit-formeltabellen)

[5.2 Formelliste [48](#formelliste)](#formelliste)

[5.3 Formel suchen [48](#formel-suchen)](#formel-suchen)

[6 Tabelle [49](#tabelle-1)](#tabelle-1)

[6.1 Arbeiten mit Tabellen
[49](#arbeiten-mit-tabellen)](#arbeiten-mit-tabellen)

[6.1.1 Tabellenbereiche zur Bearbeitung richtig markieren
[49](#tabellenbereiche-zur-bearbeitung-richtig-markieren)](#tabellenbereiche-zur-bearbeitung-richtig-markieren)

[6.1.2 Zeilen/Spalten hinzufügen oder löschen
[50](#zeilenspalten-hinzufügen-oder-löschen)](#zeilenspalten-hinzufügen-oder-löschen)

[6.1.3 Zellen verbinden [50](#zellen-verbinden)](#zellen-verbinden)

[6.1.4 Zellen trennen [50](#zellen-trennen)](#zellen-trennen)

[6.1.5 Tabelle formatieren
[50](#tabelle-formatieren)](#tabelle-formatieren)

[6.2 Tabellen-Eigenschaften
[50](#tabellen-eigenschaften)](#tabellen-eigenschaften)

[6.2.1 Automatische Summen einfügen
[51](#automatische-summen-einfügen)](#automatische-summen-einfügen)

[7 Kontextmenü [52](#kontextmenü)](#kontextmenü)

[7.1 Absatzbedingungen hinterlegen/ändern
[52](#absatzbedingungen-hinterlegenändern)](#absatzbedingungen-hinterlegenändern)

[7.2 Bedingung vom vorherigen Absatz übernehmen
[52](#bedingung-vom-vorherigen-absatz-übernehmen)](#bedingung-vom-vorherigen-absatz-übernehmen)

[7.3 Bedingung vom nächsten Absatz übernehmen
[52](#bedingung-vom-nächsten-absatz-übernehmen)](#bedingung-vom-nächsten-absatz-übernehmen)

[7.4 Abschnittshintergrund einfügen
[52](#abschnittshintergrund-einfügen)](#abschnittshintergrund-einfügen)

[7.5 Eigenschaften [53](#eigenschaften)](#eigenschaften)

[7.6 Absatzrahmen [53](#absatzrahmen)](#absatzrahmen)

[8 Verwaltung [54](#verwaltung)](#verwaltung)

[8.1 Bestehende Reports als Musterreport sichern
[54](#bestehende-reports-als-musterreport-sichern)](#bestehende-reports-als-musterreport-sichern)

[8.2 Report sichern [54](#report-sichern)](#report-sichern)

[8.3 Export/Import eines Reports
[55](#exportimport-eines-reports)](#exportimport-eines-reports)

[8.4 Report löschen [55](#report-löschen)](#report-löschen)

[8.5 Report umbenennen [55](#report-umbenennen)](#report-umbenennen)

[8.6 Drucken von Reports
[55](#drucken-von-reports)](#drucken-von-reports)

[8.6.1 Ausgabe über den RZL PDF-Drucker/RZL PDF-Manager Premium
[55](#ausgabe-über-den-rzl-pdf-druckerrzl-pdf-manager-premium)](#ausgabe-über-den-rzl-pdf-druckerrzl-pdf-manager-premium)

[8.6.2 Ausdruck beim installierten Drucker
[56](#ausdruck-beim-installierten-drucker)](#ausdruck-beim-installierten-drucker)

[8.6.3 Sonderoption: Drucken von dienstnehmer- und dienstgeberbezogenen
Daten
[56](#sonderoption-drucken-von-dienstnehmer--und-dienstgeberbezogenen-daten)](#sonderoption-drucken-von-dienstnehmer--und-dienstgeberbezogenen-daten)

[9 Auflistung Musterreports
[57](#auflistung-musterreports)](#auflistung-musterreports)

[9.1 Bilanz [57](#bilanz)](#bilanz)

[9.2 Finanzbuchhaltung [58](#finanzbuchhaltung)](#finanzbuchhaltung)

[9.3 Lohnverrechnung [59](#lohnverrechnung)](#lohnverrechnung)

[9.4 Honorarverrechnung [59](#honorarverrechnung)](#honorarverrechnung)

[10 Formelsammlung Programmübergreifend
[60](#formelsammlung-programmübergreifend)](#formelsammlung-programmübergreifend)

[10.1 Liste der Formeln [60](#liste-der-formeln)](#liste-der-formeln)

[10.1.1 Lizenz [60](#lizenz)](#lizenz)

[11 Formelsammlung für das Lohn-Reporting
[61](#formelsammlung-für-das-lohn-reporting)](#formelsammlung-für-das-lohn-reporting)

[11.1 RZL Musterreports LV
[61](#rzl-musterreports-lv)](#rzl-musterreports-lv)

[11.2 Liste der Lohnformeln
[61](#liste-der-lohnformeln)](#liste-der-lohnformeln)

[11.2.1 Zeitraum [61](#zeitraum)](#zeitraum)

[11.2.2 Arbeitsstätte [61](#arbeitsstätte)](#arbeitsstätte)

[11.2.3 Dienstgeber - Allgemein
[62](#dienstgeber---allgemein)](#dienstgeber---allgemein)

[11.2.4 Dienstnehmer - Allgemein
[64](#dienstnehmer---allgemein)](#dienstnehmer---allgemein)

[11.2.5 Dienstnehmer -- Stammdaten
[65](#dienstnehmer-stammdaten)](#dienstnehmer-stammdaten)

[11.2.6 Dienstnehmer -- Stammdaten Fristen
[66](#dienstnehmer-stammdaten-fristen)](#dienstnehmer-stammdaten-fristen)

[11.2.7 Dienstnehmer -- Eintritt
[67](#dienstnehmer-eintritt)](#dienstnehmer-eintritt)

[11.2.8 Dienstnehmer -- Kollektivvertrag
[69](#dienstnehmer-kollektivvertrag)](#dienstnehmer-kollektivvertrag)

[11.2.9 Dienstnehmer -- Austritt
[70](#dienstnehmer-austritt)](#dienstnehmer-austritt)

[11.2.10 Dienstnehmer -- Lohnsteuer
[71](#dienstnehmer-lohnsteuer)](#dienstnehmer-lohnsteuer)

[11.2.11 Dienstnehmer -- Sozialversicherung
[72](#dienstnehmer-sozialversicherung)](#dienstnehmer-sozialversicherung)

[11.2.12 Dienstnehmer -- Lohnarten
[75](#dienstnehmer-lohnarten)](#dienstnehmer-lohnarten)

[11.2.13 Dienstnehmer -- Über-/Mehrstunden
[76](#dienstnehmer-über-mehrstunden)](#dienstnehmer-über-mehrstunden)

[11.2.14 Dienstnehmer -- BUAK
[76](#dienstnehmer-buak)](#dienstnehmer-buak)

[11.2.15 Dienstnehmer -- Urlaub
[77](#dienstnehmer-urlaub)](#dienstnehmer-urlaub)

[11.2.16 Dienstnehmer -- Krankenstand
[78](#dienstnehmer-krankenstand)](#dienstnehmer-krankenstand)

[11.2.17 Dienstnehmer -- Dienstzettel
[79](#dienstnehmer-dienstzettel)](#dienstnehmer-dienstzettel)

[11.2.18 Auswahlkriterium [79](#auswahlkriterium)](#auswahlkriterium)

[11.2.19 Zeitausgleich [80](#zeitausgleich)](#zeitausgleich)

[11.2.20 Abzüge [81](#abzüge)](#abzüge)

[11.2.21 Exekutionen [82](#exekutionen)](#exekutionen)

[11.2.22 Kostenstelle [83](#kostenstelle)](#kostenstelle)

[11.2.23 Freie Dienstnehmer
[83](#freie-dienstnehmer)](#freie-dienstnehmer)

[11.2.24 Kurzarbeit [83](#kurzarbeit)](#kurzarbeit)

[12 Formelsammlung für die Bilanz und Finanzbuchhaltung
[86](#formelsammlung-für-die-bilanz-und-finanzbuchhaltung)](#formelsammlung-für-die-bilanz-und-finanzbuchhaltung)

[12.1 RZL Musterreports Finanzbuchhaltung und Bilanz
[86](#rzl-musterreports-finanzbuchhaltung-und-bilanz)](#rzl-musterreports-finanzbuchhaltung-und-bilanz)

[12.2 Liste der Bilanz- und Finanzbuchhaltungsformeln
[86](#liste-der-bilanz--und-finanzbuchhaltungsformeln)](#liste-der-bilanz--und-finanzbuchhaltungsformeln)

[12.2.1 Zeitraum [86](#zeitraum-1)](#zeitraum-1)

[12.2.2 Klientendaten [87](#klientendaten)](#klientendaten)

[12.2.3 Bilanzdaten [88](#bilanzdaten)](#bilanzdaten)

[12.2.4 Gewinn- und Verlustrechnung
[88](#gewinn--und-verlustrechnung)](#gewinn--und-verlustrechnung)

[12.2.5 KER -- Kurzfristige Erfolgsrechnung
[90](#ker-kurzfristige-erfolgsrechnung)](#ker-kurzfristige-erfolgsrechnung)

[12.2.6 Kostenrechnung [90](#kostenrechnung)](#kostenrechnung)

[12.2.7 Konto [93](#konto)](#konto)

[12.2.8 Kammerumlage [94](#kammerumlage)](#kammerumlage)

[12.2.9 Umsatzsteuer [94](#umsatzsteuer)](#umsatzsteuer)

[12.2.10 Personenkonten [94](#personenkonten)](#personenkonten)

[12.2.11 Kontoart [95](#kontoart)](#kontoart)

[12.3 Formelliste für die RZL Bilanz
[96](#formelliste-für-die-rzl-bilanz)](#formelliste-für-die-rzl-bilanz)

[12.3.1 Anlagenwerte auf Kontenbasis
[96](#anlagenwerte-auf-kontenbasis)](#anlagenwerte-auf-kontenbasis)

[12.3.2 Anlagenwerte auf Gliederungsnummer-Basis
[97](#anlagenwerte-auf-gliederungsnummer-basis)](#anlagenwerte-auf-gliederungsnummer-basis)

[12.3.3 Gesellschafter und Geschäftsführer
[97](#gesellschafter-und-geschäftsführer)](#gesellschafter-und-geschäftsführer)

[12.4 Formelliste für das Mahnwesen in der RZL-Finanzbuchhaltung
[98](#formelliste-für-das-mahnwesen-in-der-rzl-finanzbuchhaltung)](#formelliste-für-das-mahnwesen-in-der-rzl-finanzbuchhaltung)

[12.4.1 Allgemein [98](#allgemein-1)](#allgemein-1)

[12.4.2 Klientendaten [98](#klientendaten-1)](#klientendaten-1)

[12.4.3 Bankkonten des Klienten
[98](#bankkonten-des-klienten)](#bankkonten-des-klienten)

[12.4.4 Kontendaten [98](#kontendaten)](#kontendaten)

[12.4.5 Buchungen / Offene Posten
[99](#buchungen-offene-posten)](#buchungen-offene-posten)

[12.4.6 Weitere Mahndaten [99](#weitere-mahndaten)](#weitere-mahndaten)

[13 Formelsammlung für die Honorarverrechnung
[101](#formelsammlung-für-die-honorarverrechnung)](#formelsammlung-für-die-honorarverrechnung)

[13.1 RZL Notenvorlage Erweitert
[101](#rzl-notenvorlage-erweitert)](#rzl-notenvorlage-erweitert)

[13.2 Liste der Honorarverrechnungsformeln
[101](#liste-der-honorarverrechnungsformeln)](#liste-der-honorarverrechnungsformeln)

[13.2.1 Dokument Allgemein
[101](#dokument-allgemein)](#dokument-allgemein)

[13.2.2 Honorarnote Allgemein
[101](#honorarnote-allgemein)](#honorarnote-allgemein)

[13.2.3 Kanzleibereich (Rechnungssteller)
[101](#kanzleibereich-rechnungssteller)](#kanzleibereich-rechnungssteller)

[13.2.4 Klient (Rechnungsempfänger)
[102](#klient-rechnungsempfänger)](#klient-rechnungsempfänger)

[13.2.5 Zustellvertreter [102](#zustellvertreter)](#zustellvertreter)

[13.3 Bereiche [103](#bereiche)](#bereiche)

[13.3.1 Mit Umsatzsteuer [103](#mit-umsatzsteuer)](#mit-umsatzsteuer)

[13.3.2 Ohne Umsatzsteuer [103](#ohne-umsatzsteuer)](#ohne-umsatzsteuer)

[13.3.3 Rabatte [103](#rabatte)](#rabatte)

[13.3.4 Akonto [104](#akonto)](#akonto)

[13.4 Summen [104](#summen)](#summen)

[13.4.1 Nettosumme vor Abzug der Rabatte
[104](#nettosumme-vor-abzug-der-rabatte)](#nettosumme-vor-abzug-der-rabatte)

[13.4.2 Nettosumme vor der Umsatzsteuer
[104](#nettosumme-vor-der-umsatzsteuer)](#nettosumme-vor-der-umsatzsteuer)

[13.4.3 Umsatzsteuer [104](#umsatzsteuer-1)](#umsatzsteuer-1)

[13.4.4 Summe Nach Umsatzsteuer
[105](#summe-nach-umsatzsteuer)](#summe-nach-umsatzsteuer)

[13.4.5 Bruttosumme (Zwischensumme vor Akonto)
[105](#bruttosumme-zwischensumme-vor-akonto)](#bruttosumme-zwischensumme-vor-akonto)

[13.4.6 Akonto Umsatzsteuer
[105](#akonto-umsatzsteuer)](#akonto-umsatzsteuer)

[13.4.7 Gesamtbetrag [105](#gesamtbetrag)](#gesamtbetrag)

[13.4.8 Zahlung [105](#zahlung)](#zahlung)

[13.4.9 Journal [106](#journal)](#journal)

[13.4.10 Verrechnungskreis-Rückblick
[109](#verrechnungskreis-rückblick)](#verrechnungskreis-rückblick)



# Report bearbeiten

Im folgenden Kapitel werden die unterschiedlichen Werkzeuge zur
allgemeinen Bearbeitung von Reports beschrieben. []{.indexref
entry="Report bearbeiten"}Die spezifischen Formelsammlungen zu den
jeweiligen Programmen Lohn, Bilanz/Finanzbuchhaltung und
Honorarverrechnung finden Sie ab Kapitel 10 Formelsammlung
Programmübergreifend, Seite [60](#formelsammlung-programmübergreifend).












## Eigenschaftsfenster























### 











# Kontextmenü[]{.indexref entry="Kontextmenü"}

Das Kontextmenü kann mit einem *rechten Mausklick* in das Dokument
geöffnet werden:

Abb. 7‑1 Kontextmenü

![](img/image109.png){width="3.6662084426946633in"
height="2.4996872265966754in"}

## Absatzbedingungen hinterlegen/ändern[]{.indexref entry="Kontextmenü:Absatzbedingungen"}

Durch Anwahl des Punktes *Absatzbedingungen hinterlegen/ändern* im
*Kontextmenü* öffnet sich das Formeldialog-Fenster in dem Modus
*Bedingungsformel (F8)*. Hier können Sie eine Bedingungsformel
hinterlegen (Kapitel 5.1.7 Andruck durch Bedingungen, Seite
[45](#andruck-durch-bedingungen)).

Abb. 7‑2 Kontextmenü

![](img/image110.png){width="6.102362204724409in"
height="1.356013779527559in"}

## Bedingung vom vorherigen Absatz übernehmen

Mit dem Punkt *Bedingung vom vorherigen Absatz übernehmen*, können Sie
die Bedingung des vorherigen Absatzes ganz einfach auf den neu
markierten Absatz übernehmen.

## Bedingung vom nächsten Absatz übernehmen

Mit dem Punkt *Bedingung vom nächsten Absatz übernehmen*, können Sie die
Bedingung des nächsten Absatzes ganz einfach auf den neu markierten
Absatz übernehmen.

## Abschnittshintergrund einfügen[]{.indexref entry="Kontextmenü:Abschnittshintergrund"}

Mit dem Menüpunkt *Abschnittshintergrund einfügen* im *Kontextmenü*
können Sie für diesen Abschnitt ein Hintergrundbild einfügen. Sie können
alle gängigen Dateitypen für Bilder und auch PDFs hinterlegen.

## Eigenschaften

Im Kontextmenü können über Eigenschaften alle Eigenschaftsfenster
geöffnet werden. Siehe Kapitel 3.6 Eigenschaftsfenster, Seite
[22](#eigenschaftsfenster).

## Absatzrahmen[]{.indexref entry="Kontextmenü:Absatzrahmen"}

Um einen Rahmen einzufügen, markieren Sie dazu den gewünschten Bereich
mit einem Doppelklick. Der gewählte Bereich wird dadurch blau
hinterlegt. Mit der rechten Maustaste öffnet sich das Kontextmenü. Mit
Anwahl der Option *Absatzrahmen* können Sie den gewünschten Rahmen
auswählen.

Abb. 7‑3 Absatzrahmen

![](img/image111.png){width="2.9537773403324583in"
height="2.4314545056867893in"}

Siehe Kapitel 6.1.5 Tabelle formatieren, Seite
[50](#tabelle-formatieren).

# Verwaltung

## Bestehende Reports als Musterreport sichern[]{.indexref entry="Musterreports:sichern"}

Bereits bestehende Reports eines Klienten können gesondert gespeichert
und zur Verwendung und individuellen Abänderung auf einen anderen
Klienten übertragen werden.

Wählen Sie dazu den Menüpunkt *Klient / Kanzlei / Reports* an. Durch die
Eingabe einer neuen, noch nicht belegten Nummer können Sie nach Eingabe
eines Textes mit der Option *von Klient übernehmen* im Feld
*Klientennummer* die Klientennummer mit dem Wirtschaftsjahr eingeben
oder den gewünschten Klienten über den Aufruf mit der *F2-Taste*
auswählen.

Mit *Ausführen* werden die einzelnen Reports angezeigt und können durch
Setzen von Häkchen individuell angewählt und als Musterreport gesichert
werden. Im Anschluss können Sie den Musterreport aus der Liste auswählen
und sofort auf einen anderen Klienten überspielen.

Tipp

Musterreports können über die *Zentrale Mandantenverwaltung (ZMV)* auch
via E-Mail versendet werden. Wählen Sie dazu den Menüpunkt *Allg.
Dateien / Mit E-Mail senden* und die Schaltfläche *Erweitert* aus. Der
gewünschte Report (mit Typ *KREP*) kann dann angewählt und mit *Senden*
versendet werden. Beim Empfänger kann der Musterreport anschließend
wiederum in der ZMV über *Allg. Dateien / Hereinspielen* hochgeladen und
importiert werden.

Tipp

Eine noch schnellere Variante Musterreports zu versenden bzw. zu
exportieren ist über den Menüpunkt *Report öffnen* möglich. Je nach
Programm ist der Vormenüpunkt unterschiedlich (siehe Kapitel 1.3 Report
öffnen, Seite [9](#report-öffnen)). Hier kann mittels Klick auf
Exportieren der Report als XML-Datei exportiert werden. Über denselben
Menüpunkt kann der Report über die Schaltfläche *Importieren* importiert
werden.

![](img/image112.png){width="0.7874015748031497in"
height="0.9878313648293964in"}

## Report sichern[[]{.indexref entry="Report:sichern"}]{.indexref entry="Sichern"}

Nach der Bearbeitung eines Reports müssen die Änderungen gesichert
werden. Zur Speicherung haben Sie folgende Möglichkeiten:

- über den Menüpunkt *Datei / Speichern,*

- mit dem *Speichern-Symbol* in der Werkzeugleiste
  ![](img/image113.png){width="0.1978915135608049in"
  height="0.1874770341207349in"} oder

- mit der Tastenkombination *Strg + S*.

Sofern ein neuer Report erstellt wurde, erhalten Sie einen
Zwischendialog zur Eingabe eines Report-Namens. Über den Menüpunkt
*Datei / Speichern unter* können Sie den geöffneten Report mit einem
neuen Namen sichern. Der ursprüngliche Report bleibt mit dem alten Namen
somit erhalten.

HInweis

Sobald Sie einen Report auf einen Klienten überspielt haben, wird durch
die Sicherung des Klienten der Report mitgesichert. Ein individuelles
Speichern ist nur im Zuge der Erstellung bzw. Bearbeitung notwendig.

## Export/Import eines Reports[[[[]{.indexref entry="Report:Import"}]{.indexref entry="Import"}]{.indexref entry="Report:Export"}]{.indexref entry="Export"}

Reports eines Klienten können zur Weitergabe auch als XML-Struktur
gespeichert werden. Dadurch werden keine klientenspezifischen Daten
weitergegeben. Im Report-*Öffnen Dialogfenster* können Sie die
Auswertungen exportieren:

[]{#_Ref453858760 .anchor} Abb. 8‑1 Report öffnen

![](img/image114.png){width="4.142856517935258in"
height="2.7001115485564307in"}

Wählen Sie für den Export die Schaltfläche *Exportieren* aus. Sie
gelangen in einen *Speichern-unter* Dialog, wo der Speicherort und
Dokumentenname definiert werden kann. Der Report wird im Dateityp
*RZL-Reports.xml* gesichert und kann nun in jeden beliebigen
RZL-Klienten übernommen werden.

Öffnen Sie dazu im gewünschten RZL-Klienten das *Report-Öffnen*
Dialogfenster und wählen Sie die Schaltfläche *Importieren* aus. Nach
Anwahl des RZL-Reports im XML-Format wird der Report mit *Öffnen* in den
Klienten importiert.

## Report löschen[[]{.indexref entry="Report:löschen"}]{.indexref entry="Löschen"}

Im *Report-Öffnen* Dialogfenster ( Abb. 8‑1, Seite [55](#_Ref453858760))
können Sie mit der Schaltfläche *Löschen* den aktiv angewählten Report
des geöffneten Klienten löschen.

## Report umbenennen[[]{.indexref entry="Report:umbenennen"}]{.indexref entry="Umbenennen"}

Im *Report-Öffnen* Dialogfenster ( Abb. 8‑1, Seite [55](#_Ref453858760))
können Sie nach Anwahl des gewünschten Reports im unteren Eingabefeld
einen neuen Namen definieren. Mit der Schaltfläche *Umbenennen* wird der
bisherige Name überschrieben.

## Drucken von Reports[[]{.indexref entry="Report:drucken"}]{.indexref entry="Ausdruck"}

Für den Ausdruck eines Reports muss dieser zunächst geöffnet werden
(Kapitel 1.3 Report öffnen, Seite [9](#_Ref452557488)). Anschließend
stehen Ihnen folgende Druckmöglichkeiten zur Verfügung:

### Ausgabe über den RZL PDF-Drucker/RZL PDF-Manager Premium[[[]{.indexref entry="Sichern:PDF"}]{.indexref entry="PDF-Drucker"}]{.indexref entry="Ausdruck: Report als PDF ausgeben"}

Zur Vorabansicht bzw. für die Sicherung des Reports als PDF-Dokument
empfiehlt sich die Ausgabe im RZL PDF-Drucker/RZL PDF-Manager Premium.
Wählen Sie dazu den Menüpunkt *Datei / PDF Drucken* oder das
PDF-Druckersymbol in der Werkzeugleiste (Kapitel 2.1.2 Nützliche
Shortcuts und Symbole, Seite [12](#nützliche-shortcuts-und-symbole)).

Der aktuelle Report wird im RZL PDF-Drucker geöffnet und kann von dort
aus direkt gespeichert, gedruckt oder per E-Mail versendet werden.

### Ausdruck beim installierten Drucker

Zur Direktausgabe am installierten Drucker stehen Ihnen folgende
Möglichkeiten zur Verfügung:

- über den Menüpunkt *Datei / Drucken*,

- mit dem Drucker-Symbol in der Werkzeugleiste
  ![](img/image115.png){width="0.1968503937007874in"
  height="0.16535433070866143in"} oder

- mit der Tastenkombination *STRG + P*.

### Sonderoption: Drucken von dienstnehmer- und dienstgeberbezogenen Daten [[]{.indexref entry="Ausdruck:DG/DN-bezogene Daten"}]{.indexref entry="Ausdruck:Lohn Sonderoption"}

Das RZL-Lohnprogramm bietet Ihnen die Möglichkeit Reports auf Basis von
definierten Dienstgeber- bzw. Dienstnehmerdaten zu drucken.

#### Dienstgeberbezogene Reports drucken {#dienstgeberbezogene-reports-drucken .Überschrift-4---VG}

Sofern im Klienten ein Report mit Dienstgeber-Formeln hinterlegt ist,
können Sie diesen über den Menüpunkt *Report / DG Report drucken* für
den jeweilig gewünschten Monat ausgeben.

#### Dienstnehmerbezogene Reports drucken {#dienstnehmerbezogene-reports-drucken .Überschrift-4---VG}

Auf dienstnehmerbezogene Daten basierende Reports können Sie über den
Menüpunkt *Report / DN Report drucken* ausgeben. Nach Eingabe des
gewünschten Monats und Dienstnehmers werden die Daten in den
ausgewählten Report eingelesen und können anschließend ausgedruckt
werden.

# Auflistung Musterreports[[]{.indexref entry="Musterreports"}]{.indexref entry="Auflistung Musterreports"}

## Bilanz[]{.indexref entry="Musterreports:Bilanz"}

Nachfolgende Musterreports wurden von uns ausgeliefert.

+--------+--------------------------+---------------------------------+
| **Nu   | **Name**                 | **Inhalt**                      |
| mmer** |                          |                                 |
+========+==========================+=================================+
| 1      | RZL-Musterreport         | Formblatt Anhang RÄG 2014       |
|        | Firmenbuch               |                                 |
+--------+--------------------------+---------------------------------+
| 3      | RZL-Musteranhang kurz    | RZL-Musteranhang kurz 112016    |
|        | 2016                     |                                 |
+--------+--------------------------+---------------------------------+
| 4      | RZL-Musteranhang lang    | RZL-Musteranhang lang 112016    |
|        | 2016                     |                                 |
+--------+--------------------------+---------------------------------+
| 6      | RZL-Musteranhang kurz    | RZL-Musteranhang kurz ohne      |
|        | 2016 ohne Vorjahr        | Vorjahr 112016                  |
+--------+--------------------------+---------------------------------+
| 11     | RZL-Quickkennzahlen      | RZL-Quick Kennzahlen KMU 112016 |
+--------+--------------------------+---------------------------------+
| 13     | RZL Muster Checklisten   | - RZL Checkliste                |
|        |                          |   Automatisierung FIBU          |
|        |                          |                                 |
|        |                          | - RZL Checkliste Bilanzierung   |
|        |                          |   kurz                          |
|        |                          |                                 |
|        |                          | - RZL Bilanzierung lang         |
+--------+--------------------------+---------------------------------+
| 16     | RZL-Er                   | - E                             |
|        | trags_Liquiditätsanalyse | rgebnis-/Liquiditätsentwicklung |
|        |                          |   3 Jahresvergleich 112016      |
|        |                          |                                 |
|        |                          | - E                             |
|        |                          | rgebnis-/Liquiditätsentwicklung |
|        |                          |   4 Jahresvergleich 112016      |
|        |                          |                                 |
|        |                          |   *Nicht für abweichendes       |
|        |                          |   Wirtschaftsjahr geeignet*     |
+--------+--------------------------+---------------------------------+
| 18     | RZ                       | RZL-Jahresabschluss-Report      |
|        | L-Jahresabschluss-Report | Präsentation 112016             |
|        | Präsentation             |                                 |
+--------+--------------------------+---------------------------------+
| 21     | RZL-Berichte gem. KFS/RL | - AAB 2018                      |
|        | 26                       |                                 |
|        |                          | - AAB 2018 Englisch             |
|        |                          |                                 |
|        |                          | - Auftragsbestätigung für einen |
|        |                          |   Erstellungsauftrag            |
|        |                          |                                 |
|        |                          | - Erstellungsbericht mit        |
|        |                          |   Mitwirkung an Buchführung     |
|        |                          |                                 |
|        |                          | - Erstellungsauftrag ohne       |
|        |                          |   Mitwirkung an Buchführung     |
|        |                          |                                 |
|        |                          | - Vollständigkeitserklärung     |
+--------+--------------------------+---------------------------------+
| 22     | G                        | Gaststättenpauschalierung neu   |
|        | aststättenpauschalierung | ab 2020 30032023                |
|        | neu                      |                                 |
+--------+--------------------------+---------------------------------+
| 23     | RZL-Muster               | RZL-Muster Umlaufbeschluss      |
|        | Umlaufbeschluss          | 092019                          |
+--------+--------------------------+---------------------------------+
| 25     | RZL Musteranhänge RÄG    | - RZL Musteranhang kurz RÄG     |
|        | 2014                     |   2014 ohne VJ Version 2        |
|        |                          |                                 |
|        |                          | - RZL Musteranhang kurz RÄG     |
|        |                          |   2014 Version 4                |
|        |                          |                                 |
|        |                          | - RZL Musteranhang lang RÄG     |
|        |                          |   2014 Version 4                |
+--------+--------------------------+---------------------------------+
| 26     | RZL Musterreports RÄG    | - RZL Geldflussrechnung RÄG     |
|        | 2014                     |   2014 Stand 26072023           |
|        |                          |                                 |
|        |                          | - RZL-Jahresabschluss-Report    |
|        |                          |   Präsentation RÄG 2014 Version |
|        |                          |   2                             |
|        |                          |                                 |
|        |                          | - -RZL-Quick Kennzahlen KMU RÄG |
|        |                          |   2014 Version 2                |
+--------+--------------------------+---------------------------------+
| 32     | RZL Musterreports        | - RZL Muster BWR-Spiegel        |
|        | Anlagen                  |   Subvention 072019 Bilanzbasis |
|        |                          |                                 |
|        |                          | - RZL Muster BWR-Spiegel        |
|        |                          |   Subvention 072019 Kontenbasis |
+--------+--------------------------+---------------------------------+

## Finanzbuchhaltung[]{.indexref entry="Musterreports:Finanzbuchhaltung"}

Nachfolgende Musterreports wurden von uns ausgeliefert.

+--------+--------------------------+---------------------------------+
| **Nu   | **Name**                 | **Inhalt**                      |
| mmer** |                          |                                 |
+========+==========================+=================================+
| 19     | RZL-Fibu                 | - RZL-Muster                    |
|        | Ergebniskurzübersicht    |   Ergebniskurzübersicht 072017  |
|        |                          |                                 |
|        |                          | - RZL-Muster                    |
|        |                          |   Ergebniskurzübersicht 072017  |
|        |                          |   Differenzspalte               |
|        |                          |                                 |
|        |                          | - RZL-Muster                    |
|        |                          |   Ergebniskurzübersicht Kleine  |
|        |                          |   Schrift                       |
+--------+--------------------------+---------------------------------+
| 30     | RZL Musterreports Fibu   | RZL Unternehmensreport 022019   |
+--------+--------------------------+---------------------------------+
| 31     | RZL Musterreports Fibu   | - Ausfallsbonus III nach EStG   |
|        | Covid 19                 |   Stand 07032022                |
|        |                          |                                 |
|        |                          | - Ausfallsbonus III nach UVA    |
|        |                          |   Kennzahlen 07032022           |
|        |                          |                                 |
|        |                          | - Ausfüllhilfe für              |
|        |                          |   EPG_Berechnungstool Stand     |
|        |                          |   10032022                      |
|        |                          |                                 |
|        |                          | - Fixkostenzuschuss 800.000     |
|        |                          |   Tranche 2 Stand 09032022      |
|        |                          |                                 |
|        |                          | - Härtefallfonds Stand          |
|        |                          |   09.11.2020                    |
|        |                          |                                 |
|        |                          | - Sozialpartnervereinbarung     |
|        |                          |   10.0 - Beilage 1 FIBU         |
|        |                          |   14072021                      |
|        |                          |                                 |
|        |                          | - Verlustersatz II              |
|        |                          |   Endabrechnung Stand 30032022  |
|        |                          |                                 |
|        |                          | - Verlustersatz III             |
|        |                          |   Endabrechnung Stand 25042022  |
|        |                          |                                 |
|        |                          | - Verlustersatz Tranche 2 Stand |
|        |                          |   06102021                      |
+--------+--------------------------+---------------------------------+
| *Nur   | *Mahnwesen Modul*        |                                 |
| mit*   |                          |                                 |
+--------+--------------------------+---------------------------------+
| 91     | RZL Mahnreports          | - 1\. Mahnung                   |
|        |                          |                                 |
|        |                          | <!-- -->                        |
|        |                          |                                 |
|        |                          | - 2\. Mahnung                   |
|        |                          |                                 |
|        |                          | - 3\. Mahnung                   |
|        |                          |                                 |
|        |                          | - Gesamtmahnung                 |
|        |                          |                                 |
|        |                          | - Übergabe Inkasso              |
+--------+--------------------------+---------------------------------+

## Lohnverrechnung[]{.indexref entry="Musterreports:Lohnverrechnung"}

Nachfolgende Musterreports wurden von uns ausgeliefert.

+--------+--------------------------+---------------------------------+
| **Nu   | **Name**                 | **Inhalt**                      |
| mmer** |                          |                                 |
+========+==========================+=================================+
| 201    | RZL Muster               | Arbeits- und                    |
|        | Lohnbestätigung          | Entgeltsbestätigung             |
|        |                          |                                 |
|        |                          | Lohn- und Gehaltsbestätigung    |
+--------+--------------------------+---------------------------------+
| 202    | RZL Muster Dienstzettel  | Muster DZ Angestellte gem.      |
|        |                          | AVRAG                           |
+--------+--------------------------+---------------------------------+
| 203    | RZL Muster Dienstvertrag | Muster DV Gastgewerbe Arbeiter  |
+--------+--------------------------+---------------------------------+
| 205    | RZL Muster Formulare     | - Aktenvermerk DB 2023 und      |
|        | Lohn                     |   2024_28112022                 |
|        |                          |                                 |
|        |                          | - AMS Beschäftigungsmeldung     |
|        |                          |                                 |
|        |                          | - Grenzüberschreitende          |
|        |                          |   Telearbeit Stand 13112023     |
+--------+--------------------------+---------------------------------+
| 206    | RZL Musterreports        | - Kurzarbeits-Dienstzettel ab   |
|        | Kurzarbeit               |   10_2023, Stand: 09112023      |
|        |                          |                                 |
|        |                          | - Sozialpartner EV ab 10_2023,  |
|        |                          |   Stand: 09112023               |
|        |                          |                                 |
|        |                          | - Sozialpartner EV Beilage 1 ab |
|        |                          |   10_2023, Stand: 09112023      |
|        |                          |                                 |
|        |                          | - Sozialpartner EV Beilage 2 ab |
|        |                          |   10_2023, Stand: 09112023      |
+--------+--------------------------+---------------------------------+
| 207    | Umstiegsdienstzettel KV  | - Muster Umstiegsdienstzettel   |
|        | Handel                   |   KV Handel 2022 Stand 13122021 |
|        |                          |                                 |
|        |                          | - Muster Umstiegsdienstzettel   |
|        |                          |   KV Handel Stand 14042021      |
+--------+--------------------------+---------------------------------+
| 250    | RZL Muster Statistik     | - Konjunkturerhebung            |
|        | Lohn                     |   Ausfüllhilfe Stand 21112023   |
|        |                          |                                 |
|        |                          | - Statistik Personal 112016     |
|        |                          |                                 |
|        |                          | - Vollzeiteinheiten 112016      |
|        |                          |                                 |
|        |                          | - VZÄ jährlich auf Stundenbasis |
|        |                          |   Stand 07062023                |
|        |                          |                                 |
|        |                          | - VZÄ monatlich auf             |
|        |                          |   Stundenbasis Stand 07062023   |
|        |                          |                                 |
|        |                          | - Ausfüllhilfe                  |
|        |                          |   Verdienststrukturerhebung     |
|        |                          |   Stand 31072023                |
+--------+--------------------------+---------------------------------+
| 251    | RZL Lohnstatistik LSE    | Ausfüllhilfe LSE Personal Stand |
|        |                          | 08082023                        |
+--------+--------------------------+---------------------------------+

## Honorarverrechnung[]{.indexref entry="Musterreports:Honorarverrechnung"}

Nachfolgende Musterreports wurden von uns ausgeliefert.

+--------+--------------------------+----------------------------------+
| **Nu   | **Name**                 | **Inhalt**                       |
| mmer** |                          |                                  |
+========+==========================+==================================+
| 300    | RZL Muster Notenvorlagen | RZL Muster Notenvorlage          |
|        |                          |                                  |
|        |                          | RZL Muster Notenvorlage mit      |
|        |                          | Vorblatt                         |
|        |                          |                                  |
|        |                          | RZL Muster Notenvorlage mit      |
|        |                          | Vorblatt Journal Rückblick       |
+--------+--------------------------+----------------------------------+

# 

# Formelsammlung Programmübergreifend

Im folgenden Kapitel finden Sie die Auflistung der verfügbaren Formeln
für das Reporting in allen RZL Programmen.

## Liste der Formeln

### Lizenz

  ------------------------------------------------------------------------------
  **Formel**                      **Beschreibung**
  ------------ -------- --------- ----------------------------------------------
  Lizenz.      DSGVO.   Link      Link zur DSGVO aus der ZMV

  Lizenz.      Name               Name des Lizenznehmers

  Lizenz.      Nummer             Nummer des Lizenznehmers
  ------------------------------------------------------------------------------

# Formelsammlung für das Lohn-Reporting

Im folgenden Kapitel finden Sie die Auflistung der verfügbaren Formeln
für das Reporting im RZL Lohnprogramm. Seitens der RZL Software werden
Ihnen mit dem Reporting-Modul auch diverse Musterreports zur Verfügung
gestellt.

## RZL Musterreports LV

Neben Statistikauswertungen können Sie auch Musterschreiben für
Dienstzettel oder Dienstverträge von RZL übernehmen und nach Ihren
individuellen Bedürfnissen einrichten. Eine aktuelle Übersicht zu den
Musterreports finden Sie in der ZMV unter *Allg. Dateien / Installieren*
im Registerblatt *Reports* oder im Kapitel 9 Auflistung Musterreports
Seite [57](#auflistung-musterreports) ff beschrieben.

Tipp

Die RZL-Musterreports werden stetig erweitert. Neuerungen werden auch im
Zuge der Programmaktualisierung in den RZL-Newslettern veröffentlicht.

Diese können nach erfolgreicher Installation in der ZMV auf den
gewünschten Klienten überspielt und anschließend individuell angepasst
und abgeändert werden. Genauere Informationen zur Installation und
Übertragung auf den Klienten finden Sie im Kapitel 1.2 Reports auf einen
Klienten überspielen, Seite
[7](#reports-auf-einen-klienten-überspielen).

## Liste der Lohnformeln[]{.indexref entry="Formelliste:Lohn"}

Für das RZL Lohnprogramm stehen Ihnen im Reporting-Modul die folgenden
Lohnformeln zur Verfügung.

HInweis

Sofern bei einem Dienstnehmer mehrere Abrechnungen vorhanden sind, kann
mit der Formel **Monat_L().** **anstatt Monat().** immer **auf die
letzte Abrechnung** zugegriffen werden.

### Zeitraum

  -----------------------------------------------------------------------------------------
  **Formel**                                  **Beschreibung**
  ------------ ---------- ---------- -------- ---------------------------------------------
  ZR().        AktMonat                       Zeigt das aktuelle Monat an

  ZR().        Jahr().    Jahr                Zeigt das ausgewählte Jahr an

  ZR().        Jahr().    Anfang              Zeigt den Beginn des aktuellen Jahres an

  ZR().        Jahr().    Ende                Zeigt das Ende des aktuellen Jahres an

  ZR().        Jahr().    Monat().   Anfang   Zeigt den ersten Tag des ausgewählten Monats
                                              an

  ZR().        Jahr().    Monat().   Ende     Zeigt den letzten Tag des ausgewählten Monats
                                              an
  -----------------------------------------------------------------------------------------

### Arbeitsstätte

  ----------------------------------------------------------------------------------
  **Formel**                               **Beschreibung**
  ------------------- -------------------- -----------------------------------------
  Arbeitsstaette().   Gemeinde             Gemeinde der Arbeitsstätte

  Arbeitsstaette().   GemeindeKennziffer   Gemeindekennziffer der Arbeitsstätte

  Arbeitsstaette().   GemeindeNr           Nummer der Gemeinde der Arbeitsstätte

  Arbeitsstaette().   HausNrBis            Hausnummer bis der Arbeitsstätte

  Arbeitsstaette().   HausNrVon            Hausnummer von der Arbeitsstätte

  Arbeitsstaette().   Land                 Länderkennzeichen der Arbeitsstätte

  Arbeitsstaette().   Nummer               Nummer der Arbeitsstätte beim jeweiligen
                                           Dienstgebers

  Arbeitsstaette().   Ortschaft            Ort der Arbeitsstätte

  Arbeitsstaette().   Plz                  Postleitzahl der Arbeitsstätte

  Arbeitsstaette().   Staat                Staat -- nur bei ausländischer
                                           Arbeitsstätte

  Arbeitsstaette().   Stiege               Stiegennummer der Arbeitsstätte

  Arbeitsstaette().   Strasse              Straße der Arbeitsstätte

  Arbeitsstaette().   Tuer                 Türnummer der Arbeitsstätte
  ----------------------------------------------------------------------------------

### Dienstgeber - Allgemein

  ---------------------------------------------------------------------------------------------------
  **Formel**                                          **Beschreibung**
  ------------ ------------------------ ------------- -----------------------------------------------
  DG().        Bank().                  BIC           BIC des Dienstgebers der ausgewählten Bank

  DG().        Bank().                  BLZ           Bankleitzahl des Dienstgebers der ausgewählten
                                                      Bank

  DG().        Bank().                  IBAN          IBAN des Dienstgebers der ausgewählten Bank

  DG().        Bank().                  KtoNr         Kontonummer des Dienstgebers der ausgewählten
                                                      Bank

  DG().        Bank().                  Name          Name der Bank des Dienstgebers der ausgewählten
                                                      Bank

  DG().        Bank().                  Nummer        Nummer der Bank des Dienstgebers der
                                                      ausgewählten Bank

  DG().        Beruf                                  Art der Tätigkeit des Dienstgebers

  DG().        DvrNr                                  Datenverarbeitungsregister-Nummer des
                                                      Dienstgebers

  DG().        EMail                                  E-Mail-Adresse des Dienstgeber

  DG().        FbGericht                              Firmenbuchgericht des Dienstgebers

  DG().        FbName                                 Abweichender Firmenbuchname des Dienstgebers

  DG().        FbNummer                               Firmenbuchnummer des Dienstgebers

  DG().        Finanz                                 Finanzamt des Dienstgebers

  DG()         FinanzDienststelle                     Finanzamtdienststelle

  DG().        FinanzNr                               Finanzamtnummer des Dienstgebers

  DG().        FinanzOrt                              Ort des Finanzamtes des Dienstgebers

  DG().        FinanzPlz                              Postleitzahl des Finanzamtes des Dienstgebers

  DG().        FinanzStrasse                          Straße des Finanzamtes des Dienstgebers

  DG()         FinanzZahlungsreferenz                 Zahlungsreferenz Finanzamt

  DG().        GKK().                   BKNr          Beitragskontonummer des DG mit Auswahl des
                                                      Bundeslandes

  DG().        GKK().                   MVKEMail      E-Mail-Adresse der Mitarbeitervorsorgekasse des
                                                      DG

  DG().        GKK().                   MVKLeitzahl   Leitzahl der Mitarbeitervorsorgekasse des DG

  DG().        GKK().                   MVKName       Name der Mitarbeitervorsorgekasse des DG

  DG().        GKK().                   MVKOrt        Ort der Mitarbeitervorsorgekasse des DG

  DG().        GKK().                   MVKPlz        Postleitzahl der Mitarbeitervorsorgekasse des
                                                      DG

  DG().        GKK().                   MVKStrasse    Straße der Mitarbeitervorsorgekasse des DG

  DG().        GKK().                   MVKTelefon    Telefonnummer der Mitarbeitervorsorgekasse des
                                                      DG

  DG().        GKK().                   Name          Name und Bundesland der Krankenkasse

  DG().        GKK().                   Nummer        Nummer der Krankenkasse

  DG().        GKK().                   Ort           Ort der Krankenkasse

  DG().        GKK().                   Plz           PLZ der Krankenkasse

  DG().        GKK().                   Strasse       Straße der Krankenkasse

  DG().        GKK().                   Telefon       Telefonnummer der Krankenkasse

  DG().        Land                                   Länderkennzeichen des Dienstgebers
  ---------------------------------------------------------------------------------------------------

#### Dienstgeber -- Stammdaten

  -----------------------------------------------------------------------------
  Formel                 **Beschreibung**
  -------- ------------- ------------------------------------------------------
  DG().    Name          Name des Dienstgeber

  DG().    Nummer        Klientennummer des Dienstgebers

  DG().    Ort           Ort des Dienstgebers

  DG().    Plz           Postleitzahl des Dienstgebers

  DG().    Rechtsform    Rechtsform des Dienstgebers

  DG().    Steuer        Steuernummer des Dienstgebers

  DG().    Strasse       Straße des Dienstgebers

  DG().    Telefon       Telefonnummer des Dienstgebers

  DG().    Uid           Umsatzsteuer-Identifikationsnummer des DG

  DG().    Unternummer   Nummer des Unterdienstgebers
  -----------------------------------------------------------------------------

#### Dienstgeber -- Lohnarten

  ----------------------------------------------------------------------------------------
  **Formel**                                      **Beschreibung**
  ------------ -------------- ---------- -------- ----------------------------------------
  DG().        Lohnart().     Monat().   Anzahl   Bei Lohnarten nach Einheiten - Summe der
                                                  Einheiten

  DG().        Lohnart().     Monat().   Basis    Basis einer Lohnart

  DG().        Lohnart().     Monat().   Monat    Zeigt den ausgewählten Monat an

  DG().        Lohnart().     Monat().   Wert     Wert der Lohnart

  DG().        Lohnart().     Name       Wert     Name der Lohnart

  DG().        Lohnart().     Nummer     Wert     Interne Nummer der Lohnart

  DG()         LohnartAktDV   Monat()             Zeigt den ausgewählten Monat an (aktives
                                                  Dienstverhältnis)

  DG()         LohnartAktDV   Monat()    Anzahl   Bei Lohnarten nach Einheiten - Summe der
                                                  Einheiten (aktives Dienstverhältnis)

  DG()         LohnartAktDV   Monat()    Basis    Basis einer Lohnart (aktives
                                                  Dienstverhältnis)

  DG()         LohnartAktDV   Monat()    Wert     Wert der Lohnart (aktives
                                                  Dienstverhältnis)
  ----------------------------------------------------------------------------------------

#### Dienstgeber - Monatssummen

  ------------------------------------------------------------------------------------------
  **Formel**                                            **Beschreibung**
  ------------ --------------------- ---------- ------- ------------------------------------
  DG().        Monatssumme().        Monat().   Monat   Zeigt den ausgewählten Monat an

  DG().        Monatssumme().        Monat().   Wert    Wert der ausgewählten Lohnart

  DG().        Monatssumme().        Name               Name der Lohnart

  DG().        Monatssumme().        Nummer             Interne Nummer der Lohnart

  DG().        MonatssummeAktDV().   Monat().           Zeigt den ausgewählten Monat an

  DG().        MonatssummeAktDV().   Monat().   Wert    Wert der ausgewählten Lohnart
  ------------------------------------------------------------------------------------------

#### Dienstgeber -- Zeitraum

  -------------------------------------------------------------------------------------------
  **Formel**                                               **Beschreibung**
  ------------ ------------ ---------- ------------------- ----------------------------------
  DG().        ZR().        Monat().   LStTage             Anzahl der abgerechneten
                                                           Lohnsteuertage

  DG().        ZR().        Monat().   SVTage              Anzahl der abgerechneten SV-Tage

  DG().        ZR().        Monat().   SVTageKuerzungEFZ   Anzahl der abgerechneten Tage
                                                           Kürzung EFZ

  DG().        ZRAktDV().   Monat().   SVTageKuerzungEFZ   Anzahl der abgerechneten Tage
                                                           Kürzung EFZ (aktives
                                                           Dienstverhältnis)

  DG().        ZR().        Monat().   SVTageKÜ            Anzahl abgerechneten SV-Tage der
                                                           Kündigungsentschädigung

  DG().        ZRAktDV().   Monat().   SVTageKÜ            Anzahl abgerechneten SV-Tage der
                                                           Kündigungsentschädigung (aktives
                                                           Dienstverhältnis)

  DG().        ZR().        Monat().   SVTageUE            Anzahl der abgerechneten SV-Tage
                                                           der Urlaubsersatzleistung

  DG().        ZRAktDV().   Monat().   SVTageUE            Anzahl der abgerechneten SV-Tage
                                                           der Urlaubsersatzleistung (aktives
                                                           Dienstverhältnis)

  DG().        ZRAktDV().   Monat().   LStTage             Anzahl der abgerechneten
                                                           Lohnsteuertage

  DG().        ZRAktDV().   Monat().   SVTage              Anzahl der abgerechneten SV-Tage

  DG().        ZRAktDV().   Monat().   SVTageKuerzungEFZ   Anzahl der abgerechneten Tage
                                                           Kürzung EFZ

  DG().        ZRAktDV().   Monat().   SVTageKÜ            Anzahl abgerechneten SV-Tage der
                                                           Kündigungsentschädigung

  DG().        ZRAktDV().   Monat().   SVTageUE            Anzahl der abgerechneten SV-Tage
                                                           der Urlaubsersatzleistung
  -------------------------------------------------------------------------------------------

#### Dienstgeber -- Überstunden

  -------------------------------------------------------------------------------------------
  **Formel**                                         **Beschreibung**
  ------------ ------------------ ---------- ------- ----------------------------------------
  DG().        Üst_Alle().        Monat().   Monat   Zeigt das ausgewählte Monat an

  DG().        Üst_Alle().        Monat().   Wert    Wert der Überstunden

  DG().        Üst_Alle().        Name               Name der ausgewählten Überstundenart

  DG().        Üst_Alle().        Nummer             Nummer der auswählten Überstundenart

  DG().        Üst_AlleAktDV().   Monat().   Monat   Zeigt das ausgewählte Monat an

  DG().        Üst_AlleAktDV().   Monat().   Wert    Wert der Überstunden

  DG().        Üst_AlleAktDV().   Name               Name der ausgewählten Überstundenart

  DG().        Üst_AlleAktDV().   Nummer             Nummer der auswählten Überstundenart

  DG().        Üst_Wk().          Monat().   Monat   Zeigt das ausgewählte Monat an

  DG().        Üst_Wk().          Monat().   Wert    Wert der wiederkehrenden Überstunden

  DG().        Üst_Wk().          Name               Name der wiederkehrenden Überstundenart

  DG().        Üst_Wk().          Nummer             Nummer der wiederkehrenden
                                                     Überstundenart

  DG().        Üst_WkAktDV().     Monat().   Monat   Zeigt das ausgewählte Monat an

  DG().        Üst_WkAktDV().     Monat().   Wert    Wert der wiederkehrenden Überstunden

  DG().        Üst_WkAktDV().     Name               Name der wiederkehrenden Überstundenart

  DG().        Üst_WkAktDV().     Nummer             Nummer der wiederkehrenden
                                                     Überstundenart
  -------------------------------------------------------------------------------------------

### Dienstnehmer - Allgemein

  -------------------------------------------------------------------------------------------------------
  **Formel**                                                              **Beschreibung**
  ------------ ------------ ------------------------ -------------------- -------------------------------
  DN().        Monat().     Abgerechnet                                   Ob das Monat abgerechnet ist --
                                                                          Wahr/Falsch

  DN().        Monat().     Jahr                                          Zeigt das aktuelle Jahr an

  DN().        Monat().     Monat                                         Zeigt das ausgewählte Monat an

  DN().        Monat().     MonatJahr                                     Zeigt das ausgewählte Monat und
                                                                          Jahr an

  DN().        Monat().     MonatKurz                                     Monat in Kurzform -- z.B. Feb

  DN().        Monat().     MonatNr                                       Nummer des Monat -- z.B. 4 für
                                                                          April

  DN().        Monat().     UDG                                           Nummer des Unterdienstgebers
                                                                          des ausgewählten Monats

  DN().        Monat().     NurAufrollung                                 Ob Monat nur aufgerollt wurde
                                                                          -- Wahr/Falsch

  DN().        Monat().     NurMvBemKrankheit                             Nur mit MV-Bemessung Krankheit
                                                                          abgerechnet wurde (Wahr/Falsch)

  DN().        Monat().     NurMvBemMutterschutz                          Nur mit MV-Bemessung
                                                                          Mutterschutz abgerechnet wurde
                                                                          (Wahr/Falsch)

  DN().        Monat().     NurMvBemPraesenzdienst                        Nur mit MV-Bemessung
                                                                          Präsenzdienst abgerechnet wurde
                                                                          (Wahr/Falsch)

  DN().        Monat().     NurSvBemessung                                Nur mit SV-Bemessung
                                                                          abgerechnet wurde (Wahr/Falsch)

  DN().        ZR().        AktuellesMonat                                Zeigt das aktuelle Monat in
                                                                          Zahlen an

  DN().        ZRAktDV().   AktuellesMonat                                Zeigt das aktuelle Monat des
                                                                          aktiven Dienstverhältnisses in
                                                                          Zahlen an

  DN().        ZR().        JahreEintritt                                 Zeigt die Anzahl der Jahr seit
                                                                          dem Eintritt an

  DN().        ZRAktDV().   JahreEintritt                                 Zeigt die Anzahl der Jahr des
                                                                          aktiven Dienstverhältnisses
                                                                          seit dem Eintritt an

  DN().        ZR().        MonateEintritt                                Zeigt die Anzahl der Monate
                                                                          seit dem Eintritt an

  DN().        ZRAktDV().   MonateEintritt                                Zeigt die Anzahl der Monate
                                                                          seit dem Eintritt an (aktives
                                                                          Dienstverhältnis)

  DN().        ZR().        TageEintritt                                  Zeigt die Anzahl der Tage seit
                                                                          dem Eintritt an

  DN().        ZRAktDV().   TageEintritt                                  Zeigt die Anzahl der Tage seit
                                                                          dem Eintritt an (aktives
                                                                          Dienstverhältnis)

  DN().        ZR().        TageKalenderjahr                              Zeigt die Anzahl der
                                                                          Kalendertage des Jahres

  DN().        ZRAktDV().   TageKalenderjahr                              Zeigt die Anzahl der
                                                                          Kalendertage des Jahres
                                                                          (aktives Dienstverhältnis)

  DN().        ZR().        TageSZ                                        Zeigt die Anzahl der
                                                                          Kalendertage des Jahres für die
                                                                          Sonderzahlung an (aktives
                                                                          Dienstverhältnis)

  DN().        ZRAktDV().   TageSZ                                        Zeigt die Anzahl der
                                                                          Kalendertage des Jahres für die
                                                                          Sonderzahlung an

  DN().        ZR().        Monat().                 AnzahlAbrechnungen   AnzahlAbrechnungen

  DN().        ZRAktDV().   Monat().                 AnzahlAbrechnungen   AnzahlAbrechnungen aktives
                                                                          Dienstverhältnis
  -------------------------------------------------------------------------------------------------------

### Dienstnehmer -- Stammdaten

  -----------------------------------------------------------------------------------------------
  **Formel**                                        **Beschreibung**
  ------------ ------------------ ----------------- ---------------------------------------------
  DN().        UDG                                  Nummer des UDG

  DN().        Nummer                               Nummer des Dienstnehmers

  DN().        Nachname                             Nachname des Dienstnehmers

  DN().        Vorname                              Vorname des Dienstnehmers

  DN().        Name                                 Gibt den kompletten Namen mit den Titeln aus

  DN().        NameAlt                              Ist der Frühere Name des Dienstnehmers

  DN().        Titel1                               Titel des Dienstnehmers 🡪 Akademischer Grad

  DN().        Titel2                               Titel des Dienstnehmers 🡪 Akademischer Grad2

  DN().        Strasse                              Straße des Dienstnehmers

  DN().        Land                                 Länderkennzeichen des Dienstnehmers

  DN().        PLZ                                  Postleitzahl des Dienstnehmers

  DN().        Ort                                  Ort des Dienstnehmers

  DN().        Telefon                              Telefonnummer des Dienstnehmers

  DN().        EMail                                E-Mail-Adresse des Dienstnehmers

  DN().        Passwort                             Passwort des Dienstnehmers für PDF's

  DN().        DnKliportal                          Option Dienstnehmer am Klientenportal anlegen
                                                    aktiviert (Wahr/Falsch)

  DN().        SvNummer                             SV-Nummer des Dienstnehmers

  DN().        GebDatum                             Geburtsdatum des Dienstnehmers

  DN().        Geschlecht                           Wert im Feld „Geschlecht"

  DN().        FamStand                             Wert im Feld „Familienstand"

  DN().        Staat                                Staatsangehörigkeit des Dienstnehmers

  DN().        NummerExtern                         Externe DN-Nummer

  DN().        Beruf                                Beruf des Dienstnehmers

  DN().        DienstortLand                        Länderkennzeichen des Dienstortes

  DN().        DienstortPLZ                         Postleitzahl des Dienstortes

  DN().        Dienstort                            Ort des Dienstortes

  DN().        Monat().           ArbeitsstätteNr   Nummer der Arbeitsstätte

  DN().        BankLand                             Länderkennzeichen der Bank des Dienstnehmers

  DN().        Bank                                 Name der Bank des Dienstnehmers

  DN().        BLZ                                  Bankleitzahl des Dienstnehmers

  DN().        KontoNr                              Kontonummer des Dienstnehmers

  DN().        IBAN                                 IBAN des Dienstnehmers

  DN().        BIC                                  BIC des Dienstnehmers

  DN().        DgBank                               Nummer der ausgewählten DG-Bank beim DN

  DN().        Partner                              Name des (Ehe)Partners

  DN().        PartnerSvNr                          Ersten vier Stellen der SV-Nummer des
                                                    (Ehe)Partners

  DN().        PartnerGebDat                        Geburtsdatum des (Ehe)Partners

  DN().        PartnerUnterhalt                     Unterhalt beim Ehepartner aktiviert
                                                    (Wahr/Falsch)

  DN().        Kind().            Name              Name des Kindes

  DN().        Kind().            SvNummer          SV-Nummer des Kindes (ersten vier Stellen)

  DN().        Kind().            GebDatum          Geburtsdatum des Kindes

  DN().        Kind().            Unterhalt         Unterhalt bei Kind aktiviert (Wahr/Falsch)

  DN().        Kind().            Para106           Kind § 106 beim Kind aktiviert (Wahr/Falsch)
  -----------------------------------------------------------------------------------------------

### Dienstnehmer -- Stammdaten Fristen

  -----------------------------------------------------------------------------------------
  **Formel**                                           **Beschreibung**
  ------------ -------------------- ------------------ ------------------------------------
  DN().        Monat().             Aliquotierung      Aliquotierung aktiviert --
                                                       Wahr/Falsch

  DN().        Monat().             BuchungskreisNr    Nummer des Buchungskreises

  DN().        Monat()              Auswahlkriterium   Nummer des Auswahlkriterium

  DN().        Auwahlkriterium                         Nummer des Auswahlkriterium

  DN().        Monat().             KeineAuszahlung    Keine Auszahlung aktiviert --
                                                       Wahr/Falsch

  DN().        Monat().             Zahltag            Datum im Feld „Zahltag Abrechnung"

  DN().        Monat().             LFZTabellenNr      Nummer der zugeordneten
                                                       Lohnformel-Zuordnungstabelle

  DN().        EndeArbBew                              Datum für Ende der
                                                       Arbeitsbewilligung

  DN().        Monat().             Behinderung        Feld begünstigter Behinderter...
                                                       aktiviert (Wahr/Falsch)

  DN().        Anmerkung().         Datum              Stichtag der Anmerkung

  DN().        Anmerkung().         Text               Text der Anmerkung

  DN().        Abrechnungstext().   Von                Von-Datum für Abrechnungs-Texte

  DN().        Abrechnungstext().   Bis                Bis-Datum für Abrechnungs-Texte

  DN().        Abrechnungstext().   Text               Abrechnungs-Text
  -----------------------------------------------------------------------------------------

### Dienstnehmer -- Eintritt

  ------------------------------------------------------------------------------------------------------
  **Formel**                                                      **Beschreibung**
  ------------ ------------------------- ------------------------ --------------------------------------
  DN().        Monat().                  Eintritt                 Eintrittsdatum des Dienstnehmer

  DN().        Ersteintritt                                       Ersteintrittsdatum des Dienstnehmer

  DN().        Monat().                  BeschäftigtInWo          Anzahl Tage Beschäftigt in der Woche

  DN().        Monat().                  Arbeitsstunden           Anzahl der Stunden pro Tag

  DN().        Monat().                  Wochenstunden            Anzahl der Stunden pro Woche

  DN().        Monat().                  ArbeitstagMo             Arbeitstag Montag aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  ArbeitstagDi             Arbeitstag Dienstag aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  ArbeitstagMi             Arbeitstag Mittwoch aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  ArbeitstagDo             Arbeitstag Donnerstag aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  ArbeitstagFr             Arbeitstag Freitag aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  ArbeitstagSa             Arbeitstag Samstag aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  ArbeitstagSo             Arbeitstag Sonntag aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  ArbeitstageAnz           Anzahl der aktivierten Arbeitstage

  DN().        Monat().                  Teilzeit                 Beschäftigungsverhältnis Teilzeit
                                                                  aktiviert (Wahr/Falsch)

  DN().        Monat().                  Gesetz                   Ausgewähltes Gesetz, welches das
                                                                  Arbeitsverhältnis unterliegt

  DN().        Monat().                  BefristungBis            Datum der Befristung des DV -- wenn
                                                                  vorhanden

  DN().        Monat().                  DvParallel               Paralleles Beschäftigungsverhältnis
                                                                  beim selben Arbeitgeber aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  MVPflicht                MV-Beitragspflicht aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  BeginnMv                 Datum des Beginn der MV-Pflicht

  DN().        LehrzeitBeginn                                     Beginn der Lehrzeit

  DN().        LehrzeitEnde                                       Ende der Lehrzeit

  DN().        EndeErstesLj                                       Ende des ersten Lehrjahres

  DN().        Lehrabschlussprüfung                               Datum der Lehrabschlussprüfung

  DN().        Lehrlingsfreibetrag                                Kein Lehrlingsfreibetrag aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  BetragAnmeldungAbw       Abweichender Betrag für die Anmeldung

  DN().        MitKlientVerwandt                                  DN mit DG verwandt (Wahr/Falsch)

  DN().        Verwandtschaftsgrad                                Art des Verwandtschaftsgrades

  DN().        MitKlientVerheiratet                               DN mit DG verheiratet (Wahr/Falsch)

  DN().        Monat().                  AngNachTabak             Angehöriger nach Tabakmonopolgesetz
                                                                  aktiviert ist (Wahr/Falsch)

  DN().        AnFirmaBeteiligt                                   DN an Firma beteiligt aktiviert ist
                                                                  (Wahr/Falsch)

  DN().        ArtBeteiligung                                     Art der Beteiligung

  DN().        Monat().                  SachBezTageProWoche      Anzahl der Tage für den Sachbezug

  DN().        Monat().                  SachBezFreieStation      Art des Sachbezuges aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  SachBezVerpflegung       Art des Sachbezuges aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  SachBezFruehstueck1      Art des Sachbezuges aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  SachBezFruehstueck2      Art des Sachbezuges aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  SachBezMittagessen       Art des Sachbezuges aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  SachBezJause             Art des Sachbezuges aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  SachBezAbendessen        Art des Sachbezuges aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  SachBezWohnung           Art des Sachbezuges aktiviert
                                                                  (Wahr/Falsch)

  DN().        Monat().                  VorbezugBemSvSz          Vorbezüge -- Verbrauch
                                                                  Bemessungsgrundlage SV-SZ

  DN().        Monat().                  VorbezugSvKz225          Vorbezüge -- bisherige SV KZ 225

  DN().        Monat().                  VorbezugSz               Vorbezüge -- bisherige Sonderzahlung

  DN().        Monat().                  VorbezugSzOhneFesteLSt   Vorbezüge -- ohne feste Lohnsteuer

  DN().        Monat().                  VorbezugBrutto           Vorbezüge -- bisheriger Brutto-Lohn

  DN().        VorbezugBemLStVj                                   Vorbezüge --
                                                                  Vorjahres-Bemessungsgrundlage

  DN().        Monat().                  KuerzerEinMonat          DV kürzer als ein Monat vereinbart
                                                                  aktiviert (Wahr/Falsch)

  DN().        ArbeitslosGemeldet                                 Beschäftigungsbonus -- Arbeitslos
                                                                  gemeldet aktiviert (Wahr/Falsch)

  DN().        BeschaeftigtAb                                     Beschäftigungsbonus -- Beschäftigt ab

  DN().        BeschaeftigtBis                                    Beschäftigungsbonus -- Beschäftigt bis

  DN().        Bildungsabgaenger                                  Beschäftigungsbonus --
                                                                  Bildungsabgänger aktiviert
                                                                  (Wahr/Falsch)

  DN().        Foerderungen                                       Beschäftigungsbonus -- Förderungen

  DN().        Jobwechsler                                        Beschäftigungsbonus -- Jobwechsler
                                                                  aktiviert (Wahr/Falsch)

  DN().        MonatsentgeltBrutto                                Beschäftigungsbonus -- Monatsentgelt
                                                                  Brutto

  DN().        SaisonaleBeschaeftigung                            Beschäftigungsbonus -- Saisonale
                                                                  Beschäftigung (Wahr/Falsch)

  DN().        mBGMHauptdienstnehmer                              mBGM Hauptdienstnehmer
  ------------------------------------------------------------------------------------------------------

### Dienstnehmer -- Kollektivvertrag

  -------------------------------------------------------------------------------------------------------
  **Formel**                                                             **Beschreibung**
  ------------ ---------- ------------------ --------------------------- --------------------------------
  DN().        Monat().   KV().              Nummer                      Nummer des Kollektivvertrages

  DN().        Monat().   KV().              Name                        Name des Kollektivvertrages

  DN().        Monat().   KV().              EinstufungBeg               Beginn der Einstufung

  DN().        Monat().   KV().              Vordienstzeit               Anzahl der Monate der
                                                                         Vordienstzeiten

  DN().        Monat().   KV().              Taetigkeitsgruppe           Name aktuelle Tätigkeitsgruppe

  DN().        Monat().   KV().              TaetigkeitsgruppeNr         Interne Nummer der aktuellen
                                                                         Tätigkeitsgruppe

  DN().        Monat().   KV().              Gruppenwechsel              Datum des letzten
                                                                         Gruppenwechsels

  DN().        Monat().   KV().              LetzteTaetigkeitsgruppe     Name der letzten
                                                                         Tätigkeitsgruppe

  DN().        Monat().   KV().              LetzteTaetigkeitsgruppeNr   Interne Nummer letzten
                                                                         Tätigkeitsgruppe

  DN().        Monat().   KV().              Stufe                       Zeigt die aktuelle Stufe des KV
                                                                         an

  DN()         Monat()    KV()               Dienstjahre                 Zeigt das aktuelle Dienstjahr

  DN()         Monat()    KV()               StufeKuerzung               Zeit die Monate, um welche die
                                                                         Stufe gekürzt werden soll

  DN().        Monat().   KV().              Vorrueckung                 Zeigt das Datum der nächsten
                                                                         Vorrückung an

  DN().        Monat().   KV().              Stundensatz                 Stundensatz laut
                                                                         Kollektivvertrag

  DN().        Monat().   KV().              Bezug                       Bezug laut Kollektivvertrag

  DN().        Monat().   KV().              HochrechnungsfaktorAbw      Wert des abw.
                                                                         Hochrechnungsfaktors

  DN().        Monat().   KV().              NAZ                         Normalarbeitszeit laut
                                                                         Kollektivvertrag

  DN().        Monat().   KV().              BezugAliquot                Wert aliquoter
                                                                         Kollektivvertrag-Bezug

  DN().        Monat().   KV().              UeberzahlungVm              Wert der Überzahlung im Vormonat

  DN().        Monat().   KV().              UeberzahlungVmPorz          Prozent der Überzahlung im
                                                                         Vormonat

  DN()         Monat()    KV()               Reformbetrag1               Wert des Reformbetrag 1

  DN()         Monat()    KV()               Reformbetrag1Vm             Wert des Reformbetrag 1 im
                                                                         Vormonat

  DN().        Monat().   KV().              TeilerAbw                   Abw. Stundenteiler bei Teilzeit

  DN().        Monat().   KV().              ZuAbschlagBezug             Abweichender Zu-/Abschlag KV
                                                                         Bezug

  DN().        Monat().   KV().              Ueberzahlung                Überzahlung beibehalten
                                                                         aktiviert -- Wahr/Falsch

  DN().        Monat().   KV().              UeberzahlungBiennal         Überzahlung bei Biennalsprung
                                                                         beibehalten aktiviert
                                                                         (Wahr/Falsch)

  DN().        Monat().   KV().              UeberzahlungProz            Prozentuelle Überzahlung
                                                                         beibehalten aktiviert --
                                                                         Wahr/Falsch

  DN().        KVAlt                                                     Name des KV -- wenn HGKV-DB
                                                                         nicht aktiviert

  DN().        Monat()    KVAltStundensatz                               Stundensatz lt. KV -- wenn
                                                                         HGKV-DB nicht aktiviert ist

  DN().        Monat()    KVAltBezug                                     Bezug lt. KV -- wenn HGKV-DB
                                                                         nicht aktiviert ist
  -------------------------------------------------------------------------------------------------------

### Dienstnehmer -- Austritt

  ---------------------------------------------------------------------------------------------------------------------------
  **Formel**                                                                                **Beschreibung**
  ------------ -------------------------------- ----------------------------- ------------- ---------------------------------
  DN().        Monat().                         Austritt                                    Datum des Austrittes

  DN().        Monat().                         Austrittsgrund                              Grund des Austrittes

  DN().        Monat().                         AustrittsgrundBuak                          Grund des Austrittes für die BUAK

  DN().        Monat().                         EndeEntgelt                                 Datum bei Ende des
                                                                                            Entgeltsanspruches

  DN().        Monat().                         BezahltBis                                  Ende Entgeltsanspruch -- Datum
                                                                                            „bezahlt bis"

  DN().        Monat().                         AnspruchSZ                                  Anzahl der Monate für Anspruch
                                                                                            Sonderzahlung

  DN().        Monat().                         Aufloesungsabgabe                           Auflösungsabgabe aktiviert
                                                                                            (Wahr/Falsch)

  DN().        KarenzurlaubVon                                                              Datum des Beginn des
                                                                                            Karenzurlaubes

  DN().        KarenzurlaubBis                                                              Datum des Ende des Karenzurlaubes

  DN().        Monat().                         EndeMv                                      Datum für das Ende der
                                                                                            MV-Beitragspflicht

  DN().        Monat().                         BetragAbmeldungAbw                          Abweichender Betrag für die
                                                                                            Abmeldung

  DN().        Monat().                         KUEVon                                      Datum des Beginnes der
                                                                                            Kündigungsentschädigung

  DN().        Monat().                         KUEBis                                      Datum des Ende der
                                                                                            Kündigungsentschädigung

  DN().        ZR().                            Monat().                      SVTageKÜ      Anzahl der SV-Tage der
                                                                                            Kündigungsentschädigung

  DN().        ZR().                            Monat().                      TageKÜ        Kalendertage der
                                                                                            Kündigungsentschädigung

  DN().        ZRAktDV().                       Monat().                      TageKÜ        Kalendertage der
                                                                                            Kündigungsentschädigung (aktives
                                                                                            Dienstverhältnis)

  DN().        Monat().                         UEVon                                       Datum des Beginnes der
                                                                                            Urlaubsersatzleistung

  DN().        Monat().                         UEBis                                       Datum des Endes der
                                                                                            Urlaubsersatzleistung

  DN().        ZR().                            Monat().                      SVTageUE      Anzahl der SV-Tage der
                                                                                            Urlaubsersatzleistung

  DN().        ZR().                            Monat().                      TageUE        Kalendertage der
                                                                                            Urlaubsersatzleistung

  DN().        ZRAktDV().                       Monat().                      TageUE        Kalendertage der
                                                                                            Urlaubsersatzleistung (aktives
                                                                                            Dienstverhältnis)

  DN().        ZR().                            Monat().                      TageUEExakt   Kalendertage der
                                                                                            Urlaubsersatzleistung exakt

  DN().        ZRAktDV().                       Monat().                      TageUEExakt   Kalendertage der
                                                                                            Urlaubsersatzleistung exakt
                                                                                            (aktives Dienstverhältnis)

  DN().        Monat().                         UnterbrechnungVon                           Beginn der Unterbrechung der
                                                                                            Beschäftigung

  DN().        Monat().                         UnterbrechnungBis                           Ende der Unterbrechung der
                                                                                            Beschäftigung

  DN().        Monat().                         UnterbrechnungGrund                         Grund der Unterbrechung der
                                                                                            Beschäftigung

  DN().        Monat().                         TeilzeitVon                                 Datum des Beginnes der
                                                                                            Teilzeitbeschäftigung

  DN().        Monat().                         TeilzeitBis                                 Datum des Endes der
                                                                                            Teilzeitbeschäftigung

  DN().        Monat().                         HospizkarenzBeginn                          Datum Beginn der Hospizkarenz

  DN().        Monat().                         HospizkarenzEnde                            Datum Ende der Hospizkarenz

  DN().        Monat().                         HospizkarenzArt                             Ausgewählter Eintrag bei Art der
                                                                                            Karenz

  DN().        Monat().                         HospizkarenzEntgeltVor                      Entgelt vor Hospizkarenz

  DN().        Monat().                         HospizkarenzEntgeltWaehrend                 Entgelt während der Hospizkarenz

  DN().        Arbeitsinspektorat                                                           Arbeitsinspektorat

  DN().        ArbeitsplatzTaetigkeit                                                       Mutterschutzmeldung
                                                                                            Arbeitsplatz/Tätigkeit

  DN().        BeginnMutterschutz                                                           Beginn Mutterschutz

  DN().        EndeMutterschutz                                                             Ende Mutterschutz

  DN().        DienstnehmerGehtInKarenz                                                     Dienstnehmer geht in Karenz
                                                                                            aktiviert (Wahr/Falsch)

  DN().        TagDerGeburt                                                                 Tag der Geburt

  DN().        VerlängerterMutterschutz                                                     Verlängerter Mutterschutz
                                                                                            aktiviert (Wahr/Falsch)

  DN().        VoraussichtlicherGeburtstermin                                               Voraussichtlicher Geburtstermin
  ---------------------------------------------------------------------------------------------------------------------------

### Dienstnehmer -- Lohnsteuer

  ----------------------------------------------------------------------------------------------------------------
  **Formel**                                                                    **Beschreibung**
  ------------ ---------- ------------------------------------------ ---------- ----------------------------------
  DN().        Monat().   Alleinverdiener                                       Ob Alleinverdiener aktiviert ist
                                                                                (Wahr/Falsch)

  DN().        Monat().   Alleinerzieher                                        Ob Alleinerzieher aktiviert ist
                                                                                (Wahr/Falsch)

  DN().        Monat().   KinderPar106                                          Anzahl der Kinder gemäß § 106

  DN().        Monat().   PendlerpauschaleNr                                    Nummer der Pendlerpauschale

  DN().        Monat().   PendlerpauschaleText                                  Art der Pendlerpauschale (zB
                                                                                „klein 20 -- 40 km")

  DN().        Monat().   EinfacheFahrtstrecke                                  Anzahl der Kilometer der einfachen
                                                                                Fahrtstrecke

  DN().        Monat().   Werkverkehr                                           Werkverkehr/Jobticket aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   Firmenfahrzeug                                        Firmenfahrzeug aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   FahrtagMo                                             Fahrttage Montag aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   FahrtagDi                                             Fahrttage Dienstag aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   FahrtagMi                                             Fahrttage Mittwoch aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   FahrtagDo                                             Fahrttage Donnerstag aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   FahrtagFr                                             Fahrttage Freitag aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   FahrtagSa                                             Fahrttage Samstag aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   FahrtagSo                                             Fahrttage Sonntag aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   Fahrtage                                              Anzahl der Fahrttage pro Monat

  DN().        Monat().   FahrtageAbw                                           Anzahl der abweichenden Fahrttage

  DN().        Monat().   FahrtabeAbwWiederkend                                 Abw. Fahrttage wiederkehrend
                                                                                aktiviert (Wahr/Falsch)

  DN().        Monat().   Freibetrag                                            Wert des monatlichen Freibetrages

  DN().        Monat().   Werbungskosten                                        Prozentwert der Werbungskosten

  DN().        Monat().   WerbungskostenMax                                     Höchstbetrag der Werbungskosten

  DN().        Monat().   Nachtarbeit                                           Nachtarbeit aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   Pensionist                                            Pensionist aktiviert (Wahr/Falsch)

  DN().        Monat().   PauschaleLSt                                          Pauschale Lohnsteuer aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   PauschaleLStProz                                      Prozentsatz der Pauschalen
                                                                                Lohnsteuer

  DN().        Monat().   Grenzgaenger                                          Grenzgänger aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   BeschraenkteSteuerpflicht                             Beschränkte Steuerpflicht
                                                                                aktiviert (Wahr/Falsch)

  DN().        Monat().   LStGemPara70Z2                                        Lohnsteuer gem. § 70 / 2 Z 2
                                                                                aktiviert (Wahr/Falsch)

  DN().        Monat().   LandarbeiterFreibetrag                                Landarbeiter-Freibetrag aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   Entwicklungshelfer                                    Auslandsbezüge als
                                                                                Entwicklungshelfer Z 11 aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   Gemeinde().                                Nummer     Nummer der gewählten Gemeinde

  DN().        Monat().   Gemeinde().                                Name       Name der gewählten Gemeinde

  DN().        Monat().   Gemeinde().                                Prozent    Prozentzuordnung der gewählten
                                                                                Gemeinde

  DN().        Monat().   BefreiungKommst                                       Befreiung von Kommunalsteuer
                                                                                aktiviert (Wahr/Falsch)

  DN().        Monat().   KuerzungKommSt                                        Kürzung der Bemessungsgrundlage
                                                                                der Kommunalsteuer aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   KuerzungKommstProz                                    Prozentsatz der Kürzung der
                                                                                Kommunalsteuer-Grundlage

  DN().        Monat().   BefreiungDB                                           Befreiung von DB aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   DZBundeslandAbw                                       Abweichendes DZ-Bundesland

  DN().        Monat().   BefreiungDZ                                           Befreiung von DZ aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   KuerzungDZ                                            Befreiung von DZ aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   KuerzungDZProz                                        Kürzung der Bemessungsgrundlage
                                                                                des DZ aktiviert (Wahr/Falsch)

  DN().        Monat().   UBahnAbgabe                                           U-Bahn-Abgabe aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   UBahnWochenAbw                                        Anzahl der U-Bahn-Wochen

  DN().        Monat().   HomeofficePauschale                                   Steuerfreie Pauschale aktiviert
                                                                                (Wahr/Falsch)

  DN().        Monat().   HomeofficePauschaleBetrag                             Betrag der Homeoffice Pauschale

  DN().        Monat().   HomeofficePauschaleSatz                               Satz der Homeoffice Pauschale

  DN().        Monat().   HomeofficePauschaleWiederkehrend                      Homeoffice Pauschale wiederkehrend
                                                                                aktiviert (Wahr/Falsch)

  DN().        Monat().   HomeofficeTage                                        Homeoffice Tage

  DN().        Monat().   KostenuebernahmeOeffiTicket                           Betrag der Kostenübernahme durch
                                                                                DG

  DN().        Monat().   KostenuebernahmeOeffiTicketNurL16                     Nur Ausweis am Lohnkonto u. L16
                                                                                aktiviert (Wahr/Falsch)

  DN().        Monat().   KostenuebernahmeOeffiTicketWiederkehrend              Kostenübernahme durch DG
                                                                                wiederkehrend aktiviert
                                                                                (Wahr/Falsch)
  ----------------------------------------------------------------------------------------------------------------

### Dienstnehmer -- Sozialversicherung

  ---------------------------------------------------------------------------------------------
  **Formel**                                                **Beschreibung**
  ------------ ---------- --------------------------------- -----------------------------------
  DN().        Monat().   BundeslandNr                      Nummer des ÖGK-Bundeslandes

  DN().        Monat().   Bundesland                        ÖGK Bundesland

  DN().        Monat().   BkNr                              ÖGK Beitragsnummer

  DN().        Monat().   SvGruppe                          Ausgewählte SV-Gruppe

  DN().        Monat().   SvGruppeAlv                       SV-Gruppe
                                                            Arbeitslosenversicherungspfl.
                                                            (Wahr/Falsch)

  DN().        Monat().   SvGruppeAngestellter              SV-Gruppe Angestellter
                                                            (Wahr/Falsch)

  DN().        Monat().   SvGruppeArbeiter                  SV-Gruppe Arbeiter (Wahr/Falsch)

  DN().        Monat().   SvGruppeBahn                      SV-Gruppe VA der Eisenbahnen
                                                            (Wahr/Falsch)

  DN().        Monat().   SvGruppeBVA                       SV-Gruppe VA öffentlicher
                                                            Bediensteter (Wahr/Falsch)

  DN().        Monat().   SvGruppeGfg                       SV-Gruppe geringfügig (Wahr/Falsch)

  DN().        Monat().   SvGruppeGfgAng                    SV-Gruppe Angestellter geringfügig
                                                            (Wahr/Falsch)

  DN().        Monat().   SvGruppeGfgArb                    SV-Gruppe Arbeiter geringfügig
                                                            (Wahr/Falsch)

  DN().        Monat().   SvGruppeKv                        SV-Gruppe
                                                            Krankenversicherungspflichtig
                                                            (Wahr/Falsch)

  DN().        Monat().   SvGruppeLehrling                  SV-Gruppe Lehrling (Wahr/Falsch)

  DN().        Monat().   SvGruppeLehrlingAng               SV-Gruppe Angestellten-Lehrling
                                                            (Wahr/Falsch)

  DN().        Monat().   SvGruppeLehrlingArb               SV-Gruppe Arbeiter-Lehrling
                                                            (Wahr/Falsch)

  DN().        Monat().   SvGruppeNotar                     SV-Gruppe VA des Notariats
                                                            (Wahr/Falsch)

  DN().        Monat().   SvGruppePv                        SV-Gruppe
                                                            Pensionsversicherungspflichtig
                                                            (Wahr/Falsch)

  DN().        Monat().   SvGruppeUv                        SV-Gruppe
                                                            Unfallversicherungspflichtig
                                                            (Wahr/Falsch)

  DN().        Monat().   KeineSvGruppe                     Keine SV-Gruppe ausgewählt
                                                            (Wahr/Falsch)

  DN().        Monat().   Arbeiter                          Arbeiter(in) aktiviert
                                                            (Wahr/Falsch)

  DN().        Monat().   KUPflicht                         Kammerumlage aktiviert
                                                            (Wahr/Falsch)

  DN().        Monat().   LKUPflicht                        LKU-Pflicht aktiviert (Wahr/Falsch)

  DN().        Monat().   WFPflicht                         WF-Pflicht aktiviert (Wahr/Falsch)

  DN().        Monat().   IESGPflicht                       IESG-Pflicht aktiviert
                                                            (Wahr/Falsch)

  DN().        Monat().   SWPflicht                         SW-Pflicht aktiviert (Wahr/Falsch)

  DN().        Monat().   NBPflicht                         Nachtschicht-Schwerarbeiter
                                                            aktiviert (Wahr/Falsch)

  DN().        Monat().   Bildungsfonds                     Bildungsfonds aktiviert
                                                            (Wahr/Falsch)

  DN().        Monat().   Geschaeftsfuehrer                 Geschäftsführer aktiviert
                                                            (Wahr/Falsch)

  DN().        Monat().   Zugehoerigkeit                    Ausgewählter Text für Zugehörigkeit
                                                            (Anmeldung)

  DN().        Monat().   FallweiseBeschaeftigt             Fallweise Beschäftig aktiviert
                                                            (Wahr/Falsch)

  DN().        Monat().   TageFallweise                     Markierte Tage bei Fallweise
                                                            Beschäftigt

  DN().        Monat().   L16Monatlich                      L16 monatlich aktiviert
                                                            (Wahr/Falsch)

  DN().        Monat().   SVFreibetrag                      SV-Freibetrag aktiviert
                                                            (Wahr/Falsch)

  DN().        Monat().   SVFreibetragProz                  Prozentsatz des SV-Freibetrages

  DN().        Monat().   SVFreibetragMax                   Höchstbetrag des SV-Freibetrages

  DN().        Monat().   KeineAlVRueckverrechnung          Keine AlV-Rückverrechnung aktiviert
                                                            (Wahr/Falsch)

  DN().        Monat().   AlVRueckverrechnungN25h           N25h AlV-Rückverrechnung aktiviert
                                                            (Wahr/Falsch)

  DN().        Monat().   BonusgruppenNachSept2009          Bonusgruppe nach 1. Sept. 2009
                                                            erlauben aktiviert (Wahr/Falsch)

  DN()         Monat()    BeginnVerrechnung                 Abweichende Eingabe des Tages des
                                                            Beginn der Verrechnung beim mBGM

  DN()         Monat()    Beschaeftigungsbereich            Beschäftigungsbereich der Anmeldung
                                                            (Arbeiter, Angestellter, etc.)

  DN()         Monat()    BonusAltfall                      Bonus Altfall aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    EntfallAVLehrlingssonderfall      Entfall AV Lehrlingssonderfall
                                                            aktiviert (Wahr/Falsch)

  DN()         Monat()    EntfallAVLehrlingssonderfallAlt   Entfall AV Lehrlingssonderfall alt
                                                            aktiviert (Wahr/Falsch)

  DN()         Monat()    AVEntfallPensionsanspruch         AV Entfall Pensionsanspruch
                                                            aktiviert (Wahr/Falsch)

  DN()         Monat()    AVIEEntfallPensionsanspruch       AV+IE Entfall Pensionsanspruch
                                                            aktiviert (Wahr/Falsch)

  DN()         Monat()    BefreiungServiceEntgelt           Befreiung Service-Entgelt (e-card)
                                                            aktiviert (Wahr/Falsch)

  DN()         Monat()    mBGMNichtErstellen                mBGM nicht erstellen

  DN()         Monat()    MinderungAlV02Proz                Minderung ALV um 0,20% (Lehrling)
                                                            aktiviert (Wahr/Falsch)

  DN()         Monat()    MinderungAlV12Proz                Minderung ALV um 1,20% (Lehrling)
                                                            aktiviert (Wahr/Falsch)

  DN()         Monat()    MinderungAlV1Proz                 Minderung ALV um 1% aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    MinderungAlV2Proz                 Minderung ALV um 2% aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    MinderungAlV3Proz                 Minderung ALV um 3% aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    MinderungPVum50Proz               Minderung PV um 50% aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    SchwerarbeitBis                   Schwerarbeit (Dauer der Tätigkeit)
                                                            bis

  DN()         Monat()    SchwerarbeitVon                   Schwerarbeit (Dauer der Tätigkeit)
                                                            von

  DN()         Monat()    SchwerarbeitWiederkehrend         Schwerarbeit wiederkehrend
                                                            aktiviert (Wahr/Falsch)

  DN()         Monat()    SchwerarbeitZ1                    Schwerarbeit Z1 aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    SchwerarbeitZ2                    Schwerarbeit Z2 aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    SchwerarbeitZ4                    Schwerarbeit Z4 aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    SchwerarbeitZ5                    Schwerarbeit Z5 aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    SchwerarbeitZ6                    Schwerarbeit Z6 aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    Sozialfonds                       Sozialfonds aktiviert (Wahr/Falsch)

  DN()         Monat()    SZKeineAlVRueckverrechnung        SZ keine AlV-Rückverrechnung
                                                            aktiviert (Wahr/Falsch)

  DN()         Monat()    SZMinderungAlV02Proz              SZ Minderung ALV um 0,2% (Lehrling)
                                                            aktiviert (Wahr/Falsch)

  DN()         Monat()    SZMinderungAlV12Proz              SZ Minderung ALV um 1,2% (Lehrling)
                                                            aktiviert (Wahr/Falsch)

  DN()         Monat()    SZMinderungAlV1Proz               SZ Minderung ALV um 1% aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    SZMinderungAlV2Proz               SZ Minderung ALV um 2% aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    SZMinderungAlV3Proz               SZ Minderung ALV um 3% aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    UStPflicht                        USt-Pflicht aktiviert (Wahr/Falsch)

  DN()         Monat()    UStProzentsatz                    USt-Prozentsatz

  DN()         Monat()    UVEntfall60LJvollendet            UV-Entfall 60. LJ vollendet
                                                            aktiviert (Wahr/Falsch)

  DN()         Monat()    UVEntfallNeufoeg                  UV-Entfall Neufög aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    Verrechnungsgrundlage             Abweichende Eingabe der
                                                            Verrechnungsgrundlage

  DN()         Monat()    WeiterbildungsbeitragAUEG         Weiterbildungsbeitrag -- AÜG
                                                            aktiviert (Wahr/Falsch)

  DN()         Monat()    Wiederkehrend                     Abweichende mBGM Einstellungen
                                                            wiederkehrend aktiviert
                                                            (Wahr/Falsch)

  DN()         Monat()    WVEntfallNeufoeg                  WF-Entfall Neufög aktiviert
                                                            (Wahr/Falsch)
  ---------------------------------------------------------------------------------------------

### Dienstnehmer -- Lohnarten

  -------------------------------------------------------------------------------------------------------------
  **Formel**                                                                      **Beschreibung**
  ------------ --------------------- ---------- ------------------------ -------- -----------------------------
  DN().        Lohnart().                       Monat().                 Wert     Betrag der Lohnart

  DN().        Lohnart().                       Monat().                 Anzahl   Anzahl der Basis der Lohnart

  DN().        Lohnart().                       Monat().                 Basis    Basis der Anzahl der Lohnart

  DN().        Lohnart().                       Monat().                 Monat    Zeigt das Monatskürzel und
                                                                                  Jahr der Lohnart an

  DN().        Lohnart().                       Name                              Name der Lohnart

  DN().        Lohnart().                       Nummer                            Nummer der Lohnart

  DN().        LohnartAktDV().                  Monat().                 Wert     Betrag der Lohnart (aktives
                                                                                  Dienstverhältnis)

  DN().        LohnartAktDV ().                 Monat().                 Anzahl   Anzahl der Basis der Lohnart
                                                                                  (aktives Dienstverhältnis)

  DN().        LohnartAktDV ().                 Monat().                 Basis    Basis der Anzahl der Lohnart
                                                                                  (aktives Dienstverhältnis)

  DN().        LohnartAktDV ().                 Monat().                 Monat    Zeigt das Monatskürzel und
                                                                                  Jahr der Lohnart an (aktives
                                                                                  Dienstverhältnis)

  DN().        LohnartAktDV ().                 Name                              Name der Lohnart (aktives
                                                                                  Dienstverhältnis)

  DN().        LohnartAktDV ().                 Nummer                            Nummer der Lohnart (aktives
                                                                                  Dienstverhältnis)

  DN().        Monatssumme().                   Monat().                 Monat    Zeigt Monatskürzel und Jahr
                                                                                  der Monatssumme an

  DN().        Monatssumme().                   Monat()                  Wert     Wert der ausgewählten
                                                                                  Monatssumme

  DN().        Monatssumme().                   Name                              Name der ausgewählten
                                                                                  Monatssumme

  DN().        Monatssumme().                   Nummer                            Nummer der ausgewählten
                                                                                  Monatssumme

  DN().        MonatssummeAktDV().              Monat().                 Monat    Zeigt Monatskürzel und Jahr
                                                                                  der Monatssumme an (aktives
                                                                                  Dienstverhältnis)

  DN().        MonatssummeAktDV ().             Monat()                  Wert     Wert der ausgewählten
                                                                                  Monatssumme (aktives
                                                                                  Dienstverhältnis)

  DN().        MonatssummeAktDV ().             Name                              Name der ausgewählten
                                                                                  Monatssumme (aktives
                                                                                  Dienstverhältnis)

  DN().        MonatssummeAktDV ().             Nummer                            Nummer der ausgewählten
                                                                                  Monatssumme (aktives
                                                                                  Dienstverhältnis)

  DN().        Monat().                         NurAufrollung                     Ob nur die Aufrollung
                                                                                  vorhanden ist (Wahr/Falsch)

  DN().        Monat().                         NurMvBemKrankheit                 Ob nur ein Wert MV-Bemessung
                                                                                  Krankheit abgerechnet wurde
                                                                                  (Wahr/Falsch)

  DN().        Monat().                         NurMvBemMutterschutz              Ob nur ein Wert MV-Bemessung
                                                                                  Mutterschutz abgerechnet
                                                                                  wurde (Wahr/Falsch)

  DN().        Monat().                         NurMvBemPraesenzdienst            Ob nur ein Wert MV-Bemessung
                                                                                  Präsenzdienst abgerechnet
                                                                                  wurde (Wahr/Falsch)

  DN().        Monat().                         NurSvBemessung                    Ob nur ein Wert in
                                                                                  SV-Bemessung abgerechnet
                                                                                  wurde (Wahr/Falsch)

  DN().        ZR().                 Monat().   Arbeitstage                       Anzahl der Arbeitstage

  DN().        ZRAktDV().            Monat().   Arbeitstage                       Anzahl der Arbeitstage
                                                                                  (aktives Dienstverhältnis)

  DN().        ZR().                 Monat().   Feiertage                         Anzahl der Feiertage

  DN().        ZRAktDV().            Monat().   Feiertage                         Anzahl der Feiertage (aktives
                                                                                  Dienstverhältnis)

  DN().        ZR().                 Monat().   LStTage                           Anzahl der Lohnsteuertage

  DN().        ZRAktDV().            Monat().   LStTage                           Anzahl der Lohnsteuertage
                                                                                  (aktives Dienstverhältnis)

  DN().        ZR().                 Monat().   Monat                             Zeigt das Monat und Jahr an

  DN().        ZRAktDV().            Monat().   Monat                             Zeigt das Monat und Jahr an
                                                                                  (aktives Dienstverhältnis)

  DN().        ZR().                 Monat().   SVTage                            Anzahl der SV-Tage

  DN().        ZRAktDV().            Monat().   SVTage                            Anzahl der SV-Tage (aktives
                                                                                  Dienstverhältnis)

  DN().        ZR().                 Monat().   TageProWoche                      Anzahl der abgerechneten Tage

  DN().        ZRAktDV().            Monat().   TageProWoche                      Anzahl der abgerechneten Tage
                                                                                  (aktives Dienstverhältnis)

  DN().        ZR().                 Monat().   WochenStd                         Anzahl der Wochenstunden

  DN().        ZRAktDV().            Monat().   WochenStd                         Anzahl der Wochenstunden
                                                                                  (aktives Dienstverhältnis)
  -------------------------------------------------------------------------------------------------------------

### Dienstnehmer -- Über-/Mehrstunden

  ----------------------------------------------------------------------------------------
  **Formel**                                    **Beschreibung**
  ------------ ------------- ---------- ------- ------------------------------------------
  DN().        Üst_Alle().   Monat().   Monat   Zeigt das Monatskürzel und Jahr an

  DN().        Üst_Alle().   Monat().   Wert    Wert der ausgewählten Über- und/oder
                                                Mehrarbeitsstunden

  DN().        Üst_Alle().   Name               Text der ausgewählten Über- und/oder
                                                Mehrarbeitsstunden

  DN().        Üst_Alle().   Nummer             Nummer der ausgewählten Über- und/oder
                                                Mehrarbeitsstunden

  DN().        Üst_WK().     Monat()    Monat   Zeigt das Monatskürzel und Jahr an

  DN().        Üst_WK().     Monat().   Wert    Wert der ausgewählten und wiederkehrenden
                                                Über- und/oder Mehrarbeitsstunden

  DN().        Üst_WK().     Name               Text der ausgewählten und wiederkehrenden
                                                Über- und/oder Mehrarbeitsstunden

  DN().        Üst_WK().     Nummer             Nummer der ausgewählten und
                                                wiederkehrenden Über- und/oder
                                                Mehrarbeitsstunden
  ----------------------------------------------------------------------------------------

### Dienstnehmer -- BUAK

  -------------------------------------------------------------------------------------
  **Formel**                                    **Beschreibung**
  ------------ ---------- --------------------- ---------------------------------------
  DN().        Monat().   Buak                  BUAK aktiviert -- Wahr/Falsch

  DN().        Monat().   BuakBkz               Betriebskennzeichen bzw. wenn abw.
                                                Betriebskennzeichen eingeben wurde,
                                                dieser Wert

  DN().        BuakAkz                          Arbeitnehmerkennzeichen bei der BUAK

  DN().        Monat().   BuakBeruf             BUAK -- Beruf

  DN().        Monat().   BuakStundensatzKv     BUAK -- Stundensatz lt. KV

  DN().        Monat().   BuakWochenstundenKv   BUAK -- Wochenstunden lt. KV
  -------------------------------------------------------------------------------------

### Dienstnehmer -- Urlaub

  ----------------------------------------------------------------------------------------------------------------
  **Formel**                                                                        **Beschreibung**
  ------------ ------------------------ ----------------- ------------------------- ------------------------------
  DN().        UrlaubsjahrBeginn                                                    Datum im Beginn Urlaubsjahr

  DN().        UrlaubInAT                                                           Ob Urlaub in Arbeitstagen
                                                                                    abgerechnet wird (Wahr/Falsch)

  DN().        UrlaubInStunden                                                      Ob Urlaub in Stunden
                                                                                    abgerechnet wird (Wahr/Falsch)

  DN().        UrlaubAnspruch                                                       Wert im Feld Anspruch

  DN().        UrlaubAnfang                                                         Wert im Feld Anfangsstand

  DN().        MonatsteilerAbw                                                      Eingabe der Tage bei
                                                                                    abweichenden Monatsteiler für
                                                                                    die Urlaubsrückstellung

  DN().        UrlaubAliquot                                                        Anspruchsaliquotierung
                                                                                    aktiviert (Wahr/Falsch)

  DN().        UrlaubAliquotDauerhaft                                               Dauerhafte
                                                                                    Anspruchsaliquotierung
                                                                                    aktiviert (Wahr/Falsch)

  DN().        UrlaubskarteiJaNein                                                  Ob die Urlaubskartei verwendet
                                                                                    wird (Wahr/Falsch)

  DN().        Urlaubskartei().                           Von                       Datum Von bei Eintrag der
                                                                                    Urlaubszeile

  DN().        Urlaubskartei().                           Bis                       Datum Bis bei Eintrag der
                                                                                    Urlaubszeile

  DN().        Urlaubskartei().                           Dauer                     Dauer der ausgewählten
                                                                                    Urlaubszeile

  DN().        Urlaubskartei().                           Sonderurlaub              Ob bei Urlaubseintrag
                                                                                    Sonderurlaub aktiviert ist
                                                                                    (Wahr/Falsch)

  DN().        Urlaubskartei().                           Saldo                     Wert im Feld Saldo des
                                                                                    Urlaubeintrages

  DN().        Urlaubskartei().                           Text                      Text der ausgewählten
                                                                                    Urlaubszeile

  DN().        ZR().                    Monat().          TageUrlaub                Anzahl Kalendertage des
                                                                                    Urlaubs

  DN().        ZRAktDV().               Monat().          TageUrlaub                Anzahl Kalendertage des
                                                                                    Urlaubs (aktives
                                                                                    Dienstverhältnis)

  DN().        ZR().                    Monat().          TageUrlaubOhneFeiertage   Kalendertage des Urlaubs ohne
                                                                                    Feiertage

  DN().        ZRAktDV().               Monat().          TageUrlaubOhneFeiertage   Kalendertage des Urlaubs ohne
                                                                                    Feiertage (aktives
                                                                                    Dienstverhältnis)

  DN().        ZR().                    Monat().          TageUrlaubMonatSaldo      Saldo der Urlaubskartei zu
                                                                                    einem bestimmten Monat

  DN().        ZRAktDV().               Monat().          TageUrlaubMonatSaldo      Saldo der Urlaubskartei zu
                                                                                    einem bestimmten Monat
                                                                                    (aktives Dienstverhältnis)

  DN().        ZR().                    TageUrlaubSaldo                             Saldo der Urlaubskartei

  DN().        ZRAktDV().               TageUrlaubSaldo                             Saldo der Urlaubskartei
                                                                                    (aktives Dienstverhältnis)
  ----------------------------------------------------------------------------------------------------------------

### Dienstnehmer -- Krankenstand

  ------------------------------------------------------------------------------------------------------------------------------
  **Formel**                                                                             **Beschreibung**
  ------------ ------------------------------------- ---------- ------------------------ ---------------------------------------
  DN().        KrankenstandBeginnBeschaeftigung                                          Datum im Feld „Beschäftigt ab"

  DN().        KrankenstandBeginnArbeitsjahr                                             Datum im Feld „Beginn Arbeitsjahr"

  DN().        KrankenstandAnspruchArbeitsjahr                                           Berechnung der Ansprüche nach
                                                                                         Arbeitsjahr (Wahr/Falsch)

  DN().        KrankenstandAnspruchKalenderjahr                                          Berechnung der Ansprüche nach
                                                                                         Kalenderjahr (Wahr/Falsch)

  DN().        KrankenstandAbrechnungArbeitstage                                         Abrechnung in Arbeitstagen
                                                                                         (Wahr/Falsch)

  DN().        KrankenstandAbrechnungKalendertagen                                       Abrechnung in Kalendertagen
                                                                                         (Wahr/Falsch)

  DN().        KrankenstandskarteiJaNein                                                 Krankenstandkartei aktiviert
                                                                                         (Wahr/Falsch)

  DN().        Krankenstandskartei().                           Art                      Krankenstandskartei -- Wert bei Art

  DN().        Krankenstandskartei().                           Von                      Krankenstandskartei -- Datum Von

  DN().        Krankenstandskartei().                           Bis                      Krankenstandskartei -- Datum Bis

  DN().        Krankenstandskartei().                           Dauer                    Krankenstandskartei -- Tage der Dauer

  DN().        Krankenstandskartei().                           Grund                    Krankenstandskartei -- Grund des
                                                                                         Krankenstandes

  DN().        Krankenstandskartei().                           Ersterkrankung           Krankenstandskartei -- Ersterkrankung
                                                                                         (Wahr/Falsch)

  DN().        Krankenstandskartei().                           Text                     Krankenstandskartei -- Eintrag im Feld
                                                                                         Text

  DN().        ZR().                                 Monat().   TageEFZ                  Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes

  DN().        ZRAktDV().                            Monat().   TageEFZ                  Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes (aktives Dienstverhältnis)

  DN().        ZR().                                 Monat().   TageEFZ0                 Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes für die kein Anspruch mehr
                                                                                         besteht

  DN().        ZRAktDV().                            Monat().   TageEFZ0                 Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes für die kein Anspruch mehr
                                                                                         besteht (aktives Dienstverhältnis)

  DN().        ZR().                                 Monat().   TageEFZ100               Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes für die ein Anspruch zu 100
                                                                                         % besteht

  DN().        ZRAktDV().                            Monat().   TageEFZ100               Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes für die ein Anspruch zu 100
                                                                                         % besteht (aktives Dienstverhältnis)

  DN().        ZR().                                 Monat().   TageEFZ25                Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes für die ein Anspruch zu 25 %
                                                                                         besteht

  DN().        ZRAktDV().                            Monat().   TageEFZ25                Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes für die ein Anspruch zu 25 %
                                                                                         besteht (aktives Dienstverhältnis)

  DN().        ZR().                                 Monat().   TageEFZ50_1              Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes für die ein Anspruch zu 50 %
                                                                                         besteht

  DN().        ZRAktDV().                            Monat().   TageEFZ50_1              Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes für die ein Anspruch zu 50 %
                                                                                         besteht (aktives Dienstverhältnis)

  DN().        ZR().                                 Monat().   TageEFZ50_2              Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes für die ein Anspruch zu 50 %
                                                                                         (§ 8/2 AngG) besteht

  DN().        ZRAktDV().                            Monat().   TageEFZ50_2              Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes für die ein Anspruch zu 50 %
                                                                                         (§ 8/2 AngG) besteht (aktives
                                                                                         Dienstverhältnis)

  DN().        ZR().                                 Monat().   TageEFZTE                Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes für die ein Teilentgelt
                                                                                         besteht (Lehrling)

  DN().        ZRAktDV().                            Monat().   TageEFZTE                Anzahl der EFZ-Tage des ausgewählten
                                                                                         Zeitraumes für die ein Teilentgelt
                                                                                         besteht (Lehrling) (aktives
                                                                                         Dienstverhältnis)

  DN().        ZR().                                 Monat().   TageKrank                Anzahl der Krankentage

  DN().        ZRAktDV().                            Monat().   TageKrank                Anzahl der Krankentage (aktives
                                                                                         Dienstverhältnis)

  DN().        ZR().                                 Monat().   TageKrankOhneFeiertage   Anzahl der Krankentage ohne Freitage

  DN().        ZRAktDV().                            Monat().   TageKrankOhneFeiertage   Anzahl der Krankentage ohne Freitage
                                                                                         (aktives Dienstverhältnis)
  ------------------------------------------------------------------------------------------------------------------------------

### Dienstnehmer -- Dienstzettel

  ----------------------------------------------------------------------------------------------------------
  **Formel**                                                                     **Beschreibung**
  ------------ ---------------------------------- -------- --------------------- ---------------------------
  DN().        DienstzettelEndeAV                                                Datum im Feld „Ende
                                                                                 Arbeitsverhältnis"

  DN().        DienstzettelEntgeltFaelligAm                                      Text im Feld Entlohnung
                                                                                 „fällig am"

  DN().        DienstzettelSonstigeVereinbarung                                  Text der sonstigen
                                                                                 Vereinbarungen

  DN().        DienstzettelVdzEinstufung                                         Anrechnung Vordienstzeiten
                                                                                 -- Einstufung

  DN().        DienstzettelVdzAbfertigung                                        Anrechnung Vordienstzeiten
                                                                                 -- Abfertigung

  DN().        DienstzettelVdzUrlaub                                             Anrechnung Vordienstzeiten
                                                                                 -- Urlaub

  DN().        DienstzettelEinstufung                                            Einstufung -- Einstufung

  DN().        DienstzettelEinstufungGruppe                                      Einstufung -- Gruppe im

  DN().        DienstzettelEinstufungJahr                                        Einstufung -- Jahr ab

  DN().        DienstzettelVorrueckung                                           Vorrückung -- Vorrückung

  DN().        DienstzettelVorrueckungGruppe                                     Vorrückung -- Gruppe im

  DN().        DienstzettelVorrueckungJahr                                       Vorrückung -- Jahr ab

  DN().        DienstzettelKuendText().                    Nummer                Nummer des Textbausteines
                                                                                 bei Kündigung

  DN().        DienstzettelSonstText().                    Nummer                Nummer des Textbausteines
                                                                                 bei Sonstiges

  DzText().                                       Nummer                         Nummer des
                                                                                 Dienstzetteltextes

  DzText().                                       Text                           Wortlaut des
                                                                                 Dienstzetteltextes
  ----------------------------------------------------------------------------------------------------------

### Auswahlkriterium

  -----------------------------------------------------------------------------
  **Formel**                     **Beschreibung**
  --------------------- -------- ----------------------------------------------
  Auswahlkriterium().   Nummer   Nummer des Auswahlkriteriums

  Auswahlkriterium().   Text     Text des Auswahlkriteriums
  -----------------------------------------------------------------------------

### Zeitausgleich

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Formel**                                                                                                                         **Beschreibung**
  ------------ ------------------------------- -------------------------------- ----------------------------- ---------------------- ----------------------------
  DN()         ZeitausgleichAnfang                                                                                                   Anfangsbestand des ZA

  DN().        ZeitausgleichInArbeitsstunden                                                                                         ZA in Arbeitsstunden

  DN().        Zeitauslgeichskartei().                                                                        Arbeitsstunden         Arbeitsstunden

  DN().        Zeitauslgeichskartei().                                                                        Datum                  Datum

  DN().        Zeitauslgeichskartei().                                                                        Saldo                  Saldo des ZA

  DN().        Zeitauslgeichskartei().                                                                        StundenRueckstellung   Stundenrückstellung

  DN().        Zeitauslgeichskartei().                                                                        Zuschlag               ZA Zuschlag

  DN().        ZeitausgleichskarteiJaNein                                                                                            Zeitausgleichskartei ist
                                                                                                                                     aktiviert oder nicht

  DN().        ZeitausgleichStundenteiler                                                                                            Stundenteiler

  DN().        ZeitausgleichStundenteilerAbw                                                                                         Abw. Stundenteiler

  DN().        ZR().                           Monat().                         ZA1                                                  ZA 1

  DN().        ZR().                           Monat().                         ZA1                           AnfangsstandBetrag     ZA 1 Anfangsstand Betrag

  DN().        ZR().                           Monat().                         ZA1                           AnfangsstandStunden    ZA 1 Anfangsstand Stunden

  DN().        ZR().                           Monat().                         ZA1                           EndsaldoBetrag         ZA 1 Endsaldo Betrag

  DN().        ZR().                           Monat().                         ZA1                           EndsaldoStunden        ZA 1 Endsaldo Stunden

  DN().        ZR().                           Monat().                         ZA1                           VeraenderungBasis      ZA 1 Veränderung der Basis

  DN().        ZR().                           Monat().                         ZA1                           VeraenderungBetrag     ZA 1 Veränderung des
                                                                                                                                     Betrages

  DN().        ZR().                           Monat().                         ZA1                           VeraenderungStunden    ZA 1 Veränderung der Stunden

  DN().        ZRAktDV().                      Monat().                         ZA1                                                  ZA 1 (aktives
                                                                                                                                     Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA1                           AnfangsstandBetrag     ZA 1 Anfangsstand Betrag
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA1                           AnfangsstandStunden    ZA 1 Anfangsstand Stunden
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA1                           EndsaldoBetrag         ZA 1 Endsaldo Betrag
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA1                           EndsaldoStunden        ZA 1 Endsaldo Stunden
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA1                           VeraenderungBasis      ZA 1 Veränderung der Basis
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA1                           VeraenderungBetrag     ZA 1 Veränderung des
                                                                                                                                     Betrages (aktives
                                                                                                                                     Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA1                           VeraenderungStunden    ZA 1 Veränderung der Stunden
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZR().                           Monat().                         ZA2                                                  ZA 2

  DN().        ZR().                           Monat().                         ZA2                           AnfangsstandBetrag     ZA 2 Anfangsstand Betrag

  DN().        ZR().                           Monat().                         ZA2                           AnfangsstandStunden    ZA 2 Anfangsstand Stunden

  DN().        ZR().                           Monat().                         ZA2                           EndsaldoBetrag         ZA 2 Endsaldo Betrag

  DN().        ZR().                           Monat().                         ZA2                           EndsaldoStunden        ZA 2 Endsaldo Stunden

  DN().        ZR().                           Monat().                         ZA2                           VeraenderungBasis      ZA 2 Veränderung der Basis

  DN().        ZR().                           Monat().                         ZA2                           VeraenderungBetrag     ZA 2 Veränderung des
                                                                                                                                     Betrages

  DN().        ZR().                           Monat().                         ZA2                           VeraenderungStunden    ZA 2 Veränderung der Stunden

  DN().        ZRAktDV().                      Monat().                         ZA2                                                  ZA 2 (aktives
                                                                                                                                     Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA2                           AnfangsstandBetrag     ZA 2 Anfangsstand Betrag
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA2                           AnfangsstandStunden    ZA 2 Anfangsstand Stunden
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA2                           EndsaldoBetrag         ZA 2 Endsaldo Betrag
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA2                           EndsaldoStunden        ZA 2 Endsaldo Stunden
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA2                           VeraenderungBasis      ZA 2 Veränderung der Basis
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA2                           VeraenderungBetrag     ZA 2 Veränderung des
                                                                                                                                     Betrages (aktives
                                                                                                                                     Dienstverhältnis)

  DN().        ZRAktDV().                      Monat().                         ZA2                           VeraenderungStunden    ZA 2 Veränderung der Stunden
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZR().                           Monat().                         ZAArbeitsstunden                                     ZA Arbeitstunden

  DN().        ZRAktDV().                      Monat().                         ZAArbeitsstunden                                     ZA Arbeitstunden (aktives
                                                                                                                                     Dienstverhältnis)

  DN().        ZR().                           Monat().                         ZASaldoArbeitsstunden                                ZA Saldo Arbeitsstunden

  DN().        ZRAktDV().                      Monat().                         ZASaldoArbeitsstunden                                ZA Saldo Arbeitsstunden
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZR().                           Monat().                         ZASaldoStundenRueckstellung                          Der Saldo der STeunden
                                                                                                                                     Rückstellung für ZA

  DN().        ZRAktDV().                      Monat().                         ZASaldoStundenRueckstellung                          Der Saldo der STeunden
                                                                                                                                     Rückstellung für ZA (aktives
                                                                                                                                     Dienstverhältnis)

  DN().        ZR().                           Monat().                         ZAStundenRueckstellung                               ZA Stunden Rückstellung ist
                                                                                                                                     aktiviert

  DN().        ZRAktDV().                      Monat().                         ZAStundenRueckstellung                               ZA Stunden Rückstellung ist
                                                                                                                                     aktiviert (aktives
                                                                                                                                     Dienstverhältnis)

  DN().        ZR().                           ZAEndsaldoArbeitsstunden                                                              ZA Endsaldo Arbeitsstunden

  DN().        ZRAktDV().                      ZAEndsaldoArbeitsstunden                                                              ZA Endsaldo Arbeitsstunden
                                                                                                                                     (aktives Dienstverhältnis)

  DN().        ZR().                           ZAEndsaldoStundenRueckstellung                                                        ZA Endsaldo Stunden
                                                                                                                                     Rückstellung

  DN().        ZRAktDV().                      ZAEndsaldoStundenRueckstellung                                                        ZA Endsaldo Stunden
                                                                                                                                     Rückstellung(aktives
                                                                                                                                     Dienstverhältnis)
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------

### Abzüge

  -------------------------------------------------------------------------------------------------------
  **Formel**                                                         **Beschreibung**
  ------------ ------------------ ---------------------------------- ------------------------------------
  DN()         Monat()            Betriebsratsumlage                 Betrag Betriebsratsumlage

  DN()         Monat()            BetriebsratsumlageInklSZ           Betriebsratsumlage inkl.
                                                                     Sonderzahlungen (Wahr/Falsch)

  DN()         Monat()            BetriebsratsumlageProzenteingabe   Betriebsratsumlage Prozenteingabe
                                                                     (Wahr/Falsch)

  DN()         Monat()            BetriebsratsumlageProzentsatz      Betriebsratsumlage Prozentsatz

  DN()         Monat()            ErhoehungDB                        20% Regel Sachbezug -- Erhöhung
                                                                     DB-Bemessungsgrundlage aktiviert
                                                                     (Wahr/Falsch)

  DN()         Monat()            ErhoehungKommunalsteuer            20% Regel Sachbezug -- Erhöhung
                                                                     Kommunalsteuer-Bemessungsgrundlage
                                                                     aktiviert (Wahr/Falsch)

  DN()         Monat()            GewerkschaftProzenteingabe         Gewerkschaftsbeitrag Prozenteingabe
                                                                     (Wahr/Falsch)

  DN()         Monat()            GewerkschaftProzentsatz            Gewerkschaftsbeitrag Prozentsatz

  DN()         Monat()            Gewerkschaftsbeitrag               Betrag Gewerkschaftsbeitrag

  DN()         Monat()            Sachbezug                          Betrag Sachbezug

  DN()         Monat()            Vorschuss                          Betrag Vorschuss
  -------------------------------------------------------------------------------------------------------

### Exekutionen

  ---------------------------------------------------------------------------------------------
  **Formel**                                                       **Beschreibung**
  ------------ ------------------ -------------------------------- ----------------------------
  DN()         Monat()            AbzugExekutionskosten            Abzug Exekutionskosten
                                                                   (Wahr/Falsch)

  DN()         Monat()            Aktenzahl                        Aktenzahl der Exekution

  DN()         Monat()            DauerBeendigungsansprueche       Anzahl Monate der
                                                                   Beendigungsansprüche

  DN()         Monat()            ErweiterterPfaendungsschutz      Erweiterter Pfändungsschutz
                                                                   in Monate

  DN()         Monat()            Exekutionsbetrag                 Exekutionsbetrag

  DN()         Monat()            Gericht                          Gericht

  DN()         Monat()            KeineZahlungsbereitschaft        Keine Zahlungsbereitschaft
                                                                   aktiviert (Wahr/Falsch)

  DN()         Monat()            KeineZahlungsbereitschaftGrund   Keine Zahlungsbereitschaft
                                                                   Grund

  DN()         Monat()            AbwBerechnungsgrundlagen         Abweichende
                                                                   Berechnungsgrundlage
                                                                   aktiviert (Wahr/Falsch)

  DN()         Monat()            AnspruchAufSonderzahlung         Anspruch auf Sonderzahlung
                                                                   (Wahr/Falsch)

  DN()         Monat()            LfdBezuegeAbweichend             Abweichende
                                                                   Berechnungsgrundlage
                                                                   laufende Bezüge

  DN()         Monat()            BeendigungAbweichend             Abweichende
                                                                   Berechnungsgrundlage
                                                                   Beendigungsansprüche

  DN()         Monat()            SonderzahungAbweichend           Abweichende
                                                                   Berechnungsgrundlage
                                                                   Sonderzahlungen

  DN()         Monat()            SummeExekutionsbetraege          Summe Exekutionsbeträge

  DN()         Monat()            SummeExekutionskosten            Summe Exekutionskosten

  DN()         Monat()            ZahlungsklageDesDienstnehmers    Zahlungsklage des
                                                                   Dienstnehmers aktiviert
                                                                   (Wahr/Falsch)
  ---------------------------------------------------------------------------------------------

### Kostenstelle

  -----------------------------------------------------------------------------------
  **Formel**                                         **Beschreibung**
  ------------ --------- ---------------- ---------- --------------------------------
  DN()         Monat()   Kostenstelle()   Name       Name der Kostenstelle

  DN()         Monat()   Kostenstelle()   Nummer     Nummer der Kostenstelle

  DN()         Monat()   Kostenstelle()   Prozent    Prozentsatz der Kostenstelle
  -----------------------------------------------------------------------------------

### Freie Dienstnehmer

  ------------------------------------------------------------------------------------------------------------
  **Formel**                                                                      **Beschreibung**
  ------------ -------------------------- --------------------------------------- ----------------------------
  DN()         Monat()                    Abmeldedatum                            Abmeldedatum

  DN()         Monat()                    AbwBVBeitragssatz                       Abweichender BV-Beitagssatz

  DN()         Monat()                    AbweichendeUStBasis                     USt-Pflicht -- abweichende
                                                                                  USt-Basis

  DN()         Monat()                    AndereVereinbarungen                    Anmeldung -- andere
                                                                                  Vereinbarungen

  DN()         Monat()                    SZvereinbart                            Anmeldung -- SZ vereinbart
                                                                                  (Wahr/Falsch)

  DN()         Monat()                    BeginnAnderweitigePflichtversicherung   Datumsfeld: Abmeldung --
                                                                                  Beginn anderweitige
                                                                                  Pflichtversicherung

  DN()         Monat()                    BerufFreierDn                           Beruf

  DN()         Monat()                    EndeTaetigkeit                          Ende der Tätigkeit

  DN()         Monat()                    EntgeltMonatlich                        Vereinbartes Entgelt
                                                                                  monatlich aktiviert
                                                                                  (Wahr/Falsch)

  DN()         Monat()                    Erfuellungszeitpunkt                    Anmeldung -
                                                                                  Erfüllungszeitpunkt

  DN()         Monat()                    FreierDNmitSZ                           Sozialversicherung -- Freier
                                                                                  Dienstnehmer mit SZ
                                                                                  aktiviert (Wahr/Falsch)

  DN()         Monat()                    SZBetrag                                SZ vereinbart Betrag

  DN()         Monat()                    VereinbartesEntgelt                     Vereinbartes Entgelt Betrag

  DN()         Monat()                    Vertragsabschluss                       Vertragsabschluss (Datum)

  DN()         Monat()                    VertragsdauerBis                        Vertragsdauer bis (Datum)

  DN()         Monat()                    VertragsdauerVon                        Vertragsdauer von (Datum)

  DN()         Monat()                    Zahlungstermine                         Zahlungstermine

  DN()         ArtDerErbrachtenLeistung                                           Art der erbrachten Leistung
  ------------------------------------------------------------------------------------------------------------

### Kurzarbeit

  ------------------------------------------------------------------------------------------------------------------------------
  **Formel**                                                                                        **Beschreibung**
  ------------ --------------------- --------------------------- ---------------------------------- ----------------------------
  DN()         Monat()               KurzarbeitCovid19()         AbgerechnetInMonth                 Zeigt an ob in dem
                                                                                                    ausgewählten Monat
                                                                                                    Kurzarbeit abgerechnet wurde
                                                                                                    (Wahr/Falsch)

  DN()         Monat()               KurzarbeitCovid19()         Arbeitsstunden                     Geleistete Arbeitsstunden
                                                                                                    (ohne Überstunden)

  DN()         Monat()               KurzarbeitCovid19()         Ausfallstunden                     Verrechnete Ausfallstunden

  DN()         Monat()               KurzarbeitCovid19()         BruttoVorKua68_1                   Brutto vor Kurzarbeit davon
                                                                                                    § 68 (1)

  DN()         Monat()               KurzarbeitCovid19()         BruttoVorKua68_2                   Brutto vor Kurzarbeit davon
                                                                                                    § 68 (2)

  DN()         Monat()               KurzarbeitCovid19()         BruttoVorKuaBeihilfe               Brutto vor Kurzarbeit
                                                                                                    (Bruttoentgelt für
                                                                                                    Kurzarbeitsbeihilfe)

  DN()         Monat()               KurzarbeitCovid19()         BruttoVorKuaNettoersatzrate        Brutto vor Kurzarbeit
                                                                                                    (Bruttoentgelt für
                                                                                                    Kurzarbeitsunterstützung

  DN()         Monat()               KurzarbeitCovid19()         Bruttozuschlag                     Bruttozuschlag

  DN()         Monat()               KurzarbeitCovid19()         BVBemVorKua                        BV-Bemessung vor Kurzarbeit

  DN()         Monat()               KurzarbeitCovid19()         ErhoehungBvBem                     Erhöhung BV-Bemessung

  DN()         Monat()               KurzarbeitCovid19()         ErhoehungSvBem                     Erhöhung SV-Bemessung

  DN()         Monat()               KurzarbeitCovid19()         ErhoehungSvBemHandlungsempf        Erhöhung SV-Bemessung
                                                                                                    Handlungsempfehlung

  DN()         Monat()               KurzarbeitCovid19()         Ersatzleistungen                   Stunden für die
                                                                                                    Ersatzleistungen gebühren

  DN()         Monat()               KurzarbeitCovid19()         IsLehrling                         DN gilt für Kurzarbeit als
                                                                                                    Lehrling (Wahr/Falsch)

  DN()         Monat()               KurzarbeitCovid19()         Krankenstand                       Entgeltfortzahlung für
                                                                                                    Krankenstand

  DN()         Monat()               KurzarbeitCovid19()         KurzarbeitsabschlagHandlungsempf   Corona-Kurzarbeitsabschlag
                                                                                                    Handlungsempfehlung

  DN()         Monat()               KurzarbeitCovid19()         Kurzarbeitsbeihilfe                Kurzarbeitsbeihilfe

  DN()         Monat()               KurzarbeitCovid19()         Kurzarbeitsunterstuetzung          Kurzarbeitsunterstützung

  DN()         Monat()               KurzarbeitCovid19()         Kurzarbeitsunterstuetzung68_1      Davon steuerfrei gem. § 68
                                                                                                    (1)

  DN()         Monat()               KurzarbeitCovid19()         Kurzarbeitsunterstuetzung68_2      Davon steuerfrei gem. § 68
                                                                                                    (2)

  DN()         Monat()               KurzarbeitCovid19()         MindestBruttoWaehrendKua           Mindest-Brutto während
                                                                                                    Kurzarbeit

  DN()         Monat()               KurzarbeitCovid19()         NazAbrechnungszeitraum             Normalarbeitsstunden im
                                                                                                    Abrechnungszeitraum

  DN()         Monat()               KurzarbeitCovid19()         Nettoersatzrate                    Nettoersatzrate in %

  DN()         Monat()               KurzarbeitCovid19()         Pauschalsatz                       Pauschalsatz pro
                                                                                                    Ausfallstunde umgerechnet in
                                                                                                    ... h

  DN()         Monat()               KurzarbeitCovid19()         ReduktionBrutto                    Reduktion Brutto durch
                                                                                                    Kurzarbeit

  DN()         Monat()               KurzarbeitCovid19()         SvBemVorKua                        SV-Bemessung vor Kurzarbeit

  DN()         Monat()               KurzarbeitCovid19()         Ueberstunden                       Geleistete Überstunden

  DN()         Monat()               KurzarbeitCovid19()         UrlaubZa                           Konsumierter Urlaub

  DN()         Monat()               KurzarbeitCovid19()         Za                                 Konsumiertes Zeitguthaben

  DN()         AMSKuaProjekt         AMSNr                                                          AMS Nummer

  DN()         AMSKuaProjekt         Beginn                                                         AMS-KUA-Projekt Beginn

  DN()         AMSKuaProjekt         DnKuaZr                                                        Anzahl Dienstnehmer pro
                                                                                                    AMS-KUA-Projektbuak

  DN()         AMSKuaProjekt         Ende                                                           AMS-KUA-Projekt Ende

  DN()         AMSKuaProjekt         RZLNr                                                          RZL Nummer

  DN()         KurzarbeitCovid19()   Aktiviert                                                      Kurzarbeit aktiviert
                                                                                                    (Wahr/Falsch)

  DN()         KurzarbeitCovid19()   AMSProjektNr                                                   AMS-Projekt Nummer

  DN()         KurzarbeitCovid19()   Arbeitsausfall                                                 Arbeitsausfall in %

  DN()         KurzarbeitCovid19()   Beginn                                                         Beginn der Kurzarbeit

  DN()         KurzarbeitCovid19()   BruttoVorKua                                                   Brutto vor Kurzarbeit
                                                                                                    (Bruttoentgelt für
                                                                                                    Kurzarbeitsbeihilfe)

  DN()         KurzarbeitCovid19()   BvBemVorKua                                                    BV-Bemessung vor Kurzarbeit

  DN()         KurzarbeitCovid19()   Ende                                                           Ende der Kurzarbeit

  DN()         KurzarbeitCovid19()   NazLtKv                                                        Normalarbeitszeit laut KV

  DN()         KurzarbeitCovid19()   RZLProjektNr                                                   RZL-Projekt Nummer

  DN()         KurzarbeitCovid19()   SvBemVorKua                                                    SV-Bemessung vor Kurzarbeit

  DN()         KurzarbeitCovid19()   UestdPauschUnwiderruflich                                      Überstundenpauschale
                                                                                                    unwiderruflich aktiviert
                                                                                                    (Wahr/Falsch)

  DN()         KurzarbeitCovid19()   WochenStd                                                      Wochenstunden
  ------------------------------------------------------------------------------------------------------------------------------

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

# Formelsammlung für die Honorarverrechnung 

Im folgenden Kapitel finden Sie die Auflistung der verfügbaren Formeln
für das Reporting im Honorarverrechnungsprogramm.

## RZL Notenvorlage Erweitert[]{.indexref entry="Formelliste: Honorarverrechnung"}

Eine aktuelle Übersicht finden Sie in der ZMV unter *Allg. Dateien* /
*Installieren* im Registerblatt *Reports* oder im Kapitel 9 Auflistung
Musterreports Seite [57](#auflistung-musterreports) ff beschrieben.

Tipp

RZL bietet Ihnen Musterhonorarnotenvorlagen in Form eines Reports mit
der Nummer *300-RZL Muster Notenvorlagen* an. Diese können auf den
gewünschten Klienten überspielt und anschließend abgeändert werden. Die
notwendigen Einstellungen betreffend des Klienten in der
RZL-Honorarverrechnung finden Sie in der Kurzanleitung *Notenvorlage
Erweitert*, welche über *Hilfe / Kurzanleitungen* im Honorarprogramm
aufgerufen werden kann.

Tipp

Die RZL-Musterreports werden stetig erweitert. Neuerungen werden auch im
Zuge der RZL-Programmaktualisierung in den RZL-Newslettern
veröffentlicht.

## Liste der Honorarverrechnungsformeln

Die folgenden Formeln sind im Honorarverrechnungsprogramm anwendbar.

### Dokument Allgemein

  -----------------------------------------------------------------------
  **Formel**                          **Beschreibung**
  ----------------------------------- -----------------------------------
  AktuellesDatum                      Tagesdatum

  AktuelleSeite                       Nummer der aktuellen Seite

  Seitenanzahl                        Gesamtzahl der Seiten
  -----------------------------------------------------------------------

### Honorarnote Allgemein

  ---------------------------------------------------------------------------
  **Formel**                **Beschreibung**
  ------------ ------------ -------------------------------------------------
  Note         Nr           Notennummer

  Note         Datum        Notendatum

  Note         EMail        E-Mail

  Note         Intern       „Wahr" wenn es sich um eine interne Note handelt

  Note         Zeitraum     Erfassungszeitraum; Zeitraum in dem die
                            Leistungen erbracht wurden

  Note         Zusatztext   Zusatztext; kann während der Notenerstellung
                            eingegeben werden
  ---------------------------------------------------------------------------

### Kanzleibereich (Rechnungssteller)

Die Daten des Kanzleibereiches können vor allem für die Erstellung des
Briefkopfes herangezogen werden

  --------------------------------------------------------------------------------------
  **Formel**                                    **Beschreibung**                      
  ------------ ---------------- --------------- ------------------------------------- --
  Note         Kanzleibereich   Nr              Nummer                                

  Note         Kanzleibereich   Name            Name                                  

  Note         Kanzleibereich   Strasse         Straße                                

  Note         Kanzleibereich   PLZ             Postleitzahl                          

  Note         Kanzleibereich   Ort             Ort                                   

  Note         Kanzleibereich   Land            Länderkürzel                          

  Note         Kanzleibereich   UID             Umsatzsteuer-Identifikations-Nummer   

  Note         Kanzleibereich   Homepage        Homepage                              

  Note         Kanzleibereich   EMail           E-Mail-Adresse                        
  --------------------------------------------------------------------------------------

### Klient (Rechnungsempfänger)

  ------------------------------------------------------------------------------------
  **Formel**                                **Beschreibung**
  ------------ -------- ------------------- ------------------------------------------
  Note         Klient   Nr                  Nummer

  Note         Klient   Adressanrede        Adressanrede

  Note         Klient   AkademischerGrad    Vorangestellter akademischer Grad (zB
                                            „Mag.")

  Note         Klient   Gesamtname          Zusammengesetzter Name inkl. Akademischer
                                            Grade, Vorname und Nachname

  Note         Klient   Vorname             Vorname

  Note         Klient   Nachname            Nachname

  Note         Klient   AkademischerGrad2   Nachgestellter akademischer Grad (zB „MS")

  Note         Klient   Tätigkeit           Art der Tätigkeit (bei Firmendaten) bzw.
                                            Beruf (bei Personendaten)

  Note         Klient   Strasse             Straße

  Note         Klient   PLZ                 Postleitzahl

  Note         Klient   Ort                 Ort

  Note         Klient   Land                Langform (zB „Deutschland"); bei
                                            österreichischen Klienten bleibt das Feld
                                            leer

  Note         Klient   Briefanrede         Briefanrede

  Note         Klient   EMail               E-Mail-Adresse

  Note         Klient   Kurzbezeichnung     Kurzbezeichnung

  Note         Klient   UID                 Umsatzsteuer-Identifikations-Nummer
  ------------------------------------------------------------------------------------

### Zustellvertreter

  ----------------------------------------------------------------------------------------
  **Formel**                                     **Beschreibung**
  ------------ ------------------ -------------- -----------------------------------------
  Note         Zustellvertreter   Vorhanden      „Wahr" wenn ein Zustellvertreter
                                                 vorhanden ist

  Note         Zustellvertreter   Adressanrede   Adressanrede

  Note         Zustellvertreter   Name           Name

  Note         Zustellvertreter   Funktion       Funktion

  Note         Zustellvertreter   Strasse        Straße

  Note         Zustellvertreter   PLZ            Postleitzahl

  Note         Zustellvertreter   Ort            Ort

  Note         Zustellvertreter   Land           Langform (zB „Deutschland"); bei
                                                 österreichischen Klienten bleibt das Feld
                                                 leer
  ----------------------------------------------------------------------------------------

## Bereiche

### Mit Umsatzsteuer

In diesem Bereich werden die Tätigkeiten mit Umsatzsteuer-Pflicht
dargestellt. Je nach Einstellungen in den Programmoptionen erfolgt eine
Aufteilung auf die (Unter-)Klienten und die Verrechnungskreise.

HInweis

Die Klammern weisen darauf hin, dass mehrere Zeilen vorhanden sind.

  -----------------------------------------------------------------------------------------------------------------------
  **Formel**                                                                                   **Beschreibung**
  ------------ --------- -------- ---------- --------------------- ------------- ------------- --------------------------
  Note         Bereich   MitUSt   Klient()   Nr                                                Klientennummer

  Note         Bereich   MitUSt   Klient()   Name                                              Klientenname

  Note         Bereich   MitUSt   Klient()   Stunden                                           Anzahl der Stunden für den
                                                                                               Klienten

  Note         Bereich   MitUSt   Klient()   Verrechnungskreis()   Nr                          Verrechnungskreis-Nummer

  Note         Bereich   MitUSt   Klient()   Verrechnungskreis()   Bezeichnung                 Bezeichnung bzw. Text

  Note         Bereich   MitUSt   Klient()   Verrechnungskreis()   Stunden                     Anzahl der Stunden

  Note         Bereich   MitUSt   Klient()   Verrechnungskreis()   Zeitraum                    Leistungszeitraum (wenn
                                                                                               nach VK abgerechnet)

  Note         Bereich   MitUSt   Klient()   Verrechnungskreis()   Betrag                      Betrag (wenn nach VK
                                                                                               abgerechnet)

  Note         Bereich   MitUSt   Klient()   Verrechnungskreis()   Tätigkeit()   Nr            Nummer der Tätigkeit

  Note         Bereich   MitUSt   Klient()   Verrechnungskreis()   Tätigkeit()   Bezeichnung   Bezeichnung bzw. Text

  Note         Bereich   MitUSt   Klient()   Verrechnungskreis()   Tätigkeit()   Einheiten     Anzahl der Einheiten

  Note         Bereich   MitUSt   Klient()   Verrechnungskreis()   Tätigkeit()   Stunden       Anzahl der Stunden

  Note         Bereich   MitUSt   Klient()   Verrechnungskreis()   Tätigkeit()   Zeitraum      Leistungszeitraum

  Note         Bereich   MitUSt   Klient()   Verrechnungskreis()   Tätigkeit()   Betrag        Betrag
  -----------------------------------------------------------------------------------------------------------------------

### Ohne Umsatzsteuer

In diesem Bereich werden die Tätigkeiten ohne Umsatzsteuer-Pflicht
dargestellt. Der Aufbau ist ident zum Bereich „Mit Umsatzsteuer".

  ------------------------------------------------------------------------------
  **Formel**                         **Beschreibung**
  ------------ --------- ----------- -------------------------------------------
  Note         Bereich   OhneUSt     Siehe Bereich „Mit Umsatzsteuer"

  ------------------------------------------------------------------------------

### Rabatte

  ----------------------------------------------------------------------------
  **Fomel**                                         **Beschreibung**
  ----------- ----------- ----------- ------------- --------------------------
  Note        Bereich     Rabatt()    Nr            Nummer der Rabattzeile

  Note        Bereich     Rabatt()    Bezeichnung   Bezeichnung bzw. Text

  Note        Bereich     Rabatt()    Zeitraum      Leistungszeitraum

  Note        Bereich     Rabatt()    Betrag        Betrag

  Note        Bereich     Rabatt()    Stunden       Stunden
  ----------------------------------------------------------------------------

### Akonto

In diesem Bereich werden die Akonto-Zeilen dargestellt. Je nach
Einstellungen in den Programmoptionen erfolgt eine Aufteilung auf die
(Unter-)Klienten.

  --------------------------------------------------------------------------------------------
  **Formel**                                                             **Beschreibung**
  ------------ --------- -------- ---------- ------------- ------------- ---------------------
  Note         Bereich   Akonto   Klient()   Nr                          Klientennummer

  Note         Bereich   Akonto   Klient()   Name                        Klientenname

  Note         Bereich   Akonto   Klient()   Stunden                     Stundenanzahl

  Note         Bereich   Akonto   Klient()   Tätigkeit()   Nr            Nummer der
                                                                         Akonto-Tätigkeit

  Note         Bereich   Akonto   Klient()   Tätigkeit()   Bezeichnung   Bezeichnung bzw. Text

  Note         Bereich   Akonto   Klient()   Tätigkeit()   Zeitraum      Akonto-Zeitraum

  Note         Bereich   Akonto   Klient()   Tätigkeit()   Betrag        Betrag

  Note         Bereich   Akonto   Klient()   Tätigkeit()   Einheiten     Einheiten

  Note         Bereich   Akonto   Klient()   Tätigkeit()   Stunden       Stunden
  --------------------------------------------------------------------------------------------

## Summen

### Nettosumme vor Abzug der Rabatte

  -----------------------------------------------------------------------------------
  **Fomel**                                        **Beschreibung**
  ----------- -------- ---------------- ---------- ----------------------------------
  Note        Summe    NettoVorRabatt   Drucken    „Wahr", wenn Rabattzeilen
                                                   vorhanden sind

  Note        Summe    NettoVorRabatt   Text       Text lt. Programmoptionen

  Note        Summe    NettoVorRabatt   Betrag     Summe
  -----------------------------------------------------------------------------------

### Nettosumme vor der Umsatzsteuer

  -------------------------------------------------------------------------------
  **Fomel**                                    **Beschreibung**
  ----------- -------- ------------ ---------- ----------------------------------
  Note        Summe    Netto        Drucken    „Wahr", wenn eine Umsatzsteuer
                                               auszuweisen ist

  Note        Summe    Netto        Text       Text lt. Programmoptionen

  Note        Summe    Netto        Betrag     Summe
  -------------------------------------------------------------------------------

### Umsatzsteuer

  ---------------------------------------------------------------------------------
  **Fomel**                                      **Beschreibung**
  ----------- -------- -------------- ---------- ----------------------------------
  Note        Summe    Umsatzsteuer   Drucken    „Wahr", wenn eine Umsatzsteuer
                                                 auszuweisen ist

  Note        Summe    Umsatzsteuer   Text       Text lt. Programmoptionen

  Note        Summe    Umsatzsteuer   Prozent    Prozentsatz

  Note        Summe    Umsatzsteuer   Berag      Umsatzsteuerbetrag
  ---------------------------------------------------------------------------------

### Summe Nach Umsatzsteuer

  -------------------------------------------------------------------------------
  **Fomel**                                    **Beschreibung**
  ----------- -------- ------------ ---------- ----------------------------------
  Note        Summe    NachUSt      Drucken    „Wahr", wenn eine Umsatzsteuer
                                               auszuweisen ist und wenn im
                                               Bereich „ohne Umsatzsteuer" Zeilen
                                               vorhanden sind.

  Note        Summe    NachUSt      Text       Text lt. Programmoptionen

  Note        Summe    NachUSt      Betrag     Summe
  -------------------------------------------------------------------------------

### Bruttosumme (Zwischensumme vor Akonto)

  -------------------------------------------------------------------------------
  **Fomel**                                    **Beschreibung**
  ----------- -------- ------------ ---------- ----------------------------------
  Note        Summe    Brutto       Drucken    „Wahr", wenn Akonto-Zeilen
                                               vorhanden sind

  Note        Summe    Brutto       Text       Text lt. Programmoptionen

  Note        Summe    Brutto       Betrag     Summe
  -------------------------------------------------------------------------------

### Akonto Umsatzsteuer

  ---------------------------------------------------------------------------------------
  **Fomel**                                            **Beschreibung**
  ----------- -------- -------------------- ---------- ----------------------------------
  Note        Summe    AkontoUmsatzsteur    Drucken    „Wahr", wenn Akontozeilen mit
                                                       USt-Ausweis vorhanden sind

  Note        Summe    AkontoUmsatzsteuer   Text       Text lt. Programmoptionen

  Note        Summe    AkontoUmsatzsteuer   Prozent    Prozentsatz

  Note        Summe    AkontoUmsatzsteuer   Betrag     Umsatzsteuerbetrag
  ---------------------------------------------------------------------------------------

### Gesamtbetrag

  --------------------------------------------------------------------------
  Fomel                                      Beschreibung
  ------- ------- ---------------- --------- -------------------------------
  Note    Summe   Gesamtbetrag     Drucken   Immer „Wahr"; Gesamtsumme wird
                                             immer gedruckt

  Note    Summe   Gesamtbetrag     Text      Text lt. Programmoptionen

  Note    Summe   Gesamtbetrag     Betrag    Summe
  --------------------------------------------------------------------------

### Zahlung

  -----------------------------------------------------------------------------------
  Formel                                    Beschreibung
  -------- --------- ------------ --------- -----------------------------------------
  Note     Zahlung   Bankeinzug             „Wahr", wenn für diese Rechnung ein
                                            Bankeinzug erfolgen soll

  Note     Zahlung   Bankname               Name der Bank (lt. Stammdaten des
                                            Kanzleibereiches)

  Note     Zahlung   BIC                    Bank Identifier Code

  Note     Zahlung   Frist                  Zahlungs-Frist in Tagen

  Note     Zahlung   IBAN                   International Bank Accout Number

  Note     Zahlung   QRCode                 Überweisungsdaten als QR-Code (Bild)

  Note     Zahlung   Referenz               Zahlungsreferenz (12-stellig nummerisch)

  Note     Zahlung   Skonto       Betrag    Skonto-Betrag

  Note     Zahlung   Skonto       Frist     Skonto-Frist in Tagen

  Note     Zahlung   Skonto       Prozent   Skonto-Prozentsatz
  -----------------------------------------------------------------------------------

### Journal

Das Journal ist eine Auflistung der in der Note abgerechneten
Erfassungszeilen. Das Journal ist untergliedert in die Ebenen Bereich,
Klient, Verrechnungskreis, Tätigkeit und Erfassungszeile. Je nach
Verwendung der Formeln können einzelne Bereiche auch zusammengefasst
werden. Ein Beispiel ist in der „RZL Mustervorlage mit Vorblatt Journal
Rückblick" zu finden.

  ---------------------------------------------------------------------------------
  **Formel**                                              **Beschreibung**
  ------------ --------- -------------- ----------------- -------------------------
  Note         Journal   Bereich()      Nr                Bereichsnummer

  Note         Journal   Bereich()      Bezeichnung       Bereichs-Bezeichnung

  Note         Journal   Bereich()      Zeitraum          Leistungszeitraum

  Note         Journal   Bereich()      Stunden           Anzahl der Stunden

  Note         Journal   Bereich()      Betrag            Summe

  Note         Journal   Bereich()      Kurzbezeichnung   Kurzbezeichnung des
                                                          Bereiches
  ---------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------
  **Formel**                                                      **Beschreibung**
  ------------ --------- ----------- ---------- ----------------- --------------------------
  Note         Journal   Bereich()   Klient()   Nr                Klienten-Nummer

  Note         Journal   Bereich()   Klient()   Name              Klienten-Name

  Note         Journal   Bereich()   Klient()   Kurzbezeichnung   Klienten-Kurzbezeichnung

  Note         Journal   Bereich()   Klient()   Zeitraum          Leistungszeitraum

  Note         Journal   Bereich()   Klient()   Stunden           Anzahl der Stunden

  Note         Journal   Bereich()   Klient()   Betrag            Summe
  ------------------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------
  Formel                                                                            Beschreibung
  -------- --------- ----------- ---------- --------------------- ----------------- -------------------------------
  Note     Journal   Bereich()   Klient()   Verrechnungskreis()   Nr                Verrechnungskreis-Nummer

  Note     Journal   Bereich()   Klient()   Verrechnungskreis()   Bezeichnung       Verrechnungskreis-Bezeichnung

  Note     Journal   Bereich()   Klient()   Verrechnungskreis()   Kurzbezeichnung   VK-Kurzbezeichnung

  Note     Journal   Bereich()   Klient()   Verrechnungskreis()   Zeitraum          Leistungszeitraum

  Note     Journal   Bereich()   Klient()   Verrechnungskreis()   Stunden           Anzahl der Stunden

  Note     Journal   Bereich()   Klient()   Verrechnungskreis()   Betrag            Summe
  -----------------------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Formel**                                                                                                        **Beschreibung**    
  ------------ --------- ----------- ---------- --------------------- ------------- ----------------- ------------- ------------------- ----------------------
  Note         Journal   Bereich()   Klient()   Verrechnungskreis()   Tätigkeit()   Nr                              Nummer              

  Note         Journal   Bereich()   Klient()   Verrechnungskreis()   Tätigkeit()   Bezeichnung                     Bezeichnung         

  Note         Journal   Bereich()   Klient()   Verrechnungskreis()   Tätigkeit()   Kurzbezeichnung                 Kurzbezeichnung     

  Note         Journal   Bereich()   Klient()   Verrechnungskreis()   Tätigkeit()   Zeitraum                        Leistungszeitraum   

  Note         Journal   Bereich()   Klient()   Verrechnungskreis()   Tätigkeit()   Stunden                         Anzahl der Stunden  

  Note         Journal   Bereich()   Klient()   Verrechnungskreis()   Tätigkeit()   Betrag                          Summe               

  Note         Journal   Bereich()   Klient()   Verrechnungskreis()   Tätigkeit()   Einheiten                       Anzahl der          
                                                                                                                    Einheiten           

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Nr.           Zeilen-Nummer       
                                                                                    ()                                                  

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Datum         Erfassungsdatum     
                                                                                    ()                                                  

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Mitarbeiter   Nr.                 Mit.-Nummer
                                                                                    ()                                                  

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Mitarbeiter   Name                Mit.-Name
                                                                                    ()                                                  

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Mitarbeiter   Kurzbezeichnung     Mit.-Kurzbezeichnung
                                                                                    ()                                                  

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Tätigkeit     Nr.                 Tät.-Nummer
                                                                                    ()                                                  

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Tätigkeit     Bezeichnung         Tät. Bezeichnung
                                                                                    ()                                                  

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Tätigkeit     Kurzbezeichnung     Tät. Kurzbez.
                                                                                    ()                                                  

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Klient        Nr.                 Kli-Nummer
                                                                                    ()                                                  

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Klient        Kurzbezeichnung     Kli.-Kurzbezeichnung
                                                                                    ()                                                  

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Zeitraum      Leistungszeitraum   
                                                                                    ()                                                  

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Stunden       Anzahl der Stunden  
                                                                                    ()                                                  

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Einheiten     Anzahl der          
                                                                                    ()                              Einheiten           

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Betrag        Betrag              
                                                                                    ()                                                  

  Note         Journal   Bereich()   Klient ()  Verrechnungskreis()   Tätigkeit     Erfassungszeile   Text          Eingegebener Text   
                                                                                    ()                                                  
  ------------------------------------------------------------------------------------------------------------------------------------------------------------

### Verrechnungskreis-Rückblick

Je Verrechnungskreis können die Werte der aktuellen und der letzten 5
Honorarnoten dargestellt werden. Ein Beispiel ist in der „RZL
Mustervorlage mit Vorblatt Journal Rückblick" zu finden

  ---------------------------------------------------------------------------------------------------------
  Formel                                                                    Beschreibung
  -------- --------------- --------------------- ------------- ------------ -------------------------------
  Note     VkRückblick()   Verrechnungskreis()   Nr                         Verrechnungskreis-Nummer

  Note     VkRückblick()   Verrechnungskreis()   Bezeichnung                Verrechnungskreis-Bezeichnung

  Note     VkRückblick()   Verrechnungskreis()   Note()        Nr           Notennummer

  Note     VkRückblick()   Verrechnungskreis()   Note()        Datum        Notendatum

  Note     VkRückblick()   Verrechnungskreis()   Note()        Stunden      Anzahl der Stunden

  Note     VkRückblick()   Verrechnungskreis()   Note()        ZuAbschlag   Zu-/Abschläge

  Note     VkRückblick()   Verrechnungskreis()   Note()        Summe        Summe
  ---------------------------------------------------------------------------------------------------------

**Stichwortverzeichnis**

# A {#a .index-heading}

Absatz ausblenden · 13

Abschnittswechsel · 33

Ansichten

Absatzmarke ein-/ausblenden · 21

Arbeitsoberfläche · 10

Dokumentgliederung · 21

Eigenschaftsfenster · 11

Formeltext einblenden · 21

Verborgenen Text ein-/ausblenden · 21, 24

Zweite Dokumentenansicht · 22

Arbeitsoberfläche · 10

Auflistung Musterreports · 57

Aufzählungen · 23

Ausdruck · 55

DG/DN-bezogene Daten · 56

Lohn Sonderoption · 56

Report als PDF ausgeben · 55

# B {#b .index-heading}

Bearbeitungsverhalten · 27

Bedingungsformel · 13, 45

Benannte Formeln · 44

# D {#d .index-heading}

Datumsformat · 26, 44

Dauerformat · 27

Diagramm · 30, 34

Diagramm formatieren · 35

# E {#e .index-heading}

Eigenschaftsfenster · 11

Absatz · 23

Abschnitt · 22

Diagramm · 30, 35

Formel · 25, 43

Tabelle · 50

Tabellen · 28

Tabellenspalten · 29

Tabellenzeile · 28

Tabellenzelle · 30

Tabulator · 24

Text · 25

Eigenschaftsfenster einblenden · 10

Einfügen

Abschnittswechsel · 33

Erledigtsymbol · 35

Geschütztes Leerzeichen · 33

Grafik · 33

Manueller Seitenumbruch · 33

Symbol · 35

Zeilenumbruch · 33

Eingabefelder · 14

Eingabewerte · 14

Erledigtsymbol · 35

Ersetzen · 17

Export · 55

# F {#f .index-heading}

Farbformatvorlagen · 19

farbliche Markierungen Seitenbereich · 11

Fehlerdarstellung · 27, 44

Formatierung

Ausrichtung · 15

Tabelle · 50

Text · 18

Text ausblenden mit Bedingung · 13, 46

Text/Absatz ausblenden · 13

Zahl · 19, 43

Formatvorlagen · 18

Farbformatvorlagen · 19

Textformatvorlagen · 18

Zahlenformatvorlagen · 19, 27

Formel · 33

Formel auswählen · 42

Formel einfügen · 42

Formel suchen · 48

Formelaufruf · 44

Formeldialogfenster · 36

Formelfarbdarstellung · 48

Formelliste · 48

Bilanz · 86

Finanzbuchhaltung · 86

Honorarverrechnung · 101

Lohn · 61

Mahnungen · 98

Formeln · 36

Aufsummierung von Werten · 37

Boolsche Formeln · 39

Datumsformeln · 39

Formatieren · 43

Formel im Text · 36

Funktionstasten · 37

Kommentar · 36

Kontext Info · 36

Modus · 36

Textformeln · 38

Wahr/Falsch Formel · 39

Wenn-Formel · 38

Wert · 36

Zahlenformeln · 37

Formeln mehrmals verwenden · 44

Formelsuche · 48

Formeltabelle · 34, 47

Fußzeile · 19

Aktuelle Seitennummer einfügen · 19

Gesamtseitenzahl einfügen · 19

# G {#g .index-heading}

Geschütztes Leerzeichen · 33

Grafik · 33

# I {#i .index-heading}

Import · 55

# K {#k .index-heading}

Kommentare hinzufügen · 13

Kontextmenü · 52

Absatzbedingungen · 52

Absatzrahmen · 53

Abschnittshintergrund · 52

Kopfzeile · 19

Kurzübersicht · 10

# L {#l .index-heading}

Lineal · 15

Lohnformeln

Dauer · 39, 41

Funktionen · 40

KER Werte einfügen · 42

Maximalwert · 41

Tabellenformeln · 46

Löschen · 55

# M {#m .index-heading}

Mahnvorlagen · 98

Manueller Seitenumbruch · 33

Musterreports · 57

auf Klient übertragen · 7

Bilanz · 57

Finanzbuchhaltung · 58

Honorarverrechnung · 59

installieren · 7

Lohnverrechnung · 59

sichern · 54

# O {#o .index-heading}

Öffnen · 9

# P {#p .index-heading}

Parameter definieren · 42

PDF-Drucker · 55

# R {#r .index-heading}

Report

drucken · 55

Export · 55

Import · 55

löschen · 55

öffnen · 9

sichern · 54

umbenennen · 55

Report bearbeiten · 10

# S {#s .index-heading}

Schnellstartleiste · 12

Seiten berücksichtigen · 22

Seiten überspringen · 23

Seitennummerierung · 22

Seitenumbruch · 12

Shortcuts · 12

Sichern · 54

PDF · 55

Suchen · 17

Symbol · 35

# T {#t .index-heading}

Tabelle · 34, 49

Einfügen · 49

Formatieren · 50

Markieren · 49

Spalten/Zeilen hinzufügen · 50

Summen einfügen · 46, 51

Tabellenrahmen · 50

Zellen trennen · 50

Zellen verbinden · 50

Tabellenhintergrund einfügen · 51

Tabellenspalte

Sortierreihenfolge · 30

Tabstopps · 11, 15

Tabulator · 11, 15

Tabulator mit Füllzeichen · 16, 24

Text ausblenden · 13

Textbearbeitung · 12

# U {#u .index-heading}

Umbenennen · 55

# V {#v .index-heading}

Verborgener Text · 13

# W {#w .index-heading}

Wahrheitswerte · 39

Werkzeuge · 13

# Z {#z .index-heading}

Zahlenformat · 43

Zeilenumbruch · 33

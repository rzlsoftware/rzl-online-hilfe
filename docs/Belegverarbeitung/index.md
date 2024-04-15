<img src=".\img/image2.jpg"
style="width:8.24983in;height:11.66649in" />

> Handbuch & Dokumentation zur RZL FIBU/EA Belegverarbeitung
>
> **Impressum**
>
> Herausgeber  
> RZL Software GmbH  
> Hannesgrub Nord 35, 4911 Tumeltsham
>
> Telefon 07752/252-31  
> E-Mail <Fibu@rzl.at>, <EA@rzl.at>
>
> rzlSoftware.at
>
> Handbuch BELEG
>
> Version A17
>
> © Copyright – Urheberrechtshinweis  
> Alle Inhalte dieses Handbuches, insbesondere Texte, Fotografien und
> Grafiken, sind urheberrechtlich geschützt. Das Urheberrecht liegt,
> soweit nicht ausdrücklich anders gekennzeichnet, bei der RZL Software
> GmbH, Hannesgrub Nord 35, 4911 Tumeltsham.
>
> Dieses Handbuch ist nur für berechtigte Benutzerinnen und Benutzer der
> RZL Programme bestimmt. Die Reproduktion, Vervielfältigung oder
> Verbreitung ist ohne schriftliche Einwilligung des Urhebers nicht
> gestattet. Wer gegen dieses Urheberrecht verstößt, macht sich
> strafbar, wird kostenpflichtig abgemahnt und muss Schadenersatz
> leisten.
>
> Haftung  
> Alle Angaben im Handbuch erfolgen, trotz sorgfältiger Bearbeitung und
> Überprüfung, ohne Gewähr für deren Vollständigkeit, Richtigkeit,
> Aktualität oder Eignung für bestimmte Verwendungszwecke. Eine Haftung
> der RZL Software GmbH sowie ihrer Mitarbeiter ist ausgeschlossen.
>
> Sonstige Hinweise  
> Sämtliche Beispiele, Geschäftsfälle und Personen sind frei erfunden.
>
> © RZL Software GmbH, Tumeltsham

**  
**

# Inhaltsverzeichnis

[1 Vorwort [5](#vorwort)](#vorwort)

[2 Belegverarbeitung im RZL Board
[6](#belegverarbeitung-im-rzl-board)](#belegverarbeitung-im-rzl-board)

[2.1 Vorteile und Nutzen der RZL Belegverarbeitung
[6](#vorteile-und-nutzen-der-rzl-belegverarbeitung)](#vorteile-und-nutzen-der-rzl-belegverarbeitung)

[2.2 Wie kommen Sie als Buchhalter zu den digitalen Belegen?
[6](#wie-kommen-sie-als-buchhalter-zu-den-digitalen-belegen)](#wie-kommen-sie-als-buchhalter-zu-den-digitalen-belegen)

[2.3 Die Digitalisierung der Belege
[6](#die-digitalisierung-der-belege)](#die-digitalisierung-der-belege)

[2.3.1 Scanordner vor der erstmaligen Nutzung einrichten
[6](#scanordner-vor-der-erstmaligen-nutzung-einrichten)](#scanordner-vor-der-erstmaligen-nutzung-einrichten)

[2.3.2 Tipps zum Scanvorgang
[7](#tipps-zum-scanvorgang)](#tipps-zum-scanvorgang)

[2.3.3 Einstellungen zur OCR-Erkennung bei gescannten Belegen
[8](#einstellungen-zur-ocr-erkennung-bei-gescannten-belegen)](#einstellungen-zur-ocr-erkennung-bei-gescannten-belegen)

[2.4 Belegbearbeitung und -aufbereitung
[9](#belegbearbeitung-und--aufbereitung)](#belegbearbeitung-und--aufbereitung)

[2.4.1 Belege hinzufügen [9](#belege-hinzufügen)](#belege-hinzufügen)

[2.4.2 Tipps zur Bedienung der Oberfläche
[10](#tipps-zur-bedienung-der-oberfläche)](#tipps-zur-bedienung-der-oberfläche)

[2.4.3 Belege/Seiten bearbeiten
[13](#belegeseiten-bearbeiten)](#belegeseiten-bearbeiten)

[2.4.4 Belege zusammenführen
[14](#belege-zusammenführen)](#belege-zusammenführen)

[2.4.5 OCR-Erkennung [14](#ocr-erkennung)](#ocr-erkennung)

[2.4.6 Belegansicht öffnen
[15](#belegansicht-öffnen)](#belegansicht-öffnen)

[2.4.7 Belegdaten erkennen
[16](#belegdaten-erkennen)](#belegdaten-erkennen)

[2.4.8 Name/Anschrift über UID-Nummer auslesen
[18](#nameanschrift-über-uid-nummer-auslesen)](#nameanschrift-über-uid-nummer-auslesen)

[2.4.9 Belege ins RZL Board übernehmen
[18](#belege-ins-rzl-board-übernehmen)](#belege-ins-rzl-board-übernehmen)

[2.4.10 Detailbeschreibung aller Funktionen in der Leiste „Belege
hinzufügen“
[19](#detailbeschreibung-aller-funktionen-in-der-leiste-belege-hinzufügen)](#detailbeschreibung-aller-funktionen-in-der-leiste-belege-hinzufügen)

[2.5 Möglichkeiten zum Belegimport
[21](#möglichkeiten-zum-belegimport)](#möglichkeiten-zum-belegimport)

[2.5.1 ebInterface [21](#ebinterface)](#ebinterface)

[2.5.2 Extras / Beleg mit XML importieren
[21](#extras-beleg-mit-xml-importieren)](#extras-beleg-mit-xml-importieren)

[2.5.3 Modul XML Belegdatenimport Schnittstelle
[22](#modul-xml-belegdatenimport-schnittstelle)](#modul-xml-belegdatenimport-schnittstelle)

[2.6 Belegansichten nach dem Hinzufügen der Belege
[22](#belegansichten-nach-dem-hinzufügen-der-belege)](#belegansichten-nach-dem-hinzufügen-der-belege)

[2.6.1 Ungebuchte Belege [23](#ungebuchte-belege)](#ungebuchte-belege)

[2.6.2 Gebuchte Belege [25](#gebuchte-belege)](#gebuchte-belege)

[2.7 Detailbeschreibung Belegdaten und Anlage von Schablonen
[25](#detailbeschreibung-belegdaten-und-anlage-von-schablonen)](#detailbeschreibung-belegdaten-und-anlage-von-schablonen)

[2.7.1 Allgemein [25](#allgemein)](#allgemein)

[2.7.2 Belegdaten-Felder [27](#belegdaten-felder)](#belegdaten-felder)

[2.7.3 Benutzerdefinierte Regel anlegen
[28](#benutzerdefinierte-regel-anlegen)](#benutzerdefinierte-regel-anlegen)

[2.7.4 Regeln für Steuerzeilen (Gegenbuchungen) anlegen
[31](#regeln-für-steuerzeilen-gegenbuchungen-anlegen)](#regeln-für-steuerzeilen-gegenbuchungen-anlegen)

[2.7.5 Allgemeines zu Erkennungsregeln
[33](#allgemeines-zu-erkennungsregeln)](#allgemeines-zu-erkennungsregeln)

[2.7.6 Erkennungsmerkmal zur automatischen Zuordnung der Schablone
[34](#erkennungsmerkmal-zur-automatischen-zuordnung-der-schablone)](#erkennungsmerkmal-zur-automatischen-zuordnung-der-schablone)

[2.8 Anzahl Belege anzeigen
[35](#anzahl-belege-anzeigen)](#anzahl-belege-anzeigen)

[2.9 Grundeinstellungen zur Belegverarbeitung
[36](#grundeinstellungen-zur-belegverarbeitung)](#grundeinstellungen-zur-belegverarbeitung)

[2.10 Zusatzmodul Belegfreigabe
[38](#zusatzmodul-belegfreigabe)](#zusatzmodul-belegfreigabe)

[3 Modul Belege am RZL Klientenportal
[39](#modul-belege-am-rzl-klientenportal)](#modul-belege-am-rzl-klientenportal)

[3.1 Belege an den Steuerberater bzw. in die Zentrale übermitteln
[39](#_Toc116367061)](#_Toc116367061)

[3.1.1 Belegkreise für das Klientenportal aktivieren
[39](#belegkreise-für-das-klientenportal-aktivieren)](#belegkreise-für-das-klientenportal-aktivieren)

[3.1.2 Belege wie vorhanden übermitteln
[39](#belege-wie-vorhanden-übermitteln)](#belege-wie-vorhanden-übermitteln)

[3.1.3 Belege mit dem RZL Scan-Manager übermitteln
[40](#belege-mit-dem-rzl-scan-manager-übermitteln)](#belege-mit-dem-rzl-scan-manager-übermitteln)

[3.1.4 Belege vom Klientenportal ins Modul Belege im RZL Board
übernehmen
[43](#belege-vom-klientenportal-ins-modul-belege-im-rzl-board-übernehmen)](#belege-vom-klientenportal-ins-modul-belege-im-rzl-board-übernehmen)

[3.2 Automatische Belegsynchronisation zur Belegbox am RZL
Klientenportal
[44](#automatische-belegsynchronisation-zur-belegbox-am-rzl-klientenportal)](#automatische-belegsynchronisation-zur-belegbox-am-rzl-klientenportal)

[3.2.1 Belegsynchronisation einrichten
[44](#belegsynchronisation-einrichten)](#belegsynchronisation-einrichten)

[3.2.2 Protokoll Belegsynchronisation
[45](#protokoll-belegsynchronisation)](#protokoll-belegsynchronisation)

[3.2.3 Status Belegsynchronisation
[45](#status-belegsynchronisation)](#status-belegsynchronisation)

[3.3 Gebuchte Belege manuell in die Belegbox des Klienten hochladen
[45](#gebuchte-belege-manuell-in-die-belegbox-des-klienten-hochladen)](#gebuchte-belege-manuell-in-die-belegbox-des-klienten-hochladen)

[3.4 Übersicht Belege zum Abholen
[46](#übersicht-belege-zum-abholen)](#übersicht-belege-zum-abholen)

[4 Verarbeitung in der RZL FIBU/EA-Rechnung
[47](#verarbeitung-in-der-rzl-fibuea-rechnung)](#verarbeitung-in-der-rzl-fibuea-rechnung)

[4.1 Allgemein [47](#allgemein-1)](#allgemein-1)

[4.2 Buchen mit digitalen Belegen
[47](#buchen-mit-digitalen-belegen)](#buchen-mit-digitalen-belegen)

[4.2.1 Aktualisierungsoptionen für Personenkonten
[47](#aktualisierungsoptionen-für-personenkonten)](#aktualisierungsoptionen-für-personenkonten)

[4.2.2 Buchen der Fremdbelegnummer bei Eingangsrechnungen
[47](#buchen-der-fremdbelegnummer-bei-eingangsrechnungen)](#buchen-der-fremdbelegnummer-bei-eingangsrechnungen)

[4.2.3 Belegsverbuchung aus DMS-System (Anzeige alle ungebuchten Belege)
[48](#belegsverbuchung-aus-dms-system-anzeige-alle-ungebuchten-belege)](#belegsverbuchung-aus-dms-system-anzeige-alle-ungebuchten-belege)

[4.2.4 normales Buchen“ mit Belegverarbeitung - Buchungsvorschläge
einzeln
[50](#normales-buchen-mit-belegverarbeitung---buchungsvorschläge-einzeln)](#normales-buchen-mit-belegverarbeitung---buchungsvorschläge-einzeln)

[4.2.5 Unterschiede der Buchungsvarianten
[53](#unterschiede-der-buchungsvarianten)](#unterschiede-der-buchungsvarianten)

[4.2.6 Buchen von Belegen mit Fremdwährung
[53](#buchen-von-belegen-mit-fremdwährung)](#buchen-von-belegen-mit-fremdwährung)

[4.2.7 Endkontrolle der gebuchten Belege
[54](#endkontrolle-der-gebuchten-belege)](#endkontrolle-der-gebuchten-belege)

[4.3 Buchen eines EA-Rechners mit Belegverarbeitung
[55](#buchen-eines-ea-rechners-mit-belegverarbeitung)](#buchen-eines-ea-rechners-mit-belegverarbeitung)

[4.4 Belege im Bereich *Ungebuchte Belege* nachträglich einer Buchung
zuordnen
[56](#belege-im-bereich-ungebuchte-belege-nachträglich-einer-buchung-zuordnen)](#belege-im-bereich-ungebuchte-belege-nachträglich-einer-buchung-zuordnen)

[5 Gebuchte Belege aufrufen
[58](#gebuchte-belege-aufrufen)](#gebuchte-belege-aufrufen)

[5.1 Aufruf eines einzelnen Belegs in der RZL Fibu / EA-Rechnung
[58](#aufruf-eines-einzelnen-belegs-in-der-rzl-fibu-ea-rechnung)](#aufruf-eines-einzelnen-belegs-in-der-rzl-fibu-ea-rechnung)

[5.2 Aufruf mehrerer Belege im RZL Board (Dokumenten-Management-System)
[60](#aufruf-mehrerer-belege-im-rzl-board-dokumenten-management-system)](#aufruf-mehrerer-belege-im-rzl-board-dokumenten-management-system)

[5.2.1 Filtern einzelner Spalten:
[60](#filtern-einzelner-spalten)](#filtern-einzelner-spalten)

[5.2.2 Nach Spalten sortieren:
[60](#nach-spalten-sortieren)](#nach-spalten-sortieren)

[5.2.3 Dateien mit strukturiertem Dateinamen exportieren:
[60](#dateien-mit-strukturiertem-dateinamen-exportieren)](#dateien-mit-strukturiertem-dateinamen-exportieren)

# Vorwort

> Nachfolgend erhalten Sie eine Beschreibung der RZL
> FIBU/EA-Belegverarbeitung.
>
> Die Belege stehen entweder schon digital bereit oder werden vom mit
> Hilfe eines handelsüblichen Scanners in elektronische Form gebracht.
>
> Mit Hilfe der RZL Belegdatenerkennung werden die Belege innerhalb des
> Moduls Belege im RZL Board und der manuellen Anlage von
> Beleg-Schablonen durchsucht und bestimmte Daten (Belegdatum,
> Belegnummer bei AR/Fremdbelegnummer bei ER, UID-Nummer, Gesamtbetrag,
> Kundennummer, Name, …) ausgelesen (Kapitel 2).
>
> Die Vorgehensweise für das Zusammenspiel zwischen Steuerberater und
> Klient über das web-basierte RZL Klientenportal entnehmen Sie bitte
> dem Kapitel 3.
>
> Im Kapitel 4 Verarbeitung in der RZL FIBU/EA-Rechnung erhalten Sie
> eine Beschreibung der Vorgehensweise innerhalb der RZL
> Finanzbuchhaltung und EA-Rechnung.



# Modul Belege am RZL Klientenportal

Falls in der Steuerberatungs-Kanzlei bzw. bei Firmen für Außenstellen
das web-basierte RZL Klientenportal eingesetzt wird, können die
Mandanten/Mitarbeiter in der Außenstelle selbst – mit Hilfe des optional
zum Klientenportal verfügbaren *Zusatzmoduls „Belege“* – am
Klientenportal nicht nur Dokumente zur Verfügung stellen, sondern auch
die Belege der Buchhaltung bzw. Einnahmen-Ausgaben-Rechnung hochladen
und an die Kanzlei/Zentrale versenden.

Eine allgemeine Beschreibung des RZL-Klientenportals erhalten Sie
innerhalb der RZL-Programme im Programmteil *Hilfe / Handbücher /
Klienten-Portal Kanzlei/Klient*.

Für die Bereitstellung von Belegen über das RZL Klientenportal gehen Sie
bitte wie folgt vor:

*Bitte beachten Sie, dass dafür das Klientenportal Modul „Belege“
lizenziert sein muss!*

## Belege an den Steuerberater bzw. in die Zentrale übermitteln

### Belegkreise für das Klientenportal aktivieren

In den Stammdaten des jeweiligen Klienten im Bereich *Belegverarbeitung
/* *Allgemeines* werden die in der FIBU / EA angelegten Belegkreise
angezeigt. Sie können nun hier steuern, welche Belegkreise der Klient
bzw. die Außenstelle am Klientenportal auswählen kann.

<img src=".\img/image65.png"
style="width:3.14961in;height:3.35324in" />

### Belege wie vorhanden übermitteln

Mit der Funktion *Belegbox / Belege übermitteln* können Sie Belege auf
das Klientenportal zur Bereitstellung an den Steuerberater/Zentrale
hochladen. Bei dieser Variante werden die Dateien wie vorhanden
hochgeladen. Falls z.B. der Klient 10 Rechnungen gescannt hat und der
Scanner daraus eine Datei erstellt hat, muss die Auftrennung und
Aufbereitung der Belege in der Kanzlei/Zentrale gemacht werden.

Wählen Sie nun den richtigen Belegkreis aus. Im Feld Datei(en) können
Sie über *Durchsuchen* beliebig viele Dateien von Ihrer Festplatte oder
Ihrem Netzwerk auswählen und hochladen.

<img src=".\img/image66.png"
style="width:5.74502in;height:2.65625in" />

Nach dem Hochladen erhalten Sie eine Bestätigung, wie viele Dateien Sie
hochgeladen haben. Unterhalb werden die Dateien mit dem Dateinamen, der
Kategorie und dem Bereitstellungsdatum angezeigt.

Folgende Möglichkeiten haben Sie nach dem Hochladen:

-   Mit einem Klick auf den Dateinamen können Sie die Datei öffnen.

-   Mit einem Klick auf das grüne Symbol wird die Datei heruntergeladen

-   Mit dem roten X kann die Datei wieder vom Klientenportal gelöscht
    werden.

Die Übermittlung über das RZL Klientenportal bietet folgende Vorteile:

-   SSL verschlüsselte Übertragung der Belege.

-   Keine Beschränkung der Dateigrößen im Gegensatz zur Übermittlung per
    Mail.

-   Abholung der Belege direkt im Modul Belege an der richtigen Stelle.

-   Der Klient bzw. die Außenstelle kann die gescannten Belege bereits
    aufbereiten (Seiten zusammenfassen, Leerseiten löschen, Belegkreis
    zuord­nen, usw.).

### Belege mit dem RZL Scan-Manager übermitteln

Falls Ihr Klient die Belege vor dem Hochladen noch aufbereiten möchte
(Seiten trennen, zusammenfügen, drehen, löschen usw.), kann der RZL
Scan-Manager verwendet werden (*Belegbox / Belegscanmanager* *starten*).

<img src=".\img/image67.png"
style="width:5.90551in;height:5.18149in" />

#### Eintragung der Verbindungseinstellungen

Damit Belege über den RZL Scan-Manager hochgeladen werden können müssen
Sie als ersten Schritt nach Anwahl der Schaltfläche *Einstellungen* die
entsprechenden Eintragungen vornehmen.

<img src=".\img/image68.png"
style="width:4.72441in;height:2.18777in" />

Im Feld *Server* tragen Sie die Adresse ein, wie im Handbuch
Klientenportal *(Hilfe / Handbuch / Klienten-Portal Klient)* Kapitel
Start beschrieben. In den Feldern *Benutzer* und *Passwort* muss Ihr
„normaler“ Log-In – mit dem Sie sich am RZL Klientenportal anmelden –
eingetragen werden.

Wenn Sie nicht direkt im Scanmanager scannen, sondern z.B. mit einem
Netzwerk-Scanner können Sie im Scanmanager hinterlegen, auf welchen
Scan-Ordner zugegriffen werden soll.

Die Funktion *Benutzername als Dateianfang* fügt bei den übermittelten
Dateien den Benutzernamen an den Anfang des Dateinamens (z.B. wird aus
einer Datei mit dem Namen „Beleg Huber“ der Name
„50.rzl\_Beleg\_Huber“).

#### Belege scannen und hochladen

Grundsätzlich besteht die Möglichkeit, die Belege mit einem
angeschlossenen Scanner direkt zu scannen und dann hochzuladen oder
bereits gescannte Belege aus einem Ordner auszuwählen und nur
hochzuladen.

Um Belege jetzt zu scannen klicken wählen Sie links oben den gewünschten
Scanner aus. Angezeigt werden nur Geräte, für welche ein passender
Treiber installiert ist.

Nach Auswahl und Klick auf den gewünschten Scanner wird ein Vordialog
angezeigt, wo der Belegkreis (und ev. der Klient) ausgewählt werden
muss.

<img src=".\img/image69.png"
style="width:2.3622in;height:2.09974in" />

Anschließend wird dann der Dialog des Scanner-Herstellers aufgerufen und
Sie können die Belege einscannen.

<img src=".\img/image70.png"
style="width:5.90551in;height:3.42954in" />

In diesem Beispiel wurden 5 Seiten eingescannt. Mit der Funktion
*Belege* auftrennen können Sie die Seiten in Einzelseiten trennen und
anschließend wieder eventuelle mehrseitige Belege wieder zusammenfügen.
Nutzen Sie dazu entweder die Maus per Drag & Drop oder die rechte
Maustaste um markierte Seiten zusammenzufügen. Zusätzlich können die
Seiten mit der rechten Maustaste gedreht werden.

Wurden Belege beim Scannen einer falschen Belegart zugeordnet können in
diesem Dialog Belege auch in eine andere Belegart gezogen werden.

Weitere Funktionen mit der rechten Maustaste sind:

-   90° rechts oder links, 180° drehen

-   Löschen

-   Seiten zusammenfügen

-   Seiten auftrennen

-   Löschen

-   Beleg auftrennen

-   Beleg ins Dateisystem exportieren

-   Alles markieren

-   Leere Seiten markieren

-   Seite öffnen

-   Datei öffnen

-   Änderungen zurücksetzen

Damit die Belege an Ihre Steuerberatungs-Kanzlei übermittelt werden,
müssen Sie die Schaltfläche *Alle hochladen* oder *Auswahl hochladen*
anwählen.

Nach dem Hochladen kommt eine Bestätigungsmeldung, dass die Belege auf
das Klientenportal hochgeladen wurden.

#### Bereits vorhandene Belege in den RZL Scan-Manager einfügen

Wenn die Belege bereits als Dateien auf der Festplatte oder im Netzwerk
abgespeichert sind, also nicht mehr eingescannt werden müssen, öffnen
Sie den Ordner, in dem die Belege abgespeichert sind.

Ziehen Sie nun mit Hilfe der Maus die gewünschten Belege per Drag & Drop
in den RZL Scan-Manager auf den gewünschten Belegkreis.

### Belege vom Klientenportal ins Modul Belege im RZL Board übernehmen

In der RZL Belegverarbeitung können Sie nach dem Öffnen des jeweiligen
Klienten im Bereich *BELEGE* mit dem Button *Belege Klientenportal* die
Belege beim entsprechenden Klienten aufrufen. Im Symbol wird Anzahl der
Belege angezeigt, die bei diesem Klienten vom Klientenportal abgeholt
werden können.

> <img src=".\img/image71.png"
> style="width:4.72296in;height:1.20835in" />

Die Zuordnung zum Klienten und zum Belegkreis ist hier nicht mehr
notwendig, da dies bereits am Klientenportal erledigt wurde. Die
Texterkennung von Klientenportal-Belegen wird wie bei Scanordnern
ebenfalls im Hintergrund durchgeführt (außer Sie haben diese
Einstellungen in den Stammdaten der Texterkennung deaktiviert).

Die weitere Aufbereitung und Bearbeitung erfolgt ident zu einem
„normalen“ Belegverarbeitung mit Scanordner.

Mit der Übernahme der Belege ins Modul Belege werden diese vom
Klientenportal wieder gelöscht.

Beim Löschen eines Beleges in dieser Ansicht wird der Beleg in den
*Belege Papierkorb* abgelegt.

## Automatische Belegsynchronisation zur Belegbox am RZL Klientenportal

### Belegsynchronisation einrichten

Es besteht die Möglichkeit, digitale Belege automatisiert – über die
digitale Belegbox des RZL Klientenportals – dem Klienten Online inkl.
Belegdaten bzw. Buchungsdetails bereitzustellen. Somit hat Ihr Klient
jederzeit Online Zugriff auf die gebuchten Belege.

Zusätzlich kann die Belegsynchronisation auch genutzt werden, um Belege
zwischen verschiedenen RZL Installationen (z.B. Steuerberater und
Klient) zu synchronisieren. Somit entfällt auch der manuelle Upload von
Belegen in die Belegbox am Klientenportal.

Folgende Schritte sind zur Einrichtung notwendig:

-   Einmalige Definition eines *Service-Account-Passwortes* am RZL
    Klientenportal im Bereich *Stammdaten / Portal / Sonstige
    Einstellungen.* Dieses kanzleiweite Passwort dient ausschließlich
    der Synchronisation von Belegen (und Klienten-Stammdaten).

-   Hinterlegung dieses Service-Account-Passwortes im RZL Board im
    Bereich *STAMM / Einstellungen / Klientenportal Synchronisation.*

-   Aktivierung der Checkbox *Belegsynchronisation aktivieren* pro
    Klient im Bereich *STAMM / Klientenportal.* Somit werden die Belege
    automatisch in die Belegbox des Klientenportals geladen und Online
    bereitgestellt.

-   Falls die Belege mit einer 2. Installation synchronisiert werden
    sollen (wenn der Klient mit RZL FIBU und Belegverarbeitung
    arbeitet), muss auf Klientenseite ebenfalls die Belegsynchronisation
    aktiviert werden mit dem zusätzlichen Hakerl bei *Fremdes RZL
    Klientenportal verwenden.* Hier muss dann unter *Zugang fremdes
    Klientenportal* der Klientenportal-Benutzer hinterlegt werden.

Die Synchronisation der Belege wird anschließend mit aktiviert Option
*Automatisch synchronisieren* im Hintergrund alle 10 Minuten ausgeführt
bzw. kann im RZL Board im Bereich *Belege* bei den Beleglisten über die
Funktion *Belege synchronisieren* jederzeit manuell angestoßen werden.

Deaktiviert man die Checkbox *Automatisches synchronisieren* muss die
Belegsynchronisation manuell angestoßen werden. Entweder direkt beim
Klienten in einer der Beleglisten über die Schaltfläche *Belege
synchronisieren* oder für alle Klienten in einer klientenübergreifenden
Belegliste.

<img src=".\img/image72.png"
style="width:4.75173in;height:1.71666in" />

<img src=".\img/image73.png"
style="width:5.84098in;height:1.37218in" />

Hinweis

Nach dem Hereinspielen eines Klienten wird automatisch der Abgleich
zwischen FIBU und Modul Belege lt. nachfolgendem Punkt *Repairfunktion
in der Finanzbuchhaltung* durchgeführt – die Belege können somit bei
beiden Installationen aufgerufen werden.

### Protokoll Belegsynchronisation

In der Ansicht *Extras / Protokoll Belegsynchronisation* finden Sie eine
Aufstellung der Hoch- bzw. Heruntergeladenen Belege über die
Belegsynchronisation.

### Status Belegsynchronisation

<img src=".\img/image74.png"
style="width:3.83285in;height:0.92697in" />

Im RZL Board finden Sie ganz rechts ein kleines Symbol mit dem Status
der Belegsynchronisation. Ein grünes Symbol zeigt an, dass die letzte
Hintergrund-Synchronisation ordnungsgemäß durchgelaufen ist. Ein rotes
Symbol deutet auf zumindest ein Problem bei einem Klienten hin. Klicken
Sie einfach auf den Begriff *Belegsynchronisation*, um das Protokoll zu
öffnen.

Weitere Details zur Belegsynchronisation finden Sie in unserer
Kurzanleitung (Menüpunkt *Hilfe / Kurzanleitungen* direkt im jeweiligen
RZL Programm).

## Gebuchte Belege manuell in die Belegbox des Klienten hochladen

Als Alternative zur automatischen Belegsynchronisation gibt es auch die
Möglichkeit, die Belege manuell in die Belegbox des Klientenportals
**inkl. Buchungsinfos** hochzuladen.

Im Modul Belege werden dazu beim Klienten im Bereich *Gebuchte Belege*
die gewünschten Belege markiert und mit der Funktion *Belege zum
Klientenportal hochladen* (im Ribbon oder mit der rechten Maustaste) am
Klientenportal bereitgestellt.

Tipp

Sortieren Sie die gebuchten Belege nach dem Importdatum, somit wissen
Sie genau, welche Belege zuletzt importiert wurden. Zusätzlich haben Sie
in der Spalte Hochgeladen die Information, welche Belege bereits auf das
Klientenportal übertragen wurden.

Die Klienten/Außenstelle können auf diese digitale Belegbox jederzeit
bequem und ortsunabhängig über Internet (auch für mobile Geräte
optimiert) zugreifen (*Belegbox / gebuchte Belege)* und zum Aufrufen und
Herunterladen von Belegen nutzen.

<img src=".\img/image75.png"
style="width:6.14097in;height:4.20028in" />

Die Belegliste kann über einfache Such-/Gruppier- und Filterfunktionen
auf die gewünschten Belege/den gewünschten Beleg eingeschränkt werden.

## Übersicht Belege zum Abholen

Ohne geöffnetem Klienten finden Sie im Bereich *BELEGE / Belege / Belege
zum Abholen* eine Übersicht aller Klienten mit der Anzahl der noch
abzuholenden Belege vom Klientenportal oder von Finmatics:

<img src=".\img/image76.png"
style="width:6.3242in;height:1.99049in" />

# Verarbeitung in der RZL FIBU/EA-Rechnung

## Allgemein

Durch Lizenzierung der *RZL FIBU/EA Belegverarbeitung* oder alternativ
durch Lizenzierung und Anpassung der *RZL Schnittstelle für die
Belegverarbeitung über Fremd-DMS* (Details auf Anfrage) besteht die
Möglichkeit, gescannte Belege mit Buchungen in den RZL Programmen zu
verknüpfen.

Innerhalb der Buchhaltung bzw. EA-Rechnung können Belege mit oder ohne
Kontierungsvorschlag (bzw. nach gesonderter Vereinbarung auch aus einem
von RZL autorisierten Fremd-Dokumentmanagement-System in die RZL FIBU/EA
– Details auf Anfrage) importiert werden.

Voraussetzung für die Belegverbuchung ist somit die vorherige Übernahme
der Belege in das Modul Belege im RZL Board (bzw. in das jeweilige
autorisierte Fremd-DMS). Die Belege werden mit der jeweiligen Buchung
verknüpft.

## Buchen mit digitalen Belegen

### Aktualisierungsoptionen für Personenkonten

Für den Buchungsvorschlag bei Eingangs- und Ausgangsrechnungen ist die
UID-Nr. bzw. die Kundennummer in den Stammdaten der Kreditoren bzw.
Debitoren sehr wichtig. Damit diese Daten nicht manuell eingepflegt
werden müssen, können Sie pro Klient die automatische Aktualisierung der
Kontenstammdaten aktivieren.

Öffnen Sie dazu in der FIBU den Menüpunkt *Stamm / Konten/
Aktualisierungsoptionen*. Hier können Sie im Bereich *nach DMS-Buchung*
aktivieren, dass nach dem Buchen von digitalen Belegen die Daten (IBAN,
Kundennummer, UID) vom Beleg in die Kontenstammdaten übernommen werden
sollen.

<img src=".\img/image77.png"
style="width:4.72441in;height:1.82049in" />

### Buchen der Fremdbelegnummer bei Eingangsrechnungen

Standardmäßig wird bei ER die Belegnummer als Fremdbelegnummer
ausgelesen und auch in diesem Feld in der Buchungszeile vorgeschlagen.
Somit können Sie das Feld Belegnummer für die laufende Nummerierung
verwenden.

Wenn Sie stattdessen *bei der Belegverarbeitung* die *Fremdbelegnummer
als Belegnummer buchen* möchten, können Sie in den Klienten-Stammdaten
im RZL Board im Bereich *Belegverarbeitung / Allgemeines* pro Klient
diese Option aktivieren.

<img src=".\img/image78.png"
style="width:6.22047in;height:1.95968in" />

### Belegsverbuchung aus DMS-System (Anzeige alle ungebuchten Belege)

Im Rahmen dieser Variante der Belegverbuchung werden im Buchungsdialog
sofort alle Buchungsvorschläge für alle ungebuchten Belege angezeigt und
der Beleg der markierten Buchung kann mit Hilfe der *F2-Taste*
aufgerufen werden. Es erfolgt kein Aufruf einer eigenen Liste mit den
Belegen.

Über *Buchen / Belegsverbuchung aus DMS-System* kommen Sie in den
Buchungsvordialog.

<img src=".\img/image79.png"
style="width:5.11811in;height:3.601in" />

Die Buchungen werden mit der Sortierung *Standard* in der Reihenfolge
angezeigt, wie die Belege ins Modul Belege übernommen wurden (nach
Importdatum). Alternativ können folgende andere Sortierkriterien
ausgewählt werden (z.B. nach Belegdatum, Belegnummer, …)

Über *Verbuchungsregel* verwenden werden die Buchungen auf Basis der
Verbuchungsregeln vorgeschlagen. Voraussetzung ist, dass das Programm
das Personenkonto auf Basis der übergebenen UID-Nummer, Kundennummer
oder dem Namen inkl. Adresse) aus dem DMS-System ermitteln kann.

Über *Druck Übersicht* können Sie sich eine Übersicht über die zu
verbuchenden Belege ausdrucken.

Über *Weiter* gelangen Sie in den Buchungsdialog. Hier wird für jeden
Beleg mit den, über die Belegdatenerkennung ausgelesenen, Daten ein
Buchungsvorschlag erstellt. Die Zuordnung zum Kreditor/Debitor erfolgt
anhand der ausgelesenen UID-Nummer, der Kundenummer oder dem Namen inkl.
Adresse. Wenn eine Verbuchungsregel angelegt ist, wird auch das
Gegenkonto vorgeschlagen. Ohne Verbuchungsregel schlägt das Programm das
Gegenkonto der letzten Buchung vor.

Fehlende Daten (wie z.B. Kontonummern) müssen noch ergänzt werden. Diese
Zeilen werden mit einem roten Rufzeichen dargestellt.

Mit der rechten Maustaste finden Sie pro Zeile folgende Optionen:  
  
<img src=".\img/image80.png"
style="width:5.51181in;height:2.85041in" />

-   Anzeige Beleg (F2)

Belegfenster wird eingeblendet. Je nach markierter Buchungszeile wird
der dazugehörige Beleg angezeigt. Dieses Fenster kann geöffnet bleiben.

-   Splitbuchung bearbeiten (F7)

Wenn über die Belegdaten mittels Steuerzeilen schon eine Splitbuchung
vorgeschlagen wird, kann diese bearbeitet und verändert werden.

-   Auf Splitbuchung ändern (F8)

Eine Gegenbuchung kann in ein Splitbuchung umgewandelt werden. Wenn Sie
eine Buchungszeile mit Hilfe einer Splitbuchung aufteilen, wird die
Original-Buchung grau dargestellt und die Zeilen der Splitbuchung werden
mit einem Sternchen (**1**) gekennzeichnet.

<img src=".\img/image81.png"
style="width:6.22047in;height:1.03831in" />

**1**

-   Durchgeführte Änderung rückgängig machen (F9)

Eine Aufteilung in eine Splitbuchung kann wieder rückgängig gemacht
werden.

-   Verbuchungsregel Personenkonten ändern/anlegen

Auf einem Personenkonto kann eine einfache Verbuchungsregel für dieses
Konto hinterlegt werden. Wenn dann das Personenkonto gefunden wird, wird
die Buchung aufgrund der Verbuchungsregel vorgeschlagen.

-   Verbuchungsregel Gegenbuchen ändern/anlegen

Siehe Kapitel *Regeln für Steuerzeilen (Gegenbuchungen) anlegen*

-   Zeilen bis zum Ende deaktivieren (F12)

Buchungszeilen ab der aktuellen Zeile können für die Verbuchung
deaktiviert werden. Diese Belege bleiben somit als ungebucht erhalten
und werden nächstes Mal wieder vorgeschlagen.

Nach vollständiger Kontierung aller Zeilen können Sie durch Anwahl der
Schaltfläche *Verbuchen* – im Verarbeitungsdialog ganz unten – die
Zeilen tatsächlich buchen (bis dahin kann jede Zeile beliebig abgeändert
werden).

Hinweis

Die Durchbestätigung jeder einzelnen Buchungszeile ist in dieser
Variante nicht notwendig. Sofern der Buchungsvorschlag komplett ist,
können die Buchungen sofort verbucht werden. Die Buchungen werden nicht
in einen Stapel gelegt sondern sind sofort gebucht und somit
finalisiert.

### 

### normales Buchen“ mit Belegverarbeitung - Buchungsvorschläge einzeln

Innerhalb des *normalen Buchens (Buchen oder Stapelbuchen)* können Sie
ebenfalls die Belegverbuchung mit Buchungsvorschlag nützen. Hier werden
nicht alle Buchungssätze sofort im Dialog angezeigt, sondern die
Buchungen werden einzeln vorgeschlagen und ergänzt/bestätigt. Eine Liste
mit den noch nicht gebuchten Belegen wird zusätzlich zum Buchungsdialog
aufgerufen.

Hinweis

Bei nur einem Bildschirm: Pinnen Sie sich das FIBU-Fenster an die linke
Seite des Bildschirms (bevor Sie ins Buchen einsteigen) und das
Belegfenster an die rechte Seite. Somit haben Sie jederzeit alles im
Blick.

<img src=".\img/image82.png"
style="width:4.72441in;height:1.21719in" />

**2**

**1**

Wenn Sie Belege buchen möchten, aktivieren Sie bitte das Feld
*DMS-Belege* (**1**). Sie können nachfolgend beim Buchen im
***Datumsfeld* mit der *F6-Taste*** den Buchungsvorschlag aufrufen und
die beim Beleg ausgelesenen Werte werden in die Buchungszeile
eingetragen.

Die Aktivierung des Feldes automatisch (**2**) bedeutet, dass Sie nur
beim 1. Beleg die *F6-Taste* anwählen müssen und für die nachfolgenden
Belege der Buchungsvorschlag automatisch eingetragen wird. Wenn Sie das
Feld *automatisch* (**2**) deaktivieren, müssen Sie die *F6-Taste* im
*Datumsfeld* für den Buchungsvorschlag bei jedem Beleg einzeln anwählen.

Hinweis

Wird während dem Buchen manuell ein anderer Beleg markiert müssen Sie
die Funktion F6 im Datumsfeld nochmals ausführen.

<img src=".\img/image83.png"
style="width:6.29921in;height:3.41218in" />

Der aktuell in der Belegliste markierte Beleg wird beim Erfassen einer
Buchung dem Buchungssatz hinterlegt, als gebucht markiert und in der
Belegverarbeitung im RZL Board die Buchungsdaten gespeichert.

Damit die erkannten Belegdaten vorgeschlagen werden, muss bei der ersten
Buchung im Feld *Datum* der **Buchungsvorschlag** **mit der F6-Taste**
generiert werden. Die von der Belegdatenerkennung ausgelesenen Werte
werden somit automatisch in die Buchungszeile übernommen, können
anschließend jederzeit abgeändert bzw. ergänzt werden.

Das Personenkonto wird auf Basis der ausgelesenen UID-Nummer,
Kundenummer oder des IBANs ermittelt. Voraussetzung dafür ist, dass am
Konto die Daten hinterlegt sind. Wenn ein Personenkonto ermittelt wurde,
wird das zuletzt verwendete Gegenkonto des Personenkontos als Gegenkonto
verwendet.

Wenn der Buchungssatz dann abgeschlossen ist (im Buchungsdialog oben
aufscheint) wird der verknüpfte Beleg aus der Liste der *ungebuchten*
Belege herausgelöscht und als gebucht markiert. Anschließend wird
automatisch der nächste Beleg markiert und die Werte wieder in die
Buchungszeile eingetragen (mit der Funktion automatisch im Vordialog).

Hinweis

Sie haben direkt im Buchungsdialog beim Belegfenster immer noch die
Möglichkeit, neue Regeln anzulegen oder die bestehende Schablone bzw.
Regel anzupassen. Klappen Sie dazu einfach die *Belegdaten* ganz rechts
auf.

#### Zusätzliche Funktionen im Belegfenster beim Buchen

<img src=".\img/image84.png"
style="width:6.30907in;height:0.85236in" />

-   Liste aktualisieren

Die Beleg-Einträge in der Liste werden neu geladen.

-   Beleg löschen

Beleg wird aus der Ansicht der ungebuchten Belege in den Papierkorb
verschoben

-   In Scanordner zurücksetzen

Beleg wird in den gewünschten Scanordner zurückgesetzt und aus den
ungebuchten Belegen gelöscht.

-   Neuen Beleg importieren

Ein Link zum RZL Board um neue Belege hinzuzufügen.

-   Belegliste sortieren

Sie können durch Rechtsklick auf eine Spalte die Belegliste nach jeder
beliebigen Spalte sortieren. Mit der Umschalt-Taste kann noch ein
zweites Feld zur Sortierung hinterlegt werden, wenn im ersten sortieren
Feld Belege mit gleichem Wert vorhanden sind. Die Spalten können je nach
Bedarf mit der rechten Maustaste ein- oder ausgeblendet werden.

-   Belegliste filtern

Sie können jede Spalte mit dem blauen Filtersymbol in der Überschrift
filtern.  
Unterhalb der Belegliste finden Sie initial immer den aktuell
hinterlegten Filter auf Basis der Einstellungen im Buchungsvordialog:

<img src=".\img/image85.png"
style="width:6.29921in;height:0.20733in" />

Dieser Filter kann mit der Checkbox links deaktiviert werden, um alle
vorhandenen, ungebuchten Belege anzuzeigen (unabhängig von Datum und
Belegkreis). Mit dem x-Symbol wird der Filter für den aktuellen
Buchungsvorgang zur Gänze entfernt.

-   Belegdaten speichern

Werden Belegdaten verändert, können diese hier gespeichert werden.

-   Seiten bearbeiten

Diese Funktion kann nicht nur in der Ansicht der ungebuchten Belege,
sondern auch direkt beim Buchen in der Belegliste genutzt werden (z.B.
um weitere Seiten hinzuzufügen).

-   Belege per Drag&Drop hinzufügen

Sie können bspw. Belegdateien aus dem Windows-Explorer per Drag&Drop in
die Belegliste ziehen. Entweder direkt in die Liste der Belege oder in
das extra dafür vorgesehene Feld (Ziehen Sie Belege hierher oder in die
Belegliste um sie zur Belegverarbeitung hinzuzufügen.)

#### Zusätzliche Buchungsfunktionen

**Im Textfeld einer Buchung:**

-   DMS-Beleg weiter Buchen (Umschalt + F8)

> Mit dieser Funktion kann ein weiterer Buchungssatz zum selben Beleg
> erfasst werden. Die Funktion kann beliebig oft wiederholt werden. Der
> letzte Buchungssatz muss dann ohne diese Funktion abgeschlossen
> werden, damit der Beleg in der Belegverarbeitung von der Liste der
> ungebuchten und die Liste der gebuchten Belege verschoben wird.

-   DMS-Verbindung aufheben (Umschalt + F7)

> Der Buchungssatz wird abgeschlossen, ohne dass ein digitaler Beleg
> dieser Buchung angehängt wird.

**In den Stammdaten eines Personenkontos:**

-   Kein Buchungsvorschlag

> Wenn das Personenkonto gefunden wird, wird mit dieser Option nie ein
> Gegenkonto vorgeschlagen.

-   Verbuchungsregel

> Wenn das Personenkonto gefunden wird, wird die Buchung aufgrund der
> Verbuchungsregel vorgeschlagen.

### Unterschiede der Buchungsvarianten

Vorteile Variante 1 („normaler“ Buchungsdialog):

-   Buchen im Stapel

-   Mehrere Buchungen zu einem Beleg

-   Beleg löschen während dem Buchen direkt in der FIBU / EA

Vorteile Variante 2 (Belegverarbeitung aus DMS-System):

-   Für alle verfügbaren, ungebuchten Belege wird sofort ein
    Buchungsvorschlag angezeigt. Somit hat man eine Übersicht über die
    Qualität der Buchungsvorschläge.

-   Bereits vollständige Buchungsvorschläge müssen nicht mehr
    „durchgeklickt“ werden.

-   Splitbuchungen werden vorgeschlagen: Sind beim Beleg mehrere
    Steuerzeilen vorhanden, werden diese nur bei dieser Buchungsvariante
    verwendet um eine Splitbuchung vorzuschlagen.

### Buchen von Belegen mit Fremdwährung

Bei einer Belegdatenerkennung werden, wenn ein 3-stelliger Währungscode
am Beleg vorhanden ist, Fremdwährungen bei Beträgen ausgelesen. Diese
Informationen werden in weiterer Folge an die FIBU übergeben und beim
Buchungsvorschlag entsprechend verarbeitet. D.h. wenn ein Beleg Beträge
in USD liefert und in der FIBU auf ein Konto in USD gebucht wird, wird
der Betrag im Fremdwährungsfeld vorgeschlagen.

Über den Kurs kann dann der Betrag in EUR berechnet werden oder der
Betrag wird direkt im EUR Feld eingegeben. Eine händische Eingabe des
Kurses ist jederzeit möglich.

<img src=".\img/image86.jpeg"
style="width:3.83333in;height:2.6374in" />

Der FW-Wert wird nur dann vorgeschlagen, wenn eines der beiden Konten in
der entsprechenden Währung geführt wird. Ansonsten bleibt das FW-Feld
leer und auch im EUR-Feld wird nichts eingetragen.

### Endkontrolle der gebuchten Belege

Nach Verbuchung aller Belege sollte im Modul Belege im RZL Board bei den
*ungebuchten Belegen* des Klienten kontrolliert werden, ob wirklich alle
Belege tatsächlich in der FIBU gebucht wurden. Es kann beispielsweise
passieren, dass aufgrund eines falsch ausgelesenen Beleg­datums Belege
nicht zum Buchen vorgeschlagen wurden.

In diesem Fall muss das Belegdatum manuell korrigiert werden, damit der
Beleg beim Buchen vorgeschlagen wird. Bei Buchungsvariante 1 kann
alternativ der Filter entfernt werden, damit alle Belege angezeigt
werden.

## Buchen eines EA-Rechners mit Belegverarbeitung

Auch ein EA-Rechner kann mit der RZL Belegverarbeitung kombiniert
werden, sodass die Belege z.B. bei den Bankbuchungen angehängt sind.
Folgende Vorgehensweise empfehlen wir zur optimalen Verarbeitung eines
Einnahmen/Ausgaben-Rechners mit der RZL Belegverarbeitung:

Beim Buchen eines CAMT-Kontoauszugs gibt es die Möglichkeit, Belege
automatisiert den Bankbuchungen aufgrund verschiedener Kriterien
zuordnen zu lassen.

Damit diese automatische Zuordnung durchgeführt wird, muss die Option
*Beleg automatisch zuordnen* in den Stammdaten des Bankkontos im
Registerblatt *Retourdaten 2* aktiviert werden.

<img src=".\img/image87.png"
style="width:4.72441in;height:3.7691in" />

Beim Einstieg in den Retourdatendialog muss die Option *DMS-Belege
zuordnen* aktiviert werden.

Die automatische Zuordnung wird mittels folgender Möglichkeiten in
dieser Reihenfolge versucht:

-   Der **Betrag** stimmt zwischen Belegdaten und Bankbuchung überein
    (bzw. mit eingestellter maximaler Abweichung, z.B. für Skonti) und
    die ausgelesene **Zahlungsreferenz** am Beleg entspricht der
    **Zahlungsreferenz** der Bankbuchung.

-   Der **Betrag** stimmt überein (bzw. mit eingestellter maximaler
    Abweichung, z.B. für Skonti) und der ausgelesene **IBAN** am Beleg
    entspricht dem **IBAN** der Bankbuchung.

-   Der **Betrag** stimmt überein (bzw. mit eingestellter maximaler
    Abweichung, z.B. für Skonti) und die ausgelesene **Belegnummer** am
    Beleg entspricht der **Zahlungsreferenz** der Bankbuchung.

-   Der **Betrag** stimmt überein (bzw. mit eingestellter maximaler
    Abweichung, z.B. für Skonti) und die ausgelesene **Belegnummer** am
    Beleg wird als **Teil des Verwendungszwecks** der Bankbuchung
    gefunden.

<img src=".\img/image88.png"
style="width:6.59449in;height:3.98152in" />

## Belege im Bereich *Ungebuchte Belege* nachträglich einer Buchung zuordnen

Wenn Sie die Buchungen in der FIBU bereits durchgeführt haben und den
Beleg im Nachhinein der Buchung zuordnen möchten gehen Sie bitte
folgendermaßen vor:

Wählen Sie das gewünschte Konto über *Aufruf / Konten aus*. Mit der
rechten Maustaste auf die entsprechende Buchung wählen Sie den Eintrag
*DMS-Belege zuordnen* oder die Tastenkombination *Umschalt F7*. Es
werden nun in einem 2. Fenster die vorhandenen, ungebuchten Belege
angezeigt. Wählen Sie hier den gewünschten Beleg aus und klicken in der
FIBU/EA auf den Eintrag *Beleg zuordnen + gebucht markieren*. Somit wird
dieser Beleg bei dieser Buchung (und auch bei der oder den
Gegenbuchungen) zugeordnet und im Modul Belege im RZL Board als gebucht
markiert.

<img src=".\img/image89.png"
style="width:3.93701in;height:1.99282in" />

Weitere Zuordnungsmöglichkeiten (z.B., wenn bereits ein Beleg zugeordnet
ist) finden Sie bei der Buchung mit der rechten Maustaste über *Aufruf /
Detail* im Registerblatt *DMS*.

-   Soll der Beleg bei mehreren Buchungen zugeordnet werden, wählen Sie
    *Beleg zuordnen* *(als ungebucht markiert belassen)* und erst bei
    der letzten Buchung den Eintrag *Beleg zuordnen + gebucht
    markieren*.

-   *Belegzuordnung entfernen + ungebucht markieren:* Der bereits
    zugeordnete Beleg wird von dieser Buchung gelöscht und steht wieder
    zur Verbuchung oder zur Zuordnung zur Verfügung.

-   *Belegzuordnung entfernen (als gebucht markiert belassen):* Der
    zugeordnete Beleg wird von dieser Buchung gelöscht, bleibt aber als
    gebucht markiert und kann somit nicht einer anderen Buchung
    zugeordnet werden.

# Gebuchte Belege aufrufen

## Aufruf eines einzelnen Belegs in der RZL Fibu / EA-Rechnung

Über den Kontenaufruf (*Aufruf / Konten)* wird bei jeder Buchung mit
Beleg das Belegsymbol ganz links angezeigt.

<img src=".\img/image90.png"
style="width:5.90551in;height:1.67853in" />

Der Beleg einer Buchung kann mit Mausklick auf das Belegsymbol, der
F7-Taste oder mit der rechten Maustaste und *Aufruf DMS-Beleg*
aufgerufen werden.

<img src=".\img/image91.png"
style="width:5.2093in;height:5.64196in" />

Der Buchungsstempel ist nur hier im Belegaufruf ersichtlich und kann
optional ausgeblendet werden. Ganz unten werden die Buchungsdetails
angezeigt. Der geöffnete Beleg kann hier durch Anwahl der gewünschten
Schaltfläche gedruckt, gespeichert oder per E-Mail versendet werden.

## Aufruf mehrerer Belege im RZL Board (Dokumenten-Management-System)

Ein großer Vorteil der digitalen Belegablage ist das schnelle Auffinden
von mehreren Belegen mithilfe diverser Sortier- und Filtermöglichkeiten
im RZL Board.

<img src=".\img/image92.png"
style="width:6.32104in;height:1.48122in" />

### Filtern einzelner Spalten:

Pro Spalte kann mit Klick auf das Filtersymbol nach den jeweiligen Daten
gefiltert werden. Je nach Feld gibt es entweder Filtervorschläge oder
eine Textsuche (Beginnt mit, enthält, …).

<img src=".\img/image93.png"
style="width:2.3622in;height:2.41356in" />
<img src=".\img/image94.png"
style="width:2.99289in;height:2.41339in" />

### Nach Spalten sortieren:

Mit Klick auf eine beliebige, eingeblendete Spalte können die Daten
aufsteigend oder absteigend sortiert werden.

### Dateien mit strukturiertem Dateinamen exportieren:

> Sowohl im klientenübergreifenden Bereich *BOARD / Belege* als auch
> innerhalb eines geöffneten Klienten haben Sie im RZL Board in der
> Belegverarbeitung die Möglichkeit, Belege bspw. für eine
> Betriebsprüfung oder für Mitarbeiter, die keinen Zugriff auf RZL
> haben, zu exportieren.
>
> Folgende Funktionen stehen zur Verfügung:

-   Alle markierten Belege exportieren: „Ausgewählte Belege exportieren“

-   Alle Belege, die aufgrund der gesetzten Filter angezeigt werden:
    „Gefilterte Belege exportieren“

-   Alle Belege dieses Klienten: „Alle Belege exportieren“

> <img src=".\img/image95.png"
> style="width:6.58829in;height:1.55748in" />
>
> Der Export der Belege ist in allen Ansichten (*Ungebuchte
> Belege/Gebuchte Belege*) möglich. Um mehrere Belege zu exportieren,
> müssen Sie diese vor Auswahl der Funktion markieren (mittels Strg oder
> Umschalt-Taste und Klick auf die gewünschten Belege).
>
> Nach Auswahl der Funktion *Belege exportieren / Belege mit Belegdaten
> exportieren* öffnet sich ein Speicherdialog. Dort haben Sie die
> Möglichkeit, über die Pfeiltaste Platzhalter für den Dateinamen der
> Belege zu vergeben. Ein gesetzter Platzhalter setzt die Belegdaten des
> jeweiligen Belegs in den generierten Dateinamen.
>
> Über die Auswahl *Vorschläge* werden von uns ein paar mögliche
> Kombinationen von Platzhaltern vorgeschlagen.
>
> <img src=".\img/image96.png"
> style="width:6.59449in;height:1.81442in" />
>
> Die ausgewählten Platzhalter sollten idealerweise je Beleg eindeutig
> sein. Sollte dies nicht der Fall sein, werden Belege mit
> gleichlautendem Dateinamen fortlaufend durchnummeriert ((1), (2),
> (3),…).
>
> Im gewählten Speicherort finden Sie nach erfolgreichem Export pro
> Beleg eine Datei.
>
> <img src=".\img/image97.png"
> style="width:4.72441in;height:2.32311in" />
>
> Um Belege in einer anderen Installation wieder einspielen zu können,
> müssen die Belege mit Belegdaten exportiert werden. Details dazu
> finden Sie in der Kurzanleitung *Belege mit XML-Belegdaten exportieren
> und in andere Installation importieren.*

# Belegfreigabe

Als Erweiterung zum RZL FIBU/EA Modul Belegverarbeitung bietet RZL die
Möglichkeit, mit dem Zusatzmodul „RZL Belegfreigabe“ die
Rechnungsprüfung bzw. Buchungsfreigabe von Belegen digital in einem
Workflow abzuwickeln. Sie können beim Hinzufügen von Belegen definieren,
welche Stufen es für die Freigabe gibt und welche Mitarbeiter die Belege
pro Stufe prüfen und freigeben müssen, damit die Belege in der RZL FIBU
/ EA gebucht werden können.

Details dazu finden Sie im RZL Board unter *Hilfe / Kurzanleitungen* in
der Kurzanleitung *RZL Modul Belegfreigabe.*

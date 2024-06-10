# Einstellungen

![](<img/image72.png>)

Im Registerblatt *Einstellungen* können Sie die Grundeinstellungen
definieren. Die Einstellungen für die Leistungserfassung der Mitarbeiter
werden ebenso in diesem Registerblatt getroffen.

## Grundeinstellungen

Wenn Sie auf den Button *Grundeinstellungen* kicken, öffnet sich
nachfolgender Tab.


![](<img/image73.png>)

### Stunden

Im Drop-Down Feld können Sie einstellen, ob Sie die Leistungserfassung
in Normalstunden (1 h = 60 Minuten) oder in Industriestunden (1 h = 100
Industrieminuten) führen wollen.

*Beispiel für die Eingabe:*

Erfasst werden eineinhalb Stunden für die Buchhaltung, sowie eine
viertel Stunde zusätzliche Arbeiten:

Ansicht bei Eingabe in Normalstunden:

![](<img/image74.png>)

![](<img/image75.png>)

Ansicht bei Eingabe in Industriestunden:

![](<img/image76.png>)

![](<img/image77.png>)

**Kleinste verrechenbare Zeiteinheit**

Hier kann die Zeiteinheit, welche mindesten an den Klienten verrechnet
wird, hinterlegt werden. Es wird jeweils auf ein Vielfaches der
hinterlegten Eingabe gerundet. Um die Rundung darzustellen, wird
zwischen *Dauer Erfassung* und *Dauer Verrechnung* unterschieden.

Beispiel bei hinterlegter Kleinsten verrechenbaren Einheit von einer
Viertelstunde.


![](<img/image78.png>)

Die Wertberechnung erfolgt auf Basis der verrechenbaren Dauer. Die
Eigenkosten werden auf Basis der erfassten Dauer ermittelt.

Die verrechenbare Dauer wird auf der Note, auf dem Notenjournal sowie
bei den Umsatzstatistiken angeführt.

### Note

**Verrechnungsgruppen getrennt ausweisen**

Ist die Option *Verrechnungsgruppen getrennt ausweisen* aktiviert, wird
die Note nach Verrechnungsgruppen aufgeteilt. Ist diese Option nicht
aktiviert, werden nur die Tätigkeiten auf der Note ausgewiesen. Diese
Einstellung wird beim Erstellen der Note gespeichert und kann für die
erstellte Note nicht mehr verändert werden.

Ansicht der Note, wenn *Verrechnungsgruppen getrennt ausweisen*
aktiviert:

![](<img/image79.png>)

Ansicht der Note, wenn *Verrechnungsgruppen getrennt ausweisen*
deaktiviert:

![](<img/image80.png>)

Hinweis

Diese Einstellung kann während der Notenerstellung individuell pro Note
geändert werden.

**Erfassungsklienten getrennt ausweisen**

Mit der Option *Erfassungsklienten getrennt ausweisen*, werden die
Erfassungsklienten auf der Note (Kapitel 7, Seite
[61](#verrechnungs-erfassungsklient)) mit dem Klientennamen extra
ausgewiesen. Diese Einstellung wird beim Erstellen der Note gespeichert
und kann für die erstellte Note nicht mehr verändert werden.

Ansicht der Note, wenn *Erfassungsklienten getrennt ausweisen*
aktiviert:

![](<img/image81.png>)

Alle Erfassungsklienten werden mit dem Klientennamen und den
dazugehörigen Leistungen angeführt.

Sollte eine Note ohne Aufteilung auf die Erfassungsklienten erfolgen,
ist die Option Erfassungsklienten getrennt ausweisen zu deaktivieren.

Hinweis

Sind die Optionen *Verrechnungsgruppen getrennt ausweisen* und
*Erfassungsklienten getrennt ausweisen* gemeinsam aktiviert, erfolgt bei
der Notenerstellung zusätzlich eine Unterteilung pro Erfassungsklient
pro Verrechnungsgruppe.

**Note beim „Speichern & schließen finalisieren**

Wählen Sie das Feld *Note beim „Speichern & schließen finalisieren* aus,
wenn Sie keine vorläufigen Noten erstellen wollen, sondern jede Note
sofort bei Fertigstellung finalisieren wollen.

**Betrag bei Verrechnungsgruppenwechsel drucken & Tätigkeiten ohne
Betrag vorreihen**

Die Optionen *Betrag bei Verrechnungsgruppenwechsel drucken* und
*Tätigkeiten ohne Betrag vorreihen* beziehen sich auf *Tätigkeiten ohne
Betrag in Note* (Kapitel 2.2, Seite [14](#tätigkeiten)).

Die Option *Betrag bei Verrechnungsgruppenwechsel drucken* bewirkt, dass
wenn die Note nicht nach Verrechnungsgruppen gegliedert ist und
Tätigkeiten ohne Betrag abgerechnet werden, automatisch bevor eine neue
Verrechnungsgruppe beginnt eine Summe gebildet wird.

Die Option *Tätigkeiten ohne Betrag vorreihen* bewirkt, dass Tätigkeiten
ohne Betrag als erstes innerhalb der Verrechnungsgruppe abgerechnet
werden. Grundsätzlich werden die Tätigkeiten nach den Tätigkeitsnummern
absteigend in der Note aufgelistet.

Folgend werden die Optionen und deren Auswirkung anhand von Beispielen
erläutert.

**Beispiel 1:** Es werden zwei Tätigkeiten aus der Verrechnungsgruppe
Buchhaltung und eine Tätigkeit aus der Verrechnungsgruppe
Lohnverrechnung abgerechnet.

Eine Tätigkeit aus der Verrechnungsgruppe Buchhaltung ist ohne Betrag
definiert.

![](<img/image82.png>)

In den Grundeinstellungen sind die Optionen *Verrechnungsgruppen
getrennt ausweisen*, *Betrag bei Verrechnungsgruppenwechsel drucken* und
*Tätigkeiten ohne Betrag vorreihen* aktiv.

Auf der Note wird nun die Tätigkeit ohne Betrag (Nr. 110) vorgereiht und
der Betrag wird zur nächsten Tätigkeit der gleichen Verrechnungsgruppe
(Nr. 100) addiert. Es wird also gruppiert.

![](<img/image83.png>)

Hinweis

Eine Gruppierung kann auch individuell pro Note gemacht werden. Siehe
Kapitel 11.4.9, Seite [94](#notenzeilen-gruppieren).

**Beispiel 2:** Gleiche Ausgangssituation wie Beispiel 1. In den
Grundeinstellungen sind die Optionen *Verrechnungsgruppen getrennt
ausweisen, Betrag bei Verrechnungsgruppenwechsel drucken* aktiv und die
Option *Tätigkeiten ohne Betrag vorreihen* **nicht** aktiv.

Die Tätigkeit ohne Betrag (Nr. 110) wird nun nicht mehr vorgereiht. Dies
führt dazu, dass der Betrag der Tätigkeit dennoch angedruckt wird, da er
nicht mehr zu weiteren Tätigkeiten der gleichen Verrechnungsgruppe
addiert werden kann.

![](<img/image84.png>)

Hinweis

Wird nur eine Tätigkeit auf der gesamten Note abgerechnet und ist diese
ohne Betrag deklariert ist, wird hier auch dennoch der Betrag
angedruckt.

**Beispiel 3:** Gleiche Ausgangssituation wie Beispiel 1. In den
Grundeinstellungen ist die Option *Verrechnungsgruppen getrennt
ausweisen* **nicht** aktiv und die Optionen *Betrag bei
Verrechnungsgruppenwechsel drucken* und *Tätigkeiten ohne Betrag
vorreihen* aktiv.

Die Verrechnungsgruppen werden nicht mehr getrennt ausgewiesen, sondern
die Note ist nach Tätigkeiten gegliedert. Aufgrund der Option
*Tätigkeiten ohne Betrag vorreihen* wird Tätigkeit Nr. 110 zu Tätigkeit
Nr. 100 addiert. Da wir auch den Haken *Betrag bei
Verrechnungsgruppenwechsel drucken* gesetzt haben, wird nun, ohne
getrennten Ausweis der Verrechnungsgruppen, eine Summe pro
Verrechnungsgruppe gebildet.

![](<img/image85.png>)

Hinweis

Ist die Option *Verrechnungsgruppen getrennt ausweisen* aktiv, wird
immer pro Verrechnungsgruppe eine Summe gebildet.

**Notentitel**

Für die Übergabe der Honorarnoten in den RZL PDF-Manager kann im Feld
*Notentitel* eine abweichende Bezeichnung vergeben werden. Es besteht
die Möglichkeit mit Platzhaltern zu arbeiten.

Folgende Platzhalter stehen Ihnen zur Verfügung:

-   *Note.Nummer* Notennummer

-   *Note.Datum* Notendatum – Hier könne Sie zwischen verschiedenen  
    Datumsformaten wählen.

-   *Klient. Nummer* Klientennummer

-   *Klient.Name* Name des Klienten

-   *Klient.DebKonto.Nummer* Debitorenkontonummer des Klienten

-   *Verrechnungsgruppe* Name der Verrechnungsgruppe

-   *VerrechnungsgruppeMitProjektzeitraum* Name der Verrechnungsg.+ der
    abgerechnete Projektzeitraum

-   *Rechnungssteller.Name* Name des dem Unternehmensbereich
    zugeordneten Klienten

-   *Rechnungssteller.Bezeichnung* Bezeichnung des Unternehmensbereiches

Unter dem Feld *Notentitel* wird beispielhaft dargestellt, welche Werte
die Platzhalter bzw. ihr gewählter Titel liefert.

Abb. 3‑4 Beispiel Notentitel

![](<img/image86.png>)

Tipp

Wird im Feld *Notentitel* nichts hinterlegt, lautete der Titel der Note
„Note\_Note.Datum\_Note.Nummer“

### PDF-Erstellung

Mithilfe der Option *Schriftarten einbetten*, können Sie definieren, ob
die Schriftart in das PDF eingebettet wird oder nicht. Dies hat vor
allem Auswirkungen auf die Dateigröße der Noten im PDF Format.

Grundsätzlich wird empfohlen die Schriftarten in das PDF-Dokument
einzubetten, um sicherzustellen, dass das Dokument auch auf allen
Geräten, wo es geöffnet wird ident aussieht.

Wird hier auf *keine Einbettung* umgestellt, wird die Schriftart nicht
in das PDF eingebettet. Dies verringert zwar die Dateigröße der
PDF-Dokumente, führt aber dazu, dass Noten nur auf Endgeräten korrekt
angezeigt werden, welche die Schrift installiert haben. Fehlt die
Schrift auf dem Endgerät, erhält der Benutzer folgende Meldung und das
PDF kann nicht korrekt dargestellt werden.

Abb. 3‑5 Schriftart nicht einbetten

![](<img/image87.png>)

### Buchhaltung

**Note beim Finalisieren als Ausgangsbeleg in das Belegsystem
übernehmen**

Wurde die Option *Note beim Finalisieren als Ausgangsbeleg in das
Belegsystem übernehmen* gesetzt, so wird nach dem Finalisieren der
Honorarnote diese automatisch als Ausgangsrechnung in das Belegsystem
übernommen. Der Beleg erscheint im Bereich der ungebuchten Belege in der
Belegverarbeitung. Diese Option kann nur gesetzt werden, wenn Sie das
Modul Belegverarbeitung lizenziert haben.

Hinweis

Finalisierte Noten können nur unter gewissen Umständen wieder verändert
werden (siehe Kapitel 15.9, Seite [145](#note-zurücksetzen)).

**Buchungstext**

Für den Buchungstext in der Buchhaltung besteht im Feld *Buchungstext*
die Möglichkeit mit Platzhaltern zu arbeiten. Der Standardwert ist der
Platzhalter *Verrechnungsgruppe mit Projektzeitraum*.

Folgende Platzhalter stehen Ihnen zur Verfügung:

-   *Verrechnungsgruppe* Name der Verrechnungsgruppe

-   *VerrechnungsgruppeMitProjektzeitraum* Name der Verrechnungsg.+ der
    abgerechnete Projektzeitraum

-   *Anmerkung* Der Text aus dem Feld *Anmerkung* in der Note.

-   *Klient.Nummer* Klientennummer

-   *Klient.Kurzbezeichnung* Kurzbezeichnung des Klienten

-   *Klient.Name* Name des Klienten

-   *Rechnungssteller.Bezeichnung* Bezeichnung des Unternehmensbereiches

-   *Rechnungssteller.Name* Name des Klienten des Unternehmensbereiches

Unter dem Feld *Buchungstext* wird beispielhaft dargestellt, welche
Werte die Platzhalter bzw. ihr gewählter Text liefert.

Abb. 3‑6 Beispiel Buchungstext

![](<img/image88.png>)

Hinweis

In der Finanzbuchhaltung ist der Buchungstext mit 80 Zeichen beschränkt.
Ein längerer Buchungstext wird beim Verbuchen abgeschnitten.

Tipp

Der Buchungstext ist kein Pflichtfeld und kann somit auch leer gelassen
werden.

**Standart-Debitoren-Kontonummer**

-   *keine Standard-Debitoren Kontonummer  
    *Mit dieser Option muss die Debitoren Kontonummer selbstständig in
    den Klientenstammdaten eingetragen werden.

-   *Entspricht der Klientennummer, wenn diese mindestens fünfstellig
    ist  
    *Bei mindestens fünfstelligen Klientennummern, wird automatisch die
    Klientennummer als Debitoren Kontonummer vorgeschlagen. Bei einer
    unter fünfstelligen Klientennummer muss die Debitoren Kontonummer
    selbstständig in den Klientenstammdaten eingetragen werden.

-   *Wert + Klientennummer (z.B. 20001)  
    *Mit dieser Option können Sie definieren, dass zur Klientennummer
    immer ein bestimmter Wert addiert wird. Bsp. Wert 20000 –
    Klientennummer 500 entspricht der Debitoren Kontonummer 20500

Hinweis

Den Vorschlag der Debitorennummer ist in den Klientenstammdaten (Kapitel
6.3, Seite [60](buchhaltung-1)) ersichtlich.

### Verteilung der Zu- und Abschläge

Hier kann die übliche bzw. am häufigsten verwendete Verteilungsmethode
eingestellt werden. Während der Notenerstellung kann die Art der
Verteilung bei jeder Notenzeile angepasst werden. Sie können mittels
Optionsfelder einstellen, ob die Zu- bzw. Abschläge automatisch auf den
Mitarbeiter, ohne Mitarbeiterbezug oder manuell verteilt werden.

Ihre Einstellungen können Sie mittels *Speichern* Button bestätigen.

### Verteilung der Rabatte/Aufschläge

Hier kann die standartmäßige Verteilungsmethode für Rabatte und
Aufschläge definiert werden. Während der Notenerstellung kann die Art
der Verteilung bei jeder Rabatt-/Aufschlagszeile angepasst werden. Sie
können mittels Optionsfelder einstellen, ob die Rabatte/Aufschläge
automatisch auf den Mitarbeiter oder ohne Mitarbeiterbezug verteilt
werden.

Ihre Einstellungen können Sie mittels *Speichern* Button bestätigen.

## Mitarbeiter Leistungserfassung

Unter diesem Punkt können Sie die Art der Arbeitszeiterfassung
festlegen, sowie wie lange ihre Mitarbeiter Leistungen
bearbeiten/erfassen können und ob Leistungen automatisch freigegeben
werden oder nicht. Dieser Tab ist vor allem für die Einstellungen der
Leistungserfassung relevant und hat auch Auswirkungen auf die
Honorarverrechnung, denn so lange Leistungen nicht von Ihren
Mitarbeitern freigegeben wurden, können Sie diese nicht verrechnen.

Wählen Sie den Button *Mitarbeiter Leistungserfassung* aus, um die
Grundeinstellungen für Sperren der Leistungserfassung festzulegen oder
die Leistungen automatisch freigeben zu lassen.

Abb. 3‑7 Mitarbeiter Leistungserfassung

![](<img/image89.png>)

### Arbeitszeitaufzeichnung

-   *Beginn, Ende und Pausen pro Tag erfassen*

    Dies ist die genaueste Variante für die Leistungserfassung. Der
    Mitarbeiter erfasst täglich seine genaue Arbeitszeit inkl. Pausen.

    Ansicht in der Leistungserfassung vom Mitarbeiter:

    ![](<img/image90.png>)

-   *Arbeitszeit aus den Leistungen entnehmen*

    Bei dieser Variante gibt der Mitarbeiter keine Arbeitszeit ein,
    sondern aufgrund der eingegebenen Leistungszeilen mit *Beginn und
    Ende* wird die Arbeitszeit und die Unterbrechungen ermittelt. Wenn
    beispielsweise ein ganzer Tag an einer FIBU gearbeitet wurde,
    müssen - damit die Mittagspause errechnet werden kann – zwei
    Tätigkeiten erfasst werden, wobei in den Feldern Beginn und Ende der
    Vormittag z. B.: 07:00 – 12:00 Uhr und der Nachmittag z. B.:
    12:30-16:00 erfasst werden.

    Ansicht in der Leistungserfassung vom
    Mitarbeiter:![](<img/image91.png>)

Tipp

Bei der Einstellung *Arbeitszeit aus den Leistungen entnehmen* ist es
empfehlenswert in den Stammdaten der Tätigkeiten die *Uhrzeiteingabe
verpflichtend* zu machen (Kapitel 2.2, Seite [14](#tätigkeiten)).

-   *Keine Arbeitszeitaufzeichnung*

    Wird diese Variante gewählt, wird keine Arbeitszeit ermittelt bzw.
    kann keine Arbeitszeit eingetragen werden. Der Mitarbeiter trägt nur
    seine Leistungen ein – die Felder Beginn/Ende können befüllt werden.

    Ansicht in der Leistungserfassung vom Mitarbeiter:

    ![](<img/image92.png>)

-   *Digitale Stempeluhr*

    Bei der Variante Digitale Stempeluhr, hat der Mitarbeiter in seiner
    Leistungserfassung jeweils einen Button für Kommen und Gehen. Die
    Arbeitszeit für Kommen/Gehen wird aus der Datenbank entnommen – das
    heißt, der Mitarbeiter muss aktiv auf *Kommen/Gehen* klicken, damit
    ab diesem Zeitpunkt die Arbeitszeit gezählt wird. Bei einer Pause
    muss aktiv der Button *Gehen* gewählt werden und am Ende der Pause
    die Schaltfläche *Kommen*.

    Die Arbeitszeiten können mit der digitalen Stempeluhr nur für den
    aktuellen Tag erfasst werden.

Hinweis

Die Arbeitszeiten sowie die Pausen sind nur in einer Leseansicht
dargestellt und können in der Leistungserfassung vom Mitarbeiter nicht
geändert werden.

Änderungen an den Arbeitszeiten können nur direkt in der
Honorarverrechnung über die Mitarbeiterübersicht durchgeführt werden
(vgl. Kapitel 9, Seite [69](#mitarbeiterübersicht)).

Hinweis

Bei der Digitalen Stempeluhr, ist der Import von Arbeitszeiten nicht
möglich (Kapitel 9.3, Seite [74](#import-arbeitszeiten-und-leistungen)).

Ansicht in der Leistungserfassung vom
Mitarbeiter:![](<img/image93.png>)

**Rundung  
**Bei der Variante *Digitale Stempeluhr* besteht die Möglichkeit die
erfasste Zeit auf einen hinterlegten Wert zu runden.

Mögliche Rundungen:

-   0 = keine Rundung

-   5 = Rundung auf volle 5 Minuten

-   10 = Rundung auf volle 10 Minuten

-   15 = Rundung auf volle 15 Minuten

Beispiel für Rundung mit 15 Minuten:  
Mitarbeiter klickt um 08:04 auf *Kommen* – es wird auf 08:15 gerundet
als Beginn Arbeitszeit  
Mitarbeiter klickt um 16:46 auf *Gehen* – es wird auf 17:00 gerundet als
Ende Arbeitszeit

### Sperre der Erfassung

In diesem Bereich können Sie Erfassungssperren für die
Leistungserfassung der Mitarbeiter setzen. Zur Auswahl stehen Ihnen die
Optionen keine Sperre, Sperre bis zu einem bestimmten Datum, Sperre bis
xy Tage vor heute, oder Sperre bis xy Tage vor der letzten
Leistungserfassung des jeweiligen Mitarbeiters. Je nachdem welche
Einstellung Sie treffen, können Sie die Leistungserfassung Ihrer
Mitarbeiter entsprechend einschränken.

### Freigabe der Leistungen

Falls die Leistungen Ihrer Mitarbeiter automatisch, sofort nach der
Erfassung freigegeben werden sollen, haken Sie diese Einstellung an. Die
Freigabe einer Leistung bewirkt, dass diese sofort für die
Honorarverrechnung zur Notenerstellung zur Verfügung steht. Werden
Leistungen nicht automatisch freigegeben, so muss der Mitarbeiter in der
Leistungserfassung selbst seine Leistungen für die Honorarverrechnung
freigeben. Solange die Leistungen vom Mitarbeiter nicht freigegeben
wurden, können Sie diese auch nicht verrechnen.

### Programmaktivitäten zuordnen

Innerhalb der Leistungserfassung der einzelnen Mitarbeiter besteht die
Möglichkeit die Zeiterfassung der Programmaktivitäten zu aktivieren. Die
Aktivierung der Zeiterfassung in der Leistungserfassung der Mitarbeiter
bewirkt, dass die Dauer der Tätigkeiten mitprotokolliert werden. (vgl.
Handbuch Leistungserfassung Next Kapitel 3.3 Zeiterfassung)

Im Honorarprogramm haben Sie die Möglichkeit den einzelnen
Programmaktivitäten bestimmten Tätigkeiten zuzuordnen. Wurde hier eine
Tätigkeit zugeordnet, wird diese dem Mitarbeiter bei der
Programmaktivität in der Leistungserfassung gleich vorgeschlagen.

Ebenfalls kann definiert werden, dass erst ab einer gewissen
Mindestanzahl von Minuten die Programmaktivität aus den Klassik
Programmen aufgezeichnet werden.

Hinweis

Pro Programmaktivität ist die Zuordnung einer Tätigkeit möglich.

## Einstellungen Urlaubsverwaltung

Im Reiter *Einstellungen Urlaubsverwaltung* wird definiert, ob der
Urlaub im HON Next in Stunden oder in Tagen verwaltet wird.

Bei der Urlaubsverwaltung in Tagen kann zusätzlich definiert werden, ob
die Eingabe halber Urlaubstage möglich ist oder nur ganztätige Urlaube
erlaubt sind.

Hinweis

Wird die Verwaltungsart des Urlaubs geändert ist zwingend eine neue
Generation anzulegen.

Abb. 3‑8 Einstellungen Urlaubsverwaltung

![](<img/image94.png>)

Bei der Verwaltung in Stunden und in Tagen ist die Urlaubstätigkeit wie
folgt anzulegen (vgl. Kapitel 2.2.1, Seite [15](#_Ref143773736)):

Abb. 3‑9 Urlaubstätigkeit

![](<img/image95.png>)

In der Leistungserfassung ist bei Urlaub nach Stunden das Feld *Dauer*
aktiv und bei Urlaub nach Tagen das Feld *Einheiten*.

Abb. 3‑10 Leistungserfassung Urlaub in Stunden

![](<img/image96.png>)

Abb. 3‑11 Leistungserfassung Urlaub in Tagen

![](<img/image97.png>)

1 Einheit = 1 ganzer Tag Urlaub

0,5 Einheiten = ein halber Tag Urlaub (Hälfte der Normalarbeitszeit des
Mitarbeiters)

## Bewegungsdaten löschen/zurücksetzten

Über den Menüpunkt *Bewegungsdaten löschen/zurücksetzten* haben Sie die
Möglichkeit die gesamten Bewegungsdaten oder nur einzelne Teile daraus
zu löschen.

### Bewegungsdaten löschen

Der Menüpunkt *Bewegungsdaten löschen* **löscht** die jeweiligen
ausgewählten Bewegungsdaten bis zu einem bestimmten Stichtag. Beim
Löschen der Bewegungsdaten ist die Angabe einer Begründung
verpflichtend.

Folgende Bewegungsdaten können gelöscht werden:

-   Arbeitszeiten

-   Nicht verrechenbare Leistungen – Stichtag bezieht sich auf das
    Erfassungsdatum.

-   Honorarnoten (Optional inkl. noch offener Erfassungszeilen,
    Pauschalzeilen und Akonto/Anzahlungen) – der Stichtag bezieht sich
    auf das Notendatum und es umfasst vorläufige und finalisierte Noten.

Hinweis

Beim Löschen der Honoranten werden alle Noten bis zum definierten
Stichtag inkl. die damit verbundenen Zeilen gelöscht. Ebenso wird der
ZA-Stichtag sowie der ZA-Anfangsstand der Mitarbeiter angepasst sowie
die Urlaubskartei komprimiert.

Hinweis

Sollte es noch **ungebuchte** Belege geben aus Zeiträumen die Sie
löschen, sind diese zusätzlich in der Belegverwaltung zu löschen.

Abb. 3‑12 Bewegungsdaten löschen

![](<img/image98.png>)

### Bewegungsdaten zurücksetzten

Der Menüpunkt *Bewegungsdaten zurücksetzten* **löscht** **ALLE**
bisherig erfassten Bewegungsdaten (Erfassungszeilen, Arbeitszeiten,
Honorarnoten, Überstundenauszahlungen, Urlaubskartei und
Pauschalzeilen).  
Die Stammdaten (Verrechnungsgruppen, Tätigkeiten, Tarifschemata,
Arbeitszeitmodelle, Nummernbereiche, Feiertagsverwaltung und
Notenvorlagen) bleiben erhalten.

Hinweis

Wurden im Zuge der Notenerstellung auch Belege erzeugt, sind diese in
extra der Belegverwaltung zu löschen.

Hinweis

**Dieser Programmteil sollte nur verwendet werden, um Daten zu löschen
die probeweise erstellt worden sind und nicht mehr benötigt werden.**  
Bsp. nach der Einarbeitungsphase bevor mit dem Echtbetrieb gestartet
wird.

### Protokolle

Nach dem *Bewegungsdaten löschen/Bewegungsdaten zurücksetzten* erhalten
Sie ein Protokoll. In diesem Protokoll ist ersichtlich, welche Daten bis
zu welchem Stichtag gelöscht wurden. Weiters erhalten Sie hier auch
Informationen darüber, falls ein Löschen bestimmter Daten nicht möglich
war. Bsp. Solange es verrechnete aber nicht ausgeglichene Pauschalzeilen
gibt, kann diese Note nicht gelöscht werden.

Abb. 3‑13 Bewegungsdaten löschen Protokoll

![](<img/image99.png>)

Hinweis

Das Bewegungsdaten löschen und/oder zurücksetzten kann nicht rückgängig
gemacht werden.
# Belegverarbeitung im RZL Board

## Vorteile und Nutzen der RZL Belegverarbeitung

-   Hauptziel ist die digitale Speicherung der Belege mit schnellem
    Zugriff über die RZL Programme.

-   Durch die RZL Belegdatenerkennung in Kombination mit
    benutzerdefinierten Regeln werden die Belegdaten ausgelesen und beim
    Buchen vorgeschlagen.

-   Beim Bilanzieren können Sie die Belege direkt im Bilanz-Programm
    aufrufen.

-   Digitalisierte Belege können – ergänzt um verschiedene Buchungsinfos
    – über das RZL Klientenportal bereitgestellt werden.

-   Es kommt daher zu einer Automatisierung und Zeitersparnis.

## Wie kommen Sie als Buchhalter zu den digitalen Belegen?

![](img/image4.jpg)

## Die Digitalisierung der Belege

### Scanordner vor der erstmaligen Nutzung einrichten

Bevor Sie mit dem Scannen beginnen, legen Sie **für jeden Mitarbeiter**
einen eigenen Scanordner im Netzwerk und im Modul Belege an. Die Anlage
befindet sich im Bereich *BELEGE* unter *Einstellungen / Scanordner*
oder direkt im Bereich *Belege hinzufügen* im Dropdown des Buttons
*Belege Scanordner.* Zusätzlich sollten Sie diese Ordner beim Scanner in
einem Profil pro Mitarbeiter hinterlegen.

![](img/image5.png)

**Name:** Sie können hier einen Namen für jeden Scanordner vergeben, der
dann im Bereich *Belege hinzufügen / Belege Scanordner* angezeigt wird.

**Ordner für Mitarbeiter:** Scanordner können Sie einem Mitarbeiter
zuordnen, somit sieht der jeweilige Mitarbeiter nur seine eigenen und
etwaige öffentliche (kanzleiweite) Scanordner.

**Anmerkung:** Notiz zu diesem Scanordner.

**Ordnerpfad:** Im *Ordnerpfad* wird der am Laufwerk angelegte
Scanordner hinterlegt.

**Dokumente/Belege importieren:** Je nach Aktivierung steht dieser
Scanordner in der RZL KIS-Dokumentenverwaltung bzw. in der RZL Board
Belegverarbeitung zur Verfügung.

**Texterkennung (OCR) automatisch im Hintergrund ausführen:** Diese
Option steht nur dann zur Verfügung, wenn in den Einstellungen zur
Texter-kennung „Nur bei ausgewählten Scanordnern“ ausgewählt wurde.
Grundsätzlich empfehlen, Texterkennung im Hintergrund generell zu
aktivieren. Somit wird die Texterkennung (OCR-Erkennung) vollautomatisch
im Hintergrund ausgeführt, sobald neue Belege in einem Scanordner
vorhanden sind und das RZL Board gestartet ist.

**Belege für schnelleren Zugriff lokal kopieren:** Bei Aktivierung
dieser Option werden die Belege für die Bearbeitung lokal
zwischengespeichert und die Zugriffe auf den Scan-Ordner auf ein Minimum
reduziert. Diese Einstellung ist bei einer langsamen oder instabilen
Verbindung zum Scan-Ordner zu empfehlen.

### Tipps zum Scanvorgang

**Papierbelege aufbereiten**

Die Papierbelege sollten Sie bzw. Ihre Klienten ohne Klammern bzw.
Heftung im Ordner sortiert ablegen. Sie müssen somit nur mehr die
gesamten Rechnungen in den Scanner einlegen und per Stapeleinzug
scannen.

Wir empfehlen standardmäßig doppelseitig zu scannen, da die gescannten
Leerseiten im RZL sehr einfach automatisch entfernt werden können.

**Qualität**

Eine optimale Scanqualität liefert gute Ergebnisse bei der
OCR-/Belegdaten-erkennung. Wir empfehlen 300 dpi.

**Dateiformat**

Als Ausgabeformat sollte PDF gewählt werden. Ob die Belege in
Einzelseiten oder als Gesamtdokument gescannt werden, ist nicht
relevant, da die Seiten in der RZL Belegverarbeitung auf Knopfdruck
aufgeteilt bzw. zusammengefügt werden können.

### Einstellungen zur OCR-Erkennung bei gescannten Belegen

Um aus den gescannten PDF-Belegen Werte auslesen zu können, wird das
Bild mittels OCR/Texterkennung in einen verwertbaren Text umgewandelt.
Den Einstellungsdialog für die Texterkennung (OCR) finden Sie im Menü
*Belege / Einstellungen / Texterkennung (OCR).*

<img src=".\img/image6.png"
style="width:6.29921in;height:3.4143in" />

Folgende Möglichkeiten stehen zur OCR-Erkennung im RZL Board zur
Verfügung:

> Texterkennungs-Software (OCR-Engine)

1.  Automatisch:  
    Die von RZL aktuell empfohlene Software wird verwendet  
    (derzeit unter Windows 10 bzw. 11: Microsoft OCR, sonst Google
    Tesseract 4.1.1)

2.  Microsoft:  
    Diese Einstellung wird nur empfohlen, wenn alle Mitarbeiter Windows
    10 oder 11 verwenden, da Microsoft OCR unter Windows 7 nicht zur
    Verfügung steht.

3.  Tesseract 4.1.1 (Google)

> Für die Texterkennung im Hintergrund ausschließlich Microsoft OCR
> verwenden.

1.  Mit dieser Einstellung wird die Hintergrund-Texterkennung innerhalb
    einer Installation nur auf PCs durchgeführt, die Windows 10 oder 11
    installiert und somit Microsoft OCR verwenden können. Somit ist
    sichergestellt, dass Belege nicht mit verschiedenen OCR-Engines
    ausgelesen werden.

> Texterkennung (OCR) bei Scanordnern im Hintergrund ausführen

1.  Alle Scanordner:  
    Texterkennung wird bei allen angelegten Scanordner im Hintergrund
    ausgeführt, die Einstellung steht in den Stammdaten der Scanordner
    somit nicht mehr zur Verfügung.

2.  Nur bei ausgewählten Scanordnern:  
    Pro Scanordner kann definiert werden, ob eine
    Hintergrund-Texterkennung durchgeführt werden soll.

3.  Bei keinem Scanordner:  
    Hintergrund-Texterkennung wird generell nicht durchgeführt. Die
    Option steht in den Stammdaten der Scanordner somit nicht zur
    Verfügung.

> Texterkennung (OCR) bei Klientenportal-Belegen bzw. Finmatics-Belegen
> im Hintergrund ausführen.

1.  Mit dieser Option wird im Hintergrund über alle Klienten alle 10
    Minuten überprüft, ob neue Belege vom Klientenportal oder von
    Finmatics zur Verfügung stehen. Diese Belege werden dann automatisch
    im Hintergrund heruntergeladen und die Texterkennung wird
    durchgeführt. Somit erspart man sich diese Zeit später bei der
    Belegdatenerkennung.

    1.  Alle Klienten

    2.  Keine Klienten

> Alternativ zur Texterkennung im RZL Board kann diese auch vorgelagert
> durchgeführt werden. Die RZL Belegverarbeitung führt dann keine
> Texterkennung mehr durch, sondern verwendet den mitgelieferten Text.
>
> Der Scanner macht die OCR-Erkennung (Einstellung direkt am Scanner).
>
> Ein anderes vorgelagertes System übernimmt die OCR-Erkennung.
>
> **Erklärung zur OCR-Erkennung:  
>   
> **Verschiedenen OCR-Erkennungen (Scanner, Google oder Microsoft, …)
> können unterschiedliche Ergebnisse liefern. Probieren Sie selbst, wo
> Sie die besten Ergebnisse bekommen.
>
> Wenn die OCR-Erkennung vom Scanner nicht zufriedenstellend ist,
> empfehlen wir diese bei Ihrem Scanner unbedingt zu deaktivieren. Im
> RZL Programm können Sie über die benutzerdefinierte
> Belegdatenerkennung die mitgelieferte, schlechte OCR-Erkennung
> verwerfen und von RZL (Microsoft OCR, tesseract von Google, …) über
> die Funktion RZL Texterkennung erzwingen neu ausführen lassen. Somit
> können Sie die Qualität vergleichen und sich dann für eine Software
> entscheiden.
>
> Grundsätzlich empfehlen wir, wenn möglich, Original-PDF-Belege zu
> verwenden (PDF aus Fakturierung bzw. E-Mail vom Lieferanten), da bei
> Original-PDFs der Text im Normalfall vollständig richtig eingebettet
> geliefert wird und somit keine OCR-Erkennung mehr notwendig ist.

## Belegbearbeitung und -aufbereitung

### <img src=".\img/image7.png"
style="width:0.72713in;height:0.456in" />Belege hinzufügen

-   Klient öffnen links oben im Feld Klient wählen (Nr. oder Name
    eingeben).

-   <img src=".\img/image8.png"
    style="width:0.72in;height:0.67729in" />Klick auf *BELEGE* in der
    Menüleiste.

-   In dieser Ansicht haben Sie nun Zugriff auf Scanordner, das RZL
    Klientenportal, auf die Beleglisten und alle weiteren Funktionen der
    RZL Belegverarbeitung.

Tipp

Wenn Sie Belege für verschiedene Klienten aus einem (Scan-)ordner
hinzufügen möchten, starten Sie den Bereich *BELEGE* im Bereich *BOARD*
ohne vorher einen Klienten zu öffnen. Für den Zugriff auf das
Klientenportal muss allerdings immer die Klientenansicht geöffnet
werden.

> Es bestehen unterschiedliche Möglichkeiten, die Belege in die RZL
> Belegverarbeitung hinzuzufügen:
>
> <img src=".\img/image9.png"
> style="width:6.40859in;height:1.49605in" />

1.  **Belege Scanordner:** Über den (persönlichen) Scanordner, der in
    den Einstellungen bzw. hier im Dropdown angelegt wurde. Wird der
    Button im oberen Bereich angeklickt, wird automatisch der zuletzt
    verwendete Scanordner geöffnet.  
    WICHITG: In einem Scanordner wird automatisch eine
    Hintergrund-OCR-Erkennung durchgeführt!

2.  **Belege Verzeichnis:** Durch manuelle Anwahl eines beliebigen
    anderen Laufwerkordners (lokal oder Netzwerk). Die zuletzt
    verwendeten Ordner bleiben gespeichert.  
    WICHTIG: keine Hintergrund OCR-Erkennung!

3.  **Belege Klientenportal:** Direkter Zugriff auf Belege, die von
    Klienten auf das RZL Klientenportal hochgeladen wurden. Die Anzahl
    der abzuholenden Belege wird im Symbol angezeigt.

4.  **Belege Finmatics:** Direkter Zugriff auf Belege von Finmatics, die
    von Klienten über Finmatics hochgeladen wurden. Die Anzahl der
    abzuholenden Belege wird im Symbol angezeigt.

5.  **Drag & Drop:** Die Übertragung mittels Drag & Drop in die
    Seitenansicht der Belegverarbeitung. (z.B. aus E-Mail Anhängen oder
    aus dem Windows-Explorer)

### Tipps zur Bedienung der Oberfläche

<img src=".\img/image10.png"
style="width:6.29861in;height:3.20903in" />

Beim Hinzufügen von Belegen gibt es drei Bereiche (Seitenansicht,
Listenansicht, Detailansicht), in denen verschiedenen Informationen
angezeigt und verschiedene Funktionen zur Verfügung stehen. Diese drei
Bereiche können in der Menüleiste mit der Funktion Vordefinierte
Ansichten unterschiedlich platziert werden.

**Vordefinierte Ansichten:**

<img src=".\img/image11.png"
style="width:2.21074in;height:1.77025in" />

<img src=".\img/image12.png"
style="width:0.27917in;height:0.27917in" />Alle drei Bereiche können
auch manuell mit gedrückter linker Maustaste auf die Überschrift
ausgedockt und in einem extra Fenster angezeigt werden (z.B. maximiert
auf einem 2. Bildschirm) oder an jeder beliebigen Position eingedockt
werden.

Fixieren/Verbergen der jeweiligen Ansicht:

Tipp

Die Menüleiste kann per Doppelklick auf die Überschrift des Tabs
aus-/eingeblendet werden.

**  
**

> **Seitenansicht:** Die Belege werden in der Vorschau angezeigt.

-   Ändern der Darstellung mit + bzw. - Symbol oder Strg + Mausrad.

-   Anzeigegröße der Vorschaubilder:

    -   Tatsächliche Größe (Die Vorschau der Belege wird mit der
        tatsächlichen Größe der PDFs bzw. Bilder dargestellt)

    -   Gleiche Breite (Alle Belege werden gleich breit dargestellt)

    -   Gleiche Höhe (Alle Belege werden gleich hoch dargestellt)

-   Mit Klick auf den Beleg mit der mittleren Maustaste (Mausrad) öffnet
    sich die Belegvorschau, bis das Mausrad wieder losgelassen wird.

-   Durch einen Doppelklick auf einen Beleg öffnet sich die Belegansicht
    (separates Fenster).

-   Mit der rechten Maustaste können im Kontextmenü weiteren Optionen
    angewählt werden.

-   Die Belege werden gruppiert nach Klient und Belegkreis angezeigt und
    können auf- und zugeklappt werden.

> **Listenansicht**: Anzeige der Belege in einer Liste inklusive
> Belegdaten.

-   Sortierung mittels Anwahl der Überschrift möglich.

-   <img src=".\img/image13.png"
    style="width:0.19861in;height:0.19722in" />Alle für den
    Buchungsvorschlag notwendigen Felder wurden in der
    Belegdatenerkennung ausgelesen.

-   <img src=".\img/image14.png"
    style="width:0.19722in;height:0.17639in" />Nicht ausgelesene, aber
    für einen vollständigen Buchungsvorschlag notwendige Felder werden
    gelb markiert, wenn mit der Maus das graue Symbol fokussiert wird.

> **Detailansicht**: Anzeige der Daten von markierten Belegen.

-   Die Detailansicht kann entweder horizontal unten oder vertikal
    rechts angezeigt werden.

-   Anzeige der Details zum aktuell markierten Beleg.

-   Ändern von Belegdaten für einen oder mehreren markierten Belegen.

-   Buchungssperre von Belegen mit der Option *Buchung gesperrt.*

Hinweis

Die Reihenfolge, Markierung und Anzahl der Belege ist in der Seiten- und
Listenansicht immer synchron.

### Belege/Seiten bearbeiten

In der Seitenansicht werden die Belege für die Weiterverarbeitung
aufbereitet. Folgende Möglichkeiten stehen zur Verfügung:

-   Einzelseiten markieren

Seite mit der linken Maustaste anwählen

-   mehrseitigen Beleg markieren

Beleg mit Klammer-Symbol im linken oberen Randbereich anklicken.

-   mehrere Belege markieren

    -   Belege außerhalb der Vorschaubilder mit gedrückter linker
        Maustaste und ziehen

    -   Belege mit Strg- bzw. Shift-Taste und linker Maustaste
        markieren.

-   Gruppe markieren

Alle Belege innerhalb einer Gruppe mit Klick auf die Gruppenüberschrift
markieren

-   mehrseitige Belege auftrennen

    -   Seiten auftrennen: Es werden die markierten Seiten in
        Einzelseiten aufgetrennt

    -   Belege auftrennen:

        -   Automatisch: es wird versucht, das gesamte Dokument aufgrund
            verschiedener Kriterien in die richtigen Einzelbelege
            aufzutrennen

        -   Nach jeder Seite: das Dokument wird in Einzelseiten
            aufgetrennt, mehrseitige Belege müssen manuell wieder
            zusammengefügt werden

        -   Nach/Vor markierten Seiten: Mit der Funktion Seiten mit Text
            markieren können bestimmte Seiten mit einem bestimmten
            Inhalt markiert werden. Anschließend kann z.B. immer vor der
            markierten 1. Seite eines Beleges ein Schnitt gemacht werden

    -   per Drag&Drop Einzelseiten herausziehen

-   Einzelseiten zusammenführen

    -   per Drag&Drop zusammenführen

    -   Seiten markieren und mit rechter Maustaste Seiten zusammenführen
        verbinden

-   Belege drehen

Seite markieren und mit der rechten Maustaste 90° rechts/links,
180°drehen anwählen

-   leere Seiten löschen

rechte Maustaste Leere Seiten markieren und Entf-Taste oder rechte
Maustaste Löschen anwählen

-   Beleg sichern

Beleg markieren und mit rechter Maustaste Beleg ins Dateisystem
exportieren speichern

-   Beleg drucken

Beleg markieren und mit rechter Maustaste Beleg drucken

-   Beleg im RZL PDF-Manager anzeigen

Beleg markieren und mit rechter Maustaste Beleg(e) im RZL PDF-Manager
anzeigen.

-   Beleg per Mail versenden

Beleg markieren und mit rechter Maustaste Beleg(e) versenden

-   Beleg duplizieren

Beleg markieren und mit rechter Maustaste Beleg(e) duplizieren. Derselbe
Beleg steht nun ein zweites Mal zur Verfügung.

-   Änderungen zurücksetzen

Alle Änderungen, die bisher durchgeführt wurden, werden rückgängig
gemacht und der Original-Zustand der Dateien im Scanordner wird
wiederhergestellt.

### Belege zusammenführen

-   Zusammenführen mit Hilfe der rechten Maustaste und Kontextmenü:

Nach Anwahl der rechten Maustaste und des Eintrags Zusammenfügen werden
die aktuell markierten Belege zusammengeführt.

-   Zusammenführen durch das Ziehen mit der Maus:

Sie können Belege sehr einfach durch Ziehen mit der Maus per Drag & Drop
zusammenführen.

<img src=".\img/image15.png"
style="width:4.33071in;height:2.00697in" />

**1**

### OCR-Erkennung

> Das Symbol *Text vorhanden* (links unten am Beleg) zeigt in der
> Seitenansicht mittels Tooltip die Herkunft des Volltextes an.
> Zusätzlich wird dies pro Beleg auch in einer eigenen Spalte in der
> Listenansicht angezeigt.
>
> <img src=".\img/image16.png"
> style="width:2.32598in;height:0.65047in" />

Folgende Möglichkeiten gibt es:

1.  **OCR: Original:**

> Der im PDF eingebettete und mitgelieferte Volltext wird verwendet.

-   Belege, die aus der Fakturierung direkt als PDF ausgegeben wurden ⇨
    Originaltext ist im PDF enthalten.

-   Belege, die gescannt wurden und der Volltext mittels OCR-Erkennung
    ergänzt wurde (z.B. durch die Scansoftware vom Scanner).

> *Tipp:* Über die *benutzerdefinierte Belegdatenerkennung* kann mit der
> Funktion *RZL Texterkennung erzwingen* jederzeit der Originaltext
> verworfen und vom Modul Belege mittels Microsoft oder tessercat-OCR
> neu ausgelesen werden.

1.  **OCR-Erkennung direkt im Modul Belege im RZL Board**

> Falls die Belege keinen OCR-Volltext enthalten, wird die
> OCR/Texterkennung erst direkt im Modul Belege durchgeführt. Die
> Einstellungen finden Sie im Menüpunkt *Belege / Einstellungen /
> Texterkennung (OCR)*. Für die OCR-Volltext-Erkennung im Modul Belege
> setzt RZL (je nach gewählter Einstellung) folgende Fremdsoftware ein:

-   Microsoft OCR-Erkennung (nur mit Windows 10 oder 11)

-   Tesseract-OCR von Google (alle Betriebssysteme)

### Belegansicht öffnen

Bei zwei zur Verfügung stehenden Bildschirmen kann zusätzlich zum RZL
Board durch Doppelklick auf einen Beleg ein extra Belegfenster angezeigt
werden, in dem der jeweils markierte Beleg (über die Seiten- oder
Listenansicht) über den ganzen Bildschirm inkl. der Belegdaten angezeigt
wird.

Hinweis

Dieses extra Belegfenster kann beliebig verschoben werden und während
der Bearbeitung jederzeit geöffnet bleiben!

Wird mit gedrückter linker Maustaste der Cursor über einen Wert gezogen,
wird der tatsächlich erkannte Text unterhalb des Mauszeigers angezeigt.

Folgende Funktionen stehen in der Belegansicht zur Verfügung:

<img src=".\img/image17.png"
style="width:6.44181in;height:0.60495in" />

-   Belegdaten speichern

Werden in der rechten Leiste Belegdaten verändert, können diese hier
gespeichert werden.

-   Drucken

Der Beleg kann ausgedruckt werden

-   Kopie speichern

Eine Kopie des Beleges kann extern im Dateisystem gespeichert werden

-   Versenden

Der Beleg kann per E-Mail versendet werden. Optional kann hier auf Basis
der Belegdaten mit Platzhaltern ein Dateiname generiert werden.

-   Im RZL PDF-Manager anzeigen

Der Beleg wird im RZL Manager angezeigt und kann dort weiterverarbeitet
werden.

-   Markierten Text kopieren

Ein am Beleg markierter Text kann in die Zwischenablage gelegt werden.

-   Zoom

Die Darstellung des Beleges kann angepasst werden (Vergrößern /
Verkleinern / fixe Zoomstufe).

-   Navigation

Mit diesen vier Schaltflächen können Sie zum vorherigen/nächsten Beleg
wechseln bzw. innerhalb eines mehrseitigen Beleges die Seiten
durchblättern.

-   Textansicht anzeigen

Der Beleg kann durch Klick auf diese Funktion vollständig in der
Textansicht/OCR-Ansicht angezeigt werden.

> *Normalanzeige vs. Text/OCR-Anzeige*

<img src=".\img/image18.png"
style="width:3.26681in;height:2.26855in" /><img src=".\img/image19.png"
style="width:3.28611in;height:2.27223in" />

-   PDF Anmerkungen anzeigen

Im Adobe Reader erfasste Textkommentare werden angezeigt, wenn diese
Option aktiviert ist.

-   Belegdaten markieren

Ausgelesene Belegdaten werden am Beleg gelb markiert angezeigt.

-   Alle Belegfelder anzeigen

In der Belegdaten-Leiste rechts werden je nach Einstellung mehr oder
weniger (nur die wichtigsten) Belegdatenfelder angezeigt.

-   Kommentar anzeigen

Ein im Feld Kommentar erfasster Text wird direkt am Beleg angezeigt.

-   Belegdaten erkennen

Für den soeben geöffneten Beleg die Belegdatenerkennung durchführen.

### Belegdaten erkennen

Der nächste Schritt ist die Belegdatenerkennung. Wählen Sie dazu oben in
der Leiste *„Belegverarbeitung“* den Eintrag *„Belegdaten erkennen“*,
wenn alle Belege erkannt werden sollen oder *„Ausgewählte Belegdaten
erkennen“*, wenn die Belegdatenerkennung nur für die markierten Belege
durchgeführt werden soll. Die Funktionen sind alternativ auch mit der
rechten Maustaste erreichbar.

Hinweis

**OCR-Erkennung ≠ Belegdatenerkennung**

Bei der OCR-Erkennung wird der gesamte vorhandene Text jeder Seite
ausgelesen, die Beleg­daten­erkennung nutzt anschließend diesen
ausgelesenen Text, um bestimmte Daten zu finden (Datum, Belegnummer,
Betrag, …). Wird also ein bestimmter Wert von der OCR-Erkennung nicht
erkannt/ ausgelesen, kann die RZL Belegdatenerkennung oder auch eine
Schablone diesen Wert nicht finden.

<img src=".\img/image20.png"
style="width:3.14544in;height:0.90614in" />

Bei der Belegdatenerkennung werden folgende Schritte durchgeführt:

-   Die Texterkennung (OCR-Erkennung) wird durchgeführt, wenn diese noch
    nicht im Hintergrund ausgeführt wurde (Funktion in den Stammdaten
    des Scanordners unbedingt aktivieren).

-   Die RZL Belegdatenerkennung versucht auf Basis des vorhandenen
    Textes, mit verschiedensten Logiken in den verschiedenen Feldern,
    Belegdaten automatisch zu finden.

-   Zusätzlich werden die vom Benutzer angelegten Regeln, die in den
    Belegschablonen abgespeichert sind anhand des Erkennungsmerkmals
    gesucht und angewendet.

-   Wenn am Beleg eine UID-Nummer gefunden wird, wird über FinanzOnline
    der Name und die Anschrift ausgelesen und bspw. bei ER im Feld
    Rechnungssteller angezeigt.

Hinweis

Über die Funktion „*Belegdaten erkennen*“ werden jedes Mal alle Belege
neu ausgelesen. Das heißt, falls neue Regeln in einer Schablone angelegt
wurden, die auch für andere Belege passen, dann wird die neue Schablone
bei neuerlichem Klick auf diese Funktion auch bei den anderen Belegen
verwendet.

Die Ergebnisse der Belegdatenerkennung sind am besten in der
Listenansicht ersichtlich (bzw. für einen einzelnen Beleg auch über die
Detailansicht).

Die letzte Spalte zeigt zusätzlich an, ob alle Felder, die für den
Buchungsvorschlag notwendig sind, ausgelesen wurden (grünes Symbol) oder
ob Felder fehlen (graues Symbol). Wenn Sie die Maus auf ein graues
Symbol stellen, sehen Sie fehelende Werte gelb eingefärbt.

Hinweis

Die Belege könnten auch bei fehlenden Einträgen abgeschlossen und
gebucht werden. Die fehlenden Werte müssen (wie auch ohne dem Modul
Belegverarbeitung) in der Buchhaltung bzw. EA-Rechnung beim Buchen
ergänzt werden.

<img src=".\img/image21.png"
style="width:6.29921in;height:1.52208in" />

Sie können fehlenden Daten durch Anlage einer neuen Belegschablone
ergänzen, damit das entsprechende Feld in Zukunft immer richtig
ausgelesen werden kann. Details dazu weiter unten.

Hinweis

Sie können sämtliche Änderungen, die Sie bei den Belegen durchgeführt
haben wieder rückgängig machen, indem Sie mit der rechten Maustaste auf
eine graue Fläche klicken und die Funktion „Änderungen zurücksetzen“
aufrufen. Somit stehen die Belege wieder so zur Verfügung, wie die
Dateien ursprünglich in den Scanordner gespeichert wurden.

#### Benutzerdefinierte Belegdatenerkennung

Mit Hilfe der *Benutzerdefinierten Belegdatenerkennung* können die
Logiken der Belegdatenerkennung einmalig eingestellt/übersteuert werden
bzw. der mitgelieferte Text verworfen und die OCR-Erkennung mit der
gewünschten Software neu durchgeführt werden. Zusätzlich können Sie die
RZL Belegdatenerkennung erzwingen (manuell oder aus Fremdsystemen
übernommene Werte werden überschrieben).

Dies sind keine Einstellungen für die „normale“ Belegdatenerkennung,
sondern können nur über benutzerdefiniert immer einmalig ausgeführt
werden.

<img src=".\img/image22.png"
style="width:5.90551in;height:1.78281in" />

### Name/Anschrift über UID-Nummer auslesen

Mit dieser Funktion werden bei Eingangsbelegen die Daten des Lieferanten
und bei Ausgangsbelegen die Daten des Kunden ausgelesen. Mit Hilfe der
ausgelesenen UID-Nummer des Lieferanten oder Kunden wird über Finanz
Online der Name und die Anschrift ausgelesen und in das entsprechende
Feld übernommen. Somit haben Sie auch in der Liste der *ungebuchten
Belege / Belegfreigabe* eine bessere Überschrift von wem oder an wen die
Rechnung ging.

Ausgelesene UID-Nummern werden für eine gewisse Zeit
zwischengespeichert, sodass bei denselben Lieferanten nicht jedes Mal
über Finanz Online abgefragt werden muss.

Damit diese Funktion genutzt werden kann, muss entweder in der ZMV
(Allg. Dateien / Stammmdaten Absender / Online Dienste) oder im KIS
(Verwaltung / FinanzOnline-Zugänge) ein Finanz Online Webservice
Benutzer hinterlegt sein.

Diese Funktion kann optional auch deaktiviert werden (*BELEGE /
Einstellungen / Grundeinstellungen*).

### Belege ins RZL Board übernehmen

Der letzte Schritt nach der Belegdatenerkennung ist das endgültige
Hinzufügen der Belege ins RZL Board (ins Dokumenten-Management-System).
Wählen Sie dazu oben in der Leiste *„Belegverarbeitung“* den Eintrag
*„Alle übernehmen“*, wenn alle vorhandenen Belege übernommen werden
sollen oder *„Auswahl übernehmen“*, wenn nur die markierten Belege ins
RZL Board übernommen werden sollen. Die Belege stehen dann im Modul
Belege als ungebucht zur Verbuchung in der FIBU/EA bereit.

<img src=".\img/image23.png"
style="width:1.65347in;height:0.97431in" />Nach erfolgreicher Übernahme
werden die Dateien aus dem Scanordner gelöscht.

<span class="mark">  
</span>

Bei der Belegübernahme werden die Belege geprüft, ob exakt dieselbe
Datei in den letzten 30 Tagen bereits hinzugefügt wurde. Ist dies der
Fall ist folgende Meldung zu bestätigen um den Beleg nochmals zu
übernehmen. Mit Abbrechen wird nichts übernommen und der Beleg kann
bspw. aus dem Scanordner gelöscht werden.

<img src=".\img/image24.png"
style="width:3.20513in;height:1.15385in" />

### Detailbeschreibung aller Funktionen in der Leiste „Belege hinzufügen“

<img src=".\img/image25.png"
style="width:6.29921in;height:0.64459in" />

-   Neue Klientengruppe

Es wird ein neuer Bereich für einen weiteren Klienten angelegt. In
diesen Bereich können dann Belege per Drag & Drop gezogen werden (z.B.,
wenn Belege für mehrere Klienten im Scanordner vorhanden sind).

-   Neue Belegkreisgruppe

Es wird ein neuer Bereich für einen weiteren Belegkreis innerhalb des
Klienten angelegt. In diesen Bereich können dann Belege per Drag & Drop
gezogen werden (z.B. wenn Belege für mehrere Belegkreise im Scanordner
vorhanden sind).

-   Vordefinierte Ansichten

Die drei Bereiche (Seiten-, Listen- und Detailansicht) können
unterschiedlich platziert werden.

-   Live-Sortierung

Bei aktivierter Funktion werden Belege sofort nach dem aktuell
aktiviertem Sortierkriterium sortiert, wenn sich Belegdaten verändern.

-   Seitenansicht ausblenden

Bei vielen Belegen kann das Laden der Seitenansicht einige Zeit dauern,
daher kann optional die Seitenansicht ausgeblendet werden (ab 500 Seiten
automatisch).

-   Gruppenübersicht einblenden

In der Seitenansicht wird links eine Zusammenfassung der vorhandenen
Klienten und Belegkreise mit der Summe der vorhandenen Belege angezeigt.
Diese Ansicht kann auch verwendet werden, um bspw. Belege per Drag&Drop
in einen anderen Bereich (Klient oder Belegkreis) zu verschieben. Dieser
Bereich kann jederzeit ein- und ausgeblendet werden.

-   Alles markieren

Alle Belege werden markiert.

-   Leere Seiten markieren

Es werden alle leeren Seiten markiert, damit diese gesammelt gelöscht
werden können.

-   Markierte Seiten löschen

Aktuell markierte Seiten werden gelöscht.

-   Belege auftrennen

Markierte Belege in Einzelseiten auftrennen.

-   Automatisch: es wird versucht, das gesamte Dokument aufgrund
    verschiedener Kriterien, in die richtigen Einzelbelege aufzutrennen

-   Nach jeder Seite: das Dokument wird in Einzelseiten aufgetrennt,
    mehrseitige Belege müssen manuell wieder zusammengefügt werden

-   Nach/Vor markierten Seiten: Mit der Funktion Seiten mit Text
    markieren können bestimmte Seiten mit einem bestimmten Inhalt
    markiert werden. Anschließend kann z.B. immer vor der markierten 1.
    Seite eines Beleges ein Schnitt gemacht werden

<!-- -->

-   Belegdaten erkennen

Wenn alle Belege einem Klienten und einem Belegkreis zugeordnet sind,
kann diese Funktion ausgeführt werden. Zwei Aktionen werden ausgeführt:

1.  Es wird die Texterkennung (OCR-Erkennung) durchgeführt (wenn noch
    nicht im Hintergrund bereits erledigt) und es wird die

2.  *Belegdatenerkennung* ausgeführt. Dabei werden die Werte anhand der
    verschiedenen Möglichkeiten ausgelesen (QR Code, RZL
    Belegdatenerkennung, Schablonen …) und beim Beleg gespeichert.

-   Ausgewählte Belegdaten erkennen

Selbe Funktion wie Belegdaten erkennen – gilt nur für markierte Belege.

-   Benutzerdefinierte Belegdatenerkennung

für die Belegdatenerkennung können über benutzerdefiniert folgende
zusätzliche Funktionen für alle (*Ausführen (alle))* oder nur für
markierte Belege (*Ausführen (nur Auswahl))* ausgeführt werden:

-   Texterkennungs-Software: Sie können einmalig die in den
    Einstellungen festgelegte OCR-Engine übersteuern und die hier
    eingestellte verwenden.

-   RZL Texterkennung erzwingen: Wurde beispielsweise die
    OCR/Texterkennung bereits vom Scanner durchgeführt, führt das Modul
    Belege keine Texterkennung mehr durch, sondern verwendet den
    mitgelieferten Text. Mit dieser Funktion kann der Text vom Scanner
    verworfen und mit der oben eingestellten OCR-Engine neu ausgelesen
    werden. Dies kann z.B. verwendet werden, um die Qualität zu
    vergleichen.

-   QR-Codes auslesen (Registrierkassa/BCD/Stuzza): Standardmäßig wird
    bei der Belegdatenerkennung (nicht benutzerdefiniert) als erstes ein
    ev. vorhandener QR Code ausgelesen. Soll dies vermieden werden, muss
    diese Option deaktiviert werden.

-   Schablonensystem verwenden: Diese Option entscheidet, ob die
    benutzerdefinierten Regeln, die einer Schablone abgespeichert sind,
    angewendet werden.

    -   Bereits zugeordnete Schablone belassen: Falls bei Belegen
        bereits eine Schablone zugeordnet ist, bleibt diese auf jeden
        Fall zugeordnet auch wenn das Modul Belege anhand des
        Erkennungsmerkmals eine andere Schablone finden würde.

    -   Schablone: Wird hier manuell eine Schablone ausgewählt, wird
        diese bei Ausführung der benutzerdefinierten Belegdatenerkennung
        unabhängig vom Erkennungsmerkmal verwendet.

        -   RZL Erkennungslogik verwenden: Als letztes wird die von RZL
            entwickelte Logik verwendet, um Belegdaten auszulesen (wenn
            kein QR-Code, Schablone usw. vorhanden ist).

        -   RZL Belegdatenerkennung erzwingen: Manuell erfasste oder aus
            Fremdsystemen übernommene Werte werden überschrieben.

<!-- -->

-   Alle übernehmen

Alle vorhanden Belege werden ins Modul Belege übernommen und stehen als
ungebucht zur Verbuchung in der FIBU/EA bereit. Nach erfolgreicher
Übernahme werden die Dateien aus dem Ordner gelöscht.

-   Auswahl übernehmen

Nur markierte Belege werden ins Modul Belege in die Ansicht *Ungebuchte
Belege* bzw. *Belegfreigabe* übernommen. Nach erfolgreicher Übernahme
werden die Dateien aus dem Ordner gelöscht.

## Möglichkeiten zum Belegimport

### ebInterface

XML-Rechnungen im ebInterface Format können über einen Scanordner oder
auch über das Klientenportal verarbeitet werden. Da es sich hier um ein
strukturiertes Rechnungsformat handelt, werden die in der Datei
vorkommenden Belegdaten sofort ohne Belegdatenerkennung beim Beleg
angezeigt. RZL unterstützt die Formate 4.1 und 4.3.

Weitere Details dazu finden Sie Online unter:  
<https://www.wko.at/service/netzwerke/ebinterface-aktuelle-version-xml-rechnungsstandard.html>

<img src=".\img/image26.png"
style="width:6.29221in;height:4.79208in" />

### Extras / Beleg mit XML importieren

Über diesen Menüpunkt können Belege, die aus anderen RZL Installation
mit Belegdaten exportiert wurden wieder importiert werden. Dies kann
genutzt werden, um Belege von einer auf eine andere Installation zu
übertragen.

Details dazu finden Sie in einer eigenen Kurzanleitung *Belege mit
XML-Belegdaten exportieren und in andere Installation importieren.*

### Modul XML Belegdatenimport Schnittstelle

RZL bietet ein eigenes XML-Format an, um Belege mit Belegdaten aus
Fremdsystem in die RZL Belegverarbeitung zu übernehmen. Eine
Beschreibung zum RZL XML-Format kann jederzeit kostenlos bei RZL
angefordert werden (<Software@rzl.at>). Zum Import von Belegen mit
Belegdaten im XML-Format muss dann ein entsprechendes Modul bei RZL
lizenziert sein.  
  
Diese Belege können dann entweder über einen Scanordner oder auch über
den oben beschriebenen Menüpunkt *Belege mit XML importieren* übernommen
werden. Somit ist bei RZL zumindest für die Felder, die über die
XML-Datei geliefert werden, keine Belegdatenerkennung mehr notwendig.

Details dazu finden Sie in einer eigenen Kurzanleitung *Belege mit
XL-Belegdaten aus Fremdsystem übernehmen.*

<img src=".\img/image27.png"
style="width:6.30055in;height:4.77541in" />

## Belegansichten nach dem Hinzufügen der Belege

> Über den Menüeintrag Belege finden Sie die Beleglisten *Ungebuchte*
> Belege / *Gebuchte Belege.*
>
> <img src=".\img/image28.png"
> style="width:4.92323in;height:1.00081in" />

### Ungebuchte Belege

Diese Belege wurden beim Hinzufügen dem Klienten zugewiesen und warten
auf die Verbuchung in der RZL FIBU in der Liste der ungebuchten Belege.
Solange Belege noch nicht gebucht wurden und somit in diese Liste
angezeigt werden, können die Belege und Belegdaten jederzeit verändert
werden. Die Möglichkeiten der Bearbeitung finden Sie nachfolgend.

> <img src=".\img/image29.png"
> style="width:6.60065in;height:3.96377in" />

-   Spalten filtern

Pro Spalte haben Sie Möglichkeit, die Daten zu filtern. Klicken Sie dazu
in der Spaltenüberschrift auf das blaue Filtersymbol:  
<img src=".\img/image30.png"
style="width:1.9685in;height:2.0053in" />

-   Layout speichern / speichern unter

In Listenansichten im RZL Board gibt es die Möglichkeit z.B. Spalten
ein- und auszublenden, Spaltenpositionen zu verändern und Filter pro
Spalte zu setzen. Diese Einstellungen und somit die aktuelle Ansicht
kann über *Layout speichern* abgespeichert werden.

Somit können Sie sich beim nächsten Mal dieselbe Ansicht über das
Dropdown *Layout wählen* anzeigen lassen. Wenn Sie die geladene Ansicht
nochmals verändert haben, können Sie entweder die bestehende Ansicht
überspeichern (*Layout speichern*) oder wieder ein neues Layout anlegen
(*Layout speichern unter*). Über den Expertenmodus können noch
detailliertere Filterfunktionen genutzt werden. Diese Layouts sind pro
Liste personenbezogen gespeichert.

-   Beleg löschen

Der markierte Beleg wird aus der Ansicht der ungebuchten Belege gelöscht
und in die Ansicht *Belege Papierkorb* verschoben.

-   Belegdaten erkennen

Auch nach dem Hinzufügen von Belegen kann in der Liste der ungebuchten
Belege eine Belegdatenerkennung ausgeführt werden. Dies kann z.B.
genutzt werden, wenn sich eine Schablone verändert hat und andere
Rechnungen vom selben Rechnungsaussteller nochmals die dieser
neuen/geänderten Schablone ausgelesen werden sollen.

-   Seiten bearbeiten

Bei Belegen, die bereits in die Belegverarbeitung hinzugefügt wurden und
somit in der Ansicht der ungebuchten Belege sichtbar sind, können Sie
Seiten im Nachhinein noch bearbeiten. Klicken Sie dazu auf die Funktion
*Seiten bearbeiten* in der Menüleiste.

<img src=".\img/image31.png"
style="width:3.14961in;height:1.28287in" />

<img src=".\img/image32.png"
style="width:5.90551in;height:3.94743in" />

Es öffnet sich dabei ein eigener Dialog mit folgenden Möglichkeiten:

-   Seiten aus RZL Quellen (Scanordner, Verzeichnis, Klientenportal,
    Finmatics) im RZL Board per Drag & Drop anhängen.

-   Seiten aus externen Quellen, z.B. vom Windows-Explorer oder MS
    Outlook mittels Drag & Drop anhängen.

-   Seiten aus der Ansicht *Seiten bearbeiten* z.B. in einen Scanordner
    im RZL Board rausziehen.

-   Seiten bearbeiten für zwei Belege öffnen, um diese im Nachhinein
    zusammenzufügen.

-   Die Reihenfolge der Seiten verändern bzw. Seiten Löschen.

-   Einschränkung: wenn bereits eine Freigabe-Aktion mit dem Modul
    Belegfreigabe getätigt wurde, können Sie bestehende Seiten nicht
    löschen.

<!-- -->

-   Versenden

Beleg per E-Mail versenden. Die bei diesem Klienten hinterlegten
E-Mail-Adressen werden vorgeschlagen. Optional kann auch ein Dateiname
auf Basis der Belegdatenfelder generiert werden.

-   Kopie des Belegs speichern

Die Datei nochmals in einen bestimmten Ordner abspeichern. Dabei kann
auf Basis der Belegdaten ein Dateiname generiert werden. Optional können
hier die Belegdaten mittels einer XML-Datei mitexportiert werden. Dies
kann genutzt werden, um den Beleg mit Belegdaten in einer anderen
Installation wieder zu importieren.  
<img src=".\img/image33.png"
style="width:6.29921in;height:0.65542in" />

-   Beleg in Dokument umwandeln

Falls Sie das RZL KIS mit Dokumentenverwaltung nutzen, können Sie die
Datei (wenn es sich nicht um einen Beleg handelt) in die
Dokumentenablage ins KIS verschieben.

-   Im RZL PDF-Manager anzeigen

Der Beleg wird im RZL PDF-Manager geöffnet und kann dort
weiterverarbeitet werden.

-   Beleg in Scanordner zurücksetzen

Der markierte Beleg wird in den ausgewählten Scanordner zurückgesetzt.

-   Belege synchronisieren

Bei aktivierter Belegsynchronisation kann diese hier manuell angestoßen
werden.

-   Buchungssperre

Sie können den Beleg für die Verbuchung in der FIBU / EA sperren. Erst
wenn die Sperre wieder aufgehoben wurde, können Sie den Beleg buchen.

-   Liste drucken / exportieren / kopieren

Die angezeigte Liste kann mit diesen Funktionen weiterverarbeitet
werden.

### Gebuchte Belege

> Anzeige der bereits gebuchten Belege mit den Buchungsinformationen des
> tatsächlichen Buchungssatzes. Details dazu finden Sie in einem eigenen
> Kapitel weiter unten.

## Detailbeschreibung Belegdaten und Anlage von Schablonen

### Allgemein

Wenn die RZL Belegdatenerkennung ein bestimmtes Feld bei einem Beleg
nicht auslesen konnte (z.B. UID-Nummer, Belegdatum, Gesamtbetrag,
Beleg/Fremdbelegnummer, Kundennummer, Name, Buchungstext,
Zahlungsreferenz, …), besteht die Möglichkeit, für dieses Feld eine oder
mehrere benutzerdefinierte Regel(n) anzulegen. Diese Regel wird in der
Schablone für einen bestimmten Rechnungssteller gespeichert und gilt
immer für die gesamte RZL Installation. Die restlichen Felder werden
weiterhin mit der RZL Belegdatenerkennung ausgelesen.

Wenn die Belegerkennung mit Hilfe der RZL Belegdatenerkennung nicht alle
für die Buchung relevanten Werte auslesen konnte, wird in der rechten
Spalte der Listenansicht ein graues Symbol (**1**) angezeigt. In diesem
Fall haben Sie die Möglichkeit, eine benutzerdefinierte Regel für das
entsprechende Feld anzulegen.

Hinweis

In der Praxis muss natürlich abgewogen werden, ob es Sinn macht, eine
Regel anzulegen (wenn der Beleg öfters vorkommt) oder die fehlenden
Belegdaten beim Buchen zu ergänzen (bei Belegen, die selten vorkommen).

<img src=".\img/image34.png"
style="width:6.29921in;height:1.51642in" />

**1**

Durch einen Doppelklick auf die Zeile in der Listenansicht wird der
Beleg aufgerufen und im rechten Bereich werden die Ergebnisse der
Belegdatenerkennung angezeigt.

### <img src=".\img/image35.png"
style="width:2.62153in;height:9.45069in" />Belegdaten-Felder

Folgende Felder stehen derzeit zur Verfügung, um Daten auszulesen,
Regeln anzulegen bzw. manuell Werte zu erfassen:

-   Allgemein

    -   Klientenzuordnung

    -   Belegkreis

    -   Kommentar (Notizen zu diesem Beleg, kann auch bei gebuchten
        Belegen geändert werden) – wird direkt am Beleg angezeigt

    -   Freigabefunktionen (mit Modul Belegfreigabe)

    -   Schablone

    -   Gutschrift (Buchungsvorschlag wird gedreht)

    -   Belegdatum

    -   Beleg- bzw. Fremdbelegnummer

    -   Gesamtnettobetrag (auch Fremdwährungen möglich)

    -   Gesamtsteuerbetrag (auch Fremdwährungen möglich)

    -   Gesamtbruttobetrag (auch Fremdwährungen möglich)

    -   Personenkonto-Nr. bzw. Kontonummer

    -   Buchungstext

    -   Zahlungsreferenz

    -   Kostenstelle

    -   Kostenträger

-   Rechnungssteller

    -   Name/Anschrift

    -   UID-Nummer

    -   IBAN + BIC vom Rechnungssteller

-   Rechnungsempfänger

    -   Name/An­schrift

    -   UID-Nummer

    -   Kundennummer

-   Steuerzeilen (Gegenbuchungen) - diese Steuerzeilen dienen zur
    Aufteilung des Beleges auf verschiedene Steuersätze.

    -   Steuer % /-fall

    -   Steuercode

    -   Steuerbetrag

    -   Nettobetrag

    -   Bruttobetrag

    -   Kontonummer

    -   Buchungstext

    -   Kostenstelle

    -   Kostenträger

    -   Buchungshinweis (kann genutzt werden, um in der FIBU dazu eine
        Regel Gegenbuchung anzulegen)

-   Sonstiges

    -   Belegeingangsdatum (Tagesdatum wird vorgeschlagen, kann
        abgeändert werden)

    -   Bezahlt am

-   

> Bei jedem einzelnen Feld wird angezeigt, wie der Wert zustande
> gekommen ist. Folgende Möglichkeiten gibt es:
>
> <img src=".\img/image36.png"
> style="width:0.15972in;height:0.15972in" /> *QR Code
> (Registrierkassa/BCD/Stuzza)*
>
> <img src=".\img/image37.png"
> style="width:0.15748in;height:0.15705in" /> *RZL Belegdatenerkennung*
>
> <img src=".\img/image38.png"
> style="width:0.15748in;height:0.15681in" /> *Schablone
> (benutzerdefinierte Regel)*
>
> <img src=".\img/image39.png"
> style="width:0.15748in;height:0.15748in" /> *Manuell eingegeben*
>
> <img src=".\img/image40.png"
> style="width:0.16667in;height:0.15972in" /> *Automatisch berechnet*
> (z.B. der Steuerbetrag, wenn *Gesamtnetto-* & *Gesamtbruttobetrag*
> ausgelesen wurden).
>
> ![](.\img/image41.png) Importiert von einer XML-Datei
>
> <img src=".\img/image42.png"
> style="width:0.16665in;height:0.16665in" /> Das Feld Name/Anschrift
> wurde über die UID-Überprüfung bei FinanzOnline ausgelesen

Hinweis

Detaillierte Infos werden mit einem Tooltip am jeweiligen Symbol
angezeigt (Mauszeiger auf das Symbol stellen)!

### Benutzerdefinierte Regel anlegen 

> Die Symbole rechts neben den Feldern haben folgende Funktion:

-   *Wert übernehmen:* Mit dieser Funktion wird der markierte Wert für
    den aktuellen Beleg einmalig übernommen und gespeichert (keine
    Auswirkung auf zukünftige Belege)

> ![](.\img/image43.png) *Regel anlegen:* Dieses Symbol
> steht zur Verfügung, um eine Regel für ein bestimmtes Feld anzulegen,
> wenn die *RZL Belegdatenerkennung* den Wert nicht richtig auslesen
> konnte. Markieren Sie dazu den gewünschten Wert am Beleg und klicken
> Sie auf dieses Symbol. Vergeben Sie einen Namen für diese neue
> Schablone und klicken Sie auf OK (Die Funktion *kopieren von* nur
> verwenden, wenn Sie Regeln von einer anderen Schablone übernehmen
> möchten).
>
> <img src=".\img/image44.png"
> style="width:3.93701in;height:2.46686in" />
>
> Die für dieses Feld angelegte Regel wird bei diesem
> Rechnungsaussteller zukünftig immer verwendet.
>
> ***Fixen Wert festlegen:*** Um eine leere Regel anzulegen (ohne
> markierten Wert am Beleg) halten Sie die *Umschalt*-Taste gedrückt und
> klicken erst dann auf dieses Symbol, um z.B. um einen **fixen Wert**
> bei einer Schablone zu hinterlegen. Damit dann ein fixer Wert
> hinterlegt werden kann muss rechts oben noch auf das Bleistiftsymbol
> mit dem Plus geklickt und die Abfrage, ob die Regel überschrieben
> werden soll, mit OK bestätigt werden. Ein fixer Wert kann bspw. für
> das Feld UID-Nummer oder Buchungstext verwendet werden, wenn z.B. die
> UID-Nummer von der OCR-Erkennung schlecht ausgelesen werden kann.
> Somit ist die UID-Nummer bei einer Rechnung dieses Rechnungsstellers
> als Fixwert hinterlegt und wird nicht mittels einer Regel ausgelesen.
> Auch der Buchungstext würde dann entsprechend der Hinterlegung bei
> jeder Rechnung dieses Rechnungsausstellers vorgeschlagen werden.
>
> <img src=".\img/image45.png"
> style="width:0.15972in;height:0.15972in" /> *Regel bearbeiten:* Wenn
> für ein Feld bereits eine Regel bei der aktuellen Schablone hinterlegt
> ist, wird dieses Symbol angezeigt. Die bestehende Regel der
> verwendeten Schablone kann bearbeitet werden. Die verwendete Schablone
> wird in einem eigenen Feld angezeigt.

#### Anlegen/Bearbeiten der Erkennungsregel – z.B. fehlende Fremdbelegnummer

<img src=".\img/image46.png"
style="width:2.55906in;height:3.55013in" />Wenn Sie nun eine neue Regel
für ein bestimmtes Feld über das Symbol
<img src=".\img/image47.png"
style="width:0.16042in;height:0.17014in" /> anlegen, haben Sie
verschiedenen Möglichkeiten, die Regel zu definieren bzw. zu optimieren.

**4**

Das Ziel einer jeden Regel ist, dass nur mehr ein Resultat (**2**)
übrigbleibt.

**1**

Somit kann in Zukunft der Wert bei Rechnungen dieses Rechnungsstellers
immer gefunden werden (vorausgesetzt die OCR/Texterkennung hat den Text
richtig erkannt).

Zusätzlich haben Sie die Möglichkeit mit der Funktion *Erkennungsregel
hinzufügen* (**3**) weitere Erkennungsregeln für dasselbe Feld
anzulegen, falls bei diesem Rechnungsaussteller die Fremdbelegnummer auf
verschiedene Arten ausgelesen werden muss (z.B. deutsche und englische
Rechnungen oder relativ zu *Rechnung* bzw. *Teilrechnung* oder
*Gutschrift*).

**3**

**2**

Jede Regel können Sie im Feld oberhalb von *auf Seite* benennen (**4**),
um beim Resultat sehen zu können, welche Regel den Wert ausgelesen hat.

Hinweis

Mit dem Symbol *Textansicht anzeigen* in der Menüleiste oben kann
zwischen dem Originalbeleg und der Belegansicht umgeschaltet werden.
Alternativ dazu kann durch markieren der Texte und Werte am Beleg kann
kontrolliert werden, welche Daten die OCR/Text-Erkennung ausgelesen hat.

Es wird automatisch auf einen Positionsrahmen „fixe Position“ (**1**)
umgestellt, der einen Rahmen genau beim vorher markierten Wert setzt.
Nur beim Feld Betrag wird automatisch die Funktion „relativ zu“
verwendet, da sich der Betrag im Regelfall nicht immer an derselben
Position befindet.

<img src=".\img/image48.png"
style="width:6.26668in;height:2.65661in" />

**5**

**3**

**4**

**4**

In diesem Fall kann entweder der Positionsrahmen „fixe Position“ so
belassen werden oder ebenfalls auf die Funktion „relativ zu“ (**3**)
umgestellt werden. Das Programm versucht nun automatisch einen
Bezugspunkt (Suchtext) (**4**) zu finden.

Ansonsten markieren Sie bitte den Suchtext innerhalb der Rechnung mit
der Maus (hier: RECHNUNG) und klicken Sie in der Zeile *Suchtext* auf
das Einfügen-Symbol (**5**). Somit wird die Bezeichnung des gewünschten
Suchtextes (Bezugspunkt) eingetragen.

Nach Abschluss der Anpassungen speichern Sie die neue Vorlage durch
einen Klick auf *Speichern*.

Hinweis

Die Felder im Bereich *Allgemein* werden bei der Verbuchung in das
jeweilige Feld übernommen. Die Felder beim *Rechnungsaussteller* bzw.
*Rechnungsempfänger* sind dafür da, um den richtigen Kreditor bei ER
bzw. Debitor bei AR vorschlagen zu können.

Damit dies möglich ist, muss beim Kreditor z.B. die UID-Nummer in den
Stammdaten hinterlegt sein. Diese Hinterlegung nehmen Sie einfach beim
Buchen des jeweiligen Beleges vor bzw. kann dies das Programm
automatisch für Sie übernehmen (*Stamm / Konten /
Aktualisierungsoptionen).*

Ein sehr wichtiges Feld ist u.a. die UID-Nummer des
Rechnungsausstellers. Aufgrund dieser UID-Nummer kann in der
Finanzbuchhaltung bzw. EA-Rechnung die Zuordnung zum Kreditorenkonto
erfolgen, wenn in den Stammdaten der Kreditoren die UID-Nummer
eingetragen ist.

Im RZL Board müssen Sie unbedingt innerhalb der Klientenstammdaten im
Bereich *Finanzamt* die UID-Nummer des Klienten eintragen. Somit kann
das Programm, wenn auf dem Beleg sowohl die UID-Nummer des
Rechnungsausstellers als auch des Rechnungsempfängers angedruckt ist,
die UID-Nummer des Rechnungsempfängers (Klienten) ausschließen.

-   auf Seite

Im Feld *auf Seite* ist in der Erkennungsregel für die Fremdbelegnummer
1 eingetragen. Das bedeutet, dass die Fremdbelegnummer nur auf der
ersten Seite des Belegs gesucht wird, auch wenn der Beleg mehrere Seiten
umfasst. Wenn der gesuchte Wert auf allen Seiten gesucht werden soll,
muss das Feld leer sein.

-   Positionsrahmen:

    -   kein Rahmen: Die Suche wird innerhalb des Belegs aufgrund eines
        Positionsrahmens nicht eingeschränkt. Die Erkennungsregel sucht
        den Wert am gesamten Beleg bzw. auf der ganzen Seite.

    -   Fixe Position: Wenn Sie innerhalb einer Belegschablone einen
        fixen Rahmen setzen, wird bei der Belegdatenerkennung die nur in
        diesem fixen Bereich durchgeführt. Der Erkennungsrahmen bei
        einer fixen Position sollte immer so groß gewählt werden, dass
        eventuelle Unterschiede beim Scannereinzug oder Ausdruck des
        Belegs ausgeglichen werden können, aber auch nicht irrtümlich
        ein falscher Wert gefunden wird.

    -   Relativ zu: Die Anlage eines Positionsrahmens relativ zu bietet
        den Vorteil, dass der gewünschte Wert nicht auf einer fixen
        Position gesucht wird, sondern relativ zu einem Fixpunkt gesucht
        wird (z.B. der Betrag rechts neben dem Wort Gesamtbetrag).

    -   Auto. Auswahl: Falls die oben definierte Regel mehrere
        Ergebnisse liefert, kann über dieses Feld weiter eingeschränkt
        werden, z.B. erstes Vorkommen.

> Hinweis
>
> Falls Sie den Positionsrahmen auf eine andere Position verschieben
> möchten, können Sie diesen links oben mit der Maus durch Klicken und
> Halten auf dieses Symbol bewegen:
> <img src=".\img/image49.png"
> style="width:0.10417in;height:0.10417in" alt="289" />.
>
> Die Höhe des Rahmens ist für das Auslesen des Wertes nicht
> entscheidend, d.h. der Rahmen kann auch auf eine minimale Höhe
> reduziert werden, um auszuschließen, dass ein falscher Wert erkannt
> wird, wenn ober- oder unterhalb weitere Werte vorkommen.

-   Schnitt

Der Positionsrahmen fixe und relative Position öffnet ein zusätzliches
Feld mit der Bezeichnung Schnitt. Sie können hier die Einstellung genau
durch Rahmen treffen. Dann werden die Werte/Ziffern übernommen, die sich
genau im Rahmen befinden. Die Anwahl des Eintrags beim nächsten
Leerzeichen macht den Schnitt (Eintrag der Ziffern/Werte) bis zum
nächsten Leerzeichen, das auch links und rechts außerhalb des gesetzten
Rahmens liegen kann. Ein Datumswert oder Betrag z.B. sollte nie genau
durch den Rahmen abgeschnitten werden, sondern immer beim nächsten
Leerzeichen. Ein zu kleiner, exakt abschneidender Rahmen könnte aus
einem Datum mit 4-stelliger Jahreszahl ein Datum mit 2-stelliger
Jahreszahl machen (1.1.2022 = 1.1.20 = 1.1.2020) oder ein Betrag von
12.000 Euro könnte zu einem Betrag von 2.000 Euro werden.

-   Format

Die Möglichkeit des Formates unterscheidet sich pro Feld, in dem Sie
eine Erkennungsregel erstellen (z.B. Ziffernfolge, Text einzeilig, Text
mehrzeilig, benutzerdefiniert bei der Belegnummer).

### Regeln für Steuerzeilen (Gegenbuchungen) anlegen

Im Bereich der Steuerzeilen können Sie ebenfalls Regeln anlegen, um
Rechnungen mit unterschiedlichem Steuerausweis auslesen zu können.
Genauso können Sie aber nur einen bestimmten Steuersatz mit einer
Erkennungsregel auslesen lassen, z.B. innergemeinschaftliche Lieferungen
/ Erwerbe aufgrund eines bestimmten Textes am Beleg.

Diese Steuerzeilen werden dann beim Buchen (bei mehr als einer
Steuerzeile derzeit nur bei automatischer DMS-Verbuchung) in der FIBU /
EA verwendet.

Das Ziel dieser Regeln ist in weiterer Folge eine automatische
Verbuchung auf Aufwand- und Ertragskonten dieser Steuerzeilen aufgrund
von Verbuchungsregeln in der FIBU (*Stamm / Verbuchungsregeln /
Belegverarbeitung / Gegenbuchungen*). Details dazu finden Sie im
Handbuch zur Finanzbuchhaltung.

Natürlich können Sie in diesem Bereich auch manuell Daten für den
Buchungssatz hinterlegen, z.B. Gegenkonten oder Steuersätze. Diese
Hinterlegung kann in der Detailansicht auch für mehrere Belege gesammelt
vorgenommen werden.

Wie gehen Sie nun vor beim Anlegen einer Regel für eine Steuerzeile:

1.  Klick auf *Neue Steuerzeile anlegen*

2.  Regel für 1. Prozentsatz für den Betrag anlegen

    1.  Gewünschten Wert am Beleg markieren, z.B. den Netto- oder
        Bruttobetrag (je nach Ausweis am Beleg) für 20 % Umsatzsteuer

    2.  Klick auf das + Symbol des jeweiligen Feldes in der Steuerzeile

    3.  Steuer % /-fall für diese Regel festlegen, z.B. 20 %
        Normalsteuersatz

    4.  Regel definieren

3.  Regel für 2. Steuersatz anlegen

    1.  Betrag für 10 % Umsatzsteuer für dasselbe Feld markieren

    2.  Klick auf *Erkennungsregel hinzufügen*

    3.  Steuer % /-fall für diese Regel festlegen, z.B. 10 % ermäßigter
        Steuersatz

    4.  Speichern

Somit werden in Zukunft bei Rechnungen dieses Rechnungsausstellers die
Steuerzeilen 10 % und 20 % immer ausgelesen, wenn sie am Beleg
vorkommen.

<img src=".\img/image50.png"
style="width:6.29921in;height:4.63046in" />

Sie haben auch die Möglichkeit, ein sogenanntes *Steuermerkmal* zu
definieren. Dieses Steuermerkmal kann verwendet werden, um z.B. nur die
Steuerzeile an sich mit einem innergemeinschaftlichen Erwerb aufgrund
eines bestimmten Textes anlegen zu lassen. In der FIBU können Sie eine
Regel definieren, wie ig. Erwerbe bei diesem Klienten gebucht werden
sollen.

<img src=".\img/image51.png"
style="width:6.29921in;height:3.60944in" />

<img src=".\img/image52.png"
style="width:3.14961in;height:2.88647in" />

Zusätzlich können Sie dieses Steuermerkmal aber genauso auch bei einem
normalen Prozentsatz verwenden – in diesem Fall muss das Steuermerkmal
zutreffen, damit z.B. der Betrag für einen bestimmten Prozentsatz
ausgelesen wird.

Hinweis

Wenn der Wert über die Regel für einen bestimmten Betrag schon eindeutig
richtig ausgelesen werden kann (z.B. relativ zu 20%), dann ist das Feld
Steuermerkmal nicht mehr notwendig.

### Allgemeines zu Erkennungsregeln

Das grundsätzliche Problem bei der Belegdatenerkennung ist, dass sich
das Layout und die Begrifflichkeiten, die bei den verschiedenen
Rechnungen der Rechnungssteller verwendet werden, sehr stark
unterscheiden.

Wenn die RZL Belegdatenerkennung ein bestimmtes Feld bei einem Beleg
nicht auslesen konnte, besteht die Möglichkeit, für dieses Feld eine
benutzerdefinierte Regel anzulegen. Diese Regel wird nur für das
entsprechende Feld dieses Rechnungsstellers angelegt. Die restlichen
Felder werden weiterhin mit der RZL Belegdatenerkennung ausgelesen.

Diese neue Regel für ein Feld wird in einer Schablone pro
Rechnungssteller abgespeichert, um für eine spezielle Rechnung
festzulegen, wo und auf welche Weise die jeweiligen
Rechnungsinformationen gefunden werden können (Belegdatum, Gesamtbetrag,
Belegnummer, Buchungstext, Zahlungsreferenz, UID-Nummer, Name/Anschrift,
Kundennummer, …).

### Erkennungsmerkmal zur automatischen Zuordnung der Schablone

<img src=".\img/image53.png"
style="width:2.75556in;height:1.30764in" />Ganz entscheidend bei der
Schablonenanlage ist das Erkennungsmerkmal. Das Erkennungsmerkmal muss
bei jeder Rechnung dieser Firma an derselben Position vorkommen. Es wird
verwendet, um festzustellen, wann welche Schablone verwendet werden
soll. Das Programm versucht die UID-Nummer des Rechnungsausstellers
(**1**) oder den Namen der Schablone am Beleg zu finden und als
Erkennungsmerkmal zu hinterlegen vor. Die Funktion *Erkennungsmerkmal
automatisch ermitteln* wird bei Neuanlage einer Schablone automatisch
ausgeführt.

**2**

**1**

D.h. diese Schablone wird künftig nur verwendet, wenn diese UID-Nummer
auf dem Beleg an der entsprechenden Stelle ausgelesen wird. Die
UID-Nummer sollte als bevorzugtes Erkennungsmerkmal für spezielle
Schablonen verwendet werden. Natürlich kann auch der z.B. der Name des
Rechnungsausstellers im Briefkopf verwendet werden.

Standardmäßig wird ein Erkennungsmerkmal nur auf Seite 1 gesucht. Wenn
Sie mit der rechten Maustaste auf „S.1“ klicken können Sie umstellen auf
die Funktion „Auf allen Seiten suchen“.

Ist die UID-Nummer nicht lesbar oder nicht vorhanden (z.B.:
Kleinunternehmer) oder sollen mehrere Erkennungsmerkmale verwendet
werden, markieren Sie die Information am Beleg und klicken auf die
Schaltfläche *Aktuelle Auswahl hinzufügen* in der Schablone (**2**)
eingetragen.

Wenn einer Schablone ein oder mehrere Erkennungsmerkmal(e) zugewiesen
werden, müssen ALLE Erkennungsmerkmale zutreffen. Wenn nicht alle
Erkennungsmerkmale zutreffen, wird die Schablone nicht verwendet und das
entsprechende Feld mit der RZL Belegdatenerkennung ausgelesen.

Über das Bleistiftsymbol (**1**) neben der jeweiligen Schablone kann das
Erkennungsmerkmal bearbeitet werden.

**1**

<img src=".\img/image54.png"
style="width:3.44749in;height:0.83323in" />

Hinweis

Das Erkennungsmerkmal ist entscheidend, damit bei der
Belegdatenerkennung das Modul Belege selbständig pro Rechnung die
richtige Schablone finden kann. Für alle Felder, wo keine Regel in einer
Schablone definiert ist, wird die Belegdatenerkennung lt. RZL Logik
ausgeführt.

## Anzahl Belege anzeigen

<img src=".\img/image55.png"
style="width:6.23387in;height:1.23344in" />

-   Anzahl Belege monatlich

In dieser Anzeige wird angezeigt, wieviele Belege pro Monat, Belegkreis
und Quelle (z.B. Dateisystem, Klientenportal, Finmatics, …) hinzugefügt
wurden.  
  
<img src=".\img/image56.png"
style="width:6.26953in;height:2.25562in" />

-   Anzahl Belege jährlich

In dieser Anzeige wird angezeigt, wieviele Belege pro Jahr (bzw. in
Summe), Belegkreis und Quelle (z.B. Dateisystem, Klientenportal,
Finmatics, …) hinzugefügt wurden.  
  
<img src=".\img/image57.png"
style="width:6.30364in;height:2.78657in" />

## Grundeinstellungen zur Belegverarbeitung

Im Bereich *Einstellungen* finden Sie folgende Möglichkeiten:

<img src=".\img/image58.png"
style="width:3.43663in;height:1.14555in" />

-   Scanordner

Bevor Sie mit dem Scannen beginnen, legen Sie für jeden Mitarbeiter
einen eigenen Scanordner im Netzwerk und im RZL Board an. Die Anlage
befindet sich im Bereich BELEGE unter Einstellungen / Scanordner oder
direkt im Bereich Belege hinzufügen im Dropdown des Buttons Belege
Scanordner. Zusätzlich sollten Sie diese Ordner beim Scanner in einem
Profil pro Mitarbeiter hinterlegen.

<img src=".\img/image5.png"
style="width:6.29861in;height:1.84028in" />

-   **Name:** Sie können hier einen Namen für jeden Scanordner vergeben,
    der dann im Bereich *Belege hinzufügen / Belege Scanordner*
    angezeigt wird.

<!-- -->

-   **Ordner für Mitarbeiter:** Scanordner können Sie einem Mitarbeiter
    zuordnen, somit sieht der jeweilige Mitarbeiter nur seine eigenen
    und etwaige öffentliche (kanzleiweite) Scanordner.

-   **Anmerkung:** Notiz zu diesem Scanordner.

-   **Ordnerpfad:** Im Ordnerpfad wird der am Laufwerk angelegte
    Scanordner hinterlegt.

-   **Dokumente / Belege importieren***:* Je nach Aktivierung steht
    dieser Scanordner in der RZL KIS-Dokumentenverwaltung bzw. in der
    RZL Board Belegverarbeitung zur Verfügung.

-   **Texterkennung (OCR) automatisch im Hintergrund ausführen:** Diese
    Option steht nur dann zur Verfügung, wenn in den Einstellungen zur
    Texterkennung n*ur bei ausgewählten Scanordnern* ausgewählt wurde.
    Grundsätzlich empfehlen wir, Texterkennung im Hintergrund generell
    zu aktivieren. Somit wird die Texterkennung (OCR-Erkennung)
    vollautomatisch im Hintergrund ausgeführt, sobald neue Belege in
    einem Scanordner vorhanden sind und das RZL Board gestartet ist.

-   **Belege für schnelleren Zugriff lokal kopieren:** Bei Aktivierung
    dieser Option werden die Belege für die Bearbeitung lokal
    zwischengespeichert und die Zugriffe auf den Scan-Ordner auf ein
    Minimum reduziert. Diese Einstellung ist bei einer langsamen oder
    instabilen Verbindung zum Scan-Ordner zu empfehlen.

<!-- -->

-   Belegschablonen

Die bisher angelegten Belegschablonen werden in einer Liste angezeigt.
Sie können hier Schablonen löschen oder auch umbenennen. Außerdem finden
Sie hier Informationen, wann die Schablone von wem erstellt wurde und
wann sie von wem zuletzt geändert wurde. Schablonen können auch
exportiert und importiert werden.

-   Texterkennung (OCR)

Siehe Kapitel *Einstellungen zur OCR-Erkennung bei gescannten Belegen*

-   Stempel

In diesem Menü können Sie den Buchungsstempel für *Gebuchte
Belege* konfigurieren. Sie können festlegen, welche Felder am Stempel
*Gebucht* in welcher Reihenfolge angezeigt werden sollen.  
  
<img src=".\img/image59.png"
style="width:6.29859in;height:3.17412in" />

-   **Dateiname:** Name, unter welcher die Datei gespeichert ist

-   **Klient:** Nummer und Name des Klienten

-   **Belegkreis:** zB ER, AR, KA, …

-   **Belegart:** Eingangsbeleg, Ausgangsbeleg …

-   **Belegnummer:** fortlaufende Nummer

-   **Fremdbelegnummer:** Rechnungsnummer des Beleges

-   **Belegdatum:** Datum des Beleges

-   **Gesamtbetrag:** Bruttobetrag

-   **Buchungssatz:** Soll/Haben

-   **Gebucht von:** Name des Erfassers

-   **Gebucht am:** Datum der Erfassung

-   **Buchungstext:** erfasster Text beim Buchen

-   **Kommentar:** Vermerk der beim Beleg erfasst wird

-   **Importdatum:** wann der Import stattgefunden hat

-   **Importiert von:** von dem der Import durchgeführt wurde

-   **Belegeingangsdatum:** Buchungsdatum

-   **Bezahlt am:** Datume der durchgeführten Zahlung

-   **Quelle:** ect. …

Im Feld links *ausgewählte Felder für Stempel* kann die Reihenfolge der
ausgewählten Felder geändert werden.

Setzt man den Haken *Vorschau mit Beispieldaten befüllen* wird ein
Musterstempel mit Beispieldaten befüllt.

<img src=".\img/image60.png"
style="width:2.17519in;height:0.24169in" />
<img src=".\img/image61.png"
style="width:1.29572in;height:0.63396in" />
<img src=".\img/image62.png"
style="width:1.38068in;height:0.76644in" />

Rufen Sie einen bereits gebuchten in der FIBU auf, können Sie in der
Menüleiste entscheiden, ob der Buchungsstempel sichtbar angezeigt wird.

<img src=".\img/image63.png"
style="width:4.07859in;height:0.65721in" />

Beim Export eines Beleges als PDF wird der Stempel und der Kommentar
nicht exportiert und angezeigt.

-   Grundeinstellungen

<img src=".\img/image64.png"
style="width:3.87774in;height:3.7061in" />

-   **Klientenportal-Belege:** Mit dieser Option wird beim Öffnen eines
    Klienten in der Menüleiste angezeigt, wie viele Belege vom
    Klientenportal noch abzuholen sind.

-   **Finmatics Belege:** Mit dieser Option wird beim Öffnen eines
    Klienten in der Menüleiste angezeigt, wie viele Belege von Finmatics
    noch abzuholen sind.

-   **Name/Anschrift mit UID-Nummer über FinanzOnline auslesen:** Mit
    dieser Option wird bei einer Belegdatenerkennung der Name und die
    Anschrift des Rechnungsaussteller (bei Eingangsbelegen) bzw. des
    Rechnungsempfängers (bei Ausgangsbelegen) über die UID-Nummer bei
    FinanzOnline ausgelesen. Somit haben Sie später in der Liste der
    *ungebuchten Belege* eine bessere und schnellere Übersicht über die
    Belege.  
    Die einmal vorgekommenen UID-Nummern werden für eine gewisse Zeit
    zwischengespeichert, damit bei Lieferanten, die häufig vorkommen,
    nicht jedes Mal bei FinanzOnline abgefragt werden muss.

-   **GLN der Lieferanschrift als Kundennummer des Rechnungsempfängers
    auslesen:** dies ist eine spezielle Funktion beim Import von
    ebInterface XML-Rechnungen. Dies kann genutzt werden, um später in
    der FIBU auf Basis dieser GLN-Nummer Buchungsvorschläge zu
    generieren.

## Zusatzmodul Belegfreigabe

Siehe Kurzanleitung *RZL Modul Belegfreigabe* unter *Hilfe /
Kurzanleitungen.*

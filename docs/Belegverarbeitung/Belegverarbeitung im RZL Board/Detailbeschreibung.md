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
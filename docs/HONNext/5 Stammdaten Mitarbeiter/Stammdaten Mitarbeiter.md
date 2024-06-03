# Stammdaten Mitarbeiter

In den Mitarbeiterstammdaten werden grundlegende Einstellungen für die
Honorarverrechnung bzw. Leistungserfassung der Mitarbeiter verwaltet.

Sie gelangen in die Mitarbeiterstammdaten, wenn Sie den Punkt *STAMM* im
RZL-Board *– Personen/Klientenverwaltung – Mitarbeiter* auswählen.
Anschließend gelangen Sie in die Mitarbeiterliste. Wählen Sie den zu
bearbeitenden Mitarbeiter mit einem Doppelklick aus.

Beim Mitarbeiter selbst klicken Sie auf *HON,* um die
Honorarverrechnungs-Einstellungen zu hinterlegen.

Abb. 5‑1 Stammdaten Mitarbeiter

<img src=".\img/image104.png"
style="width:6.29921in;height:3.27189in" />

HInweis

Die HON Mitarbeiterstammdaten sind nur für jene Personen ersichtlich,
die auch das HON Modul (Rolle Honorarverrechnung) benutzen dürfen.

Die Eingabefelder *Zeitausgleich Stichtag* und *Zeitausgleich
Anfangsbestand* sind für die Berechnung des Zeitausgleiches in der
Leistungserfassung des Mitarbeiters relevant.

Das hinterlegte *Mitarbeiter-Tarifschema* wird angezeigt. Weitere Infos
zum Mitarbeiter-Tarifschema finden Sie im Kapitel 2.3 Seite
[21](#tarifschemata) ff beschrieben.

Der *Eigenkosten-Stundensatz* zur späteren Berechnung der Eigenkosten,
bei diversen Auswertungen, ist zu hinterlegen. Das Arbeitszeitmodell und
der Urlaubsanspruch, sowie der Beginn des Urlaubsjahres können ebenso
hinterlegt werden. Weiterführende Informationen zum Arbeitszeitmodell
finden Sie im Kapitel 2.4 Seite [31](#arbeitszeitmodelle) ff
beschrieben. Das Arbeitszeitmodell wird unter anderem für die
Leistungserfassung der Mitarbeiter benötigt. Weiterführende
Informationen zum Urlaub finden Sie im Kapitel 9.4, Seite
[75](#urlaubskartei) beschrieben. Die Urlaubsinformationen werden als
Information für die Mitarbeiter in der Leistungserfassung dargestellt.

Die Option *Geschäftsführung oder leitende Anstellung* kann aktiviert
werden, wenn eine Arbeitszeitaufzeichnung nicht zwingend ist und die
Regeln des Arbeitszeitgesetztes nicht angewandt werden sollen.

Durch Aktivierung dieser Option prüft das Programm nicht mehr, ob
Arbeits- und Leistungszeit übereinstimmen, ob das Arbeitszeitgesetzt
eingehalten wird oder ob die Leistungserfassung vollständig ist (Bsp.
Erfassung ganztätiger Zeitausgleich nicht notwendig).

Tipp

Ausgetretene Mitarbeiter können Sie für die Leistungserfassung sperren,
indem Sie in den Mitarbeiterstammdaten ein **Austrittsdatum** eintragen.

Tipp

Die HON Mitarbeiter Stammdaten sind generationsverwaltet. Falls eine
Änderung ab einem bestimmten Zeitpunkt gelten soll, so ist eine neue
Generation anzulegen.

Wird eine Änderung ohne neue Generation eingegeben, erhalten Sie
folgenden Hinweis:

<img src=".\img/image105.png"
style="width:5.51181in;height:1.76468in" />

## Transferstundensätze

Dieser Eingabebereich ist nur aktiv, wenn mehrere Unternehmensbereiche
angelegt wurden (Kapitel 4, Seite [50](#unternehmensbereiche)). Ist dies
der Fall, dann ist in den Stammdaten der Mitarbeiter im Reiter
*Mitarbeiterdaten* festzulegen, für welchen Unternehmensbereich dieser
Mitarbeiter tätig ist **(1).** Weiters ist in den Stammdaten des
Klienten im Reiter *Klientendaten* festzulegen, welchem
Unternehmensbereich der Klient angehört **(2).**

Abb. 5‑2 Zuordnung Mitarbeiter zu Unternehmensbereich

<img src=".\img/image19.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image106.png"
style="width:6.29921in;height:1.91807in" />

Abb. 5‑3 Zuordnung Klient zu Unternehmensbereich

<img src=".\img/image107.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image108.png"
style="width:6.29921in;height:1.78275in" />

In den Mitarbeiterstammdaten im Reiter *Transferstundensätze* werden die
Stundensätze für die interne Verrechnung zwischen mehreren
Unternehmensbereichen hinterlegt. Der Transferstundensatz wird nicht der
Honorarnotenerstellung zugrunde gelegt. Bei der Honorarnotenerstellung
werden die Stundensätze der jeweiligen Tarifschemata verwendet. Der
Transferstundensatz kommt dann zur Anwendung, wenn ein Mitarbeiter für
einen Klienten Leistungen erbringt, der einem anderen
Unternehmensbereich zugeordnet ist als der Mitarbeiter selbst. Der
Transfer-Stundensatz wird für die Transferstunden Statistik benötigt.

Abb. 5‑4 Transferstundensätze

<img src=".\img/image109.png"
style="width:6.29921in;height:2.31099in" />

## Transferstunden Statistik

Im HON Next können Sie über den Menüpunkt *Auswertungen* eine
Transferstunden Statistik öffnen.

Abb. 5‑5 Transferstunden Statistik

<img src=".\img/image110.png"
style="width:0.9478in;height:0.90614in" />

Diese Auswertung zeigt Ihnen initial alle Leistungen, wo sich der
Unternehmensbereich des Mitarbeiters und der Rechnungssteller für den
die Leistungen erbracht wurden unterscheiden. Durch Filtern des
Zeitraumes oder durch Gruppieren und Filtern einzelner Spalten können
die dargestellten Zeilen eingeschränkt werden.

Die Spalte *Transferwert* wird aufgrund der erfassten Dauer \* dem
hinterlegten Transferstundensatz beim Mitarbeiter ermittelt.

Abb. 5‑6 Transferstunden Statistik Zeilen

<img src=".\img/image111.png"
style="width:6.29921in;height:2.15395in" />

In der Transferstunden Statistik steht Ihnen das RZL Layout
*Unternehmensbereich für Rechnungssteller* zur Verfügung (3). Diese
Auswertung zeigt Ihnen auf einen Blick wie viel Dauer/Wert des jeweilige
Mitarbeiter Unternehmensbereich für einen Rechnungssteller erfasst
wurde.

**Beispiel:**

Mitarbeiter, welche dem Unternehmensbereich *RZL Steuerberatung*
zugeordnet sind haben für Klienten des Rechnungsstellers *RZL
Unternehmensberatung* 78 Stunden erfasst.

Mitarbeiter, welche dem *Unternehmensbereich Vier* zugeordnet sind haben
für Klienten des Rechnungsstellers *RZL Steuerberatung* 4 Stunden
erfasst.

Abb. 5‑7 Unternehmensbereich zu Rechnungssteller

<img src=".\img/image22.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image112.png"
style="width:6.29921in;height:1.62384in" />

# Stammdaten Klienten

In den Klienten-Stammdaten werden grundlegende Einstellungen für die
Notenerstellung und spätere Verbuchung in der Finanzbuchhaltung
getroffen.

Sie gelangen in die Klienten-Stammdaten, wenn Sie den Punkt *STAMM* im
*RZL-Board – Personen/Klientenverwaltung – Klienten* auswählen.
Anschließend gelangen Sie in die Klientenliste. Wählen Sie den zu
bearbeitenden Klienten mit einem Doppelklick aus.

Beim Klienten selbst klicken Sie auf *HON,* um die
Honorarverrechnungs-Einstellungen zu hinterlegen.

## Allgemein

Abb. 6‑1 Klienten-Stammdaten Allgemein

<img src=".\img/image113.png"
style="width:6.3in;height:2.11181in" />

**Leistungserfassung bis**

Dieses Feld bewirkt, dass bei nicht mehr betreuten Klienten kein
Mitarbeiter mehr Leistungen auf diesen Klienten erfassen kann.

Tipp

Wird im Reiter Klientendaten ein Datum bei *Klient bis* eingetragen,
erhalten Sie eine Abfrage, ob dieses Datum automatisch auch für das Feld
*Leistungserfassung bis* verwendet werden soll.

**Klienten-Tarifschema**

Das hinterlegte Klienten Tarifschema wird für die Notenerstellung
verwendet. Weitere Informationen zum Klienten-Tarifschema finden Sie im
Kapitel 2.3 Seite [21](#tarifschemata) ff beschrieben.

Die Felder *abweichender Verrechnungsklient* sowie *zugeordneter
Erfassungsklient* werden im *Kapitel 7 Verrechnungs-/Erfassungsklient*
erläutert.

## Honorarnote

Abb. 6‑2 Klienten-Stammdaten Honorarnote

<img src=".\img/image114.png"
style="width:6.29921in;height:3.95284in" />

**Umsatzsteuer**

Hier ist die Form der Versteuerung zu definieren.

-   *Standard  
    *Die Note wird mit dem Normalsteuersatz von 20% generiert.

-   *Innergemeinschaftliche Leistung (Reverse Charge)  
    *Die Note wird ohne UST und mit dem Vermerk auf Übergang der
    Steuerschuld erstellt. In der Buchhaltung wird der Code M03
    innergemeinschaftliche Leistung verwendet, dies führt zu einem
    Ausweis in der Zusammenfassenden Meldung*.*

-   *Dienstleistungen Drittland 0% (Reverse Charge)  
    *Die Note wird ohne UST und mit dem Vermerk auf Übergang der
    Steuerschuld erstellt. In der Buchhaltung wird kein Code verwendet,
    d.h. kein Ausweis in der UVA oder ZM.

Tipp

Das Feld Umsatzsteuer prüft, ob die Form der Versteuerung sowie die
definierten Stammdaten des Klienten übereinstimmen. Sollte es hier
Unstimmigkeiten geben, erhalten Sie eine gelbe Validierung mit einem
Hinweis auf den Fehler.

Bsp. Österreichischer Rechnungsempfänger und innergemeinschaftliche
Leistung

Abb. 6‑3 Hinweismeldung Umsatzsteuer

<img src=".\img/image115.png"
style="width:5.12544in;height:0.3667in" />

Hinweis

Ist der Rechnungsempfänger ungleich Österreich, wird das Land in
Großbuchstaben auf der Note ausgewiesen.

**Abweichende UID-Nummer**

Standardmäßig wird auf der Note die erste UID Nummer des Klientenstamm
verwendet. Sollte auf der Note eine abweichende UID Nummer angegeben
werden, können Sie hier aus allen im Klientenstamm eingetragenen UID
Nummern auswählen.

**Abweichende Notenvorlage**

In den Klientenstammdaten kann für den Klienten eine zu der des
Unternehmensbereiches abweichende Notenvorlage hinterlegt werden.

**Zugeordneten Betrieb verwenden**

Ist diese Option aktiviert werden für die Notenerstellung die Daten
(Name, Adresse, Brief-/Adressanrede) aus dem im Board zugeordneten
Betrieb **(1)** verwendet.

Ist diese Option nicht aktiviert, werden für die Notenerstellung die
Daten (Name, Adresse, Brief-/Adressanrede) aus den Personendaten **(2)**
verwendet.

Hinweis

Die Option *zugeordneten Betrieb verwenden* ist nur bei
Einzelunternehmen aktiv.

Abb. 6‑4 zugeordneter Betrieb im Board

<img src=".\img/image5.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image116.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image117.png"
style="width:6.29921in;height:2.39901in" />

Hinweis

Sind die Felder Adress-/Briefanrede beim zugeordneten Betrieb nicht
befüllt, greift das Programm auf die Adress-/Briefanrede aus den
Personendaten zurück.

**Ausdruck Tätigkeitsnachweis mit Note**

Wird diese Option aktiviert, wird der Tätigkeitsnachweis automatisch mit
der Note ausgedruckt. Diese Option kann auch während der Notenerstellung
pro Note aktiviert/deaktiviert werden.

**Abweichende E-Mail**

Wird die Note per Mail an den Klienten versendet, wird standartmäßig die
erste E-Mail-Adresse, welche beim Klienten hinterlegt ist verwendet.
Über das Feld *Abweichende E‑Mail* kann für den Notenversand
eine/mehrere andere E-Mail-Adressen definiert werden. Werden mehrere
E-Mail-Adressen ausgewählt, wird nur eine E-Mail mit mehreren Empfängern
und der Note im Anhang generiert.

**CC / BCC**

Hier können Sie aus den hinterlegten Klienten- und
Kontaktpersonen-Mailadressen die E-Mail-Adresse für einen CC und/oder
BCC Empfänger definieren. Eine Mehrfachauswahl von E-Mail-Adressen ist
möglich.

**Abweichende Rechnungsadresse**

Grundsätzlich wird für den Notenversand, die erste geschäftliche Adresse
bzw. die Adresse des Betriebes verwendet. Sollte eine abweichende
Adresse verwendet werden, kann dies über das Feld *Abweichende
Rechnungsadresse* hinterlegt werden. Es stehen Ihnen hier alle Adressen
der Personen-/Firmenansicht des Klienten zur Verfügung.

**Zu Handen**

Wird die Note zu Handen einer bestimmten Person versendet, können Sie
das in den Klientenstammdaten dieser Person hinterlegen. Zur Auswahl
stehen Ihnen nur natürliche Personen, die mit dem Klienten verbunden
sind (Klient-Person, Kontaktpersonen, (Ehe)Partner, Kinder,
Gesellschafter und Gesetzliche Vertreter).

**Zustellung der Note**

Die Art der *Zustellung der Note* kann ausgewählt werden und wird später
bei der Notenerstellung vorgeschlagen. Als Arten können E-Mail,
Klientenportal und Druckausgabe ausgewählt werden. Beim Ausdrucken einer
Honorarnote wird bei den Zustellarten E-Mail und Klientenportal
automatisch der PDF-Drucker bzw. der PDF-Manager als Drucker ausgewählt.
Während der Notenerstellung kann die Art der Zustellung abgeändert
werden, siehe Kapitel **11.4.1** Seite [87](#einstellungen-1).

**Zahlungsart**

Bei der Zahlungsart stehen Ihnen die Optionen *Überweisung, SEPA
Lastschrift* und *keine Zahlung* zur Verfügung. Bei der Option
Überweisung kann für die Note ein QR Code erzeugt werden. Bei der Option
SEPA Lastschrift wird kein QR Code erzeugt, sondern auf den Bankeinzug
hingewiesen (siehe auch Kapitel 18.11, Seite [156](#formelsammlung)).

**Zustellvertreter**

Über das Feld *Zustellvertreter* können Sie einen Zustellvertreter für
den Empfang der Honorarnoten definieren. Es stehen Ihnen hier alle im
Board angelegten Personen zur Verfügung. Die beim Klienten definierten
Kotaktpersonen werden in der Liste als Favoriten geführt. Die Adresse
des Zustellvertreters ist ein Pflichtfeld.

Hinweis

Wird ein Zustellvertreter definiert, erhalten Sie beim Ausdruck der
Noten ein Vorblatt mit der Anschrift des Zustellvertreters.

**Hinweis zur Notenerstellung**

Der *Hinweis zur Notenerstellung* kann direkt in den Klienten-Stammdaten
hinterlegt werden und wird Ihnen immer bei jeder Notenerstellung
angezeigt – wird nicht auf der Note gedruckt. Weitere Informationen zum
Hinweis finden Sie im Kapitel **11.4.1** Seite [87](#einstellungen-1)
beschrieben.

**Zusatztext auf der Note**

Sollte auf der Note ein zusätzlicher Text angeführt werden, kann dies in
den Stammdaten des Klienten definiert werden. Der Zusatztext wird auf
der Note angedruckt und kann im Zuge der Notenerstellung noch editiert
werden.

Hinweis

Der bei der Note eingegebene Zusatztext kann in der Notenübersicht
eingeblendet werden (Kapitel 15, Seite [140](#notenübersicht)).

## Buchhaltung

**Debitoren-Kontonummer**

Die Kontonummer wird später bei der Notenerstellung für die
Belegverarbeitung verwendet. Es wird die hinterlegte
Debitoren-Kontonummer als Kontonummer in die RZL-Belegverarbeitung
übernommen.

**Kostenstelle**

Ebenfalls kann für die Verbuchung in der Finanzbuchhaltung pro Klient
eine Kostenstelle hinterlegt werden (1-999999999). Siehe hierzu auch
Kapitel 2.2, Seite [14](#tätigkeiten).
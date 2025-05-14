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


![](<img/image113.png>)

**Leistungserfassung bis**   
Dieses Feld bewirkt, dass bei nicht mehr betreuten Klienten kein
Mitarbeiter mehr Leistungen auf diesen Klienten erfassen kann.

!!! info "Tipp"
    Wird im Reiter Klientendaten ein Datum bei *Klient bis* eingetragen,
    erhalten Sie eine Abfrage, ob dieses Datum automatisch auch für das Feld
    *Leistungserfassung bis* verwendet werden soll.

**Klienten-Tarifschema**   
Das hinterlegte Klienten Tarifschema wird für die Notenerstellung
verwendet. Weitere Informationen zum Klienten-Tarifschema finden Sie im
Kapitel [Tarifschemata](../HONNext/Stammdaten%20HON%20Next/Tarifschemata.md) beschrieben.

Die Felder *abweichender Verrechnungsklient* sowie *zugeordneter
Erfassungsklient* werden im Kapitel [Verrechnungs-/ Erfassungsklient](../HONNext/Verrechnungs%20Erfassungsklient/Allgemeines.md)
erläutert.

## Honorarnote


![](<img/image114.png>)

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

!!! info "Tipp"
    Das Feld Umsatzsteuer prüft, ob die Form der Versteuerung sowie die
    definierten Stammdaten des Klienten übereinstimmen. Sollte es hier
    Unstimmigkeiten geben, erhalten Sie eine gelbe Validierung mit einem
    Hinweis auf den Fehler.

Bsp. Österreichischer Rechnungsempfänger und innergemeinschaftliche
Leistung


![](<img/image115.png>)

!!! info "Hinweis"
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

!!! warning "Hinweis"
    Die Option *zugeordneten Betrieb verwenden* ist nur bei
    Einzelunternehmen aktiv.

![](<img/image117.png>)

!!! warning "Hinweis"
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
Grundsätzlich wird für den Notenversand, die erste Adresse der Klientenperson/Firma verwendet. Ist die Option *zugeordneten Betrieb verwenden* aktiv, wird die Adresse des zugeordneten Betriebes verwendet. Sollte eine abweichende Adresse verwendet werden, kann dies über das Feld *Abweichende Rechnungsadresse* hinterlegt werden. Es stehen Ihnen hier alle Adressen der Personen-/Firmenansicht des Klienten zur Verfügung.

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
werden, siehe [Notenerstellung/Einstellungen](../HONNext/Notenerstellung/Notenerstellung.md#einstellungen).

**Zahlungsart**   
Bei der Zahlungsart stehen Ihnen die Optionen *Überweisung, SEPA
Lastschrift* und *keine Zahlung* zur Verfügung. Bei der Option
Überweisung kann für die Note ein QR Code erzeugt werden. Bei der Option
SEPA Lastschrift wird kein QR Code erzeugt, sondern auf den Bankeinzug
hingewiesen (siehe auch [Formelsammlung](../HONNext/Notenvorlagen/Formelsammlung.md)).

**Zustellvertreter**   
Über das Feld *Zustellvertreter* können Sie einen Zustellvertreter für
den Empfang der Honorarnoten definieren. Es stehen Ihnen hier alle im
Board angelegten Personen zur Verfügung. Die beim Klienten definierten
Kotaktpersonen werden in der Liste als Favoriten geführt. Die Adresse
des Zustellvertreters ist ein Pflichtfeld.

!!! warning "Hinweis"
    Wird ein Zustellvertreter definiert, erhalten Sie beim Ausdruck der
    Noten ein Vorblatt mit der Anschrift des Zustellvertreters.

**Hinweis zur Notenerstellung**   
Der *Hinweis zur Notenerstellung* kann direkt in den Klienten-Stammdaten
hinterlegt werden und wird Ihnen immer bei jeder Notenerstellung
angezeigt – wird nicht auf der Note gedruckt. Weitere Informationen zum
Hinweis finden Sie unter [Notenerstellung/Einstellungen](../HONNext/Notenerstellung/Notenerstellung.md#einstellungen)
beschrieben.

**Zusatztext auf der Note**   
Soll auf der Note ein zusätzlicher Text angeführt werden, kann dies in
den Stammdaten des Klienten definiert werden. Der Zusatztext wird auf
der Note angedruckt und kann im Zuge der Notenerstellung noch editiert
werden.

!!! warning "Hinweis"
    Der bei der Note eingegebene Zusatztext kann in der [Notenübersicht](../HONNext/Notenübersicht.md)
    eingeblendet werden.

## Buchhaltung

**Debitoren-Kontonummer**   
Die Kontonummer wird später bei der Notenerstellung für die
Belegverarbeitung verwendet. Es wird die hinterlegte
Debitoren-Kontonummer als Kontonummer in die RZL-Belegverarbeitung
übernommen.

**Kostenstelle**   
Ebenfalls kann für die Verbuchung in der Finanzbuchhaltung pro Klient
eine Kostenstelle hinterlegt werden (1-999999999). Siehe hierzu [Tätigkeiten](../HONNext/Stammdaten%20HON%20Next/Tätigkeiten.md).
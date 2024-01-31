# Umsatzsteuerrechtliche Sonderfälle

## Umsatzsteuerrechtliche Sonderfälle

### Innerg. Lieferung neuer Fahrzeuge an Abnehmer ohne UID-Nr.

&nbsp;

| **Geschäftsfall** | **Kennziffer** **UVA** | **Steuerhinterlegung** **am** **Konto** |  |  | **Eingabe** **im Buchungsdialog** **(Feld Code)** | **Anzeige** **Journal/Konto** |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | **Code** | **Prozent-satz** | **Steuertyp** |  |  |
| Innergem. Lieferung neuer Fahrzeuge an Abnehmer ohne UID-Nummer bzw. Fahrzeuglieferer gem. Art. 2 | &#48;00, 018 | Umsatzsteuer | Steuerfrei | Fahrzeug ohne UID | \*2 | M\*2 |


&nbsp;

**Notwendige** **Einstellungen:**

* In den Stammdaten des Debitors darf *keine* UID-Nummer eingeben sein.
* Anlage eines separaten Erlöskontos mit korrekter Steuerhinterlegung.

&nbsp;

**Hinweis**

Bei Buchungen in Verbindung mit der Kennziffer *018* der UVA ist zwingend das Formular *U17* bzw. *U17a* auszufüllen und beim zuständigen Finanzamt einzureichen.

### Buchen von echt bzw. unecht befreiten Umsätzen

&nbsp;

| **Geschäftsfall** | **Kennziffer** **UVA** | **Steuerhinterlegung** **am** **Konto** |  |  | **Eingabe** **im Buchungsdialog** **(Feld Code)** | **Anzeige** **Journal/Konto** |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | **Code** | **Prozentsatz** | **Steuertyp** |  |  |
| Lohnveredelungen&nbsp; §6 Abs 1 Z1 iVm §8 | &#48;00, 012 | Umsatzsteuer | Steuerfrei | Lohnveredelung Drittland | L01 | L01 |
| § 6 Abs. 1 Z2 bis 6 sowie §23 Abs. 5 | &#48;00, 015 | Umsatzsteuer | Steuerfrei | Grenzüberschreitende Personenbeförderung | P01 | P01 |
| Grundstücksumsätze §6 Abs. 1 Z9 lit.a | &#48;00, 019 | Umsatzsteuer | Steuerfrei | Grundstück Umsatz | G01\* | G01\* |
| Kleinunternehmer §6 Abs. 1 Z27 | &#48;00, 016 | Umsatzsteuer | Steuerfrei | Kleinunternehmer Umsatz | K01\* | K01\* |
| Unecht befreite Umsätze §6 Abs. 1 Z … | &#48;00,020 | Umsatzsteuer | Steuerfrei | Unecht befreit | &#48;1\* | M01\* |


&nbsp;

**Hinweis**

Bei Buchungen von unecht befreiten Umsätzen gem. §6 UStG (Code *M01\*)* müssen Sie unter *STAMM / FIBU / USt* die betroffene Ziffer eintragen.

### Dreiecksgeschäfte

Ein Dreiecksgeschäft liegt vor, wenn mehrere Unternehmer in mehrere verschiedenen Mitgliedstaaten Geschäfte über die gleiche Ware abschließen und diese unmittelbar vom ersten Unternehmer an den letzten Abnehmer gelangt.

&nbsp;

Abb. 1 Dreiecksgeschäft

![Image](<../assets/NeuesElement138.png>)

&nbsp;

**Lieferant**\
Als Lieferant liefert man die Ware an den Empfänger und fakturiert an den Erwerber.\
Für den Lieferanten entsteht eine innergemeinschaftliche Lieferung.

**Erwerber** **gem.** **Art.** **25** **UStG**\
Als Erwerber erwirbt man die Ware vom Lieferanten und lässt sie an den Empfänger liefern.\
Die Eingangsrechnung des Lieferanten wird als innergemeinschaftlicher Erwerb verbucht. Verwenden Sie die Steuersätze *E02* oder *E03*. (siehe auch Kapitel [8.9](<FIBUNextHandbuch1.md#\_Ref75505364>))

\
Der Erwerber fakturiert wiederum an den Empfänger. Legen Sie für diese Sachverhalte ein eigenes Erlöskonto mit folgender Steuerhinterlegung an:

| **Geschäftsfall** | **Kennziffer** **UVA** | **Steuerhinterlegung** **am** **Konto** |  |  | **Eingabe** **im Buchungsdialog** **(Feld Code)** | **Anzeige** **Journal/Konto** |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | **Code** | **Prozentsatz** | **Steuertyp** |  |  |
| Erlöse gem Art. 25 UStG | nur in ZM | Umsatzsteuer | Steuerfrei | Innerg. Dreiecksgeschäft | D02 | D02 |


&nbsp;

Nach dem Buchungstext ist die UID-Nummer des Debitors einzugeben, wobei diese automatisch vorgeschlagen wird, wenn sie am Debitorenkonto verankert wurde.\
&nbsp;

**Hinweis**

Die Dreiecksgeschäfte werden automatisch in die ZM übernommen.

&nbsp;

Beim OP-Ausgleich mit Skonto wird der Skontobetrag, als Einzelbuchung mit der UID-Nummer der Rechnung, am Pflichtkonto Skontoaufwand Dreiecksgeschäfte verbucht.

**Empfänger** **gem.** **Art.** **25** **Abs.** **5** **UStG**\
Als Empfänger bestellt man die Ware beim Erwerber und bekommt sie vom Lieferanten geliefert. Die Eingangsrechnung des Erwerbers wird z.B. mit D20 auf einem Aufwandskonto verbucht.\
&nbsp;

| **Geschäftsfall** | **Kennziffer** **UVA** | **Steuerhinterlegung** **am** **Konto** |  |  | **Eingabe** **im Buchungsdialog** **(Feld Code)** | **Anzeige** **Journal/Konto** |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | **Code** | **Prozentsatz** | **Steuertyp** |  |  |
| Empfänger gem Art 25 UStG | &#48;57,066 | Vorsteuer, Reverse Charge | &#50;0/19/13/ 10 | Dreiecksgeschäft | D20/19/13/10 | D20/19/13/10 |


&nbsp;

Hier wird die Mehrwertsteuer automatisch vom Nettobetrag berechnet und gleichzeitig als Vorsteuer wieder abgezogen. Ist der Empfänger nicht zum Vorsteuerabzug berechtigt, muss nach dem jeweili­gen Steuersatz ein *Stern (\*)* angefügt werden.

&nbsp;

### Buchen mit abweichendem USt-Monat

Geschäftsfälle, die mit abweichendem Umsatzsteuer-Monat berücksichtigt werden sollen, (z.B. verspäteter Erhalt einer Rechnung, wenn die UVA des betroffenen Monats bereits abgegeben wurde), können durch Eingabe eines abweichenden USt-Monats im Programm erfasst werden.

Sie können dazu im Buchungsdialog im Feld *Datum* mit rechter Maustaste oder F11-Taste das Eingabefeld *USt-Monat* aktivieren.

Abb. 2 abweichendes USt-Monat

![Image](<../assets/NeuesElement136.png>)

### Aufteilung nichtabzugsfähige Vorsteuer

Sie können beim jeweiligen Klienten unter *STAMM / FIBU / Umsatzsteuer* das Häkchen für *Aufteilung nichtabzugsfähige Vorsteuer* setzen und den Prozentsatz des Vorsteuer-Abzugs eintragen.

Bei Geschäftsfällen, wo nur eine teilweise Vorsteuerabzugsberechtigung vorliegt, müssen Sie bei der Buchung im Feld *Code* zusätzlich einen Stern (\*) nach dem Steuersatz (z.B. *20\*/10\*)* hinzufügen.&nbsp;

Durch Verankerung des Codes *Nicht abzugsfähige Vorsteuer*, dem jeweiligen Prozentsatz und dem Steuertyp *Ohne Vorsteuer Abzug* am Aufwandskonto, wird der richtige Steuercode beim Buchen automatisch vorgeschlagen. Vom Programm wird nun die Vorsteuer auf das Vorsteuer-Sammelkonto und das Pflichtkonto *Nichtabzugsfähige Vorsteuer* aufgeteilt.

**Hinweis**

Das Konto *Nichtabzugsfähige Vorsteuer/Erwerbsteuer* muss auch als Pflichtkonto unter *Stammdaten / Pflichtkonten* hinterlegt werden.

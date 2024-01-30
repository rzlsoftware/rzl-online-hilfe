# Erhaltene Anzahlungen von Debitoren

### Erhaltene Anzahlungen von Debitoren

&nbsp;

Folgende Einstellungen sind in der FIBU Next notwendig um Anzahlungen von Debitoren buchen zu können.

&nbsp;

* Aktivieren Sie im Menüpunkt *Stamm / FIBU* die OP-Verwaltung für Debitoren.

&nbsp;

Abb. 1 OP-Verwaltung

&nbsp; &nbsp; ![Image](<../lib/NeuesElement152.png>)

&nbsp;

* Hinterlegen Sie die notwendigen Pflichtkonten im Menüpunkt *Stammdaten / Pflichtkonten / Anzahlungen*

&nbsp;

**Hinweis**

Bei einer Übernahme aus der FIBU Klassik werden die hinterlegten Pflichtkonten in die FIBU Next Stammdaten mitübernommen.

&nbsp;

&nbsp;

### Verbuchung der erhaltenen Anzahlung

&nbsp;

&nbsp;

**Buchung:**\
\
*Bank / Debitor&nbsp; &nbsp; &nbsp; &nbsp; Steuercode: A20/A13/A10/A05/AB01&nbsp; &nbsp; Bruttobetrag*\
\
Mit dieser Buchung wir ein neuer Anzahlungs-OP mit der eingegebenen OP-Nummer angelegt

&nbsp;

Mögliche Steuercodes:

&nbsp;

| A20&nbsp; | Anzahlungen mit 20% Umsatzsteuer |
| --- | --- |
| A13&nbsp; | Anzahlungen mit 13% Umsatzsteuer |
| A10&nbsp; | Anzahlungen mit 10% Umsatzsteuer |
| A05&nbsp; | Anzahlungen mit 5% Umsatzsteuer |
| AB01&nbsp; | Anzahlungen für Bauleistungen (inkl. Eingabe der UID-Nr. des Debitors) |


&nbsp;

Durch Eingabe des Steuercodes *A20/A13/A10/A05/AB01* werden vom Programm folgende Buchungen auf den Verrechnungskonten durchgeführt:

&nbsp;

**Automatische** **Buchungen:**\
\
*USt auf Anzahlungen / Umsatzsteuer &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Steuerbetrag*\
\
*Verr.-Konto Anzahlungen / Verr.-Konto Anzahlungen 20%/10%... &nbsp; &nbsp; Nettobetrag*

### Schlussrechnung erhaltene Anzahlung

&nbsp;

Die automatische Korrektur der Anzahlungsbuchungen findet bei Buchung der (Schluss)rechnung über das OP-Feld und Auswahl der Anzahlungen statt.

**Buchung:**\
\
*Debitor / Umsatzerlöse &nbsp; &nbsp; Steuercode: 20/13/10/5/B01 &nbsp; &nbsp; &nbsp; &nbsp; Bruttobetrag*\
\
Im OP-Feld sind mit der F2-Taste die betroffenen Anzahlungen zu markieren.

Ist der Betrag der Schlussrechnung höher als die Anzahlung, so erscheint eine Abfrage, ob der Restbetrag als Skonto ausgebucht werden soll. Ist dies nicht der Fall, so ist diese Abfrage lediglich mit *Übernehmen* zu bestätigen.

Abb. 10‑2 Anzahlungen

![Image](<../lib/NeuesElement153.png>)


# Erhaltene Anzahlungen von Debitoren

### Erhaltene Anzahlungen von Debitoren


Folgende Einstellungen sind in der FIBU Next notwendig um Anzahlungen von Debitoren buchen zu können.


* Aktivieren Sie im Menüpunkt *Stamm / FIBU* die OP-Verwaltung für Debitoren.


Abb. 1 OP-Verwaltung
  ![Image](<img/NeuesElement152.png>)


* Hinterlegen Sie die notwendigen Pflichtkonten im Menüpunkt *Stammdaten / Pflichtkonten / Anzahlungen*


**Hinweis**

Bei einer Übernahme aus der FIBU Klassik werden die hinterlegten Pflichtkonten in die FIBU Next Stammdaten mitübernommen.



### Verbuchung der erhaltenen Anzahlung



**Buchung:**\
\
*Bank / Debitor    Steuercode: A20/A13/A10/A05/AB01  Bruttobetrag*\
\
Mit dieser Buchung wir ein neuer Anzahlungs-OP mit der eingegebenen OP-Nummer angelegt


Mögliche Steuercodes:


| A20 | Anzahlungen mit 20% Umsatzsteuer |
| --- | --- |
| A13 | Anzahlungen mit 13% Umsatzsteuer |
| A10 | Anzahlungen mit 10% Umsatzsteuer |
| A05 | Anzahlungen mit 5% Umsatzsteuer |
| AB01 | Anzahlungen für Bauleistungen (inkl. Eingabe der UID-Nr. des Debitors) |



Durch Eingabe des Steuercodes *A20/A13/A10/A05/AB01* werden vom Programm folgende Buchungen auf den Verrechnungskonten durchgeführt:


**Automatische** **Buchungen:**\
\
*USt auf Anzahlungen / Umsatzsteuer       Steuerbetrag*\
\
*Verr.-Konto Anzahlungen / Verr.-Konto Anzahlungen 20%/10%...   Nettobetrag*

### Schlussrechnung erhaltene Anzahlung


Die automatische Korrektur der Anzahlungsbuchungen findet bei Buchung der (Schluss)rechnung über das OP-Feld und Auswahl der Anzahlungen statt.

**Buchung:**\
\
*Debitor / Umsatzerlöse   Steuercode: 20/13/10/5/B01     Bruttobetrag*\
\
Im OP-Feld sind mit der F2-Taste die betroffenen Anzahlungen zu markieren.

Ist der Betrag der Schlussrechnung höher als die Anzahlung, so erscheint eine Abfrage, ob der Restbetrag als Skonto ausgebucht werden soll. Ist dies nicht der Fall, so ist diese Abfrage lediglich mit *Übernehmen* zu bestätigen.

Abb. 10‑2 Anzahlungen

![Image](<img/NeuesElement153.png>)


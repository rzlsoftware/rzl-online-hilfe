### Zugriffsbeispiele

**Monatszugriff**

Monatszugriff über relative Parameter {"0", "-1", ... "-12"}

Monatszugriff über absolute Parameter {"ZR().AktuellesMonat", "1", "2",... "12"}

**Jahreszugriff**

Jahreszugriff nur über relative Parameter {"", "0", "-1"}

**Beispiele**

**Zugriff auf das aktuelle Jahr**

**Lohnart(1001).Wert(0)**

- Zugriff auf den aktuellen Monat im aktuellen Jahr

**Lohnart(1001).Wert(0\|0)**

- Zugriff auf den aktuellen Monat im aktuellen Jahr

**Lohnart(1001).Wert(ZR().AktuellesMonat)**

- Zugriff auf den aktuellen Monat im aktuellen Jahr

**Lohnart(1001).Wert(10)**

- Zugriff auf den Monat Oktober im aktuellen Jahr

**Lohnart(1001).Wert(10\|0)**

- Zugriff auf den Monat Oktober im aktuellen Jahr

**Lohnart(1001).Wert(ZR().AktuellesMonat\|0)**

- Zugriff auf den aktuellen Monat im aktuellen Jahr

**Zugriff auf das Vorjahr:**

**Lohnart(1001).Wert(0\|-1)**

- Zugriff auf den aktuellen Monat im Vorjahr

**Lohnart(1001).Wert(ZR().AktuellesMonat\|-1)**

- Zugriff auf den aktuellen Monat im Vorjahr

**Lohnart(1001).Wert(-1\|-1)**

- Zugriff auf den Vormonat im Vorjahr

**Lohnart(1001).Wert(10\|-1)**

- Zugriff auf den Monat Oktober im Vorjahr

**Zugriff auf mehrere Lohnarten**

**Lohnart(1001;1002;1010).Wert(0)**

- Zugriff auf die Lohnarten 1001, 1002 u. 1010 aus der aktuellen Abrechnung

**Lohnart(1001:1004).Wert(0)**

- Zugriff auf die Lohnarten 1001 bis 1004 aus der aktuellen Abrechnung

**Zugriff auf mehrere Monate:**

**Lohnart(1001).Wert(-3;0)**

- Zugriff auf die Lohnarten 1001 aus dem 3ten Vormonat und der aktuellen Abrechnung

**Lohnart(1001).Wert(-2:0)**

- Zugriff auf die Lohnarten 1001 aus dem 2ten Vormonat bis inkl. der aktuellen Abrechnung

**Was ist zu beachten:**

**Absoluter Monatszugriff immer zeitlich aufsteigend (von Datum muss vor dem bis Datum liegen)**

nicht Wert(12:5) sondern Wert(5:12)

nicht Wert(12\|-1:5\|-1) sondern Wert(5\|-1:12\|-1)

**Relative Monatszugriffe immer zeitlich aufsteigend**

nicht Wert(-2:-5) sondern Wert(-5:-2)

nicht Wert(0\|-1:-5\|-1) sondern Wert(-5\|-1:0\|-1)

**Jahresparameter müssen bei Bereichsangaben zeitlich aufsteigend verwendet werden**

nicht Wert(10\|0:1\|-1) sondern Wert(1\|-1:10\|0)

**Jahresübergreifender Zugriff bei Verwendung von Jahresparametern ist nur mit absoluten Monatsparametern möglich.**

nicht Wert(-1\|-1:0\|0) sondern Wert(1\|-1:12\|0)

**Werden keine Jahresparameter verwendet, ist ein Zugriff auf das Vorjahr auch mit relativen Monatsparametern möglich.**

liegen die Vormonate im Vorjahr, dann wird auf dieses zugegriffen - Wert(-6:0)

**Bei einer Bereichsformel dürfen absolute und relative Monatsparameter nicht vermischt werden.**

nicht Wert(-1:10) sondern Wert(-1:0)

**Der Zugriff auf Monatssummen im aktuellen Monat ist nicht möglich**

Monatssumme(1).Wert(0)

**Der Zugriff auf Monatssummen im aktuellen Jahr ist nur mit relativen Monatsparametern möglich**

nicht Monatssumme(1).Wert(3) sondern Monatssumme(0).Wert(-2)

Gibt es mehrere Abrechnungen innerhalb eines Monats (Wiedereintritt), werden beim Zugriff auf diesen Monat die Werte der einzelnen Abrechnungen aufsummiert (z. B. auch bei den SV-Tagen).

**Beispiele**

**3 Monatsschnitt Bemessung Sonderzahlung**

Lohnart(2011).Durchschnitt(-2:0)

**6 Monatsschnitt Bemessung Sonderzahlung**

Lohnart(2011).Durchschnitt (-5:0)

**Berechnung der Sonderzahlung**

Lohnart(2011).Durchschnitt (-2:0)\* ZR().TageSZ / 365

**Zugriff auf Durchschnittswerte**

Lohnart(1001).Durchschnitt(-2:0)

Ein Durchschnittswert wird gebildet, indem die einzelnen Monatswerte aufsummiert werden. Anschließend wird diese Summe durch die Anzahl der SVTage (SVTage ohne KÜE und UE) des betroffenen Zeitraumes dividiert und mit 30 multipliziert.

Beim Berechnen des Durchschnittes wird immer auf den Wert der Lohnart zugegriffen. D. h. auch bei einer freien Lohnart nach Einheiten wird mit dem Wert und nicht mit der Anzahl oder Basis gerechnet.

**Beispiel**

Eintritt: 1.1.2006

Austritt: 15.2.2006

Gehalt: Jänner EUR 1.000,00; Februar EUR 800,00

Lohnart 1001 = Gehalt

Lohnart(1001).Durchschnitt(1:2) -\> (1.000 + 800)/45\*30 = EUR 1.200,00

**Berechnung der Sonderzahlung**

Lohnart(2011).Durchschnitt (-2:0)\* ZR().TageSZ / 365

Als Basis für die Berechnung der Sonderzahlung dient die Lohnart 2011 = Bemessung SZ.

In die Bemessung SZ fließen folgende Gehaltsbestandteile mit ein:

Lohn/Gehalt, Erschwerniszulage, Auslandsbezüge, wiederkehrende Überstunden, wiederkehrende Mehrarbeitsstunden, freie Lohnarten mit der Eigenschaft Bemessung SZ.

Sollen die Überstunden nicht in die SZ-Berechnung mit einfließen, sollte die Lohnart 2012 = Bemessung SZ ohne Überstunden verwendet werden.

Für die Berechnung der Sonderzahlung wird nun der Durchschnitt dieser Bemessung SZ über die letzten Monate gebildet. Die Dauer wird meistens vom Kollektivvertrag bestimmt. Dieser Wert wird mit den für die Sonderzahlungsberechnung relevanten Tagen multipliziert und durch 365 dividiert.

ZR().TageSZ liefert die für die Berechnung der Sonderzahlung relevanten Kalendertage. Das sind die Kalendertage vom 1.1. des laufenden Jahres bzw. vom letzten Eintrittsdatum des Dienstnehmers bis zum 31.12. des Jahres bzw. bis zum Austrittsdatum. D. h. liegt das Eintritts- und Austrittsdatum eines Dienstnehmers nicht im laufenden Jahr, dann wird die SZ für das gesamte Jahr berechnet (365 Tage). Anderenfalls werden die Kalendertage vom letzten Eintritt weg bis zum Austrittsdatum berechnet.

Die Formel für die SZ Berechnung liefert entweder den Urlaubszuschuss oder die Weihnachtsremuneration, niemals aber die gesamte Sonderzahlung eines Dienstnehmers für ein Jahr (relevant bei einem Austritt siehe Beispiel 2).

**Szenarien**

Für alle Beispiele wird die Formel für die SZ-Berechnung *Lohnart(2011).Durchschnitt (-2:0)\* ZR().TageSZ / 365* der Lohnart 1012 Sonderzahlung im Juni und Nov zugeordnet. D. h. die SZ-Berechnung wird automatisch bei der Juni und November Abrechnung aufgerufen.

**Beispiel 1**

Eintritt: im Vorjahr

Austritt: kein Austritt

0 SZ1 SZ2 12

**Abrechnung Juni**

SZ1 weder Eintritt noch Austritt ­ UZ von Januar bis Dezember

automatische SZ-Berechnung im Feld Sonderzahlung

**Abrechnung November**

SZ2 weder Eintritt noch Austritt ­ WR von Januar bis Dezember

automatische SZ-Berechnung im Feld Sonderzahlung

**Beispiel 2**

Eintritt: im Vorjahr

Austritt: 31. März

0 SZ1 + SZ2 12

**Abrechnung März**

SZ1 Austritt 31. März ­ UZ von Januar bis März

Manueller Aufruf der Formel ­ SZ-Berechnung im Feld Sonderzahlung (*F2*)

SZ2 Austritt 31. März ­ WR von Januar bis März

Manueller Aufruf der Formel SZ – Berechnung bei der Freien Lohnart Weihnachtsremuneration (*F2-Taste*)

Die Formel liefert immer nur das UZ oder die WR niemals beide Sonderzahlungen!

**Beispiel 3**

Eintritt: im Vorjahr

Austritt: 30. September

0 SZ1 SZ2 12

#### 

**Abrechnung Juni**

SZ1 weder Eintritt noch Austritt ­ UZ von Januar bis Dezember

Automatische SZ-Berechnung im Feld Sonderzahlung

**Abrechnung September**

SZ2 Austritt 30. September ­ WR von Januar bis September

Manueller Aufruf der Formel ­ SZ-Berechnung im Feld Sonderzahlung (*F2*)

**Aufrollung Juni im September**

SZ1 Austritt 30. September ­ UZ kürzen auf Januar bis September

Manueller Aufruf der Formel ­ SZ-Berechnung im Feld Sonderzahlung (*F2*)

**Beispiel 4**

Eintritt: im Vorjahr

Austritt: 15. Dezember

> Austritt

0 SZ1 SZ2 12

**Abrechnung Juni**

SZ1 weder Eintritt noch Austritt ­ UZ von Januar bis Dezember

Automatische SZ-Berechnung im Feld Sonderzahlung

**Abrechnung November**

SZ2 weder Eintritt noch Austritt ­ UZ von Januar bis Dezember

Automatische SZ-Berechnung im Feld Sonderzahlung

**Aufrollung Juni im Dezember**

SZ1 Austritt 15. Dezember ­ UZ kürzen auf Januar bis 15. Dezember

Manueller Aufruf der Formel ­ SZ-Berechnung im Feld Sonderzahlung (*F2*)

**Aufrollung Nov im Dezember**

SZ2 Austritt 15. Dezember ­ WR kürzen auf Januar bis 15. Dezember

Manueller Aufruf der Formel ­ SZ-Berechnung im Feld Sonderzahlung (*F2*)

**Beispiel 5**

Eintritt: 1. April

Austritt: kein Austritt

> Eintritt

0 SZ1 SZ2 12

**Abrechnung Juni**

SZ1 Eintritt 1. April ­ UZ von April bis Dezember

Automatische SZ-Berechnung im Feld Sonderzahlung

**Abrechnung November**

SZ2 Eintritt 1. April ­ WR von April bis Dezember

Automatische SZ-Berechnung im Feld Sonderzahlung

**Beispiel 6**

Eintritt: 1. August

Austritt: kein Austritt

> Eintritt

0 SZ1+SZ2 12

**Abrechnung November**

SZ1 Eintritt 1. August ­ UZ von August bis Dezember

Automatische SZ-Berechnung im Feld Sonderzahlung

SZ2 Eintritt 1. August ­ WR von August bis Dezember

Manueller Aufruf der Formel SZ – Berechnung bei der Freien Lohnart Weihnachtsremuneration (*F2-Taste*)

**Beispiel 7**

Eintritt: im Vorjahr

Austritt: 31. März

Wiedereintritt: 1. Mai

> Austritt Eintritt

0 SZ1+SZ2 SZ1 SZ2 12

**Abrechnung März**

SZ1 Austritt 31. März ­ UZ von Januar bis März

Manueller Aufruf der Formel ­ SZ-Berechnung im Feld Sonderzahlung (*F2*)

SZ2 Austritt 31. März ­ WR von Januar bis März

Manueller Aufruf der Formel SZ – Berechnung bei der Freien Lohnart Weihnachtsremuneration (*F2*)

**Abrechnung Juni**

SZ1 Eintritt 1.Mai ­ UZ von Mai bis Dezember

Automatische SZ-Berechnung im Feld Sonderzahlung

**Abrechnung November**

SZ2 Eintritt 1.Mai ­ WR von Mai bis Dezember

Automatische SZ-Berechnung im Feld Sonderzahlung

**  
**

**Beispiel 8**

Eintritt: im Vorjahr

Austritt: 31. März

Wiedereintritt: 1. August

> Austritt Eintritt

0 SZ1+SZ2 SZ1+SZ2 12

**Abrechnung März**

SZ1 Austritt 31. März ­ UZ von Januar bis März

Manueller Aufruf der Formel ­ SZ-Berechnung im Feld Sonderzahlung (*F2*)

SZ2 Austritt 31. März ­ WR von Januar bis März

Manueller Aufruf der Formel SZ – Berechnung bei der Freien Lohnart Weihnachtsremuneration (*F2*)

**Abrechnung November**

SZ1 Eintritt 1.August ­ UZ von August bis Dezember

Automatische SZ-Berechnung im Feld Sonderzahlung

SZ2 Eintritt 1.August ­ WR von August bis Dezember

Manueller Aufruf der Formel SZ – Berechnung bei der Freien Lohnart Weihnachtsremuneration (*F2-Taste*).
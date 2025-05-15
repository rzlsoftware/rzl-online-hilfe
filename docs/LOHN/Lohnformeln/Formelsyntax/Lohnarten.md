# Lohnarten

![Image](<img/image413.png>){width="500"}

**Wert = Lohnart()Wert.()**

Die Formel *Wert* addiert die Beträge, auf die zugegriffen wird (keine Durchschnittsbildung).

**Wert Wenn Überwiegend = Lohnart()WertWennÜberwiegend()**

Die Formel filtert heraus, ob der Wert überwiegend in den Monaten aufgetreten ist. Nur wenn der Wert überwiegend aufgetreten ist, wird die Formel berechnet.

**Anzahl = Lohnart().Anzahl()**

Mit dieser Formel kann auf die im Feld *Anzahl* eingetragenen Werte einer freien Lohnart, die nach Einheiten abgerechnet wird, zugegriffen werden. Wenn freie Lohnarten nach Betrag abgerechnet werden, erfolgt der Zugriff entweder über die Formel *Wert* oder *Durchschnitt*.

**Basis = Lohnart().Basis()**

Mit dieser Formel kann auf die im Feld *Basis* eingetragenen Werte einer freien Lohnart, die nach Einheiten abgerechnet wird, zugegriffen werden. Wenn freie Lohnarten nach Betrag abgerechnet werden, erfolgt der Zugriff entweder über die Formel *Wert* oder *Durchschnitt*.

**Durchschnitt = Lohnart().Durchschnitt()**

Die Formel *Durchschnitt* addiert die Beträge, auf die zugegriffen wird und bildet den Durchschnitt. Die Durchschnittsberechnung erfolgt mit 30 SV-Tagen pro Monat.

**Durchschnitt Wenn Überwiegend = Lohnart().DurchschnittWennÜberwiegend()**

Die Formel filtert heraus, ob die Beträge überwiegend in den Monaten aufgetreten sind. Nur wenn die Beträge überwiegend aufgetreten sind, wird die Formel berechnet.

| **Formelsyntax** |                                                |
| ---------------- | ---------------------------------------------- |
| Lohnart(1001...) | Fixe Lohnarten                                 |
| Lohnart(1-999)   | Freie Lohnarten                                |
| Lohnart(2001…)   | Bemessungen (Bem. SZ, Bem. Abfertigung alt, …) |

| **Zugriff auf Werte**               |
| ----------------------------------- |
| Lohnart(191).Wert(Monat\[\|Jahr\])  |
| Lohnart(1001).Wert(Monat\[\|Jahr\]) |
| Lohnart(2001).Wert(Monat\[\|Jahr\]) |

| **Bei freien Lohnarten nach Einheiten** |
| --------------------------------------- |
| Lohnart(1).Anzahl(Monat\[\|Jahr\])      |
| Lohnart(1).Basis(Monat\[\|Jahr\])       |

| **Ermittlung eines Durchschnittwertes über mehrere Monate** |
| ----------------------------------------------------------- |
| Lohnart(1001).Durchschnitt(Monat\[\|Jahr\])                 |

Dabei wird immer auf den Wert einer Lohnart zugegriffen (auch bei freien Lohnarten nach Einheiten)
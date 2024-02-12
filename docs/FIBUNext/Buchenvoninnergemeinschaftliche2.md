# Buchen von innergemeinschaftlichen Erwerben

## Buchen von innergemeinschaftlichen Erwerben


Innergemeinschaftliche Erwerbe können sowohl auf Konten mit separater Codehinterlegung für *Erwerbsteuer*, als auch auf Konten mit USt-Code *Vorsteuer* und Eingabe des jeweiligen Erwerbsteuersatzes beim Buchen erfasst werden.


| **Geschäftsfall** | **Kennziffer** **UVA** | **Steuerhinterlegung** **am** **Konto** |  |  | **Eingabe** **im Buchungsdialog** **(Feld Code)** | **Anzeige** **Journal/Konto** |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | **Code** | **Prozentsatz** | **Steuertyp** |  |  |
| Innergem. Erwerb mit 20% | &#48;70, 072, 065 | Erwerb-steuer, Vorsteuer | &#50;0 | Innerg. Erwerb | E20 | E20 |
| Innergem. Erwerb mit 10% | &#48;70, 073, 065 | Erwerb-steuer, Vorsteuer | &#49;0 | Innerg. Erwerb | E10 | E10 |
| Innergem. Erwerb mit 13% | &#48;70, 008, 065 | Erwerb-steuer, Vorsteuer | &#49;3 | Innerg. Erwerb | E13 | E13 |
| Innergem. Erwerb mit 19 % für Jungholz und Mittelberg | &#48;70, 088, 065 | Erwerb-steuer, Vorsteuer | &#49;9 | Innerg. Erwerb | E19 | E19 |
| Steuerfreier innerg. Erwerb Art. 6 Abs. 2 | &#48;70, 071 | Erwerb-steuer, Vorsteuer | Steuerfrei | Innerg. Erwerb - steuerfrei | E01 | E01 |
| Nicht zu versteuernde Erwerbe (im Bestimmungsland) | &#48;76 | Erwerb-steuer, Vorsteuer | Steuerfrei | Nicht zu versteuernder Erwerb -im Bestimmungsland | E03 | E03 |
| Nicht zu versteuernde Erwerbe (im Inland) | &#48;77 | Erwerb-steuer, Vorsteuer | Steuerfrei | Nicht zu versteuernder Erwerb – im Inland | E02 | E02 |



Bei innergemeinschaftlichen Erwerben ohne Vorsteuerabzug ist beim Buchen im Feld *Code* nach dem Steuersatz *E20/E10/E19/E13/E05* ein Stern (\*) einzufügen. Somit wird die Vorsteuer zur Gänze als Aufwand verbucht.

Falls Sie in den Stammdaten einen prozentuellen VSt-Abzug verankert haben (*STAMM / FIBU / Umsatzsteuer*), wird der dort eingegebene Prozentsatz für die Berechnung und Verbuchung der abzugsfähigen Vorsteuer berücksichtigt.

Soll bei jedoch die gesamte Steuer als nicht abzugsfähig berücksichtigt werden, müssen Sie mit dem Code *E20\*\*/E10\*\*/E13\*\*/E19\*\** buchen.


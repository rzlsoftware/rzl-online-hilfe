# Übergang der Steuerschuld gem §19 UStG

## Übergang der Steuerschuld gem. §19 UStG


Für Sachverhalte gem. §19 UStG sind folgende Steuercodes möglich:


| **Geschäftsfall**                                                                     | **Kennziffer** **UVA** | **Steuerhinterlegung** **am** **Konto** |                  |                                             | **Eingabe** **im Buchungsdialog** **(Feld Code)** | **Anzeige** **Journal/Konto** |
| ------------------------------------------------------------------------------------- | ---------------------- | --------------------------------------- | ---------------- | ------------------------------------------- | ------------------------------------------------- | ----------------------------- |
|                                                                                       |                        | **Code**                                | **Prozent-satz** | **Steuertyp**                               |                                                   |                               |
| Umsatz mit Übergang der Steuerschuld §19                                              | &#48;00, 021           | Umsatzsteuer                            | Steuerfrei       | Umsätze aus Bauleistungen, Schrott, Abfälle | B01                                               | B01                           |
| Übergang der Steuerschuld §19 Abs. 1 zweiter Satz, §19 Abs. 1c, 1e, Artikel 25 Abs. 5 | &#48;57, 066           | Reverse Charge, Vorsteuer               | &#50;0/19/13/10  | Reverse Charge Ausland                      | Ü20/19/13/10                                      | Ü20/19/13/10                  |
| Übergang der Steuerschuld §19 Abs. 1d                                                 | &#48;32, 089           | Reverse Charge, Vorsteuer               | &#50;0/19/13/10  | USt Schrott und Abfallstoffe                | S20/19/13/10                                      | S20/19/13/10                  |
| Übergang der Steuerschuld für Bauleistungen §19 Abs. 1a                               | &#48;48, 082           | Reverse Charge, Vorsteuer               | &#50;0/19/13/10  | Bauleistung                                 | B20/19/13/10                                      | B20/19/13/10                  |
| Übergang der Steuerschuld §19 Abs. 1b                                                 | &#48;44, 087           | Reverse Charge, Vorsteuer               | &#50;0/19/13/10  | Reverse Charge Ausland §19 Abs.1b           | ÜB20/19/13/10                                     | ÜB20/19/13/10                 |



Die Umsatzsteuer wird automatisch vom Nettobetrag berechnet und gleichzeitig als Vor­steuer wieder abgezogen. Besteht keine Berechtigung zum Vorsteuerabzug, so muss beim Buchen nach dem jeweiligen Steuersatz ein Stern **(\*)** im Feld *Code* angefügt werden.


!!! warning "Hinweis"

    Wird mit dem USt-Prozentsatz *B01* gebucht, ist im Buchungsdialog vorgesehen die UID‑Nummer des Leistungsempfängers einzugeben. Dieses Feld kann zwar übersprungen werden, sollte jedoch unbedingt eingegeben werden, da die UID-Nummer auch auf der Ausgangsrechnung anzuführen ist. Ist die UID-Nummer beim Personenkonto verankert, wird diese vom Programm automatisch vorgeschlagen.

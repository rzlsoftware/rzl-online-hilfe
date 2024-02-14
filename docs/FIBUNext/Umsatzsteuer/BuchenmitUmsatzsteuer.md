# Buchen mit Umsatzsteuer

## Buchen mit Umsatzsteuer


Durch gesetzliche Vorgaben ist ein genauer Ausweis der Umsatzsteuer nach Steuersätzen getrennt in der UVA notwendig. Dies hat zur Folge, dass in der RZL FIBU Next eine exakte Trennung der Umsatzerlöse nach Steuersätzen vorgenommen werden muss.

### Buchen von Ausgangsrechnungen mit Umsatzsteuer


Zur Buchung der einzelnen Umsatzerlöse ist ein separates Erlöskonto mit der jeweiligen Steuerhinterlegung notwendig:


| **Geschäftsfall**                                  | **Kennziffer** **UVA** | **Steuerhinterlegung** **am** **Konto** |                  |                                              | **Eingabe** **im Buchungsdialog** **(Feld Code)** | **Anzeige** **Journal/Konto** |
| -------------------------------------------------- | ---------------------- | --------------------------------------- | ---------------- | -------------------------------------------- | ------------------------------------------------- | ----------------------------- |
|                                                    |                        | **Code**                                | **Prozent-satz** | **Steuertyp**                                |                                                   |                               |
| Steuerbarer Umsatz 10%                             | 000, 029               | Umsatzsteuer                            | 10               | \-                                           | 10                                                | M10                           |
| Steuerbarer Umsatz 20%                             | 000, 022               | Umsatzsteuer                            | 20               | \-                                           | 20                                                | M20                           |
| Steuerbarer Umsatz 13%                             | 000, 006               | Umsatzsteuer                            | 13               | \-                                           | 13                                                | M13                           |
| Steuerbarer Umsatz 19% für Jungholz und Mittelberg | 000, 037               | Umsatzsteuer                            | 19               | \-                                           | 19                                                | M19                           |
| Zusatzsteuer für pauschalierte LuF 10%             | 000, 052               | Umsatzsteuer                            | 10               | Zusatzsteuer pauschalierte Land-/ Forstwirte | Z10                                               | Z10                           |
| Zusatzsteuer für pauschalierte LuF 7%              | 000, 007               | Umsatzsteuer                            | 7                | Zusatzsteuer pauschalierte Land-/ Forstwirte | Z07                                               | Z07                           |



Durch die Hinterlegung am Konto ist der Steuersatz beim Buchen im Feld *Code* vorgegeben. Die Steuer wird automatisch aus dem eingegebenen Bruttobetrag berechnet, am USt-Sammelkonto verbucht und in der UVA in der jeweiligen Kennziffer berücksichtigt.


**Hinweis**

Der am Erlöskonto festgelegte Steuersatz wird bei der Buchung automatisch vorgeschlagen und sollte *nicht* geändert werden. Eine Änderung des Steuersatzes in den Kontostammdaten ist nur empfehlenswert, soweit noch keine Buchungen vorhanden sind.

### Eigenverbrauch

Die Buchung des gesondert auszuweisenden Eigenverbrauchs ist mit dem ***Steuercode** **EV20/10/13/19*** im Feld *Code* möglich.

### Direkte Buchung am Umsatzsteuer-Sammelkonto

Korrekturen der Umsatzsteuer sind grundsätzlich durch Stornierung der ursprünglichen Ausgangsrechnung und erneuter Buchung auf dem Erlöskonto mit korrekter Steuerhinterlegung möglich.

Buchungen direkt am Umsatzsteuer-Sammelkonto sollten daher nur in Ausnahmefällen durchgeführt werden und finden in der Kennziffer *090* *(Sonstige Berichtigungen)* der UVA Berücksichtigung.

Geben Sie dazu beim Buchen gegen das Sammelkonto im Feld *Code* den Code ***9790*** ein und im Feld *Betrag* den Steuerbetrag. Dieser wird anschließend auch im Feld *Steuer* als Steuerbetrag berücksichtigt.

Buchungen ohne Steuercode werden nicht in die Umsatzsteuervoranmeldung aufgenommen\!


**Hinweis**

Eine **Steuerschuld** gem#8202;*. §11 Abs. 12 und 14, §16 Abs. 2 UstG sowie gem. Art 7 Abs 4 (KZ 056)* ist ebenfalls direkt am Pflichtkonto mit dem *Code **9756*** zu buchen.

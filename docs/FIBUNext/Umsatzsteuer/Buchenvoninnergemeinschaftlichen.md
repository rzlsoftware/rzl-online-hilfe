# Buchen von innergemeinschaftlichen Lieferungen

## Buchen von innergemeinschaftlichen Lieferungen


| **Geschäftsfall**                | **Kennziffer UVA**   | **Steuerhinterlegung am Konto** |                  |               | **Eingabe im Buchungsdialog (Feld Code)** | **Anzeige Journal/Konto** |
| -------------------------------- | -------------------- | ------------------------------- | ---------------- | ------------- | ----------------------------------------- | ------------------------- |
|                                  |                      | **Code**                        | **Prozent-satz** | **Steuertyp** |                                           |                           |
| Innergemeinschaftliche Lieferung | &#48;00, 017 + in ZM | Umsatzsteuer                    | Steuerfrei       | ig Lieferung  | &#48;2                                    | M02                       |



**Erforderliche Eingaben:**

* Buchen auf einem *separaten Erlöskonto* mit korrekter Steuerhinterlegung.
* Eingabe der *gültigen UID-Nummer des Kunden* entweder durch Direkteingabe beim Buchen nach dem Textfeld im Feld *UID-Nummer*, oder in den Stammdaten des betroffenen Debitors. Die in den Stammdaten verankerte UID-Nummer wird beim Buchen des Debitors vorgeschlagen.


!!! warning "Hinweis"

    Durch die Buchung mit dem Steuercode *M02* werden innergemeinschaftliche Lieferungen automatisch in die [Zusammenfassende Meldung](/FIBUNext/Auswertungen/ZusammenfassendeMeldung/) übernommen.


**Automatische Skontobuchungen**

Bei einem OP-Ausgleich mit Skonto wird der Skontobetrag automatisch am Pflichtkonto *Skontoaufwand innergem. Lieferungen* als Einzelbuchung mit der UID-Nummer der Rechnung verbucht und in die ZM aufgenommen.

**Storno einer innergemeinschaftlichen Lieferung**

Haben Sie eine Buchung irrtümlich fehlerhaft eingegeben (z. B. falscher Betrag), müssen Sie diese mit einer Stornobuchung stornieren. Im Zuge dessen wird automatisch der Eintrag in der Zusammenfassenden Meldung entfernt.


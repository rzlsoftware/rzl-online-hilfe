# Buchen mit USt nach Vereinnahmung / VSt nach Verausgabung

## Buchen mit Umsatzsteuer nach Vereinnahmung / Vorsteuer nach Verausgabung


Sofern ein Klient als Einnahmen-/Ausgaben-Rechner (Ist-Versteuerer) mit Belastung der Umsatzsteuer nach Vereinnahmung des Entgeltes bzw. Abzug der Vorsteuer nach Verausgabung gebucht werden muss, sind folgende Grundeinstellungen notwendig.


* In den Stammdaten des Klienten sind im Bereich *FIBU Next / Umsatzsteuer* die Häkchen *USt nach Vereinnahmung* ***(1)*** beziehungsweise *VSt nach Verausgabung* ***(2)*** zu setzen.



![Image](<img/NeuesElement145.png>)


* Außerdem müssen Sie in der FIBU Next unter *Stammdaten / Pflichtkonten* im Bereich USt eigene Wartekonten für die Umsatzsteuer und die Vorsteuer hinterlegen.



![Image](<img/NeuesElement143.png>)

### Direktbuchungen auf Zahlungsmittelkonten


Direktbuchungen von Aufwänden bzw. Erträgen auf Zahlungsmittelkonten ([Kontenplan anlegen – Bestandskonten anlegen](../Stammdaten%20Vorlagen/Kontenplane.md/#bestandskonto-anlegen)) mit eingegebenem Steuersatz werden sofort versteuert, das heißt der Steuerbetrag wird sofort gegen das Sammelkonto gebucht und in die UVA aufgenommen.


!!! warning "Hinweis"

    Sofern Sie bei einem Ist-Versteuerer Personenkonten verwenden, sollte unbedingt die OP-Verwaltung der Personenkonten aktiviert werden, da die Umbuchung der Umsatz- bzw. Vorsteuer bei Zahlung durch Anwahl des Rechnungs-OPs automatisch erfolgt.


!!! warning "Hinweis"

    Damit Sie bei Direktbuchungen auf Zahlungsmittelkonten einen Steuercode eingeben können, muss zwingend in den Kontostammdaten des jeweiligen Kontos das Häkchen *Zahlungsmittelkonto* aktiviert sein.


### Buchen von Ausgangsrechnungen auf Ziel mit OP-Verwaltung


Bei Buchung einer Ausgangsrechnung (Debitor gegen Erlöskonto) wird die Steuer zunächst auf das Umsatzsteuer-Wartekonto gebucht.  
Im Journal und am jeweiligen Personenkonto wird der Steuercode mit einem W (für Wartebuchung) ergänzt.


![Image](<img/NeuesElement142.png>)


Erfolgt der Zahlungsausgleich (Zahlungsmittelkonto gegen Debitor) werden im OP-Feld die offenen Posten des Personenkontos mit der F2-Taste aufgerufen und die Rechnungs-OPs angewählt. Der Steuercode muss bei Buchung der Zahlung nicht mehr eingegeben werden – dieser wird vom ausgewählten offenen Posten übernommen. Dadurch erfolgt beim Abschluss der Buchung eine automatische Umbuchung vom USt-Wartekonto auf das Sammelkonto. Die Steuer wird somit in der Umsatzsteuervoranmeldung berücksichtigt.

### Buchen von Eingangsrechnungen auf Ziel mit OP-Verwaltung


Bei Buchung der Eingangsrechnungen (Aufwands-/Anlagekonto gegen Kreditor) wird durch Eingabe des Steuercodes die Vorsteuer auf das Wartekonto gebucht. Der Steuercode beim Aufruf des Journals oder eines der beiden bebuchten Konten wird auch hier wieder mit einem W dargestellt.


![Image](<img/NeuesElement141.png>)


Rufen Sie sich beim anschließenden Zahlungsausgleich im OP-Feld mit der F2-Taste die Rechnungs-OPs auf und wählen Sie die auszugleichenden OPs an. Bei der Zahlung muss kein Steuercode eingegeben werden, dieser wird automatisch vom jeweiligen ausgewählten offenen Posten übernommen. Nach Abschluss der Buchung erfolgt wiederum eine automatische Umbuchung vom Wartekonto auf das Sammelkonto und Berücksichtigung der Steuer in der Umsatzsteuervoranmeldung.\
Die dazugehörende Zahlung wird schließlich mit dem tatsächlichen Steuercode der Rechnung (z.B. V20) dargestellt.


!!! warning "Hinweis"

    Die Grundeinstellungen bzgl. Umsatzsteuer nach Vereinnahmung/Vorsteuer nach Verausgabung betreffen ausschließlich die Buchungen der USt/VSt. Der Erlös bzw. Aufwand wird mit dem Einbuchen der Rechnung tragend.


### Sonderfälle


#### Es werden unterschiedliche Steuersätze mit einer Zahlung ausgeglichen


In diesem Fall wird im Journal als Steuercode M+ angezeigt. In der Spalte Detail Ist-Versteuerung finden Sie die einzelnen Beträge pro Steuercode aufgesplittet.


![Image](<img/NeuesElement140.png>)


#### Die Zahlung wird vor der Rechnung eingebucht


Damit auch in dieser Konstellation die Versteuerung korrekt stattfinden kann, müssen Sie beim Einbuchen der Zahlung bereits den korrekten Steuercode erfassen.  
Die Versteuerung erfolgt zum Zeitpunkt der Zahlung. Es erfolgt dabei eine Umbuchung vom USt-Wartekonto auf das USt-Sammelkonto.  
Sobald die Rechnung (mit demselben Steuercode) eingebucht wird, gleicht sich das USt-Wartekonto wieder aus.

!!! warning "Hinweis"

    Buchungen mit A20/A10/… sind in der Ist-Versteuerung nicht möglich, da die Versteuerung hier ohnehin zum Zeitpunkt der Zahlung erfolgt.


#### Die Rechnung muss im Nachhinein geändert werden


Wenn zur entsprechenden Rechnung bereits eine Zahlung eingebucht wurde, muss vorher die Zahlung wieder gelöscht werden, damit die Rechnung geändert werden kann.\
Nach Änderung der Rechnung können Sie die dazugehörige Zahlung wieder einbuchen.

### USt-Verprobung beim Ist-Versteuerer


Die Umsatzsteuer-Verprobung (siehe [Auswertung USt-Verprobung](../Auswertungen/USt-Verprobung.md)) kann auch bei Versteuerung nach Vereinnahmung / Verausgabung durchgeführt werden.

Als Besonderheit werden hier zusätzlich die noch offenen Posten auf den Debitorenkonten von den Erlösen abgezogen und darin enthaltene Eröffnungsbilanzwerte wieder hinzugerechnet.


![Image](<img/NeuesElement139.png>)


Schließlich ergibt sich daraus die Umsatzsteuerschuld der jeweiligen Periode.


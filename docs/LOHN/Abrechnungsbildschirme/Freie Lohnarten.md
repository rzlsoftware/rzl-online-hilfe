# Freie Lohnarten

Im Eingabebildschirm der frei definierbaren Lohnarten können zusätzliche Lohnarten angewählt und abgerechnet werden. Für die Anlage von freien Lohnarten siehe [Lohnarten anlegen / ändern](../Freie%20Lohnarten/Lohnarten%20anlegen%20bzw.%20ändern.md).

**Lohnarten-Nummer**

Eingabe der Nummer der selbst definierten Lohnart. Mit der *F2-Taste* kann eine Liste der Lohnarten aufgerufen werden. Ist unter der eingegebenen Nummer keine Lohnart angelegt, erscheint die Meldung *Die angegebene Lohnart existiert nicht.* Diese kann mit der *F4-Taste* nun sofort angelegt werden. Werden Kanzleilohnarten verwendet, so kann eine neue Lohnart nicht bei der Abrechnung des Dienstnehmers angelegt werden, sondern nur im Programmpunkt [*Kanzleilohnarten*](../Klientenstammdaten/Stammdaten%20Klient/LA,%20Formeln,%20Texte,%20Kontenplan,%20Beiträge,%20Währung.md).

**Anzahl**

Die Anzahl kann nur bei Lohnarten abgerechnet werden, welche nach Einheiten definiert sind. Die Anzahl der Einheiten kann bis zu vier Kommastellen aufweisen.

**Basis**

Die Basis kann nur bei Lohnarten abgerechnet werden, welche nach Einheiten definiert sind. Die Eingabe der Basis (z. B. Stundenlohn, amtliches Kilometergeld usw.) kann bis zu fünf Kommastellen aufweisen. Es wird vom Programm automatisch der Betrag der Lohnart durch Multiplikation von Anzahl und Basis ermittelt und angezeigt.

Wenn Sie eine freie Lohnart mit der Basis Null auf der Abrechnung angedruckt haben möchten (z.&nbsp;B. Arztstunden, Urlaubsstunden usw.), dann machen Sie im Feld *Basis* einen rechten Mausklick und wählen *Explizit 0* aus. Somit erscheint bei der Basis ein ***!***.

![Image](<img/image111.png>){width="500"}

**Betrag**

Sie können nun den Betrag eingeben, falls die Lohnart nicht nach Einheiten abgerechnet wird.

Wenn Sie eine freie Lohnart mit dem Betrag Null auf der Abrechnung angedruckt haben möchten (z. B. Sachbezug für Elektro-KFZ usw.), dann machen Sie im Feld *Betrag* einen rechten Mausklick und wählen *Explizit 0* aus. Somit erscheint beim Betrag ein ***!***.

![Image](<img/image112.png>)

**Abw. Kostenstelle**

Das Feld *abw.* *Kostenstelle* kann angewählt werden, wenn in den Klientenstammdaten Registerblatt *Kostenstellen* das Feld [*Einzelzuordnung freier Lohnarten zu Kostenstellen*](../Klientenstammdaten/Stammdaten%20Klient/Kostenstellen,%20Kostenträger,%20Krankenstandsbescheinigungen,%20KV.md) aktiviert ist. Wird in diesem Feld eine Kostenstelle eingetragen, erfolgt die Zuordnung des Aufwands der freien Lohnart zu 100 % zur eingetragenen Kostenstelle.

**Abw. Kostenträger**

Das Feld *abw.* *Kostenträger* kann angewählt werden, wenn in den Klientenstammdaten Registerblatt *Kostenträger* das Feld [*Einzelzuordnung freier Lohnarten zu Kostenträger*](../Klientenstammdaten/Stammdaten%20Klient/Kostenstellen,%20Kostenträger,%20Krankenstandsbescheinigungen,%20KV.md) aktiviert ist. Wird in diesem Feld ein Kostenträger eingetragen, erfolgt die Zuordnung des Aufwands der freien Lohnart zu 100 % zum eingetragenen Kostenträger.

**Sonstige Behörde**

Hier können Sie die Behörde hinterlegen, welche Sie unter *Stamm / Klient / Registerblatt [Sozialfonds, Überw. an Sonstige Behörden](../Klientenstammdaten/Stammdaten%20Klient/Sozialfonds,%20Überw.%20an%20Behörden.md)* hinterlegt haben. Somit wird dieser Betrag auf der Überweisungsliste angeführt. Mit Anwahl der *F2-Taste* können alle erfassten Behörden angezeigt und ausgewählt werden. Es kann eine *Sonstige Behörde* nur bei einer freien Lohnart mit Lohnartendefinition „*Abzug*“ oder „*Werbungskosten*“ hinterlegt werden.

!!! info "Tipp"
    Durch Anwahl der *F2-Taste* können die bestehenden Kostenstellen bzw. Kostenträger aufgerufen und übernommen werden. Die *F4-Taste* ermöglicht die Neuanlage von Kostenstellen bzw. Kostenträgern.

# Urlaubsrückstellung

Nach Anwahl des Menüpunktes *Ausdruck / Rückstellungen / Urlaubsrückstellung* wird folgender Dialog geöffnet:

![Image](<img/image259.png>){width="500"}

Im Eingabebereich *Basis für Urlaubsrückstellung* ist analog zur Abfertigungsrückstellung festzulegen, welche Monatsbezüge als Basis für die Berechnung herangezogen werden sollen. Als Monatsbezug wird vom Programm von den vorgegebenen Lohnarten der Bruttolohn, die Stundenlöhne, die Erschwerniszulage, eventuelle Auslandseinkünfte, die Überstunden, Mehrstunden, sowie die Überstundenpauschale einbezogen. Von den freien Lohnarten werden nur jene in der Rückstellungsberechnung berücksichtigt, bei denen das Auswahlfeld *Bemessung Urlaubsrückstellung* aktiviert wurde. Durch Anwahl *Aufteilung nach Kostenstellen* kann die Rückstellung nach Kostenstellen ausgegeben werden.

Als Basis für die Berücksichtigung der Sonderzahlungen kann entweder der *Anspruch der SZ laut Eingabe* oder *die im laufenden Jahr abgerechneten SZ* ausgewählt werden.

Durch Anwahl der Schaltfläche *Weiter* wird das Listenfeld mit sämtlichen Dienstnehmern angezeigt. Die Grundeinstellungen können durch die Schaltfläche *Details* vor dem Ausdruck noch geprüft werden.

![Image](<img/image260.png>){width="400"}

Diese Grundeinstellungen können auch im Menüpunkt *Stamm / Klient / [Details Rückstellungen (2)](../Rückstellungen/Stammdaten.md)* aufgerufen bzw. bearbeitet werden.

Sind die entsprechenden Eintragungen vorgenommen, dann wird durch Anwahl der Schaltfläche *Speichern* wieder der Ausgangsdialog geöffnet.

![Image](<img/image261.png>)

Durch Anwahl des Feldes *ausgetretene Dienstnehmer nicht anzeigen* werden Dienstnehmer mit diesen Eigenschaften in der Liste nicht mehr angezeigt.

!!! info "Tipp"
    Durch Anwahl der *F3-Taste* können einzelne Dienstnehmer von der Rückstellungsberechnung ausgenommen werden. Durch neuerliche Anwahl der *F3-Taste* werden diese Dienstnehmer in der Rückstellungsberechnung wieder berücksichtigt.

**Beginn Urlaubsjahr (Url.Jahr)**

In diesem Feld wird der Beginn des Urlaubsjahres angezeigt. In der Regel ist der Beginn des Urlaubsjahres identisch mit dem Eintrittsdatum des Dienstnehmers im Abrechnungsbildschirm *Eintritt*.

**Bezug**

Das Eingabefeld *Bezug* zeigt den für die Berechnung der Urlaubsrückstellung maßgeblichen Bezug an. Der angezeigte Betrag ist abhängig von der Einstellung im Ausdrucksvordialog, und wird entweder durch den letzten Monatsbezug oder der entsprechenden Durchschnittswerte gebildet

Dieser Wert wird bei jedem Aufruf bzw. Ausdruck neu berechnet. Wird ein abweichender Betrag manuell eingegeben, wird dies durch ein Sternchen (\*) vor dem Feld *Betrag* angezeigt. Bei der Eingabe abweichender Beträge bleibt dieser erhalten und wird nicht bei einem neuerlichen Aufruf neu berechnet.

**Sonderzahlung (Sonderz.)**

Wird in den Ausdruckeinstellungen im Eingabebereich *Basis für Sonderzahlung* das Auswahlfeld *die im lfd. Jahr abgerechneten SZ* aktiviert, dann werden die bis zum Zeitpunkt der Erstellung der Rückstellungsliste die tatsächlich abgerechneten Sonderzahlungen angezeigt.

Wurde das Auswahlfeld *Anspruch lt. Eingabe aktiviert*, dann kann der Sonderzahlungsanspruch entweder als Betrag oder als Monatseingabe eingetragen werden, wobei vom Programm Eingaben unter 20 als Monatseingaben gewertet werden.

**Nebenkosten**

In diesem Eingabefeld werden die Lohnnebenkosten in Prozent angezeigt. Vom Programm wird im Regelfall der automatisch ermittelte Nebenkostenprozentsatz aus den Stammdaten der Rückstellung verwendet.

**Teiler**

Hier wird der in den *Details* eingetragene *Teiler* angezeigt. Innerhalb der [Urlaubskartei](../Abrechnungsbildschirme/Urlaub.md) oder in der angezeigten Dienstnehmerliste kann pro Dienstnehmer ein individueller Teiler bestimmt werden.

Wenn die Urlaubskartei nach Stunden geführt wird, hat die Eintragung des Monatsteilers keine Auswirkung, da das Programm automatisch die Anzahl der Wochenstunden (Abrechnungsbildschirm *Eintritt*) auf einen vollen Monat hochrechnet und diesen Wert als Teiler verwendet.

**Rest Vorjahr**

Im Eingabefeld *Rest Vorjahr* wird im Normalfall der Restsaldo Vorjahr aus der Urlaubskartei übernommen. Der Anspruch kann manuell eingegeben werden. Wurde im Vorjahr mehr Urlaub verbraucht, als Anspruch bestanden hat, so kann auch ein negativer Anfangsbestand mit – (Minus) vor dem Bestand eingegeben werden.

**Anspruch**

In diesem Feld wird der im Eingabebildschirm *Urlaub* im Eingabefeld *Anspruch* eingetragene Urlaubsanspruch angezeigt. Auch diese Eintragung kann manuell geändert werden.

Die Bezeichnung und Funktion des auf das Eingabefeld *Anspruch* folgenden Feldes ist je nach Einstellung im Eingabebildschirm *Detail* (Eingabe Urlaubsresttage) unterschiedlich.

**Verbrauch**

Wurde in den Einstellungen das Auswahlfeld *Eingabe Urlaubs-Resttage* nicht aktiviert, dann wird in der Bearbeitungszeile das Feld *Verbrauch* angezeigt. Wird die Urlaubskartei geführt, wird der Verbrauch anhand der Eintragungen ermittelt.

**Rest**

Ist in den Einstellungen das Auswahlfeld *Eingabe Urlaubs-Resttage* aktiviert, dann wird in der Bearbeitungszeile das Feld *Rest* angezeigt. Wird die Urlaubskartei geführt, werden die Resttage anhand der Eintragungen ermittelt. Sie können bis zu 9.999,00 Resttage bzw. -stunden erfassen.

!!! info "Tipp"
    Für die Felder *Rest Vorjahr*, *Anspruch*, *Verbrauch* oder *Rest* werden automatisch die Daten der Urlaubskartei verwendet. Soll die Urlaubskartei nicht verwendet werden, ist die *F4-Taste* anzuwählen. Durch Anwahl der *F5-Taste* wird die Urlaubskartei des markierten Mitarbeiters aufgerufen.

**Rückstellung**

Das Programm ermittelt automatisch aufgrund der eingegebenen Daten den Rückstellungsbetrag. Bei einer Änderung der eingegebenen Daten wird der Rückstellungsbetrag wieder neu errechnet. Wird jedoch ein abweichender Rückstellungsbetrag eingetragen, wird dieser bei einer Änderung der Daten nicht mehr neu berechnet, sondern bleibt fix gespeichert und wird mit einem Sternchen (\*) vor dem Betrag gekennzeichnet.

!!! info "Tipp"
    Es erfolgt stets eine automatische Abgrenzung der Urlaubsansprüche aufgrund der zeitlichen Überschneidung zwischen Urlaubsjahr und Bilanzstichtag. In der Urlaubskartei sollten daher die vollen Ansprüche erfasst oder die Funktion *dauerhafte Anspruchsaliquotierung* zum Einsatz kommen. Nur so wird eine doppelte Aliquotierung und damit falsche, meist negative Rückstellungswerte verhindert.

## Aufruf Berechnungsblatt Urlaubsrückstellung

Durch Markierung des Dienstnehmers und rechter Maustaste auf diesen Dienstnehmer öffnen Sie das Kontextmenü. Wählen Sie hier Berechnung-Info (STRG + F2-Taste) aus. Es öffnet sich ein neues Fenster mit der detaillierten Berechnung der Rückstellung von diesem ausgewählten Dienstnehmer.

![Image](<img/image262.png>)

!!! info "Tipp"
    Durch Anwahl *++* öffnen sich alle Bereiche. Mit *- -* schließen sich wieder alle Bereiche. Mit *+* wird nur dieser eine Bereich geöffnet. Mit *–* nur dieser eine Bereich geschlossen.

![Image](<img/image263.png>)

# Zeitausgleichsrückstellung

Die Zeitausgleichsrückstellung wird im Programmteil *Ausdruck / Rückstellungen / Zeitausgleich* ausgedruckt bzw. bearbeitet.

![Image](<img/image269.png>){width="500"}


Im Eingabebereich *Basis für Zeitausgleichsrückstellung* ist festzulegen, welche Basis für die Berechnung herangezogen werden soll. Das sind entweder der *letzte Monatsbezug* oder einer der entsprechenden Durchschnittswerte. Als Monatsbezug wird vom Programm von den vorgegebenen Lohnarten der Bruttolohn, die Stundenlöhne, die Erschwerniszulage, eine eventuelle Auslandstätigkeit, die Überstunden, die Mehrarbeitsstunden, die Überstundenpauschale und das BUAK-Urlaubsgeld laufend miteinbezogen. Von den freien Lohnarten werden nur jene in der Rückstellungsberechnung berücksichtigt, bei denen das Auswahlfeld *Bemessung ZA Rückstellung* aktiviert wurde. Durch Anwahl des Feldes *Aufteilung nach Kostenstellen* kann die Rückstellung getrennt nach Kostenstellen ausgegeben werden.

Als Basis für die Berücksichtigung der Sonderzahlungen kann entweder der *Anspruch der SZ laut Eingabe* (manuelle Eingabe siehe unten) oder *die im laufenden Jahr abgerechneten SZ* ausgewählt werden.

Durch Anwahl der Schaltfläche *Weiter* wird das Listenfeld mit sämtlichen Dienstnehmern angezeigt. Auch hier können Sie über die Schaltfläche *Details* die Grunddaten prüfen und überarbeiten.

![Image](<img/image270.png>){width="400"}

Die hier möglichen Optionen werden bei den [Stammdaten](../Rueckstellungen/Stammdaten.md) erläutert.

![Image](<img/image271.png>){width="500"}

**Bezug**

Das Eingabefeld *Bezug* zeigt den für die Berechnung der Zeitausgleichsrückstellung maßgeblichen Bezug an. Der angezeigte Betrag ist abhängig von der Einstellung im Ausdruckdialog, das sind entweder der *letzte Monatsbezug* oder die entsprechenden Durchschnittswerte. 

Dieser Wert wird bei jedem Aufruf bzw. Ausdruck neu berechnet. Wird ein abweichender Betrag manuell eingegeben, wird dies durch ein Sternchen (\*) vor dem Feld *Betrag* angezeigt. Bei der Eingabe abweichender Beträge bleibt dieser erhalten.

**Sonderzahlung (Sonderz.)**

Wird in den Ausdruckeinstellungen im Eingabebereich *Basis für Sonderzahlung* das Auswahlfeld *die im lfd. Jahr abgerechneten SZ* aktiviert, dann werden die bis zum Zeitpunkt der Erstellung der Rückstellungsliste tatsächlich abgerechneten Sonderzahlungen angezeigt.

Wurde das Auswahlfeld *Anspruch lt. Eingabe aktiviert*, dann kann der Sonderzahlungsanspruch entweder als Betrag oder als Monatseingabe eingetragen werden, wobei vom Programm Eingaben unter 20 als Monatseingaben gewertet werden.

**Nebenkosten**

In diesem Eingabefeld werden die Lohnnebenkosten in Prozent angezeigt. Vom Programm wird automatisch der mittels der Schaltfläche *Details* hinterlegte Prozentsatz angezeigt. Dieser Prozentsatz kann, falls notwendig, auch manuell korrigiert werden.

**Teiler**

Hier wird der im Abrechnungsbildschirm *Zeitausgleich* eingetragene Teiler angezeigt. Bei Bedarf kann hier ein abweichender Teiler eingetragen werden. Durch einen rechten Mausklick in den Teiler können Sie zwei Vorschlagsmöglichkeiten aufrufen.

![Image](<img/image272.png>)

*Vorschlag*: Hier wird der generelle Vorschlag angeführt. Wochenstunden mal 4,33.

*Aufruf Kartei-Teiler*: Hier wird der (abweichende) Stundenteiler und die Stunden für die Rückstellung aus den Karteien mit dem aktivierten Häkchen „für Rückstellung berücksichtigen“ aufgelistet.

![Image](<img/image273.png>){width="400"}

Soll eine Kartei nicht verwendet werden, geben Sie das Häkchen bei *Teiler* heraus. Auch ein Überschreiben der Daten für den Teiler und der Stunden ist möglich. Wird eine Kartei ausgehakt, verändert sich die Stundenanzahl und der Teiler. Mit *Übernehmen* können die hier erfolgten Änderungen in die Rückstellung übernommen werden.

![Image](<img/image274.png>){width="400"}

**Stunden**

Hier werden die im Abrechnungsbildschirm *Zeitausgleich* erfassten Rückstellungsstunden angezeigt. Mit der *F4-Taste* ist eine abweichende Eintragung der Rückstellungsstunden möglich.

**Rückstellung**

Hier wird der vom Programm errechnete Rückstellungsbetrag eingetragen. Wird der errechnete Rückstellungsbetrag korrigiert, erfolgt eine Kennzeichnung mit einem Sternchen (\*) vor dem Betrag. Mit der *F2-Taste* kann eine Eintragung des ursprünglichen Wertes, wenn vorher eine abweichende Eintragung erfolgte, erfasst werden.

## Aufruf Berechnungsblatt Zeitausgleichsrückstellung

Durch Markierung des Dienstnehmers und rechter Maustaste auf diesen Dienstnehmer öffnen Sie das Kontextmenü. Wählen Sie hier Berechnung-Info (STRG + F2-Taste) aus. Es öffnet sich ein neues Fenster mit der detaillierten Berechnung der Rückstellung dieses ausgewählten Dienstnehmers.

![Image](<img/image275.png>)

!!! info "Tipp"
    Durch Anwahl *++* öffnen sich alle Bereiche. Mit *- -* schließen sich wieder alle Bereiche. Mit *+* wird nur dieser eine Bereich geöffnet. Mit *–* nur dieser eine Bereich geschlossen.

![Image](<img/image276.png>)

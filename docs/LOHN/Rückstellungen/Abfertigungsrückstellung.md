# Abfertigungsrückstellung 

Der Ausdruck der Liste der Abfertigungswerte erfolgt im Menüpunkt *Ausdruck / Rückstellungen / Rückstellung Abfertigung alt.* In diesem Programmteil sind zunächst die Grundeinstellungen für die Berechnung der Abfertigungsrückstellung vorzunehmen.

![Image](<img/image254.png>){width="500"}

Im Eingabebereich *Basis für Abfertigung alt* ist festzulegen, mit welcher Berechnungsvariante die Basis für die Abfertigung ermittelt werden soll. Das kann entweder der letzte Monatsbezug oder unterschiedliche Varianten von Durchschnittsberechnungen sein. In den Monatsbezug wird vom Programm von den vorgegebenen Lohnarten der Bruttolohn, die Stundenlöhne, die Erschwerniszulage, eine eventuelle Auslandstätigkeit, die Überstunden, Mehrstunden, sowie die Überstundenpauschale einbezogen. Von den freien Lohnarten werden nur jene in der Rückstellungsberechnung berücksichtigt, bei denen das Auswahlfeld *Bemessung Abfertigung* aktiviert wurde.

Als Basis für die Berücksichtigung der Sonderzahlungen kann entweder der *Anspruch der SZ laut Eingabe* oder *die im laufenden Jahr abgerechneten SZ* ausgewählt werden.

**Aufteilung nach Kostenstellen**

Auf Basis der dem Dienstnehmer zugeordneten Kostenstellen, werden die Rückstellungsbeträge am Ausdruck getrennt nach Kostenstellen dargestellt.

**Abfertigungsliste nach RLG**

Wird die Option *Abfertigungsliste nach RLG* aktiviert, erfolgt eine finanzmathematische Berechnung der Rückstellung, also die unternehmensrechtliche Variante der Darstellung. Ist das Auswahlfeld nicht aktiviert, wird die Rückstellung gemäß § 14 EStG 1988 berechnet (steuerrechtlicher Ansatz).

Wurden die entsprechenden Einstellungen durchgeführt, kann durch die Anwahl der Schaltfläche *Weiter* der Dienstnehmerdialog mit den Rückstellungsparametern aufgerufen werden.

## Abfertigungsrückstellung

![Image](<img/image255.png>){width="500"}

Am Bildschirm werden alle Dienstnehmer des Dienstgebers bzw. Unterdienstgebers (UDG) mit den eingetragenen bzw. errechneten Daten angezeigt. Die Bewegung im Listenfeld erfolgt entweder mittels *Maus* oder mit der *Pfeil-nach-unten-Taste* oder *Pfeil-nach-oben-Taste*. Nur der im Listenfeld farblich hinterlegte Dienstnehmer kann bearbeitet werden. Mit Hilfe der *Enter* oder *Tabulator-Taste* gelangt man in das Eingabefeld *Eintritt* und innerhalb der Bearbeitungsleiste ermöglichen diese beiden Tasten die Bewegung nach rechts. Die *+-Haben-Taste* am Ziffernblock und die *Shift + Tab + Tasten* ermöglichen die Bewegung nach links.

Durch Anwahl des Feldes *ausgetretene bzw. BV-pflichtige Dienstnehmer nicht anzeigen* werden Dienstnehmer mit diesen Eigenschaften nicht mehr dargestellt

Nach Überprüfung und eventueller Korrektur der Eingaben erfolgt durch Anwahl der Schaltfläche *Drucken* oder der *Return-Taste* der Ausdruck der Rückstellung. Wenn Sie einen Dienstnehmer in der Liste markiert haben, können Sie mit der Tastenkombination *Strg + C* die gesamte Liste in den Zwischenspeicher kopieren. Anschießend kann diese Liste über *Strg + V* in eine Excel-File kopiert und weiterbearbeitet werden.

!!! info "Tipp"
    Durch Anwahl der *F3-Taste* können einzelne Dienstnehmer von der Rückstellungsberechnung ausgenommen werden. Durch neuerliche Anwahl der *F3-Taste* wird der Dienstnehmer in der Rückstellungsberechnung wieder berücksichtigt.

**Eintritt**

Im Eingabefeld *Eintritt* wird das im Abrechnungsbildschirm *Eintritt* eingegebene *Ersteintrittsdatum* vorgeschlagen. Sollte für die Berechnung der Abfertigung ein anderes Datum maßgeblich sein, ist es möglich, hier ein abweichendes Datum einzutragen.

**Vordienstzeiten (Vord.Zt.)**

In dieses Eingabefeld können Vordienstzeiten in Jahren eingegeben werden, falls diese für die Berechnung des Abfertigungsanspruches angerechnet werden müssen.

**Kürzung (Kürz.)**

Hier können Sie die Anzahl der Monate, um die der Abfertigungszeitraum zu kürzen ist (z. B. Karenzurlaub), eingeben.

**Bezug**

In dieses Feld wird der für die Berechnung der Abfertigung maßgebliche Bezug eingetragen bzw. durch das Programm vorgeschlagen. Entsprechend den Einstellungen im Ausdruckmenü ist dies entweder der *letzte Monatsbezug* oder einer der verschiedenen Durchschnittswerte. Dieser Wert wird bei jedem Aufruf neu errechnet.

Wird ein abweichender Betrag eingegeben, wird dieser mit einem Sternchen (\*) vor dem Betrag gekennzeichnet. Ein eingegebener abweichender Betrag bleibt erhalten und wird nicht mit einem neuerlichen Aufruf neu berechnet.

**Sonderzahlung**

In dieses Feld ist der für die Berechnung der Abfertigung maßgebliche Sonderzahlungsanspruch einzutragen. Es kann entweder der Gesamtjahresanspruch als Betrag oder der Anspruch in Monaten eingegeben werden. Vom Programm werden Eingaben unter 20 als Monatseingaben gewertet.

Wurde in den Ausdruckeinstellungen das Auswahlfeld *die* *im lfd Jahr abgerechneten Sonderzahlungen* aktiviert, dann werden vom Programm automatisch die im aktuellen Kalenderjahr abgerechneten Sonderzahlungen eingetragen.

**Abfertigung alt**

In diesem Feld wird der aufgrund der eingegebenen Daten errechnete fiktive Abfertigungsanspruch angezeigt. Dieser Betrag wird bei jedem Aufruf bzw. Ausdruck neu errechnet. Wird ein abweichender Abfertigungsanspruch eingetragen, dann wird dies durch ein Sternchen (\*) vor dem Betrag angezeigt.

!!! info "Tipp"
    Wurden in den Eingabefeldern *Bezug, Sonderzahlung* oder *Abfertigung* abweichende Eingaben vorgenommen, dann werden durch Anwahl der *F2-Taste* wieder die ursprünglichen Daten eingetragen.

## Aufruf Berechnungsblatt Abfertigungsrückstellung

Durch Markierung des Dienstnehmers und rechter Maustaste auf diesen Dienstnehmer öffnen Sie das Kontextmenü. Wählen Sie hier Berechnung-Info (STRG + F2-Taste) aus. Es öffnet sich ein neues Fenster mit der detaillierten Berechnung der Rückstellung von diesem ausgewählten Dienstnehmer.

![Image](<img/image256.png>)

!!! info "Tipp"
    Durch Anwahl *++* öffnen sich alle Bereiche. Mit *- -* schließen sich wieder alle Bereiche. Mit *+* wird nur dieser eine Bereich geöffnet. Mit *–* nur dieser eine Bereich geschlossen.

![Image](<img/image257.png>)


## Finanzmathematische Berechnung der Abfertigungsrückstellung (unternehmensrechtlicher Ansatz).

Soll eine finanzmathematische Berechnung der Abfertigungsrückstellung erstellt und ausgedruckt werden, dann ist in den Ausdruckeinstellungen das Auswahlfeld *Abfertigungsliste nach RLG* zu aktivieren.

Durch Anwahl der Schaltfläche *Weiter* wird wieder das Listenfeld mit sämtlichen Dienstnehmern angezeigt. Über die Schaltfläche *Details* können nochmals die Grundeinstellungen kontrolliert werden.

![Image](<img/image258.png>){width="500"}

Diese Optionen entsprechen jenen in den [Stammdaten](../Rückstellungen/Stammdaten.md) des Klienten beschriebenen Einstellungsmöglichkeiten, die Sie auch über *Stamm / Klient / Details Rückstellungen (1)* aufrufen können.

Sind die entsprechenden Eintragungen vorgenommen, dann wird durch Anwahl der Schalt­fläche *Speichern* wieder der Ausgangsdialog geöffnet.

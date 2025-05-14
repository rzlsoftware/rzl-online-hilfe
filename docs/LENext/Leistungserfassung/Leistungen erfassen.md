# Leistungen erfassen

## Eingabedialog

Mittels Mausklick in das Feld *Tätigkeit Nr.* oder mit der Tabulator-
bzw. Enter-Taste **(1)** kann eine Leistungszeile eingetragen werden.

![](<img/image23.png>)

Die Tätigkeit im Eingabefeld *Tätigkeit Nr.* kann mittels Eingabe des
Wortes gesucht werden. Alle Tätigkeiten können mit der F2-Taste oder
mittels Kontextmenü im Feld *Tätigkeit Nr.* vorgeschlagen werden
**(2)**. Eine weitere Möglichkeit, die Tätigkeit Nr. einzutragen, ist, die
Nummer der Tätigkeit manuell in das Feld *Tätigkeit Nr.* zu schreiben.
Dies ist jedoch nur sinnvoll, wenn die Nummern bekannt sind.

Die ersten zehn Einträge der Tätigkeiten und der Klienten beinhalten die
in den letzten zwei Monaten am häufigsten verwendeten Tätigkeiten und
Klienten **(3)**. Die ersten zehn Einträge (maximal 10 Einträge) sind
sogenannte Favoriten. Die Favoriten werden nach der Häufigkeit sortiert
(absteigend). Die restlichen Einträge nach den Favoriten bleiben nach
Nummern sortiert.

!!! warning "Hinweis"
    Für jede Leistungszeile muss eine Tätigkeit eingetragen werden, damit
    diese freigegeben werden kann.

Die Suche bzw. Eingabe der *Klienten Nummer* erfolgt analog zur
Vorgehensweise bei den Tätigkeiten.

Die Felder *Tätigkeit* und *Klient* können nicht eingetragen werden.
Diese werden aufgrund der Hinterlegung der Tätigkeiten bzw. Klienten aus
der Honorarverrechnung bzw. aus dem RZL-Board übernommen.

Die Felder *Projektzeitraum* und *Text* können befüllt werden. Je
nachdem, wie die Tätigkeiten in der Honorarverrechnung definiert wurden,
müssen *Beginn, Ende, Einheiten* und *Beträge* eingetragen werden.

Im Feld *Dauer* ist eine Eingabe notwendig, wenn Beginn und Ende nicht
eingetragen wurden. Wird Beginn und Ende eingetragen, wird das Feld
Dauer automatisch befüllt.

Die Spalte *Status* zeigt an, ob die Eingaben der Leistungszeile
fehlerhaft, unvollständig oder richtig sind. Um den Hinweis zum Status
lesen zu können, müssen Sie mit der Maus auf das Rufzeichensymbol
fahren.

**Beispiel:**

Im nachfolgenden Beispiel wurden diverse Fehler produziert.

![](<img/image24.png>)

*1. Zeile:* Kein Status, die Zeile wurde vollständig erfasst.

*2. Zeile:* Beginn und Ende sowie der Text wurden nicht befüllt. Beginn
und Ende sowie der Text sind in diesem Fall verpflichtend, weil die
Tätigkeit so definiert wurde. Beim Status werden die Hinweise *Bei
dieser Tätigkeit ist die Eingabe eines Textes verpflichtend* und *Bei
dieser Tätigkeit ist die Eingabe von Beginn und Ende verpflichtend*
angezeigt.

*3. Zeile:* Der Klient wurde nicht ausgewählt. Beim Status wird der
Hinweis *Die Auswahl des Klienten ist leer* angezeigt.

*4. Zeile:* Die Tätigkeit wurde nicht eingetragen. Beim Status wird der
Hinweis *Die Auswahl der Tätigkeit ist leer* angezeigt.

## Textfeld

Über das Textfeld besteht die Möglichkeit, einen Text für die
Notenerstellung zu definieren. Hierfür wird im Textfeld der zu
übernehmende Text markiert.

Es kann entweder der gesamte Text oder nur einzelne Textbausteine
übernommen werden. Jener Text, der übernommen wird, wird gelb
hervorgehoben.

Beispiele für die Leistungserfassung:

**Beispiel 1 – der gesamte Text soll übernommen werden:**

Erfassung:

Mit Rechtsklick in das Textfeld und Auswahl der Option *Text in die
Honorarnote übernehmen* (Strg+M) wird der gesamte Text gelb markiert
und somit in die Note übernommen.

![](<img/image25.png>)

Ansicht in der Note:

![](<img/image26.png>)

**Beispiel 2 – nur ein Teil soll übernommen werden:**

Den Teil, welcher übernommen werden soll, markieren und mit Rechtsklick
in das Textfeld und Auswahl der Option *Text in die Honorarnote
übernehmen* (Strg+M) wird der gewählte Text gelb markiert und somit in
die Note übernommen.

![](<img/image27.png>)

Nur der gelb hinterlegte Text wird anschließend in die Note aufgenommen.

![](<img/image28.png>)

**Beispiel 3 – mehrere einzelne Teile sollen übernommen werden**

Erfassung:

Die Teile, welche übernommen werden sollen, markieren und mit Rechtsklick
in das Textfeld und Auswahl der Option *Text in die Honorarnote
übernehmen* (Strg+M) wird der gewählte Text gelb markiert und somit in
die Note übernommen.

![](<img/image29.png>)

Ansicht in der Note:

![](<img/image30.png>)

!!! warning "Hinweis"
    Werden mehrere verschiedene Textbausteine markiert, werden die
    jeweiligen Textbausteine mittels Zeilenschaltung getrennt (siehe
    Beispiel 3).

## Infozeile

Während der Leistungserfassung ist im unteren Bereich der Erfassung
ersichtlich, ob es Differenzen zur Arbeitszeit gibt **(1).** Ebenso
sehen Sie die erfassten Leistungen, die Arbeitszeit, die
Leistungserfassung außerhalb (z. B. Arztbesuche, Urlaube, Krankenstände),
die Normalarbeitszeit und die Mehrarbeit **(1).** Für nähere
Informationen, warum z. B. die Arbeitszeit den angeführten Wert aufweist,
wird ein Tooltip eingeblendet **(2)**. Damit der Tooltip eingeblendet
wird, ist auf den jeweiligen Eintrag mit dem Mauscursor zu fahren.

![](<img/image34.png>)

Die einzelnen Punkte der Infozeile werden nachfolgend erklärt:

**Leistungen**

Summe der Dauer aller Leistungen innerhalb der Arbeitszeit.

**Arbeitszeit**

Bruttoarbeitszeit abzüglich Pausen und Unterbrechungen.

**Differenz Arbeitszeit**

Die Differenz zwischen Leistungen innerhalb der Arbeitszeit und der
Nettoarbeitszeit. Es sollte keine Differenz vorhanden sein. Sollte
doch eine Differenz aufscheinen, ist diese mit einer roten Schrift
gekennzeichnet.

**LE (außerhalb)**

Summe der Dauer aller Leistungen außerhalb der Arbeitszeit (z. B.
Arztbesuch, Behördengänge).

**Normalarbeitszeit**

Die hinterlegte Normalarbeitszeit für diesen Wochentag.

**Mehrarbeit**

Die Summe der Dauer aller Leistungen abzüglich der Normalarbeitszeit.

**Zeitausgleichsaldo**

Der aktuelle Saldo des Zeitausgleichs für den jeweiligen Tag.

!!! info "Tipp"
    Alle Werte der Infozeile werden mittels Tooltip erläutert. Sie können
    rasch und einfach herausfinden, wie sich der Wert zusammensetzt.

## Tageserfassung

Wird nicht der heutige Tag, sondern ein anderer Tag erfasst **(3)**,
kann dieser aus dem Kalender heraus ausgewählt werden. Der heutige Tag
ist jedoch immer im Vordergrund (mit einem blauen Rahmen) markiert
**(4)**.

Über den Button *Vorheriger Tag* oder *Nächster Tag* kann in der
Leistungserfassung der Vortag oder der nächste Tag erfasst werden.

![](<img/image35.png>)

!!! info "Tipp"
    Mit der Tastenkombination Strg + L kann rasch aus der
    Arbeitszeiterfassung in die Leistungseingabe gewechselt werden.

Mittels Shortcut *Alt + Links* (linke Pfeiltaste/Cursortaste) kann der
Vortag erfasst werden. Der nächste Tag kann mittels Shortcut *Alt +
Rechts* (rechte Pfeiltaste/Cursortaste) erfasst werden.

!!! warning "Hinweis"
    Die Eingaben in der Leistungserfassung werden automatisch gespeichert.
    Es existiert kein Speichern-Button in dieser Ansicht.

## Arbeitszeitgesetz

Wird das Arbeitszeitgesetz nicht eingehalten, so erhalten Sie im unteren
Bereich der Leistungserfassung einen Hinweis in den nachfolgend
beschriebenen Fällen.

![](<img/image36.png>)

**Nichteinhaltung der Ruhezeiten:**

Nach sechs Stunden muss in Summe mindestens eine Pause von 30 Minuten
eingehalten werden, wobei Pausen unter zehn Minuten ignoriert werden  
(vgl. §11 Abs. 1 AZG).

Darüber hinausgehende Regelungen wie die Behandlung von Reisezeiten
usw. werden derzeit nicht berücksichtigt.

![](<img/image37.png>)

**Überschreitung der maximalen Tagesarbeitszeit:**

Die tägliche Arbeitszeit darf zwölf Stunden nicht überschreiten. (vgl.
§9 Abs. 1 AZG).

!!! warning "Hinweis"
    Ist in den Mitarbeiterstammdaten im Board die Option *Geschäftsführung
    oder leitende Anstellung* (siehe HON Next Handbuch Kapitel Stammdaten
    Mitarbeiter) aktiv, erhalten Sie keine Hinweise zum Arbeitszeitgesetz.

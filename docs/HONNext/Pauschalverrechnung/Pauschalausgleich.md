## Pauschalausgleich

!!! warning "Hinweis"
    Die Abrechnung der Pauschale im Zuge der Notenerstellung und der
    Pauschalausgleich sind unabhängig voneinander.

Die Gegenrechnung/der Ausgleich der Pauschale mit den tatsächlich
erfassten Leistungen der Mitarbeiter erfolgt über *Pauschalverrechnung /
Pauschalzeilen* oder im Zuge des
 [automatischen Pauschalausgleiches](/HONNext/Pauschalverrechnung/Pauschalausgleich/#automatischer-pauschalausgleich).

Zuerst wählt man die Pauschalzeile, welche ausgeglichen werden soll aus.
Anschließend wählt man die Schaltfläche *Pauschale ausgleichen /
Bearbeiten*.


![](<img/image279.png>)

Es öffnet sich ein Dialog mit allen Erfassungszeilen, welche mit der
Pauschale ausgeglichen werden können. Nun kann man jene
Erfassungszeilen, welche man ausgleichen möchte, anhaken.

!!! info "Tipp"
    Das Programm wählt vorab alle Zeilen mit einem passenden Projektzeitraum
    zur Pauschale aus.

Das Programm ermittelt automatisch einen Zu-/Abschlag **(1)**. Die
Verteilung der Zu/Abschläge ist von den [Grundeinstellungen](/HONNext/Einstellungen/Grundeinstellungen) abhängig.

Der Zu/Abschlag passt sich automatisch an, wenn eine Erfassungszeile
zusätzlich angehakt oder ausgehakt wird.


![](<img/image280.png>)

Die Detailzeile im oberen Bereich des Bildschirmes **(2)** zeigt Ihnen
den Wert der Pauschale, die Art der Verteilung der Zu/Abschläge, sowie
eine möglich vorhandene Differenz nach einer manuellen Verteilung der
Zu/Abschläge.

### Ändern einer ausgeglichenen Pauschale

Wurde bei einer Pauschalzeile bereits über *Pauschalverrechnung /
Pauschalzeilen* der Pauschalausgleich durchgeführt, kann nur noch der
Projektzeitraum und der Betrag der Zeile geändert werden.


![](<img/image281.png>)

Eine Änderung löst automatisch den Pauschalausgleich aus. Es öffnet sich
daher die Ansicht des Pauschalausgleiches, wo das Programm bei einer
Änderung des Betrages auch die Zu/Abschläge neu verteilt bzw., wo Sie
selbst noch Änderungen durchführen können.

!!! warning "Hinweis"
    Eine bereits abgerechnete Pauschalzeile kann nicht mehr verändert
    werden.

Wird im Zuge der Notenerstellung der Betrag einer bereits ausgeglichenen
Pauschalzeile verändert, öffnet sich auch hier automatisch der
Pauschalausgleich. Änderungen an der Pauschalzeile werden mit dem
Speichern der Note mitgespeichert.

### Pauschalausgleich während der Notenerstellung

!!! warning "Hinweis"
    Im Zuge der Anlage der [Pauschalzeilen](/HONNext/Pauschalverrechnung/Pauschalzeilen/)
    kann definiert werden, dass der Pauschalausgleich gleich im Zuge der
    Notenerstellung vom Programm automatisch vorgenommen wird.

Der oben geschilderte Vorgang des Pauschalausgleiches ist auch direkt im
Zuge der Notenerstellung möglich. Es kann für alle in der jeweiligen
Note abgerechneten Pauschalzeilen ein Ausgleich erfolgen.

Wenn Sie die Note über *Honorarnoten / Notenerstellung* erstellen, sind
alle möglich abzurechnenden Pauschalzeilen dargestellt. Durch den Haken
neben dem Betrag **(1)** lässt sich erkennen, ob die Pauschale bereits
ausgeglichen wurde. Ist dies nicht der Fall bzw. soll der
Pauschalausgleich noch bearbeitet werden, kann dies über den Button
*Pauschalausgleichen* *bearbeiten* **(2)** im Ribbon oder über das
Kontextmenü erfolgen.



![](<img/image282.png>)

!!! warning "Tipp"
    Wurde der Pauschalausgleich durchgeführt kann über *Pauschalausgleich
    anzeigen* dieser nochmals kontrolliert werden.

### Automatischer Pauschalausgleich

!!! warning "Hinweis"
    Damit der automatische Pauschalausgleich vom Programm erfolgen kann, ist
    es nötig, dass der RZL Dienst aktiv ist (siehe SETUP Handbuch Kapitel
    12.10.2).

Ersichtlich über folgendes Symbol in der unteren rechten Ecke:


![](<img/image251.png>)

Bei der Anlage einer Pauschalzeile/einer wiederkehrenden Pauschalzeile
besteht die Option den automatischen Ausgleich zu aktivieren.


![](<img/image283.png>)

!!! info "Tipp"
    Wird der automatische Ausgleich nicht aktiviert, erfolgt der Ausgleich
    der Pauschale weiterhin manuell über *Pauschalverrechnung /
    Pauschalzeilen* und der Schaltfläche *Pauschale ausgleichen.*

Für den Automatischen Ausgleich sind zwei Felder zu hinterlegen.

**Zeitpunkt**

Hier ist zu definieren, wann die Pauschale automatisch ausgeglichen
werden soll. Sie können zwischen folgenden Optionen wählen:

-   Bei der Notenerstellung

    Der Pauschalausgleich wird im Zuge der Notenerstellung durchgeführt.
    Das Programm sucht nun nach allen Leistungen die unter die
    Verrechnungsgruppe fallen sowie den gleichen Projektzeitraum wie die
    Pauschalzeile aufweisen und gleicht diese mit der Pauschalzeile aus.
    Der Ausgleich kann während der Notenerstellung bearbeitet werden
    ([Pauschalausgleich während der Notenerstellung](/HONNext/Pauschalverrechnung/Pauschalausgleich/#pauschalausgleich-wahrend-der-notenerstellung)).

-   Datum

    Über das Feld Datum können Sie einen Zeitpunkt definieren, wann der
    Pauschalausgleich vom Programm erfolgen soll.

    0 = gleich mit dem Datum der nächsten Pauschalzeile

    1 = ein Monat nach dem Datum der Pauschalzeile

    Das Datum des automatischen Ausgleiches darf maximal drei Monate
    nach dem Datum der Pauschale liegen.

**Verteilungsart**

Hier ist einzustellen, ob die Zu/Abschläge die durch den Ausgleich der
Pauschale entstehen mit/ohne Mitarbeiterbezug oder manuell Verteilt
werden sollen.

**Beispiel Automatischer Pauschalausgleich mit Datum:**

Monatliche Pauschale für die Finanzbuchhaltung von 500€, welche jeweils
ein Monat zeitversetzt abgerechnet wird. Der automatische Ausgleich soll
immer mit dem gleichen Datum wie das Generieren der Pauschalzeile
erfolgen.

Anlage der wiederkehrenden Pauschalzeile:

![](<img/image284.png>)

Über die Schaltfläche *Pauschalzeilen Vorschau* bzw. über den RZL Dienst
wird nun eine Pauschalzeile mit 31.08.2023 für den Projektzeitraum Juli
2023 generiert.

![](<img/image285.png>)

Über die Ansicht *Pauschalverrechnung / Pauschalzeilen* wurde das Datum
des automatischen Ausgleiches sowie die Verteilungsart hinterlegt.

![](<img/image286.png>)

Der automatische Ausgleich geht wie folgt vor:

Das Programm sucht nun nach allen Leistungen die den Klienten betreffen,
unter die Verrechnungsgruppe Buchhaltung fallen sowie den gleichen
Projektzeitraum wie die Pauschalzeile aufweisen und gleicht diese mit
der Pauschalzeile aus.

!!! info "Hinweis"
    Zeilen ohne Projektzeitraum bzw. mit überschneidenten Projektzeiträumen
    werden ebenso ausgewählt.

Über die Schaltfläche *Pauschale ausgleichen*, kann der
Pauschalausgleich aufgerufen bzw. noch editiert werden:

![](<img/image287.png>)

Aufgrund der gewählten Verteilungsart *Automatische Verteilung mit
Mitarbeiterbezug* ordnet das Programm die Zuschläge den Mitarbeitern zu
**(1).**

Mit 30.09.2023 generiert der RZL-Dienst automatisch eine neue
Pauschalzeile mit Datum 30.09.2023 für den Projektzeitraum August 2023.

Der Automatische Ausgleiche erfolgt ebenso am 30.09.2023 – das Programm
wählt nun alle Buchhaltungszeilen mit Projektzeitraum August 2023.

Mit 31.10.2023 generiert der RZL-Dienst automatisch eine neue
Pauschalzeile mit Datum 31.10.2023 für den Projektzeitraum September
1.    Der Automatische Ausgleiche erfolgt ebenso am 31.10.2023 – das
Programm wählt nun alle Buchhaltungszeilen mit Projektzeitraum September
2023 usw.

**Beispiel automatischer Pauschalausgleich bei Notenerstellung:**

Monatliche Pauschale für die Finanzbuchhaltung von 500€, welche jeweils
ein Monat zeitversetzt abgerechnet wird. Der automatische Ausgleich soll
bei der Notenerstellung erfolgen.

Anlage der wiederkehrenden Pauschalzeile:

![](<img/image269.png>)

Über die Schaltfläche *Pauschalzeilen Vorschau* bzw. über den RZL Dienst
wird nun eine Pauschalzeile mit 31.08.2023 für den Projektzeitraum Juli
2023 erstellt.

Über die Ansicht *Pauschalverrechnung / Pauschalzeilen* wurde das Datum
des automatischen Ausgleiches sowie die Verteilungsart hinterlegt.

![](<img/image288.png>)

Wenn Sie nun über *Honorarnoten / Notenerstellung* die Note erstellen
ist ersichtlich, dass die Pauschale abgerechnet wird und auch bereits
ausgeglichen ist.

![](<img/image289.png>)

Möchten Sie den Pauschalausgleich nochmals aufrufen, funktioniert dies
über die Schaltfläche *Pauschalausgleich*. Hier sehen Sie auch, welche
Zeilen das Programm ausgeglichen hat.

![](<img/image290.png>)

Wird eine Pauschale abgerechnet, zu der es noch keine Leistungen in der
Leistungserfassung gib, erhalten Sie folgenden Hinweis beim Öffnen der
Note:

![](<img/image291.png>)

Der Pauschalausgleich kann nicht vom Programm automatisch durchgeführt
werden und muss manuell über *Pauschalverrechnung / Pauschalzeilen*
gemacht werden.

### Pauschlausgleich zurücksetzten

Wurde ein Pauschlausgleich irrtümlich durchgeführt, kann dieser über die
Schaltfläche *Pauschalausgleich zurücksetzten* wieder rückgängig gemacht
werden.


![](<img/image292.png>)

Sie erhalten eine Abfrage, ob der Pauschalausgleich tatsächlich
zurückgesetzt werden soll.


![](<img/image293.png>)

Wird diese Abfrage mit Zurücksetzten bestätigt, werden alle
Zu/Abschläge, die durch den vorher durchgeführten Pauschalausgleich
generiert wurden, verworfen.

Die Erfassungszeilen stehen für einen erneuten Pauschalausgleich wieder
zur Verfügung.

!!! info "Hinweis"
    Wurde für die Pauschalzeile eine [Schlussnote](/HONNext/Pauschalverrechnung/Schlussnote) erstellt, kann der Pauschalausgleich nicht mehr
    bearbeitet werden, sondern nur noch in einer Art Lesezugriff aufgerufen
    werden.
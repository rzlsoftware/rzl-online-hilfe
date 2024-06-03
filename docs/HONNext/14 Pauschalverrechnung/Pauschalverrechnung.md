# Pauschalverrechnung

Die Honorarverrechnung bietet die Möglichkeit Klienten auch pauschal
abzurechnen. Hierfür wird das extra Modul Pauschalverrechnung benötigt.

Innerhalb der Honorarverrechnung gibt es den Reiter
*Pauschalverrechnung*. Die Honorarverrechnung bietet Ihnen die
Möglichkeit selbstständig Pauschalzeilen zu generieren/zu bearbeiten,
sowie wiederkehrende Pauschalzeilen automatisch vom Programm erzeugen zu
lassen.

## Pauschalzeilen

Über den Button *Pauschalzeilen* erhalten Sie eine Übersicht aller
manuell und automatisch generierten Pauschalzeilen.

Abb. 14‑1 Optionen Pauschalverrechnung

<img src=".\img/image264.png"
style="width:3.34646in;height:0.92855in" />

Die Ansicht zeigt Ihnen alle manuell und automatisch generierten
Pauschalzeilen und kann gruppiert so wie gefiltert werden. Auch hier
haben Sie die Möglichkeit sich Layouts anzulegen (19.11, Seite 153).

Bei den Layouts steht Ihnen das vordefinierte RZL Layout *Überfällige
Pauschalzeilen* zur Verfügung.

### Pauschalzeile anlegen

Diese Funktion wird benötigt, wenn Sie selbstständig für einen Klienten
eine Pauschalzeile erzeugen möchten. Sie können entweder über den Ribbon
**(1)** oder über die Schaltfläche in der rechten Ecke **(1)** eine neue
Pauschalzeile anlegen.

Abb. 14‑2 Pauschalzeile anlegen

<img src=".\img/image9.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image31.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image19.png"
style="width:0.35417in;height:0.35417in" />
<img src=".\img/image265.png"
style="width:6.29921in;height:3.34017in" />

Eine Pauschalzeile beinhaltet das Datum der Zeile (gleich wie
Leistungsdatum in der Leistungserfassung), den betroffenen Klienten und
die Verrechnungsgruppe, welche pauschal abgerechnet werden soll, sowie
den Projektzeitraum und den Betrag. Optional kann auch ein Text
eingetragen werden.

Für den automatischen Pauschalausgleich siehe *Kapitel 14.6.3
Automatischer Pauschalausgleich.*

Hinweis

Solang eine Pauschalzeile nicht abgerechnet oder ausgeglichen wurde,
kann diese verändert werden. Über die Spalte *Status* ist der aktuelle
Zustand der Zeile zu sehen.

Tipp

Die Funktion *Pauschalzeile anlegen* sollte die Ausnahme bilden. Wird
ein Klient grundsätzlich pauschal abgerechnet, sollte dies über
wiederkehrende Pauschalzeilen gelöst werden.

### Pauschalzeile löschen

Sollte ein Klient nicht mehr Pauschal abgerechnet werden oder wurde eine
Pauschalzeile irrtümlich angelegt, kann diese über den Button
*Pauschalzeile löschen* **(2)** gelöscht werden. Eine Löschung ist
ebenso über die rechte Maustaste und das Kontextmenü möglich.

Hinweis

Abgerechnete oder ausgeglichene Pauschalzeilen, können nicht gelöscht
werden.

## Wiederkehrende Pauschalzeilen

Wiederkehrende Pauschalzeilen werden benötigt, wenn ein Klient z.B.
monatlich pauschal abgerechnet wird. Es werden hier die benötigen
Pauschalzeilen vom Programm generiert.

Hinweis

Damit wiederkehrende Pauschalzeilen vom Programm generiert werden
können, ist es nötig, dass der RZL Dienst aktiv ist (siehe SETUP
Handbuch Kapitel 12.10.2).

Ersichtlich über folgendes Symbol in der unteren rechten Ecke:

Abb. 14‑3 Aktiver RZL Dienst

<img src=".\img/image251.png"
style="width:0.86614in;height:0.22843in" />

### Neue wiederkehrende Pauschalzeile

Eine neue wiederkehrende Pauschalzeile kann entweder über den Butten im
Ribbon **(1)** oder über die Schaltfläche neue Wiederkehrende
Pauschalzeile **(1)** angelegt werden.

Abb. 14‑4 wiederkehrende Pauschalzeile anlegen

<img src=".\img/image2.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image116.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image5.png"
style="width:0.35417in;height:0.35417in" />
<img src=".\img/image266.png"
style="width:6.29921in;height:3.10491in" />

**Daten der Pauschalzeile**

Klient Hier wird der Klient hinterlegt.

Verrechnungsgruppe Hier wird die Verrechnungsgruppe hinterlegt.

> Häufigkeit Hier definieren Sie, wie oft pauschal abgerechnet wird.  
> Bsp. 1 = monatlich, 3 = quartalsweise, 6 = halbjährlich und 12 =
> jährlich
>
> Datum der nächsten Zeile Hier definieren Sie, mit welchem Datum
> (Leistungsdatum) die nächste Pauschalzeile generiert werden soll.  
> Bsp. immer mit ersten des Monats
>
> Projektzeitraum (+/- Monate) Hinterlegen Sie hier, für welchen
> Projektzeitraum die Pauschale abgerechnet werden soll. Mit einem
> negativen Vorzeichen kann der Projektzeitraum nach hinten verschoben
> werden. Ohne Vorzeichen kann der Projektzeitraum nach vorne verlagert
> werden.  
> Bsp.: Datum der nächsten Zeile ist der 01. Jänner -&gt; Im
> Projektzeitraum wurde **-**1 definiert.  
> Somit wird mit 01. Jänner eine Zeile für den Projektzeitraum Dezember
> generiert. Und weiterführend mit 01. Februar eine Zeile für den
> Projektzeitraum Jänner.

Betrag Tragen Sie die Höhe der Pauschale ein.

> Aktiv Wird für einen Klienten die Pauschalverrechnung deaktiviert,
> kann die Option *Aktiv* deaktiviert werden.  
> Es werden keine Pauschalzeilen mehr generiert.
>
> Text Pauschalzeile Grundsätzlich erhält die Pauschalzeile den Text,
> welcher bei der Verrechnungsgruppe hinterlegt wurde (vgl. Kapitel 14.3
> Seite [124](#bezeichnung-der-pauschale)) über das Feld *Text
> Pauschalzeile* kann hier etwas abweichendes eingetragen werden. Soll
> der abweichende Text auch auf der Note angedruckt werden, ist der Text
> mit der rechten Maustaste zu übernehmen. Der zu übernehmende Text ist
> gelb hinterlegt **(2).**
>
> Anmerkung Dieses Feld steht Ihnen für interne Bemerkungen zur
> Verfügung.

Automatischen Ausgleich  
Aktivieren: Kann optional aktiviert werden. Siehe

Kapitel 14.6.3 Automatischer Pauschalausgleich.

Nachdem die Daten der wiederkehrenden Pauschale eingegeben und
gespeichert wurden, können über die Schaltfläche *Pauschalzeilen
Vorschau* die dazugehörigen Pauschalzeilen generiert werden.

Hinweis

Die Pauschalzeilen müssen nur über die Pauschalzeilen Vorschau erzeugt
werden, wenn Sie in der Vergangenheit liegen und gleich abgerechnet
werden sollen, ansonsten werden die Zeilen monatlich/quartalsweise etc.
über den RZL Dienst erzeugt.

Abb. 14‑5 Pauschalzeilen Vorschau

<img src=".\img/image267.png"
style="width:0.70006in;height:0.65839in" />

Abb. 14‑6 Pauschalzeilen Vorschau Zeilen

<img src=".\img/image268.png"
style="width:6.29921in;height:3.40225in" />

Hinweis

Es werden die Pauschalzeilen bis zum aktuellen Tagesdatum angehakt.

Fortlaufend werden, nur bei aktivem RZL Dienst, die Zeilen automatisch
je Monat/Quartal etc. erzeugt.

**Beispiel automatisches generieren mit dem RZL Dienst:**

Monatliche Pauschale für die Finanzbuchhaltung von 500€, welche jeweils
ein Monat zeitversetzt abgerechnet wird.

Anlage der Pauschale mit August 2023:

<img src=".\img/image269.png"
style="width:6.29921in;height:1.10553in" />

Über die Schaltfläche *Pauschalzeilen Vorschau* bzw. über den RZL Dienst
kann nun eine Pauschalzeile mit 31.08.2023 für den Projektzeitraum Juli
2023 erstellt werden.

<img src=".\img/image270.png"
style="width:6.29921in;height:3.41963in" />

Mit 30.09.2023 generiert der RZL-Dienst automatisch eine neue
Pauschalzeile mit Datum 30.09.2023 für den Projektzeitraum August 2023.

Mit 31.10.2023 generiert der RZL-Dienst automatisch eine neue
Pauschalzeile mit Datum 31.10.2023 für den Projektzeitraum September
2023 usw.

### Wiederkehrende Pauschalzeile löschen

Sollte eine Wiederkehrende Pauschalzeile gelöscht werden, können Sie
dies entweder über das Kontextmenü oder über den Button *Wiederkehrende
Pauschalzeile löschen.*

Abb. 14‑7 wiederkehrende Pauschalzeilen löschen

<img src=".\img/image271.png"
style="width:1.10236in;height:0.82438in" />

Hinweis

Die aufgrund der wiederkehrenden Pauschalzeile automatisch erzeugten
Pauschalzeilen werden nicht gelöscht.

Diese sind manuell über den Reiter *Pauschalzeilen* und den Punkt
*Pauschalzeile löschen* zu löschen.

### Wiederkehrende Pauschalzeile duplizieren

Mit der Schaltfläche *Wiederkehrende Pauschalzeile duplizieren* können
Sie eine bestehende Pauschalzeile kopieren. Die neue Wiederkehrende
Pauschalzeile muss noch über die Schaltfläche *Speichern* gespeichert
werden.

Abb. 14‑8 wiederkehrende Pauschalzeilen duplizieren

<img src=".\img/image272.png"
style="width:1.42691in;height:0.77074in" />

### Wiederkehrende Pauschalzeile Beträge ändern

Bei den wiederkehrenden Pauschalzeilen steht Ihnen die Option *Beträge
ändern* zur Verfügung. Mit dieser Option können Sie die Beträge mehrerer
wiederkehrender Pauschalzeilen verändern.

Markieren Sie die zu ändernden Pauschalzeilen und wählen die
Schaltfläche *Beträge ändern*.

Abb. 14‑9 Beträge ändern

<img src=".\img/image273.png"
style="width:0.59055in;height:0.79456in" />

Es öffnet sich ein extra Fenster, wo Sie die *Art der
Erhöhung/Verminderung* definieren können. Der Betrag kann prozentuell,
wertmäßig erhöht/vermindert werden oder es kann ein fixer Wert definiert
werden.

Bei der prozentuellen Veränderung können Sie zusätzlich erläutern, wie
gerundet wird. Bei allen Rundungsoptionen wird kaufmännisch gerundet
(bis vier abrunden und ab fünf aufrunden).

Bsp. 1: Rundung bei einem Pauschalwert von 175 € und einer prozentuellen
Erhöhung von 2%

-   Zwei Nachkommastellen -&gt; neuer Wert 178,50 € (2 %)

-   Ganze Euro -&gt; neuer Wert 179 € (2,29 %)

-   Zehner -&gt; 180 € (2,86 %)

-   Hunderter -&gt; 200 € (14,29 %)

Bsp. 2: Rundung bei einem Pauschalwert von 714 € und einer prozentuellen
Erhöhung von 3%

-   Zwei Nachkommastellen -&gt; neuer Wert 735,42 € (3 %)

-   Ganze Euro -&gt; neuer Wert 735 € (2,94 %)

-   Zehner -&gt; 740 € (3,64 %)

-   Hunderter -&gt; 700 € (-1,96 %)

Hinweis

Bei prozentueller Erhöhung/Verminderung kann abhängig von der gewählten
Rundungsoption die relative Erhöhung höher/niedriger ausfallen als von
Ihnen hinterlegt.

In dem Fenster, dass sich öffnet, erhalten Sie eine Gegenüberstellung
der bisherigen Werte und der neuen Werte absolut und relativ.

Abb. 14‑10 wiederkehrende Pauschalzeilen Beträge ändern

<img src=".\img/image274.png"
style="width:4.91692in;height:3.28489in" />

Mit *Übernehmen* werden die Beträge der wiederkehrenden Pauschalzeilen
geändert.

Aufgrund der wiederkehrenden Pauschalzeilen werden über den RZL Dienst
die Pauschalzeilen zum Abrechnen generiert. Aufgrund dessen muss
abhängig vom Datum und Projektzeitraum der nächsten Zeile der Zeitpunkt
zum Ändern der Beträge gewählt werden.

Bsp. 1: Sind alle Bilanzierungspauschalen mit Datum der nächsten Zeile
01.01. definiert, muss das ändern der Beträge VOR dem 01.01. erfolgen,
dass die zukünftigen Pauschalzeilen mit dem neuen Wert erzeugt werden.

Bsp. 2: Sind alle Buchhaltungszeilen mit Datum der nächsten Zeile 15.
Jeden Monats und Projektzeitraum -2 Monate definiert und soll ab dem
15.03 (Jänner UVA) der neue Wert gelten, muss die Änderung VOR dem 15.03
erfolgen, dass die zukünftigen Pauschalzeilen mit dem neuen Wert erzeugt
werden.

Hinweis

Der neue Wert betrifft nur zukünftig durch den RZL Dienst erstellte
Pauschalzeilen. Wurden bereits Pauschalzeilen mit dem alten Wert
generiert, sind diese direkt über *Pauschalverrechnung /Pauschalzeilen*
pro Pauschalzeile zu ändern.

Hinweis

Beim Beträge ändern empfehlen wir die Filterfunktionen zu nutzen, um
beispielsweise einzuschränken, dass Sie nun alle jährlichen
Bilanzierungspauschalen erhöhen oder alle monatlichen
Buchhaltungspauschalen mit gleichem Datum und Projektzeitraum der
nächsten Zeile.

## Bezeichnung der Pauschale

Welcher Text für dir Pauschale auf der Note angedruckt wird, hinterlegen
Sie in den Stammdaten der Verrechnungsgruppe. Es steht Ihnen hierfür das
Feld *Bezeichnung Pauschale* **(1)** zur Verfügung.

Abb. 14‑11 Bezeichnung der Pauschale

<img src=".\img/image9.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image275.png"
style="width:6.33071in;height:1.96156in" />

## Tätigkeiten nicht in Pauschale

Sollen bestimmte Tätigkeiten nicht über die Pauschale, sondern
zusätzlich abgerechnet werden, ist in den Stammdaten der Tätigkeiten die
Option *Nicht in Pauschale* zu aktivieren.

Abb. 14‑12 Nicht in Pauschale

<img src=".\img/image276.png"
style="width:6.3in;height:1.28472in" />

Diese Tätigkeit wird zusätzlich zur Pauschalzeile in der Note angeführt
und abgerechnet. Weiters wird diese Tätigkeit beim Pauschalausgleich
ausgeschlossen.

## Notenerstellung mit Pauschalzeilen

Über den Punkt *Honorarnoten / Notenerstellung* sollte zuerst ein Filter
auf die zu abrechnende Verrechnungsgruppe und den Projektzeitraum
gesetzt werden.

Mithilfe dieser Filterung wird exakt definiert, welche Pauschale
abgerechnet wird.

Hinweis

Wird kein Filter auf den Projektzeitraum gesetzt, werden alle
generierten und noch nicht verrechneten Pauschalzeilen zur Abrechnung
vorgeschlagen.

Innerhalb der Notenerstellung werden Pauschalzeilen mit einem
fettgedruckten P **(1)** abgebildet. Der Text sowie der Projektzeitraum
und der Betrag der Pauschalzeile können innerhalb der Notenerstellung
abgeändert werden.

Abb. 14‑13 Pauschale in Note

<img src=".\img/image2.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image277.png"
style="width:6.33071in;height:2.15965in" />

Im Zuge der Notenerstellung ist es möglich zusätzliche Notenzeilen
einzufügen. Wird ein Verrechnungskreis jedoch Pauschal abgerechnet,
können keine zusätzlichen Tätigkeiten dieser Verrechnungsgruppe manuell
in die Note eingefügt werden.

Hinweis

Werden im Zuge der Notenerstellung Pauschalen und Leistungen verrechnet,
wird der Rabatt der Pauschale auf die Verrechnungsgruppe **(2)**
verteilt und der der Leistung auf die jeweiligen Tätigkeiten **(3).**

Abb. 14‑14 Pauschale in Note inkl. Rabatt

<img src=".\img/image152.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image23.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image278.png"
style="width:6.29921in;height:1.82806in" />

## Pauschalausgleich

Hinweis

Die Abrechnung der Pauschale im Zuge der Notenerstellung und der
Pauschalausgleich sind unabhängig voneinander.

Die Gegenrechnung/der Ausgleich der Pauschale mit den tatsächlich
erfassten Leistungen der Mitarbeiter erfolgt über *Pauschalverrechnung /
Pauschalzeilen* oder im Zuge des automatischen Pauschalausgleiches vgl.
Kapitel 14.6.3, Seite [129](#automatischer-pauschalausgleich).

Zuerst wählt man die Pauschalzeile, welche ausgeglichen werden soll aus.
Anschließend wählt man die Schaltfläche *Pauschale ausgleichen /
Bearbeiten*.

Abb. 14‑15 Pauschale ausgleichen

<img src=".\img/image279.png"
style="width:2.16667in;height:1.29167in" />

Es öffnet sich ein Dialog mit allen Erfassungszeilen, welche mit der
Pauschale ausgeglichen werden können. Nun kann man jene
Erfassungszeilen, welche man ausgleichen möchte, anhaken.

Tipp

Das Programm wählt vorab alle Zeilen mit einem passenden Projektzeitraum
zur Pauschale aus.

Das Programm ermittelt automatisch einen Zu-/Abschlag **(1)**. Die
Verteilung der Zu/Abschläge ist von den Grundeinstellungen (*Kapitel
3.1. Grundeinstellungen*) abhängig.

Der Zu/Abschlag passt sich automatisch an, wenn eine Erfassungszeile
zusätzlich angehakt oder ausgehakt wird.

Abb. 14‑16 Pauschalausgleich

<img src=".\img/image2.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image5.png"
style="width:0.35417in;height:0.35417in" />
<img src=".\img/image280.png"
style="width:6.29921in;height:3.14961in" />

Die Detailzeile im oberen Bereich des Bildschirmes **(2)** zeigt Ihnen
den Wert der Pauschale, die Art der Verteilung der Zu/Abschläge, sowie
eine möglich vorhandene Differenz nach einer manuellen Verteilung der
Zu/Abschläge.

### Ändern einer ausgeglichenen Pauschale

Wurde bei einer Pauschalzeile bereits über *Pauschalverrechnung /
Pauschalzeilen* der Pauschalausgleich durchgeführt, kann nur noch der
Projektzeitraum und der Betrag der Zeile geändert werden.

Abb. 14‑17 Ansicht ausgeglichene Pauschalzeile

<img src=".\img/image281.png"
style="width:6.29921in;height:1.03601in" />

Eine Änderung löst automatisch den Pauschalausgleich aus. Es öffnet sich
daher die Ansicht des Pauschalausgleiches, wo das Programm bei einer
Änderung des Betrages auch die Zu/Abschläge neu verteilt bzw., wo Sie
selbst noch Änderungen durchführen können.

Hinweis

Eine bereits abgerechnete Pauschalzeile kann nicht mehr verändert
werden.

Wird im Zuge der Notenerstellung der Betrag einer bereits ausgeglichenen
Pauschalzeile verändert, öffnet sich auch hier automatisch der
Pauschalausgleich. Änderungen an der Pauschalzeile werden mit dem
Speichern der Note mitgespeichert.

### Pauschalausgleich während der Notenerstellung

Hinweis

Im Zuge der Anlage der Pauschalzeilen (Kapitel 14.1.1 und 14.2.1) kann
definiert werden, dass der Pauschalausgleich gleich im Zuge der
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

Abb. 14‑18 Pauschalausgleich während Notenerstellung

<img src=".\img/image19.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image31.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image31.png"
style="width:0.35417in;height:0.35417in" />
<img src=".\img/image282.png"
style="width:6.29921in;height:3.44643in"
alt="C:\Users\KBURGS~1\AppData\Local\Temp\SNAGHTMLaa9b3d5.PNG" />

Tipp

Wurde der Pauschalausgleich durchgeführt kann über *Pauschalausgleich
anzeigen* dieser nochmals kontrolliert werden.

### Automatischer Pauschalausgleich

Hinweis

Damit der automatische Pauschalausgleich vom Programm erfolgen kann, ist
es nötig, dass der RZL Dienst aktiv ist (siehe SETUP Handbuch Kapitel
12.10.2).

Ersichtlich über folgendes Symbol in der unteren rechten Ecke:

Abb. 14‑19 Aktiver RZL Dienst

<img src=".\img/image251.png"
style="width:0.86614in;height:0.22843in" />

Bei der Anlage einer Pauschalzeile/einer wiederkehrenden Pauschalzeile
besteht die Option den automatischen Ausgleich zu aktivieren.

Abb. 14‑20 Automaischen Ausgleich aktivieren

<img src=".\img/image283.png"
style="width:3.99201in;height:0.76673in" />

Tipp

Wird der automatische Ausgleich nicht aktiviert, erfolgt der Ausgleich
der Pauschale weiterhin manuell über *Pauschalverrechnung /
Pauschalzeilen* und der Schaltfläche *Pauschale ausgleichen.*

Für den Automatischen Ausgleich sind zwei Felder zu hinterlegen.

> *Zeitpunkt*

Hier ist zu definieren, wann die Pauschale automatisch ausgeglichen
werden soll. Sie können zwischen folgenden Optionen wählen:

-   Bei der Notenerstellung

    Der Pauschalausgleich wird im Zuge der Notenerstellung durchgeführt.
    Das Programm sucht nun nach allen Leistungen die unter die
    Verrechnungsgruppe fallen sowie den gleichen Projektzeitraum wie die
    Pauschalzeile aufweisen und gleicht diese mit der Pauschalzeile aus.
    Der Ausgleich kann während der Notenerstellung bearbeitet werden
    (14.6.2, Seite
    [128](#pauschalausgleich-während-der-notenerstellung)).

-   Datum

    Über das Feld Datum können Sie einen Zeitpunkt definieren, wann der
    Pauschalausgleich vom Programm erfolgen soll.

    0 = gleich mit dem Datum der nächsten Pauschalzeile

    1 = ein Monat nach dem Datum der Pauschalzeile

    Das Datum des automatischen Ausgleiches darf maximal drei Monate
    nach dem Datum der Pauschale liegen.

> *Verteilungsart*

Hier ist einzustellen, ob die Zu/Abschläge die durch den Ausgleich der
Pauschale entstehen mit/ohne Mitarbeiterbezug oder manuell Verteilt
werden sollen.

> **Beispiel Automatischer Pauschalausgleich mit Datum:**

Monatliche Pauschale für die Finanzbuchhaltung von 500€, welche jeweils
ein Monat zeitversetzt abgerechnet wird. Der automatische Ausgleich soll
immer mit dem gleichen Datum wie das Generieren der Pauschalzeile
erfolgen.

> Anlage der wiederkehrenden Pauschalzeile:
>
> <img src=".\img/image284.png"
> style="width:6.29921in;height:1.30851in" />

Über die Schaltfläche *Pauschalzeilen Vorschau* bzw. über den RZL Dienst
wird nun eine Pauschalzeile mit 31.08.2023 für den Projektzeitraum Juli
2023 generiert.

<img src=".\img/image285.png"
style="width:6.29921in;height:1.85724in" />

Über die Ansicht *Pauschalverrechnung / Pauschalzeilen* wurde das Datum
des automatischen Ausgleiches sowie die Verteilungsart hinterlegt.

<img src=".\img/image286.png"
style="width:6.29921in;height:1.44073in" />

Der automatische Ausgleich geht wie folgt vor:

Das Programm sucht nun nach allen Leistungen die den Klienten betreffen,
unter die Verrechnungsgruppe Buchhaltung fallen sowie den gleichen
Projektzeitraum wie die Pauschalzeile aufweisen und gleicht diese mit
der Pauschalzeile aus.

Hinweis

Zeilen ohne Projektzeitraum bzw. mit überschneidenten Projektzeiträumen
werden ebenso ausgewählt.

Über die Schaltfläche *Pauschale ausgleichen*, kann der
Pauschalausgleich aufgerufen bzw. noch editiert werden:

<img src=".\img/image2.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image287.png"
style="width:6.29921in;height:2.33086in" />

Aufgrund der gewählten Verteilungsart *Automatische Verteilung mit
Mitarbeiterbezug* ordnet das Programm die Zuschläge den Mitarbeitern zu
**(1).**

Mit 30.09.2023 generiert der RZL-Dienst automatisch eine neue
Pauschalzeile mit Datum 30.09.2023 für den Projektzeitraum August 2023.

Der Automatische Ausgleiche erfolgt ebenso am 30.09.2023 – das Programm
wählt nun alle Buchhaltungszeilen mit Projektzeitraum August 2023.

Mit 31.10.2023 generiert der RZL-Dienst automatisch eine neue
Pauschalzeile mit Datum 31.10.2023 für den Projektzeitraum September
2023. Der Automatische Ausgleiche erfolgt ebenso am 31.10.2023 – das
Programm wählt nun alle Buchhaltungszeilen mit Projektzeitraum September
2023 usw.

> **Beispiel automatischer Pauschalausgleich bei Notenerstellung:**

Monatliche Pauschale für die Finanzbuchhaltung von 500€, welche jeweils
ein Monat zeitversetzt abgerechnet wird. Der automatische Ausgleich soll
bei der Notenerstellung erfolgen.

> Anlage der wiederkehrenden Pauschalzeile:
>
> <img src=".\img/image269.png"
> style="width:6.29921in;height:1.10553in" />

Über die Schaltfläche *Pauschalzeilen Vorschau* bzw. über den RZL Dienst
wird nun eine Pauschalzeile mit 31.08.2023 für den Projektzeitraum Juli
2023 erstellt.

Über die Ansicht *Pauschalverrechnung / Pauschalzeilen* wurde das Datum
des automatischen Ausgleiches sowie die Verteilungsart hinterlegt.

<img src=".\img/image288.png"
style="width:6.29921in;height:1.05587in" />

Wenn Sie nun über *Honorarnoten / Notenerstellung* die Note erstellen
ist ersichtlich, dass die Pauschale abgerechnet wird und auch bereits
ausgeglichen ist.

<img src=".\img/image289.png"
style="width:6.29921in;height:1.84482in" />

Möchten Sie den Pauschalausgleich nochmals aufrufen, funktioniert dies
über die Schaltfläche *Pauschalausgleich*. Hier sehen Sie auch, welche
Zeilen das Programm ausgeglichen hat.

> <img src=".\img/image290.png"
> style="width:6.29921in;height:2.36003in" />

Wird eine Pauschale abgerechnet, zu der es noch keine Leistungen in der
Leistungserfassung gib, erhalten Sie folgenden Hinweis beim Öffnen der
Note:

<img src=".\img/image291.png"
style="width:5.64216in;height:1.53347in" />

Der Pauschalausgleich kann nicht vom Programm automatisch durchgeführt
werden und muss manuell über *Pauschalverrechnung / Pauschalzeilen*
gemacht werden.

### Pauschlausgleich zurücksetzten

Wurde ein Pauschlausgleich irrtümlich durchgeführt, kann dieser über die
Schaltfläche *Pauschalausgleich zurücksetzten* wieder rückgängig gemacht
werden.

Abb. 14‑21 Pauschalausgleich zurücksetzen

<img src=".\img/image292.png"
style="width:0.84174in;height:0.61672in" />

Sie erhalten eine Abfrage, ob der Pauschalausgleich tatsächlich
zurückgesetzt werden soll.

Abb. 14‑22 Pauschalausgleich zurücksetzen Abfrage

<img src=".\img/image293.png"
style="width:3.21695in;height:1.24177in" />

Wird diese Abfrage mit Zurücksetzten bestätigt, werden alle
Zu/Abschläge, die durch den vorher durchgeführten Pauschalausgleich
generiert wurden, verworfen.

Die Erfassungszeilen stehen für einen erneuten Pauschalausgleich wieder
zur Verfügung.

Hinweis

Wurde für die Pauschalzeile eine Schlussnote (Kapitel 14.7, Seite
[133](#schlussnote)) erstellt, kann der Pauschalausgleich nicht mehr
bearbeitet werden, sondern nur noch in einer Art Lesezugriff aufgerufen
werden.

## Schlussnote

Mit dem Button *Schlussnote erstellen*, haben Sie die Möglichkeit über
die abgerechneten und ausgeglichenen Pauschalen eine Schlussnote zu
erstellen. Die Schlussnote enthält alle Zu/Abschläge, die im Zuge der
Pauschalausgleiche erzeugt wurden – es kommt eine Gutschrift oder eine
Nachzahlung für den Klienten heraus.

**Beispiel:**

Es wurde monatlich eine Pauschale über 500 € für die Buchhaltung
abgerechnet, sowie der Pauschalausgleich durchgeführt. Über die Monate
hinweg kam es im Zuge des Pauschalausgleiches zu Zu/Abschlägen.

Hier beim Pauschalausgleich für Monat 12. Die monatliche Pauschale
beträgt 500 € - es wurden jedoch Leistungen für einen Wert von 583 €
erbracht, somit ergibt sich ein Abschlag von 83 €.

Abb. 14‑23 Pauschalausgleich

<img src=".\img/image294.png"
style="width:6.3in;height:3.13958in" />

Über *Pauschalverrechnung / Pauschalzeilen* markiert man nun alle
Pauschalzeilen eines Klienten über die eine Schlussnote gestellt werden
soll.

Tipp

Durch Gruppieren und/oder Filtern der Ansicht der Pauschalzeilen können
Sie schnell und einfach alle Zeilen des betroffenen Klienten selektiere
(vgl. Kapitel 19.3, Seite [161](#umsatzstatistik-allgemein)).

Abb. 14‑24 Auswahl Zeilen Schlussnote

<img src=".\img/image295.png"
style="width:6.3in;height:2.69375in" />

Hinweis

Eine Schlussnote kann nur über verrechnete Pauschalzeilen mit erfolgtem
Pauschalausgleich und für den gleichen Klienten durchgeführt werden.

Anschließend wählt man die Schaltfläche *Schlussnote erstellen*.

Es öffnet sich eine Note mit dem Gesamten Zu/Abschlag aller
durchgeführten Pauschalausgleiche der markierten Zeilen.

<img src=".\img/image26.png"
style="width:0.35417in;height:0.35417in" />Abb. 14‑25 Schlussnote

<img src=".\img/image23.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image19.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image296.png"
style="width:6.3in;height:3.16528in" />

Im oben gezeigten Beispiel ergibt sich eine Nachzahlung für den Klienten
über 148 € **(1).** Über die Details zur Zeile sieht man aus welchen
Zu/Abschlag sich die Nachzahlung oder Gutschrift zusammensetzt **(2).**

Über den Reiter Pauschaljournal **(3)** können Sie sich nochmals alle
Pauschalzeilen inkl. den Zu/Abschlägen einblenden lassen.

Abb. 14‑26 Pauschaljournal Schlussnote

<img src=".\img/image297.png"
style="width:6.3in;height:1.85486in" />

Mit *Speichern & Schließen* kann die Schlussnote gespeichert und
anschließend an den Klienten gesandt werden.

Sollte keine Weiterverrechnung erfolgen, kann die Summe des
Zu/Abschlages auf null gestellt werden – der daraus resultierende
Zu/Abschlag ist anschließend manuell zu verteilen. Hierfür öffnet sich
ein extra Fenster.

Pauschalzeilen über jene eine Schlussnote erstellt wurde, sind in der
Ansicht der Pauschalzeilen in der Spalte *Schlussnote erstellt* **(4)**
ersichtlich.

Abb. 14‑27 Schlussnote erstellt

<img src=".\img/image61.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image298.png"
style="width:6.3in;height:2.05903in" />

Im HON über *Honorarnoten / Notenübersicht* finden Sie die soeben
erstellte Schlussnote.

Sollte die Schlussnote rückgängig gemacht werden, muss die erstellte
Schlussnote über den Button *Note löschen* in der Notenübersicht
gelöscht werden.

Durch das Löschen der Schlussnote wir der Merker in der Übersicht der
Pauschalzeilen gelöscht und es kann eine neue Schlussnote erzeugt
werden.

In der Notenübersicht können Sie sich die Spalte *Schlussnote*
einblenden lassen, um zu sehen, bei welchen Noten es sich um
Schlussnoten handelt.

Hinweis

Wurde für die Pauschalzeile eine Schlussnote (Kapitel 14.7, Seite
[133](#schlussnote)) erstellt, kann der Pauschalausgleich nicht mehr
bearbeitet werden, sondern nur über *Pauschlausgleich anzeigen*
aufgerufen werden.

## Automatische Gutschrift einer Pauschale

In der Honorarverrechnung besteht die Möglichkeit für eine gesamte Note
eine Gutschrift zu erstellen (*Kapitel 12 Gutschriftenerstellung
Handbuch Hon Next*). Wurde mit dieser Note auch eine Pauschale
abgerechnet, hat das Erstellen einer Gutschrift auch Auswirkungen auf
die Pauschalzeile sowie auf den Pauschalausgleich.

**Auswirkungen Pauschalzeile/Pauschalausgleich**

Über die Notenübersicht kann aus der Original Note über *Gutschrift aus
Note erstellen* eine Gutschrift erstellt werden.

Mit dem Erstellen der Gutschrift wird automatisch eine negative
Pauschalzeile **(1)** generiert, um die original Pauschalzeile
auszugleichen.

Abb. 14‑28 Ansicht Pauschalzeile nach Gutschriftenerstellung

<img src=".\img/image2.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image299.png"
style="width:6.33071in;height:2.5708in" />

Solange die Gutschrift nicht finalisiert wurde, ist der
Pauschalausgleich bei der ursprünglichen Pauschalzeile noch möglich. Die
negative Pauschalzeile wird immer als ausgeglichen dargestellt und ein
Pauschlausgleich ist nicht möglich.

Nach dem Finalisieren der Gutschrift, wird vom Programm eine neue
Pauschalzeile generiert **(2)**. Die neu erzeugte Pauschalzeile ist
ident zur originalen Pauschalzeile d.h. der Pauschalausgleich wird
übernommen und kann auch noch angepasst werden.

Abb. 14‑29 Ansicht Pauschalzeile nach finalisierter Gutschrift

<img src=".\img/image31.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image300.png"
style="width:6.33071in;height:1.93229in" />

Die Pauschalzeile steht nun auch wieder zur Verrechnung zur Verfügung.

## Pauschalstatistik

Über den Menüpunkt *Auswertungen / Pauschalstatistik Allgemein* stehen
Ihnen alle Zeilen im Bezug zur Pauschalverrechnung für Auswertungen zur
Verfügung. Wie die Pauschalzeile selbst, der Zu-/Abschlag aus dem
Pauschalausgleich sowie die Leistungen, welche mit der Pauschale
abgedeckt werden.

Über die Spalte Art **(1)** ist ersichtlich, ob es sich um eine
Pauschalzeile (P), um eine zukünftige Pauschalzeile (gelbes P), einen
Zu‑/Abschlag (Z/A) oder um eine Leistung handelt. Mit der Spalte
Pauschalnummer **(2)** findet man alle Zeilen, welche die Pauschalzeile
betreffen. Die Pauschalzeile, der dazugehörige Zu/Abschlag und die
betroffenen Leistungen haben die gleiche Pauschalnummer. Und mit der
Spalte Ausgleichsstatus **(3)** können Sie auf Ausgeglichene/nicht
ausgeglichene Pauschalen filtern.

Hinweis

Die zukünftigen Pauschalzeilen (gelbes P) zeigen die nächsten zu
generierenden Pauschalzeilen aufgrund der angelegten wiederkehrenden
Pauschalzeilen.

Abb. 14‑30 Pauschalauswertung

<img src=".\img/image26.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image5.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image9.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image301.png"
style="width:6.3in;height:1.84236in" />

Mit dieser Statistik können Sie beispielsweise eine Gegenüberstellung
der noch nicht ausgeglichenen Pauschalen mit den offenen durch die
Pauschalverrechnung gedeckten Leistungen erstellen.

Setzten Sie hierfür den Filter in der Spalte *Ausgleichsstatus* auf
*Nicht ausgeglichen* und Gruppieren Sie nach dem Klienten.

Bsp. Bei Klient 1 sind 1000€ Pauschale offen und 1510,50 € wurden an
Leistungen erfasst.

Abb. 14‑31 Pauschalauswertung offene Pauschalen

<img src=".\img/image302.png"
style="width:6.3in;height:1.63125in" />

Oder Sie gehen den umgekehrten Weg und Erstellen eine Gegenüberstellung
der bereits ausgeglichenen Pauschalen mit den dazugehörigen Leistungen.

Setzten Sie hierfür den Filter in der Spalte *Ausgleichsstatus* auf
A*usgeglichen* und Gruppieren Sie nach dem Klienten.

Bsp. Bei Klient 50 wurden 100 € Pauschale abgerechnet/ausgeglichen aber
Leistungen im Wert von 250€ erfasst – was einen Abschlag von 150 €
ergibt.

Abb. 14‑32 Pauschalauswertung ausgeglichene Pauschalen

<img src=".\img/image303.png"
style="width:6.3in;height:1.66667in" />

Die Zeilen können Sie gruppieren und/oder filtern. Das Layout der
Statistik können Sie speichern (siehe Kapitel 19.3 und 19.13).

Tipp

Bei den Layouts steht Ihnen das RZL Layout *Klienten mit aktiver
Pauschalverrechnung* zur Verfügung. Diese Auswertung zeigt Ihnen, bei
welchen Klienten eine aktive Pauschalverrechnung vorliegt. Eine aktive
Pauschalverrechnung liegt vor, wenn eine entsprechende Wiederkehrende
Pauschalzeile oder eine noch nicht ausgeglichene Pauschalzeile vorhanden
ist.

## Pauschalen in den Umsatzstatistiken

**Umsatzstatistik Mitarbeiter**

Erst wenn eine Pauschale ausgeglichen und die dazugehörige Note
finalisiert wurde, wird in der Mitarbeiterstatistik der Pauschalbetrag
unter der Rubrik *ohne Mitarbeiterzuordnung* mit Plus und Minus
dargestellt **(1),** sowie die tatsächliche Erfassungszeile inkl.
Zu/Abschlägen dem Mitarbeiter zugeordnet **(2).**

Der Text der Tätigkeit **(3)** setzt sich zusammen aus dem Wort
Pauschale und dem Namen der Verrechnungsgruppe.

Abb. 14‑33 Mitarbeiterstatistik Pauschale

<img src=".\img/image10.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image5.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image9.png"
style="width:0.35417in;height:0.35417in" /><img src=".\img/image304.png"
style="width:6.33071in;height:1.3015in" />

Tipp

Wurde die Verteilung ohne Mitarbeiterbezug durchgeführt, findet man auch
die Zu/Abschlagszeilen unter der Rubrik *ohne Mitarbeiterzuordnung*.

**Umsatzstatistik Klienten**

In der Klienten Umsatzstatistik werden ausgeglichene und abgerechnete
Pauschalen ebenso durch die Darstellung mit Plus/Minus neutralisiert und
die tatsächliche Erfassungszeile inkl. Zu/Abschlägen dem Klienten
zugeordnet.

Abb. 14‑34 Klientenstatistik Pauschale

<img src=".\img/image305.png"
style="width:6.33071in;height:1.06088in" />
# Wiederkehrende Pauschalzeilen

Wiederkehrende Pauschalzeilen werden benötigt, wenn ein Klient z.B.
monatlich pauschal abgerechnet wird. Es werden hier die benötigen
Pauschalzeilen vom Programm generiert.

!!! warning "Hinweis"
    Damit wiederkehrende Pauschalzeilen vom Programm generiert werden
    können, ist es nötig, dass der RZL Dienst aktiv ist (siehe SETUP
    Handbuch Kapitel 12.10.2).

Ersichtlich über folgendes Symbol in der unteren rechten Ecke:


![](<img/image251.png>)

## Neue wiederkehrende Pauschalzeile

Eine neue wiederkehrende Pauschalzeile kann entweder über den Butten im
Ribbon **(1)** oder über die Schaltfläche neue Wiederkehrende
Pauschalzeile **(1)** angelegt werden.


![](<img/image266.png>)

**Daten der Pauschalzeile**

**Klient**  
Hier wird der Klient hinterlegt.

**Verrechnungsgruppe**  
Hier wird die Verrechnungsgruppe hinterlegt.

**Häufigkeit**  
Hier definieren Sie, wie oft pauschal abgerechnet wird.  
Bsp. 1 = monatlich, 3 = quartalsweise, 6 = halbjährlich und 12 =
jährlich

**Datum der nächsten Zeile**  
Hier definieren Sie, mit welchem Datum
(Leistungsdatum) die nächste Pauschalzeile generiert werden soll.  
Bsp. immer mit ersten des Monats

**Projektzeitraum (+/- Monate)**  
Hinterlegen Sie hier, für welchen
Projektzeitraum die Pauschale abgerechnet werden soll. Mit einem
negativen Vorzeichen kann der Projektzeitraum nach hinten verschoben
werden. Ohne Vorzeichen kann der Projektzeitraum nach vorne verlagert
werden.  
Bsp.: Datum der nächsten Zeile ist der 01. Jänner -&gt; Im
Projektzeitraum wurde **-**1 definiert.  
Somit wird mit 01. Jänner eine Zeile für den Projektzeitraum Dezember
generiert. Und weiterführend mit 01. Februar eine Zeile für den
Projektzeitraum Jänner.

**Betrag**  
Tragen Sie die Höhe der Pauschale ein.

**Aktiv**  
Wird für einen Klienten die Pauschalverrechnung deaktiviert,
kann die Option *Aktiv* deaktiviert werden.  
Es werden keine Pauschalzeilen mehr generiert.

**Text Pauschalzeile**  
Grundsätzlich erhält die Pauschalzeile den Text,
welcher bei der Verrechnungsgruppe hinterlegt wurde (vgl. [Bezeichnung der Pauschale](/HONNext/Pauschalverrechnung/Bezeichnung%20der%20Pauschale)) über das Feld *Text
Pauschalzeile* kann hier etwas abweichendes eingetragen werden. Soll
der abweichende Text auch auf der Note angedruckt werden, ist der Text
mit der rechten Maustaste zu übernehmen. Der zu übernehmende Text ist
gelb hinterlegt **(2)**.

**Anmerkung**  
Dieses Feld steht Ihnen für interne Bemerkungen zur
Verfügung.

**Automatischen Ausgleich**    
Aktivieren: Kann optional aktiviert werden. Siehe [Automatischer Pauschalausgleich](/HONNext/Pauschalverrechnung/Pauschalausgleich/#automatischer-pauschalausgleich)


Nachdem die Daten der wiederkehrenden Pauschale eingegeben und
gespeichert wurden, können über die Schaltfläche *Pauschalzeilen
Vorschau* die dazugehörigen Pauschalzeilen generiert werden.

!!! warning "Hinweis"
    Die Pauschalzeilen müssen nur über die Pauschalzeilen Vorschau erzeugt
    werden, wenn Sie in der Vergangenheit liegen und gleich abgerechnet
    werden sollen, ansonsten werden die Zeilen monatlich/quartalsweise etc.
    über den RZL Dienst erzeugt.



![](<img/image267.png>)



![](<img/image268.png>)

!!! warning "Hinweis"
    Es werden die Pauschalzeilen bis zum aktuellen Tagesdatum angehakt.

Fortlaufend werden, nur bei aktivem RZL Dienst, die Zeilen automatisch
je Monat/Quartal etc. erzeugt.

**Beispiel automatisches generieren mit dem RZL Dienst:**

Monatliche Pauschale für die Finanzbuchhaltung von 500€, welche jeweils
ein Monat zeitversetzt abgerechnet wird.

Anlage der Pauschale mit August 2023:

![](<img/image269.png>)

Über die Schaltfläche *Pauschalzeilen Vorschau* bzw. über den RZL Dienst
kann nun eine Pauschalzeile mit 31.08.2023 für den Projektzeitraum Juli
2023 erstellt werden.

![](<img/image270.png>)

Mit 30.09.2023 generiert der RZL-Dienst automatisch eine neue
Pauschalzeile mit Datum 30.09.2023 für den Projektzeitraum August 2023.

Mit 31.10.2023 generiert der RZL-Dienst automatisch eine neue
Pauschalzeile mit Datum 31.10.2023 für den Projektzeitraum September
2023 usw.

## Wiederkehrende Pauschalzeile löschen

Sollte eine Wiederkehrende Pauschalzeile gelöscht werden, können Sie
dies entweder über das Kontextmenü oder über den Button *Wiederkehrende
Pauschalzeile löschen.*


![](<img/image271.png>)

!!! warning "Hinweis"
    Die aufgrund der wiederkehrenden Pauschalzeile automatisch erzeugten
    Pauschalzeilen werden nicht gelöscht.

Diese sind manuell über den Reiter *Pauschalzeilen* und den Punkt
*Pauschalzeile löschen* zu löschen.

## Wiederkehrende Pauschalzeile duplizieren

Mit der Schaltfläche *Wiederkehrende Pauschalzeile duplizieren* können
Sie eine bestehende Pauschalzeile kopieren. Die neue Wiederkehrende
Pauschalzeile muss noch über die Schaltfläche *Speichern* gespeichert
werden.


![](<img/image272.png>)

## Wiederkehrende Pauschalzeile Beträge ändern

Bei den wiederkehrenden Pauschalzeilen steht Ihnen die Option *Beträge
ändern* zur Verfügung. Mit dieser Option können Sie die Beträge mehrerer
wiederkehrender Pauschalzeilen verändern.

Markieren Sie die zu ändernden Pauschalzeilen und wählen die
Schaltfläche *Beträge ändern*.


![](<img/image273.png>)

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

!!! warning "Hinweis"
    Bei prozentueller Erhöhung/Verminderung kann abhängig von der gewählten
    Rundungsoption die relative Erhöhung höher/niedriger ausfallen als von
    Ihnen hinterlegt.

In dem Fenster, dass sich öffnet, erhalten Sie eine Gegenüberstellung
der bisherigen Werte und der neuen Werte absolut und relativ.


![](<img/image274.png>)

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

!!! warning "Hinweis"
    Der neue Wert betrifft nur zukünftig durch den RZL Dienst erstellte
    Pauschalzeilen. Wurden bereits Pauschalzeilen mit dem alten Wert
    generiert, sind diese direkt über *Pauschalverrechnung /Pauschalzeilen*
    pro Pauschalzeile zu ändern.

!!! warning "Hinweis"
    Beim Beträge ändern empfehlen wir die Filterfunktionen zu nutzen, um
    beispielsweise einzuschränken, dass Sie nun alle jährlichen
    Bilanzierungspauschalen erhöhen oder alle monatlichen
    Buchhaltungspauschalen mit gleichem Datum und Projektzeitraum der
    nächsten Zeile.
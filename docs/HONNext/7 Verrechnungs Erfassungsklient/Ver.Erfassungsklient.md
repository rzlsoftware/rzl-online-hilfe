# Verrechnungs-/Erfassungsklient

Die Honorarverrechnung bietet Ihnen die Möglichkeit für mehrere Klienten
einen gemeinsamen Klienten als Rechnungsempfänger zu definieren. In der
Honorarverrechnung werden die Klienten hierfür in Verrechnungsklienten
und Erfassungsklienten untergliedert.

-   **Verrechnungsklient**

    Als Verrechnungsklient wird jener Klient bezeichnet, der die
    Honorarnote erhält.

-   **Erfassungsklient**

    Erfassungsklienten sind grundsätzliche alle Klienten für die
    Leistungen erbracht werden.

!!! warning "Hinweis"
    Ein Verrechnungsklient ist zeitgleich auch ein Erfassungsklient.

## Hinterlegung in den Stammdaten

Die Hinterlegung eines abweichenden Verrechnungsklienten in den
Stammdaten ist nur nötig, wenn der Verrechnungsklient vom
Erfassungsklienten abweicht.

!!! warning "Hinweis"
    Sind Erfassungsklient und Verrechnungsklient ident, muss in den
    Stammdaten keine abweichende Hinterlegung erfolgen.

### Erfassungsklient

In den Stammdaten im Board ist beim Erfassungsklient im Reiter *HON* der
dazugehörige Verrechnungsklient zu hinterlegen.


![](<img/image118.png>)

### Verrechnungsklient

Beim Verrechnungsklienten sind die dazugehörigen Erfassungsklienten in
den Board Stammdaten im Reiter *HON* bereits als Zugeordnete
Erfassungsklienten definiert.



![](<img/image119.png>)

!!! info "Tipp"
    Die Verknüpfung zwischen Verrechnungs- und Erfassungsklient erfolgt
    somit über die Stammdaten des Erfassungsklienten.

!!! warning "Hinweis"
    Verrechnungsklienten können nur jene Klienten sein, welche selbst keine
    zugeordneten Erfassungsklienten sind.

## Notenerstellung Verrechnungsklient

### Notenvorschlag

Im HON über *Honorarnoten / Notenerstellung* ist bei der Übersicht der
zu erstellenden Noten grundsätzlich nur der Verrechnungsklient
ersichtlich. Die Leistungen der Erfassungsklienten sind in den Summen
integriert.

Mithilfe des kleinen Pfeils vor dem Verrechnungsklienten (**1**),
erhalten Sie die abzurechnenden Summen pro Erfassungsklient.


![](<img/image120.png>)

!!! warning "Hinweis"
    Gibt es nur Leistungen für den Verrechnungsklienten, ist der Pfeil zum
    aufklappen nicht ersichtlich.

!!! warning "Hinweis"
    Erfassungsklienten können nicht separat abgerechnet werden.

Über der Schaltfläche *Offene Leistungen* können Sie sich die
dazugehörigen offenen Leistungen anzeigen lassen. Die offenen Leistungen
werden nach dem Verrechnungsklienten gruppiert (**1**). Mittels der
Filterfunktion in der Überschriftenzeile können Sie auf einzelne
Erfassungsklienten (**2**) einschränken.


![](<img/image121.png>)

### Zu/Abschläge Verrechnungsklient

Wenn man nun die Honorarnote erstellt und Zu/Abschläge generiert, werden
diese auch auf die jeweiligen Klienten verteilt (**3**). Werden die
Zu/Abschläge manuell verteilt, ist der Klient, der den Zu/Abschlag
erhält, einzutragen (**4**) (siehe auch Kapitel 11.4.12 Zu-/Abschläge).


![](<img/image122.png>)



![](<img/image123.png>)

### Notenjournal

Nach der Notenerstellung haben Sie über die Notenübersicht die
Möglichkeit das Notenjournal aufzurufen (Kapitel 15.11 Notenjournal
anzeigen). Auch das Notenjournal ist nach Verrechnungs- und
Erfassungsklienten unterteilt und kann gefiltert werden.


![](<img/image124.png>)

## Auswertungen

In der Klienten Umsatzstatistik findet sich ausschließlich der
Verrechnungsklient. Mittels dem Button *Details anzeigen* können Sie
sich die abgerechneten Zeilen einblenden lassen. Hier erfolgt wieder die
Unterteilung nach Erfassungs- / und Verrechnungsklient.

In den Details der Umsatzstatistik kann die Gruppierung nun selbst
definiert werden, indem Sie die gewünschte Spaltenüberschrift in das
Gruppierungsfeld (**1**) ziehen.


![](<img/image125.png>)

In der allgemeinen Umsatzstatistik stehen Ihnen die Spalten *Klient
(Erfassung)* und *Klient (Verrechnung)* zur Verfügung. Sie können hier
selbstständig die Gruppierung festlegen oder einen Filter setzen (siehe
Kapitel 19.3 Umsatzstatistik Allgemein).
# Tätigkeiten

Auf Tätigkeiten werden Leistungen erfasst, die entweder verrechenbar
sind oder nicht verrechnet werden. Diese Tätigkeiten werden später in
der Leistungserfassung von Ihren Mitarbeitern erfasst und von Ihnen nach
der Erfassung verrechnet.

Wählen Sie den Menüpunkt *Stammdaten – Tätigkeiten* aus, um Tätigkeiten
anzulegen bzw. zu verwalten. Es öffnet sich ein eigener Tab für die
Tätigkeiten.

### Tätigkeiten anlegen

Neue Tätigkeiten können Sie entweder über die Schaltfläche im Ribbon
**(1)** „*Neue Tätigkeit*“ oder über die Schaltfläche **(2)** „*Neue
Tätigkeit*“ im rechten unteren Bereich anlegen.

![](<img/image24.png>)

Nun öffnet sich im unteren Bereich die Eingabe für eine neue Tätigkeit.
Als erstes müssen Sie eine *Nummer* für die Tätigkeit vergeben. Danach
die *Bezeichnung* und die *Bezeichnung in Note* eintragen **(1).**

Im Feld *Bezeichnung* *in Note* **(3)** können die Stundenanzahl, der
Stundensatz, die Einheitenanzahl und der Einheitensatz automatisch durch
Verwendung nachstehender Platzhalter (Aufruf mit Rechter Maustaste)
eingetragen werden.

*{StundenAnzahl}* Stundenanzahl

*{StundenSatz}* Stundensatz (Betrag/Stundenanzahl)

*{EinheitenAnzahl}* Einheitenanzahl

*{EinheitenSatz}* Einheitensatz (Betrag/Einheitenanzahl)

!!! warning "Hinweis"
    Der Stundensatz und der Einheitensatz werden errechnet aufgrund des
    Betrages der Tätigkeit und der Anzahl der Stunden bzw. Einheiten. D.h.
    es wird nicht auf Stundensätze der Tarifschema zugegriffen. Werden
    Zu-/Abschläge durchgeführt, beeinflusst das auch die Berechnung des
    Stundensatzes bzw. Einheitensatzes. Die Platzhalter können auch direkt
    während der Notenerstellung ergänzt werden.


![](<img/image28.png>)

Nachfolgend werden Ihnen die einzelnen Optionen im Reiter *Allgemein*
**(2)** erläutert.

**Verrechenbar**

Ist die Tätigkeit verrechenbar, so ist hier ein Haken zu setzen.
Beispiele hierfür sind Finanzbuchhaltung, Lohnverrechnung etc.

**USt-pflichtig**

Falls die Tätigkeit USt-pflichtig behandelt werden soll, setzen Sie hier
den Haken.

**Außerhalb der AZ**

Handelt es sich um eine Tätigkeit die außerhalb der Arbeitszeit ist, wie
zum Beispiel Behördengänge, Krankenstand, Arztbesuche, Urlaub,
Feiertage, so setzen Sie hier den Haken.

**Nicht in Pauschale**

Sollen bestimmte Tätigkeiten nicht über die Pauschale, sondern
zusätzlich abgerechnet werden, ist in den Stammdaten der Tätigkeiten die
Option *Nicht in Pauschale* zu aktivieren. Diese Tätigkeit wird
zusätzlich zur Pauschalzeile in der Note angeführt und abgerechnet.
Weiters wird diese Tätigkeit beim Pauschalausgleich ausgeschlossen.

**Urlaub**

Handelt es sich um eine Urlaubstätigkeit, setzen Sie den Haken für
Urlaub. Der erfasste Urlaubskonsum kann so in der Urlaubskartei und im
Urlaubssaldo berücksichtig werden. Bei Tätigkeiten außerhalb der
Arbeitszeit kann so die Unterbrechung der Arbeitszeit ermittelt werden.
Es kann mehrere Urlaubstätigkeiten geben – empfohlen wird aber nur eine.

!!! warning "Hinweis"
    Grundsätzlich sollte eine Urlaubstätigkeit nicht verrechenbar sein und
    außerhalb der Arbeitszeit liegen. Es besteht jedoch die Möglichkeit,
    eine Urlaubstätigkeit als Verrechenbar zu definieren. Eine verrechenbare
    Urlaubstätigkeit hat auf die Urlaubskartei der Mitarbeiter keinen
    Einfluss.

**Krankenstand**

Handelt es ich um einen Krankenstand, setzten Sie den Haken für
Krankenstand. Der Krankenstand ist nur anwählbar, wenn er weder
verrechenbar noch UST pflichtig ist und außerhalb der AZ liegt. Es kann
mehrere Krankenstandstätigkeiten geben.

**Feiertag**

Ist die Tätigkeit eine Feiertagstätigkeit ist beim Feiertag ein Haken zu
setzen.

*Achtung:* Es darf nur eine Tätigkeit geben, die als Feiertag definiert
wurde. Dies wird auch vom Programm überprüft. Dadurch kann die Erfassung
der Feiertage automatisch erfolgen.

**Spesen**

Für die Anlage einer Spesentätigkeit ist die Option *Spesen* zu
aktivieren. Eine Spesentätigkeit muss verrechenbar sein. Bei der
Notenerstellung wird eine Spesentätigkeit gleich wie eine verrechenbare
Leistung behandelt. Bei den Umsatzstatistiken werden Spesen extra
dargestellt.

**Projektzeitraum in Note**

Die Option *Projektzeitraum in Note* ist initial bei allen
verrechenbaren Tätigkeiten aktiv und gilt generationsübergreifend. Wird
die Option deaktiviert, wird der Projektzeitraum nicht auf der Note
angedruckt.

!!! warning "Hinweis"
    Wird der Projektzeitraum nicht auf der Note angegeben, wird für die
    Kontierung dieser Tätigkeiten kein Projektzeitraum im Feld Buchungstext
    bei der Belegverarbeitung mitgegeben.

**Betrag in Note**

Die Option *Betrag in Note* ist initial bei allen verrechenbaren
Tätigkeiten aktiv und gilt generationsübergreifend. Wird die Option
deaktiviert, wird der Betrag dieser Tätigkeit nicht auf der Note
angedruckt, sondern zu einer anderen Tätigkeit der gleichen
Verrechnungsgruppe dazu addiert.

!!! warning "Hinweis"
    Bitte beachten Sie auch die definierten [Grundeinstellungen](/HONNext/Einstellungen/Grundeinstellungen).

**Projektzeitraumeingabe verpflichtend**

Wird die Tätigkeit bei der Leistungserfassung ausgewählt, so muss der
Leistungserfasser verpflichtend einen Projektzeitraum eintragen.

**Uhrzeiteingabe** **verpflichtend**

Wird die Tätigkeit bei der Leistungserfassung ausgewählt, so muss der
Leistungserfasser verpflichtend die Uhrzeit (von/bis) eintragen.

**Texteingabe verpflichtend**

Wird die Tätigkeit bei der Leistungserfassung ausgewählt, so muss der
Leistungserfasser verpflichtend einen Text eintragen.

**Verrechnungsgruppe**

Die Tätigkeiten müssen einer Verrechnungsgruppe **(3)** zugeordnet
werden. Weitere Informationen zu Verrechnungsgruppen finden Sie im
Kapitel [Verrechnungsgruppen](/HONNext/Stammdaten%20HON%20Next/Verrechnungsgruppen).

**Verrechnungsart**

Hier **(4)** haben Sie die Auswahl zwischen

-   Stunden

-   Einheiten

-   Stunden oder Einheiten

-   Stunden und Einheiten

-   Betrag

Je nachdem wie Sie die Leistung, die auf die Tätigkeit erfasst wird
abrechnen wollen, stehen Ihnen obige Auswahlmöglichkeiten zur Verfügung.
Die Auswahl, die Sie hier treffen, hat Auswirkungen auf die
Leistungserfassung Ihrer Mitarbeiter. Wenn Sie beispielsweise Einheiten
auswählen, so muss bei der Erfassung auf die Tätigkeit vom Mitarbeiter
die Anzahl der Einheiten eingetragen werden.

!!! info "Tipp"
    Bei der Erfassung einer Tätigkeit nach Betrag muss keine Dauer in der
    Leistungserfassung eingegeben werden.

**Unterschied** **Stunden** **und Einheiten / Stunden oder Einheiten**

Bei der Verrechnungsart *Stunden und Einheiten* müssen im Zuge der
Leistungserfassung die Stunden und die Einheiten eingegeben werden. Es
werden die angefallenen Stunden sowie die erfassten Einheiten
verrechnet.

Bei der Verrechnungsart *Stunden oder Einheiten* müssen im Zuge der
Leistungserfassung nur die Stunden erfasst werden, die Eingabe der
Einheiten ist optional. Es werden initial die angefallenen Stunden
verrechnet. Während der Notenerstellung kann die Verrechnung jedoch nach
Stunden oder Einheiten erfolgen, sofern beides vom Mitarbeiter erfasst
wurde (vgl. [Verrechnung nach Stunden oder Einheiten](/HONNext/Notenerstellung/Notenerstellung/#verrechnung-nach-stunden-oder-einheiten))

!!! info "Tipp"
    Bei den Tarifschemata soll eine Tätigkeit mit der Verrechnungsart
    *Stunden oder Einheiten* einem Stunden- sowie einem Einheitensatz
    zugordnet werden.

!!! warning "Hinweis"
    Bei Tätigkeiten, welche nach Einheiten abgerechnet werden, kann im Tarifschema ebenso ein Stundensatz hinterlegt werden. In der Notenerstellung kann damit von *Verrechnung nach Einheiten* auf *Verrechnung nach Stunden* gewechselt werden.

Optionen im Reiter *Buchhaltung*:


![](<img/image29.png>)

**Erlöskonto**

Standardmäßig wird das bei der Verrechnungsgruppe hinterlegte Erlöskonto
übernommen (gilt für alle drei möglichen Erlöskonten). Dieses Konto wird
in grauer Schriftfarbe und kursiv geschrieben dargestellt. Wurde der
Haken USt-pflichtig ausgewählt, so wird das bei der Verrechnungsgruppe
hinterlegte Erlöskonto für USt-pflichtige Tätigkeiten vorgeschlagen,
andernfalls wird das Erlöskonto für nicht USt-pflichtige Tätigkeiten
vorgeschlagen. Sie können jedoch das Erlöskonto abweichend von der
Verrechnungsgruppe bei der Tätigkeit eintragen. Wenn Sie dies machen,
wird das abweichend eingetragene Erlöskonto in schwarzer Schriftfarbe
dargestellt. Das abweichend hinterlegte Erlöskonto bei der Tätigkeit ist
generationsübergreifend, kann optional eingetragen werden und es wird
nicht überprüft, ob das eingetragene Konto in der Finanzbuchhaltung
vorhanden ist. Der Nummernbereich für die Erlöskonten ist von 1-
999999999.

**Kostenstelle**

Standardmäßig wird die bei der Verrechnungsgruppe hinterlegte
Kostenstelle übernommen. Sie haben pro Tätigkeit die Möglichkeit eine
abweichende Kostenstelle zu hinterlegen (Nummernbereich 1-999999999).
Bei der Erstellung der Buchungen für die Buchhaltung, werden die Erlöse
auf die Kostenstellen aufgeteilt.

!!! warning "Hinweis"
    Bei der Kontierung der Kostenstellen wird nach Folgender Reihenfolge
    vorgegangen. Ist in den [Klientenstammdaten](/HONNext/Stammdaten%20Klienten) eine
    Kostenstelle hinterlegt, wird diese immer vorrangig zur Kontierung
    herangezogen. Anschließend kommen die abweichenden Kostenstellen der
    Tätigkeiten zur Anwendung und zum Schluss wird geprüft, ob bei den
    Verrechnungsgruppen eine Kostenstelle hinterlegt ist.

Wenn Sie alle Einstellungen getroffen haben, können Sie Ihre Tätigkeit
über den Button *Speichern* abspeichern.

### Tätigkeiten bearbeiten

Tätigkeitsnummern können über das Bleistiftsymbol
![](<img/image30.png>) **(1),** über das Kontextmenü
oder über die Schaltfläche „*Tätigkeitsnummer ändern*“ **(2)** geändert
werden.


![](<img/image32.png>)


!!! warning "Hinweis"
    Solange noch keine Leistungen auf die Tätigkeit erfasst wurde, können
    alle Einstellungen geändert werden. Später ist es nur mehr möglich, in
    derselben Generation, die laufende Nummer und die Bezeichnung zu ändern.

Bereits vorhandene Tätigkeiten werden in einer Tabellendarstellung
**(3)** dargestellt. Dabei ist auf einen Blick ersichtlich, welche
Optionen Sie bei welchen Tätigkeiten gesetzt haben.

Wollen Sie eine bereits bestehende Tätigkeit ab einen bestimmten
Zeitpunkt anders abrechnen bzw. erfassen lassen, so können Sie für die
bereits bestehende Tätigkeit eine neue Generation vergeben. Dazu wählen
Sie die entsprechende Tätigkeit aus und blenden die *Details* ein. Im
linken Bereich befindet sich die Schaltfläche „*Generation*“. Klicken
Sie einmal auf diese Schaltfläche **(1).** Sie können nun über die
Schaltfläche „*neue Generation*“ **(2)** die Tätigkeit ab einen
bestimmten Zeitpunkt anders erfassen bzw. abrechnen lassen.

!!! warning "Hinweis"
    Generationen sind immer ab einem bestimmten Datum gültig. D.h. die
    Einstellungen die vor diesem Datum gespeichert sind, sind dann bis zum
    Zeitpunkt der neuen Generation gültig. Beispiel: Sie legen sich für die
    Tätigkeit Finanzbuchhaltung eine neue Generation ab 25.05.xxxx an, weil
    Sie die Uhrzeiteingabe verpflichtend bei der Leistungserfassung haben
    wollen. Die Einstellungen ohne Uhrzeiteingabe sind dann bis 24.05.xxxx
    gültig und die Einstellungen mit Uhrzeiteingabe für Leistungen die ab
    25.05.xxxx erfasst werden.


![](<img/image7.png>)


Wenn Sie auf „*neue Generation***“ (2)** geklickt haben, öffnet sich ein
Dialogfenster, in welchem Sie das Datum, ab welchem die Tätigkeit anders
berechnet werden soll, eintragen können. Wenn Sie auf „*Anlegen*“
klicken, wird die Generation angelegt, mit Klick auf „*Abbrechen*“
werden die Änderungen verworfen.


![](<img/image8.png>)

Ihnen wird nun die soeben neu angelegte Generation im Detailbereich
**(1**) der Tätigkeit angezeigt. Nun können Sie die Einstellungen für
die Tätigkeit ab der neuen Generation setzen und speichern. Die neue
Generation ist mit einem ab Datum **(2)** gekennzeichnet. Dieses Datum
finden Sie auch im linken Bereich **(3)**.

![](<img/image11.png>)

!!! warning "Hinweis"
    Optionen die mit einem türkisen G gekennzeichnet sind, sind
    generationsübergreifende Optionen.

### Tätigkeiten löschen

Tätigkeiten können über den Button *Tätigkeit löschen* nur gelöscht
werden, falls keine Leistungen auf diese Tätigkeit erfasst wurden.
Ebenso ist es möglich eine Tätigkeit über das Kontextmenü zu löschen.


![](<img/image33.png>)

### Tätigkeit deaktivieren

Falls eine bestimmte Tätigkeit für die Leistungserfassung gesperrt
werden soll, können Sie diese für einen bestimmten Zeitpunkt oder ab
einem bestimmten Tag sperren.

Sie können über Generationen die Zeiträume steuern. Wenn die Tätigkeit
nicht mehr erfasst werden soll, so können Sie ein bis Datum bei der
gültigen Generation setzen. Dazu wählen Sie die gewünschte Tätigkeit
aus, klicken Sie auf *Details* und auf die Schaltfläche *Generation*.
Anschließend wählen Sie \**Generation bearbeiten*“ aus.


![](<img/image34.png>)

Nun öffnet sich ein Dialogfenster in welchem Sie das Datum eintragen
können, bis zu dem die Leistung in der Leistungserfassung von den
Mitarbeitern erfasst werden kann.


![](<img/image35.png>)

Klicken Sie auf *Übernehmen,* um die Einstellungen zu speichern.

Deaktivierte Tätigkeiten werden in der Übersicht der Tätigkeiten
grundsätzlich ausgeblendet. Sie können sich diese Tätigkeiten jedoch
über die Schaltfläche „*Vergangene Tätigkeiten anzeigen*“ wieder
einblenden lassen. Deaktivierte Tätigkeiten werden in der Tabelle in
grauer Schriftfarbe dargestellt.


![](<img/image36.png>)

!!! warning "Hinweis"
    Die Zuordnung der Tätigkeiten zum Stunden-/Einheitensatz erfolgt über
    das Tarifschema.
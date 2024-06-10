# Stammdaten


![](<img/image13.png>)


Über den Reiter *Stammdaten* werden Ihnen die verschiedenen Stammdaten
der Honorarverrechnung aufgelistet.

!!! info "Tipp"
    Über die Schaltflächen Zu den Klientenstammdaten / Zu den
    Mitarbeiterstammdaten gelangen Sie mit einem Klick in die Stammdaten der
    Klienten/Mitarbeiter.

!!! warning "Hinweis"
    Die Option *Zu den Unternehmensbereichen* steht nur zur Verfügung, wenn
    Sie im Berechtigungssystem eine Rolle mit der Eigenschaft
    *Unternehmensbereiche verwalten* zugeordnet haben.

## Verrechnungsgruppen

Verrechnungsgruppen werden für die Leistungserfassung, Notenerstellung
und Kontierung für die Finanzbuchhaltung benötigt.

Wählen Sie den Menüpunkt *Stammdaten – Verrechnungsgruppen* aus, um
Verrechnungsgruppen anzulegen bzw. zu verwalten. Es öffnet sich ein
eigener Tab für die Verrechnungsgruppen. Verrechnungsgruppen sind
übergeordnet, ihnen werden Tätigkeiten zugeordnet und später in der
Notenerstellung selbst kann nach Verrechnungsgruppen gefiltert werden.


![](<img/image14.png>)

### Verrechnungsgruppen anlegen

Sie können entweder über die Schaltfläche „*Neue Verrechnungsgruppe*“ im
unteren Bereich oder im oberen Bereich über die Schaltfläche „*Neue
Verrechnungsgruppe*“ Verrechnungsgruppen anlegen. Ebenso besteht die
Möglichkeit eine neue Verrechnungsgruppe über den Shortcut STRG+N neu
anzulegen.

![](<img/image15.png>)

Die Bezeichnung der Verrechnungsgruppe und die Bezeichnung der
Verrechnungsgruppe in der Note muss eingetragen werden. Wenn Sie die
Bezeichnung eintippen, wird automatisch diese Bezeichnung auch in das
Feld „*Bezeichnung in Note*“ übernommen. Sie könnten die Bezeichnung in
der Note noch abändern.

Sie können im Reiter Buchhaltung pro Verrechnungsgruppe ein Erlöskonto
für USt-pflichtige Tätigkeiten, ein Erlöskonto für nicht USt-pflichtige
Tätigkeiten sowie Erlöskonten für Reverse Charge hinterlegen. Diese
hinterlegen Konten werden später für die Kontierung von abgerechneten
Leistungen verwendet. Der gültige Nummernbereich für die Konten ist von
1- 999999999. Wird ein Konto von Ihnen eingetragen, so erfolgt keine
Überprüfung, ob dieses Konto in der Finanzbuchhaltung vorhanden ist.

Ebenfalls kann im Reiter Buchhaltung eine Kostenstelle für die
Verrechnungsgruppe hinterlegt werden. Der gültige Nummernbereich für die
Kostenstelle ist von 1‑ 999999999. Bei den Tätigkeiten können
abweichende Kostenstellen hinterlegt werden 

Weiters ist es möglich, der Verrechnungsgruppe einen abweichenden
Rechnungssteller zuzuordnen. Wird hier eine abweichende Eingabe
getroffen, werden bei der Notenerstellung nicht die Stammdaten des dem
Klienten zugeordneten Unternehmensbereich (Kapitel 4, Seite
50 (unternehmensbereiche)) gewählt, sondern jene des abweichenden
Rechnungsstellers. Bei der Notenerstellung erhalten Sie pro Klient pro
Rechnungssteller einen Notenvorschlag (Kapitel 11.1, Seite
83 (notenvorschläge)).

Über das Feld *Verrechnungsart* kann definiert werden, ob nur die Summe
der Verrechnungsgruppe auf der Note abgebildet wird oder die Summen je
Tätigkeiten der Verrechnungsgruppe.


![](<img/image16.png>)


![](<img/image17.png>)

Auf der Note für den Klienten wird nur der Verrechnungsgruppenname inkl.
Summe angedruckt.

Mit Klick auf den Button *Speichern* schließen Sie die Neuanlage der
Verrechnungsgruppe ab.

### Verrechnungsgruppen bearbeiten

Die Reihenfolge der Verrechnungsgruppen können Sie mit Drag & Drop
verändern **(1).** Wählen Sie das Symbol
![](<img/image18.png>)  aus und ziehen Sie mit der
Maustaste die Verrechnungsgruppe an die gewünschte Stelle. Mit Klick auf
Details **(2)** können Sie sich die Details der Verrechnungsgruppe
anzeigen lassen und zum Beispiel die Bezeichnung ändern.



![](<img/image19.png>)
![](<img/image20.png>)

!!! warning "Hinweis"
    Je nachdem wie Sie die Verrechnungsgruppen Reihen, werden diese nach der
    von Ihnen gewählten Reihung auch bei der Notenerstellung in dieser
    Reihenfolge vorgeschlagen.

### Verrechnungsgruppe löschen

Verrechnungsgruppen können über den Button *Verrechnungsgruppe löschen*,
oder über das Kontextmenü nur gelöscht werden, wenn diese keiner
Tätigkeit zugeordnet wurden. Mit der ENTF Taste als Shortcut können Sie
ebenso eine Verrechnungsgruppe löschen.


![](<img/image21.png>)

## Tätigkeiten

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

Die Option Projektz*eitraum in Note* ist initial bei allen
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
    Bitte beachten Sie auch die definierten Grundeinstellungen (Kapitel 3.1,
Seite 33).

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
Kapitel 2.1 ab Seite 12 (verrechnungsgruppen) ff.

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
wurde (vgl. Kapitel 11.4.6, Seite
[92](#verrechnung-nach-stunden-oder-einheiten)).

!!! info "Tipp"
    Bei den Tarifschemata soll eine Tätigkeit mit der Verrechnungsart
    *Stunden oder Einheiten* einem Stunden- sowie einem Einheitensatz
    zugordnet werden.

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
    vorgegangen. Ist in den Klientenstammdaten (Kapitel 6, Seite 47) eine
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

## Tarifschemata

Ein Tarifschema dient dazu, unterschiedliche Stundensätze oder
Einheitssätze für Mitarbeiter oder Klienten, abweichend zum
Standard-Tarifschema, zu definieren. Diese Tarifschemata können in den
Stammdaten des Mitarbeiters oder des Klienten hinterlegt werden. Somit
wird gewährleistet, dass mit dem hinterlegten Tarifschemata abweichend
zum Standardschema, die Verrechnung erfolgt.

Wählen Sie den Menüpunkt *Stammdaten – Tarifschemata* aus, um
Tarifschemata anzulegen bzw. zu verwalten. Es öffnet sich ein eigener
Tab für die Tarifschemata.

![](<img/image37.png>)

Sie haben die Möglichkeit verschiedene Schemata auf unterschiedlichen
Kategorien zu definieren. Beim Punkt *Verwendungen* wird Ihnen angezeigt
bei welchen Klienten oder Mitarbeitern Sie das jeweilige Tarifschema
hinterlegt haben.

Über den kleinen Pfeil **(1)** neben den Verwendungen, können Sie sich
alle dem Tarifschema zugeordneten Mitarbeiter/Klienten anzeigen lassen.


![](<img/image38.png>)

### Darstellungsmöglichkeiten Tarifschemata

Mithilfe diverser Gruppierungs- und Filtermöglichkeiten können Sie sich
hier einen Überblick über die Tarifschemata und deren Zuordnungen
machen. Weiters haben Sie hier die Möglichkeit neue Tätigkeiten mehreren
Tarifschemata zuzuordnen.

Die Gruppierung der Tarifschemata *nach Art - Bezeichnung - Generation*
ist fest vorgegeben, jedoch kann innerhalb der Gruppierung gefiltert
und/oder sortiert werden.

Weiters haben Sie die Option sich hier alle Details zum jeweiligen
Tarifschema einblenden zu lassen. Mithilfe des kleinen Pfeilsymbols
**(1)** werden die jeweiligen Stunden-/Einheitensätze inklusive der
zugeordneten Tätigkeiten je Generation angezeigt.


![](<img/image39.png>)

Standartmäßig wird Ihnen hier nur die aktuell gültige Generation
abgebildet. Möchten Sie auch vergangene Generationen sehen, können Sie
sich diese mithilfe der Schaltfläche *Vergangene Generationen anzeigen*
anzeigen lassen.

![](<img/image40.png>)

Vergangene Generationen werden Ihnen in der Auflistung der Generationen
in grauer Schrift dargestellt.


![](<img/image41.png>)

Innerhalb der Auflistung der einzelnen Tarifschemata können die
einzelnen Spalten auch wieder gefiltert werden. Wenn Sie auf eine
Überschriftenspalte klicken, wird ein blaues Filter Symbol angezeigt –
nun können Sie beispielsweise nach der Tätigkeit filtern.


![](<img/image42.png>)

!!! warning "Hinweis"
    Standardmäßig ist das Standard-Tarifschema angelegt. Des Weiteren
    besteht die Möglichkeit sich unterschiedliche Tarifschemata für
    Mitarbeiter und/oder Klienten anzulegen.

### Tarifschema anlegen

Über den Button *Neues Tarifschema (***1 oder 2***)* können Sie sich ein
neues Tarifschema anlegen.


![](<img/image43.png>)

Es öffnet sich im Anschluss ein Dialogfenster in welchem Sie
entscheiden, ob es ein Mitarbeiter- oder ein Klienten-Tarifschema ist,
welches Sie anlegen möchten.


![](<img/image44.png>)

Wenn Sie auf „*OK*“ klicken, öffnet sich die Neuanlage.

!!! info "Tipp"
    Bei Mitarbeiter- und Klienten Schemata müssen nur jene Tätigkeiten
    zugeordnet werden, die abweichend zum Standard-Tarifschema verrechnet
    werden.

Zuerst müssen Sie den Namen **(1)** für das Tarifschema vergeben. Im
rechten Bereich finden Sie die noch nicht zugeordneten Tätigkeiten
**(2).** Diese können Sie je nachdem ob nach Stundentarifen oder
Einheitstarifen **(4)** abgerechnet werden soll, mittels Drag an Drop
**(3)** in die gewünschte Position ziehen. Im rechten Feld neben der
Anmerkung kann ein Stundensatz **(5)** bzw. Einheitssatz hinterlegt
werden. Weiters ist es möglich eine wertmäßige oder prozentuelle
Abweichung zum Standarttarif zu definieren **(5).** Sie können auch noch
eine Anmerkung hinterlegen **(6).**

Verminderungen (Prozent oder Wert) sind mit einem negativen Voreichen
einzugeben.  
Stunden- bzw. Einheitensätze können nicht mit negativen Vorzeichen
eingegeben werden.

!!! info "Tipp"
    Mit der ***Strg*** Taste können mehrere nicht zugeordnete Tätigkeiten
    markiert werden und in Einem zum jeweiligen Satz zugeordnet werden.


![](<img/image48.png>)

Wenn Sie auf *Speichern* klicken, werden Ihre Einstellungen gespeichert.

!!! info "Tipp"
    Wurde versehentlich eine Tätigkeit falsch zugeordnet, so kann diese ganz
    einfach mit Drag & Drop wieder zu den nicht zugeordneten Tätigkeiten
    gezogen werden.

### Tarifschema bearbeiten

!!! warning "Hinweis"
    Bitte beachten Sie, dass sich jede Änderung auf noch nicht erstellte
    Noten auswirkt, z.B. Änderung von Zuordnungen, Stundensätzen etc. Wir
    würden Ihnen empfehlen für derartige Änderungen eine neue Generation
    anzulegen.

Soll ein bestimmter Stundensatz gelöscht werden, so können Sie dies mit
dem Papierkorb Symbol **(1)** veranlassen. Nicht zugeordnete Tätigkeiten
können einfach mittels Drag & Drop zum gewünschten Satz gezogen werden
**(2).** Vergangene Tätigkeiten **(3)** können ebenso, falls notwendig,
eingeblendet werden.


![](<img/image49.png>)

!!! warning "Hinweis"
    Ein Tarifschema ist generationsverwaltet. Wenn Sie z.B. eine jährliche
    Erhöhung abbilden wollen, müssen Sie für den Zeitpunkt der Erhöhung eine
    neue Generation anlegen.

### Prozentuelle Erhöhung von Tarifen

Mit der Schaltfläche *Tarifsätze anpassen* können Sie übergreifend die
Tarifsätze der einzelnen Tarifschema prozentuelle anpassen.


![](<img/image50.png>)

Nachdem Sie Tarifsätze anpassen gewählt haben, müssen Sie zuerst
eingeben, ab welchem Datum die neuen Tarifsätze gelten. Mit diesem Datum
wird in den jeweiligen Tarifschemata eine neue Generation angelegt.


![](<img/image51.png>)

Mit der Schaltfläche *Weiter* erhalten Sie eine Liste aller angelegten
Tarife. Hier können Sie nun die Veränderung in Prozent inkl. der Rundung
definieren sowie jene Tarife auswählen, welche angepasst werden sollten.

Über die Spalten *Alter Satz* und *Neuer Satz* ist die Veränderung
ersichtlich.


![](<img/image52.png>)

**Rundung**  
Bei allen Rundungsoptionen wird kaufmännisch gerundet (bis vier abrunden
und ab fünf aufrunden).

Bsp.: Rundung bei einem Tarifsatz von 75 € und einer prozentuellen
Erhöhung von 3 %

-   Zwei Nachkommastellen -&gt; neuer Wert 77,25 € (3 %)

-   Ganze Euro -&gt; neuer Wert 77 € (2,67 %)

-   Zehner -&gt; 80 € (6,67 %)

!!! warning "Hinweis"
    Bei prozentueller Erhöhung/Verminderung kann abhängig von der gewählten
    Rundungsoption die relative Erhöhung höher/niedriger ausfallen als von
    Ihnen hinterlegt.

Mit der Schaltfläche *Weiter* gelangen Sie nun zu einer Zusammenfassung
der hinterlegten Änderungen. Weicht die relative Veränderung aufgrund
der Rundung von der definierten Veränderung in Prozent ab, ist der Wert
gelb hinterlegt.


![](<img/image53.png>)

Mit *Speichern* wir die Änderung gespeichert (=eine neue Generation mit
den definierten Werten, wird in den jeweiligen Tarifschemata angelegt).

!!! warning "Hinweis"
    Mit der Schaltfläche *Tarifsätze anpassen* können nur fixe Stunden- oder
    Einheitensätze sowie Wertmäßige Änderungen angepasst werden. Arbeiten
    Sie in den Mitarbeiter- und Kliententarifschema mit prozentuellen
    Abweichungen, müssen die Prozentsätze im jeweiligen Tarifschema extra
    angepasst werden.

### Tarifschema duplizieren

Mitarbeiter- oder Klienten-Tarifschemata können über die Schaltfläche
*Tarifschema duplizieren* oder über das Kontextmenü kopiert werden. Sie
erhalten somit ein Duplikat des Tarifschemas ohne Verwendungen bei den
Mitarbeitern oder Mandanten, d.h. ohne Zuordnung zu diesen und müssen
nicht noch einmal alles neu von vorne anlegen.


![](<img/image54.png>)

### Tarifschema löschen

Ein Tarifschema kann nur gelöscht werden, wenn es bei keinem Mitarbeiter
oder Klienten hinterlegt wurde. Über die Schaltfläche *Tarifschema
löschen* im Ribbon oder über das Kontextmenü können Sie somit ein
Tarifschema löschen.


![](<img/image54.png>)

### Zuordnung eines Mitarbeiter- oder Klienten-Tarifschemas

Die Zuordnung eines von Ihnen angelegten Mitarbeiter-Tarifschemas
erfolgt im RZL-Board unter dem Bereich *Stamm*, im Bereich
*Personen/Klientenverwaltung* beim jeweiligen *Mitarbeiter* der
abweichend zum Standard-Tarifschema ist. Beim Auswahlfeld
Mitarbeiter-Tarifschema können Sie das gewollte Schema auswählen und
hinterlegen.


![](<img/image55.png>)

!!! info "Tipp"
    Standardmäßig wird bei allen Klienten und Mitarbeitern das
    Standard-Tarifschema hinterlegt. Sie müssen daher nur bei abweichenden
    Mitarbeiter-/Klienten-Tarifschema in den Stammdaten des
    Mitarbeiters/Klienten Änderungen durchführen.

Wollen Sie ein abweichendes Klienten-Tarifschema bei gewissen Klienten
hinterlegen, so wählen Sie im RZL-Board den Bereich *Stamm* und
anschließend *Personen/Klientenverwaltung* aus. Klicken Sie auf
*Klienten* und wählen Sie den gewünschten Mandanten mit Doppelklick aus.

Im Klientenstammdaten-Bereich haben Sie die *HON*-Einstellungen zur
Auswahl. Sie haben im Bereich *HON* beim Klienten-Tarifschema nun die
Möglichkeit ein abweichendes Tarifschema für den gewählten Klienten zu
hinterlegen.


![](<img/image56.png>)

!!! info "Tipp"
    Mithilfe der Schaltflächen *zum Mitarbeiter-Tarifschema / zum
    Arbeitszeitmodell / zum Klienten-Tarifschema* gelangen Sie in die
    Stammdaten der Honorarverrechnung. Es wird automatisch die jeweilige
    Ansicht der HON-Stammdaten geöffnet. Sie können bestehende Stammdaten
    bearbeiten oder Neue definieren.

### Tätigkeiten zuordnen

Die Schaltfläche *Tätigkeiten zuordnen* hilft Ihnen dabei neu angelegte
Tätigkeiten schnell und unkompliziert den betroffenen Tarifschemata
zuzuordnen bzw. eine Umorganisation der Tätigkeiten einfach
durchzuführen.

Wählen Sie den betroffenen Tarif **(1)**, wo die neue Tätigkeit
hineinfällt. Hierbei sind auch Mehrfachselektionen möglich. Anschließend
wählen Sie die Schaltfläche Tätigkeit zuordnen **(2).**

![](<img/image57.png>)

Nun müssen Sie die Tätigkeit auswählen, welche zu den ausgewählten
Tarifen zugeordnet werden soll. Abschließend erhalten Sie noch eine
Abfrage, ob die Änderung durchgeführt werden soll.


![](<img/image58.png>)

!!! warning "Hinweis"
    Es kann nur ein Stunden- und ein Einheitensatz pro Tarif gewählt werden.

## Arbeitszeitmodelle

Ein Arbeitszeitmodell wird benötigt um das Ausmaß und die Lage der
(fiktiven) Normalarbeitszeit der Mitarbeiter abbilden zu können. Ein
Arbeitszeitmodell kann einem oder mehreren Mitarbeitern zugeordnet
werden. Wenn Ihre Mitarbeiter danach in der Leistungserfassung ihre
Arbeitszeiten erfassen, kann die Standardarbeitszeit, das ist die
Arbeitszeit aus dem Arbeitszeitmodell, vorgeschlagen werden.

Wählen Sie den Menüpunkt *Stammdaten – Arbeitszeitmodelle* aus, um ein
Arbeitszeitmodell anzulegen bzw. zu verwalten. Es öffnet sich ein
eigener Tab für die Arbeitszeitmodelle.


![](<img/image62.png>)


Im mittleren Bereich **(1)** werden Ihnen die bereits von Ihnen
angelegten Arbeitszeitmodelle angezeigt. Ebenso ersichtlich ist in
diesem Abschnitt bei welchem Mitarbeitern Sie das Modell hinterlegt
haben, wie viele Wochenstunden definiert wurden und wie die
Normalarbeitszeit an den jeweiligen Wochentagen definiert wurde. Wenn
Sie ein Arbeitszeitmodell auswählen und auf *Details* **(2)** klicken,
sehen Sie noch einmal die definierten Arbeitszeiten des jeweiligen
Modelles.

!!! warning "Hinweis"
    Falls Sie ein bestehendes Arbeitszeitmodell ändern, gilt diese Änderung
    ab sofort. Es gibt bei den Arbeitszeitmodellen keine
    Generationsverwaltung. Die Arbeitszeitmodelle werden in den Stammdaten
    des Mitarbeiters im Bereich HON verwaltet bzw. hinterlegt.

Arbeitszeitmodelle werden in den Mitarbeiterstammdaten hinterlegt. Dazu
ist im RZL-Board der Bereich *Stamm* und anschießend unter
*Personen-/Klientenverwaltung* der Punkt *Mitarbeiter* auszuwählen. Beim
gewählten Mitarbeiter wählen Sie den Unterpunkt *HON* aus. Hier haben
Sie die Möglichkeit die in der Honorarverrechnung angelegten
Arbeitszeitmodelle auszuwählen und zu hinterlegen. Wenn Sie auf
*Speichern* klicken werden Ihre Änderungen gespeichert.


![](<img/image63.png>)

!!! warning "Hinweis"
    Wenn sich die Normalarbeitszeit eines Mitarbeiters ändert, so ist eine
    neue Mitarbeiter-Generation anzulegen (siehe Kapitel 1.3, Seite 7 ff).
    Es ist danach ein anderes oder ein neues Arbeitszeitmodell zuzuordnen.

### Arbeitszeitmodell anlegen

Ein neues Arbeitszeitmodell kann entweder über die Schaltfläche „*Neues
Arbeitszeitmodell*“ im Ribbon **(3)** oder über den Button im rechten
Bereich **(4)** angelegt werden.

Sie müssen bei der Neuanlage eine Bezeichnung für das Arbeitszeitmodell,
die Arbeitszeit und die Pausen eintragen. Mittels der Schaltflächen z.B.
*wie Mo* **(5)** usw. können Sie die Arbeitszeiten des Tages in die
nächste Zeile duplizieren. Mit Kick auf die Schaltfläche *Speichern*
wird das Arbeitszeitmodell gespeichert. Es ist auch möglich anstatt
*Beginn und Ende* nur die *Dauer* einzutragen.

!!! info "Tipp"
    Bei der Eingabe einer Tagesarbeitszeit von über zwölf Stunden erhalten
    Sie einen Hinweis, dass die maximale Tagesarbeitszeit überschritten
    wird. Ebenso bei einer Arbeitszeit über sechs Stunden ohne Pause, dass
    die erforderlichen Ruhepausen nicht eingehalten werden.

### Arbeitszeitmodell löschen

Sie können Arbeitszeitmodelle nur löschen, wenn diese nicht mehr bei
Mitarbeitern in Verwendung sind. Über das Kontextmenü oder über die
Schaltfläche „*Arbeitszeitmodell löschen*“ **(6)** können Sie das
gewünschte Modell löschen.

## Nummernbereiche

Nummernbereiche werden für die fortlaufende Nummerierung der
verrechneten Honorarnoten benötigt. Sie können abweichend zum
Standard-Nummernbereich auch mehrere weitere Nummernbereiche, zum
Beispiel für mehrere Unternehmensbereiche, anlegen.

Wählen Sie den Menüpunkt *Stammdaten / Nummernbereiche* aus, um die
Nummerierung der Honorarnoten zu definieren bzw. zu verwalten. Es öffnet
sich ein eigener Tab für die Nummernbereiche.

![](<img/image64.png>)

Standardmäßig ist ein Standard-Nummernbereich vorhanden. Aufgrund des
Standard-Nummernbereiches erfolgt die Nummerierung der Honorarnoten
fortlaufend. Der Standard-Nummernbereich beginnt im definierten Monat
mit der Neunummerierung der Noten (jährliche Nummerierung) oder kann als
fortlaufend (fortlaufende Nummerierung) definiert werden.

**Folgende Nummerierungsarten gibt es:**

-   **Jährliche Nummerierung:**

    Bei der jährlichen Nummerierung legen Sie ein Monat fest, ab dem die
    Noten wieder neu nummeriert werden sollen. Bsp. Jedes Jahr mit
    Jänner – letzte Note im Dezember 2023 hat die Nummer 5000 die
    nächste Note im Jänner 2024 beginnt dann wieder mit der Nummer 1.

-   **Fortlaufende Nummerierung:**

    Bei der fortlaufenden Nummerierung legen Sie einen Stichtag fest, ab
    dem die Noten weiter fortlaufend nummeriert werden. Bsp. Stichtag
    01.01.2023 – letzte Note im Dezember 2023 hat die Nummer 5000 die
    nächste Note im Jänner 2024 wird dann fortlaufend Nummeriert mit der
    Nummer 5001.

Hinweis zum Feld Stichtag bei Fortlaufender Nummerierung:

Der Stichtag sollte in der Vergangenheit liegen. Liegt der Stichtag in
der Zukunft, wird ab dem Stichtag neu mit der eingegebenen Nummer
nummeriert und erst im darauffolgenden Jahr fortlaufend nummeriert.

Sie können jederzeit weitere Nummernbereiche anlegen. Im Eingabefeld
Bezeichnung **(1)** ist der Name des Nummernbereiches einzutragen. Die
Bezeichnung darf maximal 40 Zeichen lang sein. Danach ist zu definieren,
ab welchem Monat **(2)** der Nummernbereich wieder neu nummeriert werden
soll bzw. ab welchem Stichtag die fortlaufende Nummerierung gelten soll.
Das nächste Eingabefeld **(3)** dient zur Definition der Nummerierung.
Zu Letzt müssen Sie noch den Nummernbereich zu einem Unternehmensbereich
**(4)** zuordnen. Dazu klicken Sie auf den Pfeil und wählen mit einem
Haken den gewünschten bzw. die gewünschten Unternehmensbereich/e aus.
Mit Klick auf den *Speichern* Button werden Ihre Einstellungen
gespeichert.

!!! info "Hinweis"
    Bei jährliche Nummerierung gilt ein Nummernbereich immer ein Jahr ab
    Beginn der Neunummerierung.

**Beispiel:** Nummernbereich Unternehmensberatung. Dieser Nummernbereich
beginnt ab Jänner jeden Jahres neu mit der Nummer 100 und ist dem
Unternehmensbereich RZL-Unternehmensberatung zugeordnet.

!!! info "Tipp"
    Sie erhalten einen Tooltip, wenn Sie mit dem Mauscursor ein Eingabefeld
    auswählen.

Mittels Papierkorbsymbol ![](<img/image65.png>)
können Sie selbst angelegte
Nummernbereiche löschen die noch nicht verwendet wurden.

!!! warning "Hinweis"
    Wird ein Nummernbereich neu angelegt, oder die Nummer von einem
    bestehenden Nummernbereich verändert und wurde in diesem Zeitraum schon
    eine Honorarnote für diesen Unternehmensbereich erstellt, so wird die
    Nummer erst im darauffolgenden Zeitraum verwendet.

**Beispiel:** Nummerierung ab Jänner, Startnummer 1 wurde bisher
verwendet.

Wird die Startnummer auf 1001 geändert und es gibt bereits finalisierte
Noten im laufenden Jahr, wird die neue Startnummer erst im kommenden
Jänner relevant.

## Feiertagsverwaltung

Unter diesem Menüpunkt werden Ihnen die gesetzlichen Feiertage
aufgezeigt und Sie können, falls im KV abweichende Bestimmungen zu den
gesetzlichen Feiertagen geregelt sind, selbst Feiertage definieren.

Wählen Sie den Menüpunkt *Stammdaten – Feiertage* aus, um die Feiertage
zu definieren bzw. zu verwalten. Es öffnet sich ein eigener Tab für die
Feiertage.

![](<img/image66.png>)

Standardmäßig sind im linken Bereich die gesetzlichen Feiertage
hinterlegt. Im rechten Bereich können Sie selbst Feiertage bez.
dienstfreie Zeiten aufgrund Ihres KV’s definieren.

Beispielhaft wurde in der Abbildung der Silvestertag als halber Feiertag
definiert. Tragen Sie im Feld *Bezeichnung* den Namen des Feiertages
bzw. der dienstfreien Zeit ein. Bei der *Art* können Sie entweder
*Datum* oder *Tage vor* bzw. *nach Ostern* auswählen. Im Eingabefeld
Datum/Tag können Sie entweder das Datum, oder die Tage vor bzw. nach
Ostern eintragen. Im Eingabefeld *Dauer* tragen Sie die Uhrzeit ein ab
welcher dienstfrei ist bzw. ob der ganze oder halbe Tag frei ist.

Wenn Sie bei Dauer *halber Tag* festlegen, bekommt der Mitarbeiter die
Hälfte seiner persönlichen täglichen Normalarbeitszeit dienstfrei.

Wenn Sie auf *Speichern* klicken, werden die Änderungen gespeichert.
Selbst definierte Feiertage und dienstfreie Zeiten werden immer im
rechten Bereich angezeigt und können jederzeit mit dem Papierkorbsymbol
![](<img/image65.png>) gelöscht werden. Selbst
definierte Tage werden ebenfalls in roter Schriftfarbe im
Arbeitszeitkalender dargestellt.

## Allgemeine Textbausteine

Über die allgemeinen Textbausteine haben Sie im HON Next die Möglichkeit
vorgefertigte Texte anzulegen und diese im Zuge der Leistungserfassung
und/oder Notenerstellung sowie bei Akonto und Pauschalen zu nutzen.

Über den Menüpunkt *Stammdaten / Allgemeine Textbausteine* könne Sie
Textbausteine anlegen, welche alle Mitarbeiter der Kanzlei nutzen
können.

!!! warning "Hinweis"
    Jeder Mitarbeiter hat in seiner Leistungserfassung zusätzlich die
    Möglichkeit individuell für sich persönliche Textbausteine anzulegen.
    (Vgl. LE Next Handbuch Kapitel 3.4 Persönliche Textbausteine)

Wählen Sie die Schaltfläche *Neuer Textbaustein* **(1)** und vergeben
Sie eine Nummer sowie eine Bezeichnung. Im Feld *Text* können Sie nun
selbst einen Text ergänzen oder mit Platzhaltern **(2)** arbeiten.

Es stehen Ihnen folgende Platzhalter zur Verfügung:

-   Projektzeitraum

-   Dauer

-   Einheiten

-   VerrechnungsgruppeBezeichnungInNote (=Name der Verrechnungsgruppe)

-   TätigkeitBezeichnungInNote (=Name der Tätigkeit)

-   Klient (Nummer, Kurzbezeichnung, Name)


![](<img/image67.png>)

!!! warning "Hinweis"
    Können Platzhaltern nicht aufgelöst werden, werden diese durch ein
    Leerzeichen ersetzt.

!!! info "Tipp"
    Mit der Schaltfläche *Textbaustein löschen* können Sie nicht mehr
    benötigte Textbausteine löschen. Und mit der Schaltfläche Textbausteine
    duplizieren können Sie bestehende Textbausteine kopieren.

### Verwendung Textbausteine

Die angelegten Textbausteine können dann mit der rechten Maustaste
aufgerufen werden oder man gibt direkt die Nummer des Textbausteines ein
und wählt die *F3-Taste* – es wird gleich der jeweilige Textbaustein
eingefügt.

Die Textbausteine können in der Leistungserfassung, bei der Anlage von
Pauschalen und Akonto/Anzahlungen sowie in der Notenerstellung verwendet
werden.

**Beispiel in der Leistungserfassung:**

Im Textfeld können nun mit der rechten Maustaste alle Textbausteine
aufgerufen werden:

![](<img/image68.png>)

Oder Sie geben die Nummer des Textbausteines ein und wählen die
F3-Taste.
![](<img/image69.png>)

**Beispiel in der Notenerstellung:**

Stellen Sie sich in das Bezeichnungsfeld der Tätigkeit – mit der Rechten
Maustaste können wieder alle Textbausteine aufgerufen werden.

![](<img/image70.png>)

Oder Sie geben die Nummer des Textbausteines ein und wählen die
F3-Taste.

![](<img/image71.png>)
# Mitarbeiter Leistungserfassung

Unter diesem Punkt können Sie die Art der Arbeitszeiterfassung
festlegen, sowie wie lange ihre Mitarbeiter Leistungen
bearbeiten/erfassen können und ob Leistungen automatisch freigegeben
werden oder nicht. Dieser Tab ist vor allem für die Einstellungen der
Leistungserfassung relevant und hat auch Auswirkungen auf die
Honorarverrechnung, denn so lange Leistungen nicht von Ihren
Mitarbeitern freigegeben wurden, können Sie diese nicht verrechnen.

Wählen Sie den Button *Mitarbeiter Leistungserfassung* aus, um die
Grundeinstellungen für Sperren der Leistungserfassung festzulegen oder
die Leistungen automatisch freigeben zu lassen.


![](<img/image89.png>)

### Arbeitszeitaufzeichnung

-   *Beginn, Ende und Pausen pro Tag erfassen*

    Dies ist die genaueste Variante für die Leistungserfassung. Der
    Mitarbeiter erfasst täglich seine genaue Arbeitszeit inkl. Pausen.

    Ansicht in der Leistungserfassung vom Mitarbeiter:

    ![](<img/image90.png>)

-   *Arbeitszeit aus den Leistungen entnehmen*

    Bei dieser Variante gibt der Mitarbeiter keine Arbeitszeit ein,
    sondern aufgrund der eingegebenen Leistungszeilen mit *Beginn und
    Ende* wird die Arbeitszeit und die Unterbrechungen ermittelt. Wenn
    beispielsweise ein ganzer Tag an einer FIBU gearbeitet wurde,
    müssen - damit die Mittagspause errechnet werden kann – zwei
    Tätigkeiten erfasst werden, wobei in den Feldern Beginn und Ende der
    Vormittag z. B.: 07:00 – 12:00 Uhr und der Nachmittag z. B.:
    12:30-16:00 erfasst werden.

    Ansicht in der Leistungserfassung vom
    Mitarbeiter:![](<img/image91.png>)

!!! info "Tipp"
    Bei der Einstellung *Arbeitszeit aus den Leistungen entnehmen* ist es
    empfehlenswert in den Stammdaten der Tätigkeiten die *Uhrzeiteingabe
    verpflichtend* zu machen (siehe [Tätigkeiten](/HONNext/Stammdaten%20HON%20Next/Tätigkeiten)).

-   *Keine Arbeitszeitaufzeichnung*

    Wird diese Variante gewählt, wird keine Arbeitszeit ermittelt bzw.
    kann keine Arbeitszeit eingetragen werden. Der Mitarbeiter trägt nur
    seine Leistungen ein – die Felder Beginn/Ende können befüllt werden.

    Ansicht in der Leistungserfassung vom Mitarbeiter:

    ![](<img/image92.png>)

-   *Digitale Stempeluhr*

    Bei der Variante Digitale Stempeluhr, hat der Mitarbeiter in seiner
    Leistungserfassung jeweils einen Button für Kommen und Gehen. Die
    Arbeitszeit für Kommen/Gehen wird aus der Datenbank entnommen – das
    heißt, der Mitarbeiter muss aktiv auf *Kommen/Gehen* klicken, damit
    ab diesem Zeitpunkt die Arbeitszeit gezählt wird. Bei einer Pause
    muss aktiv der Button *Gehen* gewählt werden und am Ende der Pause
    die Schaltfläche *Kommen*.

    Die Arbeitszeiten können mit der digitalen Stempeluhr nur für den
    aktuellen Tag erfasst werden.

!!! warning "Hinweis"
    Die Arbeitszeiten sowie die Pausen sind nur in einer Leseansicht
    dargestellt und können in der Leistungserfassung vom Mitarbeiter nicht
    geändert werden.

Änderungen an den Arbeitszeiten können nur direkt in der
Honorarverrechnung über die Mitarbeiterübersicht durchgeführt werden
(vgl. [Mitarbeiterübersicht](/HONNext/Mitarbeiterübersicht)).

!!! warning "Hinweis"
    Bei der Digitalen Stempeluhr, ist der Import von Arbeitszeiten [Import von Arbeitszeiten](/HONNext/Mitarbeiterübersicht/Import%20Arbeitszeiten%20und%20Leistungen) nicht möglich.

Ansicht in der Leistungserfassung vom
Mitarbeiter:![](<img/image93.png>)

**Rundung  
**Bei der Variante *Digitale Stempeluhr* besteht die Möglichkeit die
erfasste Zeit auf einen hinterlegten Wert zu runden.

Mögliche Rundungen:

-   0 = keine Rundung

-   5 = Rundung auf volle 5 Minuten

-   10 = Rundung auf volle 10 Minuten

-   15 = Rundung auf volle 15 Minuten

Beispiel für Rundung mit 15 Minuten:  
Mitarbeiter klickt um 08:04 auf *Kommen* – es wird auf 08:15 gerundet
als Beginn Arbeitszeit  
Mitarbeiter klickt um 16:46 auf *Gehen* – es wird auf 17:00 gerundet als
Ende Arbeitszeit

### Sperre der Erfassung

In diesem Bereich können Sie Erfassungssperren für die
Leistungserfassung der Mitarbeiter setzen. Zur Auswahl stehen Ihnen die
Optionen keine Sperre, Sperre bis zu einem bestimmten Datum, Sperre bis
xy Tage vor heute, oder Sperre bis xy Tage vor der letzten
Leistungserfassung des jeweiligen Mitarbeiters. Je nachdem welche
Einstellung Sie treffen, können Sie die Leistungserfassung Ihrer
Mitarbeiter entsprechend einschränken.

### Freigabe der Leistungen

Falls die Leistungen Ihrer Mitarbeiter automatisch, sofort nach der
Erfassung freigegeben werden sollen, haken Sie diese Einstellung an. Die
Freigabe einer Leistung bewirkt, dass diese sofort für die
Honorarverrechnung zur Notenerstellung zur Verfügung steht. Werden
Leistungen nicht automatisch freigegeben, so muss der Mitarbeiter in der
Leistungserfassung selbst seine Leistungen für die Honorarverrechnung
freigeben. Solange die Leistungen vom Mitarbeiter nicht freigegeben
wurden, können Sie diese auch nicht verrechnen.

### Programmaktivitäten zuordnen

Innerhalb der Leistungserfassung der einzelnen Mitarbeiter besteht die
Möglichkeit die Zeiterfassung der Programmaktivitäten zu aktivieren. Die
Aktivierung der Zeiterfassung in der Leistungserfassung der Mitarbeiter
bewirkt, dass die Dauer der Tätigkeiten mitprotokolliert werden. (vgl.
Handbuch Leistungserfassung Next Kapitel 3.3 Zeiterfassung)

Im Honorarprogramm haben Sie die Möglichkeit den einzelnen
Programmaktivitäten bestimmten Tätigkeiten zuzuordnen. Wurde hier eine
Tätigkeit zugeordnet, wird diese dem Mitarbeiter bei der
Programmaktivität in der Leistungserfassung gleich vorgeschlagen.

Ebenfalls kann definiert werden, dass erst ab einer gewissen
Mindestanzahl von Minuten die Programmaktivität aus den Klassik
Programmen aufgezeichnet werden.

!!! warning "Hinweis"
    Pro Programmaktivität ist die Zuordnung einer Tätigkeit möglich.
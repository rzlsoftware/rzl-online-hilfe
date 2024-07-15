## Zeiterfassung

Mit diesen Optionen können Sie für das Telefonprotokoll, für die KIS
Postausgänge sowie für die Aktivitäten in den RZL Klassik Programmen
definieren, ob Aktivitäten/Leistungen für die Leistungserfassung erzeugt
werden sollen.

!!! warning "Hinweis"
    Aus den RZL Klassik Programmen können für die Leistungserfassung nur
    Aktivitäten erzeugt werden.

-   *Aktivitäten erzeugen*

    Ist dieses Feld aktiv, werden die Aktivitäten übernommen und können
    zu einem späteren Zeitpunkt direkt in der Leistungserfassung
    eingetragen werden (siehe [Programmaktivitäten zuordnen](/LENext/Einstellungen/Zeiterfassung/#programmaktivitaten-zuordnen)).

-   *Leistungen erfassen*

    Ist dieses Feld aktiv, öffnet sich bei der Erfassung von
    Telefonprotokollen und Postausgängen direkt im RZL KIS ein extra
    Fenster zum Eingeben der Leistung (vgl. [Telefonprotokoll/Postausgang](/LENext/Leistungserfassung/Eingabe%20einer%20Leistungszeile%20außerhalb%20der%20LE/#mittels-telefonprotokollpostausgang)).

!!! warning "Hinweis"
    Wird bei der Erfassung der Leistung im KIS auf *Abbrechen* geklickt,
    wird dennoch eine Aktivität erzeugt, sofern die Option *Aktivität
    erzeugen* gesetzt ist.

Ansicht im KIS beim Erfassen eines Telefonprotokolles mit der
Option *Leistungen erfassen*

![](<img/image75.png>)

### Aktivitäten RZL Klassik Programme

Bei den RZL Klassik Programmen kann in der Leistungserfassung
eingestellt werden, dass aus den Aktivitäten im Klienten
Programmaktivitäten für die Leistungserfassung erzeugt werden.

Die Aktivierung der Zeiterfassung bewirkt, dass die Dauer der Tätigkeit
mitprotokolliert wird. Der Aktivitäten Recorder beginnt mit dem Einstieg
in den Klienten zu laufen und verfolgt die Dauer im Klienten. Werden
Tätigkeiten nach Einheiten abgerechnet, werden diese ebenso als
Aktivität miteinbezogen Bsp. Buchungszeilen in der RZL FIBU oder
Abrechnungen im RZL Lohn.

!!! warning "Hinweis"
    Für Beginn und Ende wird das Öffnen/Schließen des Klienten verwendet.
    Für die Dauer die Fokuszeit, also Zeit in der das Programm auch
    tatsächlich im Vordergrund war.

### Programmaktivitäten zuordnen

Ist in den Eistellungen die Zeiterfassung aktiv, so erscheinen die
Aktivitäten in der Leistungserfassung unter dem Punkt
*Programmaktivitäten.*


![](<img/image76.png>)

Die Prorammaktivitäten können mittels Pfeiles **(1)** eingeklappt, oder
ausgeklappt werden. Es gibt 3 mögliche Stadien die Programmaktivitäten
aufweisen können und zwar:

-   **Zugeordnet**: Die Programmaktivität wurde in der
    Leistungserfassung bzw. direkt im KIS zugeordnet.

-   **Nicht zugeordnet:** Die Programmaktivität wurde nicht in der
    Leistungserfassung berücksichtigt und kann mittel Drag & Drop
    hinzugefügt werden.

-   **Nicht relevant:** Die Programmaktivität wurde als nicht relevant
    markiert und wird in der Leistungserfassung nicht berücksichtigt.

Soll eine nicht zugeordnete Programmaktivität in die Leistungserfassung
einfließen, kann diese mit Drag & Drop vom rechten Bereich
Programmaktivitäten in den linken Bereich Leistungen gezogen werden.

Über die Option *Alle Programmaktivitäten anzeigen* **(2)** werden nicht
relevante und bereits zugeordnete Programmaktivitäten angezeigt. Diese
werden in grauer Schriftfarbe dargestellt.


![](<img/image77.png>)

Nicht relevante Programmaktivitäten können mit der rechten Maustaste als
relevant markiert werden.


![](<img/image78.png>)

Wird eine bereits zugeordnete Leistung wieder gelöscht, ändert sich der
Status von Z*ugeordnet* auf *Nicht zugeordnet*.

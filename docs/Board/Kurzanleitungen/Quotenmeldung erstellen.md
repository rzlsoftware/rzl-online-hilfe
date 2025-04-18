Ab Mai 2024 ist in FinanzOnline die Übermittlung der Quotenmeldungen
mittels Webservice möglich. In den RZL Programmen ist dies in
Kombination mit dem *RZL Board Basis-Programm*, dem *RZL KIS Modul FinanzOnline-Anbindung* und dem *RZL KIS Modul Dokumentenverwaltung* nutzbar.

Im RZL Board unter *Portale - FinanzOnline* gibt es nun die
Möglichkeit, Quotenmeldungen zu erstellen. Dieser Menüpunkt ist
verfügbar, wenn Sie in den Berechtigungen die Funktion *Quotenmeldung verwalten* in einer Rolle zugeordnet haben. Standardmäßig ist die
Funktion in den RZL Rollen Alle Berechtigungen, RZL Administrator, FinanzOnline
Quotenplanung und Kanzleiverwaltung (Berechtigungssystem Premium)
enthalten.

![Quotenmeldung](<img/image166.png>) 

Über *Portale / Quotenmeldung / Meldung erstellen*
öffnet sich ein separates Dialogfenster mit einer Liste von Klienten des
zugehörigen Teilnehmers. Bei mehreren Teilnehmern können Sie diese
über das DropDown Menü *Teilnehmer* wählen.

Mit Doppelklick auf einen Klienten oder über *Details* können Sie die
notwendigen Informationen (Anmeldung, Abmeldung, Begründung) zur
Erstellung der Meldung hinterlegen. Bei einer Anmeldung zur Quote ab
1.7. ist die Angabe einer Begründung verpflichtend. Über die erste
Spalte *Meldung* sehen Sie, für welche Klienten durch die Eintragung von Art, Begründung,... ein Datensatz für die Übermittlung erzeugt wird. 

!!! info "Tipp"
    Sie können mithilfe der Mehrfachauswahl (Strg (+ Umschalt) +
    Markieren) mehrere Klienten markieren und in den Details die
    Informationen einmalig für alle markierten Klienten hinterlegen.

Nachdem Sie all Ihre Klienten abgearbeitet haben, können Sie einen Datensatz über *Meldung erstellen* in die FinanzOnline Übermittlungen bereitstellen. Der *Status* zeigt Ihnen an, ob die Meldung an FinanzOnline übermittelt wurde oder nicht – bei einer erfolgreichen
Übermittlung erscheint hier ein grünes Häkchen, bei einem gelben Stern
wurde der Datensatz erstellt aber noch nicht übermittelt, bei einem
roten Dreieck mit Rufzeichen schlug die Übermittlung fehl.

![Quotenmeldung erstellen](<img/Quotenmeldung_erstellen.png>)

Aufgrund der durch FinanzOnline in die Databox zugestellten Liste der
VJ-Quotenfälle (Databox-Eingang) werden mithilfe des Menüpunktes *Vorschlag aufgrund VJ-Meldung* für jene bereits im Vorjahr gemeldeten Klienten die
Informationen zur Meldung automatisch eingefügt. Der Vorschlag kann
jedoch über das Detail bearbeitet werden. Die Daten lt. Vorschlag
werden bei *Meldung erstellen* berücksichtigt. Somit können Sie
auf Basis der VJ-Meldung Ihre Quotenfälle abarbeiten und neue Klienten
noch manuell hinzufügen.

Vor allem für neue Klienten bzw. für Klienten, die erstmals in die Quote fallen können Sie den *Vorschlag aufgrund Vormerkung* verwenden. Der Vorschlag wird aufgrund der Eintragung in den Klientenstammdaten generiert.

![Vormerkung Quotenjahr für Vorschlag](<img/Vormerkung_Klientenstamm.png>)

Sie können zusätzlich ein geplantes Übermittlungsdatum für die Quotenmeldung eintragen. Die Übermittlung befindet sich bis zum geplanten Übermittlungsdatum in den geplanten Übermittlungen und wechselt dann zu den offenen Übermittlungen.

!!! warning "Hinweis"
    Mit *Meldung erstellen* werden die Quotenfälle als eine **Gesamtübermittlungsdatei** in offene Übermittlungen gestellt.

Unter *Portale / FinanzOnline / Offene Übermittlungen* wird der
Datensatz für die Quotenmeldung in einer Zeile ohne Klient Nr. und
Klient dargestellt, da für die Meldung ein Paket für alle Klienten
übergreifend erstellt wird. Sie können die Meldung mit der Art *Quote*
dann wie gewohnt über Webservice an FinanzOnline übermitteln und
erhalten spätestens nach 48 Stunden ein Protokoll in der Databox. Die
gesendete Meldung ist in den *Gesendeten Übermittlungen* zu
finden.

![offene Übermittlung](<img/offene Übermittlung Quote.png>)

Mit Erhalt des Protokolls im Kanzlei-Informationssystem unter
*FinanzOnline / Databox* wird in der Übersicht unter *Portale / FinanzOnline / Quotenmeldung* auch der Status lt. FinanzOnline
Protokoll aktualisiert.

![](<img/image169.png>) 

Für die Klienten 1-4 wurde eine Anmeldung erstellt und die Rückmeldung
lt. FinanzOnline ist, dass diese Klienten nun angemeldet sind. Für
Klient 5 wurde eine Abmeldung übermittelt, diese wurde jedoch
abgelehnt, da es noch keine Anmeldung gegeben hat. Wenn Sie den
Mauszeiger auf den Fehlertext setzen, erhalten Sie nähere
Informationen zum Fehler.

**Vergabe der Benutzerrechte in FinanzOnline**

Mit der Neuregelung der Quotenverwaltung wurden in FinanzOnline neue
Benutzerrechte eingeführt. Berechtigt ist ein Supervisor oder ein
Benutzer mit der Berechtigung *Quotenverwaltung* im Bereich *Admin*.
Ein Webservice-User braucht keine gesonderte Berechtigung für die
Übermittlung der Quotenmeldungen.

![](<img/image170.png>) 

![](<img/image171.png>) 

!!! warning "Hinweis"
    Damit der Abruf der ERklärungen auf Basis der abzugebenedne ERklärungen in der Quotenverwaltung Einzel funktioniert, muss beim FinanzOnline Zugang für *Steuerkonto-, Quoten-, Erklärungen- und Vertretungslistenabfragen* diese Berechtigung gesetzt werden.
## Allgemein

Es gibt zwei verschiedene Möglichkeiten, digitale Belege in der FIBU Klassik oder im EA-Rechner zu buchen.
Der zuerst erfolgende Schritt startet in der Belegaufbereitung, nach diesem müssen die Belege zu den ungebuchten Belegen verschoben werden. Ab diesem Zeitpunkt können die Belege in den jeweiligen Programmen verbucht werden.

## Hilfsmittel zur Belegsverbuchung

### Verbuchungsregeln

### Aktualisierungsoptionen für Personenkonten

Es gibt noch eine sehr empfehlenswerte Einstellung, die in der FIBU Klassik vor der Verbuchung mit digitalen Belegen aktiviert werden kann. Mittles dieser können Sie ausgelesene UID-Nummern oder Kundennummern auf den Belegen automatisch in den Stammdaten der Kreditoren bzw. Debitoren einfügen lassen. Damit ersparen Sie sich die manuell Hinterlegung.

Öffnen Sie hierzu den Menüpunkt *Stamm / Konten/ Aktualisierungsoptionen*. Hier können Sie im Bereich nach DMS-Buchung aktivieren, dass nach dem Buchen von digitalen Belegen die Daten (IBAN, Kundennummer, UID) vom Beleg in die Kontenstammdaten übernommen werden.

![Aktualisierungsoptionen](<img/image3.png>)

## Buchen

Für die Verbuchung der digitalen Belege in der normalen Verbuchung, muss im Vorbuchungsdialog einiges eingestellt werden.

- Bei der Auswahl **Monat/Jahr** muss das gewünschte Buchungsmonat ausgewählt werden. Zu beachten ist hier, es werden nur ungebuchte Belege beim Buchen angezeigt, bei welchen das Monat und das Jahr übereinstimmt. Wenn im Monat **00** ausgewählt wird, werden alle ungebuchten Belege mit diesem Jahr angezeigt.
- Bei der Auswahl des **Belegkreises** muss der Belegkreis der digitalen Belege gewählt werden. Wenn Belege nicht mit dem gewählten Belegkreis übereinstimmen, werden diese nicht angezeigt. Falls kein Belegkreis gewählt wird, werden alle Belege zur Verbuchung ersichtlich sein.
- Damit die Verbuchung von Belegen möglich ist, muss das Häkchen **DMS-Belege** aktiviert sein, hier wird das Häkchen **automatisch** auch empfohlen. Es kann dann auch noch gewählt werden, dass die Fremdbelegnummer manuell eingegeben werden kann, sowie das die Belegnummer als OP-Nummer vorgeschlagen wird.
- Falls die **Eingabe des Valuta-Datums** ausgewählt wird, kann hier noch das Häkchen **Belegeingangsdatum als Valutadatum verwenden** gesetzt werden.

![Vorbuchungsdialog](<img/image1.png>)

Nachdem die Optionen getroffen wurden und das Häkchen **DMS-Belege** aktiviert wurde, kann die Verbuchung gestartet werden.
Es öffnet sich im Anschluss der Buchungsdialog, sowie ein Fenster für die ungebuchten Belege.

Mittels der **rechten Maustaste** in das Datumsfeld oder wenn das Datumsfeld ausgewählt ist, der **F6-Taste** kann ein DMS-Vorschlag aktiviert werden. Den DMS-Vorschlag kann man mittles der **Umschalt+F8-Taste** wieder beenden.

![DMS-Vorschlag](<img/image2.png>)

Die Belege aus der ungebuchten Liste können dann nach der Reihe verbucht werden. Wenn der Beleg verbucht wurde, wird die Buchung in der Belegspalte mit **DMS** gekennzeichnet. Ab diesem Zeitpunkt hängt der Beleg an dieser Buchung. Wenn die Buchung gelöscht wird, kommt der Beleg automatisch wieder in die Liste der ungebuchten Belege.

!!! info "Tipp"
    Die Belegliste kann gefiltert werden, sowie unterhalb der Auflistung kann ein Häkchen entfernt werden, dann werden alle Belege, die bei den ungebuchten Belege zu sehen wären, aufgelistet.

!!! warning "Hinweis"
    In der Verbuchung von digitalen Belegen in der normalen Verbuchung können auch Splitbuchungen vorgenommen werden, dass ist in der Stapelbuchung nicht möglich. Ansonsten funktioniert die Stapelbuchung ident.

## Belegsverbuchung aus DMS-Systemen

Die Belegsverbuchung aus DMS-Systemen unterscheidet sich einbisschen zu der normalen Verbuchung mit digitalen Belegen. Gebucht kann hier nur noch mittels Belegen werden. Es funktioniert so wie die Verarbeitung von Bankauszügen. Es werden die Buchungen direkt angezeigt, diese können dann überarbeitet werden.

![DMS-Buchen](<img/image4.png>)

Damit der Beleg aufgerufen wird, muss auf eine der Buchungen mittels der **rechten Maustaste**, **Anzeige Beleg** geklickt werden. Sobald zwischen den Buchungssätzen gewechselt wird, wechselt das Programm auch automatisch richtig zwischen den Belegen.

![Anzeige Beleg](<img/image5.png>)

In der Belegverbuchung aus DMS-Systemen kann eine Buchung auch in eine Splitbuchung geändert werden, dabei kann man die Buchung mit der rechten Maustaste **auf Splitbuchung ändern** aufteilen.

!!! warning "Hinweis"
    Abgeschlossen werden die Buchungen nur, wenn die Buchungen links angehakt sind und unten auf **Verbuchen** geklickt wird.




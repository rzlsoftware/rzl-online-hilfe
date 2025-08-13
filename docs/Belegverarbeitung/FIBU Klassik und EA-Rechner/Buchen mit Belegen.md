## Allgemein

Es gibt zwei verschiedene Möglichkeiten digitale Belege in der FIBU Klassik oder im EA-Rechner zu verbuchen.
Der zuerst erfolgende Schritt startet in der Belegaufbereitung, nach diesem müssen die Belege zu den ungebuchten Belegen verschoben werden. Ab diesem Zeitpunkt können die Belege in den jeweiligen Programmen verbucht werden.

## Hilfsmittel zur Belegsverbuchung

### Verbuchungsregeln

Haben Sie das Modul Belegverarbeitung in Verwendung, können Sie über *Stamm / Verbuchungsregeln / Belegverarbeitung Verbuchungsregeln* für Personenkonten und Gegenbuchungen definieren.

#### Personenkonten

Wird keine Verbuchungsregel angelegt, schlägt das Programm das Gegenkonto der letzten Buchung vor. Mithilfe einer Verbuchungsregel, kann ein Gegenkonto definiert werden.

![Verbuchungsregel_Person](<img/image6.png>)

Die Verbuchungsregel kann dann über *Stamm / Konten / Konten* dem Personenkonto zugeordnet werden.

![Hinterlegung_Personenkonto](<img/image7.png>)

Wird bei der Belegverbuchung das Personenkonto ausgelesen, wird automatisch die hinterlegte Verbuchungsregel auf alle Felder zur Kontierung angewandt.

#### Gegenbuchungen

Werden im Zuge der Belegdatenerkennung Steuerzeilen ausgelesen oder manuell ergänzt, kann mithilfe einer/mehrerer Verbuchungsregeln auch hier eine Kontierung vorgegeben werden.

!!! warning "Hinweis"
    Steuerzeilen können bei ebInterface Rechnungen (Rechnungen an den Bund) sowie über Schablonen bei der Belegdatenerkennung ausgelesen werden.

**Beispiel einer ER mit 10% und 20% VSt**

Im Zuge der Belegdatenerkennung wurden aufgrund der definierten Schablone Steuerzeilen mit 10% und 20% VSt ausgelesen.

![Beispiel Steuerzeile](<img/image8.png>)

Folgender Screenshot gibt einen Überblick über die Ansicht der Steuerzeilen im Belegverarbeitungsprogramm, aufgrund ausgelesener Daten.

![Ansicht Steuerzeilen](<img/image9.png>)

In der FIBU können nun für die einzelnen ausgelesenen Steuerzeilen über *Stamm / Verbuchungsregeln / Belegverarbeitung / Gegenbuchungen* Kontierungen vorgegeben werden.

![Ansicht Gegenbuchung](<img/image10.png>)

Im Reiter Verbuchungsregel definiert man, wann die Verbuchungsregel angewandt werden soll. In unserem 
Beispiel bei Eingangsrechnungen und dem Steuersatz von 20%.

!!! info "Tipp"
    Mit dem Feld **Buchungshinweis** können Sie bei der Belegdatenerkennung ein bestimmtes Merkmal eines Beleges auslesen lassen z.B. eine Artikelbezeichnung und aufgrund dieses Merkmals die Anwendung der Verbuchungsregel konkretisieren.

Im Reiter Buchungsvorschlag wird die Kontierung hinterlegt.

![Buchungsvorschlag](<img/image11.png>)

Wird der Beleg über *Buchen / Belegsverbuchung aus **DMS-System*** verbucht, wird ein Buchungsvorschlag aufgrund der Verbuchungsregeln vorkontiert.

![Vorkontierung](<img/image12.png>)

Bei Belegen eines bestimmten Steuerfalles (Export, innergemeinschaftliche Lieferung/Erwerb, usw.) wird nicht mit dem %-Satz, sondern mit dem Feld Steuerfall gearbeitet. Auch bei der Schablone in der Belegverarbeitung wird der jeweilige Steuerfall hinterlegt.

![Steuerfall](<img/image13.png>)



**Beispiel Verbuchungsregel bei einer ebInterface Rechnung**

![ebInferface](<img/image14.png>)

Im Reiter **Verbuchungsregel** werden die Filter gesetzt, wann die Verbuchungsregel angewandt werden soll. 
Im Beispiel oben muss bei der Belegdatenerkennung von ebInterface Rechnungen im Feld Typ **ebInterface**
der Wert Produktgruppe und im Feld **Wert ebInterface A** ausgelesen werden, damit die Verbuchungsregel 
verwendet wird.

Im Reiter Buchungsvorschlag wird die Kontierung hinterlegt.

![Verbuchungsregel Gegenbuchung 2](<img/image15.png>)

Wird somit bei der Belegdatenerkennung der **Typ** Produktgruppe und **Wert A** ausgelesen, wird bei der Verbuchung des Beleges das Gegenkonto 5000 vorkontiert.


### Aktualisierungsoptionen für Personenkonten

Es gibt noch eine sehr empfehlenswerte Einstellung, die in der FIBU Klassik vor der Verbuchung mit digitalen Belegen aktiviert werden kann. Mittles dieser können Sie ausgelesene UID-Nummern oder Kundennummern auf den Belegen automatisch in den Stammdaten der Kreditoren bzw. Debitoren einfügen lassen. Damit ersparen Sie sich die manuelle Hinterlegung.

Öffnen Sie hierzu den Menüpunkt *Stamm / Konten / Aktualisierungsoptionen*. Hier können Sie im Bereich nach DMS-Buchung aktivieren, dass nach dem Buchen von digitalen Belegen die Daten (IBAN, Kundennummer, UID) vom Beleg in die Kontenstammdaten übernommen werden.

![Aktualisierungsoptionen](<img/image3.png>)

## Buchen

Für die Verbuchung der digitalen Belege in der normalen Verbuchung, muss im Vorbuchungsdialog einiges eingestellt werden.

- Bei der Auswahl **Monat/Jahr** muss das gewünschte Buchungsmonat ausgewählt werden. Zu beachten ist hier, es werden nur ungebuchte Belege beim Buchen angezeigt, bei welchen das Monat und das Jahr übereinstimmt. Wenn im Monat **00** ausgewählt wird, werden alle ungebuchten Belege in diesem Jahr angezeigt.
- Bei der Auswahl des **Belegkreises** muss der Belegkreis der digitalen Belege gewählt werden. Wenn Belege nicht mit dem gewählten Belegkreis übereinstimmen, werden diese nicht angezeigt. Falls kein Belegkreis gewählt wird, werden alle Belege zur Verbuchung ersichtlich sein.
- Damit die Verbuchung von Belegen möglich ist, muss das Häkchen **DMS-Belege** aktiviert werden, hier wird das Häkchen **automatisch** auch empfohlen. Es kann dann auch gewählt werden, dass die Fremdbelegnummer manuell eingegeben werden kann, sowie das die Belegnummer als OP-Nummer vorgeschlagen wird.
- Falls die **Eingabe des Valuta-Datums** ausgewählt wird, kann hier noch das Häkchen **Belegeingangsdatum als Valutadatum verwenden** gesetzt werden.

![Vorbuchungsdialog](<img/image1.png>)

Nachdem die Optionen getroffen und das Häkchen **DMS-Belege** aktiviert wurde, kann die Verbuchung gestartet werden.
Im Anschluss öffnet sich der Buchungsdialog, sowie ein Fenster für die ungebuchten Belege.

Mittels der **rechten Maustaste** oder der **F6-Taste** im Datumsfeld, kann der DMS-Vorschlag aktiviert werden. Den DMS-Vorschlag kann man mittles der **Umschalt+F8-Taste** wieder beenden.

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


## Retourdaten verbuchen mit Belegen

Beim Buchen von Retourdaten ist es möglich, Belegen automatisiert den Bankbuchungen aufgrund verschiedener Kritierien zuzuordnen.
Damit diese automatische Zuordnung erfolgen kann, muss in den Stammdaten der Bankverbindung, das Häkchen **Beleg automatisch zuordnen** im Registerblatt *Retourdaten 2* aktiviert werden. Dabei kann in Prozent angegeben werden, wie weit der Zahlungsbetrag vom Belegbetrag abweichen darf um richtig zugeordnet zu werden.

![Beleg automatisch](<img/image19.png>)


Beim Einsteigen in die Verarbeitung von Retourdaten muss nach Auswahl der Auszüge noch das Häkchen **DMS-Belege zuordnen** ausgewählt werden.

![Häkchen zuordnen](<img/image20.png>)


Die **DMS-Verbuchung** kann dann mit der **rechten Maustaste / DMS-Verbindung starten** auf die Buchung oder mit der **Umschalt+F9** Funktion gestartet werden. Aufgehoben kann sie mittels der **rechten Maustaste / DMS-Verbindung aufheben** oder mit der **Umschalt+F9** werden.
Der Beleg kann dann, nachdem die **DMS-Verbindung** gestartet wurde, hinzugefügt werden. Dabei muss der Beleg in der Belegliste ausgewählt und dann per **DMS-Beleg zuordnen** an die Buchung angehängt werden.

![Belege zuordnen](<img/image21.png>)

### Reihenfolge der automatischen Zuordnung von Belegen

1. Der **Betrag** stimmt zwischen Belegdaten und Bankbuchung überein (bzw. mit eingestellter maximaler Abweichung, z.B. für Skonti) und die **ausgelesene Zahlungsreferenz am Beleg** entspricht der **Zahlungsreferenz der Bankbuchung**.

2. Der **Betrag** stimmt überein (bzw. mit eingestellter maximaler Abweichung, z.B. für Skonti) und der **ausgelesene IBAN am Beleg** entspricht dem **IBAN der Bankbuchung**.

3. Der Betrag stimmt überein (bzw. mit eingestellter maximaler Abweichung, z.B. für Skonti) und die **ausgelesene Belegnummer am Beleg** entspricht der **Zahlungsreferenz der Bankbuchung**.
   
4. Der **Betrag** stimmt überein (bzw. mit eingestellter maximaler Abweichung, z.B. für Skonti) und die **ausgelesene Belegnummer am Beleg** wird als **Teil des Verwendungszwecks der Bankbuchung** gefunden.


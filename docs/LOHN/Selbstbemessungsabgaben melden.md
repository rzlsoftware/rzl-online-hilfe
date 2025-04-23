# Selbstbemessungsabgaben melden

Seit dem 01.02.2016 werden von den Banken die eingescannten Zahlungsanweisungen nicht mehr an die Finanzämter weitergeleitet. Dies bedeutet, dass keine Möglichkeit mehr besteht, über ausgedruckte SEPA-Zahlungsanweisungen die Meldung der Selbstbemessungsabgaben zu erledigen.

Folgende Alternativen stehen dafür zur Verfügung.

## Erstellung einer SEPA-Finanzamts-Überweisungsdatei

Wie schon bisher kann über die Funktion *Bearbeiten / Electronic Banking (SEPA)/Abgaben* eine Überweisungsdatei erstellt werden.

![Image](<img/image508.png>){width="500"}

Die vom Programm erstellte xml-Datei muss dann über das jeweilige Telebanking-Programm der Bank importiert und abgezeichnet werden. Die Abgaben gelten dadurch bei Finanz-Online sowohl als gemeldet, als auch als überwiesen.

## Meldung der Selbstbemessungsabgaben in Finanz-Online

Für jene Klienten, die weiterhin die SEPA-Zahlungsanweisungen (Zahlscheinvordrucke) zur Zahlung einsetzen möchten, muss über diesen Weg die Meldung der Selbstbemessungsabgaben erfolgen.

Vor dem erstmaligen Einsatz dieses Programmteiles muss im Programmteil *Stamm / Klient* im Registerblatt *Finanzamt* die Option *Selbstbemessungsabgaben übermitteln* aktiviert werden. Anschließend stehen über *Bearbeiten / Elektronische Meldung Selbstbemessungsabgaben* die beiden Optionen *Meldung zur Buchung von Selbstbemessungsabgaben erstellen* und *Meldung zur Zahlung von Selbstbemessungsabgaben erstellen* zur Verfügung.

![Image](<img/image509.png>){width="500"}

Über die Schaltfläche *zum Senden* bzw. über den Programmteil *Klient / Elektronische Meldung Selbstbemessungsabgaben / Meldung zur Buchung von Selbstbemessungsabgaben absenden* wird der gewohnte Übermittlungsdialog geöffnet.

![Image](<img/image510.png>){width="500"}

Über *Senden* stellt die RZL-Lohnverrechnung eine Verbindung mit der Homepage von Finanz-Online her. Nach dem Login ist über *Eingaben / Übermittlung* die Option *Buchung von Selbstbemessungsabgaben* anzuwählen. Mit Hilfe der Schaltfläche *Durchsuchen* kann abschließend über die Tastenkombination *Strg + V* die Datei eingefügt und übermittelt werden.

!!! warning "Hinweis"
    Bei der Variante *Meldung zur Buchung von Selbstbemessungsabgaben* werden die Abgaben sofort auf dem Steuerkonto des Abgabenpflichtigen gebucht. Eine weitere Meldung (z. B. manuell über Finanz Online oder über die Sepa-Überweisungsdatei) würde zu einer Doppelbuchung auf dem Steuerkonto führen und sollte daher unbedingt vermieden werden.

**Meldung zur Zahlung von Selbstbemessungsabgaben**

Die Vorgehensweise sieht grundsätzlich genau gleich aus, wie bei der Option *Meldung zur Buchung von Selbstbemessungsabgaben*.

Bei dieser Variante der Meldung hat der Abgabenpflichtige die Möglichkeit aus Finanz-Online heraus, mithilfe der Verbindung zu den Online-Zahlungssystemen der Banken eine Zahlung auszulösen.

Für beide Varianten gilt, dass die Meldungen für die verschiedenen Klienten einer Kanzlei in einer gemeinsamen Datei an Finanz-Online übermittelt werden können.

**Meldung mittels BOARD übermitteln**

Jene Kunden, die das *RZL BOARD* verwenden, können die Meldungen an FinanzOnline mit Hilfe des im *RZL BOARD* hinterlegten
Webservice-Zugangs durchführen. Die Eingabe der FinanzOnline Zugangsdaten auf der FinanzOnline Homepage entfällt auch bei diesen Übermittlungen.

Der Webservice-Zugang ist ein im *Kanzleiinformationssystem KIS* im Bereich *Verwaltung / FinanzOnline / USP-Zugänge* zu hinterlegender FinanzOnline Zugang, der ausschließlich für die technische Abwicklung des Übermittlungsvorgangs genutzt wird. Für jene Kunden, die mit der Webservice-Übermittlung bereits in der *RZL-Finanzbuchhaltung* bzw. im *RZL-Steuererklärungsprogramm* arbeiten, sind keine weiteren Anpassungen im *RZL Board* bzw. *KIS* nötig.

Für eine erfolgreiche Übermittlung sind 2 Arbeitsschritte durchzuführen:

- **Erstellung** der Meldung über den neuen Menüpunkt *Bearbeiten / RZL   Board FinanzOnline Übermittlungen* und zwar direkt aus der *RZL-Lohnverrechnung* heraus.

- **Senden** der Meldung über FinanzOnline direkt aus dem *RZL BOARD* im Bereich *Portale*

Sie können aus der *RZL – Lohnverrechnung* über *Bearbeiten / RZL BOARD / FinanzOnline Übermittlung* die Übermittlungen erstellen:

![Image](<img/image328.png>){width="600"}

Über den Menüpunkt *Klient / RZL Board FinanzOnline* *Übermittlungen* können diese Meldungen auch Klientenübergreifend an das *RZL Board* übergeben werden.

Im *RZL BOARD* finden Sie im Modul *PORTALE* die Funktion *FinanzOnline Übermittlungen.* Dort werden Ihnen drei unterschiedliche Listen angezeigt:

- Offene Übermittlungen

    Hier werden alle in der Kanzlei aus der *RZL Lohnverrechnung* bzw. *RZL FIBU/ERKL* in das *RZL BOARD* erstellten aber noch nicht gesendeten Übermittlungen angezeigt.

- Geplante Übermittlungen

    Hier werden alle Übermittlungen angezeigt, für die ein geplantes Übermittlungsdatum in der Zukunft gesetzt wurde.

- Gesendete Übermittlungen

    Dieser Dialog zeigt alle bereits gesendeten Übermittlungen an.

![Image](<img/image329.png>){width="600"}

Nach Anwahl der Funktion ***offene Übermittlungen*** gelangen Sie in die Übersicht der erstellten aber noch nicht gesendeten (offenen) FinanzOnline Übermittlungen. Hier werden alle in der Kanzlei in das *RZL BOARD* gestellten Übermittlungen angezeigt. Beachten Sie, dass in der Liste für einzelne Mitarbeiter aufgrund eingeschränkter Sichtbarkeitsrechte nicht alle Klienten aufscheinen können. Über das Auswahlkästchen können Sie die Übermittlungen auswählen.

Wenn Sie die Übermittlungen einschränken wollen (z.B. auf einen bestimmten Zeitraum) können Sie dies über die Filterfunktion in den Spaltenüberschriften der Liste erreichen.

Über die Schaltfläche ***Senden*** werden die Übermittlungen abgesendet. Die Übermittlung kann nur von *KIS-Administratoren*, sowie Mitarbeitern mit der Berechtigung *darf FinanzOnline-Übermittlungen durchführen* abgesendet werden.

![Image](<img/image330.png>)

Im Registerblatt ***Gesendete Übermittlungen*** werden Ihnen unter der Liste *FinanzOnline Gesendete Übermittlungen* sämtliche bereits übertragenen Meldungen angezeigt. Auch hier können Sie die gewohnten Filter- und Sortierfunktionen des *RZL Board* einsetzen.

![Image](<img/image331.png>)

Über den Menüpunkt ***Geplantes Übermittlungsdatum setzen*** können Sie nach Auswahl einer Übermittlung ein Übermittlungsdatum **in der Zukunft** setzen. Ab Erreichen des Übermittlungsdatums wird diese Erklärung automatisch in die Liste der offenen Übermittlungen gestellt. Dieser manuelle Wechsel ist auch in die umgekehrte Richtung möglich.

In der Liste der offen und geplanten Übermittlungen können Sie für Ihre eigenen Übermittlungen **löschen** bzw. ein **Übermittlungsdatum setzen** und **entfernen**. Der RZL Administrator kann auch für fremde Übermittlungen ein geplantes Übermittlungsdatum setzen bzw. diese löschen.

In allen Listenansichten können Sie sich durch einen Doppelklick auf eine Zeile die Details der jeweiligen FinanzOnline-Übermittlung entweder in der RZL-Ansicht oder in der XML-Ansicht anzeigen lassen. In der Kopfzeile der Ansicht können Sie die Übermittlung drucken, in den *RZL PDF Manager* übergeben, oder nach bestimmten Werten suchen.

![Image](<img/image332.png>)


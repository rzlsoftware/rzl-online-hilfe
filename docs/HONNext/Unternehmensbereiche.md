# Unternehmensbereiche

Ein Unternehmensbereich ist zum Beispiel Ihre Kanzlei. Wenn Sie die
Honorarnoten auf unterschiedliche Kanzleien/Bereiche aufteilen, können
Sie auch mehrere Unternehmensbereiche haben. Ein Unternehmensbereich ist
also sozusagen der Rechnungssteller der Honorarnoten, die Sie schreiben.

Ihre Unternehmensbereiche befinden sich **im Board** unter der Rubrik
*Stamm **(1)** – Unternehmensverwaltung – Unternehmensbereiche*. Wurde
dieser Punkt von Ihnen ausgewählt, so öffnet sich ein eigener Tab für
die Unternehmensbereiche.

!!! warning "Hinweis"
    Die Unternehmensbereiche können nur bearbeitet werden, wenn Sie im
    Berechtigungssystem eine Rolle mit der Eigenschaft *Unternehmensbereiche
    verwalten* zugeordnet haben.

![](<img/image100.png>)

Ein neuer Unternehmensbereich kann über den Button *Neuer
Unternehmensbereich* im Ribbon **(2)** oder im rechten unteren Bereich
angelegt werden.

Bei der Neuanlage eines Unternehmensbereichs müssen Sie die Bezeichnung
des Unternehmensbereichs und die Klienten-Zuordnung entsprechend
treffen. Des Weiteren können die Adresse, Telefonnummer, E-Mail-Adresse
und Bankverbindung hinterlegt werden. Über den Button *zur
Klientenansicht* gelangen Sie in die Stammdaten des Klienten und über
den Button *zur Firmenansicht* gelangen Sie zur Firmenansicht.

![](<img/image101.png>)

Im Bereich *HON* können Sie für den Unternehmensbereich den zugehörigen
Nummernbereich (siehe Kapitel [Nummernbereich](../HONNext/Stammdaten%20HON%20Next/Nummernbereiche.md)), die
zugehörige Notenvorlage **(1)** und die Zahlungsbedingungen **(2)** hinterlegen. Ebenso
ist die Hinterlegung eines PDF-Briefpapiers **(3)** möglich. Bei *Briefpapier*
ist der Pfad, wo das Briefpapier abgespeichert ist, zu definieren.

!!! warning "Hinweis"
    Das hinterlegte Briefpapier wird für die Ausgabe der Note verwendet
    (Druckvorschau, Ausgabe Beleg, Ausdruck in den PDF-Manager sowie auch
    beim Ausdruck auf Papier).

![](<img/image102.png>)

Im Feld Zahlungsreferenz **(3)** kann die Zahlungsreferenz definiert werden. Die definierte Zahlungsreferenz wird auf der Honorarnote angedruckt, im QR-Code Feld "Reference" gesetzt und im Beleg als OP-Nummer übergeben.

In diesem Feld können alle Ziffern (0-9) und die Buchstaben O und K und X eingetragen werden.

- Der Buchstabe O steht für eine Stelle der Honorarnotennummer (OP-Nummer). Die Notennummer kann maximal 9-stellig sein.

- Der Buchstabe K steht für eine Stelle der Kontonummer. Wird in den Stammdaten des Klienten keine Kontonummer eingetragen, wird die Klientennummer eingetragen. Die Kontonummer kann maximal 9-stellig sein.

- Nicht verwendete Felder können mit X bezeichnet werden. Am Ausdruck werden mit X bezeichnete Felder als (null) 0 dargestellt.

Beispiel: OOOOOOKKKKKK Notennummer 129 Kontonummer 20005
Ausgabe: 00012920005

!!! warning "Hinweis"
    Ist im Unternehmensbereich keine Zahlungsreferenz definiert, wird die Notennummer als Zahlungsreferenz verwendet.

Die Klienten Zuordnung erfolgt über den Menüpunkt *Klienten zuordnen.*
Sie können im Anschluss die gewünschten Klienten durch Setzen eines
Hakens markieren und entsprechend zuordnen. Eine weitere Möglichkeit den
Klienten einem Unternehmensbereich zuzuordnen ist im BOARD in den
Stammdaten des Klienten. Auch hier können Sie unterhalb dem zugeordneten
Betrieb den Unternehmensbereich zuordnen.

![](<img/image103.png>)

Über den Button „*Unternehmensbereich löschen*“ oder über das
Kontextmenü können Sie Unternehmensbereiche löschen. Dies ist jedoch nur
möglich, falls der Unternehmensbereich nicht mehr in der Datenbank
verwendet wird.
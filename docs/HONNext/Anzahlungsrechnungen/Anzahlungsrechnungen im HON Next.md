# Anzahlungsrechnungen im HON Next

## Einstellungen
Möchte man über HON Next Anzahlungsnoten erstellen, muss zuerst im HON Next über *Einstellungen / Grundeinstellungen* die Option *Anzahlungsnoten* (1) aktiviert werden. Zusätzlich sind in den Grundeinstellungen die *Anzahlungskonten* (2) zu hinterlegen.

![](<img/image2.png>)

!!! warning "Hinweis"
    Das Konto für Anzahlungen mit T20 ist nur relevant, wenn Sie in der FIBU Soll-Versteuerer sind und im Unternehmensbereich die Teilrechnungsverbuchung aktiviert haben.

Weiters kann über *Stamm / Unternehmensverwaltung / Unternehmensbereiche* bei den jeweiligen Unternehmensbereichen im Reiter HON die Option Teilrechnungsverbuchung (3) aktiviert werden.

!!! warning "Hinweis"
    Diese Option darf nur gesetzt werden, wenn Sie in der FIBU nach der Soll-Versteuerung buchen und *Schlussrechnung in voller Höhe* aktiviert haben.

![](<img/image3.png>)

## Anlage der Anzahlung
Anzahlungen können über *Akonto / Anzahlungen / Anzahlungen* oder über *Wiederkehrende Anzahlungen* angelegt werden. Wiederkehrende Anzahlungen sind anzulegen, wenn der Klient z.B. monatlich eine Anzahlung leistet.

## Anlage einer einmaligen Anzahlung
Steigen Sie über *Akonto/Anzahlungen / Anzahlungen* ein. Mit der Schaltfläche *Neue Anzahlung* können Sie eine neue Anzahlung anlegen. Eine Anzahlungszeile besteht aus den folgenden Feldern: Datum, Klient, Verrechnungsgruppe, Projektzeitraum, geplanter Leistungszeitraum und Betrag (vgl. [Anlage einer wiederkehrenden Anzahlung](/HONNext/Anzahlungsrechnungen/Anzahlungsrechnungen%20im%20HON%20Next/#anlage-einer-wiederkehrenden-anzahlung))

!!! warning "Hinweis"
    Wird die Option Anzahlungsnote gesetzt, wird die Anzahlung wie eine Anzahlungsrechnung im HON Next behandelt – siehe nachfolgende Erläuterungen. Wird die Option nicht gesetzt, wird die Anzahlung wie eine Akontozahlung (vgl. Kapitel 13, Seite 116) behandelt.

## Anlage einer wiederkehrenden Anzahlung
Steigen Sie über *Akonto/Anzahlungen / Wiederkehrende Anzahlungen* ein. Der Bildschirm der wiederkehrenden Anzahlungen teilt sich in zwei Hälften. Links (1) sind die bereits angelegten wiederkehrenden Anzahlungen zu sehen. Rechts (2) sehen Sie die Details zur Anzahlungszeile.
Mit der Schaltfläche *Neue wiederkehrende Anzahlung* (3) kann eine neue regelmäßig wiederkehrende Anzahlungszeile angelegt werden.

![](<img/image4.png>)

**Daten der Anzahlungszeile:**

**Verrechnungsgruppe:**
Leistet der Klient z.B. explizit für die Buchhaltung eine Anzahlung, kann die Verrechnungsgruppe hinterlegt werden. Die Verrechnungsgruppe ist kein Pflichtfeld.

**Häufigkeit:**
Hier definieren Sie, wie oft die Anzahlung geleistet wird. Bsp. 1 = monatlich, 3 = quartalsweise, 6 = halbjährlich und 12 = jährlich usw.

**Datum der nächsten Zeile:**
Hier definieren Sie, mit welchem Datum (Leistungsdatum) die nächste Anzahlungszeile vom RZL Dienst generiert werden soll, z.B. immer mit dem ersten des Monats.

**Betrag:**
Tragen Sie die Höhe der Anzahlung ein.

**Anzahlungsnote:**
Diese Option legt fest, ob die erstellten Anzahlungen bei der Erstellung von Anzahlungsnoten im HON Next berücksichtigt werden sollen. Ist hier kein Haken, wird die Anzahlung nach dem alten System (also wie Akontozahlungen) behandelt.

**Geplanter Leistungszeitraum:**
Beim geplanten Leistungszeitraum handelt es sich um die Zeitspanne, in welcher die Leistungen vermutlich erbracht werden.

Beim Zeitraum stehen folgende Optionen zur Verfügung:
• Nächster Monat: Datum der nächsten Zeile + 1 Monat
• Nächstes Jahr: Datum der nächsten Zeile + 1 Jahr
• Aktuelles Jahr: Jahr vom Datum der nächsten Zeile
• Monat abweichend: ausgehend vom Datum der nächsten Zeile können X Monate hinzugerechnet werden
• Jahr abweichend: ausgehend vom Datum der nächsten Zeile können X Jahre hinzugerechnet werden

**Projektzeitraum:**
Beim Projektzeitraum handelt es sich um den Zeitraum, für welchen die Leistungen erbracht werden.

**Zeiteinheiten:**
Die Zeiteinheit definiert, ob die Buchhaltung z.B. monatlich oder quartalsweise ist.
• *Abweichung:* Hinterlegen Sie hier, für welchen Projektzeitraum die Anzahlungen abgerechnet werden sollen. Mit einem negativen Vorzeichen kann der Projektzeitraum nach hinten verschoben werden. Ohne Vorzeichen kann der Projektzeitraum nach vorne verlagert werden.

• *Beginn neuer Zeitraum:* Diese Einstellung kann nur bei der Zeiteinheit Jahr getroffen werden. Mit dem Beginn des neuen Zeitraumes können Sie einen abweichenden Beginn für den Projektzeitraum festlegen.

**Text:**
Grundsätzlich erhält die Anzahlungszeile den Text "Anzahlung + Verrechnungsgruppenname", wenn diese hinterlegt wurde. Über das Feld Text kann hier etwas Abweichendes eingetragen werden. Soll der abweichende Text auch auf der Note angedruckt werden, ist der Text mit der rechten Maustaste in die Honorarnote zu übernehmen. Der zu übernehmende Text ist gelb hinterlegt.

**Anmerkung:**
Dieses Feld steht Ihnen für interne Bemerkungen zur Verfügung.

Nachdem Sie die Anzahlungszeile angelegt haben, können Sie direkt unterhalb (4) die Klienten zuordnen.

Mit Speichern (5) werden die Anzahlungszeile und die Zuordnung gespeichert.

Nachdem die Daten der wiederkehrenden Anzahlung eingegeben und gespeichert wurden, können über die Schaltfläche Anzahlungen generieren (6) die dazugehörigen Anzahlungszeilen generiert werden.

![](<img/image5.png>)

Es werden die Anzahlungszeilen bis zum aktuellen Tagesdatum angehakt. Fortlaufend werden, nur bei aktivem RZL Dienst, die Zeilen automatisch je Monat/Quartal etc. erzeugt. Es werden für alle zugeordneten Klienten die Anzahlungszeilen erzeugt. Für welche Klienten, ist in der Anzahlungsvorschau über den Pfeil (7) ersichtlich.

!!! warning "Hinweis"
    Damit wiederkehrende Anzahlungen vom Programm generiert werden können, ist es nötig, dass der RZL Dienst aktiv ist (siehe SETUP Handbuch Kapitel 12.10.2).
    Ersichtlich über das grüne Glockensymbol in der oberen rechten Ecke:
    ![](<img/image6.png>)

![](<img/image7.png>)

!!! warning "Hinweis"
    Die Anzahlungszeilen müssen nur über die Schaltfläche Anzahlungen generieren erzeugt werden, wenn sie in der Vergangenheit liegen und gleich abgerechnet werden sollen, ansonsten werden die Zeilen monatlich/quartalsweise etc. über den RZL Dienst erzeugt.

Die vom RZL Dienst generierten Anzahlungszeilen finden Sie über *Akonto/Anzahlungen / Anzahlungen*. In dieser Ansicht sind alle automatisch generierten Anzahlungszeilen sowie auch einmalig manuell erstellte Anzahlungszeilen ersichtlich. Solange die Anzahlungen nicht verrechnet wurden, können sie hier auch noch bearbeitet werden.

![](<img/image31.png>)

!!! info "Tipp"
    In der Spalte Anzahlungsnote sieht man, ob die erstellten Anzahlungen bei der Erstellung von Anzahlungsnoten im HON Next berücksichtigt werden. Ist hier kein Haken, wird die Anzahlung nach dem alten System (also wie Akontozahlungen) behandelt.

!!! info "Tipp"
    In der Spalte Status sieht man, ob die Anzahlungszeile offen ist, im Zuge einer Anzahlungsnote verrechnet wurde oder auch schon in einer Schlussnote berücksichtigt wurde.

!!! info "Tipp"
    Die Anzahlungen können Sie gruppieren und/oder filtern. Das Layout der Auswertung können Sie speichern (siehe [Speicherbare Layouts](/HONNext/Auswertungen/Speicherbare%20Layouts)).
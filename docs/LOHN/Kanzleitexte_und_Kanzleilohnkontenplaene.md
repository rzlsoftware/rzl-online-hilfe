# Kanzleitexte und Kanzleilohnkontenpläne

Das RZLWin-Lohnprogramm bietet Ihnen die Möglichkeit, Standardtexte für den Abrechnungsbildschirm *[Austritt](../LOHN/Abrechnungsbildschirme/Austritt.md), Dienstzettel-Texte* und *Abrechnungs-Texte* sowohl klientenbezogen zu erstellen und zu verwalten als auch für alle Klienten als Kanzleitexte zur Verfügung zu stellen.

!!! info "Tipp"
    Im Programmteil *Klient / Kanzlei / Texte von Klient übernehmen* besteht die Möglichkeit, beim einzelnen Klienten angelegte Standard-, Dienstzettel- oder Abrechnungstexte als Kanzleitexte-Tabelle anzulegen.

    Innerhalb des Klienten besteht im Programmteil *Stamm / Texte von Kanzlei-Tabelle übernehmen* die Möglichkeit, eine Kanzleitexte-Tabelle auf den Klienten zu übertragen.

## Kanzleitexte

Durch Anwahl des Menüpunkts *Klient / Kanzlei / Texte* erscheint folgender Dialog:

![Image](<img/image171.png>){width="500"}

Im Registerblatt *Tabelle* wird der Name des *Kanzleitextes* festgelegt. Nach Eingabe der *Bezeichnung* können in den Registerfeldern *Standard-Texte,* *Dienstzettel-Texte* *und Abrechnungs-Texte* die gewünschten Texte eingegeben werden.

Diese Kanzlei-Texte, die in diesem Menüpunkt festgelegt werden, können wenn gewünscht, bei jedem Klienten verwendet werden. Voraussetzung für die Verwendung beim Klienten ist die Aktivierung des Auswahlfeldes [*Kanzleitexte*](../LOHN/Klientenstammdaten/Stammdaten_Klient/LA_Formeln_Texte_Kontenplan_Beitraege_Waehrung.md) mit Eingabe der gewünschten Nummer im Registerblatt *LA, Texte, Kontenplan usw.* des Menüpunkts *Stamm / Klient.*

**Standardtexte**

Im Registerblatt Standardtexte können bis zu 20 Standardtexte mit einer Länge von maximal 20 Zeichen angelegt werden. Die Standardtexte können wie folgt verwendet werden:

- **Sonstiger Austrittsgrund**

    Im Programm ist im Abrechnungsbildschirm [*Austritt*](../LOHN//Abrechnungsbildschirme/Austritt.md) bereits eine umfangreiche Liste mit Austrittsgründen verankert. Um einen Kanzleitext verwenden zu können, muss der Austrittsgrund *sonstiger Grund* gewählt werden. Nach Anwahl des sonstigen Grundes wird ein zweites Auswahlfeld geöffnet, in dem nun zwischen den unter der ausge­wählten Standardtext-Tabelle angelegten Kanzleitexten ausgewählt werden kann.

- **Grund der Unterbrechung der Beschäftigung**

    Ebenfalls im Abrechnungsbildschirm [*Austritt*](../LOHN/Abrechnungsbildschirme/Austritt.md) ist im Falle einer Unterbrechung der Beschäftigung der Grund für diese Unterbrechung einzugeben. In diesem Auswahlfeld sind im Programm keine Vorschläge angelegt, sondern es wird, wenn vorhanden und aktiviert, sofort auf die Kanzleistandard-Texte zurückgegriffen.

**Dienstzetteltexte**

Die Kanzlei-Dienstzetteltexte finden Verwendung im Abrechnungsbildschirm [*Dienstzettel*](../LOHN/Abrechnungsbildschirme/Dienstzettel.md) in den Feldern *Kündigung* und *Sonstiges.* In diesen Feldern ist nur die Nummer des gewünschten Textes einzugeben und die Eintragung auf dem Dienstzettel erfolgt automatisch.

Es können bis zu 99 Standardtexte für den Dienstzettel mit bis zu je 4 Zeilen Text angelegt werden.

**Abrechnungstexte**

In diesem Registerblatt können bis zu 20 Kanzlei-Abrechnungstexte angelegt werden. In den Stammdaten des Klienten können im Registerblatt [*Abrechnungstexte*](../LOHN/Klientenstammdaten/Stammdaten_Klient/Abrechnungstexte_Buchungskreistexte.md) maximal zwei der angelegten Abrechnungstexte mit einer zeitlichen Begrenzung ausgewählt werden. Die ausgewählten Abrechnungstexte werden auf den monatlichen Lohnabrechnungen der Dienstnehmer des jeweiligen Klienten links unten im Bereich des Auszahlungsbetrages angedruckt.

Abrechnungstexte können auch dienstnehmerbezogen im Abrechnungsbildschirm [*Stammdaten Fristen*](../LOHN/Abrechnungsbildschirme/Stammdaten_Fristen.md) eingetragen werden.

Insgesamt können somit 4 Abrechnungstexte auf den Abrechnungen der Dienstnehmer platziert werden. Zwei Abrechnungstexte klientenbezogen (kanzlei- oder klientenbezogene Abrechnungstexte) und 2 Abrechnungstexte dienstnehmerbezogen im Abrechnungsbildschirm *Stammdaten* *Fristen.*

### Klientenbezogene Standardtexte

Die Anlage von klientenbezogenen Standardtexten erfolgt im Menüpunkt *Stamm / Standardtexte.* Es können 20 Standardtexte mit bis zu je 20 Zeichen eingegeben werden.

Die hier angelegten Standardtexte können nur bei dem Klienten verwendet werden, bei dem sie auch angelegt wurden. Die klientenbezogenen Standardtexte finden ebenso wie die Kanzlei-Standardtexte Anwendung im Abrechnungsbildschirm [*Austritt*](../LOHN/Abrechnungsbildschirme/Austritt.md).

### Klientenbezogene Dienstzetteltexte

Die Funktion der klientenbezogenen Dienstzetteltexte ist dieselbe, wie jene der Kanzlei-Dienstzetteltexte. Sie können jedoch nur bei dem Klienten verwendet werden, bei dem sie angelegt wurden. Erstellt werden diese Texte im Menüpunkt *Stamm / Standardtexte Dienstzettel*, wobei wiederum 99 Texte mit bis zu je 4 Zeilen Texteingabe angelegt werden können.

### Klientenbezogene Abrechnungs-Texte

Insgesamt 20 Abrechnungstexte mit einer Länge von bis zu 30 Zeichen können im Programmteil *Stamm / Abrechnungs-Texte* klientenbezogen eingetragen werden. In den *Klientenstammdaten* im Registerblatt [*Abrechnungs-Texte*](../LOHN/Klientenstammdaten/Stammdaten_Klient/Abrechnungstexte_Buchungskreistexte.md) können wiederum jeweils zwei Abrechnungs-Texte für den Andruck auf den Abrechnungen der Dienstnehmer des jeweiligen Klienten ausgewählt werden.

## Kanzlei-Lohnkontenpläne

Im Programmteil *Klient / Kanzlei / Lohn-Kontenpläne* können für die fixen Lohnarten, die angelegten freien Lohnarten und für die Lohnarten der Werkverträge Kontonummern hinterlegt werden. Lediglich die Verbindlichkeitskonten der Behörden werden in den Stammdaten des Klienten (*Stamm / Klient*) eingetragen.

Im Registerblatt *Tabelle* wird die *Nummer* und die *Bezeichnung* des Kanzlei-Lohnkontenplanes eingetragen und die Anzahl der Belegkreise festgelegt.

Diese Kontonummern werden als Vorkontierung am [Buchungsbeleg](../LOHN/Ausdrucke_allgemein/Ausdruck_Journal_OEGK/Buchungsbeleg.md) angedruckt.

![Image](<img/image172.png>){width="500"}

Das Eingabefeld *Höchste Belegkreisnummer* orientiert sich an der Anzahl der verwendeten Buchungskreise, die im Abrechnungsbildschirm [*Stammdaten Fristen*](../LOHN/Abrechnungsbildschirme/Stammdaten_Fristen.md) eingetragen werden.

!!! warning "Hinweis"
    Höchste Belegkreisnummer 0 (null) bedeutet, dass nur ein Buchungsbeleg ausgedruckt werden soll. Höchste Belegkreisnummer 1 bedeutet, dass Platz für zwei Buchungskreise reserviert ist (0 und 1).

Nach Anwahl des Registerblattes *Konten fixe Lohnarten* wird folgender Dialog aufgerufen:

![Image](<img/image173.png>){width="500"}

Hier können die Kontonummern für die Lohnarten, die in den einzelnen Abrechnungsbildschirmen (*Fixe Lohnarten, Abzüge, Austritt*) fix hinterlegt sind, eingetragen werden. Die Eintragung der Kontonummer erfolgt für die jeweils farblich hinterlegte Zeile.

!!! info "Tipp"
    Die Eingabe der Kontonummern im Registerblatt *Konten Werkverträge* erfolgt ebenfalls, wie oben beschrieben.

Die Kontonummern der freien Lohnarten werden im Registerblatt *Konten freie Lohnarten* eingetragen:

![Image](<img/image174.png>){width="500"}

Als erster Schritt ist im Eingabefeld *Konto* die gewünschte Kontonummer einzutragen. Dann können entweder die beim Klienten angelegten Lohnarten durch Anwahl der *F2-Taste* oder eine Kanzleilohnarten-Tabelle durch Anwahl der *F3-Taste* aufgerufen werden.

![Image](<img/image175.png>){width="500"}

Werden die Klienten-Lohnarten aufgerufen, dann ist im nächsten Bildschirm die Klientennummer einzutragen. Wird eine Kanzlei-Lohnarten-Tabelle aufgerufen (siehe oben), ist die Nummer der Kanzlei-Lohnarten-Tabelle einzutragen.

!!! info "Tipp"
    Mit der *F2-Taste* können sowohl die Klienten, als auch die Kanzlei-Lohnarten-Tabellen aufgerufen und angewählt werden.

Nach Eingabe der Klientennummer oder der Nummer der Kanzlei-Lohnarten-Tabelle werden die angelegten Lohnarten aufgelistet und können mittels *Cursor* oder *Leertaste* angewählt werden.

Durch Anwahl der Schaltfläche *Übernehmen* werden die angewählten Lohnarten (Häkchen im Kästchen) in das Eingabefeld *Lohnarten* im oben angeführten Bildschirm übernommen.

!!! info "Tipp"
    Sind die Nummern der Lohnarten bekannt, dann können diese auch direkt in das Feld *Lohnarten* eingetragen werden.

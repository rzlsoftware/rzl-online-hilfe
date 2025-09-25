# Electronic Banking SEPA

Im Programmteil *Bearbeiten / Elektronic Banking (SEPA)* können Sie Überweisungsdateien für die Abrechnungen der Dienstnehmer, für die Zahlungen an die Behörden (Abgaben) und für die mit dem Exekutionsmodul errechneten Exekutionsbeträge erstellt werden.

## Electronic-Banking Abrechnungen Inland

Durchgeführte Überweisungen von Lohnabrechnungen werden bei den einzelnen Dienstnehmern vermerkt. Damit ist sichergestellt, dass eine Überweisung nicht zweimal erfolgen kann. Ist es erforderlich, dass Sie die Überweisung nochmals ausdrucken bzw. die Überweisungsdatei nochmals erstellen, müssen Sie vorher ein [*Repair*](../LOHN/Repair.md) der Überweisungen durchführen.

![Image](<img/image212.png>){width="500"}

Im Eingabefeld *Monat* legen Sie fest, für welchen Monat die Überweisungen durchgeführt werden sollen. Anschließend müssen Sie festlegen, für welche Dienstnehmer überwiesen wird.

Für die Überweisung legen Sie nun fest, von welchem [Bankkonto](../LOHN/Klientenstammdaten/Stammdaten_Klient/Bank_Ueberweisung_Zahltag.md) (*Dienstgeber-Banken)* die Zahlung erfolgen soll.

**Dienstnehmer alphabetisch sortiert**

Die Dienstnehmer können wahlweise alphabetisch sortiert in die Datei übernommen werden.

**Ausgabe über RZL PDF-Drucker**

Wird dieses Feld angewählt, erfolgt die Ausgabe des Überweisungsprotokolls als PDF-Format.

**ohne Umlaute ausgeben**

Bei ausländischen Banken können sich Probleme ergeben, wenn Umlaute in die Datei mitausgegeben werden. Die Anwahl dieses Feldes ersetzt folgende Zeichen (ä = a, ü =u, ö = o, ß = s).

**Echtzeitüberweisung**

Mit diesem Auswahlfeld geben Sie an, dass Sie die Überweisung in Echtzeit durchführen möchten.

**Sammelüberweisung**

Diese Auswahl bewirkt, dass auf dem Kontoauszug nicht jeder Dienstnehmer einzeln ausgewiesen wird, sondern nur eine Summe dargestellt wird. Für die Sammelüberweisungen kann im Onlinebanking-Programm ein Detailausdruck ausgegeben werden.

**Dateiname**

Im Feld *Dateiname* ist festzulegen, wo (auf welchem Laufwerk, in welchem Ordner) die Überweisungsdatei mit welcher Bezeichnung (z. B. Lohn Feb 2020) vom Lohnprogramm erzeugt werden soll.

**Durchführungsdatum**

In dieses Feld ist das Datum der Durchführung einzugeben. Dieses Datum muss aufgrund des Datenträger-Begleitzettels von der durchzuführenden Bank berücksichtigt werden.

Nach der vollständigen Eingabe der Daten wird durch Anwahl der Schaltfläche *Überweisen* die Datei erzeugt.

**Benutzerdefinierte Auswahl des Formates der SEPA-Datei**

Nur in bestimmten Fällen muss hier für die Überweisung ein eigenes Rulebook ausgewählt werden. Ein Beispiel dafür wäre eine Überweisung von einem deutschen Bankkonto.

## Elektronic Banking Abgaben 

Der Vorgang der elektronischen Überweisung der Abgaben ist weitgehend derselbe, wie bei den Abrechnungen. Das letztmögliche Durchführungsdatum kann durch Anwahl der Option *letztmögliches Datum berechnen* automatisch errechnet werden.

## Elektronic Banking Exekutionsbeträge

Im RZLWin-Lohnverrechnungsprogramm können Sie Drittschuldnererklärungen anlegen. Innerhalb der betroffenen Dienstnehmer kann dann eine automatische Exekutionsberechnung vorgenommen werden.

Die errechneten Exekutionsbeträge können mittels Elektronic Banking überwiesen werden. Die Vorgehensweise ist wie bei Electronic-Banking Abrechnungen Inland.

Nach dem Erstellen der Datei wird vom Programm ein Sperrvermerk gesetzt, damit die Überweisung versehentlich nicht nochmals durchgeführt werden kann. Diese Sperre kann mittels [*Repair*](../LOHN/Repair.md) im Programmteil *Bearbeiten / Repair / Überweisungen / Sperre Exekutionsbeträge* wieder gelöscht werden, um eine neuerliche Überweisung zu ermöglichen.

!!! warning "Hinweis"
    Das Electronic Banking für Exekutionsbeträge funktioniert nur in Verbindung mit dem Exekutionsmodul.

## Elektronic Banking Sonstige Behörden

![Image](<img/image213.png>){width="500"}

Der Vorgang der elektronischen Überweisung der Sonstigen Behörden ist weitgehend derselbe wie bei den Abrechnungen. Sie können zwischen der Ausgabe *aller Behörden* und einzelner Behörden wählen.

## Händisches Erstellen einer Überweisung

Neben dem Zugriff auf Daten der Lohnverrechnung (Bezüge, Abgaben, Exekutionsbeträge) haben Sie die Möglichkeit, Überweisungen auch manuell zu erstellen. Die Vorgehensweise im ersten Registerblatt *Erstellung Überweisungsdatei* ist wie bei Electronic-Banking Abrechnungen Inland beschrieben.

Die Auswahl zwischen Klienten und Unterdienstgeber ermöglicht Ihnen den Zugriff auf unterschiedliche Dienstgeberbanken, wenn überhaupt vorhanden (Ausnahmefall).

- **Geschäftsvorfallcode** (nur bei händischer Erstellung)
  Falls die zu erstellenden Überweisungen einem speziellen Geschäftsvorfall zuzuordnen sind (z. B. Pension, Miete, Gehalt, ...), kann dieser aus einer vorgegebenen Liste ausgewählt werden. Diese Liste entspricht den Angaben der STUZZA. Der Code wird bis zur Empfängerbank und wenn der Empfänger Edifact-Daten entgegennimmt, bis zum Empfänger durchgeschleust. Der Empfänger hat sodann die Möglichkeit zu erkennen, in welchen Teilbereich seiner Buchhaltung er den Zahlungseingang zu buchen hat.

![Image](<img/image214.png>){width="500"}

Nach Anwahl der Schaltfläche *Erstellen* wird der nachfolgende Programmteil geöffnet. Hier besteht die Möglichkeit, die durchzuführenden Überweisungen einzutragen. Es können mehrere Überweisungen gleichzeitig in eine Datei aufgenommen werden.

![Image](<img/image215.png>){width="500"}

**Vorschlag**

Durch Anwahl des *Vorschlages* wird eine Liste der erfassten Sonstigen Behörden aufgerufen und es kann eine Behörde aufgerufen werden. Somit müssen die Empfängerdaten nicht immer wieder eingetragen werden.

**Empfänger**

- **Betrag**
  
    In diesem Feld können Sie den Überweisungsbetrag eintragen.

- **Zahlungsreferenz**

    Die *Zahlungsreferenz* kann aus maximal 35 Zeichen bestehen. Es können Groß- und Kleinbuchstaben, Leerzeichen und Sonderzeichen verwendet werden.

- **Name/Ort**

    Eingabe des *Namens* und des *Ortes* des Empfängers.

- **IBAN**

    Eingabe der internationalen Bank-Kontonummer. Diese muss für Österreich genau 20-stellig sein. Maximal kann diese jedoch 34 alphanumerische Zeichen umfassen.

    Die IBAN besteht aus

    - dem ISO 3166 Ländercode der Bankverbindung (also für in Österreich geführte Konten „AT")

    - einer zweistelligen Prüfziffer

    - dem nationalen Bank-Code (für Österreich die BLZ)

    - der Kontonummer

    In der Darstellung für den elektronischen Datenaustausch also LLppBBBBBKKKKKKKKKKK, wobei LL der Ländercode, pp eine rein numerische Prüfziffer, BBBBB die Bankleitzahl und KKKKKKKKKKK die Kontonummer ist. Bankleitzahl und Kontonummer können, abhängig vom Land, unterschiedlich lang sein und auch Alpha-Zeichen (in der elektronischen Darstellung aber keine Sonderzeichen und natürlich auch keine nationalen Sonderzeichen, wie Umlaute) enthalten. Es wird jedoch festgelegt, dass je Land die IBAN-Länge konstant ist.

- **BIC**

    Eintragung des BIC. Ist jedoch für Inlandszahlungen ab Rulebook 6.0. nicht mehr erforderlich.

**Verwendungszweck**

- **Zusatztext**

    Hier können Sie zusätzliche Textzeilen zur Beschreibung des Zahlungsgrundes eingeben.

    ![Image](<img/image216.png>){width="500"}

Nach Anwahl der Schaltfläche *Speichern* wird die Überweisung mit den wichtigsten Daten in das Listenfeld eingetragen.

Es können weitere Überweisungen erfasst werden. Ist die Erfassung vollständig, ist die Schaltfläche *Abbrechen* anzuwählen. Nachfolgend erfolgt die Abfrage, ob die Erstellung beendet werden soll.

Wird die Abfrage mit *JA* beantwortet, wird die Datei erstellt und die Überweisung(en) werden nochmals angezeigt.

Durch Anwahl der Schaltfläche *Weiter* erfolgt die endgültige Erstellung der Datei und der automatische Ausdruck eines Datenträgerprotokolls.

## Ausdruck Begleitzettel / Protokoll

Durch Anwahl von *Bearbeiten / Elektronic Banking (SEPA) / Protokoll/Begleitzettel* wird folgender Programmteil aufgerufen:

![Image](<img/image217.png>){width="500"}

Mit Hilfe dieses Programmteils können Sie ein Protokoll bezüglich der durchgeführten Überweisungen, die im Rahmen des Zahlungsverkehrs erstellt wurden, ausgeben. Dieses Protokoll dient lediglich zur Information.

**Protokoll erstellen**

Soll ein Protokoll der erstellten Überweisungen erstellt werden, ist dieses Auswahlfeld zu aktivieren.

**Begleitzettel erstellen**

Dieses Auswahlfeld ist zu aktivieren, falls ein Datenträger mit den zu überweisenden Beträgen erstellt werden soll.

**Datei**

Eingabe des Namens der Datei, welche die Überweisungen enthalten.

**Suchen**

Der Dateiname kann nach Aktivierung dieser Schaltfläche gesucht und in das Eingabefeld *Datei* übernommen werden.

**ANSI-Format (Windows)**

Dieses Format ist zu wählen, falls die Datei mit einem Windows-Programm weiterbearbeitet werden soll.

**ASCII-Format (DOS)**

Dieses Format ist zu wählen, falls die Datei mit einem DOS-Programm weiterbearbeitet werden soll.

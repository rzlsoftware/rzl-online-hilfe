# Händisches Erstellen einer Überweisung

Neben dem Zugriff auf Daten der Lohnverrechnung (Bezüge, Abgaben, Exekutionsbeträge) haben Sie die Möglichkeit, Überweisungen auch manuell zu erstellen. Die Vorgehensweise im ersten Registerblatt *Erstellung Überweisungsdatei* ist wie bei [Electronic-Banking Abrechnungen Inland](../Elektronic%20Banking%20SEPA/Elektronic%20Banking%20Abrechnungen%20Inland.md) beschrieben.

Die Auswahl zwischen Klienten und Unterdienstgeber ermöglicht Ihnen den Zugriff auf unterschiedliche Dienstgeberbanken, wenn überhaupt vorhanden (Ausnahmefall).

*Geschäftsvorfallcode* (nur bei händischer Erstellung)

Falls die zu erstellenden Überweisungen einem speziellen Geschäftsvorfall zuzuordnen sind (z. B. Pension, Miete, Gehalt, ...), kann dieser aus einer vorgegebenen Liste ausgewählt werden. Diese Liste entspricht den Angaben der STUZZA.Der Code wird bis zur Empfängerbank und wenn der Empfänger Edifact-Daten entgegennimmt, bis zum Empfänger durchgeschleust. Der Empfänger hat sodann die Möglichkeit zu erkennen, in welchen Teilbereich seiner Buchhaltung er den Zahlungseingang zu buchen hat.

![Image](<img/image214.png>){width="500"}

Nach Anwahl der Schaltfläche *Erstellen* wird nachfolgender Programmteil geöffnet. Hier besteht die Möglichkeit, die durchzuführenden Überweisungen einzutragen. Es können mehrere Überweisungen gleichzeitig in eine Datei aufgenommen werden.

![Image](<img/image215.png>){width="500"}

## Vorschlag

Durch Anwahl des *Vorschlages* wird eine Liste der erfassten Sonstigen Behörden aufgerufen und es kann eine Behörde aufgerufen werden. Somit müssen Die Empfängerdaten nicht immer wieder eingetragen werden.

## Empfänger

**Betrag**

In diesem Feld können Sie den Überweisungsbetrag eintragen.

**Zahlungsreferenz**

Die *Zahlungsreferenz* kann aus maximal 35 Zeichen bestehen. Es können Groß- und Kleinbuchstaben, Leerzeichen und Sonderzeichen verwendet werden.

**Name/Ort**

Eingabe des *Namens* und des *Ortes* des Empfängers.

**IBAN**

Eingabe der internationalen Bank-Kontonummer. Diese muss für Österreich genau 20-stellig sein. Maximal kann diese jedoch 34 alphanumerische Zeichen umfassen.

Die IBAN besteht aus

- dem ISO 3166 Ländercode der Bankverbindung (also für in Österreich
  geführte Konten „AT")

- einer zweistelligen Prüfziffer

- dem nationalen Bank-Code (für Österreich die BLZ)

- der Kontonummer

In der Darstellung für den elektronischen Datenaustausch alsoLLppBBBBBKKKKKKKKKKK, wobei LL der Ländercode, pp eine rein numerische Prüfziffer, BBBBB die Bankleitzahl und KKKKKKKKKKK die Kontonummer ist.Bankleitzahl und Kontonummer können, abhängig vom Land, unterschiedlich lang sein und auch Alpha-Zeichen (in der elektronischen Darstellung aber keine Sonderzeichen und natürlich auch keine nationalen Sonderzeichen, wie Umlaute) enthalten. Es wird jedoch festgelegt, dass je Land die IBAN-Länge konstant ist.

**BIC**

Eintragung des BIC. Ist jedoch für Inlandszahlungen ab Rulebook 6.0. nicht mehr erforderlich.

## Verwendungszweck

**Zusatztext**

Hier können Sie zusätzliche Textzeilen zur Beschreibung des Zahlungsgrundes eingeben.

![Image](<img/image216.png>){width="500"}

Nach Anwahl der Schaltfläche *Speichern* wird die Überweisung mit den wichtigsten Daten in das Listenfeld eingetragen.

Es können weitere Überweisungen erfasst werden. Ist die Erfassung vollständig, ist die Schaltfläche *Abbrechen* anzuwählen. Nachfolgend erfolgt die Abfrage, ob die Erstellung beendet werden soll.

Wird die Abfrage mit *JA* beantwortet, wird die Datei erstellt und die Überweisung(en) werden nochmals angezeigt.

Durch Anwahl der Schaltfläche *Weiter* erfolgt die endgültige Erstellung der Datei und der automatische Ausdruck eines Datenträger-Protokolls.
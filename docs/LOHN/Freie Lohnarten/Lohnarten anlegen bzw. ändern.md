# Lohnarten anlegen / ändern

Werden individuelle Lohnarten angelegt, so liegt die Verantwortung hinsichtlich der Definition der SV-Pflichtigkeit, LSt-Pflichtigkeit, DB-Pflichtigkeit und KommSt-Pflichtigkeit ausschließlich beim Anwender. Eine falsch definierte Lohnart kann eine falsche Berechnung der Sozialversicherung, Lohnsteuer, DB und Kommunalsteuer bewirken. Die entsprechenden Einstellungen sind daher gewissenhaft vorzunehmen.

!!! warning "Hinweis"
    Sobald die freie Lohnart in der Abrechnung verwendet wurde, darf diese nicht mehr geändert werden. In diesem Fall müssen Sie die Lohnart mit den richtigen Pflichtigkeiten unter einer neuen Nummer anlegen.
    Lediglich hinsichtlich der Zuordnung der Lohnart in den Eingabefeldern „Bemessung Sonderzahlung“ bis „Bemessung Urlaubsrückstellung Sonderzahlung“ kann eine spätere Korrektur erfolgen. Ein [Repair der Bemessungsgrundlagen](../Repair.md) ist nachfolgend notwendig.

![Image](<img/image146.png>){width="500"}

## LA (1)

**Nummer**

Es können die Nummern von 1 bis 999 verwendet werden.

**Bezeichnung**

Eingabe der Bezeichnung der Lohnart mit bis zu **35** Stellen. Mit diesem Text wird die Lohnart auch auf der Abrechnung ausgedruckt.

**Bezug und­ Sachbezug**

Durch Anwahl dieses Auswahlfeldes kann nachfolgend eine freie Lohnart angelegt werden, die als Bezugslohnart auf der Dienstnehmerabrechnung angeführt wird. Handelt es sich bei der Lohnart um einen Sachbezug, können Sie das Feld *Sachbezug* ebenfalls aktivieren. Sie ersparen sich damit die Anlage einer zusätzlichen Abzugslohnart Sachbezug. Für die Kontierung des Buchungsbeleges können Sie nur eine Kontonummer für den Sachbezug eintragen.

**Abzug und­ Sachbezug**

In diesem Falle wird diese Lohnart nur als Abzugswert behandelt, das heißt nur vom Nettobezug abgezogen. So können z. B. Sachbezüge und andere Abzüge mit individuellen Bezeichnungen belegt werden. 

Wird zusätzlich das Feld *Sachbezug* angewählt, wird die 20 % Regelung bei Abrechnung von Sachbezügen berücksichtigt. Der den Versicherten belastenden Teil der allgemeinen Beiträge (Kranken, Pensions- und Arbeitslosenversicherung) darf 20 % der Geldbezüge des Versicherten nicht übersteigen. Der Unterschiedsbetrag ist vom Dienstgeber allein zu tragen.

**Ausweis Lohnkonto**

Wird dieses Feld aktiviert, kann eine Lohnart angelegt werden, die ausschließlich am Lohnkonto des Dienstnehmers geführt wird (z. B. inländische Pensionskassenbeiträge). Diese Lohnart erscheint nicht auf den Abrechnungen.

**Überstunden**

Wenn das Feld *Überstunden* ausgewählt wird, stehen nur mehr bestimmte Pflichtigkeiten zur Auswahl. Im Registerblatt *LA (3)* stehen mehrere Optionen für die Überstundenabrechnung zur Verfügung (siehe Beschreibung unten *LA (3)*).

**Lohnart wiederkehrend**

Es kann hier bestimmt werden, ob die Lohnart monatlich *wiederkehrend* ist. Da eine Lohnart bei einigen Dienstnehmern wiederkehrend sein kann, bei anderen jedoch nicht, ist es empfehlenswert, diese Lohnart zweimal anzulegen, eine davon als wiederkehrend, die andere als nicht wiederkehrend.

**Betrag wiederkehrend**

Wurde eine Lohnart als wiederkehrend definiert, so kann hier festgelegt werden, ob auch der Betrag wiederkehrend sein soll. Bei einem nicht wiederkehrenden Betrag ist in jedem Monat der Wert manuell zu erfassen.

**Aliquotierung**

Festlegung, ob die Lohnart bei Ein- oder Austritt während des Monats aliquot berechnet werden soll.

**Abrechnung in Einheiten**

Lohnarten können nach Einheiten abgerechnet werden. Es ist dann im nächsten Eingabefeld die Art der Einheit festzulegen und beim Dienstnehmer der Betrag pro Einheit und die Anzahl der Einheiten einzugeben.

**Einheit**

Wird die Lohnart nach Einheiten abgerechnet, so ist hier die Bezeichnung der verwendeten Einheit mit bis zu 8 Zeichen einzugeben (z. B. Stunden, Tage, km usw.). Dieser Text wird auf der Lohnabrechnung angedruckt.

**Aufwandsentschädigung**

Handelt es sich bei der Lohnart um eine Aufwandsentschädigung, so ist dieses Feld zu aktivieren. Dazu muss die Pflichtigkeit in der Sozialversicherung, LSt, DB und KommSt entsprechend definiert werden:

| **SV** | **LSt** | **DB** | **KommSt** |                                                     |
| :----: | :-----: | :----: | :--------: | --------------------------------------------------- |
|   0    |    6    |   2    |     2      | Aufwandsentschädigung, SV-frei, steuerfrei          |
|   0    |    1    |   1    |     1      | Aufwandsentschädigung, SV-frei, steuerpflichtig     |
|   1    |    1    |   1    |     1      | Aufwandsentschädigung SV-pflichtig, steuerpflichtig |

!!! warning "Hinweis"
    Die Aufwandsentschädigung wird immer im unteren Teil der Lohnabrechnung angedruckt und **nicht** beim Bruttolohn.

**SV-Pflichtigkeit**

Festlegung der Sozialversicherungspflichtigkeit der Lohnart durch Auswahl aus der vorgegebenen Liste:

| SV-Pflichtigkeit |                                                                                                                                              |
| :--------------: | -------------------------------------------------------------------------------------------------------------------------------------------- |
|        0         | SV-frei                                                                                                                                      |
|        1         | SV-pflichtig laufender Bezug                                                                                                                 |
|        2         | SV-pflichtig, Sonderzahlung                                                                                                                  |
|        3         | Erhöhung der SV-Bemessungsgrundlage laufender Bezug (z. B. Trinkgeld)                                                                        |
|        4         | Erhöhung der SV-Bemessungsgrundlage Sonderzahlung                                                                                            |
|        5         | Erhöhung der SV-Bemessungsgrundlage laufender Bezug ([Altersteilzeit](../Abrechnungen_Sonderfaelle/Abrechnung_Altersteilzeit.md)) (kein ANA) |
|        6         | Erhöhung der SV-Bemessungsgrundlage Sonderzahlung ([Altersteilzeit](../Abrechnungen_Sonderfaelle/Abrechnung_Altersteilzeit.md)) (kein ANA)   |
|        7         | nur BV-pflichtig                                                                                                                             |
|        8         | Erhöhung der SV-Bemessungsgrundlage laufender Bezug (kein AnA bei SV und Nebenbeiträgen)                                                     |
|        9         | Erhöhung der SV-Bemessungsgrundlage Sonderzahlung (kein AnA bei SV und Nebenbeiträgen)                                                       |


**Befreiung von Nebenbeiträgen**

Für die SV-Pflichtigkeiten von 1 bis 6 und 8 bis 9 besteht durch Anwahl der *F2-Taste* im Feld *SV-Pflichtigkeit* die Möglichkeit, die freie Lohnart von den einzelnen Nebenbeiträgen zu befreien.

![Image](<img/image147.png>)

**LSt-Pflichtigkeit**

Festlegung der Lohnsteuerpflichtigkeit der Lohnart durch Auswahl aus der vorgegebenen Liste:

| LSt-Pflichtigkeit |                                                                                                                                                                                                                                                                                         |
| :---------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|         0         | steuerfrei gem. § 68 (1) und Nachtarbeit § 68 (6)                                                                                                                                                                                                                                       |
|         1         | LSt laufender Bezug                                                                                                                                                                                                                                                                     |
|         2         | LSt gem. § 67 (1) und (2) mit Freibetrag von EUR 620,00 mit Sechstelbestimmung                                                                                                                                                                                                          |
|         3         | LSt gem. § 67 (3) ohne Freibetrag von EUR 620,00 ohne Sechstelbestimmung                                                                                                                                                                                                                |
|         4         | LSt Auslandsbezug                                                                                                                                                                                                                                                                       |
|         5         | steuerfrei gemäß § 3 EstG, nicht sechstelerhöhend                                                                                                                                                                                                                                       |
|         6         | Aufwandsentschädigung § 26 (4) EStG                                                                                                                                                                                                                                                     |
|         7         | LSt-Berechnung Belastungsprozentsatz                                                                                                                                                                                                                                                    |
|        11         | LSt gem. § 67 (7) EstG (Erfindungen)                                                                                                                                                                                                                                                    |
|        12         | Werbungskosten: mindern nur die LSt-Bemessungsgrundlage ­ bei den anderen Pflichtigkeiten jeweils Null eingeben. Wenn diese Position auch vom Nettobezug abgezogen werden soll, muss sie auch als eigene Abzugslohnart definiert werden.                                                |
|        13         | Rückgezahlter Arbeitslohn: eigene Position der Werbungskosten, mindern nur die LSt-Bemessungsgrundlage ­ bei den anderen Pflichtigkeiten jeweils Null eingeben. Wenn diese Position auch vom Nettobezug abgezogen werden soll, muss sie auch als eigene Abzugslohnart definiert werden. |
|        14         | steuerfrei gem. § 3 EStG, sechstelerhöhend                                                                                                                                                                                                                                              |
|        15         | LSt gem. § 67 (6,10) laufender Tarif                                                                                                                                                                                                                                                    |
|        16         | LSt-Auslandsbezug Sonderzahlung gem. § 67 (1)                                                                                                                                                                                                                                           |
|        17         | frei gemäß § 25 (1) Z 2a                                                                                                                                                                                                                                                                |
|        18         | LSt gem. § 67 (8a)                                                                                                                                                                                                                                                                      |
|        19         | LSt gem. § 67 (8 e,f)                                                                                                                                                                                                                                                                   |
|        20         | Werbungskosten SV (KZ 230)                                                                                                                                                                                                                                                              |
|        21         | Arbeitgeberbeitrag ausländische Pensionskasse (§ 26 Z 7)                                                                                                                                                                                                                                |
|        22         | Werbungskosten SV (KZ 225)                                                                                                                                                                                                                                                              |
|        24         | LSt Auslandsbezug gem. § 68 (1)                                                                                                                                                                                                                                                         |
|        26         | steuerfrei gem. § 3 Abs. 1 Z 16c EStG                                                                                                                                                                                                                                                   |
|        27         | LSt gem. § 67 (8c) – für Nachzahlungen                                                                                                                                                                                                                                                  |
|        28         | LSt gem. § 67 (8g) – für Nachzahlungen Insolvenzverfahren                                                                                                                                                                                                                               |
|        29         | Werbungskosten SV (KZ 226)                                                                                                                                                                                                                                                              |
|        30         | Kostenübernahme § 26(5 b) – Öffi-Ticket                                                                                                                                                                                                                                                 |
|        31         | Steuerfrei gem. § 3 Abs. 1 Z 35 EstG – Mitarbeitergewinnbeteiligung                                                                                                                                                                                                                     |
|        32         | Steuerfrei gem. § 124b Z 447 EStG – Mitarbeiterprämie (Teuerungspr.)                                                                                                                                                                                                                    |
|        33         | Aufwandsentschädigung Ausland § 26 (4) EstG                                                                                                                                                                                                                                             |
|        34         | Werbungskosten gem. § 16 Abs 1 Z 3 b – freiw. Beiträge                                                                                                                                                                                                                                  |
|        35         | Werbungskosten SV (KZ 226 – Abzug Bem. LSt. fest)                                                                                                                                                                                                                                       |
|        36         | LSt. gem. § 67a (4) Z 2 – Start-Up-Mitarbeiterbeteiligung (27,5%)                                                                                                                                                                                                                       |
|        37         | Zuschuss zur Kinderbetreuung § 3 Abs. 1 Z 13 lit. b                                                                                                                                                                                                                                     |
|        38         | Kostenersatz Aufladen E-Fahrzeug                                                                                                                                                                                                                                                        |
|        39         | Kostenersatz Anschaffung einer Ladeeinrichtung                                                                                                                                                                                                                                          |

**DB-Pflichtigkeit**

Festlegung der DB-Pflichtigkeit der Lohnart durch Auswahl aus der vorgegebenen Liste:

| DB-Pflichtigkeit |                                          |
| :--------------: | ---------------------------------------- |
|        0         | DB-frei                                  |
|        1         | DB-pflichtig                             |
|        2         | Aufwandsentschädigung gemäß § 26 EstG    |
|        3         | nur Erhöhung der DB-Bemessungsgrundlagen |
|        4         | Erhöhung gemäß ATZ 2017                  |

**KommSt-Pflichtigkeit**

Festlegung der Kommunalsteuerpflichtigkeit der Lohnart durch Auswahl aus der vorgegebenen Liste:

| KommSt-Pflichtigkeit |                                              |
| -------------------- | -------------------------------------------- |
| 0                    | KommSt-frei                                  |
| 1                    | KommSt-pflichtig                             |
| 2                    | Aufwandsentschädigung gemäß § 26 EstG        |
| 3                    | nur Erhöhung der KommSt-Bemessungsgrundlagen |
| 4                    | Erhöhung gemäß ATZ 2017                      |

## LA (2)

![Image](<img/image148.png>)

**Basis Überstunden**

Wird dieses Feld aktiviert, dann wird diese freie Lohnart in die Berechnung des Überstundengrundlohnes miteinbezogen, sofern der Überstundenteiler verwendet wird.

**Basis Mehrarbeitsstunden**

Wird dieses Feld aktiviert, dann wird diese freie Lohnart in die Berechnung des Mehrarbeitsstundengrundlohnes miteinbezogen, sofern der Überstundenteiler verwendet wird.

**KV-Bezug**

Wenn Sie dieses Feld anhaken, wird die Lohnart als *KV-Bezug* deklariert. Dies bedeutet, dass bei Anwendung der HGKV-Datenbank, diese Lohnart bei der Überprüfung des KV-Mindestbrutto herangezogen wird.

**Bemessung SZ**

Wird dieses Feld aktiviert, wird die freie Lohnart in der Sonderzahlungsberechnung miteingerechnet, wenn im Zuge der Abrechnung mit [Lohnformeln](../Lohnformeln/Formelsyntax/Lohnarten.md) gearbeitet wird.

**Monatsschnitt**

Festlegung, ob die Lohnart in die Berechnung des Monatsschnittes einzubeziehen ist.

**unpfändbar**

Darf die angelegte Lohnart bezüglich Exekutionsberechnung nicht gepfändet werden, ist dieses Auswahlfeld zu aktiveren.

**Bemessung Abfertigungsrückstellung**

Festlegung, ob die Lohnart bei Berechnung der Abfertigungsrückstellung in die Abfertigungsbasis einzubeziehen ist.

**Bemessung Abfertigungsrückstellung Sonderzahlung**

Festlegung, ob die Lohnart bei Berechnung der Abfertigungsrückstellung in die Berechnungsbasis für die anteiligen Sonderzahlungen einzubeziehen ist. Bei Berechnung der Abfertigungsrückstellung kann der Anspruch an Sonderzahlungen in Monaten eingegeben werden. Es wird dann vom Programm als anteiliger Sonderzahlungsbetrag der Anspruch in Monaten mal dieser Berechnungsbasis ermittelt.

Dieses Feld darf daher nicht angewählt werden, wenn es sich bei der Lohnart selbst um eine Sonderzahlung handelt, sondern nur, wenn diese Lohnart in die Berechnungsbasis für die Sonderzahlungen einzubeziehen ist.

**SZ für Exekutionen**

Ist die Lohnart für die Exekutionsberechnung als Sonderzahlung zu behandeln (Urlaubszuschuss und Weihnachtsremuneration), dann ist dieses Auswahlfeld zu aktivieren.

**Bemessung Urlaubsrückstellung**

Festlegung, ob die Lohnart bei der Berechnung der Urlaubsrückstellung in die Berechnungsbasis einzubeziehen ist.

**Bemessung Urlaubsrückstellung Sonderzahlung**

Festlegung, ob die Lohnart bei Berechnung der Urlaubsrückstellung in die Berechnungsbasis für die anteiligen Sonderzahlungen einzubeziehen ist. Dieses Feld darf daher nicht angewählt werden, wenn es sich bei der Lohnart selbst um eine Sonderzahlung handelt, sondern nur, wenn diese Lohnart in die Berechnungsbasis für die Sonderzahlungen einzubeziehen ist.

**Beendigungsansprüche**

Bei sonstigen Beendigungsansprüchen, die über freie Lohnarten abgerechnet werden (z. B. freiwillige Abfertigungen), muss dieses Auswahlfeld für die Exekutionsberechnung aktiviert werden.

**Bemessung Jubiläumsgeldrückstellung**

Festlegung, ob die Lohnart bei Berechnung der Jubiläumsgeldrückstellung in die Berechnungsbasis einzubeziehen ist.

**Bemessung Jubiläumsgeldrückstellung Sonderzahlung**

Festlegung, ob die Lohnart bei Berechnung der Jubiläumsgeldrückstellung in die Berechnungsbasis für die anteiligen Sonderzahlungen einzubeziehen ist. Dieses Feld darf daher nicht angewählt werden, wenn es sich bei der Lohnart selbst um eine Sonderzahlung handelt, sondern nur, wenn diese Lohnart in die Berechnungsbasis für die Sonderzahlungen einzubeziehen ist.

**MA-Rabatt \> 20 %**

Damit die Mitarbeiterrabatte korrekt berechnet werden können, wählen Sie hier aus, ob es sich um Mitarbeiterrabatte über 20 % handelt.

**Bemessung Zeitausgleichsrückstellung**

Festlegung, ob die Lohnart bei Berechnung der Zeitausgleichsrückstellung in die Berechnungsbasis einzubeziehen ist.

**Bemessung Zeitausgleichsrückstellung Sonderzahlung**

Festlegung, ob die Lohnart bei Berechnung der Zeitausgleichsrückstellung in die Berechnungsbasis für die anteiligen Sonderzahlungen einzubeziehen ist. Dieses Feld darf daher nicht angewählt werden, wenn es sich bei der Lohnart selbst um eine Sonderzahlung handelt, sondern nur, wenn diese Lohnart in die Berechnungsbasis für die Sonderzahlungen einzubeziehen ist.

**MA-Rabatt <= 20 %**

Damit die Mitarbeiterrabatte korrekt berechnet werden können, wählen Sie hier aus, ob es sich um Mitarbeiterrabatte unter 20 % handelt.

!!! info "Tipp"
    Bezüglich Exekutionen vergleiche [Exekutionen](../Exekutionen/Exekutionsberechnung.md).

**Teilentgelt**

Handelt es sich bei der freien Lohnart um Teilentgelt, aktivieren Sie dieses Feld.

## LA (3)

![Image](<img/image149.png>)

**Überweisung an Sonstige Behörden**

Wenn Sie bei einer freien Abzugslohnart eine Sonstige Behörde in der Abrechnung hinterlegen möchten, muss hier das Häkchen gesetzt werden. Es kann eine *Sonstige Behörde* nur bei einer freien Lohnart mit Lohnartendefinition „*Abzug*“ oder „*Werbungskosten*“ hinterlegt werden.

**Überstunden als freie Lohnarten**

Wenn im Registerblatt LA (1) die Option *Überstunde* ausgewählt wurde, sind nur mehr bestimmte Pflichtigkeiten auswählbar. Die Pflichtigkeiten sind vor allem im Bereich der Lohnsteuer interessant.

![Image](<img/image150.png>)

Wenn freie Lohnarten als *Überstunde* abgerechnet werden, kann die Anlage der Lohnart nur in Einheiten erfolgen.

Die weiteren Einstellungen werden im Registerblatt LA (3) vorgenommen.

![Image](<img/image151.png>)

**ÜSt.-Zuschlag**

In dieses Feld wird der Überstundenzuschlag in Prozent eingetragen.

**Nur Zuschlag**

Wenn diese Option aktiviert ist, wird die freie Lohnart ohne Überstundengrundlohn, eben nur mit dem eingetragenen Zuschlag, abgerechnet.

Es gibt drei Möglichkeiten den Stundensatz für die Berechnung der Überstunden zu ermitteln bzw. in das Feld *Basis* der freien Lohnart einzutragen.

**1. Verwendung USt.-Grunddaten**

Wenn das Feld *Verwendung ÜSt.-Grunddaten* aktiviert ist, übernimmt das Programm die Einstellungen (Überstundenteiler oder abw. Überstundengrundlohn) aus dem Abrechnungsbildschirm [*Über-/Mehrarbeitsstunden*](../Abrechnungsbildschirme/Über-%20und%20Mehrarbeitsstunden.md).

![Image](<img/image152.png>)

Die Ermittlung der Basis der freien Lohnart erfolgt automatisch und kann auch nicht geändert werden (Feld ist ausgegraut).

**2. Eintragung des Überstunden-Teilers (ÜSt)**

Wird das Feld *Verwendung ÜSt-Grunddaten* deaktiviert, kann der Überstundenteiler direkt bei der freien Lohnart eingetragen werden.

![Image](<img/image153.png>)

Die Ermittlung der Basis erfolgt ebenfalls automatisch und kann nicht geändert werden.

**3. Keine Verwendung der Grunddaten – keine Eintragung bei ÜSt-Teiler**

![Image](<img/image154.png>)

Wenn weder die ÜSt-Grunddaten aktiviert sind, noch ein ÜSt-Teiler eingetragen ist, muss die Eintragung im Feld *Basis* bei der Abrechnung der freien Lohnart erfolgen.

![Image](<img/image155.png>){width="500"}
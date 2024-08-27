## Kollektivvertrag

Dieser Abrechnungsbildschirm bietet im ersten Bereich die Verknüpfung mit der HGKV-Datenbank (Kollektivvertragsdatenbank). Im zweiten Bereich können Kollektivvertragsdaten manuell eingetragen werden. Die manuelle Eintragung ist nur möglich, wenn der Bereich *HGKV-DB* nicht aktiviert ist.

![Image](<img/image58.png>)

#### **HGKV-DB**

Mit den in diesem Bereich getroffenen Einstellungen weist das Programm auf „Bezüge unter KV-Mindestlohn“ und auf „Bezüge unter vereinbarter KV-Überzahlung“ hin. Im Abrechnungsbildschirm *Fixe Lohnarten* kann im Feld *Betrag* bzw. in den Feldern *Stundensatz 1* und *2* mit der Tastenkombination *Strg – K* der KV-Bezug (mit oder ohne Überzahlung) automatisch übernommen werden.

#### **Kollektivvertrag**

Durch Anwahl der *F2-Taste* können die in den *Klientenstammdaten* (vgl. Kapitel 2.1.10 Kostenstellen/Kostenträger, Krankenstandsbesch., KV, Seite [36](#kostenstellenkostenträger-krankenstandsbesch.-kv)) hinterlegten Kollektivverträge aufgerufen und dem Dienstnehmer zugeordnet werden.

#### **Beginn Einstufung**

In diesem Feld wird der Beginn der erstmaligen Einstufung eingetragen. Mit der *F2-Taste* wird das Eintrittsdatum vorgeschlagen.

#### **Vordienstzeit**

Die Eintragung von anrechenbaren Vordienstzeiten kann hier in Monaten eingetragen werden.

#### **Umstufung Tätigkeitsgr.** 

Dieser Punkt wurde ursprünglich für den Kollektivvertrag Handel Angestellte geschaffen und kann jetzt auch für alle anderen Kollektivverträge angewendet werden. (Näheres zur Umstufung KV-Handel finden Sie im Kapitel 32.9 Exkurs: Umstellung KV-Handel Angestellte, Seite [392](#_Toc110257570).)

![Image](<img/image59.png>)

In diesem Dialog wird oben immer die bisherige Einstufung dargestellt. Im unteren Bereich wird die neue Umstufung vorgeschlagen.

Damit bei *Einstufung nach Umstufung* Werte angezeigt werden, müssen Sie bei *Bisherige Einstufung* *die Stufenwahl durch* auswählen: *Bezug lt. KV, Folgestufe – Bezug lt. KV, bisherige Stufe oder Einstiegsstufe*.

***  
***

***Bezug lt. KV***

Bei der Stufenauswahl *Bezug lt. KV* (=bisheriger KV-Bezug) vergleicht das Lohnprogramm im Bereich *Einstufung nach Umstufung*, ob der Bezug mindestens dem bisherigen KV-Bezug (EUR 2.060,30) entspricht. In unserem Beispiel ist der nächst höhere Bezug in der Stufe 1 in der Gruppe 2 (EUR 2.065,00).

![Image](<img/image60.png>)

***Folgestufe – Bezug lt. KV***

Bei der Stufenauswahl ***Folgestufe - Bezug lt. KV*** vergleicht das Lohnprogramm im Bereich *Einstufung nach Umstufung*, ob der Bezug mindestens der bisherigen Folgestufe KV-Bezug (EUR 2.110,50) entspricht. In unserem Beispiel ist der nächst höhere Bezug in der Stufe 6 in der Gruppe 2 (EUR 2.116,60).

![Image](<img/image61.png>)

***Bisherige Stufe***

Bei der Stufenauswahl ***bisherige Stufe*** vergleicht das Lohnprogramm im Bereich *Einstufung nach Umstufung*, ob die gleiche Stufe wie zuvor angewendet wird. In unserem Beispiel Stufe 6.

![Image](<img/image62.png>)

***Einstiegsstufe***

Bei der Stufenauswahl ***Einstiegsstufe*** wird im Bereich *Einstufung nach Umstufung* die Stufe 1 vorgeschlagen. Es wird die erste Stufe von dieser neuen Tätigkeitsgruppe vorgeschlagen.

![Image](<img/image63.png>)

!!! warning "Hinweis"
    Bei allen vier Varianten wird die bisherige Vordienstzeit auf null gesetzt.

***Nächste Vorrückung***

Grundsätzlich wird für die Ermittlung des nächsten Vorrückdatums das **Umstufungsdatum** herangezogen.

![Image](<img/image64.png>)

Wenn das ursprüngliche Vorrückdatum erhalten bleiben soll, dann aktivieren Sie das Häkchen bei *bisheriges Vorrückungsdatum beibehalten*.

![Image](<img/image65.png>)

***  
***

***Überzahlung beibehalten***

Wenn die ursprüngliche Überzahlung beibehalten bleiben soll, dann aktivieren Sie das Feld *Überzahlung beibehalten*.

![Image](<img/image66.png>)

Wenn das Feld nicht angehakt wird, dann wird die *Überzahlung neu*, neu ermittelt.

![Image](<img/image67.png>)

#### **Aktuelle Tätigkeitsgruppe**

In diesem Bereich muss die Tätigkeitsgruppe des Dienstnehmers angewählt werden. Durch die Verknüpfung mit dem Kollektivvertrag können sämtliche Tätigkeitsgruppen aufgerufen und angewählt werden.

#### **Folgegruppen**

In bestimmten Kollektivverträgen (z.B. Informationstechnik) verbleibt man eine bestimmte Zeitdauer in einer Gruppe (z. B. Einstiegsstufe) und wechselt dann automatisch in die nächsthöhere Gruppe (z. B. Regelgruppe). Diese Folgegruppen werden im jeweiligen Kollektivvertrag verknüpft (vgl. Kapitel 32.7 Wann sind Folgegruppen notwendig?, Seite [388](#wann-sind-folgegruppen-notwendig)).

#### **Letzter Gruppenwechsel/Letzte Tätigkeitsgruppe**

Wenn bereits ein Wechsel innerhalb der Gruppen stattgefunden hat, zeigt das Programm den letzten Gruppenwechsel mit Datum und die letzte Tätigkeitsgruppe an.

#### **Stufe / abw. Stufe / abw. Stufe fixieren**

In vielen Kollektivverträgen erhöht sich mit der Anzahl der Dienstjahre auch der Bezug innerhalb einer Gruppe.

![Image](<img/image68.png>)

Das Programm zeigt die aktuelle Stufe an. Durch Anwahl des Felds *abw. Stufe* kann eine andere Stufenzuordnung erreicht werden. Die Stufe bezieht sich auf die linke Spalte in den Tabellen (hier zwischen 1 und 18 Jahren). Durch Anwahl *abw. Stufe fixieren*, kann die abweichende Stufe fixiert werden, das heißt, es gibt keine Vorrückungen mehr.

#### **Kürzung Stufe**

Durch Eintragung der Monate, um welche die Stufe gekürzt werden soll, kann ein abweichender nächster Vorrückungsstichtag ermittelt werden.

#### **Anzeige der KV-Daten**

Durch die Verknüpfung mit dem Kollektivvertrag werden die Normalarbeitszeit, der Stundenlohn und/oder der Bezug laut Kollektivvertrag, sowie eine Überzahlung nach Betrag bzw. prozentuell angezeigt.

Auf die hier angezeigten Werte kann im Rahmen der automatischen Berechnung mit Lohnformeln zugegriffen werden (vgl. Kapitel 30.1.2 Anlage von Lohn-Formeln, Seite [349](#anlage-von-lohn-formeln)).

#### **KV-Handel Reformbetrag 1**

Durch die Umstellung von KV-Handel Angestellte ALT auf KV-Handel Angestellte NEU kann es zu einem *Reformbetrag 1* kommen. Diesen Betrag können Sie hier eintragen bzw. wird vom Programm bei der Umstellung automatisch befüllt.

#### **Jubiläumsgelder**

Wenn im Kollektivvertrag ein eindeutiges Jubiläumsgeld hinterlegt ist, dann werden hier die Felder automatisch befüllt. Wenn es keine eindeutigen Daten zum Jubiläumsgeld gibt, müssen die Felder von Ihnen befüllt werden.

#### **Weitere Informationen aus dem Kollektivvertrag/abweichende Einstellungen**

Im Programmteil *Klient/Kanzlei/Kollektivverträge* können in der Kurzinformation zusätzliche Daten pro Kollektivvertrag eingetragen werden.

![Image](<img/image69.png>)

Wenn diese Felder im jeweiligen Kollektivvertrag ausgefüllt werden, gelten die Eintragungen für alle Dienstnehmer, die diesem KV zugeordnet sind und werden automatisch in den Abrechnungsbildschirm *Kollektivvertrag* übernommen.

#### **Abw. Hochrechnungsfaktor (von Stundenlohn laut KV auf Monatsbezug)**

Wenn ein Kollektivvertrag keine Monatsbezüge beinhaltet, sondern Stundenlöhne liefert, rechnet das Programm grundsätzlich automatisch aufgrund der Normalarbeitszeit laut Kollektivvertrag mit dem Multiplikator 4,33 auf einen Monatsbezug hoch.

Das Feld *Hochrechnungsfaktor* muss nur ausgefüllt werden, wenn die Hochrechnung vom Stundenlohn auf einen Monatslohn mit einem abweichenden Teiler (lt. KV) durchgeführt werden muss.

#### **abw. Std.-Teiler-Teilzeit**

Manche Kollektivverträge schreiben für die Berechnung der Teilzeitbezüge – ausgehend von einem Monatsbezug – abweichende Stunden-Teiler vor. In diesem Feld ist ein abweichender Stundenteiler für die Berechnung des Teilzeitbezugs einzutragen.

#### **Überzahlung**

Im Bereich der Überzahlung kann pro Kollektivvertrag festgelegt werden, ob Überzahlungen beibehalten werden müssen. Wenn das Feld *Bei Biennalsprung beibehalten* aktiviert ist, bleibt die Überzahlung auch nach einer Erhöhung aufgrund der Dienstjahre in voller Höhe aufrecht.

Soll die Überzahlung nicht betraglich, sondern prozentuell beibehalten werden, ist das Feld *Prozentuelle Überzahlung beibehalten* zu aktivieren.

#### **Erhöh Reformbetrag in %**

Hier kann optional ein anderer Erhöhungsprozentsatz für den Reformbetrag eingetragen werden.

#### **Abweichende Einstellungen für einzelne Dienstnehmer**

Innerhalb des Abrechnungsbildschirms *Kollektivvertrag* können beim Dienstnehmer im Bereich *abw. Einstellungen für diesen Dienstnehmer* abweichende Eingaben eingetragen werden.

![Image](<img/image70.png>)

#### **Abw. Normalarbeitszeit lt. KV**

Das Feld *abw. Normalarbeitszeit lt. KV* ist für Sonderfälle, wenn ein Kollektivvertrag mehrere Normalarbeitszeiten kennt (z. B. Nahrungs- und Genussmittelindustrie). Mit diesem Feld kann der (automatische) Eintrag im Feld *Arbeitszeit lt. KV* übersteuert werden.

#### **abw. Zu-/Abschlag KV-Bezug**

Der IT-Kollektivvertrag (Datenverarbeitung Informationstechnik) sieht beispielsweise vor, dass Ferialpraktikanten/Ferialaushilfen als Mindestgehalt 50 % des Kollektivvertragsgehaltes erhalten.

Dieses Feld ermöglicht die Eingabe eines Zu- oder Abschlags zum Bezug laut Kollektivvertrag in Prozent. Die Eingabe eines Abschlags erfolgt mit dem Bindestrich auf der Tastatur.

!!! info "Tipp"
    Durch Anwahl der Tastenkombination *Alt – F8* kann der beim Dienstnehmer ausgewählte Kollektivvertrag aufgerufen werden.

Die abonnierten Kollektivverträge müssen in den *Klientenstammdaten* zugeordnet werden. Die Zuordnung erfolgt im Registerblatt *Kostenstellen, Krankenstandsbesch., KV* im Bereich *Kollektivverträge*.

![Image](<img/image71.png>)

vgl. Kapitel 2.1.10 Kostenstellen/Kostenträger, Krankenstandsbesch., KV, Seite [36](#kostenstellenkostenträger-krankenstandsbesch.-kv)

#### **Manuelle Eingabe von Kollektivvertragsdaten**

![Image](<img/image72.png>)

Die manuelle Eintragung von KV-Daten ist nur möglich, wenn der Bereich *HGKV-DB* nicht aktiviert ist.

#### **Kollektivvertrag**

Eingabe des anzuwendenden Kollektivvertrages. Die Eintragung wird für die Erstellung des Dienstzettels verwendet.

#### **Stundensatz laut KV / Bezug laut KV**

Auf die hier eingetragenen Werte kann im Rahmen der automatischen Berechnung mit Lohnformeln zugegriffen werden (vgl. Kapitel 30.1.2 Anlage von Lohn-Formeln, Seite [349](#anlage-von-lohn-formeln)).
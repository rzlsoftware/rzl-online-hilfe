# Buchungszeile

### BUCHUNGSZEILE

&nbsp;

Bevor Sie mit dem Buchen starten können, müssen Sie die Buchungsoptionen *Belegkreis* und *Buchungsart* definieren.

&nbsp;

Abb. 1 Buchungsansicht

![Image](<../assets/NeuesElement36.png>)

&nbsp;

**Belegkreis**\
Sie können zwischen den Belegkreisen wählen, die unter *Stammdaten / Belegkreise* angelegt wurden. (Der Belegkreis EB kann nur im Stapel Eröffnungsbilanz bebucht werden. Siehe Kapitel Eröffnungsbilanz)&nbsp;

&nbsp;

**Buchungsart**\
*Gegenbuchung:* \
Bei dieser Buchungsart ist in jeder Buchungszeile jeweils das Sollkonto und das Habenkonto einzugeben.&nbsp;

*Sammelbuchung:* \
Bei der Buchungsart Sammelbuchung muss das jeweilige Sammelkonto angegeben werden. Handelt es sich bei diesem Konto um ein Bestandskonto, so wird der Kontosaldo unter *Anfangssaldo* ausgewiesen. Bei der Buchungsart mit Sammelbuchung kann in jeder Buchungszeile jeweils nur ein Konto eingegeben werden. In dieser Buchungsart werden üblicherweise die Bank- und Kassabuchungen vorgenommen.

&nbsp;

Abb. 2 Sammelbuchung

![Image](<../assets/NeuesElement35.png>)

&nbsp;

**TIPP**

Der Anfangssaldo kann durch Anwahl des Stift-Symbols überschrieben werden, wobei dadurch der tatsächliche Saldo am Konto nicht beeinflusst wird.

&nbsp;

**HINWEIS**

Bei der Buchungsart *mit Sammelbuchung* ist folgendes zu beachten: Wird der eingegebene Betrag mit der ENTER-Taste bestätigt, so erfolgt eine Sollbuchung am einge­gebenen Konto. Wird der Betrag mit der +/HABEN-Taste bestätigt, so erfolgt eine Haben­buchung (es erscheint ein rotes H neben dem Betragsfeld). Bei Kassa- und Bankbu­chun­gen heißt dies, dass Ausgaben mit der ENTER-Taste und Einnahmen mit der +/HABEN-Taste zu buchen sind.

&nbsp;

**Belegliste**

Das Modul RZL FIBU Belegverarbeitung bietet in Kombination mit einem Datenmanagement-System die Möglichkeit, gescannte Belege mit Buchungen zu verknüpfen bzw. automatisiert verbuchen zu können.

Eine weitere Buchungsoption ist daher das Buchen mit DMS Belegen. Wurde für den Klienten die Belegverarbeitung eingerichtet, öffnet sich durch aktivieren der Option *Belegliste* ein separates Fenster mit den ungebuchten Belegen.

Die Option *automatisch* wird standardmäßig gemeinsam mit der Belegliste aktiviert. Es werden automatisch die Belegdaten des angewählten Beleges in der Belegliste in die Buchungszeile übernommen. Sie können diese Option auch deaktivieren.

&nbsp;

**HINWEIS**

Beim Öffnen der Belegliste wird automatisch ein Filter entsprechend dem Wirtschaftsjahr und Belegkreis gesetzt.

&nbsp;

**TIPP**

Genauere Informationen zur Belegverarbeitung finden Sie im Handbuch *Belegverarbeitung.* Dieses kann über den Menüpunkt *Hilfe / Handbuch / Belegverarbeitung* aufgerufen werden.

&nbsp;

&nbsp;

### Buchen von Geschäftsfällen

&nbsp;

Sie können in der FIBU Next mehrere Stapel gleichzeitig führen. Je Stapel wird ein neues Register *Buchen* geöffnet. Hier sind bereits im Titel die Anzahl der *Buchungszeilen* und das *Wirtschaftsjahr* ersichtlich.

&nbsp;

Abb. 3 Buchen

![Image](<../assets/NeuesElement34.png>)

&nbsp;

Im mittleren Bereich wird die Buchungsart (Gegen- oder Sammelbuchung), das Wirtschaftsjahr, der Belegkreis, die Kontobezeichnung und der Saldo der angegeben Konten im Soll und Haben aufgezeigt.

Anhand der mitlaufenden *Kontrollsumme*, die die Beträge im Stapel saldiert, kann die Richtigkeit der Eingaben überprüft werden.

&nbsp;

***Datum***\
Zu Beginn der Buchungszeile muss das Datum eingegeben werden. Dieses ist im angeführten Wirtschaftsjahr wählbar, es gibt im Stapel keine Einschränkung nach Buchungsmonat.

&nbsp;

Mit rechter Maustaste und Anwahl *Splitbuchung* oder mit der *F5-Taste* können Sie zu einer Splitbuchung wechseln. (siehe Kapitel [Splitbuchung](<Buchungszeile.md#Splitbuchung>))&nbsp;

Ebenfalls mit rechter Maustaste oder *F11-Taste* kann das Feld *Eingabe abw. USt-Monat* aktiviert werden.

&nbsp;

Abb. 4 Eingabe abweichendes USt-Monat

![Image](<../assets/NeuesElement33.png>)

&nbsp;

***Beleg-Nr.***\
In diesem Feld kann eine 16-stellige Belegnummer eingegeben werden. Mit rechter Maustaste oder F4 kann ein weiteres Feld zur Eingabe einer *Fremdbelegnummer* aktiviert werden.

&nbsp;

**Tipp**

Unter *Stammdaten / Belegkreise* kann für den Belegkreis festgelegt werden, dass das Eingabefeld der Fremdbelegnummer automatisch aktiviert ist.

&nbsp;

&nbsp;

***Soll/Haben***\
Hier können Sie die Konten je nach Sachverhalt eingeben. Weitere Funktionen finden Sie mit rechter Maustaste im Kontextmenü z.B. *Konto aufrufen*, *Kontenplan aufrufen*, *Konto anlegen/bearbeiten*.

&nbsp;

**Tipp**

Durch die Eingabe von K1, K2, K3, K4 bzw D1, D2, D3, D4 im Feld *Soll* oder *Haben* und anschließendes Drücken von F4, wird vom Programm automatisch der nächste freie Kreditor bzw. Debitor im jeweiligen Personenkontenkreis vorgeschlagen. D.h. über K1 wird der nächste freie Kreditor im Kreditorenkreis 1 vorgeschlagen usw.

&nbsp;

&nbsp;

***Code***\
Im Feld Code können Sie den gewünschten Steuercode eingeben. Ist in den Kontostammdaten der Aufwands- bzw. Erlöskonten ein Steuercode hinterlegt, wird dieser automatisch vorgeschlagen.

&nbsp;

Näheres zum Buchen mit Steuer bzw. den einzelnen Steuercodes finden Sie im Kapitel [Umsatzsteuer](<UMSATZSTEUER1.md>).

&nbsp;

***OP** **Nummer***\
Wenn Sie mit offener Postenverwaltung arbeiten, wird vom Programm automatisch die Belegnummer als OP-Nummer vorgeschlagen, welche aber noch geändert werden kann.&nbsp;

&nbsp;

**Tipp**

Falls mit Fremdbelegnummer gebucht wird, können Sie unter *Stammdaten / Belegkreise* für einen Belegkreis festlegen, dass die Fremdbelegnummer als OP-Nummer vorgeschlagen wird.

&nbsp;

Mit der F2-Taste können Sie im Feld *OP-Nummer* alle bestehenden offenen Posten des Personenkontos aufrufen. Auch eventuell angefügte Belege zur offenen Rechnung können über diesen Aufruf angezeigt werden ***(1)***.

&nbsp;

Abb. 5 OP Auswahl

![Image](<../assets/NeuesElement32.png>)

&nbsp;

***Text***\
Abschließend kann noch ein Buchungstext eingegeben werden. Auch hier finden Sie mit rechter Maustaste im Kontextmenü einige Optionen zur automatischen Übernahme von Kontotexten, Buchungstexten uvm.

&nbsp;

**Tipp**

Das Anlegen von standardisierten Buchungstexten (siehe Kapitel [5.10](<FIBUNextHandbuch1.md#\_Ref81486299>) [*Buchungstexte*](<FIBUNextHandbuch1.md#\_Ref81486303>)) bedeutet eine wesentliche Zeitersparnis beim Buchen, da die jeweils angelegten Buchungstexte mit der F3-Taste aufgerufen und mit der ENTER-Taste einfach übernommen werden können.

&nbsp;

&nbsp;

### Splitbuchung

&nbsp;

Die Durchführung einer Splitbuchung ist insbesondere dann vorteilhaft, wenn eine Eingangs- bzw. Ausgangsrechnung gebucht wird, bei der mehrere Sachkonten angesprochen werden oder verschiedene Steuersätze vorkommen. Es gibt bei dieser Form der Verbuchung auch die Möglichkeit Nettobeträge direkt einzugeben.

&nbsp;

Im Buchungsdialog können Sie im Feld *Datum* die F5-Taste drücken (oder die Eingabe *SP* + ENTER-Taste ist möglich) und es erscheint oberhalb der Vermerk *Splitbuchung neu*.&nbsp;

&nbsp;

Abb. 6 Splitbuchung neu

![Image](<../assets/NeuesElement31.png>)

&nbsp;

Als nächster Schritt werden das Belegdatum, die Belegnummer und das Splitsammelkonto eingegeben. Das Sammelkonto wird mit der ENTER-Taste bestätigt und anschließend der Gesamt-Bruttobetrag im Betragsfeld eingegeben.&nbsp;

Abschließend muss noch der Buchungstext eingegeben werden. Im Kontrollfeld - rechts oberhalb des Textfeldes - scheinen nun der *Rechnungsbetrag* und der noch *auszugleichende* Betrag auf.

&nbsp;

Abb. 7 Splitbuchung auszugl. Betrag

![Image](<../assets/NeuesElement30.png>)

&nbsp;

Der nächste Schritt ist die Verbuchung auf den jeweiligen Sachkonten. Sie können das Belegdatum mit der ENTER-Taste übernehmen und anschließend das Sachkonto, den Steuersatz und den auf diesem Konto zu verbuchende Bruttoteilbetrag eingeben. Auch hier ist die Soll-Buchung wieder mit der ENTER-Taste und die Haben-Buchung mit der +/HABEN-Taste abzuschließen.

Im Kontrollfeld wird der jeweils eingegebene Teilbetrag von der Gesamtsumme brutto abgezogen, der restliche noch *auszugleichende Betrag* scheint auf. Erst wenn alle Einzelbuchungen in Summe wieder den Gesamtbetrag ergeben, erfolgt durch das Programm die Abfrage, ob die Splitbuchung beendet werden soll. Bestätigen Sie diese Abfrage mit *JA*, so wird die Buchung abgeschlossen.

&nbsp;

**Hinweis**

Die Buchungen auf den jeweiligen Sachkonten können geändert werden, auch nach Abschluss der Splitbuchung. Das Sammelkonto jedoch kann nicht geändert werden.

&nbsp;

#### Verbuchung von Nettobeträgen

Bei Splitbuchungen gibt es die Möglichkeit Nettowerte einzugeben. Hierzu muss vor dem jeweiligen Steuersatz ein N eingegeben werden (z.B. N20). Dabei erfolgt die Anzeige der gebuchten Beträge in den beiden oberen Anzeigefeldern jedoch immer brutto. Durch diese Art der Verbuchung erspart man sich das Umrechnen von Netto-Teilbeträgen auf Bruttobeträge.

&nbsp;

**Hinweis**

Bei Splitbuchungen von Ein- und Ausgangsrechnungen mit unterschiedlichen Steuersätzen erfolgt bei deren Ausgleich vom Programm eine automatische Aufteilung des Skontobetrages im richtigen Verhältnis zu den einzelnen Steuersätzen.

&nbsp;

### Nullrechnung buchen

&nbsp;

Es gibt im Feld *Betrag* die Möglichkeit Nullrechnungen einzubuchen. Wählen Sie dazu im Feld *Betrag* mit der rechten Maustaste im Kontextmenü die Option *Explizit Null buchen* oder die *F9-Taste*.

&nbsp;

Abb. 8 Nullrechnung buchen

![Image](<../assets/NeuesElement29.png>)

&nbsp;

**Hinweis**

Für Nullrechnungen wird kein OP angelegt. Das Feld *OP* wird inaktiv.


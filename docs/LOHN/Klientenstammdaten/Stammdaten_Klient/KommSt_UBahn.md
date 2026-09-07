# Kommunalsteuer / U-Bahn

![Image](<img/image25.png>){width="500"}

## Kommunalsteuer

Ist der Dienstgeber grundsätzlich kommunalsteuerpflichtig, so ist dieses Feld zu aktivieren. Eventuelle Kommunalsteuerfreibeträge werden vom Programm automatisch berücksichtigt.

Im Feld *Kürzung Bem. Kommst.* kann die Kürzung der Bemessungsgrundlage für die Berechnung der Kommunalsteuer eingetragen werden. Wenn z. B. 80 % eingetragen werden, wird die Bemessungsgrundlage um 80 % gekürzt. Eine nachträgliche Eintragung während des Jahres hat keine Auswirkung auf bereits gespeicherte Abrechnungen.

In den Dienstnehmer-Stammdaten im Abrechnungsbildschirm [*Lohnsteuer*](../../Abrechnungsbildschirme/Lohnsteuer.md/#kommunalsteuer) kann eine Befreiung eines einzelnen Dienstnehmers von der Kommunalsteuer und eine Kürzung der Bemessungsgrundlage eingegeben werden.

Die erste in der Liste eingetragene Gemeinde wird für alle Dienstnehmer des Klienten verwendet. Im Abrechnungsbildschirm [*Lohnsteuer*](../../Abrechnungsbildschirme/Lohnsteuer.md/#kommunalsteuer) kann direkt beim Dienstnehmer eine andere Gemeinde zugeordnet werden.

!!! warning "Hinweis"
    Durch Anwahl des Feldes *Kommunalsteuer – Freibetrag berücksichtigen* kann die Berechnung des Freibetrages ausgeschaltet werden.

### Gemeinden

Im Feld *Gemeinde* ist die Nummer der Gemeinde einzugeben. Die [Anlage der Gemeinde](../../Finanzaemter_Gemeinden_OEGK_BV-Kassen_Gerichte.md) erfolgt im Menüpunkt *Klient / Finanzämter, Gemeinden, ÖGK, BV-Kassen, Gerichte*. Pro Klienten bzw. Unterdienstgeber können Sie bis zu 125 Gemeinden anlegen.

!!! warning "Hinweis"
    Mit der F2-Taste im Feld *Gemeinde* werden alle im Menüpunkt *Klient / Finanzämter, Gemeinden, ÖGK, BV Kassen, Gerichte* angelegten Gemeinden und im Feld *Bank* alle angelegten Bankverbindungen aufgerufen.

In den Stammdaten der Gemeinden können bis zu 9 Bankverbindungen eingegeben werden. In diesem Feld können Sie festlegen, an welche Bankverbindung der Gemeinde die Überweisung erfolgen soll.

Im Feld *Steuer-Nr.* ist die Kontonummer des Dienstgebers bei der entsprechenden Gemeinde einzugeben.

Tragen Sie im Feld *Fibu-Konto* die Kontonummer des Verbindlichkeitenkontos der Gemeinde in der Finanzbuchhaltung ein. Diese Eingabe ist erforderlich, wenn am Buchungsbeleg die entsprechende Kontierung erfolgen soll.

Im Feld *Zahlungsreferenz* können die Eintragungen für die Überweisungen vorgenommen werden. Die hier eingetragenen Kundendaten werden sowohl beim Zahlscheindruck als auch beim Elektronik-Banking verwendet.

Für die automatische Eintragung des Monats und des Jahres können Sie die Kürzel **mm, jj, jjjj** oder **j** eintragen.

!!! warning "Hinweis"
    In Ausnahmefällen kann durch Anwahl der Schaltfläche *Details* das Zahlungsreferenzfeld für jeden Monat einzeln eingetragen werden. Diese Möglichkeit kann genutzt werden, wenn die von der Behörde vergebenen Kundendatenfelder nicht systematisch aufgebaut sind.

!!! info "Tipp"
    Wird in der Zahlungsreferenz beispielsweise `KommSt 12345` eingetragen, erscheint für den Monat Juli die Zahlungsreferenz `Ko07St 12345`.
    
    Ursache dafür ist, dass `mm` als Platzhalter für den Monat interpretiert und im Juli durch `07` ersetzt wird.

    Um diese Ersetzung zu vermeiden, setzen Sie `KommSt` unter Anführungszeichen: `"KommSt" 12345`

    Dadurch wird in der Zahlungsreferenz unverändert `KommSt 12345` ausgegeben.

### Zahlungsreferenz erscheint nicht auf der Überweisungsliste

Wenn bei einer Gemeinde die Zahlungsreferenz nicht auf der Überweisungsliste erscheint, liegt das meistens daran, dass unterschiedliche Gemeindenummern hinterlegt sind.

Bitte prüfen Sie dazu die Gemeindenummer unter:

- *Stamm / Klient / KommSt, U-Bahn*
- bzw. *Stamm / Unterdienstgeber / KommSt, U-Bahn*

und vergleichen Sie diese mit der Gemeindenummer beim jeweiligen Dienstnehmer.

**Beispiel:**
In den Klientenstammdaten ist die Gemeinde 31609 hinterlegt. Beim Dienstnehmer ist jedoch eine andere Gemeindenummer (2133) eingetragen.

Auf der Überweisungsliste werden zwar der richtige Betrag und die richtige Gemeinde angezeigt, die Zahlungsreferenz wird jedoch nicht übernommen. Der Grund dafür ist, dass die beiden unterschiedlichen Gemeindenummern nicht miteinander verknüpft werden können.

**Lösung:**
Die Gemeindenummer muss entweder in den Klientenstammdaten bzw. beim Unterdienstgeber oder beim Dienstnehmer entsprechend angepasst werden.

Sobald auf beiden Seiten dieselbe Gemeindenummer hinterlegt ist, wird auch die eingetragene Zahlungsreferenz auf der Überweisungsliste verwendet.

!!! warning "Hinweis"
    Bei einer SEPA-Überweisung wird anstelle der Zahlungsreferenz der Text `NOTPROVIDED` angezeigt, wenn die beiden Gemeindenummern nicht übereinstimmen. Auch in diesem Fall ist die in diesem Abschnitt beschriebene Lösung anzuwenden.

### Kommunalsteuerschließungserklärung

Wenn eine [Kommunalsteuer-Schließungserklärung](../../Elektronische_Kommunalsteuererklaerung.md/#erstellung-einer-kommunalsteuer-schlieungserklarung) erstellt werden muss, ist im Feld *Schließung der Betriebsstätte* das Datum der Schließung des Betriebes einzutragen.

## U-Bahn-Abgabe

Hier wird festgelegt, ob der Dienstgeber grundsätzlich der U-Bahn-Abgabe in Wien unterliegt. Diese Angabe wird unter anderem für den Ausdruck der Dienstgeber-Abgaben-Erklärung benötigt.

Sollte die U-Bahn-Gemeinde von der Kommunalsteuergemeinde abweichen, ist in diesem Feld die *U-Bahn-Gemeinde* einzutragen.

Im Feld *Steuernummer* können Sie die Steuernummer für die U-Bahn-Abgabe erfassen. Weiters kann ein eigenes Verbindlichkeitenkonto für diese Abgabe eingetragen werden.

Zusätzlich muss in den Stammdaten des Dienstnehmers im Abrechnungsbildschirm [*Lohnsteuer*](../../Abrechnungsbildschirme/Lohnsteuer.md/#u-bahn-abgabe) die U-Bahn-Abgabenpflicht des Dienstnehmers festgelegt werden.
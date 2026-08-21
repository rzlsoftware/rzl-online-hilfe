---
title: Kommunalsteuer / U-Bahn
program: LOHN
---

<span id="kommunalsteuer-u-bahn" class="legacy-anchor" aria-hidden="true"></span>

![Image](<img/image25.png>){width="500"}

## Kommunalsteuer

Ist der Dienstgeber grundsätzlich kommunalsteuerpflichtig, so ist dieses Feld zu aktivieren. Eventuelle Kommunalsteuerfreibeträge werden vom Programm automatisch berücksichtigt.

Im Feld *Kürzung Bem. Kommst.* kann die Kürzung der Bemessungsgrundlage für die Berechnung der Kommunalsteuer eingetragen werden. Wenn z. B. 80 % eingetragen werden, wird die Bemessungsgrundlage um 80 % gekürzt. Eine nachträgliche Eintragung während des Jahres hat keine Auswirkung auf bereits gespeicherte Abrechnungen.

In den Dienstnehmer-Stammdaten im Abrechnungsbildschirm [*Lohnsteuer*](/lohn/abrechnungsbildschirme/lohnsteuer/) kann eine Befreiung eines einzelnen Dienstnehmers von der Kommunalsteuer und eine Kürzung der Bemessungsgrundlage eingegeben werden.

Die erste in der Liste eingetragene Gemeinde wird für alle Dienstnehmer des Klienten verwendet. Im Abrechnungsbildschirm [*Lohnsteuer*](/lohn/abrechnungsbildschirme/lohnsteuer/) kann direkt beim Dienstnehmer eine andere Gemeinde zugeordnet werden.

:::caution[Hinweis]
Durch Anwahl des Feldes *Kommunalsteuer – Freibetrag berücksichtigen* kann die Berechnung des Freibetrages ausgeschaltet werden.


:::
**Gemeinden** 

Im Feld *Gemeinde* ist die Nummer der Gemeinde einzugeben. Die [Anlage der Gemeinde](/lohn/finanzaemter-gemeinden-oegk-bv-kassen-gerichte/) erfolgt im Menüpunkt *Klient / Finanzämter, Gemeinden, ÖGK, BV-Kassen, Gerichte*. Pro Klienten bzw. Unterdienstgeber können Sie bis zu 125 Gemeinden anlegen.

:::caution[Hinweis]
Mit der F2-Taste im Feld *Gemeinde* werden alle im Menüpunkt *Klient / Finanzämter, Gemeinden, ÖGK, BV Kassen, Gerichte* angelegten Gemeinden und im Feld *Bank* alle angelegten Bankverbindungen aufgerufen.

:::
In den Stammdaten der Gemeinden können bis zu 9 Bankverbindungen eingegeben werden. In diesem Feld können Sie festlegen, an welche Bankverbindung der Gemeinde die Überweisung erfolgen soll.

Im Feld *Steuer-Nr.* ist die Kontonummer des Dienstgebers bei der entsprechenden Gemeinde einzugeben.

Tragen Sie im Feld *Fibu-Konto* die Kontonummer des Verbindlichkeitenkontos der Gemeinde in der Finanzbuchhaltung ein. Diese Eingabe ist erforderlich, wenn am Buchungsbeleg die entsprechende Kontierung erfolgen soll.

Im Feld *Zahlungsreferenz* können die Eintragungen für die Überweisungen vorgenommen werden. Die hier eingetragenen Kundendaten werden sowohl beim Zahlscheindruck als auch beim Elektronik-Banking verwendet.

Für die automatische Eintragung des Monats und des Jahres können Sie die Kürzel **mm, jj, jjjj** oder **j** eintragen.

:::caution[Hinweis]
In Ausnahmefällen kann durch Anwahl der Schaltfläche *Details* das Zahlungsreferenzfeld für jeden Monat einzeln eingetragen werden. Diese Möglichkeit kann genutzt werden, wenn die von der Behörde vergebenen Kundendatenfelder nicht systematisch aufgebaut sind.

:::
:::note[Tipp]
Wird in der Zahlungsreferenz beispielsweise `KommSt 12345` eingetragen, erscheint für den Monat Juli die Zahlungsreferenz `Ko07St 12345`.

Ursache dafür ist, dass `mm` als Platzhalter für den Monat interpretiert und im Juli durch `07` ersetzt wird.

Um diese Ersetzung zu vermeiden, setzen Sie `KommSt` unter Anführungszeichen: `"KommSt" 12345`

Dadurch wird in der Zahlungsreferenz unverändert `KommSt 12345` ausgegeben.

:::
**Kommunalsteuerschließungserklärung** 

Wenn eine [Kommunalsteuer-Schließungserklärung](/lohn/elektronische-kommunalsteuererklaerung/) erstellt werden muss, ist im Feld *Schließung der Betriebsstätte* das Datum der Schließung des Betriebes einzutragen.

## U-Bahn-Abgabe

Hier wird festgelegt, ob der Dienstgeber grundsätzlich der U-Bahn-Abgabe in Wien unterliegt. Diese Angabe wird unter anderem für den Ausdruck der Dienstgeber-Abgaben-Erklärung benötigt.

Sollte die U-Bahn-Gemeinde von der Kommunalsteuergemeinde abweichen, ist in diesem Feld die *U-Bahn-Gemeinde* einzutragen.

Im Feld *Steuernummer* können Sie die Steuernummer für die U-Bahn-Abgabe erfassen. Weiters kann ein eigenes Verbindlichkeitenkonto für diese Abgabe eingetragen werden.

Zusätzlich muss in den Stammdaten des Dienstnehmers im Abrechnungsbildschirm [*Lohnsteuer*](/lohn/abrechnungsbildschirme/lohnsteuer/) die U-Bahn-Abgabenpflicht des Dienstnehmers festgelegt werden.

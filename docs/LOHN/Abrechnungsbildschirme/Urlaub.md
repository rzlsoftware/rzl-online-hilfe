# Urlaub

![Image](<img/image126.png>)

In diesem Eingabebildschirm kann die *Urlaubskartei* des Dienstnehmers geführt werden. Der [Ausdruck der Urlaubskartei](../Ausdrucke_allgemein/Ausdruck_Abrechnungen.md) ist im *Ausdruckmenü* unter *Stammdaten* möglich. Die Eintragungen in der Urlaubskartei werden auch für die Berechnung der [Urlaubsrückstellung](../Rückstellungen/Urlaubsrueckstellung.md) verwendet. Es können wahlweise *Werktage*, *Arbeitstage* oder *Stunden* eingetragen werden.

## Allgemeine Daten

**Beginn Urlaubsjahr**

Eingabe des Beginns des Urlaubsjahres. Normalerweise ist der Beginn des Urlaubsjahres identisch mit dem Eintrittsdatum, außer es wird das Urlaubsjahr nach dem Kalenderjahr berechnet.

**Abrechnung in Werktagen, Arbeitstagen, Stunden**

Die Verwaltung der Urlaubskartei ist wahlweise in *Werktagen*, *Arbeitstagen* oder *Stunden* möglich.

**Anspruch**

Eingabe des Gesamtjahresurlaubsanspruches pro Jahr in *Werktagen*, *Arbeitstagen* oder *Stunden*.

**Anspruchsaliquotierung**

Wird dieses Auswahlfeld angewählt, wird nur während der ersten sechs Monate des Dienstverhältnisses die Aliquotierung des Urlaubsanspruchs automatisch berücksichtigt.

**Dauerhafte Anspruchsaliquotierung**

Dieses Feld ermöglicht eine dauerhafte Aliquotierung des Urlaubsanspruchs. Wird diese Option aktiviert, wird der Urlaubsanspruch für jeden Monat aliquot gerechnet und nicht nur für die ersten sechs Monate ab Eintritt, wie im Feld oberhalb.

**Dauer laut Arbeitstage Eintritt**

Im Abrechnungsbildschirm [*Eintritt*](../Abrechnungsbildschirme/Eintritt.md) können die Arbeitstage des Dienstnehmers für jeden Tag der Woche einzeln festgelegt werden. Wenn diese Eintragungen für die Ermittlung der Urlaubsdauer übernommen werden sollen, muss dieses Feld aktiviert werden.

**Anfangsstand**

Eingabe eines eventuellen Resturlaubes zu Beginn des Urlaubsjahres. Wurde mehr verbraucht als Anspruch bestand, kann auch ein negativer Anfangsbestand eingegeben werden. Diese Daten sind für die Berechnung der Urlaubsrückstellung notwendig.

**Abweichender Monatsteiler**

Hier kann für den Dienstnehmer ein *abweichender Monatsteiler* eingetragen werden. Der Monatsteiler wird für die Berechnung der [Urlaubsrückstellung](../Rückstellungen/Urlaubsrueckstellung.md) verwendet.

Wenn die Urlaubskartei nach Stunden geführt wird, hat die Eintragung des Monatsteilers **keine Auswirkungen** auf die Urlaubsrückstellung. Das Programm rechnet automatisch die Anzahl der Wochenstunden, welche im Abrechnungsbildschirm *Eintritt* eingetragen sind, auf einen vollen Monat hoch und verwendet diesen Wert als Teiler.

## Urlaubskartei

Soll die *Urlaubskartei* für den einzelnen Dienstnehmer geführt werden, ist dieses Auswahlfeld zu aktivieren. 

Wird das Feld *Sonderurlaub* aktiviert, erfolgt keine Verringerung des Urlaubsanspruches.

Auf den [Abrechnungen der Dienstnehmer](../Ausdrucke_allgemein/Ausdruck_Abrechnungen.md) kann die Urlaubskartei wahlweise normal oder im *Detail* gedruckt werden.

**In Anspruch genommener Urlaub (Eintragung des verbrauchten Urlaubes)**

Es können die in Anspruch genommenen Urlaubstage oder Stunden mit Anfang und Ende der Urlaubszeit sowie die Eingabe der verbrauchten Urlaubstage oder Stunden erfolgen.

**Einfügen einer Anspruchszeile**

Wenn ein neues Urlaubsjahr beginnt, dann wird durch Eintragung des Beginns des Urlaubsjahres in das Eingabefeld **von** und das Bestätigen der restlichen Felder ohne Eintragung, eine sogenannte *Anspruchszeile* in das Listenfeld eingetragen. Der Urlaubsanspruch, der in diese Anspruchszeile eingetragen wird, wird aus dem Feld *Urlaubsanspruch*
übernommen und je nach gewählter Option (keine Aliquotierung, Aliquotierung, dauerhafte Aliquotierung) aliquotiert.

**Verdichten von Urlaubszeilen**

![Image](<img/image127.png>)

Bestehende Zeilen können durch Anwahl der *F3-Taste* verdichtet werden. Es werden alle Zeilen oberhalb der markierten Zeile inklusive der Markierten gelöscht. Gleichzeitig wird die Eintragung im Feld *Anfangsstand* angepasst, damit der aktuelle Restsaldo der Urlaubskartei unverändert bleibt.
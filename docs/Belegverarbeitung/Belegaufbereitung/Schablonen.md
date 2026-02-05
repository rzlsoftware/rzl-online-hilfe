## Allgemeines

Schablonen dienen zur eigenen Auslesung von Werten bei den Belegdaten. Wird zu einem Beleg eine Schablone erkannt, werden die vordefinierten Regeln auf diesen Beleg übernommen und die Belegdaten werden ausgefüllt. Damit eine Schablone auf einem Beleg angewandt werden kann, muss zu allererst eine Erkennungsregel festegelegt werden.

!!! warning "Hinweis"
    Schablonen sind nur hilfreich, wenn es wiederholende Belege gibt, z.B. Ausgangsrechnungen. Dabei sollte der Aufbau immer gleich sein, da Werte zum Teil mit definierten Feldern hinterlegt sind. Sobald der Wert nicht mehr in dem Kästchen liegt, wird auch keine Wert eingetragen.

## Anlage einer Schablone

Um eine Schablone anlegen zu können, muss zunächst die Belegdatenerkennung (1) durchgeführt werden. Bei Werten die nicht korrekt sind oder anders ausgelesen werden sollten, kann dann die Schablone angelegt werden. Hierzu wird ein Wert, der eigentlich übernommen werden sollte, mit der linken Maustaste markiert (2) und mittels dem **Dokumentsymbol** rechts neben dem Feld (3) eingefügt. Danach klickt man auf das **Schablonenzeichen mit dem grünen Plus** (4).

![Erkennungsregel](<img/image1.png>)

Im Anschluss muss ein Name für die Schablone vergeben werden, hierbei kann eine bisher angelegte Schablone kopiert sowie eine Beschreibung der Schablone hinterlegt werden.

![Name der Schablone](<img/image2.png>)

### Erkennungsmerkal eines Feldes

Nachdem ein Name vergeben wurde, kann dann für den gewünschten Wert das Erkennungsmerkmal geändert werden. Neben der Benennung des Erkennungsmerkmals kann dies auch noch erstellt, ein fixer Wert hinterlegt oder gelöscht werden.
Wenn diese Regel jetzt bearbeitet wird, kann bei dem Positionsrahmen **kein Rahmen**, **fixe Position** oder **relativ zu** gewählt werden.

![Erkennungsmerkmal](<img/image3.png>)

#### kein Rahmen
Bei keinem Rahmen kann ein Format ausgewählt werden, nach was gesucht werden soll. Diese Methode ist jedoch sehr ungenau und kann falsche Werte ausgeben.

#### fixe Position
Bei der fixen Position muss der Wert immer exakt an dieser Stelle zu finden sind. Falls dies nicht der Fall sein sollte, wird kein Wert ausgewählt.

#### relativ zu
Es wird ein Suchtext benötigt, der immer bei dem gewünschten Wert vorzufinden sein muss. 

### Erkennungsregel

Nachdem die erste Regel angelegt wurde, sollte noch eine Erkennungsregel angelegt werden, falls diese nicht automatisch vom Programm vorgeschlagen wurde.
Um die Erkennungsregel zu bearbeiten, muss in der Detailansicht neben der ausgewählten Schablone, das Schablonenbearbeitungszeichen angeklickt werden.

![Schablonenbearbeitungszeichen](<img/image4.png>)

Die Erkennungsregel kann hierbei manuell oder automatisch hinterlegt werden. Wenn mehrere Erkennungsregeln benötigt werden, müssen diese händisch angelegt werden.

![Erkennungsregel1](<img/image5.png>)      ![Ausgefüllte Erkennungsregel](<img/image6.png>)

!!! info "Tipp"
    Erkennungsregeln funktionieren nur mit Werten, die immer auf dem Beleg zusehen sind. Hierbei wird vom Programm immer bei der automatischen Ermittlung die UID-Nummer eingetragen.
 


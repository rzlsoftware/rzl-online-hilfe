Mit der RZL KI Belegdatenerkennung besteht eine alternative Möglichkeit zur RZL Belegdatenerkennung, um die 
Belegdaten von Belegen auszulesen. Technische Voraussetzung ist die Installation des RZL Dienstes (siehe *RZL 
Dienst installieren* im RZL Setup Handbuch).

Die Belege werden im Zuge der KI Belegdatenerkennung zu Microsoft Azure geladen und anschließend mit den 
ausgelesenen Belegdaten und dem OCR-Text wieder abgeholt. Im Zuge des Abholens wird der Beleg bei Microsoft 
Azure wieder gelöscht.

Zusätzlich wird auf Basis der bisher gebuchten Belege ein Konto-KI-Modell angelegt und täglich in der Nacht 
aktualisiert, um das Gegenkonto des Beleges vorschlagen zu können. Die initiale Erstellung dieses Modells erfolgt 
in der Nacht nach Aktiviereung bzw. optional mit der Funktion Konto Modell sofort trainieren. Je nach 
Beleganzahl kann der erstmalige Vorgang der Erstellung dieses KI-Modells durch den RZL Dienst bis zu zwei 
Stunden dauern.

Die RZL KI Belegdatenerkennung basiert auf künstlicher Intelligenz. KI kann unrichtige Ergebnisse generieren. 
Überprüfen Sie die von der KI vorgeschlagenen Buchungssätze, bevor Sie diese abschließen.

Die RZL KI Belegdatenerkennung kann jederzeit deaktiviert werden. Nach Deaktivierung der Funktion können 
keine Belege für diesen Klienten mehr hochgeladen werden. Auf bereits entstandene Kosten hat die Deaktivierung 
keinen Einfluss.

## 1. KI Belegdatenerkennung aktivieren

### 1.1. Pro Klient aktivieren

Sie können pro Klient und pro Belegkreis steuern, ob Belege mittels KI Belegdatenerkennung ausgelesen werden sollen. Öffnen Sie den gewünschten Klienten im RZL Board und wechseln Sie in den Bereich *STAMM / Belegverarbeitung / KI Belegdatenerkennung*:

![Stamm KI](<img/image-32.png>)

Aktivieren Sie über den Button *KI Belegdatenerkennung aktivieren ① die Funktion für diesen Klienten und bestätigen Sie den Dialog mit den Nutzungsbedingungen.

### 1.2. Belegkreis aktivieren

Nach Aktivierung können Sie festlegen, bei welchen Belegkreisen Sie die Belegdatenerkennung über Microsoft 
Azure vornehmen möchten ②. 

Zusätzlich können die bisherige RZL Erkennungslogik bzw. die vorhandenen Schablonen verwendet und somit mit 
der KI kombiniert werden ③. Konkret bedeutet dies, dass bei Feldern, die von MS Azure nicht befüllt werden, die 
RZL Erkennungslogik läuft. Falls es Schablonen für einen bestimmten Beleg gibt, übersteuert dies in betroffenen 
Feldern mit vorhandener Regel die Erkennung von MS Azure bzw. kann bspw. für das Feld Buchungstext (wird von 
MS Azure nicht ausgelesen) eine Regel angelegt werden.

![Belegkreis](<img/image-33.png>)

### 1.3. Erstellung KI Gegenkonto Modell

Zusätzlich zur Erkennung der Belegdaten über Microsoft Azure wird pro Klient und Belegkreis ein KI Gegenkonto 
Modell auf Basis vergangener, gebuchter Belege erstellt. Dies bedeutet, dass nach Aktivierung der KI Belegdatenerkennung bereits gebuchte Belege zu MS Azure geladen werden, um die dafür notwendigen Informationen auszulesen (Rechnungssteller / Rechnungsempfänger, UID-Nr., Rechnungszeilen).

Initial wird dieses Modell nach Aktivierung in der kommenden Nacht bzw. mit der Funktion* Konto-Modell sofort 
trainieren* erstellt. Dies läuft im Hintergrund und kann einige Zeit (bis zu 2 Stunden) in Anspruch nehmen.

## 2. KI Belegdatenerkennung verwenden

### 2.1. Klick auf Belegdatenerkennung

Im laufenden Betrieb ändert sich bei der Bedienung des Programmes grundsätzlich nichts. Je nach Einstellung 
führt das Programm bei Ausführung der Belegdatenerkennung die RZL Belegdatenerkennung oder die KI Belegdatenerkennung aus.

Folgendes passiert bei der KI Belegdatenerkennung:

1. Der Beleg wird zu MS Azure geladen
2. Es wird eine OCR-Erkennung durchgeführt (auch handschriftliche Belege in vielen Fällen gut lesbar)
3. Die Belegdaten werden von MS Azure ausgelesen (sichtbar pro Feld durch **nach unten zeigeneden Pfeil**)
4. Die Belegdaten werden abgeholt und beim Beleg pro Feld mit einer Wahrscheinlichkeit beim Symbol *Import: Quelle KI* mit Tooltip angezeigt ④  
5. Der Beleg wird bei MS Azure wieder gelöscht
6. Das lokale KI Gegenkonto Modell wird ausgeführt und das voraussichtliche Gegenkonto im Bereich der Steuerzeilen (Gegenbuchungen) eingetragen - auch hier wird eine Wahrscheinlichkeit beim Tooltip angezeigt ⑤

![Anzeige KI](<img/image-34.png>)

### 2.2. Benutzerdefinierte Belegdatenerkennung

Mit der Funktion *Benutzerdefinierte Belegdatenerkennung* kann bei einzelnen Belegen die KI Belegdatenerkennung deaktiviert oder auch aktiviert werden, auch wenn die Einstellung im Stamm anders vorgenommen wurde.

Sie können die Funktion für diese eine Ausführung der Belegdatenerkennung zur Gänze deaktivieren oder eben für *Alle Belege* unabhängig der Einstellungen ausführen.

![Benutzerdefinierte KI](<img/image-35.png>)

### 2.3. Aktualisierung lokales KI Gegenkonto Modell

Das KI Gegenkonto Modell wird täglich in der Nacht durch den RZL Dienst aktualisiert. Es werden alle Belege, die 
im laufenden Betrieb über Microsoft Azure ausgelesen und auch bereits gebucht wurden, in das Modell aufgenommen. Somit wird die Datenbasis im Laufe des Betriebes zum Vorhersagen des Gegenkontos immer größer.
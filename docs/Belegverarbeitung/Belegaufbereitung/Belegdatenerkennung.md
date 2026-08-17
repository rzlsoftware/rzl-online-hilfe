## Allgemeines

Belegdaten können entweder in der Übersicht der Belege oder in der Ansicht des einzelnen Beleges erkannt werden.
Dabei gibt es einmal **Belegdaten erkennen** welche über alle Belege in der Übersicht läuft oder **Ausgewählte Belegdaten erkennen**. 
In der Übersicht kann man in die **Benutzerdefinierte Belegdatenerkennung** einsteigen, in dieser können Einstellungen zur Belegdatenerkennung gesetzt werden.

![Belegdatenerkennung Einstellungen](<img/image7.png>)

Nach der Durchführung der Belegdatenerkennung in der Übersicht der Belege, wird in der Listenansicht ganz rechts, das Belegdatensymbol von grau zu grün. Falls essentielle Belegdaten nicht ausgelesen werden konnten, bleibt dieses Symbol grau.

![Symbol Belegdatenerkennung](<img/image8.png>)

## Arten der Belegdatenerkennung

### RZL-Logik

Die RZL-Logik ist zuständig für die allgemeine Befüllung der Belegdaten. Diese Logik arbeitet mit der Textansicht, kann daher nur Werte auslesen, welche auch in der Textansicht vorhanden sind. Kontrolliert kann dies werden, wenn der Beleg in der Bearbeitungsoberfläche geöffnet ist und im Register **Anzeige** auf **Textansicht anzeigen** geklickt wird.

Wenn die Belegdatenerkennung durchgeführt wird, versucht die RZL-Logik zuerst einmal eine schon bestandene Schablone für einen Beleg zu finden. Dabei werden die Erkennungsregeln durchgegangen und dann korrekt zugeordnet, daraufhin werden Belegfelder wie **Belegdatum**, **Belegnummer**, **Fremdbelegnummer** sowie die **Beträge** ausgelesen.
Das Häkchen für **Gutschriften** wird in den meisten Fällen auch automatisch gesetzt, falls es in der Rechnung gekennzeichnet ist.


### E-Rechnungen

Unter E-Rechnungen versteht man digitale Rechnungen, deren Inhalt als ein strukturierter, maschinelllesbarer Datensatz dargestellt wird.
Einer der am häufigsten verwendeten Arten von E-Rechnungen, sind die ZUGFeRD-Dateien. Hierbei handelt es sich um ein hybrides Format aus PDF und XML-Datei.

Diese sogenannte ZUGFeRD-Datei sieht ganz gewöhnlich, wie ein normales PDF-Dokument aus. Im Hintergrund, in der XML-Datei, sind jedoch zahlreiche Daten gespeichert, die nur für eine Logik auslesbar sind. Genau so eine Logik wird bei der RZL Belegdatenerkennung verwendet, welche es ermöglicht, die Belegdaten direkt zu erkennen und einzutragen.

Sobald eine E-Rechnung in die Belegverarbeitung gebracht wird, wird dieser Beleg in der Listenansicht, in der Spalte **E-Rechnung** angezeigt.

![ZUGFeRD](<img/image10.png>)

### Künstliche Intelligenz (KI)

Mit der RZL KI Belegdatenerkennung besteht eine alternative Möglichkeit zur RZL Belegdatenerkennung, um die Belegdaten von Belegen auszulesen. Technische Voraussetzung ist die Installation des RZL Dienstes (siehe RZL Dienst installieren im RZL Setup Handbuch).

Die Belege werden im Zuge der KI Belegdatenerkennung zu Microsoft Azure geladen und anschließend mit den ausgelesenen Belegdaten und dem OCR-Text wieder abgeholt. Im Zuge des Abholens wird der Beleg bei Microsoft Azure wieder gelöscht.

Zusätzlich wird auf Basis der bisher gebuchten Belege ein Konto-KI-Modell angelegt und täglich in der Nacht aktualisiert, um das Gegenkonto des Beleges vorschlagen zu können. Die initiale Erstellung dieses Modells erfolgt in der Nacht nach Aktivierung bzw. optional mit der Funktion Konto Modell sofort trainieren. Je nach Beleganzahl kann der erstmalige Vorgang der Erstellung dieses KI-Modells durch den RZL Dienst bis zu zwei Stunden dauern.

Die RZL KI Belegdatenerkennung basiert auf künstlicher Intelligenz. KI kann unrichtige Ergebnisse generieren. Überprüfen Sie die von der KI vorgeschlagenen Buchungssätze, bevor Sie diese abschließen.

Die RZL KI Belegdatenerkennung kann jederzeit deaktiviert werden. Nach Deaktivierung der Funktion können keine Belege für diesen Klienten mehr hochgeladen werden. Auf bereits entstandene Kosten hat die Deaktivierung keinen Einfluss.

!!! info "Tipp"
    Sobald die KI Belegdatenerkennung aktiviert wurde, ist diese automatisch unter **Belegdaten erkennen** hinterlegt, somit gibt es keinen eigenen Button für die Durchführung der Belegerkennung mittels KI.
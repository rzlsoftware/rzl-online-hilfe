# XML Belegdatenimport Schnittstelle

## RZL Belegverarbeitung XML Belegdatenimport Schnittstelle

Als Erweiterung zum RZL FIBU/EA Modul Belegverarbeitung bietet RZL die Möglichkeit, mit dem **lizenzierungspflichtigen Zusatzmodul „RZL XML Belegdatenimport Schnittstelle“** Belege aus einem Fremdsystem **mit Belegdaten** in die RZL Belegverarbeitung zu übernehmen.

Aus dem Fremdsystem muss zusätzlich zur Belegdatei eine XML Datei mit den Belegdaten lt. XSD-Beschreibung ausgegeben werden. Die Belegdatei und die XML Datei müssen dabei mit demselben Dateinamen vorliegen, wobei die XML Datei um die Endung .xml ergänzt werden muss (z.B. „Beleg.pdf“ und „Beleg.pdf.xml“).


Folgende Möglichkeiten gibt es, diese Belege mit Belegdaten in die RZL Belegverarbeitung zu übernehmen:

### 1. Übernahme über einen Scannordner


Zur Übernahme der Belege mit Belegdaten über die Hinzufügen-Ansicht speichern Sie Ihre Belege mit den XML-Dateien in Ihren Scanordner.


![Image](<img/image-10.png>)


Beim Öffnen dieses Scanordners in der RZL Belegverarbeitung werden die Belege wie gewohnt angezeigt. Zusätzlich finden Sie im Detail bereits befüllte Belegdaten, je nach Übergabe aus dem Fremdsystem.

Diese Felder werden mit dem Importsymbol und einem Hinweis auf den Hersteller angezeigt.


![Image](<img/image-11.png>)


![Image](<img/image-12.png>)


Bei Bedarf können die Daten jederzeit ergänzt oder auch verändert werden. Bei einer Belegdatenerkennung bleiben Werte, die über die XML Datei übergeben wurden, grundsätzlich erhalten. Optional können die Werte über eine benutzerdefinierte Belegdatenerkennung mit der Funktion *RZL Belegdatenerkennung erzwingen* auch überschrieben werden.

Abschließend können Sie die Belege wie gewohnt über *Alle übernehmen* oder *Auswahl übernehmen* in die RZL Belegverarbeitung übernehmen und im der RZL FIBU/EA-Programm buchen.


### 2. Übernahme mittels Importfunktion


Alternativ können Sie Belege mit XML Belegdaten auch direkt in die Liste der ungebuchten Belege importieren (ohne Scanordner).
Speichern Sie die Belege mit XML-Belegdaten-Dateien in einen beliebigen Ordner. Starten Sie anschließend den Menüpunkt *BELEGE / Extras / Belege mit XML importieren*.


![Image](<img/image-13.png>)


Wählen Sie hier das gewünschte Verzeichnis mit den Belegen aus und klicken auf *Prüfen und Importieren*.


![Image](<img/image-14.png>) 


Die Belege stehen anschließend in der RZL Belegverarbeitung im Bereich der *ungebuchten Belege* zum Buchen zur Verfügung.
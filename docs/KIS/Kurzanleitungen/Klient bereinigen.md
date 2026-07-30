Mit der Weiterentwicklung der Bereinigungsfunktion wurde eine leistungsstarke Möglichkeit geschaffen, Datenbestände gezielt und effizient zu verwalten. Die Funktion unterstützt Sie dabei, Dokumente, Aufgaben, Ereignisse und Belege anhand individuell definierbarer Filterkriterien auszuwählen und zu bereinigen. Dadurch lassen sich nicht mehr benötigte Einträge schnell identifizieren und entfernen, wodurch die Datenbestände übersichtlich und aktuell gehalten werden können. Nachfolgend lernen Sie die Funktionsweise der Bereinigung kennen und erfahren, wie Sie die verfügbaren Filter optimal einsetzen.

Die **Klient bereinigen** Funktion ist aufrufbar im Kanzlei-Informations-System unter *KIS / Klient bereinigen / Bereinigen* sowie im RZL Board unter *KIS / Bereinigen*. Die Funktion ist ident, unabhängig davon in welchem Programm Sie diese aufrufen.

# Vorgangsweise Klient bereinigen

Auf der linken Seite des Bereinigungs-Dialogs finden Sie eine Übersicht aller Klienten. Wählen Sie hier zunächst den oder die gewünschten Klienten aus, für die die Bereinigung durchgeführt werden soll. Die zu bereinigenden Klienten können Sie mittels der typischen [RZL Listen- und Filterfunktionen](https://hilfe.rzlsoftware.at/Board/Stammdatenverwaltung%20%28STAMM%29/%C3%96ffnen%20der%20Stammdatenverwaltung/#listenfunktionen) einschränken.
Die Klienten müssen von der Liste im Bereich *Nicht ausgewählte Klienten* zu der Liste ausgewählte Klienten übergeben werden. Die Einträge müssen markiert werden und können mit Drag & Drop oder mit  ![verschieben Symbol](<img/verschieben Symbol.png>) zur Bereinigung gewählt werden.

!!! info "Tipp"
    Die Klienten können mit Maustastenklick, aber auch Umschalt + Pfeiltasten oder mit Strg + A markiert werden. Wird ein Filter angewendet und Sie verwenden Strg + A werden auch nur die gerade durch den Filter angezeigten Klienten markiert und zu den ausgewählten Klienten übergeben.

![Klienten Auswahl](<img/Übersicht.png>)

Haben Sie die gewünschten Klienten für die Bereinigung ausgewählt ist im nächsten Schritt zu definieren, was mit den verschiedensten Datentypen passieren soll.

![Bereinigungsfunktion wählen](<img/Funktionen wählen.png>)

Sie können mittels der Optionsfelder je Datentyp definieren, welche Bereinigungsfunktion Sie durchführen wollen.
In dieser Auswahl werden ausschließlich Datentypen angezeigt, für die beim Klienten Daten vorhanden sind.

!!! info "Info"
    Möchten Sie beispielsweise nur die Belege löschen ist bei Belege die Aktion *Löschen* zu wählen und für die restlichen Datentypen bleibt die Option auf *Keine Aktion*.

Mit *Weiter* können Sie außerdem Filterkriterien festlegen, welche die Bereinigung einschränken kann.
Nutzen Sie dafür das ![Info Symbol](<img/I-Symbol.png>) um Einzelheiten zu den jeweiligen Einschränkungen durch Filter zu erhalten.

![Tooltip Filter](<img/Tooltip Filter.png>)

Sie können damit erkennen für welche Datentypen die Filterung angewendet wird. Dazu stellen Sie einfach Ihren Cursor auf das ![Info Symbol](<img/I-Symbol.png>)

!!! info "Info"
    Eine Filterung des Dokumentbereichs kann nicht auf Aufgaben oder Ereignisse angewendet werden. Der Filter wird für Dokumente, Klientenportal Nachrichten (da im Klientenportal keine Nachricht ohne Auswahl des Dokumentbereichs gesendet werden kann), FinanzOnline Übermittlungen und Belege angewendet.
    **Bitte prüfen Sie daher stets die Information zu den einzelnen Filtermöglichkeiten!**

Sie erhalten mittels *Weiter* eine Zusammenfassung der zu löschenden Daten.

![Zusammenfassung](<img/Zusammenfassung.png>)

Es wird angezeigt wie viele Klienten bereinigt werden. Außerdem bei welchen Datentypen der zuvor gesetzte Filter angewendet wird und wo dieser nicht angewendet wird. Außerdem erhalten Sie einen Überblick darüber wie viele Daten pro Datentyp wirklich gelöscht werden.

Der Hinweis *"Können in einem oder mehreren Bereichen ein oder mehrere Filterkriterien nicht angewendet werden, werden alle angeführten Daten bereinigt!"* ist wie folgt zu Verstehen:

Nach der Auswahl der Klienten muss definiert werden, welche Datentypen gelöscht werden sollen. Sie haben für alle Datentypen die Aktion *Löschen* gewählt. Sie nutzen dann den Filter *Datum*, um die Bereinigung einzuschränken. Da allerdings nicht jedes Filterkriterium auf jeden Datentyp Anwendung findet werden jene Datentypen vollständig gelöscht auf denen das Filterkriterium *Datum* **nicht** angewendet werden kann. Somit werden laut obiger Abbindung der Zusammenfassung die wiederkehrenden Aufgaben und die Belege vollständig gelöscht.

Sie können jederzeit einen Schritt zurückkehren und Anpassungen vornehmen.

Die Bereinigung wird erst ausgeführt, nachdem Sie sie ausdrücklich bestätigt haben. Erst wenn Sie die Checkbox bestätigt haben, können Sie die Bereinigung durchführen.

![Bestätigung](<img/Bestätigung Löschung.png>)

# Protokoll der Bereinigung

Im Zuge der Weiterentwicklung der Bereinigungsfunktion wurde der Funktionsumfang durch die Implementierung eines zusätzlichen Features erweitert. Sie können Protokolle von vergangenen Bereinigungen aufrufen und drucken. 

Das Protokoll ist aufrufbar im Kanzlei-Informations-System unter *KIS / Klient bereinigen / Protokoll* sowie im RZL Board unter *KIS / Protokoll*.

![Protokoll Übersicht](<img/Protokoll Übersicht.png>)

In den Protokollen wird festgehalten wann, welcher Mitarbeiter eine Bereinigung durchgeführt hat. Außerdem wird je Datentyp angeführt für welche Klienten wie viele Daten bereinigt wurden und ob die Bereinigung erfolgreich war.

![Protokoll](<img/Protokoll.png>)

# Mit welcher Rolle Sie "Klient bereinigen" ausführen können

In folgenden Rollen besitzen Sie die Berechtigung zum Ausführen der Klient-bereinigen-Funktion:

![Rollen](<img/Rollen.png>)

# Klient bereinigen ohne Kanzlei-Informations-System

Wie bereits zu Beginn erwähnt, können Sie die Funktion ebenso im RZL Board unter KIS bzw. BASIS aufrufen. Außerdem kann die Funktion unter *Belege / Extras* durchgeführt werden.

!!! info "Tipp"
    Befindet sich im RZL Board ein Klient in Bearbeitung und Sie starten "Klient bereinigen", dann wird der gerade geöffnete Klient sich bereits in der Vorauswahl bei der Bereinigung. Sie können aber trotzdessen weitere Klienten hinzufügen oder den vorausgewählten Klient entfernen.







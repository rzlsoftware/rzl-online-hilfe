# Synchronisation der Belege mit dem RZL Klientenportal

## Synchronisation der Belege mit dem RZL Klientenportal

Das RZL Board bietet mit der Belegsynchronisation die Möglichkeit, digitale Belege automatisch auf das RZL Klientenportal hochzuladen und somit das digitale Belegarchiv am Klientenportal zu befüllen. Somit entfällt der manuelle Upload von Belegen in die Belegbox am Klientenportal.

Folgende Voraussetzungen müssen für die Nutzung der automatisierten RZL Belegsynchronisa-
tion gegeben sein:

• Nutzung von RZL BOARD

• Nutzung von RZL FIBU / FIBU Next oder RZL EA-Programm

• Nutzung von RZL FIBU/EA Modul Belegverarbeitung

• Nutzung des RZL Klientenportal (Basis-Modul und Modul Belege)


### 1. Einrichtung des Web-Service Benutzers für die Belegsynchronisation


Beim Klientenportal-Inhaber (Steuerberater) muss der Klientenportal Web-Service Benutzer eingerichtet sein und der jeweilige Klient für das Klientenportal aktiviert sein.

Legen Sie dazu am RZL Klientenportal ein Service-Account Passwort für die Synchronisation fest. Im Bereich *Stammdaten / Portal / Sonstige Einstellungen* können Sie ein beliebiges Passwort eintragen. Der *kanzleiweite Service-Account* dient ausschließlich der Synchronisation von Klienten-Stammdaten und Belege und hat keine weiteren Funktionen.


![Image](<img/image-15.png>)


Im Anschluss muss ein Mitarbeiter mit der Berechtigung *BELEGE / Einstellungen / Klientenportal Synchronisation Zugangsdaten verwalten* im RZL BOARD im Bereich *STAMM / Einstellungen / Klientenportal Synchronisation* das *vergebene Service-Account Passwort* (1) einmalig eintragen. Ihre Klientenportal URL wird in dieser Ansicht automatisch angezeigt. Nach Eingabe des Service-Account Passworts wird Ihnen der Funktionsstatus der Synchronisation (2) angezeigt.


![Image](<img/image-16.png>)


Im unteren Bereich dieser Ansicht ist eine Liste jener Klienten angeführt, die für das Klienten-
portal aktiviert sind und deren Stammdaten bzw. Belege nun synchronisiert werden.


### 2. Aktivierung der Belegsynchronisation zum automatischen Upload der Belege auf das RZL Klientenportal


#### 2.1. Einstellungen in der Installation der Kanzlei (Klientenportal-Inhaber)


![Image](<img/image-17.png>)


Nachdem der Webservice-Benutzer (Schritt 1) eingerichtet wurde können Sie beim Klienten die Belegsynchronisation aktivieren. Dazu setzen Sie in den Klientenstammdaten im Stamm des **RZL BOARDS** ein Häkchen bei *Belegsynchronisation aktivieren* (1). Anschließend müssen Sie noch auswählen, wie viele Vorjahre automatisch synchronisiert werden sollen (2). Zusätzlich können Sie festlegen, ob die Synchronisation automatisch im Hintergrund laufen soll oder mit Deakti-
vierung der Option *Automatisch Synchronisieren* (3) nur auf Knopfdruck.


#### 2.2 Wie funktioniert nach der Einrichtung die Beleg-Synchronisation?


Haben Sie alle notwendigen Einstellungen getroffen, werden die Belege ab dem gewählten Zeitraum für alle aktivierten Klienten automatisch im Hintergrund bei geöffnetem RZL Board alle 10 Minuten synchronisiert.

!!! info "Tipp"

    Alternativ dazu kann auch manuell jederzeit für einen bestimmten Klienten in der Liste der ungebuchten oder gebuchten Belege mit der Schaltfläche *Belege synchronisieren* (4) die Synchronisation angestoßen werden.\


![Image](<img/image-18.png>)


Sobald Sie als Steuerberater über die Belegverarbeitung einen Beleg gebucht und synchronisiert haben, kann Ihr Klient den Beleg am Klientenportal in der Belegbox aufrufen.

Im Bereich BELEGE / Extras kann über den Punkt Protokoll Belegsynchronisation ein Synchroni-
sierungs-Protokoll angezeigt werden.


### 3. Ihr Klient verwendet auch die RZL Belegverarbeitung oder macht die Belegfreigabe?


Mit der RZL Belegsynchronisation kann nicht nur die RZL Belegbox am Klientenportal automa-
tisch befüllt werden, sondern die Belege können auch zwischen verschiedenen RZL Installationen (z.B. Steuerberater und Klient) synchronisiert werden. Voraussetzung dafür ist die idente Klientennummer in beiden Installationen. Die Belege sind dadurch in beiden RZL Installationen verfügbar und können in der jeweiligen RZL Finanzbuchhaltung (oder z.B. auch im Bilanz-Programm des Steuerberaters) aufgerufen werden. Des Weiteren können Sie den Status eines Belegs (*ungebucht/gebucht bzw. mit Belegfreigabe: freigegeben/nicht freigegeben/gebucht*) in der jeweils eigenen Installation einsehen.

Somit hat sowohl der Steuerberater als auch der Klient **jederzeit Zugriff auf die digitalen Buchhaltungsbelege.** Natürlich kann die Belegsynchronisation aber auch nur am Jahresende genutzt werden, um die vom Klienten gebuchten Belege (zusammen mit den RZL Buchhaltungs-
daten) an den Steuerberater zur Erstellung des Jahresabschlusses zu „transportieren“. Mit der automatischen RZL Belegsynchronisation wird der zeitintensive Transport von Papierbelegen hinfällig.


**Einstellungen bei der Installation des Klienten (Synchronisation über Klientenportal des Steuerberaters)**

**Voraussetzungen beim Klient:**

• Nutzung von RZL FIBU- oder RZL EA-Programm (Firmenversion), falls der Klient selbst bucht

• Nutzung von RZL FIBU/EA Modul Belegverarbeitung oder Belegaufbereitung (optional mit Belegfreigabe)

• Einrichtung eines Zugangs zum Klientenportal seines RZL Steuerberaters oder Nutzung des „Klientenportals für Firmen“


In der RZL Installation des Klienten muss im Bereich der Klientenstammdaten im Register *Klientenportal die Belegsynchronisation* (3) aktiviert werden. Lesen Sie zusätzlich fest, wie viele Vorjahre synchronisiert werden sollen. 

Der Klient muss die Option Fremdes *RZL Klientenportal verwenden* (4) aktivieren und den **Benutzer-Zugang zum Klientenportal des Steuerberaters** hinterlegen, wenn über das Klien-
tenportal des Steuerberaters synchronisiert wird. Rechts neben der URL ist die Nummer des Steuerberater-Klientenportals einzutragen.

In den Feldern Benutzer und Passwort (5) sind die Zugangsdaten vom Klientenportal zu hinterlegen.


![Image](<img/image-19.png>)


Der hinterlegte Benutzer muss zwingend am **RZL Klientenportal** (siehe Abbildung unten) die Berechtigung für *Verbuchte Belege / Belegsynchronisation* **(6)** haben. 


![Image](<img/image-20.png>)


**Bitte beachten Sie:** 

Falls der Klient selbst ein Klientenportal bei RZL lizenziert hat und die Synchronisation über das RZL Klientenportal des Klienten durchgeführt wird, sind die oben beschriebenen Einstellungen umgekehrt zu treffen. Das heißt in der Kanzlei muss die Option *Fremdes RZL Klientenportal* verwenden aktiviert und der vom Klienten für Sie eingerichtete Benutzerzugang hinterlegt werden. Beim Klienten muss das *Service-Account-Passwort* eingerichtet und hinterlegt werden.


#### 3.1. Hereinspielen der FIBU Datei und Belegdaten aktualisieren


Beim automatischen Download der Belege mittels Belegsynchronisation aus dem Klientenportal werden alle Belege grundsätzlich mit dem Status heruntergeladen, den der Beleg auf der anderen Installation bzw. am Klientenportal hat. 

Wird dann der dazugehörige FIBU-Klient eingespielt und erstmalig geöffnet, wird nochmals ein Abgleich der FIBU-Buchungen mit den im Modul Belege im RZL Board vorhandenen Belege durchgeführt.

**Hinweis:** Mit der Übermittlung eines FIBU-Klienten wird keine Belegsynchronisation angestoßen bzw. mit der Übermittlung eines FIBU Klienten werden keine Belege mittransportiert!

Was passiert bei diesem Abgleich zwischen FIBU-Klient und Belege:

• Die tatsächlichen Buchungsdaten lt. FIBU werden beim jeweiligen Beleg gesetzt.

• Falls im RZL Board Belege ungebucht sind, in der FIBU allerdings bereits eine Buchung vorhanden ist, wird der Beleg als gebucht markiert.

• Falls im RZL Board ein Beleg als gebucht markiert ist, in der FIBU dazu aber keine Buchung vorhanden ist, wird der Beleg als ungebucht markiert.

• Ist in der FIBU eine Buchung vorhanden, bei der der Beleg im RZL Board fehlt, wird dies in einer Liste am Bildschirm angezeigt.


Durch dieses *Belegdaten aktualisieren* nach dem Hereinspielen eines Klienten soll sichergestellt werden, dass die Belegdaten im Modul Belege im RZL Board immer zum aktuell vorhandenen FIBU-Klienten passen.

Dies kann auch hilfreich sein, wenn z.B. eine ältere Sicherung eingespielt wird. Durch die Funktion *Belegdaten aktualisieren* werden dann Belege, die in dieser Sicherung noch nicht gebucht wurden, automatisch wieder als ungebucht markiert.

Die Funktion *Belegdaten aktualisieren* kann in der RZL FIBU auch manuell angestoßen werden *(Bearbeiten/DMS-Belegverarbeitung/Belegdaten aktualisieren).*
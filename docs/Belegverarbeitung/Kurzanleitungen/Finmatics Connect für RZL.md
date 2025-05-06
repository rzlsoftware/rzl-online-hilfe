# FINMATICS Connect für RZL
Alternativ zur Belegdaten-Erkennung über die RZL Programme besteht die Möglichkeit, die Belegdaten-Erkennung durch die **Firma Finmatics GmbH, 1070 Wien** (www.finmatics.com) mit dem Modul **Finmatics Connect für RZL** vornehmen zu lassen.

Mit Hilfe von **selbstlernender künstlicher Intelligenz (KI)** und auf Basis der angelegten Konten und bisheriger Buchungen werden von Finmatics die bereitgestellten Belege analysiert, Belegdaten ausgelesen und daraus Buchungssätze generiert und vorgeschlagen. Diese Finmatics-Buchungsvorschläge (und die verknüpften Belege) können in den RZL Programmen automatisiert weiterverarbeitet werden.

Sie benötigen dafür das **RZL FIBU/EA Modul Belegverarbeitung (dieses bedingt das RZL BOARD), die RZL FIBU Klassik oder die RZL FIBU Next** sowie das kostenpflichtige Modul **„Finmatics Connect für RZL“**.

**Folgende Schritte sind zur Einrichtung notwendig:**

1. Finmatics Zugangsdaten bei RZL hinterlegen   
   
2. Klient bzw. Belegkreise für Finmatics aktivieren   
   
3. Trainingsdaten hochladen
   
4. Aktualisierungsoptionen beim Klienten einstellen (nur FIBU Klassik)   
   
5. Belege zu Finmatics hochladen   
   
6. Beleg von Finmatics abholen   
   
7. Belege buchen und Buchungsinfos hochladen


## 1. Finmatics Zugangsdaten bei RZL hinterlegen


Die Zugangsdaten, die Sie nach Bestellung des Moduls „Finmatics Connect für RZL“ von Finmatics erhalten haben, müssen im RZL Board eingetragen werden. Die Rechte dafür hat jeder mit dem Berechtigungs-Feature *„BELEGE / Grundeinstellungen/ Belegfreigabe/OCR/Stempel/Finmatics verwalten“* bspw. mit der Rolle *Belegadministration* oder *RZL Administrator*.

Öffnen Sie im RZL Board den Menüpunkt *STAMM / Einstellungen / Finmatics*. In den Feldern *Benutzername* und *Passwort* tragen Sie die Daten von Finmatics ein. Bei richtig eingetragenen Daten wird ein Häkchen *Zugriff auf Finmatics* möglich angezeigt.


![Image](<img/image-21.png>)


## 2. Klienten/Belegkreise aktivieren

**Aktivierung für Finmatics ①:**

In den Klienten-Stammdaten unter *STAMM / Belegverarbeitung* beim jeweiligen Klienten im Bereich *Finmatics* kann nun Finmatics aktiviert werden. 

Zusätzlich können Sie festlegen, welche Belegkreise **②** des jeweiligen FIBU Klienten mit welcher Buchungskategorie bei Finmatics angelegt werden sollen. 

Standardmäßig werden folgende Belegkreise angelegt: ER Eingangsrechnungen, AR Ausgangsrechnungen, KA Kassa.

Falls Sie weitere Belegkreise benötigen sind diese vorher in der FIBU / FIBU Next / EA anzulegen. Anschließend werden diese hier angezeigt und können aktiviert werden. 

Sie haben somit die Möglichkeit bspw. über einen Scanordner die Belege mit den aktivierten Belegkreisen zu Finmatics zu übertragen.


![Image](<img/image-22.png>)


**Aktivierung für das RZL Klientenportal:**


Sollen Belege, die ein Klient über das RZL Klientenportal zu Ihnen überträgt, direkt vom Klientenportal zu Finmatics übertragen werden, kann dies im Bereich *Belegverarbeitung / Allgemeines* festgelegt werden.


Aktivieren Sie zuerst den jeweiligen Belegkreis (hier z.B. SP Sparkasse) **③** für das Klientenportal. Anschließend können Sie in der rechten Spalte diesen Belegkreis am Klientenportal auch für Finmatics **④** aktivieren.


![Image](<img/image-23.png>)


Damit die Information zum RZL Klientenportal hochgeladen werden kann, muss die Stammdaten-Synchronisation eingerichtet sein. Hinterlegen Sie dazu im Bereich *STAMM / Einstellungen / Klientenportal-Synchronisation* die Daten für den Web-Service Benutzer des RZL Klientenportals. 

Details dazu finden Sie in einer extra Kurzanleitung *Synchronisation der RZL Board Klientenstammdaten zum RZL Klientenportal unter Hilfe / Kurzanleitungen.*

Die Aktivierung von Finmatics beim Klienten hat folgende Auswirkungen:

• Der Klient wird bei Finmatics mit allen notwendigen Stammdaten angelegt (Klientennummer, Name, Adresse, Kontenlänge, UID-Nummer).

• Die aktivierten Belegkreise werden bei Finmatics angelegt.

• Sie können über einen Scanordner Belegkreise mit aktivierten Belegkreisen zu Finmatics übertragen.

• Belege, die über das Klientenportal (z.B. vom Klienten) hochgeladen werden, landen je nach Einstellung des jeweiligen Belegkreises entweder direkt beim RZL Steuerberater am RZL Klientenportal oder werden zur Erkennung zu Finmatics hochgeladen. Diese Einstellung gilt am Klientenportal für den Menüpunkt *Belegbox / Belege übermitteln* als auch für den Belegscanmanager unter *Belegbox / Belegscanmanager.*


## 3. Trainingsdaten zu Finmatics hochladen

Die Qualität der erkannten Belegdaten und Buchungsvorschläge hängt sehr stark von bisher erfassten Buchungen ab. Daher müssen initial einmalig Trainingsdaten zu Finmatics hochgeladen werden.


**FIBU Klassik (in 2 Schritten):**

Starten Sie dazu in der RZL Finanzbuchhaltung Klassik den Menüpunkt *Bearbeiten / DMS-Belegverarbeitung / Finmatics trainieren.* Hier können Sie zuerst den Kontenplan (Sachkonten und Personenkonten, auch Kostenstellen und Kostenträger) und in einem zweiten Schritt die Buchungen des aktuellen Wirtschaftsjahres zu Finmatics hochladen. Zum Hochladen von Trainingsdaten muss ein eventuell nicht finalisierter Stapel finalisiert werden.


HINWEIS
Das Hochladen der Trainingsdaten kann einige Zeit in Anspruch nehmen. Bitte brechen Sie den Dialog nicht ab!


![Image](<img/image-24.png>)


*FIBU Next:*

Direkt in den Klienten-Stammdaten im *RZL Board* unter *STAMM / Belegverarbeitung / Finmatics* können Sie mit der Funktion *Finmatics initial trainieren* **①** den Kontenplan des aktuellsten Wirtschaftsjahres (Sachkonten und Personenkonten) sowie die Buchungen des aktuellen Wirtschaftsjahres und des Vorjahres zu Finmatics hochladen.


![Image](<img/image-25.png>)


## 4. Aktualisierungsoptionen beim Klienten einstellen (nur FIBU Klassik)


Bei jedem Klienten, der mit Belegverarbeitung gebucht wird, empfehlen wir dringend, die automatische Aktualisierung der Personenkonten zu aktivieren.

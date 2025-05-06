# Finmatics Connect für RZL
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


Die Zugangsdaten, die Sie nach Bestellung des Moduls „Finmatics Connect für RZL“ von Finmatics erhalten haben, müssen im RZL Board eingetragen werden. Die Rechte dafür hat jeder mit dem Berechtigungs-Feature *„BELEGE / Grundeinstellungen / Belegfreigabe / OCR /Stempel / Finmatics verwalten“* bspw. mit der Rolle *Belegadministration* oder *RZL Administrator*.

Öffnen Sie im RZL Board den Menüpunkt *STAMM / Einstellungen / Finmatics*. In den Feldern *Benutzername* und *Passwort* tragen Sie die Daten von Finmatics ein. Bei richtig eingetragenen Daten wird ein Häkchen *Zugriff auf Finmatics* möglich angezeigt.


![Image](<img/image-21.png>)


## 2. Klienten/Belegkreise aktivieren

**Aktivierung für Finmatics ①:**

In den Klienten-Stammdaten unter *STAMM / Belegverarbeitung* beim jeweiligen Klienten im Bereich *Finmatics* kann nun Finmatics aktiviert werden. 

Zusätzlich können Sie festlegen, welche Belegkreise **②** des jeweiligen FIBU Klienten mit welcher Buchungskategorie bei Finmatics angelegt werden sollen. 

Standardmäßig werden folgende Belegkreise angelegt: ER Eingangsrechnungen, AR Ausgangs- rechnungen, KA Kassa.

Falls Sie weitere Belegkreise benötigen sind diese vorher in der FIBU / FIBU Next / EA anzulegen. Anschließend werden diese hier angezeigt und können aktiviert werden. 

Sie haben somit die Möglichkeit bspw. über einen Scanordner die Belege mit den aktivierten Belegkreisen zu Finmatics zu übertragen.


![Image](<img/image-22.png>)


**Aktivierung für das RZL Klientenportal:**


Sollen Belege, die ein Klient über das RZL Klientenportal zu Ihnen überträgt, direkt vom Klientenportal zu Finmatics übertragen werden, kann dies im Bereich *Belegverarbeitung / Allgemeines* festgelegt werden.


Aktivieren Sie zuerst den jeweiligen Belegkreis (hier z.B. SP Sparkasse) **③** für das Klientenportal. Anschließend können Sie in der rechten Spalte diesen Belegkreis am Klientenportal auch für Finmatics **④** aktivieren.


![Image](<img/image-23.png>)


Damit die Information zum RZL Klientenportal hochgeladen werden kann, muss die Stammdaten-Synchronisation eingerichtet sein. Hinterlegen Sie dazu im Bereich *STAMM / Einstellungen / Klientenportal-Synchronisation* die Daten für den Web-Service Benutzer des RZL Klientenportals. 

Details dazu finden Sie in einer extra Kurzanleitung *Synchronisation der RZL Board Klientenstammdaten zum RZL Klientenportal unter Hilfe / Kurzanleitungen.*

**Die Aktivierung von Finmatics beim Klienten hat folgende Auswirkungen:**

- Der Klient wird bei Finmatics mit allen notwendigen Stammdaten angelegt (Klientennummer, Name, Adresse, Kontenlänge, UID-Nummer).

- Die aktivierten Belegkreise werden bei Finmatics angelegt.

- Sie können über einen Scanordner Belegkreise mit aktivierten Belegkreisen zu Finmatics übertragen.

- Belege, die über das Klientenportal (z.B. vom Klienten) hochgeladen werden, landen je nach Einstellung des jeweiligen Belegkreises entweder direkt beim RZL Steuerberater am RZL Klientenportal oder werden zur Erkennung zu Finmatics hochgeladen. Diese Einstellung gilt am Klientenportal für den Menüpunkt *Belegbox / Belege übermitteln* als auch für den Belegscanmanager unter *Belegbox / Belegscanmanager.*


## 3. Trainingsdaten zu Finmatics hochladen

Die Qualität der erkannten Belegdaten und Buchungsvorschläge hängt sehr stark von bisher erfassten Buchungen ab. Daher müssen initial einmalig Trainingsdaten zu Finmatics hochgeladen werden.


**FIBU Klassik (in 2 Schritten):**

Starten Sie dazu in der RZL Finanzbuchhaltung Klassik den Menüpunkt *Bearbeiten / DMS-Belegverarbeitung / Finmatics trainieren.* Hier können Sie zuerst den Kontenplan (Sachkonten und Personenkonten, auch Kostenstellen und Kostenträger) und in einem zweiten Schritt die Buchungen des aktuellen Wirtschaftsjahres zu Finmatics hochladen. Zum Hochladen von Trainingsdaten muss ein eventuell nicht finalisierter Stapel finalisiert werden.


!!! warning "Hinweis"
    Das Hochladen der Trainingsdaten kann einige Zeit in Anspruch nehmen. Bitte brechen Sie den Dialog nicht ab!



![Image](<img/image-24.png>)


**FIBU Next:**

Direkt in den Klienten-Stammdaten im *RZL Board* unter *STAMM / Belegverarbeitung / Finmatics* können Sie mit der Funktion *Finmatics initial trainieren* **①** den Kontenplan des aktuellsten Wirtschaftsjahres (Sachkonten und Personenkonten) sowie die Buchungen des aktuellen Wirtschaftsjahres und des Vorjahres zu Finmatics hochladen.


![Image](<img/image-25.png>)


## 4. Aktualisierungsoptionen beim Klienten einstellen (nur FIBU Klassik)


Bei jedem Klienten, der mit Belegverarbeitung gebucht wird, empfehlen wir dringend, die automatische Aktualisierung der Personenkonten zu aktivieren.

Starten Sie in der RZL Finanzbuchhaltung Klassik bzw. EA-Rechnung den Menüpunkt *Stamm / Konten / Aktualisierungsoptionen*. Hier kann eingestellt werden, dass nach einer DMS-Buchung folgende am Beleg ausgelesenen Daten automatisch am Konto hinterlegt werden:

- IBAN

- Kundennummer

- UID-Nummer

Nach erfolgreicher, automatischer Hinterlegung dieser Daten werden die Informationen nach dem Buchen wieder zu Finmatics übertragen.

!!! warning "Hinweis"
    Diese Daten sind entscheidend für eine erfolgreiche Zuordnung eines Beleges zu einem Personenkonto!

In der FIBU Next wird diese Aktualisierung der Stammdaten ohne extra Einstellung vorgenommen.


## 5. Belege zu Finmatics hochladen


Nach Aktivierung in den Klienten-Stammdaten und erfolgreichem Hochladen der Trainingsdaten können Belege zu Finmatics hochgeladen werden.

Folgende Möglichkeiten gibt es dazu:

1. Belege werden vom Klienten **über das Klientenportal** hochgeladen:
   Dazu melden Sie bzw. Ihr Klient sich mit einem Klienten-Zugang am RZL Klientenportal an und laden Belege entweder über *Belegbox / Belege übermitteln* oder über *Belegbox / Belegscanmanager* hoch. Je nach Einstellung pro Belegkreis im Klientenstamm im RZL Board landen die Belege dann entweder direkt bei RZL am Klientenportal oder bei Finmatics.
   Falls die Belege noch auf das Klientenportal geladen wurden, können diese beim Abholen vom Klientenportal im RZL Board sofort zu Finmatics weitergeleitet werden.

2. Belege werden in der Kanzlei gescannt und **im RZL Board** zu Finmatics hochgeladen:
   Im RZL Board z.B. in einem Scanordner gibt es zwei Schaltflächen, um Belege direkt in der RZL Belegverarbeitung zu Finmatics hochzuladen.


   ![Image](<img/image-26.png>)


Die hochgeladenen Belege werden nun analysiert und sind kurze Zeit später mit den erkannten Belegdaten und Buchungsvorschlägen abholbereit. Falls Sie die manuelle Kontrolle von Belegen, die von der künstlichen Intelligenz nicht vollständig ausgelesen wurden, aktiviert haben, können diese Belege spätestens 24 Stunden später mit den vollständigen Daten abgeholt werden. Sie können die Belege aber jederzeit vorab schon mit den bereits vorhandenen Belegdaten abholen.

!!! info "Tipp"
    Deaktivieren Sie die OCR-Erkennung am Scanner, falls diese derzeit aktiviert ist.


## 6. Belege von Finmatics abholen


Hochgeladenen Belege können nun jederzeit in der RZL Belegverarbeitung abgeholt werden. Öffnen Sie dazu im RZL Board den jeweiligen Klienten und wechseln Sie in den Bereich *BELEGE*. Wählen Sie hier den Eintrag *Belege Finmatics* ①.


![Image](<img/image-27.png>)


Die RZL Belegverarbeitung zeigt nun alle bei Finmatics noch nicht abgeholten Belege, unabhängig vom Bearbeitungsstatus, an. In der *Seitenansicht* ② wird eine Vorschau aller Belege angezeigt, in der *Listenansicht* ③ eine Liste der Belege mit den Belegdaten von Finmatics und in der *Detailansicht* das Detail zum markierten Beleg (unter anderem im Registerblatt Gegenbuchungen das Gegenkonto, das von Finmatics vorgeschlagen wird ④).

!!! warning "Hinweis"
    Beim Öffnen dieser Ansicht werden die Belege noch nicht tatsächlich abgeholt und bei Finmatics noch nicht als exportiert markiert. Dies passiert erst beim Übernehmen der Belege ins RZL Board. D.h. wenn die Ansicht wieder geschlossen wird, wird am Status der Belege nichts verändert.


![Image](<img/image-28.png>)


!!! warning "Hinweis"
    Bei Ausführung einer RZL Belegdatenerkennung werden die ausgelesenen Belegdaten von Finmatics NICHT verworfen!


In den Spalten *Bearbeitungsstatus* und *Bestätigt* durch wird der aktuelle Status pro Beleg angezeigt ⑤.

Bearbeitungsstatus:
- Fertig

- In Arbeit

- Qualitätskontrolle (Dauer bis 24 h)

- Fehler

Bestätigt durch:

- Unvollständig

    ... wenn Bearbeitungsstatus *Fertig*: Beleg konnte nicht vollständig ausgelesen werden, z.B. Zuordnung zu Personenkonto fehlt

    ... wenn Bearbeitungsstatus *in Arbeit*: Beleg wurde noch nicht vollständig bearbeitet und ist deshalb noch *Unvollständig*

- Finmatics

    ... Finmatics konnte den Beleg vollständig auslesen.

- Buchhalter

    ... Der Beleg wurde auf der Weboberfläche von Finmatics manuell bestätigt.


Zum Hinzufügen der Belege wählen Sie nun im Bereich Belege übernehmen ⑥ den Menüpunkt Alle übernehmen oder Auswahl übernehmen. Die Belege werden nun bei Finmatics als exportiert markiert und in die RZL Belegverarbeitung übernommen. Beim nächsten Abruf von Belegen scheinen diese Belege nicht mehr auf.

Die Belege finden Sie nun im Bereich Belege / ungebuchte Belege ⑦. Diese Belege können nun in der RZL Finanzbuchhaltung (Klassik oder Next) bzw. im RZL Einnahmen/Ausgaben Programm gebucht werden.


![Image](<img/image-29.png>)


## 7. Belege buchen und Buchungsinfos hochladen


FIBU Klassik:

Über die Menüpunkte *Buchen / Belegsverbuchung aus DMS-System* bzw. *Buchen / Buchen* können die von Finmatics übernommenen Belege nun gebucht werden.


FIBU Next:

Über die Menüpunkte *Erfassen / Belege* bzw. *Erfassen / Buchen* können die von Finmatics übernommenen Belege nun gebucht werden.


!!! warning "Hinweis"
    Eine in der RZL FIBU Klassik / EA Klassik angelegte Verbuchungsregel am Personenkonto übersteuert den Vorschlag des Gegenkontos von Finmatics.


Nach dem Buchen der Belege werden sowohl in der FIBU Klassik als auch in der FIBU Next neue bzw. geänderte Personenkonten sowie die Buchungsinfos automatisch im Hintergrund wieder zu Finmatics hochgeladen, um die Erkennung der Belegdaten über die Künstliche Intelligenz weiter zu verbessern.


## 8. Finmatics bei einem EA-Rechner nutzen


Die Belegdatenerkennung von Finmatics kann auch bei Einnahmen/Ausgaben-Rechnern verwendet werden. **Hinweis:** eine automatische Zuordnung von Belegen gibt es derzeit nur in der FIBU /EA Klassik.


Folgender Arbeitsablauf am Beispiel eines Bankkontos wird von uns empfohlen:

1. Die Rechnungen mit den richtigen Belegkreisen zu Finmatics übertragen, mit denen die Bank- bzw. Kassa-Belege gebucht werden (Belegkreise im Stamm des Klienten für Finmatics aktivieren).
   
2. Belegdatenerkennung bei Finmatics wird durchgeführt.
   
3. Belege von Finmatics abholen.
   
4. Nur FIBU Klassik: 
   In den Stammdaten des Bankkontos im Registerblatt *Retourdaten 2* die Option *Beleg automatisch zuordnen* aktivieren. Mit dieser Option werden Belege, bei denen der Betrag und der IBAN, die Zahlungsreferenz bzw. die Belegnummer des Belegs mit den Daten der Bankbuchung übereinstimmen bzw. im Verwendungszweck gefunden werden, automatisch zugeordnet.

5. Beim Verarbeiten eines camt53-Kontoauszugs wählen Sie in der FIBU Klassik im Vordialog die Option *DMS-Belege*, in der FIBU Next im Buchungsdialog Belegliste. Somit wird zusätzlich zum Dialog der Bankbuchungen ① eine Liste der vorhandenen Belege ② dieses Belegkreises angezeigt. Es wird nun in der FIBU Klassik versucht, die Belege automatisch den Bankbuchungen zuzuordnen. Zum manuellen Zuordnen der restlichen Belege (FIBU Klassik und FIBU Next) empfehlen wir, die Belegliste nach Betrag ③ zu sortieren, um schnell den richtigen Beleg zur jeweiligen Bankbuchung finden zu können.

6. Manuelles Zuordnen:

    a. FIBU Klassik: 

    Zum manuellen Zuordnen zur Bankbuchung markieren Sie den gewünschten Beleg in der Belegliste und ordnen bei der Buchungszeile mit Umschalt + F7 bzw. mit der rechten Maustaste den Beleg der Buchung zu ④. Bereits zugeordnete Belege werden in der Belegliste in einem eigenen Bereich *Bereits zugeordnet* angezeigt. Erst beim Verbuchen des Kontoauszugs werden die Belege in der Belegverarbeitung als *Gebucht* markiert und somit unter *Gebuchte Belege* angezeigt.

    b. FIBU Next: 
    
    Hier können Sie den Beleg aus der Belegliste (oder auch aus dem Windows Explorer oder einem E-Mail-Anhang im Outlook) einfach per Drag & Drop auf die Buchungszeile ziehen. Alternativ nutzen Sie die Funktion *Beleg zuordnen* in der Funktionsleiste ⑤. In der FIBU Next verschwinden die Belege somit aus der Belegliste, da diese unmittelbar als *Gebucht* markiert werden.


**FIBU Klassik:**


![Image](<img/image-30.png>)


**FIBU Next:**


![Image](<img/image-31.png>)


## 9. Allgemeines

Für die Belegdaten-Erkennung und die bereitgestellten Buchungsvorschläge ist ausschließlich die Firma Finmatics 
GmbH, 1070 Wien verantwortlich.
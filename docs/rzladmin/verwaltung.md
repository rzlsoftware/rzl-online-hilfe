# Verwaltung

![Wartung](img/Verwaltung_Menuepunkt.png)

**In diesem Bereich finden Sie die RZL Online-Lizenzierung und Möglichkeiten zur Grundeinstellung,
Upload - Möglichkeiten von Daten, Prüfungsmöglichkeiten und Optionen zur Konfiguration der 
verschiedenen Anwendungen und Installationen.**

Der Verwaltungsbereich ist in 10 weitere Einzel-Bereiche untergliedert die im Folgenden 
erläutert werden:
## Wartung
Unter *Wartung* können Sie die Fernwartung (via Teamviewer) für den RZL Kundensupport
freigeben. Weitere Schaltflächen bieten Ihnen die Möglichkeit, Protokolle
und Log-Dateien für die genaue Fehleruntersuchung hochzuladen.
![Wartung](img/Verwaltung_Wartung.png)

- **Fernwartung starten** 
  
  ![Wartung](img/Verwaltung_Fernwartung.png)

  Hier kann in 3 Schritten für Supportzwecke die Fernwartung über den Teamviewer gestartet werden.
  *(Die Fernwartung kann ebenfalls direkt in den RZL Programmen unter dem Reiter Hilfe aufgerufen 
  werden*)

I)*Benutzerkontensteuerung zulassen (JA / NEIN)*

![Wartung](img/Verwaltung_Fernwartung_1.png)

II) *Teamviewer Lizenzabkommen und Bedingungen akzeptieren und bestätigen*
![Wartung](img/Verwaltung_Fernwartung_2.png)

III)*Teamviewer ID und Passwort angeben 
    (wird vom Support Mitarbeiter abgefragt um eine Verbindung zum PC herstellen zu können)*

![Wartung](img/Verwaltung_Fernwartung_3.png) 


- **RZL Log-Dateien hochladen**
        ![Wartung](img/Verwaltung_Log%20Datein%20hochladen.png)

    Hier können ihre Log-Dateien an RZL übermittelt werden, im Anschluss bekommen Sie eine Erfolgsmeldung.

    ![Wartung](img/Verwaltung_Log-Dateien_Erfolgsmeldung.png)

- **Windows-Ereignisanzeige hochladen**
        ![Wartung](<img/Verwaltung_Ereignisanzeige hochladen.png>)
  
    Hier kann die Ereignisanzeige direkt an RZL hochgeladen werden. Optional kann ausgewählt werden ob die Ereignisse gefiltert oder ungefiltert versendet werden sollen. 
      
- **RZL Setup Protokolle hochladen**
  ![Wartung](<img/Verwaltung_Setup Protokolle.png>)

    Mit Hilfe dieses Werkzeugs können die Protokolle die bei der Durchführung des Updates geschrieben werden, für Supportzwecke, an den Server von RZL, hochgeladen werden.
  
- **Datei hochladen**
  
    ![Wartung](<img/Verwaltung_Wartung_Dateien hochladen.png>)

    Über das Verzeichnis können hier selbst ausgewählte Dateien an RZL übermittelt werden. (Sicherungsdateien, Dump Dateien, etc.)

- **Ordnerstruktur der RZL Programme hochladen**
  ![Wartung](<img/Verwaltung_Wartung_Ordnerstruktur hochladen.png>)

    Dieser Button lädt direkt die gesamte Ordnerstruktur des Programmverzeichnisses der RZL Programme hoch. 

## Lizenzierung
![Lizenzierung](img/Verwaltung_Lizenzierung.png)

**Beim Öffnen des Lizenzmanagers kann die Lizenzierung mittels Anwendernummer und Lizenzpassworts durchgeführt werden.**

![Wartung](img/Verwaltung_Lizenzierung_Zugangsdaten.png)

**Des Weiteren kann hier die Lizenz, im Falle eines Rechner – oder Servertauschs, zurückgelegt werden.**

![Wartung](<img/Verwaltung_Lizenierung_Lizenzen bearbeiten.png>)

**Man erhält Informationen über den Lizenztyp die Anwendernummer und die Anzahl der benutzen Lizenzen in der jeweiligen Organisation.**

## Allgemeine Datenbank-Einstellungen und Funktionen

![Allgemeine DB-Einstellungen](img/Verwaltung_DBEinstellungen.png)

Dieser Punkt bietet Ihnen verschiedene Einstellungs- und Prüfungsmöglichkeiten für die Datenbank (optional). 
!!! warning "Hinweis"  
    Einige Optionen sollten nur nach direkter Anweisung durch Support Mitarbeiter von RZL ausgeführt werden.


- **Datenbank auf die neueste Version aktualisieren**

![Wartung](<img/Verwaltung_allgemeine DBEinstellungen_DB aktualisieren.png>)

Beim Ausführen dieses Befehls erhält man folgende Hinweismeldung:

![Wartung](<img/Verwaltung_allgemeine DBEinstellungen_DB aktualisieren_2.png>)

Nach erfolgreicher Aktualisierung erhält man folgende Meldung:

![Wartung](<img/Verwaltung_allgemeine DBEinstellungen_DB aktualisiert.png>)

- **Ausstehende Aktualisierungen prüfen**
![Wartung](<img/Verwaltung_allgemeine DBEinstellungen_DB Prüfen.png>)

Dieser Befehl sollte nur in Ausnahmefällen nach Aufforderung des Supports ausgeführt werden.
(Wenn im Falle eines Setups die Programme zwar aktualsiert wurden aber die SQL-Instanz nicht)

- **Rechte zum Aktualisieren einer neuen Version prüfen**
![Wartung](<img/Verwaltung_allgemeine DBEinstellungen_Rechte Prüfung.png>)

Hier kann überprüft werden ob von einem Arbeitsplatz aus mittels vorhandener Berechtigungen ein Update eingespielt 
werden darf.
![Wartung](<img/Verwaltung_allgemeine DBEinstellungen_Rechte Prüfung_Erfolg.png>)

- **RZL Dienst Benutzer auf Datenbank berechtigen**
  
![Wartung](<img/Verwaltung_allgemeine DBEinstellungen_RZL Dienst berechtigen.png>)

Über diesem Button kann der RZL Dienst (optional) auf der Datenbank berechtigt werden.
Die Einstellungen können auch manuell über das SQL Management Studio gesetzt werden (siehe dazu auch *Berechtigungskonzept*)

![Wartung](<img/Verwaltung_allgemeine DBEinstellungen_RZL Dienst berechtigen_erfolgsmeldung.png>)

- **Transaktions-Log der Datenbank verkleinern**
  
  ![Wartung](<img/Verwaltung_allgemeine DBEinstellungen_Transaktionslog.png>)

  Dieser Befehl kann ausgeführt werden, wenn die Daten der Datenbank aus verschiedenen Gründen zunehmen, meist wenn Konfigurationen der Datenbank selbst nicht sauber gesetzt worden sind.

  ![Wartung](<img/Verwaltung_allgemeine DBEinstellungen_Transaktionslog_Erfolg.png>)

- **Einzelbenutzermodus/Mehrbenutzermodus**
  
- **SQL Index Wartung**

- **SQL Statistik Wartung**
  


## RZL Kanzlei-Informations-System

Hier können Sie für das Programm *KIS* das Standardlayout des aktuellen
Benutzers zurücksetzen.

![KIS](img/Verwaltung_KISEinstellungen.png)

## RZL Board Einstellungen

Für das Programm *Board* können Sie im RZL Admin folgende Einstellungen setzen:

![Board Einstellungen](img/Verwaltung_BoardEinstellungen.png)

## DSGVO

Das DSGVO-Protokoll kann hier geöffnet und exportiert werden.

![DSGVO](img/Verwaltung_DSGVOProtokoll.png)

## Anonymisierung

Mitarbeiternamen, die an RZL als Teil eines Fehlerberichts übermittelt werden,
sind anonymisiert. Mit dieser Funktion kann man den tatsächlichen Mitarbeiter
bestimmen, falls das bei der Fehlersuche hilft.

![Anonymisierung](img/Verwaltung_Anonymisierung.png)

## RZL PDF-Drucker / Manager-Druckertreiber

In dieser Rubrik können bestimmte Druckertreiber installiert werden. Wenn der
Treiber bereits vorhanden ist, wird dieser durch das Ausführen der Installation
automatisch entfernt und erneut installiert. Es besteht ebenfalls die
Möglichkeit, den Dienst für die Druckwarteschlange neu zu starten.

Für jede der folgenden Funktionen werden Administratorrechte benötigt.

![Druckertreiber](img/Verwaltung_Druckertreiber.png)

## Abbilddatei hochladen

Hier in der Tabelle werden alle offenen RZL Programme angezeigt. Eine Abbilddatei
dieser Programme kann mittels der Funktion (rot markiert) an RZL gesendet werden.

![Abbilddatei hochladen](img/Verwaltung_AbbilddateiHochladen.png)

Durch den blau markierten Schalter werden nur Prozesse des angemeldeten Benutzers
angezeigt. Sollte man diesen Schalter betätigen, werden alle auf dem Rechner
laufenden Prozesse (z. B. RZL Diagnose Dienst) angezeigt.
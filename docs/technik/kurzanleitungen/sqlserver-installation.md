# SQL-Server Installation

In dieser Dokumentation wird die Installation und Konfiguration des SQL Servers beschrieben, damit dieser von den RZL Programmen verwendet werden kann.

!!! warning "Hinweis"
    Diese Anleitung richtet sich primär an IT-Techniker. Bei einer fehlerhaften Installation besteht das Risiko, dass die RZL Programme nicht wie erwartet funktionieren oder ausfallen können.


## Allgemeines

!!! warning "Hinweis" 
    - **SQL Server Version** bezieht sich auf den Entwicklungsstand und das Veröffentlichungsdatum des SQL Servers (z.B.: 2019, 2022, …).  
    - **SQL Server Edition** bezieht sich auf die Variante des SQL Servers, die für unterschiedliche Nutzungsszenarien und Leistungsanforderungen konzipiert ist (Express, Standard, …).

Bitte prüfen Sie zuerst die benötigten Hardware- und Softwareanforderungen der SQL Server Version, die Sie installieren möchten. Es wird empfohlen, die aktuellste – von RZL freigegebene – SQL Server Version (aktuell: SQL Server 2022) zu installieren.

Standardmäßig setzt RZL die kostenfreie Express Edition des SQL Servers voraus. Aufgrund der [Skalierungslimits](https://learn.microsoft.com/de-de/sql/sql-server/editions-and-components-of-sql-server-2022?view=sql-server-ver16#scale-limits){:target="_blank"} kann es jedoch notwendig sein, dass für Ihre Installation die kostenpflichtige Standard Edition notwendig ist. Näheres dazu finden Sie auch in der Kurzanleitung [Technische Unterschiede zwischen SQL Server Express und SQL Server Standard](unterschied-sqlexpress-sqlstandard.md).

RZL stellt aus lizenzrechtlichen Gründen – mit Ausnahme von SQL Server Express – keine Installationsdateien für die unterschiedlichen SQL Server Editionen zur Verfügung.

### Download SQL Server 2022 Express Advanced

- [Deutsch (empfohlen)](https://download.microsoft.com/download/6/d/f/6df2ef5b-235c-4b38-89cb-d3d98797dbfc/SQLEXPRADV_x64_DEU.exe){:target="_blank"}
- [Englisch](https://download.microsoft.com/download/3/8/d/38de7036-2433-4207-8eae-06e247e17b25/SQLEXPRADV_x64_ENU.exe){:target="_blank"}


## Installation einer neuen SQL Server Instanz

!!! warning "Hinweis"
    Die folgenden Schritte wurden mit dem Setup für SQL Server 2022 Standard (deutsch) auf einem Windows Server 2022 (deutsch) durchgeführt. Die Anleitung ist auch für andere Versionen und Editionen des SQL Servers gültig, es kann jedoch sein, dass einzelne Schritte abweichen.

1. **Mounten des Installationsmediums (ISO-Datei)**  
    Rechtsklick auf die ISO-Datei → **Bereitstellen**  
    Anschließend öffnet sich der Windows Explorer mit dem gemounteten Laufwerk.  
    Starten Sie die Datei `setup.exe`.

2. **Fehlermeldung zum regionalen Format**  
    Das deutsche Installationspaket setzt das regionale Format **Deutsch (Deutschland)** voraus und ist mit **Deutsch (Österreich)** nicht kompatibel.  
    - Unter **Start → Einstellungen → Zeit und Sprache → Region** ändern Sie das regionale Format auf **Deutsch (Deutschland)**.
    - Starten Sie das Setup erneut.

    !!! warning "Hinweis"
        Nach der erfolgreichen Installation können Sie das regionale Format wieder auf **Deutsch (Österreich)** ändern. Die Änderung hat keinen Einfluss auf den Betrieb des SQL Servers.

3. **Im Installationscenter**  
    Wählen Sie **Installation → Neue eigenständige SQL Server-Installation oder Hinzufügen von Funktionen zu einer vorhandenen Installation**.

4. **Product Key eingeben**  
    Geben Sie einen gültigen Product Key für die Standard Edition ein und wählen Sie die entsprechende Option.

5. **Lizenzbedingungen akzeptieren**  
    Akzeptieren Sie die Lizenzbedingungen und fahren Sie fort.

6. **Installationsregeln**  
    Es werden Installationsregeln ausgeführt, um potenzielle Probleme vorab zu identifizieren. Eine Warnung bei der Regel **Windows-Firewall** kann vorerst ignoriert werden. Die Einrichtung der notwendigen Firewall-Regeln folgt später.

7. **Azure-Erweiterung für SQL Server**  
    Deaktivieren Sie die Option und gehen Sie weiter.

8. **Funktionsauswahl**  
    Wählen Sie mindestens:
    - **Datenbank-Engine-Dienste**
    - **Volltext- und semantische Extraktion für die Suche**  
    Weitere Funktionen können bei Bedarf installiert werden. Die Verzeichnisse können beliebig angepasst werden.

9. **Instanzkonfiguration**  
    Wählen Sie **Benannte Instanz** und legen Sie einen Namen für die neue SQL Server Instanz fest. Für die Instanz-ID vergeben Sie den gleichen Namen.

!!! warning "Hinweis"
    Der Name der Instanz kann frei gewählt werden. Stellen Sie sicher, dass Name und Instanz-ID identisch sind.
    Standardmäßig "SQLEXPRESS_RZL" oder SQL_RZL.

10. **Serverkonfiguration**  
     Im Reiter **Dienstkonten** stellen Sie bei den Diensten **SQL Server-Datenbankmodul** und **SQL Server-Browser** den Starttyp auf **Automatisch**. Die anderen Einstellungen können auf dem Standardwert belassen werden.

11. **Datenbank-Engine-Konfiguration**  
     - **Serverkonfiguration:**  
        Authentifizierungsmodus auf **Windows-Authentifizierungsmodus** festlegen und den aktuellen Benutzer (meist der lokale Administrator) als SQL Server Administrator hinzufügen. Weitere Benutzer können hinzugefügt werden (z.B. Domänen-Admin).
     - **Datenverzeichnisse:**  
        Verzeichnisse für neue Datenbanken, Protokolle und Sicherungen können angepasst werden.
     - **TempDB, MaxDOP, Arbeitsspeicher:**  
        Standardeinstellungen beibehalten.
     - **FILESTREAM:**  
        Alle verfügbaren Optionen aktivieren. Bei **Windows-Freigabename** den gleichen Wert wie bei Schritt 9 verwenden.

12. **Zusammenfassung und Installation**  
     Überprüfen Sie die Zusammenfassung und klicken Sie auf **Installieren**.

13. **Installationsbericht**  
     Nach Abschluss erhalten Sie einen Bericht über die installierten Funktionen.

14. **Installation abschließen**  
     Beenden Sie die Installation und schließen Sie das Installationscenter. Fahren Sie mit der Installation des aktuellsten kumulativen Updates fort.


## Installation des aktuellsten kumulativen Updates für SQL Server

Microsoft veröffentlicht regelmäßig kumulative Updates für die unterschiedlichen SQL Server Versionen mit Bugfixes, Sicherheitsupdates und Leistungsverbesserungen. Es wird empfohlen, immer das aktuellste kumulative Update zu installieren und regelmäßig auf neue Updates zu prüfen.   

Unter [Informationen zu den neuesten SQL Server Builds](https://learn.microsoft.com/de-de/troubleshoot/sql/releases/download-and-install-latest-updates){:target="_blank"} stellt Microsoft eine Übersicht zu den Updates bereit.

1. Laden Sie das aktuellste kumulative Update für Ihre SQL Server Version herunter und starten Sie die Installation.
2. Akzeptieren Sie die Lizenzbedingungen und fahren Sie fort.
3. Wählen Sie die SQL Server Instanz aus, für die das Update installiert werden soll.
4. Fahren Sie mit der Installation fort. Nach Abschluss erhalten Sie einen Bericht.
5. Beenden Sie die Installation.


## Konfiguration der Netzwerkprotokolle und Firewall-Regeln

Um von anderen Geräten auf die SQL Server Instanz zugreifen zu können, müssen die Netzwerkprotokolle der Instanz und Firewall-Regeln am Server konfiguriert werden.

### Netzwerkprotokolle einrichten

1. Öffnen Sie den **SQL Server 2022-Konfigurations-Manager** unter **Start → Microsoft SQL Server 2022**.
2. Wählen Sie unter **SQL Server-Netzwerkkonfiguration** den Eintrag **Protokolle für 'RZL_SQL'** und öffnen Sie die Eigenschaften für das Protokoll **TCP/IP**.
3. Im Reiter **Protokoll** die Option **Aktiviert** auf **Ja** setzen.
4. Im Reiter **IP-Adressen** ans Ende scrollen. In der Gruppierung **IPAll** muss ein dynamischer Port hinterlegt sein und bei **TCP-Port** darf kein Wert eingetragen sein. Falls nicht, Wert bei **TCP-Port** löschen und bei **Dynamische TCP-Ports** den Wert `0` eintragen.
5. Mit **OK** bestätigen. Die Änderungen werden erst nach Neustart des SQL Server-Dienstes wirksam.
6. Unter **SQL Server-Dienste** den Eintrag **SQL Server (RZL_SQL)** auswählen und den Dienst neu starten.
7. Das Netzwerkprotokoll ist jetzt erfolgreich konfiguriert.


### Firewall-Regeln einrichten

Es werden zwei Firewall-Regeln benötigt:  
- Eine für den SQL Server-Dienst  
- Eine für den SQL Server-Browser

**Einstellungen der beiden Firewall-Regeln:**

| Dienst             | Regeltyp | Programmpfad                                                                  | Aktion              | Profil | Name                        |
| ------------------ | -------- | ----------------------------------------------------------------------------- | ------------------- | ------ | --------------------------- |
| SQL Server-Dienst  | Programm | `%ProgramFiles%\Microsoft SQL Server\MSSQL16.RZL_SQL\MSSQL\Binn\sqlservr.exe` | Verbindung zulassen | Domäne | MS SQL Server (RZL)         |
| SQL Server-Browser | Programm | `%ProgramFiles% (x86)\Microsoft SQL Server\90\Shared\sqlbrowser.exe`          | Verbindung zulassen | Domäne | MS SQL Server Browser (RZL) |

**Vorgehen:**

1. Öffnen Sie **Windows Defender Firewall mit erweiterter Sicherheit** unter **Start → Windows-Verwaltungsprogramme**.
2. Wählen Sie **Eingehende Regeln** und legen Sie unter **Aktionen** eine neue Regel an.
3. Wählen Sie bei **Regeltyp** den Wert **Programm**.
4. Hinterlegen Sie bei **Programmpfad** die Datei `sqlservr.exe` der zuvor installierten SQL Server Instanz, z.B.:  
    `%ProgramFiles%\Microsoft SQL Server\MSSQL16.RZL_SQL\MSSQL\Binn\sqlservr.exe`
5. Wählen Sie das Profil (**Domäne** ist normalerweise ausreichend. Bei VPN-Verbindungen kann es abweichen).

!!! warning "Hinweis"
    Unter **Start → Windows-Sicherheit** können Sie einsehen, wie eine Netzwerkbindung von Windows kategorisiert wird.

6. Vergeben Sie für die Firewall-Regel einen Namen.
7. Für die zweite Regel gehen Sie genauso vor (siehe Einstellungen oben).


## Installation des SQL Server Management Studios

Das **SQL Server Management Studio (SSMS)** bietet eine grafische Oberfläche zur Verwaltung des SQL Servers und der Datenbanken, zum Ausführen von SQL-Abfragen und zur Überwachung der Serverleistung. Zur einfacheren Konfiguration wird empfohlen, das SSMS zu installieren.

### Download SQL Server Management Studio

- [Deutsch (empfohlen)](https://learn.microsoft.com/de-de/ssms/install/install){:target="_blank"}
- [Englisch](https://learn.microsoft.com/en-us/ssms/install/install){:target="_blank"}

1. Laden Sie die bevorzugte Sprache des SSMS herunter und installieren Sie es.
2. Nach der Installation ist ein Neustart des Geräts notwendig.


## Verbindungsaufbau zur SQL Server Instanz

1. Nach dem Neustart starten Sie das **SQL Server Management Studio** unter **Start → Microsoft SQL Server Tools**.
2. Im Dialog geben Sie den Servernamen der SQL Server Instanz ein und wählen bei **Verschlüsselung** die Option **Optional**.
3. Sie sollten jetzt mit der SQL Server Instanz verbunden sein.

!!! warning "Hinweis"
    Der Standardwert für Verschlüsselung ist seit SQL Server Management Studio **Obligatorisch**. Grund ist die zunehmende Anzahl von Cloud-Installationen des SQL Servers und die Kommunikation übers Internet. Bei einer Installation im Intranet ist eine Verschlüsselung nicht notwendig und auch technisch nicht einfach umzusetzen, da es meistens keine öffentliche Domäne gibt, für die ein Zertifikat ausgestellt werden könnte.
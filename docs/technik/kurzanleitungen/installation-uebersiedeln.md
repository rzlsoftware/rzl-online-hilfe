# Installation mit Datenbank und Dokumentenverwaltung

!!! warning "Hinweis"
    Diese Anleitung ist nur anzuwenden, wenn die RZL Komplettsicherung nicht verwendet werden kann.
    Für die empfohlene Standardvorgehensweise mit der Komplettsicherung siehe:
    [RZL Daten sichern](../../setup/daten-sichern.md)

!!! warning "Hinweis"
    Verwenden Sie diese Anleitung ausschließlich in den folgenden Fällen:

    - Die Datenmenge übersteigt **200 GB**
    - Die Komplettsicherung schlägt mit nicht korrigierbaren Meldungen fehl
    - Die bestehende Hardware ist defekt oder veraltet und eine Datenrettung ist erforderlich

Diese Anleitung beschreibt, wie Sie eine Installation mit einer bestehenden Datenbank auf einen neuen Server oder ein neues Verzeichnis übersiedeln.

## Technische Vorraussetzungen
Bevor Sie mit der Migration beginnen prüfen Sie umbedingt ein die geplante Umgebung den Vorrausetztungen der RZL Programme enspricht.
[Die technischen Vorrausetzungen finden Sie auf unserer Homepage &#8599;](https://rzlsoftware.at/rzl-lizenzbestimmungen){:target="_blank"}

## Grundinstallation
Wir setzen auf der neuen Umgebung eine Grundinstallation vorraus in die Daten wiederhergestellt werden. Hier können Sie genau wie bei einer Neuinstallation vorgehen. [Hierzu pürfen Sie bitte die Ersten Schritte zur Installation](../erste-schritte.md)

## Daten ermitteln / wiederherstellen
Folgende Verzeichnisse und Dateien müssen für die Rekonstruktion der RZL Installation organisiert werden:  

- RZL_Datarepository unter älteren Installationen RZLWin    
- Dokumentenverwaltung  
- SQL-Datenbank (samt Filestream bei Dokumentenverwaltung Plus)  

## RZL_Datarepository ermitteln
Standardmäßig liegt das Repository in folgenden Verzeichnissen

Einzelplatzinstallation:   `C:\ProgramData\RZL Software\RZL_Datarepository`
Netzwerkinstallationen:    `R:\RZL_Datarepository`

Der Pfad zum Datarepository kann auch im RZL-Admin unter Information zur Installation abgelesen werden.
Zudem kann der Pfad der Datei config.ini entnommen werden.

Pfad: `C:\Program Files (x86)\RZL Software\RZLWin\config.ini`

## Dokumente der klassichen Dokumentnverwaltung ermitteln und verschieben
Standardmäßig befinden sich die Dokumente/Belege in einem Unterordner des Datarepository (z. B. `R:\RZL_DataRepository\RZL_DOKUMENTE`). Diese müssen nicht zwingend separat migriert werden.
 Sie können jedoch den Speicherort für die rekonstruierte Installation anpassen indem Sie die Datei RZLDb.ini im INI-Ordner des Datarepository bearbeiten.

**Beispiel für die Anpassung:**
```ini
[DMS]
DocumentRoot = D:\RZL\Docs
```
Es sind lokale Laufwerkspfade, Netzlaufwerkspfade und UNC-Pfade möglich.   

**Vorgehen:**   
1. Beenden Sie alle RZL Programme  
2. Fügen Sie den Eintrag in der RZLDb.ini hinzu  
3. Verschieben Sie ...\RZL_DOKUMENTE auf das neue System  
4. Prüfen Sie, ob NTFS-Rechte bearbeitet werden müssen  
5. Testen Sie, ob die Dokumente aus den RZL Programmen geöffnet werden können  

## SQL-Datenbank ermitteln und migrieren
1. Sichern Sie die bestehende Datenbank über den RZL-Admin oder mittels SQL Server Management Studio
   1. Sichern Sie die Datenbank laut Dokumentation [Sicherung](../../rzladmin/sicherung.md)
   2. Alternativ, laden Sie das aktuelle [SQL-Server Management Studio &#8599;](https://learn.microsoft.com/de-de/ssms/install/install){:target="_blank"} herunter.
   3. Sichern Sie die Datenbank laut [Microsoft-Dokumentation &#8599;](https://learn.microsoft.com/de-de/sql/relational-databases/backup-restore/quickstart-backup-restore-database?view=sql-server-ver17&tabs=ssms){:target="_blank"}
2. Kopieren Sie die Backupdatei auf den neuen Server.
3. Stellen Sie die Datenbank laut Dokumentation [Daten Wiederherstellen](../../rzladmin/wiederherstellen.md) bzw. laut der offiziellen [Microsoft Dokumentation &#8599;](https://learn.microsoft.com/de-de/sql/relational-databases/backup-restore/quickstart-backup-restore-database?view=sql-server-ver17&tabs=ssms){:target="_blank"} wieder her.

## Änderung bei neuer Domäne
Hierzu können Sie die Dokumentation [SQL-Server Berechtigungskonzept](sqlserver-berechtigungskonzept.md) anwenden, um entsprechende Änderungen in der Datenbank vorzunehmen.